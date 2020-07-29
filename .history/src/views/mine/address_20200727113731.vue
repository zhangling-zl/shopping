<template>
  <div>
   <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>地址编辑</template>
    </TitleOne>
    <AddressAll></AddressAll>
  </div>
</template>

<script>
import AddressAll from "../../components/addressA/AddressAll";
export default {
  name: "",
  props: {},
  components: {
    AddressAll,
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