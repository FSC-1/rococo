<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <span class="text-white font-bold text-lg">R</span>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">乐科科</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 group"
          >
            {{ item.name }}
            <!-- Animated underline -->
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
        </nav>

        <!-- Phone CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a
            href="tel:0574-28860655"
            class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
              <Icon name="ph:phone" class="w-4 h-4 text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <span class="font-medium">0574-28860655</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Transition name="icon" mode="out-in">
            <Icon v-if="!isMobileMenuOpen" name="ph:list" class="w-6 h-6" key="menu" />
            <Icon v-else name="ph:x" class="w-6 h-6" key="close" />
          </Transition>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden py-6 border-t border-gray-100">
          <nav class="flex flex-col space-y-2">
            <NuxtLink
              v-for="(item, index) in navItems"
              :key="item.path"
              :to="item.path"
              class="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
            <a
              href="tel:0574-28860655"
              class="px-4 py-3 text-primary-600 bg-primary-50 rounded-xl font-medium flex items-center gap-2"
            >
              <Icon name="ph:phone" class="w-5 h-5" />
              0574-28860655
            </a>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '定制化开发', path: '/custom-dev' },
  { name: '低代码平台', path: '/low-code' },
  { name: '数字化转型', path: '/digital-transform' },
  { name: '产品-HR++', path: '/product-hr' },
  { name: '客户案例', path: '/cases' },
  { name: '关于我们', path: '/about' },
]

// Close mobile menu on route change
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: all 0.2s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}
</style>