<template>
  <div>
    <div class="p10">
      <div class="flex " style="border-bottom:1px solid rgb(245,245,245) ;">
        <div class="flex1 flex a-c mb10">
          <input type="checkbox" class="text1 f18" />
          <div class="ml5">全选</div>
        </div>
        <div class="flex1 mb10">
          <div class="flex a-c">
            <div class="text2 f18">合计：</div>
            <div class="text3 f18 f600">￥112.000</div>
          </div>
          <div class="text4 f18 mt5">请确认订单</div>
        </div>
      </div>
      <div class="flex ">
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
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
    };
  },
  methods: {},
  mounted() {
    //接收从首页和详情页传递过来的id值
    this.id = this.$route.query.id;
    //获取购物车数据
    this.$api
      .postQetCard(this.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text3 {
  color: rgb(224, 50, 43);
}
</style>