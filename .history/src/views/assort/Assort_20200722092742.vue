<template>
 <div>
 <TitleOne>
   <template #small>商品分类</template>
 </TitleOne>
 <AssortAll></AssortAll>
 </div>
</template>

<script>
import AssortAll from '../../components/assortA/AssortAll'
import TitleOne from '../../components/TitleOne'
 export default {
   name: '',
   props: {
   },
   components: {
       AssortAll,
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