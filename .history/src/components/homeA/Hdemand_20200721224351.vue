<template>
 <div>
<div class="center j-center">
      <div class="tetx mtb10 w100 flex j-c a-c">热销商品</div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoods" :key="item.id" @click="clickFeatured(item)">
        <div >
          <van-image :src="item.image" class="img" />
          <div class="text1">{{item.name}}</div>
          <div >
            <div>￥{{item.mallPrice}}</div>
            <div class="text3 f-14">￥{{item.mallPrice}}</div>
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
.tetx{
    color: rgb(225,66,60);
}

</style>