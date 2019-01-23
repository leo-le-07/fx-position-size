'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var Row_1 = __importDefault(require('../Row'));
var getNextTimeEvent = function(currentTime, events) {
  var event = events.find(function(e) {
    return e.date.isSameOrAfter(currentTime, 'minute');
  });
  if (event) return event.date;
  return null;
};
var EventTableBody = function(_a) {
  var currentTime = _a.currentTime,
    events = _a.events;
  var nextTimeEvent = getNextTimeEvent(currentTime, events);
  return react_1.default.createElement(
    'tbody',
    null,
    events.map(function(event, index) {
      return react_1.default.createElement(Row_1.default, {
        key: index,
        event: event,
        isNextEvent: nextTimeEvent
          ? nextTimeEvent.isSame(event.date, 'minute')
          : false,
      });
    })
  );
};
exports.default = EventTableBody;
