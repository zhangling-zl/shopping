<template>
 <div>
 
 <br>
 <button @click="GOTO">去about页面</button>
  <br>
  <button @click="updateState">改变state的值</button>
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
       msg:'我是小可爱哎'

     }
   },
   methods: {
     GOTO(){
         this.$router.push('/about')
     },
     updateState(){
       //commit里面传入两个参数，第一个传mutations的名字，第二个传改变之后的值
       this.$store.commit('setName',this.msg)
     }

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
