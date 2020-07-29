<template>
  <div>
    <div class="boxs">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">商城</van-tabbar-item>
        <van-tabbar-item replace to="/assort" icon="other-pay">分类</van-tabbar-item>
        <van-tabbar-item replace to="/shopping" icon="shopping-cart-o" :badge="shopList.length">购物车</van-tabbar-item>
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
      shopList:[]
    };
  },
  methods: {},
  mounted() {

   //获取购物车数据
    this.id = this.$route.query.id;
    this.$api
      .postQetCard(this.id)
      .then((res) => {
        if (res.code === 200) {
          this.shopList = res.shopList;
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
    
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