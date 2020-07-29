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
          <span class="custom-title">头像</span>
        </template>
        <template #default>
          <div class="from">
            <img src="../../assets/img/icon.svg" alt />
          </div>
        </template>
      </van-cell>
    </div>
    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      />
      <van-field
        v-model="nickname"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '昵称不能为空' }]"
      />
      <van-field
        v-model="gender"
        label="性别"
        placeholder="请输入"
        :rules="[{ required: true, message: '不能为空' }]"
      />
      <van-field v-model="mailbox" label="邮箱" placeholder="请输入邮箱" />
      <!-- <van-field
        v-model="mailbox"
        label="出生年月"
        placeholder="请输入出生年月"
        :rules="[{ required: true, message: '出生年月不能为空' }]"
      />-->
      <van-field
        v-model="date"
        label="出生年月"
        placeholder="请选择年月日"
        @click="showPicker = true"
        :rules="[{ required: true, message: '出生年月不能为空' }]"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          v-model="currentDate"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
        <!-- cancel点击取消按钮时触发的事件 点击取消按钮时弹框取消 -->
        <!-- confirm 点击完成按钮时触发的事件  点击确定按钮时拿到获取的时间，弹框取消-->
        <!--type 为 date 表示选择年月日-->
      </van-popup>
      <div style="margin: 30px;">
        <van-button block type="primary" native-type="submit" @click="Save">保存</van-button>
        <van-button block type="default" native-type="submit">取消</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import dayjs from "dayjs";
import TitleOne from "../../components/TitleOne";
export default {
  name: "",
  props: {},
  components: {
    TitleOne,
  },
  data() {
    return {
      user: {},
      username: "", //用户名，动态绑定
      nickname: "", //昵称
      gender: "", //性别
      mailbox: "", //邮箱
      date: "", //出生年月
      showPicker: false, //默认没有点击
      minDate: new Date(2020, 0, 1), //最小选择日期
      maxDate: new Date(2030, 10, 1), //最大选择日期
      currentDate: new Date(), //获取时间，点击获取，所以要动态绑定一个时间（currentDate）
    };
  },
  methods: {
    //取消 ,页面不清空Cancel() {},
    // 点击出现时间弹框
    onConfirm() {
      this.showPicker = false;
      this.date = dayjs(this.currentDate).format("YYYY年MM月DD日");
    },
    //保存，把数据存在本地储存里面,且跳转到我的页面
    Save() {
      this.$api
        .postSaveUser({
          gender: this.gender,
          year: this.year,
          month: this.month,
          day: this.day,
          id: this.id,
          nickname: this.nickname,
        })
        .then((res) => {
          console.log(ers);
          res.user = {
            gender: this.gender,
            year: this.year,
            month: this.month,
            day: this.day,
            id: this.id,
            nickname: this.nickname,
          };
         
        })
        .catch((err) => {
          console.log(err);
        });

      //   this.$router.push("/mine");
    },
  },
  mounted() {
    //页面一加载就显示用户的登录资料
    this.$api
      .postQueryUser()
      .then((res) => {
        if (res.code===200) {
          (this.username = res.userInfo.username),
          (this.nickname = res.userInfo.nickname),
          (this.gender = res.userInfo.gender),
          (this.date = `${res.userInfo.year}年${res.userInfo.month}月${res.userInfo.day}日`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.Avatar {
  border-bottom: 1px solid #eee;
}
</style>