import './assets/main.css'

import AutoComplete from 'primevue/autocomplete'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('AutoComplete', AutoComplete)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app')
