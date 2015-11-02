var _ = require('lodash');
var webpack = require("webpack");
var baseConfig = _.clone(require('./webpack.base.config.js'), true);

var prodConfig = {
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

// Merge the base config with the prod config
var prodConfig = _.merge(baseConfig, prodConfig, function(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
});

module.exports = prodConfig;
