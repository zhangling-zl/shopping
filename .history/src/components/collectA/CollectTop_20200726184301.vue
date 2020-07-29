<template>
 <div>
 <div v-for="(item,index) in list" :key="index">
    <img :src="item.image_path" class="img1">
    <div class="text1 mb20">{{item.name}}</div>
    <div class="text2">￥{{item.present_price}}</div>
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
.text1{
  color: rgb(57,52,57);
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text2{
color: rgb(224, 50, 43);
}


</style>