'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importDefault(require('react'));
var react_sound_1 = __importDefault(require('react-sound'));
var defaultSound = require('assets/sounds/noti_5s.mp3');
exports.STATUS = {
  PLAY: react_sound_1.default.status.PLAYING,
  STOP: react_sound_1.default.status.STOPPED,
};
var UIDingSound = function(_a) {
  var status = _a.status,
    _b = _a.url,
    url = _b === void 0 ? defaultSound : _b;
  console.log('Make sound');
  return react_1.default.createElement(react_sound_1.default, {
    url: url,
    playStatus: status,
  });
};
exports.default = UIDingSound;
