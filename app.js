/**
 * 序章之家 —— Hello Kitty 粉色时间轴博客
 * 纯前端单页应用，通过 hash 路由切换页面
 */

let blogData = null;

/* fallback 数据：当直接用 file:// 打开时 fetch 会失败，自动使用内嵌数据 */
const FALLBACK_DATA = {
  "siteName": "序章之家",
  "subtitle": "我们的故事，从这里开始",
  "articles": [
    {
      "id": "welcome",
      "title": "欢迎来到序章之家",
      "date": "2026-05-25",
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
      "id": "how-to-write",
      "title": "写作指南：如何添加新文章",
      "date": "2026-05-25",
      "cover": null,
      "summary": "给主人的小教程，教你如何更新这个博客~",
      "content": [
        { "type": "text", "value": "主人好！更新博客非常简单，只需要修改 articles.json 文件即可。" },
        { "type": "text", "value": "每篇文章的格式如下：" },
        { "type": "text", "value": "{ \"id\": \"唯一标识\", \"title\": \"标题\", \"date\": \"YYYY-MM-DD\", \"cover\": \"封面图路径或null\", \"summary\": \"摘要\", \"content\": [ {\"type\":\"text\",\"value\":\"文本内容\"}, {\"type\":\"image\",\"src\":\"图片路径\",\"caption\":\"图片描述\"}, {\"type\":\"video\",\"src\":\"视频路径\",\"caption\":\"视频描述\"} ] }" },
        { "type": "text", "value": "图片和视频放在 assets/ 文件夹里，然后在 src 里写相对路径，比如 assets/my-photo.jpg。保存后刷新页面就能看到新文章啦！" }
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

  // 按日期倒序（最新在上）
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  const itemsHTML = sorted.map((article, index) => {
    const coverHTML = article.cover
      ? `<img class="card-cover" src="${escapeHtml(article.cover)}" alt="${escapeHtml(article.title)}" loading="lazy">`
      : '';

    return `
      <div class="timeline-item" onclick="navigateToArticle('${escapeHtml(article.id)}')">
        <div class="timeline-dot"></div>
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

          <div class="article-footer">
            <div class="bow-divider">💖 🎀 💖</div>
            <p>序章之家 · 记录属于我们的故事</p>
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
      return `<div class="content-block text">${escapeHtml(block.value || '').replace(/\n/g, '<br>')}</div>`;

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
