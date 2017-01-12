var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'index/app': './src/index/app',
        'home/app': './src/home/app',
        'alert/app': './src/alert/app',
        'navs/app': './src/navs/app',
        'forms/app': './src/forms/app',
        'tips/app': './src/tips/app',
        'tree/app': './src/tree/app',
        'transfer/app': './src/transfer/app',
        'upload/app': './src/upload/app',
        'main': './src/main',
    },
    output: {
        path: path.join(__dirname, 'dist'), //打包输出的路径
        publicPath: "./dist/", //发布地址。
        filename: '[name].js', //打包多个
        // chunkFilename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-3'],
                compact: false
            }
        }, {
            test: /\.scss$/,
            loader: "style!css!sass",
            // loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.css$/,
            loader: "style!css",
            // loader: ExtractTextPlugin.extract('style', "css")
        }, {
            test: /\.(png|gif|jpe?g)$/,
            loader: 'url?prefix=img&limit=10240&name=img/[name].[hash].[ext]'
        }, {
            test: /\.woff(2)?(\?t=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10240&minetype=application/font-woff&name=fonts/[name].[md5:hash:hex:7].[ext]"
        }, {
            test: /\.(ttf|eot|svg)(\?t=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file?name=fonts/[name].[md5:hash:hex:7].[ext]"
        }]
    },
    resolve: {
        extensions: ["", ".js"],
        // alias: {
        //     'jquery': path.join(__dirname, 'node_modules/jquery/src/jquery'),
        //     // 'datetimepicker': 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
        // }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'windows.jQuery': 'jquery'
        // }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: false,
            output: {
                beautify: true,
                comments: false
            },
        }),
        // new ExtractTextPlugin("[name].css", {
        //     allChunks: true
        // }),
    ]
};