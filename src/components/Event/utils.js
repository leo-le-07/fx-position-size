// @flow

import axios from 'axios';
import moment from 'moment';
import type Moment from 'moment';
import { isEmpty } from 'lodash';
import { getData } from './data.js';

export type EventType = {
  title: string,
  country: string,
  date: Moment,
  impact: string,
  forecast: string,
  previous: string
};

export const getTodayEvents = async (): Promise<EventType[]> => {
  // const response = await axios.get('https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json', {
  // crossdomain: true,
  // });
  // if (isEmpty(response.data)) return [];

  const response = getData();

  return (
    response.data
      .map(res => ({
        ...res,
        date: moment(res.date, 'YYYY-MM-DDTHH:mm:ssZ'),
      }))
      // $FlowFixMe
      .filter(res => res.date.isSame(moment(), 'day'))
  );
};
