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
         arr:[]

     }
   },
   methods: {


   },
   mounted() {
      this.arr=this.floor1.slice(0,1)
      console.log(this.arr);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>