<template>
 <div>

<van-goods-action :safe-area-inset-bottom='false'>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       goodsOne:{
           type:Object
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