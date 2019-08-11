function _forms() {
  return new Column({
    alignItems: 'center',
    width: '100%',
    padding: '40px',
    children: [
      new Container({
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '60px',
        text: 'Forms',
      }),
      // Star Container
      new Container({
        width: '100%',
        height: 'auto',
        // margin: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
        background: '#fff',
        children: [
          // Star Column
          new Column({
            children: [
              // Star Container
              new Container({
                width: '100%',
                height: '100%',
                background: '#fff9',
                children: [
                  new Form({
                    title: {
                      text: 'Basic Form',
                      margin: '20px',
                    },
                    children: [
                      // Star Row
                      new Row({
                        children: [
                          new Label({
                            text: 'Basic',
                            width: '30%'
                          }),
                          new Input({
                            height: '40px',
                            width: '100%'
                          }),
                        ]
                      }),// End Row
                      new Row({
                        children: [
                          new Label({
                            text: 'Basic',
                            width: '30%'
                          }),
                          new Input({
                            height: '40px',
                            width: '100%'
                          }),
                        ]
                      }),// End Row
                      new Row({
                        children: [
                          new Label({
                            text: 'Basic',
                            width: '30%'
                          }),
                          new Input({
                            height: '40px',
                            width: '100%'
                          }),
                        ]
                      }),// End Row
                    ]

                  })
                ]
              }),// End Container
            ]
          }),// End Column
        ]
      }),// End Container
    ]
  })// End Column
}