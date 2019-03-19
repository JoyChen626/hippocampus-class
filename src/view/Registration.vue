<template>
  <div class="Registration">
    <registration-header></registration-header>
    <registration-logo :showLogo="showLogoBox"></registration-logo>
    <registration-input :showInput="showInputBox" @SomeInput="getSomeInputValue"></registration-input>
    <div class="Registration-statement">
      <i :class="statementStatus===0?'statementCheckedNo':'statementCheckedYes'" @click="statementChecked"></i><span>我同意</span><span class="statement-word-blue">《海马课堂服务协议》</span>
    </div>
    <div class="Registration-button">
      <span @click="getInputVal">注册</span>
    </div>
    <div class="other-Registration-box clearFix">
      <span class="other-toSignIn flowRight">已有账号，<router-link tag="span" class="other-toSignIn-blue" to="/signIn">去登录</router-link></span>
    </div>
  </div>
</template>

<script>
import RegistrationHeader from '../components/common/header/Header'
import RegistrationLogo from '../components/common/logo/Logo'
import RegistrationInput from '../components/common/input/Input'
import {MessageBox, Toast} from 'mint-ui';
export default {
  name: 'Registration',
  components: {
    RegistrationHeader,
    RegistrationLogo,
    RegistrationInput
  },
  data() {
    return {
      showLogoBox: 2,
      showInputBox: 3,
      statementStatus: 0,
      someValue: [],
      valueOk: false
    }
  },
  methods: {
    getSomeInputValue(data) {
      this.someValue = data;
    },
    statementChecked() {
      if (this.statementStatus === 0) {
        this.statementStatus = 1;
      } else {
        this.statementStatus = 0;
      }
    },
    checkedInput() {
      if (!this.someValue.userNameText || this.someValue.userNameText == '') {
        MessageBox.alert('请输入用户名').then(action => {});
        return false;
      }
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
      if (this.statementStatus == 0) {
        MessageBox.alert('请勾选海马课堂服务协议').then(action => {});
        return false;
      }
      this.valueOk = true;
    },
    getInputVal() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      };
      Toast('恭喜您，注册成功');
      this.$router.push({path: '/essentialInformationInput'})
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .Registration-statement{
    margin-top: px2rem(40px);
    padding: 0 px2rem(60px);
    i,span{
      vertical-align: middle;
    }
    i{
      margin-right: px2rem(10px);
    }
    .statementCheckedNo{
      @include mix-ico-checkBox1;
    }
    .statementCheckedYes{
      @include mix-ico-checkBox2;
    }
    span{
      font-size: $font-size-small;
    }
    .statement-word-blue{
      color: $color-theme;
    }
  }
  .Registration-button{
    margin: px2rem(80px) px2rem(60px) px2rem(20px) px2rem(60px);
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
  .other-Registration-box{
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