<template>
  <div>
    <TitleOne>
      <template #small>购物车</template>
    </TitleOne>
    <div>
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
    if (this.user !== null) {
      this.flge = true;
      this.nickname = this.user.userInfo.nickname;
      this.text = "退出登录";
    } else {
      this.flge = false;
      this.text = "请先登录";
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>