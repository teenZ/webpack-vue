// 存放prod配置

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    module: {},
    plugins: [],
    mode: 'production',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    }
})