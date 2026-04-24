<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? 'Rococo 中国' : 'Rococo 中国' }}</h1>
        <p class="text-xl text-gray-600">{{ locale === 'zh' ? '客户第一、真心对应' : '客户第一、真心対応' }}</p>
      </div>
    </section>

    <!-- Rococo China Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">{{ locale === 'zh' ? '关于Rococo中国' : 'Rococo中国について' }}</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh'
                ? '乐科科集团最早成立的海外事业部——中国事业部成立于2005年，下属营销中心上海乐科科软件有限公司和研发中心宁波乐科科信息技术有限公司。客户第一、真心对应的经营理念下，提供企业信息化咨询、软件开发定制与维护、软件产品的开发与销售服务。'
                : '楽科科グループで最も早く設立された海外事业部——中国事业部成立于2005年，下属营销中心上海楽科科ソフトウェア有限公司和研发中心寧波楽科科情報技術有限公司。客户第一、真心対応の経営理念のもと、企業情報化コンサルティング、ソフトウェアカスタマイズ開発と保守、ソフトウェア製品の開発と販売サービスを提供しています。' }}
            </p>
          </div>

          <!-- Three Values -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:handshake" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">{{ locale === 'zh' ? '对客対応' : '顧客への対応' }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh'
                  ? '我们始终致力于切实支持企业核心业务发展，为客户创造更高价值。公司设立至今，通过为企业提供信息化服务，获得了国内外客户的一致好评。'
                  : '私たちは常に、企業のコアビジネス発展を切实に支援し、顧客により高い価値を創出することに取り組んでいます。公司設立至今、通过为企业提供信息化服务，获得了国内外客户的一致好评。' }}
              </p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:users-three" class="w-8 h-8 text-secondary-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">{{ locale === 'zh' ? '对员应对' : '社員への対応' }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh'
                  ? '积极实践学习新知识、掌握新技能、培养多能人才。我们支持员工人格和物质生活更加幸福。"
                  : '新しい知識を学び、新しいスキルを掌握し、多能な人材を育成する取り組みを積極的に実践しています。社員の人格的・物質的生活がより幸福になるよう支援します。' }}
              </p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ph:plant" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">{{ locale === 'zh' ? '对社会应对' : '社会への対応' }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh'
                  ? '不给社会添麻烦，履行企业市民责任，创造社会价值，为建设更美好世界贡献力量。'
                  : '社会に迷惑をかけず、企業市民としての責任を果たし、社会に価値を創出し、より良い世界構築に貢献します。' }}
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
          :title="locale === 'zh' ? '发展历史' : '発展の歴史'"
          :title-en="locale === 'zh' ? 'Development History' : '発展の歴史'"
          :subtitle="locale === 'zh' ? '宁波乐科科信息技术有限公司的成长记录' : '寧波楽科科情報技術有限公司の成長記録'"
          :subtitle-en="locale === 'zh' ? 'Growth record of Rococo China' : '寧波楽科科情報技術有限公司の成長記録'"
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
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 mt-6 border-4 border-white shadow"></div>
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
          :title="locale === 'zh' ? '获奖与资格' : '受賞・資格'"
          :title-en="locale === 'zh' ? 'Awards and Certifications' : '受賞・資格'"
          :subtitle="locale === 'zh' ? '多年的努力与积累，获得客户与行业认可' : '長年の努力と蓄積により、顧客と業界から認められました'"
          :subtitle-en="locale === 'zh' ? 'Recognized by customers and industry through years of effort' : '長年の努力と蓄積により、顧客と業界から認められました'"
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
          <CommonSectionTitle
            :title="locale === 'zh' ? '联系我们' : 'お問い合わせ'"
            :title-en="locale === 'zh' ? 'Contact Us' : 'お問い合わせ'"
            :subtitle="locale === 'zh' ? '电话或在线咨询，欢迎随时联系我们' : 'お電話または在线咨询，欢迎随时ご連絡ください'"
            :subtitle-en="locale === 'zh' ? 'Call or online consultation, welcome to contact us anytime' : 'お電話または在线咨询，欢迎随时联系我们'"
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
  title: locale === 'zh' ? 'Rococo中国 - 宁波乐科科信息技术有限公司' : 'Rococo中国 - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '乐科科中国的发展历史、企业文化、获奖与资格介绍'
    : '楽科科中国の発展の歴史、企業文化、受賞・資格をご覧ください',
})

