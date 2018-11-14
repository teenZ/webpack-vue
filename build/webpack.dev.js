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
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            //图片
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: {
                    loader:'url-loader',
                    // options: {
                    //     limit: 500,
                    //     name: 'assets/images/[name].[ext]'
                    // }
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 'postcss-loader',
                    'less-loader',
                ],
              },
        ]
    },
    mode: 'development'
});