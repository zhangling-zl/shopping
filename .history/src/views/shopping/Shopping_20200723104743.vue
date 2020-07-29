<template>
  <div>
    <TitleOne>
      <template #small>购物车</template>
    </TitleOne>
    <div v-if="flge===true">
      <shoppingTop></shoppingTop>
    </div>
  </div>
</template>

<script>
import shoppingTop from "../../components/shoppingA/shoppingTop";
import TitleOne from "../../components/TitleOne";
export default {
  name: "",
  props: {},
  components: {
    shoppingTop,
    TitleOne,
  },
  data() {
    return {
      user:{},
      flge: false
    };
  },
  methods: {},
  mounted() {
     this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    if (this.user) {
      this.flge = false;
    } else {
      this.flge = true;
     
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>