// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //allScriptsTimeout: 15000,
  allScriptsTimeout: 50000,
  specs: ['spec.js'],
  multiCapabilities: [ {
    browserName: 'chrome'
  }]
}