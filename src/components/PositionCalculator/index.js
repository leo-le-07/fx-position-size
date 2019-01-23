'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var Input_1 = __importDefault(require('components/UI/Input'));
var utils_1 = require('./utils');
var PositionCalculator = /** @class */ (function(_super) {
  __extends(PositionCalculator, _super);
  function PositionCalculator() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      accountSize: 800,
      riskMoney: 20,
      stopLossPips: 10,
      pair: 'EURUSD',
      riskRatio: null,
      lots: null,
    };
    _this.calculate = function() {
      return __awaiter(_this, void 0, void 0, function() {
        var _a,
          pair,
          riskMoney,
          stopLossPips,
          accountSize,
          usdPerPip,
          lotsResult;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.state),
                (pair = _a.pair),
                (riskMoney = _a.riskMoney),
                (stopLossPips = _a.stopLossPips),
                (accountSize = _a.accountSize);
              return [
                4 /*yield*/,
                utils_1.calculateUsdPerPip(pair.toUpperCase()),
              ];
            case 1:
              usdPerPip = _b.sent();
              if (!usdPerPip)
                return [
                  2 /*return*/,
                  this.setState({ lots: null, riskRatio: null }),
                ];
              lotsResult = riskMoney / (usdPerPip * stopLossPips);
              this.setState({
                lots: lotsResult,
                riskRatio: (riskMoney / accountSize) * 100,
              });
              return [2 /*return*/];
          }
        });
      });
    };
    _this.handleOnChangeFor = function(propertyName) {
      return function(event) {
        var _a;
        var value = event.target.value;
        _this.setState(((_a = {}), (_a[propertyName] = value), _a));
      };
    };
    return _this;
  }
  PositionCalculator.prototype.render = function() {
    var _a = this.state,
      accountSize = _a.accountSize,
      riskMoney = _a.riskMoney,
      stopLossPips = _a.stopLossPips,
      pair = _a.pair,
      riskRatio = _a.riskRatio,
      lots = _a.lots;
    return react_1.default.createElement(
      'div',
      { className: 'card mb-4' },
      react_1.default.createElement(
        'div',
        { className: 'card-header' },
        'Position Size Calculator'
      ),
      react_1.default.createElement(
        'div',
        { className: 'card-body row' },
        react_1.default.createElement(
          'div',
          { className: 'col-md-8' },
          react_1.default.createElement(
            'h5',
            { className: 'card-title' },
            'Inputs'
          ),
          react_1.default.createElement(
            'div',
            { className: 'form-group row' },
            react_1.default.createElement(
              'label',
              { htmlFor: 'account-size', className: 'col-md-4' },
              'Account Size (USD)'
            ),
            react_1.default.createElement(
              'div',
              { className: 'col-md-8' },
              react_1.default.createElement(Input_1.default, {
                type: 'number',
                id: 'account-size',
                value: accountSize,
                onChange: this.handleOnChangeFor('accountSize'),
                className: 'form-control',
              })
            )
          ),
          react_1.default.createElement(
            'div',
            { className: 'form-group row' },
            react_1.default.createElement(
              'label',
              { htmlFor: 'risk-money', className: 'col-md-4' },
              'Risk Money (USD)'
            ),
            react_1.default.createElement(
              'div',
              { className: 'col-md-8' },
              react_1.default.createElement(Input_1.default, {
                type: 'number',
                id: 'risk-money',
                value: riskMoney,
                onChange: this.handleOnChangeFor('riskMoney'),
                className: 'form-control',
              })
            )
          ),
          react_1.default.createElement(
            'div',
            { className: 'form-group row' },
            react_1.default.createElement(
              'label',
              { htmlFor: 'stop-loss-pips', className: 'col-md-4' },
              'Stop-Loss (pips)'
            ),
            react_1.default.createElement(
              'div',
              { className: 'col-md-8' },
              react_1.default.createElement(Input_1.default, {
                type: 'number',
                id: 'stop-loss-pips',
                value: stopLossPips,
                onChange: this.handleOnChangeFor('stopLossPips'),
                className: 'form-control',
              })
            )
          ),
          react_1.default.createElement(
            'div',
            { className: 'form-group row' },
            react_1.default.createElement(
              'label',
              { htmlFor: 'current-pair', className: 'col-md-4' },
              'Current Pair'
            ),
            react_1.default.createElement(
              'div',
              { className: 'col-md-8' },
              react_1.default.createElement(Input_1.default, {
                type: 'text',
                id: 'current-pair',
                value: pair,
                onChange: this.handleOnChangeFor('pair'),
                className: 'form-control',
              })
            )
          ),
          react_1.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.calculate },
            'Calculate'
          )
        ),
        react_1.default.createElement(
          'div',
          { className: 'col-md-4' },
          react_1.default.createElement(
            'h5',
            { className: 'card-title' },
            'Result'
          ),
          react_1.default.createElement(
            'label',
            null,
            'Risk Ratio: ',
            riskRatio || 'N/A',
            ' %'
          ),
          react_1.default.createElement(
            'label',
            null,
            'Lots: ',
            lots ? lots.toFixed(3) : 'N/A'
          )
        )
      )
    );
  };
  return PositionCalculator;
})(react_1.default.Component);
exports.default = PositionCalculator;
