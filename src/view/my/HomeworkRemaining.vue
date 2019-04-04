<template>
  <div class="HomeworkRemaining">
    <homework-remaining-header></homework-remaining-header>
    <div class="JobDetails-box">
      <div class="JobDetails-content">
        <div class="box clearFix">
          <h3 class="flowLeft">布置时间:</h3>
          <p class="flowLeft">2018/04/01 16:40</p>
        </div>
        <div class="box clearFix">
          <h3 class="flowLeft">截止时间:</h3>
          <p class="flowLeft">2018/04/01 16:40</p>
        </div>
        <div class="box clearFix">
          <h3 class="flowLeft">发送到班级</h3>
          <span class="flowRight ico-down iconfont">&#xe6b5;</span>
        </div>
      </div>
      <div class="JobDetails-content JobDetails-content2">
        <div class="box clearFix">
          <h3 class="flowLeft">学习内容</h3>
        </div>
        <div class="contents-box">
          <p class="contents">请在此处输入要发布的学习内容，让学生每天都有进步哦。</p>
          <div class="contents-boxs">
            <div class="boxs voice-box">
              <span class="iconfont">&#xe6e1;</span>
              <p>发送语音</p>
            </div>
            <div class="boxs file-box" v-if="!showPhoto">
              <span class="iconfont">&#xe609;</span>
              <p>上传文件</p>
            </div>
            <div class="boxs photos-box" v-if="showPhoto">
              <div class="photo">
                <span></span>
                <img src="" alt="">
              </div>
            </div>
            <div class="boxs more-box">
              <span class="iconfont">&#xe600;</span>
              <p>更多</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <datetime-picker></datetime-picker>
  </div>
</template>

<script>
import HomeworkRemainingHeader from '../../components/common/header/Header'
import DatetimePicker from '../../components/common/picker/DatetimePicker'
export default {
  name: 'HomeworkRemaining',
  components: {
    HomeworkRemainingHeader,
    DatetimePicker
  },
  data() {
    return {
      showPhoto: false
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .JobDetails-box{
    .JobDetails-content{
      border-bottom: px2rem(18px) solid #f4f4f4;
      .box{
        padding: px2rem(28px) px2rem(30px);
        border-bottom:  px2rem(2px) solid #f4f4f4;
        h3{
          font-size: px2rem(28px);
          line-height: px2rem(48px);
          margin-right: px2rem(20px);
        }
        p{
          font-size: px2rem(26px);
          line-height: px2rem(30px);
          padding: px2rem(9px) 0;
          color: #666666;
          max-width: px2rem(536px);
        }
        .ico-down{
          margin-top: px2rem(12px);
          color: #cccccc;
        }
      }
    }
    .JobDetails-content2,.JobDetails-content2 .box{
      border-bottom: none;
      .contents-box{
        position: relative;
        min-height: px2rem(400px);
        margin: 0 px2rem(30px);
        border: 1px solid #eeeeee;
        .contents{
          font-size: px2rem(26px);
          line-height: px2rem(40px);
          padding: px2rem(20px) px2rem(20px);
        }
       .contents-boxs{
         position: absolute;
         width: 100%;
         bottom: 0;
         left: 0;
         font-size: 0;
         .boxs{
           display: inline-block;
           width: px2rem(100px);
           height: px2rem(100px);
           border: 1px dashed #eeeeee;
           margin-left: px2rem(20px);
           margin-bottom: px2rem(20px);
           text-align: center;
           span{
             font-size: px2rem(62px);
             color: #cccccc;
           }
           p{
             font-size: px2rem(20px);
             line-height: px2rem(40px);
             color: #999999;
             text-align: center;
           }
         }
        }
      }
    }
  }
</style>