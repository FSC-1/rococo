<template>
  <section class="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4">核心产品</h2>
        <p class="section-subtitle">我们自主研发的数字化产品，助力企业信息化建设</p>
      </div>

      <!-- Product Card -->
      <div class="max-w-5xl mx-auto">
        <div class="card-hover bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Left: Features -->
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                HR++ 人事管理系统
              </h3>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                更懂你的HR系统，让人事管理更简单高效
              </p>

              <!-- Features with click to show images -->
              <ul class="space-y-4 mb-8">
                <li
                  v-for="feature in features"
                  :key="feature.title"
                  class="flex items-center group cursor-pointer p-3 rounded-xl transition-all duration-300"
                  :class="selectedFeature === feature.title ? 'bg-primary-50 ring-2 ring-primary-500' : 'hover:bg-gray-50'"
                  @click="selectedFeature = feature.title"
                >
                  <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                    <Icon :name="feature.icon" class="w-4 h-4 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <span class="text-gray-700">{{ feature.title }}</span>
                </li>
              </ul>

              <!-- CTA -->
              <a
                href="https://hrplusplus.cn"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary inline-flex items-center group"
              >
                <span>访问官网</span>
                <Icon name="ph:arrow-up-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>

            <!-- Right: Image Display -->
            <div class="flex justify-center">
              <div class="bg-gray-100 rounded-2xl overflow-hidden w-full aspect-[4/3] relative">
                <img
                  v-if="currentImage"
                  :src="currentImage"
                  :alt="selectedFeature"
                  class="w-full h-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  :class="selectedFeature === '移动端随时访问' ? 'object-contain' : 'object-cover'"
                  @click="showLightbox = true"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-center text-gray-400">
                  <div>
                    <Icon name="ph:image" class="w-16 h-16 mx-auto mb-4" />
                    <p>点击功能查看演示</p>
                  </div>
                </div>

                <!-- Navigation Arrows -->
                <div class="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
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
              </div>
            </div>

            <!-- Lightbox -->
            <Teleport to="body">
              <Transition name="fade">
                <div
                  v-if="showLightbox && currentImage"
                  class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  @click="showLightbox = false"
                >
                  <div class="relative max-w-4xl max-h-full">
                    <img
                      :src="currentImage"
                      :alt="selectedFeature"
                      class="max-w-full max-h-[90vh] rounded-lg"
                      :class="selectedFeature === '移动端随时访问' ? 'object-contain' : 'object-cover'"
                    />
                    <button
                      class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                      @click="showLightbox = false"
                    >
                      <Icon name="ph:x" class="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </Transition>
            </Teleport>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const selectedFeature = ref<string | null>('员工信息集中管理')
const currentImageIndex = ref(0)
const showLightbox = ref(false)

function prevImage() {
  const currentIndex = features.findIndex(f => f.title === selectedFeature.value)
  if (currentIndex > 0) {
    selectedFeature.value = features[currentIndex - 1].title
  } else {
    selectedFeature.value = features[features.length - 1].title
  }
}

function nextImage() {
  const currentIndex = features.findIndex(f => f.title === selectedFeature.value)
  if (currentIndex < features.length - 1) {
    selectedFeature.value = features[currentIndex + 1].title
  } else {
    selectedFeature.value = features[0].title
  }
}

const features = [
  { icon: 'ph:users', title: '员工信息集中管理' },
  { icon: 'ph:chart-bar', title: '智能考勤薪资计算' },
  { icon: 'ph:flow-arrow', title: '流程审批自定义' },
  { icon: 'ph:device-mobile', title: '移动端随时访问' },
]

// Feature images mapping
const featureImages: Record<string, string[]> = {
  '员工信息集中管理': ['/roster.png'],
  '智能考勤薪资计算': ['/attendance.png', '/salary.png'],
  '流程审批自定义': ['/workflow.png'],
  '移动端随时访问': ['/移动端.jpg'],
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

watch(selectedFeature, () => {
  currentImageIndex.value = 0
})
</script>