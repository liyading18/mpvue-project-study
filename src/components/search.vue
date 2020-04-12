<template>
  <div class="search" :class="{ focused: focused }">
      <div class="input-box">
          <input type="text" :placeholder="placeholder" @focus="getSearch">
      </div>
      <div class="cancel" @click="cancelSearch">取消</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            focused: false,
            placeholder: ''
        }
    },

    methods: {
        // 获得焦点搜索
        getSearch() {
            this.focused = true
            this.placeholder = '请输入你想要的商品'
        },
        // 取消焦点搜索
        cancelSearch() {
            this.focused = false
            this.placeholder = ''
        }
    } 
}
</script>

<style>
    .search {
        display: flex;
        padding: 20rpx 30rpx;
        background-color: #ea4451;
    }
    .search .input-box {
        position: relative;
        flex: 1;
        height: 60rpx;
    }
    .search .cancel {
        display: none;
        text-align: right;
        line-height: 60rpx;
        width: 100rpx;
        font-size: 30rpx;
        color: #333;
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
    .search .input-box::before {
        position: absolute;
        left: 32rpx;
        top: 50%;
        transform: translate(0, -50%);
        content: '';
        display: none;
        height: 30rpx;
        width: 30rpx;
        padding-left: 50rpx;
        background-color: pink;
        background: url(https://angevilee.github.io/StaticSource/images/icon_search@2x.png) no-repeat left center;
        background-size: 32rpx;
    }
    .search input {
        padding-left: 75rpx;
        font-size: 25rpx;
        background-color: #fff;
        border-radius: 8rpx;
    }
    /* 第二种状态 */
    .search.focused {
       background-color: #eee;
    }
    .search.focused .input-box::after {
        display: none;
    }
    .search.focused .cancel {
        display: block;
    }
    .search.focused .input-box::before {
        display: block;
    }
</style>