<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li class="p10" >
          <div v-for="(item,index) in shopListAll" :key="index">
            <div class="from">
              <div class="flex j-b mtb20">
                <div class="flex">
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
        </li>
      </ul>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
    //提交订单
    onSubmit(){

    }
  },
  mounted() {
    // //调用购物车支付页面请求
    // this.postOrder();
    //获取购物车数据的请求调用
    this.postQetCard();
    //平滑滚动逻辑代码
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {
       //计算属性，合计
    Totalprice() {
      let sun = 0;
      this.shopListAll.map((item) => {
        if (item.check) {
          sun += item.count * item.mallPrice;
        }
      });
      return sun;
    },
  },
  filters: {
    //过滤器
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh - 95px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
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
.from {
  border-bottom: 1px solid #eee;
}
</style>