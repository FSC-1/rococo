<template>
  <section class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Large gradient orbs - reduced blur and size for performance -->
      <div class="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/10 blur-2xl floating"></div>
      <div class="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary-200/30 to-secondary-300/10 blur-2xl floating floating-delay-2"></div>

      <!-- Grid pattern - removed expensive floating particles -->
      <div class="absolute inset-0 opacity-[0.02]" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23000000&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="container-custom relative z-10 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full text-primary-700 text-sm font-medium mb-8 scale-in" style="animation-delay: 0ms;">
          <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
          {{ locale === 'zh' ? '专业的数字化转型服务商' : '専門的なデジタルトランスフォーメーションサービスプロバイダー' }}
        </div>

        <!-- Main Heading -->
        <div class="mb-6 fade-up" style="animation-delay: 100ms;">
          <p class="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4 leading-[1.8]">
            {{ locale === 'zh' ? '我们的努力都是为了' : '私たちのすべての取り組みは' }}
          </p>
          <p class="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.6] bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            {{ locale === 'zh' ? '让数字化，更容易' : '情報化をより容易にする' }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up" style="animation-delay: 300ms;">
          <NuxtLink to="/cases" class="btn-primary group">
            <span>{{ locale === 'ja' ? '事例を見る' : '查看案例' }}</span>
            <Icon name="ph:arrow-right" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </NuxtLink>
          <NuxtLink to="/about" class="btn-outline group">
            <span>{{ locale === 'ja' ? '詳細を見る' : '了解更多' }}</span>
            <Icon name="ph:chat-circle-text" class="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200/50 fade-up" style="animation-delay: 400ms;">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">30+</div>
            <div class="text-gray-500 text-sm mt-1">{{ locale === 'ja' ? '年の業界経験' : '年行业经验' }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">200+</div>
            <div class="text-gray-500 text-sm mt-1">{{ locale === 'ja' ? '成功事例' : '成功案例' }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">50+</div>
            <div class="text-gray-500 text-sm mt-1">{{ locale === 'ja' ? '専門チーム' : '专业团队' }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 fade-up" style="animation-delay: 500ms;">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-2">
        <div class="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLocale()
</script>