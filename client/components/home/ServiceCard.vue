<template>
  <NuxtLink :to="to" class="group block">
    <div class="card-hover bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-primary-200/50 hover:shadow-2xl transition-all duration-500">
      <!-- Icon -->
      <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <Icon :name="icon" class="w-8 h-8 text-primary-600" />
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {{ locale === 'ja' ? titleEn : title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ locale === 'ja' ? descriptionEn : description }}
      </p>

      <!-- Link -->
      <div class="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
        <span>{{ locale === 'ja' ? '詳細を見る' : '了解更多' }}</span>
        <Icon name="ph:arrow-right" class="w-5 h-5 ml-2" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { locale } = useLocale()

defineProps<{
  icon: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  to: string
}>()
</script>