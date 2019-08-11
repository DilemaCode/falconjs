function _dashboard() {
    handleClientLoad()
    return new Column({
            alignItems: 'center',
            width: '100%',
            padding: '40px',
            children: [
                // Star Row
                new Row({
                    justifyContent: 'space-between',
                    children: [
                        new Container({
                            width: '16vw',
                            height: '100px',
                            alignItems: 'center',
                            padding: '20px',
                            background: '#083D77',
                            color: '#fff',
                            text: 'Sign In',
                            boxShadow: '#083D7780 0 5px 10px 0',
                            events: {
                                onclick: () => LoginWithG()
                            }
                        }),

                        new Container({
                            width: '16vw',
                            height: '100px',
                            alignItems: 'center',
                            padding: '20px',
                            background: '#F77F00',
                            color: '#fff',
                            text: 'Insert Comment',
                            boxShadow: '#F77F0080 0 5px 10px 0',
                            events: {
                                onclick: () => insertC()
                            }
                        }),

                        new Container({
                            width: '16vw',
                            height: '100px',
                            alignItems: 'center',
                            padding: '20px',
                            background: '#5BC0BE',
                            color: '#fff',
                            text: 'Insert Like',
                            boxShadow: '#5BC0BE80 0 5px 10px 0',
                            events: {
                                onclick: () => insertL()
                            }
                        }),
                        new Container({
                            width: '16vw',
                            height: '100px',
                            alignItems: 'center',
                            padding: '20px',
                            background: '#EF233C',
                            color: '#fff',
                            text: 'Card',
                            boxShadow: '#EF233C80 0 5px 10px 0',
                        }),

                    ]
                }), // End Row
                // Star Container
                new Container({
                    height: '20px',
                }), // End Container

                // Star Row
                new Row({
                    padding: '0',
                    margin: '0',
                    justifyContent: 'space-between',
                    children: [
                        // Star Row
                        new Row({
                            padding: '0',
                            margin: '0',
                            children: [
                                // Star Container
                                new Container({
                                    width: '48%',
                                    height: '40vh',
                                    margin: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
                                    background: '#fff',
                                    children: [
                                        // Star Column
                                        new Column({
                                            children: [
                                                new Container({
                                                    padding: '20px',
                                                    width: '100%',
                                                    height: 'auto',
                                                    background: '#1E1B18',
                                                    color: '#fff',
                                                    text: 'Card'
                                                }),
                                                // Star Container
                                                new Container({
                                                    width: '100%',
                                                    height: '100%',
                                                    padding: '20px',
                                                    background: '#fff9',
                                                    children: [
                                                        // Star Container

                                                    ]
                                                }), // End Container
                                            ]
                                        }), // End Column
                                    ]
                                }), // End Container

                                // Star Container
                                new Container({
                                    width: '48%',
                                    height: '40vh',
                                    margin: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
                                    background: '#fff',
                                    children: [
                                        // Star Column
                                        new Column({
                                            children: [
                                                new Container({
                                                    padding: '20px',
                                                    width: '100%',
                                                    height: 'auto',
                                                    background: '#1E1B18',
                                                    color: '#fff',
                                                    text: 'Card'
                                                }),
                                                // Star Container
                                                new Container({
                                                    width: '100%',
                                                    height: '100%',
                                                    padding: '20px',
                                                    background: '#fff9',
                                                    children: []
                                                }), // End Container
                                            ]
                                        }), // End Column
                                    ]
                                }), // End Container

                            ]
                        }), // End Row
                        // Star Row
                    ]
                }), // End Row

                new Container({
                    width: '98%',
                    height: '40vh',
                    margin: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 10px 4px',
                    background: '#fff',
                    children: [
                        // Star Column
                        new Column({
                            children: [
                                new Container({
                                    padding: '20px',
                                    width: '100%',
                                    height: 'auto',
                                    background: '#1E1B18',
                                    color: '#fff',
                                    text: 'Table'
                                }),
                                // Star Container
                                new Container({
                                    width: '100%',
                                    height: '100%',
                                    padding: '20px',
                                    background: '#fff9',
                                    children: []
                                }), // End Container
                            ]
                        }), // End Column
                    ]
                }), // End Container


            ]
        }) // End Column
}