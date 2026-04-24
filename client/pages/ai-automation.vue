<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">AI自动化解决方案</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">让AI接管重复工作，让人专注更有价值的事情</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          我们致力于通过生成式AI与自动化技术，帮助企业实现业务流程智能化升级，降低运营成本，提升效率与决策能力
        </p>
      </div>
    </section>

    <!-- AI Value Proposition -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="我们的价值"
          subtitle="围绕企业在AI导入过程中的实际需求，构建从咨询、开发到运营的一体化服务体系"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:clock" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">减少重复性人工操作</h3>
            <p class="text-gray-600 text-sm">AI自动化处理繁琐事务</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:chart-line-up" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">提升业务处理效率</h3>
            <p class="text-gray-600 text-sm">智能化流程加速业务运转</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:coins" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">降低人力与运营成本</h3>
            <p class="text-gray-600 text-sm">优化资源配置节省开支</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:brain" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">提高数据利用与决策能力</h3>
            <p class="text-gray-600 text-sm">数据驱动科学决策</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Custom Development -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="AI定制开发"
          subtitle="针对企业个性化需求，提供端到端AI系统开发服务"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              帮助企业将原有"人工驱动"的流程升级为"AI驱动"，实现业务的智能化升级。
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:robot" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">AI Agent 开发</h4>
                  <p class="text-gray-600 text-sm">智能业务助手开发，打造企业专属的AI助手</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:book-open" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">企业知识库 / 智能问答系统</h4>
                  <p class="text-gray-600 text-sm">构建企业知识库，实现智能问答与知识检索</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:file-text" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">文档处理与数据抽取</h4>
                  <p class="text-gray-600 text-sm">OCR / NLP 技术实现文档智能处理</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:text-aa" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">内容生成</h4>
                  <p class="text-gray-600 text-sm">报告、客服回复、营销文案等自动生成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Scenarios -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="应用场景"
          subtitle="覆盖企业核心业务场景的AI自动化解决方案"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:headset" class="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">客服与运营自动化</h4>
              <p class="text-gray-600 text-sm">智能客服机器人，自动处理客户咨询与业务办理</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:users" class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">人事 / 财务流程自动化</h4>
              <p class="text-gray-600 text-sm">自动化处理员工入离职、财务报销等流程</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:table" class="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">数据录入与报告生成</h4>
              <p class="text-gray-600 text-sm">自动从各类文档中提取数据并生成报表</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:books" class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">知识管理与内部协作</h4>
              <p class="text-gray-600 text-sm">企业知识库建设与智能检索，促进内部知识共享</p>
            </div>
          </div>
          <div class="card p-6 flex items-start lg:col-span-2">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:briefcase" class="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">行业解决方案</h4>
              <p class="text-gray-600 text-sm">可根据客户行业特点和需求进行定制扩展</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/cases?category=ai-automation" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            查看 AI自动化 客户案例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="开启AI自动化之旅" subtitle="联系我们，获取专业的AI自动化解决方案咨询" />
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
  title: 'AI自动化解决方案 - 宁波乐科科信息技术有限公司',
  description: '通过生成式AI与自动化技术，帮助企业实现业务流程智能化升级，降低运营成本，提升效率与决策能力',
})
</script>
