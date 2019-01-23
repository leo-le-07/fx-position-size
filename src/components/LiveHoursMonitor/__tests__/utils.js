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
beforeEach(function() {
  mockdate_1.default.set(
    moment_1.default('2019-01-09T13:02:54+0800', 'YYYY-MM-DDTHH:mm:ssZ')
  );
});
describe('initializeHoursTimeLine', function() {
  test('should return correct hours time line', function() {
    expect(utils_1.initializeHoursTimeLine()).toEqual([
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      1,
      2,
      3,
      4,
    ]);
  });
});
describe('getWorkingHours', function() {
  test('should return correct working hours for london', function() {
    expect(utils_1.getWorkingHours('london')).toEqual([
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ]);
  });
  test('should return correct working hours for new york', function() {
    expect(utils_1.getWorkingHours('newyork')).toEqual([
      20,
      21,
      22,
      23,
      24,
      1,
      2,
      3,
      4,
    ]);
  });
  test('should return correct working hours for sydney', function() {
    expect(utils_1.getWorkingHours('sydney')).toEqual([
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
    ]);
  });
  test('should return correct working hours for tokyo', function() {
    expect(utils_1.getWorkingHours('tokyo')).toEqual([
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
    ]);
  });
});
