<template>
 <div>
    <div></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       floor1:{
           type:Array
       }
   },
   components: {

   },
   data () {
     return {
         obj:{}

     }
   },
   methods: {


   },
   mounted() {
      this.obj=this.floor1.slice(0,1)
      console.log(this.obj);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>