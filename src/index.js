/// <reference path="./typings/index.d.ts" />
/// <reference path="./typings/global.d.ts" />

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@@/css/mint-ui-fix.css'

Vue.use(Mint);

const vm = new Vue({
  el: '#main',
  router,
  store,
  template: '<App/>',
  components: { App }
})
