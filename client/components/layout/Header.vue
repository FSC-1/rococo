<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <img src="/rococorl.png" alt="Rococo" class="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center">
          <div
            v-for="item in navItems"
            :key="item.name"
            class="relative"
            @mouseenter="showDropdown(item.name)"
            @mouseleave="hideDropdown"
          >
            <NuxtLink
              :to="item.children ? '#' : item.path"
              class="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
              :class="{ 'text-primary-600': isActive(item) }"
            >
              {{ item.name }}
              <Icon
                v-if="item.children"
                name="ph:caret-down"
                class="w-3 h-3"
              />
            </NuxtLink>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="item.children && activeDropdown === item.name"
                class="absolute left-0 top-full pt-2 min-w-56"
                @mouseenter="showDropdown(item.name)"
              >
                <div class="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="flex items-center px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                    :class="{ 'text-primary-600 bg-primary-50': route.path === child.path }"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Phone CTA -->
        <div class="hidden md:flex items-center gap-3">
          <!-- WeChat Contact -->
          <div class="relative group">
            <button class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                <Icon name="ph:chat-circle-dots" class="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
              </div>
            </button>
            <div class="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div class="text-center mb-2">
                  <p class="text-sm font-medium text-gray-700">営業WeChat</p>
                </div>
                <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon name="ph:qr-code" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <!-- WeChat Official Account -->
          <div class="relative group">
            <button class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Icon name="ph:chat-centered-dots" class="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
              </div>
            </button>
            <div class="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div class="text-center mb-2">
                  <p class="text-sm font-medium text-gray-700">微信公众号</p>
                </div>
                <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon name="ph:qr-code" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <a
            href="tel:+86-574-28860655"
            class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
              <Icon name="ph:phone" class="w-4 h-4 text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <span class="font-medium">+86-574-28860655</span>
          </a>

          <!-- Language Switcher -->
          <button
            @click="toggleLocale"
            class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 border border-gray-200 rounded-lg hover:border-primary-300"
          >
            <Icon name="ph:globe" class="w-4 h-4" />
            <span class="font-medium text-sm">{{ locale === 'ja' ? '日本語' : '中文' }}</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon v-if="!isMobileMenuOpen" name="ph:list" class="w-6 h-6" />
          <Icon v-else name="ph:x" class="w-6 h-6" />
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
          <nav class="flex flex-col space-y-1">
            <template v-for="item in navItems" :key="item.name">
              <template v-if="item.children">
                <button
                  class="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300"
                  @click="toggleMobileSubmenu(item.name)"
                >
                  <span>{{ item.name }}</span>
                  <Icon
                    name="ph:caret-down"
                    class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': mobileExpandedMenu === item.name }"
                  />
                </button>
                <div v-if="mobileExpandedMenu === item.name" class="overflow-hidden">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path"
                    class="flex items-center pl-8 pr-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300 ml-2 mb-1"
                    @click="isMobileMenuOpen = false"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </div>
              </template>
              <NuxtLink
                v-else
                :to="item.path"
                class="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
            <a
              href="tel:+86-574-28860655"
              class="px-4 py-3 text-primary-600 bg-primary-50 rounded-xl font-medium flex items-center gap-2 mt-2"
            >
              <Icon name="ph:phone" class="w-5 h-5" />
              +86-574-28860655
            </a>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, toggleLocale } = useLocale()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const mobileExpandedMenu = ref<string | null>(null)

type NavItem = {
  name: string
  path?: string
  children?: { name: string; path: string }[]
}

const navItems = computed<NavItem[]>(() => [
  { name: locale.value === 'zh' ? '首页' : 'ホーム', path: '/' },
  {
    name: locale.value === 'zh' ? '业务介绍' : 'ビジネス紹介',
    children: [
      { name: locale.value === 'zh' ? '定制化开发' : 'カスタマイズ開発', path: '/custom-dev' },
      { name: locale.value === 'zh' ? '低代码平台' : 'ローコードプラットフォーム', path: '/low-code' },
      { name: locale.value === 'zh' ? '数字化转型' : 'デジタルトランスフォーメーション', path: '/digital-transform' },
      { name: locale.value === 'zh' ? '产品-HR++' : '製品-HR++', path: '/product-hr' },
    ],
  },
  {
    name: locale.value === 'zh' ? '数字化转型' : 'デジタルトランスフォーメーション',
    children: [
      { name: locale.value === 'zh' ? 'IT咨询' : 'ITコンサル', path: '/tech-consulting' },
      { name: locale.value === 'zh' ? '旧系统重构' : '旧システム再構築', path: '/system-refactor' },
    ],
  },
  {
    name: locale.value === 'zh' ? '低代码平台' : 'ローコードプラットフォーム',
    children: [
      { name: locale.value === 'zh' ? 'ServiceNow开发' : 'ServiceNow開発', path: '/servicenow' },
      { name: locale.value === 'zh' ? 'Power Platform' : 'Power Platform', path: '/power-platform' },
    ],
  },
  { name: locale.value === 'zh' ? 'AI自动化解决方案' : 'AI自動化ソリューション', path: '/ai-automation' },
  { name: locale.value === 'zh' ? '客户案例' : '導入事例', path: '/cases' },
  {
    name: locale.value === 'zh' ? '公司简介' : '会社概要',
    children: [
      { name: locale.value === 'zh' ? 'Rococo集团' : 'ロココグループ', path: '/about-group' },
      { name: locale.value === 'zh' ? 'Rococo中国' : 'ロココ中国', path: '/about-china' },
      { name: locale.value === 'zh' ? '招聘页' : '採用情報', path: '/join-us' },
    ],
  },
])

function showDropdown(name: string) {
  activeDropdown.value = name
}

function hideDropdown() {
  activeDropdown.value = null
}

function isActive(item: NavItem) {
  if (item.children && item.children.length) {
    return item.children.some(c => route.path === c.path)
  }
  return route.path === item.path
}

function toggleMobileSubmenu(name: string) {
  mobileExpandedMenu.value = mobileExpandedMenu.value === name ? null : name
}

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  activeDropdown.value = null
  mobileExpandedMenu.value = null
})
</script>
