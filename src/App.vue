<template>
  <div id="app">
    <x-header style="background-color:#000;" :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMenus = true">糖宝</x-header>
    <transition name="router">
      <router-view></router-view>
    </transition>
    <tabbar v-model="index">
      <tabbar-item v-for="item,i in barlist" :link="item.path" :selected="i === index" :key = 'i'>
        <img slot="icon" :src="i===index|src(item)">
        <span slot="label">{{item.label}}</span>
      </tabbar-item >
    </tabbar>
    <actionsheet v-model="showMenus" :menus="menu" @on-click-menu="clickMenu"  show-cancel></actionsheet>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem, Actionsheet} from 'vux'
  let home = require('./assets/img/home.png')
  let homec = require('./assets/img/homec.png')
  let foot = require('./assets/img/foot.png')
  let footc = require('./assets/img/footc.png')
  let space = require('./assets/img/space.png')
  let spacec = require('./assets/img/spacec.png')
  let future = require('./assets/img/future.png')
  let futurec = require('./assets/img/futurec.png')
  export default {
    name: 'app',
    components: {
      XHeader,
      Tabbar,
      TabbarItem,
      Actionsheet
    },
    data() {
      return {
        showMenus: false,
        index: 1,
        barlist: [{
          path: '/',
          label: '首页',
          src: home,
          srcs: homec
        }, {
          path: '/foots',
          label: '足迹',
          src: foot,
          srcs: footc
        }, {
          path: '/space',
          label: '空间',
          src: space,
          srcs: spacec
        }, {
          path: '/future',
          label: '未来',
          src: future,
          srcs: futurec
        }],
        menu: [{
          label: '设置',
          type: 'primary',
          value: 'reset'
        }]
      }
    },
    watch: {
      $route: () => {
        console.log(this.count)
      }
    },
    methods: {
      clickMenu(key, item) {
        this.index = 2
        this.increment({
          count: 20
        })
      }
    }
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
.weui-tabbar__icon{
  margin-top: 5px;
}
.weui-tabbar__label{
  margin: 5px 0px;
  line-height: normal;
}
.weui-tabbar{
  position: fixed !important;
}
.router-enter-active,.box-leave-active{
  transition: all .8s;
}
.router-enter{
  opacity: 0;
}
.router-leave-active{
  opacity: 0;
}
</style>
