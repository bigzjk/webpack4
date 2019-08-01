/*
* @Author: alkun
* @Date:   2019-05-28 22:21:30
* @Last Modified by:   alkun
* @Last Modified time: 2019-06-20 23:10:21
*/

'use strict';
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendLyErrorsWebpackPlugin =  require('friendly-errors-webpack-plugin')
const glob = require('glob')
// 动态设置entey
const setMap = function(){
    let entry = {};
    let htmlWebpackPlugins = [];
    // 匹配stc下面的所有页面目录
    let entryFiles  = glob.sync(path.join(__dirname, './src/*/index.js'))
    entryFiles.map((item)=>{
        let match = item.match(/\/src\/(.*)\/index\.js/)
        let pageName = match[1]
        entry[pageName] = item;
        // plugins里面的多页面html打包模块
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template: path.join(__dirname, `src/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: [`${pageName}`],
                inject: true,
                minify: {
                    html: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: false
                }
            })
        )
    })
    return {
        entry,
        htmlWebpackPlugins
    }
}

const { entry, htmlWebpackPlugins} = setMap();

module.exports = {
    // entry: './src/index.js',
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        host: 'localhost',
        overlay: true,
        // compress: true,
        hot: true,
        stats: 'errors-only' // 构建日志
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader'
                // use: {
                //     loader: 'babel-loader',
                //     query: {
                //         presets: ['env', 'react']
                //     }
                // }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            
        ]
    },
    plugins: [
        // new htmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src', 'index.html'),
        //     filename: 'index.html',
        //     hash: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendLyErrorsWebpackPlugin()
    ].concat(htmlWebpackPlugins),
    devtool: 'source-map'
}
