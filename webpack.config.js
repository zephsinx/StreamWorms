const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const replace = require('replace-in-file');

module.exports = {
    entry: './src/streamerworm.js',
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        moduleIds: 'deterministic',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'indexTemplate.html',
            title: 'StreamerWorm',
            favicon: 'src/resources/favicon.ico',
            lang: 'en',
            mediaUrl: '[[mediaUrl]]',
        }),
    ],
    output: {
        filename: 'assets/js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
};