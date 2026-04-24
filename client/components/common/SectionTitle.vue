<template>
  <div class="text-center mb-12">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
      {{ locale === 'ja' ? titleEn : title }}
    </h2>
    <p v-if="subtitle || subtitleEn" class="text-gray-500 text-lg max-w-2xl mx-auto">
      {{ locale === 'ja' ? subtitleEn : subtitle }}
    </p>
    <!-- Decorative line -->
    <div class="mt-6 flex items-center justify-center gap-3">
      <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500"></div>
      <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
      <div class="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()

defineProps<{
  title: string
  titleEn: string
  subtitle?: string
  subtitleEn?: string
}>()
</script>