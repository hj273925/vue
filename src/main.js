// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import axios from 'axios'
import store from './store/store'
import Vuerify from 'vuerify'
import './mixins/mixin'
import Hdivider from './plugins/divider/index'


Vue.config.productionTip = false
Vue.use(Vuerify)
Vue.use(Hdivider)
Vue.prototype.$axios = axios.create({
  timeout: 10000,
  withCredentials: true
})

//设置参数到vue.ext_ctx
const queryString = require('query-string')
Vue.prototype.ext_ctx = queryString.parse(location.search)
for (var key in Vue.prototype.ext_ctx) {
  console.log("param from c01 --->  " + key + '=' + Vue.prototype.ext_ctx[key])
  Cookies.set(key, Vue.prototype.ext_ctx[key])
}
Vue.config.devtools = true
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  },
  created: function() {}
})
