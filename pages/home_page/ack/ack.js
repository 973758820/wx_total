// pages/welcome.js
Page({
  getProfile(res) {
    console.log(res)
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],

  },
  jmp_course: function (e) {
    wx.navigateTo({
      url: '../home_page/home_page_MaYuan/MaYuan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  turnto_: function (e) {

  },

  search_input: function (event) {
    var val = event.detail.value;
    console.log(val);
    this.data.keyboardInputValue = val;
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange: function (e) {
    this.setData({
      interval: e.detail.data
    })
  },

  durationChange: function (e) {
    this.setData({
      duration: e.detail.data
    })
  },


  click_input: function (e) {

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