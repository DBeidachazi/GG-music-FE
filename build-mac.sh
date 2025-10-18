#!/bin/bash

# GG Music macOS 构建脚本

echo "🎵 构建 GG Music for macOS..."

# 安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 清理旧构建
echo "🧹 清理旧构建..."
rm -rf dist release

# 构建前端
echo "🔨 构建前端..."
npm run build

# 打包 Electron
echo "📦 打包 macOS 应用..."
npm run build:mac

echo "✅ 构建完成！应用位于 release/ 目录"
const path = require('path');

module.exports = {
  // 开发环境配置
  development: {
    port: 3000,
    host: 'localhost'
  },
  // 生产环境配置
  production: {
    port: process.env.PORT || 3000,
    host: 'localhost'
  }
};

