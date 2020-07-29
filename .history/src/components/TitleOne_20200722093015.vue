<template>
  <div>
    <div class="text flex j-c a-c p10 f600">
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
  border-bottom:1px solid rgb(246,246,246) ;
  color: rgb(66,61,58);
}

</style>