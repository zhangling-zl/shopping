<template>
  <div>
  <div v-for="(item,index) in shopListAll"></div>
  
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        shopListAll:[]
    };
  },
  methods: {
    // postOrder() {
    //   this.$api.postOrder({
    //         address: this.address,
    //         tel: this.tel,
    //         orderId: this.cid,
    //         totalPrice: this.totalPrice,
    //         idDirect: this.idDirect,
    //         count:this.count
    //   }).then(res=>{
    //      console.log(res);
    //   }).catch(err=>{
    //       console.log(err);
    //   })
    // },
     //获取购物车数据
    postQetCard() {
      this.$api
        .postQetCard(this.id)
        .then((res) => {
          if (res.code === 200) {
            this.shopListAll = res.shopList;
            console.log(this.shopListAll, "购物车数据");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    // //调用购物车支付页面请求
    // this.postOrder();
    //获取购物车数据的请求调用
    this.postQetCard()

  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>