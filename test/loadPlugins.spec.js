

var expect = require('chai').expect;
var loadPlugins = require('../lib/loadPlugins');

var testOptions = {
  isTrue: true,
  isFalse: false
};

var testState = {
  contentList: [
  { fakeContent: true }
  ]
};

describe('loadPlugins', function() {

  it('should call plugin functions with correct arguments', function() {
    loadPlugins({
      lazy: false,
      config: {
        devDependencies: {
          'should-not-be-loaded': '^0.0.1',
          'statictemp-global-should-be-loaded': '^0.0.0'
        }
      },
      requireFn: function(name) {
        return function(options, contentList) {
          expect(arguments.length).to.equal(2);
          expect(options).to.equal(testOptions);
          expect(contentList).to.equal(testState.contentList);
          return 'fake plugin';
        }
      }
    }, testOptions, testState.contentList);
  });


  it('should not load plugins with wrong name', function() {
    var plugins = loadPlugins({
      lazy: false,
      config: {
        devDependencies: {
          'should-not-be-loaded': '^0.0.1',
          'statictemp-global-should-be-loaded': '^0.0.0'
        }
      },
      requireFn: function(name) {
        return function(options, contentList) {
          return 'fake plugin';
        }
      }
    }, testOptions, testState.contentList);

    expect(plugins).to.have.property('shouldBeLoaded');
    expect(plugins).to.not.have.property('shouldNotBeLoaded');
  });



});
