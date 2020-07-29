<template>
  <div>
    <div class="box">
      <div class="p10">
        <div class="BackButton flex j-c a-c">
          <van-icon name="arrow-left cf" />
        </div>
        <div class="form p10">
          <div class="f20 ml15 mb20 text">登录 / 注册</div>
          <van-form @submit="onSubmit">
            <van-field
              v-model="nickname"
              placeholder="USERNAME"
              :rules="[{ required: true, message: '用户名不能为空' }]"
            />
            <van-field
              v-model="password"
              type="password"
              placeholder="PASSWORD"
              :rules="[{ required: true, message: '密码不能为空' }]"
            />
            <van-field
              v-model="phone"
              label="手机号码"
              placeholder="仅需注册需要"
              :rules="[{ required: true, message: '手机号码不能为空' }]"
            />
            <van-field
              v-model="sms"
              label="短信验证码"
              placeholder="仅需注册需要"
              :rules="[{ required: true, message: '验证码不能为空' }]"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
          </van-form>
        </div>
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
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    //
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/img/12ad4cc8eb710ea85818da9c62e8727dce18ad77252a2b-LN8glt.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.BackButton {
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}
.form {
  background-color: #fff;
}
.text{
  color: rgb (12,12,12);
}
</style>