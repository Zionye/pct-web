// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true, // 开启 SSR
  target: 'static', // 可省略，Nuxt3 默认是 'server'，但在 generate 会被 override
  // 网站部署路径，如果部署在子路径下要配置此项
  app: {
    // 如果你的网站部署在 https://example.com/my-site/ ,那这里就写 '/my-site/'，否则默认 '/'
    baseURL: '/',
  },
  // 构建输出目录（默认是 .output/，但 generate 会用 dist/）
  nitro: {
    preset: 'static',
  },
  
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
