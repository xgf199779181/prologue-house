# 序章之家 🎀

一个专属于你们两个人的可爱粉色时间轴博客，用来记录属于你们的故事。

---

## 📁 文件结构

```
prologue-house/
├── index.html      # 博客主页（不用改）
├── style.css       # 样式文件（不用改）
├── app.js          # 页面逻辑（不用改）
├── articles.json   # ★ 文章数据（你只需要改这个）
└── assets/         # 图片、视频等资源放这里
```

---

## 📖 如何查看博客

### 方法一：直接打开
双击 `index.html` 即可用浏览器打开看效果。

> 注意：直接打开时只能看到内置的示例文章，**无法加载你自己更新的 articles.json**。

### 方法二：本地服务器（推荐）
如果想看到最新更新的文章，需要用本地服务器打开：

**用 Python（最简单）：**
```bash
cd prologue-house
python3 -m http.server 8080
```
然后打开浏览器访问 `http://localhost:8080`

**用 Node.js：**
```bash
cd prologue-house
npx serve
```

**用 VS Code：**
安装 **Live Server** 插件，右键点击 `index.html` → `Open with Live Server`

---

## ✍️ 如何添加/更新文章

只需要修改 `articles.json` 文件。

### 文章格式

```json
{
  "siteName": "序章之家",
  "subtitle": "我们的故事，从这里开始",
  "articles": [
    {
      "id": "welcome",
      "title": "文章标题",
      "date": "2026-05-25",
      "cover": "assets/cover.jpg",
      "summary": "这是文章摘要，显示在首页卡片上",
      "content": [
        { "type": "text", "value": "这是一段文字内容" },
        { "type": "image", "src": "assets/photo.jpg", "caption": "图片说明" },
        { "type": "video", "src": "assets/video.mp4", "caption": "视频说明" },
        { "type": "text", "value": "继续写文字..." }
      ]
    }
  ]
}
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `id` | ✓ | 文章唯一标识，不能重复，用于跳转 |
| `title` | ✓ | 文章标题 |
| `date` | ✓ | 日期，格式 `YYYY-MM-DD` |
| `cover` | ✗ | 封面图路径，没有封面写 `null` |
| `summary` | ✓ | 文章摘要，显示在首页卡片 |
| `content` | ✓ | 文章正文内容数组 |

### 内容块类型

| type | 字段 | 说明 |
|------|------|------|
| `text` | `value` | 纯文字段落 |
| `image` | `src`, `caption` | 图片（支持 jpg/png/gif/webp 等） |
| `video` | `src`, `caption` | 视频（支持 mp4/webm 等） |

### 添加图片/视频

1. 把图片或视频放进 `assets/` 文件夹
2. 在 `articles.json` 里写相对路径，比如 `assets/my-photo.jpg`

---

## 💡 小贴士

- 文章会按日期倒序排列（最新的在最上面）
- `id` 只能用字母、数字、横线，**不能有中文**
- 每次改完 `articles.json` 后刷新页面就能看到效果
- 推荐用 [JSON 格式检查工具](https://jsonlint.com/) 验证修改是否正确

---

Made with 💕 for you
