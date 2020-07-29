<template>
 <div>
 <HomeChind></HomeChind>
 <br>
 <button @click="GOTO">去about页面</button>
  <br>
  <button @click="updateState">改变state的值</button>
 </div>
</template>

<script>
import HomeChind from '../components/home/HomeChind'
 export default {
   name: '',
   props: {
   },
   components: {
     HomeChind

   },
   data () {
     return {
       msg:'我是小仙女'

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
    

   }
 }
</script>

<style scoped lang='scss'>

</style>
