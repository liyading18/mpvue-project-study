<template>
  <div>
      <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
      <button type="primary" @click="getAddress">添加地址</button>
      <span>{{ addressInfo }}</span>

      <!-- 地图-map -->
      <map id="map" longitude="113.324520" latitude="23.099994" scale="14" show-location style="width: 100%; height: 300px;"></map>

  </div>
</template>

<script>
export default {
    name: 'AppLogin',

    mounted() {
        // 1. 获取当前的地理位置-经纬度
        // 需要在app.json中全局配置 permission 
        // mpvue.getLocation({
        //     success(res) {
        //         console.log(res)
        //     }
        // })

        // 2. 根据经纬度转换成相应的地理位置
        // 在手机上可以具体查看，电脑上不一定能看到
        // mpvue.openLocation({
        //     latitude: 38,
        //     longitude: 120,
        //     scale: 5,
        //     success(res) {
        //         console.log('res', res)
        //     }
        // })

        // 3. 基于当前位置，选择一个具体位置
        // mpvue.chooseLocation({
        //     success(res) {
        //         console.log('res', res)
        //     }
        // })

    },

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