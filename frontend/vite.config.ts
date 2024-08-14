import { fileURLToPath, URL } from 'url'
import path from 'node:path'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

const r = (...args: string[]) => path.resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [r('src/components')],
      // auto import icons
      resolvers: [
        IconsResolver({
          prefix: ''
        })
      ]
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://vue-i18n.intlify.dev/installation.html
    VueI18nPlugin({
      include: [path.resolve(__dirname, 'src/locales/**')]
    })
  ],

  // https://github.com/vitejs/vite/tree/master/packages/vite#config-options
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  }
})
