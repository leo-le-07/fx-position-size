import moment from 'moment-timezone';
import { range } from 'lodash';

const getStandardTime = () => {
  return moment()
    .tz('Europe/Kaliningrad')
    .startOf('day');
};

export const initializeHoursTimeLine = (): number[] => {
  const europeTime = getStandardTime();
  const localTime = europeTime.local();
  let hour = localTime.hour();
  return range(24).reduce((accummulator, _) => {
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

const distanceByArea = {
  london: 10,
  newyork: 15,
  sydney: 0,
  tokyo: 2
};

export const getWorkingHours = (name: string): number[] => {
  const europeTime = getStandardTime();
  const localTime = europeTime.local();
  const firstHourInTimeLine = localTime.hour();
  let hour = firstHourInTimeLine + distanceByArea[name];
  return range(9).reduce((accummulator, _) => {
    accummulator.push(hour);
    if (hour === 24) hour = 0;
    hour += 1;
    return accummulator;
  }, []);
};
