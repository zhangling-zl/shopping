<template>
 <div>
   <div v-for="(item,index) in recommend" :key="index">
     <img :src="item.image" class="img1">
     <div>{{item.goodsName}}</div>
     <div>{{item.mallPrice}}</div>
     <div>{{item.price}}</div>
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
.img1{
  width: 80px;

}

</style>