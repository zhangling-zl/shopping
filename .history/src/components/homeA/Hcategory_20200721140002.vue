<template>
  <div>
    <div class="from flex j-c ">
      <div v-for="(item,index) in category" :key="index">
        <div class="flex j-c a-c column item">
          <img :src="item.image" class="img" />
          <div>{{item.mallCategoryName}}</div>
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
  width: 50px;
  height: 50px;
}
.from{
    background-color: #fff;
}
.item{
    margin: 0px 4px;
}
</style>