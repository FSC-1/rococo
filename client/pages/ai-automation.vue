<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? 'AI自动化解决方案' : 'AI自動化ソリューション' }}</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">{{ locale === 'zh' ? '让AI接管重复工作，让人专注更有价值的事情' : 'AIに反復作業を任せ、人はより価値の高い業務に専念する。' }}</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ locale === 'zh'
            ? '我们致力于通过生成式AI与自动化技术，帮助企业实现业务流程智能化升级，降低运营成本，提升效率与决策能力'
            : '当社は生成AIと自動化技術を活用し、企業の業務プロセスのインテリジェント化を推進することで運用コストの削減と業務効率・意思決定力の向上を支援します。AI導入における実務ニーズに即し、コンサルティングから開発、運用までを一体で提供するサービス体系を構築しています。' }}
        </p>
      </div>
    </section>

    <!-- AI Value Proposition -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '我们的价值' : '私たちの価値'"
          :subtitle="locale === 'zh' ? '围绕企业在AI导入过程中的实际需求，构建从咨询、开发到运营的一体化服务体系' : 'AI導入における実務ニーズに即し、コンサルティングから開発、運用までを一体で提供するサービス体系を構築しています。'"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:clock" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '减少重复性人工操作' : '反復的な手作業の削減' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? 'AI自动化处理繁琐事务' : 'AIが繰り返しの作業を自動化' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:chart-line-up" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '提升业务处理效率' : '業務処理効率の向上' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '智能化流程加速业务运转' : 'Intelligentプロセスでビジネス运转を加速' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:coins" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '降低人力与运营成本' : '人件費および運用コストの削減' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '优化资源配置节省开支' : 'リソース配分の最適化でコストを節約' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:brain" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '提高数据利用与决策能力' : 'データ活用と意思決定力の向上' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '数据驱动科学决策' : 'データ駆動の意思決定' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Custom Development -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? 'AI定制开发' : 'AIカスタム開発'"
          :subtitle="locale === 'zh' ? '针对企业个性化需求，提供端到端AI系统开发服务' : '企業ごとの個別ニーズに応じ、エンドツーエンドのAIシステム開発サービスを提供します。'"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ locale === 'zh'
                ? '帮助企业将原有"人工驱动"的流程升级为"AI驱动"，实现业务的智能化升级。'
                : '従来の「人手主導」の業務プロセスを「AI主導」へと進化させ、業務の高度化と効率化を実現します。' }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:robot" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? 'AI Agent 开发' : 'AIエージェント開発' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '智能业务助手开发，打造企业专属的AI助手' : 'Intelligentビジネスアシスタント開發、ビジネス専用AIアシスタントを構築' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:book-open" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '企业知识库 / 智能问答系统' : '企業ナレッジベース／インテリジェントQ&Aシステム' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '构建企业知识库，实现智能问答与知识检索' : '企業ナレッジベースを構築し、Intelligent Q&Aと知識検索を実現' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:file-text" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '文档处理与数据抽取' : 'ドキュメント処理およびデータ抽出' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? 'OCR / NLP 技术实现文档智能处理' : 'OCR/NLP技術でドキュメントのIntelligent処理を実装' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Icon name="ph:text-aa" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '内容生成' : 'コンテンツ生成' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '报告、客服回复、营销文案等自动生成' : 'レポート、カスタマー対応、マーケティング文案などの自動生成' }}</p>
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
          :title="locale === 'zh' ? '应用场景' : '応用シーン'"
          :subtitle="locale === 'zh' ? '覆盖企业核心业务场景的AI自动化解决方案' : '企業のコアビジネスシーンをカバーするAI自動化ソリューション'"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:headset" class="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '客服与运营自动化' : 'カスタマーサポートおよびオペレーションの自動化' }}</h4>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '智能客服机器人，自动处理客户咨询与业务办理' : 'Intelligent客服ロボットで顧客の問い合わせとビジネス処理を自動化' }}</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:users" class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '人事 / 财务流程自动化' : '人事／財務プロセスの自動化' }}</h4>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '自动化处理员工入离职、财务报销等流程' : '従業員入退職、財務精算などのプロセスを自動処理' }}</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:table" class="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '数据录入与报告生成' : 'データ入力およびレポート生成' }}</h4>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '自动从各类文档中提取数据并生成报表' : '各種ドキュメントからデータを自動抽出してレポートを生成' }}</p>
            </div>
          </div>
          <div class="card p-6 flex items-start">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:books" class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '知识管理与内部协作' : 'ナレッジ管理と社内コラボレーション' }}</h4>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '企业知识库建设与智能检索，促进内部知识共享' : '企業ナレッジベース構築とIntelligent検索、社内知識共有の促進' }}</p>
            </div>
          </div>
          <div class="card p-6 flex items-start lg:col-span-2">
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
              <Icon name="ph:briefcase" class="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '行业解决方案' : '業界別ソリューション' }}</h4>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '可根据客户行业特点和需求进行定制扩展' : '顧客の業界特性とニーズに応じてカスタマイズして拡張可能' }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/cases?category=ai-automation" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? '查看 AI自动化 客户案例' : 'AI自動化 導入事例を見る' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '开启AI自动化之旅' : 'AI自動化への旅立ち'"
            :subtitle="locale === 'zh' ? '联系我们，获取专业的AI自动化解决方案咨询' : '専門的なAI自動化ソリューションにご相談ください'"
          />
          <div class="mt-8">
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()

useSeoMeta({
  title: locale === 'zh' ? 'AI自动化解决方案 - 宁波乐科科信息技术有限公司' : 'AI自動化ソリューション - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '通过生成式AI与自动化技术，帮助企业实现业务流程智能化升级，降低运营成本，提升效率与决策能力'
    : '生成AIと自動化技術を活用し、企業の業務プロセスのインテリジェント化を推進することで運用コストの削減と業務効率・意思決定力の向上を支援します',
})
</script>
