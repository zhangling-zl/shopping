<template>
 <div>
   <div class="shopping flex ">
      <img src="../../assets/img/order.gif">
      <div class="f22">登录后才能查看订单</div>
      <van-button type="primary" @click="loginAll">请先登录</van-button>
   </div>
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

     }
   },
   methods: {
     loginAll(){
       this.$router.push('/login')
     }

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
.shopping{
  width: 100%;
  height: calc(100vh - 93px);

}
img{
  width: 100%;
}
</style>