<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? '定制开发' : 'カスタマイズ開発' }}</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">{{ locale === 'zh' ? '根植业务，超越人员限制的开发流程' : '業務に根ざし、要員を超える開発フロー' }}</p>
        <div class="flex justify-center gap-4 mb-6">
          <span class="text-gray-600">{{ locale === 'zh' ? '高性价比解决方案' : '高いコストパフォーマンスのソリューション' }}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">{{ locale === 'zh' ? '一站式服务' : 'ワンストップサービス' }}</span>
        </div>
        <p class="text-lg text-gray-600">{{ locale === 'zh' ? '从需求分析、系统设计、开发实施到运用维护，提供全流程定制软件开发服务' : '要件分析、システム設計、開発実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します' }}</p>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '服务内容' : 'サービス内容'"
          :title-en="locale === 'zh' ? 'Services' : 'サービス内容'"
          :subtitle="locale === 'zh' ? '根据客户需求，从需求分析、系统设计、开发实施到运用维护，提供全流程定制软件开发服务' : 'お客様のご要望に応じて、要件分析、システム設計、開発実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します'"
          :subtitle-en="locale === 'zh' ? 'Custom software development services from requirement analysis to operation and maintenance' : 'お客様のご要望に応じて、要件分析、システム設計、开发実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します'"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <div v-for="service in serviceItems" :key="service.title" class="card p-6">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon :name="service.icon" class="w-7 h-7 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '服务流程' : 'サービスフロー'"
          :title-en="locale === 'zh' ? 'Service Flow' : 'サービスフロー'"
          :subtitle="locale === 'zh' ? '通过标准化的流程管理，确保高品质项目交付' : '標準化されたフロー管理により、高品質なプロジェクト納品を確保します'"
          :subtitle-en="locale === 'zh' ? 'Standardized process management ensures high-quality project delivery' : '標準化されたフロー管理により、高品質なプロジェクト納品を確保します'"
        />

        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(step, index) in processSteps" :key="step.title" class="relative">
              <!-- Step number -->
              <div class="absolute -top-3 -left-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {{ index + 1 }}
              </div>
              <!-- Connector line -->
              <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2 -translate-y-1/2"></div>
              <!-- Card -->
              <div class="bg-white rounded-xl p-5 pt-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h4 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '对日开发优势' : '対日開発優勢'"
            :title-en="locale === 'zh' ? 'Japan Development Advantage' : '対日開発優勢'"
            :subtitle="locale === 'zh' ? '拥有丰富的日企项目经验，尤其擅长制造业、服务业等领域的业务系统构建' : '豊富な日系企業プロジェクト経験を有し、製造業、サービス業などの分野の業務システム構築に特に通じております'"
            :subtitle-en="locale === 'zh' ? 'Rich experience in Japanese enterprise projects, especially in manufacturing and service industries' : '豊富な日系企業プロジェクト経験を有し、製造業、サービス業などの分野の業務システム構築に特に通じております'"
          />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <p class="text-gray-600">{{ locale === 'zh' ? '年对日开发经验' : '年の対日開発経験' }}</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p class="text-gray-600">{{ locale === 'zh' ? '个项目完成' : 'つのプロジェクト完了' }}</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p class="text-gray-600">{{ locale === 'zh' ? '名日语项目经理' : '名の日本語プロジェクトマネージャー' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Cases -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '客户案例' : '顧客事例'"
          :title-en="locale === 'zh' ? 'Customer Cases' : '顧客事例'"
          :subtitle="locale === 'zh' ? '查看定制开发的成功案例' : 'カスタマイズ開発の成功事例をご覧ください'"
          :subtitle-en="locale === 'zh' ? 'View successful cases of custom development' : 'カスタマイズ開発の成功事例をご覧ください'"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=esg" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? 'ESG 平台案例' : 'ESG プラットフォーム事例' }}
          </NuxtLink>
          <NuxtLink to="/cases?category=japan-dev" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? '对日开发案例' : '対日開発事例' }}
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
            :subtitle="locale === 'zh' ? '联系我们，获取专业定制开发咨询服务' : 'お問い合わせいただき、専門的なカスタマイズ開発コンサルティングサービスをご覧ください'"
            :subtitle-en="locale === 'zh' ? 'Contact us for professional custom development consulting services' : 'お問い合わせいただき、専門的なカスタマイズ開発コンサルティングサービスをご覧ください'"
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
  title: locale === 'zh' ? '定制开发 - 宁波乐科科信息技术有限公司' : 'カスタマイズ開発 - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '企业软件定制开发、微信小程序开发、移动应用开发、对日开发等全流程服务提供'
    : '企業ソフトウェアカスタマイズ、微信ミニプログラム開発、移动应用開発、対日開発など全工程サービス提供',
})

