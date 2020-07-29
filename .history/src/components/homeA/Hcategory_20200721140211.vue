<template>
  <div>
    <div class="from flex j-c">
      <div v-for="(item,index) in category" :key="index">
        <div class="flex j-c a-c column item">
          <img :src="item.image" class="img" />
          <div class="f14">{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 40px;
  height: 40px;
}
.from{
    width: 420px;
    background-color: #fff;
    border-radius:10px ;
}
.item{
    margin: 0px 4px;
}
</style>