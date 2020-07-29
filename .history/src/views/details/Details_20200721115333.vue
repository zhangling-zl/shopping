<template>
  <div>我是详情页</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    getGoods() {
      this.$api
        .getGoods(this.id)
        .then(res => {
          console.log(res);
        })
        .cahth(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGoods();
    this.id=this.$route.query.id;
    // console.log(this.id);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>