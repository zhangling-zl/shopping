<template>
 <div>
 我是vuex里面的数据{{str}}
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

   },
   mounted() {

   },
   watch: {

   },
   computed: {
     //在computed里面使用，计算属性里面都要return
     //vuex里面定义的名字不能和data里面的重名
     str(){
      return this.$store.state.str
      //this.$store代表vuex，.state.str代表vuex里面的state里面的str代表vuex里面的state里面的str
     }

   }
 }
</script>

<style scoped lang='scss'>

</style>
