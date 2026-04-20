<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">系统重构</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">老旧系统现代化改造专家</p>
        <p class="text-lg text-gray-600">在保障业务连续性的前提下，提升系统性能、安全性和可维护性</p>
      </div>
    </section>

    <!-- Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务概述"
          subtitle="让企业IT资产焕发新生"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <p class="text-lg text-gray-600 leading-relaxed">
            帮助企业将老旧系统进行现代化改造，提升系统性能、安全性和可维护性。在实现与现有系统对接的同时，进行可持续的系统运营。平滑过渡、持续运营，让企业IT资产焕发新生。
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务内容"
          subtitle="全方位系统重构解决方案"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">遗留系统现代化</h3>
                  <p class="text-gray-600">老旧系统升级改造，提升性能、安全性和可维护性</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">系统迁移</h3>
                  <p class="text-gray-600">从旧平台迁移到新平台，确保数据完整性</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">架构优化</h3>
                  <p class="text-gray-600">系统架构重新设计，提升系统扩展性</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">技术债务清理</h3>
                  <p class="text-gray-600">解决历史遗留技术问题，提升代码质量</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="为什么需要系统重构"
          subtitle="解决企业信息化面临的挑战"
        />
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:warning" class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">性能下降</h3>
            <p class="text-gray-600 text-sm">老旧系统性能不足，影响业务效率</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:shield-warning" class="w-8 h-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">安全隐患</h3>
            <p class="text-gray-600 text-sm">技术落后带来的安全风险</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:wrench" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">维护困难</h3>
            <p class="text-gray-600 text-sm">代码难以维护，人员更替困难</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="客户案例" subtitle="查看系统重构的成功案例" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=system-refactor" class="btn-primary inline-flex items-center">
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
          <CommonSectionTitle title="开始您的项目" subtitle="联系我们，获取专业的系统重构咨询服务" />
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
  title: '系统重构 - 宁波乐科科信息技术有限公司',
  description: '提供遗留系统现代化、系统迁移、架构优化、技术债务清理等服务，让老旧系统焕发新生',
})
</script>
