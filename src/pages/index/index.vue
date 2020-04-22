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
        <!-- 这里之所以能写成page/goods/main，是因为在构建的时候，会将index.vue转换成main.wxml -->
        <a :href="'/pages/goods/main?id='+item.goods_id">
          <img :src="item.image_src" alt="">
        </a>
      </swiper-item>
    </swiper>
    <!-- 轮播图部分 -->

    <!-- 获取用户信息 -->
    <!-- 此按钮配合wx.getUserInfo使用 -->
    <!-- 注意：此按钮的open-type属性 -->
    <button
      type="primary"
      open-type="getUserInfo"
      style="margin: 40rpx"
      @getuserinfo="getInfo"
    >获取用户授权</button>

    <button type="primary" style="margin: 40rpx" @click="getSettingInfo">购买该商品</button>

    <!-- 导航区 -->
    <div class="navs">
      <a href="" v-for="nav in navList" :key="nav.name">
        <img :src="nav.image_src"  alt="">
      </a>
    </div>
    <!-- 导航区 -->

    <!-- 楼层区 -->
    <div class="floors">
      <div class="floor"  v-for="(floor, key) in floorList" :key="key">
        <div class="title">
           <img :src="floor.floor_title.image_src" alt="">
        </div>
        <div class="items">
          <img
            v-for="product in floor.product_list"
            :key="product.name"
            :src="product.image_src"
            alt=""
          >
        </div>
      </div>
    </div>
    <!-- 楼层区 -->

  </div>
</template>

<script>
// Page下页面中的script会被构建成 .js文件
import search from '@/components/search.vue'  //  引入搜索组件
import request from '@/utils/request'  // 引入封装的mpvue的请求方法

export default {

  // 声明注册使用自定义组件
  components: {
    search
  },

  data() {
    return {
      bannerList: [],  // 轮播图
      navList: [],  // 首页导航列表 
      floorList: [],  // 楼层数据
    }
  },

  created() {
    // 登录api(微信提供)-获取登录凭证code 
    mpvue.login({
      success(res) {
        console.log('登录api返回的res', res)

        // 获取用户信息wx.getUserInfo（微信提供）- (iv等数据)
        // 注意：wx.getUserInfo这个接口长期被滥用（强制出现弹窗获取用户信息，用户体验不佳）
        // 现腾讯改为：只有提供按钮主动才能出现授权弹窗
        // mpvue.getUserInfo({
        //   success(info) {
        //     console.log('获取用户信息info', info)
        //   }
        // })
      }
    })

    //   // 在mpvue中使用API时，要将命名空间改成 mpvue
    //   // 即wx.request  =>  mpvue.request

    //   this.getBannerList()  // 获取轮播图资源 
    //   this.getNavList()  // 获取导航资源
    //   this.getFloorList()  // 获取楼层数据

  },
  mounted() {
    // 在mpvue中使用API时，要将命名空间改成 mpvue
    // 即wx.request  =>  mpvue.request

    this.getBannerList()  // 获取轮播图资源 
    this.getNavList()  // 获取导航资源
    this.getFloorList()  // 获取楼层数据
  },

  onReachBottom() {
    // 距离底部50px时会被触发
    // 如果想自己设置距离: 可以在小程序文档-小程序配置-全局配置-window-onReachBottomDistance
      console.log('我快到底部了')
  },

  async onPullDownRefresh() {
    console.log("我被下拉了")
    await this.getBannerList()  // 获取轮播图资源 
    await this.getNavList()  // 获取导航资源
    await this.getFloorList()  // 获取楼层数据
    mpvue.stopPullDownRefresh()  // 停止下拉刷新
  },

  // 监听用户分享操作
  onShareAppMessage() {
    return {
      // return 返回一个对象，return的对象内容即为自定义内容
      title: '一起来玩游戏吧',
      path: 'pages/index/main',
      imageUrl: 'https://www.zhengzhicheng.cn/pyg/pic_floor01_1@2x.png'
    }
  },

  // 除了分享之外，还可以在API-转发-相应的api

  methods: {
    // 按钮获取用户信息事件
    getInfo(ev) {
      console.log('有人申请授权了')
      console.log('ev', ev)
      // 获取用户信息wx.getUserInfo（微信提供）- (iv等数据)
      // 注意：wx.getUserInfo这个接口长期被滥用（强制出现弹窗获取用户信息，用户体验不佳）
      // 现腾讯改为：只有提供按钮主动才能出现授权弹窗
      mpvue.getUserInfo({
        success(info) {
          console.log('获取用户信息info', info)
        }
      })
    },

    // 获取轮播图
    async getBannerList() {
      try {
        const { message } = await request({
          url: '/api/public/v1/home/swiperdata'
        })
        this.bannerList = message
      } catch(err) {
        console.log(err)
      }
    },

    // 获取首页导航数据
    async getNavList() {
      try {
        const { message } = await request({
          url: '/api/public/v1/home/catitems'
        })
        this.navList = message
      } catch(err) {
        console.log(err)
      }
    },

    // 获取楼层数据
    async getFloorList() {
      try {
        const { message } = await request({
          url: '/api/public/v1/home/floordata'
        })
        this.floorList = message
      } catch(err) {
        console.log(err)
      }
    },

    // 获取用户是否授权的信息
    getSettingInfo() {
      // 为验证获取授权getSetting流程所伪造
      mpvue.setStorage({
        key: 'token',
        data: 'liyadingweizhaungdeshouquan'
      })


      // 1. 是否登录
      if (mpvue.getStorageSync('token')) {
        // 检测用户是否曾经授权过
        mpvue.getSetting({ 
          success(info) {
            console.log('获取授权信息info', info)
            // 因为authSetting中的 ‘scope.userInfo’ 为字符串类型，所以可以以数组形式取值
            console.log('info.authSetting', info.authSetting['scope.userInfo'])
            if(!info.authSetting['scope.userInfo']) {
              // 如果没有授权，请去点击按钮，进行授权申请
              mpvue.navigateTo({
                url: '/pages/auth/main'
              })
              return;
            }

            // 获取用户信息
            mpvue.getUserInfo({
              success(info) {
                console.log('用户信息', info)
                // 接着登录步骤
                // ...
              }
            })
          }
        })

      }
    }
  }
}
</script>

<style scoped lang="less">
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
  .floors {
    .title {
      width: 750rpx;
      height: 60rpx;
      background-color: #f4f4f4;
      padding-top: 20rpx;
    }
    .items {
      padding: 20rpx 15rpx;
      overflow: hidden;

      img {
        float: left;
        width: 230rpx;
        height: 188rpx;
        margin-right: 10rpx;
        margin-bottom: 10rpx;
      }
      img:nth-child(2n+1) {
        margin-right: 0;
      }
      img:first-child {
        height: 386rpx;
        margin-right: 10px;
      }
    }
  }
</style>
