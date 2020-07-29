<template>
  <div>
  <detailsLfet></detailsLfet>
  </div>
</template>

<script>
import detailsLfet from '../../components/detailsA/detailsLfet'
export default {
  name: "",
  props: {},
  components: {
    detailsLfet
  },
  data() {
    return {
      id: "",
      obj:{}
    };
  },
  methods: {
      //
    getGoods() {
      this.$api
        .getGoods(this.id)
        .then(res => {
        //   console.log(res.goods);
        this.goodsOne=res.goods.goodsOne
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>