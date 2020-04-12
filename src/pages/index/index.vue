<template>
  <!-- Page下页面中的template会被构建成 .wxml文件 -->
  <div>
    <!-- 在使用mpvue开发小程序时，html标签和wxml便签混合用 -->
    <!-- mpvue中html标签与wxml标签含义一致的时候，推荐使用html标签；mpvue在构建时候会自动转换 -->

    <!-- 自定义搜索组件 -->
    <search />
    <!-- 自定义搜索组件 -->

    <!-- 轮播图部分 -->
    <swiper
      indicator-dots
      indicator-color="rgba(255,255,255,.6)"
      indicator-active-color="#fff"
      interval="3000"
      autoplay
      circular
    >
      <swiper-item v-for="item in bannerList" :key="item.goods_id">
        <a href="">
          <img :src="item.image_src" alt="">
        </a>
      </swiper-item>
    </swiper>
    <!-- 轮播图部分 -->

    <!-- 导航区 -->
    <div class="navs">
      <a href="">
        <img src="/static/uploads/icon_index_nav_4@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_3@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_2@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_1@2x.png" alt="">
      </a>
    </div>
    <!-- 导航区 -->

  </div>
</template>

<script>
// Page下页面中的script会被构建成 .js文件
import search from '@/components/search.vue'

export default {

  // 声明注册使用自定义组件
  components: {
    search
  },

  data() {
    return {
      bannerList: []  // 轮播图
    }
  },

  created() {
    // 在mpvue中使用API时，要将命名空间改成 mpvue
    // 即wx.request  =>  mpvue.request
    mpvue.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      method: 'GET',
      success: (info) =>  {
        this.bannerList = info.data.message
      }
    })
  },

  methods: {
  }
}
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
  .navs {
    display: flex;
    height: 194rpx;
    padding: 30rpx 45rpx;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .navs a {
    width: 128rpx;
  }
</style>
