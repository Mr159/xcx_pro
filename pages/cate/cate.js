// pages/cate/cate.js
//获取app.js中数据
const app =getApp()
console.log(app)



Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:app.globalData.info,
    list:[],
    intupbase:'',
    test:''
  },
  tapDialogButton(e){
    console.log(e)
  },
  /**
   * 获取输入框的值
   */
  oninput:function(e){
     const baseValue= e.detail.value;
   //通过this.setData()将数据渲染到视图层
     this.setData({
      test:baseValue
     });
   },
   /**
   * 点击添加
   */
  onclick:function(){
    this.data.list.push(this.data.test);
    // console.log(this.data.list)
    this.setData({
      list:this.data.list,
      intupbase:''
    })
   },
  //  删除事件
  delete(e){
    
    let idx = e.currentTarget.dataset.index
    console.log(idx)
    this.data.list.splice(idx,1)
    this.setData({
      list:this.data.list
    })
  },
  // 修改事件
  modi(e){
    let idx=e.currentTarget.dataset.index
    console.log(idx);
    let title="升班了"
    //遍历全部
    // this.data.list[idx]=this.data.list[idx]+title;
    // this.setData({
    //   list:this.data.list
    // })
    //通过指定下标解析一个字符串的方式来更新某一条数据
    let tempItem = `list[${idx}]`
    this.setData({
      [tempItem]:this.data.list[idx]+title
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})