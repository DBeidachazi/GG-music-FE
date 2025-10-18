# 配置文件说明

## 环境变量配置

项目使用 `.env` 文件管理配置，支持以下配置项：

### 配置文件优先级

1. `.env.local` - 本地开发配置（优先级最高，不会提交到Git）
2. `.env` - 开发环境默认配置
3. `.env.production` - 生产环境配置

### 配置项说明

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `VUE_APP_DEV_PORT` | 前端开发服务器端口 | 13580 |
| `VUE_APP_API_PORT` | 后端API服务器端口 | 13579 |
| `VUE_APP_API_BASE_URL` | 后端API地址 | http://localhost:13579 |
| `VUE_APP_DEFAULT_UID` | 默认用户UID | 639d9d87232a328835 |
| `VUE_APP_PAGE_SIZE` | 每页加载歌曲数量 | 15 |

### 如何自定义配置

1. 复制 `.env.example` 为 `.env.local`：
   ```bash
   copy .env.example .env.local
   ```

2. 在 `.env.local` 中修改你需要的配置

3. 重启开发服务器使配置生效

### 示例

修改端口号：
```env
VUE_APP_DEV_PORT=8080
VUE_APP_API_PORT=3000
VUE_APP_API_BASE_URL=http://localhost:3000
```

使用自己的歌单：
```env
VUE_APP_DEFAULT_UID=你的全民K歌UID
```

## 注意事项

- `.env.local` 不会被提交到Git，可以安全地存储个人配置
- 修改 `.env` 文件后需要重启开发服务器
- `VUE_APP_` 前缀的变量会在前端代码中可用
- 生产环境构建时会使用 `.env.production` 配置

