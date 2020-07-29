<template>
  <div>
    <div class="tap flex">
      <div class="tap-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item,index) in category"
            :key="index"
            :title="item.mallCategoryName"
            @click="OnChange(item, index)"
          />
        </van-sidebar>
      </div>
      <div class="tap-rigth">
        <van-tabs v-model="active" :ellipsis="false">
          <div class="wrapper" ref="wrapper">
            <ul class="content">
              <li v-for="(item,index) in category" :key="index">
                <div v-if="index===activeKey">
                  <van-tab
                    v-for="(item1,index1) in item.bxMallSubDto"
                    :key="index1"
                    :title="item1.mallSubName"
                  >
                    <div v-for="(item2,index2) in dataList" :key="index2">
                      <img :src="item2.image" class="img1" />
                    </div>
                  </van-tab>
                </div>
              </li>
            </ul>
          </div>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeKey: 0, //左侧导航默认选中哪一项的下标，默认选中第一项
      active: 0, //顶部导航默认选中哪一项的下标，默认选中第一项
      CIndex: "", //从首页传过来的下标
      id: "", //请求里定义的初始值为空
      category: [], //定义一个空数组接收首页里面存在本地的分类数据
      dataList: [] //再用一个空数组拿到请求到的分类的数据
    };
  },
  methods: {
    OnChange(item, index) {
      this.id = this.category[index].bxMallSubDto[0].mallSubId;
      this.$api
        .getClassification(this.id)
        .then(res => {
          console.log(res, "分类，分类页的数据");
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
    }
    //定义一个空数组来接收首页里面存在本地的分类数据
    this.category = JSON.parse(localStorage.getItem("categoriesData"));
    // console.log(this.categoriesData, "分类（首页传过来的值）"); //分类数据
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  width: 100%;
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh-105px);
  background-color: rgb(237, 237, 237);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.tap {
  height: calc(100vh - 93px);
  .tap-left {
    background-color: rgb(247, 248, 250);
  }
}
.van-sidebar-item{
    padding: 10px 5px;
}

.img1 {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(240, 240, 240);
}
</style>