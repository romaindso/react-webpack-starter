var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
      root: path.join(__dirname, 'app'),
      extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel?optional[]=runtime'
            },{
              test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000'
            }
        ]
    }
};
