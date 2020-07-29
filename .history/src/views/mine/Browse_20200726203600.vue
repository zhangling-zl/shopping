<template>
  <div>
    <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>最近浏览</template>
    </TitleOne>

    <BrowseAll></BrowseAll>
  </div>
</template>

<script>
import BrowseAll from "../../components/browseA/BrowseAll";
export default {
  name: "",
  props: {},
  components: {
    BrowseAll,
  },
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