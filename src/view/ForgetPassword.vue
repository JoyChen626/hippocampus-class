<template>
  <div class="Forget-password">
    <forget-password-header></forget-password-header>
    <forget-password-logo :showLogo="showLogoBox"></forget-password-logo>
    <forget-password-input :showInput="showInputBox" @SomeInput="getSomeInputValue"></forget-password-input>
    <div class="Forget-password-button">
      <span @click="getInputVal">重置密码</span>
    </div>
    <div class="other-Forget-password-box clearFix">
      <span class="other-toSignIn flowRight">已有账号，<router-link tag="span" class="other-toSignIn-blue" to="/signIn">去登录</router-link></span>
    </div>
  </div>
</template>

<script>
import ForgetPasswordHeader from '../components/common/header/Header'
import ForgetPasswordLogo from '../components/common/logo/Logo'
import ForgetPasswordInput from '../components/common/input/Input'
import {MessageBox, Toast} from 'mint-ui';
export default {
  name: 'ForgetPassword',
  components: {
    ForgetPasswordHeader,
    ForgetPasswordLogo,
    ForgetPasswordInput
  },
  data() {
    return {
      showLogoBox: 2,
      showInputBox: 4,
      someValue: [],
      valueOk: false
    }
  },
  methods: {
    getSomeInputValue(data) {
      this.someValue = data;
    },
    checkedInput() {
      if (!this.someValue.phoneNumberText || this.someValue.phoneNumberText == '') {
        MessageBox.alert('请输入手机号码').then(action => {});
        return false;
      }
      if (!this.someValue.verificationCodeText || this.someValue.verificationCodeText == '') {
        MessageBox.alert('请输入验证码').then(action => {});
        return false;
      }
      if (!this.someValue.userPasswordText1 || this.someValue.userPasswordText1 == '') {
        MessageBox.alert('请输入密码').then(action => {});
        return false;
      }
      if (!this.someValue.userPasswordText2 || this.someValue.userPasswordText2 == '') {
        MessageBox.alert('请再次输入密码').then(action => {});
        return false;
      }
      if (this.someValue.userPasswordText1 && this.someValue.userPasswordText2 && this.someValue.userPasswordText1 !== this.someValue.userPasswordText2) {
        MessageBox.alert('第二次输入的密码与第一次不一致,请重新输入').then(action => {});
        return false;
      }
      this.valueOk = true;
    },
    getInputVal() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      };
      Toast('恭喜您，重置密码成功，请重新登录');
      this.$router.push({path: '/signIn'})
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .Forget-password-button{
    margin: px2rem(100px) px2rem(60px) px2rem(20px) px2rem(60px);
    background: $color-theme;
    height: px2rem(94px);
    border-radius: px2rem(47px);
    overflow: hidden;
    span{
      display: inline-block;
      width: 100%;
      height: px2rem(94px);
      line-height: px2rem(94px);
      text-align: center;
      color: $color-text;
    }
  }
  .other-Forget-password-box{
    margin: 0 px2rem(60px);
    padding: 0 px2rem(47px);
    span{
      font-size: $font-size-small-s;
      color: $color-text-x;
    }
    .other-toSignIn-blue{
      color: $color-theme;
    }
  }

</style>