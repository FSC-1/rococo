<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <img src="/hr++.png" alt="HR++" class="w-48 h-48 mx-auto mb-6 object-contain" />
        <h1 class="text-4xl md:text-5xl font-bold mb-4">HR++ 人事管理系统</h1>
        <p class="text-xl text-gray-600">更懂你的HR系统，让人事管理更简单高效</p>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="主要功能"
          subtitle="全方位覆盖企业人事管理需求"
        />

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <!-- Feature Cards -->
          <div class="lg:col-span-2 grid grid-cols-2 gap-4 stagger-children">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="card p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
              :class="selectedFeature === feature.title ? 'ring-2 ring-primary-500 bg-primary-50' : ''"
              @click="selectedFeature = feature.title"
            >
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon :name="feature.icon" class="w-6 h-6 text-primary-600" />
              </div>
              <h3 class="text-base font-semibold mb-1">{{ feature.title }}</h3>
              <p class="text-gray-500 text-xs">{{ feature.description }}</p>
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
                <p>暂无截图</p>
              </div>
              <div v-else class="text-center text-gray-400">
                <Icon name="ph:image" class="w-16 h-16 mx-auto mb-4" />
                <p>点击左侧功能查看截图</p>
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
          title="产品特点"
          subtitle="为企业管理带来全新的数字化体验"
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(highlight, index) in highlights" :key="highlight.title" class="card p-6">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Icon :name="highlight.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ highlight.title }}</h3>
                <p class="text-gray-600">{{ highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4">了解更多</h2>
        <p class="text-xl text-primary-100 mb-8">访问 HR++ 官网，了解更多产品详情</p>
        <a
          href="https://hrplusplus.cn"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
        >
          访问 hrplusplus.cn
          <Icon name="ph:arrow-up-right" class="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'HR++产品 - 宁波乐科科信息技术有限公司',
  description: 'HR++人事管理系统 - 更懂你的HR系统，让人事管理更简单高效',
})

const selectedFeature = ref<string | null>('仪表盘')
const currentImageIndex = ref(0)

const features = [
  { icon: 'ph:chart-line-up', title: '仪表盘', description: '直观显示人事入离转调信息' },
  { icon: 'ph:users', title: '花名册', description: '员工信息集中管理' },
  { icon: 'ph:bell', title: '业务提醒', description: '待办事项智能提醒' },
  { icon: 'ph:clock', title: '考勤', description: '考勤数据管理与统计' },
  { icon: 'ph:currency-dollar', title: '薪资', description: '薪资计算与发放管理' },
  { icon: 'ph:chart-bar', title: '考核', description: '员工绩效考核管理' },
  { icon: 'ph:flow-arrow', title: '流程管理', description: '审批流程自定义配置' },
  { icon: 'ph:device-mobile', title: '移动端', description: '支持移动设备访问' },
]

// Feature images mapping
const featureImages: Record<string, string[]> = {
  '仪表盘': ['/dashboard.png', '/dashboard-1.png', '/dashboard-2.png'],
  '花名册': ['/roster.png'],
  '业务提醒': ['/reminder.png'],
  '考勤': ['/attendance.png'],
  '薪资': ['/salary.png'],
  '考核': ['/assessment.png'],
  '流程管理': ['/workflow.png'],
  '移动端': ['/mobile.jpg'],
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
    title: '集约信息',
    description: '人事信息集约管理，随时调用，降低企业电子文档数据遗失风险。减少对事务人员的依赖性，实现人力资源管理的系统化管理。通过电子合同为企业解决管理不便、签署繁琐、查找不便等问题。',
  },
  {
    icon: 'ph:coins',
    title: '降本提效',
    description: '提升事务性工作的效率，减少企业在人力资源管理的成本投入。优化企业流程，信息化建设是企业革新的好时机。减少纸张浪费，降低信息传递过程中泄漏的风险。',
  },
  {
    icon: 'ph:users-three',
    title: '内部协同',
    description: '实现企业内部信息共享，加快内部协同作业，提升员工工作效率。激发员工，打破一成不变做低价值工作的思维模式。',
  },
  {
    icon: 'ph:chart-pie-slice',
    title: '量化管理',
    description: '系统自动生成各种报表（如薪资、考勤），让人事信息一目了然。将记忆交给系统，替代传统的办公方式，待办事项模块化清单式管理。',
  },
]
</script>