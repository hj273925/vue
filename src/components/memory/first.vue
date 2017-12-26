<template>
  <div>

  </div>
</template>

<script>
  export default{
    name: 'first',
    data() {
      return {}
    },
    created() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style>

</style>
