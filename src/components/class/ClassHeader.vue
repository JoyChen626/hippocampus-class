<template>
  <div class="ClassHeader">
    <div class="ClassList-header-box">
      <div class="ClassList-header center">
        <div class="search-box">
          <span class="search iconfont">&#xe684;</span>
          <p>搜索</p>
        </div>
        <span class="ClassList-header-title">课程列表</span>
        <div class="history-box">
          <span class="history iconfont">&#xe671;</span>
          <p>学习记录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassHeader'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .ClassList-header-box{
    background-color: $color-theme;
    .ClassList-header{
      text-align: center;
      position: relative;
      .search-box{
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: px2rem(-28px);
        span{
          font-size: px2rem(40px);
          color: white;
          line-height: px2rem(24px);
        }
        p{
          font-size: px2rem(20px);
          color: white;
        }
      }
      .ClassList-header-title{
        line-height: px2rem(80px);
        color: white;
      }
      .history-box{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: px2rem(-28px);
        span{
          font-size: px2rem(40px);
          line-height: px2rem(24px);
          color: white;
        }
        p{
          font-size: px2rem(20px);
          color: white;
        }
      }
    }
  }
</style>