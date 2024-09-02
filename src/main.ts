import { createApp } from 'vue'
import App from './App'
import router from './router'
import pinia from './stores'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/global.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
