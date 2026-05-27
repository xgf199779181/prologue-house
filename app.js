/**
 * 序章小窝 —— Hello Kitty 粉色时间轴博客
 * 纯前端单页应用，通过 hash 路由切换页面
 */

let blogData = null;

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
        { "type": "image", "src": "assets/article_0601_1.jpg", "caption": "" },
        { "type": "text", "value": "我们说好了要爱一辈子，要去世界各地旅游，要吃各种各样好吃的。这个约定，我每一天都记在心里。" },
        { "type": "text", "value": "当然，聚少离多的日子，偶尔也会觉得孤单。但真的没有关系，我每天都在认认真真地想你。<i>No distance is too far when your heart is my destination.</i> 我对你的思念，从来不会被山海的距离稀释个半分的，反而会在日复一日的时光里愈发郑重与真切。你不在我身旁的每一天，我都在默默期待着下一次相见。哪怕此刻我们没法朝夕相伴，也请你多多分享生活的日常，就算是再琐碎的小事，我也全部愿意倾听，全部都放在心尖上。" },
        { "type": "text", "value": "<b>一别两地同风雨，我望明月月望你。</b>" },
        { "type": "text", "value": "无论如何，我唯一的念头就是：不能错过你。遇见你之前，我不知道自己可以这样深爱一个人；遇见你之后，我只想用往后所有的时光来证明——这份爱会从热烈的心动，变成安稳的心安。" },
        { "type": "text", "value": "所以，崽崽，你说好不好？从这一岁开始，到往后的每一岁，都让我陪在你身边。<i>I promise to love you, not just on your birthday, but every single day. Not just when we're together, but across every mile between us.</i>" },
        { "type": "image", "src": "assets/article_0601_2.png", "caption": "" },
        { "type": "text", "value": "生日快乐，崽崽。下一站，我们一起去哪里吃好吃的？" },
        { "type": "text", "value": "<b>永远爱你的bb</b>" }
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
  loadData();
  window.addEventListener('hashchange', render);
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
  // 主人把音乐文件放进 assets/ 文件夹，然后修改下面的路径
  // 例孮：audio.src = 'assets/bgm.mp3';
  audio.src = 'assets/bgm.mp3';
  audio.loop = true;
  audio.volume = 0.3;

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

    render();
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

    render();
  }
}

/* ═══════════════════════════════════════════════════════════ */
/*  路由渲染                                                    */
/* ═══════════════════════════════════════════════════════════ */

function render() {
  const app = document.getElementById('app');
  if (!blogData) return;

  const hash = window.location.hash;

  if (hash.startsWith('#article/')) {
    const id = hash.replace('#article/', '');
    renderArticle(id);
    window.scrollTo(0, 0);
  } else {
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
    return;
  }

  // 按日期正序排列（早的在前，越来越近）
  const sorted = [...articles].sort((a, b) => new Date(a.date) - new Date(b.date));

  const itemsHTML = sorted.map((article, index) => {
    const coverHTML = article.cover
      ? `<img class="card-cover" src="${escapeHtml(article.cover)}" alt="${escapeHtml(article.title)}" loading="lazy">`
      : '';

    return `
      <div class="timeline-item" onclick="navigateToArticle('${escapeHtml(article.id)}')">
        <div class="timeline-dot">
          <img src="assets/kitty_header.png" alt="Hello Kitty">
        </div>
        <div class="timeline-card">
          ${coverHTML}
          <div class="card-date">${escapeHtml(article.date)}</div>
          <div class="card-title">${escapeHtml(article.title)}</div>
          <div class="card-summary">${escapeHtml(article.summary || '')}</div>
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

  const contentHTML = (article.content || []).map(block => renderContentBlock(block)).join('');

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

          <div class="article-content">
            ${contentHTML}
          </div>

        </article>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════════ */
/*  内容块渲染                                                  */
/* ═══════════════════════════════════════════════════════════ */

function renderContentBlock(block) {
  if (!block || !block.type) return '';

  switch (block.type) {
    case 'text':
      return `<div class="content-block text">${allowSafeHtml(block.value || '').replace(/\n/g, '<br>')}</div>`;

    case 'image':
      return `
        <div class="content-block image">
          <img src="${escapeHtml(block.src || '')}" alt="${escapeHtml(block.caption || '')}" loading="lazy">
          ${block.caption ? `<div class="image-caption">${escapeHtml(block.caption)}</div>` : ''}
        </div>
      `;

    case 'video':
      return `
        <div class="content-block video">
          <video controls preload="metadata" poster="${escapeHtml(block.poster || '')}">
            <source src="${escapeHtml(block.src || '')}" type="video/mp4">
            您的浏览器不支持视频播放。
          </video>
          ${block.caption ? `<div class="video-caption">${escapeHtml(block.caption)}</div>` : ''}
        </div>
      `;

    default:
      return '';
  }
}

/* ═══════════════════════════════════════════════════════════ */
/*  工具函数                                                    */
/* ═══════════════════════════════════════════════════════════ */

function navigateToArticle(id) {
  window.location.hash = `#article/${id}`;
}

function goHome() {
  window.location.hash = '';
  window.scrollTo(0, 0);
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
