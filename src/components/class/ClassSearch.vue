<template>
  <div class="ClassSearch">
    <div class="header-box center clearFix">
      <div class="input-box flowLeft">
        <span class="iconfont ico-search">&#xe615;</span>
        <input type="text" @blur="inputData" v-model="searchText" class="search-input" placeholder="请输入课程名称">
      </div>
      <span class="search-cancel flowRight" @click="returnBack">取消</span>
    </div>
    <div class="full1"></div>
    <div class="box center">
      <h3>热门搜索</h3>
      <ul class="box-ul">
        <li class="box-li" v-for="(item,index) in hotData" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="full2 center"></div>
  <div class="box center" v-show="historyData.length">
      <h3>历史搜索</h3>
      <ul class="box-ul">
        <ul class="box-ul">
          <li class="box-li" v-for="(item,index) in historyData" :key="index">{{item.name}}</li>
        </ul>
      </ul>
    </div>
    <div class="clearHistory" @click="clearInput" v-show="historyData.length">
      <span class="iconfont">&#xe637;</span>
      <span>清除历史搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassSearch',
  data() {
    return {
      searchText: '',
      hotData: [
        {'name': '高中物理'},
        {'name': '高中化学'},
        {'name': '力学'},
        {'name': '科学'},
        {'name': '酸和碱'},
        {'name': '初中化学'},
        {'name': '氧气'}
      ],
      historyData: [
        {'name': '科学'},
        {'name': '酸和碱'},
        {'name': '初中化学'}
      ]
    }
  },
  methods: {
    clearInput() {
      this.historyData = [];
    },
    inputData() {
      let text = this.searchText;
      var pattern = new RegExp("[\".'<>&]");
      var result = text.match(pattern);
      if (result) {
        alert('填写内容中含有非法字符(< > \' " &),请重新填写');
      }
    },
    returnBack() {
      this.$emit('back', false)
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .ClassSearch {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: white;
    .header-box {
      padding: px2rem(25px) 0;
      .input-box{
        background-color: #f3f3f3;
        border-radius: px2rem(32.5px);
        color: #999999;
        display: flex;
        width: px2rem(620px);
        span {
          display: inline-block;
          font-size: px2rem(28px);
          line-height: px2rem(28px);
          vertical-align: middle;
        }
        .ico-search {
          margin: px2rem(18.5px) px2rem(20px);
        }
        .search-input{
          flex: 1;
          vertical-align: middle;
          line-height: px2rem(24px);
          height: px2rem(24px);
          padding: px2rem(20.5px) 0;
        }
      }
      .search-cancel {
        font-size: px2rem(24px);
        line-height: px2rem(58px);
        margin-left: px2rem(12px);
        color: #999999;
      }
    }
    .full1{
      background-color: #f3f3f3;
      height: px2rem(20px);
    }
    .box{
      h3{
        font-size: px2rem(26px);
        color: #666666;
        line-height: px2rem(26px);
        padding: px2rem(32px) 0 px2rem(30px) 0;
      }
      .box-ul{
        font-size: 0;
        .box-li{
          display: inline-block;
          font-size: px2rem(28px);
          margin: px2rem(10px) px2rem(25px) px2rem(10px) 0;
          padding: 0 px2rem(30px);
          border: 1px solid #f3f3f3;
          color: #999999;
          line-height: px2rem(68px);
        }
      }
    }
    .full2{
      background-color: #f3f3f3;
      height: px2rem(2px);
    }
    .clearHistory{
      margin-top: px2rem(180px);
      text-align: center;
      font-size: px2rem(28px);
      color: #999999;
    }
  }

</style>