<template>
  <div class="ConfirmationInformation">
    <con-infor-header></con-infor-header>
    <con-infor-goods :goods="goods"></con-infor-goods>
    <div class="conInfor-coupon-box clearFix">
      <span class="coupon-word flowLeft">优惠卷</span>
      <span class="coupon-number flowLeft">0张可用</span>
      <span class="iconfont coupon-forward flowRight">&#xe616;</span>
    </div>
    <div class="conInfor-coupon-box clearFix">
      <span class="coupon-word flowLeft">商品金额</span>
      <span class="coupon-money flowRight">￥{{totalMoney}}</span>
    </div>
    <div class="conInfor-totalMoney-box">
      <span class="totalMoney-word flowLeft">实付金额:</span>
      <span class="totalMoney-money-logo flowLeft">￥</span>
      <span class="totalMoney-money flowLeft">{{totalMoney}}</span>
      <span class="totalMoney-placeOrder flowRight">提交订单</span>
    </div>
    <mt-popup v-model='regionVisible' position='bottom' class="showCoupons-popup">
      <div class="showCoupons-button-box clearFix">
        <span>选择优惠卷</span>
        <span class="iconfont ico-close flowRight">X</span>
      </div>
      <div class="coupons-lists">
        <div class="coupons center">
          <div class="coupons-top clearFix">
            <div class="coupons-left flowLeft">
              <span>8折</span>
            </div>
            <div class="coupons-right flowRight">
              <p class="top"><span>1234</span>选择优惠卷选择优惠卷</p>
              <p>选择优惠卷选择优惠卷选择优惠卷</p>
            </div>
          </div>
          <div class="coupons-bottom">
            <p>选择优惠卷选择优惠卷</p>
          </div>
        </div>
        <div class="coupons center">
          <div class="coupons-top clearFix">
            <div class="coupons-left flowLeft">
              <span>8折</span>
            </div>
            <div class="coupons-right flowRight">
              <p class="top"><span>1234</span>选择优惠卷选择优惠卷</p>
              <p>选择优惠卷选择优惠卷选择优惠卷</p>
            </div>
          </div>
          <div class="coupons-bottom">
            <p>选择优惠卷选择优惠卷</p>
          </div>
        </div>
        <div class="coupons center">
          <div class="coupons-top clearFix">
            <div class="coupons-left flowLeft">
              <span>8折</span>
            </div>
            <div class="coupons-right flowRight">
              <p class="top"><span>1234</span>选择优惠卷选择优惠卷</p>
              <p>选择优惠卷选择优惠卷选择优惠卷</p>
            </div>
          </div>
          <div class="coupons-bottom">
            <p>选择优惠卷选择优惠卷</p>
          </div>
        </div>
      </div>
      <div class="coupons-button center">
        <span>确定</span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import ConInforHeader from '../../components/common/header/Header'
import ConInforGoods from '../../components/buy/GoodsLists'
export default {
  name: 'ConfirmationInformation',
  components: {
    ConInforHeader,
    ConInforGoods
  },
  data() {
    return {
      goods: [
        {
          'img': '',
          'title': '红红火火恍恍惚惚红红火火恍恍惚惚',
          'type': '视频',
          'money': '240.5',
          'id': '1'
        }
      ],
      totalMoney: 299,
      regionVisible: true
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ConfirmationInformation{
    height: 100%;
    background-color: #f3f3f3;
    .conInfor-coupon-box{
      background-color: white;
      padding: px2rem(30px);
      margin-bottom: px2rem(10px);
      span{
        display: inline-block;
        line-height: px2rem(60px);
      }
      .coupon-word{
        color: #555555;
        margin-right: px2rem(10px);
        font-size: px2rem(28px);
      }
      .coupon-number{
        background-color: #b6b6b6;
        font-size: px2rem(22px);
        text-align: center;
        border-radius: px2rem(8px);
        width: px2rem(130px);
        color: white;
      }
      .coupon-forward{
        color: #999999;
      }
      .coupon-money{
        font-size: px2rem(28px);
        color: $color-theme;
      }
    }
    .conInfor-totalMoney-box{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      background-color: white;
      span{
        display: inline-block;
        line-height: px2rem(100px);
      }
      .totalMoney-word{
        margin-left: px2rem(35px);
        font-size: px2rem(30px);
      }
      .totalMoney-money-logo{
        font-size: px2rem(26px);
        color: $color-theme;
        margin-left: px2rem(10px);
      }
      .totalMoney-money{
        font-size: px2rem(34px);
        color: $color-theme;
      }
      .totalMoney-placeOrder{
        font-size: px2rem(32px);
        color: white;
        text-align: center;
        background-color: $color-theme;
        width: px2rem(259px);
      }
    }
    .showCoupons-popup{
      width: 100%;
      background-color: white;
      border-bottom: 1px solid #f3f3f3;
      .showCoupons-button-box{
        span{
          display: inline-block;
          line-height: px2rem(105px);
          font-size: px2rem(30px);
          margin: 0 px2rem(30px);
        }
      }
      .coupons-lists{
        max-height: px2rem(800px);
        overflow: scroll;
        .coupons{
          background-color: $color-theme;
          border-radius: px2rem(8px);
          margin-bottom: px2rem(10px);
          .coupons-top{
            border-bottom: 1px dashed #ffffff;
            display: flex;
            .coupons-left{
              border-right: 1px dashed #ffffff;
              text-align: center;
              span{
                display: inline-block;
                line-height: px2rem(170px);
                font-size: px2rem(64px);
                font-weight: bolder;
                color: white;
                width: px2rem(170px);
              }
            }
            .coupons-right{
              flex: 1;
              p{
                line-height: px2rem(62px);
                font-size: px2rem(26px);
                color: white;
                padding-left: px2rem(30px);
              }
              .top{
                margin-top: px2rem(25px);
                span{
                  display: inline-block;
                  font-size: px2rem(22px);
                  color: $color-theme;
                  width: px2rem(80px);
                  height: px2rem(45px);
                  background-color: white;
                  text-align: center;
                  line-height: px2rem(45px);
                  border-radius: px2rem(4px);
                  margin-right: px2rem(8px);
                }
              }
            }
          }
          .coupons-bottom{
            line-height: px2rem(60px);
            color: white;
            font-size: px2rem(24px);
            padding-left: px2rem(30px);
          }
        }
      }
    }
    .coupons-button{
      padding: px2rem(30px) 0;
      span{
        display: inline-block;
        width: 100%;
        line-height: px2rem(90px);
        border-radius: px2rem(10px);
        background-color: $color-theme;
        color: white;
        text-align: center;
        font-size: px2rem(32px);
      }
    }
  }
</style>