<template>
  <div>
    <van-search
      v-model="value"
      shape="square"
      background="rgb(242,242,242)"
      placeholder="请输入搜索关键词"
      :clearable='true'
    />
    
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