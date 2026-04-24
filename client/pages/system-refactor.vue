<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">システム再構築</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">レガシーシステム近代化改造の専門家</p>
        <p class="text-lg text-gray-600">ビジネス連続性を確保しながら、システムパフォーマンス、セキュリティ、保守性を向上</p>
      </div>
    </section>

    <!-- Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービス概要"
          title-en="サービス概要"
          subtitle="企業のIT資産に新たな価値をもたらす"
          subtitle-en="企業のIT資産に新たな価値をもたらす"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <p class="text-lg text-gray-600 leading-relaxed">
            企業のレガシーシステムを近代的に改造し、システムパフォーマンス、セキュリティ、保守性を向上させます。既存のシステムとの連携を実現し、持続可能なシステム運用を行います。スムーズな移行と継続的な運用で、企業のIT資産に新たな価値をもたらします。
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          title="サービス内容"
          title-en="サービス内容"
          subtitle="全方位システム再構築ソリューション"
          subtitle-en="全方位システム再構築ソリューション"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">レガシーシステム近代化</h3>
                  <p class="text-gray-600">旧システムのアップグレード改造、パフォーマンス、セキュリティ、保守性の向上</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">システム移行</h3>
                  <p class="text-gray-600">旧プラットフォームから新プラットフォームへ、データ完全性を確保</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">アーキテクチャ最適化</h3>
                  <p class="text-gray-600">システムアーキテクチャ再設計、スケーラビリティ向上</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">技術負債清理</h3>
                  <p class="text-gray-600">歴史的技術問題の解決、コード品質向上</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="なぜシステム再構築が必要ですか"
          title-en="なぜシステム再構築が必要ですか"
          subtitle="企業情報化に直面する課題を解決"
          subtitle-en="企業情報化に直面する課題を解決"
        />
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:warning" class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">パフォーマンス低下</h3>
            <p class="text-gray-600 text-sm">旧システムのパフォーマンス不足、ビジネス効率に影響</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:shield-warning" class="w-8 h-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">セキュリティリスク</h3>
            <p class="text-gray-600 text-sm">技術遅滞によるセキュリティリスク</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:wrench" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">保守困難</h3>
            <p class="text-gray-600 text-sm">コードが保守しにくく、人员的交替が困難</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle title="顧客事例" title-en="顧客事例" subtitle="システム再構築の成功事例をご覧ください" subtitle-en="システム再構築の成功事例をご覧ください" />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=system-refactor" class="btn-primary inline-flex items-center">
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
          <CommonSectionTitle title="プロジェクトを始める" title-en="プロジェクトを始める" subtitle="お問い合わせいただき、専門的なシステム再構築コンサルティングサービスをご覧ください" subtitle-en="お問い合わせいただき，専門的なシステム再構築コンサルティングサービスをご覧ください" />
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
  title: 'システム再構築 - 寧波楽科科情報技術有限公司',
  description: 'レガシーシステム近代化、システム移行、アーキテクチャ最適化、技術負債清理などのサービス提供、レガシーシステムに新たな価値をもたらします',
})
</script>
