<template>
 <div>
   <div v-for="(item,index) in recommend" :key="index">
     <img :src="item.image" alt="">
   </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     recommend:{
       type:Array
     }
   },
   components: {

   },
   data () {
     return {
       
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>