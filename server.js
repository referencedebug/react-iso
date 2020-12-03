const express = require('express')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfigClient = require('./webpack.config.client.js')
const webpackConfig = require('./webpack.config.client.js')
const app = express()
app.use(express.static(webpackConfigClient.output.publicPath))
webpackConfig.entry.unshift("webpack-hot-middleware/client?noInfo=true&reload=true")
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
const compiler = webpack({mode: 'development', ...webpackConfig});

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
})

const hotMiddleWare = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleWare)
app.get('/hello', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log('hello')
    const data =  fs.readFileSync('./dist/index.html', 'utf-8') 
    res.send(data)
})

app.listen(3000)