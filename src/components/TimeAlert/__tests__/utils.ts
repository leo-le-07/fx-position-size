import moment from 'moment';
import MockDate from 'mockdate';
import { shouldRingBellOneHour, shouldRingBellFourHours } from '../utils';

describe('shouldRingBellOneHour', () => {
  describe('when current time is not time to ring the bell', () => {
    test('should return false', () => {
      MockDate.set(moment('2019-01-07T04:30:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellOneHour(moment())).toBe(false);

      MockDate.set(moment('2019-01-07T04:59:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellOneHour(moment())).toBe(false);
    });
  });

  describe('when current time is the time to ring the bell', () => {
    test('should return true', () => {
      MockDate.set(moment('2019-01-07T04:59:01+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellOneHour(moment())).toBe(true);

      MockDate.set(moment('2019-01-07T04:59:59+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellOneHour(moment())).toBe(true);
    });
  });
});

describe('shouldRingBellFourHours', () => {
  describe('when current time is not time to ring the bell', () => {
    test('should return false', () => {
      MockDate.set(moment('2019-01-07T03:51:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellFourHours(moment())).toBe(false);

      MockDate.set(moment('2019-01-07T04:59:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellFourHours(moment())).toBe(false);
    });
  });

  describe('when current time is the time to ring the bell', () => {
    test('should return true', () => {
      MockDate.set(moment('2019-01-07T16:59:01+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellFourHours(moment())).toBe(true);

      MockDate.set(moment('2019-01-07T04:59:50+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
      expect(shouldRingBellFourHours(moment())).toBe(true);
    });
  });
});
