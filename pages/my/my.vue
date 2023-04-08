<template>
  <view>
    <view class="my">
      <view class="username">
        <view class="text">
          用户:
        </view>
        <input type="text">
      </view>
      <view class="password">
        <view class="text">
          密码:
        </view>
        <input type="safe-password">
      </view>
      <button>注册</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .my {
    .username {
      display: flex;
    }

    .password {
      display: flex;
    }
  }
</style>