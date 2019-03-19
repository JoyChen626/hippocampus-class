<template>
  <div class="Header">
    <div class="header-box center">
      <span class="Header-back" @click="routerback"></span>
      <span class="Header-title">{{this.$route.meta.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .Header{
    background: $color-theme;
    .header-box{
      position: relative;
      text-align: center;
      .Header-back{
        position: absolute;
        @include mix-ico-back;
        left: 0;
        top: 50%;
        margin-top: px2rem(-17.5px);
      }
      .Header-title{
        line-height: px2rem(80px);
        color: $color-text;
        font-size: $font-size-medium-x;
      }
    }
  }

</style>