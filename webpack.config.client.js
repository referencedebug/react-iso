const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [path.join(__dirname, '/src/index.jsx')],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /.(jsx|js)$/,
                include: [path.resolve(__dirname, './src')],
                use: ['babel-loader','eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html'),
            filename: 'index.html',
            inject: true,
            title: 'hello app'
        })
    ]
}

