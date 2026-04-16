# 乐科科官网前端 (rococo-client)

宁波乐科科信息技术有限公司官方网站前端部分

## 技术栈

- **框架**: Nuxt.js ^3.15
- **UI组件库**: Nuxt UI ^3.0
- **CSS**: Tailwind CSS ^4.0
- **动画**: VueUse Motion ^2.2
- **图标**: Phosphor Icons
- **状态管理**: Pinia ^3.0

## 开发

```bash
cd playground
npm install
npm run dev
```

访问 http://localhost:3000

## 项目结构

```
playground/
├── app.vue                 # 应用入口
├── nuxt.config.ts          # Nuxt 配置
├── tailwind.config.ts      # Tailwind 配置
├── assets/css/main.css     # 全局样式
├── components/              # Vue 组件
│   ├── layout/             # 布局组件
│   ├── home/               # 首页组件
│   ├── common/             # 通用组件
│   └── ui/                # UI组件
├── composables/            # 组合式函数
├── pages/                  # 页面
├── layouts/               # 布局
└── utils/                 # 工具函数
```

## 页面路由

| 路由 | 页面 |
|------|------|
| `/` | 首页 |
| `/custom-dev` | 定制化开发 |
| `/low-code` | 低代码平台 |
| `/digital-transform` | 数字化转型 |
| `/product-hr` | HR++产品 |
| `/cases` | 客户案例 |
| `/about` | 关于我们 |
