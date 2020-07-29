<template>
 <div>
   <div v-for="(item,index) in category" :key="index">
    <img :src="item.image" class="img">
   </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       category:{
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
.img{
    width: 50px;
    height: 50px;
}

</style>