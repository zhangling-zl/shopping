<template>
  <div>
    <div class="w100 flex j-c a-c">
      <div class="ttext1 flex j-c a-c cf f14 mr5">{{name}}</div>
      <div class="text2">{{floorName}}</div>
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