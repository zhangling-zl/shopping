<template>
  <div>
    <div class="w100 flex a-c">
      <div class="text1 ">
        <slot name="big"></slot>
      </div>
      <div class="text2" >
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