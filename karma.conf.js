// Karma configuration
// Generated on Fri Jan 20 2017 11:26:25 GMT+0200 (FLE Standard Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'dist/react-color-tools.js',
      'test/*.js'
    ],
    preprocessors: {
      'dist/react-color-tools.js': ['coverage']
    },
    reporters: ['kjhtml', 'coverage'],
    port: 9876,
    browsers: [],
    singleRun: false,
    autoWatch: true
  })
};
