<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ locale === 'zh' ? '系统重建' : 'システム再構築' }}</h1>
        <p class="text-xl text-primary-600 font-medium mb-3">{{ locale === 'zh' ? '传统系统现代化改造专家' : 'レガシーシステム近代化改造の専門家' }}</p>
        <p class="text-lg text-gray-600">{{ locale === 'zh' ? '在确保业务连续性的同时，提升系统性能、安全性和可维护性' : 'ビジネス連続性を確保しながら、システムパフォーマンス、セキュリティ、保守性を向上' }}</p>
      </div>
    </section>

    <!-- Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '服务概要' : 'サービス概要'"
          :title-en="locale === 'zh' ? 'Service Overview' : 'サービス概要'"
          :subtitle="locale === 'zh' ? '为企业IT资产带来新的价值' : '企業のIT資産に新たな価値をもたらす'"
          :subtitle-en="locale === 'zh' ? 'Bring new value to enterprise IT assets' : '企業のIT資産に新たな価値をもたらす'"
        />
        <div class="max-w-4xl mx-auto mt-8">
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ locale === 'zh'
              ? '对企业传统系统进行现代化改造，提升系统性能、安全性、可维护性。实现与现有系统的联动，实现可持续的系统运营。通过平滑过渡和持续运营，为企业IT资产带来新的价值。'
              : '企業のレガシーシステムを近代的に改造し、システムパフォーマンス、セキュリティ、保守性を向上させます。既存のシステムとの連携を実現し、持続可能なシステム運用を行います。スムーズな移行と継続的な運用で、企業のIT資産に新たな価値をもたらします。' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '服务内容' : 'サービス内容'"
          :title-en="locale === 'zh' ? 'Services' : 'サービス内容'"
          :subtitle="locale === 'zh' ? '全方位系统重建解决方案' : '全方位システム再構築ソリューション'"
          :subtitle-en="locale === 'zh' ? 'Comprehensive system refactoring solutions' : '全方位システム再構築ソリューション'"
        />
        <div class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:gear" class="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ locale === 'zh' ? '传统系统现代化' : 'レガシーシステム近代化' }}</h3>
                  <p class="text-gray-600">{{ locale === 'zh' ? '旧系统升级改造，提升性能、安全性、可维护性' : '旧システムのアップグレード改造、パフォーマンス、セキュリティ、保守性の向上' }}</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:cloud-arrow-up" class="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ locale === 'zh' ? '系统迁移' : 'システム移行' }}</h3>
                  <p class="text-gray-600">{{ locale === 'zh' ? '从旧平台迁移到新平台，确保数据完整性' : '旧プラットフォームから新プラットフォームへ、データ完全性を確保' }}</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:blueprint" class="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ locale === 'zh' ? '架构优化' : 'アーキテクチャ最適化' }}</h3>
                  <p class="text-gray-600">{{ locale === 'zh' ? '系统架构重新设计，提升可扩展性' : 'システムアーキテクチャ再設計、スケーラビリティ向上' }}</p>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ph:broom" class="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ locale === 'zh' ? '技术负债清理' : '技術負債清理' }}</h3>
                  <p class="text-gray-600">{{ locale === 'zh' ? '解决历史技术问题，提升代码质量' : '歴史的技術問題の解決、コード品質向上' }}</p>
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
          :title="locale === 'zh' ? '为什么需要系统重建' : 'なぜシステム再構築が必要ですか'"
          :title-en="locale === 'zh' ? 'Why System Refactoring' : 'なぜシステム再構築が必要ですか'"
          :subtitle="locale === 'zh' ? '解决企业信息化的课题' : '企業情報化に直面する課題を解決'"
          :subtitle-en="locale === 'zh' ? 'Solve challenges in enterprise IT' : '企業情報化に直面する課題を解決'"
        />
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:warning" class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '性能下降' : 'パフォーマンス低下' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '旧系统性能不足，影响业务效率' : '旧システムのパフォーマンス不足、ビジネス効率に影響' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:shield-warning" class="w-8 h-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '安全风险' : 'セキュリティリスク' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '技术滞后带来的安全风险' : '技術遅滞によるセキュリティリスク' }}</p>
          </div>
          <div class="card p-6 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ph:wrench" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ locale === 'zh' ? '维护困难' : '保守困難' }}</h3>
            <p class="text-gray-600 text-sm">{{ locale === 'zh' ? '代码难以维护，人员交替困难' : 'コードが保守しにくく、人员的交替が困難' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <CommonSectionTitle
          :title="locale === 'zh' ? '客户案例' : '顧客事例'"
          :title-en="locale === 'zh' ? 'Customer Cases' : '顧客事例'"
          :subtitle="locale === 'zh' ? '查看系统重建的成功案例' : 'システム再構築の成功事例をご覧ください'"
          :subtitle-en="locale === 'zh' ? 'View successful system refactoring cases' : 'システム再構築の成功事例をご覧ください'"
        />
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <NuxtLink to="/cases?category=system-refactor" class="btn-primary inline-flex items-center">
            <Icon name="ph:folder-open" class="w-5 h-5 mr-2" />
            {{ locale === 'zh' ? '查看更多' : 'もっと見る' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle
            :title="locale === 'zh' ? '开始项目' : 'プロジェクトを始める'"
            :title-en="locale === 'zh' ? 'Start a Project' : 'プロジェクトを始める'"
            :subtitle="locale === 'zh' ? '联系我们，获取专业系统重建咨询服务' : 'お問い合わせいただき、専門的なシステム再構築コンサルティングサービスをご覧ください'"
            :subtitle-en="locale === 'zh' ? 'Contact us for professional system refactoring consulting services' : 'お問い合わせいただき、専門的なシステム再構築コンサルティングサービスをご覧ください'"
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
  title: locale === 'zh' ? '系统重建 - 宁波乐科科信息技术有限公司' : 'システム再構築 - 寧波楽科科情報技術有限公司',
  description: locale === 'zh'
    ? '提供传统系统现代化、系统迁移、架构优化、技术负债清理等服务，为传统系统带来新的价值'
    : 'レガシーシステム近代化、システム移行、アーキテクチャ最適化、技術負債清理などのサービス提供、レガシーシステムに新たな価値をもたらします',
})
</script>
