<template>
 <div>
 <TitleOne>
   <template #small>商品分类</template>
 </TitleOne>
 <!-- <AssortAll></AssortAll> -->
 <AssortAlls></AssortAlls>
 </div>
</template>

<script>
// import AssortAll from '../../components/assortA/AssortAll'
import AssortAlls from '../../components/assortA/AssortAlls'
import TitleOne from '../../components/TitleOne'
 export default {
   name: '',
   props: {
   },
   components: {
      //  AssortAll,
       AssortAlls,
       TitleOne

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