main = () => {
  return new Row({
    wrapStyle: 'nowrap',
    padding:'0',
    children: [
      new LeftMenu({
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 0px 30px -5px',
        background: '#1E1B18',
        position: 'relative', 
        options: {
          background: '',
          color: '',
          hoverBackground: '#ee321f',
          hoverColor: '',
          activeBackground: '#ee321f',
          activeColor: '',
        },
        animate: {
          name: 'slideInLeft',
          time: '1s',
          hover: {
            name: 'border-fade',
            afterColor: '#fff',
            beforeColor: '#000'
          },
        },
        children: [
          new Column({
            children: [
              // Show Hide Left Menu
              new FontAwesomeIcon({
                position: 'absolute',
                right: '0',
                top: '0',
                color: '#fff',
                width: '30px',
                icon: 'fas fa-caret-left',
                size: '30px',
                margin: '20px 10px',
              }),

              //Menu left logo
              new Container({
                width: '100%',
                height: '100px',
                padding: '10px 25px 10px 0',
                alignItems: 'center',
                justifyContent: 'center',
                children: [
                  new Image({
                    src: './assets/img/logo-white.png',
                    height: '100%'
                  })
                ],

              }),

              // --------------- space before logo
              new Container({
                width: '100%',
                height: '50px',
              }),

              // ---------------- Left Menu Items
              new Column({
                id: 'left-menu-options',
                children: [
                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    route: '/Dashboard',
                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-tachometer-alt',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'Dashboard'
                      })
                    ]
                  }),// Container

                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    route: '/Buttons',
                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-caret-square-right',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'Buttons'
                      })
                    ]
                  }),// Container

                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    route: '/Popups',
                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-list-alt',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'Popups'
                      })
                    ]
                  }),

                  // Forms Container
                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    route: '/Forms',
                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-id-card',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'Forms'
                      })
                    ]
                  }),

                  // asdas Container
                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    route: '/pablo',
                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-user-times',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'El Ladron'
                      })
                    ]
                  }),

                  // Settings Container
                  new DashBoardOption({
                    width: '100%',
                    height: '70px',
                    color: '#fff',
                    padding: '20px 40px',
                    alignItems: 'center',
                    position: 'absolute',
                    hoverColor: '#ee321f',
                    hoverTextColor: 'white',
                    bottom: '0',
                    left: '0',

                    children: [
                      new FontAwesomeIcon({
                        width: '30px',
                        icon: 'fas fa-cog',
                        size: '20px',
                        marginRight: '20px'
                      }),
                      new Container({
                        text: 'Settings'
                      })
                    ]
                  }),
                ]
              }),// End Column

            ]
          })
        ]
      }),
      new Column({
        width: '80%',
        height: '100vh',
        children: [

          // top menu
          new TopHeaderBar({
            width: '100%',
            height: '70px',
            padding: '10px 20px',
            color: '#fff',
            background: '#fff',
            justifyContent: 'space-between',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 5px 10px 2px',
            animate: {
              name: 'slideInDown',
              time: '1s',
              delay: 1000,
              hover: {
                name: 'border-fade',
                afterColor: '#fff',
                beforeColor: '#000'
              },
            },
            children: [
              // Menu Header logo
              new Container({
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#000',
                children: [
                  new Container({
                    text: 'Page Name',
                    width: 'auto',
                    height: 'auto',
                    margin: '0 25px',
                  }),
                  new Container({
                    fontSize: '16px',
                    alignItems: 'center',
                    children: [
                      new Container({
                        cursor: 'pointer',
                        text: 'Option 1',
                        width: 'auto',
                        height: 'auto',
                        margin: '0 25px',
                        hoverTextColor: '#ee321f',
                        events: {
                          onclick: function () {
                            DashBoardOption({ route: '/Option_1' });
                            // return klk
                          },
                        },
                      }),

                      new Container({
                        cursor: 'pointer',
                        text: 'Option 2',
                        width: 'auto',
                        height: 'auto',
                        margin: '0 25px',
                        hoverTextColor: '#ee321f',
                        events: {
                          onclick: function () {
                            DashBoardOption({ route: '/Option_2' });
                            // return klk
                          },
                        },
                      }),

                      new Container({
                        cursor: 'pointer',
                        text: 'Option 3',
                        width: 'auto',
                        height: 'auto',
                        margin: '0 25px',
                        hoverTextColor: '#ee321f',
                        events: {
                          onclick: function () {
                            DashBoardOption({ route: '/Option_3' });
                            // return klk
                          },
                        },
                      }),

                      new Image({
                        cursor: 'pointer',
                        src: './assets/img/sample user.jpg',
                        borderRadius: '100%',
                        height: '60px',
                        hoverTextColor: '#ee321f',
                        events: {
                          onclick: function () {
                            DashBoardOption({ route: '/User_Edit', element: this });
                            // return klk
                          },
                        },
                      })

                    ]
                  })
                ]
              }),
            ]
          }),
          new DashboardBody({
            // body: _dashboard(),
          })

        ]
      }),

    ]
  })
}