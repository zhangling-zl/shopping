<template>
  <div>
    <div class="center j-center">
      <div class="tetx mtb10 w100 flex j-c a-c">热销商品</div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoods" :key="item.id" @click="$toDetails(item.goodsId)">
        <div class="from flex j-c a-c column">
          <van-image :src="item.image" class="img" />
          <div class="text1">{{item.name}}</div>
          <div class="flex a-c mt10">
            <div class="text2 mr5">￥{{item.mallPrice}}</div>
            <div class="text3 f-12">￥{{item.mallPrice}}</div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      id:''
    };
  },
  methods: {
    // //传id值
    // clickFeatured(item){
    //    this.$router.push({ path: "/details", query: { id: item.goodsId } });
    //   // console.log(item.goodsId);
    // }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tetx {
  color: rgb(225, 66, 60);
}
.text1 {
  width: 170px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text3{
     color: rgb(224, 50, 43);
     text-decoration: line-through;
}
</style>