@echo off
echo ========================================
echo   GG Music - Electron 启动指南
echo ========================================
echo.
echo ❌ 错误：你使用了错误的命令！
echo.
echo 你运行了: npm run electron
echo 这只会启动 Electron，但没有启动开发服务器和后端。
echo.
echo ✅ 正确的命令是:
echo.
echo    npm run electron:dev
echo.
echo 这个命令会同时启动：
echo   1. Webpack 开发服务器 (端口 8000)
echo   2. Express 后端服务器 (端口 3000)
echo   3. Electron 桌面应用
echo.
echo ========================================
echo.
pause

