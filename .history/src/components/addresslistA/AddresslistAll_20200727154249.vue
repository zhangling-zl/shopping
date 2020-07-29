<template>
 <div>
   我是地址列表
 </div>
</template>
<script>
import { AddressList } from 'vant';
import { Toast } from 'vant';
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
       //获取用户收货地址的数据
       getAddress(){
 this.$api.getAddress().then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
       }

   },
   mounted() {
       this.getAddress()

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>