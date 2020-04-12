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
      <a href="" v-for="item in navList" :key="item.name">
        <img :src="item.image_src"  alt="">
      </a>
    </div>
    <!-- 导航区 -->

  </div>
</template>

<script>
// Page下页面中的script会被构建成 .js文件
import search from '@/components/search.vue'  //  引入搜索组件
import request from '@/utils/request'

export default {

  // 声明注册使用自定义组件
  components: {
    search
  },

  data() {
    return {
      bannerList: [],  // 轮播图
      navList: [],  // 首页导航列表 
    }
  },

  created() {
    // 在mpvue中使用API时，要将命名空间改成 mpvue
    // 即wx.request  =>  mpvue.request

    this.getBannerList()  // 获取轮播图资源 
    this.getNavList()  // 获取导航资源

  },

  methods: {
    // 获取轮播图
    async getBannerList() {
      try {
        const { message } = await request('https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata')
        this.bannerList = message
      } catch(err) {
        console.log(err)
      }
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      //   method: 'GET',
      //   success: (info) =>  {
      //     this.bannerList = info.data.message
      //   }
      // })
    },

    // 获取首页导航数据
    async getNavList() {
      try {
        const { message } = await request('https://www.zhengzhicheng.cn/api/public/v1/home/catitems')
        this.navList = message
      } catch(err) {
        console.log(err)
      }
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
      //   method: 'GET',
      //   success: (info) => {
      //     this.navList = info.data.message
      //   }
      // })
    }
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
