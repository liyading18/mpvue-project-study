<template>
  <!-- Page下页面中的template会被构建成 .wxml文件 -->
  <div>
    <view>{{ msg }}</view>
    <button type="primary" @click="handleMsg">点击试试</button>
  </div>
</template>

<script>
// Page下页面中的script会被构建成 .js文件
import card from '@/components/card'

export default {
  data () {
    return {
      msg: 'Hello Word!'
    }
  },

  components: {
    card
  },

  // 原样写小程序页面生命周期钩子
  onLoad() {
    console.log('小程序页面级别生命周期钩子')
  },

  methods: {
    handleMsg() {
      this.msg = '你好，世界！'
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
/* Page 下页面中的style会被构建成 .wxss 文件 */
</style>
