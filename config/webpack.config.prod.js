/**
 * 生产环境配置
 */

// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack
const webpack = require("webpack");
const path = require("path");
//  提取css
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin")
//输出文件
const tempObj = webpackMerge(webpackBase,{
     output: {
        filename: "js/[name][hash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: './'
    }
})
// 合并配置文件
module.exports = webpackMerge(tempObj,{
    plugins:[
        new ExtractTextPlugin({
            filename: 'css/[name][hash].css'
        }),
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            // 开启 sourceMap
            sourceMap: true,
            compress: {
              warnings: false
            }
        }),
        // 提取公共 JavaScript 代码
        new webpack.optimize.CommonsChunkPlugin({
            // chunk 名为 commons
            name: "commons",
            filename: "js/[name][hash].js",
        }),
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin(['dist'], {
          root: path.resolve(__dirname, '../'),  //根目录
          verbose: true,    //开启在控制台输出信息
          dry: false　　　　  //启用删除文件
        }),

    ]
});
