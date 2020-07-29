<template>
  <div>
    <div class="from flex j-c a-c column">
      <div class="yuan"></div>
      <div class="cf f18 mt10">欢迎你,亲爱的:{{user.userInfo.nickname}}</div>
      <div class="cf c12 mt5">退出登录</div>
      <div class="icon cf">
        <van-icon name="setting-o" />
      </div>
    </div>
    <div>
      <van-grid :column-num="5" vue-router>
        <van-grid-item icon="paid" text="代付款" />
        <van-grid-item icon="ecard-pay" text="代发货" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="description" badge="6" text="评价" />
        <van-grid-item icon="points" text="已完成" to="/" />
      </van-grid>
    </div>

    <div>
      <div class="cell mb10">
        <van-cell is-link icon="records" title="全部订单" vue-router to="/" />
      </div>
      <div class="cell">
        <van-cell is-link icon="points" title="收藏商品" vue-router to="/"/>
      </div>
      <div class="cell">
        <van-cell is-link icon="location-o" title="地址管理" vue-router to="/"/>
      </div>
      <div class="cell">
        <van-cell is-link icon="send-gift-o" title="最近浏览" vue-router to="/"/>
      </div>
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
      user:{}
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.from {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: rgb(227, 12, 123);
  .yuan {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 50px;
  }
  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px !important;
  }
}
.van-cell:after {
  border-bottom: none;
}
.cell {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
</style>