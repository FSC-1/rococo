<template>
  <div>
    <!-- Company Culture -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Main Quote -->
          <div class="text-center mb-12">
            <p class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-relaxed">
              为梦想而创造，因机遇而努力
            </p>
          </div>

          <!-- Culture Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:globe" class="w-8 h-8 text-primary-600" />
              </div>
              <p class="text-gray-700 leading-relaxed">日本投资背景<br/>欧美管理风格</p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div class="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:lightning" class="w-8 h-8 text-secondary-600" />
              </div>
              <p class="text-gray-700 leading-relaxed">注重工作效率<br/>崇尚员工个性自由</p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:rocket" class="w-8 h-8 text-green-600" />
              </div>
              <p class="text-gray-700 leading-relaxed">期待与有志的您<br/>共同创造更美好的未来</p>
            </div>
          </div>

          <!-- Jobs Section -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <h3 class="text-2xl font-bold mb-6 text-center">热招职位</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="job in jobPositions"
                :key="job.title"
                class="border border-gray-200 rounded-xl p-5 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 cursor-pointer group"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">{{ job.title }}</h4>
                    <p class="text-gray-500 text-sm mt-1">{{ job.location }} | {{ job.type }}</p>
                  </div>
                  <Icon name="ph:arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-2xl font-bold mb-4">联系我们</h3>
          <p class="text-gray-600 mb-8">期待您的加入，如有意向请发送简历至 <strong>nb_sales@rococo.co.jp</strong></p>
          <CommonContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '加入我们 - 宁波乐科科信息技术有限公司',
  description: '加入乐科科，与有志之士共同创造更美好的未来',
})

const jobPositions = [
  { title: 'Java开发工程师', location: '宁波', type: '全职' },
  { title: '前端开发工程师', location: '宁波', type: '全职' },
  { title: '对日开发工程师', location: '宁波', type: '全职' },
  { title: 'ServiceNow开发顾问', location: '宁波', type: '全职' },
]
</script>
