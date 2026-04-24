<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">カスタマイズ開発</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">業務に根ざし、要員を超える開発フロー</p>
        <div class="flex justify-center gap-4 mb-6">
          <span class="text-gray-600">高いコストパフォーマンスのソリューション</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">ワンストップサービス</span>
        </div>
        <p class="text-lg text-gray-600">要件分析、システム設計、開発実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します</p>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービス内容"
          title-en="サービス内容"
          subtitle="お客様のご要望に応じて、要件分析、システム設計、開発実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します"
          subtitle-en="お客様のご要望に応じて、要件分析、システム設計、開発実施から運用保守まで、全工程のカスタマイズ软件开发サービスを提供します"
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
          title="サービスフロー"
          title-en="サービスフロー"
          subtitle="標準化されたフロー管理により、高品質なプロジェクト納品を確保します"
          subtitle-en="標準化されたフロー管理により、高品質なプロジェクト納品を確保します"
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
            title="対日開発優勢"
            title-en="対日開発優勢"
            subtitle="豊富な日系企業プロジェクト経験を有し、製造業、サービス業などの分野の業務システム構築に特に通じております"
            subtitle-en="豊富な日系企業プロジェクト経験を有し、製造業、サービス業などの分野の業務システム構築に特に通じております"
          />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <p class="text-gray-600">年の対日開発経験</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p class="text-gray-600">つのプロジェクト完了</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p class="text-gray-600">名の日本語プロジェクトマネージャー</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Cases -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle title="顧客事例" title-en="顧客事例" subtitle="カスタマイズ開発の成功事例をご覧ください" subtitle-en="カスタマイズ開発の成功事例をご覧ください" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=esg" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            ESG プラットフォーム事例
          </NuxtLink>
          <NuxtLink to="/cases?category=japan-dev" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            対日開発事例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="プロジェクトを始める" title-en="プロジェクトを始める" subtitle="お問い合わせいただき、専門的なカスタマイズ開発コンサルティングサービスをご覧ください" subtitle-en="お問い合わせいただき、専門的なカスタマイズ開発コンサルティングサービスをご覧ください" />
          <div class="mt-8">
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'カスタマイズ開発 - 寧波楽科科情報技術有限公司',
  description: '企業ソフトウェアカスタマイズ、微信ミニプログラム開発、移动应用開発、対日開発など全工程サービス提供',
})

const serviceItems = [
  { icon: 'ph:code', title: '企業ソフトウェアカスタマイズ', description: '業務に根ざし要件を超える価値を提供。高コストパフォーマンスのカスタマイズソリューション' },
  { icon: 'ph:device-mobile', title: '微信ミニプログラム開発', description: '中国市場展開に必須の微信ミニプログラム開発能力' },
  { icon: 'ph:app-window', title: 'モバイルアプリケーション開発', description: 'マルチエンド・マルチプラットフォーム開発で、情報共有効率向上、業務処理便捷化' },
  { icon: 'ph:translate', title: '対日開発', description: '全工程プロフェッショナル日本語対応、多年大型対日プロジェクト開発保守' },
]

const processSteps = [
  { title: '初期unikasi', description: '企業情報化の目的、解決したい課題を理解し、プロジェクト効果について企业与一致意見达成' },
  { title: '要件確定', description: '企業の現在および将来の業務発展計画に基づき、企業の想法と合わせて、専門的な意見・提案を提供' },
  { title: '方案・コEstimate', description: '前期コミュニケーションで確認した要件に基づき、プロジェクト方案と对应报价を提供' },
  { title: '協定締結', description: '開発周期、コミュニケーション機制、納品成果物、価格など主要事項について双方一致し、書面協定締結' },
  { title: '程序開発', description: '協定に基づいて開発作業を推進し、進捗状況を定期的に企業に報告し、配合が必要な事项を事前に通知' },
  { title: 'プロジェクト検収', description: '約定した検収基準/仕様に基づきプロジェクトのテストと検証を行い、双方检収報告書に記入' },
  { title: 'ソフトウェア納品', description: '企業検収書に署名し、正式にソフトウェア製品を納品' },
]
</script>
