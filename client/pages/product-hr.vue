<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <img src="/hr++.png" alt="HR++" class="w-48 h-48 mx-auto mb-6 object-contain" />
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? 'HR++ 人事管理系统' : 'HR++ 人事管理システム' }}</h1>
        <p class="text-xl text-gray-600">{{ locale === 'zh' ? '更懂你的HR系统，让人事管理更简单高效' : 'あなたをより理解するHRシステム、人事管理をよりシンプルかつ効率的に' }}</p>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '主要功能' : 'コア機能'"
          :subtitle="locale === 'zh' ? '全方位覆盖企业人事管理需求' : '企業の人事管理ニーズを全方位的にカバー'"
        />

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <!-- Feature Cards -->
          <div class="lg:col-span-2 grid grid-cols-2 gap-4 stagger-children">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="card p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
              :class="selectedFeature === feature.title || selectedFeature === feature.titleEn ? 'ring-2 ring-primary-500 bg-primary-50' : ''"
              @click="selectedFeature = locale === 'ja' ? feature.titleEn : feature.title"
            >
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon :name="feature.icon" class="w-6 h-6 text-primary-600" />
              </div>
              <h3 class="text-base font-semibold mb-1">{{ locale === 'ja' ? feature.titleEn : feature.title }}</h3>
              <p class="text-gray-500 text-xs">{{ locale === 'ja' ? feature.descriptionEn : feature.description }}</p>
            </div>
          </div>

          <!-- Image Display -->
          <div class="lg:col-span-3">
            <div class="bg-gray-100 rounded-2xl overflow-hidden h-full min-h-[400px] flex items-center justify-center relative">
              <div v-if="currentImage" class="w-full h-full flex flex-col items-center justify-center p-8">
                <div class="bg-white rounded-xl shadow-lg p-4 mb-4 w-full max-w-md">
                  <img
                    :src="currentImage"
                    :alt="selectedFeature"
                    class="w-full h-auto rounded-lg"
                  />
                </div>
                <p class="text-gray-600 font-medium">{{ selectedFeature }}</p>
              </div>
              <div v-else-if="selectedFeature" class="text-center text-gray-400">
                <Icon name="ph:image" class="w-16 h-16 mx-auto mb-4" />
                <p>只是今スクリーンショットがありません</p>
              </div>
              <div v-else class="text-center text-gray-400">
                <Icon name="ph:image" class="w-16 h-16 mx-auto mb-4" />
                <p>左側の機能をクリックしてスクリーンショットを見る</p>
              </div>

              <!-- Navigation Arrows -->
              <div v-if="currentImages.length > 1" class="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <button
                  class="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white pointer-events-auto transition-colors opacity-50 hover:opacity-100"
                  @click.stop="prevImage"
                >
                  <Icon name="ph:caret-left" class="w-6 h-6" />
                </button>
                <button
                  class="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white pointer-events-auto transition-colors opacity-50 hover:opacity-100"
                  @click.stop="nextImage"
                >
                  <Icon name="ph:caret-right" class="w-6 h-6" />
                </button>
              </div>

              <!-- Image Indicators -->
              <div v-if="currentImages.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  v-for="(img, index) in currentImages"
                  :key="index"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="currentImageIndex === index ? 'bg-primary-600 w-4' : 'bg-gray-300'"
                  @click.stop="currentImageIndex = index"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '产品特点' : '特徴'"
          :subtitle="locale === 'zh' ? '为企业管理带来全新的数字化体验' : '企業に全新的なデジタル体験をもたらします'"
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(highlight, index) in highlights" :key="highlight.title" class="card p-6">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Icon :name="highlight.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ locale === 'ja' ? highlight.titleEn : highlight.title }}</h3>
                <p class="text-gray-600">{{ locale === 'ja' ? highlight.descriptionEn : highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4">{{ locale === 'zh' ? '了解更多' : '详细信息' }}</h2>
        <p class="text-xl text-primary-100 mb-8">{{ locale === 'zh' ? '访问 HR++ 官网，了解更多产品详情' : 'HR++公式サイトにアクセスして、詳しい製品情報をご覧ください' }}</p>
        <a
          href="https://hrplusplus.cn"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
        >
          {{ locale === 'zh' ? '访问 hrplusplus.cn' : 'hrplusplus.cnを見る' }}
          <Icon name="ph:arrow-up-right" class="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()

useSeoMeta({
  title: locale.value === 'ja' ? 'HR++製品 - 寧波楽科科情報技術有限公司' : 'HR++产品 - 宁波乐科科信息技术有限公司',
  description: locale.value === 'ja' ? 'HR++人事管理系统 - あなたをより理解するHRシステム、人事管理をよりシンプルかつ効率的に' : 'HR++人事管理系统 - 更懂你的HR系统，让人事管理更简单高效',
})

const selectedFeature = ref<string | null>(locale.value === 'ja' ? 'ダッシュボード' : '仪表盘')
const currentImageIndex = ref(0)

const features = [
  { icon: 'ph:chart-line-up', title: '仪表盘', titleEn: 'ダッシュボード', description: '直观显示人事入离转调信息', descriptionEn: '入社・退職・異動・昇進などの人事情報を直观的に表示' },
  { icon: 'ph:users', title: '花名册', titleEn: '名簿', description: '员工信息集中管理', descriptionEn: '従業員情報の集中管理' },
  { icon: 'ph:bell', title: '业务提醒', titleEn: 'ビジネスリマインダー', description: '待办事项智能提醒', descriptionEn: '未処理事項のインテリジェントリマインダー' },
  { icon: 'ph:clock', title: '考勤', titleEn: '勤怠', description: '考勤数据管理与统计', descriptionEn: '勤怠データ管理と統計' },
  { icon: 'ph:currency-dollar', title: '薪资', titleEn: '給与', description: '薪资计算与发放管理', descriptionEn: '給与計算と支払管理' },
  { icon: 'ph:chart-bar', title: '考核', titleEn: '考課', description: '员工绩效考核管理', descriptionEn: '従業員績效考核管理' },
  { icon: 'ph:flow-arrow', title: '流程管理', titleEn: 'プロセス管理', description: '审批流程自定义配置', descriptionEn: '承認プロセスのカスタマイズ設定' },
  { icon: 'ph:device-mobile', title: '移动端', titleEn: 'モバイル', description: '支持移动设备访问', descriptionEn: 'モバイルデバイスアクセスをサポート' },
]

// Feature images mapping
const featureImages: Record<string, string[]> = {
  '仪表盘': ['dashboard.png', 'dashboard-1.png', 'dashboard-2.png'],
  '花名册': ['roster.png'],
  '业务提醒': ['reminder.png'],
  '考勤': ['attendance.png'],
  '薪资': ['salary.png'],
  '考核': ['assessment.png'],
  '流程管理': ['workflow.png'],
  '移动端': ['mobile.jpg'],
  'ダッシュボード': ['dashboard.png', 'dashboard-1.png', 'dashboard-2.png'],
  '名簿': ['roster.png'],
  'ビジネスリマインダー': ['reminder.png'],
  '勤怠': ['attendance.png'],
  '給与': ['salary.png'],
  '考課': ['assessment.png'],
  'プロセス管理': ['workflow.png'],
  'モバイル': ['mobile.jpg'],
}

const currentImage = computed(() => {
  if (!selectedFeature.value) return null
  const images = featureImages[selectedFeature.value]
  if (!images || images.length === 0) return null
  return images[currentImageIndex.value]
})

const currentImages = computed(() => {
  if (!selectedFeature.value) return []
  return featureImages[selectedFeature.value] || []
})

function prevImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = currentImages.value.length - 1
  }
}

