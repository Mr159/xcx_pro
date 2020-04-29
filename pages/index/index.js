//index.js
//获取应用实例
const app = getApp();


Page({
  data: {
    date: '',
    show: true,
    dialogData:'',
    color:"#0f0",
    motto: 'Hello World',
    title:'小程序',
    text:{id:1001,name:"马永民"},
    text2:{title:"测试标题"},
    users: [
      {id:1,name:"夏末你",age:20,title:"凸凹皮"},
      {id:2,name:"阿娜尔",age:20,title:"凸凹皮"},
      {id:3,name:"包淑君",age:20,title:"凸凹皮"},
    ],
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  delete(e){
     var idx= e.currentTarget.dataset.index
      console.log(idx)
      //删除指定下标的数据
      this.data.users.splice(idx,1)
      //视图更新
      this.setData({
        users:this.data.users
      })
  },
  //监听并接受dialog传递过来的数据
  getsend(e){
    console.log(e.detail)
    this.setData({
      dialogData:e.detail
    })
  },
  //
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
       this.setData({
      show: false,
      date: this.formatDate(event.detail)
    });
  }
})