const serviceItems = computed(() => [
  {
    icon: 'ph:code',
    title: locale.value === 'zh' ? '企业软件定制开发' : '企業ソフトウェアカスタマイズ',
    description: locale.value === 'zh'
      ? '根植业务，超越需求的价值提供。高性价比的定制解决方案'
      : '業務に根ざし要件を超える価値を提供。高コストパフォーマンスのカスタマイズソリューション',
  },
  {
    icon: 'ph:device-mobile',
    title: locale.value === 'zh' ? '微信小程序开发' : '微信ミニプログラム開発',
    description: locale.value === 'zh' ? '中国市场拓展必备的微信小程序开发能力' : '中国市場展開に必須の微信ミニプログラム開発能力',
  },
  {
    icon: 'ph:app-window',
    title: locale.value === 'zh' ? '移动应用开发' : 'モバイルアプリケーション開発',
    description: locale.value === 'zh'
      ? '多端多平台开发，提高信息共享效率，便捷化业务处理'
      : 'マルチエンド・マルチプラットフォーム開発で、情報共有効率向上、業務処理便捷化',
  },
  {
    icon: 'ph:translate',
    title: locale.value === 'zh' ? '对日开发' : '対日開発',
    description: locale.value === 'zh'
      ? '全流程专业日语対応，多年大型对日项目开发维护'
      : '全工程プロフェッショナル日本語対応、多年大型対日プロジェクト開発保守',
  },
])

const processSteps = computed(() => [
  {
    title: locale.value === 'zh' ? '初期沟通' : '初期コミュニケーション',
    description: locale.value === 'zh'
      ? '了解企业信息化的目的、想要解决的课题，就项目效果与企业达成一致'
      : '企業情報化の目的、解決したい課題を理解し、プロジェクト効果について企业与一致意見達成',
  },
  {
    title: locale.value === 'zh' ? '需求确定' : '要件確定',
    description: locale.value === 'zh'
      ? '基于企业现在和未来的业务发展计划，结合企业的想法，提供专业意见与建议'
      : '企業の現在および将来の業務発展計画に基づき、企業の想法と合わせて、専門的な意見・提案を提供',
  },
  {
    title: locale.value === 'zh' ? '方案与报价' : '方案・コ-estimate',
    description: locale.value === 'zh'
      ? '根据前期沟通确认的需求，提供项目方案与对应报价'
      : '前期コミュニケーションで確認した要件に基づき、プロジェクト方案と对应报价を提供',
  },
  {
    title: locale.value === 'zh' ? '协议签订' : '協定締結',
    description: locale.value === 'zh'
      ? '就开发周期、沟通机制、交付成果物、价格等主要事项达成一致，签订书面协议'
      : '開発周期、コミュニケーション機制、納品成果物、価格など主要事項について双方一致し、書面協定締結',
  },
  {
    title: locale.value === 'zh' ? '程序开发' : '程序開発',
    description: locale.value === 'zh'
      ? '根据协议推进开发工作，定期向企业报告进度，提前通知需要配合的事项'
      : '協定に基づいて開発作業を推進し、進捗状況を定期的に企業に報告し、配合が必要な事项を事前に通知',
  },
  {
    title: locale.value === 'zh' ? '项目验收' : 'プロジェクト検収',
    description: locale.value === 'zh'
      ? '根据约定的验收基准/规格进行项目测试与验证，双方在验收报告书上填写'
      : '約定した検収基準/仕様に基づきプロジェクトのテストと検証を行い、双方检収報告書に記入',
  },
  {
    title: locale.value === 'zh' ? '软件交付' : 'ソフトウェア納品',
    description: locale.value === 'zh'
      ? '获得企业验收书签字，正式交付软件产品'
      : '企業検収書に署名し、正式にソフトウェア製品を納品',
  },
])
</script>
