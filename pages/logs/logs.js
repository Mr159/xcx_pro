//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    usersData:[]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  getmockData(){
      wx.request({
      url: 'https://xxx.com/users',
      header:{
        'content-type' : 'application/text'
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          usersData:res.data
        })
      }
    })
  }
})
