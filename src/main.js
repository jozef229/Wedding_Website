import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VModal from 'vue-js-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

i18n.locale = 'sk'