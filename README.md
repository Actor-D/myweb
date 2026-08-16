# Actor.D 的个人主页

一个支持中英文切换、无需构建工具并可直接部署到 GitHub Pages 的响应式个人主页。

## 已填写的信息

- 名称：Actor.D
- 本科：浙江大学（ZJU）信息管理与信息系统专业
- 硕士：香港中文大学（CUHK）商业分析理学硕士在读
- 邮箱：2209641601@qq.com
- 语言：简体中文 / English

语言会根据浏览器语言首次自动选择，并记住访客最后一次选择。

## 本地预览

直接打开 `index.html` 即可预览，也可以在本目录启动任意静态文件服务器。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `myweb`。
2. 在本文件夹运行：

```powershell
git add .
git commit -m "Create bilingual personal website"
git remote add origin https://github.com/你的用户名/myweb.git
git push -u origin main
```

3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main` 和 `/ (root)`，然后保存。
5. 稍等片刻，通过 `https://你的用户名.github.io/myweb/` 访问网站。

如果仓库名称是 `你的用户名.github.io`，主页地址就是 `https://你的用户名.github.io/`。
