'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var react_router_dom_1 = require('react-router-dom');
var Home_1 = __importDefault(require('screens/Home'));
var Strategy_1 = __importDefault(require('screens/Strategy'));
var Navigation_1 = __importDefault(require('components/Navigation'));
var pathUtils_1 = __importDefault(require('screens/pathUtils'));
var ScreensRoot = function() {
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(react_router_dom_1.Route, {
      path: pathUtils_1.default.ROOT,
      component: Navigation_1.default,
    }),
    react_1.default.createElement(
      react_router_dom_1.Switch,
      null,
      react_1.default.createElement(react_router_dom_1.Route, {
        exact: true,
        path: pathUtils_1.default.ROOT,
        component: Home_1.default,
      }),
      react_1.default.createElement(react_router_dom_1.Route, {
        path: pathUtils_1.default.STRATEGY,
        component: Strategy_1.default,
      })
    )
  );
};
exports.default = ScreensRoot;
