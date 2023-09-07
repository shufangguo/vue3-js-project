import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CommonTable from 'common-table-gsf'
import 'common-table-gsf/style.css'

console.log(CommonTable)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(CommonTable)
console.log(CommonTable)
app.mount('#app')
