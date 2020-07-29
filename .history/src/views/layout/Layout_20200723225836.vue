<template>
  <div>
    <router-view></router-view>
    <div class="navBnt">
      <layoutBnt @add='add'></layoutBnt>
    </div>
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
import layoutBnt from "../../components/layoutA/layoutBnt";
export default {
  name: "",
  props: {},
  components: {
    layoutBnt
  },
  data() {
    return {
      str:null
    };
  },
  methods: {
    add(){
       this.str++;
       this.$store.commit("setName", this.str);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.navBnt{
  position: fixed;
  bottom: 0;
}
</style>