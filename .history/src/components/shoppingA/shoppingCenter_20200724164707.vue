<template>
  <div>
    <div>
      <input type="checkbox" class="text1 f18"/>全选
    </div>
    <div class="flex a-c">
      <div class="text2 f18">合计:</div>
      <div class="text3 f18 f600">￥112.000</div>
    </div>
    <div class="text4 f18">请确认订单</div>
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
.text3{
  color: rgb(224,50,43);
}
</style>