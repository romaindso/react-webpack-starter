var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    devtool: 'source-map',
    entry: ['webpack/hot/dev-server', './app/index.js'],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          'react': pathToReact
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel?optional[]=runtime'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!' +
                    'sass?sourceMap'
                )
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
