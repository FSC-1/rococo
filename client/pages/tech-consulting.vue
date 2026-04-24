<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">技術コンサルティング</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">企業のデジタルトランスフォーメーションを伴走し、企業昇級の道を全程で見守ります</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          ワンストップデジタルコンサルティングと実行サービス，専門的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します
        </p>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="企業デジタルトランスフォーメーションが直面する課題"
          title-en="企業デジタルトランスフォーメーションが直面する課題"
          subtitle="課題を理解することで、より効果的に問題を解決できます"
          subtitle-en="課題を理解することで、より効果的に問題を解決できます"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6 border-l-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:compass" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">デジタル戦略規劃の欠如</h3>
            <p class="text-gray-600 text-sm">企業はデジタルトランスフォーメーションの過程で、多くの場合、明確な戦略規劃がなく，大量の人力・物力を投入しても変革効率不高資源の無駄遣いにつながる.</p>
          </div>
          <div class="card p-6 border-l-4 border-blue-500">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:brain" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">専門レベル不足</h3>
            <p class="text-gray-600 text-sm">企業はデジタルトランスフォーメーションの過程で、市場でのソリューションを理解する必要があり、リーダーが専門的なレベルを正しい判断を下す必要がある.</p>
          </div>
          <div class="card p-6 border-l-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">データ安全问题</h3>
            <p class="text-gray-600 text-sm">デジタルトランスフォーメーションは大量のデータ処理と伝送涉及到おり、もし企業が必要なデータセキュリティ保護措置を欠いている場合容易データ漏洩とセキュリティリスクが生じやすい.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Positioning -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービスポジショニング"
          title-en="サービスポジショニング"
          subtitle="ワンストップデジタルコンサルティングと実行サービス"
          subtitle-en="ワンストップデジタルコンサルティングと実行サービス"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              専門的なコンサルティングを基盤に、企業のデジタル構築を全面的に支援します。精密な業務要件診断、優れたソリューションの連携、業務プロセス最適化を通じて、OA、ERPなどの重要システムが正常に導入され、価値を解放することを支援します。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:magnifying-glass" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">精密診断</h4>
                <p class="text-gray-600 text-sm">業務要件を深く理解</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:link" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">方案連携</h4>
                <p class="text-gray-600 text-sm">優れたソリューションとの連携</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="ph:chart-line-up" class="w-8 h-8 text-primary-600" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">プロセス最適化</h4>
                <p class="text-gray-600 text-sm">業務の継続的最適化を推進</p>
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
          title="DXコンサルティングサービス"
          title-en="DXコンサルティングサービス"
          subtitle="業務課題梳理からシステム規劃、導入方案制定までの全工程DXコンサルティングサービスを提供"
          subtitle-en="業務課題梳理からシステム規劃、導入方案制定までの全工程DXコンサルティングサービスを提供"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:stethoscope" class="w-6 h-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">システム診断</h3>
              <p class="text-gray-600 text-sm">企業の既存のITシステムを全面的に診断し、問題根源と改善空間を分析</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:user-circle" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">システムアドバイザー</h3>
              <p class="text-gray-600 text-sm">専門的なIT規劃提案を提供し、企業のデジタル化発展方向を指導</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:blueprint" class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">システム化規劃</h3>
              <p class="text-gray-600 text-sm">詳細なデジタルトランスフォーメーションロードマップと実施計画を策定</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:handshake" class="w-6 h-6 text-orange-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">サプライヤー選定・交渉</h3>
              <p class="text-gray-600 text-sm">適切なシステムサプライヤーの評価と選択を支援し、商务交渉をサポート</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:gantt-chart" class="w-6 h-6 text-red-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">プロジェクト管理</h3>
              <p class="text-gray-600 text-sm">專業的なプロジェクト管理サービス、プロジェクト定時・定質納品を確保</p>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ph:trend-up" class="w-6 h-6 text-teal-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">改善・改革コンサルティング</h3>
              <p class="text-gray-600 text-sm">継続的最適化コンサルティング、企業のデジタル改革の深化を推進</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- System Implementation -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="システム導入支援"
          title-en="システム導入支援"
          subtitle="業務とITを贯通し、重要システムの正常な導入を支援"
          subtitle-en="業務とITを贯通し、重要システムの正常な導入を支援"
        />
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 智能制造 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-primary-600" />
              </div>
              <h3 class="text-xl font-semibold">スマート製造</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">コアシステム（ERP）</h4>
                  <p class="text-gray-600 text-sm">企業資源計画システム、企業の全体リソース最適化管理を実現</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">生産計画システム（APS）</h4>
                  <p class="text-gray-600 text-sm">高度計画とスケジューリングシステム、生産計画とリソース配分の最適化</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:factory" class="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">製造実行システム（MES）</h4>
                  <p class="text-gray-600 text-sm">製造実行システム、生産プロセスのリアルタイム監視と管理を実現</p>
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
              <h3 class="text-xl font-semibold">業務効率</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">OAシステム</h4>
                  <p class="text-gray-600 text-sm">事務自動化システム、企業内部のコラボレーション効率を向上</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">業務プロセス標準化</h4>
                  <p class="text-gray-600 text-sm">業務プロセスを梳理と最適化し、標準化管理を実現</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">データ分析とレポート</h4>
                  <p class="text-gray-600 text-sm">データ分析と意思決定サポートシステムの確立</p>
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
          <h2 class="text-2xl font-bold mb-4">詳細を見る</h2>
          <p class="text-gray-600 mb-6">レガシーシステム再構築など、より多くのデジタルトランスフォーメーションサービスについては、デジタルトランスフォーメーションページをご覧ください</p>
          <NuxtLink to="/digital-transform" class="btn-primary inline-flex items-center">
            <Icon name="ph:arrow-right" class="w-5 h-5 mr-2" />
            デジタルトランスフォーメーションページを見る
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="コンサルティング事例" title-en="コンサルティング事例" subtitle="デジタルトランスフォーメーションの成功事例をご覧ください" subtitle-en="デジタルトランスフォーメーションの成功事例をご覧ください" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            ITコンサルティング事例
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="コンサルティングプロジェクトを始める" title-en="コンサルティングプロジェクトを始める" subtitle="お問い合わせいただき、専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください" subtitle-en="お問い合わせいただき，専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください" />
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
  title: '技術コンサルティング - 寧波楽科科情報技術有限公司',
  description: 'ワンストップデジタルコンサルティングと実行サービス、ITコンサルティング、システム規劃、プロジェクト管理などを提供',
})
</script>
