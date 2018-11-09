var webpack = require('webpack');
const path = require('path');
module.exports = {
 entry: './src/pages/index.js',
 output: {
     publicPath:'/',
     path: path.resolve(__dirname, 'dist'),
     filename: "bundle.js"
 }
};
