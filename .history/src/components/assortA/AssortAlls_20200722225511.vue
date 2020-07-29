<template>
  <div>
    <div class="tap flex">
      <div class="tap-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item,index) in category" :key="index"  :title="item.mallCategoryName" />
        </van-sidebar>
      </div>
      <div class="tap-rigth">
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
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
      activeKey: 0,
      active: 0,
      category:[]
    };
  },
  methods: {},
  mounted() {
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
    }
    //定义一个空数组来接收首页里面存在本地的分类数据
    this.category = JSON.parse(localStorage.getItem("categoriesData"));
    // console.log(this.categoriesData, "分类（首页传过来的值）"); //分类数据
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tap-left {
  height: calc(100vh - 93px);
  background-color: rgb(247, 248, 250);
}

</style>