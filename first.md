# 乐科科官网 - 详细设计文档

## 1. 项目概述

### 项目名称
`rococo-official-website`

### 项目类型
企业官网（响应式，SSR/SSG 模式）

### 核心功能
展示宁波乐科科信息技术有限公司的企业形象、服务能力与核心产品（HR++），包含7个主要页面。

### 目标用户
- 潜在企业客户（数字化转型、IT咨询需求）
- 求职者
- 合作伙伴
- 已有客户

---

## 2. 技术架构

### 2.1 技术栈

**CMS 后端（Strapi）：**

| 类别 | 技术选型 | 版本 | 说明 |
|------|----------|------|------|
| CMS 框架 | Strapi | v4 | Headless CMS，插件丰富 |
| 数据库 | SQLite | - | 开发环境默认，生产可用 PostgreSQL |
| 认证 | JWT | - | Strapi 内置认证 |
| 文件存储 | 本地/Cloudinary | - | 支持多种 provider |
| 部署 | Node.js / Docker | 20+ | 支持多种部署方式 |

**前端（NUXT.js）：**

| 类别 | 技术选型 | 版本 | 说明 |
|------|----------|------|------|
| 框架 | Nuxt.js | ^3.15 | Vue 3 全栈框架，SSR/SSG 支持 |
| 开发语言 | TypeScript | ~6.0 | 类型安全 |
| UI 组件库 | Nuxt UI | ^3.0 | Tailwind CSS 组件库 |
| CSS 框架 | Tailwind CSS | ^4.0 | 原子化 CSS |
| 动画 | VueUse Motion | ^2.2 | 动画库 |
| 图标 | Phosphor Icons | - | Vue 3 图标库 |
| HTTP 客户端 | Built-in $fetch | - | Nuxt 内置 |
| 状态管理 | Pinia | ^3.0 | Nuxt 适配 |

### 2.2 项目结构

```
lekeo-website/
├── cms/                              # Strapi CMS 后端
│   ├── src/
│   │   ├── api/                     # Content Types
│   │   │   ├── news/                # 新闻动态
│   │   │   │   ├── content-types/
│   │   │   │   │   └── news/
│   │   │   │   │       └── schema.json
│   │   │   │   ├── controllers/
│   │   │   │   ├── routes/
│   │   │   │   └── services/
│   │   │   ├── case-study/           # 客户案例
│   │   │   ├── contact/              # 联系我们表单
│   │   │   └── config/               # 网站配置
│   │   ├── extensions/              # 扩展
│   │   └── plugins/                  # 自定义插件
│   ├── config/
│   │   └── database.ts              # 数据库配置
│   ├── package.json
│   └── .env
│
├── client/                           # Nuxt.js 前端
│   ├── app.vue
│   ├── nuxt.config.ts
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css             # Tailwind 入口
│   │   └── images/                   # 图片资源
│   ├── components/                    # 组件
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   └── MobileMenu.vue
│   │   ├── home/
│   │   │   ├── HeroSection.vue
│   │   │   ├── ServiceCard.vue
│   │   │   ├── ProductShowcase.vue
│   │   │   └── NewsSection.vue
│   │   ├── common/
│   │   │   ├── SectionTitle.vue
│   │   │   └── ContactInfo.vue
│   │   └── ui/
│   │       └── ScrollToTop.vue
│   ├── pages/                        # 页面（基于文件路由）
│   │   ├── index.vue                 # 首页
│   │   ├── custom-dev.vue            # 定制化开发
│   │   ├── low-code.vue              # 低代码平台
│   │   ├── digital-transform.vue     # 数字化转型
│   │   ├── product-hr.vue           # HR++产品
│   │   ├── cases/
│   │   │   └── index.vue             # 客户案例
│   │   └── about.vue                 # 关于我们
│   ├── composables/                  # 组合式函数
│   │   ├── useScrollAnimation.ts
│   │   └── useDevice.ts
│   ├── utils/                        # 工具函数
│   │   └── constants.ts
│   ├── server/                       # Nuxt Server Routes（BFF 层）
│   │   └── api/
│   │       └── proxy.ts              # API 代理（可选）
│   └── public/                       # 静态资源
│
└── docker-compose.yaml               # 容器编排
```

---

## 3. 页面设计

### 3.1 页面清单

