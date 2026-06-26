import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: '/MyPersonalsite.io/',
  build: {
    outDir: 'docs'
  },
  css: {
    postcss: './postcss.config.js' // если есть
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})