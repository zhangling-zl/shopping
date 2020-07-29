<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">商城</van-tabbar-item>
      <van-tabbar-item replace to="/assort" icon="other-pay">分类</van-tabbar-item>
      <van-tabbar-item replace to="shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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