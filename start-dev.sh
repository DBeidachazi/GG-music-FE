#!/bin/bash

# GG Music 开发环境启动脚本 (macOS/Linux)

echo "🎵 启动 GG Music 开发环境..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未安装 Node.js"
    exit 1
fi

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 启动应用
echo "🚀 启动应用..."
npm run electron:dev