| 路由路径 | 页面名称 | 描述 |
|----------|----------|------|
| `/` | 首页 | 主横幅、服务概览、产品展示、资讯 |
| `/custom-dev` | 定制化开发 | 服务详情、客户案例 |
| `/low-code` | 低代码平台 | ServiceNow、Power Platform |
| `/digital-transform` | 数字化转型 | IT咨询、旧系统重构 |
| `/product-hr` | HR++产品 | 产品功能、特点 |
| `/cases` | 客户案例 | 案例展示 |
| `/about` | 关于我们 | 公司介绍、发展历程 |

### 3.2 导航结构

```
顶部导航 (Header)
├── Logo (左侧)
├── 主导航菜单 (中央)
│   ├── 首页
│   ├── 定制化开发
│   ├── 低代码平台
│   ├── 数字化转型
│   ├── 产品-HR++
│   ├── 客户案例
│   └── 关于我们
└── 联系电话 (右侧)
```

---

## 4. Strapi Content Types 设计

### 4.1 新闻动态 (News)

**Collection Type: news**

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 标题 |
| summary | text | 摘要 |
| content | rich text | 内容 |
| coverImage | media | 封面图 |
| category | enumeration | news=新闻, notice=公告 |
| source | string | 来源（如"乐科科官微"） |
| sourceUrl | string | 原文链接 |
| author | string | 作者 |
| isPublished | boolean | 是否发布 |
| publishedAt | datetime | 发布时间 |

### 4.2 客户案例 (Case Study)

**Collection Type: case-study**

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 案例名称 |
| slug | string (uid) | URL slug（如"esg-platform"） |
| category | enumeration | esg=ESG平台, japan-dev=对日开发, servicenow=ServiceNow, power-platform=PowerPlatform, digital=数字化转型 |
| clientName | string | 客户名称 |
| summary | text | 摘要 |
| content | rich text | 详细描述 |
| coverImage | media | 封面图 |
| thumbImages | media (multiple) | 缩略图集 |
| isPublished | boolean | 是否发布 |
| sortOrder | integer | 排序 |
| publishedAt | datetime | 发布时间 |

### 4.3 联系我们表单 (Contact)

**Collection Type: contact**

| 字段 | 类型 | 说明 |
|------|------|------|
| name | string | 姓名 |
| company | string | 公司名称 |
| position | string | 职位 |
| email | string (email) | 邮箱 |
| phone | string | 电话 |
| subject | string | 咨询主题 |
| message | text | 咨询内容 |
| source | string | 来源页面 |
| status | enumeration | new=新建, viewed=已查看, replied=已回复, closed=已关闭 |
| adminNote | text | 管理员备注 |

### 4.4 网站配置 (Config)

**Single Type: config**

| 字段 | 类型 | 说明 |
|------|------|------|
| companyName | string | 公司名称 |
| companyAddress | string | 公司地址 |
| companyPhone | string | 联系电话 |
| companyEmail | string | 公司邮箱 |
| icpNumber | string | 备案号 |
| copyright | string | 版权信息 |
| heroTitle | string | 首页主标语 |
| heroSubtitle | string | 首页副标语 |

---

## 5. API 设计

### 5.1 公开 API（无需认证）

**获取新闻列表：**
```
GET /api/news?filters[isPublished][$eq]=true&pagination[page]=1&pagination[pageSize]=6&sort=publishedAt:desc
```

**获取案例列表：**
```
GET /api/case-studies?filters[isPublished][$eq]=true&pagination[page]=1&pagination[pageSize]=10&sort=sortOrder:asc
```

**获取网站配置：**
```
GET /api/config?populate=*
```

**提交联系我们表单：**
```
POST /api/contacts
{
    "data": {
        "name": "张三",
        "company": "某某公司",
        "email": "zhangsan@example.com",
        "message": "咨询内容..."
    }
}
```

