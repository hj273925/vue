<template>
    <div class="toobal" style="background-color: red;">
      <div style="height:50%;width:30%;background-color: black" class="inner"></div>
    </div>
</template>
<script>
  export default{
    name: 'future',
    data() {
      return {

      }
    },
    created() {
      this.$axios.get('http://127.0.0.1:8088/?asddas=dsaas')
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error.response.status === 403)
        })
    },
    methods: {
    }
  }

</script>

<style  scoped lang="scss">
  @function px2rem($px) {
    $rem: 75px;
    @return ($px / $rem) + rem
  }
  .toobal{
    height: px2rem(100px);
    div{
      height: px2rem(80px);
    }
  }
</style>
