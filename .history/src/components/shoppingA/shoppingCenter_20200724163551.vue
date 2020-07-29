<template>
 <div>
    <div><input type="checkbox">全选</div>
    <div>合计</div>
    <div>请确认订单</div>
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
         id:''
     }
   },
   methods: {

   },
   mounted() {
       //接收从首页和详情页传递过来的id值
       this.id=this.$route.query.id
       //获取购物车数据
       this.$api.postQetCard(this.id).then(res=>{
         console.log(res);
       }).catch(err=>{
           console.log(err);
       })

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>