<template>
  <div>
    <detailsLfet :goodsOne='goodsOne'></detailsLfet>
  </div>
</template>

<script>
import detailsLfet from "../../components/detailsA/detailsLfet";
export default {
  name: "",
  props: {},
  components: {
    detailsLfet,
  },
  data() {
    return {
      id: "",
      goodsOne: [],
    };
  },
  methods: {
    //详情页数据请求
    getGoods() {
      this.$api
        .getGoods(this.id)
        .then((res) => {
          // console.log(res.goods);
          this.goodsOne = res.goods.goodsOne.image;
          this.goodsOne.push(res.goods.goodsOne.image_path)
          console.log(this.goodsOne);

          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.query.id; //接收id
    this.getGoods(); //调用请求到的数据
    // console.log(this.$route);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>