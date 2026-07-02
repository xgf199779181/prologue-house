/**
 * 序章小窝 —— Hello Kitty 粉色时间轴博客
 * 多页面静态站点，通过独立 HTML 切换页面
 */

let blogData = null;
const CURRENT_PAGE = document.body.dataset.page || 'home';

/* CDN 配置：国内通过 jsDelivr 加载 GitHub 资源 */
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/xgf199779181/prologue-house@main';
function cdnUrl(path) {
  if (typeof path !== 'string') return path;
  if (path.startsWith('http')) return path;
  if (path.startsWith('/')) return path;
  return CDN_BASE + '/' + path;
}

/* 本地开发或 file:// 打开时使用相对路径 */
function localUrl(path) {
  if (typeof path !== 'string') return path;
  if (path.startsWith('http')) return path;
  if (path.startsWith('/')) return path;
  return path;
}

/* 根据当前协议自动选择 CDN 或本地路径 */
function assetUrl(path) {
  return window.location.protocol === 'file:' ? localUrl(path) : cdnUrl(path);
}

/* 页面离开时保存滚动位置 */
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scroll_' + CURRENT_PAGE, window.scrollY);
});

/* 纪念日配置 */
const ANNIVERSARIES = {
  '2026-03-27': { label: '相恋日', icon: '💕' },
  '2026-06-01': { label: '崽崽生日', icon: '🎂' }
};

const MILESTONES = [
  { date: '2026-04-23', title: '郑州初见', icon: '✨' },
  { date: '2026-05-14', title: '上海之行', icon: '✨' },
  { date: '2026-06-27', title: '广州之行', icon: '✨' }
];

/* fallback 数据：当直接用 file:// 打开时 fetch 会失败，自动使用内嵌数据 */
const FALLBACK_DATA = {
  "siteName": "序章小窝",
  "subtitle": "我们的故事，从这里开始",
  "articles": [
    {
      "id": "welcome",
      "title": "欢迎来到序章小窝",
      "date": "2026-03-27",
      "cover": null,
      "summary": "这是我们的专属小窝，记录属于我们的每一个美好瞬间。",
      "content": [
        { "type": "text", "value": "亲爱的，这是我为你搭建的一个小小世界。" },
        { "type": "text", "value": "这里没有繁杂的功能，只有我们两个人的故事。我会在这里写下我们的回忆，配上照片和视频，让时间定格在最美的瞬间。" },
        { "type": "text", "value": "点击任意一篇文章，就能看到完整的内容啦~ 期待和你一起把这里填满！" },
        { "type": "text", "value": "💖 🎀 💖" }
      ]
    },
    {
      "id": "birthday-0601",
      "title": "生日快乐，崽崽",
      "date": "2026-06-01",
      "cover": "assets/article_0601_1.jpg",
      "summary": "亲爱的崽崽，生日快乐。写下这些字的时候，我正想象着你拆开这封信的模样...",
      "content": [
        { "type": "text", "value": "<b>亲爱的崽崽，生日快乐。</b>" },
        { "type": "text", "value": "写下这些字的时候，我正想象着你拆开这封信的模样——你应该是在安静的房间里，今年比较特殊，我们没办法一起过，真希望此刻能在你身边，亲手为你点上蜡烛，看你闭眼许愿。" },
        { "type": "text", "value": "从2026年3月27日那天起，我的世界忽然变得不一样了。我们在soul相识，然后默契的一起卸载。后来在王者峡谷里并肩作战，在深夜里把心事说了一遍又一遍——明明隔着屏幕，却像是认识了很久很久。那时候我不知道，原来一个人可以在从未谋面的时候，就已经悄悄住进了另一个人的心里。<i>You are the most beautiful accident that ever happened to me.</i>" },
        { "type": "text", "value": "4月23日，我终于在郑州见到了你。说真的，第一眼看到你的时候，我也很紧张，但是看到你更加害羞，我只能追着你让两颗心交融在一起。那几天我们只是吃吃喝喝，满街乱逛，却是我今年以来最快乐的时光。我陪着你第一次完了密室，你第一次玩，推理解谜的时候专注得不得了，通关那一刻你眼睛亮晶晶的样子，我到今天都记得清清楚楚。哦对了，我还被梧桐树毛打了一拳你笑了好久。后来在上海，福1088的本帮菜好吃的不行，鬼包子幸运的不用排队，跟你吃的很朴素却很幸福，还有本帮面热腾腾地端上来的时候，我觉得这就是幸福最具体的模样——和你一起，吃遍这个世界上所有好吃的东西。" },
        { "type": "text", "value": "我常常在幻想我们的未来，那些画面清晰得仿佛触手可及，让我一想起来，心里就暖洋洋的，嘴角不自觉地上扬。就想啊，再等几年，等我们工作都稳定下来，生活有了默契的节奏。我们一起下班，手牵手逛超市，在货架间商量晚上吃鱼还是排骨，回到家一起做饭，哪怕手忙脚乱也觉得甜。天气好的周末，就去楼下散步，不用去什么景点，也不用计划什么路线，就随便走走，聊聊这一周的琐事，或者什么都不说，只是感受晚风，感受彼此掌心的温度。" },
        { "type": "video", "src": "assets/微信视频2026-05-29_143806_589.mp4", "poster": "assets/article_0601_1.jpg" },
        { "type": "text", "value": "我们说好了要爱一辈子，要去世界各地旅游，要吃各种各样好吃的。这个约定，我每一天都记在心里。" },
        { "type": "text", "value": "当然，聚少离多的日子，偶尔也会觉得孤单。但真的没有关系，我每天都在认认真真地想你。<i>No distance is too far when your heart is my destination.</i> 我对你的思念，从来不会被山海的距离稀释个半分的，反而会在日复一日的时光里愈发郑重与真切。你不在我身旁的每一天，我都在默默期待着下一次相见。哪怕此刻我们没法朝夕相伴，也请你多多分享生活的日常，就算是再琐碎的小事，我也全部愿意倾听，全部都放在心尖上。" },
        { "type": "text", "value": "<b>一别两地同风雨，我望明月月望你。</b>" },
        { "type": "text", "value": "无论如何，我唯一的念头就是：不能错过你。遇见你之前，我不知道自己可以这样深爱一个人；遇见你之后，我只想用往后所有的时光来证明——这份爱会从热烈的心动，变成安稳的心安。" },
        { "type": "text", "value": "所以，崽崽，你说好不好？从这一岁开始，到往后的每一岁，都让我陪在你身边。<i>I promise to love you, not just on your birthday, but every single day. Not just when we're together, but across every mile between us.</i>" },
        { "type": "image", "src": "assets/article_0601_2.png", "caption": "" },
        { "type": "text", "value": "生日快乐，崆崆。下一站，我们一起去哪里吃好吃的？" },
        { "type": "text", "value": "<b>永远爱你的bb</b>" }
      ]
    },
    {
      "id": "guangzhou-0630",
      "title": "她在拍她的小蛋糕，我在看我的全世界",
      "date": "2026-06-30",
      "cover": "assets/article_0630_v2_1.jpg",
      "summary": "爱就是在一起，吃很多很多顿饭。纪念我们的第一次广州之行。",
      "content": [
        { "type": "with-you" },
        { "type": "emoji-line", "value": "👧 ❤️ 👦" },
        { "type": "text", "value": "爱就是在一起 吃很多很多顿饭", "center": true },
        { "type": "text", "value": "纪念我们的第一次广州之行", "center": true },
        { "type": "gallery", "images": [
          "assets/article_0630_v2_1.jpg",
          "assets/article_0630_v2_2.jpg",
          "assets/article_0630_v2_3.jpg",
          "assets/article_0630_v2_4.jpg",
          "assets/article_0630_v2_5.jpg",
          "assets/article_0630_v2_6.jpg",
          "assets/article_0630_v2_7.jpg",
          "assets/article_0630_v2_8.jpg",
          "assets/article_0630_v2_9.jpg"
        ]}
      ]
    }
  ]
};

