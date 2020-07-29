<template>
 <div>
  <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>我的订单</template>
    </TitleOne>
  <SettlementAll></SettlementAll>
 </div>
</template>

<script>
import SettlementAll from '../../components/settlementA/SettlementAll'
 export default {
   name: '',
   props: {
   },
   components: {
       SettlementAll

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