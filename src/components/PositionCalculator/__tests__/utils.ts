import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { calculateUsdPerPip } from '../utils';

describe('calculateUsdPerPip', () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {});

  afterEach(() => {
    mock.restore();
  });

  test('should return null when pair is invalid', async () => {
    const response = [
      {
        symbol: 'EURUSD',
        price: '1.478'
      }
    ];
    mock
      .onGet(
        'https://forex.1forge.com/1.0.1/quotes?pairs=EEE&api_key=mFtJ9elrcPsjqexv1Aky0zdqsWsQs4jk'
      )
      .reply(200, response);
    const result = await calculateUsdPerPip('EEE');
    expect(result).toBe(null);
  });

  test('should return correct result when pair is valid', async () => {
    const response = [
      {
        symbol: 'EURUSD',
        price: '1.478'
      }
    ];
    mock
      .onGet(
        'https://forex.1forge.com/1.0.1/quotes?pairs=EEE&api_key=mFtJ9elrcPsjqexv1Aky0zdqsWsQs4jk'
      )
      .reply(200, response);
    const result = await calculateUsdPerPip('EURUSD');
    expect(result!.toFixed(5)).toBe('10.00000');
  });
});
