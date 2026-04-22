<template>
  <section class="section-padding relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img src="/6_8.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gray-50/70"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="section-title mb-4">最新资讯</h2>
        <p class="section-subtitle">了解乐科科最新动态</p>
      </div>

      <!-- News Grid -->
      <div v-if="newsList.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(news, index) in newsList"
          :key="news.id"
          class="group card-hover bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <!-- Image -->
          <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden relative">
            <img
              v-if="news.coverImage"
              :src="news.coverImage.url"
              :alt="news.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Icon name="ph:newspaper" class="w-12 h-12 text-gray-300" />
            </div>
            <!-- Category badge overlay -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-600 shadow-sm">
                {{ news.category === 'news' ? '新闻' : '公告' }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Date -->
            <div class="flex items-center text-sm text-gray-400 mb-3">
              <Icon name="ph:calendar" class="w-4 h-4 mr-1" />
              {{ formatDate(news.publishedAt) }}
            </div>

            <!-- Title -->
            <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
              {{ news.title }}
            </h3>

            <!-- Summary -->
            <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {{ news.summary }}
            </p>

            <!-- Read more -->
            <div class="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
              <span>阅读更多</span>
              <Icon name="ph:arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="ph:newspaper" class="w-12 h-12 text-gray-300" />
        </div>
        <p class="text-gray-500 text-lg">暂无资讯</p>
      </div>

      <!-- View More Button -->
      <div v-if="newsList.length > 0" class="text-center mt-12">
        <NuxtLink to="/cases" class="btn-outline inline-flex items-center group">
          <span>查看更多</span>
          <Icon name="ph:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  newsList: any[]
}>()

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>