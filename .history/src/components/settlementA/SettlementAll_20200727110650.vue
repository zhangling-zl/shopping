<template>
  <div>
    <div class="p10">
      <div v-for="(item,index) in shopListAll" :key="index">
        <div class="flex j-b from mtb20">
          <div class="flex ">
            <img :src="item.image_path" class="img1 mr15" />
            <div>
              <div class="text-item1 f16">{{item.name}}</div>
              <div class="text-item2 mt10 f600">￥{{item.mallPrice | toFixed}}</div>
            </div>
          </div>
          <div class="text-item3 f14">x {{item.count}}</div>
        </div>
      </div>
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
      shopListAll: [],
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
    this.postQetCard();
  },
  watch: {},
  computed: {},
  filters: {
    //过滤器
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.img1 {
  width: 76px;
  border: 1px solid #eee;
}
.text-item1 {
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(224, 50, 43);
}
.text-item2 {
  color: rgb(224, 50, 43);
}
.text-item3 {
  margin-top: 40px;
}
</style>