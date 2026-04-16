<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">数字化转型</h1>
        <p class="text-xl text-gray-600">做您数字化转型的陪跑者，全程护航企业升级之路</p>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="企业数字化转型面临的痛点"
          subtitle="我们深知企业在数字化转型过程中面临的挑战"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          <div class="card p-6">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:warning-circle" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">缺乏数字化战略规划</h3>
            <p class="text-gray-600">
              企业在数字化转型过程中，往往缺乏明确的战略规划，导致投入大量人力、物力，而转型效率不高，从而导致资源浪费。
            </p>
          </div>
          <div class="card p-6">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">专业水平不足</h3>
            <p class="text-gray-600">
              企业在数字化转型过程中，需要了解外面市场上的解决方案，需要领导者拥有专业水平才能做出正确的判断。
            </p>
          </div>
          <div class="card p-6">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">数据安全问题</h3>
            <p class="text-gray-600">
              数字化转型会涉及到大量的数据处理和传输，如果企业缺乏足够的数据安全保护措施，容易导致数据泄露和安全风险。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Consulting -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <CommonSectionTitle
            title="IT咨询"
            subtitle="提供从业务课题梳理到系统规划、导入方案制定的全流程DX咨询服务"
          />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="card p-6">
              <h3 class="text-xl font-semibold mb-4">咨询服务内容</h3>
              <ul class="space-y-3">
                <li v-for="item in consultingItems" :key="item" class="flex items-center">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="card p-6">
              <h3 class="text-xl font-semibold mb-4">协助系统落地</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-primary-600 mb-2">智能制造</h4>
                  <ul class="text-gray-600 text-sm space-y-1 ml-7">
                    <li>• 核心系统（ERP）</li>
                    <li>• 生产计划系统（APS）</li>
                    <li>• 制造执行系统（MES）</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-primary-600 mb-2">业务效率</h4>
                  <ul class="text-gray-600 text-sm space-y-1 ml-7">
                    <li>• OA系统</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Refactor -->
    <section id="system-refactor" class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="旧系统重构"
          subtitle="帮助企业将老旧系统进行现代化改造，提升系统性能、安全性和可维护性"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <div v-for="service in refactorServices" :key="service.title" class="card p-6 text-center">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon :name="service.icon" class="w-7 h-7 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开始数字化转型" subtitle="联系我们，获取专业的数字化转型咨询服务" />
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
  title: '数字化转型 - 宁波乐科科信息技术有限公司',
  description: '提供IT咨询、数字化转型规划、旧系统重构等服务',
})

const consultingItems = [
  '系统诊断',
  '系统顾问',
  '系统化规划',
  '供应商选定与谈判',
  '项目管理',
  '改善·改革咨询',
]

const refactorServices = [
  { icon: 'ph:arrows-clockwise', title: '遗留系统现代化', description: '老旧系统升级改造，提升性能、安全性和可维护性' },
  { icon: 'ph:cloud-arrow-up', title: '系统迁移', description: '从旧平台迁移到新平台，确保数据完整性' },
  { icon: 'ph:blueprint', title: '架构优化', description: '系统架构重新设计，提升系统扩展性' },
  { icon: 'ph:broom', title: '技术债务清理', description: '解决历史遗留技术问题，提升代码质量' },
]
</script>
