'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
require('./App.css');
var Root_1 = __importDefault(require('@/screens/Root'));
var react_router_dom_1 = require('react-router-dom');
var App = function() {
  return react_1.default.createElement(
    react_router_dom_1.BrowserRouter,
    null,
    react_1.default.createElement(
      react_router_dom_1.Route,
      null,
      react_1.default.createElement(
        'div',
        { className: 'App' },
        react_1.default.createElement(Root_1.default, null)
      )
    )
  );
};
exports.default = App;