/* ═══════════════════════════════════════════════════════════ */
/*  初始化                                                      */
/* ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initFloatingHearts();
  initClickHearts();
  initBGM();
  initHugButton();

  const page = document.body.dataset.page || 'home';

  if (page === 'article') {
    loadArticlePage();
  } else if (page === 'map') {
    loadMapPage();
  } else {
    initLoveCounter();
    initWeather();
    initNav();
    initMapButton();
    loadData();
  }
});

/* ═══════════════════════════════════════════════════════════ */
/*  浮动爱心背景                                                */
/* ═══════════════════════════════════════════════════════════ */

function initFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;

  const hearts = ['❤️', '💕', '💗', '💙', '💜', '🎀', '✨'];
  const count = 15;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'heart-float';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (14 + Math.random() * 20) + 'px';
    el.style.animationDuration = (8 + Math.random() * 12) + 's';
    el.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(el);
  }
}

/* ═══════════════════════════════════════════════════════════ */
/*  点击爱心特效                                                */
/* ═══════════════════════════════════════════════════════════ */

function initClickHearts() {
  const hearts = ['❤️', '💕', '💗', '💙', '💜', '🎀', '✨'];

  document.addEventListener('click', (e) => {
    const heart = document.createElement('span');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = 'click-heart';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = (16 + Math.random() * 14) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  });
}

/* ═══════════════════════════════════════════════════════════ */
/*  BGM 播放器                                                  */
/* ═══════════════════════════════════════════════════════════ */

