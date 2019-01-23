import moment from 'moment';
import { getData } from './data';

export interface IEvent {
  title: string;
  country: string;
  date: moment.Moment;
  impact: string;
  forecast: string;
  previous: string;
}

export const getTodayEvents = async (): Promise<IEvent[]> => {
  // const response = await axios.get('https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json', {
  // crossdomain: true,
  // });
  // if (isEmpty(response.data)) return [];

  const response = getData();

  return (
    response.data
      .map(res => ({
        ...res,
        date: moment(res.date, 'YYYY-MM-DDTHH:mm:ssZ')
      }))
      // $FlowFixMe
      .filter(res => res.date.isSame(moment(), 'day'))
  );
};