const milestones = computed(() => [
  { year: locale.value === 'zh' ? '2005年8月' : '2005年8月', event: locale.value === 'zh' ? '上海乐科科软件有限公司设立' : '上海楽科科ソフトウェア有限公司設立' },
  { year: locale.value === 'zh' ? '2007年1月' : '2007年1月', event: locale.value === 'zh' ? '自动布局系统新版本开发' : '自動レイアウトシステム新バージョン開発' },
  { year: locale.value === 'zh' ? '2010年1月' : '2010年1月', event: locale.value === 'zh' ? '宁波乐科科信息技术有限公司设立' : '寧波楽科科情報技術有限公司設立' },
  { year: locale.value === 'zh' ? '2011年5月' : '2011年5月', event: locale.value === 'zh' ? '获得"CMMI3"、"ISO27001:2005"认证' : '「CMMI3」、「ISO27001:2005」認証取得' },
  { year: locale.value === 'zh' ? '2017年6月' : '2017年6月', event: locale.value === 'zh' ? '认定为"宁波市技术先进型服务企业"' : '「寧波市技術先進型サービス企業」に認定' },
  { year: locale.value === 'zh' ? '2017年12月' : '2017年12月', event: locale.value === 'zh' ? '成为"IFS合作伙伴"' : '「IFSパートナー」となる' },
  { year: locale.value === 'zh' ? '2018年8月' : '2018年8月', event: locale.value === 'zh' ? 'HR++人事管理系统发售' : 'HR++人事管理系统発売' },
  { year: locale.value === 'zh' ? '2018年12月' : '2018年12月', event: locale.value === 'zh' ? '认定为"国家级科技型中小企业"' : '「国家レベル科学技術型中小企業」に認定' },
  { year: locale.value === 'zh' ? '2019年5月' : '2019年5月', event: locale.value === 'zh' ? '认定为"鄞州区企业工程技术中心"' : '「鄞州区企業エンジニアリング技術センター」に認定' },
  { year: locale.value === 'zh' ? '2020年12月' : '2020年12月', event: locale.value === 'zh' ? '获得"高新技术企业"称号' : '「高新技術企業」称号を取得' },
  { year: locale.value === 'zh' ? '2022年9月' : '2022年9月', event: locale.value === 'zh' ? '社内管理流程正式命名为"RPMS"' : '社内管理プロセスを正式に「RPMS」と命名' },
  { year: locale.value === 'zh' ? '2023年12月' : '2023年12月', event: locale.value === 'zh' ? '株式会社Rococo在东京证券交易所上市' : '株式会社ロココが東京証券取引所に上場' },
  { year: locale.value === 'zh' ? '2023年12月' : '2023年12月', event: locale.value === 'zh' ? '"高新技术企业"复审通过' : '「高新技術企業」再審査通過' },
  { year: locale.value === 'zh' ? '2024年12月' : '2024年12月', event: locale.value === 'zh' ? '获得"技术先进性企业"称号' : '「技術先進性企業」称号を取得' },
])

const honors = computed(() => [
  { year: locale.value === 'zh' ? '2024年' : '2024年', title: locale.value === 'zh' ? '技术先进性企业' : '技術先進性企業' },
  { year: locale.value === 'zh' ? '2023年' : '2023年', title: locale.value === 'zh' ? '高新技术企业复审通过' : '高新技術企業再審査通過' },
  { year: locale.value === 'zh' ? '2023年' : '2023年', title: locale.value === 'zh' ? '东京证券交易所上市' : '東京証券取引所上場' },
  { year: locale.value === 'zh' ? '2022年' : '2022年', title: locale.value === 'zh' ? 'RPMS管理流程命名' : 'RPMS管理プロセス命名' },
  { year: locale.value === 'zh' ? '2020年' : '2020年', title: locale.value === 'zh' ? '高新技术企业认证' : '高新技術企業認証' },
  { year: locale.value === 'zh' ? '2019年' : '2019年', title: locale.value === 'zh' ? '鄞州区企业工程技术中心' : '鄞州区企業エンジニアリング技術センター' },
  { year: locale.value === 'zh' ? '2018年' : '2018年', title: locale.value === 'zh' ? '国家级科技型中小企业' : '国家レベル科学技術型中小企業' },
  { year: locale.value === 'zh' ? '2018年' : '2018年', title: locale.value === 'zh' ? 'HR++人事管理系统发售' : 'HR++人事管理系统発売' },
  { year: locale.value === 'zh' ? '2017年' : '2017年', title: locale.value === 'zh' ? 'IFS合作伙伴' : 'IFSパートナー' },
  { year: locale.value === 'zh' ? '2017年' : '2017年', title: locale.value === 'zh' ? '宁波市技术先进型服务企业' : '寧波市技術先進型サービス企業' },
  { year: locale.value === 'zh' ? '2011年' : '2011年', title: locale.value === 'zh' ? 'CMMI3认证' : 'CMMI3認証' },
  { year: locale.value === 'zh' ? '2011年' : '2011年', title: locale.value === 'zh' ? 'ISO27001:2005认证' : 'ISO27001:2005認証' },
])
</script>
