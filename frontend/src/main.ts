import './app/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app/App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from '@/app/router'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(pinia)

app.mount('#app')
