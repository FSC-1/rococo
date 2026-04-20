<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Power Platform</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">直观的UI和低代码开发，让业务创新触手可及</p>
        <p class="text-lg text-gray-600">弥补IT人才短缺，灵活应对不断变化的业务现场</p>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="Power Platform 平台特点"
          subtitle="微软低代码平台，快速构建企业级应用"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:mouse" class="w-7 h-7 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">直观的UI</h3>
            <p class="text-gray-600 text-sm">无需高深IT知识即可使用</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:code" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">低代码开发</h3>
            <p class="text-gray-600 text-sm">快速构建业务应用</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">弥补人才短缺</h3>
            <p class="text-gray-600 text-sm">降低IT技术门槛</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:lightning" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">灵活应对变化</h3>
            <p class="text-gray-600 text-sm">快速响应业务需求</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务内容"
          subtitle="从初期导入到效果验证的一站式服务"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:path" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">PowerApps 实施</h3>
            <p class="text-gray-600">快速构建企业级移动应用，支持多终端访问</p>
          </div>
          <div class="card p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:flow-arrow" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">Power Automate</h3>
            <p class="text-gray-600">业务流程标准化与自动化，提高运营效率</p>
          </div>
          <div class="card p-6">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:chart-line" class="w-6 h-6 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">效果验证</h3>
            <p class="text-gray-600">从导入到效果验证的完整服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务流程"
          subtitle="一站式服务，确保项目成功落地"
        />
        <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
            <h4 class="font-semibold mb-2">需求调研</h4>
            <p class="text-gray-600 text-sm">了解业务流程和需求</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
            <h4 class="font-semibold mb-2">方案设计</h4>
            <p class="text-gray-600 text-sm">制定解决方案</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
            <h4 class="font-semibold mb-2">开发实施</h4>
            <p class="text-gray-600 text-sm">快速迭代开发</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
            <h4 class="font-semibold mb-2">效果验证</h4>
            <p class="text-gray-600 text-sm">持续优化改进</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="客户案例" subtitle="查看Power Platform的成功案例" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=power-platform" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            查看更多案例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开始您的项目" subtitle="联系我们，获取专业的Power Platform实施咨询服务" />
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
  title: 'Power Platform - 宁波乐科科信息技术有限公司',
  description: '提供PowerApps、Power Automate等微软低代码平台实施服务，一站式服务从导入到效果验证',
})
</script>
