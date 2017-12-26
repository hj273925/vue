<template>
   <div>{{message}}</div>
</template>

<script>
export default{
  name: 'divider',
  props: {
    message: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>
<style scoped>

</style>
