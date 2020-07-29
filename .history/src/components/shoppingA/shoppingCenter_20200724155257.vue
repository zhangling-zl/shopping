<template>
 <div>
   
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
       //接收
       this.id=this.$route.query.id
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