function initBGM() {
  const btn = document.createElement('button');
  btn.className = 'bgm-toggle';
  btn.innerHTML = '🎵';
  btn.title = '播放/暂停背景音乐';
  document.body.appendChild(btn);

  const audio = new Audio();
  // 首页不卡顿：先空 src，页面加载完成后再异步加载 BGM
  audio.preload = 'none';
  audio.src = '';
  audio.loop = true;
  audio.volume = 0.3;

  // 页面加载完成后异步加载 BGM，不阻塞首页渲染
  requestAnimationFrame(() => {
    setTimeout(() => {
      audio.src = assetUrl('assets/bgm.mp3');
      audio.load();
    }, 100);
  });

  let playing = false;

  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止触发点击爱心特效
    if (playing) {
      audio.pause();
      btn.innerHTML = '🎵';
      btn.classList.remove('playing');
    } else {
      audio.play().catch(() => {
        // 浏览器阻止自动播放，等用户第一次点击再试
      });
      btn.innerHTML = '🎶';
      btn.classList.add('playing');
    }
    playing = !playing;
  });

  // 第一次用户交互时尝试自动播放
  const tryAutoPlay = () => {
    if (!playing) {
      audio.play().then(() => {
        btn.innerHTML = '🎶';
        btn.classList.add('playing');
        playing = true;
      }).catch(() => {});
    }
    document.removeEventListener('click', tryAutoPlay);
  };
  document.addEventListener('click', tryAutoPlay, { once: true });
}

/* ═══════════════════════════════════════════════════════════ */
/*  数据加载                                                    */
/* ═══════════════════════════════════════════════════════════ */

async function loadData() {
  const app = document.getElementById('app');

  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('无法加载文章数据');
    blogData = await res.json();

    // 更新页面标题和副标题
    if (blogData.siteName) {
      document.title = blogData.siteName;
    }
    const subtitleEl = document.getElementById('siteSubtitle');
    if (subtitleEl && blogData.subtitle) {
      subtitleEl.textContent = blogData.subtitle;
    }

    renderTimeline();
  } catch (err) {
    console.log('直接打开模式，使用内嵌数据（如需更新文章，请用本地服务器打开）');
    blogData = FALLBACK_DATA;

    if (blogData.siteName) {
      document.title = blogData.siteName;
    }
    const subtitleEl = document.getElementById('siteSubtitle');
    if (subtitleEl && blogData.subtitle) {
      subtitleEl.textContent = blogData.subtitle;
    }

    renderTimeline();
  }
}

/* ═══════════════════════════════════════════════════════════ */
/*  时间轴首页                                                  */
/* ═══════════════════════════════════════════════════════════ */

