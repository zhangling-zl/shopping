<template>
  <div class="w100 flex j-c">
    <div v-if="address.length>0">
      <van-address-list
        v-model="chosenAddressId"
        :list="address"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </div>
    <div v-else class="from">暂无收货地址</div>
    <div class="buttonx">
      <div class="button flex j-c a-c">新增地址</div>
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
            res.address.map((item, index) => {
              this.$set(item, "id", String(index + 1));
            });

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
    //点击编辑地址(传值过去id和数组的每一项)
    onEdit(item, index) {
      this.$router.push({
        path: "/Addressedit",
        query: { id: item._id, info: JSON.stringify(item) },
      });
    },
    select(item) {
      this.chosenAddressId = item.id;
      // console.log(item);
    },
  },
  mounted() {
    this.getAddress();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.buttonx{
  width: 100%;
  height: 50px;
}
.button {
  width: 90%;
  height: 50px;
  background-color: rgb(255, 68, 68);
  color: #fff;
  font-size: 18px;
  position: absolute;
  bottom: 0;
  border-radius: 40px;
}
.from {
  width: 100%;
  height: calc(100vh - 95px);
  background-color: #ccc;
}
</style>