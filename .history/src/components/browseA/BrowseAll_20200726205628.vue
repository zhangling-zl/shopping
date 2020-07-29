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
         browseList:[]

     }
   },
   methods: {

   },
   mounted() {
       this.browseList = JSON.parse(localStorage.getItem("browseList")); 
       console.log(this.browseList);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>