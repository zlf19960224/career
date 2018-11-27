var appInstance = getApp()

Page({
  data: {
    userInfo: {},
    modalAboutFlag:false
  },
  onLoad: function (options) {
    this.setData({
      userInfo: appInstance.globalData.userInfo
    })
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
 
  closeAbout: function () {
    this.setData({
      modalAboutFlag: false
    })
  }
})