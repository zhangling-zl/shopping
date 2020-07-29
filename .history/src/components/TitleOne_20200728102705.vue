<template>
  <div>
    <div class="text flex j-b a-c p10 f18">
      <div  @click="clickreturn">
        <slot name="icon"></slot>
      </div>
      <div class="text2">
        <slot name="small"></slot>
      </div>
      <div></div>
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
  methods: {
    clickreturn(){
      this.$router.go(-1)
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text {
  border-bottom: 1px solid #eee;
  color: rgb(66, 61, 58);
}
.text2{
  color: rgb(75,75,76);
}
</style>