<template>
  <div>
    <div class="box">
      
        <div class="BackButton flex j-c a-c fixed">
          <van-icon name="arrow-left cf" />
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
.box{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('../../assets/img/12ad4cc8eb710ea85818da9c62e8727dce18ad77252a2b-LN8glt.jpg') no-repeat;
  background-size: 100% 100%;
}
.Button {
  position: fixed;
  .BackButton {
    width: 38px;
    height: 38px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>