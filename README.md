# 张艾温 - 个人简历网站

这是一个使用 Nuxt.js 构建的个人简历网站，支持中英文双语切换。

## 在线预览

🌐 [查看在线简历](https://yourusername.github.io/resume-site/)

## 功能特性

- 📱 响应式设计，适配各种设备
- 🌍 中英文双语支持
- 🎨 现代化 UI 设计
- ⚡ 基于 Nuxt.js 的高性能
- 🚀 自动部署到 GitHub Pages

## 技术栈

- **框架**: Nuxt.js 4.x
- **语言**: Vue 3 + TypeScript
- **国际化**: @nuxtjs/i18n
- **部署**: GitHub Pages + GitHub Actions

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3001` 查看网站。

### 构建生产版本

```bash
npm run generate
```

## 部署到 GitHub Pages

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "feat: 添加 GitHub Pages 部署配置"
git push origin main
```

### 2. 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**
5. 保存设置

### 3. 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动：
- 安装依赖
- 构建静态网站
- 部署到 GitHub Pages

部署完成后，你的网站将在 `https://yourusername.github.io/resume-site/` 可访问。

## 自定义配置

### 修改仓库名称

如果你的仓库名称不是 `resume-site`，需要修改 `nuxt.config.ts` 中的 `baseURL`：

```typescript
app: {
  baseURL: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
}
```

### 自定义域名

如果你有自定义域名，可以在 `public` 目录下添加 `CNAME` 文件：

```bash
echo "your-domain.com" > public/CNAME
```

## 项目结构

```
resume-site/
├── app/                 # 应用页面和组件
├── i18n/               # 国际化文件
├── public/             # 静态资源
├── .github/workflows/  # GitHub Actions 配置
├── nuxt.config.ts      # Nuxt 配置文件
└── package.json        # 项目依赖
```

## 许可证

MIT License
