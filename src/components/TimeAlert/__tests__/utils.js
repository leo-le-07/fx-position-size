'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var moment_1 = __importDefault(require('moment'));
var mockdate_1 = __importDefault(require('mockdate'));
var utils_1 = require('../utils');
describe('shouldRingBellOneHour', function() {
  describe('when current time is not time to ring the bell', function() {
    test('should return false', function() {
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:30:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellOneHour(moment_1.default())).toBe(false);
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:59:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellOneHour(moment_1.default())).toBe(false);
    });
  });
  describe('when current time is the time to ring the bell', function() {
    test('should return true', function() {
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:59:01+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellOneHour(moment_1.default())).toBe(true);
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:59:59+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellOneHour(moment_1.default())).toBe(true);
    });
  });
});
describe('shouldRingBellFourHours', function() {
  describe('when current time is not time to ring the bell', function() {
    test('should return false', function() {
      mockdate_1.default.set(
        moment_1.default('2019-01-07T03:51:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellFourHours(moment_1.default())).toBe(false);
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:59:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellFourHours(moment_1.default())).toBe(false);
    });
  });
  describe('when current time is the time to ring the bell', function() {
    test('should return true', function() {
      mockdate_1.default.set(
        moment_1.default('2019-01-07T16:59:01+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellFourHours(moment_1.default())).toBe(true);
      mockdate_1.default.set(
        moment_1.default('2019-01-07T04:59:50+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
      );
      expect(utils_1.shouldRingBellFourHours(moment_1.default())).toBe(true);
    });
  });
});
