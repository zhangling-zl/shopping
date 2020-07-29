<template>
  <div>
    <div class="bf">
      <div class="text1 f20 p5 mtb10">商品推荐</div>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li class="from-box flex">
            <div v-for="(item,index) in recommend" :key="index">
              <div class="from p5">
                <img :src="item.image" class="img1 ml10" />
                <div class="text2 mb5">{{item.goodsName}}</div>
                <span class="text3 mr5">￥{{item.mallPrice}}</span>
                <span class="text4 f14">￥{{item.price}}</span>
                <div class="Button flex w100 mtb10">
                  <div class="car flex j-c a-c ptb5 flex1">
                    <van-icon name="cart" class="cf" />
                  </div>
                  <div class="dalit f14 flex j-c a-c flex2">查看详情</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import { Swipe, SwipeItem } from "vant";
export default {
  name: "",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new BScroll(this.$refs.wrapper, { click: true });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img1 {
  width: 80px;
}
.text1 {
  color: rgb(81, 81, 81);
}
.from {
  width: 114px;
  border: 1px solid rgb(246, 246, 246);
}
.text2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text4 {
  color: rgb(154, 154, 154);
  text-decoration: line-through;
}

.car {
  border-radius: 5px 0 0 5px;
  background-color: rgb(254, 202, 58);
}
.dalit {
  color: #fff;
  border-radius: 0 5px 5px 0;
  background-color: rgb(255, 76, 56);
}
.wrapper {
  display: flex;
  overflow: hidden;
}
</style>