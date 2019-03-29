<template>
  <div class="Input">
    <div class="input-box" v-if="showInput===1||showInput===3||showInput===5">
      <i v-if="showInput===5"></i><span class="ico-userName"></span><input
      v-model="someInputVal.userNameText"
      v-on:input="updateValue($event.target.value,'userNameText')"
      type="text"
      class="input-userName"
      placeholder="请输入用户名"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="25"
    ><span class="ico-delect" @click="delectUserNmae" v-if="showInput===1"></span>
    </div>
    <div class="input-box" v-if="showInput===2||showInput===3||showInput===4||showInput===5">
      <i v-if="showInput===5"></i><span class="ico-phoneNumber"></span><input
      v-model="someInputVal.phoneNumberText"
      maxlength="11"
      v-on:input="updateValue($event.target.value,'phoneNumberText')"
      type="tel"
      class="input-phoneNumber"
      placeholder="请输入手机号码"
      onkeyup="value=value.replace(/[^0-9]/g,'')"
      onpaste="value=value.replace(/[^0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^0-9]/g,'')"
    ><span class="ico-delect" @click="delectPhoneNumber" v-if="showInput===2"></span>
    </div>
    <div class="input-box clearFix" v-if="showInput===2||showInput===3||showInput===4">
      <span class="ico-verificationCode"></span><input
      type="tel"
      class="input-verificationCode"
      placeholder="请输入验证码"
      v-on:input="updateValue($event.target.value,'verificationCodeText')"
      v-model="someInputVal.verificationCodeText"
      onkeyup="value=value.replace(/[^0-9]/g,'')"
      onpaste="value=value.replace(/[^0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^0-9]/g,'')"
      maxlength="6"
    ><span class="verificationCode1 flowRight" :class="showInput===2?'verificationCode1':'verificationCode2'">获取验证码</span>
    </div>
    <div class="input-box" v-if="showInput===1||showInput===3||showInput===4">
      <span class="ico-password"></span><input
      :type="seePassword1===0?'password':'text'"
      class="input-password"
      v-on:input="updateValue($event.target.value,'userPasswordText1')"
      v-model="someInputVal.userPasswordText1"
      placeholder="请输入密码"
      maxlength="25"
    ><span class="icoHidePassword" :class="seePassword1===1?'icoShowPassword':'icoHidePassword'" @click="viewPassword1" v-if="showInput===1||showInput===3"></span>
    </div>
    <div class="input-box" v-if="showInput===3||showInput===4">
      <span class="ico-password"></span><input
      :type="seePassword2===0?'password':'text'"
      class="input-password"
      v-on:input="updateValue($event.target.value,'userPasswordText2')"
      v-model="someInputVal.userPasswordText2"
      placeholder="请再次确认密码"
      maxlength="25"
    ><span class="icoHidePassword" :class="seePassword2===1?'icoShowPassword':'icoHidePassword'" @click="viewPassword2" v-if="showInput===1||showInput===3"></span>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-gender"></span>
      <p class="input-single-election">
        <label class="single-election-word"><span>男</span><span class="icoCheck" :class="someInputVal.checkGender==='man'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkGender" value="man"/></label>
        <label class="single-election-word"><span>女</span><span class="icoCheck" :class="someInputVal.checkGender==='woman'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkGender" value="woman"/></label>
      </p>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-identity"></span>
      <p class="input-single-election">
        <label class="single-election-word"><span>学生</span><span class="icoCheck" :class="someInputVal.checkIdentity==='student'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="student"/></label>
        <label class="single-election-word"><span>教师</span><span class="icoCheck" :class="someInputVal.checkIdentity==='teacher'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="teacher"/></label>
        <label class="single-election-word"><span>家长</span><span class="icoCheck" :class="someInputVal.checkIdentity==='parents'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="parents"/></label>
      </p>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-school"></span><input
      v-model="someInputVal.schoolText"
      type="text" class="input-school"
      v-on:input="updateValue($event.target.value,'schoolText')"
      placeholder="请输入学校姓名"
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="30"
    >
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-class"></span><input
      v-model="someInputVal.classText"
      type="text"
      class="input-class"
      v-on:input="updateValue($event.target.value,'classText')"
      placeholder="请输入班级姓名"
      onkeyup="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="10"
    >
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-region"></span><input
      v-model="someInputVal.regionText"
      type="text"
      @click="showAddressPicker"
      v-on:input="updateValue($event.target.value,'regionText')"
      class="input-region"
      placeholder="请选择省、市、区"
      readonly="readonly"
    >
    </div>
  </div>
</template>

