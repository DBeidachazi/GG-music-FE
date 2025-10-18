解决方案：
1. 确保后端服务器已启动（端口 3000）
2. 检查防火墙设置
3. 查看控制台日志

### 问题：macOS 上无法打开应用

解决方案：
```bash
# 允许未签名的应用
sudo xattr -rd com.apple.quarantine /Applications/GG\ Music.app
```

## 📄 License

MIT

## 👨‍💻 作者

- **Gordon** - [igordonxiao.github.io](https://igordonxiao.github.io/)

## 🙏 致谢

- 全民K歌提供音乐数据源
- Vue.js 社区
- Electron 社区
# GG Music - Electron Desktop App

这是Gordon的全民K歌歌单的桌面版本，使用 Vue 2 + Electron + Node.js 构建，支持 macOS、Windows 和 Linux。

## 🚀 功能特性

- ✅ **桌面应用**：原生桌面应用体验
- ✅ **跨平台**：支持 macOS、Windows、Linux
- ✅ **集成后端**：内置 Node.js 后端服务器
- ✅ **音乐播放**：全民K歌歌单播放
- ✅ **歌词显示**：实时歌词展示

## 📦 技术栈

- **前端**: Vue 2 + Vue Router + Mint UI + Axios
- **后端**: Node.js + Express + Cheerio
- **桌面**: Electron
- **构建**: Webpack + Electron Builder

## 🛠️ 开发环境设置

### 前置要求

- Node.js >= 12.0.0
- npm >= 6.0.0

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
# 启动开发服务器 + 后端 + Electron
npm run electron:dev
```

这个命令会同时启动：
1. Webpack Dev Server (端口 8080)
2. Node.js 后端服务器 (端口 3000)
3. Electron 应用

### 单独运行

```bash
# 只运行前端开发服务器
npm run dev

# 只运行后端服务器
npm run server

# 只运行 Electron
npm run electron
```

## 📱 构建应用

### 构建所有平台

```bash
npm run build:electron
```

### 构建特定平台

```bash
# macOS
npm run build:mac

# Windows
npm run build:win

# Linux
npm run build:linux
```

构建后的应用会在 `release/` 目录中。

## 🎵 使用说明

### 自定义歌单

在 URL 中添加 `uid` 参数来查看其他用户的歌单：

```
http://localhost:8080/?uid=YOUR_UID
```

### API 端点

后端服务器提供以下 API：

- `GET /songAuthor?uid={uid}` - 获取歌手信息
- `GET /list?uid={uid}&page={page}&size={size}` - 获取歌曲列表
- `GET /song?shareId={shareId}` - 获取歌曲详情
- `GET /songLyric?ksongmid={ksongmid}` - 获取歌词

## 📝 项目结构

```
GG-music-FE/
├── electron/           # Electron 主进程文件
│   ├── main.js        # Electron 主进程
│   └── preload.js     # 预加载脚本
├── server/            # Node.js 后端
│   └── index.js       # Express 服务器
├── src/               # Vue 前端源码
│   ├── components/    # Vue 组件
│   ├── router/        # 路由配置
│   └── utils/         # 工具函数
├── build/             # Webpack 构建配置
├── dist/              # 构建输出
└── release/           # Electron 打包输出
```

## 🔧 配置说明

### Electron Builder 配置

在 `package.json` 中的 `build` 字段配置：

- `appId`: 应用ID (io.igordonxiao.github.ggmusic)
- `productName`: 产品名称
- `mac`: macOS 特定配置
- `win`: Windows 特定配置
- `linux`: Linux 特定配置

### 环境变量

- `NODE_ENV`: 开发/生产环境
- 后端服务器端口: 默认 3000

## 🐛 故障排除

### 问题：Electron 窗口空白

解决方案：
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### 问题：后端 API 无法访问

# Dependencies
node_modules/

# Build output
dist/
release/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS
.DS_Store
Thumbs.db

# Electron
out/

