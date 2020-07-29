<template>
  <div>
    <div>
      <slot name="big"></slot>
    </div>
    <div>
      <slot name="small"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
.from {
  width: 20px;
  height: 20px;
  background-color: rgb(224, 50, 43);
}
</style>