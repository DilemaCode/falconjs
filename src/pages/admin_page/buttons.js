function _buttons() {
  return new Column({
    alignItems: 'center',
    width: '100%',
    padding: '40px',
    children: [
      //  Infinity ---------------------------------------       
      new Container({
        margin: '10px',
        width: '100%',
        height: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        children: [
          // Star Column
          new Column({
            alignItems: 'center',
            justifyContent: 'center',
            children: [
              // title
              new Container({
                padding: '20px',
                width: '100%',
                height: 'auto',
                background: '#333',
                color: '#fff',
                text: 'Infinity Buttons'
              }),

              new Row({
                flexFlow: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                margin: '0 0 20px',
                children: [
                  new Container({
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    fontWeight: '600',
                  }),
                  // Star Column
                  new Column({
                    children: [
                      // Star Row
                      new Row({
                        children: [

                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            text: 'Soul Button',
                            color: '#f5882c',
                            background: '#fff',
                            hoverTextColor: '#fff',
                            hoverColor: 'linear-gradient(to right top, #fc4a1a,#f5882c)',
                            border: '2px solid',
                            boxShadow: 'rgba(245, 126, 40, 0.3) 0px 5px 15px 0px',
                            events: {
                              onclick: f => {
                                console.log('klk', f.target)
                                console.log('klk', event.target)
                              }
                            }
                          }),


                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            text: 'Reality Button',
                            color: 'rgb(255, 0, 0)',
                            background: '#fff',
                            border: '2px solid',
                            hoverTextColor: '#fff',
                            hoverColor: 'linear-gradient(to right top, rgb(175, 0, 0), rgb(255, 0, 0))',
                            boxShadow: 'rgba(213, 44, 0, 0.3) 0px 5px 15px 0px'
                          }),

                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            text: 'Space Button',
                            color: '#6091ea',
                            background: '#fff',
                            hoverTextColor: '#fff',
                            hoverColor: 'linear-gradient(to right top, #6091ea,#17ead9)',
                            border: '2px solid',
                            boxShadow: 'rgb(96, 145, 234, 0.3) 0px 5px 15px 0px'
                          }),


                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            text: 'Power Button',
                            fontSize: '14px',
                            color: '#7f00ff',
                            background: '#fff',
                            hoverTextColor: '#fff',
                            hoverColor: 'linear-gradient(to right top, #7f00ff, #e100ff)',
                            border: '2px solid',
                            boxShadow: 'rgba(175, 31, 249, 0.3) 0px 5px 15px 0px'
                          }),

                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            text: 'Time Button',
                            color: '#29a57d',
                            background: '#fff',
                            hoverTextColor: '#ffff',
                            hoverColor: 'linear-gradient(to right top, #29a57d,#53ef66)',
                            border: '2px solid',
                            boxShadow: 'rgba(41, 165, 125, 0.3) 0px 5px 15px 0px'
                          }),
                        ]
                      }),// End Row
                    ]
                  }),// End Column
                  new Button({
                    padding: '15px 40px',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '20px',
                    text: 'Mind Button',
                    background: '#fff',
                    color: ' rgba(255, 160, 0, 1)',
                    hoverTextColor: '#fff',
                    hoverColor: 'linear-gradient(to right top, rgba(255, 160, 0, 1), rgb(255, 255, 0))',
                    border: '2px solid',
                    boxShadow: 'rgba(255, 160, 0, 0.5) 0px 5px 20px 0px'
                  }),
                ]
              }),
              new Container({
                width: '90%',
                borderTop: '2px solid #dddddd',
                margin: '10px',
              }),// End Container

              // Body
              new Row({
                flexFlow: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                margin: '0 0 20px',
                children: [
                  new Container({
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    fontWeight: '600',
                  }),
                  // Star Column
                  new Column({
                    children: [
                      // Star Row
                      new Row({
                        children: [
                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            textShadow: 'rgba(0, 0, 0, 0.333) 1px 1px 15px',
                            text: 'Soul Button',
                            color: '#fff',
                            background: 'linear-gradient(to right top, #fc4a1a,#f5882c)',
                            border: 'none',
                            boxShadow: 'rgba(245, 126, 40, 0.7) 0px 5px 20px 0px',
                          }),


                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            text: 'Reality Button',
                            textShadow: 'rgba(0, 0, 0, 0.333) 1px 1px 15px',
                            background: 'linear-gradient(to right top, rgb(175, 0, 0), rgb(255, 0, 0))',
                            color: '#fff',
                            border: 'none',
                            boxShadow: 'rgba(213, 44, 0, 0.5) 0px 5px 20px 0px'
                          }),

                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            textShadow: 'rgba(0, 0, 0, 0.333) 1px 1px 15px',
                            text: 'Space Button',
                            color: '#fff',
                            background: 'linear-gradient(to right top, #6091ea,#17ead9)',
                            border: 'none',
                            boxShadow: 'rgba(43, 185, 219, 0.7) 0px 5px 20px 0px'
                          }),


                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            text: 'Power Button',
                            fontSize: '14px',
                            textShadow: 'rgba(0, 0, 0, 0.333) 1px 1px 15px',
                            background: 'linear-gradient(to right top, #7f00ff, #e100ff)',
                            color: '#fff',
                            border: 'none',
                            boxShadow: 'rgba(175, 31, 249, 0.5) 0px 5px 20px 0px'
                          }),

                          new Button({
                            letterSpacing: '1.5px',
                            fontWeight: '600',
                            fontSize: '14px',
                            textShadow: 'rgba(0, 0, 0, 0.333) 1px 1px 15px',
                            text: 'Time Button',
                            color: '#fff',
                            background: 'linear-gradient(to right top, #29a57d,#53ef66)',
                            border: 'none',
                            boxShadow: 'rgba(62, 207, 158, 0.8) 0px 5px 20px 0px'
                          }),
                        ]
                      }),// End Row
                    ]
                  }),// End Column
                  new Button({
                    padding: '15px 40px',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '20px',
                    text: 'Mind Button',
                    color: '#fff',
                    background: 'linear-gradient(to right top, rgba(255, 160, 0, 1), rgb(255, 255, 0))',
                    border: 'none',
                    boxShadow: 'rgba(246,184, 0, 0.7) 0px 5px 20px 0px'
                  }),
                ]
              }),
              // Divider

            ]
          }),// End Column

        ]
      }),


      //  Heroes ---------------------------------------       
      new Container({
        height: '50px'
      }),

      new Container({
        margin: '20px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: '600',
        fontSize: '40px',
        text: 'Heroes Buttons'
      }),

      new Container({
        margin: '20px',
        padding: '20px',
        width: '100%',
        height: '60vh',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        children: [
          new Column({
            alignItems: 'center',
            justifyContent: 'center',
            children: [
              new Row({
                flexFlow: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                children: [
                  new Button({
                    text: 'Iron Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#fff',
                    border: 'none',
                    background: 'rgb(238, 50, 31)',
                    borderRadius: '0px',
                    boxShadow: 'rgb(238, 50, 31,0.5) 0px 0px 4px',
                    hoverColor: 'rgb(200, 0, 0)',
                  }),

                  new Button({
                    text: 'Capitan Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#fff',
                    border: 'none',
                    background: 'rgb(16, 148, 247)',
                    borderRadius: '0px',
                    boxShadow: 'rgba(16, 148, 247, 0.5) 0px 0px 4px',
                    hoverColor: 'rgb(14, 121, 202)',
                  }),

                  new Button({
                    text: 'Panther Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: 'none',
                    background: 'rgba(35, 39, 43, 1)',
                    color: '#fff',
                    borderRadius: '0px',
                    boxShadow: 'rgba(35, 39, 43, 0.5) 0px 0px 4px',
                    hoverColor: 'rgb(80, 80, 80)',
                  }),

                  new Button({
                    text: 'Hulk Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#fff',
                    border: 'none ',
                    background: 'rgb(92, 184, 92)',
                    borderRadius: '0px',
                    boxShadow: 'rgba(92, 184, 92,0.5) 0px 0px 4px',
                    hoverColor: 'rgb(73, 148, 73)',
                  }),

                ],
              }),
              new Row({
                flexFlow: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                children: [

                  new Button({
                    text: 'Spider Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#fff',
                    border: 'none ',
                    background: 'linear-gradient(23deg,rgb(12, 28, 115) 46%,  rgb(250, 53, 0) 54%)',
                    borderRadius: '10px',
                    boxShadow: 'rgb(134, 94, 160,0.5) 0px 0px 4px',
                    hoverColor: 'linear-gradient(23deg, rgba(9, 20, 78) 46%, rgb(206, 44, 0) 54%)',
                  }),

                  new Button({
                    text: 'Thor Button',
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'rgb(17, 148, 247)',
                    border: 'none ',
                    background: 'rgb(16, 148, 247)',
                    background: '#fff',
                    borderRadius: '10px',
                    boxShadow: 'rgba(16, 148, 247,.5) 0px 0px 4px',
                    hoverColor: 'rgb(16, 148, 247,0.5)',
                  }),
                ],
              }),

            ]
          }),// End Column
        ]
      }),



      //  Villains ---------------------------------------       
      new Container({
        height: '50px'
      }),

      new Container({
        margin: '20px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: '600',
        fontSize: '40px',
        text: 'Villains Buttons'
      }),

      new Container({
        margin: '20px',
        padding: '20px',
        width: '100%',
        height: '60vh',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        children: [
          // Star Row
          // Star Column
          new Column({
            alignItems: 'center',
            justifyContent: 'center',
            children: [
              new Row({
                flexFlow: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                children: [
                  new Button({
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    text: 'Ebony Button',
                    color: 'rgb(154, 144, 132)',
                    border: '2px solid',
                    background: '#fff',
                    borderRadius: '0px',
                    boxShadow: 'rgb(154, 144, 132,0.7) 0px 0px 5px',
                    hoverColor: 'rgb(154, 144, 132,0.3)'
                  }),

                  new Button({
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    text: 'Dwarf Button',
                    color: 'rgb(88, 55, 7)',
                    border: '2px solid',
                    background: '#fff',
                    borderRadius: '0px',
                    boxShadow: 'rgb(111, 83, 43,0.5) 0px 0px 5px',
                    hoverColor: 'rgb(111, 83, 43,0.3)'
                  }),

                  new Button({
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    fontSize: '14px',
                    text: 'Proxima Button',
                    border: '2px solid',
                    background: '#fff',
                    color: 'rgb(15, 48, 86)',
                    borderRadius: '0px',
                    boxShadow: 'rgba(15, 48, 86,0.7) 0px 0px 5px',
                    hoverColor: 'rgba(15, 48, 86,0.3)'
                  }),

                  new Button({
                    letterSpacing: '1.5px',
                    fontWeight: '600',
                    text: 'Supergiant Button',
                    fontSize: '14px',
                    border: '2px solid',
                    color: 'rgb(100, 104, 160)',
                    background: '#fff',
                    borderRadius: '0px',
                    boxShadow: 'rgba(100, 104, 160,0.7) 0px 0px 5px',
                    hoverColor: 'rgb(100, 104, 160,0.3)'
                  }),

                ]
              }),
              
              new Button({
                margin: '20px',
                padding: '15px 40px',
                letterSpacing: '1.5px',
                fontWeight: '600',
                fontSize: '20px',
                text: 'Thanos Button',
                border: '2px solid',
                color: '#7f00ff',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '#7f00ff80 0px 0px 5px',
                hoverColor: 'rgb(127, 0, 255,0.3)'
              }),
            ]
          }),// End Column
        ]
      }),

    ]
  })
}

function _pablo() {
  return new Column({
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    children: [
      new Container({
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '60px',
        text: 'Pablo es un Ladronaso',
      }),
      new Container({
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        text: 'Se roba los templates y dice que el es duro'
      })
    ]
  })
}


// linear-gradient(to right bottom, rgb(255, 61, 0) 0%, rgb(255, 152, 0) 40%)
// linear-gradient(170deg , rgb(255, 61, 0) 15%, rgb(255, 152, 0) 40%, rgb(255, 61, 0) 80%)