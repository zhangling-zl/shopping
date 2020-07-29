<template>
  <div>
    <div class="flex"> 
      <div class="flex1">
        <div v-for="(item,index) in floor1" :key="index">
          <img v-if="index===0" :src="item.image" />
          <img v-if="index===floor1.length-1" :src="item.image" />
        </div>
      </div>
      <div class="flex1">
        <div v-for="(item,index) in floor1" :key="index">
          <img  v-if="index!==0 && index!==floor1.length-1" :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
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

</style>