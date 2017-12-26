<template>
  <div id = 'hj'></div>
</template>
<script>
  import theaterJS from 'theaterjs'
  export default{
    name: 'talk',
    data() {
      return {

      }
    },
    mounted() {
      let theater = theaterJS()
      theater
        .addActor('hj')
      theater
        .addScene('hj:现在大家不都挺开心的吗?以后有时间了多和她聊聊就好了')
    },
    methods: {
    }
  }
</script>
<style>
  #hj{
    text-indent: 2rem;
    font-size: 14px;
  }
</style>
