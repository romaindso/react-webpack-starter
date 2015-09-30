module.exports = function (config) {
  config.set({
    basePath: '.',
    browsers: ['Chrome', 'Firefox', 'IE'],
    files: [
        { pattern: 'tests.webpack.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
        'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec'],
    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        watch: true
    },
    webpackServer: {
        noInfo: true
    }
  });
};
