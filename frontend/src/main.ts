import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/plugins/pinia'
import i18n from '@/plugins/i18n'
import 'virtual:windi.css'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
