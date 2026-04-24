<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? '低代码平台开发' : 'ローコードプラットフォーム開発' }}</h1>
        <p class="text-xl text-primary-600 font-medium">{{ locale === 'zh' ? '快速构建，灵活部署，让业务创新触手可及' : '迅速に構築し、柔軟に展開し、ビジネスイノベーションをより身近なものに。' }}</p>
        <p class="text-lg text-gray-600 mt-2">{{ locale === 'zh' ? '基于 ServiceNow 与 Microsoft Power Platform 等平台，实现多终端开发' : 'ServiceNowとMicrosoft Power Platformなどの平台上実現多端末開発' }}</p>
      </div>
    </section>

    <!-- ServiceNow -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-4">ServiceNow</h2>
            <p class="text-gray-600 mb-6">
              {{ locale === 'zh'
                ? '利用ServiceNow、Microsoft Power Platform等低代码平台，帮助企业快速构建业务应用，实现业务流程的标准化和自动化。ServiceNow是一款基于低代码和SaaS模型的企业服务管理平台，通过简化开发流程和提供云端服务，实现快速、灵活的业务应用部署。'
                : 'ServiceNowやMicrosoft Power Platformなどのローコードプラットフォームを活用し、企業の業務アプリケーションを迅速に構築。業務プロセスの標準化と自動化を実現します。ServiceNowは、ローコードおよびSaaSモデルに基づくエンタープライズ向けサービス管理プラットフォームです。' }}
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '跨系统应用集成' : 'システム横断のアプリケーション連携' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '实现数据一体化' : 'データの一元化を実現' }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '内容自动连接' : 'コンテンツの自動連携' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '提高开发速度' : '開発スピードを向上' }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '简化业务流程' : '業務プロセスの簡素化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '提高工作效率' : '業務効率を向上' }}</p>
                </div>
              </div>
            </div>
            <div class="mt-8 p-4 bg-primary-50 rounded-lg">
              <p class="text-primary-800 font-medium">
                {{ locale === 'zh'
                  ? '乐科科中国拥有 ServiceNow 8年项目实施经验，合作企业包括通信、物流、金融、制造等多个领域。'
                  : '当社中国ServiceNowチーム：ServiceNowにおいて8年にわたる導入実績を有し、通信・物流・金融・製造など幅広い業界でのプロジェクト経験があります。' }}
              </p>
            </div>
            <div class="mt-6">
              <NuxtLink to="/cases?category=servicenow" class="btn-primary inline-flex items-center">
                <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
                {{ locale === 'zh' ? '查看 ServiceNow 客户案例' : 'ServiceNow 導入事例を見る' }}
              </NuxtLink>
            </div>
          </div>
          <div class="bg-gray-100 rounded-2xl p-8">
            <div class="text-center">
              <Icon name="ph:gear-six" class="w-24 h-24 text-primary-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">ServiceNow</h3>
              <p class="text-gray-600">{{ locale === 'zh' ? '企业服务管理平台' : 'エンタープライズサービス管理プラットフォーム' }}</p>
            </div>
          </div>
        </div>

        <!-- 5 Core Benefits -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-center mb-10">{{ locale === 'zh' ? '工作流改革价值' : 'ワークフロー改革価値' }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div v-for="benefit in servicenowBenefits" :key="benefit.title" class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon :name="benefit.icon" class="w-8 h-8 text-primary-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ benefit.title }}</h4>
              <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Power Platform -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 bg-gray-100 rounded-2xl p-8">
            <div class="text-center">
              <Icon name="ph:microsoft-excel-logo" class="w-24 h-24 text-green-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">Microsoft Power Platform</h3>
              <p class="text-gray-600">{{ locale === 'zh' ? '低代码开发平台' : 'ローコード開発プラットフォーム' }}</p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold mb-4">Power Platform</h2>
            <p class="text-gray-600 mb-6">
              {{ locale === 'zh'
                ? '直观的UI和低代码开发，无需高深IT知识即可使用，弥补IT人才短缺，灵活应对不断变化的业务现场。'
                : 'Power Platformの特长：直感的なUIとローコード開発により、高度なITスキルがなくても活用可能。IT人材不足の課題を補完し、変化の激しい業務現場にも柔軟に対応します。' }}
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '一站式服务' : 'ワンストップサービス' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '从初期导入到效果验证的全程服务' : '初期導入から効果検証までの全程サービス' }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '工具实施支援' : 'ツール導入支援' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? 'PowerApps/PowerAutomate等工具的实施支援' : 'Power Apps／Power Automateなどのツール導入支援' }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">{{ locale === 'zh' ? '流程标准化' : '業務プロセスの標準化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '业务流程标准化与自动化' : '業務プロセスの標準化と自動化' }}</p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <NuxtLink to="/cases?category=power-platform" class="btn-primary inline-flex items-center">
                <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
                {{ locale === 'zh' ? '查看 Power Platform 客户案例' : 'Power Platform 導入事例を見る' }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '了解更多' : '详细信息'"
            :subtitle="locale === 'zh' ? '欢迎联系我们，获取低代码平台开发的专业咨询' : 'ローコードプラットフォーム開発については、お問い合わせください'"
          />
          <div class="mt-8">
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()

useSeoMeta({
  title: locale === 'zh' ? '低代码平台开发 - 宁波乐科科信息技术有限公司' : 'ローコードプラットフォーム開発 - 寧波楽科科情報技術有限公司',
  description: locale === 'zh' ? '基于ServiceNow与Microsoft Power Platform的低代码平台开发服务' : 'ServiceNowとMicrosoft Power Platformベースのローコードプラットフォーム開発サービス',
})

const servicenowBenefits = [
  { icon: 'ph:currency-dollar', title: locale === 'zh' ? '降低开发成本' : '開発コストの削減', description: locale === 'zh' ? '低代码开发模式减少开发投入' : 'ローコード開発モデルで開発投入を削減' },
  { icon: 'ph:simplify', title: locale === 'zh' ? '简化工作' : '業務の簡素化', description: locale === 'zh' ? '自动化流程简化日常事务' : '自動化プロセスで日常業務を簡素化' },
  { icon: 'ph:chart-line-up', title: locale === 'zh' ? '提高工作效率' : '業務効率の向上', description: locale === 'zh' ? '优化流程提升团队生产力' : 'プロセス最適化でチーム生産性を向上' },
  { icon: 'ph:shield-check', title: locale === 'zh' ? '风险控制' : 'リスク管理', description: locale === 'zh' ? '规范化管理降低业务风险' : '標準化管理で業務リスクを軽減' },
  { icon: 'ph:git-branch', title: locale === 'zh' ? 'IT服务管理' : 'ITサービス管理', description: locale === 'zh' ? '建立完整的IT服务管理流程' : '完全なITサービス管理プロセスを確立' },
]
</script>
