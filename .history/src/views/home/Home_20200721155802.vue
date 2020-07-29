<template>
  <div>
    <Htop></Htop>
    <div >
      <div class="box">
        <div>
          <Hbannner :banner="banner"></Hbannner>
        </div>
        <div>
          <Hcategory :category="category" :advertesPicture="advertesPicture"></Hcategory>
        </div>
        <div>
          <Hrecommend :recommend="recommend"></Hrecommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Swipe, SwipeItem } from "vant";
import Htop from "../../components/homeA/Htop";
import Hbannner from "../../components/homeA/Hbannner";
import Hcategory from "../../components/homeA/Hcategory";
import Hrecommend from "../../components/homeA/Hrecommend";
export default {
  name: "",
  props: {},
  components: {
    Htop, //导航栏
    Hbannner, //轮播图
    Hcategory, //分类
    Hrecommend //商品推荐
  },
  data() {
    return {
      banner: [],
      category: [],
      advertesPicture: {},
      recommend: []
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
            (this.advertesPicture = res.data.advertesPicture),
              (this.recommend = res.data.recommend);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // new BScroll(this.$refs.wrapper,{click:true});
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
  background-color: rgb(237, 237, 237);
}
.wrapper {
  /*--margin-top: 54px;--*/
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh-105px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>
