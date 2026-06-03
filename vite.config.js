import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base relativo: la app se sirve bajo el subdominio cerca.closer.click
export default defineConfig({
  base: './',
  // Los `closer-click-*` son Web Components (custom elements), no componentes Vue.
  plugins: [vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('closer-click-') } } })]
})
