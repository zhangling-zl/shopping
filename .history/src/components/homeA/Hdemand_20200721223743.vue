<template>
 <div>
<div class="center j-center">
      <div class="tetx3 f-600 m-t-10 m-b-10">热销商品</div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoods" :key="item.id" @click="clickFeatured(item)">
        <div class="from j-center al-cnter al-flex">
          <van-image :src="item.image" class="img" />
          <div class="text">{{item.name}}</div>
          <div class="j-flex al-cnter m-t-5">
            <div>￥{{item.mallPrice}}</div>
            <div class="text3 f-14 m-l-5">￥{{item.mallPrice}}</div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       hotGoods:{
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