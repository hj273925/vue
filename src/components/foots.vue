<template>
 <div>
   <divider>暂无数据</divider>
 </div>
</template>

<script>
  import { Divider } from 'vux'
export default {
    name: 'foots',
    components: {
      Divider
    },
    data() {
      return {
        records: [],
        record: this.$route.query.message
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
