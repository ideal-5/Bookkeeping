<template>
  <view class="container">
    <view class="form-item">
      <text class="label">类别</text>
      <select class="select" v-model="category">
        <option value="food">食品</option>
        <option value="transportation">交通</option>
        <option value="housing">住房</option>
        <option value="entertainment">娱乐</option>
        <option value="none">无</option>
      </select>
    </view>
    <view class="form-item">
      <text class="label">时间</text>
      <picker class="picker" mode="date" v-model="date">
        <view class="picker-content">{{ date }}</view>
      </picker>
    </view>
    <view class="form-item">
      <text class="label">金额</text>
      <input class="input" type="number" v-model="amount" placeholder="请输入金额" />
    </view>
    <view class="form-item">
      <text class="label">描述</text>
      <textarea class="textarea" v-model="description" placeholder="请输入描述"></textarea>
    </view>
    <view class="form-item">
      <text class="label">收支</text>
      <select class="select" v-model="type">
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
    </view>
    <button class="submit-btn">提交</button>
  </view>
</template>


<script>
  export default {
    data() {
      return {
        category: '',
        date: '',
        amount: '',
        description: '',
        type: '',
      };
    },
  };
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .form-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20rpx;

      .label {
        width: 120rpx;
        font-size: 32rpx;
      }

      .select,
      .picker,
      .input,
      .textarea {
        flex: 1;
        height: 60rpx;
        font-size: 28rpx;
        padding: 0 20rpx;
        border: none;
        border-radius: 10rpx;
        background-color: #f5f5f5;
        -webkit-appearance: none;
      }

      .select::-ms-expand {
        display: none;
      }

      .picker-content {
        text-align: right;
      }

      .textarea {
        height: 120rpx;
        padding: 10rpx 20rpx;
      }
    }

    .submit-btn {
      width: 80%;
      height: 80rpx;
      margin-top: 40rpx;
      background-color: #FFC107;
      border: none;
      border-radius: 10rpx;
      font-size: 32rpx;
      color: #fff;
    }
  }
</style>