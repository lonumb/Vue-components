const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname,"../src/main.js")
    ],
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "[name].[hash].js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,"../dist"),
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        port: '1234'
    },
    module: {
        rules:[
            {
                test: /\.(vue|js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            // {
            //     test: /\.(css|less)$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'postcss-loader',
            //         },
            //         {
            //             loader: 'less-loader'
            //         }
            //     ]
            // }
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader', 'postcss-loader' ])
            },
        ]
    },
    plugins: [
        // new webpack.BannerPlugin("test"),
        new HtmlWebpackPlugin({
            title: 'test,hello',
            template: path.resolve(__dirname,'../index.html'),
            chunksSortMode: 'none'
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("styles.css"),
        // new webpack.DefinePlugin({SH: JSON.stringify('上海'),})
    ]
}
