(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ColorTools"] = factory();
	else
		root["ColorTools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Converter = __webpack_require__(1);

	var Converter = _interopRequireWildcard(_Converter);

	var _Validator = __webpack_require__(2);

	var Validator = _interopRequireWildcard(_Validator);

	var _Parser = __webpack_require__(3);

	var Parser = _interopRequireWildcard(_Parser);

	var _Ruler = __webpack_require__(4);

	var _Ruler2 = _interopRequireDefault(_Ruler);

	var _Gradient = __webpack_require__(5);

	var _Gradient2 = _interopRequireDefault(_Gradient);

	var _Input = __webpack_require__(6);

	var _Input2 = _interopRequireDefault(_Input);

	var _Swatch = __webpack_require__(7);

	var _Swatch2 = _interopRequireDefault(_Swatch);

	var _Saturation = __webpack_require__(8);

	var _Saturation2 = _interopRequireDefault(_Saturation);

	var _Hue = __webpack_require__(9);

	var _Hue2 = _interopRequireDefault(_Hue);

	var _Opacity = __webpack_require__(10);

	var _Opacity2 = _interopRequireDefault(_Opacity);

	var _Lightness = __webpack_require__(11);

	var _Lightness2 = _interopRequireDefault(_Lightness);

	var _Wheel = __webpack_require__(12);

	var _Wheel2 = _interopRequireDefault(_Wheel);

	var _NoviColorPicker = __webpack_require__(13);

	var _NoviColorPicker2 = _interopRequireDefault(_NoviColorPicker);

	var _NoviGradientTool = __webpack_require__(14);

	var _NoviGradientTool2 = _interopRequireDefault(_NoviGradientTool);

	var _EnsoColorPicker = __webpack_require__(15);

	var _EnsoColorPicker2 = _interopRequireDefault(_EnsoColorPicker);

	var _EnsoGradientTool = __webpack_require__(16);

	var _EnsoGradientTool2 = _interopRequireDefault(_EnsoGradientTool);

	var _EnsoGradientRuler = __webpack_require__(17);

	var _EnsoGradientRuler2 = _interopRequireDefault(_EnsoGradientRuler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = {
	    Converter: Converter, Validator: Validator, Parser: Parser,
	    Ruler: _Ruler2.default, Gradient: _Gradient2.default, Input: _Input2.default, Swatch: _Swatch2.default, Saturation: _Saturation2.default, Hue: _Hue2.default, Opacity: _Opacity2.default, Lightness: _Lightness2.default, Wheel: _Wheel2.default,
	    NoviColorPicker: _NoviColorPicker2.default, NoviGradientTool: _NoviGradientTool2.default, EnsoColorPicker: _EnsoColorPicker2.default, EnsoGradientTool: _EnsoGradientTool2.default, EnsoGradientRuler: _EnsoGradientRuler2.default
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ })
/******/ ])
});
;