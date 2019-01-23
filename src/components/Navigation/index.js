'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var react_router_dom_1 = require('react-router-dom');
// import logo from 'assets/images/bootstrap-solid.svg';
var NavLink_1 = __importDefault(require('components/UI/NavLink'));
var pathUtils_1 = __importDefault(require('screens/pathUtils'));
var logo = require('../../assets/images/bootstrap-solid.svg');
var Navigation = function(props) {
  return react_1.default.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-dark bg-primary' },
    react_1.default.createElement(
      react_router_dom_1.Link,
      { className: 'navbar-brand', to: pathUtils_1.default.ROOT },
      react_1.default.createElement('img', {
        src: logo,
        width: '30',
        height: '30',
        alt: '',
      })
    ),
    react_1.default.createElement(
      'button',
      {
        className: 'navbar-toggler',
        type: 'button',
        'data-toggle': 'collapse',
        'data-target': '#navbarNavDropdown',
        'aria-controls': 'navbarNavDropdown',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation',
      },
      react_1.default.createElement('span', {
        className: 'navbar-toggler-icon',
      })
    ),
    react_1.default.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarNavDropdown' },
      react_1.default.createElement(
        'ul',
        { className: 'navbar-nav' },
        react_1.default.createElement(
          NavLink_1.default,
          __assign(
            {
              className: 'nav-item',
              childClassName: 'nav-link',
              to: pathUtils_1.default.ROOT,
            },
            props
          ),
          'Home'
        ),
        react_1.default.createElement(
          NavLink_1.default,
          __assign(
            {
              className: 'nav-item',
              childClassName: 'nav-link',
              to: pathUtils_1.default.STRATEGY,
            },
            props
          ),
          'Strategy'
        )
      )
    )
  );
};
exports.default = Navigation;
