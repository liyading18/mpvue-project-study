<script>
// App.vue 中的script会被构建成app.js
export default {
  // 原样子写小程序的生命周期钩子
  onLaunch() {
    console.log('小程序-mpvue的全局onLaunch')
  }
}
</script>

<style>
  /* App,vue 中的style会被构建成小程序的 app.wxss */
</style>
