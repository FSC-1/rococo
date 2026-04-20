<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">技术咨询</h1>
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
          <div class="card p-6 border-l-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:compass" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">缺乏数字化战略规划</h3>
            <p class="text-gray-600 text-sm">企业在数字化转型过程中，往往缺乏明确的战略规划，导致投入大量人力、物力，而转型效率不高，从而导致资源浪费。</p>
          </div>
          <div class="card p-6 border-l-4 border-blue-500">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:brain" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">专业水平不足</h3>
            <p class="text-gray-600 text-sm">企业在数字化转型过程中，需要了解外面市场上的解决方案，需要领导者拥有专业水平才能做出正确的判断。</p>
          </div>
          <div class="card p-6 border-l-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">数据安全问题</h3>
            <p class="text-gray-600 text-sm">数字化转型会涉及到大量的数据处理和传输，如果企业缺乏足够的数据安全保护措施，容易导致数据泄露和安全风险。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Positioning -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="服务定位"
          subtitle="一站式数字化咨询与落地服务"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              以专业咨询为基石，为企业数字化建设全面赋能。通过精准诊断业务需求、衔接优质解决方案、驱动业务流程优化，我们致力于助力OA、ERP等关键系统成功部署与价值释放。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:magnifying-glass" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">精准诊断</h4>
                <p class="text-gray-600 text-sm">深入了解业务需求</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:link" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">衔接方案</h4>
                <p class="text-gray-600 text-sm">对接优质解决方案</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:chart-line-up" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">流程优化</h4>
                <p class="text-gray-600 text-sm">驱动业务持续优化</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DX Consulting Services -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="DX咨询服务"
          subtitle="提供从业务课题梳理到系统规划、导入方案制定的全流程DX咨询服务"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:stethoscope" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">系统诊断</h3>
              <p class="text-gray-600 text-sm">对企业现有IT系统进行全面诊断，分析问题根源和改进空间</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:user-circle" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">系统顾问</h3>
              <p class="text-gray-600 text-sm">提供专业的IT规划建议，指导企业数字化发展方向</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:blueprint" class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">系统化规划</h3>
              <p class="text-gray-600 text-sm">制定详细的数字化转型路线图和实施计划</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:handshake" class="w-6 h-6 text-orange-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">供应商选定与谈判</h3>
              <p class="text-gray-600 text-sm">协助评估和选择合适的系统供应商，并支持商务谈判</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:gantt-chart" class="w-6 h-6 text-red-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">项目管理</h3>
              <p class="text-gray-600 text-sm">专业的项目管理服务，确保项目按时、按质交付</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:trend-up" class="w-6 h-6 text-teal-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">改善·改革咨询</h3>
              <p class="text-gray-600 text-sm">持续优化咨询，支持企业数字化改革深入推进</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Implementation -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="协助系统落地"
          subtitle="贯通业务与IT，助力关键系统成功部署"
        />
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 智能制造 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold">智能制造</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">核心系统（ERP）</h4>
                  <p class="text-gray-600 text-sm">企业资源计划系统，实现企业整体资源优化管理</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">生产计划系统（APS）</h4>
                  <p class="text-gray-600 text-sm">高级计划与排程系统，优化生产计划和资源分配</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:factory" class="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">制造执行系统（MES）</h4>
                  <p class="text-gray-600 text-sm">制造执行系统，实现生产过程的实时监控和管理</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 业务效率 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center">
                <Icon name="ph:buildings" class="w-7 h-7 text-secondary-600" />
              </div>
              <h3 class="text-xl font-semibold">业务效率</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">OA系统</h4>
                  <p class="text-gray-600 text-sm">办公自动化系统，提升企业内部协同效率</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">业务流程标准化</h4>
                  <p class="text-gray-600 text-sm">梳理和优化业务流程，实现标准化管理</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">数据分析和报表</h4>
                  <p class="text-gray-600 text-sm">建立数据分析和决策支持体系</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Info -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">了解更多</h2>
          <p class="text-gray-600 mb-6">如需了解旧系统重构等更多数字化转型服务，请访问数字化转型页面</p>
          <NuxtLink to="/digital-transform" class="btn-primary inline-flex items-center">
            <Icon name="ph:arrow-right" class="w-5 h-5 mr-2" />
            访问数字化转型页面
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="咨询案例" subtitle="查看数字化转型的成功案例" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            IT咨询案例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开始您的咨询项目" subtitle="联系我们，获取专业的数字化转型咨询服务" />
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
  title: '技术咨询 - 宁波乐科科信息技术有限公司',
  description: '提供一站式数字化咨询与落地服务，包括IT咨询、系统规划、项目管理等',
})
</script>
