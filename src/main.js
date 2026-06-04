import { createApp } from 'vue'
import App from './App.vue'
import { createBackNav } from '@closerclick/closer-click-nav'
import './style.css'

// Navegación "volver" unificada del ecosistema (botón físico de Android / gesto
// de iOS / atrás del navegador / chevron del header → cierra modal o va a la
// página anterior; si no hay nada → closer.click).
createBackNav()

createApp(App).mount('#app')
