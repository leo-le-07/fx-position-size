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
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var moment_1 = __importDefault(require('moment'));
var Row_1 = __importDefault(require('./Row'));
var utils_1 = require('./utils');
var LiveHoursMonitor = /** @class */ (function(_super) {
  __extends(LiveHoursMonitor, _super);
  function LiveHoursMonitor() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      hoursTimeLine: utils_1.initializeHoursTimeLine(),
      areas: {
        london: {
          workingHours: utils_1.getWorkingHours('london'),
          name: 'London',
        },
        newyork: {
          workingHours: utils_1.getWorkingHours('newyork'),
          name: 'New York',
        },
        sydney: {
          workingHours: utils_1.getWorkingHours('sydney'),
          name: 'Sydney',
        },
        tokyo: {
          workingHours: utils_1.getWorkingHours('tokyo'),
          name: 'Tokyo',
        },
      },
      currentTime: moment_1.default(),
    };
    _this.tick = function() {
      _this.setState({ currentTime: moment_1.default() });
    };
    return _this;
  }
  LiveHoursMonitor.prototype.componentDidMount = function() {
    this.timer = window.setInterval(this.tick, 50);
  };
  LiveHoursMonitor.prototype.componentWillUnmount = function() {
    clearInterval(this.timer);
  };
  LiveHoursMonitor.prototype.render = function() {
    var _a = this.state,
      hoursTimeLine = _a.hoursTimeLine,
      areas = _a.areas,
      currentTime = _a.currentTime;
    return react_1.default.createElement(
      'div',
      { className: 'card mb-4' },
      react_1.default.createElement(
        'div',
        { className: 'card-header' },
        'Live Hours Monitor',
        react_1.default.createElement('br', null),
        react_1.default.createElement(
          'h2',
          { className: 'text-danger' },
          currentTime.format('HH:mm:ss')
        )
      ),
      react_1.default.createElement(
        'div',
        { className: 'card-body table-responsive' },
        react_1.default.createElement(
          'table',
          { className: 'table table-bordered' },
          react_1.default.createElement(
            'thead',
            null,
            react_1.default.createElement(
              'tr',
              null,
              hoursTimeLine.map(function(h, index) {
                return react_1.default.createElement(
                  'th',
                  {
                    key: index,
                    scope: 'col',
                    className: currentTime.hour() === h ? 'table-primary' : '',
                  },
                  h
                );
              })
            )
          ),
          react_1.default.createElement(
            'tbody',
            null,
            Object.keys(areas).map(function(key, index) {
              return react_1.default.createElement(Row_1.default, {
                key: index,
                name: areas[key].name,
                workingHours: areas[key].workingHours,
                hoursLine: hoursTimeLine,
                currentTime: currentTime,
              });
            })
          )
        )
      )
    );
  };
  return LiveHoursMonitor;
})(react_1.default.Component);
exports.default = LiveHoursMonitor;
