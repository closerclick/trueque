import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base relativo: la app se sirve bajo el subdominio cerca.closer.click
export default defineConfig({
  base: './',
  plugins: [vue()]
})
