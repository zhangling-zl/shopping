<template>
  <div>
    <van-search
      v-model="value"
      shape="square"
      background="rgb(242,242,242)"
      placeholder="请输入搜索关键词"
      :clearable="true"
      show-action
    
    >
      <template #left>
        <div>成都市</div>
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