<template>
 <div>
   <div class="w100 flex a-c j-c mtb15">
      <div class="text1 flex j-c a-c cf f14 mr5">
        <slot name="button"></slot>
      </div>
      <div class="text2" >
        <slot name="small"></slot>
      </div>
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

</style>