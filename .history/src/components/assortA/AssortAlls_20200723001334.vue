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
        <van-tabs v-model="active" :ellipsis="false" @click="onClick">
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
                      <div class="flex p10 from">
                        <img :src="item2.image" class="img1" />
                        <div class="ml10">
                          <div class="text1 mb10 mt5">{{item2.name}}</div>
                          <span class="text2 mr5">￥{{item2.orl_price}}</span>
                          <span class="text3">{{item2.present_price}}</span>
                        </div>
                      </div>
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
    //点击侧导航栏 拿到数据
    OnChange(item, index) {
      this.CIndex = 0; //首页传过来的下标=0
      this.CIndex = index; //首页传过来的下标等于渲染数据的下标
      this.id = this.category[index].bxMallSubDto[0].mallSubId;
      this.$api
        .getClassification(this.id)
        .then(res => {
          //   console.log(res, "分类，分类页的数据");
          this.dataList = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //点击顶部导航栏 拿到数据
    onClick(name, title) {
      let id = this.category[this.CIndex].bxMallSubDto[name].mallSubId;
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
    //页面一加载，就渲染出数据
    autoGetData() {
      this.CIndex = 0; //首页传过来的下标从0（第一项）开始
      let id = this.category[this.activeKey].bxMallSubDto[0].mallSubId;
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
  },
  mounted() {
    this.autoGetData(); //调用方法

    //用if判断它是否是从首页点击过来的
    if (this.$route.query.index) {
    //如果是从首页过来的 侧边导航栏绑定的v-model的值(activeKey 绑定的下标)就等于首页传过来的值(index)
      this.activeKey = this.$route.query.index;
    }
    //定义一个空数组来接收首页里面存在本地的分类数据
    this.category = JSON.parse(localStorage.getItem("categoriesData"));
    //平滑滚动插件的逻辑代码，click=true代表可以点击 scrollY=true代表竖向滚动 scrollX=true 代表横向滚动 
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
  height: calc(100vh-142px);
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
.van-sidebar-item {
  padding: 12px 12px;
}
.van-tabs {
  width: 290px;
}
.img1 {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(240, 240, 240);
}
.text1 {
  width: 190px;
  color: rgb(255, 8, 8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.from {
  border-bottom: 1px solid #eee;
}
</style>