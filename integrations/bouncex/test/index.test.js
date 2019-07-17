'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var BounceX = require('../lib/');

describe('BounceX', function() {
  var analytics;
  var bouncex;
  var options = {
    websiteId: '12345'
  };

  beforeEach(function() {
    analytics = new Analytics();
    bouncex = new BounceX(options);
    analytics.use(BounceX);
    analytics.use(tester);
    analytics.add(bouncex);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    bouncex.reset();
    sandbox();
  });

  it('should have the right settings', function() {
    analytics.compare(BounceX, integration('BounceX').option('websiteId', ''));
  });

  describe('before loading', function() {
    beforeEach(function() {
      analytics.stub(bouncex, 'load');
    });

    describe('#initialize', function() {
      it('should create window.bouncex', function() {
        analytics.assert(!window.bouncex);
        analytics.initialize();
        analytics.assert(window.bouncex);
      });
    });
  });
});