<script>
import Bus from '../../../assets/javascripts/eventBus'
export default {
  name: 'Input',
  props: {
    showInput: {
      type: Number,
      default: 1
    },
    adress: ''
  },
  data() {
    return {
      seePassword1: 0,
      seePassword2: 0,
      someInputVal: {
        userNameText: '',
        userPasswordText1: '',
        userPasswordText2: '',
        phoneNumberText: '',
        verificationCodeText: '',
        checkGender: '',
        checkIdentity: '',
        schoolText: '',
        classText: '',
        regionText: ''
      }
    }
  },
  methods: {
    // 打开地址选择器
    showAddressPicker() {
      Bus.$emit('showAdressPicker', true);
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    },
    updateValue(data, elem) {
      if (elem == 'userNameText') { // 用户名
        this.someInputVal.userNameText = data;
      } else if (elem == 'userPasswordText1') { // 密码1
        this.someInputVal.userPasswordText1 = data;
      } else if (elem == 'userPasswordText2') { // 密码2
        this.someInputVal.userPasswordText2 = data;
      } else if (elem == 'phoneNumberText') { // 电话
        this.someInputVal.phoneNumberText = data;
      } else if (elem == 'verificationCodeText') { // 验证码
        this.someInputVal.verificationCodeText = data;
      } else if (elem == 'checkGender') { // 性别
        this.someInputVal.checkGender = data;
      } else if (elem == 'checkIdentity') { // 身份
        this.someInputVal.checkIdentity = data;
      } else if (elem == 'schoolText') { // 学习
        this.someInputVal.schoolText = data;
      } else if (elem == 'classText') { // 班级
        this.someInputVal.classText = data;
      } else if (elem == 'regionText') { // 地区
        this.someInputVal.regionText = data;
      }
      this.$emit('SomeInput', this.someInputVal);
    },
    viewPassword1() {
      if (this.seePassword1 === 0) {
        this.seePassword1 = 1;
      } else {
        this.seePassword1 = 0;
      }
    },
    viewPassword2() {
      if (this.seePassword2 === 0) {
        this.seePassword2 = 1;
      } else {
        this.seePassword2 = 0;
      }
    },
    delectUserNmae() {
      this.someInputVal.userNameText = '';
    },
    delectPhoneNumber() {
      this.someInputVal.phoneNumberText = '';
    }
  },
  mounted() {
    Bus.$on('adressData', (data) => {
      this.someInputVal.regionText = data.name;
    })
  },
  watch: {
    showInput() {
      if (this.showInput === 2) {
        this.someInputVal.userNameText = '';
        this.someInputVal.userPasswordText1 = '';
      } else if (this.showInput === 1) {
        this.someInputVal.phoneNumberText = '';
        this.someInputVal.verificationCodeText = '';
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
@import "~scss/variable";
@import "~iconsScss/sprite";

.Input {
  padding: px2rem(110px) px2rem(60px) 0 px2rem(60px);
  .input-box {
    margin-top: px2rem(15px);
    border-bottom: 1px solid $color-border;
    display: flex;
    align-items: center;
    padding: px2rem(8px) px2rem(8px);
    i{
      @include mix-ico-xing;
      margin-right: px2rem(8px);
    }
    input{
      flex: 1;
      line-height: px2rem(60px);
      vertical-align: middle;
      min-width: px2rem(200px);
      font-size: $font-size-small;
      margin: px2rem(0px) px2rem(20px);
    }
    .input-single-election{
      margin: 0 px2rem(20px);
      height: px2rem(60px);
      line-height: px2rem(60px);
      .single-election-word{
        display: inline-block;
        width: px2rem(120px);
        color: $color-text-x;
        font-size: $font-size-small;
        margin-right: px2rem(50px);
        font-size: 0;
        span{
          font-size: px2rem(28px);
          display: inline-block;
          vertical-align: middle;
        }
      }
      .single-election-word:last-child{
        margin-right: px2rem(0px);
      }
      .icoCheck{
        vertical-align: middle;
        margin-left: px2rem(16px);
      }
      .icoNoCheck{
        @include mix-ico-NoCheck;
      }
      .icoYesCheck{
        @include mix-ico-YesCheck;
      }
    }
    .ico-userName {
      @include mix-ico-userName;
    }
    .ico-delect{
      @include mix-ico-delect;
    }
    .ico-password {
      @include mix-ico-password;
    }
    .icoHidePassword{
      @include mix-ico-hidePassword;
    }
    .icoShowPassword{
      @include mix-ico-showPassword;
    }
    .ico-phoneNumber{
      @include mix-ico-phoneNumber;
    }
    .ico-verificationCode{
      @include mix-ico-verificationCode;
    }
    .verificationCode1{
      display: inline-block;
      width: px2rem(160px);
      height: px2rem(55px);
      line-height: px2rem(55px);
      border-radius: px2rem(27.5px);
      text-align: center;
      background: $color-border;
      font-size: $font-size-small;
      color: $color-text;
    }
    .verificationCode2{
      background: $color-theme;
    }
    .ico-gender{
      @include mix-ico-gender;
    }
    .ico-identity{
      @include mix-ico-identity;
    }
    .ico-school{
      @include mix-ico-school;
    }
    .ico-class{
      @include mix-ico-class;
    }
    .ico-region{
      @include mix-ico-region;
    }
  }
}
</style>