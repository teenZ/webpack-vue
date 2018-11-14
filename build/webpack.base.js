// 存放dev和prod通用配置

const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离css

module.exports = {
    //入口文件
    entry: "./src/main.js",

    //打包出口
    // output: {
    //     path: path.resolve(__dirname, "./dist"), //打包后的目录，必须是绝对路径
    //     publicPath: "/dist", //通过devServer访问路径
    //     filename: "main.js" //打包后的文件名称
    // },
    // mode: "development",

    // 启动热更新
    // devServer: {
        // historyApiFallback: true,
        // overlay: true
        // hot: true
    //  },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "./src") //????
        },
        extensions: [".js", ".vue", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
            //图片
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 500,
                        name: 'assets/images/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
};
