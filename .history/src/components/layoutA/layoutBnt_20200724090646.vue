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
     if (!localStorage.user) {
        Dialog.confirm({
          title: "系统检测到当前状态未登录",
          message: "是否立即前往登录/注册页面",
        })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.str++;
        this.$store.commit("setName", this.str);
      }

  },
  watch: {},
  computed: {
    str(){
      return this.$store.state.str
    }
  },
};
</script>

<style scoped lang='scss'>
.van-tabbar {
  background-color: #fff;
  box-shadow: 1px 1px 5px #ccc;
}
</style>