<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">低代码平台开发</h1>
        <p class="text-xl text-gray-600">快速构建，灵活部署，让业务创新触手可及</p>
      </div>
    </section>

    <!-- ServiceNow -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-4">ServiceNow</h2>
            <p class="text-gray-600 mb-6">
              ServiceNow是一款基于低代码和SaaS模型的企业服务管理平台，通过简化开发流程和提供云端服务，实现快速、灵活的业务应用部署。
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">跨系统应用集成</h4>
                  <p class="text-gray-600 text-sm">实现数据一体化，打通企业信息孤岛</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">内容自动连接</h4>
                  <p class="text-gray-600 text-sm">提高开发速度，降低开发成本</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">简化业务流程</h4>
                  <p class="text-gray-600 text-sm">提高工作效率，实现流程自动化</p>
                </div>
              </div>
            </div>
            <div class="mt-8 p-4 bg-primary-50 rounded-lg">
              <p class="text-primary-800 font-medium">
                乐科科中国拥有 ServiceNow 8年项目实施经验，合作企业包括通信、物流、金融、制造等多个领域。
              </p>
            </div>
          </div>
          <div class="bg-gray-100 rounded-2xl p-8">
            <div class="text-center">
              <Icon name="ph:gear-six" class="w-24 h-24 text-primary-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">ServiceNow</h3>
              <p class="text-gray-600">企业服务管理平台</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Power Platform -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 bg-gray-100 rounded-2xl p-8">
            <div class="text-center">
              <Icon name="ph:microsoft-excel-logo" class="w-24 h-24 text-green-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">Microsoft Power Platform</h3>
              <p class="text-gray-600">低代码开发平台</p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold mb-4">Power Platform</h2>
            <p class="text-gray-600 mb-6">
              直观的UI和低代码开发，无需高深IT知识即可使用，弥补IT人才短缺，灵活应对不断变化的业务现场。
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">一站式服务</h4>
                  <p class="text-gray-600 text-sm">从初期导入到效果验证的全程服务</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">工具实施支援</h4>
                  <p class="text-gray-600 text-sm">PowerApps/PowerAutomate等工具的专业实施</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="ph:check-circle" class="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold">流程标准化</h4>
                  <p class="text-gray-600 text-sm">业务流程标准化与自动化</p>
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
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="了解更多" subtitle="欢迎联系我们，获取低代码平台开发的专业咨询" />
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
  title: '低代码平台开发 - 宁波乐科科信息技术有限公司',
  description: '基于ServiceNow与Microsoft Power Platform的低代码平台开发服务',
})
</script>
