<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? 'Rococo 集团' : 'Rococo グループ' }}</h1>
        <p class="text-xl text-gray-600">{{ locale === 'zh' ? '以"心"为本，值得信赖的数字化转型合作伙伴' : '「心」を核念に、顧客から信頼されるデジタル変革のパートナー' }}</p>
      </div>
    </section>

    <!-- Rococo Group Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">{{ locale === 'zh' ? '关于Rococo集团' : 'Rococoグループについて' }}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ locale === 'zh'
                ? 'Rococo集团创立于1994年，是一家以"心"为核心理念的日本IT服务企业。正如公司名称的由来，我们珍视"心"，在日常的企业活动中始终贯彻这一理念，致力于成为客户值得信赖的数字化转型合作伙伴。'
                : 'Rococoグループは1994年に設立され、「心」を核心理念とする日本のITサービス企業です。公司名称の由来のように、私たちは「心」を珍しび、日常の企業活動において常にこの理念を貫き、顧客から信頼されるデジタル変革のパートナーになることです。' }}
            </p>
          </div>

          <!-- Global Presence -->
          <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 class="text-2xl font-bold mb-6 text-center">{{ locale === 'zh' ? '全球布局' : 'グローバル展開' }}</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 class="font-semibold text-primary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:flag" class="w-5 h-5" />
                  {{ locale === 'zh' ? '日本' : '日本' }}
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '大阪总公司' : '大阪本社' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '东京总公司' : '東京本社' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '全球技术中心' : 'グローバル技術センター' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '福冈营业所' : '福岡オフィス' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm col-span-2">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '松江BASE' : '松江BASE' }}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:globe" class="w-5 h-5" />
                  {{ locale === 'zh' ? '海外' : '海外' }}
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '中国（上海、宁波）' : '中国（上海、寧波）' }}</p>
                    <p class="text-sm text-gray-600">{{ locale === 'zh' ? '营销中心 + 研发中心' : 'マーケティングセンター + R&Dセンター' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '菲律宾（马尼拉、宿雾）' : 'フィリピン（マリティン、セブ）' }}</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">{{ locale === 'zh' ? '波兰' : 'ポーランド' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center text-gray-600 mt-6 text-sm">
              {{ locale === 'zh' ? '构建了覆盖亚洲及欧洲的服务网络，为客户提供全球化、本地化的技术支持' : 'アジアとヨーロッパをカバーするサービスネットワークを構築し、顧客にグローバルでローカルな技術サポートを提供' }}
            </p>
          </div>

          <!-- Group Development Milestones -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-6 text-center">{{ locale === 'zh' ? '集团发展历程' : 'グループ発展の歴史' }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">1994年</div>
                <p class="text-gray-700">{{ locale === 'zh' ? 'Rococo集团创立' : 'Rococoグループ設立' }}</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2005年</div>
                <p class="text-gray-700">{{ locale === 'zh' ? '正式进入中国市场，开启国际化布局' : '中国市場に正式に進出、国際展開を開始' }}</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2023年</div>
                <p class="text-gray-700">{{ locale === 'zh' ? '东京证券交易所标准板块成功上市' : '東京証券取引所スタンダード市場に上場' }}</p>
              </div>
            </div>
            <div class="text-center mt-4">
              <div class="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl">
                <div class="text-2xl font-bold">2024年</div>
                <p class="text-sm opacity-90">{{ locale === 'zh' ? '创业30周年，持续以创新技术推动业务增长' : '創業30周年、创新技術でビジネス成長を推進し続ける' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '联系我们' : 'お問い合わせ'"
            :subtitle="locale === 'zh' ? '欢迎来电或在线咨询' : 'お電話または在线咨询，欢迎随时ご連絡ください'"
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
  title: locale === 'zh' ? 'Rococo集团 - 宁波乐科科信息技术有限公司' : 'Rococoグループ - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? 'Rococo集团创立于1994年，是一家以"心"为核心理念的日本IT服务企业'
    : 'Rococoグループは1994年に設立され、「心」を核心理念とする日本のITサービス企業です',
})
</script>
