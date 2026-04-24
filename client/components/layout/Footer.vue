<template>
  <footer class="bg-gray-900 text-gray-300 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <img src="/rococoud.png" alt="Rococo" class="h-12 w-auto" />
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
            {{ locale === 'ja' ? '专业的なデジタルトランスフォーメーションサービス提供商であり、企業に情報化コンサルティング、ソフトウェア開発と保守サービスを提供することに致力しています。' : '专业的数字化转型服务商，致力于为企业提供信息化咨询、软件开发与维护服务。' }}
          </p>
          <div class="space-y-3">
            <div class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
              <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                <Icon name="ph:map-pin" class="w-5 h-5" />
              </div>
              <span>{{ locale === 'ja' ? '浙江省寧波市鄞州区天童北路933号和邦大厦A1802室' : '宁波市鄞州区天童北路933号和邦大厦A1802室' }}</span>
            </div>
            <div class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
              <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                <Icon name="ph:phone" class="w-5 h-5" />
              </div>
              <a href="tel:+86-574-28860655" class="hover:text-primary-400 transition-colors">+86-574-28860655</a>
            </div>
            <div class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
              <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                <Icon name="ph:envelope" class="w-5 h-5" />
              </div>
              <a href="mailto:nb_sales@rococo.co.jp" class="hover:text-primary-400 transition-colors">nb_sales@rococo.co.jp</a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-lg">{{ locale === 'ja' ? 'クイックリンク' : '快速链接' }}</h4>
          <ul class="space-y-3">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 group"
              >
                <Icon name="ph:caret-right" class="w-4 h-4 mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                {{ locale === 'ja' ? item.nameEn : item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-lg">{{ locale === 'ja' ? 'コアサービス' : '核心服务' }}</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name" class="flex items-center text-gray-400">
              <Icon name="ph:seal" class="w-4 h-4 mr-2 text-secondary-500" />
              {{ locale === 'ja' ? service.nameEn : service.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <span>{{ locale === 'ja' ? '© 2026 寧波楽科科情報技術有限公司' : '© 2026 宁波乐科科信息技术有限公司' }}</span>
            <span class="px-2 py-0.5 bg-gray-800 rounded text-xs">{{ locale === 'ja' ? '浙ICP備10037731号-5' : '浙ICP备10037731号-5' }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-500 text-sm">Rococo Group</span>
            <span class="text-gray-700">|</span>
            <span class="text-primary-400 text-sm font-medium">{{ locale === 'ja' ? '情報化をより容易にする' : '让信息化更容易' }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useLocale()

const quickLinks = [
  { name: '定制化开发', nameEn: 'カスタマイズ開発', path: '/custom-dev' },
  { name: '低代码平台', nameEn: 'ローコードプラットフォーム', path: '/low-code' },
  { name: 'AI自动化解决方案', nameEn: 'AI自動化ソリューション', path: '/ai-automation' },
  { name: '数字化转型', nameEn: 'DX', path: '/digital-transform' },
  { name: '产品-HR++', nameEn: 'HR++', path: '/product-hr' },
  { name: '客户案例', nameEn: '導入事例', path: '/cases' },
  { name: '关于我们', nameEn: '会社概要', path: '/about' },
]

const services = [
  { name: '定制化软件开发', nameEn: 'カスタマイズソフトウェア開発' },
  { name: 'ServiceNow开发', nameEn: 'ServiceNow開発' },
  { name: 'Power Platform', nameEn: 'Power Platform' },
  { name: 'AI自动化解决方案', nameEn: 'AI自動化ソリューション' },
  { name: '数字化咨询', nameEn: 'デジタルコンサルティング' },
  { name: '系统重构', nameEn: 'システム再構築' },
]
</script>