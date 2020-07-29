<template>
 <div>
 <div class="text1 f20">商品推荐</div>
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
.text1{
  color: rgb(81,81,81);
}
</style>