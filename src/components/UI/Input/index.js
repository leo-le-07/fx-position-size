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
var UIInput = /** @class */ (function(_super) {
  __extends(UIInput, _super);
  function UIInput() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleFocus = function(event) {
      event.target.select();
    };
    return _this;
  }
  UIInput.prototype.render = function() {
    var _a = this.props,
      type = _a.type,
      id = _a.id,
      value = _a.value,
      onChange = _a.onChange,
      className = _a.className;
    return react_1.default.createElement('input', {
      type: type,
      id: id,
      className: className,
      value: value,
      onChange: onChange,
      onFocus: this.handleFocus,
    });
  };
  return UIInput;
})(react_1.default.Component);
exports.default = UIInput;
