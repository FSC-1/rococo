<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">顧客事例</h1>
        <p class="text-xl text-gray-600">成功事例展示、品質が実力を証明します</p>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          <button
            v-for="cat in categories"
            :key="cat.value"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-colors',
              selectedCategory === cat.value
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
            @click="selectedCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Cases Grid -->
        <div v-if="filteredCases.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <article
            v-for="caseItem in filteredCases"
            :key="caseItem.id"
            class="card group cursor-pointer"
          >
            <div class="aspect-video bg-gray-100 overflow-hidden">
              <img
                v-if="caseItem.coverImage"
                :src="caseItem.coverImage.url"
                :alt="caseItem.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <Icon name="ph:image" class="w-12 h-12 text-gray-300" />
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span class="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs">
                  {{ getCategoryLabel(caseItem.category) }}
                </span>
              </div>
              <h3 class="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                {{ caseItem.title }}
              </h3>
              <p class="text-gray-600 text-sm line-clamp-2">
                {{ caseItem.summary }}
              </p>
            </div>
          </article>
        </div>

        <div v-else class="text-center text-gray-500 py-12">
          <Icon name="ph:folder-open" class="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p>ただいま事例がありません</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="協力を求める" title-en="協力を求める" subtitle="同様のニーズをお持ちの場合は、お問い合わせください" subtitle-en="同様のニーズをお持ちの場合は、お問い合わせください" />
          <div class="mt-8">
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { caseCategories } from '~/utils/constants'

useSeoMeta({
  title: '顧客事例 - 寧波楽科科情報技術有限公司',
  description: '楽科科グループの成功事例をご覧ください。AI自動化、ESG、対日開発、ServiceNowなどの分野での専門的能力について',
})

const route = useRoute()
const { fetchCaseStudies } = useStrapi()

const selectedCategory = ref((route.query.category as string) || 'all')
const categories = [
  { value: 'all', label: 'すべて' },
  ...caseCategories,
]

// Fetch cases
const response = await fetchCaseStudies({ pageSize: 50 })
const allCases = response?.data || []

// Watch for route query changes to update filter
watch(
  () => route.query.category,
  (newCategory) => {
    selectedCategory.value = (newCategory as string) || 'all'
  }
)

const filteredCases = computed(() => {
  if (selectedCategory.value === 'all') {
    return allCases
  }
  return allCases.filter((c: any) => c.category === selectedCategory.value)
})

const getCategoryLabel = (value: string) => {
  const cat = caseCategories.find((c) => c.value === value)
  return cat ? cat.label : value
}
</script>