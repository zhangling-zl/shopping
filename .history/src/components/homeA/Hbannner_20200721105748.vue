<template>
 <div>
   <div class="box"></div>
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
       //首页请求数据
       getRecommend(){
         this.$api.getRecommend().then(res=>{
            console.log(res);
         }).catch(err=>{
             console.log(err);
         })
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
.box{
    height:200px;
    width: 100%;
    background-color: #ccc;
}
</style>