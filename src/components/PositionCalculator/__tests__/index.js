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
describe('PositionCalculator', function() {
  test('should match snapshot', function() {
    var wrapper = enzyme_1.shallow(
      react_1.default.createElement(index_1.default, null)
    );
    expect(wrapper).toMatchSnapshot();
  });
});
