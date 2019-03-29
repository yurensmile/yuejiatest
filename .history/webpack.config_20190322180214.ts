/// <reference path="./node_modules/yuejia/typings/webpackConfig.d.ts" />

const task = require('yuejia/task').default;

webpackConfig = {
  dirname: __dirname,
  outputDir: './build',
  publicPath: process.env.NODE_ENV === 'development' ? '/build/' : ''
};

module.exports = task(webpackConfig);