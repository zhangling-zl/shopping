<template>
  <div>
    我是我的页面
    <div class="cell">
      <van-cell is-link icon="records" title="全部订单" />
    </div>
    <van-cell is-link icon="points" title="收藏商品" />
    <van-cell is-link icon="location-o" title="地址管理" />
    <van-cell is-link icon="send-gift-o" title="最近浏览" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
.van-cell:after {
  border-bottom: none;
}
.cell{
  border-bottom: 0 1px;
}
</style>