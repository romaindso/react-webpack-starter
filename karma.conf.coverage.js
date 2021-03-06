var _ = require('lodash');
var path = require("path");
var baseConfig = _.clone(require('./karma.conf.base.js'), true);

var coverageConfig = {
    browsers: ['Chrome'],
    singleRun: true,
    webpack: {
        module: {
            preLoaders: [{
                test: /\.jsx?$/,
                include: path.join(__dirname, 'app'),
                loaders: ['isparta']
            }]
        }
    },
    reporters: ['coverage'],
    coverageReporter: {
        type: 'html',
        dir: 'test/coverage'
    }
};

// Merge the base config with the test config
var coverageConfig = _.merge(baseConfig, coverageConfig, function(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
});

module.exports = function(conf){
    conf.set(coverageConfig);
};
