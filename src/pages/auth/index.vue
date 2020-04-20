<template>
  <div>
      <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
      <button type="primary" @click="getAddress">添加地址</button>
      <span>{{ addressInfo }}</span>
  </div>
</template>

<script>
export default {
    name: 'AppLogin',

    data() {
        return {
            address: null
        }
    },

    computed: {
        addressInfo() {
            return this.address && this.address.cityName + this.address.countyName + this.address.detailInfo
        }
    },

    methods: {
        // 授权完成，调回来页
        getUserInfo() {
            // 回退一步，返回
            mpvue.navigateBack({ delta: 1 })
        },

        getAddress() {
            var _self = this
            mpvue.chooseAddress({
                success(res) {
                    console.log('我的地址信息', res)
                    _self .address = res
                    console.log('this.address', _self .address)
                }
            })
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