<template>
  <div>
    <div class="boxs"> 
      <div class="dv1">
        <div v-for="(item,index) in floor3" :key="index">
          <img v-if="index===0" :src="item.image" />
          <img v-if="index===floor3.length-1" :src="item.image" />
        </div>
      </div>
      <div class="dv2">
        <div v-for="(item,index) in floor3" :key="index">
          <img  v-if="index!==0 && index!==floor3.length-1" :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor3: {
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