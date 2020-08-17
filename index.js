/**
 * @file index.js
 */

const path = require('path');

/**
 * webpack.config.jsの設定を記述するファイル
 */
const webpackAddedInfo = {
  env: process.env.NODE_ENV, // 環境変数(package.jsonで定義している)
  entry: {
    app: './app/scripts', // トランスパイルするディレクトリ名
  },
  output: path.resolve(__dirname, process.env.NODE_ENV === 'development' ? '.dist' : 'build'), // jsの出力先
  exclude: [] // node_modulesライブラリでトランスパイルする必要な物がある場合はここに記述
};

module.exports = {
  webpackAddedInfo: webpackAddedInfo,
};
