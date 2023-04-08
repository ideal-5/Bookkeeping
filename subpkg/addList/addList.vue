<template>
  <view class="da">
    <view class="da2">


      <view class="car">
        <view class="inp">
          <uni-data-select placeholder="类型" class="class-input" v-model="class1" :localdata="range"></uni-data-select>
        </view>

        <view class="inp">
          <input type="number" v-model="amount" placeholder="金额是多少呢">
        </view>

        <view class="inp">
          <uni-data-select placeholder="收入或支出" class="class-input" v-model="type" :localdata="range2"></uni-data-select>
        </view>

        <view class="inp">
          <input type="text" v-model="remarks" placeholder="对这个账单做点描述">
        </view>
      </view>

      <view class="btn-box">
        <button class="btn" @click="updataList">添加到账单</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        amount: 0,
        class1: 0,
        type: 0,
        remarks: '',
        range: [
          { value: 0, text: "无" },
          { value: 1, text: "食品" },
          { value: 2, text: "交通" },
          { value: 3, text: "住房" },
          { value: 4, text: "娱乐" },
        ],
        range2: [
          { value: 0, text: '支出' },
          { value: 1, text: "收入" },
        ]
      };
    },
    methods: {
      async updataList() {
        if (this.amount == 0) {
          uni.showToast({
            title: '金额必须填写'
          })
          return
        }
        let data = {
          amount: this.amount,
          class: this.range[this.class1].text,
          type: this.type === 0 ? -1 : 1,
          remarks: this.remarks,
          time: new Date()
        }
        let { data: res } = await this.$api({ url: '/updataList', method: 'POST', data })
        if (res.msg === '添加成功') {
          uni.switchTab({
            url: "/pages/list/list"
          })
        } else {
          uni.showToast({
            title: '添加失败'
          })
        }
      }
    }
  };
</script>

<style lang="scss">
  .da {
    height: 100%;
    background-color: #fffffe;
    border-top: 3px solid #e3f6f5;


    .da2 {
      display: flex;
      flex-direction: column;
      width: 80%;
      // margin-left: 10px;
      margin-left: 38px;
      margin-top: 20px;
      text-align: center;
      background-color: #ffd803;
      height: 60%;
      justify-content: space-around;
      border-radius: 10px;
      border: 3px solid black;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.12);

      .car {
        .inp {
          margin: 8px 3px;
          border: 3px solid black;
          padding: 5px;
          border-radius: 10px;
        }
      }

      // 按钮默认样式
      .btn {
        display: inline-block;
        padding: 10px 20px;
        border: 2px solid #000;
        border-radius: 20px;
        background-color: #272343;
        color: #fff;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>