<template>
  <div>
    <div class="flex">
      <div class="leftNav">
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in categoriesData" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="OnChange(item,index)" />
          </div>
        </van-sidebar>
      </div>
      <van-tabs v-model="active" :ellipsis='false'>
        <div v-for="(item,index) in categoriesData[CIndex].bxMallSubDto" :key="index">
          <van-tab :title="item.mallSubName"> </van-tab>
        </div>
      </van-tabs>
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
      activeKey: 0, //左侧导航默认选中哪一项的下标，默认选中第一项
      active: 2, //顶部导航默认选中哪一项的下标，默认选中第二项
      id: "", //请求定义的初始值为空
      CIndex: "", //从首页传过来的下标
      categoriesData: [],
      dataList:[],
    };
  },
  methods: {
    //点击左侧导航栏
    OnChange(item, index) {
      this.CIndex = 0;
      this.CIndex = index;
      let id = this.categoriesData[index].bxMallSubDto[0].mallSubId;
      //请求分类查询的数据
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.dataList=res.dataList
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
 
    this.CIndex = this.$route.query.index; //接收首页传过来的值
    // console.log(this.$route);

    //定义一个空数组来接收首页里面存在本地的分类数据
    this.categoriesData = JSON.parse(localStorage.getItem("categoriesData"));
    // console.log(this.categoriesData);//分类数据
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.leftNav {
  height: calc(100vh - 93px);
  background-color: rgb(247, 248, 250);
}
.van-tabs{
  width: 100%;
  border-bottom:1px solid #eee ;
}
.van-tab{
  width: 100%;
}
</style>