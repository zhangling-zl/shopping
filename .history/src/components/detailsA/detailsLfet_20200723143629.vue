<template>
  <div>
    <div class="box">
      <div class="BackButton flex j-c a-c mt10 ml10">
        <van-icon name="arrow-left cf" />
      </div>
      <div class="imgs">
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="orange">
          <van-swipe-item>
            <img :src="goodsOne.image" class="img1" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="goodsOne.image" class="img1" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="goodsOne.image" class="img1" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="text1 p15">
        <div class="text1-1  mb5">{{goodsOne.name}}</div>
        <div class="text1-2">￥{{goodsOne.orl_price}}</div>
      </div>
      <div class="text2 p10 flex j-b a-c">
        <div class="text2-1 f14">运费:{{goodsOne.__v}}</div>
        <div class="text2-2 f14">剩余:{{goodsOne.amount}}</div>
        <div class="flex a-c text2-3 f14">
          <div class="mr5">收藏:</div>
          <van-icon name="like-o" />
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsOne: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 100%;
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
.text2{
   border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
}
.text2-1,.text2-2,.text2-3{
  color: rgb(163,157,160);
}
</style>