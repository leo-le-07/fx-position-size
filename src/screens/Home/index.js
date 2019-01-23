'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var PositionCalculator_1 = __importDefault(
  require('components/PositionCalculator')
);
var LiveHoursMonitor_1 = __importDefault(
  require('components/LiveHoursMonitor')
);
var Event_1 = __importDefault(require('components/Event'));
var TimeAlert_1 = __importDefault(require('components/TimeAlert'));
var ScreensHome = function() {
  return react_1.default.createElement(
    'div',
    { className: 'container' },
    react_1.default.createElement(
      'div',
      { className: 'row' },
      react_1.default.createElement(
        'div',
        { className: 'col-md-6' },
        react_1.default.createElement(PositionCalculator_1.default, null)
      ),
      react_1.default.createElement(
        'div',
        { className: 'col-md-6' },
        react_1.default.createElement(LiveHoursMonitor_1.default, null)
      )
    ),
    react_1.default.createElement(Event_1.default, null),
    react_1.default.createElement(TimeAlert_1.default, null)
  );
};
exports.default = ScreensHome;
