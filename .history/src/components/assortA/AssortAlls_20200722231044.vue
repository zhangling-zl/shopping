<template>
  <div>
    <div class="tap flex">
      <div class="tap-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item,index) in category"
            :key="index"
            :title="item.mallCategoryName"
          />
        </van-sidebar>
      </div>
      <div class="tap-rigth">
        <van-tabs v-model="active" :ellipsis="false">
          <div v-for="(item,index) in category" :key="index">
            <div v-if="index===activeKey">
              <van-tab
                v-for="(item1,index1) in item.bxMallSubDto"
                :key="index1"
                :title="item1.mallSubName"
              >内容 1</van-tab>
            </div>
          </div>
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
      activeKey: 0,//左侧导航默认选中哪一项的下标，默认选中第一项
      active: 0,//顶部导航默认选中哪一项的下标，默认选中第一项
      CIndex: "",//从首页传过来的下标
      id: "",//请求里定义的初始值为空
      category: [],
      dataList: []
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