<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Rococo 集团</h1>
        <p class="text-xl text-gray-600">珍视"心"，成为客户值得信赖的数字化转型合作伙伴</p>
        <p class="text-lg text-primary-600 mt-2">1994年创业，东证标准板块上市（JPX）</p>
      </div>
    </section>

    <!-- Group Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">关于 Rococo</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Rococo集团创立于1994年，是一家以"心"为核心理念的日本IT服务企业。正如公司名称的由来，我们珍视"心"，在日常的企业活动中始终贯彻这一理念，致力于成为客户值得信赖的数字化转型合作伙伴。
            </p>
          </div>

          <!-- Global Presence -->
          <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 class="text-2xl font-bold mb-6 text-center">全球布局</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 class="font-semibold text-primary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:flag" class="w-5 h-5" />
                  日本
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">大阪总公司</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">东京总公司</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">全球技术中心</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">福冈营业所</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm col-span-2">
                    <p class="font-medium text-gray-900">松江BASE</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:globe" class="w-5 h-5" />
                  海外
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">中国（上海、宁波）</p>
                    <p class="text-sm text-gray-600">营销中心 + 研发中心</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">菲律宾（马尼拉、宿雾）</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">波兰</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center text-gray-600 mt-6 text-sm">
              构建了覆盖亚洲及欧洲的服务网络，为客户提供全球化、本地化的技术支持
            </p>
          </div>

          <!-- Group Development Milestones -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-6 text-center">集团发展历程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">1994年</div>
                <p class="text-gray-700">Rococo集团创立</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2005年</div>
                <p class="text-gray-700">正式进入中国市场，开启国际化布局</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2023年</div>
                <p class="text-gray-700">东京证券交易所标准板块成功上市（JPX）</p>
              </div>
            </div>
            <div class="text-center mt-4">
              <div class="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl">
                <div class="text-2xl font-bold">2024年</div>
                <p class="text-sm opacity-90">创业30周年，持续以创新技术推动业务增长</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="联系我们" subtitle="欢迎来电或在线咨询" />
          <div class="mt-8">
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Rococo集团 - 宁波乐科科信息技术有限公司',
  description: '了解Rococo集团的发展历程和全球布局',
})
</script>
