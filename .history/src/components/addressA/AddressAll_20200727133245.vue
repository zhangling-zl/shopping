<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../../../area";
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: [], //详细地址搜索结果，是一个数组
    };
  },
  methods: {
    //点击保存地址
    onSave() {
      Toast("save");
      this.$api
        .postAddress({
          name: content.name,
          tel: content.tel,
          address:
            content.province +
            content.city +
            content.county +
            content.addressDetail,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id: id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击删除地址
    onDelete() {
      Toast("delete");
    },
    //修改详细地址是触发
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>