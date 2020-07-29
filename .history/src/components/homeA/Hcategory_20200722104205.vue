<template>
  <div>
    <div class="w100 flex j-c a-c column">
      <div class="from flex j-c p10 mt20">
        <div v-for="(item,index) in category" :key="index">
          <div class="flex j-c a-c column item" @click="Categories(index)">
            <img :src="item.image" class="img" />
            <div class="f14 mt10">{{item.mallCategoryName}}</div>
          </div>
        </div>
      </div>
      <img :src="advertesPicture.PICTURE_ADDRESS" class="img1 mt10 mb20" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
      type: Array
    },
    advertesPicture: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      id:''
    };
  },
  methods: {
    //点击跳转到分类页
    Categories(index){
       this.$router.push({path:'/assort',query:{index:index}})
    }
  },
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
.img1 {
  width: 100%;
}
.from {
  width: 335px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #ccc;
}
.item {
  margin: 0px 4px;
}
</style>