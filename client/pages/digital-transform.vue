<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? '数字化转型' : 'デジタルトランスフォーメーション' }}</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">{{ locale === 'zh' ? '陪伴企业数字化转型，全程守护企业升级之路' : '企業のデジタルトランスフォーメーションを伴走し、企業昇級の道を全程で見守ります' }}</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ locale === 'zh'
            ? '一站式数字化咨询与执行服务，以专业咨询为基础，全面助力企业数字化建设'
            : 'ワンストップデジタルコンサルティングと実行サービス、専門的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します' }}
        </p>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '企业数字化转型面临的课题' : '企業デジタルトランスフォーメーションが直面する課題'"
          :title-en="locale === 'zh' ? 'Challenges in Enterprise Digital Transformation' : '企業デジタルトランスフォーメーションが直面する課題'"
          :subtitle="locale === 'zh' ? '了解课题，才能更有效地解决问题' : '課題を理解することで、より効果的に問題を解決できます'"
          :subtitle-en="locale === 'zh' ? 'Understanding challenges leads to better solutions' : '課題を理解することで、より効果的に問題を解決できます'"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 border-t-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:warning-circle" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '缺乏数字化战略规划' : 'デジタル戦略規劃の欠如' }}</h3>
            <p class="text-gray-600">
              {{ locale === 'zh'
                ? '企业在数字化转型过程中，往往缺乏明确的战略规划，投入大量人力物力却变革效率不高，造成资源浪费。'
                : '企業はデジタルトランスフォーメーションの過程で、多くの場合、明確な戦略規劃がなく，大量の人力・物力を投入しても変革効率不高で資源の無駄遣いにつながる。' }}
            </p>
          </div>
          <div class="card p-6 border-t-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '专业水平不足' : '専門レベル不足' }}</h3>
            <p class="text-gray-600">
              {{ locale === 'zh'
                ? '企业在数字化转型过程中，需要了解市场上的解决方案，领导者需要具备专业知识才能做出正确判断。'
                : '企業はデジタルトランスフォーメーションの過程で、市場でのソリューションを理解する必要があり、リーダーが専門的知識を持ち、正しい判断を下す必要がある。' }}
            </p>
          </div>
          <div class="card p-6 border-t-4 border-purple-500">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ locale === 'zh' ? '数据安全问题' : 'データ安全问题' }}</h3>
            <p class="text-gray-600">
              {{ locale === 'zh'
                ? '数字化转型涉及大量数据处理和传输，如果企业缺乏必要的数据安全保护措施，容易导致数据泄露和安全风险。'
                : 'デジタルトランスフォーメーションは大量のデータ処理と伝送涉及到おり、もし企業が必要なデータセキュリティ保護措置を欠いている場合容易データ漏洩とセキュリティリスクが生じやすい。' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Consulting -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? 'IT咨询服务' : 'ITコンサルティング'"
          :title-en="locale === 'zh' ? 'IT Consulting' : 'ITコンサルティング'"
          :subtitle="locale === 'zh' ? '贯通业务与IT的全流程DX咨询服务' : '業務とITを贯通する全工程のDXコンサルティングサービス'"
          :subtitle-en="locale === 'zh' ? 'Full-process DX consulting services bridging business and IT' : '業務とITを贯通する全工程のDXコンサルティングサービス'"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ locale === 'zh'
                ? '一站式数字化咨询与执行服务，以专业咨询为基础，全面助力企业数字化建设。通过精密的业务需求诊断、优秀的解决方案联动、业务流程优化，帮助OA、ERP等重要系统顺利上线，释放价值。'
                : 'ワンストップデジタルコンサルティングと実行サービス、専門的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します。精密な業務要件診断、優れたソリューションの連携、業務プロセス最適化を通じて、OA、ERPなどの重要システムが正常に導入され、価値を解放することを支援します。' }}
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">{{ locale === 'zh' ? '咨询服务内容' : 'コンサルティングサービス内容' }}</h3>
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
          :title="locale === 'zh' ? '系统导入支持' : 'システム導入支援'"
          :title-en="locale === 'zh' ? 'System Implementation Support' : 'システム導入支援'"
          :subtitle="locale === 'zh' ? '帮助重要系统顺利上线并释放价值' : '重要システムの正常な導入と価値解放を支援します'"
          :subtitle-en="locale === 'zh' ? 'Help important systems go live smoothly and release value' : '重要システムの正常な導入と価値解放を支援します'"
        />

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Smart Manufacturing -->
          <div class="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-semibold">{{ locale === 'zh' ? '智能制造' : 'スマート製造' }}</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? '核心系统（ERP）' : 'コアシステム（ERP）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '企业资源计划系统' : '企業資源計画システム' }}</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? '生产计划系统（APS）' : '生産計画システム（APS）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '高级计划与排程' : '高度計画とスケジューリング' }}</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cpu" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? '制造执行系统（MES）' : '製造実行システム（MES）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '生产过程管理' : '生産プロセス管理' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Efficiency -->
          <div class="bg-gradient-to-br from-green-50 to-secondary-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:buildings" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-semibold">{{ locale === 'zh' ? '业务效率' : '業務効率' }}</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? 'OA系统' : 'OAシステム' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '办公自动化系统' : '事務自動化システム' }}</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? '业务进程标准化' : '業務プロセス標準化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '进程优化与管理' : 'プロセス最適化と管理' }}</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ locale === 'zh' ? '数据决策分析' : 'データ意思決定分析' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '数据驱动型决策' : 'データ駆動型意思決定' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? '查看IT咨询客户案例' : 'ITコンサルティング顧客事例を見る' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- System Refactoring -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '传统系统重建' : 'レガシーシステム再構築'"
          :title-en="locale === 'zh' ? 'Legacy System Refactoring' : 'レガシーシステム再構築'"
          :subtitle="locale === 'zh' ? '传统系统现代化改造专家' : 'レガシーシステム近代化改造の専門家'"
          :subtitle-en="locale === 'zh' ? 'Experts in legacy system modernization' : 'レガシーシステム近代化改造の専門家'"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ locale === 'zh'
                ? '对企业传统系统进行现代化改造，提升系统性能、安全性、可维护性。实现与现有系统的联动，实现可持续的系统运营。通过平滑过渡和持续运营，为企业IT资产带来新的价值。'
                : '企業のレガシーシステムを近代的に改造し、システムパフォーマンス、セキュリティ、保守性を向上させます。既存のシステムとの連携を実現し、持続可能なシステム運用を行います。スムーズな移行と継続的な運用で、企業のIT資産に新たな価値をもたらします。' }}
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">{{ locale === 'zh' ? '服务内容' : 'サービス内容' }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '传统系统现代化' : 'レガシーシステム近代化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '旧系统升级改造，提升性能、安全性、可维护性' : '旧システムのアップグレード改造、パフォーマンス、セキュリティ、保守性の向上' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '系统迁移' : 'システム移行' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '从旧平台迁移到新平台，确保数据完整性' : '旧プラットフォームから新プラットフォームへ、データ完全性を確保' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '架构优化' : 'アーキテクチャ最適化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '系统架构重新设计，提升可扩展性' : 'システムアーキテクチャ再設計、スケーラビリティ向上' }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">{{ locale === 'zh' ? '技术负债清理' : '技術負債清理' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '解决历史技术问题，提升代码质量' : '歴史的技術問題の解決、コード品質向上' }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <NuxtLink to="/cases?category=system-refactor" class="btn-secondary inline-flex items-center">
              <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
              {{ locale === 'zh' ? '查看系统重建客户案例' : 'システム再構築顧客事例を見る' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '开始数字化转型' : 'デジタルトランスフォーメーションを開始する'"
            :title-en="locale === 'zh' ? 'Start Digital Transformation' : 'デジタルトランスフォーメーションを開始する'"
            :subtitle="locale === 'zh' ? '联系我们，获取专业数字化转型咨询服务' : 'お問い合わせいただき、専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください'"
            :subtitle-en="locale === 'zh' ? 'Contact us for professional digital transformation consulting services' : 'お問い合わせいただき、専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください'"
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
  title: locale === 'zh' ? '数字化转型 - 宁波乐科科信息技术有限公司' : 'デジタルトランスフォーメーション - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '提供IT咨询、数字化转型规划、传统系统重建等服务，陪伴企业数字化转型'
    : 'ITコンサルティング、デジタルトランスフォーメーション規劃、レガシーシステム再構築などのサービス提供、企业のデジタルトランスフォーメーションを伴走します',
})

const consultingItems = computed(() => [
  {
    icon: 'ph:stethoscope',
    title: locale.value === 'zh' ? '系统诊断' : 'システム診断',
    description: locale.value === 'zh' ? '全面诊断现有IT系统' : '既存のITシステムを全面的に診断',
  },
  {
    icon: 'ph:user-circle',
    title: locale.value === 'zh' ? '系统顾问' : 'システムアドバイザー',
    description: locale.value === 'zh' ? '提供专业IT规划建议' : '専門的IT規劃提案',
  },
  {
    icon: 'ph:blueprint',
    title: locale.value === 'zh' ? '系统规划' : 'システム化規劃',
    description: locale.value === 'zh' ? '制定转型路线图' : 'トランスフォーメーションロードマップの策定',
  },
  {
    icon: 'ph:handshake',
    title: locale.value === 'zh' ? '供应商选择与谈判' : 'サプライヤー選定・交渉',
    description: locale.value === 'zh' ? '评估和选择合适的供应商' : '適切なサプライヤーの評価と選択',
  },
  {
    icon: 'ph:gantt-chart',
    title: locale.value === 'zh' ? '项目管理' : 'プロジェクト管理',
    description: locale.value === 'zh' ? '确保项目按时交付' : 'プロジェクト定時納品を確保',
  },
  {
    icon: 'ph:trend-up',
    title: locale.value === 'zh' ? '改善与改革咨询' : '改善・改革コンサルティング',
    description: locale.value === 'zh' ? '持续优化支持' : '継続的最適化サポート',
  },
])
</script>
