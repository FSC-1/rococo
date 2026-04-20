<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">ServiceNow 开发</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">8年项目实施经验，覆盖多个行业领域</p>
        <p class="text-lg text-gray-600">基于低代码和SaaS模型的企业服务管理平台，快速、灵活的业务应用部署</p>
      </div>
    </section>

    <!-- ServiceNow Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="ServiceNow 概述"
          subtitle="ServiceNow是一款基于低代码和SaaS模型的企业服务管理平台"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <p class="text-lg text-gray-600 leading-relaxed">
            通过简化开发流程和提供云端服务，ServiceNow实现快速、灵活的业务应用部署。我们的团队拥有8年ServiceNow项目实施经验，合作企业包括通信、物流、金融、制造等多个领域。
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="ServiceNow 特点"
          subtitle="核心能力，助力企业数字化转型"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:arrows-merge" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">跨系统应用集成</h3>
            <p class="text-gray-600">实现数据一体化，打破信息孤岛</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:link" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">内容自动连接</h3>
            <p class="text-gray-600">提高开发速度，加速业务上线</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:flow-arrow" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">简化业务流程</h3>
            <p class="text-gray-600">提高工作效率，降低运营成本</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Expertise -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <CommonSectionTitle
            title="乐科科中国 ServiceNow Team"
            subtitle="专业团队，丰富的项目实施经验"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:medal" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">8年+实施经验</h4>
                  <p class="text-gray-600">深耕ServiceNow平台多年，积累丰富项目经验</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:buildings" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">多行业覆盖</h4>
                  <p class="text-gray-600">通信、物流、金融、制造等多个领域</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:users-three" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">专业团队</h4>
                  <p class="text-gray-600">持证顾问，专业的实施能力</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:handshake" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">成功案例</h4>
                  <p class="text-gray-600">众多大型项目成功交付</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="开发实例"
          subtitle="改善劳动市场，改善消费选择，形成绿色商业模式"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=servicenow" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            HRSD決裁システム
          </NuxtLink>
          <NuxtLink to="/cases?category=servicenow" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            App Engine 开发案例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开始您的项目" subtitle="联系我们，获取专业的ServiceNow实施咨询服务" />
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
  title: 'ServiceNow开发 - 宁波乐科科信息技术有限公司',
  description: '提供ServiceNow实施服务，拥有8年项目经验，覆盖通信、物流、金融、制造等多个领域',
})
</script>
