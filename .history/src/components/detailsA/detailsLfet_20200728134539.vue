<template>
  <div>
    <div class="box">
      <div class="BackButton flex j-c a-c mt10 ml10">
        <van-icon name="arrow-left" class="cf" @click="clickretun" />
      </div>
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="imgs">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(item, index) in goodsOness" :key="index">
                <img :src="item" class="img1" @click="getImg(item,index)" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="text1 p15">
            <div class="text1-1 mb5">{{goodsOne.name}}</div>
            <div class="text1-2">￥{{goodsOne.orl_price}}</div>
          </div>
          <div class="text2 flex j-b a-c">
            <div class="text2-1 f14">运费:{{goodsOne.__v}}</div>
            <div class="text2-2 f14 j-c flex">剩余:{{goodsOne.amount}}</div>
            <div class="text2-3" v-if="sun===0" @click="Collection">
              <div class="mr5 f14">收藏:</div>
              <van-icon name="like-o" />
            </div>
            <div class="flex a-c text2-3 f14" v-if="sun===1" @click="onCollection">
              <div class="mr5">取消收藏:</div>
              <van-icon name="like" class="icon2" />
            </div>
          </div>
          <div class="text3 p15 mt15 flex j-b a-c">
            <div class="flex a-c">
              <van-icon name="shop-o" />
              <div class="text3-1 f14 mlr5">有赞的店</div>
              <div class="text3-2">官方</div>
            </div>
            <div class="flex a-c" @click="clickHome">
              <div class="f14 mr5">进入店铺</div>
              <van-icon name="arrow" />
            </div>
          </div>
          <van-tabs v-model="active">
            <van-tab title="商品详情">
              <div v-html="goodsOne.detail"></div>
            </van-tab>
            <van-tab title="商品评论">我是小可爱呀</van-tab>
          </van-tabs>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="str" @click="car" />
        <van-goods-action-button type="warning" text="加入购物车" @click="shoopingcar" />
        <van-goods-action-button type="danger" text="立即购买" @click="showPopup" />
      </van-goods-action>
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <div class="flex ">
          <img :src="goodsOne.image" class="P-img" />
          <div>
            <div class="P-text1">{{goodsOne.name}}scgyhgx5t4reg46bnht64</div>
            <div class="P-text2">￥{{goodsOne.orl_price | toFixed}}</div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { ImagePreview } from "vant";
import { Dialog } from "vant";
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    goodsOness: {
      type: Array,
    },
    goodsOne: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      active: 0,
      shopListAll: [],
      sun: 0,
      id: "",
      show: false, //弹出层默认为不弹出
    };
  },
  methods: {
    //点击跳转首页
    clickHome() {
      this.$router.push("/");
    },
    //点击跳转(返回)上一页面
    clickretun() {
      this.$router.go(-1);
    },
    //点击预览图片（图片放大）
    getImg(images, index) {
      this.goodsOness.map((item) => {
        ImagePreview({
          images: this.goodsOness,
          showIndex: true,
          loop: true,
          startPosition: 0,
          closeable: true,
        });
      });
    },
    //页面一加载就显示购物车的数组length
    postQetCard() {
      this.$api
        .postQetCard(this.id)
        .then((res) => {
          if (res.code === 200) {
            this.$store.commit("setName", res.shopList.length);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击添加购物车
    shoopingcar() {
      if (this.user) {
        Toast.success("添加成功");
        this.$shoopingcar(this.goodsOne.id);
        this.$api
          .postQetCard(this.id)
          .then((res) => {
            if (res.code === 200) {
              this.$store.commit("setName", res.shopList.length);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
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
      }
    },
    //点击收藏单个商品
    Collection() {
      if (this.user) {
        this.$api
          .postCollection(this.goodsOne)
          .then((res) => {
            console.log(res, "收藏商品");
            this.$toast(res.msg);
            this.sun = 1;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
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
      }
    },
    //点击取消收藏
    onCollection() {
      this.$api
        .postCancel({ id: id })
        .then((res) => {
          console.log(res, "取消收藏");
          this.$toast(res.msg);
          this.sun = 0;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击跳转到购物车页面
    car() {
      this.$router.push("/Shopping");
    },
    //点击弹出层
    showPopup() {
      this.show = true;
    },
  },
  mounted() {
    this.id = this.$route.query.id; //接收传过来的id
    this.user = JSON.parse(localStorage.getItem("user"));
    //横向滚动 逻辑代码
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });

    //查询商品是否已收藏
    this.$api
      .postIsCollection({ id: this.id })
      .then((res) => {
        if (res.code === 200) {
          console.log(res, "查看商品是否被收藏");
          this.sun = res.isCollection;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //页面一加载就显示购物车的数组length
    this.postQetCard();
  },
  watch: {},
  computed: {
    str() {
      return this.$store.state.str;
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
.box {
  width: 100%;
  height: 100%;
}
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh-40px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.BackButton {
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
}
.imgs {
  border-bottom: 1px solid #eee;
  height: 375px;
  .img1 {
    width: 100%;
  }
}
.text1-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text1-2 {
  color: rgb(255, 70, 83);
}
.text2 {
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
}
.text2-1,
.text2-2 {
  width: 108px;
  color: rgb(163, 157, 160);
}
.text2-3 {
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgb(163, 157, 160);
}
.text3-2 {
  padding: 2px 5px;
  border-radius: 5px;
  background-color: rgb(255, 68, 68);
  color: #fff;
  font-size: 12px;
}
.text3 {
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
}
.icon2 {
  color: rgb(255, 68, 68);
}
.P-img {
  border: 1px solid #ccc;
  width: 90px;
  height: 90px;
}
.P-text1 {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.P-text2 {
  color: rgb(255, 90, 94);
}
</style>