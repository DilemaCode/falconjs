DashboardApp.hashRoute({
  app: _dashboard,
  initialRoute: '/Dashboard',
  routes: {
    '/Dashboard': {
      page: _dashboard,
      animateIn: {
        name: 'fadeInUp',
        duration: '1s',
      },
      animateOut: {
        name: 'fadeOut',
        duration: '0.3s',
      }
    },
    '/Buttons': {
      page: _buttons,
      animateIn: {
        name: 'fadeInDown',
        duration: '1s',
      },
      animateOut: {
        name: 'fadeOut',
        duration: '0.3s',
      }
    },
    '/Popups': {
      page: _popups,
      animateIn: {
        name: 'fadeInUp',
        duration: '1s',
      },
      animateOut: {
        name: 'fadeOutRight',
        duration: '0.3s',
      }
    },
    '/pablo': {
      page: _pablo,
      animateIn: {
        name: 'fadeInUp',
        duration: '1s',
      },
      animateOut: {
        name: 'fadeOutRight',
        duration: '0.5s',
      }
    },
    '/forms': _forms,
  },
})



// avengers_page()