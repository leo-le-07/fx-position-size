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
var react_router_dom_1 = require('react-router-dom');
var UINavLink = /** @class */ (function(_super) {
  __extends(UINavLink, _super);
  function UINavLink() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  UINavLink.prototype.render = function() {
    var _a = this.props,
      to = _a.to,
      _b = _a.className,
      className = _b === void 0 ? '' : _b,
      _c = _a.childClassName,
      childClassName = _c === void 0 ? '' : _c,
      location = _a.location;
    var isActive = location.pathname === to;
    var parentClassName = className + (isActive ? ' active' : '');
    return react_1.default.createElement(
      'li',
      { className: parentClassName },
      react_1.default.createElement(
        react_router_dom_1.Link,
        { className: childClassName, to: to },
        this.props.children
      )
    );
  };
  return UINavLink;
})(react_1.default.Component);
exports.default = UINavLink;
