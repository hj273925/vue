import Vue from 'vue'
import Router from 'vue-router'
import WorkOrder from '@/components/NoticeList'
import WorkDetail from '@/components/WorkDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'WorkOrder',
    component: WorkOrder
  }, {
    path: '/workdetail',
    name: 'WorkDetail',
    component: WorkDetail
  }]
})
