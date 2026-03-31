const toggleEnabled = document.getElementById('toggleEnabled');
const togglePosts = document.getElementById('togglePosts');
const statusEl = document.getElementById('status');
const openOptionsBtn = document.getElementById('openOptions');

const DEFAULTS = {
  enabled: true,
  enablePostTranslate: true,
  provider: 'microsoft',
  microsoftApiKey: '',
  deeplApiKey: ''
};

function setStatus(state) {
  const providerLabel = state.provider === 'deepl' ? 'DeepL' : 'Microsoft Translator';
  const ready = (state.provider === 'deepl' ? !!state.deeplApiKey : !!state.microsoftApiKey);
  statusEl.textContent = `状態: ${state.enabled ? 'ON' : 'OFF'} / 翻訳ボタン: ${state.enablePostTranslate ? 'ON' : 'OFF'} / API: ${providerLabel}${ready ? '' : '（未設定）'}`;
}

async function reloadActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  if (activeTab && activeTab.id) chrome.tabs.reload(activeTab.id);
}

chrome.storage.local.get(DEFAULTS).then((state) => {
  toggleEnabled.checked = !!state.enabled;
  togglePosts.checked = !!state.enablePostTranslate;
  setStatus(state);
});

toggleEnabled.addEventListener('change', async () => {
  await chrome.storage.local.set({ enabled: toggleEnabled.checked });
  const state = await chrome.storage.local.get(DEFAULTS);
  setStatus(state);
  reloadActiveTab();
});

togglePosts.addEventListener('change', async () => {
  await chrome.storage.local.set({ enablePostTranslate: togglePosts.checked });
  const state = await chrome.storage.local.get(DEFAULTS);
  setStatus(state);
  reloadActiveTab();
});

openOptionsBtn.addEventListener('click', () => chrome.runtime.openOptionsPage());
