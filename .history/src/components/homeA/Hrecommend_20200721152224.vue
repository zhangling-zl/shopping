<template>
  <div>
    <div class="bf">
      <div class="text1 f20">商品推荐</div>
      <div class="from-box">
        <div v-for="(item,index) in recommend" :key="index">
          <div class="from p5">
            <img :src="item.image" class="img1 ml10" />
            <div class="text2 mb5">{{item.goodsName}}</div>
            <span class="text3 mr5">￥{{item.mallPrice}}</span>
            <span class="text4 f14">￥{{item.price}}</span>
            <div class="Button">
              <div class="car flex j-c a-c p5">
                <van-icon name="cart" class="cf"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  mounted() {},
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
}
.from-box {
  display: flex;
}
.Button {
  border-radius: 5px;
  background-color: rgb(255, 76, 56);
}
.car{
  width: 30px;
  border-radius:5px 0 0 5px;
  background-color:rgb(254,202,58) ;
}
</style>