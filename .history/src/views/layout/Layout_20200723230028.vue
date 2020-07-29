<template>
  <div>
    <router-view></router-view>
    <div class="navBnt">
      <layoutBnt ></layoutBnt>
    </div>
     
  </div>
</template>

<script>
import layoutBnt from "../../components/layoutA/layoutBnt";
export default {
  name: "",
  props: {},
  components: {
    layoutBnt
  },
  data() {
    return {
      str:null
    };
  },
  methods: {
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.navBnt{
  position: fixed;
  bottom: 0;
}
</style>