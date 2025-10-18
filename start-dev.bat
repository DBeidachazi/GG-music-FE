@echo off
REM GG Music 开发环境启动脚本 (Windows)

echo 🎵 启动 GG Music 开发环境...

REM 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装 Node.js
    exit /b 1
)

REM 检查依赖
if not exist "node_modules" (
    echo 📦 安装依赖...
    call npm install
)

REM 启动应用
echo 🚀 启动应用...
call npm run electron:dev

