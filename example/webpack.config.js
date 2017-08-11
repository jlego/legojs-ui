var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require("babel-polyfill");
var modules = [
    'index',
    'home',
    'buttons',
    'alert',
    'tables',
    'navs',
    'forms',
    'grid',
    'tips',
    'tree',
    'transfer',
    'upload',
    'avatar',
    'steps',
    'editcom',
    'rating',
    'tags'
];

function getEntry(modules){
    var result = {'main': ['babel-polyfill', './src/main']};
    for(var i = 0; i < modules.length; i++){
        var name = modules[i];
        result[name + '/app'] = ['./src/' + name + '/app'];
    }
    return result;
}
module.exports = {
    entry: getEntry(modules),
    output: {
        path: path.join(__dirname, 'dist'), //打包输出的路径
        publicPath: "./", //发布地址。
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
            // loader: "style!css!sass",
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.css$/,
            // loader: "style!css",
            loader: ExtractTextPlugin.extract('style', "css")
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
        extensions: ["", ".js"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: false,
            output: {
                beautify: false,
                comments: false
            },
        }),
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        })
    ]
};
