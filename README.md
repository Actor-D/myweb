# 个人主页

一个无需构建工具、可以直接部署到 GitHub Pages 的响应式个人主页。

## 修改内容

打开 `index.html`，搜索并替换以下占位内容：

- `你的名字`
- `你的职业或方向`
- 自我介绍、技能与项目内容
- `hello@example.com`
- `https://github.com/yourname`
- 社交平台链接

个人照片可放到新建的 `images` 文件夹中，然后把 `.portrait-placeholder` 里的占位文字改成图片标签，例如：

```html
<img src="images/avatar.jpg" alt="你的名字的照片" />
```

同时在 `styles.css` 的 `.portrait-placeholder` 规则中为图片补充：

```css
.portrait-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `myweb`。
2. 在本文件夹运行：

```powershell
git init
git add .
git commit -m "Create personal website"
git branch -M main
git remote add origin https://github.com/你的用户名/myweb.git
git push -u origin main
```

3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main` 和 `/ (root)`，然后保存。
5. 等待一两分钟后，通过 `https://你的用户名.github.io/myweb/` 访问网站。

如果仓库名称是 `你的用户名.github.io`，主页地址就是 `https://你的用户名.github.io/`。
