// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3001
  },
  
  modules: ['@nuxtjs/i18n'],
  
  i18n: {
    locales: [
      { code: 'zh', name: '中文', file: 'zh.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // 静态生成配置
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  
  // GitHub Pages 配置
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
    head: {
      title: '张艾温 - 资深全栈工程师',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '简历 - 资深全栈工程师，后端架构，高可用高并发，Java，Go，Vue，Nuxt.js，Nginx' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
