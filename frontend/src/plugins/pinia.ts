import type { App } from 'vue'
import { createPinia } from 'pinia'

const install = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
}

export default install
