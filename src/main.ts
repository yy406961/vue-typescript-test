import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Message, Button } from "element-ui";

Vue.prototype.$message = Message;
Vue.component(Button.name, Button);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
