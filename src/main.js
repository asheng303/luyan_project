import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import 'assets/icon/stylus/style.css'
Vue.prototype.$bus = new Vue()
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
