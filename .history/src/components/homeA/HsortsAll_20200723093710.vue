<template>
  <div>
    <div class="w100 flex j-c a-c mtb15">
      <div class="text1 flex j-c a-c cf f14 mr5">{{name}}</div>
      <div class="text2">{{floorName}}</div>
    </div>
    <img :src="floor[0].image" >
    <img :src="floor[4].image" >
    <img :src="floor[1].image" >
    <img :src="floor[2].image" >
    <img :src="floor[3].image" >
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    name: {
      type: String,
    },
    floorName: {
      type: String,
    },
    floor: {
      type: Array,
    },
  },
  components: {},
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
.text1{
  background-color:rgb(225,66,60);
  width: 20px;
  height: 20px;
  border-radius:50%;
}
.text2{
color: rgb(225,66,60);
}
</style>