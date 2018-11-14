// 存放prod配置

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                   {
                       loader: MiniCssExtractPlugin.loader,
                       options: {
                           publicPath: '../'
                       }
                   },
                   'css-loader',
                   'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: 
                        {
                            limit: 5000,
                            name: "assets/images/[name].[ext]"
                        }
                    }
                ],
            }    
        ]
    },
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