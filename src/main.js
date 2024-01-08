import {createApp} from 'vue'
import App from './App.vue'
import EIMZOVuePlugin from './vue-eimzo'

const app = createApp(App)

app.use(EIMZOVuePlugin)

app.mount('#app')
