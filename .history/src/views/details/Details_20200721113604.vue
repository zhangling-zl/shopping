<template>
 <div>
   我是详情页
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         id:''

     }
   },
   methods: {

   },
   mounted() {
     this.$route.query.id
     console.log(this.$route.query.id);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>