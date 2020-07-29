<template>
 <div>
  <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>编辑地址</template>
    </TitleOne>
  <AddresseditAll></AddresseditAll>
 </div>
</template>

<script>
import AddresseditAll from '../../components/AddresseditA/AddresseditAll'
 export default {
   name: '',
   props: {
   },
   components: {
       AddresseditAll,


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