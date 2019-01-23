'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var enzyme_1 = require('enzyme');
var index_1 = __importDefault(require('../index'));
exports.shouldRingBellOneHour = function(currentTime) {
  var nextHour = currentTime
    .clone()
    .add(1, 'hours')
    .startOf('hour');
  var timeToRing = nextHour.clone().subtract(50, 'seconds');
  return currentTime.isBetween(timeToRing, nextHour);
};
describe('UIRadio', function() {
  test('should match snapshot', function() {
    var options = [
      { value: 'value-1', name: 'Value 1' },
      { value: 'value-2', name: 'Value 2' },
      { value: 'value-3', name: 'Value 3' },
    ];
    var wrapper = enzyme_1.mount(
      react_1.default.createElement(index_1.default, {
        options: options,
        selectedOption: 'value-1',
        handleOptionChange: function() {},
      })
    );
    expect(wrapper).toMatchSnapshot();
  });
});
