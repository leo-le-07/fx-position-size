import axios from 'axios';
import moment from 'moment';
import MockAdapter from 'axios-mock-adapter';
import MockDate from 'mockdate';
import { getTodayEvents } from '../utils';

describe('getTodayEvents', () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    MockDate.set(moment('2019-01-07T04:30:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ'));
  });

  afterEach(() => {
    mock.reset();
  });

  test.skip('should return correct result', async () => {
    const response = [
      {
        title: 'AIG Manufacturing Index',
        country: 'AUD',
        date: '2019-01-06T16:30:00-05:00',
        impact: 'Low',
        forecast: '',
        previous: '51.3'
      },
      {
        title: 'Monetary Base y/y',
        country: 'JPY',
        date: '2019-01-06T18:50:00-05:00',
        impact: 'Low',
        forecast: '5.8%',
        previous: '6.1%'
      },
      {
        title: 'German Factory Orders m/m',
        country: 'EUR',
        date: '2019-01-09T02:00:00-05:00',
        impact: 'Low',
        forecast: '-0.2%',
        previous: '0.3%'
      },
      {
        title: 'German Retail Sales m/m',
        country: 'EUR',
        date: '2019-01-09T02:00:00-05:00',
        impact: 'Low',
        forecast: '0.4%',
        previous: '-0.3%'
      }
    ];
    mock
      .onGet('https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json')
      .reply(200, response);
    expect(await getTodayEvents()).toEqual([
      {
        title: 'AIG Manufacturing Index',
        country: 'AUD',
        date: moment('2019-01-06T16:30:00-05:00', 'YYYY-MM-DDTHH:mm:ssZ'),
        impact: 'Low',
        forecast: '',
        previous: '51.3'
      },
      {
        title: 'Monetary Base y/y',
        country: 'JPY',
        date: moment('2019-01-06T18:50:00-05:00', 'YYYY-MM-DDTHH:mm:ssZ'),
        impact: 'Low',
        forecast: '5.8%',
        previous: '6.1%'
      }
    ]);
  });

  test.skip('should return empty when no data return', async () => {
    mock
      .onGet('https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json')
      .reply(200, []);
    expect(await getTodayEvents()).toEqual([]);
  });
});
