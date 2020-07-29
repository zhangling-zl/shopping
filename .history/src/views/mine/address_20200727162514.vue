<template>
  <div>
   <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>新增地址</template>
    </TitleOne>
    <AddressAll></AddressAll>
  </div>
</template>

<script>
import TitleOne from "../../components/TitleOne";
import AddressAll from "../../components/addressA/AddressAll";
export default {
  name: "",
  props: {},
  components: {
    AddressAll,
    TitleOne
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