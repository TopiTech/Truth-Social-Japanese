(() => {
  const SETTINGS_DEFAULTS = {
    enabled: true,
    enablePostTranslate: true,
    provider: 'microsoft',
    targetLang: 'ja',
    customDictionary: '{}'
  };

  const BUILTIN_DICTIONARY = {
    'Home': 'ホーム',
    'Search': '検索',
    'Explore': '見つける',
    'Discover': '発見',
    'Notifications': '通知',
    'Messages': 'メッセージ',
    'Bookmarks': 'ブックマーク',
    'Profile': 'プロフィール',
    'Lists': 'リスト',
    'Communities': 'コミュニティ',
    'Settings': '設定',
    'More': 'もっと見る',
    'Post': '投稿',
    'Post now': '今すぐ投稿',
    'Create post': '投稿を作成',
    'Reply': '返信',
    'Replies': '返信',
    'Replying to': '返信先',
    'Repost': 'リポスト',
    'Reposts': 'リポスト',
    'Quote': '引用',
    'Quote post': '引用投稿',
    'Like': 'いいね',
    'Likes': 'いいね',
    'Share': '共有',
    'Following': 'フォロー中',
    'Followers': 'フォロワー',
    'Follow': 'フォロー',
    'Unfollow': 'フォロー解除',
    'Media': 'メディア',
    'Posts': '投稿',
    'Thread': 'スレッド',
    'Edit profile': 'プロフィールを編集',
    'View profile': 'プロフィールを見る',
    'See more': 'もっと見る',
    'Show more': 'さらに表示',
    'Show less': '表示を減らす',
    'Translate': '翻訳',
    'Translate post': '投稿を翻訳',
    'Show translation': '翻訳を表示',
    'Hide translation': '翻訳を隠す',
    'Who to follow': 'おすすめユーザー',
    'Trending': 'トレンド',
    'Latest': '最新',
    'Top': 'トップ',
    'For you': 'おすすめ',
    'Live': 'ライブ',
    'Verified': '認証済み',
    'Joined': '参加日',
    'Sign out': 'サインアウト',
    'Log out': 'ログアウト',
    'Log in': 'ログイン',
    'Sign up': '登録',
    'Create account': 'アカウント作成',
    'Email': 'メールアドレス',
    'Password': 'パスワード',
    'Username': 'ユーザー名',
    'Display name': '表示名',
    'Save': '保存',
    'Cancel': 'キャンセル',
    'Delete': '削除',
    'Edit': '編集',
    'Close': '閉じる',
    'Open': '開く',
    'Submit': '送信',
    'Confirm': '確認',
    'Done': '完了',
    'Next': '次へ',
    'Back': '戻る',
    'Retry': '再試行',
    'Mute': 'ミュート',
    'Block': 'ブロック',
    'Report': '報告',
    'Copy link': 'リンクをコピー',
    'Open in new tab': '新しいタブで開く',
    'Send message': 'メッセージを送る',
    'Search Truth Social': 'Truth Social を検索',
    "What's happening?": 'いまどうしてる？',
    'Write your reply': '返信を入力',
    'Add another post': '投稿を追加',
    'Add photos': '画像を追加',
    'Add video': '動画を追加',
    'Add poll': '投票を追加',
    'Emoji': '絵文字',
    'Everyone can reply': '全員が返信可能',
    'People you follow': 'フォロー中の人',
    'Only people you mention': 'メンションした人のみ',
    'Search users': 'ユーザーを検索',
    'Pinned': '固定表示',
    'Pinned post': '固定された投稿',
    'Sensitive content': 'センシティブな内容',
    'Show': '表示',
    'Hide': '非表示',
    'View': '表示',
    'Read more': '続きを読む',
    'Continue reading': '続きを読む',
    'Show thread': 'スレッドを表示',
    'View conversation': '会話を表示',
    'View post': '投稿を見る',
    'Go to post': '投稿へ移動',
    'Open post': '投稿を開く',
    'Pinned by author': '投稿者が固定',
    'Suggested users': 'おすすめユーザー',
    'Suggested': 'おすすめ',
    'Sponsored': 'スポンサー',
    'Drafts': '下書き',
    'Audience': '公開範囲',
    'Public': '公開',
    'Private': '非公開',
    'Not now': '今はしない',
    'Continue': '続行',
    'Learn more': '詳細を見る',
    'Refresh': '更新',
    'See all': 'すべて見る',
    'General': '一般',
    'Privacy': 'プライバシー',
    'Security': 'セキュリティ',
    'Accessibility': 'アクセシビリティ',
    'Language': '言語',
    'English': '英語',
    'Japanese': '日本語',
    'No results': '結果がありません',
    'Try again': '再度お試しください',
    'Loading…': '読み込み中…',
    'Loading...': '読み込み中…',
    'Share post': '投稿を共有',
    'Delete post': '投稿を削除',
    'Edit post': '投稿を編集',
    'Pin to profile': 'プロフィールに固定',
    'Unpin from profile': 'プロフィールの固定を解除',
    'Copy post link': '投稿リンクをコピー',
    'Report post': '投稿を報告',
    'View analytics': '分析を見る',
    'Open menu': 'メニューを開く',
    'Close menu': 'メニューを閉じる',
    'New message': '新しいメッセージ',
    'Compose': '作成',
    'Send': '送信',
    'Uploading': 'アップロード中',
    'Uploaded': 'アップロード済み',
    'Failed': '失敗しました',
    'Success': '成功',
    'People': 'ユーザー',
    'News': 'ニュース',
    'Videos': '動画',
    'Images': '画像',
    'Trending now': '現在のトレンド',
    'Recommended': 'おすすめ',
    'Suggested for you': 'あなたへのおすすめ',
    'Translated': '翻訳済み',
    'Original': '原文',
    'Open options': '設定を開く',
    'Subscribe': '購読する',
    'Alerts': 'アラート',
    'Groups': 'グループ',
    'Feeds': 'フィード',
    'ReTruth': 'リトゥルース',
    'ReTruths': 'リトゥルース',
    'Truth': 'トゥルース',
    'Truths': 'トゥルース',
    'Community Notes': 'コミュニティノート'
  };

  const ATTRS = ['aria-label', 'title', 'placeholder'];
  const IGNORE_SELECTOR = '[data-tsjp-ignore="1"], .tsjp-translation-host, .tsjp-translate-btn-wrap';
  const stateByContainer = new WeakMap();
  const translatedUiTextNodes = new WeakMap();
  let SETTINGS = { ...SETTINGS_DEFAULTS };
  let DICTIONARY = { ...BUILTIN_DICTIONARY };
  let DICTIONARY_KEYS = Object.keys(BUILTIN_DICTIONARY).sort((a, b) => b.length - a.length);
  let observer = null;

  function normalize(text) {
    return String(text || '').replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function parseCustomDictionary(value) {
    if (!value) return {};
    try {
      const obj = JSON.parse(value);
      return (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : {};
    } catch {
      return {};
    }
  }

  function rebuildDictionary() {
    DICTIONARY = { ...BUILTIN_DICTIONARY, ...parseCustomDictionary(SETTINGS.customDictionary) };
    DICTIONARY_KEYS = Object.keys(DICTIONARY).sort((a, b) => b.length - a.length);
  }

  function ensureStyle() {
    if (document.getElementById('tsjp-style')) return;
    const style = document.createElement('style');
    style.id = 'tsjp-style';
    style.textContent = `
      .tsjp-translate-btn-wrap {
        display: flex;
        justify-content: flex-end;
        margin: 10px 0 0;
      }
      .tsjp-translate-btn {
        appearance: none;
        border: 1px solid rgba(37,99,235,.20);
        background: linear-gradient(180deg, rgba(239,246,255,.96), rgba(219,234,254,.96));
        color: #1d4ed8;
        border-radius: 999px;
        padding: 6px 12px;
        font-size: 12px;
        line-height: 1.3;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(30,64,175,.08);
      }
      .tsjp-translate-btn:hover { background: linear-gradient(180deg, rgba(219,234,254,.98), rgba(191,219,254,.98)); }
      .tsjp-translate-btn[disabled] { opacity: .72; cursor: wait; }
      .tsjp-translation-host { display:block; margin-top:10px; }
      .tsjp-translation-panel {
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transform: translateY(-4px);
        transition: max-height .28s ease, opacity .24s ease, transform .24s ease, margin-top .24s ease;
        margin-top: 0;
        will-change: max-height, opacity, transform;
      }
      .tsjp-translation-panel.is-open {
        opacity: 1;
        transform: translateY(0);
        margin-top: 10px;
      }
      .tsjp-translation-card {
        display: block;
        padding: 12px 14px;
        border-radius: 14px;
        background: linear-gradient(180deg, rgba(239,246,255,.98), rgba(219,234,254,.98));
        border: 1px solid rgba(37,99,235,.16);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.65), 0 1px 2px rgba(30,64,175,.06);
        white-space: pre-wrap;
        color: #0f172a;
        line-height: 1.65;
        word-break: break-word;
      }
      .tsjp-translation-label {
        display: inline-block;
        margin: 0 8px 8px 0;
        padding: 2px 8px;
        border-radius: 999px;
        background: rgba(37,99,235,.12);
        color: #1d4ed8;
        font-size: 11px;
        font-weight: 800;
        line-height: 1.55;
        letter-spacing: .02em;
      }
    `;
    document.documentElement.appendChild(style);
  }

  function shouldSkipElement(el) {
    if (!el) return true;
    const tag = (el.tagName || '').toUpperCase();
    if (['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','CODE','PRE','SVG','BUTTON','INPUT','SELECT','OPTION'].includes(tag)) return true;
    if (el.isContentEditable) return true;
    if (el.closest('[contenteditable="true"]')) return true;
    if (el.closest(IGNORE_SELECTOR)) return true;
    return false;
  }

  function partialDictionaryTranslate(text) {
    if (!text) return null;
    const normalized = normalize(text);
    if (!normalized) return null;
    if (DICTIONARY[normalized]) return text.replace(normalized, DICTIONARY[normalized]);
    if (normalized.length > 64) return null;

    let result = text;
    let changed = false;
    for (const key of DICTIONARY_KEYS) {
      if (key.length < 3) continue;
      const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'g');
      if (regex.test(result)) {
        result = result.replace(regex, DICTIONARY[key]);
        changed = true;
      }
    }
    return changed ? result : null;
  }

  function isUiLikeTextNode(node) {
    const parent = node.parentElement;
    if (!parent || shouldSkipElement(parent)) return false;
    const text = normalize(node.nodeValue);
    if (!text || text.length > 64) return false;
    if (/^(https?:\/\/|www\.)/i.test(text)) return false;
    if (/^[\d\s.,:/%+\-()]+$/.test(text)) return false;

    const tag = parent.tagName;
    if (['A','BUTTON','LABEL','SPAN','DIV','P','H1','H2','H3','H4','H5','H6','LI','SMALL','STRONG'].includes(tag)) return true;
    return !!parent.closest('nav, aside, header, footer, dialog, [role="navigation"], [role="menu"], [role="toolbar"], [role="button"]');
  }

  function processAttributes(root) {
    const elements = [root, ...(root.querySelectorAll ? Array.from(root.querySelectorAll('*')) : [])];
    for (const el of elements) {
      if (!(el instanceof Element) || shouldSkipElement(el)) continue;
      for (const attr of ATTRS) {
        const value = el.getAttribute(attr);
        if (!value) continue;
        const translated = partialDictionaryTranslate(value);
        if (translated && translated !== value) {
          el.setAttribute(attr, translated);
          el.setAttribute('data-tsjp-translated', '1');
        }
      }
    }
  }

  function processTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!isUiLikeTextNode(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const prev = translatedUiTextNodes.get(node);
      const current = normalize(node.nodeValue);
      if (prev === current) continue;
      const translated = partialDictionaryTranslate(node.nodeValue);
      if (translated && translated !== node.nodeValue) {
        node.nodeValue = translated;
        translatedUiTextNodes.set(node, normalize(translated));
        node.parentElement?.setAttribute('data-tsjp-translated', '1');
      }
    }
  }

  function englishMetrics(text) {
    const s = normalize(text);
    const latinLetters = (s.match(/[A-Za-z]/g) || []).length;
    const japaneseChars = (s.match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
    const englishWords = (s.match(/\b[A-Za-z]{2,}\b/g) || []).length;
    return { latinLetters, japaneseChars, englishWords };
  }

  function looksEnglish(text) {
    const s = normalize(text);
    if (!s || s.length < 28) return false;
    const { latinLetters, japaneseChars, englishWords } = englishMetrics(s);
    if (englishWords < 5) return false;
    return latinLetters >= 24 && latinLetters > japaneseChars * 2;
  }

  function scoreText(text) {
    const s = normalize(text);
    if (!s) return 0;
    let score = 0;
    const len = s.length;
    if (len >= 28) score += 2;
    if (len >= 80) score += 2;
    if (/\b[A-Za-z]{2,}\b/.test(s)) score += 2;
    if (/\s/.test(s)) score += 1;
    if (!/^[@#][\w.-]+$/.test(s)) score += 1;
    if (!/^(https?:\/\/|www\.)/i.test(s)) score += 1;
    return score;
  }

  function exactDictionaryTranslate(text) {
    const normalized = normalize(text);
    return DICTIONARY[normalized] || null;
  }

  function elementLooksLikeActionOrMeta(el) {
    const text = normalize(el.innerText || '');
    return !!el.closest('button, a, time, h1, h2, h3, h4, h5, h6, nav, aside, footer, video') ||
      /(Reply|Repost|Like|Share|返信|リポスト|いいね|共有|Views|View)/i.test(text);
  }

  function collectContentBlocks(container) {
    const blocks = [];
    const candidates = container.querySelectorAll('p, div, span, article, section');
    for (const el of candidates) {
      if (!(el instanceof Element)) continue;
      if (shouldSkipElement(el)) continue;
      if (elementLooksLikeActionOrMeta(el)) continue;
      if (el.closest('.tsjp-translate-btn-wrap, .tsjp-translation-host')) continue;
      const text = normalize(el.innerText || el.textContent || '');
      if (!text || text.length < 28) continue;
      if (!looksEnglish(text)) continue;
      if (exactDictionaryTranslate(text)) continue;
      const childHasLongEnglish = Array.from(el.children).some((child) => {
        if (!(child instanceof Element) || shouldSkipElement(child)) return false;
        const childText = normalize(child.innerText || child.textContent || '');
        return childText.length >= 28 && looksEnglish(childText);
      });
      if (childHasLongEnglish) continue;
      if (scoreText(text) < 6) continue;
      blocks.push({ el, text });
    }

    const unique = [];
    for (const item of blocks) {
      if (unique.some((u) => u.text === item.text || u.text.includes(item.text) || item.text.includes(u.text))) continue;
      unique.push(item);
    }
    return unique;
  }

  function findActionBar(container) {
    const descendants = Array.from(container.querySelectorAll('div, section, footer'));
    let best = null;
    let bestScore = -1;
    for (const el of descendants) {
      if (!(el instanceof Element)) continue;
      const buttons = el.querySelectorAll('button, [role="button"], a, svg').length;
      const labels = (el.innerText || '') + ' ' + Array.from(el.querySelectorAll('[aria-label]')).map((x) => x.getAttribute('aria-label') || '').join(' ');
      const score = (buttons >= 4 ? 4 : buttons) + (/(Reply|Repost|Like|Share|返信|リポスト|いいね|共有)/i.test(labels) ? 4 : 0);
      if (score > bestScore) {
        bestScore = score;
        best = el;
      }
    }
    return bestScore >= 5 ? best : null;
  }

  function removeExistingButton(container) {
    const state = stateByContainer.get(container);
    if (state?.button) {
      const wrap = state.button.closest('.tsjp-translate-btn-wrap');
      wrap?.remove();
    }
    if (state?.host) state.host.remove();
    stateByContainer.delete(container);
  }

  function isLikelyPostContainer(container) {
    if (!(container instanceof Element)) return false;
    if (container.closest(IGNORE_SELECTOR)) return false;
    if (!container.matches('article, [role="article"], [data-testid="status"], [data-testid="post"]')) return false;
    if (container.querySelector('video') && !normalize(container.innerText || '').match(/[A-Za-z]{5,}/)) return false;
    const blocks = collectContentBlocks(container);
    if (!blocks.length) return false;
    const merged = blocks.map((b) => b.text).join(' ');
    const { japaneseChars } = englishMetrics(merged);
    return japaneseChars < 10;
  }

  function createTranslationPanel(translatedText) {
    ensureStyle();
    const host = document.createElement('div');
    host.className = 'tsjp-translation-host';
    host.setAttribute('data-tsjp-ignore', '1');

    const panel = document.createElement('div');
    panel.className = 'tsjp-translation-panel';
    panel.setAttribute('data-tsjp-ignore', '1');

    const card = document.createElement('div');
    card.className = 'tsjp-translation-card';
    card.setAttribute('data-tsjp-ignore', '1');

    const label = document.createElement('span');
    label.className = 'tsjp-translation-label';
    label.textContent = '翻訳';

    const body = document.createElement('div');
    body.textContent = translatedText;

    card.appendChild(label);
    card.appendChild(body);
    panel.appendChild(card);
    host.appendChild(panel);
    return { host, panel };
  }

  function openPanel(panel) {
    panel.hidden = false;
    panel.classList.add('is-open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

  function closePanel(panel) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    requestAnimationFrame(() => {
      panel.classList.remove('is-open');
      panel.style.maxHeight = '0px';
    });
  }

  function afterTransitionHide(panel) {
    const onEnd = (event) => {
      if (event.target !== panel || panel.classList.contains('is-open')) return;
      panel.hidden = true;
      panel.removeEventListener('transitionend', onEnd);
    };
    panel.addEventListener('transitionend', onEnd);
  }

  function togglePanel(panel, show) {
    if (show) {
      openPanel(panel);
    } else {
      afterTransitionHide(panel);
      closePanel(panel);
    }
  }

  function updateButtonState(state) {
    if (!state?.button) return;
    if (state.loading) {
      state.button.disabled = true;
      state.button.textContent = '翻訳中…';
      return;
    }
    state.button.disabled = false;
    state.button.textContent = !state.translated ? '翻訳' : (state.visible ? '翻訳を隠す' : '翻訳を表示');
  }

  function insertButtonBottom(container, wrap) {
    const actionBar = findActionBar(container);
    if (actionBar && actionBar.parentElement) actionBar.insertAdjacentElement('afterend', wrap);
    else container.appendChild(wrap);
  }

  function ensureButton(container) {
    if (!SETTINGS.enablePostTranslate) return;
    if (!isLikelyPostContainer(container)) {
      removeExistingButton(container);
      return;
    }

    let state = stateByContainer.get(container);
    if (state?.button && document.contains(state.button)) return state;

    const wrap = document.createElement('div');
    wrap.className = 'tsjp-translate-btn-wrap';
    wrap.setAttribute('data-tsjp-ignore', '1');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tsjp-translate-btn';
    btn.setAttribute('data-tsjp-ignore', '1');
    wrap.appendChild(btn);

    state = state || { translated: false, visible: false, loading: false, panel: null, host: null, button: btn, blocks: [] };
    state.button = btn;
    stateByContainer.set(container, state);

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      handleTranslateClick(container);
    });

    insertButtonBottom(container, wrap);
    updateButtonState(state);
    return state;
  }

  async function handleTranslateClick(container) {
    const state = stateByContainer.get(container);
    if (!state || state.loading) return;

    if (state.translated && state.panel) {
      state.visible = !state.visible;
      togglePanel(state.panel, state.visible);
      updateButtonState(state);
      return;
    }

    const blocks = collectContentBlocks(container);
    if (!blocks.length) return;

    state.loading = true;
    state.blocks = blocks;
    updateButtonState(state);

    try {
      const texts = blocks.map((b) => b.text);
      const response = await chrome.runtime.sendMessage({
        type: 'translateBatch',
        texts,
        targetLang: SETTINGS.targetLang || 'ja'
      });
      if (!response || !response.ok || !Array.isArray(response.translations)) throw new Error(response?.error || 'translateBatch failed');

      const translatedParts = [];
      for (let i = 0; i < texts.length; i++) {
        const translated = response.translations[i];
        if (translated && translated !== texts[i]) translatedParts.push(translated);
      }
      if (!translatedParts.length) return;

      const merged = translatedParts.join('\n\n');
      const { host, panel } = createTranslationPanel(merged);
      const anchor = state.button.closest('.tsjp-translate-btn-wrap');
      if (anchor) anchor.insertAdjacentElement('afterend', host);
      else container.appendChild(host);

      state.host = host;
      state.panel = panel;
      state.translated = true;
      state.visible = true;
      openPanel(panel);
    } catch (error) {
      console.warn('translation failed', error);
    } finally {
      state.loading = false;
      updateButtonState(state);
    }
  }

  function scanPosts(root) {
    const containers = [];
    if (root instanceof Element && root.matches('article, [role="article"], [data-testid="status"], [data-testid="post"]')) containers.push(root);
    if (root.querySelectorAll) {
      containers.push(...Array.from(root.querySelectorAll('article, [role="article"], [data-testid="status"], [data-testid="post"]')));
    }
    const unique = [];
    for (const el of containers) if (!unique.includes(el)) unique.push(el);
    for (const container of unique) ensureButton(container);
  }

  function scan(root = document.body) {
    if (!SETTINGS.enabled || !root) return;
    processAttributes(root);
    processTextNodes(root);
    scanPosts(root);
  }

  function startObserver() {
    if (observer || !document.body) return;
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) scan(node);
          }
        } else if (mutation.type === 'attributes' && mutation.target instanceof Element) {
          scan(mutation.target);
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ATTRS
    });
  }

  function init(settings) {
    SETTINGS = { ...SETTINGS_DEFAULTS, ...settings };
    rebuildDictionary();
    ensureStyle();
    if (!SETTINGS.enabled) return;
    scan(document.body);
    startObserver();
  }

  chrome.storage.local.get(SETTINGS_DEFAULTS, init);
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    for (const [key, change] of Object.entries(changes)) SETTINGS[key] = change.newValue;
    rebuildDictionary();
    if (SETTINGS.enabled) scan(document.body);
  });
})();
