<template>
  <div>
    <div class="w100 flex a-c">
      <div>
        <slot name="big"></slot>
      </div>
      <div class="text2" style="color: rgb(225，66，60);">
        <slot name="small"></slot>
      </div>
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


</style>