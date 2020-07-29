<template>
  <div>
    <div class="text flex j-b a-c p10 f18">
      <van-icon name="arrow-left" @click="clickreturn"></van-icon>
      <div class="text2">地址列表</div>
      <div></div>
    </div>
    <AddresslistAll></AddresslistAll>
  </div>
</template>

<script>
import TitleOne from "../../components/TitleOne";
import AddresslistAll from "../../components/addresslistA/AddresslistAll";
export default {
  name: "",
  props: {},
  components: {
    AddresslistAll,
    TitleOne,
  },
  data() {
    return {};
  },
  methods: {
    clickreturn(){
      this.$router.push('/mine')
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text {
  border-bottom: 1px solid #eee;
  color: rgb(66, 61, 58);
}
.text2 {
  color: rgb(75, 75, 76);
}
</style>