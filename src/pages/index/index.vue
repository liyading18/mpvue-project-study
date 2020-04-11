<template>
  <!-- Page下页面中的template会被构建成 .wxml文件 -->
  <div>
    <!-- 在使用mpvue开发小程序时，html标签和wxml便签混合用 -->
    <!-- mpvue中html标签与wxml标签含义一致的时候，推荐使用html标签；mpvue在构建时候会自动转换 -->

    <!-- 轮播图部分 -->
    <swiper
      indicator-dots
      indicator-color="rgba(255,255,255,.6)"
      indicator-active-color="#fff"
      interval="3000"
      autoplay
      circular
    >
      <swiper-item>
        <a href="">
          <img src="/static/uploads/banner1.png" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="">
          <img src="/static/uploads/banner2.png" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="">
          <img src="/static/uploads/banner3.png" alt="">
        </a>
      </swiper-item>
    </swiper>
    <!-- 轮播图部分 -->

  </div>
</template>

<script>
// Page下页面中的script会被构建成 .js文件
</script>

<style scoped>
/* Page 下页面中的style会被构建成 .wxss 文件 */
  swiper {
    width: 750rpx;
    height: 340rpx;
  }
  swiper img {
    width: 750rpx;
    height: 340rpx;
  }
</style>
