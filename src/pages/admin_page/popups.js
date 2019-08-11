function _popups() {
  return new Column({
    alignItems: 'center',
    width: '100%',
    padding: '40px',
    children: [

      // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
      // Star Column
      new Column({
        padding: '0',
        children: [

          // Basic -------------------------
          new Container({
            width: '100%',
            height: 'auto',
            background: '#fff',
            color: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
            children: [
              new Column({
                alignItems: 'center',
                justifyContent: 'center',
                children: [
                  new Container({
                    text: 'Basic Popups',
                    padding: '20px',
                    width: '100%',
                    height: 'auto',
                    background: '#333',
                    color: '#fff',
                  }),
                  new Row({
                    flexFlow: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    children: [
                      // Text Only-----------------------------
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'Text Only'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    body: new Container({
                                      padding: '40px',
                                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.',
                                    }),
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#333',
                                    },
                                    animate: {
                                      in: {
                                        name: 'zoomIn',
                                      },
                                      out: {
                                        name: 'zoomOut',
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container

                      // Star Container
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'With Title',
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    title: {
                                      text: 'Popup Title',
                                      background: '#333',
                                      color: '#fff',
                                    },
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#fff',
                                    },
                                    body: [
                                      new Container({
                                        width: '100%',
                                        padding: '40px',
                                        children: [
                                          new Container({
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.'
                                          })
                                        ]
                                      }),
                                    ],
                                    animate: {
                                      in: {
                                        name: 'fadeIn',
                                        duration: '0.9s',
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container

                      // Star Container
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'With Buttons'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    title: {
                                      text: 'Popup Title',
                                      background: '#333',
                                      color: '#fff',
                                    },
                                    body: [
                                      // Star Container
                                      new Container({
                                        width: '100%',
                                        padding: '40px',
                                        children: [
                                          new Container({
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.'
                                          })
                                        ]
                                      }),// End Container
                                    ],
                                    buttons: {
                                      orientation: 'right',
                                      cancel: {
                                        text: 'Cancel',
                                        border: 'none',
                                        background: '#DA463B',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        events: {
                                          onclick: f => {
                                          }
                                        }
                                      },
                                      submit: {
                                        text: 'Submit',
                                        border: 'none',
                                        background: '#45B058',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        events: {
                                          onclick: f => {
                                            f.target.parentNode.parentNode.remove()
                                          }
                                        }
                                      },
                                    },
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#fff',
                                    },
                                    animate: {
                                      in: {
                                        name: 'fadeIn',
                                        duration: '0.9s',
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container
                    ]
                  }),
                ]
              }),// End Column
            ]
          }),
          new Container({
            height: '40px',
          }),
          // Menus-------------------------
          new Container({
            width: '100%',
            height: 'auto',
            background: '#fff',
            color: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
            children: [
              new Column({
                alignItems: 'center',
                justifyContent: 'center',
                children: [
                  new Container({
                    text: 'Menus',
                    padding: '20px',
                    width: '100%',
                    height: 'auto',
                    background: '#333',
                    color: '#fff',
                  }),
                  new Row({
                    flexFlow: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    children: [
                      // From Left-----------------------------
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // From Left
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Left'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'left',
                                    width: '20vw',
                                    body: new Container({
                                      padding: '40px',
                                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.',
                                    }),
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#333',
                                    },
                                    animate: {
                                      in: {
                                        name: 'fadeInLeft', duration: '0.9s',
                                        bg: {
                                          name: 'fadeIn', duration: '0.9s',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutLeft', duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut', duration: '0.9s',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container

                      // From Top
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Top',
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'top',
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                    },
                                    body: [
                                      new Container({
                                        width: '100%',
                                        padding: '40px',
                                        children: [
                                          new Container({
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.'
                                          })
                                        ]
                                      }),
                                    ],
                                    animate: {
                                      in: {
                                        name: 'fadeInDown',
                                        bg: {
                                          name: 'fadeIn',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutUp',
                                        duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container


                      // From Right
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Right'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'right',
                                    width: '20vw',
                                    body: new Container({
                                      padding: '40px',
                                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.',
                                    }),
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#333',
                                    },
                                    animate: {
                                      in: {
                                        name: 'fadeInRight', duration: '0.9s',
                                        bg: {
                                          name: 'fadeIn', duration: '0.9s',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutRight', duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut', duration: '0.9s',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container
                    ]
                  }),
                ]
              }),// End Column
            ]
          }),
          new Container({
            height: '40px',
          }),
          // Menus-------------------------
          new Container({
            width: '100%',
            height: 'auto',
            background: '#fff',
            color: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
            children: [
              new Column({
                alignItems: 'center',
                justifyContent: 'center',
                children: [
                  new Container({
                    text: 'Menus',
                    padding: '20px',
                    width: '100%',
                    height: 'auto',
                    background: '#333',
                    color: '#fff',
                  }),
                  new Row({
                    flexFlow: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    children: [
                      // From Left-----------------------------
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Left'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'left',
                                    width: '20vw',
                                    body: new Container({
                                      padding: '40px',
                                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.',
                                    }),
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#333',
                                    },
                                    animate: {
                                      in: {
                                        name: 'fadeInLeft',
                                        duration: '0.9s',
                                        bg: {
                                          name: 'fadeIn',
                                          duration: '0.9s',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutLeft',
                                        duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut',
                                          duration: '0.9s',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container

                      // Star Container
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        borderRight: '1px solid #111',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Top',
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'Top',
                                    title: {
                                      text: 'Popup Title',
                                      background: '#333',
                                      color: '#fff',
                                    },
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#fff',
                                    },
                                    body:
                                      new Container({
                                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.'
                                      }),
                                    animate: {
                                      in: {
                                        name: 'fadeInTop',
                                        duration: '0.9s',
                                        bg: {
                                          name: 'fadeIn',
                                          duration: '0.9s',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutTop',
                                        duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut',
                                          duration: '0.9s',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container


                      // Star Container
                      new Container({
                        width: '33%',
                        height: '10vh',
                        margin: '20px 0',
                        color: '#000',
                        children: [
                          // Star Column
                          new Column({
                            alignItems: 'center',
                            children: [
                              new Text({
                                text: 'From Right'
                              }),
                              new Button({
                                text: 'Click here!',
                                events: {
                                  onclick: f => callBasicPopups({
                                    orientation: 'right',
                                    title: {
                                      text: 'Popup Title',
                                      background: '#333',
                                      color: '#fff',
                                    },
                                    body: [
                                      new Container({
                                        width: '100%',
                                        padding: '40px',
                                        children: [
                                          new Container({
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta. Voluptate cumque odit quam velit maiores sint rerum, dolore impedit commodi.'
                                          })
                                        ]
                                      }),// End Container
                                    ],
                                    buttons: {
                                      orientation: 'right',
                                      cancel: {
                                        text: 'Cancel',
                                        border: 'none',
                                        background: '#DA463B',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        events: {
                                          onclick: f => {
                                          }
                                        }
                                      },
                                      submit: {
                                        text: 'Submit',
                                        border: 'none',
                                        background: '#45B058',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        events: {
                                          onclick: f => {
                                            f.target.parentNode.parentNode.remove()
                                          }
                                        }
                                      },
                                    },
                                    close: {
                                      fontawesomeIcon: 'fas fa-times',
                                      position: 'absolute',
                                      right: '10px',
                                      top: '10px',
                                      cursor: 'pointer',
                                      color: '#fff',
                                    },

                                    animate: {
                                      in: {
                                        name: 'fadeInRight',
                                        duration: '0.9s',
                                        bg: {
                                          name: 'fadeIn',
                                          duration: '0.9s',
                                        }
                                      },
                                      out: {
                                        name: 'fadeOutRight',
                                        duration: '0.3s',
                                        bg: {
                                          name: 'fadeOut',
                                          duration: '0.9s',
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            ]
                          }),// End Column
                        ]
                      }),// End Container
                    ]
                  }),
                ]
              }),// End Column
            ]
          }),
        ]
      }),// End Column
    ]
  })// End Column
}


function callBasicPopups({ title, body, close, buttons, width, orientation, animate, events }) {
  let mbody;
  body ? mbody = {
    children: body[0] ? body : [body]
  } : '';

  new Modal({
    Orientation: orientation || 'center',
    width: width || '40vw',
    height: orientation ? orientation : 'min-content',
    justifyContent: 'center',
    alignItems: 'center',
    modalTitle: title || '',
    modalBody: mbody || '',
    buttons: buttons || '',
    close: close || '',
    modalAnimate: animate,
    events: events || '',
  })
}


















