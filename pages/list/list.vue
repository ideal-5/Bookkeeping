<template>
  <view class="da1">

    <view class="top">
      <view class="yi">
        <view>{{jia.toFixed(2)}}</view>
        <view class="zi">收入</view>
      </view>
      <view>
        <view>{{jian.toFixed(2)}}</view>
        <view class="zi">支出</view>
      </view>
      <button class="btn" @click="goAddList">记账</button>
    </view>
    <view class="item-box">
      <view class="item" v-for="(item,i) in list" :key="item._id">
        <view class="item__title">
          <view>{{item.time}}</view>
        </view>
        <view class="item__content">
          <view>{{item.class}}</view>
          <view>{{item.amount*item.type}}</view>
        </view>
      </view>
    </view>
  </view>

</template>

<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        list: [],
        jia: 0,
        jian: 0
      };
    },
    onLoad() {
      this.getList()
    },
    methods: {
      async getList() {
        let { data: { data } } = await this.$api({ url: '/list', })
        data.forEach((value, index, arr) => {
          value.time = moment(value.time).format('YYYY年MM月DD');
          if (value.type === -1) {
            this.jian += value.amount
          }
        })
        // let time = moment(data).format('YYYY-MM-DD HH:mm:ss');
        // const dateStr = '2023-04-06T06:52:01.098Z';
        // const year = moment(dateStr).format('YYYY'); // '2023'
        // const month = moment(dateStr).format('MM'); // '04'
        this.list = data
        console.log(data);
      },
      goAddList() {
        uni.navigateTo({
          url: '/subpkg/addList/addList'
        })
      }
    }
  }
</script>

<style lang="scss">
  .da1 {
    height: 100%;
    background-color: #004643;

    .top {
      display: flex;
      // justify-content: center;
      align-items: center;
      // justify-content: space-around;
      padding: 10px 0;
      color: #f9bc60;

      view {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
      }

      .yi {
        margin-left: 10px;
      }

      .zi {
        font-size: 12px
      }

      .btn {
        font-size: 16px; // 设置字体大小
        padding: 3px 15px; // 设置内边距
        border-radius: 10px; // 设置边框圆角
        background: #ff7f50; // 设置背景颜色
        color: #fff; // 设置文字颜色
        position: relative; // 设置相对定位
        margin-right: 30px;
        overflow: hidden; // 设置隐藏溢出内容

        &::before {
          content: ""; // 设置伪元素的内容为空
          position: absolute; // 设置绝对定位
          top: -50%; // 上方溢出部分的高度
          left: 0; // 左侧对齐
          width: 100%; // 宽度为100%
          height: 100%; // 高度为100%
          background: rgba(255, 255, 255, 0.3); // 伪元素的背景颜色
          transform: skewY(-45deg); // 设置skew变形
          transition: all 0.3s ease; // 过渡效果
        }

        &::after {
          content: ""; // 设置伪元素的内容为空
          position: absolute; // 设置绝对定位
          bottom: -50%; // 下方溢出部分的高度
          left: 0; // 左侧对齐
          width: 100%; // 宽度为100%
          height: 100%; // 高度为100%
          background: rgba(255, 255, 255, 0.3); // 伪元素的背景颜色
          transform: skewY(45deg); // 设置skew变形
          transition: all 0.3s ease; // 过渡效果
        }

        &:hover::before,
        &:hover::after {
          top: 0; // 鼠标悬停时，伪元素的位置调整到与按钮对齐
        }

        &:hover::before {
          left: -50%; // 鼠标悬停时，左侧伪元素向左偏移
        }

        &:hover::after {
          left: 50%; // 鼠标悬停时，右侧伪元素向右偏移
        }

        &:active::before,
        &:active::after {
          top: 0; // 鼠标点击时，伪元素的位置调整到与按钮对齐
        }

        &:active::before {
          left: 0; // 鼠标点击时，左侧伪元素向左偏移
        }

        &:active::after {
          left: 0; // 鼠标点击时，右侧伪元素向右偏移
        }
      }

    }

    .item-box {
      .item {
        background-color: #004643;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.12);
        padding: 15px;
        margin: 3px 0;
        border: 2px solid black;


        &__title {
          font-size: 16px;
          // font-weight: bold;
          width: 130px;
          text-align: center;
          margin-bottom: 10px;
          background-color: #e16162;
          border-radius: 10px;
          padding: 5px;
        }

        &__content {
          font-size: 14px;
          color: #f9bc60;
          display: flex;
          justify-content: space-between;
          font-size: 16px;
        }
      }
    }
  }
</style>