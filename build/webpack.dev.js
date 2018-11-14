// 存放dev配置

const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: { // 开发服务器
        contentBase: '../dist'
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {},
    mode: 'development'
});