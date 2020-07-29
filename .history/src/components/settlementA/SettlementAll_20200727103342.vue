<template>
  <div>我是结算页面</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    postOrder() {
      this.$api.postOrder({
           address: address,
            tel: tel,
            orderId: orderId,
            totalPrice: totalPrice,
            idDirect: idDirect,
            count: count
      }).then(res=>{

      }).catch(err=>{
          console.log(err);
      })
    },
  },
  mounted() {
    //调用购物车支付页面请求
    this.postOrder();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>