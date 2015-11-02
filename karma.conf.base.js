var path = require("path");

module.exports =  {
    basePath: '.',
    files: [
        { pattern: 'tests.webpack.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
        'tests.webpack.js': ['webpack']
    },
    webpack: {
        module: {
            loaders: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },{
                    test: /\.scss$/,
                    loader: 'null-loader'
                }
            ]
        },
        watch: true,
        resolve: {
            root: path.join(__dirname, 'app'),
            extensions: ['', '.js', '.jsx']
        }
    },
    webpackServer: {
        noInfo: true
    }
};
