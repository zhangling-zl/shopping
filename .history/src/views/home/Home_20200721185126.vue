<template>
  <div>
    <Htop></Htop>
    <div>
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li>
            <Hbannner :banner="banner"></Hbannner>
          </li>
          <li>
            <Hcategory :category="category" :advertesPicture="advertesPicture"></Hcategory>
          </li>
          <li>
            <Hrecommend :recommend="recommend"></Hrecommend>
          </li>
          <li>
            <Htitle>
              <template #big>1F</template>
              <template #small>休闲食品</template>
            </Htitle>
          </li>
          <li>
            <Hsorts :floor1="floor1"></Hsorts>
          </li>
          <li>
            <Htitle>
              <template #big>2F</template>
              <template #small>新鲜水果</template>
            </Htitle>
            <Hsortss :floor2="floor2"></Hsortss>
          </li>
         
          <li>
            <Htitle>
              <template #big>3F</template>
              <template #small>营养奶品</template>
            </Htitle>
            <Hsortsss :floor3="floor3"></Hsortsss>
          </li>
        </ul>
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
    Hsortsss //营养奶品
  },
  data() {
    return {
      banner: [],
      category: [],
      advertesPicture: {},
      recommend: [],
      floor1: [],
      floor2: [],
      floor3: []
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
            (this.advertesPicture = res.data.advertesPicture), //商品推荐
              (this.recommend = res.data.recommend); //广告图
            this.floor1 = res.data.floor1; //休闲食品
            this.floor2 = res.data.floor2; //新鲜水果
            this.floor3 = res.data.floor3; //营养奶品
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
