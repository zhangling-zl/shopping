<template>
  <div>
    <div class="wrapper" ref="wrapper" v-if="shopListAll.length>0">
      <div class="content">
        <div class="p10">
          <div class="flex" style="border-bottom:1px solid rgb(245,245,245) ;">
            <div class="flex1 flex a-c mb10">
              <input type="checkbox" class="text1 f18" v-model="checkAll" @change="Select" />
              <div class="ml5">{{text}}</div>
            </div>

            <div class="flex1 mb10">
              <div class="flex a-c">
                <div class="text2 f18">合计：</div>
                <div class="text3 f18 f600">￥{{Totalprice | toFixed}}</div>
              </div>
              <div class="text4 f18 mt5">请确认订单</div>
            </div>
          </div>
          <div class="flex">
            <div class="flex1"></div>
            <div class="flex1 flex mtb10"  v-if="flge1===true">
              <div class="mr10">
                <van-button color="rgb(230,5,127)" size="small" @click="dli">删除</van-button>
              </div>
              <div>
                <van-button color="rgb(230,5,127)" size="small">去结算</van-button>
              </div>
            </div>
          </div>
          <div v-for="(item,index) in shopListAll" :key="index">
            <div class="flex a-c ptb20" style="border-bottom:1px solid #eee ;">
              <input type="checkbox" v-model="item.check" class="mr10" @change="Radio" />
              <img :src="item.image_path" class="img1" />
              <div class="ml10">
                <div class="text-item1 f16">{{item.name}}</div>
                <div class="flex j-b a-c mt15" style="width: 230px;">
                  <div class="text-item2">￥{{item.mallPrice | toFixed}}</div>
                  <van-stepper v-model="item.count" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="zanwu">
      <div class="yuan flex a-c j-c">
        <img src="../../assets/img/u=3334466282,826560232&fm=26&gp=0.jpg" alt class="img2" />
      </div>
      <div class="text f22">购物车竟然还是空的</div>
      <div class="text2 mtb10">~~再忙,也要记得买点东西犒劳自己~~</div>
      <div class="text1" @click="goShoppimg">去逛逛</div>
    </div>
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
      id: "",
      shopList: [], //旧数组
      shopListAll: [], //新数组
      checkAll: false, //全选绑定的值，默认为没选中
      text: "全选",
      arr: [],
      flge1:false
    };
  },
  methods: {
    //点击全选
    Select() {
      this.shopListAll.map((item) => {
        item.check = this.checkAll;
        this.text = "取消全选";
      });
    },
    //点击反选
    Radio() {
      this.checkAll = this.shopListAll.every((item) => {
        return item.check === true;
      });
      this.text = "全选";
      this.flge1=true
    },
    //点击删除选中的
    dli() {
      // this.arr.push(item.cid);
      this.$api
        //  this.arr.push(this.shopListAll.cid)
        .postDeleteShop(this.arr)
        .then((res) => {
          if (res.code === 200) {
            this.$toast(res.msg);
            // this.getCard();
            console.log(res);
          } else {
            this.$toast("删除失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击跳转到首页
    goShoppimg() {
      this.$router.push("/");
    },
  },
  mounted() {
    //接收从首页和详情页传递过来的id值
    this.id = this.$route.query.id;
    //获取购物车数据
    this.$api
      .postQetCard(this.id)
      .then((res) => {
        if (res.code === 200) {
          this.shopList = res.shopList;
          this.shopListAll = this.shopList;
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {
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
    // toFixedAll(val) {
    //   return "￥：" + Number(val).toFixed(2);
    // }
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh-93px);
  background-color: rgb(254, 254, 254);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.text3 {
  color: rgb(224, 50, 43);
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
.zanwu {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh-93px);
  background-color: rgb(254, 254, 254);
  .yuan {
    width: 240px;
    height: 200px;
    margin: 40px 0;
    border-radius: 50%;
    box-shadow: 0px 5px 8px #ccc;
    .img2 {
      width: 100%;
      height: 100%;
    }
  }

  .text2 {
    color: rgb(165, 158, 173);
  }
  .text {
    color: #555;
  }
  .text1 {
    border-radius: 20px;
    padding: 5px 25px;
    border: 1px solid rgb(153, 153, 153);
    &:hover {
      background-color: #eee;
    }
  }
}
</style>