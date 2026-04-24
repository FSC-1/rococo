// 服务卡片配置
export const services = [
  {
    icon: 'ph:code',
    title: '定制化开发',
    titleEn: 'カスタマイズ開発',
    description: '源于业务，高于需求。高性价比解决方案，甩手式服务',
    descriptionEn: '業務に根ざし要件を超える価値を提供。高いコストパフォーマンスのソリューションと手間のかからないワンストップサービス。',
    to: '/custom-dev',
  },
  {
    icon: 'ph:chat-circle-text',
    title: '数字化咨询',
    titleEn: 'デジタルコンサルティング',
    description: '助力数字化建设，提供专业化咨询。分析业务需求，对接优质服务商',
    descriptionEn: 'デジタル化推進を支援し専門的なコンサルティングを提供。業務要件を分析し優良なサービスプロバイダーと連携。',
    to: '/tech-consulting',
  },
  {
    icon: 'ph:lightning',
    title: '低代码平台开发',
    titleEn: 'ローコードプラットフォーム開発',
    description: '基于 ServiceNow 与 Microsoft Power Platform 等平台，快速构建企业级应用',
    descriptionEn: 'ServiceNowやMicrosoft Power Platformなどを基盤にエンタープライズ向けアプリケーションを迅速に構築。',
    to: '/low-code',
  },
  {
    icon: 'ph:arrows-clockwise',
    title: '系统重构',
    titleEn: 'システム再構築',
    description: '老旧系统现代化改造专家。平滑过渡、持续运营，让企业IT资产焕发新生',
    descriptionEn: 'レガシーシステムのモダナイゼーションに特化。スムーズな移行と安定した運用を実現し企業のIT資産に新たな価値をもたらします。',
    to: '/digital-transform',
  },
]

// 案例分类
export const caseCategories = [
  { value: 'esg', label: 'ESGプラットフォーム', labelEn: 'ESG平台' },
  { value: 'japan-dev', label: '対日開発', labelEn: '对日开发' },
  { value: 'servicenow', label: 'ServiceNow開発', labelEn: 'ServiceNow开发' },
  { value: 'power-platform', label: 'Power Platform', labelEn: 'Power Platform' },
  { value: 'consulting', label: 'ITコンサル', labelEn: 'IT咨询' },
  { value: 'system-refactor', label: 'システム再構築', labelEn: '系统重构' },
  { value: 'ai-automation', label: 'AI自動化', labelEn: 'AI自动化' },
]

// 联系表单状态
export const contactStatuses = [
  { value: 'new', label: '新建' },
  { value: 'viewed', label: '已查看' },
  { value: 'replied', label: '已回复' },
  { value: 'closed', label: '已关闭' },
]
