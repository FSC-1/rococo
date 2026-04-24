<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? '技术咨询服务' : '技術コンサルティング' }}</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">{{ locale === 'zh' ? '陪伴企业数字化转型，全程守护企业升级之路' : '企業のデジタルトランスフォーメーションを伴走し、企業昇級の道を全程で見守ります' }}</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ locale === 'zh'
            ? '一站式数字化咨询与执行服务，以专业咨询为基础，全面助力企业数字化建设'
            : 'ワンストップデジタルコンサルティングと実行サービス，专业的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します' }}
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
          <div class="card p-6 border-l-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:compass" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ locale === 'zh' ? '缺乏数字化战略规划' : 'デジタル戦略規劃の欠如' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '企业在数字化转型过程中，往往缺乏明确的战略规划，投入大量人力物力却变革效率不高，造成资源浪费。' : '企業はデジタルトランスフォーメーションの過程で、多くの場合、明確な戦略規劃がなく，大量の人力・物力を投入しても変革効率不高資源の無駄遣いにつながる。' }}</p>
          </div>
          <div class="card p-6 border-l-4 border-blue-500">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:brain" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ locale === 'zh' ? '专业水平不足' : '専門レベル不足' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '企业在数字化转型过程中，需要了解市场上的解决方案，领导者需要具备专业知识才能做出正确判断。' : '企業はデジタルトランスフォーメーションの過程で、市場でのソリューションを理解する必要があり、リーダーが専門的なレベルを正しい判断を下す必要がある。' }}</p>
          </div>
          <div class="card p-6 border-l-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ locale === 'zh' ? '数据安全问题' : 'データ安全问题' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '数字化转型涉及大量数据处理和传输，如果企业缺乏必要的数据安全保护措施，容易导致数据泄露和安全风险。' : 'デジタルトランスフォーメーションは大量のデータ処理と伝送涉及到おり、もし企業が必要なデータセキュリティ保護措置を欠いている場合容易データ漏洩とセキュリティリスクが生じやすい。' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Positioning -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '服务定位' : 'サービスポジショニング'"
          :title-en="locale === 'zh' ? 'Service Positioning' : 'サービスポジショニング'"
          :subtitle="locale === 'zh' ? '一站式数字化咨询与执行服务' : 'ワンストップデジタルコンサルティングと実行サービス'"
          :subtitle-en="locale === 'zh' ? 'One-stop digital consulting and execution services' : 'ワンストップデジタルコンサルティングと実行サービス'"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              {{ locale === 'zh'
                ? '以专业咨询为基础，全面助力企业数字化建设。通过精密的业务需求诊断、优秀的解决方案联动、业务流程优化，帮助OA、ERP等重要系统顺利上线，释放价值。'
                : '専門的なコンサルティングを基盤に、企業のデジタル構築を全面的に支援します。精密な業務要件診断、優れたソリューションの連携、業務プロセス最適化を通じて、OA、ERPなどの重要システムが正常に導入され、価値を解放することを支援します。' }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:magnifying-glass" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '精密诊断' : '精密診断' }}</h4>
                <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '深入了解业务需求' : '業務要件を深く理解' }}</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:link" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '方案联动' : '方案連携' }}</h4>
                <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '优秀解决方案的联动' : '優れたソリューションとの連携' }}</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:chart-line-up" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '进程优化' : 'プロセス最適化' }}</h4>
                <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '推动业务持续优化' : '業務の継続的最適化を推進' }}</p>
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
          :title="locale === 'zh' ? 'DX咨询服务' : 'DXコンサルティングサービス'"
          :title-en="locale === 'zh' ? 'DX Consulting Services' : 'DXコンサルティングサービス'"
          :subtitle="locale === 'zh' ? '提供从业务课题梳理到系统规划、导入方案制定的全流程DX咨询服务' : '業務課題梳理からシステム規劃、導入方案制定までの全工程DXコンサルティングサービスを提供'"
          :subtitle-en="locale === 'zh' ? 'Provide full-process DX consulting services from business issue analysis to system planning' : '業務課題梳理からシステム規劃、導入方案制定までの全工程DXコンサルティングサービスを提供'"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:stethoscope" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '系统诊断' : 'システム診断' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '全面诊断企业现有IT系统，分析问题根源与改善空间' : '企業の既存のITシステムを全面的に診断し、問題根源と改善空間を分析' }}</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:user-circle" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '系统顾问' : 'システムアドバイザー' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '提供专业IT规划建议，指导企业数字化发展方向' : '専門的なIT規劃提案を提供し、企業のデジタル化発展方向を指導' }}</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:blueprint" class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '系统规划' : 'システム化規劃' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '制定详细的数字化转型路线图与实施计划' : '詳細なデジタルトランスフォーメーションロードマップと実施計画を策定' }}</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:handshake" class="w-6 h-6 text-orange-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '供应商选择与谈判' : 'サプライヤー選定・交渉' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '帮助评估和选择合适的系统供应商，支持商务谈判' : '適切なシステムサプライヤーの評価と選択を支援し、商务交渉をサポート' }}</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:gantt-chart" class="w-6 h-6 text-red-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '项目管理' : 'プロジェクト管理' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '专业项目管理服务，确保项目按时按质交付' : '專業的なプロジェクト管理サービス、プロジェクト定時・定質納品を確保' }}</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:trend-up" class="w-6 h-6 text-teal-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '改善与改革咨询' : '改善・改革コンサルティング' }}</h3>
              <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '持续优化咨询，推动企业数字化改革深化' : '継続的最適化コンサルティング、企業のデジタル改革の深化を推進' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Implementation -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '系统导入支持' : 'システム導入支援'"
          :title-en="locale === 'zh' ? 'System Implementation Support' : 'システム導入支援'"
          :subtitle="locale === 'zh' ? '贯通业务与IT，帮助重要系统顺利导入' : '業務とITを贯通し、重要システムの正常な導入を支援'"
          :subtitle-en="locale === 'zh' ? 'Bridge business and IT, help important systems go live smoothly' : '業務とITを贯通し、重要システムの正常な導入を支援'"
        />
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Smart Manufacturing -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold">{{ locale === 'zh' ? '智能制造' : 'スマート製造' }}</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '核心系统（ERP）' : 'コアシステム（ERP）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '企业资源计划系统，实现企业整体资源优化管理' : '企業資源計画システム、企業の全体リソース最適化管理を実現' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '生产计划系统（APS）' : '生産計画システム（APS）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '高级计划与排程系统，优化生产计划与资源配置' : '高度計画とスケジューリングシステム、生産計画とリソース配分の最適化' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:factory" class="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '制造执行系统（MES）' : '製造実行システム（MES）' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '制造执行系统，实现生产进程实时监控与管理' : '製造実行システム、生産プロセスのリアルタイム監視と管理を実現' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Efficiency -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center">
                <Icon name="ph:buildings" class="w-7 h-7 text-secondary-600" />
              </div>
              <h3 class="text-xl font-semibold">{{ locale === 'zh' ? '业务效率' : '業務効率' }}</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? 'OA系统' : 'OAシステム' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '办公自动化系统，提高企业内部协作效率' : '事務自動化システム、企業内部のコラボレーション効率を向上' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '业务进程标准化' : '業務プロセス標準化' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '梳理和优化业务进程，实现标准化管理' : '業務プロセスを梳理と最適化し、標準化管理を実現' }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ locale === 'zh' ? '数据分析与报表' : 'データ分析とレポート' }}</h4>
                  <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '建立数据分析与决策支持系统' : 'データ分析と意思決定サポートシステムの確立' }}</p>
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
          <h2 class="text-2xl font-bold mb-4">{{ locale === 'zh' ? '了解更多' : '詳細を見る' }}</h2>
          <p class="text-gray-600 mb-6">{{ locale === 'zh' ? '更多数字化转型服务，如传统系统重建等，请查看数字化转型页面' : 'レガシーシステム再構築など、より多くのデジタルトランスフォーメーションサービスについては、デジタルトランスフォーメーションページをご覧ください' }}</p>
          <NuxtLink to="/digital-transform" class="btn-primary inline-flex items-center">
            <Icon name="ph:arrow-right" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? '查看数字化转型页面' : 'デジタルトランスフォーメーションページを見る' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '咨询案例' : 'コンサルティング事例'"
          :title-en="locale === 'zh' ? 'Consulting Cases' : 'コンサルティング事例'"
          :subtitle="locale === 'zh' ? '查看数字化转型的成功案例' : 'デジタルトランスフォーメーションの成功事例をご覧ください'"
          :subtitle-en="locale === 'zh' ? 'View successful digital transformation cases' : 'デジタルトランスフォーメーションの成功事例をご覧ください'"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? 'IT咨询案例' : 'ITコンサルティング事例' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '开始咨询项目' : 'コンサルティングプロジェクトを始める'"
            :title-en="locale === 'zh' ? 'Start a Consulting Project' : 'コンサルティングプロジェクトを始める'"
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
  title: locale === 'zh' ? '技术咨询服务 - 宁波乐科科信息技术有限公司' : '技術コンサルティング - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '提供一站式数字化咨询与执行服务、IT咨询、系统规划、项目管理等'
    : 'ワンストップデジタルコンサルティングと実行サービス、ITコンサルティング、システム規劃、プロジェクト管理などを提供',
})
</script>
