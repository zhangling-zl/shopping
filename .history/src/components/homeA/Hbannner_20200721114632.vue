<template>
  <div>
    <div class="box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img :src="item.image" @click="clickJump(item)">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      banner:{
          type:Array
      }
  },
  components: {},
  data() {
    return {
      id:''
      
    };
  },
  methods: {
    //点击跳转详情页
    clickJump(item){
      this.$router.push({path:'/details',query:{id:this.goodsId}})
      //传参，传的是数据里面的goodsId
    }
    
  },
  mounted() {
    
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
img{
    width: 100%;
    height: 200px;
}
</style>