<template>
  <div>
    <div class="top">
      <van-search
        v-model="value"
        show-action
        shape="square"
        background="rgb(242,242,242)"
        placeholder="请输入搜索关键词"
        :clearable="true"
        @cancel="onCancel"
        @focus="focus"
      >
        <template #left>
          <div>成都市</div>
          <van-icon name="arrow-down" class="mlr5" />
        </template>
        <template #action>
          <div v-if="flge===false">搜索</div>
          <div v-if="flge===true">取消</div>
        </template>
      </van-search>
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
      value: "",
      flge: false
    };
  },
  methods: {
    focus() {
      this.flge = true;
    },
    onCancel() {
      Toast("取消");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-search__content {
  background-color: #fff;
}
.top{
  position: fixed;
  top: 20px;
}
</style>