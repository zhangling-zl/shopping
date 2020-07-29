<template>
 <div>
   我是最近浏览
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
         browse:[]

     }
   },
   methods: {

   },
   mounted() {
       this.browse = JSON.parse(localStorage.getItem("browseList")); 
       console.log(this.browse);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>