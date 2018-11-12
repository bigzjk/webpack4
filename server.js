const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,{
    pubilcPath: config.output.pubilcPath
}));

app.listen(3000,function () {
    console.log('Express app listening port 3000')
})