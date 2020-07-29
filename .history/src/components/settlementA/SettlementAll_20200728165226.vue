<template>
  <div>
    <div class="address flex j-c a-c" v-if="defaultAdd===null">
      <div @click="address">点击添加收货地址</div>
    </div>
    <div class="address flex a-c" v-else>
      <div>
        <van-icon name="location-o" class="icon1 ml5" />
      </div>
      <div class="w100 pl10">
        <div class="flex a-c j-b mb10">
          <div class="text1">收货人{{defaultAdd.name}}</div>
          <div class="text2">{{defaultAdd.tel}}</div>
        </div>
        <div class="text3 f14 mb5">收货地址:{{defaultAdd.address}}</div>
        <div class="text4 f14">(收货不便时，可选择代收货服务)</div>
      </div>
      <div>
        <van-icon name="arrow" class="icon2 mr5" @click="clickout" />
      </div>
    </div>
    <img src="../../assets/img/caitiao.jpg" class="img2" />
        <div class="p10" v-if="arr.length>0">
          <div v-for="(item,index) in arr" :key="index">
            <div class="from">
              <div class="flex j-b mtb10">
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
        </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      defaultAdd: {}, //收货地址
      
      arr: [], //接收传过来的数据
    };
  },
  methods: {
    //提交订单
    onSubmit() {
      let arr = []
      this.arr.map((item)=>{
        arr.push(item.cid)
      })
       this.$api
        .postOrder({
          address: this.defaultAdd.address, //收货地址
          tel: this.defaultAdd.tel, //电话
          orderId:arr, //所有商品的id(数组)
          totalPrice: this.Totalprice / 100, //总价格
          idDirect: this.arr[0].idDirect, //用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
          count: this.arr[0].count, //商品数量数量
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击跳转到编辑地址页面
    address() {
      this.$router.push("/address");
    },
    //查询默认收货地址
    getDefault() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
          this.defaultAdd = res.defaultAdd;
          // console.log(res);
          if (this.$route.query.address) {
            this.defaultAdd = JSON.parse(this.$route.query.address);
          }
        })
        .catch((err) => {
          console.log(object);
        });
    },
    //点击跳转地址列表页面
    clickout() {
      this.$router.push("/addresslist");
    },
  },
  mounted() {
    // new BScroll(this.$refs.wrapper, { click: true, scrollY: true }); //平滑滚动逻辑代码
    this.getDefault(); //查询默认收货地址

    this.arr = JSON.parse(sessionStorage.getItem("arr"));
    console.log(this.arr);
  },
  watch: {},
  computed: {
    //总价格（计算属性）
    Totalprice() {
      let sun = 0;
      this.arr.map((item) => {
        sun += item.count * item.mallPrice;
      });
      sun += sun * 100;
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
.img2 {
  width: 100%;
  height: 8px;
}
.address {
  width: 100%;
  height: 80px;
}
.text4 {
  color: rgb(249, 206, 160);
}
.icon1,
.icon2 {
  font-size: 26px !important;
}
</style>