<template>
 <div class="Home">
   <home-header></home-header>
   <div class="Home-video-box">
     <div class="Home-video-img" v-if="!play">
       <div class="video-img-box">
         <span class="icoControl ico-to-play iconfont" @click="toPlayVideo">&#xe642;</span>
         <!--<span class="icoControl ico-to-suspend iconfont" v-if="play">&#xe630;</span>-->
         <img class="video-img" src="" alt="">
       </div>
     </div>
     <video class="Home-video" src="" controls="controls"></video>
   </div>
   <div class="home-articles">
     <div class="Home-articles-box">
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont">&#xe6e0;</span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
     <div class="Home-articles-box">
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont">&#xe6e0;</span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
     <div class="Home-articles-box">
       <div class="Home-article1 clearFix center">
         <div class="article1-img-box flowLeft">
           <img src="../assets/images/ti_img001.jpg" alt="" class="article1-img">
         </div>
         <div class="article1-words-box flowRight">
           <p>初中物理在线学习从力学到电学初中物理在线学习从力学到电学初中物理在线学习从力学到电学</p>
           <div class="otherWords clearFix">
             <span class="timer flowLeft">2019/03/15</span>
             <div class="flowRight">
               <span class="iconfont icon-eye">&#xe6e0;</span>
               <span>786543人</span>
             </div>
           </div>
         </div>
       </div>
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont">&#xe6e0;</span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
     <div class="Home-articles-box">
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont">&#xe6e0;</span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
     <div class="Home-articles-box">
       <div class="Home-article1 clearFix center">
         <div class="article1-img-box flowLeft">
           <img src="../assets/images/ti_img001.jpg" alt="" class="article1-img">
         </div>
         <div class="article1-words-box flowRight">
           <p>初中物理在线学习从力学到电学初中物理在线学习从力学到电学初中物理在线学习从力学到电学</p>
           <div class="otherWords clearFix">
             <span class="timer flowLeft">2019/03/15</span>
             <div class="flowRight">
               <span class="iconfont icon-eye">&#xe6e0;</span>
               <span>786543人</span>
             </div>
           </div>
         </div>
       </div>
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont">&#xe6e0;</span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
     <div class="Home-articles-box">
       <div class="Home-article2">
         <div class="article2-img-box">
           <img src="../assets/images/ti_img002.jpg" alt="" class="article2-img">
         </div>
         <div class="article2-words-box center clearFix">
           <div class="flowLeft">
             <h3 class="flowLeft">精品课堂</h3>
             <p class="flowRight">初中物理在线学习从力学到电学</p>
           </div>
           <div class="flowRight">
             <span class="iconfont"></span>
             <span>786543人</span>
           </div>
         </div>
       </div>
     </div>
   </div>
   <home-nav></home-nav>
 </div>
</template>

<script>
import HomeHeader from '../components/home/HomeHeader'
import HomeNav from '../components/common/nav/Nav'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav
  },
  data() {
    return {
      play: false
    }
  },
  methods: {
    toPlayVideo() {
      this.play = true;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .Home-video-box{
    position: relative;
    width: 100%;
    height: px2rem(422px);
    .Home-video-img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      .video-img-box{
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.27%;
        background-color: lightsalmon;
      }
      .video-img{
        width: 100%;
      }
      .icoControl{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: px2rem(80px);
        color: #999999;
        margin-top: px2rem(-40px);
        margin-left: px2rem(-40px);
      }
    }
    .Home-video{
      width: 100%;
      height: 100%;
    }
  }
  .Home-articles-box{
    background-color: #f4f4f4;
    overflow: hidden;
    .Home-article1{
      display: flex;
      background: white;
      margin-top: px2rem(10px);
      margin-bottom: px2rem(10px);
      padding: px2rem(30px) px2rem(30px);
      .article1-img-box{
        width: px2rem(350px);
        height: 0;
        padding-bottom: 28.1429%;
        margin-right: px2rem(30px);
        overflow: hidden;
        border-radius: px2rem(8px);
        .article1-img{
          width: 100%;
        }
      }
      .article1-words-box{
        flex: 1;
        p{
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          line-height: px2rem(38px);
          font-size: px2rem(28px);
          margin: px2rem(16px) 0;
        }
      }
      .otherWords{
        span{
          color: #999999;
          font-size: px2rem(24px);
        }
        span:not(.iconfont){
          display: inline-block;
          line-height: px2rem(32px);
          vertical-align: middle;
        }
      }
    }
    .Home-article2{
      background: white;
      margin-bottom: px2rem(5px);
      overflow: hidden;
      .article2-img-box{
        margin: 0 px2rem(30px);
        height: 0;
        padding-top: px2rem(30px);
        padding-bottom: 56.2319%;
        border-radius: px2rem(8px);
        .article2-img{
          width: 100%;
        }
      }
      .article2-words-box{
        border-left: px2rem(8px) solid $color-theme;
        margin-bottom: px2rem(30px);
        h3,p,span{
          line-height: px2rem(40px);
        }
        h3{
          font-size: $font-size-medium;
          font-weight: bolder;
          margin-left: px2rem(10px);
        }
        p{
          font-size: $font-size-small;
          color: #666666;
          width: px2rem(380px);
          margin-left: px2rem(10px);
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        span{
          font-size: $font-size-small-s;
          color: #999999;
        }

      }
    }
  }

</style>