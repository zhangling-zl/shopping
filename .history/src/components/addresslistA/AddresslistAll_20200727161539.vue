<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-if="address.length>0">
          <van-address-list
            
            :list="address"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
          />
        </li>
        <li v-else>暂无收货地址</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { AddressList } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
     
      address: [],
    };
  },
  methods: {
    //获取用户收货地址的数据
    getAddress() {
      this.$api
        .getAddress()
        .then((res) => {
          if (res.code === 200) {
            this.address = res.address;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击新增地址
    onAdd() {
      this.$router.push("/address");
    },
    onEdit(item, index) {},
  },
  mounted() {
    this.getAddress();
     new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh - 45px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>