let path = require('path')
let webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './examples/commonjs/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/examples/commonjs/',
        filename: 'seerbit-sample.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'examples/commonjs'),
        compress: true,
        port: 9900
    },
    devtool: 'eval-source-map'
}
