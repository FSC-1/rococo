<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">数字化转型</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">做您数字化转型的陪跑者，全程护航企业升级之路</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          我们提供一站式数字化咨询与落地服务，以专业咨询为基石，为企业数字化建设全面赋能
        </p>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="企业数字化转型面临的痛点"
          subtitle="了解挑战，才能更好地解决问题"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 border-t-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:warning-circle" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">缺乏数字化战略规划</h3>
            <p class="text-gray-600">
              企业在数字化转型过程中，往往缺乏明确的战略规划，导致投入大量人力、物力，而转型效率不高，从而导致资源浪费。
            </p>
          </div>
          <div class="card p-6 border-t-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">专业水平不足</h3>
            <p class="text-gray-600">
              企业在数字化转型过程中，需要了解外面市场上的解决方案，需要领导者拥有专业水平才能做出正确的判断。
            </p>
          </div>
          <div class="card p-6 border-t-4 border-purple-500">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">数据安全问题</h3>
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
        <CommonSectionTitle
          title="IT咨询"
          subtitle="贯通业务与IT的全流程DX咨询服务"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              我们提供一站式数字化咨询与落地服务，以专业咨询为基石，为企业数字化建设全面赋能。通过精准诊断业务需求、衔接优质解决方案、驱动业务流程优化，我们致力于助力OA、ERP等关键系统成功部署与价值释放。
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">咨询服务内容</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div v-for="item in consultingItems" :key="item.title" class="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon :name="item.icon" class="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h4>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Implementation -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="协助系统落地"
          subtitle="助力关键系统成功部署与价值释放"
        />

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 智能制造 -->
          <div class="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-semibold">智能制造</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">核心系统（ERP）</h4>
                  <p class="text-gray-600 text-sm">企业资源计划系统</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">生产计划系统（APS）</h4>
                  <p class="text-gray-600 text-sm">高级计划与排程</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cpu" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">制造执行系统（MES）</h4>
                  <p class="text-gray-600 text-sm">生产过程管理</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 业务效率 -->
          <div class="bg-gradient-to-br from-green-50 to-secondary-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:buildings" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-semibold">业务效率</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">OA系统</h4>
                  <p class="text-gray-600 text-sm">办公自动化系统</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">业务流程标准化</h4>
                  <p class="text-gray-600 text-sm">流程优化与管理</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">数据决策分析</h4>
                  <p class="text-gray-600 text-sm">数据驱动决策</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            查看 IT咨询 客户案例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- System Refactoring -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="旧系统重构"
          subtitle="老旧系统现代化改造专家"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              帮助企业将老旧系统进行现代化改造，提升系统性能、安全性和可维护性。在实现与现有系统对接的同时，进行可持续的系统运营。平滑过渡、持续运营，让企业IT资产焕发新生。
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">服务内容</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">遗留系统现代化</h4>
                  <p class="text-gray-600 text-sm">老旧系统升级改造，提升性能、安全性和可维护性</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">系统迁移</h4>
                  <p class="text-gray-600 text-sm">从旧平台迁移到新平台，确保数据完整性</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">架构优化</h4>
                  <p class="text-gray-600 text-sm">系统架构重新设计，提升系统扩展性</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">技术债务清理</h4>
                  <p class="text-gray-600 text-sm">解决历史遗留技术问题，提升代码质量</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <NuxtLink to="/cases?category=system-refactor" class="btn-secondary inline-flex items-center">
              <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
              查看 系统重构 客户案例
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
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
  description: '提供IT咨询、数字化转型规划、旧系统重构等服务，做您数字化转型的陪跑者',
})

const consultingItems = [
  { icon: 'ph:stethoscope', title: '系统诊断', description: '全面诊断现有IT系统' },
  { icon: 'ph:user-circle', title: '系统顾问', description: '专业IT规划建议' },
  { icon: 'ph:blueprint', title: '系统化规划', description: '制定转型路线图' },
  { icon: 'ph:handshake', title: '供应商选定与谈判', description: '评估并选择合适供应商' },
  { icon: 'ph:gantt-chart', title: '项目管理', description: '确保项目按时交付' },
  { icon: 'ph:trend-up', title: '改善·改革咨询', description: '持续优化支持' },
]
</script>
