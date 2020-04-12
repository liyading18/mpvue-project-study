<template>
  <div class="search">
      <div class="input-box">
          <input type="text">
      </div>
      <!-- <div class="cancel">取消</div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .search {
        padding: 20rpx 30rpx;
        background-color: #ea4451;
    }
    .search .input-box {
        position: relative;
        height: 60rpx;
    }
    .search .input-box::after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '搜索';
        display: block;
        font-size: 24rpx;
        color: #bbbbbb;
        padding-left: 50rpx;
        background-color: pink;
        background: url(https://angevilee.github.io/StaticSource/images/icon_search@2x.png) no-repeat left center;
        background-size: 32rpx;
    }
    .search input {
        background-color: #fff;
        border-radius: 8rpx;
    }
</style>