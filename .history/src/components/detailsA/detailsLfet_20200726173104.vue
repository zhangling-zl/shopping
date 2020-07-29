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
            <div class="text2-2 f14">剩余:{{goodsOne.amount}}</div>
            <div class="text2-3" v-if="flge1===false" @click="Collection">
              <div class="mr5 f14">收藏:</div>
              <van-icon name="like-o" />
            </div>
            <div class="flex a-c text2-3 f14 flex1" v-if="flge1===true" @click="onCollection">
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
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="shopListAll.length" />
        <van-goods-action-button type="warning" text="加入购物车" @click="shoopingcar" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
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
      strAll: null,
      shopListAll: [],
      flge1: false,
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
    //点击添加购物车
    shoopingcar() {
      if (this.user) {
        Toast.success("添加成功");
        this.strAll++;
        this.$store.commit("setName", this.strAll);
        this.$shoopingcar(this.goodsOne.id);
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
    //点击收藏
    Collection() {
      this.flge1 = true;
    },
    //点击取消收藏
    onCollection() {
      this.flge1 = false;
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    //横向滚动 逻辑代码
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
    //获取购物车数据
    this.id = this.$route.query.id;
    this.$api
      .postQetCard(this.id)
      .then((res) => {
        if (res.code === 200) {
          localStorage.setItem("shopListAll", JSON.stringify(res.shopList));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.shopListAll = JSON.parse(localStorage.getItem("shopListAll"));
  },
  watch: {},
  computed: {
    str() {
      return this.$store.state.str;
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
  width: 114px;

  color: rgb(163, 157, 160);
}
.text2-3 {
  width: 114px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
</style>