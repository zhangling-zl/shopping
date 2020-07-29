<template>
  <div>
    <div class="cell mb10">
      <van-cell is-link icon="records" title="全部订单" />
    </div>
    <div class="cell">
      <van-cell is-link icon="points" title="收藏商品" />
    </div>
    <div class="cell">
      <van-cell is-link icon="location-o" title="地址管理" />
    </div>
    <div class="cell">
      <van-cell is-link icon="send-gift-o" title="最近浏览" />
    </div>
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
.cell {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
</style>