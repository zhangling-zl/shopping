<template>
  <div>
    <div class="wrapper" ref="wrapper">
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
                <div class="text3 f18 f600">￥112.000</div>
              </div>
              <div class="text4 f18 mt5">请确认订单</div>
            </div>
          </div>
          <div class="flex">
            <div class="flex1"></div>
            <div class="flex1 flex mtb10" style=" height: 30px;">
              <div class="mr10">
                <van-button color="rgb(230,5,127)" size="small">删除</van-button>
              </div>
              <div>
                <van-button color="rgb(230,5,127)" size="small">去结算</van-button>
              </div>
            </div>
          </div>
          <div v-for="(item,index) in shopListAll" :key="index">
            <div class="flex a-c ptb20" style="border-bottom:1px solid #eee ;">
              <input type="checkbox" v-model="item.check" class="mr10" />
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
    };
  },
  methods: {
    Select() {
      this.shopListAll.map((item) => {
        this.checkAll=this.shopListAll.every(item=>{
          return item.check===false
        })
        // if ((item.check = true)) {
        //   this.text = "取消全选";
        // } else {
        //   item.check = false;
        //   this.text = "全选";
        // }
      });
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {},
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
</style>