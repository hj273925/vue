<template>
  <div>
    <msg :title="message.info" :button = 'buttons' :icon="message.title" ></msg>
  </div>
</template>

<script>
  import { Msg, XButton } from 'vux'

  export default {
    name: 'message',
    components: {
      Msg,
      XButton
    },
    data() {
      return {
        icon: '',
        title: '操作成功',
        buttons: [{
          type: 'primary',
          text: '返回界面',
          link: '/'
        }]
      }
    },
    computed: {
      message() {
        return this.$store.state.message
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>
<style scoped>

</style>

