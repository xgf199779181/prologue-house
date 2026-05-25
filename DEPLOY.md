# 🚀 序章之家 部署到 GitHub Pages 指南

---

## 第一步：创建 GitHub 账号

如果你还没有 GitHub 账号：

1. 打开 https://github.com/signup
2. 点击 **Sign up with Google** （用你的谷歌账号一键注册）
3. 按提示完成注册

> 提示：记住你的 GitHub 用户名（如 `xgf`），后面要用。

---

## 第二步：创建仓库

1. 登录 GitHub 后，点击右上角 **+** → **New repository**
2. 填写仓库名称：`prologue-house`
3. 选择 **Public**（公开）
4. 不要勾选 "Add a README"
5. 点击 **Create repository**

---

## 第三步：推送代码到 GitHub

打开终端（Terminal），执行以下命令（把 `xgf` 换成你的 GitHub 用户名）：

```bash
cd /Users/cengtianyu/workspace/prologue-house

# 设置 git 用户名和邮箱（可选，建议设置）
git config user.name "xgf"
git config user.email "你的邮箱@example.com"

# 添加远程仓库（把 xgf 换成你的用户名）
git remote add origin https://github.com/xgf/prologue-house.git

# 推送代码
git branch -M main
git push -u origin main
```

输入密码时，输入你的 GitHub 密码或令牌。

---

## 第四步：开启 GitHub Pages

1. 打开你的仓库页面 `https://github.com/xgf/prologue-house`
2. 点击顶部 **Settings** 标签
3. 左侧边栏点击 **Pages**
4. 在 "Build and deployment" 下：
   - **Source** 选择 **Deploy from a branch**
   - **Branch** 选择 **main** / **root**
5. 点击 **Save**

等待 1-2 分钟，然后访问：
```
https://xgf.github.io/prologue-house/
```

就能看到你的博客了！

---

## 第五步：购买域名

推荐平台：
- **花生壳** https://hsk.oray.com/ （国内，便宜）
- **阿里云** https://wanwang.aliyun.com/ （国内，稳定）
- **Namecheap** https://www.namecheap.com/ （海外，送隐私保护）
- **Cloudflare** https://dash.cloudflare.com/ （海外，便宜且送服务）

推荐域名形式：
- `xgf-prologue.com`
- `ourstory-xgf.com`
- `xgf-xiaowu.com`
- `你女友的名字-xgf.com`

购买时只需要进行简单的实名认证。

---

## 第六步：绑定自定义域名

### 6.1 仓库里添加 CNAME 文件

在仓库根目录创建文件 `CNAME`（没有后缀），内容是你的域名：

```
xgf-prologue.com
```

然后推送到 GitHub：

```bash
cd /Users/cengtianyu/workspace/prologue-house
echo "xgf-prologue.com" > CNAME
git add CNAME
git commit -m "add: 自定义域名"
git push
```

### 6.2 GitHub 仓库设置域名

1. 打开仓库 Settings → Pages
2. 在 "Custom domain" 框里填入你的域名：`xgf-prologue.com`
3. 点击 **Save**
4. 勾选 **Enforce HTTPS**

等待 DNS 生效（通常 5分钟 - 24 小时）。

### 6.3 域名商后台配置 DNS

登录你购买域名的平台，找到 DNS 解析/域名解析设置，添加以下记录：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|--------|
| CNAME | www | xgf.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

> 把 `xgf` 换成你的实际 GitHub 用户名。

等待 DNS 生效后，访问 `https://xgf-prologue.com` 就能看到你的博客了！

---

## ✅ 部署完成后的访问地址

- GitHub Pages 地址：`https://xgf.github.io/prologue-house/`
- 自定义域名：`https://xgf-prologue.com`

---

## 📝 日后更新博客

每次更新 `articles.json` 后，执行：

```bash
cd /Users/cengtianyu/workspace/prologue-house
git add -A
git commit -m "update: 添加新文章"
git push
```

等 1-2 分钟后自动更新到网站上！

---

## 🚨 常见问题

**Q: 推送时提示需要 token/密码错误？**
A: GitHub 现在不支持直接用密码推送，需要生成 Personal Access Token：
   - 设置 → Developer settings → Personal access tokens → Tokens (classic)
   - 生成 token，勾选 `repo` 权限
   - 推送时用 token 代替密码

**Q: 页面显示空白？**
A: GitHub Pages 部署需要几分钟，等待后刷新。检查 Settings → Pages 里的部署状态是否为 ✅。

**Q: 自定义域名访问不通？**
A: DNS 生效需要时间，可以用 https://dnschecker.org/ 查看全球解析状态。
