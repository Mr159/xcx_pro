// pages/rank/rank.js
let { movie250 }=require("../../api/urls.js")
Page({
  data: {
    list:[],
    page:1,  //默认从1开始
    count:10,  //默认加载5条数据
    flag:true   //防止网速慢的时候反复请求
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getMovieList()
  },
  //获取电影列表数据
  getMovieList(){
    this.setData({
      flag:false
    })
    //先显示loading动画
    wx.showLoading({
      title: '玩命加载中...',
    })
    let {page,count,list}=this.data;
      wx.request({
      url: movie250,
      header:{
        'content-type' : 'application/text'
      },
      data:{
        start:(page-1)*count,
        count:count
      },
      success:(res)=>{
        console.log(res)
        if(res.statusCode===200){
          page++;
          list=list.concat(res.data.subjects)
          this.setData({
            list:list,
            page:page,
            flag:true
          })
          wx.hideLoading({
            complete: (res) => {},
          })
        }
      }
    })
  },
  //实现上拉加载更多
  onReachBottom(){
    if(this.data.flag){
      this.getMovieList()
    }
    
  },
   //生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },
  //用户点击右上角分享
  onShareAppMessage: function () {

  }
})