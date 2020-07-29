<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :address-info='info'
     
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from "../../../area";
import { AddressEdit } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
      info:{},
      id:''
    };
  },
  methods: {
     //点击保存地址(添加地址)
    onSave(content) {
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
          id: this.id,
        })
        .then((res) => {
          // console.log(res);
          this.$router.go(-1)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onDelete() {
      Toast("delete");
    },
  },
  mounted() {
      this.id=this.$route.query.id
      console.log(this.id);
      this.info=JSON.parse(this.$route.query.info)
      console.log(this.$route.query.info);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>