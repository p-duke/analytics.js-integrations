'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `BounceX` integration
 */

var BounceX = (module.exports = integration('BounceX')
  .option('websiteId', '')
  .tag(
    '<script async="" id="bounceXScript" src="https://tag.bounceexchange.com/{{ websiteId }}/i.js"></script>'
  ));

/**
 * Initialize BounceX
 */

BounceX.prototype.initialize = function() {
  window.bouncex = window.bouncex || [];
  this.ready();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

BounceX.prototype.loaded = function() {
  return !!window.bouncex;
};
