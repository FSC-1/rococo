<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Services Section -->
    <section class="section-padding relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="/6_1.jpg" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-white/70"></div>
      </div>

      <div class="container-custom relative z-10">
        <CommonSectionTitle
          :title="locale === 'ja' ? 'コアサービス' : '核心服务'"
          :title-en="locale === 'ja' ? 'コアサービス' : '核心服务'"
          :subtitle="locale === 'ja' ? '4つのサービスモジュールで企業のDXを包括的に支援' : '四大服务模块，全方位助力企业数字化转型'"
          :subtitle-en="locale === 'ja' ? '4つのサービスモジュールで企業のDXを包括的に支援' : '四大服务模块，全方位助力企业数字化转型'"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <HomeServiceCard
            v-for="service in services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <!-- Product Showcase -->
    <HomeProductShowcase :locale="locale" />

    <!-- News Section -->
    <HomeNewsSection :news-list="newsList" />

    <!-- Contact Info -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CommonSectionTitle
              :title="locale === 'ja' ? 'お問い合わせ' : '联系我们'"
              :title-en="locale === 'ja' ? 'お問い合わせ' : '联系我们'"
              :subtitle="locale === 'ja' ? 'ご質問やご相談がございましたら、お気軽にでください' : '有任何问题或咨询需求，欢迎随时联系我们'"
              :subtitle-en="locale === 'ja' ? 'ご質問やご相談がございましたら、お気軽にでください' : '有任何问题或咨询需求，欢迎随时联系我们'"
            />
            <div class="mt-8">
              <CommonContactInfo />
            </div>
          </div>
          <div>
            <CommonContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { services } from '~/utils/constants'
const { locale } = useLocale()

// SEO
useSeoMeta({
  title: locale.value === 'ja' ? '寧波楽科科情報技術有限公司 - 専門的なデジタルトランスフォーメーションサービスプロバイダー' : '宁波乐科科信息技术有限公司 - 专业的数字化转型服务商',
  description: locale.value === 'ja' ? '寧波楽科科情報技術有限公司はカスタマイズソフトウェア開発、ローコードプラットフォーム開発、デジタルトランスフォーメーションコンサルティングなどのサービスを提供しています' : '宁波乐科科信息技术有限公司提供定制化软件开发、低代码平台开发、数字化转型咨询等服务',
  ogTitle: locale.value === 'ja' ? '寧波楽科科情報技術有限公司' : '宁波乐科科信息技术有限公司',
  ogDescription: locale.value === 'ja' ? '専門的なデジタルトランスフォーメーションサービス提供商' : '专业的数字化转型服务商',
})

// Fetch data
const { fetchNews, fetchConfig } = useStrapi()

const [newsResponse, configResponse] = await Promise.all([
  fetchNews({ pageSize: 6 }),
  fetchConfig(),
])

const newsList = newsResponse?.data || []
const config = configResponse?.data || null
</script>