function nextImage() {
  if (currentImageIndex.value < currentImages.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

watch(selectedFeature, () => {
  currentImageIndex.value = 0
})

const highlights = [
  {
    icon: 'ph:database',
    title: '集約情報',
    titleEn: '集約情報',
    description: '人事情報を集約管理、いつでも呼び出し可能、企業の電子ドキュメントデータ喪失リスクを低減。事務人員への依存を減らし、人材資源管理のシステム化管理を実現。電子契約により企業に管理不便、署名面倒、查找不便などの問題を解決。',
    descriptionEn: '人事情報を集約管理、いつでも呼び出し可能、企業の電子ドキュメントデータ喪失リスクを低減。事務人員への依存を減らし、人材資源管理のシステム化管理を実現。電子契約により企業に管理不便、署名面倒、查找不便などの問題を解決。',
  },
  {
    icon: 'ph:coins',
    title: 'コスト削減・効率向上',
    titleEn: 'コスト削減・効率向上',
    description: '事務性業務の効率を向上、人材資源管理へのコスト投入を削減。企業プロセスを最適化し、情報化建設は企業革新の好機。紙の使用無駄を削減、情報伝送过程中的泄漏リスク降低。',
    descriptionEn: '事務性業務の効率を向上、人材資源管理へのコスト投入を削減。企業プロセスを最適化し、情報化建設は企業革新の好機。紙の使用無駄を削減、情報伝送过程中的泄漏リスク降低。',
  },
  {
    icon: 'ph:users-three',
    title: '内部コラボレーション',
    titleEn: '内部コラボレーション',
    description: '企業内部の情報共有を実現、内部コラボレーション作業を加速化し、従業員業務効率を向上。従業員を激励し、低価値業務の固定的思考パターンを打砕く。',
    descriptionEn: '企業内部の情報共有を実現、内部コラボレーション作業を加速化し、従業員業務効率を向上。従業員を激励し、低価値業務の固定的思考パターンを打砕く。',
  },
  {
    icon: 'ph:chart-pie-slice',
    title: '量化管理',
    titleEn: '量化管理',
    description: 'システムが自動的に各種レポート（給与、勤怠など）を生成し、人事情報を一目で把握。記憶をシステムに渡し、伝統的なオフィス方式に代替、待办事项模块化清单式管理。',
    descriptionEn: 'システムが自動的に各種レポート（給与、勤怠など）を生成し、人事情報を一目で把握。記憶をシステムに渡し、伝統的なオフィス方式に代替、待办事项模块化清单式管理。',
  },
]
</script>