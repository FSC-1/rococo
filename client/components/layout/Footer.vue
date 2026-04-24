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
            专业的数字化转型服务商，致力于为企业提供信息化咨询、软件开发与维护服务。
          </p>
          <div class="space-y-3">
            <div class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
              <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                <Icon name="ph:map-pin" class="w-5 h-5" />
              </div>
              <span>宁波市鄞州区天童北路933号和邦大厦A1802室</span>
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
          <h4 class="text-white font-semibold mb-6 text-lg">快速链接</h4>
          <ul class="space-y-3">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 group"
              >
                <Icon name="ph:caret-right" class="w-4 h-4 mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-lg">核心服务</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="flex items-center text-gray-400">
              <Icon name="ph:seal" class="w-4 h-4 mr-2 text-secondary-500" />
              {{ service }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2026 宁波乐科科信息技术有限公司</span>
            <span class="px-2 py-0.5 bg-gray-800 rounded text-xs">浙ICP备10037731号-5</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-500 text-sm">Rococo Group</span>
            <span class="text-gray-700">|</span>
            <span class="text-primary-400 text-sm font-medium">让信息化更容易</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: '定制化开发', path: '/custom-dev' },
  { name: '低代码平台', path: '/low-code' },
  { name: 'AI自动化解决方案', path: '/ai-automation' },
  { name: '数字化转型', path: '/digital-transform' },
  { name: '产品-HR++', path: '/product-hr' },
  { name: '客户案例', path: '/cases' },
  { name: '关于我们', path: '/about' },
]

const services = [
  '定制化软件开发',
  'ServiceNow开发',
  'Power Platform',
  'AI自动化解决方案',
  '数字化咨询',
  '系统重构',
]
</script>