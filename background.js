const DEFAULTS = {
  enabled: true,
  enablePostTranslate: true,
  provider: 'microsoft',
  targetLang: 'ja',
  microsoftApiKey: '',
  microsoftRegion: '',
  microsoftEndpoint: 'https://api.cognitive.microsofttranslator.com',
  deeplApiKey: '',
  customDictionary: '{}'
};

const cache = new Map();

chrome.runtime.onInstalled.addListener(async () => {
  const current = await chrome.storage.local.get(DEFAULTS);
  await chrome.storage.local.set({ ...DEFAULTS, ...current });
});

async function getSettings() {
  return chrome.storage.local.get(DEFAULTS);
}

function makeCacheKey(provider, targetLang, text) {
  return `${provider}::${targetLang}::${text}`;
}

async function translateWithMicrosoft(texts, settings) {
  const endpoint = (settings.microsoftEndpoint || DEFAULTS.microsoftEndpoint).replace(/\/$/, '');
  const url = `${endpoint}/translate?api-version=3.0&to=${encodeURIComponent(settings.targetLang || 'ja')}`;
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': settings.microsoftApiKey
  };
  if (settings.microsoftRegion) headers['Ocp-Apim-Subscription-Region'] = settings.microsoftRegion;
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(texts.map((text) => ({ Text: text })))
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Microsoft Translator error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return data.map((item) => item?.translations?.[0]?.text || '');
}

async function translateWithDeepL(texts, settings) {
  const authKey = settings.deeplApiKey || '';
  const endpoint = authKey.endsWith(':fx') ? 'https://api-free.deepl.com/v2/translate' : 'https://api.deepl.com/v2/translate';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${authKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: texts, target_lang: (settings.targetLang || 'ja').toUpperCase() })
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`DeepL error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  return (data.translations || []).map((item) => item?.text || '');
}

async function translateTexts(texts, settings) {
  const provider = settings.provider || 'microsoft';
  if (provider === 'deepl') {
    if (!settings.deeplApiKey) throw new Error('DeepL APIキーが未設定です');
    return translateWithDeepL(texts, settings);
  }
  if (!settings.microsoftApiKey) throw new Error('Microsoft Translator APIキーが未設定です');
  return translateWithMicrosoft(texts, settings);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== 'translateBatch') return;
  (async () => {
    try {
      const settings = await getSettings();
      const provider = settings.provider || 'microsoft';
      const targetLang = settings.targetLang || 'ja';
      const texts = Array.isArray(message.texts) ? message.texts.map((x) => String(x || '')) : [];
      const results = new Array(texts.length);
      const uncachedTexts = [];
      const uncachedIndexes = [];

      texts.forEach((text, idx) => {
        const key = makeCacheKey(provider, targetLang, text);
        if (cache.has(key)) {
          results[idx] = cache.get(key);
        } else {
          uncachedTexts.push(text);
          uncachedIndexes.push(idx);
        }
      });

      if (uncachedTexts.length) {
        const translated = await translateTexts(uncachedTexts, settings);
        translated.forEach((value, i) => {
          const originalText = uncachedTexts[i];
          const translatedText = value || originalText;
          const key = makeCacheKey(provider, targetLang, originalText);
          cache.set(key, translatedText);
          results[uncachedIndexes[i]] = translatedText;
        });
      }

      sendResponse({ ok: true, translations: results });
    } catch (error) {
      console.error(error);
      sendResponse({ ok: false, error: String(error?.message || error) });
    }
  })();
  return true;
});
