<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection
      :hero-title="config?.heroTitle || '我们的努力都是为了让数字化，更容易'"
    />

    <!-- Services Section -->
    <section class="section-padding relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="/6_1.jpg" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-white/70"></div>
      </div>

      <div class="container-custom relative z-10">
        <CommonSectionTitle
          title="核心服务"
          subtitle="四大服务模块，全方位助力企业数字化转型"
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
    <HomeProductShowcase />

    <!-- News Section -->
    <HomeNewsSection :news-list="newsList" />

    <!-- Contact Info -->
    <section class="section-padding relative overflow-hidden">
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CommonSectionTitle
              title="联系我们"
              subtitle="有任何问题或咨询需求，欢迎随时联系我们"
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

// SEO
useSeoMeta({
  title: '宁波乐科科信息技术有限公司 - 专业的数字化转型服务商',
  description: '宁波乐科科信息技术有限公司提供定制化软件开发、低代码平台开发、数字化转型咨询等服务',
  ogTitle: '宁波乐科科信息技术有限公司',
  ogDescription: '专业的数字化转型服务商',
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
