<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">デジタルトランスフォーメーション</h1>
        <p class="text-2xl text-primary-600 font-medium mb-4">企業のデジタルトランスフォーメーションを伴走し、企業昇級の道を全程で見守ります</p>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          ワンストップデジタルコンサルティングと実行サービス、専門的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します
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
          <div class="card p-6 border-t-4 border-red-500">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:warning-circle" class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">デジタル戦略規劃の欠如</h3>
            <p class="text-gray-600">
              企業はデジタルトランスフォーメーションの過程で、多くの場合、明確な戦略規劃がなく，大量の人力・物力を投入しても変革効率不高で資源の無駄遣いにつながる.
            </p>
          </div>
          <div class="card p-6 border-t-4 border-orange-500">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">専門レベル不足</h3>
            <p class="text-gray-600">
              企業はデジタルトランスフォーメーションの過程で、市場でのソリューションを理解する必要があり、リーダーが専門的知識を持ち、正しい判断を下す必要がある.
            </p>
          </div>
          <div class="card p-6 border-t-4 border-purple-500">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:shield-check" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">データ安全问题</h3>
            <p class="text-gray-600">
              デジタルトランスフォーメーションは大量のデータ処理と伝送涉及到おり、もし企業が必要なデータセキュリティ保護措置を欠いている場合容易データ漏洩とセキュリティリスクが生じやすい。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Consulting -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="ITコンサルティング"
          title-en="ITコンサルティング"
          subtitle="業務とITを贯通する全工程のDXコンサルティングサービス"
          subtitle-en="業務とITを贯通する全工程のDXコンサルティングサービス"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              ワンストップデジタルコンサルティングと実行サービス、専門的なコンサルティングを基盤に企業のデジタル構築を全面的に支援します。精密な業務要件診断、優れたソリューションの連携、業務プロセス最適化を通じて、OA、ERPなどの重要システムが正常に導入され、価値を解放することを支援します。
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">コンサルティングサービス内容</h3>
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
          title="システム導入支援"
          title-en="システム導入支援"
          subtitle="重要システムの正常な導入と価値解放を支援します"
          subtitle-en="重要システムの正常な導入と価値解放を支援します"
        />

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 智能制造 -->
          <div class="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="ph:factory" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-semibold">スマート製造</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:database" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">コアシステム（ERP）</h4>
                  <p class="text-gray-600 text-sm">企業資源計画システム</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:calendar-check" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">生産計画システム（APS）</h4>
                  <p class="text-gray-600 text-sm">高度計画とスケジューリング</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cpu" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">製造実行システム（MES）</h4>
                  <p class="text-gray-600 text-sm">生産プロセス管理</p>
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
              <h3 class="text-xl font-semibold">業務効率</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:files" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">OAシステム</h4>
                  <p class="text-gray-600 text-sm">事務自動化システム</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:flow-arrow" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">業務プロセス標準化</h4>
                  <p class="text-gray-600 text-sm">プロセス最適化と管理</p>
                </div>
              </div>
              <div class="bg-white rounded-xl p-4 flex items-center gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:chart-bar" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">データ意思決定分析</h4>
                  <p class="text-gray-600 text-sm">データ駆動型意思決定</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink to="/cases?category=consulting" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            ITコンサルティング顧客事例を見る
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- System Refactoring -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="レガシーシステム再構築"
          title-en="レガシーシステム再構築"
          subtitle="レガシーシステム近代化改造の専門家"
          subtitle-en="レガシーシステム近代化改造の専門家"
        />

        <div class="max-w-4xl mx-auto mt-8">
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              企業のレガシーシステムを近代的に改造し、システムパフォーマンス、セキュリティ、保守性を向上させます。既存のシステムとの連携を実現し、持続可能なシステム運用を行います。スムーズな移行と継続的な運用で、企業のIT資産に新たな価値をもたらします。
            </p>
          </div>

          <h3 class="text-2xl font-bold text-center mb-6">サービス内容</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">レガシーシステム近代化</h4>
                  <p class="text-gray-600 text-sm">旧システムのアップグレード改造、パフォーマンス、セキュリティ、保守性の向上</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">システム移行</h4>
                  <p class="text-gray-600 text-sm">旧プラットフォームから新プラットフォームへ、データ完全性を確保</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">アーキテクチャ最適化</h4>
                  <p class="text-gray-600 text-sm">システムアーキテクチャ再設計、スケーラビリティ向上</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">技術負債清理</h4>
                  <p class="text-gray-600 text-sm">歴史的技術問題の解決、コード品質向上</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <NuxtLink to="/cases?category=system-refactor" class="btn-secondary inline-flex items-center">
              <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
              システム再構築顧客事例を見る
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="デジタルトランスフォーメーションを開始する" title-en="デジタルトランスフォーメーションを開始する" subtitle="お問い合わせいただき、専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください" subtitle-en="お問い合わせいただき、専門的なデジタルトランスフォーメーションコンサルティングサービスをご覧ください" />
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
  title: 'デジタルトランスフォーメーション - 寧波楽科科情報技術有限公司',
  description: 'ITコンサルティング、デジタルトランスフォーメーション規劃、レガシーシステム再構築などのサービス提供、企业のデジタルトランスフォーメーションを伴走します',
})

const consultingItems = [
  { icon: 'ph:stethoscope', title: 'システム診断', description: '既存のITシステムを全面的に診断' },
  { icon: 'ph:user-circle', title: 'システムアドバイザー', description: '専門的IT規劃提案' },
  { icon: 'ph:blueprint', title: 'システム化規劃', description: 'トランスフォーメーションロードマップの策定' },
  { icon: 'ph:handshake', title: 'サプライヤー選定・交渉', description: '適切なサプライヤーの評価と選択' },
  { icon: 'ph:gantt-chart', title: 'プロジェクト管理', description: 'プロジェクト定時納品を確保' },
  { icon: 'ph:trend-up', title: '改善・改革コンサルティング', description: '継続的最適化サポート' },
]
</script>
