<template>
  <div></div>
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
  mounted() {
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
    }
    //定义一个空数组来接收首页里面存在本地的分类数据
    this.categoriesData = JSON.parse(localStorage.getItem("categoriesData"));
    // console.log(this.categoriesData, "分类（首页传过来的值）"); //分类数据
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>