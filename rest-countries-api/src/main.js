import './assets/main.css'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')