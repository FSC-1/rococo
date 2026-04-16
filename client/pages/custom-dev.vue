<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">定制化开发</h1>
        <p class="text-xl text-gray-600">源于业务，高于需求，为您量身打造数字化解决方案</p>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务内容"
          subtitle="根据客户需求，提供从需求分析、系统设计、开发实施到运营维护的全流程定制化软件开发服务"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <div v-for="service in serviceItems" :key="service.title" class="card p-6">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon :name="service.icon" class="w-7 h-7 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <CommonSectionTitle
            title="对日开发优势"
            subtitle="我们拥有丰富的日系企业项目经验，特别擅长制造业、服务业等领域的业务系统开发"
          />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <p class="text-gray-600">年对日开发经验</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p class="text-gray-600">成功交付项目</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <p class="text-gray-600">日语项目经理</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开始您的项目" subtitle="联系我们，获取专业的定制化开发咨询服务" />
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
  title: '定制化开发 - 宁波乐科科信息技术有限公司',
  description: '提供企业软件定制、微信小程序开发、移动应用开发、对日开发等全流程服务',
})

const serviceItems = [
  { icon: 'ph:code', title: '企业软件定制', description: '源于业务，高于需求。提供高性价比的定制化解决方案' },
  { icon: 'ph:device-mobile', title: '微信小程序开发', description: '中国市场扩张必需的微信小程序开发能力' },
  { icon: 'ph:app-window', title: '移动应用开发', description: '多终端多平台开发，信息共享更高效，业务处理更便捷' },
  { icon: 'ph:translate', title: '对日开发', description: '全案专业日语沟通，多年大型对日项目开发维护' },
]
</script>
