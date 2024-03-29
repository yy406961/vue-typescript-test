import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import '@/styles/components/containerBox.scss'
import '@/styles/components/header.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
