<template>
  <div>
  <TitleOne>
   <template #small>购物车</template>
 </TitleOne>
    <shoppingTop></shoppingTop>
  </div>
</template>

<script>
import shoppingTop from "../../components/shoppingA/shoppingTop";
import TitleOne from '../../components/TitleOne'
export default {
  name: "",
  props: {},
  components: {
    shoppingTop,
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