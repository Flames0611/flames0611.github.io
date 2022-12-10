Page({
  onLoad() {
    this.hzq = wx.createCameraContext()
  },
  
  startRecord() {
    this.hzq.startRecord({
      success:res=> {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.hzq.stopRecord({
      success:res=> {
        console.log('stopRecord')
        this.setData({
          cover:res.tempThumbPath,
          video:res.tempVideoPath
        })
      }
    })
  }
})