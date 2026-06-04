# Vercel 部署指南

## 部署前准备

### 1. 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

```
NEXT_PUBLIC_API_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_APP_NAME=My Next.js App
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
```

### 2. Git 忽略文件

确保以下文件已在 `.gitignore` 中：
```
.env.local
.env.development.local
.env.test.local
.env.production.local
node_modules
.next
```

## 部署步骤

### 方式一：通过 Vercel Dashboard 部署

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 选择你的仓库
5. 配置项目设置（如果需要）
6. 点击 "Deploy"

### 方式二：通过 Vercel CLI 部署

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 登录 Vercel：
```bash
vercel login
```

3. 部署项目：
```bash
vercel
```

4. 部署到生产环境：
```bash
vercel --prod
```

## 环境变量说明

| 变量名 | 说明 | 示例 |
|--------|------|------|
| NEXT_PUBLIC_API_URL | API 基础地址 | https://your-app.vercel.app |
| NEXT_PUBLIC_APP_NAME | 应用名称 | My Next.js App |
| NEXT_PUBLIC_SITE_URL | 网站 URL | https://your-app.vercel.app |

## 注意事项

- 以 `NEXT_PUBLIC_` 开头的环境变量可以在客户端代码中使用
- 其他环境变量只能在服务端代码中使用
- 修改环境变量后需要重新部署才能生效
