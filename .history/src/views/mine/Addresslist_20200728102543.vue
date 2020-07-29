<template>
  <div>
    <!--<TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      
      <template #small>地址列表</template>
    </TitleOne>-->
    <div class="text flex j-b a-c p10 f18"> 
      <van-icon name="arrow-left"></van-icon>
      <div>地址列表</div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>