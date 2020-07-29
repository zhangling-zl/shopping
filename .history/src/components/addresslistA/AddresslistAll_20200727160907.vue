<template>
  <div>
    <div>
      <div>
        <div v-if="address.length>0">
          <van-address-list
            v-model="chosenAddressId"
            :list="address"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
          />
        </div>
        <div v-else>暂无收货地址</div>
      </div>
    </div>
  </div>
</template>
<script>
import { AddressList } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chosenAddressId: "1",
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
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>