<template>
  <div>
    <div class="boxs">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">商城</van-tabbar-item>
        <van-tabbar-item replace to="/assort" icon="other-pay">分类</van-tabbar-item>
        <van-tabbar-item replace to="/shopping" icon="shopping-cart-o" :badge="str">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      str:null
    };
  },
  methods: {},
  mounted() {

  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.van-tabbar {
  background-color: #fff;
  box-shadow: 1px 1px 5px #ccc;
}
</style>