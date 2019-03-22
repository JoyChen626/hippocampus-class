<template>
  <div class="EssentialInformation">
    <essential-information-header></essential-information-header>
    <essential-information-input :adress="adress" :showInput="showInputBox" @SomeInput="getSomeInputValue"></essential-information-input>
    <adress-picker @adressData="adressChecked"></adress-picker>
    <div class="EssentialInformation-button">
      <span @click="getInputVal">提交</span>
    </div>
  </div>
</template>

<script>
import EssentialInformationHeader from '../components/common/header/Header'
import EssentialInformationInput from '../components/common/input/Input'
import AdressPicker from '../components/common/picker/Picker'
import {MessageBox, Toast} from 'mint-ui';
export default {
  name: 'EssentialInformation',
  components: {
    EssentialInformationHeader,
    EssentialInformationInput,
    AdressPicker
  },
  data() {
    return {
      showInputBox: 5,
      adress: '',
      someValue: [],
      valueOk: false
    }
  },
  methods: {
    getSomeInputValue(data) {
      this.someValue = data;
    },
    adressChecked(adress) {
      this.adress = adress;
    },
    checkedInput() {
      if (!this.someValue.userNameText || this.someValue.userNameText == '') {
        MessageBox.alert('请填写用户名').then(action => {});
        return false;
      }
      if (!this.someValue.phoneNumberText || this.someValue.phoneNumberText == '') {
        MessageBox.alert('请填写手机号码').then(action => {});
        return false;
      }
      if (!this.someValue.checkGender || this.someValue.checkGender == '') {
        MessageBox.alert('请选择性别').then(action => {});
        return false;
      }
      if (!this.someValue.checkIdentity || this.someValue.checkIdentity == '') {
        MessageBox.alert('请选择您的身份').then(action => {});
        return false;
      }
      if (!this.someValue.schoolText || this.someValue.schoolText == '') {
        MessageBox.alert('请填写学校名称').then(action => {});
        return false;
      }
      if (!this.someValue.classText || this.someValue.classText == '') {
        MessageBox.alert('请填写班级名称').then(action => {});
        return false;
      }
      if (!this.someValue.regionText || this.someValue.regionText == '') {
        MessageBox.alert('请选择所在地区').then(action => {});
        return false;
      }
      this.valueOk = true;
    },
    getInputVal() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      }
      Toast('您的信息已提交成功');
      setTimeout(() => {
        this.$router.push({path: '/home'})
      }, 3000);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .EssentialInformation-button{
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
</style>