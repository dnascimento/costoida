'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
  chalk = require('chalk'),
  path = require('path'),
  influx = require('influx');

// Initialize Mongoose
module.exports.connect = function (cb) {
  var _this = this;
  var db = influx(config.influx);
  // Call callback FN
  if (cb) cb(db);
};

module.exports.disconnect = function (cb) {
  //TODO
};
