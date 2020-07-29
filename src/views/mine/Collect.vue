<template>
 <div>
  <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>我的收藏</template>
    </TitleOne>
   <CollectTop></CollectTop>
 </div>
</template>

<script>
import TitleOne from "../../components/TitleOne";
import CollectTop from '../../components/collectA/CollectTop'
 export default {
   name: '',
   props: {
   },
   components: {
       CollectTop,
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