<template>
  <div>
    <div class="text flex j-b a-c p10 f18">
      <slot name="icon"></slot>
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
.text{
  border-bottom:1px solid #ccc ;
  color: rgb(66,61,58);
}

</style>