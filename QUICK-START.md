# GG Music - 快速开始指南

## ✨ 项目已成功转换为 Electron 桌面应用！

### 📋 完成的工作

✅ 将 Kotlin Spring Boot 后端转换为 Node.js/Express
✅ 集成 Electron 桌面应用框架
✅ 配置跨平台构建（macOS、Windows、Linux）
✅ 更新前端 API 地址为本地后端
✅ 创建启动脚本和构建脚本

### 🚀 立即开始使用

#### 在 Windows 上开发：

```cmd
npm run electron:dev
```

#### 在 macOS/Linux 上开发：

```bash
chmod +x start-dev.sh
./start-dev.sh
```

或直接运行：
```bash
npm run electron:dev
```

### 📦 构建生产版本

#### 构建 macOS 应用：
```bash
npm run build:mac
```

#### 构建 Windows 应用：
```cmd
npm run build:win
```

#### 构建 Linux 应用：
```bash
npm run build:linux
```

### 🔧 项目结构

```
GG-music-FE/
├── electron/          # Electron 主进程
│   ├── main.js       # 应用入口
│   └── preload.js    # 预加载脚本
├── server/           # Node.js 后端
│   ├── index.js      # Express 服务器 (从 Kotlin 转换)
│   └── config.js     # 配置文件
├── src/              # Vue 前端 (保持不变)
└── package.json      # 更新的依赖配置
```

### 🎯 API 端点说明

后端服务器运行在 `http://localhost:3000`，提供以下接口：

- `GET /songAuthor?uid={uid}` - 获取歌手信息
- `GET /list?uid={uid}&page={page}&size={size}` - 获取歌曲列表
- `GET /song?shareId={shareId}` - 获取歌曲详情
- `GET /songLyric?ksongmid={ksongmid}` - 获取歌词

### 💡 开发提示

1. **开发模式** 会自动启动：
   - Webpack Dev Server (http://localhost:8080)
   - Express 后端服务器 (http://localhost:3000)
   - Electron 桌面应用

2. **热重载**：修改前端代码会自动刷新，修改后端代码需要重启

3. **调试**：开发模式下会自动打开 DevTools

### 🍎 macOS 特别说明

如果你在 macOS 上首次打开应用遇到安全提示：

```bash
sudo xattr -rd com.apple.quarantine /Applications/GG\ Music.app
```

### 🎵 使用自定义歌单

在应用中输入 URL 参数：
```
http://localhost:8080/?uid=YOUR_UID
```

### 📝 后端代码转换说明

✅ Kotlin/Spring Boot → Node.js/Express
✅ OkHttp → Axios
✅ Jsoup → Cheerio
✅ CORS 配置已保留
✅ 所有 API 端点功能完全一致

### 🛠️ 故障排除

**问题：端口占用**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**问题：依赖安装失败**
```bash
rm -rf node_modules package-lock.json
npm install
```

### 🎉 下一步

现在你可以：
1. 运行 `npm run electron:dev` 启动开发环境
2. 修改代码，应用会自动刷新
3. 测试完成后，运行 `npm run build:mac` 构建 macOS 应用
4. 在 `release/` 目录找到打包好的应用

祝你使用愉快！🎵

