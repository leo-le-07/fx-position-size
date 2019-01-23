'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _this = this;
Object.defineProperty(exports, '__esModule', { value: true });
var axios_1 = __importDefault(require('axios'));
var moment_1 = __importDefault(require('moment'));
var axios_mock_adapter_1 = __importDefault(require('axios-mock-adapter'));
var mockdate_1 = __importDefault(require('mockdate'));
var utils_1 = require('../utils');
describe('getTodayEvents', function() {
  var mock = new axios_mock_adapter_1.default(axios_1.default);
  beforeEach(function() {
    mockdate_1.default.set(
      moment_1.default('2019-01-07T04:30:00+07:00', 'YYYY-MM-DDTHH:mm:ssZ')
    );
  });
  afterEach(function() {
    mock.reset();
  });
  test.skip('should return correct result', function() {
    return __awaiter(_this, void 0, void 0, function() {
      var response, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            response = [
              {
                title: 'AIG Manufacturing Index',
                country: 'AUD',
                date: '2019-01-06T16:30:00-05:00',
                impact: 'Low',
                forecast: '',
                previous: '51.3',
              },
              {
                title: 'Monetary Base y/y',
                country: 'JPY',
                date: '2019-01-06T18:50:00-05:00',
                impact: 'Low',
                forecast: '5.8%',
                previous: '6.1%',
              },
              {
                title: 'German Factory Orders m/m',
                country: 'EUR',
                date: '2019-01-09T02:00:00-05:00',
                impact: 'Low',
                forecast: '-0.2%',
                previous: '0.3%',
              },
              {
                title: 'German Retail Sales m/m',
                country: 'EUR',
                date: '2019-01-09T02:00:00-05:00',
                impact: 'Low',
                forecast: '0.4%',
                previous: '-0.3%',
              },
            ];
            mock
              .onGet(
                'https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json'
              )
              .reply(200, response);
            _a = expect;
            return [4 /*yield*/, utils_1.getTodayEvents()];
          case 1:
            _a.apply(void 0, [_b.sent()]).toEqual([
              {
                title: 'AIG Manufacturing Index',
                country: 'AUD',
                date: moment_1.default(
                  '2019-01-06T16:30:00-05:00',
                  'YYYY-MM-DDTHH:mm:ssZ'
                ),
                impact: 'Low',
                forecast: '',
                previous: '51.3',
              },
              {
                title: 'Monetary Base y/y',
                country: 'JPY',
                date: moment_1.default(
                  '2019-01-06T18:50:00-05:00',
                  'YYYY-MM-DDTHH:mm:ssZ'
                ),
                impact: 'Low',
                forecast: '5.8%',
                previous: '6.1%',
              },
            ]);
            return [2 /*return*/];
        }
      });
    });
  });
  test.skip('should return empty when no data return', function() {
    return __awaiter(_this, void 0, void 0, function() {
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            mock
              .onGet(
                'https://cdn-nfs.faireconomy.media/ff_calendar_thisweek.json'
              )
              .reply(200, []);
            _a = expect;
            return [4 /*yield*/, utils_1.getTodayEvents()];
          case 1:
            _a.apply(void 0, [_b.sent()]).toEqual([]);
            return [2 /*return*/];
        }
      });
    });
  });
});
