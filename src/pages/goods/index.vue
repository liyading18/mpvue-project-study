<template>
  <div class="wrapper">
      <!-- 商品图片 -->
      <swiper
        class="pics"
        circular
        indicator-dots
        indicator-color="rgba(255,255,255,.6)"
        indicator-active-color="#fff"
       >
          <swiper-item>
              <img src="/static/uploads/detail_1.jpg" alt="">
          </swiper-item>
          <swiper-item>
              <img src="/static/uploads/detail_2.jpg" alt="">
          </swiper-item>
          <swiper-item>
              <img src="/static/uploads/detail_3.jpg" alt="">
          </swiper-item>
          <swiper-item>
              <img src="/static/uploads/detail_4.jpg" alt="">
          </swiper-item>
          <swiper-item>
              <img src="/static/uploads/detail_5.jpg" alt="">
          </swiper-item>
      </swiper>
      <!-- 商品图片 -->
      <!-- 基本信息 -->
      <div class="meta">
          <p class="price">￥259</p>
          <p class="name">成啊海事局开始克莱斯勒克劳福德</p>
          <p class="shipment">快递：免运费</p>
          <span class="collect">收藏</span>
      </div>
      <!-- 基本信息 -->
  </div>
</template>

<script>
export default {

    // created() {
    //     console.log('我是goods中的created')
    // },
    mounted() {
       console.log('我是goods中的created')  
    },

    methods: {
    }

}
</script>

<style lang="less" scoped>
    .wrapper {
        margin-bottom: 100rpx;
        background-color: #f4f4f4;
    }
    .pics {
        height: 720rpx;
    }
    .meta {
        position: relative;
        padding: 0rpx 20rpx 40rpx 20rpx;
        background-color: #fff;
        .price {
            height: 80rpx;
            padding-top: 20rpx;
            font-size: 36rpx;
            color: #ea4451;
        }
        .name {
            width: 590rpx;
            font-size: 33rpx;
            color: #333;
            line-height: 1.4;
            border-right: 1rpx solid #cccccc;
        }
        .shipment {
            height: 60rpx;
            line-height: 60rpx;
            font-size: 28rpx;
            color: #9b9a9b;
        }
        .collect {
            position: absolute;
            right: 50rpx;
            bottom: 100rpx;
            color: #9b9a9b;
        }
    }
</style>