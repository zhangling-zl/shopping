<template>
  <div>
    <Htop></Htop>
    <Hbannner></Hbannner>
  </div>
</template>

<script>
import Htop from "../../components/homeA/Htop";
import Hbannner from "../../components/homeA/Hbannner";
export default {
  name: "",
  props: {},
  components: {
    Htop, //导航栏
    Hbannner //轮播图
  },
  data() {
    return {};
  },
  methods: {
    //首页请求数据
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            this.banner = res.data.slides;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
