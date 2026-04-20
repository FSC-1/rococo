<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">定制化开发</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">源于业务，高于需求的开发流程</p>
        <div class="flex justify-center gap-4 mb-6">
          <span class="text-gray-600">高性价比解决方案</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">甩手式服务</span>
        </div>
        <p class="text-lg text-gray-600">为您提供从需求分析、系统设计、开发实施到运营维护的全流程定制化软件开发服务</p>
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

    <!-- Service Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务流程"
          subtitle="标准化流程管理，确保项目高质量交付"
        />

        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(step, index) in processSteps" :key="step.title" class="relative">
              <!-- Step number -->
              <div class="absolute -top-3 -left-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {{ index + 1 }}
              </div>
              <!-- Connector line -->
              <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2 -translate-y-1/2"></div>
              <!-- Card -->
              <div class="bg-white rounded-xl p-5 pt-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h4 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
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

    <!-- Customer Cases -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle title="客户案例" subtitle="查看定制化开发的成功案例" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=esg" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            ESG 平台案例
          </NuxtLink>
          <NuxtLink to="/cases?category=japan-dev" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            对日开发案例
          </NuxtLink>
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

const processSteps = [
  { title: '初步沟通', description: '了解企业信息化的目的、想要解决的课题，就项目效果部分与企业达成一致意见' },
  { title: '确定需求', description: '基于企业当下以及未来的业务发展规划，结合企业想法，给出专业意见建议' },
  { title: '方案报价', description: '基于前期沟通确认的需求，出具项目方案与对应报价' },
  { title: '签订协议', description: '双方就开发周期、沟通机制、交付成果物、价格等关键事项达成一致，签订书面协议' },
  { title: '程序开发', description: '按协议约定推进开发工作，过程中定期向企业汇报开发进度，并提前告知企业需配合事项' },
  { title: '项目验收', description: '根据约定的验收标准/式样进行项目测试与验证，双方签订验收报告' },
  { title: '软件交付', description: '企业签署验收单，正式交付软件产品' },
]
</script>
