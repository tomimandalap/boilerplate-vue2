import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './plugins/axios'
// import VOffline from './plugins/vueoffline'
import vueBrowser from './plugins/vuebrowser'
import './assets/scss/global.scss'
import './plugins/vuenotify'
import './plugins/vuelidate'
import vuetify from './plugins/vuetify'

Axios() // running axios instance
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // VOffline,
  vueBrowser,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
