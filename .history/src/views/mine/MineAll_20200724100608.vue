<template>
  <div>
    <TitleOne>
      <template #icon>
        <van-icon name="arrow-left" />
      </template>
      <template #small>个人资料</template>
    </TitleOne>
    <van-cell title="gihbnt" class="Avatar" />
    <div class="Avatar">
      <van-cell value="内容" is-link center>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">单元格</span>
        </template>
        <template #default>
          <div class="from">
            <img src="../../assets/img/icon.svg" alt />
          </div>
        </template>
      </van-cell>
    </div>
    
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
.Avatar{
    border-bottom:1px solid #eee ;
}
</style>