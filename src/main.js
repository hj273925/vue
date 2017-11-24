// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import daoStyle from 'dao-style-vue';
import  VeeValidate  from 'vee-validate'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import axios from 'axios'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css';

import 'dao-style-vue/dao-style.js'
import 'dao-style-vue/styles/dao-style.css'
import Vuerify from 'vuerify'
import { Validator } from 'vee-validate';

const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
};

const dict = {
  en: {
    custom: {
      title: {
        required: () => '名称不能为空！',
        max: () => '名称长度不能超过20！'
      },
      type: {
        required: () => '类型不能为空！',
        max: () => '类型长度不能超过20！'
      }
    }
  }
};
Validator.updateDictionary(dict);
Vue.config.productionTip = false
Vue.use(daoStyle)
Vue.use(VeeValidate,config)
Vue.use(Vuerify)

Vue.use(VueNoty, {
  timeout: 2000,
  progressBar: true,
  layout: 'topCenter',
});
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

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  created: function() {}
})
