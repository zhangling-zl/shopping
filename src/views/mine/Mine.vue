<template>
  <div>
  <TitleOne>
      <template #small>会员中心</template>
    </TitleOne>
    <mineTop></mineTop>
  </div>
</template>

<script>
import mineTop from "../../components/mineA/mineTop";
import TitleOne from "../../components/TitleOne";
export default {
  name: "",
  props: {},
  components: {
    mineTop,
    TitleOne
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>