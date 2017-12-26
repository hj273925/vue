<template>
  <div>
    <div>
      <swiper loop auto :list="img_list"></swiper>
    </div>
    <div>
        <p class="time">
          <span>6周年纪念日倒计时:</span>
          <clocker :time="time"></clocker>
        </p>
    </div>
    <div class="content">
      <router-link :to = "{ name: 'first', params: { id: 123 }}" v-for="item in list">
        <div style="margin: 10px;overflow: hidden;"  >
          <masker style="border-radius: 2px;">
            <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}" style="height: 15vh"></div>
            <div slot="content" class="m-title">
              {{item.title}}
              <br/>
              <span class="m-time">{{item.time}}</span>
            </div>
          </masker>
        </div>
      </router-link>
      <div>
        <divider>我是有底线的</divider>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swiper, Clocker, Divider, Marquee, MarqueeItem, Masker} from 'vux'
  var Time = {
    props: {
      time: {
        type: String,
        required: true
      }
    },
    template: '<div>asdasas</div>'
  }
  export default {
    name: 'home',
    components: {
      Swiper,
      Clocker,
      Divider,
      Marquee,
      MarqueeItem,
      Masker,
      'hc-time': Time
    },
    data() {
      return {
        time: '2017-12-13',
        list: [{
          title: '第一次相遇！',
          img: 'https://static.vux.li/demo/3.jpg',
          time: '2011-12-11'
        }, {
          title: '第一次牵手！',
          img: 'https://static.vux.li/demo/1.jpg',
          time: '2011-12-23'
        }, {
          title: '第一次相拥！',
          img: 'https://static.vux.li/demo/2.jpg',
          time: '2012-1-13'
        }],
        img_list: [{
          url: '/workdetail',
          img: 'https://static.vux.li/demo/1.jpg',
          title: ''
        }, {
          url: '/workdetail',
          img: 'https://static.vux.li/demo/2.jpg',
          title: ''
        }, {
          url: '/workdetail',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }]
      }
    },
    computed: {
      count() {
        return this.count
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped>
  .time{
    margin: auto;
    text-align: center;
    font-size: 12px;
    padding: 5px 0;
    background: white;
  }
  .time span{
    color: red;
  }
  .content{

  }
  .m-img{
    background-size: 100% 100%;
  }
  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
</style>
