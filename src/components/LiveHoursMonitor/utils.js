'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var moment_timezone_1 = __importDefault(require('moment-timezone'));
var lodash_1 = require('lodash');
var getStandardTime = function() {
  return moment_timezone_1
    .default()
    .tz('Europe/Kaliningrad')
    .startOf('day');
};
exports.initializeHoursTimeLine = function() {
  var europeTime = getStandardTime();
  var localTime = europeTime.local();
  var hour = localTime.hour();
  return lodash_1.range(24).reduce(function(accummulator, _) {
    if (hour === 0) {
      accummulator.push(24);
    } else if (hour === 24) {
      accummulator.push(hour);
      hour = 0;
    } else {
      accummulator.push(hour);
    }
    hour += 1;
    return accummulator;
  }, []);
};
var distanceByArea = {
  london: 10,
  newyork: 15,
  sydney: 0,
  tokyo: 2,
};
exports.getWorkingHours = function(name) {
  var europeTime = getStandardTime();
  var localTime = europeTime.local();
  var firstHourInTimeLine = localTime.hour();
  var hour = firstHourInTimeLine + distanceByArea[name];
  return lodash_1.range(9).reduce(function(accummulator, _) {
    accummulator.push(hour);
    if (hour === 24) hour = 0;
    hour += 1;
    return accummulator;
  }, []);
};
