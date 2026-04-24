<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Power Platform</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">直感的なUIとローコード開発、ビジネスイノベーションをより身近なものに</p>
        <p class="text-lg text-gray-600">IT人材不足を補い、変化の激しい業務現場にも柔軟に対応</p>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="Power Platform の特徴"
          title-en="Power Platform の特徴"
          subtitle="Microsoft低コードプラットフォーム、エンタープライズ向けアプリケーションを迅速に構築"
          subtitle-en="Microsoft低コードプラットフォーム、エンタープライズ向けアプリケーションを迅速に構築"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:mouse" class="w-7 h-7 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">直感的なUI</h3>
            <p class="text-gray-600 text-sm">高度なIT知識がなくても使用可能</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:code" class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">ローコード開発</h3>
            <p class="text-gray-600 text-sm">ビジネスアプリケーションを迅速に構築</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:users" class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">人材不足を補完</h3>
            <p class="text-gray-600 text-sm">IT技術のハードルを降低</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:lightning" class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">変化に柔軟に対応</h3>
            <p class="text-gray-600 text-sm">ビジネスニーズに迅速に対応</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービス内容"
          title-en="サービス内容"
          subtitle="初期導入から効果検証までのワンストップサービス"
          subtitle-en="初期導入から効果検証までのワンストップサービス"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:path" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">PowerApps 導入</h3>
            <p class="text-gray-600">エンタープライズ向けのモバイルアプリケーションを迅速に構築、マルチエンドアクセスをサポート</p>
          </div>
          <div class="card p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:flow-arrow" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">Power Automate</h3>
            <p class="text-gray-600">業務プロセスの標準化と自動化、運用効率を向上</p>
          </div>
          <div class="card p-6">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name="ph:chart-line" class="w-6 h-6 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-3">効果検証</h3>
            <p class="text-gray-600">導入から効果検証までの完全サービス</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービスフロー"
          title-en="サービスフロー"
          subtitle="ワンストップサービス、プロジェクトの正常なLaunchを確保"
          subtitle-en="ワンストップサービス、プロジェクトの正常なLaunchを確保"
        />
        <div class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
            <h4 class="font-semibold mb-2">要件調査</h4>
            <p class="text-gray-600 text-sm">業務プロセスと要件を理解</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
            <h4 class="font-semibold mb-2">方案設計</h4>
            <p class="text-gray-600 text-sm">解決方案を策定</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
            <h4 class="font-semibold mb-2">開発実施</h4>
            <p class="text-gray-600 text-sm">迅速なイテレーション開発</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
            <h4 class="font-semibold mb-2">効果検証</h4>
            <p class="text-gray-600 text-sm">継続的な最適化と改善</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="顧客事例" title-en="顧客事例" subtitle="Power Platformの成功事例をご覧ください" subtitle-en="Power Platformの成功事例をご覧ください" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=power-platform" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            もっと見る
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="プロジェクトを始める" title-en="プロジェクトを始める" subtitle="お問い合わせいただき、専門的なPower Platform導入コンサルティングサービスをご覧ください" subtitle-en="お問い合わせいただき，専門的なPower Platform導入コンサルティングサービスをご覧ください" />
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
  title: 'Power Platform - 寧波楽科科情報技術有限公司',
  description: 'PowerApps、Power AutomateなどのMicrosoft低コードプラットフォーム導入サービス、導入から効果検証までのワンストップサービス提供',
})
</script>
