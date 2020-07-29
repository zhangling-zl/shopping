<template>
  <div>
    <div class="w100 flex j-c a-c">
      <div>{{name}}</div>
      <div>{{floorName}}</div>
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
</style>