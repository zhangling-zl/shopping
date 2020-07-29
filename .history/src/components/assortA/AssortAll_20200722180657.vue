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
      <van-tabs v-model="active" :ellipsis="false" @click="onClick">
        <div v-for="(item,index) in categoriesData[CIndex].bxMallSubDto" :key="index">
          <van-tab :title="item.mallSubName">
            <div v-for="(item1,index1) in dataList" :key="index1">
              <div class="flex">
                <img :src="item1.image" class="img1" />
                <div class="ml10 text">
                  <div class="text1">{{item1.name}}</div>
                  <span class="text2 mr5">￥{{item1.orl_price}}</span>
                  <span class="text3">{{item1.present_price}}</span>
                </div>
              </div>
            </div>
          </van-tab>
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
      active: "", //顶部导航默认选中哪一项的下标，默认选中第二项
      id: "", //请求定义的初始值为空
      CIndex: "", //从首页传过来的下标
      categoriesData: [], //定义一个空数组接收首页里面存在本地的分类数据
      dataList: [] //再用一个空数组拿到请求到的分类的数据
    };
  },
  methods: {
    //点击左侧导航栏
    OnChange(item,index) {
      this.CIndex = 0; //首页传过来的下标=0
      this.CIndex = index; //首页传过来的下标等于渲染数据的下标
      let id = this.categoriesData[index].bxMallSubDto[0].mallSubId;
      //请求分类查询的数据
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res,'分类，分类页的数据');
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //点击顶部导航栏
    onClick(name, title) {
      // console.log(name); //下标
      // console.log(title); //标题
      let id = this.categoriesData[this.CIndex].bxMallSubDto[name].mallSubId;
      //请求分类查询的数据
      this.$api
        .getClassification(id)
        .then(res => {
          console.log(res);
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    autoGetData() {
      //这里的第一个if就是判断它是否是从首页点击过来，
      //如果是从首页过来的那么它发请求就要改变他的这个categorydata[this.aIndex]，这里就用首页传过来的数据
      if (!this.$route.query.index) {
        this.CIndex = 0;
        // this.activeKey=this.id-1
        let id = this.categoriesData[0].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            // console.log(res);
            this.dataList = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        let id = this.categoriesData[this.CIndex].bxMallSubDto[0].mallSubId;
        this.$api
          .getClassification(id)
          .then(res => {
            // console.log(res);
            this.dataList = res.dataList;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.CIndex = this.$route.query.index; //接收首页传过来的值
    console.log(this.$route,'首页传的index');

    //定义一个空数组来接收首页里面存在本地的分类数据
    this.categoriesData = JSON.parse(localStorage.getItem("categoriesData"));
    console.log(this.categoriesData,'分类（首页传过来的值）'); //分类数据
    this.autoGetData(); //调用方法
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
.van-tabs {
  height: 60px;
}
.van-tab {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.img1 {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(240, 240, 240);
}
.text1 {
  color: rgb(255, 8, 8);
}
.text2 {
  color: rgb(255, 8, 8);
  font-weight: 600;
}
.text3 {
  color: rgb(67, 67, 67);
  font-size: 14px;
  text-decoration: line-through;
}
.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>