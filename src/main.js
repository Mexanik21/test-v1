import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiCompanents from './ui-components'


const app = createApp(App)

uiCompanents.map(component => app.component(component.name,component))

app.use(router)

app.mount('#app')
