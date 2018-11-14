// 存放prod配置

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    module: {},
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ],
    mode: 'production',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    }
})