/*
* @Author: alkun
* @Date:   2019-05-28 22:21:30
* @Last Modified by:   alkun
* @Last Modified time: 2019-06-21 17:37:19
*/

'use strict';
const path = require('path')
const webpack = require('webpack');
// glob 异步处理文件，拿到文件的路径，方便动态设置entry
const glob = require('glob')
// html模块打包
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 编译前清除打包的目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    
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
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader', 
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 version', '>0.1%']
                                })
                            ]
                        }
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //       remUnit: 75,
                    //       remPrecision: 8
                    //     }
                    // }
                ]
            },
            
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new CleanWebpackPlugin()
    ].concat(htmlWebpackPlugins)
}
