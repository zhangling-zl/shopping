<template>
 <div>
 <div v-for="(item,index) in list" :key="index">
    <img :src="item.image_path" class="img1">
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
.img1 {
  width: 76px;
  border: 1px solid #eee;
}

</style>