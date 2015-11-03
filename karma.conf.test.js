var _ = require('lodash');
var baseConfig = _.clone(require('./karma.conf.base.js'), true);

var testConfig = {
    browsers: ['Chrome', 'Firefox'], // browsers available => ['Chrome', 'Firefox, 'IE']
    preprocessors: {
        'tests.webpack.js': ['sourcemap']
    },
    reporters: ['spec'],
    webpack: {
        devtool: 'inline-source-map'
    }
};

// Merge the base config with the test config
var testConfig = _.merge(baseConfig, testConfig, function(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
});

module.exports = function(conf){
    conf.set(testConfig);
};
