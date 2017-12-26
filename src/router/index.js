import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: function (resolve) {
      require(['@/components/home'], resolve)
    }
  }, {
    path: '/foots',
    name: 'foots',
    component: function (resolve) {
      require(['@/components/foots'], resolve)
    }
  }, {
    path: '/space',
    name: 'space',
    component: function (resolve) {
      require(['@/components/space'], resolve)
    }
  }, {
    path: '/future',
    name: 'future',
    component: function (resolve) {
      require(['@/components/future'], resolve)
    }
  }, {
    path: '/talk/:id',
    name: 'talk',
    component: function (resolve) {
      require(['@/components/story/talk'], resolve)
    }
  }, {
    path: '/first/:id',
    name: 'first',
    component: function (resolve) {
      require(['@/components/memory/first'], resolve)
    }
  }, {
    path: '/message',
    name: 'message',
    component: function (resolve) {
      require(['@/components/message/message'], resolve)
    }
  }]
})
