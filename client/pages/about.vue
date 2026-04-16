<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
        <p class="text-xl text-gray-600">客户至上，用心对待</p>
      </div>
    </section>

    <!-- Company Intro -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Rococo 集团</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 mb-6">
              Rococo集团创立于1994年，是一家以"心"为核心理念的日本IT服务企业。正如公司名称的由来，我们珍视"心"，在日常的企业活动中始终贯彻这一理念，致力于成为客户值得信赖的数字化转型合作伙伴。
            </p>
          </div>

          <!-- Timeline -->
          <div class="mt-12">
            <h3 class="text-2xl font-bold mb-8 text-center">发展历程</h3>
            <div class="space-y-6">
              <div v-for="milestone in milestones" :key="milestone.year" class="flex items-start">
                <div class="w-24 flex-shrink-0 font-bold text-primary-600">{{ milestone.year }}</div>
                <div class="flex-1 pb-6 border-l-2 border-primary-200 pl-6 relative">
                  <div class="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1"></div>
                  <p class="text-gray-700">{{ milestone.event }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rococo China -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Rococo 中国</h2>
          <p class="text-gray-600 mb-8 text-center">
            作为乐科科集团最早成立的海外事业部—中国事业部成立于2005年，下属营销中心上海乐科科软件有限公司和研发中心宁波乐科科信息技术有限公司。本着客户至上、用心对待的经营理念，提供企业信息化咨询、软件定制开发与维护以及软件产品的开发与销售服务。
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card p-6 text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:handshake" class="w-8 h-8 text-primary-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">对待客户</h3>
              <p class="text-gray-600 text-sm">
                我们始终致力于，切实助力企业核心业务发展，为客户创造更高的价值。
              </p>
            </div>
            <div class="card p-6 text-center">
              <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:graduation-cap" class="w-8 h-8 text-secondary-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">对待员工</h3>
              <p class="text-gray-600 text-sm">
                积极践行学习新知识，掌握新技能，一专多能的人才培养模式。
              </p>
            </div>
            <div class="card p-6 text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ph:globe" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">对待社会</h3>
              <p class="text-gray-600 text-sm">
                不给社会添麻烦，努力担当企业公民的责任。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Honor -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <CommonSectionTitle
          title="荣誉资质"
          subtitle="多年的努力与积累，获得客户与行业的认可"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="honor in honors" :key="honor.year + honor.title" class="card p-5 flex items-start">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Icon name="ph:trophy" class="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div class="text-sm text-primary-600 font-medium">{{ honor.year }}</div>
              <h3 class="font-semibold">{{ honor.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <CommonSectionTitle title="联系我们" subtitle="欢迎来电或在线咨询" />
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
  title: '关于我们 - 宁波乐科科信息技术有限公司',
  description: '了解乐科科集团的发展历程、企业文化和荣誉资质',
})

const milestones = [
  { year: '2024年12月', event: '获得"技术先进性企业"称号' },
  { year: '2023年12月', event: '通过"高新技术企业"复审' },
  { year: '2023年12月', event: '株式会社ロココ在东京证券交易所挂牌上市' },
  { year: '2022年9月', event: '公司内部管理流程正式命名为RPMS' },
  { year: '2020年12月', event: '获得"高新技术企业"称号' },
  { year: '2019年5月', event: '认定为"鄞州区企业工程技术中心"' },
  { year: '2018年12月', event: '认定为"国家级科技型中小企业"' },
  { year: '2018年8月', event: 'HR++人事管理系统面市' },
  { year: '2017年12月', event: '成为"IFS合作伙伴"' },
  { year: '2017年6月', event: '认定为"宁波市技术先进型服务企业"' },
  { year: '2011年5月', event: '获得"CMMI3"、"ISO27001:2005"认证' },
  { year: '2010年1月', event: '宁波乐科科信息技术有限公司成立' },
  { year: '2007年1月', event: '自动排版系统新版本开发' },
  { year: '2005年8月', event: '上海乐科科软件有限公司成立' },
]

const honors = [
  { year: '2024年', title: '技术先进性企业' },
  { year: '2023年', title: '高新技术企业复审通过' },
  { year: '2022年', title: 'RPMS管理流程命名' },
  { year: '2020年', title: '高新技术企业认证' },
  { year: '2019年', title: '鄞州区企业工程技术中心' },
  { year: '2018年', title: '国家级科技型中小企业' },
  { year: '2017年', title: 'IFS合作伙伴' },
  { year: '2017年', title: '宁波市技术先进型服务企业' },
  { year: '2011年', title: 'CMMI3认证' },
  { year: '2011年', title: 'ISO27001:2005认证' },
]
</script>
