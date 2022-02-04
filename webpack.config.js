const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 8080,
        open: true,
        compress: true
    },
    module: {
        rules: [{
            // babel loader
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            // css loader
            test: /\.scss$/,
            // use: last one will run first
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"

        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'

        })
    ]
}



//Entry JS : index.js