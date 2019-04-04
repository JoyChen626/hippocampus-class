<template>
  <div class="DatetimePicker">
    <!--<mt-popup v-model='regionVisible' id='three_level_address' v-if="regionVisible" position='bottom' class='region-popup'>-->
      <div class="pickerDemo">
        <div class="showTime">
          <div class="timeDes">
            <p>当前时间是：{{this.selectedValue}}</p>
          </div>
          <div class="selectTime" @click="selectData">选择时间</div>
        </div>
        <div class="title" v-show="showDateTime">
          <p>选择时间 : </p>
          <div class="words">
            <span>年</span><span>月</span><span>日</span><span>时</span><span>分</span>
          </div>
       </div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div class="pickerPop" @touchmove.prevent>
          <!-- 年月日时分选择 -->
          <mt-datetime-picker
            lockScroll="true"
            ref="datePicker"
            v-model="dateVal"
            class="myPicker"
            type="datetime"
            confirmText="完成"
            :startDate="startDate"
            :endDate="endDate"
            year-format="{value}"
            month-format="{value}"
            date-format="{value}"
            hour-format="{value}"
            minute-format="{value}"
            second-format="{value}"
            @confirm="dateConfirm()"
            @cancel="closePicker()"
          >
          </mt-datetime-picker>
        </div>
      </div>
    <!--</mt-popup>-->
  </div>
</template>

<script>
import {formatDateMin} from '../../../assets/javascripts/formatdate.js'
export default {
  name: 'DatetimePicker',
  data () {
    return {
      pVisible: false,
      dateVal: '', // 默认是当前日期
      selectedValue: '',
      startDate: new Date('2019-01-01'),
      endDate: new Date('2019-12-31'),
      showDateTime: false
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    selectData () { // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.selectedValue) {
        this.dateVal = this.selectedValue
      } else {
        this.dateVal = new Date()
      }
      this.$refs['datePicker'].open()
      this.showDateTime = true
    },
    dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
      this.selectedValue = formatDateMin(this.dateVal)
      this.showDateTime = true
    },
    closePicker() {
      this.showDateTime = false
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .title{
    z-index: 2500;
    position: absolute;
    bottom: px2rem(600px);
    left: 0;
    width: 100%;
    p{
      width: 86%;
      padding-left: 4%;
      margin: 0 5%;
      font-size: px2rem(30px);
      line-height: px2rem(80px);
      color: $color-theme;
      border-bottom: 1px solid $color-theme;
    }
    .words{
      font-size: 0;
      padding: 0 px2rem(30px);
      span{
        display: inline-block;
        width: 20%;
        text-align: center;
        line-height: px2rem(90px);
        font-size: px2rem(30px);
      }
    }
  }
  .pickerDemo{
    width: 100%;
    height: 50%;
    background-color: #eee;
    .showTime{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
      .timeDes{
        font-size: 0.4rem;
        color: red;
      }
      .selectTime{
        display: inline-block;
        width: 4rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background-color: #ff776d;
        color: #fff;
        font-size: 0.24rem;
        border-radius: 8px;
        margin-top: 1rem;
      }
    }
  }
  .pickerPop{
    /deep/ .mint-datetime{
      font-size: px2rem(32px);
    }
    /deep/ .picker-item{
      color: #cccccc;
      font-size: px2rem(30px);
      margin: 0 22.5%;
      padding: 0;
      width: 55%;
    }
    /deep/ .picker-selected{
      color: #333;
      font-size: px2rem(32px);
      border-bottom: px2rem(2px) solid $color-theme;
    }
    /deep/ .picker{
      position: relative;
      padding:  px2rem(180px) px2rem(30px) px2rem(90px) px2rem(30px);
      .picker-toolbar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #eee;
        height: px2rem(90px);
        .mint-datetime-action{
          color: #999;
          width: px2rem(374.5px);
          line-height: px2rem(90px);
        }
        .mint-datetime-confirm{
          color: $color-theme;
          border-left: px2rem(1px) solid #666666;
        }
      }
    }
  }
</style>