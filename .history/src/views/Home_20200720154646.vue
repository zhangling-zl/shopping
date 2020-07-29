<template>
 <div>
 <HomeChind></HomeChind>
 <br>
 <br>
 <!--<button @click="$router.push('/about')">去about页面</button>-->>
 <button @click="GOTO">去about页面</button>
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

     }
   },
   methods: {
    //  GOTO(){
    //      this.$router.push('/about')
    //  }

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
