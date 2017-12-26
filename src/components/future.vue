<template>
    <div>

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
      this.$axios.get(`${process.env.BASE_URL}/`)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
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
