'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
// flow
var react_1 = __importDefault(require('react'));
var moment_1 = __importDefault(require('moment'));
var Body_1 = __importDefault(require('./Body'));
var EventTable = function(_a) {
  var currentTime = _a.currentTime,
    events = _a.events;
  return react_1.default.createElement(
    'table',
    { className: 'table' },
    react_1.default.createElement(
      'thead',
      null,
      react_1.default.createElement(
        'tr',
        null,
        react_1.default.createElement(
          'th',
          { scope: 'col' },
          moment_1.default().format('DD MMM')
        ),
        react_1.default.createElement('th', { scope: 'col' }),
        react_1.default.createElement('th', { scope: 'col' }, 'Title'),
        react_1.default.createElement('th', { scope: 'col' }, 'Forecast'),
        react_1.default.createElement('th', { scope: 'col' }, 'Previous')
      )
    ),
    react_1.default.createElement(Body_1.default, {
      currentTime: currentTime,
      events: events,
    })
  );
};
exports.default = EventTable;
