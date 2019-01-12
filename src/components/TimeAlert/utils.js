// @flow

import moment from 'moment';
import type Moment from 'moment';

const PRECEDING_TIME_IN_SECONDS = (60 - 1) * 60;

export const shouldRingBellOneHour = (currentTime: Moment): boolean => {
  const nextHour = currentTime
    .clone()
    .add(1, 'hours')
    .startOf('hour');
  const timeToRing = nextHour
    .clone()
    .subtract(PRECEDING_TIME_IN_SECONDS, 'seconds');
  return currentTime.isBetween(timeToRing, nextHour);
};

export const shouldRingBellFourHours = (currentTime: Moment): boolean => {
  const timeLines = [
    moment().set({ hour: 1, minute: 0, second: 0 }),
    moment().set({ hour: 5, minute: 0, second: 0 }),
    moment().set({ hour: 9, minute: 0, second: 0 }),
    moment().set({ hour: 13, minute: 0, second: 0 }),
    moment().set({ hour: 17, minute: 0, second: 0 }),
    moment().set({ hour: 21, minute: 0, second: 0 }),
  ];

  return timeLines.some(time =>
    currentTime.isBetween(
      time.clone().subtract(PRECEDING_TIME_IN_SECONDS, 'seconds'),
      time
    )
  );
};
