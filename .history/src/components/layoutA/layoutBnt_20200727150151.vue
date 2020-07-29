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
      shopListAll:[],
       sum:0
    
    };
  },
  methods: {
    //页面一加载就显示购物车的数组length
    postQetCard() {
      this.$api
        .postQetCard(this.id)
        .then((res) => {
          if (res.code === 200) {
            this.sum =res.shopList.length
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
     //页面一加载就显示购物车的数组length
    this.postQetCard();

 
    
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