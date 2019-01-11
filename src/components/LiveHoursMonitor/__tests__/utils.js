import moment from 'moment';
import MockDate from 'mockdate';
import { initializeHoursTimeLine, getWorkingHours } from '../utils.js';

beforeEach(() => {
  MockDate.set(moment('2019-01-09T13:02:54+0800', 'YYYY-MM-DDTHH:mm:ssZ'));
});

describe('initializeHoursTimeLine', () => {
  test('should return correct hours time line', () => {
    expect(initializeHoursTimeLine()).toEqual([
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

describe('getWorkingHours', () => {
  test('should return correct working hours for london', () => {
    expect(getWorkingHours('london')).toEqual([
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
  test('should return correct working hours for new york', () => {
    expect(getWorkingHours('newyork')).toEqual([
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
  test('should return correct working hours for sydney', () => {
    expect(getWorkingHours('sydney')).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });
  test('should return correct working hours for tokyo', () => {
    expect(getWorkingHours('tokyo')).toEqual([7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});
