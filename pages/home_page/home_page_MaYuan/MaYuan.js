// pages/home_page/home_page_MaYuan/MaYuan.js
Page({
  data: {
    // item: {
    //   headimg: "../../images/kind/windsurf-1.png",
    //   dictum: "给自己设计游戏规则和边界，\n不断地获得正反馈"
    // },
    list: [
      {
        id: 'zero',
        name: '第一章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595e77bba22b9d006b6139f7'
          },
          {
            zh: '第二节',
            url: '../article/article?id=595e77bba22b9d006b6139f7'
          },
          {
            zh: '第三节',
            url: '../article/article?id=595e77bba22b9d006b6139f7'
          },
          {
            zh: '第四节',
            url: '../article/article?id=595e77bba22b9d006b6139f7'
          },
          {
            zh: '第五节',
            url: '../article/article?id=595e77bba22b9d006b6139f7'
          }
        ]
      }, {
        id: 'new',
        name: '第二章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第二节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第三节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }
        ]
      }, {
        id: 'high',
        name: '第三章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第二节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第三节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }
        ]
      }, {
        id: 'competent',
        name: '第四章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第二节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第三节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第四节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }
        ]
      }, {
        id: 'proficient',
        name: '第五章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第二节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第三节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第四节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }
        ]
      }, {
        id: 'master',
        name: '第六章',
        open: false,
        pages: [
          {
            zh: '第一节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第二节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第三节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }, {
            zh: '第四节',
            url: '../article/article?id=595919580ce4630058aa9a51'
          }
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
