# 乐科科官网 (Rococo Official Website)

宁波乐科科信息技术有限公司官方网站

---

## 项目概述

本项目是一个企业官网，采用 **Strapi CMS (Headless)** + **Nuxt.js (前端)** 架构。

### 技术栈

| 部分 | 技术 | 版本 |
|------|------|------|
| CMS | Strapi | v5 |
| 数据库 | SQLite | - |
| 前端框架 | Nuxt.js | ^3.15 |
| CSS框架 | Tailwind CSS | ^6.x |
| 图标 | Phosphor Icons | @phosphor-icons/vue |

---

## 项目结构

```
rococo/
├── cms/                              # Strapi CMS 后端
│   ├── src/
│   │   ├── api/                     # Content Types
│   │   │   ├── config/              # 网站配置 (Single Type)
│   │   │   └── contact/             # 联系我们
│   │   └── index.ts                 # Bootstrap (权限+数据填充)
│   └── config/                      # 配置文件
│
└── client/                           # Nuxt.js 前端
    ├── assets/css/main.css           # 全局样式
    ├── components/                   # Vue 组件
    │   ├── layout/                   # 布局组件 (Header, Footer)
    │   ├── home/                     # 首页组件
    │   ├── common/                   # 通用组件
    │   └── ui/                       # UI组件
    ├── composables/                  # 组合式函数 (useStrapi)
    ├── layouts/                      # 页面布局
    ├── pages/                        # 页面
    ├── utils/constants.ts            # 静态配置
    └── nuxt.config.ts
```

---

## 快速启动

### 1. 启动 CMS 后端

```bash
cd cms
npm install
npm run dev
```

访问 **http://localhost:1337/admin** 进入 CMS 管理后台。

首次启动会自动：
- 配置公开角色的 API 权限
- 填充网站配置数据

### 2. 启动前端

```bash
cd client
npm install
npm run dev
```

访问 **http://localhost:3000** 查看网站。

---

## 验证结果

### 验证 CMS

1. **启动验证**: CMS 启动时控制台应显示：
   ```
   Public permissions configured successfully
   Seed data already exists, skipping...
   ```

2. **API 验证**:
   ```bash
   curl http://localhost:1337/api/config?populate=*
   ```
   应返回网站配置 JSON 数据。

3. **管理后台**: 访问 http://localhost:1337/admin
   - 检查 "网站配置" 和 "联系" 内容类型存在

### 验证前端

访问 http://localhost:3000，检查：

1. **首页正常加载**:
   - Hero 横幅（标题+副标题）
   - 四大服务卡片
   - HR++ 产品展示
   - 最新资讯（暂无资讯，因 API 未创建）
   - 联系我们表单
   - 页脚信息

2. **导航页面可访问**:
   - /custom-dev - 定制化开发
   - /low-code - 低代码平台
   - /digital-transform - 数字化转型
   - /product-hr - 产品介绍
   - /cases - 客户案例
   - /about - 关于我们

---

## CMS 内容类型

### 网站配置 (config) - Single Type
- companyName: 公司名称
- companyAddress: 公司地址
- companyPhone: 联系电话
- companyEmail: 电子邮箱
- icpNumber: ICP备案号
- copyright: 版权信息
- heroTitle: 首页大标题
- heroSubtitle: 首页副标题

### 联系 (contact)
- name: 姓名 (必填)
- company: 公司 (可选)
- email: 邮箱 (必填)
- phone: 电话 (可选)
- message: 咨询内容 (必填)

---

## 已知限制

1. **新闻/案例 API 未创建**: 当前 `useStrapi.ts` 中 `fetchNews`/`fetchCaseStudies` 为 placeholder 实现，前端显示"暂无资讯"。如需完整功能，需在 CMS 中重新创建 press-releases 和 case-study 内容类型。

2. **ScrollToTop 组件**: 因 Nuxt 组件解析问题已临时禁用。

---

## 常见问题排查

### CMS 启动报错 "Model not found"

检查 `cms/src/index.ts` 中的 seedData 函数，确保引用的 API 名称与实际创建的内容类型匹配。

### 前端无法连接 CMS

确认 CMS 已启动且运行在 http://localhost:1337：
```bash
curl http://localhost:1337/api/config?populate=*
```

### 权限问题

访问 API 时出现 403 错误：
1. 进入 CMS 管理后台
2. Settings > Users & Permissions Plugin > Roles > Public
3. 确保相关权限已勾选

### 数据未填充

如果初始数据未自动填充：
1. 删除 `.tmp/data.db` 文件
2. 重启 CMS：`npm run dev`

---

## 继续开发

### Phase 3: 新闻/案例 API 创建

如需完整的新闻和案例功能，需要在 CMS 中重新创建：
- `api::press-releases.press-releases` - 新闻动态
- `api::case-study.case-study` - 客户案例

并更新 `cms/src/index.ts` 中的 seedData 函数。

### Phase 4: 功能完善

- 表单验证增强
- 提交成功/失败反馈
- ScrollToTop 组件修复
- VueUse Motion 动画效果

---

## 参考文档

- [first.md](./first.md) - 详细设计文档
- [乐科科官网内容整理v1.0.md](./乐科科官网内容整理v1.0.md) - 内容整理文档
