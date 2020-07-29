<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :address-info="list"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
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
      areaList: areaList, //地区列表
      searchResult: [], //详细地址搜索结果，是一个数组
      list: {}, //收货人信息初始值
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
          // id: id,
        })
        .then((res) => {
          // console.log(res);
          this.$router.push('/Addresslist')
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postsetDefault(){
      this.$api.postsetDefault({
        id:this.id
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {

  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

</style>