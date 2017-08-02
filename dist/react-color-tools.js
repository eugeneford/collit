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

	var _Parser = __webpack_require__(6);

	var Parser = _interopRequireWildcard(_Parser);

	var _Ruler = __webpack_require__(7);

	var _Ruler2 = _interopRequireDefault(_Ruler);

	var _Gradient = __webpack_require__(8);

	var _Gradient2 = _interopRequireDefault(_Gradient);

	var _Input = __webpack_require__(9);

	var _Input2 = _interopRequireDefault(_Input);

	var _Swatch = __webpack_require__(10);

	var _Swatch2 = _interopRequireDefault(_Swatch);

	var _Saturation = __webpack_require__(11);

	var _Saturation2 = _interopRequireDefault(_Saturation);

	var _Hue = __webpack_require__(12);

	var _Hue2 = _interopRequireDefault(_Hue);

	var _Opacity = __webpack_require__(13);

	var _Opacity2 = _interopRequireDefault(_Opacity);

	var _Lightness = __webpack_require__(14);

	var _Lightness2 = _interopRequireDefault(_Lightness);

	var _Wheel = __webpack_require__(15);

	var _Wheel2 = _interopRequireDefault(_Wheel);

	var _NoviColorPicker = __webpack_require__(16);

	var _NoviColorPicker2 = _interopRequireDefault(_NoviColorPicker);

	var _NoviGradientTool = __webpack_require__(17);

	var _NoviGradientTool2 = _interopRequireDefault(_NoviGradientTool);

	var _EnsoColorPicker = __webpack_require__(18);

	var _EnsoColorPicker2 = _interopRequireDefault(_EnsoColorPicker);

	var _EnsoGradientTool = __webpack_require__(19);

	var _EnsoGradientTool2 = _interopRequireDefault(_EnsoGradientTool);

	var _EnsoGradientRuler = __webpack_require__(20);

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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.hexToRgb = hexToRgb;
	exports.hexToHsl = hexToHsl;
	exports.rgbToHex = rgbToHex;
	exports.rgbToHsl = rgbToHsl;
	exports.hslToHex = hslToHex;
	exports.hslToRgb = hslToRgb;

	var _Validator = __webpack_require__(2);

	var Validator = _interopRequireWildcard(_Validator);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Converts an HEX color value to RGB.
	 *
	 * @param  {string} hex    The color in hex format. For example: "#333".
	 * @return {Object}        The RGB color object..
	 * @throws {Error}         Will throw an error if the argument is not a string
	 * @example
	 * rgb = Converter.hexToRgb("#333"); // rgb => {r:51, g:51, b: 51};
	 */
	function hexToRgb(hex) {
	    if (typeof hex !== 'string') throw new TypeError("Type of " + hex + " is not a String!");
	    if (!Validator.isHex(hex)) throw new Error("Invalid hex color");

	    var color = hex;

	    // convert short hex form to full
	    if (color.length === 4) color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];

	    var r = parseInt(color.substring(1, 3), 16);
	    var g = parseInt(color.substring(5, 7), 16);
	    var b = parseInt(color.substring(3, 5), 16);
	    return { r: r, g: g, b: b };
	}

	/**
	 * Converts an HEX color value to HSL.
	 * Converting hex to hsl is done using a additional converting to RGB. HEX -> RGB -> HSL.
	 *
	 * @param  {string} hex    The color in hex format.
	 * @return {Object}        The HSL color object.
	 * @example
	 * hsl = Converter.hexToHsl("#333"); // hsl => {h: 0, s: 0, l: 0.2};
	 */
	function hexToHsl(hex) {
	    return rgbToHsl(hexToRgb(hex));
	}

	/**
	 * Converts an RGB color value to HEX.
	 * Assumes r, g, and b are contained in the set [0, 255] and
	 * returns h in the set [0, 360], s and l in the set [0, 1].
	 *
	 * @param  {Object} rgb     The RGB color object. For example: {r: 51, g: 51, b: 51}.
	 * @return {string}         The hex color.
	 * @example
	 * hex = Converter.rgbToHex({r: 51, g: 51, b: 51}); // hex => "#333";
	 */
	function rgbToHex(rgb) {
	    if ((typeof rgb === "undefined" ? "undefined" : _typeof(rgb)) !== 'object') throw new TypeError("Type of " + rgb + " is not an Object!");
	    if (rgb.r == null || rgb.g == null || rgb.b == null) throw new Error("Invalid RGB color");

	    var hex = ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);

	    // checking for hex short form
	    if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) hex = hex[0] + hex[2] + hex[4];
	    return "#" + hex;
	}

	/**
	 * Converts an RGB color value to HSL.
	 * Assumes r, g, and b are contained in the set [0, 255] and
	 * returns h in the set [0, 360], s and l in the set [0, 1].
	 *
	 * @param  {Object} rgb     The RGB color object. For example: {r: 51, g: 51, b: 51}.
	 * @throws {Error}          Will throw an error if the argument is not an Object
	 * @return {Object}         The HSL color object.
	 * @example
	 * hsl = Converter.rgbToHsl({r: 11, g: 11, b: 11}); // hsl => {h: 0, s: 0, l: 0.04};
	 */
	function rgbToHsl(rgb) {
	    if ((typeof rgb === "undefined" ? "undefined" : _typeof(rgb)) !== 'object') throw new TypeError("Type of " + rgb + " is not an Object!");
	    if (rgb.r == null || rgb.g == null || rgb.b == null) throw new Error("Invalid RGB color");

	    var r = rgb.r / 255,
	        g = rgb.g / 255,
	        b = rgb.b / 255;

	    var max = Math.max(r, g, b),
	        min = Math.min(r, g, b);
	    var h = void 0,
	        s = void 0,
	        l = (max + min) / 2;

	    if (max === min) {
	        h = s = 0;
	    } else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

	        switch (max) {
	            case r:
	                h = (g - b) / d + (g < b ? 6 : 0);
	                break;
	            case g:
	                h = (b - r) / d + 2;
	                break;
	            case b:
	                h = (r - g) / d + 4;
	                break;
	        }

	        h /= 6;
	    }

	    h = Math.round(h * 360);
	    s = Math.round(s * 100) / 100;
	    l = Math.round(l * 100) / 100;

	    return { h: h, s: s, l: l };
	}

	/**
	 * Converts an HSL color value to Hex.
	 * Assumes h is contained in the set [0, 360], s and l are contained in the set [0, 1]
	 * Converting hsl to hex is done using a additional converting to RGB. HSL -> RGB -> HEX.
	 *
	 * @param  {Object} hsl    The HSL color object. For example: {h: 120, s: 0.5, l: 0.5}.
	 * @return {string}        The color in hex format.
	 * @example
	 * hex = Converter.hslToHex({h: 0, s: 0.5, l: 0.3}); // hex => "#732626;
	 */
	function hslToHex(hsl) {
	    return rgbToHex(hslToRgb(hsl));
	}

	/**
	 * Converts an HSL color value to RGB.
	 * Assumes h is contained in the set [0, 360], s and l are contained in the set [0, 1] and
	 * returns r,g and b in the set [0, 255].
	 *
	 * @param  {Object} hsl    The HSL color object. For example: {h: 120, s: 0.5, l: 0.5}.
	 * @throws {Error}         Will throw an error if the argument is not an Object
	 * @return {Object}        The RGB color object.
	 * @example
	 * rgb = Converter.hslToRgb({h: 300, s: 0.5, l: 0.5}); // rgb => {r: 191, g: 64, b: 191};
	 */
	function hslToRgb(hsl) {
	    if ((typeof hsl === "undefined" ? "undefined" : _typeof(hsl)) !== 'object') throw new TypeError("Type of " + hsl + " is not an Object!");

	    if (hsl.h == null || hsl.s == null || hsl.l == null) throw new Error("Invalid HSL color");
	    var r = void 0,
	        g = void 0,
	        b = void 0,
	        h = hsl.h / 360,
	        s = hsl.s,
	        l = hsl.l;

	    if (s === 0) {
	        r = g = b = l;
	    } else {
	        var hue2rgb = function hue2rgb(p, q, t) {
	            if (t < 0) t += 1;
	            if (t > 1) t -= 1;
	            if (t < 1 / 6) return p + (q - p) * 6 * t;
	            if (t < 1 / 2) return q;
	            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	            return p;
	        };

	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;

	        r = hue2rgb(p, q, h + 1 / 3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1 / 3);
	    }

	    r = Math.round(r * 255);
	    g = Math.round(g * 255);
	    b = Math.round(b * 255);

	    return { r: r, g: g, b: b };
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isColorName = isColorName;
	exports.isHex = isHex;
	exports.isRgb = isRgb;
	exports.isRgba = isRgba;
	exports.isHsl = isHsl;
	exports.isHsla = isHsla;
	exports.isColor = isColor;
	exports.isGradient = isGradient;
	exports.isLinearGradient = isLinearGradient;
	exports.isRadialGradient = isRadialGradient;

	var _Colors = __webpack_require__(3);

	var _Colors2 = _interopRequireDefault(_Colors);

	var _CharCodes = __webpack_require__(4);

	var _CharCodes2 = _interopRequireDefault(_CharCodes);

	var _RegEx = __webpack_require__(5);

	var _RegEx2 = _interopRequireDefault(_RegEx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Check if target name is a valid CSS1, CSS2.1, CSS3 color name
	 * @param name — color name to test
	 * @throws TypeError — if name that was passed is not a valid color name
	 * @returns {boolean}
	 *
	 * @example
	 * var isColor = Validator.isColorName("black"); // true
	 * var isNotColor = Validator.isColorName("avadakedavra"); // false
	 */
	function isColorName(name) {
	    if (typeof name !== "string") throw new TypeError("Type of target name should be a String");
	    return _Colors2.default.hasOwnProperty(name.toLowerCase());
	}

	/**
	 * Check if target string is a valid hex color
	 * @param color — target hex string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isHex = isHex("#333"); // true
	 * var isNotHex = isHex("#rgb"); // false
	 */
	function isHex(color) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	    // if color doesn't start with #
	    if (color.charCodeAt(0) !== _CharCodes2.default.HASH) return false;
	    // if a possible color doesn't consist of 4 (#333) or 7 chars (#333333)
	    if (color.length !== 4 && color.length !== 7) return false;

	    var i = void 0,
	        char = void 0,
	        colorInLowerCase = color.toLowerCase();
	    // Try to identify a non-valid hex color while looping trough other chars starting after #
	    for (i = 1; i < colorInLowerCase.length; i++) {
	        char = colorInLowerCase.charCodeAt(i);
	        // if char is not a valid hex number
	        if ((char < _CharCodes2.default.ZERO || char > _CharCodes2.default.NINE) && (char < _CharCodes2.default.A || char > _CharCodes2.default.F)) return false;
	    }

	    // Otherwise, string is a hex color — return true
	    return true;
	}

	/**
	 * Check if target string is a valid css rgb color definition
	 * @param color — target rgb string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isRgb = Validator.isRgb("rgb( 0, 0, 0 )") // true
	 * var isNotRgb = Validator.isRgb("hsl( 0, 0, 100% )") // false
	 */
	function isRgb(color) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	    return _RegEx2.default.RGB_ONLY.test(color);
	}

	/**
	 * Check if target string is a valid css rgba color definition
	 * @param color — target rgba string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isRgba = Validator.isRgba("rgba(255,255,255,.5)") // true
	 * var isNotRgba = Validator.isRgba("hsla(255,100%,100%,.5)") // false
	 */
	function isRgba(color) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	    return _RegEx2.default.RGBA_ONLY.test(color);
	}

	/**
	 * Check if target string is a valid css HSL color definition
	 * @param color — target HSL string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isHsl = Validator.isHsl("hsl(0,0%,0%)") // true
	 * var isNotHsl = Validator.isHsl("hsl( 0, 5, 100% )") // false
	 */
	function isHsl(color) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	    return _RegEx2.default.HSL_ONLY.test(color);
	}

	/**
	 * Check if target string is a valid css HSLa color definition
	 * @param color — target HSLa string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isHsla = Validator.isHsla("hsla(0,0%,0%, .5)") // true
	 * var isNotHsla = Validator.isHsla("hsl( 0, 5, 100% )") // false
	 */
	function isHsla(color) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	    return _RegEx2.default.HSLA_ONLY.test(color);
	}

	/**
	 * Check if target string is a valid css color definition
	 * @param color — target color string to test
	 * @returns {boolean}
	 *
	 * @example
	 * var isColor = Validator.isColor("hsla(0,0%,0%, .5)") // true
	 * var isColorToo = Validator.isColor("black") // true
	 * var isNotColor = Validator.isColor("color") // false
	 */
	function isColor(color) {
	    return isColorName(color) || isHex(color) || isRgb(color) || isRgba(color) || isHsl(color) || isHsla(color);
	}

	/**
	 * Check if target string is a valid css gradient definition
	 * @param gradient — target gradient string to test
	 * @returns {boolean}
	 *
	 * @example
	 * var isHsla = Validator.isGradient("hsla(0,0%,0%, .5)") // true
	 * var isNotHsla = Validator.isGradient("hsl( 0, 5, 100% )") // false
	 */
	function isGradient(gradient) {
	    return isLinearGradient(gradient) || isRadialGradient(gradient);
	}

	/**
	 * Check if target string is a valid css gradient definition
	 * @param gradient — target gradient string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isHsla = Validator.isLinearGradient("hsla(0,0%,0%, .5)") // true
	 * var isNotHsla = Validator.isLinearGradient("hsl( 0, 5, 100% )") // false
	 */
	function isLinearGradient(gradient) {
	    if (typeof gradient !== "string") throw new TypeError("Type of target name should be a String");

	    // checking for general linear-gradient syntax
	    var matches = /^linear-gradient\([^(]*(\([^)]*\)[^(]*)*[^)]*\)$/g.exec(gradient);
	    console.dir(matches);
	}

	/**
	 * Check if target string is a valid css gradient definition
	 * @param gradient — target gradient string to test
	 * @throws TypeError — if type of color that was passed is not a string
	 * @returns {boolean}
	 *
	 * @example
	 * var isHsla = Validator.isRadialGradient("hsla(0,0%,0%, .5)") // true
	 * var isNotHsla = Validator.isRadialGradient("hsl( 0, 5, 100% )") // false
	 */
	function isRadialGradient(gradient) {
	    if (typeof color !== "string") throw new TypeError("Type of target name should be a String");
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "black": { hex: "#000", rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
	    "silver": { hex: "#c0c0c0", rgb: { r: 192, g: 192, b: 192 }, hsl: { h: 0, s: 0, l: 0.75 } },
	    "gray": { hex: "#808080", rgb: { r: 128, g: 128, b: 128 }, hsl: { h: 0, s: 0, l: 0.5 } },
	    "white": { hex: "#fff", rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 1 } },
	    "maroon": { hex: "#800000", rgb: { r: 128, g: 0, b: 0 }, hsl: { h: 0, s: 1, l: 0.25 } },
	    "red": { hex: "#ff0000", rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 1, l: 0.5 } },
	    "purple": { hex: "#800080", rgb: { r: 128, g: 0, b: 128 }, hsl: { h: 300, s: 1, l: 0.25 } },
	    "fuchsia": { hex: "#ff00ff", rgb: { r: 255, g: 0, b: 255 }, hsl: { h: 300, s: 1, l: 0.5 } },
	    "green": { hex: "#008000", rgb: { r: 0, g: 128, b: 0 }, hsl: { h: 120, s: 1, l: 0.25 } },
	    "lime": { hex: "#00ff00", rgb: { r: 0, g: 255, b: 0 }, hsl: { h: 120, s: 1, l: 0.5 } },
	    "olive": { hex: "#808000", rgb: { r: 128, g: 128, b: 0 }, hsl: { h: 60, s: 1, l: 0.25 } },
	    "yellow": { hex: "#ffff00", rgb: { r: 255, g: 255, b: 0 }, hsl: { h: 60, s: 1, l: 0.5 } },
	    "navy": { hex: "#000080", rgb: { r: 0, g: 0, b: 128 }, hsl: { h: 240, s: 1, l: 0.25 } },
	    "blue": { hex: "#0000ff", rgb: { r: 0, g: 0, b: 255 }, hsl: { h: 240, s: 1, l: 0.5 } },
	    "teal": { hex: "#008080", rgb: { r: 0, g: 128, b: 128 }, hsl: { h: 180, s: 1, l: 0.25 } },
	    "aqua": { hex: "#00ffff", rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 1, l: 0.5 } },
	    "orange": { hex: "#ffa500", rgb: { r: 255, g: 165, b: 0 }, hsl: { h: 39, s: 1, l: 0.5 } },
	    "aliceblue": { hex: "#f0f8ff", rgb: { r: 240, g: 248, b: 255 }, hsl: { h: 208, s: 1, l: 0.97 } },
	    "antiquewhite": { hex: "#faebd7", rgb: { r: 250, g: 235, b: 215 }, hsl: { h: 34, s: 0.78, l: 0.91 } },
	    "aquamarine": { hex: "#7fffd4", rgb: { r: 127, g: 255, b: 212 }, hsl: { h: 160, s: 1, l: 0.75 } },
	    "azure": { hex: "#f0ffff", rgb: { r: 240, g: 255, b: 255 }, hsl: { h: 180, s: 1, l: 0.97 } },
	    "beige": { hex: "#f5f5dc", rgb: { r: 245, g: 245, b: 220 }, hsl: { h: 60, s: 0.56, l: 0.91 } },
	    "bisque": { hex: "#ffe4c4", rgb: { r: 255, g: 228, b: 196 }, hsl: { h: 33, s: 1, l: 0.88 } },
	    "blanchedalmond": { hex: "#ffebcd", rgb: { r: 255, g: 235, b: 205 }, hsl: { h: 36, s: 1, l: 0.9 } },
	    "blueviolet": { hex: "#8a2be2", rgb: { r: 138, g: 43, b: 226 }, hsl: { h: 271, s: 0.76, l: 0.53 } },
	    "brown": { hex: "#a52a2a", rgb: { r: 165, g: 42, b: 42 }, hsl: { h: 0, s: 0.59, l: 0.41 } },
	    "burlywood": { hex: "#deb887", rgb: { r: 222, g: 184, b: 135 }, hsl: { h: 34, s: 0.57, l: 0.70 } },
	    "cadetblue": { hex: "#5f9ea0", rgb: { r: 95, g: 158, b: 160 }, hsl: { h: 182, s: 0.25, l: 0.5 } },
	    "chartreuse": { hex: "#7fff00", rgb: { r: 127, g: 255, b: 0 }, hsl: { h: 90, s: 1, l: 0.5 } },
	    "chocolate": { hex: "#d2691e", rgb: { r: 210, g: 105, b: 30 }, hsl: { h: 25, s: 0.75, l: 0.47 } },
	    "coral": { hex: "#ff7f50", rgb: { r: 255, g: 127, b: 80 }, hsl: { h: 16, s: 1, l: 0.66 } },
	    "cornflowerblue": { hex: "#6495ed", rgb: { r: 100, g: 149, b: 237 }, hsl: { h: 219, s: 0.79, l: 0.66 } },
	    "cornsilk": { hex: "#fff8dc", rgb: { r: 255, g: 248, b: 220 }, hsl: { h: 48, s: 1, l: 0.93 } },
	    "crimson": { hex: "#dc143c", rgb: { r: 220, g: 20, b: 60 }, hsl: { h: 348, s: 0.83, l: 0.47 } },
	    "cyan": { hex: "#00ffff", rgb: { r: 0, g: 255, b: 255 }, hsl: { h: 180, s: 1, l: 0.5 } },
	    "darkblue": { hex: "#00008b", rgb: { r: 0, g: 0, b: 139 }, hsl: { h: 240, s: 1, l: 0.27 } },
	    "darkcyan": { hex: "#008b8b", rgb: { r: 0, g: 139, b: 139 }, hsl: { h: 180, s: 1, l: 0.27 } },
	    "darkgoldenrod": { hex: "#b8860b", rgb: { r: 184, g: 134, b: 11 }, hsl: { h: 43, s: 0.89, l: 0.38 } },
	    "darkgray": { hex: "#a9a9a9", rgb: { r: 169, g: 169, b: 169 }, hsl: { h: 0, s: 0, l: 0.66 } },
	    "darkgreen": { hex: "#006400", rgb: { r: 0, g: 100, b: 0 }, hsl: { h: 120, s: 1, l: 0.2 } },
	    "darkgrey": { hex: "#a9a9a9", rgb: { r: 169, g: 169, b: 169 }, hsl: { h: 0, s: 0, l: 0.66 } },
	    "darkkhaki": { hex: "#bdb76b", rgb: { r: 189, g: 183, b: 107 }, hsl: { h: 56, s: 0.38, l: 0.58 } },
	    "darkmagenta": { hex: "#8b008b", rgb: { r: 139, g: 0, b: 139 }, hsl: { h: 300, s: 1, l: 0.27 } },
	    "darkolivegreen": { hex: "#556b2f", rgb: { r: 85, g: 107, b: 47 }, hsl: { h: 82, s: 0.39, l: 0.30 } },
	    "darkorange": { hex: "#ff8c00", rgb: { r: 255, g: 140, b: 0 }, hsl: { h: 33, s: 1, l: 0.5 } },
	    "darkorchid": { hex: "#9932cc", rgb: { r: 153, g: 50, b: 204 }, hsl: { h: 280, s: 0.61, l: 0.5 } },
	    "darkred": { hex: "#8b0000", rgb: { r: 139, g: 0, b: 0 }, hsl: { h: 0, s: 1, l: 0.27 } },
	    "darksalmon": { hex: "#e9967a", rgb: { r: 233, g: 150, b: 122 }, hsl: { h: 15, s: 0.72, l: 0.70 } },
	    "darkseagreen": { hex: "#8fbc8f", rgb: { r: 143, g: 188, b: 143 }, hsl: { h: 120, s: 0.25, l: 0.65 } },
	    "darkslateblue": { hex: "#483d8b", rgb: { r: 72, g: 61, b: 139 }, hsl: { h: 248, s: 0.39, l: 0.39 } },
	    "darkslategray": { hex: "#2f4f4f", rgb: { r: 47, g: 79, b: 79 }, hsl: { h: 180, s: 0.25, l: 0.25 } },
	    "darkslategrey": { hex: "#2f4f4f", rgb: { r: 47, g: 79, b: 79 }, hsl: { h: 180, s: 0.25, l: 0.25 } },
	    "darkturquoise": { hex: "#00ced1", rgb: { r: 0, g: 206, b: 209 }, hsl: { h: 181, s: 1, l: 0.41 } },
	    "darkviolet": { hex: "#9400d3", rgb: { r: 148, g: 0, b: 211 }, hsl: { h: 282, s: 1, l: 0.41 } },
	    "deeppink": { hex: "#ff1493", rgb: { r: 255, g: 20, b: 147 }, hsl: { h: 328, s: 1, l: 0.54 } },
	    "deepskyblue": { hex: "#00bfff", rgb: { r: 0, g: 191, b: 255 }, hsl: { h: 195, s: 1, l: 0.5 } },
	    "dimgray": { hex: "#696969", rgb: { r: 105, g: 105, b: 105 }, hsl: { h: 0, s: 0, l: 0.41 } },
	    "dimgrey": { hex: "#696969", rgb: { r: 105, g: 105, b: 105 }, hsl: { h: 0, s: 0, l: 0.41 } },
	    "dodgerblue": { hex: "#1e90ff", rgb: { r: 30, g: 144, b: 255 }, hsl: { h: 210, s: 1, l: 0.56 } },
	    "firebrick": { hex: "#b22222", rgb: { r: 178, g: 34, b: 34 }, hsl: { h: 0, s: 0.68, l: 0.42 } },
	    "floralwhite": { hex: "#fffaf0", rgb: { r: 255, g: 250, b: 240 }, hsl: { h: 40, s: 1, l: 0.97 } },
	    "forestgreen": { hex: "#228b22", rgb: { r: 34, g: 139, b: 34 }, hsl: { h: 120, s: 0.61, l: 0.34 } },
	    "gainsboro": { hex: "#dcdcdc", rgb: { r: 220, g: 220, b: 220 }, hsl: { h: 0, s: 0, l: 0.86 } },
	    "ghostwhite": { hex: "#f8f8ff", rgb: { r: 248, g: 248, b: 255 }, hsl: { h: 240, s: 1, l: 0.99 } },
	    "gold": { hex: "#ffd700", rgb: { r: 255, g: 215, b: 0 }, hsl: { h: 51, s: 1, l: 0.5 } },
	    "goldenrod": { hex: "#daa520", rgb: { r: 218, g: 165, b: 32 }, hsl: { h: 43, s: 0.74, l: 0.49 } },
	    "greenyellow": { hex: "#adff2f", rgb: { r: 173, g: 255, b: 47 }, hsl: { h: 84, s: 1, l: 0.59 } },
	    "grey": { hex: "#808080", rgb: { r: 128, g: 128, b: 128 }, hsl: { h: 0, s: 0, l: 0.5 } },
	    "honeydew": { hex: "#f0fff0", rgb: { r: 240, g: 255, b: 240 }, hsl: { h: 120, s: 1, l: 0.97 } },
	    "hotpink": { hex: "#ff69b4", rgb: { r: 255, g: 105, b: 180 }, hsl: { h: 330, s: 1, l: 0.71 } },
	    "indianred": { hex: "#cd5c5c", rgb: { r: 205, g: 92, b: 92 }, hsl: { h: 0, s: 0.53, l: 0.58 } },
	    "indigo": { hex: "#4b0082", rgb: { r: 75, g: 0, b: 130 }, hsl: { h: 275, s: 1, l: 0.25 } },
	    "ivory": { hex: "#fffff0", rgb: { r: 255, g: 255, b: 240 }, hsl: { h: 60, s: 1, l: 0.97 } },
	    "khaki": { hex: "#f0e68c", rgb: { r: 240, g: 230, b: 140 }, hsl: { h: 54, s: 0.77, l: 0.75 } },
	    "lavender": { hex: "#e6e6fa", rgb: { r: 230, g: 230, b: 250 }, hsl: { h: 240, s: 0.67, l: 0.94 } },
	    "lavenderblush": { hex: "#fff0f5", rgb: { r: 255, g: 240, b: 245 }, hsl: { h: 340, s: 1, l: 0.97 } },
	    "lawngreen": { hex: "#7cfc00", rgb: { r: 124, g: 252, b: 0 }, hsl: { h: 90, s: 1, l: 0.49 } },
	    "lemonchiffon": { hex: "#fffacd", rgb: { r: 255, g: 250, b: 205 }, hsl: { h: 54, s: 1, l: 0.9 } },
	    "lightblue": { hex: "#add8e6", rgb: { r: 173, g: 216, b: 230 }, hsl: { h: 195, s: 0.53, l: 0.79 } },
	    "lightcoral": { hex: "#f08080", rgb: { r: 240, g: 128, b: 128 }, hsl: { h: 0, s: 0.79, l: 0.72 } },
	    "lightcyan": { hex: "#e0ffff", rgb: { r: 224, g: 255, b: 255 }, hsl: { h: 180, s: 1, l: 0.94 } },
	    "lightgoldenrodyellow": { hex: "#fafad2", rgb: { r: 250, g: 250, b: 210 }, hsl: { h: 60, s: 0.8, l: 0.9 } },
	    "lightgray": { hex: "#d3d3d3", rgb: { r: 211, g: 211, b: 211 }, hsl: { h: 0, s: 0, l: 0.83 } },
	    "lightgrey": { hex: "#d3d3d3", rgb: { r: 211, g: 211, b: 211 }, hsl: { h: 0, s: 0, l: 0.83 } },
	    "lightgreen": { hex: "#90ee90", rgb: { r: 144, g: 238, b: 144 }, hsl: { h: 120, s: 0.73, l: 0.75 } },
	    "lightpink": { hex: "#ffb6c1", rgb: { r: 255, g: 182, b: 193 }, hsl: { h: 351, s: 1, l: 0.86 } },
	    "lightsalmon": { hex: "#ffa07a", rgb: { r: 255, g: 160, b: 122 }, hsl: { h: 17, s: 1, l: 0.74 } },
	    "lightseagreen": { hex: "#20b2aa", rgb: { r: 32, g: 178, b: 170 }, hsl: { h: 177, s: 0.7, l: 0.41 } },
	    "lightskyblue": { hex: "#87cefa", rgb: { r: 135, g: 206, b: 250 }, hsl: { h: 203, s: 0.92, l: 0.75 } },
	    "lightslategray": { hex: "#778899", rgb: { r: 119, g: 136, b: 153 }, hsl: { h: 210, s: 0.14, l: 0.53 } },
	    "lightslategrey": { hex: "#778899", rgb: { r: 119, g: 136, b: 153 }, hsl: { h: 210, s: 0.14, l: 0.53 } },
	    "lightyellow": { hex: "#ffffe0", rgb: { r: 255, g: 255, b: 224 }, hsl: { h: 60, s: 1, l: 0.94 } },
	    "limegreen": { hex: "#32cd32", rgb: { r: 50, g: 205, b: 50 }, hsl: { h: 120, s: 0.61, l: 0.5 } },
	    "linen": { hex: "#faf0e6", rgb: { r: 250, g: 240, b: 230 }, hsl: { h: 30, s: 0.67, l: 0.94 } },
	    "magenta": { hex: "#ff00ff", rgb: { r: 255, g: 0, b: 255 }, hsl: { h: 300, s: 1, l: 0.5 } },
	    "mediumaquamarine": { hex: "#66cdaa", rgb: { r: 102, g: 205, b: 170 }, hsl: { h: 160, s: 0.51, l: 0.6 } },
	    "mediumblue": { hex: "#0000cd", rgb: { r: 0, g: 0, b: 205 }, hsl: { h: 240, s: 1, l: 0.4 } },
	    "mediumorchid": { hex: "#ba55d3", rgb: { r: 186, g: 85, b: 211 }, hsl: { h: 288, s: 0.59, l: 0.58 } },
	    "mediumpurple": { hex: "#9370db", rgb: { r: 147, g: 112, b: 219 }, hsl: { h: 260, s: 0.6, l: 0.65 } },
	    "mediumseagreen": { hex: "#3cb371", rgb: { r: 60, g: 179, b: 113 }, hsl: { h: 147, s: 0.5, l: 0.47 } },
	    "mediumslateblue": { hex: "#7b68ee", rgb: { r: 123, g: 104, b: 238 }, hsl: { h: 249, s: 0.8, l: 0.67 } },
	    "mediumspringgreen": { hex: "#00fa9a", rgb: { r: 0, g: 250, b: 154 }, hsl: { h: 157, s: 1, l: 0.49 } },
	    "mediumturquoise": { hex: "#48d1cc", rgb: { r: 72, g: 209, b: 204 }, hsl: { h: 178, s: 0.6, l: 0.55 } },
	    "mediumvioletred": { hex: "#c71585", rgb: { r: 199, g: 21, b: 133 }, hsl: { h: 322, s: 0.81, l: 0.43 } },
	    "midnightblue": { hex: "#191970", rgb: { r: 25, g: 25, b: 112 }, hsl: { h: 240, s: 0.64, l: 0.27 } },
	    "mintcream": { hex: "#f5fffa", rgb: { r: 245, g: 255, b: 250 }, hsl: { h: 150, s: 1, l: 0.98 } },
	    "mistyrose": { hex: "#ffe4e1", rgb: { r: 255, g: 228, b: 225 }, hsl: { h: 6, s: 1, l: 0.94 } },
	    "moccasin": { hex: "#ffe4b5", rgb: { r: 255, g: 228, b: 181 }, hsl: { h: 38, s: 1, l: 0.85 } },
	    "navajowhite": { hex: "#ffdead", rgb: { r: 255, g: 222, b: 173 }, hsl: { h: 36, s: 1, l: 0.84 } },
	    "oldlace": { hex: "#fdf5e6", rgb: { r: 253, g: 245, b: 230 }, hsl: { h: 39, s: 0.85, l: 0.95 } },
	    "olivedrab": { hex: "#6b8e23", rgb: { r: 107, g: 142, b: 35 }, hsl: { h: 80, s: 0.6, l: 0.35 } },
	    "orangered": { hex: "#ff4500", rgb: { r: 255, g: 69, b: 0 }, hsl: { h: 16, s: 1, l: 0.5 } },
	    "orchid": { hex: "#da70d6", rgb: { r: 218, g: 112, b: 214 }, hsl: { h: 302, s: 0.59, l: 0.65 } },
	    "palegoldenrod": { hex: "#eee8aa", rgb: { r: 238, g: 232, b: 170 }, hsl: { h: 55, s: 0.67, l: 0.80 } },
	    "palegreen": { hex: "#98fb98", rgb: { r: 152, g: 251, b: 152 }, hsl: { h: 120, s: 0.93, l: 0.79 } },
	    "paleturquoise": { hex: "#afeeee", rgb: { r: 175, g: 238, b: 238 }, hsl: { h: 180, s: 0.65, l: 0.81 } },
	    "palevioletred": { hex: "#db7093", rgb: { r: 219, g: 112, b: 147 }, hsl: { h: 340, s: 0.6, l: 0.65 } },
	    "papayawhip": { hex: "#ffefd5", rgb: { r: 255, g: 239, b: 213 }, hsl: { h: 37, s: 1, l: 0.92 } },
	    "peachpuff": { hex: "#ffdab9", rgb: { r: 255, g: 218, b: 185 }, hsl: { h: 28, s: 1, l: 0.86 } },
	    "peru": { hex: "#cd853f", rgb: { r: 205, g: 133, b: 63 }, hsl: { h: 30, s: 0.59, l: 0.53 } },
	    "pink": { hex: "#ffc0cb", rgb: { r: 255, g: 192, b: 203 }, hsl: { h: 350, s: 1, l: 0.88 } },
	    "plum": { hex: "#dda0dd", rgb: { r: 221, g: 160, b: 221 }, hsl: { h: 300, s: 0.47, l: 0.75 } },
	    "powderblue": { hex: "#b0e0e6", rgb: { r: 176, g: 224, b: 230 }, hsl: { h: 187, s: 0.52, l: 0.8 } },
	    "rosybrown": { hex: "#bc8f8f", rgb: { r: 188, g: 143, b: 143 }, hsl: { h: 0, s: 0.25, l: 0.65 } },
	    "royalblue": { hex: "#4169e1", rgb: { r: 65, g: 105, b: 225 }, hsl: { h: 225, s: 0.73, l: 0.57 } },
	    "saddlebrown": { hex: "#8b4513", rgb: { r: 139, g: 69, b: 19 }, hsl: { h: 25, s: 0.76, l: 0.31 } },
	    "salmon": { hex: "#fa8072", rgb: { r: 250, g: 128, b: 114 }, hsl: { h: 6, s: 0.93, l: 0.71 } },
	    "sandybrown": { hex: "#f4a460", rgb: { r: 244, g: 164, b: 96 }, hsl: { h: 28, s: 0.87, l: 0.67 } },
	    "seagreen": { hex: "#2e8b57", rgb: { r: 46, g: 139, b: 87 }, hsl: { h: 146, s: 0.5, l: 0.36 } },
	    "seashell": { hex: "#fff5ee", rgb: { r: 255, g: 245, b: 238 }, hsl: { h: 25, s: 1, l: 0.97 } },
	    "sienna": { hex: "#a0522d", rgb: { r: 160, g: 82, b: 45 }, hsl: { h: 19, s: 0.56, l: 0.4 } },
	    "skyblue": { hex: "#87ceeb", rgb: { r: 135, g: 206, b: 235 }, hsl: { h: 197, s: 0.71, l: 0.73 } },
	    "slateblue": { hex: "#6a5acd", rgb: { r: 106, g: 90, b: 205 }, hsl: { h: 248, s: 0.53, l: 0.58 } },
	    "slategray": { hex: "#708090", rgb: { r: 112, g: 128, b: 144 }, hsl: { h: 210, s: 0.13, l: 0.5 } },
	    "slategrey": { hex: "#708090", rgb: { r: 112, g: 128, b: 144 }, hsl: { h: 210, s: 0.13, l: 0.5 } },
	    "snow": { hex: "#fffafa", rgb: { r: 255, g: 250, b: 250 }, hsl: { h: 0, s: 1, l: 0.99 } },
	    "springgreen": { hex: "#00ff7f", rgb: { r: 0, g: 255, b: 127 }, hsl: { h: 150, s: 1, l: 0.5 } },
	    "steelblue": { hex: "#4682b4", rgb: { r: 70, g: 130, b: 180 }, hsl: { h: 207, s: 0.44, l: 0.49 } },
	    "tan": { hex: "#d2b48c", rgb: { r: 210, g: 180, b: 140 }, hsl: { h: 34, s: 0.44, l: 0.69 } },
	    "thistle": { hex: "#d8bfd8", rgb: { r: 216, g: 191, b: 216 }, hsl: { h: 300, s: 0.24, l: 0.8 } },
	    "tomato": { hex: "#ff6347", rgb: { r: 255, g: 99, b: 71 }, hsl: { h: 9, s: 1, l: 0.64 } },
	    "turquoise": { hex: "#40e0d0", rgb: { r: 64, g: 224, b: 208 }, hsl: { h: 174, s: 0.72, l: 0.56 } },
	    "violet": { hex: "#ee82ee", rgb: { r: 238, g: 130, b: 238 }, hsl: { h: 300, s: 0.76, l: 0.72 } },
	    "wheat": { hex: "#f5deb3", rgb: { r: 245, g: 222, b: 179 }, hsl: { h: 39, s: 0.77, l: 0.83 } },
	    "whitesmoke": { hex: "#f5f5f5", rgb: { r: 245, g: 245, b: 245 }, hsl: { h: 0, s: 0, l: 0.96 } },
	    "yellowgreen": { hex: "#9acd32", rgb: { r: 154, g: 205, b: 50 }, hsl: { h: 80, s: 0.61, l: 0.5 } },
	    "rebeccapurple": { hex: "#663399", rgb: { r: 102, g: 51, b: 153 }, hsl: { h: 270, s: 0.5, l: 0.4 } }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "HASH": 35,
	    "ZERO": 48,
	    "ONE": 49,
	    "TWO": 50,
	    "THREE": 51,
	    "FOUR": 52,
	    "FIVE": 53,
	    "SIX": 54,
	    "SEVEN": 55,
	    "EIGHT": 56,
	    "NINE": 57,
	    "A": 97,
	    "B": 98,
	    "C": 99,
	    "D": 100,
	    "E": 101,
	    "F": 102
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// RegExp Helpers
	var BYTE = "0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5]";
	var PERCENTAGE = "0%|[1-9]\\d?%|100%";
	var FRACTION = "(?:0|0?.[1-9]+)";
	var DEGREES = "(?:0(?:deg)?|[1-9]\\d?(?:deg)?|[12]\\d\\d(?:deg)?|3[0-5]\\d(?:deg)?)";
	var GRADIANS = "(?:0grad|[1-9]\\d?grad|[123]\\d\\dgrad|400grad)";
	var TURN = "(?:" + FRACTION + ")turn";
	var ANGLE = DEGREES + "|" + GRADIANS + "|" + TURN;
	var SIDE_CORNER = "to\\s+((?:(?:left|right)(?:\\s+(?:top|bottom))?))";
	var HEX = "\\#[0-9a-f]{3}|[0-9a-f]{6}";
	var RGB = "rgb\\(\\s*((" + BYTE + ")\\s*,\\s*(" + BYTE + ")\\s*,\\s*(" + BYTE + ")|(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + "))\\s*\\)";
	var RGBA = "rgba\\(\\s*((" + BYTE + ")\\s*,\\s*(" + BYTE + ")\\s*,\\s*(" + BYTE + ")|(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + "))\\s*,\\s*(" + FRACTION + "|" + PERCENTAGE + ")\\s*\\)";
	var HSL = "hsl\\(\\s*(" + ANGLE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*\\)$";
	var HSLA = "hsla\\(\\s*(" + ANGLE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*,\\s*(" + PERCENTAGE + ")\\s*,\\s*(" + FRACTION + "|" + PERCENTAGE + ")\\s*\\)";
	var COLOR_STOP = HEX + "|" + RGB + "|" + RGBA + "|" + HSL + "|" + HSLA + "(?:\\s+" + PERCENTAGE + ")?";

	// Color RegExp
	var RGB_ONLY = "^" + RGB + "$";
	var RGBA_ONLY = "^" + RGBA + "$";
	var HSL_ONLY = "^" + HSL + "$";
	var HSLA_ONLY = "^" + HSLA + "$";

	exports.default = {
	    DEGREES: new RegExp(DEGREES, "i"),
	    ANGLE: new RegExp(ANGLE, "i"),
	    SIDE_CORNER: new RegExp(SIDE_CORNER, "i"),
	    HEX: new RegExp(HEX, "i"),
	    BYTE: new RegExp(BYTE, "i"),
	    PERCENTAGE: new RegExp(PERCENTAGE, "i"),
	    FRACTION: new RegExp(FRACTION, "i"),
	    RGB_ONLY: new RegExp(RGB_ONLY, "i"),
	    RGBA_ONLY: new RegExp(RGBA_ONLY, "i"),
	    HSL_ONLY: new RegExp(HSL_ONLY, "i"),
	    HSLA_ONLY: new RegExp(HSLA_ONLY, "i")
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseColorName = parseColorName;

	var _Colors = __webpack_require__(3);

	var _Colors2 = _interopRequireDefault(_Colors);

	var _Validator = __webpack_require__(2);

	var Validator = _interopRequireWildcard(_Validator);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Parse a valid CSS1, CSS2.1, CSS3 color name into a set of hex, rgb and hsl values
	 * @param name — a string with specified color name
	 * @throws TypeError — if type of value passed to function was not a string
	 * @throws Error — if color name passed to function was invalid
	 * @returns {{hex: string, rgb: {r: number, g:number, b:number}, hsl: {h: number, s:number, l:number}}}
	 *
	 * @example
	 * var color = Parser.parseColorName("black"); // color => { hex: "#000", rgb: {r:0, g:0, b:0}, hsl: {h:0, s:0, l:0}}
	 */
	function parseColorName(name) {
	  if (typeof name !== "string") throw new TypeError("Type of target colorName should be a String");
	  if (!Validator.isColorName(name)) throw new Error("Invalid color name");
	  return _Colors2.default[name.toLowerCase()];
	}

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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 20 */
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