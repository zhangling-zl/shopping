<template>
  <div>
    <!--<TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      
      <template #small>地址列表</template>
    </TitleOne>-->
    <van-icon name="icon">我是小可爱</van-icon>
    <AddresslistAll></AddresslistAll>
  </div>
</template>

<script>
import TitleOne from "../../components/TitleOne";
import AddresslistAll from "../../components/addresslistA/AddresslistAll";
export default {
  name: "",
  props: {},
  components: {
    AddresslistAll,
    TitleOne,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>