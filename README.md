```
package.json配置
{
  "name": "webpack_4",
  "version": "1.0.0",
  "sideEffects": false,
  "description": "",
  "private": true,
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "server": "node server.js"

  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bigzjk/webpack4.git"
  },
  "author": "alkun",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/bigzjk/webpack4/issues"
  },
  "homepage": "https://github.com/bigzjk/webpack4#readme",
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "clean-webpack-plugin": "^1.0.0",
    "css-loader": "^1.0.1",
    "express": "^4.16.4",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "uglifyjs-webpack-plugin": "^2.0.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-middleware": "^3.4.0",
    "webpack-dev-server": "^3.1.10",
    "webpack-merge": "^4.1.4",
    "xml-loader": "^1.2.1"
  },
  "dependencies": {
    "lodash": "^4.17.11"
  }
}
```