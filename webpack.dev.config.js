var baseConfig = require('./webpack.base.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _ = require('lodash');

var devConfig = {
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap!' +
                'sass?sourceMap'
            )
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};

// Merge the base config with the dev config
var devConfig = _.merge(baseConfig, devConfig, function(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
});

module.exports = devConfig;
