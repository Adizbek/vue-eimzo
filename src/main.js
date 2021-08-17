import Vue from 'vue'
import App from './App.vue'
import EIMZOVuePlugin from './vue-eimzo'

Vue.config.productionTip = false

Vue.use(EIMZOVuePlugin)

new Vue({
    render: h => h(App),
}).$mount('#app')