function renderTimeline() {
  const app = document.getElementById('app');
  const articles = blogData.articles || [];

  if (articles.length === 0) {
    app.innerHTML = `
      <div class="timeline-section">
        <div class="timeline">
          <div style="text-align:center;padding:60px 20px;color:var(--text-light);">
            <div style="font-size:3rem;margin-bottom:15px;">🎀</div>
            <p style="font-family:var(--font-display);font-size:1.2rem;">还没有文章呢~</p>
            <p style="margin-top:10px;">快来添加第一篇文章吧 💖</p>
          </div>
        </div>
      </div>
    `;
    restoreHomeScroll();
    return;
  }

  // 合并文章和里程碑，按日期正序排列
  const articleItems = articles.map(a => ({ ...a, _type: 'article' }));
  const milestoneItems = MILESTONES.map(m => ({ ...m, _type: 'milestone' }));
  const allItems = [...articleItems, ...milestoneItems]
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const itemsHTML = allItems.map((item) => {
    if (item._type === 'milestone') {
      return `
        <div class="timeline-milestone">
          <div class="milestone-date">${escapeHtml(item.date)}</div>
          <div class="milestone-dot">${item.icon}</div>
          <div class="milestone-label">${escapeHtml(item.title)}</div>
        </div>
      `;
    }

    const anni = ANNIVERSARIES[item.date];
    const dotClass = anni ? 'timeline-dot anniversary' : 'timeline-dot';
    const dotLabel = anni ? ` data-label="${anni.label}"` : '';

    const coverHTML = item.cover
      ? `<img class="card-cover" src="${escapeHtml(assetUrl(item.cover))}" alt="${escapeHtml(item.title)}" loading="lazy">`
      : '';

    return `
      <div class="timeline-item">
        <div class="${dotClass}"${dotLabel}>
          <img src="${escapeHtml(assetUrl('assets/kitty_header.png'))}" alt="Hello Kitty">
        </div>
        <div class="timeline-card" onclick="navigateToArticle('${escapeHtml(item.id)}')">
          ${coverHTML}
          <div class="card-date">${escapeHtml(item.date)}</div>
          <div class="card-title">${escapeHtml(item.title)}</div>
          <div class="card-summary">${escapeHtml(item.summary || '')}</div>
        </div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <section class="timeline-section">
      <div class="timeline">
        ${itemsHTML}
        <div class="timeline-end">
          <div class="timeline-end-dot">💖</div>
          <p class="timeline-end-text">故事继续中...</p>
        </div>
      </div>
    </section>
  `;

  restoreHomeScroll();
}

/* ═══════════════════════════════════════════════════════════ */
/*  文章详情页                                                  */
/* ═══════════════════════════════════════════════════════════ */

function renderArticle(id) {
  const app = document.getElementById('app');
  const article = (blogData.articles || []).find(a => a.id === id);

  if (!article) {
    app.innerHTML = `
      <section class="article-section">
        <button class="back-btn" onclick="goHome()">
          <span>←</span> 返回首页
        </button>
        <div class="article-container">
          <div style="text-align:center;padding:40px;">
            <div style="font-size:3rem;margin-bottom:15px;">🎀</div>
            <p style="font-family:var(--font-display);font-size:1.2rem;">文章找不到了...</p>
            <p style="margin-top:10px;color:var(--text-light);">这篇文章可能被移走了</p>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const contentHTML = (article.content || []).map((block, i) => renderContentBlock(block, i)).join('');

  app.innerHTML = `
    <section class="article-section">
      <div style="max-width:720px;margin:0 auto;">
        <button class="back-btn" onclick="goHome()">
          <span>←</span> 返回首页
        </button>

        <article class="article-container">
          <header class="article-header">
            <h1 class="article-title">${escapeHtml(article.title)}</h1>
            <div class="article-date">${escapeHtml(article.date)}</div>
          </header>

          <div class="article-content" data-article-id="${escapeHtml(article.id)}">
            ${contentHTML}
          </div>

        </article>
      </div>
    </section>
  `;

  // 触发打字机效果（首次打开该文章时）
  setTimeout(() => initTypewriter(article.id), 100);
}

/* ═══════════════════════════════════════════════════════════ */
/*  内容块渲染                                                  */
/* ═══════════════════════════════════════════════════════════ */

function renderContentBlock(block, index) {
  if (!block || !block.type) return '';

  switch (block.type) {
    case 'text': {
      const isFirst = index === 0;
      const twClass = isFirst ? ' typewriter-target' : '';
      const centerClass = block.center ? ' center-align' : '';
      return `<div class="content-block text${twClass}${centerClass}" data-tw="${isFirst ? '1' : '0'}">${allowSafeHtml(block.value || '').replace(/\n/g, '<br>')}</div>`;
    }

    case 'with-you':
      return `
        <div class="content-block with-you">
          <span class="with-you-text">With you</span>
          <span class="with-you-heart">💕</span>
        </div>
      `;

    case 'emoji-line':
      return `
        <div class="content-block emoji-line">${escapeHtml(block.value || '')}</div>
      `;

    case 'gallery': {
      const images = Array.isArray(block.images) ? block.images : [];
      if (images.length === 0) return '';
      const gridItems = images.map(src => `
        <div class="gallery-item">
          <img src="${escapeHtml(assetUrl(src))}" alt="" loading="lazy">
        </div>
      `).join('');
      return `
        <div class="content-block gallery">
          <div class="gallery-grid">${gridItems}</div>
        </div>
      `;
    }

    case 'image':
      return `
        <div class="content-block image">
          <img src="${escapeHtml(assetUrl(block.src || ''))}" alt="${escapeHtml(block.caption || '')}" loading="lazy">
          ${block.caption ? `<div class="image-caption">${escapeHtml(block.caption)}</div>` : ''}
        </div>
      `;

    case 'video':
      return `
        <div class="content-block video">
          <video controls preload="metadata" poster="${escapeHtml(assetUrl(block.poster || ''))}">
            <source src="${escapeHtml(assetUrl(block.src || ''))}" type="video/mp4">
            您的浏览器不支持视频播放。
          </video>
          ${block.caption ? `<div class="video-caption">${escapeHtml(block.caption)}</div>` : ''}
        </div>
      `;

    default:
      return '';
  }
}
function navigateToArticle(id) {
  window.location.href = 'article.html?id=' + encodeURIComponent(id);
}

function goHome() {
  window.location.href = 'index.html';
}

function restoreHomeScroll() {
  if (CURRENT_PAGE !== 'home') return;
  const saved = sessionStorage.getItem('scroll_home');
  if (saved !== null) {
    window.scrollTo(0, parseInt(saved));
  }
}

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function allowSafeHtml(text) {
  if (typeof text !== 'string') return '';
  const escaped = escapeHtml(text);
  return escaped
    .replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>')
    .replace(/&lt;i&gt;/g, '<i>').replace(/&lt;\/i&gt;/g, '</i>')
    .replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\/strong&gt;/g, '</strong>')
    .replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\/em&gt;/g, '</em>');
}

/* ╔═════════════════════════════════════════════════════════════════════════════════════════════╗ */
/* ║  新增功能：计数器、拥抱、打字机、天气、地图、导航                  ║ */
/* ╚═════════════════════════════════════════════════════════════════════════════════════════════╝ */

function initLoveCounter() {
  const el = document.getElementById('daysTogether');
  if (!el) return;
  const start = new Date('2026-03-27T00:00:00');
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  el.textContent = diff >= 0 ? diff : 0;
}

function initHugButton() {
  const btn = document.createElement('button');
  btn.className = 'hug-toggle';
  btn.innerHTML = '🤗';
  btn.title = '给崽崽发送拥抱';
  document.body.appendChild(btn);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    sendHug();
  });
}

function initMapButton() {
  const btn = document.createElement('a');
  btn.className = 'map-toggle';
  btn.innerHTML = '🗺️';
  btn.title = '我们的地图';
  btn.href = 'map.html';
  document.body.appendChild(btn);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

/* 情话池 —— 100条 */
const HUG_QUOTES = [
  "我把整个宇宙的温柔，都给你",
  "不管多远，我的心永远在你那边",
  "每一次心跳，都是在想你",
  "你是我这辈子最幸运的事",
  "想你的时候，连空气都是甜的",
  "遇见你之前，我不知道自己可以这样深爱一个人",
  "从热烈的心动，到安稳的心安，都是你",
  "我们要相约过一辈子，这不是托词，是承诺",
  "世间万物皆苦，你明目张胆的偏爱就是救赎",
  "我见过银河，但我只爱一颗星星",
  "你是我绕过山河错落，才找到的人间烟火",
  "我喜欢你，就像sin²加cos²，始终如一",
  "遇见你之后，我的伟大抱负都变成了和你在一起的黄昏与清晨",
  "你站的方向，连风吹过来都是暖的",
  "你是我所有的少女情怀和心之所向",
  "万物皆有不同，比如我有你，而他们没有",
  "我喜欢你，胜于昨日，略匮明朝",
  "我寻了半生的春天，你一笑，便是了",
  "我的每一支笔，都知道你的名字",
  "醒来觉得甚是爱你",
  "你是年少的欢喜，这句话反过来也是你",
  "我想和你互相浪费，一起虚度短的沉默和长的无意义",
  "山河远阔，人间烟火，无一是你，无一不是你",
  "我想和你一起生活，在某个小镇，共享无尽的黄昏",
  "为你，千千万万遍",
  "春风十里不如你",
  "愿你一生努力，一生被爱",
  "你的眼睛真好看，里面有晴雨、日月、山川，但我的更好看，因为里面有你",
  "自从遇见你，人生苦短，甜长",
  "我想见你，不远万里",
  "不思进取，思你",
  "除了先生的美色，不接受任何贿赂",
  "我要做你床头的小熊，为你打败梦里的恶龙",
  "你是我温暖的手套，冰冷的啤酒，带着阳光味道的衬衫",
  "你是我患得患失的梦，我是你可有可无的人",
  "我想和你一起走很长很长的路，不问归期",
  "你是我这一生，等了半世未拆的礼物",
  "在所有人事已非的景色里，我最喜欢你",
  "你是我想和全世界炫耀，却又舍不得和任何人分享的人",
  "平生一顾，至此终年",
  "斯人若彩虹，遇上方知有",
  "我想把世界上最好的都给你，却发现世界上最好的就是你",
  "海底月是天上月，眼前人是心上人",
  "玲珑骰子安红豆，入骨相思知不知",
  "山有木兮木有枝，心悦君兮君不知",
  "愿我如星君如月，夜夜流光相皎洁",
  "平生不会相思，才会相思，便害相思",
  "只愿君心似我心，定不负相思意",
  "两情若是久长时，又岂在朝朝暮暮",
  "执子之手，与子偕老",
  "山有峰顶，海有彼岸，我有你",
  "你是我明目张胆的偏爱，也是我众所周知的私心",
  "想和你一起看日出，也想和你一起等日落",
  "我想成为你最喜欢见到，和最舍不得说再见的那个人",
  "你是我退去新鲜感仍然心动的人",
  "一想到能和你共度余生，我就对余生充满期待",
  "我本无意穿堂风，偏偏孤倨引山洪",
  "你一笑，我的世界就亮了",
  "遇见你，是所有故事的开始",
  "你是我心上的月亮，也是我命里的光",
  "我想陪你从新鲜感走到归属感和安全感",
  "自从喜欢你，我的PH值总是小于7",
  "你是我拔掉氧气罐都想亲吻的人",
  "众生皆苦，唯你是草莓味",
  "铃铛遇到风会响，我遇见你，心里的小鹿会乱撞",
  "我要露出点小马脚来，好让你知道我喜欢你",
  "今天的风很温柔，像极了你对我笑的时候",
  "我所有的秒回，不是我很闲，而是你很重",
  "你是我跑完八百米也想拥抱的人",
  "月亮不会奔你而来，但我会",
  "今晚月色真美，风也温柔",
  "你是我宇宙限量版的快乐",
  "我不想做你的路人甲，我想做你的余生",
  "等风来不如追风去，追风去不如追你",
  "我对先生的喜欢，何止是钟意二字",
  "你是我这一生只会遇见一次的惊喜",
  "世界很暗，然后你来了，带着星星和月亮",
  "如果人类有尾巴，我见到你一定会摇个不停",
  "遇见你之前，我没想过结婚；遇见你之后，结婚没想过别人",
  "你是我电量只剩1%也想回消息的人",
  "众生皆草木，唯你是青山",
  "我想你一定很忙，所以只看前三个字就好",
  "你是我所有温柔的来源和归属",
  "我曾踏月而来，只因你在山中",
  "人间本不该令我这么欣喜，但是你来了",
  "我喜欢你已经超过两分钟了，不能撤回了",
  "世界那么大，而我真正想落脚的地方，是你的身旁",
  "你是我散落人间的日常，三三两两",
  "你是我日记里最重要的那页，也是我余生的关键词",
  "我想和你虚度时光，比如低头看鱼",
  "你是生活扑面而来的善意",
  "我的喜欢好明显，你的不喜欢也是",
  "你是我绕过人间山河，才遇到的人间烟火",
  "你是我这一生等了半世未拆的礼物",
  "遇见你爱意汹涌，看世间万物都浪漫心动",
  "你是我遥遥万里最牵挂的，也是给岁月最温柔的答案",
  "我喜欢你，不是情话，是心里话",
  "遇见你时，导航说：您已到达目的地"
];

function sendHug() {
  const overlay = document.getElementById('hugOverlay');
  if (!overlay) return;

  // 清除旧定时器防止重复
  if (overlay._hugCloseTimer) { clearTimeout(overlay._hugCloseTimer); overlay._hugCloseTimer = null; }

  // 重置状态
  const heartGlow = document.getElementById('hugHeartGlow');
  const hugEmoji = document.getElementById('hugHugEmoji');
  const quoteEl = document.getElementById('hugQuote');
  const resultEl = overlay.querySelector('.hug-result');
  if (heartGlow) { heartGlow.classList.remove('show'); heartGlow.style.animation = 'none'; }
  if (hugEmoji) { hugEmoji.classList.remove('show'); hugEmoji.style.animation = 'none'; }
  if (quoteEl) { quoteEl.textContent = ''; quoteEl.classList.remove('typing'); quoteEl.style.opacity = '0'; }
  if (resultEl) { resultEl.style.animation = 'none'; resultEl.style.opacity = '0'; }

  overlay.classList.add('active');

  // 启动爱心烟花
  startHugFireworks(() => {
    // 烟花结束后：大爱心 + 抱抱emoji 一起弹出
    if (heartGlow) { heartGlow.style.animation = ''; heartGlow.classList.add('show'); }
    if (hugEmoji) { hugEmoji.style.animation = ''; hugEmoji.classList.add('show'); }
    if (resultEl) {
      void resultEl.offsetWidth;
      resultEl.style.animation = 'fadeInUp 0.8s ease forwards';
    }
    const quote = HUG_QUOTES[Math.floor(Math.random() * HUG_QUOTES.length)];
    const typeTime = quote.length * 65 + 500; // 打字时间 + 缓冲
    typeHugQuote(quote);

    // 打完字后再看1.5秒才关
    overlay._hugCloseTimer = setTimeout(() => {
      overlay.classList.remove('active');
      stopHugFireworks();
      if (heartGlow) heartGlow.classList.remove('show');
      if (hugEmoji) hugEmoji.classList.remove('show');
    }, typeTime + 1500);
  });
}

function typeHugQuote(text) {
  const el = document.getElementById('hugQuote');
  if (!el) return;
  el.classList.add('typing');
  el.textContent = '';
  let i = 0;
  const speed = 65;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  setTimeout(type, 300);
}

/* ═══════════════════════════════════════════════════════════ */
/*  Canvas 爱心烟花秀                                              */
/* ═══════════════════════════════════════════════════════════ */

let hugFireworkAnim = null;

function startHugFireworks(onComplete) {
  const canvas = document.getElementById('hugCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = window.innerWidth;
  const H = canvas.height = window.innerHeight;
  const cx = W / 2, cy = H / 2;

  const colors = ['#FF3366','#FF6B9D','#FFD700','#FF99CC','#FF6699','#FFB6C1','#FF1493','#FF85A2'];
  const fireworks = [];
  const particles = [];
  let launched = 0;
  let exploded = 0;
  const totalFireworks = 5;

  // 爱心参数方程归一化
  function heartPoint(t, scale) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    return { x: x * scale, y: y * scale };
  }

  // 发射一个烟花火箭
  function launchFirework() {
    const fx = 80 + Math.random() * (W - 160);
    const targetY = H * 0.25 + Math.random() * H * 0.2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push({
      x: fx, y: H,
      tx: fx, ty: targetY,
      vx: 0, vy: -(6 + Math.random() * 4),
      color: color,
      trail: [],
      dead: false
    });
    launched++;
  }

  // 爆炸成爱心形状
  function explode(fw) {
    const count = 50;
    const scale = 4 + Math.random() * 3;
    const baseAngle = Math.random() * Math.PI * 2;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2;
      const hp = heartPoint(t, scale);
      // 添加小随机扰动让爱心更自然
      const px = fw.x + hp.x + (Math.random() - 0.5) * 6;
      const py = fw.y + hp.y + (Math.random() - 0.5) * 6;
      const angle = Math.atan2(hp.y, hp.x) + baseAngle;
      const speed = 1.5 + Math.random() * 3;
      particles.push({
        x: px, y: py,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: fw.color,
        size: 2 + Math.random() * 3,
        life: 1,
        gravity: 0.04,
        drag: 0.97,
        phase: 'explode'
      });
    }
    // 额外中心闪光粒子
    for (let i = 0; i < 15; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 1 + Math.random() * 3;
      particles.push({
        x: fw.x, y: fw.y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        color: '#fff',
        size: 1 + Math.random() * 2,
        life: 1,
        gravity: 0.02,
        drag: 0.95,
        phase: 'explode'
      });
    }
    exploded++;
  }

  let frame = 0;
  let completeFired = false;
  let lastExplodeFrame = -999;

  function draw() {
    // 拖尾渐隐
    ctx.fillStyle = 'rgba(30,10,20,0.25)';
    ctx.fillRect(0, 0, W, H);
    frame++;

    // 发射新烟花
    if (launched < totalFireworks && frame % 18 === 0) {
      launchFirework();
    }

    // 更新火箭
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const f = fireworks[i];
      f.trail.push({ x: f.x, y: f.y, life: 1 });
      if (f.trail.length > 12) f.trail.shift();
      f.x += f.vx;
      f.y += f.vy;
      f.vy += 0.08; // 微重力

      // 画拖尾
      for (let j = 0; j < f.trail.length; j++) {
        const t = f.trail[j];
        t.life -= 0.08;
        if (t.life > 0) {
          ctx.globalAlpha = t.life * 0.6;
          ctx.fillStyle = f.color;
          ctx.beginPath();
          ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (f.y <= f.ty || f.vy >= 0) {
        explode(f);
        fireworks.splice(i, 1);
        lastExplodeFrame = frame;
      }
    }

    // 更新粒子
    let alive = 0;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.life -= 0.012;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      alive++;

      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // 画小爱心
      const s = p.size * p.life;
      ctx.moveTo(p.x, p.y + s * 0.3);
      ctx.bezierCurveTo(p.x - s * 0.5, p.y - s * 0.3, p.x - s, p.y + s * 0.1, p.x, p.y + s * 0.8);
      ctx.bezierCurveTo(p.x + s, p.y + s * 0.1, p.x + s * 0.5, p.y - s * 0.3, p.x, p.y + s * 0.3);
      ctx.fill();
    }

    ctx.globalAlpha = 1;

    // 所有烟花都爆炸完毕后延迟40帧触发完成回调
    if (!completeFired && exploded >= totalFireworks && frame - lastExplodeFrame > 40) {
      completeFired = true;
      if (onComplete) onComplete();
    }

    if (frame < 300 || alive > 0 || fireworks.length > 0) {
      hugFireworkAnim = requestAnimationFrame(draw);
    }
  }

  hugFireworkAnim = requestAnimationFrame(draw);
}

function stopHugFireworks() {
  if (hugFireworkAnim) {
    cancelAnimationFrame(hugFireworkAnim);
    hugFireworkAnim = null;
  }
  const canvas = document.getElementById('hugCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function initTypewriter(articleId) {
  const container = document.querySelector(`.article-content[data-article-id="${articleId}"]`);
  if (!container) return;

  const key = 'typed_' + articleId;
  if (sessionStorage.getItem(key)) return;

  const target = container.querySelector('.typewriter-target');
  if (!target) return;

  const rawHTML = target.innerHTML;
  const tmp = document.createElement('div');
  tmp.innerHTML = rawHTML;
  const plainText = tmp.textContent || tmp.innerText || '';

  target.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor">|</span>';
  const textSpan = target.querySelector('.typewriter-text');
  const cursor = target.querySelector('.typewriter-cursor');
  let i = 0;
  const speed = 55;

  function typeChar() {
    if (i < plainText.length) {
      textSpan.textContent += plainText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      cursor.remove();
      target.innerHTML = rawHTML;
      sessionStorage.setItem(key, '1');
    }
  }

  typeChar();
}

async function initWeather() {
  const container = document.getElementById('dualWeather');
  if (!container) return;

  const cities = [
    { name: '开封', lat: 34.79, lon: 114.35 },
    { name: '广州', lat: 23.13, lon: 113.26 }
  ];

  // 先显示查询中，不阻塞首页渲染
  container.innerHTML = '<div class="weather-card"><div class="weather-loading">正在查询两地天气 💕</div></div>';

  try {
    const results = await Promise.all(
      cities.map(c => fetchWeather(c.lat, c.lon).then(w => ({ ...c, ...w })))
    );

    container.innerHTML = results.map(r => `
      <div class="weather-card">
        <span class="weather-icon">${weatherEmoji(r.weathercode, r.is_day)}</span>
        <div>
          <div class="weather-city">${escapeHtml(r.name)}</div>
          <div class="weather-temp">${r.temperature}°C</div>
        </div>
      </div>
    `).join('');
  } catch (e) {
    container.innerHTML = `
      <div class="weather-card"><div class="weather-city">开封 ☀️</div></div>
      <div class="weather-card"><div class="weather-city">广州 ☀️</div></div>
    `;
  }
}

async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FShanghai`
  );
  if (!res.ok) throw new Error('weather fetch failed');
  const data = await res.json();
  return data.current_weather;
}

function weatherEmoji(code, isDay) {
  if (code === 0) return isDay ? '☀️' : '🌙';
  if (code >= 1 && code <= 3) return '⛅';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 55) return '🌦️';
  if (code >= 61 && code <= 65) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 95 && code <= 99) return '⛈️';
  return '☀️';
}

