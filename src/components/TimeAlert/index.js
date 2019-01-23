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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var moment_1 = __importDefault(require('moment'));
var Radio_1 = __importDefault(require('components/UI/Radio'));
var DingSound_1 = __importStar(require('components/UI/DingSound'));
var utils_1 = require('./utils');
var OPTION_VALUES = {
  NONE: 'none',
  ONE_HOUR: 'one',
  FOUR_HOUR: 'four',
};
var OPTIONS = [
  { value: OPTION_VALUES.NONE, name: 'None' },
  { value: OPTION_VALUES.ONE_HOUR, name: 'Every 1 hour' },
  { value: OPTION_VALUES.FOUR_HOUR, name: 'Every 4 hours' },
];
var TimeAlert = /** @class */ (function(_super) {
  __extends(TimeAlert, _super);
  function TimeAlert() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      currentTime: moment_1.default(),
      finishRingBell: false,
      ringBell: false,
      timeOption: OPTION_VALUES.ONE_HOUR,
    };
    _this.handleOptionChange = function(e) {
      _this.setState({
        timeOption: e.currentTarget.value,
        finishRingBell: false,
      });
    };
    _this.tick = function() {
      _this.setState({ currentTime: moment_1.default() });
    };
    return _this;
  }
  TimeAlert.prototype.componentDidMount = function() {
    this.timer = window.setInterval(this.tick, 6000);
  };
  TimeAlert.prototype.componentWillUnmount = function() {
    clearInterval(this.timer);
  };
  TimeAlert.prototype.componentDidUpdate = function(_a, prevState) {
    if (!prevState.currentTime.isSame(this.state.currentTime)) {
      var isOnTime =
        (this.state.timeOption === OPTION_VALUES.ONE_HOUR &&
          utils_1.shouldRingBellOneHour(this.state.currentTime)) ||
        (this.state.timeOption === OPTION_VALUES.FOUR_HOUR &&
          utils_1.shouldRingBellFourHours(this.state.currentTime));
      if (isOnTime && !this.state.finishRingBell) {
        this.setState({ ringBell: true, finishRingBell: true });
      } else {
        this.setState({ ringBell: false });
      }
      // Reset ringbell whenever go to new hour
      if (
        this.state.timeOption !== OPTION_VALUES.NONE &&
        this.state.currentTime.minute() === 0
      ) {
        this.setState({ finishRingBell: false });
      }
    }
  };
  TimeAlert.prototype.render = function() {
    var timeOption = this.state.timeOption;
    return react_1.default.createElement(
      'div',
      { className: 'card mb-4' },
      react_1.default.createElement(
        'div',
        { className: 'card-header' },
        'Time Alert',
        react_1.default.createElement('br', null)
      ),
      react_1.default.createElement(
        'div',
        { className: 'card-body' },
        react_1.default.createElement(Radio_1.default, {
          options: OPTIONS,
          selectedOption: timeOption,
          handleOptionChange: this.handleOptionChange,
        })
      ),
      this.state.ringBell &&
        react_1.default.createElement(DingSound_1.default, {
          status: DingSound_1.STATUS.PLAY,
        })
    );
  };
  return TimeAlert;
})(react_1.default.Component);
exports.default = TimeAlert;
