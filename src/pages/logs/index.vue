<template>
    <div>

      <!-- 如果只是单纯的获取用户头像，名称等 -->
      <div class="avatar">
        <open-data type='userAvatarUrl' class="avar-img"></open-data>
        <open-data type='userNickName'></open-data>

        <!-- 此处的联系客服是拨打电话 -->
        <div style="padding-top: 20px;">
          <span @click="handleCoact">联系客服</span>
        </div>

      </div>


    </div>
</template>

<script>

export default {
  name: 'AppCenter',

  methods: {
    handleCoact() {
      mpvue.makePhoneCall({
        phoneNumber: '15931441062'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .avatar {
    width: 200rpx;
    height: 200rpx;
    margin: 0 auto;
    text-align: center;
    .avar-img {
       width: 200rpx;
       height: 200rpx;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
</style>