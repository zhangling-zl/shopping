<template>
 <div>
我的收藏页面
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
       list:[]

     }
   },
   methods: {
     //查询我的收藏
    getCollectionList() {
      this.$api
        .getCollectionList()
        .then((res) => {
          if(res.code===200){
           this.list=res.data.list
          }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

   },
   mounted() {
     //查询我的收藏
    this.getCollectionList();

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>