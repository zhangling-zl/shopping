<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-if="list.length>0">
          <div v-for="(item,index) in list" :key="index">
            <div class="flex from p15">
              <img :src="item.image_path" class="img1 mr15" @click="$toDetails(item.cid)" />
              <div>
                <div class="text1 mb15 f18">{{item.name}}</div>
                <div class="text2">￥{{item.present_price}}</div>
              </div>
              <van-icon name="close" @click="Icon(index,item)" class="icon" />
            </div>
          </div>
        </li>
        <div v-else>
          <div class='yuan'>
            <img src="../../assets/img/timg.jpg" class="w100" />
          </div>
          <div>暂无数据</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import BScroll from "better-scroll";
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    //查询我的收藏
    getCollectionList() {
      this.$api
        .getCollectionList()
        .then((res) => {
          if (res.code === 200) {
            this.list = res.data.list;
          }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //点击删除
    Icon(index, item) {
      this.id = item.cid; //赋值
      this.$api
        .postCancel({ id: this.id })
        .then((res) => {
          if (res.code === 200) {
            Dialog.confirm({
              title: "此操作会删除当前收藏",
              message: "是否删除",
            })
              .then(() => {
                Toast("删除成功");
              })
              .catch(() => {
                // on cancel
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    //查询我的收藏
    this.getCollectionList();
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh - 45px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.img1 {
  width: 76px;
  border: 1px solid #eee;
}
.text1 {
  color: rgb(57, 52, 57);
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text2 {
  color: rgb(255, 0, 0);
  font-weight: 600;
}
.from {
  border-bottom: 1px solid #eee;
}
.icon {
  margin-top: 60px;
}
.yuan{
  width: 220px;
  height: 220px;
  border-radius:50%;
}
</style>