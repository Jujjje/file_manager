import './app/main.css'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './app/App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from '@/app/router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
}) // provide using router in pinia store
app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
