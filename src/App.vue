<template>
  <div id="app">
    <x-header style="background-color:#000;" :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMenus = true">
      <span>糖宝</span>
      <span slot="overwrite-left" @click="leftmenu = true">
        <x-icon  type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>
    <transition name="router">
      <router-view></router-view>
    </transition>
    <tabbar v-model="index">
      <tabbar-item v-for="item,i in barlist" :link="item.path" :selected="i === index" :key = 'i'>
        <img slot="icon" :src="i===index|src(item)">
        <span slot="label">{{item.label}}</span>
      </tabbar-item >
    </tabbar>
    <!--侧边栏-->
    <div v-transfer-dom>
      <popup v-model="leftmenu" position="left">
        <div style="width:200px;">
        </div>
      </popup>
    </div>
    <!--下拉按钮-->
    <actionsheet v-model="showMenus" :menus="menu" @on-click-menu="clickMenu"  show-cancel></actionsheet>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem, Actionsheet, TransferDom, Popup} from 'vux'
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
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Tabbar,
      TabbarItem,
      Actionsheet,
      Popup
    },
    data() {
      return {
        showMenus: false,
        leftmenu: false,
        index: 0,
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
    created() {
      const {path} = this.$route
      switch (path) {
        case '/':
          this.index = 0
          break
        case '/foots':
          this.index = 1
          break
        case '/space':
          this.index = 2
          break
        case '/future':
          this.index = 3
          break
      }
    },
    methods: {
      clickMenu() {
        let obj = new Proxy({}, {
          get: function (target, key, receiver) {
            console.log(`getting ${key}!`)
            return Reflect.get(target, key, receiver)
          }
        })
        console.log(obj.value)
      }
    }
}
</script>

<style lang='scss'>
@function px2rem($px) {
  $rem: 75px;
@return ($px / $rem) + rem
}
body{
  margin: 0px;
}
#app {
  font-size: 0.3rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
a{
  text-decoration: none;
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
