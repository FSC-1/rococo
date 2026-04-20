<template>
  <section class="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4">核心产品</h2>
        <p class="section-subtitle">我们自主研发的数字化产品，助力企业信息化建设</p>
      </div>

      <!-- Product Card -->
      <div class="max-w-4xl mx-auto">
        <div class="card-hover bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Icon -->
            <div class="flex justify-center md:justify-start">
              <img src="/hr++.png" alt="HR++" class="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                HR++ 人事管理系统
              </h3>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                更懂你的HR系统，让人事管理更简单高效
              </p>

              <!-- Features -->
              <ul class="space-y-4 mb-8">
                <li v-for="(feature, index) in features" :key="feature" class="flex items-center group">
                  <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                    <Icon name="ph:check" class="w-4 h-4 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA -->
              <a
                href="https://hrplusplus.cn"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary inline-flex items-center group"
              >
                <span>访问官网</span>
                <Icon name="ph:arrow-up-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  '员工信息集中管理',
  '智能考勤薪资计算',
  '流程审批自定义',
  '移动端随时访问',
]
</script>