// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true, // 开启 SSR
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  
  vite: {// 启用 Vite 插件
    resolve: {
      alias: {
        'element-plus': 'element-plus'
      }
    },
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/css/element-var.scss" as *;`, // 全局注入变量
        },
      },
    },
  },

  // CSS 配置
  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '~/assets/css/tailwindcss.css',
    '~/assets/css/element-index.scss',
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },


  // Element Plus 配置
  elementPlus: {
    importStyle: 'scss', // 确保 Element Plus 使用 Sass
    useSource: true,   // 可选：启用源码优化（可 Tree-shake）
  },
  
  // 构建配置
  build: {
    transpile: ['swiper']
  },
})
