const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
 entry: {
    app: './src/index.js'
 },
 plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Out Management'
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common'
    // })
 ],
 output: {
     path: path.resolve(__dirname, 'dist'),
     filename: '[name].bundle.js'
 },
 module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        use: {
            loader: 'babel-loader',
            query: {
                presets: ["es2015"]
            }
        }
     }]
 }
};
