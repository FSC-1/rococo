export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/motion',
    '@nuxt/icon',
  ],

  // SPA mode for GitHub Pages
  ssr: false,

  // Runtime config
  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    },
  },

  // Nitro config for static generation
  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // App
  app: {
    baseURL: '/rococo/',
    head: {
      title: '宁波乐科科信息技术有限公司',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '宁波乐科科信息技术有限公司 - 专业的数字化转型服务商' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },

  // Auto-import components
  components: true,
})
