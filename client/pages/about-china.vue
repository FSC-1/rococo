<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Rococo 中国</h1>
        <p class="text-xl text-gray-600">客户第一、真心対応</p>
      </div>
    </section>

    <!-- Rococo China Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Rococo中国について</h2>
            <p class="text-gray-600 leading-relaxed">
              楽科科グループで最も早く設立された海外事业部——中国事业部成立于2005年，下属营销中心<strong>上海楽科科ソフトウェア有限公司</strong>和研发中心<strong>寧波楽科科情報技術有限公司</strong>。客户第一、真心対応の経営理念のもと、企業情報化コンサルティング、ソフトウェアカスタマイズ開発と保守、ソフトウェア製品の開発と販売サービスを提供しています。
            </p>
          </div>

          <!-- Three Values -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:handshake" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">顧客への対応</h3>
              <p class="text-gray-600 leading-relaxed">
                私たちは常に、企業のコアビジネス発展を切实に支援し、顧客により高い価値を創出することに取り組んでいます。公司設立至今、通过为企业提供信息化服务，获得了国内外客户的一致好评.
              </p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:users-three" class="w-8 h-8 text-secondary-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">社員への対応</h3>
              <p class="text-gray-600 leading-relaxed">
                新しい知識を学び、新しいスキルを掌握し、多能な人材を育成する取り組みを積極的に実践しています。社員の人格的・物質的生活がより幸福になるよう支援します.
              </p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:plant" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">社会への対応</h3>
              <p class="text-gray-600 leading-relaxed">
                社会に迷惑をかけず、企業市民としての責任を果たし、社会に価値を創出し、より良い世界構築に貢献します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Timeline -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="発展の歴史"
          title-en="発展の歴史"
          subtitle="寧波楽科科情報技術有限公司の成長記録"
          subtitle-en="寧波楽科科情報技術有限公司の成長記録"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

            <!-- Timeline items -->
            <div class="space-y-8">
              <div v-for="(milestone, index) in milestones" :key="milestone.year + milestone.event" class="relative flex items-start" :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
                <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'">
                  <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-primary-200 transition-colors duration-300">
                    <div class="text-primary-600 font-bold mb-1">{{ milestone.year }}</div>
                    <p class="text-gray-700">{{ milestone.event }}</p>
                  </div>
                </div>
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1 mt-6 border-4 border-white shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Honor -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="受賞・資格"
          title-en="受賞・資格"
          subtitle="長年の努力と蓄積により、顧客と業界から認められました"
          subtitle-en="長年の努力と蓄積により、顧客と業界から認められました"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="honor in honors" :key="honor.year + honor.title" class="bg-gray-50 rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="ph:trophy" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div class="text-sm text-primary-600 font-medium">{{ honor.year }}</div>
                <h3 class="font-semibold text-gray-900">{{ honor.title }}</h3>
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
          <CommonSectionTitle title="お問い合わせ" title-en="お問い合わせ" subtitle="お電話または在线咨询，欢迎随时ご連絡ください" subtitle-en="お電話または在线咨询，欢迎随时ご連絡ください" />
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
  title: 'Rococo中国 - 寧波楽科科情報技術有限公司',
  description: '楽科科中国の発展の歴史、企業文化、受賞・資格をご覧ください',
})

const milestones = [
  { year: '2005年8月', event: '上海楽科科ソフトウェア有限公司設立' },
  { year: '2007年1月', event: '自動レイアウトシステム新バージョン開発' },
  { year: '2010年1月', event: '寧波楽科科情報技術有限公司設立' },
  { year: '2011年5月', event: '「CMMI3」、「ISO27001:2005」認証取得' },
  { year: '2017年6月', event: '「寧波市技術先進型サービス企業」に認定' },
  { year: '2017年12月', event: '「IFSパートナー」となる' },
  { year: '2018年8月', event: 'HR++人事管理システム発売' },
  { year: '2018年12月', event: '「国家レベル科学技術型中小企業」に認定' },
  { year: '2019年5月', event: '「鄞州区企業エンジニアリング技術センター」に認定' },
  { year: '2020年12月', event: '「高新技術企業」称号を取得' },
  { year: '2022年9月', event: '社内管理プロセスを正式に「RPMS」と命名' },
  { year: '2023年12月', event: '株式会社ロココが東京証券取引所に上場' },
  { year: '2023年12月', event: '「高新技術企業」再審査通過' },
  { year: '2024年12月', event: '「技術先進性企業」称号を取得' },
]

const honors = [
  { year: '2024年', title: '技術先進性企業' },
  { year: '2023年', title: '高新技術企業再審査通過' },
  { year: '2023年', title: '東京証券取引所上場' },
  { year: '2022年', title: 'RPMS管理プロセス命名' },
  { year: '2020年', title: '高新技術企業認証' },
  { year: '2019年', title: '鄞州区企業エンジニアリング技術センター' },
  { year: '2018年', title: '国家レベル科学技術型中小企業' },
  { year: '2018年', title: 'HR++人事管理システム発売' },
  { year: '2017年', title: 'IFSパートナー' },
  { year: '2017年', title: '寧波市技術先進型サービス企業' },
  { year: '2011年', title: 'CMMI3認証' },
  { year: '2011年', title: 'ISO27001:2005認証' },
]
</script>
