const BASE_URL = 'http://127.0.0.1:80/api'
export const myRequest = (opt) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + opt.url,
      method: opt.method || 'GET',
      data: opt.data || {},
      success: (res) => { // 成功的回调
        if (res.data.code !== '0000') { // 如果状态码不是0000就说明数据读取失败
          return uni.showToast({
            title: '数据获取失败111' + res.data.code,
          })
        }
        resolve(res) // 数据请求成功并且code==0000 就用resolve将数据返回出去可以在.then中获得
      },
      fail: (err) => { // 请求失败的回调
        return uni.showToast({
          title: '请求接口失败',
        })
        reject(err) //用reject将错误返回出去可以在.catch中获得
      }
    })
  })
}