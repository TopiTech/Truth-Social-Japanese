const DEFAULTS = {
  enabled: true,
  enablePostTranslate: true,
  provider: 'microsoft',
  targetLang: 'ja',
  microsoftApiKey: '',
  microsoftRegion: '',
  deeplApiKey: '',
  customDictionary: '{\n  "ReTruth": "リトゥルース",\n  "ReTruths": "リトゥルース",\n  "Truth": "トゥルース",\n  "Truths": "トゥルース",\n  "Groups": "グループ",\n  "Community Notes": "コミュニティノート"\n}'
};

const $ = (id) => document.getElementById(id);
const statusEl = $('status');

async function load() {
  const data = await chrome.storage.local.get(DEFAULTS);
  $('enabled').checked = !!data.enabled;
  $('enablePostTranslate').checked = !!data.enablePostTranslate;
  $('provider').value = data.provider || 'microsoft';
  $('targetLang').value = data.targetLang || 'ja';
  $('microsoftApiKey').value = data.microsoftApiKey || '';
  $('microsoftRegion').value = data.microsoftRegion || '';
  $('deeplApiKey').value = data.deeplApiKey || '';
  $('customDictionary').value = data.customDictionary || DEFAULTS.customDictionary;
}

async function save() {
  const customDictionary = $('customDictionary').value.trim();
  try {
    JSON.parse(customDictionary || '{}');
  } catch (e) {
    statusEl.textContent = '保存失敗: 追加辞書のJSON形式が正しくありません。';
    statusEl.style.color = '#b91c1c';
    return;
  }
  await chrome.storage.local.set({
    enabled: $('enabled').checked,
    enablePostTranslate: $('enablePostTranslate').checked,
    provider: $('provider').value,
    targetLang: $('targetLang').value,
    microsoftApiKey: $('microsoftApiKey').value.trim(),
    microsoftRegion: $('microsoftRegion').value.trim(),
    deeplApiKey: $('deeplApiKey').value.trim(),
    customDictionary
  });
  statusEl.textContent = '保存しました。必要なら Truth Social のタブを再読み込みしてください。';
  statusEl.style.color = '#0f766e';
}

async function reloadTruthSocialTab() {
  const tabs = await chrome.tabs.query({});
  const target = tabs.find(tab => tab.url && /https:\/\/(.+\.)?truthsocial\.com\//.test(tab.url));
  if (target?.id) {
    await chrome.tabs.reload(target.id);
    statusEl.textContent = 'Truth Social タブを再読み込みしました。';
    statusEl.style.color = '#0f766e';
  } else {
    statusEl.textContent = 'Truth Social のタブが見つかりませんでした。';
    statusEl.style.color = '#b45309';
  }
}

$('saveBtn').addEventListener('click', save);
$('reloadBtn').addEventListener('click', reloadTruthSocialTab);
load();
