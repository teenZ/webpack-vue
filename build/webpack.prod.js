// 存放prod配置

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    module: {},
    plugins: [
        new CleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../')
        }),
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