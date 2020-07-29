<template>
  <div>
    <TitleOne>
      // <template #icon>
      //   <van-icon name="arrow-left" />
      // </template>
      <van-icon name="icon"></van-icon>
      <template #small>地址列表</template>
    </TitleOne>
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