'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var getImpactColor = function(impact) {
  if (impact === 'High') return 'badge badge-pill badge-danger';
  if (impact === 'Medium') return 'badge badge-pill badge-warning';
  return 'badge badge-pill badge-light';
};
var EventTableRow = function(_a) {
  var event = _a.event,
    isNextEvent = _a.isNextEvent;
  return react_1.default.createElement(
    'tr',
    { className: isNextEvent ? 'table-success' : '' },
    react_1.default.createElement('td', null, event.date.format('HH:mm')),
    react_1.default.createElement(
      'td',
      null,
      event.country,
      ' ',
      react_1.default.createElement(
        'span',
        { className: getImpactColor(event.impact) },
        event.impact
      )
    ),
    react_1.default.createElement('td', null, event.title),
    react_1.default.createElement('td', null, event.forecast),
    react_1.default.createElement('td', null, event.previous)
  );
};
exports.default = EventTableRow;
