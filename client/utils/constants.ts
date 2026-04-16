// 服务卡片配置
export const services = [
  {
    icon: 'ph:code',
    title: '定制化开发',
    description: '源于业务，高于需求。高性价比解决方案，甩手式服务',
    to: '/custom-dev',
  },
  {
    icon: 'ph:chat-circle-text',
    title: '数字化咨询',
    description: '助力数字化建设，提供专业化咨询。分析业务需求，对接优质服务商',
    to: '/digital-transform',
  },
  {
    icon: 'ph:lightning',
    title: '低代码平台开发',
    description: '基于 ServiceNow 与 Microsoft Power Platform 等平台，快速构建企业级应用',
    to: '/low-code',
  },
  {
    icon: 'ph:arrows-clockwise',
    title: '系统重构',
    description: '老旧系统现代化改造专家。平滑过渡、持续运营，让企业IT资产焕发新生',
    to: '/digital-transform#system-refactor',
  },
]

// 案例分类
export const caseCategories = [
  { value: 'esg', label: 'ESG平台' },
  { value: 'japan-dev', label: '对日开发' },
  { value: 'servicenow', label: 'ServiceNow' },
  { value: 'power-platform', label: 'Power Platform' },
  { value: 'digital', label: '数字化转型' },
]

// 联系表单状态
export const contactStatuses = [
  { value: 'new', label: '新建' },
  { value: 'viewed', label: '已查看' },
  { value: 'replied', label: '已回复' },
  { value: 'closed', label: '已关闭' },
]
