<template>
  <div>
    <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>个人资料</template>
    </TitleOne>
    <van-cell value="内容" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">单元格</span>
       
      </template>
    </van-cell>
  </div>
</template>

<script>
import TitleOne from "../../components/TitleOne";
export default {
  name: "",
  props: {},
  components: {
    TitleOne,
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