### 5.2 管理 API（需认证）

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/auth/local` | 登录 |
| GET | `/api/news` | 新闻列表（全部） |
| POST | `/api/news` | 创建新闻 |
| PUT | `/api/news/:id` | 更新新闻 |
| DELETE | `/api/news/:id` | 删除新闻 |
| GET | `/api/case-studies` | 案例列表（全部） |
| POST | `/api/case-studies` | 创建案例 |
| PUT | `/api/case-studies/:id` | 更新案例 |
| DELETE | `/api/case-studies/:id` | 删除案例 |
| GET | `/api/contacts` | 表单列表 |
| PUT | `/api/contacts/:id` | 更新表单状态 |
| GET | `/api/config` | 获取配置 |
| PUT | `/api/config` | 更新配置 |

---

## 6. 页面与组件设计

### 6.1 首页 (index.vue)

| 区块 | 组件 | 数据来源 |
|------|------|----------|
| 主横幅 | HeroSection | CMS config（heroTitle, heroSubtitle） |
| 四大服务 | ServiceCard × 4 | 静态配置 |
| 产品展示 | ProductShowcase | CMS config |
| 最新资讯 | NewsSection | CMS news（isPublished=true） |
| 联系信息 | ContactInfo | CMS config |
| 页脚 | Footer | CMS config |

### 6.2 自定义组件

**ServiceCard：**
```vue
<template>
  <div class="service-card">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
```

**NewsSection：**
```vue
<template>
  <section class="news-section">
    <SectionTitle :title="sectionTitle" />
    <div class="news-grid">
      <div v-for="news in newsList" :key="news.id" class="news-item">
        <img :src="news.coverImage.url" :alt="news.title" />
        <h4>{{ news.title }}</h4>
        <p>{{ news.summary }}</p>
        <span class="date">{{ formatDate(news.publishedAt) }}</span>
      </div>
    </div>
  </section>
</template>
```

### 6.3 联系我们表单

```vue
<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.name" placeholder="姓名 *" required />
    <input v-model="form.company" placeholder="公司" />
    <input v-model="form.email" type="email" placeholder="邮箱 *" required />
    <input v-model="form.phone" placeholder="电话" />
    <textarea v-model="form.message" placeholder="咨询内容 *" required />
    <button type="submit" :disabled="submitting">提交</button>
  </form>
</template>
```

---

## 7. 前端与服务端交互

### 7.1 Nuxt.js 数据获取

```typescript
// composables/useStrapi.ts
export const useStrapi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.strapiUrl || 'http://localhost:1337'

  // 获取新闻列表
  const fetchNews = async (params = {}) => {
    return await $fetch(`${baseURL}/api/news`, {
      params: {
        'filters[isPublished][$eq]': true,
        'pagination[page]': params.page || 1,
        'pagination[pageSize]': params.pageSize || 6,
        'sort': 'publishedAt:desc',
        ...params.filters
      }
    })
  }

  // 获取案例列表
  const fetchCaseStudies = async (params = {}) => {
    return await $fetch(`${baseURL}/api/case-studies`, {
      params: {
        'filters[isPublished][$eq]': true,
        'pagination[page]': params.page || 1,
        'pagination[pageSize]': params.pageSize || 10,
        'sort': 'sortOrder:asc',
        ...params.filters
      }
    })
  }

  // 获取网站配置
  const fetchConfig = async () => {
    return await $fetch(`${baseURL}/api/config?populate=*`)
  }

  // 提交表单
  const submitContact = async (data: any) => {
    return await $fetch(`${baseURL}/api/contacts`, {
      method: 'POST',
      body: { data }
    })
  }

  return {
    fetchNews,
    fetchCaseStudies,
    fetchConfig,
    submitContact
  }
}
```

### 7.2 页面数据获取示例

```typescript
// pages/index.vue
<script setup lang="ts">
const { fetchNews, fetchConfig } = useStrapi()

// 并行获取数据和配置
const [newsResponse, configResponse] = await Promise.all([
  fetchNews({ pageSize: 6 }),
  fetchConfig()
])

