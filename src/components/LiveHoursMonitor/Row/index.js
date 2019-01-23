'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var Row = function(_a) {
  var hoursLine = _a.hoursLine,
    name = _a.name,
    workingHours = _a.workingHours,
    currentTime = _a.currentTime;
  var tdColumnSpans = [];
  var i = 0;
  while (i < hoursLine.length) {
    if (workingHours.includes(hoursLine[i])) {
      tdColumnSpans.push({
        value: 9,
        color: workingHours.includes(currentTime.hour())
          ? 'table-primary'
          : 'table-secondary',
      });
      i += 9;
    } else {
      tdColumnSpans.push({
        value: 1,
        color: 'table-light',
      });
      i += 1;
    }
  }
  return react_1.default.createElement(
    'tr',
    null,
    tdColumnSpans.map(function(tdCol, index) {
      return react_1.default.createElement(
        'td',
        {
          colSpan: tdCol.value,
          key: index,
          className: 'text-center ' + tdCol.color,
        },
        tdCol.value > 1 ? name : ''
      );
    })
  );
};
exports.default = Row;
