<template>
  <div>
    <div class="w100 flex j-c a-c mtb15">
      <div class="text1 flex j-c a-c cf f14 mr5">{{name}}</div>
      <div class="text2">{{floorName}}</div>
    </div>
    <div v-if="floor.length>0">
      <div class="boxs">
      <div class="dv1">
        <img :src="floor[0].image" />
        <img :src="floor[4].image" />
      </div>
      <div class="dv2">
        <img :src="floor[1].image" />
        <img :src="floor[2].image" />
        <img :src="floor[3].image" />
      </div></div>
    </div>
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
.text1 {
  background-color: rgb(225, 66, 60);
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.text2 {
  color: rgb(225, 66, 60);
}
.dv1,.dv2{
    flex: 1;
}
.boxs{
  width: 100%;
  display: flex;
  font-size: 0;
}
img{
  width: 100%;
  height: 100%;
}
</style>