// 存放dev和prod通用配置

const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html插件

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
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, 
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ]
};
