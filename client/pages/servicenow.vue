<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? 'ServiceNow 开发' : 'ServiceNow 開発' }}</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">{{ locale === 'zh' ? '8年的项目导入经验，覆盖多个行业' : '8年のプロジェクト導入経験、複数の業界をカバー' }}</p>
        <p class="text-lg text-gray-600">{{ locale === 'zh' ? '基于低代码和SaaS模式的企业服务管理平台，快速灵活地部署商业应用' : 'ローコードとSaaSモデルに基づくエンタープライズサービス管理プラットフォーム、素早く柔軟なビジネスアプリケーション展開' }}</p>
      </div>
    </section>

    <!-- ServiceNow Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? 'ServiceNow 概要' : 'ServiceNow 概要'"
          :title-en="locale === 'zh' ? 'ServiceNow Overview' : 'ServiceNow 概要'"
          :subtitle="locale === 'zh' ? 'ServiceNow是基于低代码和SaaS模式的企业服务管理平台' : 'ServiceNowはローコードとSaaSモデルに基づくエンタープライズサービス管理プラットフォームです'"
          :subtitle-en="locale === 'zh' ? 'ServiceNow is an enterprise service management platform based on low-code and SaaS models' : 'ServiceNowはローコードとSaaSモデルに基づくエンタープライズサービス管理プラットフォームです'"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ locale === 'zh'
              ? '通过简化开发流程和提供云服务，ServiceNow实现了快速灵活的商业应用部署。我们的团队拥有8年的ServiceNow项目导入经验，与通信、物流、金融、制造等多个行业的企业合作过。'
              : '開発プロセスの簡素化とクラウドサービスの提供を通じて、ServiceNowは迅速で灵活なビジネスアプリケーション展開を実現します。私たちのチームには8年間のServiceNowプロジェクト導入経験があり、通信、物流、金融、製造などの複数の分野的企业と協力しています。' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? 'ServiceNow的特点' : 'ServiceNow の特徴'"
          :title-en="locale === 'zh' ? 'ServiceNow Features' : 'ServiceNow の特徴'"
          :subtitle="locale === 'zh' ? '核心能力，助力企业数字化转型' : 'コア能力、企業のデジタルトランスフォーメーションを支援'"
          :subtitle-en="locale === 'zh' ? 'Core capabilities to support enterprise digital transformation' : 'コア能力、企業のデジタルトランスフォーメーションを支援'"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:arrows-merge" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '跨系统应用联动' : 'システム横断アプリケーション連携' }}</h3>
            <p class="text-gray-600">{{ locale === 'zh' ? '实现数据一体化，打破信息孤岛' : 'データ一体化を実現、情報サイロを打砕く' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:link" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '内容自动联动' : 'コンテンツの自動連携' }}</h3>
            <p class="text-gray-600">{{ locale === 'zh' ? '提高开发速度，加速业务上线' : '開発スピードを向上、ビジネスのLaunchを加速' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:flow-arrow" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '简化业务流程' : '業務プロセスの簡素化' }}</h3>
            <p class="text-gray-600">{{ locale === 'zh' ? '提高业务效率，降低运营成本' : '業務効率を向上、運用コストを削減' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Expertise -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '我们中国ServiceNow团队' : '当社中国 ServiceNow Team'"
            :title-en="locale === 'zh' ? 'Our China ServiceNow Team' : '当社中国 ServiceNow Team'"
            :subtitle="locale === 'zh' ? '专业团队，丰富的项目导入经验' : '専門チーム、豊富なプロジェクト導入経験'"
            :subtitle-en="locale === 'zh' ? 'Professional team with rich project implementation experience' : '専門チーム、豊富なプロジェクト導入経験'"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:medal" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '8年+导入经验' : '8年+導入経験' }}</h4>
                  <p class="text-gray-600">{{ locale === 'zh' ? '在ServiceNow平台多年努力，积累了丰富的项目经验' : 'ServiceNowプラットフォームで多年努力し、豊富なプロジェクト経験を蓄積' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:buildings" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '覆盖多个行业' : '複数業界カバー' }}</h4>
                  <p class="text-gray-600">{{ locale === 'zh' ? '通信、物流、金融、制造等多个行业' : '通信、物流、金融、製造などの複数の分野' }}</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:users-three" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '专业团队' : '専門チーム' }}</h4>
                  <p class="text-gray-600">{{ locale === 'zh' ? '资格持有者，专业的导入能力' : '資格保持者、専門的な導入能力' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:handshake" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '成功案例' : '成功事例' }}</h4>
                  <p class="text-gray-600">{{ locale === 'zh' ? '众多大型项目顺利交付' : '多くの大型プロジェクトが正常に納品' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '开发案例' : '開発事例'"
          :title-en="locale === 'zh' ? 'Development Cases' : '開発事例'"
          :subtitle="locale === 'zh' ? '改善劳动市场、消费选择，形成绿色商业模式' : '労働市場の改善、消費選択の改善、グリーンなビジネスモデルを 形成'"
          :subtitle-en="locale === 'zh' ? 'Improve labor market, consumption choices, form green business models' : '労働市場の改善、消費選択の改善、グリーンなビジネスモデルを 形成'"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=servicenow" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? 'HRSD审批系统' : 'HRSD決裁システム' }}
          </NuxtLink>
          <NuxtLink to="/cases?category=servicenow" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? 'App Engine 开发案例' : 'App Engine 開発事例' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '开始项目' : 'プロジェクトを始める'"
            :title-en="locale === 'zh' ? 'Start a Project' : 'プロジェクトを始める'"
            :subtitle="locale === 'zh' ? '联系我们，获取专业ServiceNow导入咨询服务' : 'お問い合わせいただき、専門的なServiceNow導入コンサルティングサービスをご覧ください'"
            :subtitle-en="locale === 'zh' ? 'Contact us for professional ServiceNow implementation consulting services' : 'お問い合わせいただき、専門的なServiceNow導入コンサルティングサービスをご覧ください'"
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
  title: locale === 'zh' ? 'ServiceNow开发 - 宁波乐科科信息技术有限公司' : 'ServiceNow開発 - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '提供ServiceNow导入服务，8年项目经验，覆盖通信、物流、金融、制造等行业'
    : 'ServiceNow導入サービス提供、8年のプロジェクト経験、通信、物流、金融、製造などをカバー',
})
</script>
