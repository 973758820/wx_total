// pages/mine/mine_setup/mine_setup.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

clearCache:function(){
  this.showModal('缓存清理','确定要清除本地缓存？',function(){
    wx.clearStorage({
      success:function(msg){
        wx.showToast({
          title: '缓存清理成功',
          duration:1000,
          mask:true,
          icon:"success"
        })
      },
      fail:function(e){
        console.log(e);
      }
    })
  });
},

showModal: function (title, content, callback) {
  wx.showModal({
    //窗口确认模板
    title: title,
    content: content,
    showCancel: true,
    cancelText: '',
    cancelColor: '#7F8389',
    confirmText: '',
    confirmColor: '#1F4BA5',
    success: function (res) {
      if (res.confirm) {
        callback && callback();//确认后执行回调函数
      }
    },
    fail: function (res) { },
    complete: function (res) { },
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