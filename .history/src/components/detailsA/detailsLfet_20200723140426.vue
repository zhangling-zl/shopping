<template>
  <div>
    <div class="box">
      <div class="BackButton flex j-c a-c mt10 ml10">
        <van-icon name="arrow-left cf" @click="goBack" />
      </div>
      <div class="imgs">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          
        </van-swipe>
      </div>
      <div class="c"></div>
      <div class="b"></div>
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
}
.imgs {
  height: 400px;
  background-color: orange;
}
</style>