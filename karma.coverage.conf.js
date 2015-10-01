var baseConfig = require('./karma.base.conf.js');
var _ = require('lodash');

var coverageConfig = {
    browsers: ['Chrome'],
    singleRun: true,
    webpack: {
        module: {
            preLoaders: [{
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