const newsList = newsResponse.data
const config = configResponse.data
</script>
```

---

## 8. 动画设计

### 8.1 VueUse Motion 配置

| 场景 | 动画类型 | 配置 |
|------|----------|------|
| 服务卡片入场 | fade-up | delay: 100ms 间隔 |
| 产品特色卡片 | fade-left/right | stagger |
| 时间线节点 | fade-up | 依次延迟 |
| 数字统计 | fade-in | - |

### 8.2 Nuxt Transition

| 场景 | 过渡类型 |
|------|----------|
| 页面切换 | fade |
| 移动端菜单 | slide |

---

## 9. 响应式断点

| 断点 | 宽度 | 场景 |
|------|------|------|
| xs | < 640px | 手机 |
| sm | 640px - 768px | 大手机 |
| md | 768px - 1024px | 平板 |
| lg | 1024px - 1280px | 小屏笔记本 |
| xl | > 1280px | 桌面显示器 |

---

## 10. 开发任务清单

### Phase 1: 基础建设
- [ ] 初始化 Strapi CMS 项目
- [ ] 创建 Content Types（news, case-study, contact, config）
- [ ] 配置 Strapi 权限和角色
- [ ] 初始化 Nuxt.js 项目
- [ ] 配置 Tailwind CSS 和 Nuxt UI
- [ ] 配置 Tailwind 响应式断点
- [ ] 创建全局样式

### Phase 2: CMS 内容录入
- [ ] 录入网站配置
- [ ] 录入新闻动态
- [ ] 录入客户案例

### Phase 3: 前端页面
- [ ] 布局组件（Header, Footer, MobileMenu）
- [ ] 公共组件（SectionTitle, ContactInfo, ScrollToTop）
- [ ] 首页（HeroSection, ServiceCard, ProductShowcase, NewsSection）
- [ ] 定制化开发页
- [ ] 低代码平台页
- [ ] 数字化转型页
- [ ] HR++产品页
- [ ] 客户案例页
- [ ] 关于我们页

### Phase 4: 联系我们功能
- [ ] 前端表单组件
- [ ] 表单提交逻辑
- [ ] 表单验证

### Phase 5: 优化与部署
- [ ] SSG/SSR 模式配置
- [ ] SEO 优化（meta 标签）
- [ ] 性能优化
- [ ] Docker 配置
- [ ] 生产部署

---

## 11. 部署方案

### 11.1 开发环境

**CMS（Strapi）：**
```bash
cd cms
npm install
npm run develop
# 访问 http://localhost:1337/admin
```

**前端（Nuxt.js）：**
```bash
cd client
npm install
npm run dev
# 访问 http://localhost:3000
```

### 11.2 Docker 部署

```yaml
version: '3.8'
services:
  cms:
    build: ./cms
    ports:
      - "1337:1337"
    volumes:
      - cms-data:/app/data
      - cms-uploads:/app/public/uploads
    environment:
      - NODE_ENV=production
      - DATABASE_CLIENT=sqlite
      - DATABASE_FILENAME=.tmp/data.db
    restart: unless-stopped

  website:
    build: ./client
    ports:
      - "3000:3000"
    environment:
      - NUXT_PUBLIC_STRAPI_URL=http://cms:1337
    depends_on:
      - cms
    restart: unless-stopped

volumes:
  cms-data:
  cms-uploads:
```

### 11.3 生产环境 Nginx 配置

```nginx
upstream cms {
    server localhost:1337;
}

upstream website {
    server localhost:3000;
}

server {
    listen 80;
    server_name www.rococo.net.cn;

    # 前端 Nuxt.js
    location / {
        proxy_pass http://website;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Strapi CMS（仅管理后台）
    location /cms-admin {
        rewrite ^/cms-admin(.*)$ $1 break;
        proxy_pass http://cms;
        proxy_set_header Host $host;
    }

    # Strapi API
    location /api {
        proxy_pass http://cms;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Strapi 上传文件
    location /uploads {
        proxy_pass http://cms;
        proxy_set_header Host $host;
        expires 30d;
    }
}
```

---

## 12. 环境变量

### 12.1 Strapi (.env)

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

### 12.2 Nuxt.js (.env)

```env
NUXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

---

## 13. 安全建议

1. **Strapi API Token** — 生产环境使用环境变量，不要硬编码
2. **CORS** — Strapi 配置允许的前端域名
3. **上传文件** — 限制文件类型和大小
4. **数据库** — 生产环境使用 PostgreSQL，配置连接池
5. **HTTPS** — 生产环境必须启用 HTTPS
6. **备份** — 定期备份 SQLite/PostgreSQL 数据和上传文件

---

## 14. 风险与限制

1. **文件上传** — 默认使用本地存储，大规模部署建议使用 Cloudinary/S3
2. **富文本编辑** — Strapi 内置富文本编辑器，或集成第三方编辑器
3. **数据备份** — 生产环境务必定期备份数据库
4. **SSR/SSG 选择** — 根据内容更新频率选择，新闻更新频繁建议 SSR，案例页面可用 SSG

---

