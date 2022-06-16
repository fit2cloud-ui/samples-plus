import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Fit2CloudPlus from 'fit2cloud-ui-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index";
import { createPinia} from 'pinia';
import i18n from '@/locales'
import './permission'

import "@/styles/index.scss"

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Fit2CloudPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(i18n)
app.mount('#app')