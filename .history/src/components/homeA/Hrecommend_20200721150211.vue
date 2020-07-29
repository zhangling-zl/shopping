<template>
  <div>
    <div class="bf">
      <div class="text1 f20">商品推荐</div>
      <div class="from-box">
        <div v-for="(item,index) in recommend" :key="index">
          <div class="from p10 flex j-c a-c column">
            <img :src="item.image" class="img1" />
            <div class="text2">{{item.goodsName}}</div>
            <div>{{item.mallPrice}}</div>
            <div>{{item.price}}</div>
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
  height: 200px;
  width: 103px;
  border: 1px solid rgb(246, 246, 246);
}
.text2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.from-box{
  display: flex;
}
</style>