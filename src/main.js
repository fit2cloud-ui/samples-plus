import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/index.scss"
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index";
import { createPinia } from 'pinia';


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(createPinia())
app.mount('#app')
