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
import TitleOne from "../../components/TitleOne";
import BrowseAll from "../../components/browseA/BrowseAll";
export default {
  name: "",
  props: {},
  components: {
    BrowseAll,
    TitleOne
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