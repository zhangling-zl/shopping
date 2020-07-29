<template>
  <div>
    <van-search
      v-model="value"
      shape="square"
     
      placeholder="请输入搜索关键词"
      :clearable="true"
    >
    <template #action>
        <div>成都市</div>
        <van-icon name="arrow-down" class="mlr5" />
      </template>
      <template #left>
        <div>成都市</div>
        <van-icon name="arrow-down" class="mlr5" />
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-search__content {
  background-color: #fff;
}
</style>