"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerVimeo"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lazy/players/Vimeo.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lazy/players/Vimeo.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lazy/utils.js\");\n\nvar _patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lazy/patterns.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SDK_URL = 'https://player.vimeo.com/api/player.js';\nvar SDK_GLOBAL = 'Vimeo';\n\nvar cleanUrl = function cleanUrl(url) {\n  return url.replace('/manage/videos', '');\n};\n\nvar Vimeo = /*#__PURE__*/function (_Component) {\n  _inherits(Vimeo, _Component);\n\n  var _super = _createSuper(Vimeo);\n\n  function Vimeo() {\n    var _this;\n\n    _classCallCheck(this, Vimeo);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"callPlayer\", _utils.callPlayer);\n\n    _defineProperty(_assertThisInitialized(_this), \"duration\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"currentTime\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"secondsLoaded\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"mute\", function () {\n      _this.setMuted(true);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"unmute\", function () {\n      _this.setMuted(false);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"ref\", function (container) {\n      _this.container = container;\n    });\n\n    return _this;\n  }\n\n  _createClass(Vimeo, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.onMount && this.props.onMount(this);\n    }\n  }, {\n    key: \"load\",\n    value: function load(url) {\n      var _this2 = this;\n\n      this.duration = null;\n      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {\n        if (!_this2.container) return;\n        var _this2$props$config = _this2.props.config,\n            playerOptions = _this2$props$config.playerOptions,\n            title = _this2$props$config.title;\n        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({\n          url: cleanUrl(url),\n          autoplay: _this2.props.playing,\n          muted: _this2.props.muted,\n          loop: _this2.props.loop,\n          playsinline: _this2.props.playsinline,\n          controls: _this2.props.controls\n        }, playerOptions));\n\n        _this2.player.ready().then(function () {\n          var iframe = _this2.container.querySelector('iframe');\n\n          iframe.style.width = '100%';\n          iframe.style.height = '100%';\n\n          if (title) {\n            iframe.title = title;\n          }\n        })[\"catch\"](_this2.props.onError);\n\n        _this2.player.on('loaded', function () {\n          _this2.props.onReady();\n\n          _this2.refreshDuration();\n        });\n\n        _this2.player.on('play', function () {\n          _this2.props.onPlay();\n\n          _this2.refreshDuration();\n        });\n\n        _this2.player.on('pause', _this2.props.onPause);\n\n        _this2.player.on('seeked', function (e) {\n          return _this2.props.onSeek(e.seconds);\n        });\n\n        _this2.player.on('ended', _this2.props.onEnded);\n\n        _this2.player.on('error', _this2.props.onError);\n\n        _this2.player.on('timeupdate', function (_ref) {\n          var seconds = _ref.seconds;\n          _this2.currentTime = seconds;\n        });\n\n        _this2.player.on('progress', function (_ref2) {\n          var seconds = _ref2.seconds;\n          _this2.secondsLoaded = seconds;\n        });\n\n        _this2.player.on('bufferstart', _this2.props.onBuffer);\n\n        _this2.player.on('bufferend', _this2.props.onBufferEnd);\n\n        _this2.player.on('playbackratechange', function (e) {\n          return _this2.props.onPlaybackRateChange(e.playbackRate);\n        });\n      }, this.props.onError);\n    }\n  }, {\n    key: \"refreshDuration\",\n    value: function refreshDuration() {\n      var _this3 = this;\n\n      this.player.getDuration().then(function (duration) {\n        _this3.duration = duration;\n      });\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var promise = this.callPlayer('play');\n\n      if (promise) {\n        promise[\"catch\"](this.props.onError);\n      }\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.callPlayer('pause');\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.callPlayer('unload');\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(seconds) {\n      var keepPlaying = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.callPlayer('setCurrentTime', seconds);\n\n      if (!keepPlaying) {\n        this.pause();\n      }\n    }\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(fraction) {\n      this.callPlayer('setVolume', fraction);\n    }\n  }, {\n    key: \"setMuted\",\n    value: function setMuted(muted) {\n      this.callPlayer('setMuted', muted);\n    }\n  }, {\n    key: \"setLoop\",\n    value: function setLoop(loop) {\n      this.callPlayer('setLoop', loop);\n    }\n  }, {\n    key: \"setPlaybackRate\",\n    value: function setPlaybackRate(rate) {\n      this.callPlayer('setPlaybackRate', rate);\n    }\n  }, {\n    key: \"getDuration\",\n    value: function getDuration() {\n      return this.duration;\n    }\n  }, {\n    key: \"getCurrentTime\",\n    value: function getCurrentTime() {\n      return this.currentTime;\n    }\n  }, {\n    key: \"getSecondsLoaded\",\n    value: function getSecondsLoaded() {\n      return this.secondsLoaded;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var display = this.props.display;\n      var style = {\n        width: '100%',\n        height: '100%',\n        overflow: 'hidden',\n        display: display\n      };\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        key: this.props.url,\n        ref: this.ref,\n        style: style\n      });\n    }\n  }]);\n\n  return Vimeo;\n}(_react.Component);\n\nexports[\"default\"] = Vimeo;\n\n_defineProperty(Vimeo, \"displayName\", 'Vimeo');\n\n_defineProperty(Vimeo, \"canPlay\", _patterns.canPlay.vimeo);\n\n_defineProperty(Vimeo, \"forceLoad\", true);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGF6eS9wbGF5ZXJzL1ZpbWVvLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVyw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHFDQUFxQyxtQkFBTyxDQUFDLG1GQUFPOztBQUVwRCxhQUFhLG1CQUFPLENBQUMsK0VBQVU7O0FBRS9CLGdCQUFnQixtQkFBTyxDQUFDLHFGQUFhOztBQUVyQyxzQ0FBc0MsZ0RBQWdELDJCQUEyQixpRUFBaUUsaUJBQWlCOztBQUVuTSx3Q0FBd0MsNkJBQTZCLGNBQWMsOEVBQThFLFNBQVMsb0JBQW9CLHdDQUF3QywrQkFBK0IseUJBQXlCLGlCQUFpQixzRkFBc0YsdUJBQXVCLHNEQUFzRCxxRkFBcUYsc0NBQXNDLDRDQUE0QyxPQUFPLDhCQUE4Qix5QkFBeUIsYUFBYSwwQkFBMEI7O0FBRTl0QiwyQ0FBMkMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGlFQUFpRSxHQUFHLGtDQUFrQzs7QUFFdlUsaUNBQWlDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx1REFBdUQsNENBQTRDLEtBQUssNkNBQTZDLDZFQUE2RSxPQUFPLGlEQUFpRCxtRkFBbUYsT0FBTzs7QUFFdGdCLGtEQUFrRCwwQ0FBMEM7O0FBRTVGLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RDs7QUFFbE0sMkNBQTJDLCtEQUErRCw2RUFBNkUseUVBQXlFLGVBQWUsdURBQXVELEdBQUc7O0FBRXpVLGlDQUFpQyw0RUFBNEUsaUJBQWlCLGFBQWE7O0FBRTNJLGlDQUFpQyw2REFBNkQseUNBQXlDLDhDQUE4QyxpQ0FBaUMsbURBQW1ELDJEQUEyRCxPQUFPLHlDQUF5Qzs7QUFFcFgsa0RBQWtELDBFQUEwRSxlQUFlOztBQUUzSSx3Q0FBd0MsdUJBQXVCLHlGQUF5Rjs7QUFFeEosdUNBQXVDLHdFQUF3RSwwQ0FBMEMsOENBQThDLE1BQU0sdUVBQXVFLElBQUksZUFBZSxZQUFZOztBQUVuVCw4QkFBOEIsZ0dBQWdHLG1EQUFtRDs7QUFFakwsNENBQTRDLGtCQUFrQixrQ0FBa0Msb0VBQW9FLEtBQUssT0FBTyxvQkFBb0I7O0FBRXBNO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxrQkFBa0I7O0FBRWxCOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGF6eS9wbGF5ZXJzL1ZpbWVvLmpzP2ZiYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcblxudmFyIF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ1ZpbWVvJztcblxudmFyIGNsZWFuVXJsID0gZnVuY3Rpb24gY2xlYW5VcmwodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgnL21hbmFnZS92aWRlb3MnLCAnJyk7XG59O1xuXG52YXIgVmltZW8gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFZpbWVvLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFZpbWVvKTtcblxuICBmdW5jdGlvbiBWaW1lbygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmltZW8pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjYWxsUGxheWVyXCIsIF91dGlscy5jYWxsUGxheWVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkdXJhdGlvblwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjdXJyZW50VGltZVwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZWNvbmRzTG9hZGVkXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0TXV0ZWQodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidW5tdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldE11dGVkKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZcIiwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgX3RoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpbWVvLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcbiAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChWaW1lbykge1xuICAgICAgICBpZiAoIV90aGlzMi5jb250YWluZXIpIHJldHVybjtcbiAgICAgICAgdmFyIF90aGlzMiRwcm9wcyRjb25maWcgPSBfdGhpczIucHJvcHMuY29uZmlnLFxuICAgICAgICAgICAgcGxheWVyT3B0aW9ucyA9IF90aGlzMiRwcm9wcyRjb25maWcucGxheWVyT3B0aW9ucyxcbiAgICAgICAgICAgIHRpdGxlID0gX3RoaXMyJHByb3BzJGNvbmZpZy50aXRsZTtcbiAgICAgICAgX3RoaXMyLnBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoX3RoaXMyLmNvbnRhaW5lciwgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdXJsOiBjbGVhblVybCh1cmwpLFxuICAgICAgICAgIGF1dG9wbGF5OiBfdGhpczIucHJvcHMucGxheWluZyxcbiAgICAgICAgICBtdXRlZDogX3RoaXMyLnByb3BzLm11dGVkLFxuICAgICAgICAgIGxvb3A6IF90aGlzMi5wcm9wcy5sb29wLFxuICAgICAgICAgIHBsYXlzaW5saW5lOiBfdGhpczIucHJvcHMucGxheXNpbmxpbmUsXG4gICAgICAgICAgY29udHJvbHM6IF90aGlzMi5wcm9wcy5jb250cm9sc1xuICAgICAgICB9LCBwbGF5ZXJPcHRpb25zKSk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpZnJhbWUgPSBfdGhpczIuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXG4gICAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIGlmcmFtZS50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlbXCJjYXRjaFwiXShfdGhpczIucHJvcHMub25FcnJvcik7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbignbG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG5cbiAgICAgICAgICBfdGhpczIucmVmcmVzaER1cmF0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uUGxheSgpO1xuXG4gICAgICAgICAgX3RoaXMyLnJlZnJlc2hEdXJhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdwYXVzZScsIF90aGlzMi5wcm9wcy5vblBhdXNlKTtcblxuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdzZWVrZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMub25TZWVrKGUuc2Vjb25kcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2VuZGVkJywgX3RoaXMyLnByb3BzLm9uRW5kZWQpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2Vycm9yJywgX3RoaXMyLnByb3BzLm9uRXJyb3IpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBzZWNvbmRzID0gX3JlZi5zZWNvbmRzO1xuICAgICAgICAgIF90aGlzMi5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIHNlY29uZHMgPSBfcmVmMi5zZWNvbmRzO1xuICAgICAgICAgIF90aGlzMi5zZWNvbmRzTG9hZGVkID0gc2Vjb25kcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbignYnVmZmVyc3RhcnQnLCBfdGhpczIucHJvcHMub25CdWZmZXIpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2J1ZmZlcmVuZCcsIF90aGlzMi5wcm9wcy5vbkJ1ZmZlckVuZCk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigncGxheWJhY2tyYXRlY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKGUucGxheWJhY2tSYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWZyZXNoRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVmcmVzaER1cmF0aW9uKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHRoaXMucGxheWVyLmdldER1cmF0aW9uKCkudGhlbihmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgX3RoaXMzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNhbGxQbGF5ZXIoJ3BsYXknKTtcblxuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZVtcImNhdGNoXCJdKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwYXVzZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3VubG9hZCcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZWVrVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHZhciBrZWVwUGxheWluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0Q3VycmVudFRpbWUnLCBzZWNvbmRzKTtcblxuICAgICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZvbHVtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0Vm9sdW1lJywgZnJhY3Rpb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRNdXRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRNdXRlZChtdXRlZCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRNdXRlZCcsIG11dGVkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0TG9vcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb29wKGxvb3ApIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0TG9vcCcsIGxvb3ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRQbGF5YmFja1JhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0UGxheWJhY2tSYXRlJywgcmF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEN1cnJlbnRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNlY29uZHNMb2FkZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlY29uZHNMb2FkZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgZGlzcGxheSA9IHRoaXMucHJvcHMuZGlzcGxheTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgZGlzcGxheTogZGlzcGxheVxuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiB0aGlzLnByb3BzLnVybCxcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmltZW87XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFZpbWVvO1xuXG5fZGVmaW5lUHJvcGVydHkoVmltZW8sIFwiZGlzcGxheU5hbWVcIiwgJ1ZpbWVvJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaW1lbywgXCJjYW5QbGF5XCIsIF9wYXR0ZXJucy5jYW5QbGF5LnZpbWVvKTtcblxuX2RlZmluZVByb3BlcnR5KFZpbWVvLCBcImZvcmNlTG9hZFwiLCB0cnVlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lazy/players/Vimeo.js\n"));

/***/ })

}]);