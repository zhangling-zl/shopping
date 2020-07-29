<template>
  <div>
    <div class="text flex j-c a-c p15">
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
}

</style>