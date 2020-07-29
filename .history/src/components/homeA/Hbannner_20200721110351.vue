<template>
  <div>
    <div class="box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img :src="item.image" alt="">
        </van-swipe-item>
      </van-swipe>
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
      banner: []
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
            this.banner = res.data.slides;
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
.box {
  height: 200px;
  width: 100%;
  background-color: #ccc;
}
</style>