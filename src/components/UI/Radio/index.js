'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var UIRadio = function(_a) {
  var options = _a.options,
    selectedOption = _a.selectedOption,
    handleOptionChange = _a.handleOptionChange;
  return react_1.default.createElement(
    'div',
    null,
    options.map(function(option, index) {
      return react_1.default.createElement(
        'div',
        { className: 'radio', key: index },
        react_1.default.createElement(
          'label',
          null,
          react_1.default.createElement('input', {
            type: 'radio',
            value: option.value,
            checked: selectedOption === option.value,
            onChange: handleOptionChange,
          }),
          ' ',
          option.name
        )
      );
    })
  );
};
exports.default = UIRadio;
