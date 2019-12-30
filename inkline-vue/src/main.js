import Vue from 'vue'
import Inkline from '@inkline/inkline'

import '@inkline/inkline/dist/inkline.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Inkline)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
