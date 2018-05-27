// pages/mine/mine.js
  var app = getApp();
  Page({
  data: {
    
    
    infos: [
      {
        content: '我的收藏', 
        url: "../mine_favorate/mine_favorate"
      },
      {
        content: '浏览记录',
        url: "../mine_favorate/mine_favorate"
      },
      {
        content: '错题历史',
        url: "../mine_favorate/mine_favorate"
      },
      {
        content: '资料上传',
        url: "../mine_favorate/mine_favorate"
      },
      {
        content: '设置',
        url: "../mine_setup/mine_setup"
      },
      {
        content: '意见反馈',
        url: "../mine_feedback/mine_feedback"
      },
      
    ]
  },
    bindViewTap: function () {
      wx.navigateTo({
        url: ''
      })
    },
    onLoad: function () {
      // console.log('onLoad')
      // var that = this
      // //调用应用实例的方法获取全局数据  
      // app.getUserInfo(function (userInfo) {
      //   //更新数据  
      //   that.setData({
      //     userInfo: userInfo
      //   })
      // })
      this.setData({
        userInfo:app.globalData.userInfo
      })
    },
    // logOff: function (e) {
    //   wx.showModal({
    //     title: '注意',
    //     content: '确认退出登录？',
    //     success: function (res) {
    //       if (res.confirm) {
    //         wx.request({
    //           url: app.url.host + app.url.logOffUrl,
    //           method: 'GET',
    //           success: function (data) {
    //             //清除token
    //             wx.removeStorageSync('Authorization');
    //             wx.removeStorageSync('User');
    //             wx.removeStorageSync('SubjectId');
    //             var toastDelay = 1000;
    //             wx.showToast({
    //               title: '退出登录成功',
    //               duration: toastDelay
    //             });
    //             setTimeout(function () {
    //               wx.redirectTo({
    //                 url: '../login/login'
    //               });
    //             }, toastDelay);

    //           },
    //           complete: null
    //         });
    //       }
    //     }
    //   }); 
    // }
 



// App({
//   onLaunch: function () {
//     //调用API从本地缓存中获取数据  
//     // var logs = wx.getStorageSync('logs') || []  
//     // logs.unshift(Date.now())  
//     // wx.setStorageSync('logs', logs)  
//   },
//     getUserInfo: function (cb) {
//       var that = this;
//       if (this.globalData.userInfo) {
//         typeof cb == "function" && cb(this.globalData.userInfo)
//       } else {
//         //调用登录接口  
//         wx.login({
//           success: function () {
//             wx.getUserInfo({
//               success: function (res) {
//                 that.globalData.userInfo = res.userInfo;
//                 typeof cb == "function" && cb(that.globalData.userInfo)
//               }
//             })
//           }
//         });
//       }
//     },
//     globalData: {
//     userInfo: null
//     }



 })  
  