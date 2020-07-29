<template>
  <div>
    <Htop></Htop>
    <div class="box j-c flex">
      <Hbannner :banner="banner" v-if="banner.length>0"></Hbannner>
      <Hcategory :category="category" v-if="category.length>0"></Hcategory>
    </div>
  </div>
</template>

<script>
import Htop from "../../components/homeA/Htop";
import Hbannner from "../../components/homeA/Hbannner";
import Hcategory from "../../components/homeA/Hcategory";
export default {
  name: "",
  props: {},
  components: {
    Htop, //导航栏
    Hbannner, //轮播图
    Hcategory //分类
  },
  data() {
    return {
      banner: [],
      category: []
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
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box{
  width: 100%;
  height: calc(100vh - 104px);
  background-color: rgb(237,237,237);
}
</style>
