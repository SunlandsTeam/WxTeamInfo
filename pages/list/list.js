Page({
  data: {
    members: [{
      name: '权宁',
      job: '技术总监'
    }, {
      name: '王婷',
      job: '产品经理'
    }, {
      name: '董觅',
      job: '前端工程师'
    }, {
      name: '李存燕',
      job: 'PHP工程师'
    }, {
      name: '王瑶光',
      job: 'PHP工程师'
    }, {
      name: '刘翡',
      job: 'PHP工程师'
    }, {
      name: '舒心满',
      job: 'PHP工程师'
    }]
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://sunlands-team.72.sunlands/',
    //   success: res => {
    //     console.log(res.data.data)
    //     this.setData({
    //       members: res.data.data
    //     })
    //   }
    // })
  }
})