var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        // 'viewport': './src/viewport/app',
        // 'badge': './src/badge/app',
        // 'baseView': './src/common/BaseView',
        'lego-ui': './src/index'
    },
    output: {
        path: path.join(__dirname, 'dist'), //打包输出的路径
        publicPath: "./", //发布地址。
        filename: '[name].js', //打包多个
        // chunkFilename: "[name].js"
    },
    module: {     
        // preLoaders: [{  
        //     test: /\.jsx?$/,  
        //     exclude: /node_modules/,  
        //     loader: 'eslint-loader'  
        // }],
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
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('', "css")
        }, {
            test: /\.(png|jpe?g)$/,
            loader: 'url?prefix=img&limit=10240&name=img/[name].[hash].[ext]'
        }, {
            test: /\.woff(2)?(\?t=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10240&minetype=application/font-woff&name=fonts/[name].[ext]"
        }, {
            test: /\.(ttf|eot|svg)(\?t=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file?name=fonts/[name].[ext]"
        }]
    },
    resolve: {
        root: ['./src'],
        extensions: ["", ".js"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // mangle: {
            //     except: ['$', 'jQuery', 'Lego']
            // },
            mangle: false,
            compress: false,
            output: {
                beautify: true,
                comments: function(node, comment) {
                    var text = comment.value;
                    var type = comment.type;
                    return /@preserve|@license|@cc_on/i.test(text);
                }
            },
        }),
        new ExtractTextPlugin("legoui-1.css", {
            allChunks: true
        }),
    ],
    // devtool: 'inline-source-map',  
    // debug: true,
    // devServer: {
    //     contentBase: "./dist",
    //     hot: true,
    //     inline: true,
    //     //其实很简单的，只要配置这个参数就可以了
    //     proxy: {
    //         '/api/*': {
    //             target: 'http://localhost:5000',
    //             secure: false
    //         }
    //     },
    //     port: 3000 //Port Number
    // }
};