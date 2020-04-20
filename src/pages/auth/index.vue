<template>
  <div>
      <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
  </div>
</template>

<script>
export default {
    name: 'AppLogin',

    methods: {
        // 授权完成，调回来页
        getUserInfo() {
            // 回退一步，返回
            mpvue.navigateBack({ delta: 1 })
        }
    }
}
</script>

<style lang="less" scoped>
    button {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%);
        width: 600rpx;
    }
</style>