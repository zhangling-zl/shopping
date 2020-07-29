<template>
  <div>
    <Htop></Htop>
    <div>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          
          <!--轮播图-->
          <li>
            <Hbannner :banner="banner"></Hbannner>
          </li>
          <!--分类-->
          <li>
            <Hcategory :category="category" :advertesPicture="advertesPicture"></Hcategory>
          </li>
          <!--商品推荐-->
          <li>
            <Hrecommend :recommend="recommend" v-if="recommend.length>0"></Hrecommend>
          </li>
          <!--休闲食品-->
          <li>
            <Htitle>
              <template #big>1F</template>
              <template #small>休闲食品</template>
            </Htitle>
            <Hsorts :floor1="floor1"></Hsorts>
          </li>
          <!--新鲜水果-->
          <li>
            <Htitle>
              <template #big>2F</template>
              <template #small>新鲜水果</template>
            </Htitle>
            <Hsortss :floor2="floor2"></Hsortss>
          </li>
          <!--营养奶品-->
          <li>
            <Htitle>
              <template #big>3F</template>
              <template #small>营养奶品</template>
            </Htitle>
            <Hsortsss :floor3="floor3"></Hsortsss>
          </li>
          <!--热销商品-->
          <li>
            <Hdemand :hotGoods="hotGoods" v-if="hotGoods.length>0"></Hdemand>
          </li>
        </ul>
        <!--<van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh>-->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import { Swipe, SwipeItem } from "vant";
import Htop from "../../components/homeA/Htop";
import Hbannner from "../../components/homeA/Hbannner";
import Hcategory from "../../components/homeA/Hcategory";
import Hrecommend from "../../components/homeA/Hrecommend";
import Htitle from "../../components/homeA/Htitle";
import Hsorts from "../../components/homeA/Hsorts";
import Hsortss from "../../components/homeA/Hsortss";
import Hsortsss from "../../components/homeA/Hsortsss";
import Hdemand from "../../components/homeA/Hdemand";
export default {
  name: "",
  props: {},
  components: {
    Htop, //导航栏
    Hbannner, //轮播图
    Hcategory, //分类
    Hrecommend, //商品推荐
    Htitle, //标题
    Hsorts, //休闲食品
    Hsortss, //新鲜水果
    Hsortsss, //营养奶品
    Hdemand //热销商品
  },
  data() {
    return {
      isLoading: false, //下拉刷新
      banner: [], //轮播图
      category: [], //分类
      advertesPicture: {},
      recommend: [], //商品推荐
      floor1: [], //休闲食品
      floor2: [], //新鲜水果
      floor3: [], //营养奶品
      hotGoods: [] //热销商品
    };
  },
  methods: {
    //首页请求数据
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            this.banner = res.data.slides; //轮播图
            this.category = res.data.category; //分类
            (this.advertesPicture = res.data.advertesPicture), //广告图
              (this.recommend = res.data.recommend); //商品推荐
            this.floor1 = res.data.floor1; //休闲食品
            this.floor2 = res.data.floor2; //新鲜水果
            this.floor3 = res.data.floor3; //营养奶品
            this.hotGoods = res.data.hotGoods; //热销商品
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    //下拉刷新
    // onRefresh() {
    //   setTimeout(() => {
    //     Toast("刷新成功");
    //     this.isLoading = false;
    //   }, 1000);
    // }
  },
  mounted() {
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
    //平滑滚动逻辑代码，scrollY: true,输轴滚动
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  position: absolute;
  top: 54px;
  width: 100%;
  height: calc(100vh - 104px);
}
.wrapper {
  margin-top: 54px;
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
</style>
