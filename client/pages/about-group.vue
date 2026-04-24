<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Rococo グループ</h1>
        <p class="text-xl text-gray-600">「心」を珍くし、客户の信頼されるデジタルトランスフォーメーションのパートナーになる</p>
        <p class="text-lg text-primary-600 mt-2">1994年創業、東証スタンダード板上場（JPX）</p>
      </div>
    </section>

    <!-- Group Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Rococoについて</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Rococoグループは1994年に「心」を核心理念として設立れた日本ITサービス企業です。公司名の由来のように、私たちは「心」を珍くし、日常の企業活動に常にこの理念を貫き、客户の信頼されるデジタルトランスフォーメーションパートナーになることを 목표로しています。
            </p>
          </div>

          <!-- Global Presence -->
          <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 class="text-2xl font-bold mb-6 text-center">グローバル展開</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 class="font-semibold text-primary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:flag" class="w-5 h-5" />
                  日本
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">大阪本社</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">東京本社</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">グローバルテクノロジーセンター</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">福岡オフィス</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm col-span-2">
                    <p class="font-medium text-gray-900">松江BASE</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-600 mb-4 flex items-center gap-2">
                  <Icon name="ph:globe" class="w-5 h-5" />
                  海外
                </h4>
                <div class="grid grid-cols-1 gap-3">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">中国（上海、寧波）</p>
                    <p class="text-sm text-gray-600">マーケティングセンター + R&Dセンター</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">フィリピン（マニラ、セブ）</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <p class="font-medium text-gray-900">ポーランド</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center text-gray-600 mt-6 text-sm">
              アジアおよびヨーロッパにサービスを展開し、お客様にグローバルでローカルな技術サポートを提供
            </p>
          </div>

          <!-- Group Development Milestones -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-6 text-center">グループ発展の歴史</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">1994年</div>
                <p class="text-gray-700">Rococoグループ創業</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2005年</div>
                <p class="text-gray-700">中国市场に進出し、国際展開を開始</p>
              </div>
              <div class="bg-primary-50 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2023年</div>
                <p class="text-gray-700">東京証券取引所スタンダード板上場（JPX）</p>
              </div>
            </div>
            <div class="text-center mt-4">
              <div class="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl">
                <div class="text-2xl font-bold">2024年</div>
                <p class="text-sm opacity-90">創業30周年、创新技術でコラーらの成長を推進し続けます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="お問い合わせ" title-en="お問い合わせ" subtitle="お電話または在线咨询，欢迎随时ご連絡ください" subtitle-en="お電話または在线咨询，欢迎随时ご連絡ください" />
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
  title: 'Rococoグループ - 寧波楽科科情報技術有限公司',
  description: 'Rococoグループの発展の歴史とグローバル展開をご覧ください',
})
</script>
