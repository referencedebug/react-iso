import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if(module.hot){
    module.hot.accept("./App.jsx", () => {
        const newApp = require("./App").default;
        ReactDOM.hydrate(<App />, document.getElementById('root'))
    })
}