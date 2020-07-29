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
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
              <template #button>
                <van-button size="small" type="primary" :disabled="disabled">{{text}}</van-button>
              </template>
            </van-field>
            <van-field
              v-model="verify"
              label="验证码"
              placeholder="请输入验证码"
              :rules="[{ required: true,message: '验证码不能为空'}]"
            />
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
      nickname: "", //用户名
      password: "", //密码
      phone: "", //手机号
      sms: "", //短信验证码
      verify: "", //验证码
      // code: "", //验证码
      text: "发送验证码",
      disabled: false //默认没有点击（发送验证码 按钮）
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    //验证码请求
    getVerify() {
      this.$api
        .getVerify()
        .then(res => {
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getVerify();
  },
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
.text {
  color: rgb (12, 12, 12);
}
</style>