function renderMap() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="map-page">
      <div style="max-width:900px;margin:0 auto;">
        <button class="back-btn" onclick="goHome()">
          <span>←</span> 返回首页
        </button>
        <div class="map-header">
          <h2>🗺️ 我们的地图</h2>
          <p>走过的路，和即将走的路</p>
        </div>
        <div class="map-container">
          <div id="loveMap"></div>
          <div class="map-legend">
            <div class="legend-item"><div class="legend-dot visited"></div><span>已去过</span></div>
            <div class="legend-item"><div class="legend-dot current"></div><span>现在所在</span></div>
            <div class="legend-item"><div class="legend-dot mixed"></div><span>现在所在 + 已去过</span></div>
            <div class="legend-item"><div class="legend-dot future"></div><span>未来要去</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
  loadLeaflet(() => initLeafletMap());
}

function loadLeaflet(callback) {
  if (window.L) { callback(); return; }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(link);
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.onload = callback;
  document.head.appendChild(script);
}

function initLeafletMap() {
  const map = L.map('loveMap', {
    zoomControl: false,
    attributionControl: false
  }).setView([33, 108], 4);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);

  const cities = [
    { name: '北京', lat: 39.9, lng: 116.4, type: 'future' },
    { name: '武汉', lat: 30.6, lng: 114.3, type: 'future' },
    { name: '郑州', lat: 34.8, lng: 113.6, type: 'visited' },
    { name: '开封', lat: 34.8, lng: 114.3, type: 'current' },
    { name: '上海', lat: 31.2, lng: 121.5, type: 'visited' },
    { name: '广州', lat: 23.1, lng: 113.3, type: 'current+visited' },
    { name: '大理', lat: 25.6, lng: 100.2, type: 'future' }
  ];

  const colors = { visited: '#FF6B9D', current: '#9B59B6', future: '#D5A6BD' };

  cities.forEach(c => {
    const isMixed = c.type === 'current+visited';
    const mainColor = isMixed ? colors.current : colors[c.type];
    const html = isMixed
      ? `<div class="map-pin" style="background:${mainColor};border-color:${mainColor};"><div class="map-pin-inner" style="background:${colors.visited};"></div></div>`
      : `<div class="map-pin" style="background:${mainColor};border-color:${mainColor};"></div>`;
    const icon = L.divIcon({
      className: 'custom-map-marker',
      html: html,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
    const marker = L.marker([c.lat, c.lng], { icon: icon }).addTo(map);
    marker.bindTooltip(c.name, {
      permanent: true,
      direction: 'bottom',
      className: 'map-city-label',
      offset: [0, 8]
    });
  });

  // 连线：郑州 -> 上海 -> 广州
  L.polyline([[34.8, 113.6], [31.2, 121.5], [23.1, 113.3]], {
    color: '#FF6B9D',
    weight: 2,
    opacity: 0.5,
    dashArray: '6, 6'
  }).addTo(map);
}

function initNav() {
  // 已不再使用 hash 路由，简单高亮当前页面链接
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const isActive = href === 'index.html' && (path.endsWith('index.html') || path.endsWith('/'))
                  || path.includes(href);
    a.classList.toggle('active', isActive);
  });
}

async function loadArticlePage() {
  const app = document.getElementById('app');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    app.innerHTML = `
      <section class="article-section">
        <button class="back-btn" onclick="goHome()"><span>←</span> 返回首页</button>
        <div style="text-align:center;padding:60px;">
          <div style="font-size:3rem;margin-bottom:15px;">🎀</div>
          <p>文章ID缺失</p>
        </div>
      </section>
    `;
    return;
  }

  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('fetch failed');
    blogData = await res.json();
  } catch {
    blogData = FALLBACK_DATA;
  }

  renderArticle(id);
  window.scrollTo(0, 0);
}

async function loadMapPage() {
  const app = document.getElementById('app');

  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('fetch failed');
    blogData = await res.json();
  } catch {
    blogData = FALLBACK_DATA;
  }

  renderMap();
  window.scrollTo(0, 0);
}
