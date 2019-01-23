'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var moment_1 = __importDefault(require('moment'));
var PRECEDING_TIME_IN_SECONDS = (60 - 59) * 60;
exports.shouldRingBellOneHour = function(currentTime) {
  var nextHour = currentTime
    .clone()
    .add(1, 'hours')
    .startOf('hour');
  var timeToRing = nextHour
    .clone()
    .subtract(PRECEDING_TIME_IN_SECONDS, 'seconds');
  return currentTime.isBetween(timeToRing, nextHour);
};
exports.shouldRingBellFourHours = function(currentTime) {
  var timeLines = [
    moment_1.default().set({ hour: 1, minute: 0, second: 0 }),
    moment_1.default().set({ hour: 5, minute: 0, second: 0 }),
    moment_1.default().set({ hour: 9, minute: 0, second: 0 }),
    moment_1.default().set({ hour: 13, minute: 0, second: 0 }),
    moment_1.default().set({ hour: 17, minute: 0, second: 0 }),
    moment_1.default().set({ hour: 21, minute: 0, second: 0 }),
  ];
  return timeLines.some(function(time) {
    return currentTime.isBetween(
      time.clone().subtract(PRECEDING_TIME_IN_SECONDS, 'seconds'),
      time
    );
  });
};
