<template>
  <div>
    <div class="from flex j-c a-c column">
      <div class="yuan"><img src="../../assets/img/icon.svg" class="w100" v-if="flge===true"></div>
      <div class="flex a-c mt10">
        <div class="cf f18 mr5">欢迎你,亲爱的</div>
        <div class="cf f600 f18">{{nickname}}</div>
      </div>
      <div class="cf c12 mt5" @click="loginAll">{{text}}</div>
      <div class="icon cf">
        <van-icon name="setting-o" v-if="flge===true" @click="clickmineAll"/>
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
        <van-cell is-link icon="points" title="收藏商品" vue-router to="Collect" />
      </div>
      <div class="cell">
        <van-cell is-link icon="location-o" title="地址管理" vue-router to="/addresslist" />
      </div>
      <div class="cell">
        <van-cell is-link icon="send-gift-o" title="最近浏览" vue-router to="/browse" />
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      nickname: "",
      text: "",
      flge: false
    };
  },
  methods: {
    //点击跳转到登录页面
    loginAll() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.$api.postloginOut().then(res=>{
      if (user !== null) {
        Dialog.confirm({
          title: "退出登录",
          message: "确定要退出登录吗？"
        })
          .then(() => {
           this.$router.push("/login"); //跳转到登录页面
            // localStorage.clear(); //清空所有数据
            localStorage.removeItem("user"); //清空当前单个数据
            
          })
          .catch(() => {
            console.log(err);
          });
      } else {
        Dialog.confirm({
          title: "请登录",
          message: "当前状态未登录，是否立即登录"
        })
          .then(res => {
            this.$router.push("/login"); //跳转到登录页面
          })
          .catch((err) => {
            console.log(err);
          });
      }


              console.log(res);
            }).catch(err=>{
              console.log(err);
            })
      
    },
    //点击跳转个人资料页面
    clickmineAll(){
       this.$router.push('/mineAll')
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    // console.log(this.user);
    if (this.user !== null) {
      this.flge = true;
      this.nickname = this.user.nickname;
      this.text = "退出登录";
    } else {
      this.flge = false;
      this.text = "请先登录";
    }
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