module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_CustomMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/CustomMap */ "./src/CustomMap.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_App__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/pages/index.js";

 // import Map from './Map';




function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2245676088" + " " + "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2245676088",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "HOME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2245676088",
    __self: this
  }, ".App.jsx-2245676088{padding:1em;box-sizing:inherit;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbnRyYW5nL0RvY3VtZW50cy90YXBvbG9neS9mcm9udGVuZC9yZWdpb25hbC1tbWEvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBR3NCLFlBQ1EsbUJBQ0Ysa0JBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbnRyYW5nL0RvY3VtZW50cy90YXBvbG9neS9mcm9udGVuZC9yZWdpb25hbC1tbWEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IE1hcCBmcm9tICcuL01hcCc7XG5pbXBvcnQgQ3VzdG9tTWFwIGZyb20gJy4uL3NyYy9DdXN0b21NYXAnO1xuaW1wb3J0ICcuLi9zcmMvQXBwJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPiBcbiAgICAgIDxwPkhPTUU8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5BcHB7XG4gICAgICAgICAgcGFkZGluZzoxZW07XG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=/Users/briantrang/Documents/tapology/frontend/regional-mma/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react';
// // import Map from './Map';
// // import './App.css';
// function App() {
//   return (
//     <div className="App"> 
//       <CustomMap/>
//     </div>
//   );
// }
// export default App;

/***/ }),

/***/ "./src/CustomMap.js":
/*!**************************!*\
  !*** ./src/CustomMap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-client */ "topojson-client");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(topojson_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/us-albers.json */ "./src/static/us-albers.json");
var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/us-albers.json */ "./src/static/us-albers.json", 1);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-maps */ "react-simple-maps");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/src/CustomMap.js";





const wrapperStyles = {
  width: "100%",
  maxWidth: 480,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#7fcdff"
};

class CustomMap extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();
    this.state = {
      geographyPaths: []
    };
    this.loadPaths = this.loadPaths.bind(this);
  }

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths() {
    const world = _static_us_albers_json__WEBPACK_IMPORTED_MODULE_4__; // Transform your paths with topojson however you want...

    const countries = Object(topojson_client__WEBPACK_IMPORTED_MODULE_2__["feature"])(world, world.objects[_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(world.objects)[0]]).features;
    this.setState({
      geographyPaths: countries
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: wrapperStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["ComposableMap"], {
      projectionConfig: {
        scale: 1085,
        rotation: [0, 0, 0]
      },
      width: 980,
      height: 651,
      style: {
        width: "100%",
        height: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["ZoomableGroup"], {
      center: [-47, 18],
      disablePanning: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["Geographies"], {
      geography: this.state.geographyPaths,
      disableOptimization: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, (geographies, projection) => geographies.map((geography, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/state?state=${geography.properties.name}`,
      key: geography.properties.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["Geography"], {
      cacheId: `path-${geography.properties.ADM0_A3}-${i}`,
      round: true,
      name: geography.properties.name,
      geography: geography,
      projection: projection,
      style: {
        default: {
          fill: "#ECEFF1",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        },
        hover: {
          fill: "#607D8B",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        },
        pressed: {
          fill: "#FF5722",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomMap);

/***/ }),

/***/ "./src/static/us-albers.json":
/*!***********************************!*\
  !*** ./src/static/us-albers.json ***!
  \***********************************/
/*! exports provided: type, transform, arcs, objects, crs, default */
/***/ (function(module) {

module.exports = {"type":"Topology","transform":{"scale":[0.0002727762257239159,0.00020169226787896012],"translate":[-124.733174,20.631511675711202]},"arcs":[[[57512,81151],[0,-147],[0,-3],[-1,-465],[0,-2],[-2,-4325],[0,-379],[0,0],[0,-184],[0,-44],[-1,-1306],[0,-11],[-1,-336],[1,-1],[1,-1842],[1,-1066],[-1,-1886],[0,-282],[0,0],[-2,-3690],[-1,-2011],[-1,-17],[1,-18],[0,-1],[-1,-775],[0,-352],[0,-2],[1,-222],[0,-5],[-2,-111],[0,-5],[1,-1442],[0,0],[-2,-417],[0,-17],[0,-19],[0,-24],[-1,-1264],[-1,-1673],[0,-25],[-2,-277],[1,-72],[0,-708],[-1,-47],[0,-251],[-1,-70],[-3,-1473],[0,0],[-1,-828]],[[57494,53056],[-1381,8],[-3788,-5],[-1103,-2],[-791,-1],[-445,36],[-984,427],[-781,338],[-2443,1042],[-2277,948],[-949,384],[-762,326],[-584,249],[-2777,1165],[-2064,845],[16,609],[7,21],[30,19],[64,0],[105,164],[19,30],[104,270]],[[36710,59929],[150,89],[6,-2],[67,-12],[2,0],[156,-27],[0,5],[436,460],[2,1],[112,282],[0,1],[10,130],[-21,327],[-157,257],[-20,17],[-25,20],[-176,28],[-24,-6],[-24,-35],[-18,-10],[-61,-3],[-64,15],[-188,93],[-120,216],[6,71],[34,128],[36,55],[28,85],[15,129],[12,362],[-103,409],[-77,277],[205,92],[140,90],[15,114],[104,191],[131,182],[85,184],[-1,1],[-16,57],[-1,54],[38,435],[23,33],[18,13],[83,42],[8,54],[-37,241],[-70,246],[-8,161],[26,392],[68,219],[133,157],[93,145],[12,75],[-1,208],[7,43],[47,75],[33,32],[38,8],[39,-8],[88,43],[165,96],[33,32],[251,174],[67,110],[225,247],[114,34],[7,10],[-25,212],[-142,228],[-82,60],[-238,198],[-276,249],[-414,1002],[-48,192],[-319,370],[-295,511],[-8,25],[-5,70],[21,90],[7,391],[-1,28],[-14,51]],[[37027,71250],[-2,67],[-7,63],[50,329],[84,131],[54,19],[21,19],[21,49],[12,121],[1,101],[-98,703],[-31,141],[-83,277],[-91,97],[-37,75],[-57,226],[3,46],[6,57],[14,50],[64,391],[2,56],[-16,37],[-70,113],[-46,51],[-40,243],[-28,553],[8,183],[5,16],[-7,132],[-92,330],[-45,191],[-44,513],[39,57],[32,28],[383,188],[219,46],[215,-2],[484,-47],[57,-39],[136,-140],[65,-108],[14,-36],[13,-50],[40,-76],[108,-125],[39,-28],[50,-28],[21,-1],[72,6],[218,41],[20,17],[38,69],[46,180],[20,123],[210,420],[10,12],[49,23],[-1,280],[-5,194],[8,407],[-1,504],[-14,906],[-1,714],[0,213],[0,780]],[[39162,81158],[311,-2],[0,0],[3664,1],[246,0],[1061,2],[187,0],[51,0],[17,0],[6,0],[15,0],[607,2],[42,0],[3464,2],[25,0],[1,0],[791,-2],[1610,11],[936,3],[602,-28],[1211,-1],[2271,6],[12,-1],[396,1],[7,0],[17,0],[61,1],[48,-1],[193,0],[498,-1]],[[112511,61419],[-1,299],[1,65],[-1,204],[0,22],[0,26],[1,279],[0,14],[0,63],[0,132],[-1,41],[0,53],[0,51],[0,0],[0,294],[0,84],[0,23],[0,33],[1,62],[-1,32],[1,211],[-1,54],[0,23],[0,171],[-1,103],[1,10],[-1,244],[0,46],[0,4],[-86,82],[-67,33],[-354,88],[-260,-35],[-19,-18],[-360,-195],[-196,124],[-201,152],[-24,35],[-28,74],[-27,84]],[[110887,64486],[1,77],[0,50],[4,121],[-1,19],[3,97],[0,27],[4,168],[0,1],[0,14],[1,13],[3,163],[1,33],[0,34],[0,1],[3,136],[3,104],[3,149],[1,1],[5,279],[0,16],[1,64],[1,17],[7,309],[0,11],[0,0],[17,833],[16,804],[2,37],[4,214],[2,59],[0,25],[10,436],[4,187],[0,13],[9,432],[0,39],[11,427],[16,627],[0,16],[0,13],[2,69],[2,76],[0,18],[-1,8],[5,189],[25,921],[1,45],[5,200],[0,13],[1,108],[0,19],[3,56],[0,12],[2,140],[1,15],[6,144],[1,14],[1,9],[0,57],[1,20],[4,74],[8,280],[-3,89],[-4,28],[-1,4],[10,35],[-2,16],[-115,918],[-3,22],[-2,8],[-3,26],[-27,221],[-54,434],[-3,15],[-17,149],[-2,13],[-4,32],[-16,125],[-3,17],[-3,28],[-1,6],[-1,13],[-7,53],[-5,46],[-5,36],[-7,61],[-55,438],[0,2],[0,1],[-1,6],[-5,39],[-1,9],[-13,98],[-1,2],[-13,108],[-6,45],[-5,29],[-3,25],[-44,345],[0,5],[-16,119],[-33,247],[-6,48],[0,0],[-11,82],[-3,27],[-17,134],[-2,14],[-10,81],[-1,14],[-1,4],[-4,32],[-7,47],[1,3],[-31,247],[-26,227],[-24,207],[-8,72],[-2,16],[-10,83],[-23,196],[-8,73],[-6,43],[-9,72]],[[110403,78674],[215,0],[146,-1],[1495,-3],[3,0],[39,0],[6,0],[78,0],[415,0],[18,0],[137,0],[57,0],[145,1],[508,1],[2,0],[32,1],[32,0],[36,-1],[425,-1],[0,0],[256,0],[26,0],[295,-1],[113,0],[5,-1],[291,0],[0,0],[71,0],[759,-1],[5,0],[66,0],[4,0],[201,-1],[437,-1],[2,0],[146,1],[56,0],[1,0],[243,-1],[0,0],[891,0],[773,-1],[33,1],[341,3],[8,0],[10,0],[44,0],[180,1],[46,0],[64,1],[0,0],[81,0],[85,0],[65,-1],[6,0],[98,0],[35,-1],[112,0],[11,0],[439,2],[6,0],[214,1],[15,0],[9,0],[54,0],[69,0],[144,1],[143,1],[6,0],[50,0],[109,-1],[41,0],[111,0],[18,0],[173,0],[36,-1],[9,1],[26,-1],[292,-7],[14,-1],[36,0],[12,-1],[95,-1],[1,0],[7,1],[1,-1],[650,3],[33,0],[4,-1],[333,1],[111,1],[2,0],[285,1],[35,1],[167,1],[8,0],[299,0],[9,0],[1,-1],[10,-1],[85,3],[243,-1],[7,0],[61,0],[200,-1],[67,1],[145,0],[18,0],[131,1],[27,-1],[40,0],[33,0],[34,0],[0,0],[279,0],[18,0],[2,0],[567,-1],[407,-2],[30,0],[0,0],[12,0],[86,0],[152,1],[-7,-6],[-7,-45],[82,-247],[224,-223],[31,-54],[2,-392],[-46,-111],[-27,-41],[-114,-33],[-307,-319],[-80,-82],[-362,-470],[-166,-379],[-16,-88],[96,0],[12,1],[172,2],[13,0],[0,0],[477,5],[115,1],[4,0],[564,7],[26,-1],[16,1],[4,0],[2,0],[0,0],[213,2],[18,0],[76,1],[2,0],[2,0],[20,0],[362,4],[1,0],[119,1],[0,-1],[17,1]],[[128311,76201],[48,-129],[121,-134],[-4,-209],[-1,-42],[-98,46],[-68,-8],[-83,-39],[-35,-27],[-22,-58],[-7,-39],[4,-33],[11,-18],[74,-42],[73,-27],[74,-43],[23,-24],[7,-29],[-10,-39],[-430,-316],[-163,-50],[-86,20],[-61,42],[-16,2],[-148,-104],[-22,-25],[-9,-48],[11,-164],[68,-124],[53,-51],[61,-21],[58,6],[20,14],[-91,-581],[-87,-23],[-88,-23],[-219,135],[-42,-3],[-16,-9],[-25,-27],[18,-334],[3,-59],[-50,-47],[-41,-7],[-32,41],[-16,23],[-9,8],[-122,22],[-164,-199],[-60,-74],[-38,-182],[3,-15],[45,-36],[83,0],[29,9],[154,83],[15,-67],[10,-49],[-103,-328],[-141,-6],[-20,-10],[-18,-22],[-19,-70],[8,-37],[29,-59],[25,-33],[42,-18],[88,17],[42,-8],[26,-21],[75,-121],[12,-36],[3,-36],[32,-349],[-3,-15],[-66,-79],[-26,-17],[-37,-8],[-32,11],[-122,80],[-64,-31],[-53,-60],[-71,-273],[-373,-107],[-52,-150],[2,-70]],[[126198,71218],[203,-202],[35,-86],[-21,-150],[-160,-232],[-50,-71],[-368,-66],[-26,-5],[-33,14],[-46,101],[-92,8],[-45,-20],[-16,-100],[40,-248],[-46,-66],[-55,-8],[-24,12],[-68,62],[-64,9],[-46,-104],[-18,-178],[79,-99],[86,-87],[3,-53],[-46,-79],[-64,-21],[-40,17],[-52,16],[-45,-41],[2,-78],[21,-579],[16,-444],[-35,-100],[-142,-121],[-163,-75],[-387,-61],[-338,-617],[-46,-53],[-95,9],[-61,-34],[-7,-63],[64,-92],[55,-57],[2,-55],[-47,-68],[-93,-6],[-59,-120],[5,-28],[5,-22],[11,-62],[62,-60],[86,-40],[34,-109],[-30,-163],[-284,-122],[-198,-24],[-258,-151],[4,-62],[188,-226],[-112,-367],[-266,-314],[-17,-134],[31,-107],[34,-103],[-4,-60],[-18,-38],[-26,-22],[-30,-21],[-103,24],[-36,-24],[-10,-49],[-16,-63],[24,-54],[107,-98],[99,-100],[-13,-57],[-67,-58],[-264,-76],[-15,-37],[-14,-36],[60,-116],[332,-280],[25,-118],[-49,-94],[-193,-52],[158,-601],[113,-260],[90,-121],[-6,-379],[-140,-530],[-117,-134],[-31,-35]],[[123057,61344],[-362,5],[-71,-1],[-102,2],[-38,0],[-9,0],[-5,0],[-13,0],[-12,1],[-157,1],[-182,1],[-37,1],[-91,1],[-363,2],[-47,1],[-27,-2],[0,0],[-107,0],[-32,1],[-33,-1],[-1186,5],[-7,-1],[-429,4],[-564,5],[-256,5],[-158,1],[-99,1],[-27,1],[-365,6],[-116,1],[-9,0],[-760,10],[-17,1],[-28,0],[-5,0],[-1,0],[-30,0],[-358,6],[-48,2],[-1,0],[-36,1],[-49,-1],[-290,4],[-90,2],[-65,0],[-300,3],[-9,0],[-30,0],[-72,0],[-2,0],[-194,0],[-158,1],[-151,0],[-255,1],[0,0],[-118,0],[-134,0],[-330,2],[-82,-1],[-4,0],[-2,0],[-110,1],[0,0],[-14,0],[-24,0],[-1003,3],[-35,1],[-770,-1],[-13,-1],[-28,0],[-21,1],[-5,0]],[[16441,66278],[4,13],[32,28],[32,13],[32,1],[47,-23],[46,-7],[105,19],[57,49],[15,34],[26,5],[17,1],[76,-31],[91,0],[61,23],[40,33],[3,14],[16,17],[9,2],[43,-10],[-2,-54],[-14,-18],[-10,-39],[5,-17],[9,-49],[19,-28],[58,-44],[53,-28],[27,-2],[71,22],[20,-4],[-4,-67],[12,-64],[21,-31],[3,-30],[-13,-10],[-100,-4],[-61,-26],[-107,-83],[-5,-10],[-1,-9],[-4,-6],[-103,-28],[-77,-5],[-25,-18],[-13,-26],[-47,-16],[-173,115],[-37,45],[-39,97],[-9,13],[-23,10],[-6,23],[-34,77],[-55,82],[-88,51]],[[18122,66566],[70,-11],[17,1],[9,9],[30,-2],[59,-37],[48,-7],[51,-23],[29,-28],[66,-88],[179,-33],[67,16],[26,24],[30,51],[-17,18],[-2,11],[59,61],[73,2],[24,17],[136,-61],[33,-35],[-4,-10],[-39,-36],[-24,-4],[-13,-15],[-21,-56],[4,-21],[-27,-38],[-22,-12],[-55,3],[-54,-31],[-24,-6],[-82,-7],[-7,9],[-98,-6],[-55,-9],[-100,-68],[-62,-15],[-20,-19],[-8,-20],[-24,-9],[-80,22],[-27,-1],[-28,-23],[-139,19],[-172,37],[-112,49],[-13,27],[-22,75],[-7,39],[8,14],[21,59],[2,43],[-60,66],[-86,64],[-26,55],[15,39],[23,1],[80,-23],[124,-8],[115,-57],[26,-34],[40,-4],[66,26]],[[15656,66493],[82,-28],[79,75],[12,14],[15,-10],[28,-12],[27,-2],[20,9],[61,53],[20,26],[1,17],[-6,18],[7,8],[22,-17],[26,-69],[-19,-17],[6,-27],[43,-18],[58,12],[44,-35],[22,-27],[40,-65],[-9,-11],[-45,-12],[-113,6],[-28,-11],[-9,-14],[-63,19],[-126,66],[-21,0],[-14,-16],[-31,-17],[-98,13],[-20,17],[-21,34],[10,21]],[[19024,62713],[40,22],[18,1],[84,-60],[82,-44],[63,-23],[26,-23],[106,-131],[-54,-45],[-75,-18],[-41,0],[-91,25],[-40,12],[-21,19],[-104,33],[-70,69],[-3,13],[-1,13],[-17,25],[-31,104],[62,-37],[25,11],[28,34],[14,0]],[[19467,66303],[-17,11],[-37,17],[-12,12],[-1,8],[27,10],[46,-5],[37,-35],[55,-10],[23,1],[86,53],[33,-4],[-69,-27],[-56,-40],[-84,12],[-31,-3]],[[22761,60805],[-41,54],[-57,193],[-35,63],[-47,56],[-49,194],[-33,35],[-39,-4],[4,81],[42,25],[69,-10],[23,-24],[17,-21],[-1,-31],[20,-61],[70,-126],[40,-50],[119,-183],[42,-52],[23,-15],[67,-54],[51,-70],[282,-278],[60,-86],[-11,-23],[-15,13],[-71,23],[-27,4],[-27,-7],[-24,-18],[-90,-98],[-13,24],[3,7],[-60,68],[-114,105],[-44,14],[-31,35],[-38,84],[-5,14],[4,24],[-64,84],[0,11]],[[22850,63553],[2,-9],[52,-8],[29,11],[117,-97],[81,-8],[152,-86],[43,-3],[8,-11],[11,-93],[149,-196],[31,-29],[22,-36],[25,-77],[-7,-49],[-42,-45],[-31,-11],[-66,31],[-63,50],[-53,23],[-103,5],[-136,-12],[-60,16],[-33,21],[-61,90],[-25,62],[23,66],[15,81],[-24,128],[-14,38],[-56,22],[-43,-9],[-2,13],[-25,28],[-52,19],[-78,-6],[-18,5],[-27,25],[-18,44],[-67,94],[-26,13],[-11,33],[3,8],[17,-1],[47,-20],[152,1],[50,-30],[112,-91]],[[8485,85384],[-58,-2],[-32,15],[-11,28],[28,36],[28,19],[35,-11],[0,0],[11,-41],[0,-44],[-1,0]],[[6303,84628],[0,21],[6,11],[28,-3],[16,-16],[11,-25],[-13,-38],[-17,-4],[-22,12],[-11,22],[2,20]],[[8632,85254],[3,20],[29,8],[24,-41],[17,-48],[-15,-33],[-35,18],[-1,26],[-22,50]],[[1912,105938],[406,-7],[2,-1],[46,1],[4,-1],[972,-6],[722,21],[391,3],[59,1],[11,-1],[0,1],[555,-7],[428,23],[0,0],[278,21],[402,-25],[162,0],[1343,9],[490,18],[450,5],[325,-9],[0,0],[470,0],[4,0],[14,-1],[4,0],[566,-17],[1074,-16],[11,0],[58,-1],[51,-1],[346,-9],[223,-3],[266,-4],[29,0],[17,-1],[216,0],[58,-1],[73,-3],[17,2],[5,0],[660,-1],[437,-15],[571,2],[680,0],[6,0],[1343,-3],[145,0],[1053,7]],[[17355,105919],[-3,-4019],[2,-1541],[1,-28],[0,-8],[12,-1815],[-1,-882],[0,-3],[0,-286],[0,-6],[-4,-675],[0,-172],[0,-71],[0,-27],[-12,-1443],[0,-4],[-3,-285],[0,0],[-7,-1375],[0,-1],[-8,-637],[0,-1],[0,-12],[0,-3],[-1,-419],[0,-18],[4,-295],[4,-262],[4,-225],[5,-336],[355,-329],[1160,-1084],[3,-1],[6,-6],[334,-314],[1,-1],[159,-147],[0,0],[448,-423],[629,-595],[113,-107],[1391,-1330],[1166,-1137],[1425,-1390],[0,0],[759,-745],[1217,-1213],[1227,-1237],[606,-610],[1879,-1927],[1433,-1491],[14,-13],[662,-696],[73,-76],[172,-181],[575,-603],[151,-160],[1,-2],[2,-1],[884,-944],[6,-5],[39,-41],[9,-10],[9,-11],[312,-332],[119,-127],[169,-182],[237,-256],[2,0],[49,-52],[3,-3],[808,-873],[0,0],[442,-480],[3,-3],[627,-682]],[[36710,59929],[-2733,-256],[-1506,-152],[-844,-90],[-1041,-110],[-2672,-305],[-22,-2],[-31,205],[1,107],[-13,107],[-10,41],[-75,167],[-33,56],[-42,48],[-47,30],[-13,6],[-60,-6],[-40,-23],[-45,-58],[-36,-10],[-34,152],[-8,129],[8,96],[10,38],[-9,168],[-22,81],[-73,94],[-5,86],[4,17],[27,42],[33,-12],[15,18],[17,34],[16,74],[-10,127],[-22,155],[-8,41],[-66,361],[-47,110],[-60,198],[-20,94],[-48,141],[-114,210],[-11,21],[-106,170],[-39,54],[-160,272],[-88,138],[-132,187],[-154,156],[-88,67],[-89,37],[-44,98],[-87,120],[-51,51],[0,0],[-143,105],[-17,-9],[-10,-17],[2,-13],[-88,32],[-40,113],[-128,164],[-87,124],[-60,24],[-47,30],[-96,105],[-133,93],[-85,37],[-100,29],[-49,72],[-61,46],[-159,124],[-107,109],[-129,172],[-88,93],[-45,21],[-57,47],[-59,48],[-88,35],[-69,17],[-19,-3],[-25,-69],[14,-65],[9,-93],[-96,-2],[-187,-65],[-68,16],[-73,6],[-74,23],[-137,96],[-22,23],[-90,23],[-42,-28],[-54,30],[-63,163],[19,36],[67,90],[39,20],[0,0],[11,55],[-3,127],[-75,213],[-109,280],[-67,142],[-81,133],[-5,9],[-68,89],[-62,59],[-86,55],[-96,15],[-126,-13],[-22,-13],[-215,12],[-26,-7],[-15,-21],[-98,-19],[-96,17],[-46,-3],[-141,-53],[-14,-9],[-66,-91],[-60,63],[-69,67],[-52,33],[-152,25],[-117,33],[-37,-12],[-25,9],[-36,14],[-85,58],[-70,31],[-28,1],[-121,84],[-119,36],[-68,39],[-35,5],[-43,-24],[-74,28],[-108,97],[-107,96],[-53,27],[-30,2],[-19,6],[-41,77],[-34,70],[-73,186],[-33,106],[-15,91],[-32,69],[-45,40],[-41,-11],[-40,14],[-89,74],[-43,69],[-78,75],[-20,8],[-45,-19],[-9,4],[-136,173],[-12,11],[-18,3],[-92,90],[-43,8],[-20,8],[-119,45],[-97,45],[-82,89],[-211,38],[-80,-26],[-36,8],[-85,-6],[-60,-18],[13,-21],[-26,-26],[-64,-38],[-74,2],[-59,35],[-148,65],[-33,8],[-150,-9],[-66,-39],[-74,4],[-188,125],[-114,7],[-57,46],[-133,79],[-112,14],[-44,-9],[-139,-7],[-32,8],[-77,41],[-84,17],[-155,-15],[-154,1],[-46,-13],[-72,-3],[-93,5],[-44,11],[-15,-4],[-10,-14],[-145,-41],[-368,-36],[-35,-22],[-73,4],[-19,135],[-14,30],[-37,44],[-77,163],[-49,42],[-207,127],[-99,-1],[-14,-16],[-39,2],[-55,61],[-29,73],[20,116],[55,149],[85,286],[6,62],[-5,25],[-48,105],[-42,36],[-41,88],[53,186],[25,114],[23,131],[-1,77],[-23,42],[-84,68],[-10,68],[-19,34],[-57,1],[-29,14],[80,349],[33,141],[23,150],[14,141],[1,83],[-5,117],[-18,108],[-31,79],[-25,40],[-42,28],[-20,-7],[-26,6],[-44,37],[-43,52],[-20,10],[-36,14],[-74,13],[-54,-4],[-21,-15],[-8,-27],[3,-44],[-16,-3],[-68,45],[-26,44],[-70,36],[-152,96],[-34,10],[-63,96],[-87,110],[0,30],[27,118],[36,81],[46,164],[16,97],[2,69],[-14,160],[-12,51],[-57,134],[-44,59],[-41,34],[-141,-12],[-16,7],[-18,28],[-50,32],[-25,-5],[-99,8],[-82,118],[-101,114],[-25,11],[-153,194],[-89,219],[-28,37],[-36,27],[-85,146],[-82,38],[-23,-12],[-204,79],[-78,50],[-47,37],[-18,76],[-24,37],[-30,24],[-37,57],[-4,195],[-33,83],[-28,68],[-51,60],[-38,45],[-115,96],[-69,104],[-23,53],[-50,24],[-47,34],[-83,93],[4,56],[-8,37],[-33,77],[-51,250],[-62,148],[-31,31],[-74,39],[-80,27],[-58,8],[-19,18],[-58,125],[5,17],[-14,56],[-51,35],[-43,78],[-12,59],[-28,73],[-186,255],[-135,145],[-230,160],[-63,34],[-37,-7],[-24,7],[-47,38],[-34,44],[-13,48],[-46,86],[-84,56],[-50,68],[-23,74],[6,113],[-46,88],[11,28],[3,89],[-5,58],[-9,23],[-32,30],[-12,52],[10,55],[-39,139],[-43,92],[-16,65],[9,56],[1,48],[-18,26],[-3,50],[58,6],[10,11],[-24,172],[-36,32],[-27,6],[-6,-18],[-22,2],[-56,45],[-22,35],[30,11],[106,175],[11,79],[8,14],[25,1],[21,-12],[123,-126],[5,-37],[8,-1],[56,15],[40,33],[67,94],[38,73],[25,61],[39,127],[27,156],[5,178],[64,267],[-12,55],[-65,166],[-5,10],[-62,143],[-127,258],[-66,93],[-53,58],[-43,35],[-87,45],[-34,0],[-45,-33],[-77,-86],[-12,0],[-29,23],[-105,29],[-40,-12],[-14,-54],[-84,-13],[-60,-2],[-47,13],[-98,25],[-127,95],[-53,29],[-116,112],[-71,52],[-169,226],[-30,64],[-90,145],[-29,28],[-48,45],[-29,9],[-33,-14],[-28,0],[-24,10],[-6,17],[6,49],[-3,26],[-22,40],[-58,57],[-7,40],[-20,46],[-45,41],[-41,9],[-24,21],[-29,42],[-8,118],[-6,29],[-26,37],[-12,43],[3,35],[25,86],[38,353],[1,110],[-31,77],[-51,88],[-75,215],[-8,127],[-23,94],[-57,88],[-17,11],[-15,-8],[-21,-13],[-13,-8],[-4,-1],[-1,-1],[-24,-9],[-3,2],[-18,13],[-63,129],[-11,79],[11,38],[7,6],[4,30],[-16,118],[3,72],[58,45],[17,62],[10,158],[-10,210],[-21,108],[-15,77],[-11,125],[-9,110],[-9,48],[33,37],[46,-2],[26,14],[28,100],[29,-11],[24,-20],[138,32],[68,2],[34,-29],[47,-74],[35,-276],[21,-13],[9,13],[8,-2],[32,-25],[-18,-72],[-32,13],[-77,-46],[-7,-4],[21,-141],[49,-84],[-5,-49],[-9,-9],[-34,-10],[4,-54],[76,-56],[37,-52],[-12,-23],[-43,16],[-11,-3],[-19,-41],[67,-65],[156,-8],[9,-18],[-2,-17],[36,-41],[159,-13],[39,-32],[28,-41],[6,-5],[23,-21],[41,-36],[40,-35],[65,-7],[6,-73],[97,-91],[47,-14],[22,7],[35,26],[34,-21],[12,-18],[42,26],[18,11],[-3,106],[-61,157],[-19,12],[-13,22],[-26,72],[-9,32],[6,62],[-4,32],[-24,166],[-37,134],[-29,41],[-30,19],[-67,64],[-24,24],[-36,5],[-29,34],[-92,81],[-34,68],[-7,20],[3,27],[18,12],[27,14],[8,17],[-40,37],[-38,17],[-42,13],[-39,11],[-29,5],[-38,20],[-53,22],[-38,21],[-6,3],[0,11],[-3,50],[-14,17],[-1,0],[7,51],[38,66],[21,18],[42,3],[9,13],[9,88],[-33,130],[1,93],[-12,21],[0,1],[-38,43],[-40,15],[-82,0],[-20,-23],[-19,-2],[-41,7],[-26,14],[-12,10],[-5,62],[-16,22],[-23,7],[-46,44],[-13,31],[-47,97],[1,11],[53,-11],[13,-13],[13,-15],[31,-7],[118,110],[21,58],[-4,22],[-14,20],[-8,47],[4,23],[16,8],[15,-21],[71,-31],[30,8],[40,38],[20,3],[54,-13],[64,58],[75,109],[0,34],[-14,43],[-23,71],[-36,42],[-70,110],[-46,50],[-190,130],[-110,42],[-26,4],[-1,0],[-22,-72],[-110,-95],[-39,-4],[-17,13],[-108,-19],[-20,-15],[-3,-11],[-2,-8],[5,-55],[12,-35],[10,-90],[-31,-77],[-26,-120],[6,-63],[12,-21],[48,-37],[68,-22],[36,-35],[17,-39],[0,-18],[-30,-29],[-22,13],[-34,1],[-62,-74],[-6,-10],[0,-28],[10,-51],[26,-17],[5,-19],[-24,-20],[-50,8],[-13,-13],[0,-38],[34,-35],[27,0],[30,-16],[23,-40],[-2,-39],[51,-42],[37,-4],[34,-47],[3,-14],[-43,-49],[-44,-11],[-45,27],[-24,-5],[-9,-22],[1,-25],[24,-154],[0,-2],[-10,-35],[-2,1],[-14,6],[-33,-10],[-47,-13],[-64,13],[-3,0],[-50,28],[-43,29],[-46,77],[-83,37],[-62,79],[-95,54],[-47,56],[-61,35],[-80,11],[-14,-1],[-42,-26],[-33,-37],[-90,54],[-21,77],[-15,28],[-65,48],[-42,12],[-63,67],[-31,89],[-20,36],[-88,100],[-129,99],[-94,42],[-211,33],[-63,-16],[-57,-42],[-34,-55],[-3,-24],[9,-17],[12,-26],[9,-16],[-182,12],[12,24],[16,10],[18,9],[70,190],[115,353],[32,127],[12,77],[-2,49],[-15,58],[-43,57],[-4,56],[-6,19],[-88,153],[-7,22],[3,10],[22,-10],[68,26],[5,39],[-36,85],[-34,26],[-30,49],[-10,32],[-21,31],[-4,6],[-74,68],[-53,15],[-45,-15],[-9,-24],[5,-18],[-5,-14],[-18,-5],[-20,19],[-40,101],[23,63],[1,122],[-64,152],[-66,124],[-69,108],[-23,65],[-61,45],[-77,77],[-132,96],[-174,83],[-137,144],[-37,16],[-127,110],[-42,121],[-23,34],[-81,52],[-28,72],[-69,125],[-18,12],[-9,36],[-100,151],[-33,62],[-71,86],[-106,75],[-90,49],[-38,58],[-31,73],[-31,41],[-110,106],[-29,23],[-24,0],[-51,56],[-5,24],[-13,19],[-122,105],[-15,0],[-17,8],[-18,45],[-9,55],[-19,34],[-104,104],[-82,98],[-54,21],[-9,59],[5,34],[-46,88],[22,5],[14,8],[28,36],[38,66],[52,135],[23,83],[2,49],[-14,130],[-71,253],[-30,84],[-53,71],[-7,19],[-16,106],[-69,133],[-18,10],[-33,91],[-9,125],[-39,134],[-40,35],[-18,37],[8,24],[-5,40],[-31,105],[10,57],[-32,72],[-17,25],[-12,84],[-3,39],[14,56],[2,133],[26,197],[70,226],[42,86],[21,59],[44,156],[-3,35],[-74,221],[14,25],[5,59],[-15,191],[-23,120],[-57,132],[-61,36],[-17,25],[-8,37],[-13,41],[-11,67],[4,118],[-10,97],[-44,180],[-7,10],[-102,56],[-96,88],[-27,61],[-3,28],[-52,142],[-91,63],[-28,76],[-64,123],[-58,52],[-103,140],[-44,60],[-75,54],[-32,3],[-14,-17],[-13,6],[-27,36],[-3,180],[-23,61],[-86,125],[-108,63],[-113,39],[-63,31],[-99,151],[-59,53],[-100,63],[-140,121],[-90,88],[-24,54],[-57,33],[-35,32],[-39,52],[-1,75],[58,191],[-20,83],[-12,18],[-23,74],[-10,123],[-30,90],[-20,29],[-45,41],[-41,75],[-26,79],[4,25],[44,94],[43,137],[6,50],[-14,25],[15,70],[14,19],[57,128],[125,336],[53,115],[9,9],[86,190],[149,275],[74,170],[97,177],[92,191],[67,160],[78,247],[70,315],[22,193],[-49,100],[-28,20],[-19,9],[-17,-1],[-16,-6],[-6,-7],[-9,-2],[-8,12],[-2,32],[-2,135],[-22,59],[6,114],[-24,39],[6,44],[20,21],[32,-11],[22,19],[77,224],[58,198],[2,54],[52,233],[48,295],[25,137],[34,321],[-9,125],[-2,28],[-36,156],[-21,47],[-2,181],[-38,29],[-32,77],[-1,46],[15,34],[-13,85],[-50,71],[-6,60],[-15,57],[-56,84],[-14,71],[4,36],[-19,151],[-15,43],[-25,53],[-38,57],[-46,27],[-30,-31],[-21,-17],[-14,4],[-32,51],[-132,118],[-9,6],[-24,-3],[-27,57],[41,46],[52,131],[41,138],[41,207],[18,261],[-6,211],[-24,74]],[[75813,100995],[51,0],[58,2],[19,-1],[167,0],[5,0],[65,0],[211,1],[66,-1],[72,0],[1041,0],[282,0],[40,1],[237,1],[0,0],[145,-1],[63,0],[8,0],[1046,2],[4,0],[63,1],[5,0],[54,0],[17,-1],[135,1],[7,0],[63,-1],[5,-1],[65,1],[4,-1],[7,0],[4,0],[54,1],[7,-1],[64,1],[6,0],[64,0],[6,0],[64,0],[6,0],[66,0],[7,-1],[61,1],[10,0],[59,1],[11,-1],[197,1],[25,-1],[45,1],[55,-1],[315,1],[119,1],[156,-2],[10,0],[1,0],[35,0],[34,0],[252,1],[64,0],[5,0],[328,-1],[57,0],[261,0],[1,0],[1,0],[4,0],[70,0],[16,1],[132,-1],[72,1],[10,0],[67,-1],[243,1],[199,0],[69,0],[1,0],[1,-1254],[0,0],[0,-258],[-2,-791],[1,-88],[0,-398],[-1,-216],[1,-16],[0,-218],[-1,-564],[0,-31],[0,-330],[-1,-71],[1,-720]],[[83150,96045],[1,-760],[1,-31],[0,-51],[0,-71],[3,-711],[2,-412],[0,-91],[1,-29],[0,-145],[0,-11],[0,-151],[1,-411],[0,-26],[1,-72],[1,-148],[1,-350],[5,-824],[0,-19],[0,-17],[2,-410],[5,-1158],[0,-69],[-1,-80],[1,-66],[0,-72],[0,-6],[0,-282],[0,-44],[1,-9],[-1,-57],[1,-2],[0,-26],[-1,-270],[0,0],[0,-167],[0,-113],[0,-74],[1,-99],[-1,-91],[0,0],[1,-600],[1,-358],[1,-215],[0,-1],[0,-31],[0,-62],[2,-1596],[0,-9],[3,-289],[0,-217],[1,-102],[1,-74],[1,-141],[1,-108],[0,-72],[2,-216],[-1,-73],[1,-55],[0,-51],[-1,-180],[-1,-248],[0,-83],[0,-29],[1,-145],[0,-182],[0,-171],[0,-1],[0,-123],[0,-103],[-1,-180],[0,-1],[1,-214],[0,-58],[-1,-196],[0,-577],[0,-83],[0,0],[1,-65],[-1,-27],[0,-354],[1,-4],[-1,-11],[0,-7],[0,-30],[-1,-157]],[[83185,81121],[-45,1],[-476,2],[-88,1],[-538,4],[-1,0],[-790,3],[-1117,22],[-381,-5],[-23,0],[-4,-1],[-56,8]],[[79666,81156],[-308,-1],[-2372,-9],[-4,0],[-1003,-9],[-2655,-14],[0,0],[-984,-1],[-441,11],[-125,0],[-241,-1],[-728,3],[-85,1],[-18,0],[-65,0],[-160,-1],[-14,0],[-78,0],[-343,-1],[-137,1],[-190,0],[-7,0],[-1018,-2],[-5,0],[-33,0],[-884,-6],[-4,0],[-834,-4],[-517,-2],[1,0],[-43,1],[0,0],[-120,0],[-52,0],[-712,-4],[-479,38],[-1541,0],[0,0],[-223,0],[-2956,-2],[-1,-1],[-118,0],[-1,0],[-214,0],[-882,-1],[-2,0],[-1225,-2],[-16,0],[-317,1]],[[57512,81151],[0,365],[1,10],[0,58],[-1,49],[0,65],[0,13],[0,0],[-2,1304],[10,546],[4,226],[0,0],[1,364],[-2,67],[1,31],[1,433],[0,10],[0,608],[0,31],[-2,194],[-3,461],[1,113],[0,11],[3,762],[0,13],[-66,595],[0,1113],[2,1090],[20,915],[1,4],[2,185],[0,2],[6,903],[0,1198],[1,649],[0,808],[1,1975],[1,3],[-1,601],[0,1],[1,207],[3,1573],[-1,2],[7,561],[0,45],[-7,1676]],[[57494,100991],[2931,-2],[1218,9],[2202,5],[1163,2],[523,-2],[1481,-5],[53,0],[7,-1],[24,0],[143,-3],[21,0],[239,-10],[478,-6],[475,-5],[1212,0],[21,0],[1641,6],[1,0],[75,0],[6,0],[1142,0],[223,0],[1412,18],[1,0],[1035,-1],[2,0],[10,0],[322,0],[70,0],[67,0],[71,-1],[50,0]],[[194056,105986],[9,-394],[3,-120],[7,-314],[0,-5],[5,-156],[0,-8],[11,-408],[0,-1],[1,-419],[0,-214],[0,0],[-30,-892],[0,-1],[-76,14],[-78,-37],[-11,-11],[-3,-20],[5,-52],[32,-54],[7,-67],[1,-130],[-5,-17],[-26,-33],[-73,-61]],[[193835,102586],[-32,43],[-66,27],[-111,-21],[-20,12],[-4,2],[-48,15],[-34,-1],[-41,-40],[-52,-26],[-31,27],[-10,-1],[-22,-46],[-124,-18],[-229,14],[-37,-27],[-20,-36],[-44,-39],[-82,1],[-100,54],[-45,37],[-14,24],[-24,7],[-25,-4],[-38,-37],[-6,-12],[-4,-70],[-32,-38],[-46,38],[-37,6],[-46,-4],[-14,-4],[5,-21],[-3,-22],[-37,-35],[-207,-26],[-36,4],[-23,22],[-28,-14],[-26,-13],[2,-39],[-141,-39],[-44,81],[-27,1],[-168,3],[-76,-44],[-48,4],[-51,-25],[-26,-28],[-44,5],[-10,22],[-30,-6],[-14,-9],[-12,-32],[-4,-3],[-33,-24],[-2,-1],[-86,85],[-1,2],[-1,0],[-44,18],[-7,-2],[-3,-1],[-2,0],[-5,-2],[-7,-2],[-4,-1],[-26,-7],[-36,9],[-9,2],[-26,6],[-1,-1],[-1,0],[-49,-14],[-36,-10],[-2,0],[-4,-1],[-29,-3],[-12,-2],[0,0],[-3,2],[-27,13],[-3,2],[-16,-5],[-16,-6],[-3,0],[-7,-8],[-39,-39],[-1,-25],[-1,-6],[-14,-18],[-3,-4],[-1,-1],[-11,-6],[-5,-2],[-2,-1],[-24,-1],[-16,0],[-3,0],[-6,-1],[-1,0],[-1,0],[-5,0],[-1,2],[-10,21],[9,10],[-5,15],[-36,25],[-38,-22],[-80,60],[-11,0],[-105,-10],[-119,-62],[-3,9],[-27,13],[-77,0],[-9,-6],[-14,-39],[-26,-12],[-74,-13],[-51,5],[-20,11],[-13,7],[-3,5],[8,22],[1,1],[29,16],[0,0],[3,19],[-9,20],[-25,53],[-17,39],[-1,2],[-32,-5],[-1,0],[-11,-10],[-2,-42],[0,-4],[-1,-9],[-40,-38],[-6,-6],[-8,-7],[-78,-28],[-10,-3],[-6,-3],[-3,-1],[-79,-80],[-5,-5],[-4,-4],[-43,-54],[-21,-37],[-14,-25],[-22,-23],[-2,-2],[-4,-4],[-19,-1],[0,1],[0,1],[0,0],[0,2],[-1,7],[-7,4],[-9,1],[-76,11],[-18,3],[-16,-8],[-16,-9],[-67,-57],[-7,-6],[-43,-49],[-3,-3],[-1,-1],[-44,-50],[-4,-5],[0,0],[-10,-17],[-8,-45],[1,-14],[6,-16],[-10,-14],[-70,-20],[-125,58],[-21,10],[-3,22],[-25,8],[-92,-42],[-94,-77],[-24,7],[-48,-87],[-53,-45],[-89,52],[-35,-11],[-57,-46],[-69,-32],[-153,-29],[-72,-81],[-30,-7],[-49,-65],[-79,-82],[-56,2],[-65,-28],[-34,-77],[-58,61],[-87,-47],[1,-46],[-22,-50],[-23,-15],[-8,28],[4,34],[-10,14],[-9,1],[-60,-37],[-38,-38],[-21,-29],[-9,-46],[-51,-4],[-3,48],[-40,27],[-30,-4],[-145,-64],[-28,-35],[-23,-50]],[[187244,100914],[10,132],[-2,5],[-56,86],[-35,58],[-26,44],[-26,43],[-123,205],[323,202],[28,17],[65,41],[366,225],[18,12],[99,59],[-251,410],[23,351],[4,52],[22,283],[1,10],[2,26],[3,51],[0,8],[1,11],[0,2],[0,8],[5,92],[1,3],[0,2],[0,6],[0,5],[1,3],[14,236],[32,442],[14,249],[27,457],[19,322],[0,3],[65,1117]],[[187868,106192],[707,-13],[5,0],[227,-10],[5,-1],[376,-14],[271,-10],[163,-3],[532,-8],[0,0],[184,-6],[-12,-193],[154,23],[29,4],[3,23],[29,65],[2,1],[6,75],[153,3],[67,0],[685,-10],[409,-7],[728,-11],[232,-4],[0,0],[123,-6],[155,-8],[950,-19],[5,-77]],[[174551,90746],[70,73],[170,179],[49,50],[17,-17],[76,-79],[7,-7],[20,-21],[21,-23],[0,-1],[223,-235],[118,-125],[-5,-5],[-31,-33],[-3,-3],[-108,-115],[-15,-14],[-175,-183],[-84,-92],[-52,-57]],[[174849,90038],[20,238],[5,55],[-33,102],[-101,142],[-80,22],[-41,34],[-68,115],[0,0]],[[148148,71182],[705,-4],[1,0],[364,-1],[32,0],[58,0],[252,1],[1,0],[964,-2],[196,24],[259,2],[243,7],[1373,34],[0,0]],[[152596,71243],[-127,-376],[-366,-233],[-89,-224],[-58,-56],[-150,-162],[-55,-235],[-49,-125],[0,0],[4,-8],[1,-6],[-1,-57],[48,-69],[2,-1],[169,-170],[187,-143],[0,-1],[268,-118],[-13,-9],[3,-31],[232,-290],[73,-89],[52,-58],[76,-56],[64,-47],[102,-45],[42,0],[10,23],[2,0],[46,18],[149,17],[133,-1],[73,-34],[33,-38],[-4,-13],[96,-223],[303,-646],[40,-87],[48,-227],[-5,-14],[-4,-12],[9,-74],[2,-7],[35,-150],[53,-138],[49,-47],[98,-47],[34,-57],[33,-82],[2,-2],[17,-14],[6,-3],[40,-54],[2,-2],[160,-377],[119,-280],[1,-1],[496,-446],[23,-10],[53,13],[17,-4],[291,-226],[84,-90],[198,-244],[106,-329],[81,-276],[61,-73],[164,-123],[22,-6],[16,7],[30,-8],[65,-16],[109,-55],[83,-57],[67,-94],[51,-72],[24,-35],[2,-2],[147,-209],[33,-60],[167,-297],[36,-384],[185,-415],[1,-1],[292,-333],[276,-316],[281,-104],[17,-15],[271,-232],[110,-105],[56,-71],[18,-58],[-12,-97],[-18,-75],[279,-760],[69,-315],[-1,-10],[-35,-533],[-14,-14],[-1,-26],[25,-54],[83,-114],[0,-1],[151,-129],[71,-40],[38,-7],[116,-74],[42,-27],[280,-358],[113,-490],[100,-94],[24,-38],[44,-180],[7,-97],[-28,-48],[9,-243],[13,-324],[17,-219],[15,-22],[188,-126],[70,-16],[142,-61],[435,-187]],[[160746,56537],[97,-54],[25,15],[33,-12],[10,-64],[-5,-43],[-24,-72],[-53,-93],[-73,-51],[-55,-50],[-49,-26],[-66,6],[-4,58],[-67,2],[-88,-79],[-12,-87],[27,-39],[51,-20],[48,6],[25,-19],[-47,-64],[-88,-91],[-78,-100],[-28,-5],[-52,53],[-99,44],[-87,4],[24,-95],[-1,-39],[-14,-26],[-49,-43],[1,-35],[69,-32],[22,-1],[11,12],[30,-9],[11,-17],[0,-34],[-38,-49],[-77,-169],[-32,-37],[-75,-40],[-122,-151],[-28,-9],[-60,26],[-22,10],[-118,25],[-20,-36],[-19,-32],[63,-89],[93,-51],[23,13],[10,22],[10,5],[36,3],[30,-21],[-16,-61],[-3,-43],[17,-101],[-6,-154],[-61,-148],[-38,-114],[-46,-72],[-21,-2],[-17,22],[-10,40],[-30,0],[-37,1],[-37,-53],[-96,-26],[-50,18],[-21,-38],[-14,-78],[1,-8],[17,-9],[150,-9],[16,4],[52,47],[24,-9],[41,-40],[13,-26],[3,-27],[-45,-67],[-56,-151],[-154,-249],[-43,-91],[-74,-185],[-2,-80],[-13,-122],[31,-1],[24,-10],[48,-44],[-22,-57],[-33,-46],[-18,-25],[-8,-173],[-22,-51],[-23,-94],[3,-71],[-18,-24],[-43,0],[-34,8],[-91,-104],[-58,-98],[-21,-56],[5,-33],[-33,-63],[-68,-16],[-47,4],[-9,-43],[-6,-90],[9,-104],[0,-67],[-51,-228],[-19,-50],[-16,-15],[-28,-3],[-8,8],[-1,16],[-30,-6],[-31,-6],[-23,-26],[-5,-22],[-37,-48],[-78,-55],[-12,-37],[25,-39],[41,-18],[13,19],[20,5],[48,-26],[23,-44],[75,-1],[25,87],[16,15],[27,3],[18,-98],[-6,-247],[-86,-356],[-8,-26],[-34,-48],[-25,-55],[-31,-96],[-17,-104],[-4,-81],[6,-58],[37,-131],[19,-29]],[[158698,49968],[-368,15],[-226,27],[-66,90],[-48,-12],[-303,53],[-47,27],[-31,63],[-67,43],[-173,91],[-75,-4],[-49,-13],[-103,32],[-137,146],[-344,-168],[-86,-31],[-100,-525],[4,-104],[43,-109],[89,-186],[29,-160],[-42,-219],[3,-109],[-124,-668],[0,-1],[-274,21],[-148,-42],[-24,9],[-66,81],[-53,124],[-23,116],[16,153],[-23,218],[-8,334],[-1,1],[-129,19],[-30,3],[-107,10],[-321,27],[-162,14],[-149,12],[0,0],[-239,20],[-42,3],[-32,2],[-30,3],[-45,4],[-14,1],[-54,5],[-386,29],[-1,0],[-33,2],[-1,1],[-654,53],[-5,0],[-946,76],[-71,6],[-27,2],[-40,2],[-48,4],[-252,20],[-195,16],[0,0],[0,0],[-8,1],[-107,8],[-1,0],[-61,5],[-80,7],[-39,3],[-144,11],[-1,0],[-38,3],[-32,2],[-597,43],[0,0],[-229,18],[-10,0],[-245,18],[-245,17],[-38,4],[-126,9],[-92,7],[0,0],[-466,31],[0,0],[-118,8],[-8,1],[-18,1],[-39,3],[-97,6],[-724,46],[-5,0],[-360,22],[-565,34],[-16,1],[-245,15],[-1,0],[-942,58],[-5,0],[-115,194],[-168,681],[-65,112],[-87,124],[-56,178],[-14,145]],[[145653,51411],[11,65],[-83,306],[-28,102],[-21,60],[-151,242],[-25,13],[-32,3],[-29,26],[-27,104],[-16,357],[38,123],[51,126],[72,589],[77,446],[21,117],[-60,385],[-7,15],[-21,13],[-80,82],[-141,268],[-4,108],[16,30],[12,49],[-20,151],[-3,20],[-20,25],[-29,41],[-10,13],[-2,282],[33,240],[96,133],[90,146],[36,100],[37,134],[44,160],[-21,193],[30,392],[190,212],[114,50],[151,181],[7,9],[47,150],[-28,88],[-81,96],[-232,106],[-19,32],[-4,41],[76,221],[1,2],[29,151],[-17,166],[-52,120],[-10,182],[-1,18],[0,1],[-1,13],[-21,54],[-56,94],[-81,83],[-92,121],[-38,94],[-1,3],[-8,17],[-82,176],[-36,214],[-83,295],[2,7],[17,88],[32,39],[-223,488],[-138,917],[-5,35],[-34,225],[-15,107],[-210,1480],[-39,272],[-35,232],[0,2],[-4,29],[-27,189],[-57,392],[-82,569],[-5,30],[-91,633],[-45,310],[-84,578],[-122,843],[-1,10],[-10,64],[-2,18],[-14,84],[-146,930],[-1,3],[-22,133],[-13,84],[-6,29],[0,0],[-1,6],[-48,314],[-27,174],[-25,164],[0,0],[-41,255],[0,1],[-113,753],[-44,317],[0,0],[-36,300]],[[143444,71164],[479,-4],[405,-3],[204,5],[10,1],[15,0],[26,1],[62,1],[6,0],[39,1],[37,0],[72,2],[19,0],[31,0],[5,0],[10,1],[4,0],[113,1],[19,1],[497,4],[0,0],[239,3],[11,1],[78,0],[41,0],[19,1],[286,-1],[12,0],[96,1],[28,-1],[13,1],[12,-1],[24,-1],[1,0],[5,0],[4,0],[118,1],[164,2],[13,-1],[389,2],[409,-2],[3,0],[418,0],[4,0],[264,2]],[[135396,108385],[0,-7],[5,-56],[3,-31],[0,-6],[-9,-128],[-10,-126],[-1,-14],[0,-19],[-6,-145],[-3,-6],[-35,-84],[-3,-9],[-16,-15],[0,0],[-22,-90],[-14,-60],[-1,-5],[-1,-9],[-13,-134],[5,-33],[2,-18],[1,-6],[5,-31],[10,-69],[2,-6],[1,-4],[3,-9],[6,-18],[47,-149],[0,-1],[0,-1],[0,-1],[15,-37],[16,-44],[14,-37],[6,-10],[1,-2],[3,-5],[0,0],[2,-4],[0,-1],[31,-57],[4,-7],[44,-81],[58,-109],[11,-19],[2,-4],[4,-7],[1,-3],[1,0],[14,-27],[7,-13],[8,-14],[17,-32],[1,-2],[2,-3],[1,-1],[3,-6],[1,-1],[21,-33],[12,-21],[4,-7],[0,0],[4,-6],[1,-1],[3,-5],[1,-2],[7,-11],[2,-3],[0,0],[3,-4],[5,-6],[0,-1],[3,-3],[4,-5],[1,0],[8,-10],[2,-3],[1,-1],[0,-1],[18,-22],[5,-5],[16,-16],[7,-6],[3,-2],[5,-6],[74,-68],[0,-1],[6,-11],[3,-7],[31,-67],[3,-26],[-1,-4],[-1,-7],[0,-1],[-3,-13],[3,-26],[8,-68],[139,-476],[0,-1],[14,-80],[9,-47],[2,-13],[0,-2],[4,-11],[12,-3],[9,-17],[12,-22],[6,-1],[3,-5],[0,-8],[-4,-7],[-5,-4],[2,-20],[-1,0],[-7,-7],[-3,-3],[1,-67],[25,-117],[33,-92],[49,-76],[0,0],[22,-35],[0,-1],[2,-7],[15,-83],[58,-99],[65,-69],[44,-19],[25,-120],[0,-78]],[[136409,104500],[-3,-28],[0,-55],[1,-281],[-1,-12],[1,-49],[0,-294],[-4,-461],[0,-1],[0,-82],[-4,-771],[0,0],[1,-655],[0,-11],[-1,-18],[0,-4],[0,-27],[0,-23],[0,-48],[0,-90],[1,-479],[1,-71],[0,-1],[0,0],[1,-488],[-2,-88],[2,-67],[-1,-4],[2,-126],[-2,-582],[0,-1],[0,-999],[0,-1],[-1,-216],[0,-2],[0,-69],[0,-2],[0,-6],[-1,-67],[-12,-1048],[0,-3],[-3,-289],[-1,-108],[-1,-109],[0,0],[-1,-19],[0,-56],[-2,-602],[0,0],[0,-57],[0,-11],[-1,-51],[-1,-49],[0,-13],[0,-20],[-2,-436],[0,0],[1,-357],[0,-35],[0,-38],[0,-72],[1,-580],[1,-93],[0,0],[1,-192],[1,-215],[0,-90],[0,-94],[1,-155],[0,-19],[0,-73],[0,0],[0,-38],[0,-16],[1,-83],[0,-58],[0,-5],[-1,-440],[-20,21],[-25,4],[-150,-78],[-15,-17],[-55,-101],[-22,-155],[16,-104],[6,-9],[38,-59],[22,9],[-64,-314],[-87,-142],[-49,-1],[-35,-32],[-26,-73],[161,-165],[155,-225],[221,-510],[-24,-155],[-33,-74],[-1,-1],[-46,-58],[-47,-164],[11,-18],[49,-30],[19,-5],[14,-4],[8,-15],[113,-326],[-12,-119],[-78,-306],[-42,-66],[-33,-24],[-144,-33],[-52,-25],[-24,-25],[-73,-114],[-27,-159],[-88,-194],[-68,-114],[3,-17],[48,-100],[-308,-525],[-36,-63],[-415,-609],[-223,-108],[-102,-93],[-13,-48],[-21,-76],[7,-54],[29,-53],[39,-58],[43,-23],[48,-17],[18,-28],[-1,-27],[-61,-102],[-53,-49],[-118,-48],[-142,-92],[-106,-283],[2,-45],[106,-299],[-3,-412],[-13,-23],[-15,-6],[-126,16],[-59,22],[81,-251],[79,-84],[-1,-144]],[[134561,85118],[-40,-118],[-22,-64],[-22,-49],[-31,-49],[-48,-47],[-183,-117],[-107,-171],[-24,-52],[-7,-35],[12,-123],[62,-230],[24,-60],[0,0],[0,0],[1,-1],[43,-29],[180,-195],[33,-65],[7,-52],[0,0],[-4,-79],[-77,-78],[-629,-84],[-97,-20],[-114,-60],[-66,-56],[-102,-121],[-185,101],[-22,-9],[-89,-35],[-62,-39],[-52,-61],[-23,-46],[-140,-476],[-4,-34],[24,-109],[138,-208],[47,-33],[41,-49],[85,-253],[-74,-267],[-52,-123],[-88,-33],[-27,-3],[-89,-7],[-63,10],[-50,14],[-54,30],[-15,12],[-46,36],[-46,69],[-134,98],[-672,346],[-395,174],[-41,10],[-52,12],[32,-19],[0,0],[-122,25],[-61,-6],[-64,-22],[-148,-106],[-166,-185],[-299,-453],[-14,-30],[-14,-31],[-21,-78],[-4,-44],[13,-81],[20,-48],[26,-40],[124,-104]],[[130512,81068],[-137,-60],[-57,16],[-79,45],[-70,14],[-71,-11],[-57,-3],[-37,14],[-27,17],[-50,17],[-112,84],[-204,151],[-20,34],[-6,43],[-106,347],[-195,462],[-87,150],[-94,166],[-5,36],[24,107],[83,112],[17,7],[36,16],[99,12],[43,20],[11,12],[17,46],[27,156],[-18,98],[-51,147],[-41,64],[-90,106],[-61,112],[-91,215],[-17,99],[0,44],[1,29],[0,34],[12,25],[22,3],[20,201],[-32,229],[-572,644],[-11,10],[-240,217],[-385,291],[-23,-8],[-43,-35],[-68,-86],[-75,-49],[-78,5],[-52,20],[-3,2],[-46,31],[-84,180],[-5,44],[-81,181],[-276,267],[-199,122],[-283,234],[-144,118],[-40,47],[-294,336],[-72,119],[-37,112],[-37,225],[5,206],[7,51],[73,205],[17,34],[22,26],[164,197],[38,82],[22,144],[59,237],[10,40],[9,19],[33,63],[89,148],[81,69],[24,29],[42,85],[7,32],[17,78],[1,45],[-13,83],[-1,4],[-18,71],[-33,64],[-25,29],[-26,46],[-10,45],[8,71],[141,200],[23,21],[154,136],[20,38],[11,46],[20,111],[-1,30],[-14,29],[-344,246],[-69,49],[-89,52],[-94,35],[-403,151],[-76,28],[-162,26],[-1,0],[-62,-30],[-16,-14],[-37,-72],[-2,-48],[-15,-43],[-75,-115],[-134,-138],[-43,-21],[-40,-9],[-62,0],[-153,98],[-117,157],[-23,38],[-9,31],[-168,558],[-7,35],[4,16],[109,155],[6,61],[-139,616],[-29,130],[-11,24],[-254,283],[-157,143],[-149,101],[-210,155],[-197,146],[-178,144],[-426,501],[-36,59],[-35,165],[-189,112],[-307,318],[-131,136],[-69,82],[-8,18],[0,62],[7,70],[10,90],[-248,313],[-49,148],[-35,373],[-16,172],[-127,283],[-57,450],[-9,263],[9,99],[16,165],[17,72],[42,184],[102,280],[63,103],[94,74]],[[122129,97905],[113,33],[47,35],[11,46],[32,441],[-1,49],[-18,62],[-57,91],[-71,41],[-10,42],[5,35],[167,234],[41,39],[33,19],[121,63],[196,58],[127,2],[76,-11],[40,6],[5,3],[174,114],[57,48],[38,127],[1,4],[63,500],[-9,23],[-2,29],[17,63],[306,394],[41,37],[108,55],[22,29],[39,144],[37,400],[-12,134],[-11,42],[-3,12],[0,0],[10,119],[-158,293],[-30,34],[-28,15],[-50,-3],[-112,65],[-235,314],[-1,43],[126,415],[4,11],[113,371],[29,38],[44,25],[139,42],[522,114],[225,-11],[53,-10],[125,-3],[300,59],[183,159],[390,118],[92,9],[48,19],[232,241],[207,244],[-6,132],[32,156],[64,246],[7,25],[19,45],[26,34],[89,86],[131,81],[75,46],[51,20],[75,30],[22,19],[110,605],[1,10],[41,322],[-2,64],[-36,102],[-12,18],[-38,59],[-7,47],[-7,106],[18,58],[8,84],[-4,52],[-19,37],[-161,157],[-86,56],[-263,124],[-35,16],[-121,53],[-29,6],[-66,46],[-59,53],[-103,144],[-43,117],[1,30],[24,45],[29,139],[-1,19],[-9,17],[-205,262],[-9,12],[-301,232],[-238,140],[-82,65],[-27,32],[-8,26],[-1,27],[2,13],[55,82]],[[124982,108466],[86,-1],[11,0],[180,-2],[35,-1],[18,1],[23,0],[2,0],[44,0],[148,0],[45,-1],[17,0],[139,-2],[39,0],[75,-1],[129,1],[10,0],[20,0],[215,2],[114,0],[13,1],[8,0],[51,-2],[9,1],[101,2],[63,-1],[89,2],[64,1],[78,-1],[176,-1],[7,1],[273,-4],[6,-1],[65,-1],[7,0],[43,-2],[2,0],[215,-3],[0,0],[1,0],[325,-1],[130,-1],[8,0],[21,0],[51,0],[39,-1],[99,1],[180,-2],[12,1],[83,-1],[63,-2],[23,-1],[112,-2],[37,-2],[13,0],[19,-1],[111,-4],[153,-4],[108,-1],[2,0],[31,-1],[216,-3],[5,0],[5,-1],[6,0],[71,-1],[1,0],[129,-1],[17,-1],[259,-6],[147,-4],[14,1],[68,-1],[8,0],[218,-4],[7,1],[145,-2],[18,0],[12,0],[66,-2],[102,-2],[104,0],[107,0],[0,0],[76,-1],[1,0],[181,-4],[11,-1],[0,0],[600,-5],[254,-2],[0,0],[735,7],[133,-1],[34,-1],[161,0],[413,1],[121,0],[201,6],[61,0],[3,0],[549,-3],[218,-4],[69,-3],[261,-5],[208,-3],[101,-2],[56,0],[1,0]],[[146321,91595],[-40,-18],[-211,-176],[-32,-45],[1,-24],[30,-58],[38,-52],[107,-146],[133,-348],[87,-228],[16,-23],[-3,-52],[-19,-68],[-82,-285],[-113,-56],[-367,-59],[-106,18],[-41,1],[-42,-11],[-104,-67],[-281,-181],[-22,-29],[-116,-108],[-64,-34],[-60,-21],[-62,-2],[-45,20],[-43,19],[-47,49],[-75,131],[-45,30],[-61,17],[-50,6],[-162,-10],[-284,-17],[-41,-11],[-44,-27],[-66,-99],[-18,-100],[64,-391],[44,-117],[43,-115],[1,-85],[-7,-28],[-21,-46],[-36,-37],[-1,-1],[-107,-56],[-532,-363],[-48,-80],[-45,-136],[-19,-76],[0,-1],[-3,-93],[-54,-170],[-78,-128],[-32,-29],[-225,-141],[-22,4],[-37,23],[-20,26],[2,13],[-27,29],[-28,11],[-39,1],[0,0],[-90,-28],[-28,-12],[-20,-19],[-251,-459],[-7,-19],[-33,-95],[-3,-105],[16,-144],[2,-53],[-6,-70],[-20,-96],[-39,-189],[-29,-51],[-41,-42],[-24,-14],[-13,-7],[-173,-39],[-113,-26],[-523,86],[-25,7],[-152,82],[-170,145],[-25,51],[-19,109],[3,65],[25,137],[-47,65],[-94,6],[-17,-9],[-34,-18],[-12,-22],[-21,-22],[-242,-118],[-102,-122],[-14,-15],[-9,-57],[-20,-34],[-52,-49],[-53,-19],[-88,-4],[0,0],[-77,-7],[-20,-9],[-17,-21],[-11,-52],[-1,-296],[-291,-545],[-109,-71],[-51,-12],[-26,5],[0,0],[-18,112],[-180,161],[-34,-22],[-18,-2],[-29,8],[-35,41],[-37,51],[-70,136],[-65,154],[-26,87],[-73,48],[-2,1],[-30,1],[-119,-58],[-106,-114],[-64,-90],[-62,-47],[-218,-32],[-1,0],[-115,-52],[-84,-65],[-33,-41],[-14,-42],[10,-49],[-2,-46],[-51,-215],[-37,-106],[-35,-49],[-48,-41],[-75,-27],[-30,2],[-35,14],[-14,27],[-255,261],[-223,144],[-24,22],[-120,105],[-286,184],[-82,34],[-58,12],[-67,-3],[-50,-13],[-3,-3],[-221,-171],[-142,91],[-33,31],[-47,81],[-8,37],[3,39],[-5,25],[-23,28],[-18,10],[-25,2],[-32,-16],[-101,-228],[10,-52],[22,-46],[85,-72],[20,-25],[12,-92],[-1,-38],[-10,-22],[-56,-89],[-32,-33],[-112,-30],[-91,12],[-31,39],[-10,50],[1,47],[69,147],[-13,51],[-34,31],[-30,7],[-61,-13],[-226,-49],[-79,-65],[-26,-10],[-146,4],[-39,28],[-59,91],[-30,72],[-26,29],[-39,26],[-54,6],[-25,-13],[-83,-113],[-34,-47],[-12,-24],[-3,-22],[3,-41],[14,-35],[33,-46],[45,-45],[17,-31],[9,-28],[15,-99],[-11,-50],[-136,-153],[-99,33],[-20,23],[-104,60],[-46,9],[-40,-14]],[[136409,104500],[13,8],[19,-28],[16,-39],[21,-24],[126,-93],[28,13],[37,-12],[26,-18],[15,12],[12,-6],[5,-8],[9,-11],[7,-8],[2,-23],[-24,-31],[33,-41],[24,-16],[106,-28],[106,-38],[151,-32],[135,-4],[33,-12],[62,3],[143,19],[7,1],[121,26],[99,38],[0,40],[128,24],[20,-23],[199,80],[140,64],[67,34],[274,139],[8,7],[86,79],[124,55],[185,110]],[[138972,104757],[5,0],[70,0],[11,0],[3,0],[0,0],[193,-1],[5,0],[387,-2],[4,0],[424,-1],[18,0],[65,1],[866,3],[144,-1],[0,0],[31,0],[329,3],[9,0],[2,0],[229,-2],[216,-1],[45,0],[60,-1],[0,0],[316,-2],[50,0],[11,0],[296,-2],[0,0],[60,1],[90,0],[2,0],[93,0],[238,0],[33,0],[11,0],[55,0],[28,0],[9,-1],[52,1],[3,-1],[327,3],[9,-1],[306,1],[18,1],[177,0],[106,1],[72,0],[46,0],[37,1],[35,-1],[23,0],[0,0],[68,-1],[3,1],[2,0],[145,-1],[132,0],[0,0],[90,-1],[180,1],[21,0],[286,1],[6,-1],[238,-2],[4,1],[37,0],[3,-1],[104,2],[393,1],[0,0],[23,0],[47,-84],[0,-27],[0,-23],[0,-62],[0,-64],[0,-57]],[[146373,104439],[0,-107],[2,-209],[-1,-5],[0,-91],[4,-410],[0,-1],[0,0],[1,-147],[0,-60],[2,-262],[0,-46],[0,-1],[0,-71],[0,-16],[-1,-1],[1,-200],[1,-479],[0,-1],[0,-1],[1,-91],[0,0],[0,-390],[-1,-3],[1,-43],[0,-336],[0,-37],[0,-496],[0,-1],[2,-330],[0,-1],[1,-778],[1,-115],[1,-70],[0,0],[-1,-47],[1,-80],[0,-55],[-1,-10],[0,-73],[0,-71],[1,-77],[-1,-360],[0,0],[-1,-219],[-2,-311],[-4,-558],[0,0],[1,-212],[0,0],[-1,-37],[-5,-391],[-2,-127],[-1,-29],[0,0],[-1,-60],[-6,-253],[0,-10],[-2,-99],[-3,-289],[-2,-72],[-2,-145],[-5,-385],[-1,-28],[0,-24],[0,0],[-1,-126],[-1,-3],[0,-89],[-2,-98],[0,-12],[-1,-38],[0,0],[0,-81],[0,-11],[-2,-51],[1,-14],[-1,-58],[0,-64],[0,-6],[1,-293],[0,0],[-2,-229],[0,-55],[-1,-200],[-1,-300],[0,-3],[1,-3],[0,-5],[-1,-90],[-1,-129],[0,0],[-1,-54],[0,-1],[0,-166],[0,0],[-7,-425],[-7,-408],[0,-21],[0,0],[-1,-167],[0,-48],[0,-54],[0,-16],[0,-17],[0,-430],[0,-5],[-1,-37],[-1,-216]],[[131493,45223],[-91,-171],[-185,-302],[-15,8],[-7,18],[17,61],[79,97],[31,25],[79,148],[60,143],[21,70],[0,95],[25,72],[54,56],[13,44],[24,145],[-2,18],[-23,24],[44,75],[11,207],[-34,120],[-5,87],[12,26],[0,32],[-16,48],[-3,59],[-28,88],[-33,71],[-45,80],[-43,46],[40,-20],[55,-73],[52,-107],[28,-69],[35,-141],[26,-180],[-4,-223],[-31,-209],[-23,-114],[-41,-140],[-77,-214]],[[123057,61344],[-131,-213],[-45,-153],[5,-41],[17,-33],[42,-43],[78,-33],[57,-1],[54,28],[41,60],[7,27],[4,202],[-28,38],[15,45],[34,21],[68,21],[46,-23],[27,-40],[84,-259],[0,-101],[-25,-74],[-59,-76],[-69,-75],[-38,-13],[-44,-3],[-62,-60],[-49,-102],[-13,-49],[-10,-132],[-3,-171],[7,-22],[33,-23],[115,2],[168,-51],[60,-25],[23,-25],[-9,-48],[-25,-48],[-45,-46],[-83,-42],[-71,-55],[-124,-162],[-7,-51],[9,-76],[19,-58],[19,-34],[48,-54],[30,-8],[57,-1],[27,-39],[22,-63],[1,-7],[4,-46],[-16,-21],[-15,-22],[-69,-221],[3,-84],[26,-55],[50,-66],[92,-67],[63,-34],[86,-24],[130,-147],[-38,-177],[3,-30],[13,-22],[49,-29],[272,-61],[40,-8],[11,-44],[-24,-67],[-365,-497],[-6,44],[-56,59],[-64,31],[-27,-6],[-279,-120],[-41,-17],[-89,-57],[-23,-25],[-25,-101],[-13,-107],[11,-53],[23,-50],[9,-8],[115,-32],[236,30],[35,16],[19,9],[21,8],[23,-8],[22,-12],[16,-25],[11,-30],[0,-16],[-2,-35],[-1,-4],[-25,-57],[-342,-572],[-441,-575],[-166,-48],[-122,-26],[-43,-18],[-26,-42],[-51,-215],[-15,-94],[-7,-98],[2,-39],[-16,-29],[-39,-69],[-66,-117],[-8,-106],[8,-159],[-24,-90],[-64,-33],[-71,0],[-42,0],[-44,-11],[-37,-36],[-11,-54],[0,-30],[0,-32],[2,-30],[24,-33],[45,-12],[36,-1],[40,-11],[47,-15],[35,-53],[-4,-27],[-22,-36],[-55,-41],[-46,-32],[-109,-46],[-115,11],[-17,-8],[-26,-55],[29,-350],[17,-51],[19,-30],[18,-69],[-18,-90],[-31,-69],[-43,-40],[-58,-110],[5,-96],[32,-53],[41,-76],[41,-98],[-25,-66],[-25,-24],[-92,-44],[-99,-16],[-88,-277],[-5,-65],[-16,-187],[98,-379],[49,-56],[10,-30],[5,-33],[-9,-54],[-34,-67],[-47,-47],[-192,-103],[43,-2],[317,1],[414,-1],[8,-1],[729,1],[3,0],[175,0],[0,0],[249,-1],[1,0],[100,0],[46,0],[29,0],[859,2],[1,0],[154,1],[14,0],[14,0],[25,-1],[38,1],[89,-1],[1,0],[305,1],[9,0],[220,1],[5,0],[11,0],[3,0],[60,0],[72,0],[223,0],[3,0],[31,0],[5,0],[7,0],[116,0],[3,0],[16,0],[38,0],[18,1],[193,2],[81,0],[0,0],[5,0],[317,2],[347,1],[2,1],[120,-1],[11,1],[285,0],[78,0],[27,1],[62,0],[109,2],[10,-2],[167,1],[15,0],[94,2],[17,-1],[132,2],[77,0],[1,0],[40,0],[30,0],[234,-1],[74,14],[16,-11],[0,-1],[-1,-155],[-60,-258],[-43,-92],[-53,-5],[-9,-9],[-61,-229],[-133,-570],[-60,-349],[0,0],[71,-285],[60,-181],[170,-279],[102,-116],[30,-3],[124,-164],[27,-35],[196,-557],[0,-91],[-40,-98],[-10,-40],[0,-27],[131,-350],[99,-153],[30,-27],[176,0]],[[129075,47346],[-24,-19],[-23,-26],[-65,-5],[-28,-10],[-20,-24],[-14,-18],[-55,-48],[-29,-3],[-11,12],[-72,20],[-19,-20],[-8,-8],[-59,-60],[-13,-23],[-21,-37],[-24,-41],[-6,-5],[-35,-30],[-2,-1],[-2,-2],[0,0],[-14,-1],[-4,0],[-2,0],[-1,-1],[-3,-3],[-2,-1],[-7,-6],[0,0],[-1,-2],[0,-4],[0,-1],[-4,-24],[-1,-3],[0,0],[-1,-5],[-1,-6],[-1,-3],[-2,-16],[-3,-13],[0,-3],[-1,-3],[0,0],[0,-5],[0,0],[0,-2],[0,-2],[-1,-1],[0,-1],[-1,-14],[-1,-18],[0,-6],[-2,-28],[-51,-25],[-3,-2],[-1,0],[-1,0],[-1,0],[-2,-1],[-45,-6],[-4,0],[0,0],[-4,-3],[-2,-1],[-3,-2],[-1,-1],[-2,0],[0,-1],[-1,0],[-1,-1],[-19,-11],[-9,-5],[-7,-4],[-4,-3],[-2,-4],[-5,-11],[-1,-1],[0,-1],[-1,0],[-4,-8],[0,0],[0,-15],[-1,-16],[0,-2],[-1,-6],[0,0],[0,0],[56,-107],[0,0],[0,0],[0,-4],[0,-1],[0,-2],[0,-3],[-30,-18],[-1,0],[-4,-1],[-27,-1],[-4,4],[-17,18],[-2,3],[-5,5],[-18,19],[-2,2],[-1,1],[0,0],[-39,30],[-22,17],[-71,16],[-7,0],[-107,-8],[-18,-2],[-41,-50],[-2,-3],[-7,-8],[-3,-3],[-3,-4],[-3,-3],[-2,-3],[-17,-21],[0,0],[-4,-6],[-3,-4],[-47,-71],[-11,-17],[20,-132],[29,-109],[21,-49],[35,-33],[40,-25],[50,-8],[106,24],[99,42],[76,64],[32,-25],[23,-37],[-86,-50],[-24,-1],[-13,-38],[14,-100],[115,-143],[70,-52],[75,-6],[40,-23],[83,5],[91,41],[55,45],[26,78],[-4,100],[33,72],[0,69],[30,68],[2,121],[-25,54],[36,26],[74,29],[182,140],[28,35],[-2,48],[-17,40],[21,66],[42,35],[85,-78],[52,-12],[57,-44],[39,-12],[169,25],[14,-37],[-14,-53],[-32,-31],[-46,-3],[-82,-46],[-25,-25],[-36,-37],[-3,-83],[3,-62],[100,-65],[43,3],[53,-12],[2,-219],[39,-40],[132,21],[61,37],[117,248],[37,102],[84,42],[25,-25],[-23,-108],[117,-14],[-21,-53],[-27,-181],[-50,23],[-67,-3],[-63,-23],[-140,-133],[-14,-53],[39,-28],[82,-6],[62,31],[113,14],[19,-14],[0,-48],[-67,-62],[-56,-23],[-92,-14],[-84,-31],[-167,-25],[-75,-34],[2,-43],[38,-25],[100,-25],[10,-108],[40,-39],[50,-9],[92,71],[59,23],[0,-40],[-26,-20],[-2,-127],[57,-45],[-6,-23],[-126,3],[-39,20],[-34,56],[-46,34],[-60,12],[-48,-31],[-69,67],[-32,-19],[-16,-71],[-57,-90],[-50,-54],[15,-218],[-88,28],[-87,76],[-55,37],[-70,28],[-89,60],[-36,0],[-74,-41],[-46,55],[-92,5],[-132,27],[-63,-18],[5,-146],[19,-45],[96,-50],[71,20],[22,-14],[-24,-58],[10,-30],[84,-51],[61,-19],[86,0],[168,-197],[10,-30],[-5,-17],[-1,-2],[-65,54],[-67,40],[-45,45],[-176,21],[-94,24],[-45,-3],[-9,27],[-33,46],[-43,18],[-20,-12],[31,-124],[0,-60],[-22,-52],[-38,-6],[-62,12],[-36,-9],[-14,-48],[14,-61],[49,-72],[9,-39],[-58,-85],[0,-60],[12,-83],[-55,-47],[-13,-7],[-4,-14],[1,-23],[24,-37],[103,-92],[80,11],[32,-15],[65,-104],[77,-59],[15,-32],[11,-61],[45,-19],[10,10],[-1,26],[96,122],[74,-54],[-14,-100],[1,-44],[50,-126],[36,-70],[13,-1],[65,37],[10,20],[8,43],[19,25],[26,-48],[47,-41],[128,-13],[155,6],[25,-23],[65,-28],[56,-1],[13,-15],[-40,-66],[-12,-77],[101,-27],[72,67],[76,-5],[38,-26],[27,-29],[27,-42],[16,-70],[46,-63],[61,18],[3,21],[14,32],[55,71],[15,28],[0,16],[41,-13],[36,-27],[8,-22],[-3,-40],[48,-119],[27,-32],[64,-27],[22,-59],[-10,-20],[27,-48],[108,-76],[15,-36],[2,-24],[-11,-26],[-27,-6],[-1,-78],[20,-48],[37,-31],[82,21],[3,22],[140,61],[27,-14],[24,-33],[54,-156],[-17,-75],[-29,-8],[-19,9],[-22,24],[-72,-37],[-12,-23],[31,-77],[25,12],[29,-37],[0,-18],[-7,-17],[-95,-117],[-13,-111],[-25,-69],[-106,-17],[-25,5],[-26,28],[-60,-22],[-81,-107],[-47,-93],[-21,-64],[-1,-21],[-9,-14],[-19,0],[-21,16],[-38,30],[14,37],[-28,35],[-29,-14],[-17,9],[-32,46],[-18,77],[2,25],[-6,29],[-32,56],[-38,30],[-68,-7],[-9,-11],[1,-36],[12,-44],[-21,-32],[-87,-25],[-29,-1],[-51,-34],[-38,-36],[-10,-18],[11,-14],[-36,-93],[-38,6],[-11,-10],[-167,-325],[-101,-111],[-31,23],[27,138],[16,39],[37,57],[58,23],[26,19],[148,272],[-19,59],[-55,101],[-72,58],[-114,13],[-20,94],[6,109],[-30,54],[-41,29],[-15,22],[-53,147],[-31,61],[-60,82],[-39,38],[-197,105],[-257,78],[-239,183],[-93,38],[-106,37],[-205,35],[-138,-4],[-112,7],[-18,115],[5,28],[25,43],[44,49],[52,91],[14,34],[3,45],[-3,27],[-8,26],[-11,27],[-14,30],[-34,15],[-30,15],[-6,64],[31,97],[11,13],[0,15],[3,19],[-3,18],[-3,16],[-22,15],[-34,22],[-47,-7],[-50,-22],[-95,-60],[-62,-78],[-50,-74],[-83,-4],[-24,22],[-10,8],[-31,45],[-69,99],[-76,-4],[-22,-53],[-14,-38],[-26,-62],[-10,-25],[3,-71],[-7,-96],[14,-25],[0,-8],[-2,-17],[-3,-40],[0,0],[0,-1],[-10,-20],[-7,-13],[-3,-23],[13,-74],[3,-22],[-9,-107],[22,-77],[54,-22],[15,-39],[-25,-52],[-11,-10],[-47,-11],[-41,12],[-50,-6],[-15,-23],[5,-20],[-3,-24],[-37,-26],[-59,-16],[-16,11],[-24,2],[-13,-11],[19,-94],[83,-67],[0,-82],[10,-10],[26,4],[76,11],[85,100],[51,43],[131,75],[16,17],[23,43],[30,-8],[5,-15],[-3,-12],[-21,-35],[-241,-186],[-133,-161],[-77,-68],[-34,-37],[-57,-60],[-257,-224],[-181,-100],[-30,13],[-49,-9],[-359,-143],[-20,4],[-5,29],[90,57],[78,11],[41,7],[37,18],[61,35],[30,11],[18,10],[12,36],[-1,35],[23,12],[35,-1],[0,92],[-33,37],[-19,10],[-75,5],[-42,16],[8,41],[-69,102],[-21,19],[0,63],[7,41],[28,18],[38,-36],[26,6],[17,54],[-57,104],[-50,28],[-41,33],[0,91],[-17,42],[-61,61],[-126,-14],[-4,-17],[5,-29],[-21,-30],[-56,-30],[15,-85],[-57,-172],[-34,-23],[-3,-1],[-86,-40],[-11,2],[-29,36],[-105,-15],[-3,12],[17,16],[5,21],[-68,36],[-33,34],[14,21],[83,32],[10,77],[10,34],[45,69],[-6,12],[-75,32],[-83,73],[-56,18],[-24,-41],[-33,-31],[-95,10],[-49,33],[-62,-45],[-27,-136],[5,-14],[16,-14],[28,5],[40,-7],[77,-59],[5,-14],[-4,-18],[-45,-21],[-3,-60],[-13,-18],[-53,13],[-158,-18],[-21,35],[-12,4],[-23,-10],[-24,-62],[-20,-103],[2,-14],[16,-9],[14,-33],[-37,-178],[-112,-49],[-49,15],[-36,-1],[-63,-24],[-49,31],[-120,-48],[-34,-65],[-96,-63],[-9,-21],[-6,-97],[18,-44],[61,-27],[62,0],[55,19],[91,67],[60,-12],[13,-8],[12,-12],[36,-3],[32,7],[24,13],[42,18],[49,10],[30,11],[10,4],[8,3],[6,-4],[5,-12],[-5,-15],[-39,-20],[-303,-101],[-91,-16],[-154,3],[-51,-15],[-102,13],[-12,18],[-8,29],[13,27],[-12,65],[-67,137],[-18,3],[-36,46],[-29,61],[-47,71],[-101,108],[-59,45],[-23,59],[-48,33],[-74,-48],[-68,-8],[-88,26],[-28,37],[-99,-3],[-130,30],[-76,100],[-52,40],[-259,27],[-71,23],[-219,108],[-88,90],[-118,163],[8,35],[86,-1],[38,16],[26,12],[5,9],[40,64],[11,19],[2,14],[6,60],[14,53],[2,7],[1,2],[12,19],[4,3],[51,34],[1,1],[6,4],[2,1],[13,4],[26,7],[11,-7],[48,-49],[55,0],[36,45],[-9,98],[-68,87],[9,27],[7,17],[8,24],[-11,33],[-9,25],[-2,3],[-5,6],[-7,10],[-75,23],[-35,17],[-26,12],[-4,55],[-1,13],[-1,6],[0,1],[-6,15],[-15,36],[-57,46],[-48,-23],[-152,44],[-28,34],[-9,59],[-39,53],[-167,-17],[-67,19],[-25,23],[-19,62],[-28,38],[-27,21],[-78,-2],[-178,-72],[-51,9],[-1,19],[20,52],[2,30],[-14,33],[-30,36],[-17,141],[-42,191],[-27,22],[-36,5],[-41,-6],[-67,-29],[-92,-25],[-68,22],[-19,15],[1,15],[8,14],[12,4],[22,34],[36,74],[8,48],[-6,64],[11,72],[20,58],[1,49],[-12,73],[-42,35],[-126,16],[-160,-34],[-97,52],[-55,-6],[-115,-37],[-172,-108],[-56,-51],[-47,-28],[-29,20],[-52,19],[-1,12],[10,14],[10,31],[0,0],[0,28],[-10,35],[-5,38],[5,41],[13,45],[57,115],[17,120],[-56,103],[-70,38],[-66,-25],[-33,-76],[-11,-1],[-80,8],[-75,-34],[-34,-29],[-29,-25],[-20,-23],[-190,-64],[-76,-46],[-187,-139],[-135,-139],[-18,-96],[55,-136],[5,-45],[77,-192],[68,-15],[101,6],[66,23],[82,5],[33,-34],[59,-28],[1,0],[128,-25],[92,11],[18,10],[20,33],[25,71],[87,19],[9,-12],[53,-24],[59,9],[11,10],[80,-20],[8,-25],[-7,-23],[10,-19],[61,-50],[65,-32],[69,-22],[24,-29],[14,-35],[0,-29],[104,-10],[100,-44],[13,2],[13,-6],[10,-18],[-9,-34],[-82,-73],[-48,-21],[-67,-71],[-24,-79],[-2,-29],[9,-26],[-2,-24],[-43,-30],[-25,-4],[-40,23],[-12,0],[-41,-24],[-26,-40],[-62,25],[-37,26],[-15,54],[-35,36],[-60,3],[-30,13],[-71,62],[-33,2],[-117,73],[-81,18],[-61,54],[-150,95],[-32,58],[-21,15],[-19,14],[-74,-3],[-144,12],[-193,-23],[-198,-95],[-144,-114],[-105,-30],[-106,-2],[-139,32],[-201,59],[-262,48],[-312,44],[-211,44],[-5,2],[-132,44],[-332,146],[-466,260],[-254,154],[-124,64],[-333,134],[-84,41],[-326,105],[-183,35],[-148,3],[-103,-15],[-171,-58],[-11,-18],[-8,-3],[-91,20],[-245,29],[-133,1],[-232,-29],[-192,-38],[-163,-14],[-177,-28],[-214,-54],[-88,-34],[-122,-70],[-72,-56],[-70,-67]],[[113262,44915],[-199,370],[-23,32],[29,355],[183,353],[188,364],[120,131],[17,11],[108,171],[4,5],[35,76],[60,339],[1,59],[-61,232],[-16,248],[-16,256],[-11,-5],[-45,22],[-109,168],[30,283],[22,29],[36,34],[143,133],[16,43],[2,26],[-45,310],[-110,161],[45,175],[548,1130],[55,82],[17,249],[0,3],[14,36],[1,4],[87,233],[-35,415],[47,329],[-15,527],[-13,24],[-50,5],[-14,-5],[0,0],[-97,-90],[-34,-10],[-38,46],[-3,8],[-10,27],[-18,114],[-3,114],[-23,164],[-24,52],[-86,28],[-100,112],[113,362],[-108,72],[-94,110],[-124,390],[-251,228],[-75,103],[-60,156],[0,0],[32,142],[34,282],[17,216],[-101,423],[-140,216],[-41,63],[-114,157],[-43,25],[-159,149],[-147,279],[-100,96],[1,281],[1,317],[-1,90],[0,99],[0,44],[0,0],[0,144],[0,110],[-1,255],[0,1],[0,465],[0,49],[0,93],[0,38],[0,4],[-1,173],[1,22],[0,151],[0,4],[0,8],[-1,25],[1,12],[-1,20],[0,11],[1,31],[0,61],[-1,42],[0,228],[0,23],[1,228],[0,40],[0,18],[0,91],[0,16],[0,58],[-1,188],[0,0],[1,371],[-1,44],[1,19],[0,23],[0,8],[-1,52],[1,367],[-1,45],[1,2],[0,1],[0,58],[0,30],[-1,55],[0,139],[0,87],[1,316]],[[122868,113386],[-556,1],[-8,1],[-20,-3],[-237,0],[-16,1],[-56,0],[-14,0],[-95,0],[-157,0],[-27,0],[-36,0],[-147,0],[-72,0],[0,0],[-17,0],[-5,0],[-2,0],[-13,0],[-17,1],[-32,-2],[-1,0],[-4,0],[-15,1],[-19,0],[-24,-1],[-26,1],[-45,0],[-110,0],[-108,0],[0,0],[-11,0],[-12,0],[-7,0],[-84,0],[-60,1],[-6,0],[-94,0],[-8,-1],[-65,0],[-429,0],[-29,-1],[-476,1],[-1,0],[-37,0],[-51,1],[-275,0],[-73,-1],[-288,-1],[-6,0],[-329,0],[-71,0],[-66,0],[-10,1],[-147,-1],[-57,0],[-325,0],[0,0],[-352,-2],[-15,0],[-71,0],[-60,0],[-14,0],[-53,0],[-164,0],[-140,-2],[-293,0],[-505,0],[-60,0],[0,0],[-91,0],[-659,0],[-157,-1],[-467,1],[-108,-1],[-147,0],[-15,0],[-34,1],[-23,-1],[-33,0],[0,0],[-114,0],[-14,0],[-97,1],[-66,0],[-148,0],[-115,0],[-187,0],[-20,0],[-14,0],[-28,0],[-286,0],[-5,0],[-642,0],[0,0],[-447,4],[-6,0],[-50,0],[-7,-1],[-506,1],[-475,0],[-48,0],[-191,1],[0,0],[-16,0],[-85,-1],[-332,0],[-18,0],[-184,1],[-875,0],[-12,0],[-8,0],[-46,0],[-6,0],[-48,0],[-100,-1],[0,0],[-1,0],[0,0],[-72,0],[-73,0],[-73,1],[-74,0],[-72,1],[-73,0],[-71,0],[-3,0],[-222,-1],[-29,1],[-163,0],[-2,0],[-46,0],[-127,0],[-131,-2],[-1,0],[-454,0],[-2,0],[-46,-1],[0,0],[0,0],[-170,1],[0,0],[-74,1],[-1,0],[0,0],[-75,-1],[-42,-1],[-1,0],[-102,-2],[-829,1],[-3,0],[-292,0],[-48,0],[-97,0],[-1,0],[-704,1],[-533,1],[-1,0],[-36,0],[-452,0],[-70,0],[-374,0]],[[103675,113385],[-1,430],[0,5],[0,96],[0,12],[0,323],[0,72],[0,505],[1,68],[-1,220],[0,0],[0,0],[0,136],[0,8],[1,0],[-1,350],[0,8],[1,78],[-1,3],[0,54],[0,11],[0,63],[0,9],[1,60],[0,10],[-1,74],[0,8],[0,55],[1,9],[1,786],[0,0],[1,286],[0,4],[1,68],[0,15],[-1,53],[0,15],[1,56],[0,8],[0,66],[0,7],[0,62],[0,11],[0,62],[0,8],[0,15],[0,47],[0,27],[1,116],[0,30],[0,257],[1,94],[-2,52],[1,10],[0,168],[0,50],[-1,49],[1,83],[0,0],[0,3],[1,429],[0,3],[0,0],[1,356],[0,285],[0,6],[-1,71],[0,71],[-1,9],[1,27],[1,39],[0,0],[-2,419],[1,82],[-1,20],[-1,258],[1,73],[0,1],[-1,321],[0,39],[0,7],[0,209],[1,7],[-2,136],[1,7],[0,270],[0,122],[0,9],[0,20],[-2,297],[0,1],[0,76],[-1,68],[-4,17],[-58,126],[-70,150],[-120,92],[-352,160],[-229,12],[-45,34],[-147,206],[-36,99],[-11,49],[-72,162],[-72,99],[-186,222],[-31,39],[-1,2],[-19,23],[-15,16],[-15,19],[49,166],[13,29],[18,21],[333,258],[124,79],[141,73],[75,72],[253,363],[13,29],[11,70],[13,107],[16,131],[2,16],[1,37],[-1,21],[-3,42],[-1,0],[0,13],[1,4],[17,31],[0,26],[4,44]],[[103271,125457],[-26,141],[-25,288],[-3,25],[43,122],[26,34],[8,31],[8,101],[-11,87],[-75,336],[-27,35],[-49,429],[3,242],[-122,204],[-140,153],[-192,275],[21,22],[-83,492],[-161,430],[0,0],[0,1],[-5,278],[-65,623],[127,460],[-47,115],[-42,29],[-116,182],[-5,111],[5,33],[-6,620],[-6,127],[-24,431],[0,3],[-72,678],[-35,235],[31,383],[2,22],[40,21],[-32,447],[-127,327],[-18,39],[-329,711],[-73,225],[-84,64],[-238,920],[-37,59],[-91,189],[-90,303],[0,13],[1,102],[1,244],[14,18],[32,15],[17,0],[49,149],[3,219],[-41,91],[-35,50],[-34,224],[52,45],[30,73],[-13,490],[-87,96],[-39,18],[-7,4],[0,0],[259,685],[-165,333],[-74,191],[-153,463],[-122,324],[-24,105],[3,74],[16,74],[18,16]],[[100830,140656],[3020,-5],[3800,-5],[48,0],[54,0],[66,0],[11,0],[610,1],[1,922],[0,323],[0,276],[0,10],[0,4],[0,4],[0,169],[0,1],[0,53],[0,57],[0,9],[0,7],[0,70],[0,6],[98,-74],[250,-81],[161,16],[94,62],[115,7],[177,-99],[311,-205],[98,-551],[89,-382],[85,-104],[0,-495],[114,0],[132,-575],[0,-3],[-27,-97],[1,-2],[-3,-423],[0,0],[164,-139],[4,-5],[60,-51],[351,-186],[236,-24],[135,51],[57,21],[101,5],[294,-8],[65,-13],[111,-56],[34,-64],[3,-133],[1,-2],[21,-14],[74,-19],[359,-26],[271,-2],[776,-76],[23,-18],[43,-79],[58,-156],[6,-46],[-22,-129],[-26,-39],[0,-22],[12,-17],[76,-52],[83,-1],[56,-3],[345,2],[432,67],[282,82],[25,24],[15,56],[-1,26],[-18,34],[-15,66],[6,22],[222,79],[135,3],[71,91],[340,80],[174,-1],[100,-87],[138,0],[198,13],[396,-13],[925,-425],[257,35],[84,-17],[34,-123],[2,-25],[-1,-1],[-21,-23],[0,-1],[15,-23],[-35,-20],[-91,-14],[-86,5],[-51,-13],[-50,-158],[90,-95],[117,-35],[295,20],[141,34],[109,1],[187,-167],[151,-597],[113,-252],[217,-30],[110,197],[-2,7],[-21,52],[-18,138],[7,33],[57,99],[98,59],[759,21],[89,-165],[151,-326],[44,-64],[1,-4],[84,26],[0,-2],[172,-65],[2,-2],[144,-96],[255,-91],[31,-11],[174,33],[100,-26],[16,-26],[41,-244],[-32,-108],[-15,-30],[1,-12],[260,-83],[261,-22],[300,-125],[542,25],[42,-13],[141,17],[88,24],[59,26],[271,207],[130,109],[9,16],[-1,2],[377,189],[1,0],[9,6],[206,142],[335,131],[140,-7],[13,-4],[17,-20],[128,-306],[53,-170],[-20,-40],[5,0],[65,-64],[0,-2],[7,-16],[0,-2],[46,-100],[37,-37],[666,80],[272,-38],[1,2],[159,26],[179,0],[216,-52],[3,3],[23,23],[26,13],[65,14],[498,36],[148,-2],[41,-22],[4,-3],[118,-12],[65,-17],[185,-82],[94,-134],[15,-43],[-11,-67],[14,-35],[90,-69],[260,-133],[89,-11],[94,35],[102,112],[204,39],[54,2],[92,-17],[133,-45],[118,-16],[335,-23],[276,57],[-10,-46],[-13,-14],[-169,-47],[-37,-28],[-5,-32],[-8,-29],[-63,-38],[-58,-5],[-28,24],[-57,48],[-49,12],[-26,-16],[-19,-32],[-12,-28],[1,-40],[6,-27],[-4,-4],[-78,-12],[-135,-49],[-118,-79],[-29,-35],[-77,-56],[-128,-77],[-222,-86],[-64,1],[-191,-61],[-26,-21],[12,-34],[-24,-20],[-148,-81],[-144,-45],[-107,-19],[-107,-32],[-1,-17],[-12,-22],[-25,2],[-21,-3],[-105,-38],[-56,1],[-105,-14],[-66,-32],[-33,-41],[-152,-9],[-72,-17],[-173,-68],[-38,-12],[-28,0],[-35,-15],[-25,-14],[-9,-22],[-196,-26],[-28,-14],[-101,-16],[-60,-17],[-15,-26],[-60,-25],[-289,-91],[-52,-63],[-123,-48],[-231,-121],[-141,-63],[-182,-95],[-485,-335],[-144,-119],[-9,-13],[1,-20],[-17,-17],[-18,-15],[-32,-3],[-41,-23],[-308,-245],[0,0],[-36,-34],[-46,-8],[-118,-138],[-73,-74],[-31,-10],[-81,-60],[-11,-30],[-58,-60],[-35,-14],[-49,-62],[-69,-130],[-64,-54],[-119,-120],[-42,-71],[-45,-56],[-13,1],[-17,-12],[-65,-55],[-138,-134],[-102,-130],[-15,-30],[-60,-44],[-47,-52],[-42,-17],[-74,-58],[-122,-134],[-18,-30],[-75,-67],[-75,-15],[-34,-20],[-43,-52],[-202,-90],[-64,-105],[-35,-26],[-15,-1],[-30,-20],[-50,-46],[-38,-47],[-27,-69],[-57,-36],[-23,-25],[-140,-45],[-119,-111],[-147,-154],[-13,-29],[-49,-31],[-47,-29],[-70,-33],[-32,0],[-24,-10],[-110,-83],[-44,-13],[-85,-72],[-31,-37],[-140,-83],[-117,-86],[-48,-54],[-56,-25],[-167,-118],[-12,-29],[-88,-48],[-29,-33],[21,-70],[88,-140],[142,-171],[38,-22]],[[119944,129281],[-18,-12],[-17,8],[-34,16],[-203,200],[-99,-3],[-198,-114],[-9,-6],[-59,-34],[-23,-39],[-3,-29],[-1,-5],[-1,-4],[8,-22],[2,-5],[2,-7],[21,-25],[0,-56],[-12,-28],[-2,-3],[-21,-46],[-19,-41],[-17,-15],[-20,-10],[-34,-1],[-2,-1],[-21,0],[-14,-1],[-3,0],[-8,0],[-28,-1],[-31,4],[-12,2],[-9,1],[-21,3],[-7,1],[-21,2],[-16,12],[-7,5],[-3,2],[-55,38],[2,-190],[0,-101],[-3,-541],[0,-83],[-1,-232],[0,-55],[-1,-18],[0,-473],[1,-13],[0,-23],[-1,-4],[1,-33],[0,-14],[-1,-31],[0,-15],[-2,-253],[0,-96],[-1,-221],[0,-66],[0,-47],[1,-215],[-2,-176],[0,-20],[-46,-10],[-74,-29],[-427,-257],[-780,-447],[-189,-147],[-50,-55],[-47,-78],[-104,-242],[-22,-105],[-59,-168],[-71,-71],[-136,-98],[-83,-41],[-20,-21],[-55,-311],[-6,-53],[-9,-78],[6,-166],[10,-97],[47,-39],[175,-33],[73,8],[283,-156],[168,-331],[59,-352],[-149,-331],[-102,-111],[-49,-40],[-21,-17],[-32,-68],[-20,-341],[-4,-79],[-95,-574],[7,-162],[82,-187],[66,-351],[-40,-373],[-1,-6],[-13,-122],[-70,-209],[-65,-240],[-1,-2],[239,-139],[19,-17],[367,-321],[38,-50],[7,-48],[257,-264],[57,-28],[155,-22],[493,-37],[63,-16],[41,-22],[33,-29],[13,-21],[9,-13],[40,-96],[3,-91],[41,-74],[52,-59],[128,-96],[30,-39],[47,-29],[387,-121],[115,-49],[138,-58],[271,-137],[33,-24],[139,-141],[25,-54],[116,-348],[-3,-30],[-19,-56],[1,-20],[65,-151],[45,-38],[201,-167],[246,-126],[71,-18],[180,-193],[295,-297],[44,-22],[76,-15],[45,-9],[150,-17],[156,-48],[96,-45],[17,-16],[46,-62],[208,-286],[192,-293],[45,-54],[53,-47],[80,-272],[-21,-326],[-19,-288],[17,-263],[13,-27],[174,-542]],[[130648,47599],[67,-1],[37,92],[12,-19],[-5,-32],[-30,-82],[-66,-105],[-98,105],[-141,36],[224,6]],[[131363,47563],[-34,-21],[-131,-53],[-107,-11],[-20,3],[-15,11],[7,7],[20,-3],[106,15],[101,32],[42,24],[70,71],[44,13],[15,-3],[-98,-85]],[[132805,47512],[26,-1],[126,-57],[45,-7],[39,5],[46,31],[105,8],[-11,-19],[-87,-38],[-93,-10],[-146,47],[-34,22],[-16,19]],[[132059,47693],[197,-84],[307,-56],[19,1],[22,23],[-13,-23],[-13,-7],[-67,-11],[-170,36],[-118,12],[-168,69],[-106,-20],[-45,0],[-41,14],[-29,20],[145,4],[53,32],[27,-10]],[[133931,71218],[275,-463],[99,-50],[-75,-832],[-74,-670],[-2,-7],[-3,-30],[-56,-588],[-38,-397],[-1,-11],[-28,-297],[-9,-93],[-3,-41],[-98,-1028],[-14,-140],[-70,-721],[0,-6],[0,-1],[-80,-826],[-23,-229],[0,-15],[-6,-64],[-1,-4],[-39,-435],[0,-11],[-4,-35],[-3,-40],[-2,-20],[-2,-10],[-17,-183],[-8,-87],[-2,-20],[-50,-562],[-49,-549],[-132,-1473],[-27,-308],[-129,-1498],[0,-1],[-21,-241],[-55,-636],[0,-1],[-65,-699],[-38,-402],[-25,-272],[0,-3],[-60,-652],[0,-5],[-50,-528],[-1,-14],[-4,-181],[-4,-210],[0,-2],[25,-759],[0,0],[17,-367],[1,-11],[36,-922],[3,-72],[0,-2],[13,-322],[0,0],[26,-618],[0,-6],[22,-574],[23,-561],[0,-5],[1,-9],[48,-1302],[1,-19],[0,-7],[2,-87],[1,-33],[7,-186],[5,-157],[2,-27],[0,-44],[13,-385],[0,-9],[2,-50],[4,-111],[27,-701]],[[133216,48281],[-8,-9],[-7,-34],[7,-30],[11,-11],[1,-16],[-27,-24],[-32,-11],[-32,58],[-56,4],[-46,-34],[0,-50],[-27,-40],[-66,-48],[-30,-8],[-90,15],[-6,5],[0,25],[-59,63],[-51,16],[-158,4],[-62,70],[-11,3],[-9,-15],[-44,-14],[-39,28],[-144,17],[-58,-32],[-46,-42],[-31,-18],[-50,-7],[-54,2],[-66,25],[-91,88],[-146,97],[-4,14],[9,17],[0,17],[-50,38],[-64,36],[-16,-21],[-45,-62],[24,-87],[-107,56],[-12,13],[-4,14],[-33,7],[-103,2],[-180,-15],[-166,-34],[-245,-79],[-380,-182],[-123,-44],[-188,-84],[-51,-12],[-21,1],[-11,21],[9,102],[15,25],[23,-6],[6,89],[-46,78],[-83,49],[-76,-7],[-19,-6],[-31,-9],[-14,-11],[-39,-57],[-8,-26],[74,-42],[26,-3],[23,-25],[37,-92],[0,-22],[-27,-60],[-55,-48],[-50,-21],[-27,-20],[-50,-72],[-16,-13],[-130,-67],[-20,-44],[1,-31],[-22,-79],[-62,-90],[-2,-98],[-49,-52],[-8,-4],[-23,11],[-22,76],[-16,11],[-37,-30],[-48,-23],[-72,0],[-6,-11]],[[126198,71218],[1525,-6],[37,-1],[128,0],[195,0],[260,3],[293,2],[488,-2],[64,-2],[517,0],[566,0],[217,-1],[1,1],[446,1],[712,3],[133,0],[1162,4],[0,0],[327,-2],[62,0],[387,-1],[16,1],[197,0]],[[50166,118213],[-211,60],[-59,37],[-32,31],[-29,85],[-293,523],[-383,505],[-198,135],[-62,-2],[-318,-209],[-28,-18],[-101,-306],[-34,-193],[-276,-251],[-60,-6],[-51,-5],[-267,41],[-121,-85],[-254,-137],[-135,63],[-22,58],[-77,120],[-284,-36],[-479,-116],[-398,5],[-127,45],[-28,30],[-24,28],[-39,29],[-43,16],[-58,0],[-91,-25],[-149,-103],[-28,-90],[-34,-135],[-9,-34],[-45,-70],[-58,-58],[-85,13],[-231,84],[-260,19],[-528,74],[-113,28],[-228,-97],[-113,-166],[-37,-86],[0,-65],[-5,-73],[-4,-62],[-17,-41],[-8,-19],[-65,-52],[-98,16],[-346,261],[-122,118],[-87,224],[-108,608],[12,13],[15,41],[-8,37],[-182,406],[-123,220],[-86,88],[-182,134],[-144,74],[-115,-50],[-187,-120],[-45,-19],[-43,33],[-372,367],[-77,145],[-83,236],[15,31],[50,9],[30,-11],[93,118],[5,40],[1,190],[-13,136],[-54,86],[-36,-7],[-42,9],[-334,331],[0,17],[37,47],[1,31],[-123,207],[-185,216],[-89,73],[-236,398],[-82,381],[-48,291],[31,89],[-27,144],[-49,45],[-87,47],[-12,95],[42,144],[-11,50],[-33,57],[-79,61],[-224,141],[-138,203],[-31,20],[-106,71],[-59,23],[-102,-45],[-14,-16],[-12,-66],[-45,-157],[-368,-449],[-193,-76],[-220,17],[-226,-377],[-151,-5],[-58,115],[-344,345],[-49,10],[-148,7],[-136,-28],[-35,27],[-4,3],[-6,358],[9,13],[38,13],[19,2],[14,-8],[96,57],[54,69],[20,181],[-8,37],[-27,57],[-87,47],[-70,58],[-68,151],[189,332],[20,23],[38,26],[184,41],[201,174],[-28,343],[-39,73],[-64,43],[-131,47],[-66,59],[-27,74],[-2,55],[0,49],[55,90],[32,98],[-3,90],[-29,64],[-25,81],[38,163],[168,632],[179,723],[-27,157],[143,341],[56,356],[0,112],[-25,54],[-12,8],[-31,19],[-75,38],[-191,-10],[-90,-34],[-53,-31],[-76,-35],[-404,4],[-9,3],[-73,28],[-78,101],[-25,68],[3,30],[2,35],[-5,41],[-8,38],[-40,47],[-43,37],[-29,2],[-56,2],[-99,-30],[-79,6],[-103,117],[-215,214],[-100,89],[-128,43],[-119,95],[-27,41],[-39,164],[9,152],[-145,164],[-357,401],[-96,171],[-344,421],[-27,30],[-243,208],[-93,143],[-10,55],[-93,172],[-70,29],[-302,51],[-211,51],[-163,83],[-101,174],[-37,89],[-57,74],[-310,178],[-107,61],[-112,36],[-32,124],[15,97],[50,107],[-65,147],[-36,97],[15,88],[53,104],[11,81],[44,224],[-64,291],[-20,32],[-697,765],[-323,434],[-151,158],[0,2],[-3,444],[0,27],[0,16],[0,9],[0,686],[0,1421],[1,2260],[0,2],[0,211]],[[31836,140657],[2925,-7],[1918,5],[183,1],[14,0],[863,2],[1359,-9],[1375,-8],[2114,4],[23,0],[12,0],[14,0],[18,0],[10,0],[12,0],[16,0],[8,0],[273,1],[5,-1],[2992,-1],[1245,-1],[0,0],[339,-2],[0,0],[1800,1],[1405,1],[2,0],[526,1],[1933,5],[2,-1],[161,1],[645,2],[1855,3],[384,0],[3,0],[1186,-3],[1,-1],[218,-1],[22,0],[1656,0],[202,0],[922,0],[3874,1],[2032,1],[29,-1],[364,0],[65,1],[462,-1],[23,0],[345,-1],[102,0],[12,0],[33,0],[447,0],[226,-1],[309,2],[484,1],[214,0],[460,-1],[138,1],[19,-1],[106,1],[205,-1],[406,0],[15,0],[60,0],[14,-1],[116,0],[288,1],[45,0],[761,0],[1504,-1],[380,1],[1814,2]],[[75829,140652],[1,-64],[0,-101],[0,-14],[-1,-24],[1,-9],[-1,-27],[0,-10],[0,-32],[0,-15],[0,-33],[0,-106],[0,-26],[1,-22],[-1,-112],[0,-21],[0,-8],[0,-32],[1,-9],[-1,-91],[1,-250],[0,-42],[0,-184],[1,-21],[1,-412],[1,-5],[0,-21],[0,-7],[-1,-37],[1,-7],[1,-72],[0,0],[-1,-35],[1,-7],[-2,-27],[-1,-105],[1,-37],[1,-142],[0,-115],[0,-41],[-1,-3],[2,-24],[-1,-40],[1,-118],[0,-134],[1,-70],[0,-2],[0,-26],[0,-7],[1,-123],[-1,-50],[1,-101],[0,-6],[0,0],[1,-73],[1,-3],[0,-158],[1,-424],[1,-8],[1,-44],[-1,-8],[0,-16],[1,-235],[0,-7],[0,-81],[1,-59],[4,-834],[0,-16],[1,-106],[2,-84],[0,-25],[4,-290],[2,-143],[0,-102],[-3,-165],[0,-15],[1,-10],[-3,-278],[-1,-1],[-5,-1426],[0,-104],[-1,-203],[-1,-268],[0,-57],[0,-9],[1,-264],[-1,-15],[1,-12],[0,-23],[0,-4],[-1,-10],[1,-849],[0,-57],[-1,-13],[0,-73],[0,-32],[0,-19],[1,-63],[0,-16],[-2,-478],[0,-36],[0,-1],[1,-1033],[0,-16],[0,-4],[-1,-37],[0,-26],[1,-333],[0,-1],[0,-498],[-1,-987],[0,-86],[0,-220],[-4,-1389],[4,-271]],[[75841,125507],[6,-314],[0,0],[0,-50],[0,-17],[7,-1540],[1,-36],[0,-57],[2,-177],[0,-17],[-2,-46],[5,-482],[1,-95],[-1,-144],[0,-46],[0,-610],[1,-1056],[-65,-13]],[[75796,120807],[-1511,5],[-2,0],[-709,3],[-5,-2],[-347,3],[-19,0],[-928,6],[-4,0],[-22,0],[-48,0],[-140,0],[-2828,0],[-260,-13],[-34,-20],[-354,0],[-875,0],[-2292,11],[-15,0],[-689,4],[-196,17],[-1736,4],[-4,-1],[-1110,1],[-785,0],[-453,-8],[-1161,6],[-46,0],[-157,-1],[-1616,-4],[-76,0],[-75,31],[-587,-2],[-21,-1],[-1941,-15],[-832,7],[-3,0],[-307,2],[-408,-39],[-1194,-18],[-19,-1],[-561,0],[-166,28],[-459,21],[-617,-4],[-44,-325],[2,-11],[-5,-332],[5,-994],[2,-204],[22,-748]],[[66738,55294],[-814,-1],[0,1],[-890,-1],[-18,0],[-8,0],[0,-1],[-1086,1],[-460,0],[-1,0],[-2881,0],[0,-1408],[-1,0],[0,-825],[-2355,-5],[-37,0],[-693,1]],[[79666,81156],[0,-439],[1,-10],[-1,-942],[-1,-220],[1,-287],[0,-72],[-1,-377],[0,-130]],[[79665,78679],[-144,-109],[0,-794],[0,-4],[3,-1300],[-2,-1567],[0,-579],[-4,-2036],[1,-142],[0,0],[0,-2],[0,-4],[0,-17],[-1,-95],[-1,-73],[1,-10],[0,-35],[0,-900],[0,-270],[-1,-245],[0,-288],[0,-222],[0,-378],[-1,-254],[-2,-779],[0,-15],[0,0],[0,-20],[0,-249],[0,-24],[0,-18],[0,-16],[0,-17],[0,-8],[0,-19],[0,-1],[0,-6],[-1,-13],[0,-6],[0,-1],[0,-331],[0,0],[0,-50],[1,-65],[0,-162],[0,-837],[0,-43],[0,-81],[0,-65],[0,-31],[0,-7],[0,-3],[0,-21],[0,-23],[0,-73],[0,-71],[-1,-144],[-4,-144],[-3,-195],[1,-24],[-5,-254],[-2,-127],[-6,-388],[-4,-220],[-1,-147],[-2,-70],[-2,-38],[1,-43],[-1,-61],[-4,-292],[-15,-904],[0,0],[-3,-292],[-1,-70],[-8,-477],[-14,-878],[-1,-17],[-1,-140],[-1,-52],[0,-176],[0,-26],[0,-293],[0,-103],[-1,-54],[0,-53],[0,-2],[0,-39],[1,-104],[0,-5],[0,-212],[0,-5],[-1,-32],[0,-251],[0,-89],[0,-89],[0,-40],[1,-180],[-1,-108],[1,-112],[-1,-8],[1,-61],[0,-326],[1,-1871],[0,-108],[0,-179],[0,-429],[-79,0],[-10,0],[-466,0],[-190,0],[0,-1],[-10,0],[-30,1],[-176,-1],[-1453,0],[-943,-1],[-163,0],[-1859,0],[-1,1],[-400,0],[-9,1],[-749,0],[-258,0],[-582,0],[-6,0],[-145,0],[-49,0],[-5,0],[-56,0],[-8,0],[-14,0],[-866,1],[-135,0],[-5,-1],[-3,0],[-1675,7],[-53,1],[-357,1],[-373,-1],[-301,0],[-69,-2],[-19,0],[-394,-1],[-234,0],[-63,0],[-61,-1],[-565,-3],[-3,0],[-81,0],[-27,0],[-12,0],[-1,0],[-58,-222],[-5,-37],[-43,-436],[8,-21],[14,-17],[27,-32],[32,-1],[2,-1],[141,-162],[12,-4],[67,-37],[2,-4],[9,-11],[1,1],[23,-18],[1,-5],[1,-3],[2,-4],[6,-21],[0,-1],[2,1],[7,1],[10,-8],[0,-4],[1,-3],[-2,-11],[-2,-12],[0,-3]],[[75829,140652],[207,-2],[13,0],[18,0],[6,0],[5,0],[16,0],[26,0],[3,0],[166,0],[5,0],[11,0],[6,0],[148,0],[43,0],[9,1],[16,-1],[9,0],[14,0],[3348,-3],[2647,-2],[20,0],[218,1],[75,1],[404,0],[1923,2],[993,1],[2,0],[17,0],[16,0],[1084,0],[10,0],[16,1],[24,-1],[1734,-1],[-1,1],[10,0],[0,-1],[912,0],[986,-1],[0,0],[192,0],[0,0],[1231,1],[1928,2],[3848,4],[639,0],[1337,0],[667,1]],[[103271,125457],[-50,0],[-75,0],[-36,0],[-41,1],[-76,-1],[-76,2],[-76,0],[-76,1],[-331,0],[-759,-1],[-77,-1],[-361,0],[-98,-1],[-306,0],[0,0],[0,0],[-307,-1],[-25,0],[-598,1],[-36,-1],[-99,1],[-1,0],[-86,0],[-565,1],[-295,0],[-27,0],[-639,2],[-73,1],[-30,0],[-78,0],[0,0],[-228,1],[-419,0],[-3,0],[-1976,12],[-660,4],[-3,0],[-368,2],[0,0],[-319,2],[-35,-1],[-404,0],[-4,0],[-30,0],[-2,0],[-130,0],[-68,1],[-28,0],[-49,0],[-75,0],[-99,0],[-1,0],[-122,1],[-26,0],[-58,0],[-326,0],[-11,0],[-350,3],[-82,0],[-223,0],[-77,-1],[-92,0],[0,0],[-110,0],[-5,0],[-1,0],[-3,0],[-324,2],[-151,2],[-1,0],[-314,1],[-145,0],[-233,1],[-56,1],[-89,1],[-6,-1],[-116,1],[-38,0],[-68,0],[-381,2],[-3,0],[-32,0],[-4,1],[-32,1],[-426,1],[-36,0],[-16,0],[-23,1],[-118,-1],[-134,1],[-45,0],[-1,0],[-424,0],[-85,0],[-257,2],[-108,-2],[-43,1],[0,-1],[-28,0],[-441,1],[-167,-1],[-12,1],[-94,0],[-44,0],[-15,1],[-442,-1],[-21,0],[-131,0],[-12,0],[-63,0],[-29,0],[-17,0],[-13,0],[-90,0],[-74,1],[-174,1],[-58,-1],[-95,0],[-76,0],[-115,0],[-20,1],[-11,0],[-673,-1],[-18,1],[-243,0],[-107,0],[-84,0],[-5,1],[-98,-1],[-54,-1],[-24,1],[-105,1],[-21,0],[-4,-1],[-3,0],[-87,1],[-17,0],[-141,0],[-72,0],[-125,0],[-259,0],[-60,0],[-57,0],[-10,0],[-24,0],[0,0],[-7,0],[0,0],[0,0],[-221,1],[-89,0],[-9,0],[-136,1],[-3,-1],[-36,-1],[-37,1],[-40,0],[-6,0],[-5,0],[-64,0],[-1,0],[-150,0],[-404,1],[-92,0],[-4,0],[-141,0],[0,0],[-13,0],[-8,0],[-28,0],[-15,1],[-36,0],[-19,-1],[0,1],[-78,0],[-48,0],[-29,0],[-31,0],[-275,0],[-28,0],[-308,2],[-33,0],[-55,-1],[-21,0],[-6,0],[-113,-1],[-643,0],[-147,0],[-80,0],[-175,1],[-20,-1],[-1,0],[-112,1],[-79,0],[-113,0],[-71,0],[-158,0],[-74,0],[-181,0],[-29,0],[-240,-1],[-1,0],[-466,1],[-25,-1],[-52,1],[-9,0],[-454,-1],[-68,1],[-306,0],[0,0],[-29,0],[-1382,0]],[[83185,81121],[52,1],[0,0],[101,0],[0,0],[360,3],[1103,6],[4,1],[165,1],[1,0],[132,1],[124,0],[258,2],[4,0],[131,1],[67,0],[7,0],[531,4],[6,0],[530,4],[49,1],[150,1],[59,-1],[187,1],[0,0],[150,2],[1,1],[46,-1],[132,0],[152,2],[30,0],[149,1],[31,1],[298,1],[155,1],[0,0],[13,1],[141,2],[0,0],[142,1],[4,0],[1283,7],[29,0],[5,0],[17,0],[264,1],[96,-1],[307,-2],[12,0],[4,0],[23,0],[766,-4],[42,0],[2,0],[427,-3],[118,-3],[247,-1],[62,1],[120,0],[16,0],[5,0],[9,0],[0,0],[58,0],[104,-1],[655,1],[107,0],[435,-1],[17,0],[350,1],[107,-1],[22,0],[417,-1],[2,0],[39,0],[264,0],[13,0],[7,0],[111,1],[158,-1],[15,-1],[622,0],[0,0],[457,-3],[7,1],[34,-1],[201,-2],[25,0],[4,0],[398,0],[66,-1],[42,1],[112,0],[110,1],[131,-1],[244,1],[20,1],[22,0],[849,1],[0,0],[69,1],[0,1],[54,-1],[262,0],[171,1],[49,0],[112,-2],[154,0],[67,1],[2,-1],[68,1],[200,-1],[38,0],[0,0],[284,1],[46,0],[824,1],[92,0],[8,0],[59,0],[13,0],[223,0],[36,-1],[200,1],[30,0],[120,0],[46,1],[18,0],[50,-1],[5,1],[95,0],[32,0],[164,0],[101,-2],[11,2],[155,-1],[32,1],[17,0],[95,0],[19,0],[660,0],[403,-1],[78,1],[422,0],[10,0],[215,-1],[65,0],[56,1],[112,0],[6,-1],[10,0],[10,0],[14,0],[7,0],[515,-1],[134,1],[100,1],[33,0],[65,0],[121,0],[7,0],[5,0],[26,0],[216,-1],[78,1],[66,0],[32,0],[66,0],[88,0],[11,0],[17,1],[50,-1],[38,1],[81,-1],[125,0],[21,1],[31,0],[14,-1],[141,0],[144,0],[44,0],[40,0],[381,0],[0,0],[280,1],[10,0],[1,0],[21,0],[466,1],[66,-1],[80,0],[1,0],[300,0],[0,0],[88,1],[42,-1],[28,0],[69,0],[14,0],[45,0],[521,-3],[13,0],[32,0],[36,0],[198,0],[139,-1],[8,0],[89,1],[40,0],[8,0],[299,-3]],[[110402,81147],[0,-10],[0,-8],[0,-220],[0,-18],[0,-45],[-1,-39],[1,-17],[-1,-73],[1,-72],[-2,-84],[1,-162],[0,-401],[1,-323],[0,-158],[0,-8],[1,-274],[0,-28],[0,-39],[0,-106],[0,-202],[0,-4],[-1,-9],[1,-82],[0,-14],[0,-77]],[[110887,64486],[-7,-46],[-11,-15],[-122,-48],[-16,1],[-486,219],[-272,154],[-40,58],[-53,119],[-227,28],[-172,66],[-624,569],[-83,213],[-5,51],[-13,17],[-229,96],[-97,36],[-232,87],[-26,2],[-17,-8],[-80,-132],[-3,-20],[14,-37],[6,-49],[-6,-51],[-21,-50],[-19,-21],[-98,-70],[-84,-11],[-107,-13],[-250,-12],[-139,12],[-362,56],[-14,13],[-14,28],[-1,30],[11,34],[1,33],[-38,110],[-28,13],[-119,8],[-578,-332],[-23,-96],[-224,-51],[-80,17],[-379,81],[-541,-49],[-186,-49],[-31,-121],[-28,-144],[-21,-75],[-43,-53],[-67,-31],[-75,-24],[-35,5],[-274,-12],[-238,-144],[-32,48],[-165,247],[-48,18],[-42,5],[-192,-42],[-413,304],[-7,36],[-4,61],[11,70],[5,38],[-7,15],[-7,14],[-25,24],[-41,17],[-50,29],[-43,24],[-49,-2],[-24,-34],[-14,-48],[-11,-51],[-14,-55],[-19,-58],[-24,-46],[-23,-26],[-19,-19],[-180,-36],[-346,114],[-38,29],[-61,73],[-47,141],[-13,185],[-29,81],[-33,38],[-21,9],[-46,-29],[-37,-23],[-103,-66],[-47,-244],[-75,-122],[-154,-218],[-163,-420],[-17,-27],[-37,-33],[-51,-20],[-60,8],[-50,19],[-43,33],[-1,1],[-33,40],[-120,310],[0,94],[19,41],[18,20],[49,1],[36,19],[17,25],[1,35],[-52,237],[-17,27],[-93,76],[-57,-7],[-309,-209],[-228,-263],[-196,0],[-65,22],[-33,23],[-22,30],[-14,36],[5,39],[14,27],[23,79],[2,101],[-26,51],[-96,70],[-8,6],[-53,13],[-67,-30],[-97,-65],[-35,-16],[-22,4],[-73,12],[-24,10],[-32,56],[-3,20],[30,169],[-2,8],[-72,72],[-173,106],[-57,10],[-59,-24],[-19,-14],[-27,-57],[-122,-178],[-189,-226],[-180,-164],[-115,-41],[-42,4],[-328,157],[-41,40],[0,0],[90,231],[28,264],[-139,58],[-131,-38],[-80,-2],[-162,49],[-10,11],[-67,140],[-230,399],[-113,13],[-344,80],[-24,8],[-92,81],[-141,31],[-71,-47],[-56,-95],[-7,-34],[-122,-127],[-152,-158],[-106,40],[-182,304],[-87,77],[-82,57],[-38,2],[-100,6],[-54,-6],[-50,-47],[-126,-77],[-240,2],[-340,81],[-226,149],[-119,64],[-52,27],[-343,18],[-216,-15],[-139,28],[-124,39],[-76,382],[0,107],[7,55],[-6,63],[0,1],[-183,325],[-350,192],[-153,-329],[-32,-16],[-123,8],[-46,72],[-76,46],[-95,57],[-56,24],[-217,19],[-20,-8],[-135,-204],[-173,-9],[-114,23],[-265,259],[-97,116],[-193,254],[-68,89],[-27,45],[-8,25],[-38,48],[-140,137],[-83,24],[-32,-6],[-159,-83],[-9,-4],[0,921],[0,1],[0,1407],[0,756],[0,1188],[0,975],[0,1298],[0,867],[0,2201],[-13,0],[-316,0],[-334,0],[-475,0],[-1,0],[-1,0],[-47,0],[-38,-1],[0,0],[-64,0],[0,0],[-98,0],[0,0],[-128,0],[0,0],[-28,0],[-1,0],[-46,0],[-26,0],[0,0],[-297,-1],[-30,1],[-1,-1],[-2,0],[0,0],[-55,0],[-117,1],[0,0],[-20,0],[0,0],[-33,0],[0,0],[0,0],[-205,0],[0,0],[-34,0],[0,0],[-187,0],[0,1],[-57,0],[0,0],[-138,0],[0,0],[-150,0],[0,0],[-12,0],[0,0],[-67,0],[0,0],[-97,0],[-32,0],[-90,0],[0,0],[-126,0],[-65,0],[-66,0],[-84,0],[-250,-1],[-26,1],[-120,-2],[-1975,1],[-96,1],[-13,0],[-165,-1],[-39,1],[-257,0],[-5,0],[-5,0],[-5,0],[-17,0],[-141,-1],[0,1],[-755,2],[-477,1],[-3079,1]],[[165911,94647],[-483,0],[-8,1],[-562,-3],[-327,0],[0,0],[-232,1],[-1438,2],[-3,0],[-411,0],[-359,1],[1,1068],[0,11],[0,87],[0,14],[0,13],[0,2],[0,4],[0,263],[1,301],[0,5],[-1,405],[0,64],[0,1],[4,1121],[0,3],[-2,386],[-2,201],[0,0],[0,358],[0,0],[0,130],[0,0],[1,111]],[[162090,99197],[-1,761],[1,44],[-1,238],[0,5],[0,6],[-2,240],[0,5],[2,101],[1,328],[0,40],[0,99],[0,229],[0,47],[0,4],[0,16],[-1,35],[0,42],[0,51],[0,22],[1,53],[-1,45],[0,0],[0,0],[0,0],[0,41],[0,0],[0,60],[0,128],[1,188],[0,51],[0,0],[0,65],[1,81],[-1,81],[0,14],[0,1],[0,185],[-1,34],[0,104],[0,13],[0,6],[0,0],[-1,9],[0,0],[0,3],[0,2],[0,3],[0,50],[1,51],[0,54],[0,35],[0,186],[1,0],[0,94],[-1,134],[0,131],[0,55],[0,143],[-1,52],[0,647],[0,7],[0,150],[0,188],[0,65],[1,63],[-1,418],[0,395],[0,73],[0,160],[0,7],[0,0]],[[162088,105835],[308,139],[94,29],[135,62],[4,0],[32,20],[51,11],[71,29],[121,64],[243,144],[156,80],[81,58],[43,44],[66,174],[21,32],[48,50],[106,34],[40,-10],[15,-13],[-24,-25],[29,-41],[-25,-19],[10,-18],[15,-9],[40,-6],[264,160],[212,147],[27,4],[84,45],[54,41],[67,30],[86,23],[169,101],[134,69]],[[164865,107284],[0,-92],[-1,-41],[1,-295],[0,-19],[0,-32],[1,-52],[-1,-60],[-1,-96],[3,-656],[499,0],[0,0],[53,0],[218,-2],[47,0],[1750,3],[32,0],[490,-6],[161,-2],[1020,11],[1058,-2],[372,3],[300,2],[343,-5],[1,0],[729,-4],[34,0],[267,1],[513,4],[384,2],[1395,-3],[429,7],[1,0],[153,2],[0,0],[85,2],[20,0],[37,0],[19,0],[4,1],[314,0],[70,-1],[945,-7],[2,0],[334,-6],[16,0],[412,-3],[22,0],[727,3],[52,0],[28,0],[65,-1],[450,1],[11,0],[1820,1],[2,0],[22,1],[150,0],[16,0],[265,0],[65,-30],[181,-196],[49,-74],[59,-267],[427,-169],[23,6],[95,-43],[86,-156],[137,-295],[20,-598],[-18,-66],[11,-58],[35,-185],[206,-314],[163,-113],[100,-39],[75,-133],[56,-42],[285,-49],[158,-18],[12,-1],[226,-294],[5,-28],[-19,-21]],[[183441,102760],[-245,-104],[-125,-87],[-126,-157],[-30,-49],[-86,-177],[-20,-63],[11,-20],[-11,-80],[-55,-138],[-150,-212],[-188,-170],[18,-39],[8,-10],[2,-3],[-6,-28],[-45,-47],[-166,-176],[-40,-40],[-55,-37],[-64,-39],[-81,-35],[-65,-41],[-78,-64],[-19,-86],[16,-22],[39,-5],[1,0],[0,-28],[2,-5],[8,-43],[239,-401],[5,-32],[-8,-29],[-203,-341],[-94,-86],[-55,5],[-53,18],[-29,-3],[-91,-129],[-27,-299],[11,-362],[15,-49],[22,-85],[2,-10],[157,-80],[44,12],[66,-12],[62,-27],[117,-127],[4,-28],[9,-51],[-3,-33],[-17,-319],[33,-161],[10,-23],[85,-59],[39,-14],[319,-311],[284,-278],[329,-346],[44,-67],[133,-202],[3,-34],[-10,-32],[0,-1],[-60,-59],[-357,-170],[-228,-118],[-272,-140],[-1,-1],[-145,-137],[-153,-145],[-59,-55],[-50,-65],[-174,-223],[-76,-81],[-114,-122],[-93,-78],[-2,-1],[-88,-45],[-133,-36],[-129,2],[-250,-119],[-57,-46],[-91,-73]],[[180801,95047],[-48,37],[-94,55],[-166,64],[-148,25],[-148,1],[-1,0],[-48,-5],[-2,0],[-4,-1],[-4,0],[-143,-35],[-25,-9],[-78,-36],[-85,-50],[-113,-94],[-84,-96],[-178,-252]],[[179432,94651],[-41,0],[-38,0],[-745,0],[-53,0],[-396,-2],[-325,-1],[-33,0],[0,0],[-24,0],[-514,0],[-2,0],[-55,0],[-85,0],[0,0],[-268,0],[-92,0],[-192,0],[0,0],[-523,-1],[-13,0],[-262,-1],[0,0],[-71,-1],[-10,0],[-297,-1],[-27,0],[-374,-2],[-174,0],[-41,1],[-3,-1],[-579,0],[0,0],[-84,0],[-13,0],[-792,0],[-36,0],[-235,0],[-5,0],[-504,4],[-9,0],[-181,0],[-32,1],[-38,1],[-93,0],[-1119,5],[-8,0],[-85,0],[-381,1],[-5,0],[-132,0],[-10,0],[-95,0],[0,1],[-226,0],[-24,-1],[-9,0],[-3,0],[-7,0],[-2,0],[-138,0],[-1568,1],[-450,0],[0,0],[-1692,-7],[-308,-1]],[[157842,79114],[-82,-240],[-29,-18],[27,-104],[2,-5],[1,-6],[1,-7],[6,-15],[0,-5],[2,-13],[-3,-4],[-7,-16],[-1,-2],[1,-12],[6,-4],[4,-5],[2,-14],[3,-9],[-5,-34],[-65,-155],[3,-12],[-25,-315],[-18,-234],[-19,4],[-61,-19],[-63,7],[-91,48],[-14,60],[-27,-12],[-198,-103],[-195,-175],[-37,-74],[-54,-110],[-100,-182],[-243,-486],[-197,-121],[-1,0],[-171,-7],[-13,10],[-27,66],[6,45],[-42,103],[-232,47],[-40,-10],[-47,-76],[-2,-4],[-4,-5],[-4,-3],[-321,-98],[-15,-10],[-70,-8],[-46,-26],[-21,-15],[-17,-6],[-16,-4],[-124,-110],[-27,-52],[-169,-325],[-90,-78],[0,0],[-67,-66],[-5,-4],[-20,-9],[-165,-104],[-144,51],[-53,41],[-14,134],[45,196],[-60,83],[-48,45],[-18,1],[-170,-98],[-116,-108],[-144,-99],[-88,-146],[-189,-208],[-82,80],[-79,18],[-90,-37],[0,0],[-54,-105],[56,-212],[-75,-177],[-163,-250],[-4,-5],[-73,-80],[-43,-24],[-383,8],[-1,0],[1,0],[-237,-73],[-278,-165],[-39,-34],[-15,-24],[17,-28],[-13,-67],[-157,-189],[-256,-94],[-289,-134],[-122,-141],[2,-21],[-8,-12],[-18,-42],[-47,-26],[-521,15],[-82,15],[-49,6],[-296,-33],[-451,-222],[-197,-230],[-69,-58],[-1,0],[-30,17],[0,-2],[0,-5],[-1,-16],[-141,-170],[-9,-13],[-83,-341],[-38,-15],[-8,-5],[-2,-7],[20,-108],[0,-6],[41,-119],[-8,-28],[-20,-23],[-98,-114],[-153,-103],[-65,12],[0,3],[-22,1],[-14,-4],[-286,30],[-32,51],[-44,15],[-15,-6],[-229,-210],[-7,-94],[-60,-562],[0,-2],[-49,-518]],[[143444,71164],[-804,17],[-16,0],[-129,1],[-1640,14],[-27,0],[-288,2],[-135,-3],[-124,-1],[-222,-1],[-101,2],[-56,0],[-65,1],[-41,0],[-151,3],[-67,0],[-41,1],[-13,0],[-9,0],[-3,0],[-389,0],[0,0],[-135,-1],[-58,0],[0,0],[-37,0],[-12,1],[-45,0],[-385,12],[-12,1],[-8,0],[-7,-1],[-94,3],[-41,1],[-732,19],[-21,0],[-27,1],[-24,1],[-145,5],[-107,2],[-183,4],[-37,1],[-80,1],[-37,1],[-96,2],[-15,0],[-26,1],[-651,2],[-213,1],[-26,0],[-93,2],[-14,0],[-7,0],[-26,1],[-181,3],[-32,0],[-22,1],[-287,4],[-5,-1],[-1,0],[-70,0],[-19,0],[-1,0],[-392,4],[-724,7],[-64,-60]],[[128311,76201],[96,2],[60,118],[12,46],[10,87],[221,282],[81,54],[30,38],[8,84],[-10,56],[-46,78],[-41,44],[-41,27],[-258,312],[31,19],[48,-19],[278,-51],[47,5],[176,44],[25,23],[-3,89],[-15,34],[-19,15],[-35,-13],[-89,52],[-122,103],[-31,69],[2,33],[14,32],[19,22],[19,9],[88,0],[78,-23],[56,-4],[48,12],[47,46],[22,56],[13,75],[-36,498],[-12,29],[-60,84]],[[129022,78668],[150,-2],[20,0],[28,-1]],[[129220,78665],[-31,-94],[1,-42],[26,-43],[53,-22],[41,5],[44,31],[70,87],[44,85]],[[129468,78672],[49,0],[81,5],[7,2],[86,9],[38,5],[0,0],[234,17],[12,-1],[248,-4],[176,-6],[1,0],[159,-4],[8,0],[101,-1],[66,-1],[48,-1],[89,-1],[89,-1],[13,0],[25,0],[130,-2],[329,1],[147,2],[0,0],[27,0],[1,0],[38,0],[63,-1],[191,1],[118,-1],[198,-2],[308,-2],[117,0],[106,-2],[0,0],[15,0],[1,0],[84,-2],[0,0],[61,0],[73,-1],[9,1],[124,-2],[313,-1],[18,0],[19,0],[981,-16],[0,-1],[50,66],[6,17],[20,133],[-11,105],[-35,204],[-39,163],[-46,119],[-8,91],[215,-6],[595,-66],[-14,-151],[583,18],[195,6],[0,0],[279,5],[7,0],[464,9],[42,1],[39,0],[244,2],[14,0],[29,1],[200,1],[12,-1],[112,1],[61,0],[2,0],[424,3],[0,0],[198,5],[566,14],[2,0],[189,3],[78,2],[54,2],[8,0],[12,0],[182,6],[16,1],[559,15],[5,0],[150,-92],[0,-1],[332,91],[1,0],[4,0],[14,1],[209,-7],[287,-9],[407,-39],[11,0],[10,-1],[1,-1],[39,-3],[2,0],[27,-2],[424,-28],[4,1],[156,-16],[19,-2],[1,0],[207,-10],[688,-32],[0,0],[867,-30],[2,0],[158,-4],[136,7],[128,9],[515,36],[72,5],[0,0],[661,-20],[35,-3],[409,-37],[422,-39],[0,-1],[273,-15],[0,0],[25,0],[1896,-56],[125,-2],[878,-10],[1,0],[208,-7],[880,-28],[50,70],[6,21]],[[150518,79177],[19,-1],[0,0],[726,-17],[718,5],[96,-22],[1,0],[4,0],[808,0],[4,0],[155,0],[567,0],[493,-1],[59,0],[259,2],[176,4],[5,0],[20,0],[955,4],[185,0],[61,0],[4,0],[8,0],[6,1],[40,0],[2,0],[80,-3],[29,-2],[12,0],[12,-1],[86,0],[8,0],[9,0],[777,-2],[42,109],[351,-10],[660,-11],[-113,-118]],[[181434,86249],[-200,-338],[-82,-182],[-55,-143],[-55,-101],[-36,-45],[-29,-23],[-28,0],[-64,41],[-31,35],[-104,3],[-33,-15],[-54,-44],[-56,-60],[-72,-95],[-100,-164],[-122,-281],[-32,-90],[-57,-113],[-33,-89],[-18,-114],[-62,-200],[-28,-71],[-5,-101],[15,-37],[45,-7],[6,-35],[-46,-62],[-98,-173],[-120,-248],[3,-24],[4,-42],[9,-19],[-15,-79],[-25,-46],[-92,-122],[-84,-159],[-24,-64],[6,-9],[-4,-41],[-33,-73],[-109,-148],[-49,-42],[-7,0],[-14,19],[-27,-2],[-24,-21],[28,-100],[-31,-121],[13,-74],[20,-28],[1,-15],[-3,-15],[-50,-85],[15,-35],[-1,-18],[-109,-132],[-173,-174],[-32,-47],[-40,-40],[-35,-19],[-20,5],[-4,23],[-45,68],[-62,-42],[-12,-23],[-62,-15],[-28,6],[1,51],[-29,141],[-76,156],[-27,30],[-26,52],[-2,69],[12,61],[-13,19],[-43,109],[7,57],[30,59],[-29,41],[18,143],[16,70],[60,98],[39,83],[27,179],[-12,55],[6,91],[18,53],[58,113],[-10,39],[1,31],[16,91],[33,108],[35,63],[10,75],[1,10],[-14,34],[0,26],[60,181],[56,111],[119,188],[31,38],[-3,30],[4,66],[33,77],[50,24],[29,25],[26,62],[-3,31],[13,31],[11,18],[47,39],[33,64],[-33,70],[-22,75],[91,63],[32,12],[51,-11],[101,10],[27,49],[46,18],[24,33],[8,54],[20,50],[22,9],[48,61],[17,57],[-8,64],[-81,71],[-40,7],[-15,-9],[-8,-14],[-96,-4],[-22,5],[-3,9],[8,22],[167,160],[28,-35],[38,7],[89,101]],[[179867,85870],[32,41],[53,69],[1,1],[4,5],[0,1],[2,2],[0,0],[0,0],[18,23],[15,20],[20,25],[15,20],[6,8],[691,80],[26,3],[110,12],[77,9],[418,50],[6,1],[6,1],[16,2],[21,2],[30,4],[0,0]],[[178753,85300],[7,-24],[-21,-26],[-17,-97],[-19,-6],[-41,38],[-10,110],[5,66],[11,11],[16,-7],[16,-39],[22,-19],[31,-7]],[[178679,85883],[-34,-27],[-53,-64],[-55,-100],[-12,70],[-39,122]],[[178486,85884],[3,0],[14,2],[1,0],[13,-1],[29,-1],[2,1],[0,0],[26,0],[3,0],[2,0],[1,0],[11,0],[44,-1],[41,-1],[3,0]],[[172354,92664],[152,-12],[36,-3],[275,-83],[117,-75],[55,-73],[10,-23],[32,-22],[85,-44],[98,-38],[89,-87],[9,-16],[-4,-24],[0,-2],[-72,-152],[-27,-18],[-71,-18],[-20,-17],[-21,-38],[-40,-122],[10,-91],[17,-35],[226,-234],[129,-34],[176,-27],[128,8],[45,-22],[133,-65],[111,-71],[35,-98],[-14,-44],[21,-82],[53,-46],[51,-26],[88,-23],[112,7],[69,-16],[38,-48],[66,-104]],[[174849,90038],[-3,-31],[-8,-106],[-67,-146],[-54,-116],[-42,-26],[-73,-44],[-56,-51],[-42,-63],[-12,-119],[21,-74]],[[174513,89262],[-100,7],[-64,-60],[-99,-35],[-9,3],[-3,30],[-41,69],[-22,1],[-67,5],[-22,-19],[-8,-32],[14,-40],[-5,-105],[-2,-44],[-64,-38],[-3,-13],[16,-74],[-58,-91],[1,-37],[-26,-71],[-28,-47],[-17,-21],[-11,-14],[-7,-9],[-7,-11],[-28,-53],[-46,-133],[-10,-91],[24,-154],[30,-100],[-5,-33],[-10,-7],[-9,-29],[78,-69],[29,-51],[-1,-41],[8,-21],[0,0],[24,-37],[53,-31],[92,-8],[149,46],[74,5],[61,20],[27,25],[62,84],[123,9],[37,-10],[36,3],[55,47],[51,91],[17,14],[29,8],[68,-68],[48,-61],[-19,-163],[-15,-62],[-35,-87],[16,-44],[105,-123],[27,-20],[33,1],[70,-88],[16,-65],[1,-34],[-18,-31],[-15,-3],[-3,-12],[18,-65],[93,-58],[74,-13],[22,-13],[130,-123],[134,-44],[53,1],[79,22],[53,6],[103,-13],[39,-22],[24,-26],[10,-20],[5,-32],[63,-44],[65,58],[10,32],[60,4],[73,-44],[79,3],[17,16],[35,8],[57,-22],[35,-99],[12,-92],[79,-76],[133,-89],[27,-36],[49,-134],[11,-39],[11,-40],[90,-47],[83,-18],[14,-16],[11,-58],[128,-107],[41,-51],[91,-40],[115,-32],[60,-24],[285,-179],[107,-110],[-30,-135],[-23,-143],[-54,-78],[-34,-23],[-19,0],[-8,7],[2,20],[-10,21],[-32,2],[-51,-52],[-10,-86],[14,-31],[-21,-189],[26,-102],[-29,-48],[37,-78],[10,-46],[-9,-31],[-35,-22],[-11,1],[-19,-20],[-17,-19],[-55,-104],[27,-50],[96,-19],[51,-29],[17,-22],[31,-67],[-4,-22],[-105,40],[-195,-57],[-69,82],[-33,17],[-33,-8],[-162,117],[-107,67],[-63,2],[-8,-13],[-21,-82],[-14,-16],[-32,-8],[-97,106],[-4,26],[9,92],[-7,57],[-11,27],[-74,116],[-59,147],[-29,57],[-35,20],[-7,-6],[-23,5],[-49,40],[-98,57],[-34,20],[-25,52],[-80,93],[-46,-14],[-33,0],[-75,69],[-19,28],[-21,48],[-20,66],[-33,52],[-67,17],[-35,-24],[-34,-24],[6,-32],[61,-112],[55,-81],[62,-126],[39,-51],[30,-13],[95,-3],[22,-19],[6,-16],[-5,-12],[0,-27],[0,-24],[9,-29],[14,-17],[48,-21],[88,-5],[74,-31],[9,-12],[-15,-21],[5,-34],[50,-32],[34,-37],[5,-21],[-8,-19],[0,-31],[67,-156],[-13,-47],[34,-75],[115,-149],[32,-21],[25,-6],[336,7],[56,-70],[34,-84],[101,-43],[93,3],[93,-18],[119,-41],[8,-20],[-18,-32],[-102,-74],[-34,10],[-33,-9],[-23,-46],[-19,-40],[4,-29],[24,-42],[85,-49],[83,12],[34,47],[4,21],[-7,8],[3,13],[15,6],[20,-12],[26,-31],[59,-132],[46,-169],[7,-126],[14,-88],[5,-85],[-12,-58],[-36,-65],[-15,-6],[-9,-17],[-29,-110],[3,-65],[-13,-60],[-26,45],[-32,25],[-63,26],[-13,43],[-93,129],[-107,52],[-75,52],[-16,26],[-9,28],[3,10],[-43,11],[-38,10],[-13,-22],[2,-63],[-16,-18],[-55,-8],[-28,-66],[38,-59],[104,-108],[69,-125],[8,-67],[16,-44],[44,-29],[61,-5],[11,-22],[-47,-18],[-112,-26],[-89,-6],[-17,-43],[-27,-9],[-172,-14],[-25,21],[-38,-26],[-21,-42],[-17,-36],[35,-42],[82,-46],[284,45],[16,-11],[-14,-44],[-9,-64],[25,-38],[-7,-67],[-24,-77],[-7,-21],[18,-13],[49,-9],[23,25],[57,39],[40,10],[20,-22],[-6,-9],[3,-20],[14,-42],[23,-38],[13,-13],[22,6],[49,-22],[69,-58],[18,-46],[47,-113],[12,-50],[-79,-245],[-28,-130],[-14,-37],[-29,-5],[-11,6],[2,38],[-13,22],[-42,4],[-39,3],[-2,0],[-27,-42],[-30,-19],[-63,-22],[-36,-25],[-16,-18],[-32,-37],[-45,-65],[-11,-31],[-27,5],[-36,30],[-85,140],[-1,32],[9,1],[6,14],[-60,98],[-18,15],[-140,108],[-6,4],[-11,9],[-22,2],[-29,38],[-6,26],[5,9],[1,38],[-10,8],[-29,23],[-67,-40],[-33,8],[-14,15],[-42,80],[-142,112],[-24,39],[9,75],[19,11],[46,77],[-8,33],[-16,2],[0,0],[-5,17],[-4,12],[-3,7],[-7,23],[-2,11],[-3,16],[-1,10],[-5,28],[-3,6],[-4,9],[-8,18],[-24,40],[-36,40],[-5,6],[-32,24],[-144,10],[-16,-8],[-20,-11],[-117,-26],[-13,-48],[-21,-44],[-11,-13],[-27,-13],[-27,8],[-58,71],[-25,17],[-41,-9],[-34,-8],[-8,-22],[2,-16],[21,-44],[146,-138],[34,-55],[38,-22],[26,-3],[55,13],[68,130],[14,59],[4,47],[23,16],[57,-76],[23,-48],[-2,-14],[-16,-21],[-10,-40],[-1,-83],[7,-7],[12,-12],[2,-10],[1,-3],[7,-28],[25,-100],[-1,-11],[-2,-32],[-1,-21],[-5,-14],[-23,-66],[-3,-10],[-3,-8],[-1,-4],[-3,-18],[-3,-22],[-2,-20],[5,-45],[21,-46],[32,-33],[29,-15],[124,-3],[94,-34],[8,-7],[18,-17],[1,-1],[4,-3],[2,-2],[3,-6],[40,-69],[11,-18],[42,-24],[97,-75],[7,-14],[-4,-14],[11,-25],[28,-26],[48,-14],[47,-63],[12,-117],[7,-57],[1,-81],[-5,-24],[50,-66],[55,6],[5,15],[-2,28],[24,52],[21,14],[38,-8],[87,-35],[3,1],[70,10],[7,117],[117,-2],[30,9],[4,-26],[42,-10],[16,5],[-7,101],[12,103],[17,-2],[25,-19],[61,51],[6,13],[46,3],[63,-21],[121,-96],[49,-28],[116,-40],[47,-11],[138,-31],[161,-70],[28,-1],[109,41],[55,53],[36,21],[72,-6],[23,-8],[41,-35],[17,-55],[71,-340],[25,-148],[58,-254],[102,-343],[113,-304],[62,-233],[26,-164]],[[179144,78928],[-47,0],[-3,0],[-20,0],[-2,0],[-20,0],[-4,0],[-4,0],[-34,0],[-5,0],[-15,0],[-9,0],[-39,0],[-113,-1],[-2,0],[-9,0],[-7,0],[-253,0],[-29,1],[-321,0],[-700,-1],[0,0],[-654,-1],[-183,0],[-1,0],[-878,2],[-95,0],[-397,-34],[-2,0],[0,0],[-911,12],[-312,-7],[-173,0],[-1724,0],[-397,0],[-26,0],[-63,-1],[-511,-2],[-1,0],[-25,0],[-318,-2],[-2,0],[-411,3],[-4,0],[-283,-3],[-412,-6],[-18,0],[-58,-1],[-51,0],[-1,-1],[-215,-6],[-12,0],[-478,5],[-24,0],[-235,-1],[-89,0],[-26,0],[-113,0],[-434,1],[-3,0],[-97,1],[-1,-1],[-104,1],[-4,0],[-561,-3],[-5,0],[-43,1],[-260,-1],[-3,0],[-33,0],[-455,-1],[-378,-1],[-1,0],[-88,-1],[-149,-1],[-1,0],[-571,5],[-2,0],[-174,0],[-753,3],[-172,0],[-2,0],[-219,0],[-96,1],[-425,3],[-8,0],[-197,3],[-11,0],[-745,32],[-4,0],[-27,2],[-631,37],[-276,16],[-208,2],[-341,-13],[-2,0],[-1,0],[-234,13],[0,0],[-156,6],[-6,1],[-414,19],[-11,0],[-900,40],[-168,-2],[0,0],[-615,29],[-315,33],[-259,5]],[[150518,79177],[95,78],[448,245],[107,22],[136,-28],[1,0],[389,155],[4,3],[39,23],[525,179],[119,9],[113,19],[32,38],[7,52],[1,1],[-21,28],[-2,71],[117,216],[100,147],[364,22],[225,75],[1,0],[96,130],[43,59],[6,6],[32,44],[5,9],[13,42],[-1,2],[-7,22],[-4,9],[2,27],[2,5],[17,33],[1,7],[-10,1],[-8,10],[-8,8],[-5,1],[-4,1],[-8,25],[-10,12],[0,2],[4,41],[0,0],[2,11],[4,5],[3,3],[2,1],[4,4],[8,4],[37,25],[5,-2],[42,13],[5,-1],[9,9],[8,16],[11,7],[7,21],[-6,16],[46,26],[9,5],[55,4],[36,-6],[1,3],[5,3],[1,1],[42,36],[21,2],[181,145],[6,182],[-4,119],[355,284],[219,164],[0,0],[43,24],[156,85],[587,243],[147,150],[18,19],[51,52],[1186,1121]],[[156776,83822],[149,-127],[-55,-16],[-184,-129],[-13,-31],[16,-78],[19,-30],[67,-17],[71,-29],[50,-36],[30,-124],[-23,-201],[13,-30],[1,-1],[12,-38],[4,-8],[15,-4],[3,-5],[34,-33],[2,0],[11,-25],[2,-3],[3,-2],[2,0],[8,2],[3,-4],[13,-6],[0,-4],[12,-41],[2,0],[3,0],[0,-3],[4,-7],[3,1],[19,5],[3,-2],[7,-1],[15,3],[5,4],[3,-1],[1,-15],[19,-19],[29,-80],[2,-2],[40,-40],[-2,-2],[3,-26],[-2,-17],[40,-28],[3,0],[117,-13],[5,0],[57,-4],[0,-3],[69,-34],[0,0],[25,-3],[10,5],[5,0],[4,1],[4,2],[5,-3],[10,-6],[-1,-10],[0,-4],[1,-6],[9,-11],[8,-5],[3,-6],[3,-2],[13,-4],[15,-83],[1,-8],[-3,-9],[21,-16],[19,-14],[19,9],[163,-141],[18,-44],[433,20],[8,8],[4,-2],[183,129],[9,69],[3,12],[346,172],[2,6],[77,168],[5,3],[4,-2],[3,-6],[3,-2],[15,-3],[10,3],[22,28],[14,17],[-7,21],[5,3],[4,10],[2,7],[16,9],[154,-190],[348,-320],[74,41],[139,98],[199,78],[105,29],[181,31],[196,14],[4,-2],[23,-8],[27,3],[68,19],[105,51],[69,44],[187,158],[-85,126],[36,196],[12,88],[0,0],[4,-7],[0,0],[172,-103],[47,-58],[81,-58],[0,-2],[24,-56],[541,302],[407,240],[61,-231],[71,-60],[39,16],[80,59],[64,58],[385,243],[21,10],[-57,175],[66,50],[87,177],[177,124],[62,81],[9,22],[-67,49],[-56,24],[0,-1],[-32,14],[0,0],[-6,2],[0,0],[-8,3],[-1,0],[-11,14],[0,0],[-80,173],[-1,1],[-13,39],[33,23],[85,112],[16,60],[-3,12],[-9,23],[20,88],[94,181],[17,32],[238,378],[48,54],[6,-1],[4,-7],[58,43],[276,290],[193,204],[88,180],[68,172],[95,175],[11,12],[-27,144],[17,25],[18,44],[1,2],[11,27],[1,1],[16,146],[-1,2],[15,17],[4,3],[87,89],[1,5],[357,305],[17,14],[4,5],[-78,180],[5,22],[283,321],[148,324],[6,15],[2,35],[3,4],[-39,123],[12,13],[97,164],[0,0],[74,400],[187,-93],[156,-63],[68,-46],[57,-84],[164,-380],[602,-225],[54,23],[7,8],[14,7],[5,6],[38,23],[-9,28],[56,36],[8,17],[7,10],[1,4],[77,98],[7,27],[21,16],[10,5],[21,27],[58,73],[0,0],[1,7],[7,22],[0,2],[121,327],[1,1],[101,293],[1,1],[36,73],[2,9],[3,6],[1,2],[158,274],[-1,4],[129,304],[7,103],[204,317],[21,20],[457,-432],[125,240],[99,222],[74,143],[33,36],[80,54],[137,96],[1,-2],[10,-29],[10,-26],[12,-5],[401,270],[161,241],[12,32],[-42,33],[-22,28],[102,123],[131,158],[177,123],[75,93],[77,122],[28,76],[-58,83],[-44,46],[6,8],[18,25],[4,5],[5,6],[6,8],[15,17],[89,158],[0,1],[145,365],[4,9],[68,168],[-80,22],[56,536],[434,-370],[717,-628],[0,0],[1,-1],[750,-655],[22,38],[186,480],[15,62],[-6,35],[4,6],[23,27],[2,3],[9,22],[1,6],[10,26],[2,3],[7,11],[1,3],[-2,12],[12,44],[114,158]],[[180251,93964],[-41,24],[-9,17],[-4,35],[51,-40],[3,-36]],[[180284,94076],[-22,-3],[-21,42],[-15,49],[4,15],[41,15]],[[180271,94194],[13,-118]],[[180801,95047],[-4,-29],[-80,-62],[-10,-12],[-28,-35],[-66,-115],[0,0],[-11,-35],[-18,-41],[-5,-22],[-105,-162],[-20,-60]],[[180454,94474],[-74,32],[-119,-178],[-91,-28],[-91,-144],[-5,-5],[0,-4],[-3,-9],[-3,-12],[2,-7],[4,-8],[-1,-2],[1,-26],[-1,-2],[0,0],[-1,-4],[7,-42],[0,-1],[27,-37],[4,-5],[41,-27],[1,-1],[16,-13],[2,-2],[2,-7],[2,-2],[53,-53],[3,-3],[28,-25],[-6,-11],[-3,-7],[-14,-89],[0,-7],[-4,-59],[36,-34],[-23,-60],[-35,4],[-41,-63],[0,-5],[-20,-80],[0,-6],[12,-79],[1,-6],[34,-50],[5,-15],[29,-26],[-3,-18],[58,-42],[64,-69],[9,-35],[46,-89],[7,-18],[32,-108],[2,-2],[2,-3],[24,-29],[41,-23],[8,-14],[-8,-26],[3,-5],[6,-8],[5,-5],[38,-27],[0,-4],[39,-29],[32,-13],[79,-73],[7,-20],[6,-59],[0,-4],[27,-58],[72,-101],[20,-50],[-7,-43],[-4,-11],[1,-98],[3,-6],[29,-33],[14,-57],[-6,-80],[-14,-9],[-6,-1],[-29,-58],[-9,-91],[34,-335],[-3,-109],[7,-6],[16,-32],[-2,-6],[31,-33],[30,-12],[125,-119],[18,-24],[82,-158],[13,-36],[12,-66],[-4,-82],[0,-9],[3,-16],[0,-1],[1,-6],[33,-28],[-36,-71],[30,-57],[151,-177],[114,-164],[98,-104],[54,-82],[109,-77],[6,-5],[92,-40],[76,4],[59,28],[13,26],[-13,46],[12,3],[16,-33],[27,-124],[7,-109],[4,-59],[50,-383],[1,-142],[12,-116],[3,-2],[3,-3],[1,-1],[38,-602],[3,-174]],[[182143,88351],[-1,0],[-12,0],[-4,0],[-47,0],[-13,0],[-2,0],[-56,0],[-9,0],[-5,0],[-192,0],[-159,-1],[-247,2],[-28,0],[-297,3],[0,0],[-53,0],[-56,0],[-83,0],[-4,1],[-59,1],[-51,1],[-14,0],[-185,5],[-77,2],[-11,1],[-67,2],[-5,0],[-41,2],[-93,3],[-2,0],[-52,2],[-35,2],[-21,-1],[-14,1],[-18,2],[-119,5],[-119,4],[-10,1],[-102,6],[-11,160],[-1,20],[-7,127],[-6,103],[-4,82],[-1,7],[-7,121],[-2,34],[-6,113],[0,7],[-2,25],[-1,24],[-3,46],[0,0],[-54,926],[-2,38],[0,1],[-1,16],[-4,67],[0,5],[-6,101],[-1,6],[-73,1218],[-1,26],[-6,114],[0,1],[-30,508],[0,1],[-15,251],[-24,399],[0,2],[-46,779],[-1,9],[-28,466],[-2,34],[-4,215],[0,6],[1,90],[0,1],[0,107]],[[156776,83822],[-109,26],[-6,-2],[-31,-46],[-148,-11],[-249,141],[-34,72],[1,25],[-60,79],[-285,238],[-112,73],[-172,146],[-37,101],[-68,140],[-2,25],[27,89],[-40,85],[-258,376],[-64,94],[-209,197],[-94,129],[11,44],[0,1],[119,155],[3,28],[-5,11],[-82,68],[-81,14],[-36,36],[-71,152],[-30,109],[-194,279],[-9,5],[-68,24],[-56,72],[-30,137],[148,406],[34,-9],[40,4],[21,42],[13,45],[11,257],[-78,294],[-8,38],[0,0],[-7,150],[3,24],[10,20]],[[154484,88205],[121,-86],[148,16],[50,12],[608,153],[38,18],[23,23],[14,26],[23,68],[68,355],[8,102],[-2,61],[9,31],[16,18],[47,55],[44,23],[59,1],[99,-34],[93,7],[43,32],[17,21],[8,24],[11,53],[0,33],[-38,411],[-21,125],[-39,118],[-79,79],[-4,67],[21,51],[90,87],[25,7],[166,247],[148,456],[21,63],[152,116],[22,47],[15,69],[20,38],[68,23],[56,-11],[244,-190],[58,-104],[71,-153],[7,-40],[-9,-26],[-94,-114],[-6,-30],[5,-19],[67,-65],[124,14],[421,221],[14,38],[-30,406],[-31,54],[-75,70],[-37,36],[-30,59],[-10,69],[7,43],[239,66],[0,0],[-9,423],[-1,28],[36,21],[68,108],[95,151],[329,164],[233,381],[273,253],[43,27],[35,6],[40,-10],[84,-69],[22,-32],[48,-180],[33,-41],[32,-9],[17,2],[53,5],[34,13],[191,147],[91,52],[79,20],[94,-19],[29,13],[322,378],[235,276],[91,98],[69,75],[279,255],[189,49],[44,19],[178,422],[7,30],[4,45],[60,634],[23,241],[-13,41],[3,34],[10,23],[171,204],[60,54],[11,8],[29,310],[3,21],[2,58],[-8,47],[24,151],[77,317],[9,20],[65,151],[122,284],[27,32],[27,19],[75,124],[51,133],[11,53],[-35,212],[-36,106],[7,70],[19,193],[48,236],[-41,42],[-208,410],[-4,44],[8,26],[116,141],[26,19],[94,27],[27,-9],[19,-17],[104,17],[153,75]],[[165911,94647],[-8,-939],[-13,-35],[-1,-16],[-19,-1197],[4,-9],[2,-65],[1,-1],[-4,-292],[308,219],[89,108],[362,338],[84,79],[161,59],[42,59],[430,454],[63,16],[91,23],[61,-68],[208,-119],[345,402],[184,335],[136,185],[99,-87],[-31,-50],[-11,-30],[17,-31],[26,-27],[260,-180],[48,-26],[69,-27],[5,-2],[331,-76],[356,-13],[116,110],[18,110],[-66,48],[-16,17],[-14,34],[4,31],[99,178],[275,86],[78,-24],[77,-24],[110,-52],[43,-4],[172,216],[122,134],[30,24],[23,4],[121,-27],[131,-41],[122,-77],[141,-153],[46,-79],[50,-84],[233,-89],[160,14],[67,-97],[-6,-38],[-11,-23],[87,-195],[74,-91],[72,-21],[65,-19],[155,-305],[96,-213],[-78,-206],[0,-26],[17,-25],[105,-60],[30,-3]],[[125658,130819],[5,35],[0,1],[-3,40],[-1,20],[-3,37],[0,3],[6,36],[2,8],[0,2],[20,57],[2,5],[0,1],[0,0],[2,2],[24,20],[12,10],[5,5],[7,1],[2,1],[1,0],[23,7],[4,1],[7,2],[29,8],[63,-2],[5,0],[13,0],[0,-1],[1,-1],[4,-4],[0,0],[1,-6],[2,-30],[0,0],[0,-2],[0,-2],[-1,-6],[0,-1],[0,-2],[0,0],[0,-4],[-3,-19],[0,-3],[-7,-19],[0,-2],[-1,-2],[-14,-44],[0,-2],[-1,-1],[0,-1],[0,0],[-10,-98],[0,-1],[-1,-6],[-2,-2],[-4,-7],[-16,-27],[-9,-16],[-4,-5],[0,-2],[-2,-1],[-43,-28],[-7,-5],[-4,-2],[-1,-1],[-3,-2],[-1,0],[-70,-30],[-18,-8],[-14,-6],[-24,-10],[0,0],[-5,39],[0,1],[28,48],[1,2],[1,3],[0,1],[2,15]],[[124998,130049],[1,2],[9,13],[44,42],[20,8],[51,-9],[0,0],[2,-3],[30,-38],[21,-28],[3,-4],[0,0],[63,-41],[1,-1],[3,-10],[1,-1],[-1,-1],[-6,-4],[-28,-23],[0,0],[-15,-6],[-8,-3],[-2,0],[-18,-2],[-41,-3],[-8,-1],[-22,-2],[-3,0],[-12,-1],[-1,0],[-2,-1],[-41,-17],[-119,-49],[-58,-24],[-9,-3],[-26,-29],[-9,-41],[56,-26],[2,-1],[17,0],[37,-1],[1,-2],[2,-1],[6,-5],[0,0],[2,-13],[0,-2],[0,-1],[-1,-2],[-3,-4],[-3,-4],[-4,-7],[0,-1],[-1,0],[0,-1],[-1,0],[-2,-4],[-3,-5],[-6,-1],[-6,-2],[-3,0],[-1,-1],[-6,-1],[-60,-14],[-30,-7],[-3,-1],[-3,0],[-8,-2],[-5,-1],[-13,-3],[-2,0],[-35,8],[-36,8],[-28,-18],[-40,-48],[-14,-17],[-3,-3],[-68,-50],[-16,-12],[-4,-3],[-6,-2],[-5,-2],[-17,-5],[-12,0],[-49,1],[0,0],[-2,0],[-1,0],[1,2],[0,2],[3,13],[8,39],[8,41],[-21,31],[-1,2],[-7,9],[0,1],[0,3],[-1,8],[0,1],[-1,4],[0,1],[5,6],[31,13],[83,36],[2,1],[47,10],[19,4],[15,3],[12,3],[1,0],[1,1],[11,14],[4,5],[1,7],[1,18],[1,5],[25,27],[32,24],[28,14],[37,18],[42,20],[28,14],[9,6],[59,41],[3,3],[1,1],[0,1],[5,4],[0,0],[10,10],[2,3],[1,1],[12,13],[2,1],[14,15],[20,30],[3,5],[1,2]],[[125207,130331],[-49,-13],[-112,-31],[-4,-1],[-4,-1],[-42,-11],[-25,8],[0,0],[-1,0],[-38,54],[0,0],[0,0],[10,30],[3,4],[18,23],[3,6],[2,2],[3,5],[3,3],[32,44],[2,1],[118,45],[2,2],[106,31],[153,46],[7,2],[2,0],[12,-3],[6,-1],[5,-4],[26,-19],[1,0],[4,-4],[2,-1],[2,-2],[3,-1],[6,-12],[2,-3],[4,-8],[-11,-19],[-47,-85],[0,-1],[-32,-15],[-10,-5],[-16,-18],[-14,-25],[-1,-23],[-4,-5],[-3,-3],[-12,-6],[-5,2],[-10,4],[-15,10],[-43,8],[-39,-10]],[[136497,121123],[4,1],[6,0],[3,-1],[4,-2],[3,-3],[4,-5],[2,-3],[0,-1],[1,-2],[0,0],[0,-1],[0,0],[0,-1],[1,0],[0,-1],[0,-2],[1,-2],[1,-1],[1,0],[0,-1],[1,0],[4,-4],[0,-1],[0,0],[0,0],[-3,0],[-6,4],[-7,3],[-14,6],[-1,1],[-1,0],[-4,2],[-6,2],[-10,3],[-2,0],[-4,1],[0,0],[-1,0],[1,1],[0,0],[6,2],[0,0],[3,1],[4,2],[3,1],[4,1],[2,0]],[[138528,122841],[11,38],[0,1],[7,8],[14,19],[4,1],[5,0],[2,0],[1,-1],[13,-17],[5,-18],[3,-10],[1,-3],[1,0],[37,-17],[13,1],[16,1],[26,2],[17,1],[19,1],[35,15],[10,5],[11,5],[46,-8],[10,-1],[3,-1],[1,0],[5,-6],[14,-15],[11,-11],[0,0],[83,26],[0,1],[2,13],[2,9],[1,5],[-3,21],[-1,5],[0,2],[-3,19],[1,1],[7,11],[0,1],[2,-1],[24,-4],[17,-3],[1,-1],[4,-4],[20,-16],[1,-2],[14,-45],[1,-2],[0,-1],[0,-5],[1,-7],[0,-14],[-10,-7],[-1,1],[-23,6],[-4,1],[-5,2],[-3,1],[-5,-3],[-10,-4],[-8,-3],[-1,-2],[-47,-61],[-15,-19],[-42,-93],[-1,0],[-15,-12],[-4,-3],[-18,-14],[-1,-1],[0,0],[0,-2],[0,0],[-2,-8],[-13,-48],[0,-1],[5,-39],[1,-4],[2,-15],[0,-1],[0,-2],[-2,-4],[-11,-33],[0,0],[-1,-1],[-11,-5],[-8,-5],[-1,0],[-1,0],[-16,2],[-4,1],[-27,3],[-26,-15],[-16,-32],[10,-76],[-1,-44],[0,-1],[-11,-15],[-3,1],[-3,1],[-10,5],[-2,1],[-34,76],[-42,60],[-43,43],[-13,4],[-1,0],[-21,6],[0,0],[-5,2],[-12,14],[-13,15],[-2,2],[0,1],[0,0],[-2,2],[0,0],[0,8],[0,36],[0,4],[6,9],[4,5],[0,0],[19,5],[7,15],[-1,5],[0,1],[-1,9],[-1,11],[-1,12],[-1,1],[0,1],[-4,12],[0,0],[0,0],[-23,69],[-1,3],[4,11],[2,7],[7,25],[2,8],[14,50],[1,3],[1,3],[3,11]],[[124982,108466],[15,24],[1,28],[-33,126],[-209,429],[-24,27],[-40,23],[-181,53],[-273,58],[-194,56],[-192,55],[-99,52],[-284,209],[-41,95],[-17,61],[-30,169],[-84,393],[-61,64],[-96,43],[-8,17],[-64,391],[-44,270],[-11,103],[3,90],[-3,222],[11,48],[69,41],[37,47],[307,450],[17,60],[-102,181],[-79,108],[-378,290],[18,252],[-45,385]],[[119944,129281],[27,-7],[73,-61],[54,-31],[42,-20],[69,-13],[47,12],[158,39],[31,3],[5,1],[4,0],[5,1],[30,3],[8,0],[26,3],[63,-13],[32,1],[42,1],[10,2],[1,0],[9,2],[53,11],[6,1],[29,6],[1,0],[31,15],[85,41],[33,16],[3,1],[48,16],[215,72],[5,1],[30,10],[19,6],[6,3],[7,2],[22,7],[24,8],[3,1],[31,15],[3,2],[1,0],[3,1],[0,0],[35,18],[118,56],[2,2],[2,1],[6,2],[51,14],[9,2],[1,0],[9,-1],[9,-1],[42,-5],[23,-2],[0,0],[30,-3],[20,-1],[2,-1],[5,1],[40,6],[26,3],[24,4],[2,0],[10,5],[1,0],[2,1],[26,12],[1,0],[22,23],[3,2],[2,2],[0,0],[2,1],[10,1],[3,0],[59,9],[7,0],[1,1],[10,3],[17,4],[48,14],[1,0],[45,21],[31,15],[8,3],[10,5],[43,37],[50,8],[4,-1],[1,0],[2,0],[6,-2],[12,-2],[3,1],[16,3],[21,5],[41,9],[2,0],[5,4],[2,1],[3,3],[2,1],[1,0],[6,5],[10,7],[5,8],[15,22],[12,16],[51,51],[3,2],[26,13],[0,0],[6,4],[10,5],[14,7],[4,3],[22,11],[1,1],[28,10],[6,3],[4,1],[3,1],[5,2],[1,0],[46,6],[40,6],[44,6],[2,0],[1,0],[7,3],[1,1],[24,10],[1,1],[1,0],[21,21],[5,6],[43,61],[9,13],[9,13],[22,18],[43,13],[12,3],[2,-1],[13,-4],[10,-30],[2,-5],[16,-24],[79,-48],[37,2],[3,1],[42,52],[29,38],[1,0],[13,36],[2,2],[0,0],[13,12],[0,1],[2,-1],[18,-3],[4,-7],[1,-4],[-1,-5],[-2,-7],[-2,-8],[0,-2],[-6,-24],[5,-10],[0,0],[1,0],[41,-13],[2,-1],[17,2],[41,5],[6,0],[25,15],[2,1],[0,0],[2,2],[4,2],[1,7],[1,10],[4,31],[0,7],[1,3],[0,4],[1,4],[1,12],[2,13],[10,14],[8,1],[13,1],[15,2],[31,-17],[12,-7],[4,-2],[7,2],[37,10],[12,3],[10,8],[4,3],[0,0],[22,19],[12,9],[12,22],[1,9],[1,6],[6,32],[3,2],[4,3],[7,5],[24,18],[0,0],[9,7],[7,5],[2,1],[4,2],[0,0],[7,3],[0,0],[20,10],[10,4],[8,4],[2,1],[1,0],[1,0],[21,-1],[4,2],[4,2],[6,4],[30,30],[4,5],[5,4],[5,11],[11,21],[23,46],[20,13],[13,-1],[3,-2],[35,-24],[0,0],[2,-1],[1,0],[48,-14],[68,-20],[1,0],[1,0],[27,10],[1,0],[19,39],[0,0],[104,81],[2,2],[9,5],[0,0],[1,0],[1,0],[1,1],[1,0],[0,0],[1,1],[0,0],[1,1],[17,8],[55,5],[3,-1],[60,-21],[3,-1],[1,-1],[0,0],[17,-13],[103,-83],[67,-55],[1,0],[2,-1],[1,-2],[94,-114],[2,-4],[14,-16],[4,-5],[1,-1],[6,-12],[5,-10],[1,-2],[0,-1],[0,-2],[0,-3],[0,-9],[0,-11],[-1,-1],[-13,-14],[0,-1],[0,0],[-24,-8],[-1,0],[-31,-34],[-1,-1],[-39,-85],[0,0],[-26,-70],[-14,-39],[-7,-17],[-7,-20],[-1,-2],[-2,-5],[-3,-9],[-4,-12],[-2,-4],[-8,-7],[-1,-1],[-29,-29],[-46,-45],[-14,-13],[-2,-9],[-4,-14],[-3,-9],[-3,-5],[-3,-5],[-1,0],[-6,-8],[-12,-17],[0,0],[-1,-2],[-1,-1],[-43,-3],[-28,-1],[-2,0],[-1,0],[-2,0],[-1,0],[0,-1],[-13,-20],[-13,-21],[14,-30],[1,-2],[-5,-15],[-5,-14],[-15,-18],[-1,-1],[0,0],[-29,-17],[-5,-3],[-33,-20],[5,-45],[1,-1],[4,-12],[2,-4],[10,-26],[2,-4],[7,-16],[0,-1],[0,-1],[2,-3],[0,-2],[16,-38],[4,-9],[0,-2],[4,-6],[3,-6],[0,0],[1,-2],[1,-1],[15,-28],[9,-17],[2,-3],[4,-7],[1,-1],[23,-43],[1,-2],[1,-1],[0,-1],[-3,-25],[-1,-4],[0,-1],[0,0],[-3,-3],[0,0],[-40,-48],[-1,-1],[-6,-8],[-1,-2],[-1,0],[-1,-2],[-1,0],[-6,-5],[-1,-1],[-1,-1],[-1,-1],[-54,-42],[-1,0],[-39,-15],[-32,-13],[-1,0],[-13,-5],[-2,-1],[-6,-2],[0,-1],[-12,-19],[-2,-3],[-1,-4],[-20,-100],[0,-1],[0,-4],[0,-5],[0,-19],[0,0],[-13,-31],[0,0],[-8,-13],[-18,-30],[-2,-3],[-4,-6],[-19,-31],[-1,-1],[0,-1],[-40,-26],[0,0],[-2,-4],[-2,-2],[-3,-5],[0,-1],[0,-4],[0,-14],[14,-17],[1,-1],[1,-1],[18,-23],[1,0],[2,-1],[1,0],[50,-16],[14,-4],[1,0],[7,-2],[4,-2],[1,0],[1,0],[5,-2],[0,0],[1,0],[4,0],[27,-2],[13,4],[2,0],[14,10],[0,1],[36,26],[21,16],[4,3],[1,0],[43,32],[22,3],[11,6],[20,10],[7,3],[2,2],[1,0],[5,3],[5,2],[4,2],[1,1],[8,4],[24,12],[0,0],[4,2],[1,0],[17,8],[11,6],[8,4],[3,2],[4,2],[4,2],[0,0],[125,44],[8,5],[74,45],[9,5],[6,6],[48,44],[0,1],[0,0],[-4,77],[0,13],[31,26],[0,1],[31,99],[0,0],[8,11],[46,-40],[71,-63],[39,-35],[148,-121],[13,-10],[84,-70],[74,-58],[4,-2],[2,-2],[24,-19],[1,0],[13,-10],[1,-1],[13,-11],[4,-3],[1,0],[16,-13],[18,-11],[4,-3],[3,-2],[58,-37],[6,-4],[3,-2],[11,-7],[7,-3],[24,-9],[42,-14],[1,-1],[0,1],[37,23],[8,5],[1,0],[0,0],[10,2],[13,3],[0,0],[2,0],[46,9],[32,-21],[68,-44],[1,-1],[7,-5],[1,0],[1,-1],[8,-5],[5,-2],[119,-57],[7,-3],[2,-1],[0,0],[4,1],[1,1],[5,1],[5,2],[56,18]],[[125799,128585],[13,-44],[1,0],[51,-64],[2,0],[93,-25],[62,5],[160,-119],[1,0],[22,10],[85,2],[293,-197],[98,-191],[40,-3],[0,-3],[118,-319],[0,0],[55,-75],[0,0],[-3,-114],[702,-182],[70,-18],[7,-2],[2314,-605],[2,0],[207,-53],[6,-2],[46,-12],[9,-2],[7,-3],[25,-8],[101,-25],[19,-5],[134,-36],[244,-97],[249,-137],[0,0],[154,-85],[20,-11],[39,-22],[302,-165],[7,-7],[29,-39],[91,-43],[168,-17],[109,42],[34,-4],[175,-60],[14,-5],[17,-14],[16,-53],[-3,0],[18,-58],[105,-16],[77,13],[13,15],[295,151],[93,-14],[26,-89],[10,-26],[28,-19],[243,-46],[172,37],[297,-188],[166,57],[21,-54],[17,-16],[105,-22],[33,25],[98,-23],[132,-74],[77,-57],[58,-43],[105,-170],[3,-18],[-57,-79],[-66,-74],[-28,-16],[-71,-73],[-9,-20],[21,-45],[133,-121],[81,-26],[51,2],[28,1],[39,43],[177,29],[453,-228],[144,-132],[79,-73],[97,-138],[-3,-35],[-154,-66],[-2,-63],[103,-141],[15,-10],[11,-252],[-14,-327],[-23,-73],[-27,-64],[-24,-41],[-27,-19],[-147,-182],[-101,-341],[10,-15],[129,-56],[44,23],[10,29],[10,7],[155,6],[69,-12],[73,3],[120,128],[91,61],[30,-6],[40,-31],[64,-68],[36,-89],[-2,-56],[-224,-392],[5,-10],[-14,-74],[-73,-182],[-29,-23],[-8,-19],[24,-107],[14,-28],[262,-315],[255,-61]],[[136166,121292],[12,-28],[-3,-21],[-14,-7],[-11,6],[-26,-14],[-32,-33],[-56,-151],[4,-154],[-21,-185],[-116,-19],[-126,6],[-243,-41],[0,0],[0,-1],[-12,-2],[-3,0],[-53,-18],[-1,0],[-27,-9],[-4,-1],[-5,-2],[-2,0],[-2,-1],[-74,-24],[-1,-1],[-1,0],[-2,-2],[-5,-3],[-4,-2],[-4,-2],[-1,-1],[-1,0],[0,-1],[-1,0],[-4,-3],[-1,0],[0,0],[-3,-4],[-2,-3],[-1,-1],[-1,-2],[-2,-2],[-1,-1],[-57,-77],[-5,-6],[-16,-37],[-3,-29],[5,-29],[1,-3],[0,-1],[1,-2],[7,-21],[3,-8],[10,-15],[1,-2],[2,-4],[7,-11],[2,-3],[0,-1],[6,-9],[16,-26],[-19,-51],[-10,-17],[-5,-9],[-5,-9],[-34,-16],[-3,-1],[-3,-5],[-13,-23],[-5,-26],[-2,-9],[-1,-2],[-4,-8],[-4,-8],[-1,-3],[-31,-62],[-1,-3],[-20,-3],[-24,-4],[-28,-19],[-25,-17],[-12,-8],[-8,-6],[-6,-4],[-5,-4],[-3,-8],[-1,-5],[-5,-16],[-1,-5],[-2,-6],[-1,-3],[-3,-8],[-4,-10],[-18,-43],[-27,-67],[-18,-42],[-8,-20],[-4,-9],[-53,-111],[-37,-15],[-20,-19],[-29,-28],[-29,-49],[-38,-64],[-1,-3],[-2,-12],[0,0],[-1,-4],[0,-4],[-1,-4],[-6,-45],[0,-2],[-4,-31],[-1,-3],[-4,-34],[-2,-15],[-1,-3],[0,-1],[0,-2],[-1,-7],[-1,-44],[-1,-39],[0,-7],[-32,-16],[-5,-2],[-7,-4],[0,-3],[-2,-7],[-2,-11],[-15,-69],[-9,-43],[1,-27],[0,-4],[0,-1],[0,-1],[3,-8],[5,-12],[1,-3],[0,-1],[1,-2],[2,-4],[19,-51],[8,-23],[1,-1],[-12,-27],[-38,-7],[-9,-30],[-1,-4],[-5,-17],[0,0],[-11,-19],[-13,-20],[-15,-26],[-4,-2],[-23,-7],[-6,-2],[0,0],[-11,-12],[-2,-2],[-6,-7],[0,0],[0,-4],[-1,-3],[0,-2],[-1,-2],[0,-3],[-2,-12],[0,-4],[19,-19],[60,-61],[15,-14],[41,-41],[20,-7],[4,-2],[2,0],[27,-10],[2,-1],[16,-5],[12,-4],[18,-7],[27,-9],[98,-3],[14,8],[16,9],[24,15],[19,24],[24,33],[1,3],[5,7],[53,96],[0,0],[0,0],[2,6],[5,14],[2,5],[0,1],[-1,2],[-4,7],[-2,4],[-1,3],[-1,1],[-9,18],[5,9],[4,7],[18,11],[7,5],[10,6],[0,0],[3,4],[13,13],[71,76],[4,4],[91,51],[17,10],[5,3],[19,11],[6,4],[21,17],[13,10],[40,31],[1,1],[2,0],[73,9],[48,6],[35,13],[10,11],[2,2],[23,22],[1,1],[18,35],[7,39],[2,15],[46,49],[8,9],[15,16],[36,55],[5,72],[0,0],[0,1],[-6,29],[-2,6],[-4,20],[2,17],[1,5],[0,5],[2,3],[22,27],[31,38],[1,1],[4,6],[4,7],[9,14],[1,2],[1,1],[7,11],[0,0],[1,2],[1,1],[36,58],[3,3],[28,37],[5,6],[2,2],[58,75],[52,67],[6,7],[4,9],[2,5],[0,0],[0,0],[28,60],[6,8],[0,0],[3,4],[0,0],[0,0],[2,2],[2,3],[2,2],[0,0],[1,1],[39,48],[20,26],[1,1],[16,20],[3,3],[3,4],[1,1],[0,0],[1,0],[103,66],[1,0],[30,7],[8,-1],[40,-4],[36,-4],[1,0],[56,24],[13,6],[1,1],[58,60],[2,-1],[3,-2],[1,-1],[5,-2],[26,-14],[2,-1],[0,0],[7,-4],[3,-2],[10,0],[75,-3],[21,20],[59,56],[56,53],[16,15],[14,0],[1,0],[18,-10],[26,-14],[2,-1],[5,-11],[0,-1],[0,-1],[-3,-45],[2,-5],[31,-58],[3,-6],[5,-3],[11,-6],[0,-1],[76,27],[1,19],[3,59],[0,3],[0,0],[1,13],[0,2],[0,2],[-7,24],[-2,3],[-1,2],[0,0],[-1,0],[-15,21],[0,0],[-1,1],[-1,2],[-3,4],[-1,2],[-4,5],[-13,9],[-1,1],[-1,0],[-11,8],[-5,3],[-16,11],[3,25],[1,11],[25,66],[17,43],[0,0],[1,3],[1,1],[15,17],[6,7],[8,15],[2,2],[8,16],[28,52],[7,19],[1,4],[0,1],[3,7],[6,19],[25,70],[11,34],[33,47],[23,35],[31,46],[1,0],[52,103],[1,0],[22,29],[31,40],[15,18],[0,0],[1,2],[1,1],[1,1],[6,5],[1,1],[2,1],[58,48],[0,0],[55,68],[2,2],[0,0],[14,18],[16,54],[0,1],[0,67],[11,77],[13,23],[13,25],[35,31],[2,2],[-7,44],[-2,13],[16,85],[1,3],[0,0],[0,0],[23,25],[3,3],[26,9],[6,2],[1,0],[1,-2],[3,-4],[24,-40],[4,-1],[20,-3],[28,-6],[16,-3],[2,0],[74,49],[0,0],[5,9],[9,16],[0,1],[4,6],[1,1],[6,12],[0,0],[4,7],[15,9],[57,27],[0,0],[18,3],[35,7],[1,0],[11,-5],[5,-2],[15,-6],[3,-1],[13,6],[0,0],[0,0],[0,5],[1,1],[0,3],[0,1],[0,2],[0,0],[0,1],[0,0],[0,5],[0,1],[0,4],[0,1],[0,1],[1,30],[0,1],[0,1],[0,13],[0,1],[0,0],[-1,2],[-6,19],[-1,0],[0,0],[-1,27],[-1,5],[0,2],[0,1],[0,6],[-2,19],[0,6],[4,16],[1,6],[1,0],[14,56],[3,13],[0,1],[26,68],[1,6],[1,2],[2,1],[24,9],[86,34],[27,72],[0,1],[49,61],[15,-24],[2,-3],[0,-1],[4,-5],[1,-1],[3,-1],[7,-2],[18,-3],[1,0],[1,1],[1,0],[6,3],[27,11],[0,0],[48,43],[15,14],[4,0],[80,-6],[2,-1],[1,0],[33,-11],[1,-1],[2,0],[1,-1],[11,-13],[9,-10],[0,0],[27,-60],[-9,-19],[-2,-4],[-4,-9],[0,-1],[-1,0],[-10,-11],[-23,-23],[-3,-3],[0,-5],[-2,-22],[0,-1],[3,-17],[4,-23],[2,-8],[1,0],[21,-14],[12,1],[1,0],[-2,-7],[0,0],[0,-1],[0,-3],[-2,-7],[-17,-76],[0,-1],[-8,-18],[-4,-7],[-4,-8],[-2,-6],[-8,-18],[-8,-2],[-28,-9],[-6,-2],[-10,-4],[-10,-3],[-9,9],[-1,1],[0,2],[-7,39],[-1,0],[-91,1],[0,0],[0,0],[-7,-12],[-24,-41],[0,-1],[0,-5],[0,0],[-1,-1],[-17,-180],[0,-1],[1,-21],[0,-2],[0,0],[0,-3],[0,-20],[1,-28],[0,-1],[4,-4],[11,-11],[10,-10],[7,-6],[9,-10],[14,-14],[4,-4],[1,-1],[0,0],[0,-1],[-4,-6],[0,0],[-4,-6],[-1,0],[-3,-5],[0,-1],[-1,-1],[-2,-2],[0,-1],[0,0],[-2,-1],[0,0],[-4,-3],[0,0],[-3,-2],[-1,-1],[-16,-12],[-5,-3],[-2,-2],[-1,0],[-13,-10],[-31,-74],[0,0],[12,-19],[1,-5],[5,-25],[1,-1],[0,-1],[1,-5],[0,-5],[2,-67],[0,-8],[0,-17],[0,0],[-9,-2],[-24,-6],[0,0],[-3,-6],[-14,-26],[-4,-8],[0,-1],[-1,0],[-6,-4],[-53,-38],[-1,0],[-2,-18],[-2,-12],[-4,-28],[-2,-1],[-14,-8],[-17,-9],[-3,-1],[0,0],[-2,0],[-15,2],[-4,1],[-87,12],[-13,-26],[0,-11],[0,-2],[0,-6],[0,-3],[0,-22],[0,-4],[0,-6],[-28,-76],[-7,-20],[-14,-37],[-5,-14],[-6,-1],[-48,-16],[-34,-20],[0,-1],[0,0],[-15,-25],[-2,-3],[-5,-10],[-1,-1],[0,-1],[-43,-76],[-2,-3],[-3,-8],[-18,-38],[-5,-12],[-1,-2],[0,-1],[0,-2],[3,-79],[0,-18],[1,-2],[1,-1],[29,-26],[18,-15],[13,-41],[-12,-18],[-28,-7],[-12,-4],[-3,0],[-5,-3],[-60,-40],[-42,-50],[-1,-1],[0,-3],[0,0],[0,-3],[-4,-37],[0,0],[0,-1],[2,-2],[15,-22],[12,-18],[11,-16],[0,-3],[5,-41],[0,0],[1,-8],[-1,0],[-24,-15],[-49,-31],[-78,-48],[-77,-47],[-1,-1],[-1,-1],[-26,-57],[-5,-10],[-24,-91],[-45,-28],[-36,-23],[-10,-16],[-22,-35],[-1,-2],[0,0],[-1,-1],[-1,-3],[-6,-10],[-16,-30],[2,-29],[2,-30],[1,-6],[0,-1],[0,-2],[-4,-8],[-3,-8],[-61,-150],[-6,-24],[-3,-12],[-5,-21],[-1,-4],[-7,-31],[-17,-38],[-5,-12],[-16,-36],[-1,-2],[-1,-1],[-25,-42],[-25,-41],[-1,-2],[-18,-42],[-19,-45],[-31,-71],[-25,-58],[-29,-46],[-8,-11],[-6,-9],[-46,-32],[-65,-71],[-7,-7],[-1,-2],[-33,-91],[-74,-162],[-1,-1],[0,-2],[-3,-5],[-18,-63],[-32,-115],[-7,-24],[-1,-27],[0,-7],[0,-3],[-11,-61],[-11,-71],[-9,-22],[-8,-22],[-2,-5],[0,0],[-13,-33],[-1,-5],[0,0],[0,-1],[-1,-10],[-2,-8],[0,-1],[-9,-61],[-15,-97],[-5,-11],[-14,-35],[-1,-2],[-2,-10],[-2,-9],[-10,-40],[-9,-39],[1,-21],[1,-71],[-1,-2],[-1,-4],[-4,-12],[-7,-23],[-2,-4],[-44,-77],[0,0],[-29,-99],[-5,-18],[-9,-30],[2,-71],[0,-1],[0,-1],[12,-63],[1,-2],[0,-2],[0,0],[1,-1],[53,-124],[0,-1],[1,-1],[1,-4],[1,0],[0,-1],[0,0],[1,-1],[0,-1],[0,-1],[1,-1],[2,-4],[0,-2],[1,-2],[4,-9],[1,-3],[1,-2],[3,-6],[0,-1],[2,-5],[0,0],[22,-67],[0,0],[0,-1],[25,-77],[0,0],[0,-1],[4,-93],[-20,-89],[-25,-64],[-74,-100],[-37,-34],[-48,-43],[-2,-1],[-13,-5],[-2,-2],[-10,-4],[-96,-43],[-5,-2],[-4,-2],[-7,-3],[-10,-6],[-64,-43],[-90,-82],[-3,-3],[-1,-2],[-3,-11],[0,0],[-14,-52],[-13,-45],[-1,-3],[6,-73],[0,-6],[-9,-69],[0,-1],[-56,-72],[-44,-85],[-11,-38],[-19,-63],[-13,-45],[-2,-6],[0,0],[-12,-117],[-1,-1],[-4,-10],[0,-2],[-9,-21],[0,-1],[-5,-11],[-2,-4],[-7,-10],[-11,-15],[-24,-35],[-8,-21],[-3,-8],[0,0],[0,-4],[-4,-20],[-1,-6],[-1,-8],[-2,-12],[-3,-18],[-6,-36],[-2,-12],[-9,-55],[0,-1],[0,-1],[-7,-20],[-1,-4],[-6,-21],[0,0],[-3,-8],[-9,-29],[-2,-9],[-4,-12],[-3,-9],[1,-33],[4,-16],[23,-89],[0,-4],[-2,-55],[-2,-44],[7,-63],[4,-31],[1,-12],[0,0],[0,0],[96,-213],[0,-1],[1,-28],[0,-1],[-11,-58],[0,-1],[-6,-16],[-2,-6],[-11,-10],[0,-1],[-1,0],[-5,-35],[6,-64],[1,-4],[17,-75],[1,-3],[1,-93],[-4,-11],[-9,-29],[0,0],[-74,-144],[-26,-51],[-3,-5],[-3,-5],[-1,-2],[-2,-3],[-1,-2],[-6,-11],[-3,-5],[-14,-24],[0,0],[-138,-242],[-4,-7],[-4,-9],[-25,-58],[-3,-9],[-1,-4],[-10,-66],[-5,-30],[-12,-78],[1,-82],[15,-89],[-53,-157],[-72,-130],[-104,-146],[-34,-59],[-9,-21],[-6,-15],[-12,-30],[-19,-54],[-18,-85],[-21,-186],[0,-6],[0,0],[0,0],[-1,0],[0,-1],[-3,-28],[-31,-79],[-9,-23],[-6,-14],[-4,-19],[-1,-2],[0,-1],[-1,-5],[-3,-14],[-8,-37],[0,0],[0,-1],[0,-1],[0,0],[0,0],[0,0],[-1,0],[-2,-12],[0,0],[0,0],[-6,-29],[-5,-22],[-5,-24],[1,-12],[4,-57],[1,-3],[47,-178],[0,0],[0,0],[0,-3],[3,-12],[3,-4],[13,-21],[13,-21],[3,-6],[5,-16],[5,-17],[0,0],[1,-1],[13,-45],[-19,-51],[-9,-24],[-2,-5],[0,0],[-1,-3],[-5,-14],[-5,-12],[-14,-26],[-7,-15],[-4,-6],[-4,-9],[-4,-20],[0,0],[0,-2],[3,-34],[0,-1],[0,0],[27,-59],[51,-61],[5,-5],[6,-8],[14,-46],[0,-1],[0,0],[0,-2],[2,-4],[5,-19],[15,-50],[0,0],[-14,-50],[0,0],[-19,-29],[-4,-5],[-20,-31],[-1,0],[0,-1],[-28,-26],[-18,-16],[-1,-1],[0,0],[0,-1],[-4,-20],[-2,-7],[-6,-30],[-1,-9],[6,-41],[1,-4],[1,-6],[1,-5],[1,-9],[9,-21],[15,-39],[1,-2],[1,-3],[3,-9],[1,-1],[0,0],[33,-41],[79,-71],[44,-79],[1,-16],[4,-32],[1,-9],[2,-28],[1,-1],[0,-3],[-7,-101],[-8,-114],[-4,-55],[0,-2],[7,-25],[40,-136],[14,-34],[15,-38],[6,-15],[5,-13],[3,-6],[3,-5],[68,-90],[1,-1],[27,-38],[8,-11],[15,-12],[14,-12],[1,-1],[45,-38],[0,0],[26,-42],[-12,-56],[-6,-10],[-22,-39],[-3,-5],[-2,-11],[-7,-38],[-1,-4],[-3,-18],[-1,-4],[1,-9],[1,-6],[0,0],[1,-9],[6,-51],[3,-20],[1,-6],[-7,-43],[-6,-43],[-1,-9],[-4,-15],[-2,-7],[-4,-14],[-6,-1],[-30,-53],[-27,-66],[-2,-5],[-1,0],[0,-1],[0,0],[0,-1],[-9,-31],[-1,-4],[-5,-18],[-10,-38],[0,0],[-5,-20],[-8,-27],[-4,-17],[-18,-132],[-1,-8],[1,-45],[14,-53],[2,-9],[15,-34],[-2,-12],[-5,-21],[-1,-7],[0,-12],[0,-20],[0,-2],[1,-70],[1,-31],[0,-22],[1,-88],[10,-75],[34,-113]],[[75813,110907],[1,-1220],[0,-23],[1,-495],[0,-80],[0,-15],[0,-95],[0,-1],[0,-4],[0,-1748],[-1,-41],[1,-395],[0,-17],[-1,-146],[1,-18],[0,-43],[-1,-178],[0,-70],[0,-264],[1,-27],[0,-72],[0,-16],[0,-18],[-1,-2],[0,-92],[1,-15],[-1,-288],[0,-43],[0,-103],[1,-754],[-1,-176],[0,-261],[0,-35],[0,-76],[1,-45],[-1,-107],[1,-138],[0,-58],[0,0],[0,-57],[0,-10],[1,-83],[0,-33],[0,-485],[1,-51],[-1,-71],[0,0],[0,-358],[0,-1],[-1,-23],[1,-189],[-1,-1],[0,-13],[-2,-798],[0,-47],[1,-72],[-1,-3],[0,-356],[0,-6],[0,-76]],[[57494,100991],[-576,4],[-1720,-15],[-137,-1],[-6,0],[-509,-3],[-4,0],[-529,-1],[-4,0],[-175,-1],[-1658,-12],[-2001,16],[0,1258],[0,540],[1,85],[0,1002],[-1,2091]],[[50175,105954],[-2,699],[0,32],[0,167],[0,60],[0,426],[0,340],[3,812],[9,2238],[0,25],[0,27],[-1,217],[0,6],[0,13],[1,10],[0,1],[0,8],[-1,14],[1,60],[-1,16],[0,9],[0,42],[0,27],[0,29],[0,10],[0,21],[0,519],[0,1],[0,36],[0,23],[0,32],[-2,595],[-2,920],[-2,783],[0,109],[-1,19],[0,4],[0,10],[-1,170],[0,22],[0,2],[-1,441],[-5,829],[-3,384],[0,2],[1,10],[-2,1849],[0,11],[0,179]],[[75796,120807],[7,-1136],[0,-1],[0,-220],[0,-1],[1,-114],[-1,-33],[0,-12],[0,-597],[0,-137],[0,-127],[5,-1673],[0,-194],[-1,-1007],[-1,-8],[0,-411],[0,-511],[0,-17],[1,-809],[0,-2],[0,-20],[-1,-103],[1,-274],[0,-2],[0,-125],[0,-242],[1,-189],[1,-322],[0,-107],[1,-36],[0,-36],[3,-1434]],[[134207,47856],[139,-118],[44,-53],[-4,-15],[-11,-6],[-112,-14],[-39,20],[-62,15],[-109,0],[-153,-22],[-264,-72],[-89,-11],[-32,10],[13,16],[37,-7],[70,10],[82,28],[124,30],[188,34],[55,0],[63,13],[38,35],[22,57],[0,50]],[[145653,51411],[-79,0],[-13,0],[-9,0],[-4,0],[-77,-1],[-10,0],[-10,0],[-323,1],[-23,1],[-1,0],[-8,0],[-1224,-19],[-35,-1],[-2,0],[-1967,-18],[-64,0],[-14,-1],[-391,3],[-22,0],[-23,1],[-19,1],[-25,0],[-374,-1],[-57,1],[-221,2],[-16,0],[-19,0],[-52,-1],[0,0],[-12,0],[-47,-1],[-183,-1],[-13,1],[-200,-2],[-26,-2],[-159,10],[-16,-1],[-356,-3],[-50,0],[-36,3],[-136,9],[-7,0],[-4,-1],[-210,1],[-1,0],[-163,3],[-6,-1],[-150,2],[-56,-1],[-509,9],[-34,0],[-13,1],[-51,-2],[-38,0],[-16,0],[-345,0],[-2,0],[-337,-4],[-2,0],[-5,0],[-4,0],[-6,-1],[-3,1],[-18,0],[-86,0],[-8,0],[-38,1],[-9,-2],[-30,2],[-80,-1],[-80,0],[-30,0],[-14,0],[-213,-1],[-24,1],[-64,0],[-21,0],[-11,0],[-11,0],[-1,0],[-18,-1],[0,0],[-44,1],[-3,0],[-2,0],[-251,-2],[-83,0],[-102,-2],[0,0],[18,-105],[-26,-198],[-77,-193],[-47,-156],[40,-100],[336,-507],[108,-105],[20,-11],[60,-18],[117,-87],[155,-135],[37,-90],[10,-59],[-1,-82],[-203,-548],[0,-1],[6,-7],[65,-109],[41,-401],[-30,-9],[-48,-84],[-40,-120],[2,-104],[3,-174],[-8,-54],[-242,-98]],[[136430,47840],[-96,-24],[-50,-6],[-85,-26],[-277,-97],[-288,-44],[-239,-56],[-139,-11],[-321,16],[-132,-5],[-139,-18],[-53,-17],[-51,-6],[-3,8],[19,38],[210,26],[65,103],[48,25],[65,-41],[16,-27],[49,-31],[27,-11],[50,-4],[71,9],[155,69],[58,-6],[52,6],[78,40],[41,74],[-1,69],[-63,102],[-88,62],[-46,42],[-75,105],[-27,77],[-29,40],[-32,5],[-41,25],[-152,128],[-9,24],[-19,158],[-22,122],[-15,27],[-28,25],[-6,31],[82,191],[21,58],[13,66],[-9,75],[-13,35],[-13,16],[-13,47],[9,149],[-25,100],[-43,83],[-21,23],[-71,7],[-92,81],[-100,48],[-14,-8],[-36,-46],[-17,-62],[-29,-38],[-35,-6],[-65,-38],[9,-128],[20,-33],[-40,-120],[-36,-46],[-39,-78],[14,-84],[-4,-87],[-29,-26],[-38,-68],[-10,-44],[3,-39],[22,-109],[-14,-49],[-21,-42],[9,-126],[-12,-248],[-30,-103],[-34,-74],[-12,-15],[-30,-88],[-72,32],[-59,-13],[-72,-38],[-15,21],[-10,87],[7,24],[29,7],[0,15],[-42,71],[-17,-1],[-206,100],[-80,3],[-29,-60],[-77,-10],[-18,6],[-12,51],[-46,40],[-33,5],[-83,-7],[-39,-12],[-75,-80]],[[163074,23354],[-16,-27],[-19,-58],[-30,-20],[-73,-188],[-71,-125],[-161,-332],[-10,-31],[16,-77],[-32,-73],[-68,-117],[-83,-109],[-105,-64],[-10,-31],[-45,-66],[-69,-30],[-43,-48],[-73,-108],[17,-36],[-21,-41],[-158,-162],[-102,-159],[-22,-23],[-60,-12],[-29,-15],[-57,-48],[-88,-126],[-87,-77],[-7,11],[4,26],[34,16],[35,30],[64,84],[4,22],[-5,17],[9,26],[90,70],[59,31],[11,-9],[27,-3],[44,46],[53,141],[4,37],[-10,36],[78,11],[57,57],[28,65],[21,30],[25,13],[28,32],[75,110],[-17,39],[-18,14],[-42,12],[-47,51],[38,36],[25,-10],[5,-40],[44,-31],[50,-22],[20,21],[42,66],[0,42],[-52,164],[4,17],[122,-70],[37,23],[28,44],[31,100],[-4,59],[-14,47],[18,30],[63,41],[41,3],[33,17],[45,103],[14,112],[-9,38],[-24,33],[-94,70],[16,21],[90,17],[17,-20],[22,3],[48,38],[85,100],[11,53],[50,94],[41,51],[28,34],[9,97],[13,53],[17,35],[74,39],[26,23],[18,30],[28,85],[26,120],[26,74],[9,62],[-7,47],[11,62],[35,55],[17,-3],[2,-176],[-36,-71],[-74,-279],[-66,-73],[-58,-177],[-9,-73],[-35,-21],[-2,-5]],[[158189,19967],[9,52],[65,118],[19,-2],[57,-57],[25,-8],[60,41],[9,62],[15,17],[78,32],[53,6],[9,-25],[18,-10],[37,15],[18,17],[9,19],[-3,107],[-15,20],[20,36],[38,-60],[8,-41],[11,-16],[13,-5],[33,45],[6,28],[-21,41],[-12,7],[-2,22],[20,6],[84,-19],[36,-28],[9,-25],[3,-35],[15,-25],[92,-87],[53,-6],[98,-31],[16,-47],[3,-55],[16,-78],[43,-41],[-2,-12],[-17,-13],[-109,-60],[-228,-92],[-25,13],[-5,83],[-40,34],[-67,-6],[-59,-29],[-80,9],[-39,16],[-3,11],[14,12],[6,17],[-15,32],[-67,26],[-16,-20],[-9,-31],[-12,-52],[-1,-63],[-8,-31],[-27,-24],[-102,-27],[-207,-141],[-225,-66],[-38,-44],[-39,-28],[-23,6],[-150,-17],[-123,-22],[-74,-27],[-88,-9],[-10,9],[-6,84],[12,31],[39,6],[24,75],[74,-6],[95,26],[32,-1],[17,-29],[15,-10],[54,29],[1,23],[37,25],[22,0],[19,-28],[27,3],[30,25],[36,51],[48,42],[69,25],[81,106],[1,39],[62,24],[36,3],[18,13]],[[156108,19559],[28,84],[28,17],[37,3],[77,-45],[12,-18],[6,-60],[-19,-57],[-45,-59],[-156,-5],[-21,20],[2,55],[51,65]],[[159410,20040],[14,12],[11,-9],[-6,-24],[-136,-77],[13,34],[67,71],[37,-7]],[[160656,20574],[14,-56],[-21,-24],[-98,13],[-283,-237],[-29,-14],[-18,18],[-14,33],[-7,0],[-110,-59],[-24,-18],[-18,-37],[-10,-38],[1,-21],[-109,-19],[-59,81],[-4,17],[66,22],[7,-7],[23,3],[118,59],[60,68],[32,27],[19,-1],[5,-14],[48,-34],[19,8],[83,46],[29,43],[96,57],[183,90],[1,-6]],[[159162,20456],[44,-4],[54,-97],[9,-80],[-54,-33],[-28,64],[-28,12],[-31,-6],[-86,90],[-26,52],[54,-3],[55,30],[11,24],[26,-49]],[[160727,20626],[22,0],[2,-6],[-31,-22],[-52,-11],[59,39]],[[161102,20788],[-8,-32],[-20,-29],[-97,3],[-87,-48],[-15,-2],[-2,6],[17,19],[59,33],[57,68],[80,79],[45,-17],[-29,-80]],[[161319,20992],[34,-4],[62,81],[41,24],[5,-21],[-47,-60],[-31,-30],[-182,-135],[-21,0],[79,72],[18,33],[30,37],[12,3]],[[155723,30105],[2,23],[31,-8],[15,-60],[-13,-29],[-2,-25],[34,-107],[70,-176],[14,-116],[66,-214],[33,-160],[36,-125],[42,-63],[62,-60],[65,-3],[42,-17],[116,-91],[42,54],[53,20],[88,-65],[84,-11],[7,-3],[-1,-10],[-180,-132],[-44,-17],[-29,0],[-56,14],[-104,56],[-81,95],[-89,61],[-15,19],[-13,24],[-21,64],[-55,332],[-15,51],[-61,118],[-62,229],[-35,88],[-53,95],[-18,47],[13,77],[32,25]],[[146479,44999],[174,156],[47,50],[74,104],[9,-27],[-2,-13],[-69,-102],[-189,-206],[-43,-38],[-81,-52],[-201,-84],[-113,-62],[-268,-196],[-288,-118],[-54,-10],[-13,26],[-54,65],[-95,86],[-7,13],[8,13],[104,-88],[103,-52],[55,-12],[23,36],[108,29],[71,35],[131,99],[25,38],[20,18],[90,44],[124,75],[178,72],[56,61],[77,40]],[[145089,44861],[69,23],[11,11],[74,11],[75,-19],[37,-29],[24,-40],[-52,-111],[-21,-77],[-102,-23],[-65,35],[-73,73],[-80,68],[-73,44],[-67,26],[8,11],[42,8],[89,4],[59,-1],[45,-14]],[[153648,36357],[-30,20],[4,254],[21,55],[0,69],[-12,43],[-20,47],[-17,51],[12,45],[9,15],[17,-7],[11,-77],[17,-53],[18,-101],[-6,-122],[-23,-21],[-1,-29],[16,-52],[8,-91],[-24,-46]],[[158698,49968],[42,-33],[19,-25],[-12,-142],[-45,-339],[2,-227],[31,-162],[-32,-62],[-16,-31],[26,-30],[51,-5],[56,-73],[14,-297],[35,-106],[4,-301],[18,-181],[22,-147],[21,-104],[89,-448],[170,-957],[51,-203],[23,-66],[45,-73],[23,-86],[21,-124],[5,-186],[24,-178],[58,-226],[44,-121],[59,-218],[5,-18],[176,-554],[145,-401],[81,-235],[202,-591],[188,-505],[107,-288],[80,-184],[136,-231],[50,-139],[56,-127],[335,-671],[201,-417],[70,-145],[0,0],[1,-3],[11,-23],[5,-7],[133,-228],[33,-56],[56,-96],[1,-1],[1,-3],[6,-10],[16,-31],[9,-17],[28,-54],[53,-102],[121,-183],[33,-62],[27,-114],[24,-156],[91,-259],[40,-95],[-6,-38],[-132,-69],[-42,-50],[-50,-84],[-30,-100],[-27,-132],[-13,-136],[-4,-125],[14,-266],[52,-395],[87,-409],[68,-232],[143,-388],[227,-538],[-1,-6],[0,-5],[233,-594],[117,-483],[4,-70],[23,-60],[49,-93],[23,-141],[12,-58],[35,-163],[39,-120],[29,0],[102,-396],[43,-202],[74,-191],[25,-92],[101,-296],[22,-66],[116,-282],[30,-116],[-23,-30],[36,-98],[41,-159],[80,-194],[84,-267],[53,-238],[47,-213],[75,-339],[54,-311],[-3,-123],[-15,-2],[-4,-24],[17,-254],[0,-71],[-11,-123],[2,-316],[-13,-213],[-42,-296],[-38,-322],[-36,-537],[-7,-5],[-9,-71],[-2,-12],[-17,-269],[-20,-75],[-14,-86],[-44,-417],[-15,-255],[-5,-17],[-8,-23],[-2,-6],[-11,-168],[-20,-331],[0,-56],[0,-294],[-11,-162],[4,-209],[-8,-115],[-20,-132],[-2,-94],[-35,-109],[-24,-47],[-32,-188],[-5,-97],[7,-32],[-10,-56],[-22,-3],[-58,100],[24,126],[21,56],[-6,35],[-24,44],[-44,39],[-47,-6],[-116,-59],[-41,-41],[-15,-35],[-22,-145],[-57,-147],[-4,-32],[-37,-73],[-41,-33],[-31,-41],[-17,-44],[-15,-100],[0,-88],[13,-38],[-44,-142],[-39,-17],[-15,-15],[-39,-165],[0,-103],[9,-64],[32,-112],[28,-29],[-21,-71],[2,-123],[19,-33],[37,-9],[13,-26],[-13,-56],[-91,-171],[-63,-44],[-34,-11],[-45,-50],[-33,-80],[-11,-64],[-122,-124],[-68,-51],[-34,-25],[-58,-58],[-18,-19],[-2,-3],[-5,-7],[-49,-69],[-16,-43],[-2,-5],[-1,-1],[-26,-36],[-3,1],[-8,2],[-1,1],[-16,14],[0,1],[-17,16],[-2,1],[0,0],[-17,50],[-7,5],[-2,1],[-18,14],[-11,-4],[-9,-7],[-17,-12],[-39,10],[-4,18],[4,15],[1,24],[-29,34],[-35,12],[-46,2],[-68,-77],[6,-80],[10,-35],[0,0],[-35,-36],[-26,-27],[-30,-30],[0,0],[-34,-23],[0,0],[-55,-2],[-22,-1],[-1,0],[-2,-1],[-6,-4],[-12,-8],[0,0],[-1,-2],[-9,-19],[-3,-5],[-28,-3],[-14,-1],[-34,-3],[-16,-1],[-20,-2],[-15,-1],[-16,-9],[-25,-35],[-23,-55],[-9,-37],[-41,9],[-25,21],[-25,-4],[-22,-4],[-14,-2],[-16,-3],[-13,30],[0,33],[-20,42],[-21,15],[-139,28],[-3,0],[-69,-37],[-7,-4],[-24,-12],[-11,-6],[0,0],[0,0],[-2,7],[-1,3],[-4,10],[-6,18],[-30,33],[-20,7],[-10,4],[0,0],[-43,-2],[-2,-1],[-57,-10],[-2,0],[-2,-1],[-1,0],[-12,-8],[-1,-1],[-46,-31],[-28,-19],[-2,-1],[-1,-2],[-3,-26],[-2,-13],[0,0],[5,-16],[5,-15],[-6,-39],[0,0],[-1,0],[-6,1],[-15,2],[-35,5],[0,0],[-56,-19],[-20,-7],[-9,-3],[-6,-2],[-8,-3],[-1,0],[-41,5],[-4,0],[-2,0],[-5,1],[-4,-1],[-33,-5],[0,0],[-1,0],[0,0],[-9,-2],[-1,0],[-1,0],[-3,-1],[0,0],[0,0],[-5,-2],[-15,-7],[-54,-26],[-8,-4],[-19,-9],[-2,0],[-36,6],[-49,20],[-8,-1],[-30,-1],[-17,-1],[-42,-3],[0,0],[0,0],[-2,0],[-2,0],[-108,-47],[-53,41],[-64,91],[-32,34],[-47,20],[-28,38],[-4,94],[-1,3],[-2,4],[-14,44],[-31,72],[-1,2],[-1,1],[-45,52],[-12,14],[-3,3],[1,7],[2,54],[0,9],[1,42],[1,5],[4,17],[1,3],[1,3],[3,13],[23,182],[10,44],[26,34],[12,62],[-11,33],[14,40],[30,41],[22,10],[46,-21],[12,32],[3,48],[-41,127],[-47,4],[-34,29],[0,59],[13,26],[1,16],[-80,279],[-40,57],[-45,47],[-60,100],[-7,59],[25,86],[-4,23],[-18,48],[-60,49],[-26,74],[-1,66],[-28,61],[0,73],[-49,121],[-55,93],[-31,40],[-47,112],[-142,147],[-22,-8],[-41,29],[1,75],[7,55],[-10,32],[-31,31],[-16,30],[-8,31],[62,48],[16,21],[-4,40],[-11,43],[-17,67],[-13,26],[-35,12],[-87,76],[-31,60],[-84,65],[-25,13],[-18,-11],[-45,-8],[-63,25],[-48,63],[-8,34],[-50,0],[-50,-22],[-29,0],[-14,12],[4,51],[-15,16],[-43,8],[-50,-6],[-132,-55],[-27,-2],[-110,26],[-32,15],[-61,3],[-17,1],[-36,-21],[-34,-40],[-33,-143],[-20,-57],[-24,10],[-18,27],[-86,222],[-17,23],[-34,25],[-18,121],[-23,52],[-27,38],[-15,53],[7,168],[-11,20],[-25,10],[-18,28],[-144,408],[-26,317],[-21,104],[-8,168],[-14,147],[-46,286],[-42,165],[-5,13],[-85,240],[-120,159],[-3,27],[-33,54],[-44,47],[-54,42],[-67,36],[-28,28],[-10,24],[3,11],[-12,57],[-41,22],[-60,19],[-44,-4],[-17,34],[17,71],[-57,37],[-70,34],[-86,-31],[-17,-103],[-84,-42],[-40,0],[-23,282],[-26,100],[-12,91],[-57,288],[-45,82],[-115,137],[6,74],[23,26],[80,11],[47,-5],[48,-17],[25,-43],[47,-117],[23,-23],[25,14],[23,97],[7,86],[19,71],[48,128],[17,138],[2,19],[0,74],[23,66],[-10,97],[-2,82],[6,100],[-8,89],[-28,28],[-88,31],[-9,89],[11,82],[25,23],[57,0],[21,17],[2,37],[-6,57],[-49,40],[-116,-3],[-18,-9],[-15,-8],[-28,-42],[-46,-97],[-91,-3],[-27,-12],[-21,-31],[8,-97],[61,-225],[34,-308],[-15,-31],[-80,-23],[-21,-31],[-112,-2],[-46,-1],[-38,54],[-4,6],[-3,-4],[-29,-45],[-33,-91],[-32,-191],[-15,41],[-3,155],[-18,138],[-8,24],[-36,107],[-28,82],[-46,69],[-183,331],[-88,187],[-91,193],[-69,177],[-97,198],[-53,195],[-19,53],[-13,15],[-30,137],[-129,328],[-100,232],[-20,33],[-51,39],[-40,53],[2,95],[-25,53],[-79,131],[-96,131],[-69,137],[0,0],[-119,171],[-61,64],[3,35],[-62,215],[-24,63],[-37,66],[-68,86],[-10,39],[12,2],[126,-78],[-9,-108],[14,-17],[60,-9],[15,3],[-2,54],[12,25],[33,33],[46,15],[42,2],[17,52],[51,91],[74,95],[-4,58],[1,2],[4,10],[55,44],[44,9],[51,64],[18,34],[27,114],[14,32],[64,138],[84,162],[71,66],[46,5],[17,15],[5,34],[-3,27],[-19,36],[15,18],[76,32],[84,58],[10,19],[-8,29],[55,98],[2,47],[28,38],[29,9],[35,123],[-15,70],[-19,153],[-41,93],[-68,0],[-70,31],[-31,20],[1,26],[-9,16],[-58,38],[-43,-40],[-5,-26],[13,-96],[-2,-156],[29,-51],[31,-30],[10,-20],[-13,-102],[-10,-8],[-54,8],[-78,27],[-157,101],[4,71],[53,10],[19,29],[13,34],[-35,37],[-13,28],[4,15],[22,22],[16,29],[-8,144],[-28,79],[-46,90],[-131,19],[-110,-6],[-107,-17],[-249,-39],[-14,-13],[-13,-38],[7,-31],[2,-8],[4,-15],[1,-4],[37,-40],[68,-17],[24,-43],[50,-16],[159,-13],[-23,-33],[8,-63],[81,-87],[154,51],[1,-11],[3,-117],[-116,-2],[14,-70],[20,-38],[10,-94],[-77,-89],[-56,-94],[-28,-129],[20,-105],[-3,-28],[-29,-82],[-22,-33],[-47,-18],[-38,10],[-1,1],[-16,9],[-5,2],[-6,4],[-1,1],[-3,1],[0,0],[-2,0],[-3,1],[-4,0],[-12,1],[-6,-51],[-1,-7],[-53,28],[-73,-8],[-19,-33],[-15,-103],[5,-36],[19,-62],[14,-24],[53,-38],[-25,-67],[-103,-62],[-13,22],[-3,29],[-2,18],[-4,50],[4,347],[-9,56],[-21,65],[-28,25],[-26,44],[-34,113],[-48,78],[-26,39],[-111,110],[-29,42],[-66,159],[-10,44],[-7,115],[12,118],[26,134],[34,123],[24,-9],[11,-17],[-33,-128],[-28,-108],[23,0],[42,90],[44,128],[12,35],[28,151],[19,102],[0,105],[37,116],[-4,250],[6,70],[3,36],[-20,86],[-15,37],[-30,-3],[-35,15],[13,86],[27,77],[128,155],[-6,5],[1,121],[18,48],[48,35],[49,153],[-10,42],[15,122],[57,101],[36,112],[-1,165],[32,94],[49,38],[20,27],[3,5],[11,38],[-20,75],[29,38],[27,97],[2,22],[-7,42],[-14,17],[3,95],[5,41],[16,10],[26,73],[-19,24],[1,22],[16,69],[11,113],[-36,78],[27,85],[-7,64],[16,157],[28,129],[4,16],[-27,40],[-12,34],[12,33],[-12,44],[-23,46],[41,49],[21,98],[9,77],[0,37],[-21,31],[-6,43],[-9,129],[52,62],[-16,83],[11,80],[-18,64],[-41,49],[-64,7],[-56,25],[-51,136],[-22,15],[-55,87],[-44,100],[-8,109],[-77,-12],[-6,-1],[-13,33],[17,34],[22,99],[-23,137],[-87,52],[11,44],[-134,13],[-24,113],[52,28],[30,2],[8,28],[0,19],[-25,76],[4,83],[-82,59],[-114,19],[-106,-3],[-130,40],[-36,-9],[-47,-1],[-108,16],[-18,4],[-28,41],[-16,3],[-17,-13],[-81,-132],[-3,-50],[-41,-36],[-84,-16],[-13,77],[-42,34],[27,88],[-1,26],[-15,41],[-50,62],[-33,96],[48,157],[-9,36],[-43,56],[-68,12],[-66,49],[-9,19],[-68,32],[-12,3],[-40,-16],[-20,12],[-12,7],[-27,118],[-5,68],[5,7],[5,76],[-52,93],[-41,52],[-6,102],[-57,129],[-83,63],[-86,13],[-29,-17],[-83,28],[-46,107],[-2,46],[-14,34],[-43,5],[-29,-6],[-69,69],[-25,52],[-49,0],[-33,18],[-17,47],[-60,21],[-5,30],[6,48],[-19,225],[0,85],[21,86],[-17,138],[-30,130],[-2,8],[-7,10],[-79,34],[-31,-1],[-13,-10],[-26,6],[-102,70],[-2,40],[-37,49],[-69,40],[-92,32],[-35,46],[-28,51],[-41,94],[-47,34],[-21,38],[-5,43],[11,13],[4,23],[-15,98],[-35,81],[-36,41],[-48,30],[-72,217],[-80,66],[-71,94],[-26,26],[-260,170],[-115,94],[-147,31],[-61,74],[-316,203],[-8,10],[7,15],[-6,11],[-96,92],[-117,94],[-33,61],[-87,35],[-89,0],[-53,-9],[-48,-29],[-25,-16],[-15,-1],[-28,14],[-29,-6],[-41,-41],[-41,26],[-39,-38],[-79,-51],[-39,-6],[-42,8],[-71,73],[-11,1],[-6,-11],[-17,-5],[-107,4],[-31,37],[-7,40],[-33,13],[-47,-30],[-12,-27],[-5,-46],[13,-37],[-2,-37],[-23,-39],[-46,-15],[-30,1],[-64,60],[-98,-28],[-62,-28],[-25,-167],[14,-182],[7,-15],[45,-3],[18,-45],[6,-71],[7,-73],[11,-18],[10,-93],[-8,-53],[-28,-67],[-21,-13],[-109,-19],[-95,41],[-70,8],[-38,17],[-34,37],[-30,76],[-68,-23],[-89,-52],[-64,13],[-87,-32],[-153,-111],[-95,-58],[-36,-40],[-127,-104],[-31,-45],[0,-18],[-49,-27],[-52,12],[-30,-11],[-140,-110],[-93,-91],[-27,2],[-224,-152],[-48,-12],[-114,-67],[-49,-42],[-23,-57],[-17,1],[-34,65],[43,100],[48,84],[-62,61],[-37,6],[-41,-15],[-21,-52],[-64,-112],[-30,-26],[-64,-13],[-18,-76],[-30,-29],[-59,-31],[-161,-19],[-128,39],[-109,-1],[-72,-14],[-117,-38],[-88,-40],[-147,-26],[-37,-7],[-118,-61],[-114,14],[-104,-13],[-90,-47],[-15,-24],[11,-61],[-29,25],[-61,105],[-40,86],[-64,209],[-60,294],[-14,144],[5,68],[11,51],[28,64],[49,25],[-23,-57],[-23,-145],[-3,-140],[38,-196],[65,-261],[51,-80],[37,-44],[32,2],[101,31],[23,31],[36,494],[-4,54],[-9,15],[-24,16],[-11,39],[-1,41],[7,9],[-17,33],[-27,30],[-27,4],[-16,17],[-38,113],[-61,133],[-77,109],[-15,17],[-60,70],[-76,57],[-127,48],[-33,-9],[-67,17],[-78,51],[-118,121],[-112,152],[-35,56],[-25,88],[-48,4],[-62,45],[-70,39],[-59,22],[-159,95],[-122,105],[-73,91],[-93,98],[-132,110],[-245,184],[-163,112],[-269,154],[-15,8],[-330,163],[-486,198],[-279,96],[-240,57],[-121,20],[-12,2],[-43,7],[-63,5],[-93,8],[-5,0],[-3,1],[-51,4],[-12,-1],[-117,-7],[-84,23],[-381,46],[-433,-22],[-181,-26],[-184,-28],[-217,-42],[-35,-9],[-866,-213],[-186,-33],[-226,-27],[-55,16],[-46,23],[-88,-28],[-114,-23],[-254,-79],[-361,-83]],[[50175,105954],[-1354,-4],[-18,0],[-17,0],[-300,-6],[-1353,-5],[-144,0],[-1,0],[-710,-7],[-199,-2],[-276,22],[-94,-1],[-445,1],[-236,-1],[-1,0],[-723,-3],[-225,0],[-290,-4],[-163,-1],[0,0],[-174,-2],[-7,0],[-100,-1],[-255,-3],[-79,0],[0,0],[-1451,-20],[-21,0],[-107,-2],[-1221,-21],[-116,-2],[-356,-5],[-544,28]],[[39195,105915],[-24,0],[0,0],[-50,0],[0,1],[-166,-1],[-1,1],[-639,2],[-794,1],[0,0],[-366,0],[-607,27],[-552,0],[-431,-20],[-23,0],[-3478,13],[-93,-3],[0,0],[-25,-1],[0,0],[-43,-2],[0,0],[-29,0],[0,0],[-448,1],[-11,0],[-1098,-5],[-72,2],[-10,-1],[-90,2],[-281,1],[-146,2],[-1435,8],[-29,4]],[[28254,105947],[-1,4000],[0,1],[1,1],[-2,1078],[0,2],[0,2738],[0,6],[-1,74],[0,12],[1,22],[0,7],[0,44],[-1,34],[0,17],[0,19],[1,34],[0,162],[0,55],[0,27],[0,10],[0,115],[0,43],[-1,90],[1,5],[0,368],[111,280],[51,40],[12,36],[65,190],[96,349],[13,564],[127,248],[4,9],[7,29],[-6,55],[-26,41],[-268,314],[-40,13],[-149,17],[-21,-3],[-29,-23],[-474,76],[-72,74],[-24,68],[-4,41],[1,7],[3,25],[7,41],[12,94],[6,35],[-92,646],[24,94],[190,210],[27,39],[18,47],[104,386],[73,205],[124,309],[66,90],[22,15],[80,36],[311,182],[147,239],[143,234],[75,225],[-14,38],[-33,43],[-22,43],[-28,99],[48,194],[225,307],[199,313],[74,302],[49,256],[18,72],[64,259],[441,881],[265,404],[64,110],[1,64],[-30,63],[-64,113],[-80,84],[-64,66],[-26,51],[-9,115],[8,95],[-45,90],[-169,133],[-144,28],[-571,312],[-27,30],[-223,250],[-34,63],[-31,126],[-150,263]],[[28658,125755],[-101,331],[66,480],[-122,414],[-97,259],[-10,17],[-218,222],[-50,123],[52,59],[26,227],[0,185],[0,34],[0,11],[0,347],[0,1357],[0,52],[0,1494],[0,136],[0,135],[0,106],[0,110],[-1,168],[1,436],[0,93],[0,164],[-1,66],[0,111],[0,141],[0,72],[-2,221],[0,26],[0,26],[-2,126],[0,1],[-1,593],[0,1],[0,9],[0,16],[-1,115],[0,80],[-2,107],[1,4],[-2,79],[0,1],[0,19],[0,8],[2,1045],[1,338],[1,198],[7,439],[0,16],[0,5],[0,10],[0,3],[0,1],[0,15],[0,1],[16,925],[0,2],[0,255],[0,2],[0,33],[0,2],[2,945],[1,39],[4,1081],[3,756]],[[28231,140648],[1009,3],[0,1],[2596,5]],[[83150,96045],[495,0],[46,1],[232,-2],[32,0],[90,0],[10,0],[652,-1],[5,0],[306,0],[459,-1],[22,0],[4,0],[131,0],[115,1],[64,0],[5,0],[110,0],[28,0],[138,0],[124,0],[83,-1],[50,0],[37,1],[138,-1],[259,-1],[120,0],[330,0],[655,0],[25,-1],[48,1],[21,0],[12,-1],[32,0],[139,1],[85,0],[54,-2],[163,0],[23,1],[101,-1],[56,0],[149,0],[88,0],[37,0],[5,0],[26,-1],[79,1],[29,0],[180,0],[581,-1],[8,0],[51,0],[68,-1],[12,1],[0,0],[12,0],[8,0],[38,0],[0,0],[685,-1],[16,1],[141,1],[14,-1],[51,-1],[87,0],[342,0],[139,1],[12,1],[29,-1],[27,-1],[38,2],[54,0],[45,0],[335,0],[0,0],[8,0],[3,0],[452,1],[11,0],[5,-1],[15,1],[47,0],[249,-1],[34,1],[413,0],[15,0],[14,-1],[106,1],[13,0],[125,0],[69,0],[32,0],[7,0],[28,0],[1,0],[33,-1],[172,2],[35,0],[102,-1],[68,1],[171,0],[6,0],[98,0],[73,0],[2,0],[39,0],[0,0],[96,0],[368,1],[51,-1],[159,1],[8,-1],[178,0],[0,0],[59,0],[63,1],[6,0],[4,1],[64,-1],[12,0],[58,-1],[5,0],[43,1],[99,0],[75,0],[66,0],[54,-1],[64,0],[74,0],[68,0],[51,0],[793,1],[1,0],[21,0],[67,-1],[207,2],[52,-1],[26,0],[110,0],[156,-1],[86,0],[27,1],[69,-1],[9,0],[121,0],[16,0],[139,-1],[148,0],[0,0],[204,0],[69,0],[70,-1],[61,1],[0,0],[8,0],[155,1],[23,-1],[6,0],[5,0],[926,-1],[14,0],[4,0],[173,1],[68,0],[70,0],[28,0],[8,0],[171,0],[0,0],[67,-1],[2,1],[385,-3],[1,0],[156,0],[8,1],[68,0],[144,-1],[17,2],[323,-3],[69,1],[79,0],[341,0],[1,0],[130,0],[8,0],[12,0],[5,0],[249,0],[672,-1],[45,-2],[20,0],[88,1],[36,0],[48,0],[69,-1],[44,1],[209,0],[9,0],[14,0],[0,0],[584,-2],[12,0],[227,0],[0,0],[56,1],[14,-1],[241,-1],[1,0],[26,0],[77,0],[1,0],[132,0],[31,1],[109,1],[101,-1],[49,0],[0,0],[193,-1],[277,0],[346,0],[0,0],[13,0],[1500,-2],[130,0],[116,0]],[[107872,96030],[2,-47],[23,-34],[441,-415],[178,-119],[91,-37],[83,-33],[158,15],[26,10],[26,23],[10,30],[0,60],[32,45],[29,9],[55,1],[144,2],[67,-34],[29,-41],[72,-366],[48,-243],[-79,-174],[-77,-13],[-269,-238],[-15,-16],[-199,-293],[-139,-205],[-20,-73],[-2,-26],[15,-57],[24,-45],[490,-567],[83,-95],[134,-160],[6,-59],[-8,-36],[11,-137],[24,-94],[251,-370],[141,-128],[153,-139],[58,-20],[47,-1],[35,7],[27,17],[385,-71],[21,-9],[15,-14],[7,-72],[-63,-134],[0,-118],[0,-39],[0,-79],[-1,-108],[-2,-506],[0,-10],[1,-13],[-1,-2],[0,-263],[0,-73],[0,-5],[0,-4],[0,-30],[0,-31],[0,-39],[0,-179],[-4,-250],[-1,-90],[0,-9],[0,-13],[-8,-509],[-1,-74],[0,-55],[0,-145],[0,0],[-1,-18],[0,-132],[-1,-10],[-1,-279],[0,-36],[0,-6],[-1,-27],[0,0],[-2,-368],[1,-55],[0,-18],[0,-95],[0,-25],[1,-142],[0,-57],[1,-21],[0,-26],[0,-61],[-1,-55],[0,-8],[1,-97],[0,-161],[0,-54],[0,-38],[0,-8],[-1,-68],[0,-16],[0,-50],[-2,-113],[-1,-36],[0,-54],[-1,-408],[0,-7],[0,-29],[0,0],[0,-114],[0,-1],[-1,-221],[-1,-23],[0,-83],[0,-97],[0,-7],[0,-28],[-1,-18],[0,-20],[0,-12],[-1,-91],[-1,-47],[0,-23],[-1,-74],[-1,-42],[0,-29],[0,-47],[-2,-88],[0,-39],[-1,-89],[-4,-445],[0,-38],[0,-158],[1,-13],[0,-5],[-1,-22],[0,-45],[0,0],[1,-96],[0,-1],[0,-81],[1,-132],[0,-5],[0,-187],[0,-2],[1,-22],[0,-48],[-1,-19],[1,-127],[1,-32],[-1,-187],[-1,-70],[0,-22],[0,-23],[0,-1],[0,-27],[1,-75],[-1,-70],[-1,-73],[0,-72],[0,-143],[0,0],[0,-16],[0,-1],[0,-127],[0,0],[0,-8],[0,-66],[-2,-412],[0,-14],[0,-41],[0,-6],[0,-101],[-1,-2],[0,-92],[0,-38],[0,-32],[0,-72],[1,-138],[0,-13],[0,-82],[0,-46],[0,-36],[0,-15],[0,-1],[0,-35],[0,-2],[1,-54],[0,-91],[0,0],[0,-80],[0,-157],[-1,-53]],[[178479,86711],[-31,23],[-15,9],[-1,0],[-1,0],[-8,-4],[-4,-2],[-60,-28],[-2,-1],[-13,-6],[-1,0],[0,-4],[-2,-5],[0,-1],[-1,0],[-10,-7],[-1,0],[-6,-4],[-17,53],[18,30],[0,0],[0,4],[6,45],[-3,14],[-1,5],[-8,32],[13,205],[63,54],[14,0],[2,0],[1,0],[18,0],[8,0],[1,0],[1,0],[0,0],[1,0],[0,0],[19,1],[6,0],[6,0],[6,0],[0,0],[9,-11],[1,-1],[13,-17],[0,-1],[1,-1],[0,0],[1,-2],[5,-6],[7,-9],[7,-10],[30,-39],[1,-1],[6,-7],[3,-5],[14,-18],[1,-30],[-15,-5],[-25,-9],[0,0],[-5,-55],[1,-2],[7,-44],[0,-2],[2,-3],[33,-71],[5,-3],[2,-1],[3,-2],[4,-2],[3,-2],[10,1],[4,0],[5,1],[3,-47],[-6,-5],[-5,-4],[-3,-3],[-18,-14],[-3,-42],[0,-2],[0,-1],[1,-2],[13,-17],[7,-9],[27,-34],[9,-91],[-21,-24],[-4,0],[-10,-2],[-29,-5],[-49,28],[-57,66],[-23,25],[-3,5],[33,59],[11,4],[3,1],[4,1],[3,1],[9,4],[4,4],[0,1],[5,5],[0,1],[-4,7],[-10,21],[-18,13]],[[178486,85884],[-12,149],[1,7],[0,2],[0,3],[0,21],[3,121],[9,53],[16,33],[77,35],[28,3],[16,-7],[0,-1],[15,-7],[47,-56],[39,-15],[15,-5],[6,-3],[0,0],[8,-10],[4,-5],[8,-10],[0,0],[0,0],[0,-3],[-1,-34],[0,-10],[-2,0],[-33,-8],[-3,0],[-8,-2],[-5,-1],[-1,-3],[-1,-3],[-1,-5],[-2,-10],[-2,-7],[-2,-5],[-7,-27],[0,-2],[-2,-6],[-12,-46],[-8,-32],[0,0],[7,-23],[4,-15],[10,-33],[-18,-34]],[[182143,88351],[-2,-13],[0,-3],[-1,-4],[-8,-78],[0,0],[-1,-5],[0,-1],[0,-1],[-1,-4],[0,-2],[0,-2],[0,0],[0,-1],[-1,-7],[0,-2],[0,-1],[-1,-9],[-1,-1],[0,-4],[0,-1],[-5,-41],[-4,-24],[-1,-3],[-1,-3],[-4,-20],[-15,-76],[-24,-103],[-1,-1],[-1,-4],[0,-2],[0,0],[-5,-19],[0,-1],[-5,-22],[-1,-5],[-1,-1],[0,0],[-1,-6],[-1,-6],[-5,-16],[-3,-8],[-35,-113],[-4,-12],[-1,-2],[0,-2],[0,0],[-7,-8],[-18,3],[-6,0],[-33,-59],[-3,-10],[-48,-175],[-97,-266],[-44,-138],[-14,-42],[-9,-39],[-58,-230],[-6,-16],[-51,-143],[-3,-9],[-6,-12],[-34,-71],[-1,-2],[-6,-12],[-35,-73],[-30,-54],[-12,-21],[-30,-54],[-1,-2],[-6,-9],[-15,-28],[-2,-3]],[[179867,85870],[17,27],[7,24],[-7,6],[-16,14],[-8,7],[-53,5],[-2,1],[-79,36],[-18,8],[-33,-16],[-2,-10],[-7,-8],[-3,-3],[-9,-10],[-27,-13],[-8,-4],[-2,-1],[-45,26],[-33,9],[-64,7],[-8,1],[-17,2],[-1,0],[-5,-4],[0,-1],[-1,0],[0,-1],[-11,-11],[-6,-6],[-59,-59],[-3,-3],[-3,-3],[-42,-41],[-6,-6],[-8,-8],[-4,-5],[-1,-1],[-20,-20],[-1,-2],[-6,-17],[0,-1],[-2,-6],[-2,-1],[-40,-29],[-8,-6],[-2,-1],[-3,-2],[-1,0],[-1,-1],[0,-1],[-1,0],[-4,-3],[-42,-30],[-78,-29],[-6,-2],[-5,-2],[-28,26],[-12,22],[0,1],[-9,18],[16,28],[1,15],[3,32],[7,72],[-29,97],[59,142],[27,44],[0,81],[8,30],[14,5],[13,5],[4,2],[22,8],[5,2],[2,-1],[5,-2],[3,-1],[7,-3],[8,-3],[1,-4],[1,-8],[8,0],[1,1],[42,27],[5,3],[4,3],[1,0],[12,8],[3,2],[0,0],[10,13],[2,3],[48,62],[-2,3],[0,0],[-22,35],[0,0],[0,1],[-39,12],[-4,1],[-6,1],[-26,8],[-4,2],[-1,0],[-11,3],[-11,-5],[-18,-8],[-25,-11],[0,-1],[-2,-4],[-2,-3],[2,-9],[1,-6],[0,-4],[1,-6],[1,-3],[-7,-1],[-1,0],[0,0],[-2,0],[-17,-3],[-4,0],[-1,0],[-5,-1],[-10,-1],[-10,7],[-23,73],[34,70],[4,9],[17,35],[2,4],[5,10],[77,61],[19,3],[1,3],[0,1],[1,1],[33,89],[0,1],[1,2],[0,1],[-59,55],[-23,-1],[-16,-9],[-16,-9],[-3,-1],[-24,-28],[-9,-3],[-5,2],[-4,1],[-35,10],[-1,0],[-71,21],[-3,-2],[-4,-2],[-5,-3],[-8,-5],[-3,-2],[-3,-2],[-60,-38],[-33,-20],[-15,-10],[-1,0],[0,-6],[0,-7],[1,-24],[0,-34],[-6,0],[-25,16],[-16,24],[-25,65],[0,0],[-9,22],[-2,7],[-1,1],[27,106],[3,14],[1,2],[5,13],[9,19],[0,2],[0,4],[1,7],[-4,4],[0,1],[-1,2],[-1,1],[-11,18],[-1,1],[1,2],[1,6],[0,1],[7,9],[1,1],[2,3],[0,0],[8,11],[4,6],[11,14],[4,2],[27,11],[169,70],[6,-2],[5,-14],[1,-4],[0,0],[23,-6],[2,-1],[2,0],[23,6],[9,3],[16,4],[7,4],[20,15],[9,7],[8,6],[14,10],[4,3],[1,1],[1,0],[1,1],[-18,79],[0,1],[-28,34],[-20,24],[-21,26],[0,0],[-8,2],[-8,3],[-30,0],[-2,0],[-7,-5],[-6,-5],[-2,-2],[-4,-3],[-3,-10],[13,-42],[-1,-1],[-17,-14],[-14,2],[-4,1],[-1,1],[-14,16],[-1,1],[-3,5],[-2,6],[-17,38],[0,2],[-9,21],[1,26],[-11,30],[-23,25],[-7,5],[-4,2],[-19,11],[-48,28],[-6,-4],[-8,-4],[-1,0],[-20,-12],[-11,-6],[-1,-1],[0,0],[0,0],[-1,0],[-10,-12],[0,-1],[-1,0],[0,-1],[0,0],[0,0],[0,0],[0,-15],[1,-34],[0,-3],[0,-3],[16,-16],[3,-2],[2,-3],[3,1],[8,1],[5,0],[5,-4],[2,-2],[1,0],[6,-5],[-2,-3],[-6,-12],[-13,-25],[-7,-2],[-11,-3],[-14,-4],[-3,-1],[-9,-3],[-2,0],[-11,-3],[-1,-1],[-2,0],[-1,-1],[-28,-8],[-3,-1],[-3,0],[7,8],[1,2],[2,3],[1,0],[17,23],[2,2],[0,3],[7,29],[-5,21],[-76,66],[-6,57],[-7,14],[-3,6],[-7,12],[-2,4],[-2,4],[-4,6],[0,1],[-3,3],[-25,43],[-13,24],[-12,19],[0,1],[-1,1],[0,0],[-14,6],[-1,0],[-17,8],[-1,0],[0,2],[-3,7],[0,0],[29,15],[3,1],[64,9],[2,1],[16,2],[5,1],[1,0],[5,0],[0,0],[2,1],[5,0],[43,25],[1,0],[1,2],[17,19],[9,41],[0,16],[0,1],[0,27],[-13,34],[-4,11],[-9,25],[-1,3],[-6,17],[-1,2],[-1,5],[-2,4],[-1,2],[0,2],[-6,16],[-21,9],[-2,0],[-2,1],[-55,23],[-23,9],[-1,0],[0,0],[-10,-12],[-7,-9],[-18,-47],[-1,-18],[4,-11],[1,-3],[2,-5],[0,0],[-1,-2],[0,-1],[-23,-100],[-63,-46],[-28,-5],[0,0],[0,0],[-6,-8],[-3,-3],[-2,-4],[-2,-2],[-2,-2],[-1,-4],[-2,-5],[-4,-11],[-2,-6],[-2,-7],[-1,-4],[-1,-2],[-1,-4],[-1,0],[0,-1],[0,-2],[-2,-24],[11,-13],[27,-29],[34,-38],[9,-30],[2,-9],[0,0],[-18,-56],[-1,-1],[0,-1],[-1,-2],[-2,-7],[0,-2],[-19,-56],[-3,-4],[-16,-22],[-1,-2],[0,-29],[1,-9],[1,-2],[21,-38],[3,-6],[0,0],[4,-6],[1,-3],[9,-42],[0,-2],[5,-25],[-95,52],[-43,56],[-4,17],[-2,4],[-8,29],[-1,3],[-3,10],[0,0],[0,1],[0,0],[-1,2],[0,0],[0,2],[-27,2],[-1,0],[-27,2],[-10,1],[-1,0],[-7,1],[-18,1],[-29,44],[18,73],[-32,48],[-57,-15],[-15,-5],[-23,-6],[-1,0],[-3,-1],[-1,0],[0,0],[-7,3],[-1,0],[-8,4],[-23,8],[-2,1],[-39,32],[-1,-1],[-2,0],[-18,-2],[-27,-26],[0,0],[-1,-2],[-1,-1],[0,0],[0,-1],[-1,-2],[-1,0],[0,-1],[-20,-34],[0,0],[0,-1],[4,-17],[3,-15],[9,-43],[16,-23],[26,-34],[4,-6],[62,4],[41,-19],[0,0],[9,-5],[6,-2],[16,-8],[1,-4],[2,-16],[0,-2],[-10,-14],[-1,-2],[-9,-12],[-32,-7],[-40,14],[-82,64],[-56,101],[-4,25],[0,1],[-3,22],[-25,40],[-2,3],[0,1],[-14,23],[0,0],[-3,4],[-1,2],[-1,2],[-2,3],[-1,3],[-28,45],[-18,12],[-5,3],[-1,1],[-31,21],[0,0],[-64,1],[-39,24],[-13,16],[-31,105],[9,34],[18,-23],[0,-1],[0,0],[3,2],[2,1],[71,29],[0,2],[0,4],[-1,5],[-1,3],[0,0],[-2,3],[-1,2],[-1,2],[-1,2],[-26,43],[-5,9],[-3,6],[-26,12],[-3,0],[-2,0],[-55,-1],[-21,81],[0,2],[-7,27],[-2,7],[0,1],[0,1],[-1,5],[-2,6],[-1,2],[7,50],[-9,51],[-28,54],[-35,67],[-5,9],[-37,52],[-1,1],[-33,47],[-39,67],[0,0],[0,1],[-1,4],[-1,4],[-16,84],[34,39],[33,-9],[105,28],[22,1],[6,-9],[66,6],[6,7],[7,7],[45,83],[3,4],[10,65],[-16,10],[-5,1],[-3,0],[-10,1],[-74,-40],[-15,6],[-11,18],[13,28],[6,35],[-14,42],[-13,20],[-2,2],[-19,31],[-4,6],[-2,0],[-22,4],[-10,2],[-33,7],[11,17],[49,33],[4,3],[64,44],[17,31],[-14,22],[-7,10],[-2,2],[-1,2],[0,0],[-1,2],[-15,21],[6,5],[5,6],[18,19],[28,-2],[2,1],[3,3],[6,5],[3,3],[23,20],[22,19],[6,4],[36,11],[2,-8],[4,-14],[14,-50],[6,-3],[1,-1],[1,0],[22,-12],[8,-4],[30,-16],[1,0],[34,20],[2,11],[42,40],[59,38],[18,3],[36,-19],[27,31],[21,25],[-2,6],[-2,7],[-1,5],[-2,5],[-1,5],[-12,40],[0,0],[0,0],[-2,5],[-1,5],[-1,5],[-2,4],[-1,6],[-1,0],[-1,4],[0,0],[-2,9],[-18,19],[-15,15],[-16,16],[-21,23],[-2,2],[-79,-2],[-11,-9],[-1,0],[-1,-1],[-46,55],[-50,80],[-10,17],[-8,13],[-1,2],[-2,2],[-1,1],[0,1],[-1,2],[0,0],[0,0],[-1,1],[-5,8],[0,0],[0,0],[-2,3],[-11,18],[0,0],[-1,1],[0,1],[0,1],[-2,2],[-2,20],[-1,2],[-1,12],[10,24],[-6,54],[-60,5],[-1,-1],[-7,-8],[0,0],[-1,0],[-1,-2],[-3,-3],[-2,-2],[-2,-2],[0,0],[0,-1],[0,0],[-1,0],[-4,-4],[-3,-3],[-23,-26],[-2,-2],[-2,-2],[-1,-1],[-3,-3],[-3,-40],[-1,-9],[0,-4],[0,-2],[-13,-3],[0,0],[-86,27],[-3,6],[10,19],[0,1],[2,4],[-8,11],[-4,5],[0,0],[-49,17],[-13,-6],[-20,-30],[-1,0],[0,-1],[0,0],[-3,-3],[0,0],[0,0],[0,-1],[0,0],[0,0],[-1,-1],[-1,-1],[-1,-2],[-9,-14],[-4,-5],[-3,-5],[-1,-1],[-7,-10],[-5,-7],[-4,-20],[-2,-11],[-1,-9],[-1,-5],[-1,-5],[0,-1],[7,-10],[37,-57],[0,-1],[0,-2],[0,0],[0,-1],[-2,-46],[-59,-36],[-5,-4],[-1,0],[-11,28],[0,0],[-2,5],[-2,4],[-14,37],[11,86],[2,14],[15,119],[0,3],[0,6],[0,1],[-1,2],[0,0],[0,1],[0,0],[0,1],[0,0],[0,5],[0,5],[0,2],[0,1],[0,1],[-1,49],[0,1],[0,0],[-1,27],[0,1],[0,0],[0,1],[25,104],[3,2],[14,12],[22,18],[4,6],[36,63],[8,13],[0,1],[0,0],[1,1],[1,3],[5,81],[2,5],[0,0],[1,2],[3,7],[20,42],[3,8],[0,0],[7,7],[4,4],[5,-1],[0,0],[1,0],[0,0],[0,0],[0,0],[0,0],[1,0],[2,-1],[0,0],[0,0],[7,-1],[5,0],[14,-2],[13,7],[26,12],[0,0],[1,1],[0,0],[-2,20],[0,2],[13,44],[11,35],[16,-1],[4,0],[7,0],[-6,-20],[0,0],[0,-1],[13,-25],[1,-2],[1,-2],[16,-30],[6,-11],[1,-3],[0,0],[18,-36],[1,0],[16,-16],[26,-13],[35,-17],[4,-2],[25,-13],[7,-3],[78,10],[2,5],[4,8],[0,0],[4,8],[7,15],[1,3],[0,3],[1,1],[0,2],[0,1],[1,1],[0,4],[6,24],[-1,1],[-6,18],[0,1],[0,0],[-18,50],[0,1],[-6,34],[-5,23],[-6,36],[1,11],[8,89],[-19,49],[2,64],[2,52],[0,1],[0,4],[2,56],[-15,17],[-22,27],[-1,0],[-52,20],[-1,1],[-13,5],[-7,-2],[-3,-1],[-57,-16],[-2,-52],[0,0],[4,-10],[1,-2],[2,-3],[0,-1],[0,-1],[1,-1],[0,-1],[2,-3],[-4,-10],[-1,-1],[0,-1],[-1,-2],[-1,-1],[-22,-9],[-1,0],[-1,-1],[-6,2],[0,0],[-15,4],[-9,23],[0,1],[-1,27],[-3,6],[-2,4],[-11,20],[-6,13],[-3,5],[-5,9],[0,1],[-1,-1],[-10,-8],[-30,-23],[-17,-13],[-8,-7],[-16,-13],[-2,-1],[-8,-33],[-4,-17],[0,0],[3,-7],[17,-34],[0,-1],[0,-1],[0,-1],[0,-2],[1,-19],[1,-8],[0,-1],[0,-1],[0,-1],[0,-3],[0,0],[-55,-21],[-35,64],[0,0],[-2,0],[-3,0],[-13,0],[-2,0],[-3,-1],[0,0],[-44,-25],[0,-1],[-3,-20],[0,-3],[-1,-4],[0,-4],[-1,-3],[-2,-20],[0,-2],[-1,-8],[-1,-2],[2,-6],[4,-10],[1,-4],[1,-2],[3,-7],[1,-3],[0,-1],[6,-38],[2,-14],[0,-1],[2,-14],[5,-38],[1,-2],[-11,-20],[-15,-13],[0,-1],[-6,-5],[-3,-3],[-31,7],[-5,1],[-22,-15],[-13,-9],[-1,0],[-4,-3],[0,-2],[-19,-58],[-6,-18],[-1,-1],[0,1],[-16,10],[-2,1],[-7,5],[0,2],[-1,9],[0,6],[-2,29],[-1,8],[0,1],[1,3],[12,33],[19,50],[1,2],[9,27],[-2,93],[0,28],[-1,46],[2,21],[1,14],[1,11],[9,98],[1,13],[8,24],[6,19],[1,2],[10,32],[4,13],[8,15],[29,53],[37,68],[9,16],[29,54],[2,4],[2,29],[0,4],[-5,13],[4,21],[8,49],[0,0],[0,0],[31,61],[36,21],[1,0],[0,-9],[1,-7],[2,-22],[0,-1],[0,0],[-7,-29],[1,-2],[31,-105],[1,-2],[7,-13],[10,-16],[10,-19],[6,-10],[6,-11],[10,-18],[9,-15],[2,-4],[0,0],[6,1],[62,5],[1,0],[46,-13],[9,-3],[50,-14],[3,0],[2,-2],[36,-33],[0,0],[60,12],[1,1],[55,51],[17,16],[7,7],[45,42],[16,15],[0,0],[0,0],[0,4],[0,8],[1,40],[-14,40],[-21,37],[-5,7],[-12,20],[-1,2],[0,1],[-22,72],[17,33],[9,17],[7,12],[22,20],[37,14],[9,19],[12,26],[10,24],[20,66],[-47,6],[-34,4],[-7,1],[-1,0],[-2,0],[-51,7],[-22,-17],[-18,-13],[-31,-23],[0,-1],[-1,-2],[-6,-25],[-9,-39],[-9,-39],[-1,-9],[-2,-28],[-3,-43],[-3,-33],[0,-1],[0,-1],[2,-11],[2,-9],[4,-22],[2,-13],[1,-6],[4,-20],[0,-1],[6,-10],[0,0],[3,-6],[20,-34],[-2,-1],[-4,-3],[-25,-19],[-1,1],[-28,14],[-15,8],[-10,5],[-29,15],[-31,40],[-7,8],[-2,3],[6,54],[5,11],[8,14],[1,4],[22,75],[0,1],[-1,53],[-1,56],[-7,42],[-26,77],[-16,47],[-29,85],[0,0],[-27,45],[-2,4],[-13,2],[-8,2],[-6,1],[-25,4],[-6,1],[-7,2],[6,43],[5,29],[3,23],[0,2],[2,3],[17,45],[3,8],[7,16],[1,3],[39,55],[18,38],[8,20],[59,144],[3,5],[21,65],[21,64],[4,13],[0,0],[4,5],[3,4],[23,29],[0,1],[0,0],[2,0],[28,0],[2,2],[35,42],[6,8],[5,6],[15,18],[1,1],[15,32],[0,0],[14,34],[0,0],[2,22],[1,15],[0,1],[0,1],[-8,16],[0,1],[-26,12],[-2,15],[0,0],[2,12],[2,7],[0,0],[55,63],[0,0],[0,0],[4,2],[4,2],[32,15],[9,-1],[16,-2],[27,-4],[45,30],[-7,10],[-7,9],[8,33],[18,14],[48,34],[2,1],[1,4],[10,27],[10,25],[0,1],[6,-1],[2,0],[122,-4],[34,-1],[0,0],[16,-1],[8,0],[2,0],[3,0],[14,-1],[16,0],[62,-16],[4,-4],[6,-4],[26,-20],[14,5],[46,17],[15,6],[0,44],[0,42],[0,1],[-16,1],[-57,2],[-48,3],[0,0],[0,0],[-14,8],[-2,1],[0,1],[-4,26],[0,3],[1,3],[20,34],[1,2],[1,0],[59,28],[2,1],[6,3],[2,2],[12,10],[11,9],[10,9],[15,33],[15,36],[5,9],[2,2],[15,6],[1,1],[13,6],[23,10],[18,38],[3,8],[1,6],[0,10],[-49,54],[-1,0],[-6,-2],[-9,-2],[-14,-3],[-16,-35],[0,0],[0,0],[-24,-5],[-1,0],[-1,1],[-8,15],[-2,3],[2,6],[7,15],[26,61],[23,35],[5,32],[4,28],[2,9],[26,98],[4,9],[0,1],[19,47],[15,40],[0,0],[3,4],[6,8],[24,32],[0,0],[0,29],[0,17],[0,3],[-1,7],[-11,38],[-82,27],[-26,-13],[-1,-4],[-4,-8],[-6,-12],[-2,-5],[-3,-5],[-8,-16],[0,0],[0,0],[-88,-8],[-61,-6],[-60,-5],[-2,0],[-43,-18],[-75,-30],[-25,-66],[-10,-25],[0,-1],[-2,-5],[-3,-9],[-17,-42],[-19,-51],[-2,-4],[10,-37],[3,-9],[18,-22],[16,-17],[16,-10],[2,-1],[5,-3],[55,9],[1,0],[5,-2],[31,-10],[3,-1],[1,-1],[1,-1],[7,-21],[22,-61],[6,-16],[5,-14],[0,-5],[0,-17],[0,0],[-74,-55],[-1,1],[-7,7],[-1,0],[-37,-7],[-32,-6],[-38,-29],[-9,-6],[-6,-5],[-1,-2],[-14,-24],[-3,-5],[-1,-1],[-37,-33],[-37,-32],[-15,-14],[-3,1],[-12,1],[-1,0],[-1,0],[-4,1],[0,0],[-1,0],[-18,2],[-5,0],[-1,0],[-2,-3],[-43,-65],[-1,-2],[-1,-2],[-13,-28],[-2,-4],[-1,-3],[-15,-35],[0,0],[-71,-56],[-11,-9],[-90,-72],[-2,1],[-8,3],[-15,6],[-3,8],[0,0],[-4,8],[-3,5],[-5,11],[-7,15],[-5,1],[-8,1],[-4,-1],[-2,0],[-1,0],[-18,-2],[-1,-1],[-58,-38],[4,-17],[8,-7],[17,-14],[0,0],[16,-44],[-29,-11],[-2,0],[-2,-1],[-2,-1],[0,0],[-8,-9],[0,-1],[-1,-1],[-1,-1],[0,0],[-23,-29],[-13,-15],[-6,-21],[0,0],[-2,-5],[0,-1],[-1,-2],[-7,-25],[-1,-2],[-1,-18],[-1,-17],[0,-4],[-1,-7],[0,-1],[0,0],[-55,1],[-5,0],[25,78],[-28,55],[0,24],[0,26],[0,5],[4,10],[8,17],[2,4],[-3,17],[-22,11],[-32,16],[-1,0],[-2,1],[-1,1],[-4,1],[-1,0],[-5,1],[-31,4],[-3,1],[-24,-5],[-41,-10],[5,-20],[17,-61],[3,-13],[2,-5],[0,-1],[-18,-41],[-3,-5],[21,-26],[23,-27],[-37,-41],[-8,-8],[-5,-6],[-44,38],[-6,5],[-2,3],[-33,-2],[-4,-4],[-55,-59],[-1,-2],[-8,-62],[-1,-9],[-2,-15],[-4,-27],[-1,-1],[-36,-32],[-1,-1],[-18,-36],[0,-1],[-3,-7],[-4,-7],[-1,-2],[2,-2],[55,-44],[20,2],[-3,-11],[-8,-23],[-1,-2],[-17,-34],[-1,-1],[-15,-16],[-3,-3],[-14,-10],[-3,-2],[-68,-45],[0,0],[-2,-6],[-4,-8],[-22,-56],[0,-1],[-59,-47],[-4,-3],[-19,12],[-51,35],[-4,3],[-3,2],[-28,-2],[-33,-2],[-7,-4],[-13,-5],[-3,-1],[-9,-5],[-2,1],[-1,1],[-4,1],[-26,10],[-2,0],[-6,15],[-3,7],[0,1],[-69,67],[-3,3],[-2,-1],[-28,-29],[-3,-4],[-17,-17],[-3,-5],[-3,-6],[10,-17],[0,0],[-1,-2],[-5,-12],[-2,-5],[4,-65],[31,-63],[1,-1],[1,-1],[3,-2],[15,-9],[4,-3],[27,-18],[12,-8],[28,-40],[1,0],[61,15],[0,0],[29,-16],[5,-9],[3,-7],[9,-16],[9,-8],[36,-29],[1,-1],[1,0],[1,-1],[1,-1],[19,-16],[47,-30],[33,-23],[3,-2],[6,-3],[-14,-25],[-1,-29],[-1,-38],[0,0],[21,-82],[1,-2],[2,-8],[0,-3],[1,0],[9,-38],[1,-4],[1,0],[2,-8],[1,-7],[1,-2],[1,-3],[-5,-36],[-34,-62],[-24,-44],[0,0],[7,-6],[52,-40],[57,-45],[0,0],[0,0],[7,-6],[1,0],[0,-1],[9,-17],[18,-35],[0,-1],[5,-20],[0,0],[3,-11],[1,-5],[2,-10],[2,-5],[1,-4],[-67,-72],[-9,-9],[-25,-27],[-2,-3],[-19,-6],[-80,-24],[0,0],[0,-4],[-4,-17],[-1,-5],[-4,-4],[-11,-12],[-72,-9],[0,0],[-1,-10],[-2,-16],[1,-2],[5,-23],[8,-29],[30,-39],[10,0],[9,-1],[2,-3],[20,-26],[6,-7],[-2,-4],[-41,-81],[0,-2],[6,-18],[5,-16],[0,-3],[3,-9],[-5,-36],[-3,1],[-2,0],[-6,0],[-10,1],[-16,1],[0,19],[-23,15],[-66,-22],[0,-29],[0,-2],[0,-2],[0,-13],[0,-6],[4,-20],[7,-5],[1,-11],[1,-2],[1,-9],[1,-6],[0,0],[0,-1],[1,-6],[-5,-13],[-1,-2],[-1,-1],[-11,-11],[-1,-1],[-1,-1],[-13,-13],[-35,-35],[-12,-13],[-30,-31],[9,-59],[1,-1],[27,-13],[0,0],[37,19],[6,3],[4,2],[0,-1],[11,-22],[3,-7],[2,-5],[2,-3],[0,-1],[6,-12],[0,0],[0,-21],[0,-2],[-5,-15],[-1,-3],[0,-1],[-1,-2],[-19,-60],[-2,-8],[-5,-14],[0,-1],[-14,-28],[-14,-26],[-1,-3],[-9,-17],[-3,-6],[-4,-2],[-11,-7],[-6,-3],[-28,-16],[-4,-2],[-1,-1],[0,-1],[-1,-1],[0,0],[-1,-2],[-7,-11],[-1,0],[1,-1],[0,-4],[0,-1],[1,-12],[0,-3],[0,-3],[-1,-2],[-3,-4],[-16,-23],[-5,-8],[-5,-6],[0,-1],[0,0],[-1,0],[0,-1],[-3,-1],[-2,-1],[0,0],[-1,-1],[-7,-4],[-14,-9],[-5,-3],[-1,0],[-36,-22],[-1,0],[-19,-11],[0,-1],[0,-5],[3,-40],[5,-67],[1,-2],[1,-2],[0,-2],[11,-28],[5,-12],[3,-4],[27,-34],[0,0],[2,0],[2,0],[0,0],[5,0],[8,1],[37,2],[2,-1],[8,-5],[2,-13],[-10,-54],[-1,-6],[-1,-4],[-3,-18],[-1,-5],[0,0],[-6,-35],[0,-1],[0,-7],[0,-73],[0,-17],[0,-9],[2,-7],[6,-33],[9,-54],[2,-9],[9,-50],[1,-8],[2,-4],[23,-57],[3,-8],[5,-13],[16,-67],[-4,-30],[-1,-3],[-8,-56],[-3,-23],[-1,0],[0,0],[-2,-15],[5,-171],[-1,-9],[0,-1],[0,0],[-1,-4],[-7,-68],[6,-49],[1,-1],[1,-5],[29,-98],[2,-8],[3,-10],[25,-55],[2,-4],[2,-4],[20,-45],[4,-5],[67,-77],[8,-9],[14,-17],[0,-1],[1,0],[11,-13],[11,-13],[19,-22],[0,-17],[6,-10],[12,-17],[20,-17],[11,-8],[0,-1],[5,-3],[8,-7],[10,-8],[2,-3],[74,-90],[47,-93],[34,-32],[19,-9],[0,0],[7,-28],[0,-2],[-2,-92],[0,-3],[-1,-6],[-1,-2],[-5,-8],[-1,-1],[-34,-52],[-9,-14],[-3,-4],[-2,-3],[-4,-6],[-6,-10],[-16,-75],[13,-41],[10,-31],[76,-40],[3,-1],[5,-4],[17,-14],[1,-1],[2,-14],[0,-1],[-7,-10],[-20,-24],[-45,-56],[-10,-32],[-7,-23],[-1,-14],[0,-2],[0,-3],[-1,-19],[0,-1],[1,-3],[24,-97],[1,-3],[2,-9],[1,0],[23,-94],[26,-39],[2,-2],[19,-28],[30,-46],[9,-12],[7,-16],[22,-51],[1,-2],[4,-5],[0,0],[17,-21],[16,-22],[22,-28],[5,-7],[24,-31],[0,0],[0,0],[3,-7],[0,-1],[0,0],[1,-3],[5,-11],[24,-58],[2,-3],[-15,-20],[-25,-35],[-3,-5],[-13,-17],[-1,-2],[-6,-9],[-3,-4],[-2,-2],[4,-42],[0,-1],[21,-48],[1,-3],[1,-2],[1,-4],[1,0],[0,0],[5,-125],[0,-12],[1,-2],[15,-59],[16,-63],[4,-16],[-7,-27],[-2,-5],[-1,-2],[-18,42],[-21,24],[-31,19],[0,0],[-11,-1],[-5,0],[-18,-1],[-8,-1],[-31,32],[-1,3],[-1,1],[0,1],[-28,71],[-3,8],[-2,6],[-4,9],[-24,37],[-9,15],[-2,2],[-1,2],[-1,1],[-7,11],[-4,6],[-22,34],[-3,5],[-1,1],[-1,2],[-3,1],[-3,2],[-9,3],[-5,2],[-1,1],[-27,11],[-2,0],[-26,0],[-5,-5],[-2,-2],[-6,-5],[-16,7],[-1,1],[-2,4],[-28,54],[0,1],[-4,7],[0,0],[1,11],[2,16],[0,6],[-28,48],[-9,16],[-71,2],[-2,0],[-1,-3],[-3,-6],[-18,-51],[-15,-40],[0,-1],[0,-2],[0,-1],[0,-8],[0,-6],[0,0],[9,-15],[1,-2],[2,-3],[0,-1],[0,0],[1,-1],[1,-12],[2,-11],[0,-3],[-9,-5],[-20,-9],[-8,6],[-3,2],[-7,22],[-1,5],[-1,3],[0,0],[-1,3],[-3,8],[-4,14],[0,0],[0,0],[0,1],[-4,5],[-7,11],[-4,6],[-3,5],[-1,2],[-1,0],[-21,32],[-11,17],[-7,11],[-3,5],[-4,6],[-3,5],[0,0],[-2,1],[-3,2],[-4,2],[-24,12],[-22,3],[-28,-9],[-24,-23],[-2,-2],[-1,-1],[-39,93],[-18,62],[-7,51],[-1,1],[-1,5],[-2,3],[-2,7],[-15,41],[-49,56],[-30,26],[-52,46],[-7,6],[-124,46],[-4,1],[-9,4],[-6,2],[-1,0],[-8,3],[0,0],[-1,1],[-1,0],[-41,-3],[-1,0],[-3,1],[-1,1],[-51,22],[-53,22],[-19,-1],[-31,-1],[-93,-3],[-13,-1],[-1,0],[-4,1],[-8,1],[-75,8],[-15,-22],[-19,-27],[-10,-14],[0,-1],[-1,-1],[-65,21],[-31,11],[-5,2],[-44,27],[-17,11],[-3,1],[-52,66],[-1,6],[0,4],[10,0],[1,0],[2,0],[9,1],[0,1],[2,5],[9,107],[2,28],[-10,12],[0,1],[-1,2],[-1,0],[-4,6],[-14,19],[-3,3],[-14,20],[-4,6],[-17,22],[-3,3],[0,1],[-12,6],[0,0],[-33,-7],[-44,-10],[-1,0],[0,0],[0,-29],[0,-1],[17,-10],[1,-1],[3,-1],[7,-25],[13,-49],[1,-2],[-1,-6],[-10,-53],[0,-2],[-16,-35],[0,0],[-5,2],[-3,1],[-2,1],[-4,2],[-4,2],[-63,63],[-8,4],[0,0],[-74,36],[-80,57],[-45,15],[-1,0],[-4,97],[0,1],[-6,18],[-4,6],[-8,12],[-10,13],[-46,42],[-43,18],[-45,40],[-32,29],[-2,1],[-30,78],[-10,97],[-1,8],[-1,10],[-3,28],[-2,15],[-3,7],[-1,0],[-3,7],[-13,24],[-11,20],[0,0],[-7,13],[-1,5],[-7,45],[-2,11],[-1,2],[-1,2],[-2,5],[-15,31],[-1,3],[-35,76],[-1,0],[-88,-5],[-5,-3],[-3,-2],[-5,-3],[-33,-26],[0,0],[-1,-1],[-1,0],[-1,-1],[-3,-3],[-1,-1],[-1,0],[-5,-5],[-2,-1],[0,0],[-1,-1],[-18,-14],[-43,-34],[0,0],[-2,-1],[-3,-2],[-21,-27],[0,0],[-18,-23],[-18,-36],[-56,-6],[-2,1],[-2,3],[-1,1],[-5,4],[0,0],[-5,6],[0,0],[-47,7],[-9,-29],[-6,-16],[-1,-4],[-2,-3],[-1,-1],[-1,-1],[0,-1],[-1,-1],[-4,-6],[-19,-24],[-4,-6],[-1,-2],[-1,0],[-11,-8],[-12,-8],[-16,-12],[-58,-41],[-19,-14],[-31,-21],[-10,-7],[-10,-8],[-3,-1],[-6,-5],[-6,-4],[-10,-4],[-57,-22],[-8,-3],[-1,0],[0,0],[-4,2],[-14,6],[-16,8],[-1,1],[-71,56],[-51,41],[-2,7],[-2,4],[-7,22],[-12,36],[-3,8],[-17,53],[-8,26],[10,46],[5,21],[0,40],[-3,12],[-10,47],[-12,51],[-10,42],[-16,72],[-1,3],[0,0],[0,2],[11,43],[28,107],[23,47],[9,19],[32,67],[12,25],[19,38],[3,1],[38,10],[20,6],[41,67],[17,28],[79,130],[28,17],[22,13],[1,1],[8,-1],[13,-1],[2,0],[1,0],[2,0],[4,-1],[47,-4],[10,6],[38,24],[24,14],[0,0],[1,1],[9,15],[4,7],[2,4],[-20,75]],[[183441,102760],[870,-541],[240,-162],[97,-61],[481,-300],[77,-45],[427,-248],[16,-9],[189,-113],[0,0],[473,-287],[34,-19],[32,-1],[-88,-395],[-6,-20],[-29,-88],[-22,-68],[0,0],[-17,-36],[-37,-81],[-142,-298],[-22,-47],[-29,-61],[-30,-64],[-17,-35],[-40,-234]],[[185898,99547],[-51,7],[-46,-74],[-69,-56],[-47,-54],[-27,-68],[10,-31],[-25,-20],[-180,-39],[-66,11],[-73,12],[-18,-2],[-11,-11],[-48,-63],[-17,-181],[-8,-91],[-21,-78],[-13,-16],[-49,9],[-62,-47],[-11,-36],[20,-106],[-81,-108],[-7,-21],[-9,-33],[18,-82],[21,-35],[93,-34],[42,-23],[4,-2],[4,-2],[48,-25],[13,-33],[0,-10],[-9,-6],[6,-10],[18,17],[30,10],[10,10],[13,22],[47,41],[0,-6],[-1,-26],[-6,-7],[5,-6],[20,20],[11,-9],[3,-8],[8,6],[3,0],[20,-9],[15,5],[4,-1],[2,3],[33,12],[11,15],[6,5],[9,4],[8,-3],[10,-7],[13,-11],[10,-7],[9,-7],[20,-10],[105,-38],[44,-24],[63,-54],[41,-19],[152,-39],[29,-1],[11,43],[14,116],[-53,108],[-43,37],[0,11],[14,10],[25,-6],[42,-32],[64,-142],[5,-157],[20,-182],[0,-118],[-22,-241],[-16,-99],[-42,-207],[-83,-351],[-52,-218],[-15,-98],[8,-10],[2,-3],[-8,-5],[-21,-89],[-71,-398],[-20,-109],[-48,-338],[-50,-551],[-23,-159],[1,-24],[-7,-17],[-10,-17],[-44,-77],[-103,-254],[-181,-319],[-181,-348],[-32,-34],[-104,-168],[-52,-32],[-71,-5],[-5,-34],[-5,-29],[20,-50],[13,-5],[9,-20],[-7,-37],[-112,-195],[-118,-149],[-146,-121],[0,-18],[-5,-44],[-17,-21],[-173,-79],[-227,-154],[-72,-68],[-35,-33],[-9,-33],[-27,-40],[-74,-39],[-62,-60],[-60,-70],[-80,-118],[-38,-44],[-18,-67],[-73,-93],[-158,-297],[-3,-15],[4,-11],[36,-33],[-5,-25],[-119,-140],[-149,-256],[-28,-114],[-23,-40],[-56,-30],[-42,-32],[-115,-124],[-50,-70],[-3,6],[-19,10],[-43,-9],[-91,-48],[-49,-14],[-48,-4],[-110,14],[-14,11],[-17,34],[61,302],[21,71],[41,97],[127,259],[22,57],[19,71],[24,151],[-4,75],[-66,80],[-36,13],[-174,63],[-51,10],[-79,-5],[-104,12],[-10,4],[4,25],[16,15],[0,11],[-10,25],[-35,28],[-21,0],[-23,-19],[-17,10],[-37,0],[-87,-27],[-54,17],[-23,-1],[-27,-19],[-46,-88],[-34,-52],[-10,3],[-98,109],[4,73],[-21,89],[-25,40],[-104,99],[-25,1],[-107,56],[-8,18],[4,14],[-6,25],[-27,71],[-73,20],[-40,-24],[-10,-34],[-13,-14],[-63,61],[-33,44],[-43,108],[-2,34],[-23,30],[-30,17],[-50,-5],[-35,-32],[-92,84],[-15,27],[-3,38],[-16,40],[-29,13],[-54,22],[-36,26],[-39,52],[-83,182],[-41,-4],[-27,13],[-81,60],[-9,31],[-103,7],[-24,49],[-5,46],[6,84],[53,8],[4,9],[45,310],[10,25],[-2,52],[-48,30],[-20,19],[-12,12],[-10,13],[-9,6],[-1,1],[-15,8],[-5,4],[-39,45]],[[180271,94194],[120,129],[2,3],[62,144],[-1,4]],[[179559,72229],[31,17],[41,7],[59,25],[33,22],[37,36],[16,9],[26,41],[13,8],[7,0],[24,-22],[40,-4],[87,31],[38,23],[55,52],[60,36],[3,24],[1,28],[4,14],[42,-16],[13,-12],[76,11],[93,33],[23,77],[20,148],[20,90],[22,132],[22,120],[23,184],[20,149],[26,153],[-3,63],[-4,53],[8,86],[19,63],[14,72],[0,229],[-10,117],[-24,126],[-40,89],[-32,71],[-30,204],[1,43],[-67,214],[17,14],[25,-11],[72,-155],[24,-71],[62,-248],[75,-406],[-5,-76],[-9,-138],[-33,-366],[-56,-437],[-57,-355],[-87,-427],[-28,-40],[-41,13],[-57,18],[-73,-4],[-109,-18],[-93,-36],[-137,-59],[-206,-90],[-75,-25],[-31,-11],[-43,-13],[-74,-41],[-186,-103],[-266,-157],[-116,-72],[-70,-63],[-70,-54],[-68,-71],[-43,-27],[-7,18],[6,17],[46,76],[33,41],[10,42],[-5,38],[5,33],[19,24],[38,5],[26,-16],[43,9],[113,76],[50,36],[60,41],[200,107],[74,23],[23,9],[42,22],[30,27],[28,29],[115,25],[2,1]],[[179847,75846],[57,-47],[-12,-17],[3,-48],[32,-9],[18,12],[12,-6],[64,-113],[40,-133],[-11,-43],[20,-158],[-22,-32],[-14,1],[-54,46],[-106,24],[-27,33],[55,42],[-2,118],[-10,36],[-34,63],[-32,7],[-59,88],[3,39],[-20,29],[-79,51],[-13,40],[2,11],[31,19],[48,-2],[51,-12],[18,-20],[41,-19]],[[179144,78928],[37,-251],[80,-384],[60,-322],[82,-334],[84,-291],[3,-11],[47,-122],[78,-250],[74,-202],[79,-179],[140,-283],[325,-779],[65,-204],[49,-123],[21,-49],[-12,-36],[-25,-3],[-13,39],[-26,59],[-46,68],[-25,78],[-58,80],[-45,111],[-66,109],[8,83],[-2,40],[-9,55],[-41,81],[-65,120],[-71,63],[-13,34],[-26,43],[-164,45],[-12,37],[2,52],[16,56],[-2,25],[-15,16],[-38,1],[-12,30],[-4,43],[7,56],[-1,42],[-38,227],[-1,50],[-6,48],[-13,65],[-74,234],[-29,73],[-35,52],[-4,5],[-15,17],[-19,25],[-29,41],[-1,18],[14,59],[-24,127],[-31,32],[-40,2],[-15,12],[-27,55],[15,114],[35,52],[1,36],[-17,83],[-25,39],[-16,6],[-15,36],[-4,26],[4,154],[-47,73],[-59,26],[-29,29],[-12,94],[-31,107],[-27,18],[-21,3],[-16,-3],[-25,-18],[-11,4],[-30,38],[-90,22],[-46,-2],[-114,58],[-57,-14],[-16,-13],[-21,-32],[-10,-59],[43,-118],[29,-56],[31,-28],[51,-25],[36,-6],[66,-91],[79,8],[15,21],[14,23],[16,5],[17,-14],[27,-183],[-2,-29],[-24,-76],[0,-29],[21,-41],[9,-6],[73,-163],[26,-130],[22,-43],[35,-9],[28,9],[17,-20],[-5,-70],[-20,-69],[11,-85],[20,-63],[36,-31],[39,-81],[-11,-31],[5,-83],[59,-93],[5,-62],[33,-45],[48,-119],[32,-151],[-8,-53],[-22,5],[-133,99],[-43,46],[-73,126],[5,70],[-4,48],[-9,17],[-19,14],[-45,14],[-64,20],[-56,3],[-17,-6],[-52,9],[-206,63],[-80,41],[-7,9],[-47,4],[-56,-29],[-17,-9],[-44,-39],[-6,-14],[-1,-27],[21,-50],[2,-29],[-18,-27],[-28,-18],[-76,-22],[-317,-61],[-19,-10],[-23,-26],[-1,-1],[-6,-13],[2,-31],[-91,-58],[-81,15],[-96,32],[-81,0],[-43,-19],[-19,-41],[-72,-39],[-31,-6],[-19,13],[-65,0],[-205,-41],[-4,-14],[-4,-15],[-29,-58],[-81,-88],[-31,-19],[-27,-54],[-2,-19],[-119,-31],[-82,-61],[-122,21],[-58,0],[-46,-19],[-18,6],[-32,41],[-52,86],[-43,24],[-60,3],[-79,-16],[-57,-70],[-10,-14],[-49,-41],[4,-47],[16,-42],[-20,-45],[-38,-47],[-18,-44],[10,-63],[19,-32],[2,-4],[66,-47],[23,-8],[39,8],[179,8],[16,15],[61,11],[215,10],[77,29],[38,26],[85,29],[49,47],[228,69],[31,-21],[29,-42],[2,-44],[59,-89],[9,-13],[83,5],[83,19],[166,128],[214,75],[137,26],[304,-1],[38,-16],[78,16],[139,-110],[34,-52],[2,-15],[-21,-115],[31,-100],[25,-44],[19,-8],[80,-31],[42,10],[13,11],[55,94],[50,39],[15,3],[10,15],[2,42],[-41,52],[-21,8],[-12,16],[-2,21],[33,26],[143,60],[73,8],[70,-3],[39,-11],[148,-83],[16,-26],[15,-47],[68,-45],[0,-36],[13,-50],[37,-83],[62,-115],[-4,-34],[17,-94],[50,-65],[27,-82],[2,-57],[-22,-102],[-20,-61],[-4,-37],[14,-16],[39,-123],[21,-142],[14,-31],[9,-47],[-2,-22],[-103,-109],[-3,-84],[19,-83],[27,-48],[0,-14],[-64,-78],[-58,-33],[-55,-56],[10,-64],[-80,-25],[-147,-17],[-53,39],[-29,39],[-38,-19],[-92,-48],[-43,-69],[-6,-20],[0,-44],[-29,-39],[-107,-20],[-17,-17],[-16,-22],[-35,-75],[-2,-34],[10,-39],[-4,-14],[-89,-47],[-31,-45],[4,-58],[-12,-50],[-43,-56],[-11,-47],[4,-48],[-12,-30],[-23,-31],[-16,-11],[-43,28],[-48,8],[-35,-28],[-14,-25],[0,-33],[10,-28],[4,-45],[-35,-64],[-86,-47],[-112,-50],[-35,-9],[-37,-53],[0,-50],[-24,-11],[-58,11],[-12,17],[-50,22],[-86,0],[-108,67],[-66,0],[-16,-28],[-29,-5],[-62,11],[-82,50],[-83,6],[-28,-6],[-21,-45],[-33,-5],[-58,16],[-33,34],[-28,6],[-21,0],[-41,-40],[-33,6],[-4,17],[-42,28],[-41,16],[-16,78],[-46,28],[-24,0],[-25,-16],[-37,-45],[-50,0],[-49,50],[-82,50],[-93,-9],[-122,-13],[-95,0],[-53,-45],[-27,-47],[-2,-3],[33,-111],[53,-39],[9,-6],[53,-17],[124,-5],[21,-17],[177,-33],[66,-39],[37,-95],[16,-89],[0,-78],[-37,-89],[-20,-12],[-25,-39],[-4,-61],[-13,-39],[-37,-28],[-61,-72],[-54,-89],[-12,-39],[12,-84],[0,-39],[-37,-95],[-41,-33],[-13,-39],[-29,-56],[-24,-22],[-41,0],[-21,-45],[-4,-39],[-25,-39],[-49,-33],[-33,0],[-33,-23],[-29,-27],[-25,-45],[0,-84],[7,-26],[10,-35],[49,-89],[148,-17],[79,34],[99,11],[136,33],[24,22],[17,28],[4,84],[37,89],[21,89],[21,26],[19,6],[102,-92],[11,-44],[3,-90],[23,-146],[71,-71],[28,-52],[11,-7],[233,-22],[21,27],[-12,53],[-75,148],[-40,45],[-13,27],[0,17],[45,-8],[123,-62],[92,-55],[19,-19],[-1,-42],[-8,-15],[-11,-11],[-9,-26],[-1,-52],[22,-36],[55,-40],[3,-35],[-11,-69],[-23,-16],[-101,-132],[-31,-61],[-51,-78],[-50,-49],[-76,3],[-32,-26],[-10,-25],[-57,-35],[-18,0],[-42,-70],[-15,-78],[0,-60],[46,-36],[48,-3],[23,11],[39,46],[39,35],[78,92],[68,91],[179,179],[148,142],[142,183],[127,141],[177,215],[68,70],[86,134],[18,7],[78,-35],[19,-25],[10,-30],[-136,-141],[-236,-212],[-351,-408],[-283,-264],[-281,-335],[-233,-348],[-160,-260],[-110,-231],[-44,-133],[-70,136],[5,61],[12,12],[4,73],[-110,73],[-144,61],[-89,25],[-72,39],[-50,38],[-64,-3],[-122,21],[-158,1],[-174,-16],[-325,-54],[-308,-65],[-150,-42],[-299,-108],[-88,-32],[-121,-54],[-145,-85],[-116,-87],[-299,-257],[-515,-318],[-106,-76],[-96,-77],[-143,-116],[-93,-83],[-193,-203],[-97,-87],[-94,-107],[-96,-126],[-9,-11],[-89,-100],[-88,-133],[-239,-412],[-46,-109],[-104,-305],[-15,-17],[-14,-38],[-137,-478],[-46,-131],[-34,-82],[-34,-81],[-38,-171],[-12,-122],[-38,-43],[-133,70],[-11,13],[2,32],[-34,102],[-282,88],[-152,30],[-149,11],[-361,-10],[-395,-52],[-459,-180],[-117,-72]],[[169341,65543],[-402,461],[-218,251],[-8,10],[-1316,1500],[-264,301],[-30,34],[-144,164],[-5,6],[-25,28],[-456,535],[-6,8],[-23,28],[-99,117],[-337,375],[-35,39],[-6,6],[-2,1],[-25,25],[-11,9],[-28,37],[-40,45],[-106,117],[-4,5],[-125,139],[-27,28],[-256,282],[-10,10],[-197,168],[-8,1],[-10,0],[-188,3],[-3,0],[-102,2],[-3,-1],[-564,4],[-366,10],[-57,2],[-110,3],[-16,0],[-76,2],[-4,0],[-811,19],[-292,6],[-63,2],[-5,1],[-4,-1],[-23,1],[-33,1],[-51,2],[-11,0],[-124,2],[-279,4],[0,0],[-218,3],[-18,0],[0,0],[-68,2],[-7,0],[-459,5],[-22,1],[-70,27],[54,548],[-89,135],[-1,1],[-124,190],[-242,372],[0,1],[-104,152],[-84,-73],[-307,-238],[-58,86],[-3,56],[3,64],[19,50],[21,22],[38,12],[13,30],[-38,183],[-2,11],[-172,21],[-546,37],[-9,0],[-101,6],[-215,11],[-142,7],[0,0],[-314,17],[-33,2],[-118,6],[-3,0],[-1004,51],[-329,16],[-60,3],[-348,16],[-728,32],[-33,0],[-32,3],[-36,3],[-76,6],[-53,3],[-1,0],[-98,10],[-113,-1],[-235,40],[-116,20],[-337,-174],[-150,-62],[-1,-2],[-68,-20],[-3,3],[-139,-74],[-21,-11],[-7,1],[-383,-101],[0,-10],[-285,-256],[-65,-7],[6,11],[5,23],[6,16],[-13,38],[0,0],[-427,-142],[-407,-144],[-367,-130]],[[169341,65543],[-48,-16],[-113,-17],[-320,-133],[-154,-86],[-215,-157],[-147,-124],[-183,-188],[-276,-326],[-235,-336],[-19,-27],[-77,-165],[-47,-48],[-159,-198],[-61,-113],[-125,-283],[-45,-127],[-16,-136],[-24,-89],[-14,-28],[-66,-362],[-1,-81],[30,-155],[-57,-163],[-28,-38],[-73,-52],[-83,-92],[-29,-60],[-164,-74],[-3,-1],[-140,-98],[-27,-88],[7,-34],[-15,-75],[-75,-216],[-161,-14],[-47,14],[-25,41],[-138,-37],[-82,-31],[-19,72],[-67,84],[-57,13],[-129,-70],[-85,-73],[-21,-75],[-53,-60],[-21,-35],[-40,-97],[0,-39],[17,-50],[25,-44],[74,3],[16,24],[24,16],[9,-3],[10,-36],[-22,-101],[-203,-88],[-89,-79],[-145,-110],[-16,-52],[-13,-21],[-62,-49],[12,-60],[-36,-38],[-310,-144],[-26,-53],[-82,-47],[-29,-8],[-67,11],[-20,-26],[-5,-32],[19,-54],[-7,-35],[-65,-162],[11,-53],[-113,-97],[-193,-125],[-25,-1],[-43,-65],[-18,-49],[-28,-23],[-40,-15],[-98,7],[-146,-34],[-163,-64],[-99,-59],[-69,-93],[-16,-68],[-61,37],[-20,3],[-42,7],[-151,-121],[-12,-8],[-103,-66],[-201,-189],[-21,3],[-20,60],[-74,26],[-62,-48],[-22,-38],[-21,-17],[-77,-23],[-9,7],[-7,20],[-2,73],[-18,36],[-59,27],[-46,-31],[-50,-10],[-23,8],[-18,-57],[-12,-39],[-16,-82],[16,-69],[46,-108],[79,-8],[48,-64],[11,-44],[2,-60],[-18,-72],[-41,-124],[-41,-66],[5,-52],[-40,-36],[-189,-101],[-79,-58],[-23,-25],[-93,-44],[-93,2],[-80,-66],[-76,-23],[-72,-35],[-39,-158],[-72,-78],[-120,-201],[-101,-101],[-150,-87],[-82,-63],[-34,-6],[-25,23],[-11,-3],[-47,-15],[-53,-50],[-71,-98],[-100,-138],[48,-41],[25,-45]],[[8563,135260],[-80,-1],[-43,13],[-53,76],[-1,30],[18,51],[0,27],[-22,56],[-95,125],[-54,11],[-51,-18],[-49,-29],[-11,-31],[-13,-10],[-94,-28],[-19,32],[4,18],[29,43],[5,35],[-5,16],[-62,51],[-80,19],[-94,102],[39,39],[12,41],[-5,46],[-70,81],[3,33],[22,43],[32,112],[-13,122],[-28,82],[-29,36],[-57,21],[-84,-4],[-56,-26],[-22,-13],[-8,2],[-26,97],[-24,34],[-68,60],[-86,32],[-35,48],[-67,28],[-26,45],[0,15],[64,162],[75,96],[35,123],[57,54],[122,196],[32,100],[1,132],[73,20],[36,-6],[9,-16],[-5,-11],[-13,-4],[-2,-12],[8,-3],[29,11],[39,49],[28,22],[28,-8],[19,-22],[5,-41],[38,-10],[-14,-160],[14,-48],[72,-25],[52,-30],[129,-108],[35,-52],[6,-47],[-4,-14],[-50,-46],[-12,-14],[-30,-15],[-76,-5],[-24,3],[-61,63],[-33,16],[-57,1],[-69,-20],[-31,-26],[22,-30],[-11,-67],[-106,-21],[-3,-29],[-57,-93],[3,-82],[136,-17],[10,9],[81,-70],[67,-111],[8,-18],[12,-59],[28,-73],[26,-35],[35,-144],[-6,-27],[-43,-45],[-1,-14],[64,-123],[34,-123],[23,-12],[83,35],[9,9],[10,81],[-21,28],[-31,77],[44,5],[81,-16],[109,-128],[48,-70],[63,-47],[112,-41],[49,-13],[40,2],[11,-167],[15,-27],[57,-69],[13,-60],[2,-52],[-4,-28],[-30,-78],[-33,-25],[-33,-43],[4,-67],[-5,-21],[-12,-10],[-36,9],[-26,33]],[[7639,138612],[25,-1],[49,-80],[67,-55],[66,-37],[33,-10],[19,-17],[21,-95],[-39,17],[-24,19],[-36,3],[-73,-38],[-58,-16],[-17,0],[-32,14],[-11,13],[-8,32],[3,55],[10,25],[-6,146],[11,25]],[[7400,138713],[73,-61],[11,-29],[77,-109],[-69,-123],[-102,-21],[-19,5],[-5,46],[-24,78],[-21,16],[-12,25],[-2,50],[55,95],[38,28]],[[7456,138774],[5,10],[87,34],[63,-100],[-33,-9],[-39,10],[-35,16],[-48,39]],[[7086,138677],[-17,-28],[14,-52],[53,-44],[57,-70],[3,-22],[-8,-29],[-37,-35],[-22,-73],[4,-37],[37,-25],[-6,-45],[-78,-71],[-59,-33],[-6,-20],[-6,-124],[24,-29],[20,-44],[19,-54],[-4,-22],[-32,-32],[-50,9],[-177,-29],[-35,3],[-36,19],[17,66],[-52,5],[-39,31],[-15,-17],[-37,1],[42,66],[-13,25],[-25,12],[-40,-23],[-89,-25],[-283,44],[-69,57],[-35,40],[-190,65],[-81,63],[-35,42],[-45,78],[-3,30],[8,18],[2,41],[-40,44],[-14,28],[1,32],[14,19],[-4,33],[-43,40],[-47,-4],[-18,20],[-1,29],[26,54],[64,75],[98,8],[44,-5],[15,-13],[103,11],[33,-47],[1,-14],[-14,-30],[2,-31],[98,-29],[54,-49],[42,-64],[54,-28],[69,-13],[101,5],[5,40],[-13,24],[-20,17],[-36,13],[-43,-3],[-64,57],[34,14],[5,25],[-65,61],[-20,-2],[-8,47],[93,65],[29,42],[2,25],[18,37],[78,61],[14,26],[131,103],[29,47],[-4,19],[89,34],[86,7],[69,-14],[157,-69],[112,-77],[8,-15],[210,-88],[3,-6],[-47,-55],[-106,-70],[-30,-10],[-64,-72],[3,-18],[36,-53],[1,-11],[-6,-4]],[[5628,139089],[44,1],[51,-25],[88,-59],[63,-55],[33,-49],[58,-67],[-50,-2],[-56,21],[-297,159],[-78,70],[3,27],[86,4],[55,-25]],[[6260,139254],[22,17],[36,4],[8,-17],[9,-121],[-34,-47],[-25,-17],[-77,-29],[2,15],[22,33],[-2,24],[-40,28],[-85,21],[111,86],[53,3]],[[8840,135793],[67,-71],[-11,-6],[-72,29],[-31,43],[23,12],[24,-7]],[[6224,140663],[51,-123],[-24,-17],[-47,17],[-73,-10],[-85,4],[-2,52],[-22,76],[202,1]],[[7469,139350],[98,-152],[21,-48],[68,-28],[97,-102],[32,-128],[-27,3],[-67,31],[-140,144],[-67,152],[-39,27],[-60,-1],[-12,33],[-1,41],[24,84],[46,-25],[27,-31]],[[28658,125755],[-1088,15],[-7,0],[-8,0],[-947,-2],[-1,0],[-17,0],[0,0],[-91,2],[-360,3],[-1374,9],[-70,0],[-474,-2],[-17,0],[-359,0],[-28,0],[-59,0],[-14,0],[-215,0],[-193,1],[-39,0],[-339,0],[-96,0],[-147,1],[-119,0],[-23,0],[-15,0],[-212,1],[-6,0],[-71,0],[-70,0],[-1134,-6],[-79,-102],[-67,-50],[-243,-131],[-120,-49],[-160,-26],[-95,2],[-111,24],[-115,35],[-239,-33],[-197,-61],[-205,-36],[-205,-36],[-134,11],[-173,84],[-106,-30],[-83,-69],[-171,-241],[-378,-56],[-109,9],[-240,-57],[-481,-118],[-6,-1],[-514,-193],[-107,-55],[-148,-179],[-708,-132],[-287,-24],[-87,28],[-59,49],[-137,141],[-116,41],[-161,-4],[-68,-43],[-56,-35],[-75,-71],[-365,-146],[-245,-73],[-53,-51],[-168,-99],[-103,75],[-441,-19],[-82,-30],[-398,-85],[-19,101],[-56,106],[-354,142],[-93,25],[-128,-9],[-107,-50],[-80,5],[-64,16],[-80,21],[-218,115],[-40,9],[-341,-102],[-297,-55],[-102,-4],[-279,63],[-32,-10],[-173,-57],[-127,-111],[3,-44],[-27,-37],[-51,-30],[-223,-127],[-435,-195],[-39,-10],[-51,6],[0,0],[-12,2],[0,-1],[-41,8],[-158,-34],[-66,-67],[-173,-81],[-65,-19],[-103,-2],[-134,23],[-79,105],[-100,33],[-411,36],[-556,131],[-114,41],[-231,130],[-94,64],[-40,116],[8,95],[38,144],[7,28],[-5,123],[-29,106],[-96,146],[-1,75],[38,126],[2,85],[-106,463],[-259,492],[-72,116],[-776,504],[-185,18],[-171,-81],[-246,-138],[-306,7],[-29,1],[-218,176],[12,235],[-73,102],[-78,73],[-22,16],[-34,9],[-233,-52]],[[4346,127063],[0,32],[-45,-2],[-16,-15],[-63,-8],[-117,-3],[-206,34],[-35,28],[-3,27],[7,43],[-3,21],[-6,26],[-27,16],[-47,30],[-86,-21],[1,-30],[-15,-27],[-2,-4],[-47,7],[-67,-75],[-26,-8],[-31,6],[-27,28],[-48,21],[-38,-5],[-255,-217],[-124,28],[-37,29],[-128,128],[-55,71],[-6,12],[3,27],[-16,19],[-39,29],[-59,21],[-71,13],[-34,-37],[-21,-57],[-11,-65],[-20,-39],[-62,14],[-72,-57],[-5,10],[1,27],[20,108],[18,45],[25,106],[23,295],[3,114],[2,416],[-18,312],[-24,224],[-4,145],[3,21],[22,38],[23,15],[29,1],[46,-74],[-61,-40],[6,-27],[81,-130],[19,-42],[2,-92],[-11,-161],[-21,-175],[21,-165],[91,-15],[39,15],[-1,13],[-12,16],[6,98],[15,41],[18,8],[17,-6],[-1,-37],[31,-72],[10,-9],[89,18],[83,152],[90,74],[-2,28],[10,43],[-33,74],[-50,53],[-12,23],[-7,48],[-24,59],[-38,37],[-60,36],[-14,49],[-5,113],[74,23],[68,46],[4,17],[-9,95],[28,29],[74,25],[112,74],[50,20],[19,70],[-10,15],[-49,39],[-31,3],[-22,12],[-60,97],[-21,0],[-44,-18],[-21,-26],[2,-20],[11,-33],[-14,-20],[-45,-7],[-72,1],[-73,53],[-24,-14],[-17,-43],[17,-53],[30,-43],[-25,-10],[-50,21],[-25,2],[-34,-28],[-69,33],[-74,55],[1,14],[-15,14],[-62,40],[-65,6],[-41,33],[-16,23],[5,53],[-6,136],[-6,49],[-10,81],[-25,128],[-55,215],[-56,128],[75,34],[26,1],[63,-57],[11,-28],[4,-138],[60,-30],[25,9],[19,9],[22,26],[21,103],[11,14],[37,22],[83,25],[15,34],[90,57],[20,6],[81,-9],[154,58],[119,34],[83,43],[-58,62],[-49,39],[-32,15],[-86,0],[-64,-11],[-33,11],[-41,49],[-118,-8],[-76,25],[-27,30],[35,33],[18,30],[-44,38],[1,16],[-35,76],[-145,54],[-148,8],[-58,-5],[-71,-33],[-28,-29],[-8,-40],[43,-162],[6,-87],[50,-134],[-62,-18],[-64,-54],[-78,-15],[20,76],[12,83],[8,179],[-16,356],[-12,132],[-26,158],[4,46],[-11,10],[-15,53],[-22,135],[-48,219],[-101,343],[-21,38],[-42,37],[-14,8],[-50,5],[-56,99],[-25,71],[-25,44],[-28,20],[-43,16],[-17,60],[-10,105],[-37,135],[-31,362],[-31,221],[-8,60],[-11,9],[-27,173],[-20,85],[-12,21],[-26,141],[-51,165],[-59,127],[-30,169],[-18,65],[-20,39],[-85,95],[-65,8],[-18,13],[-21,138],[-28,97],[-30,28],[-32,6],[-22,-7],[-100,72],[-67,94],[-3,35],[-12,16],[-94,58],[-79,10],[-4,3],[-54,37],[-17,22],[1,22],[-57,191],[-24,39],[-38,41],[-37,64],[6,89],[-30,165],[-12,101],[-12,65],[-11,29],[-19,18],[-11,53],[6,88],[23,27],[6,30],[-29,81],[-98,190],[-37,36],[-5,14],[5,33],[101,72],[30,70],[19,69],[2,36],[-54,94],[-3,6],[23,29],[55,47],[14,50],[16,148],[26,6],[13,14],[14,56],[11,102],[-41,51],[-97,41],[-63,82],[-48,24],[-15,26],[-3,24],[22,24],[32,19],[83,-4],[151,8],[51,-25],[30,-45],[71,8],[46,14],[7,5],[24,-41],[66,-37],[29,8],[68,-71],[27,-18],[50,-4],[54,-29],[354,-210],[68,-60],[54,-20],[71,14],[70,-49],[158,-47],[13,-26],[-5,-6],[-2,-5],[7,-7],[87,-24],[22,2],[40,20],[10,10],[5,19],[45,-11],[76,-46],[92,-34],[189,-94],[111,-34],[34,-18],[-20,-84],[60,-18],[68,-32],[79,-60],[255,-65],[95,4],[74,-23],[71,-8],[130,7],[50,-29],[28,-3],[100,18],[196,-12],[80,28],[101,8],[2,-9],[11,-8],[25,-3],[45,23],[-1,12],[14,5],[111,-20],[77,-29],[53,-32],[-15,-21],[45,-34],[139,-22],[61,29],[50,49],[34,4],[60,-28],[46,-51],[55,-18],[124,11],[66,30],[56,9],[4,-3],[-10,-85],[63,-30],[109,-19],[125,8],[103,-15],[67,4],[96,36],[30,-18],[41,-6],[74,-2],[35,12],[81,45],[94,82],[99,110],[72,50],[42,6],[3,-13],[-25,-40],[-14,-49],[43,-19],[24,3],[31,-16],[115,-114],[69,-33],[58,-88],[43,-107],[81,21],[46,25],[90,27],[122,13],[63,-12],[41,-23],[-11,-16],[-21,-70],[-5,-37],[3,-8],[1,-2],[30,-32],[150,-56],[104,34],[-31,59],[-75,51],[-14,123],[21,50],[158,117],[180,42],[87,1],[42,-129],[-89,-51],[-19,-3],[-53,-45],[-20,-23],[-11,-25],[113,-169],[0,-27],[14,-18],[90,25],[8,24],[3,74],[-7,9],[-23,-1],[-4,7],[56,95],[54,31],[73,27],[41,-7],[-16,-24],[-2,-48],[37,-220],[18,-32],[30,-21],[-3,-73],[-62,-45],[-12,1],[-26,33],[-17,5],[-79,-40],[19,-101],[62,-73],[66,-3],[16,-22],[10,-45],[-31,-73],[1,-22],[9,-16],[72,-28],[17,2],[24,-50],[-11,-26],[-4,-53],[32,-51],[33,-24],[68,1],[31,-14],[-79,-62],[-7,-32],[-9,-11],[-50,-12],[-60,18],[-100,3],[10,-39],[34,-48],[-8,-58],[-18,-36],[-113,-92],[-46,-16],[-59,-46],[-9,-131],[-27,-81],[-2,-58],[34,-25],[33,-24],[27,7],[37,56],[11,60],[18,36],[89,50],[24,101],[8,11],[124,120],[91,55],[32,73],[24,29],[126,4],[2,82],[-49,139],[-7,54],[-29,36],[-75,24],[-13,32],[12,37],[18,9],[30,-2],[9,-43],[34,-46],[38,-11],[120,-6],[79,-65],[50,-125],[4,-84],[24,-159],[15,-26],[72,-54],[0,-31],[-10,-26],[-37,-35],[-1,-51],[89,-103],[4,-44],[-6,-36],[-20,-19],[-41,-12],[-70,-3],[-28,5],[-15,11],[-66,5],[-63,-8],[42,-172],[44,-30],[19,1],[7,15],[47,3],[24,-47],[1,-66],[-16,-75],[-35,-96],[59,-61],[33,-20],[1,-27],[-6,-30],[-21,-29],[7,-97],[16,-46],[37,-11],[17,-15],[-90,-42],[-53,-5],[-43,-28],[-17,-12],[-31,-48],[3,-92],[-18,-48],[2,-23],[50,-7],[36,9],[83,-43],[21,-25],[36,12],[63,-13],[56,-33],[-29,-43],[1,-39],[98,-101],[-24,-42],[-1,-200],[9,-51],[38,-26],[119,-14],[78,-52],[-18,-17],[-85,-20],[-132,-78],[-39,-53],[-21,-57],[-12,-4],[-45,10],[-79,-47],[1,-14],[-8,-10],[-43,2],[-51,13],[-20,25],[-14,35],[7,67],[-43,1],[-50,2],[-16,-60],[-57,-100],[-17,-4],[9,-40],[9,-14],[86,4],[1,7],[26,3],[26,-9],[226,-195],[100,-52],[24,6],[30,8],[42,60],[33,34],[-17,27],[-38,17],[-30,-7],[-45,22],[6,29],[71,63],[19,8],[199,76],[100,27],[44,35],[-3,213],[-10,46],[-25,38],[-47,37],[-26,129],[-44,29],[-59,14],[56,43],[18,82],[6,28],[-14,35],[-79,68],[-36,65],[10,47],[-16,126],[-43,93],[-41,35],[71,39],[54,59],[43,-52],[19,-11],[44,9],[56,32],[12,39],[-20,49],[-84,75],[-66,37],[-29,-3],[-38,14],[-38,29],[-56,95],[81,105],[14,46],[39,61],[47,37],[15,37],[3,16],[9,47],[-35,98],[9,47],[-52,68],[-7,28],[-3,9],[8,117],[11,22],[142,163],[24,9],[25,21],[14,28],[24,85],[-2,29],[-13,25],[18,87],[25,69],[36,59],[5,7],[3,20],[-5,38],[15,61],[107,37],[106,15],[69,56],[14,27],[-22,56],[8,97],[5,26],[14,21],[-25,65],[-181,99],[-90,117],[-59,60],[-16,37],[-62,23],[-76,131],[-5,9],[5,84],[-3,42],[-21,67],[25,48],[6,65],[-39,27],[-35,70],[-13,53],[-36,53],[-2,4],[-108,18],[-19,17],[-11,1],[-58,-19],[-15,-19],[0,-10],[15,-60],[18,-1],[10,-14],[-1,-12],[-47,-63],[-25,-17],[-11,8],[-20,-4],[-30,-29],[-2,-62],[12,-44],[122,-178],[113,-87],[118,-128],[70,-129],[7,-26],[-17,-8],[-52,15],[-38,37],[-12,22],[-9,44],[-27,34],[-84,88],[-96,55],[-65,81],[-38,-7],[-33,-40],[-11,-2],[-81,66],[-39,138],[-54,109],[-6,129],[17,66],[-3,85],[15,48],[100,36],[15,-2],[7,-16],[16,-7],[46,-2],[23,18],[29,71],[10,5],[211,-93],[2,2],[39,24],[12,62],[74,90],[-19,41],[-5,8],[-22,32],[-90,111],[-56,39],[-68,18],[-120,109],[-26,9],[-56,0],[-35,14],[-96,93],[-22,69],[-29,13],[-26,30],[-14,103],[26,63],[-22,25],[-41,3],[-25,-9],[-23,-70],[-121,-71],[-129,-31],[-57,39],[-33,41],[-17,73],[7,23],[10,-4],[1,-6],[25,2],[45,58],[-10,93],[-26,26],[-89,-6],[-25,-60],[1,-21],[-19,-15],[-35,20],[-8,13],[-2,72],[42,94],[62,57],[20,-7],[8,-16],[21,-3],[206,87],[30,3],[25,-6],[6,-43],[111,-20],[41,-47],[72,-159],[16,-3],[22,10],[44,-12],[13,-19],[39,-5],[106,49],[8,7],[0,14],[-15,24],[-19,10],[-17,53],[-5,85],[4,61],[-5,31],[-49,139],[-21,42],[-77,13],[-24,7],[-10,27],[-1,9],[82,10],[61,-10],[27,-56],[22,-25],[15,-2],[124,54],[42,57],[29,89],[-86,114],[-57,16],[-83,86],[-7,11],[-19,31],[-23,23],[-24,67],[-45,215],[13,39],[36,18],[38,63],[18,68],[-75,33],[-64,53],[-27,38],[-117,16],[-107,-39],[-5,-10],[-32,-51],[-77,-72],[-34,-44],[-3,-16],[43,-57],[50,-30],[25,-69],[-1,-12],[-33,-24],[-19,-1],[-37,15],[-59,57],[-99,124],[24,76],[21,27],[50,100],[7,37],[-4,17],[-36,0],[-12,8],[-75,80],[-49,9],[-13,-8],[-6,-12],[-3,-28],[1,-29],[-14,-13],[-24,-1],[-5,26],[7,131],[-10,72],[-19,74],[-21,28],[-230,159],[-28,39],[2,9],[33,0],[119,82],[13,22],[8,28],[-4,47],[-33,39],[-39,17],[-16,2],[-62,-53],[-113,36],[-12,12],[-3,17],[19,55],[74,95],[83,79],[30,3],[36,26],[1,13],[-7,14],[1284,-1],[6,0],[1128,0],[1273,-24],[2291,20],[1008,-1],[4213,-4],[3,0],[893,0],[106,0],[1069,0],[19,0],[1082,-1],[2346,0],[2813,-1],[592,0],[-1,-1],[865,-3]],[[191639,109550],[-1487,51],[-231,8],[-11,0],[-324,11],[-16,1],[-438,11],[-449,12]],[[188683,109644],[-42,1],[-53,277],[20,159],[25,-3],[15,530],[0,11],[1,6],[17,431],[38,923],[16,485],[6,199],[1,43],[1,34],[0,3],[21,714],[18,99],[-13,27],[-209,423],[-13,12],[-221,-23],[-34,-50],[-90,-220],[-104,75],[-10,21],[36,289],[47,136],[19,54],[120,251],[37,88],[38,90],[-27,72],[-79,111],[0,1],[-34,118],[-32,363],[-39,120],[9,94],[-2,335],[-18,53],[-95,77],[-2,21],[30,162],[93,365],[48,188],[146,173],[96,88],[5,105],[30,613],[70,198],[9,52],[-23,187],[-25,118],[-117,230],[0,0],[-67,55],[-19,26],[-45,61],[-58,213],[91,421],[93,375],[-109,249],[38,429],[33,390],[26,82]],[[188396,120874],[555,13],[388,10],[258,-2],[3,-1],[620,9],[627,-6],[441,-18],[777,-32],[877,1],[754,18],[477,11],[971,9]],[[195144,120886],[139,2],[-14,-17],[-66,-16],[-68,6],[-92,-43],[-25,-27],[-6,-29],[3,-20],[77,-182],[83,-180],[-6,-31],[-282,-471],[-188,-272],[-13,-38],[8,-88],[98,-157],[166,-354],[62,-192],[-161,-404],[-70,-99],[-295,-290],[-107,-81],[-132,-51],[-41,25],[-21,3],[-10,-3],[-107,-35],[-75,-86],[-6,-75],[-123,-38],[-560,-170],[-36,-17],[-172,-175],[-24,-44],[-8,-31],[13,-412],[41,-99],[40,-51],[7,-10],[0,0],[-53,-216],[-132,-381],[-81,-234],[-1,-76],[22,-16],[5,-52],[4,-42],[-60,-157],[-170,-163],[-55,-258],[-5,-136],[-77,-172],[-4,-4],[-99,-113],[-115,-70],[-26,0],[-116,-156],[-98,-337],[-18,-77],[-1,-23],[19,-71],[-243,-395],[30,-90],[-1,-153],[-33,-211],[0,0],[-30,-193],[4,-158],[13,-105],[12,-102],[-124,-420],[-31,-101],[-46,-248],[37,-123],[33,-82],[1,-29],[-41,-535],[-412,-691],[1,-3],[1,-40],[0,-9],[47,-238],[122,-135],[68,-43],[46,-51],[67,-149],[6,-26]],[[39162,81158],[-4,436],[0,13],[-1,956],[0,3],[1,43],[0,2],[0,382],[0,1],[-3,601],[0,52],[0,73],[0,3],[1,431],[2,700],[0,2],[0,3],[3,46],[9,266],[-7,943],[2,737],[-1,1269],[0,0],[1,690],[0,20],[-1,124],[1,518],[8,4291],[2,1801],[2,1046],[4,1872],[0,6],[1,54],[6,1089],[-1,160],[0,3],[6,1194],[9,3679],[-5,538],[0,0],[-2,710]],[[122129,97905],[-239,28],[-24,48],[-123,85],[-348,478],[-10,36],[15,98],[-7,33],[-280,235],[-75,51],[-45,75],[-208,-10],[-35,-2],[-17,-1],[-51,-2],[-40,-2],[-28,-2],[-131,-8],[-274,-11],[-103,-4],[-101,-3],[-114,-4],[-140,-5],[-6,0],[-47,-2],[-3,0],[-35,-1],[-13,-1],[-306,-7],[-60,-2],[-20,0],[-59,-1],[-69,-2],[-228,-5],[-119,-3],[-1,-1],[-71,-2],[0,0],[-106,-4],[-271,-6],[-29,1],[-74,-2],[-2,-1],[-8,1],[-351,-14],[-211,-7],[-5,0],[-174,-5],[-12,1],[-91,-2],[-101,-2],[-56,-1],[-259,-2],[1,0],[-26,0],[-82,-1],[-21,-1],[-59,1],[-39,-2],[-50,0],[-140,-1],[-59,-2],[-468,-15],[-44,-2],[-4,0],[-594,-15],[-209,-1],[-102,-1],[-106,-1],[-247,-2],[-87,1],[-6,0],[-209,2],[-13,0],[-2,-1],[-74,1],[-21,-1],[-11,0],[-7,0],[-7,0],[-16,-1],[-2,0],[-2,0],[-114,-3],[-216,-6],[-11,0],[-9,0],[-26,0],[-30,-1],[-49,-1],[-117,-1],[-22,-1],[-33,0],[-20,0],[-27,1],[-74,0],[-15,0],[-150,-2],[-12,-1],[-82,-1],[-46,-1],[-164,-3],[-4,-1],[-6,0],[-47,-1],[-80,-2],[-2,0],[-3,1],[-6,-1],[-4,0],[-88,-2],[-48,-1],[-142,-4],[-68,-1],[-169,-4],[-1,0],[-32,0],[-7,0],[-517,-5],[-202,-1],[-28,-1],[-58,1],[-52,-1],[-43,0],[0,0],[-79,0],[-262,-2],[-112,0],[-38,-1],[-2,0],[-67,-1],[-163,1],[-12,0],[-4,0],[-13,0],[-1,0],[-191,1],[-139,1],[0,0],[-185,3],[-119,2],[-6,0],[-210,4],[-137,2],[-32,1],[-14,2],[-268,3],[-17,1],[-49,1],[-147,3],[-42,1],[-376,5],[-39,1],[-66,1],[-35,-1],[-11,0],[-2,1],[-5,0],[-32,1],[-123,2],[-35,1],[-140,2],[-34,1],[-1,0],[-4,0],[-2,0],[-15,0],[-5,1],[-10,0],[-418,5],[-82,1],[-59,2],[0,0],[-152,3],[-197,2],[-206,3],[-5,0],[-24,1],[-79,2],[-70,1],[-136,3],[-113,4],[-167,0],[0,0],[-216,3],[-71,1]],[[106195,98931],[46,38],[11,21],[6,31],[-102,219],[-37,49],[-33,25],[-101,24],[-73,51],[-148,199],[-21,70],[8,51],[19,42],[34,39],[39,22],[28,105],[121,460],[-8,120],[-21,370],[-24,43],[-116,86],[0,208],[3,40],[48,539],[2,25],[-227,98],[-31,29],[0,0],[-11,23],[-5,32],[9,45],[83,308],[-42,233],[-44,9],[-49,34],[-51,54],[-13,28],[-1,18],[68,213],[4,11],[24,196],[-185,362],[-50,96],[-131,5],[-22,-90],[-15,-10],[-22,0],[-31,12],[-127,111],[-16,37],[-88,368],[7,40],[68,89],[10,39],[-2,26],[-16,41],[-80,108],[91,79],[72,83],[46,385],[-4,25],[-19,32],[-25,21],[-32,13],[-90,96],[-105,174],[-18,30],[-63,148],[-1,19],[11,22],[62,26],[20,27],[27,220],[-1,33],[-338,270],[-110,71],[-77,33],[-23,133],[-104,281],[-134,156],[-21,49],[-37,191],[12,22],[0,1],[74,18],[46,55],[3,18],[-22,105],[-73,135],[-97,180],[-32,38],[-88,57],[-21,30],[-15,39],[9,243],[7,37],[95,122],[25,69],[-2,76],[-15,57],[-39,54],[-49,18],[-124,9]],[[103711,108373],[-84,41],[-39,54],[-16,39],[5,38],[8,57],[3,101],[-10,26],[-135,343],[-95,150],[-121,109],[-98,73],[-15,-14],[-18,1],[-72,55],[-33,154],[24,155],[4,13],[199,284],[54,14],[40,25],[10,16],[29,91],[67,255],[46,175],[4,133],[-13,281],[173,171],[40,104],[57,152],[11,34],[-143,497],[-36,16],[-263,0],[-57,123],[-42,94],[-8,31],[63,105],[63,-12],[79,35],[17,61],[16,310],[-1,59],[-9,39],[-19,15],[-7,-11],[-23,-1],[-74,57],[-134,136],[-32,83],[10,30],[59,59],[-11,78],[-44,78],[29,1],[506,-1]],[[129022,78668],[-78,135],[-36,94],[-5,40],[17,58],[52,64],[24,14],[68,6],[101,-24],[56,-22],[21,-18],[21,-41],[20,-65],[9,-53],[-2,-31],[-24,-80],[-46,-80]],[[129468,78672],[62,195],[45,174],[43,200],[40,56],[80,29],[59,6],[3,0],[49,-60],[69,-131],[84,-110],[43,-31],[86,8],[34,13],[50,53],[40,106],[7,83],[12,53],[36,60],[48,47],[0,0],[10,109],[-101,216],[-6,48],[12,68],[49,70],[56,29],[98,-20],[44,-18],[25,166],[0,0],[-204,137],[2,18],[6,96],[108,56],[172,480],[0,0],[-117,190]],[[146321,91595],[120,48],[76,116],[45,40],[38,4],[44,-15],[50,-37],[106,-163],[18,-18],[192,-118],[32,-11],[13,-5],[61,1],[342,99],[1,0],[14,7],[15,8],[30,29],[223,-41],[390,-331],[24,-27],[23,-25],[33,-52],[258,-562],[8,-63],[-1,-29],[-5,-104],[9,-114],[5,-15],[17,-49],[46,-59],[26,-16],[492,-159],[69,0],[30,0],[241,82],[61,2],[67,-19],[146,-77],[0,0],[123,-32],[42,-24],[21,-21],[277,-387],[15,-65],[16,-31],[25,-15],[207,-74],[97,-35],[57,-11],[31,9],[21,15],[11,24],[14,28],[25,136],[34,43],[41,24],[150,42],[152,47],[45,5],[31,-7],[526,-210],[131,-88],[34,-41],[13,-53],[141,-98],[60,12],[399,76],[52,22],[28,33],[27,53],[355,412],[1,1],[69,21],[119,-20],[39,14],[94,72],[71,34],[108,32],[18,-3],[36,-22],[15,-21],[3,-10],[12,-29],[5,-44],[-2,-42],[-11,-60],[14,-158],[59,-333],[23,-78],[28,-45],[71,-67],[16,-9],[58,-38],[38,-16],[215,-3],[23,-9],[103,-76],[23,-28],[91,-152],[1,-1],[263,-416]],[[203190,114740],[4,7],[14,-2],[9,-13],[-2,-17],[-49,-59],[-30,-4],[-4,15],[9,34],[28,34],[21,5]],[[202750,115509],[16,-29],[5,-26],[-5,-11],[-54,-29],[-10,1],[-4,32],[30,164],[15,-5],[32,-50],[-25,-47]],[[209378,118439],[16,11],[102,-29],[20,-13],[-26,-63],[-5,-33],[38,-30],[65,-79],[-24,-82],[-10,-11],[-9,-8],[-52,-10],[-16,44],[-44,215],[-9,8],[-28,0],[-16,12],[-2,68]],[[200214,114616],[24,2],[58,41],[8,-20],[-19,-55],[-28,-38],[-6,-20],[2,-41],[-56,-69],[-19,0],[-32,49],[-2,46],[43,75],[27,30]],[[200025,114194],[0,-1],[-70,-101],[-58,-46],[-4,0],[-14,40],[40,105],[44,54],[12,4],[50,-55]],[[199970,114289],[-5,-20],[-19,-27],[-54,-53],[-13,-4],[-8,6],[-3,16],[16,50],[28,46],[20,16],[20,1],[18,-31]],[[200051,114337],[27,11],[39,35],[38,-5],[-69,-98],[-50,-29],[-8,2],[-12,41],[8,19],[27,24]],[[200331,114374],[-22,-40],[-22,18],[-60,-62],[-8,2],[0,15],[8,14],[56,83],[18,17],[10,6],[4,-5],[-19,-43],[19,-14],[16,9]],[[204757,115185],[-8,-74],[23,-59],[-38,-71],[-43,-6],[-3,4],[21,48],[-5,61],[-12,28],[-22,-4],[-15,6],[20,94],[49,33],[33,-60]],[[204157,115890],[-125,-156],[-55,24],[114,179],[53,-6],[13,-41]],[[205718,115923],[-63,33],[-44,-22],[-16,-23],[-4,-30],[-15,0],[-11,60],[0,34],[9,8],[25,77],[-15,98],[-25,80],[123,61],[10,24],[26,19],[31,-11],[25,-39],[49,-55],[13,-1],[7,-24],[-15,-46],[-10,-13],[-37,-2],[-38,-164],[2,-58],[-19,-19],[-8,13]],[[205104,116127],[-18,2],[-61,-89],[-41,-19],[-37,0],[-126,-35],[-41,2],[-57,35],[-38,171],[-19,52],[-30,38],[20,101],[-4,22],[-125,-1],[-6,16],[34,87],[67,88],[105,56],[36,35],[115,82],[82,16],[21,-29],[-11,-8],[-2,-26],[16,-63],[96,-74],[20,-10],[16,7],[6,-11],[-41,-32],[-37,6],[-59,-5],[-6,-7],[-3,-26],[4,-41],[14,-31],[32,3],[60,-116],[32,-43],[34,-29],[8,-44],[-34,-59],[-22,-21]],[[204528,117256],[86,142],[0,127],[28,147],[30,67],[90,40],[39,-26],[28,-84],[-13,-47],[-27,-51],[-42,-32],[-21,0],[-15,-18],[-14,-62],[34,-94],[-44,-96],[-18,-19],[-46,-184],[-35,-49],[-72,-60],[-21,-10],[17,40],[-30,84],[-15,18],[-24,11],[-4,11],[7,37],[42,64],[40,44]],[[206153,116478],[24,-36],[5,-35],[-41,-50],[-52,18],[-6,48],[27,59],[16,11],[27,-15]],[[206670,116482],[20,14],[23,-1],[59,-85],[-1,-15],[-26,-30],[-99,0],[-42,53],[0,8],[4,14],[36,37],[26,5]],[[206323,116804],[56,-9],[49,13],[30,-19],[30,-53],[85,-106],[-43,-70],[-113,-107],[-40,-15],[-37,47],[4,39],[-34,58],[-85,13],[-18,-7],[-43,2],[-20,28],[4,38],[20,11],[77,97],[78,40]],[[205489,117247],[19,2],[27,-16],[34,-39],[129,-65],[44,-53],[21,-70],[-25,-114],[-45,-50],[-3,-14],[23,-27],[4,-14],[-1,-27],[-89,-116],[-34,-20],[-65,-11],[-5,-64],[-13,-7],[-26,5],[-17,45],[-21,32],[-32,23],[-31,2],[-13,9],[-12,11],[-15,32],[5,70],[15,39],[3,62],[-25,43],[-7,36],[0,20],[16,25],[25,1],[41,25],[24,74],[50,66],[10,34],[0,32],[-11,19]],[[206682,116849],[81,41],[33,-8],[30,-27],[4,-15],[-13,-3],[-10,12],[-42,-34],[-24,-101],[-30,-12],[-116,73],[28,44],[25,22],[34,8]],[[206251,116952],[46,-36],[24,-54],[-2,-11],[-18,-9],[-93,26],[-10,33],[17,87],[8,7],[37,-1],[7,-21],[-16,-21]],[[205080,117041],[82,-74],[3,-47],[-40,-51],[-36,4],[-42,24],[-29,19],[-23,8],[-27,11],[-25,2],[-30,51],[-6,47],[22,21],[21,10],[8,-1],[122,-24]],[[207118,117182],[79,-15],[13,-30],[-5,-9],[-32,10],[-37,-7],[-21,-12],[-12,-9],[-4,-21],[3,-38],[-30,-22],[-65,-7],[-29,16],[-9,18],[8,89],[46,10],[30,-15],[27,0],[20,13],[18,29]],[[206156,117695],[73,-248],[-40,-30],[-93,55],[-56,44],[6,55],[30,68],[-5,46],[12,66],[22,19],[18,2],[23,-15],[10,-62]],[[198072,111200],[-193,101],[-101,94],[-130,120],[-32,29],[-20,88],[17,166],[3,32],[44,239],[-6,12],[0,3],[-19,11],[-1,1],[-6,3],[-6,1],[-5,2],[-21,6],[-22,38],[2,4],[-88,68],[0,0],[-171,207],[-10,8],[-16,46],[-51,59],[-79,22],[-55,49],[-62,160],[0,3],[-13,73],[4,113],[82,293],[-1,0],[3,14],[33,167],[-28,121],[13,17],[13,16],[0,-1],[7,59],[-71,87],[-26,511],[-3,54],[-5,83],[0,5],[-1,50],[1,15],[-26,383],[0,1],[-11,465],[-3,139],[-31,886],[0,1],[-27,819],[0,2],[-5,129],[-12,278],[-57,1336],[-31,720],[-83,1310],[-57,1013],[-32,403]],[[196677,122334],[197,36],[60,21],[19,11],[24,44],[-9,18],[54,23],[145,-8],[120,-112],[21,-75],[-5,-20],[21,-117],[40,-135],[44,-35],[102,-29],[52,26],[13,17],[29,111],[85,326],[2,259],[-60,64],[-5,46],[99,121],[62,32],[101,-17],[36,-33],[2,-46],[50,-62],[65,-43],[192,-63],[29,-4],[64,32],[29,116],[-32,103],[-54,79],[-50,17],[-45,27],[-148,170],[-25,103],[6,37],[76,88],[52,85],[-6,69],[106,114],[347,338],[50,34],[298,197],[67,14],[199,260],[-39,83],[-36,104],[78,40],[-6,7],[3,17],[34,57],[77,79],[90,85],[127,34],[86,65],[79,78],[33,75],[50,202],[-44,55],[-49,39],[-171,44],[-5,222],[11,239],[76,148],[19,22],[118,37],[53,204],[-147,137],[-47,54],[-7,28],[313,693],[71,93],[49,42],[151,51],[282,237],[123,778],[95,603],[654,892],[925,1239],[1254,1659],[285,-53],[334,-83],[47,-27],[36,-93],[6,-24],[-35,-25],[-4,-4],[9,-61],[-17,-6],[-9,1],[-27,-44],[13,-587],[37,-58],[25,-20],[188,-103],[147,-69],[57,-42],[93,-96],[175,74],[477,229],[524,235],[386,52],[416,288],[102,22],[182,2],[161,-31],[59,-28],[259,-171],[725,-567],[12,-17],[11,-68],[49,-87],[172,-229],[155,-131],[112,-55],[94,-66],[4,-27],[0,-1472],[1,-37],[26,-2374],[4,-1667],[45,-204],[18,-357],[0,-48],[-61,-20],[-79,-63],[-17,-44],[-41,-500],[45,-67],[8,-12],[180,-50],[398,-269],[309,-92],[157,-35],[70,-4],[32,22],[9,15],[-10,22],[5,11],[48,15],[78,2],[21,-9],[89,-118],[6,-34],[10,-107],[-17,-236],[-85,38],[-54,-11],[-148,-99],[112,-313],[48,-28],[111,-133],[29,-65],[-26,-176],[-113,-214],[-21,-19],[-73,-29],[-14,-50],[95,-185],[214,-388],[186,-178],[35,-18],[18,-3],[126,95],[11,82],[44,130],[26,22],[46,-4],[402,-140],[119,-153],[60,-98],[79,-216],[-55,-15],[-43,-45],[66,-58],[64,-76],[27,-51],[8,-55],[16,-36],[50,-70],[60,-205],[18,-28],[115,-104],[41,-5],[23,-26],[4,-46],[-9,-31],[-12,-3],[-4,-69],[34,-98],[10,-29],[-54,-39],[-13,-22],[37,-119],[42,-26],[31,18],[53,5],[8,-13],[-2,-14],[-39,-36],[-33,-8],[-23,13],[-12,-5],[-36,-43],[-21,-38],[-91,-97],[-23,-16],[-63,-16],[-43,32],[-26,-9],[-4,-57],[-37,-80],[-37,-10],[-33,13],[-23,-6],[-19,-119],[-91,-109],[-38,-8],[-32,-48],[-26,-73],[2,-6],[-56,-30],[-44,8],[-18,-5],[-20,-36],[3,-38],[7,-11],[-87,-32],[-78,-10],[-47,22],[-15,-4],[-84,-71],[-10,-42],[14,-35],[-22,-20],[-52,-38],[-33,-9],[-46,4],[-30,55],[2,16],[43,3],[63,105],[4,70],[-22,30],[-41,24],[7,159],[28,27],[4,44],[-35,9],[-144,-40],[-30,-2],[-76,-85],[-16,-62],[8,-19],[18,-13],[25,-52],[15,-102],[-19,-36],[-34,-24],[-33,36],[-8,-2],[-26,-68],[-11,-51],[-24,-42],[-23,14],[-26,32],[-7,22],[-28,6],[-56,-16],[-14,-13],[-4,-14],[-34,-12],[-127,99],[-4,54],[-45,40],[-62,-19],[-5,-32],[-25,-23],[-11,-2],[-23,24],[-12,1],[-28,-23],[-5,-12],[-83,-292],[19,-19],[28,-86],[-22,-42],[-294,-28],[-17,2],[-14,50],[-14,8],[-92,-2],[-39,-16],[-23,-29],[14,-61],[-17,-54],[-39,-47],[-32,16],[-40,-11],[-35,5],[2,44],[10,13],[-10,87],[-40,86],[-19,14],[-31,8],[-24,-4],[-20,-18],[-9,-48],[1,-67],[-57,1],[-20,16],[-11,29],[0,35],[-12,36],[-77,66],[-37,7],[-17,-13],[-4,-23],[9,-44],[-49,-93],[10,-131],[10,-25],[-2,-38],[-14,-31],[-20,-5],[-21,-29],[-8,-32],[0,-42],[63,-139],[0,-22],[-13,-24],[-50,26],[-35,54],[-33,-13],[0,-33],[-17,-83],[-28,-77],[-44,125],[-6,54],[-29,14],[-19,-6],[-15,-15],[11,-37],[-14,-47],[-19,-3],[-40,23],[-30,2],[-5,-4],[-17,-15],[0,-66],[-63,-60],[-25,-1],[-43,65],[-12,33],[-20,15],[-17,-11],[-32,-52],[20,-33],[-74,-148],[-20,2],[-17,-14],[-2,-34],[7,-37],[-24,-64],[-40,6],[-24,18],[-34,61],[-6,125],[-31,16],[-14,-25],[-11,-2],[-39,70],[-31,82],[-2,98],[-14,40],[-12,81],[1,68],[16,42],[-9,35],[-20,19],[-102,18],[-31,-15],[-12,-10],[-2,-21],[-29,-15],[-86,9],[19,33],[-2,31],[-8,13],[-80,25],[-37,-27],[-12,-36],[11,-77],[-19,-4],[-55,38],[-29,60],[-34,4],[-23,-62],[-9,-59],[-39,-41],[-63,-11],[-3,-56],[15,-25],[97,38],[77,-36],[11,-16],[3,-46],[-23,-15],[0,-14],[126,-121],[22,13],[22,-4],[24,-29],[46,-86],[36,-126],[4,-76],[-67,-107],[-152,-90],[-153,1],[-53,-25],[-32,-37],[-2,-48],[4,-18],[9,-6],[16,-70],[-98,-112],[-80,-11],[-14,33],[-81,41],[-16,27],[-30,22],[-44,-3],[-42,26],[-67,111],[-6,48],[-18,53],[-18,18],[1,69],[69,48],[11,17],[-3,18],[-43,34],[0,8],[43,91],[14,3],[35,36],[3,27],[-9,33],[112,72],[14,-9],[12,4],[9,13],[-4,52],[-49,104],[-24,31],[-32,5],[-12,-18],[-6,-46],[-87,-100],[-20,-7],[-22,1],[-22,24],[5,124],[10,62],[-35,45],[-32,7],[-26,-10],[-18,-21],[-14,-33],[18,-121],[-19,-70],[-1,-35],[12,-27],[0,-35],[-18,-7],[-45,5],[-19,50],[10,45],[29,34],[-28,141],[-18,9],[-34,-23],[-19,-77],[-21,-13],[-33,8],[-56,-70],[-17,-7],[-76,30],[-21,-5],[-16,-18],[-4,-23],[6,-46],[20,-54],[34,-13],[17,-83],[-31,-43],[-34,-66],[-14,-76],[3,-23],[8,-25],[28,-35],[65,-5],[26,-47],[-3,-20],[13,-51],[34,-55],[-1,-24],[-37,-52],[6,-42],[17,-27],[-6,-41],[-35,9],[-59,36],[-1,9],[-43,48],[-36,23],[-113,109],[-45,4],[-38,25],[-5,19],[-9,9],[-195,65],[-156,111],[-27,33],[-48,14],[-58,-8],[-16,-13],[-19,-32],[-86,-63],[-118,22],[-5,22],[11,89],[15,74],[14,18],[10,45],[-14,64],[-11,168],[23,95],[51,33],[57,138],[8,56],[-46,-12],[-50,-14],[-70,-32],[-110,-86],[-78,-83],[-23,12],[-15,37],[-8,27],[3,8],[-18,27],[-15,7],[-97,-20],[-16,-46],[-54,-47],[-131,-15],[-31,-55],[23,-90],[21,-52],[42,-26],[23,-30],[47,-95],[-23,-158],[-16,-48],[-74,-90],[-90,-8],[-5,-102],[-44,-84],[-43,-40],[-3,-3],[-39,-73],[-13,-43],[3,-49],[-33,-96],[-3,-38],[-7,-82],[-24,-30],[-61,-3],[-7,-20],[-5,-21],[5,-63],[15,-69],[-17,-61],[-75,-66],[-1,-54],[33,-39],[11,-2],[46,26],[74,23],[20,-1],[27,-14],[42,-65],[-62,-82],[-6,3],[0,24],[-20,8],[-30,2],[-14,-12],[-43,-61],[22,-45],[-27,-24],[-48,-12],[-69,-50],[-47,-46],[-8,-11],[13,-49],[-15,-8],[-75,-36],[-50,2],[-28,-17],[-86,-99],[-15,-40],[15,-38],[-9,-46],[-27,-43],[-39,-31],[-85,-20],[-19,-30],[-63,-20],[-20,59],[-8,51],[-48,68],[-8,3],[-5,3],[-16,-5],[-71,-70],[-24,-3],[-20,10],[54,58],[3,27],[-64,39],[-36,22],[-75,2],[-54,-50],[-32,-1],[-46,-1],[-38,37],[-65,27],[-47,-95],[-10,32],[-18,12],[-19,-13],[-34,-111],[-32,-191],[-87,-114],[-10,-56],[-63,-156],[-42,-31],[-5,29],[11,38],[-26,117],[-16,36],[-71,29],[-20,-8],[-5,-10],[1,-27],[20,-56],[-28,-99],[-20,-3],[-37,19],[-16,-2],[-10,-10],[-12,-93],[-36,-24],[-58,-24],[-6,6],[5,54],[22,-1],[23,27],[11,101],[-20,37],[-36,-4],[-32,-64],[1,-38],[-8,-29],[-22,-24],[-33,51],[2,32],[-19,12],[-55,-48],[-12,-94],[8,-67],[-9,-63],[-42,0],[-76,125],[0,21],[-25,19],[-18,4],[-2,-1],[-29,-9],[-33,-64],[-11,-45],[2,-43],[-9,-29],[-121,-152],[-33,5],[-68,-8],[-8,-8],[0,-13],[14,-20],[1,-12],[-209,-117],[-12,-79],[-47,-8],[-13,6],[-11,95],[9,44],[-13,39],[-35,10],[24,81],[-28,83],[-53,12],[-12,-5],[-58,-23],[-45,13],[-42,25],[-79,-70],[-17,14],[-18,-5],[-90,-84],[-24,-38],[-19,-73],[7,-8],[-1,-10],[-33,-36],[-19,-3],[6,52],[15,29],[9,35],[-11,20],[-145,-32],[2,35],[23,69],[32,52],[75,90],[26,55],[-4,32],[-13,34],[-30,-5],[-56,57],[0,32],[11,26],[60,49],[15,21],[0,23],[-26,32],[-34,-3],[-13,-13],[-34,-31],[-79,-107],[2,-34],[-43,-41],[-6,32],[-54,0],[-96,-52],[-130,-87],[-41,-52],[0,-32],[-81,-69],[-6,20],[19,44],[-11,17],[-53,-26],[-17,-29],[-11,-63],[13,-38],[-2,-17],[-86,-110],[-4,-20],[13,-41],[-5,-14],[-40,-15],[-15,15],[-73,-107],[-8,-32],[4,-9],[21,-15],[18,-12],[10,-18],[-2,-6],[-7,-7],[4,-21],[66,-100],[43,-65],[-22,-144],[10,-32],[49,-19],[15,-106],[-33,-37],[-39,-4],[-11,26],[-45,-5],[-45,-46],[-65,9],[-39,45],[-98,-60],[-31,-31],[-125,-19],[-40,-23],[-2,-2],[-29,-31],[-66,-109],[-21,-56],[-2,-44],[9,-86],[10,-27],[30,-46],[82,-64],[-45,-15],[-31,-25],[-53,-75],[4,-30],[-26,-51],[-33,-13],[-6,7],[-18,-2],[-54,-26],[-24,-32],[12,-48],[-2,-18],[-64,-96],[-67,-66],[-19,-15],[-25,18],[-46,12],[-119,-11],[-64,-36],[-5,-6],[-63,-68],[-33,-56],[-82,-201],[-32,-103],[11,-57],[55,-79],[-3,-21],[-41,-88],[-114,-180],[-57,-178],[1,-27],[-15,-40],[-58,-75],[-4,-5],[-3,-24],[-36,-84],[-26,-29],[-113,-53]],[[197642,103900],[-2,-18],[-1,-4],[-30,12],[-27,50],[-2,3],[-1,2],[14,31],[9,19],[1,-1],[14,-18],[2,-3],[13,-17],[11,-54],[-1,-2]],[[198466,103328],[79,-18],[27,14],[15,-10],[37,-80],[1,-48],[-10,-62],[10,-34],[20,-40],[34,-33],[36,-21],[40,-6],[39,-18],[17,-40],[3,-33],[9,-5],[30,-4],[23,13],[44,64],[-2,48],[8,20],[26,31],[49,8],[15,-120],[-11,-80],[4,-133],[-10,-27],[-166,-8],[-154,12],[-223,2],[-406,-38],[-86,-27],[-52,-31],[-61,-56],[-14,-33],[7,-15],[-10,-26],[-25,-14],[-97,66],[-64,64],[-71,99],[19,31],[78,12],[44,-10],[63,-29],[30,6],[22,20],[146,221],[18,6],[44,49],[3,33],[37,76],[53,52],[138,98],[168,106],[18,-6],[8,-46]],[[200314,102464],[37,7],[72,48],[60,64],[54,87],[10,102],[-8,38],[-16,23],[-12,21],[-26,36],[-14,21],[1,19],[57,-29],[56,-85],[213,-446],[0,-70],[-15,-50],[-5,-10],[-34,-25],[-98,-40],[-50,-7],[-137,23],[-112,9],[-50,-18],[-80,8],[-190,67],[-244,133],[-70,26],[-39,32],[-24,35],[-8,44],[55,-2],[41,-22],[18,-12],[16,-39],[39,-25],[76,0],[46,22],[263,-4],[118,19]],[[187868,106192],[-35,0],[-42,182],[358,1316],[213,785],[167,608],[154,561]],[[191639,109550],[27,-1],[144,-6],[473,-17],[630,-24],[120,-4],[548,-21],[111,-3],[341,-12],[121,-4],[500,-17],[16,-1],[327,-10],[911,-28],[145,184],[33,42],[137,3],[0,0],[0,0],[97,-28],[-16,263],[75,90],[58,33],[132,62],[203,95],[75,35],[151,52],[239,97],[3,2],[58,10],[0,0],[45,-1],[61,-19],[137,-107],[115,56]],[[197656,110271],[-2,-108],[46,-341],[46,-172],[75,-179],[7,-30],[-30,-32],[0,-24],[52,-40],[57,-8],[16,-9],[54,-62],[3,-28],[145,-53],[25,6],[4,39],[66,76],[67,58],[55,16],[37,-23],[-10,-59],[-4,-53],[4,-22],[29,-16],[71,13],[14,-59],[1,-43],[-9,-23],[-43,-1],[-47,-31],[-63,-141],[-70,-89],[-37,-9],[-12,6],[0,18],[-1,21],[-8,13],[-7,11],[-12,1],[-11,-1],[-10,-6],[-11,-21],[-52,-57],[-114,-29],[-27,26],[-74,-32],[-172,-44],[-41,-36],[-29,-14],[-92,-6],[-84,-19],[-4,-17],[23,-101],[23,-11],[10,6],[55,-10],[41,-79],[-18,-65],[-21,-14],[-21,19],[-38,-6],[-81,-57],[-25,-43],[-5,-15],[2,-11],[-25,-20],[-51,30],[-35,5],[-16,-6],[-47,-44],[2,-65],[4,-34],[18,-34],[56,-16],[17,-13],[24,-24],[-14,-20],[-113,9],[-25,90],[-1,78],[-12,21],[-50,-50],[0,-12],[-1,-12],[-81,-86],[-18,-36],[-10,-48],[5,-22],[15,-3],[6,-28],[11,-24],[28,-8],[10,-9],[-6,-5],[-3,-10],[-1,-16],[2,-22],[42,-83],[28,-54],[1,-29],[-39,15],[-33,35],[-9,9],[-18,3],[-9,-2],[-58,-16],[-32,-28],[-12,-39],[-6,-20],[-14,-46],[9,-52],[28,-41],[17,-23],[-19,-72],[4,-26],[33,-57],[25,-19],[80,4],[67,21],[13,-17],[35,-24],[47,-5],[45,11],[17,31],[37,67],[1,36],[-5,17],[-67,33],[-7,16],[36,11],[91,4],[6,-40],[38,-75],[33,-48],[39,-38],[74,-4],[23,-7],[47,-15],[85,-45],[29,-11],[36,-12],[23,-26],[37,-76],[27,-34],[61,-54],[30,-15],[14,-114],[16,-80],[29,-28],[77,-149],[78,-123],[87,-98],[7,-35],[-33,-26],[-3,-39],[18,-87],[-4,-24],[-24,1],[-68,-45],[-8,-78],[15,-45],[-12,-22],[-29,-12],[-30,36],[-33,3],[-60,-28],[8,-40],[41,-62],[134,-131],[39,-10],[12,15],[63,-56],[28,-35],[26,-15],[31,2],[37,35],[53,11],[112,-101],[24,-64],[-4,-24],[6,-23],[51,-88],[24,-152],[-37,-96],[-24,-41],[-4,-33],[8,-44],[14,-24],[12,-22],[2,-4],[3,-4],[27,-34],[25,-30],[3,-4],[0,0],[2,-2],[1,-1],[2,-2],[6,-6],[0,0],[0,0],[75,-74],[4,-3],[0,0],[35,-26],[5,-3],[29,-22],[2,-1],[1,-1],[5,-4],[0,0],[1,0],[1,-1],[46,-18],[166,-66],[4,-1],[2,-1],[128,-26],[6,-1],[1,0],[209,-15],[10,-1],[3,0],[85,-6],[2,0],[0,-1],[9,-6],[42,-29],[6,-4],[0,-1],[1,0],[3,-8],[7,-16],[31,-35],[1,0],[2,-1],[6,0],[8,0],[10,11],[14,15],[3,4],[4,4],[10,11],[2,2],[2,2],[35,38],[9,10],[0,1],[33,22],[2,1],[3,2],[2,1],[12,8],[15,10],[2,2],[66,30],[2,1],[16,7],[14,6],[1,0],[26,-5],[20,6],[64,20],[56,17],[1,0],[7,2],[0,0],[5,0],[16,-1],[25,-2],[17,-2],[1,0],[8,-1],[0,0],[22,9],[3,2],[22,8],[42,17],[0,0],[4,1],[2,2],[36,9],[16,5],[52,14],[9,2],[4,1],[13,6],[96,48],[2,1],[2,1],[32,16],[0,0],[6,6],[1,2],[1,1],[46,51],[4,5],[1,1],[17,39],[-2,150],[-17,187],[33,51],[-10,17],[-34,7],[-45,35],[-4,64],[-19,87],[-53,4],[-34,-13],[-41,-78],[-1,-60],[2,-59],[4,-43],[-7,-10],[-5,4],[-13,26],[-7,83],[-4,193],[-13,232],[-23,132],[-21,63],[-22,40],[-46,53],[-55,40],[-89,49],[-3,2],[-26,2],[-53,-13],[-32,-16],[-31,-30],[-28,-54],[-3,-27],[8,-32],[25,-31],[-1,-7],[-15,0],[-22,12],[-41,41],[-39,75],[-54,59],[-20,14],[-18,0],[-6,16],[26,45],[46,29],[69,16],[64,2],[107,-18],[22,-8],[140,-47],[122,-64],[89,-71],[87,-106],[4,-6],[9,-16],[4,-7],[2,-3],[49,-85],[8,-14],[0,-1],[7,-13],[1,0],[5,-11],[17,-37],[1,-2],[1,-1],[2,-5],[2,-3],[66,-139],[0,-1],[1,-1],[63,-187],[86,-329],[34,-178],[27,-338],[1,-214],[0,-2],[0,-21],[0,-6],[0,0],[0,-3],[-1,-10],[-3,-14],[0,-2],[-5,-32],[-9,-49],[0,0],[-3,-9],[-32,-72],[-2,-6],[-16,-35],[-13,-23],[-2,-1],[-4,-1],[-4,-1],[-11,-2],[-5,-2],[-18,-28],[-17,-31],[-31,-118],[-24,-108],[-20,-135],[-1,-1],[-29,-45],[-6,-9],[-3,-1],[-18,-6],[-1,0],[-1,0],[-25,4],[-1,0],[-1,1],[-10,12],[-8,26],[6,11],[13,-1],[3,-1],[7,9],[27,37],[1,3],[1,3],[1,3],[23,65],[10,58],[16,99],[1,1],[15,48],[9,28],[11,34],[2,6],[1,3],[4,12],[1,4],[8,25],[0,1],[0,29],[-10,33],[0,1],[-54,47],[-1,0],[0,1],[0,0],[0,0],[-20,17],[0,1],[-1,0],[-23,13],[-1,0],[-14,8],[0,1],[-1,0],[-26,2],[-6,-3],[-19,-7],[-29,-11],[-1,0],[0,0],[-29,-5],[0,0],[-2,0],[-65,-10],[-124,-10],[-112,-36],[-4,-1],[-2,-1],[-4,-1],[0,-1],[-45,-14],[-20,-6],[0,0],[-1,-1],[-1,0],[-1,0],[0,0],[-5,0],[-13,0],[-4,0],[-5,0],[-37,0],[-119,-26],[-201,-83],[-38,-39],[3,-15],[-15,-33],[-22,-8],[-8,8],[-7,34],[2,39],[-20,36],[-25,11],[-34,0],[-114,-23],[-30,20],[-30,9],[-50,-8],[-32,-18],[-16,-22],[0,-15],[-19,-38],[-34,-23],[-78,-25],[-2,1],[-27,4],[-20,-2],[-86,-8],[-2,-5],[-10,-22],[-6,-14],[-8,-18],[-3,-8],[-5,-8],[-14,-23],[-21,-36],[-4,-8],[-14,-23],[-1,-1],[-2,-3],[-1,-1],[0,0],[-39,-47],[-2,-2],[-11,-13],[0,0],[0,0],[-26,-16],[-6,-4],[-2,-1],[-4,-2],[-24,-9],[-105,-15],[-2,0],[-34,-1],[-102,-2],[-1,0],[0,0],[-4,-1],[-1,0],[-47,-7],[-53,-7],[0,0],[-1,0],[-1,0],[-2,-1],[-26,-3],[-53,-8],[0,0],[-7,-2],[-5,-1],[-9,-3],[-1,0],[-2,-1],[-1,0],[-58,-16],[0,-1],[0,0],[-36,-29],[-24,-40],[0,-1],[-5,-9],[-2,-3],[-8,-13],[0,0],[-35,-24],[-21,-4],[-22,-3],[-109,-80],[-107,-51],[-84,-81],[3,-20],[-16,-25],[-108,-72],[-100,-4],[-67,-18],[-79,-80],[-35,-17],[-131,-6],[-93,-27],[-34,-20],[-41,-12],[-9,13],[4,17],[80,79],[16,-3],[17,-26],[27,-4],[21,6],[83,32],[103,83],[98,37],[96,22],[53,68],[46,14],[78,74],[33,43],[184,122],[133,88],[16,33],[-4,37],[5,38],[19,23],[22,13],[7,24],[-4,29],[-39,110],[2,24],[44,72],[-19,44],[-27,21],[8,32],[43,26],[4,25],[-32,119],[-11,12],[-45,4],[57,60],[75,24],[7,43],[-11,28],[-60,27],[-6,3],[-24,-17],[-20,-1],[-51,32],[-138,45],[-39,24],[-27,-15],[-10,-46],[28,-52],[14,-94],[-8,-45],[-36,16],[-55,44],[-40,-14],[-22,-86],[0,-1],[-4,-44],[16,-33],[2,-34],[-29,-63],[-14,-2],[-16,19],[-8,20],[-3,8],[-119,29],[-15,-4],[-9,-14],[-2,-34],[42,-24],[17,-47],[-3,-11],[-34,-23],[-92,-2],[-29,20],[-1,1],[0,0],[-2,1],[-31,-10],[-9,-13],[-1,-1],[4,-28],[0,0],[3,-24],[12,-99],[-8,-22],[-1,-2],[0,-1],[-2,-6],[-1,0],[-14,2],[-21,64],[0,2],[-2,5],[-19,58],[-1,4],[2,40],[-5,15],[-11,11],[-23,9],[-32,14],[-6,2],[0,0],[-1,-1],[-55,-42],[-4,-4],[-28,-21],[32,-44],[17,-83],[-5,-5],[-35,14],[-21,60],[-13,16],[-26,3],[-9,-9],[-1,-45],[9,-32],[-14,-49],[-24,-33],[-14,18],[-19,0],[-7,-10],[5,-27],[35,-42],[23,-124],[-37,0],[-138,-48],[-15,-49],[-73,-43],[-59,-15],[-15,-13],[-44,-36],[-84,35],[-100,16],[-128,-59]],[[196544,103454],[-47,655],[-1,13],[0,10],[-3,35],[0,0],[0,96],[-2,0],[-39,11],[-30,7],[-81,19],[0,2],[0,15],[-19,5],[-37,9],[0,0],[-11,3],[-5,1]],[[196269,104335],[-107,176]],[[196162,104511],[-134,207],[-207,118],[0,0],[-37,22],[-42,129],[-1,126],[8,8],[-7,296],[0,1],[-49,16],[-7,-1],[-29,-5],[-8,-1],[-2,0],[-21,-4],[-10,-1],[-10,-2],[-19,143],[0,1],[1,207],[0,10],[0,91],[0,167],[-281,-5],[-147,-3],[-6,0],[-4,0],[-97,-10],[-1,-1],[-117,-3],[-64,-1],[-52,-2],[-763,-28]],[[143586,124589],[61,-14],[22,-29],[30,-5],[38,0],[70,21],[18,-1],[13,-41],[-23,-17],[-18,-2],[-5,2],[6,11],[-2,17],[-22,5],[-20,-23],[-5,-27],[4,-11],[36,-14],[45,-40],[17,-104],[0,-34],[-32,-37],[-12,-49],[8,-53],[13,-30],[37,-61],[12,-153],[-16,-57],[-66,-66],[-32,-17],[-32,-7],[-13,-11],[-14,-55],[-26,-16],[-75,-14],[-207,52],[-17,17],[-26,60],[37,131],[41,37],[15,36],[-2,41],[-16,52],[17,118],[14,35],[37,45],[26,14],[42,53],[26,95],[2,73],[-9,25],[-2,36],[5,12]],[[132155,136268],[32,23],[-3,22],[9,12],[63,60],[157,77],[131,37],[115,62],[81,-47],[87,14],[34,36],[36,22],[82,20],[46,-5],[90,40],[16,-52],[-6,-48],[-28,-20],[-81,-17],[-37,-24],[-36,-28],[-59,-75],[-97,-79],[-201,-139],[-41,-46],[-1,-32],[9,-14],[7,-31],[-4,-24],[-17,-27],[-331,-234],[-178,-81],[-197,-69],[-72,-11],[-147,-68],[-77,0],[-169,-59],[-69,-38],[-21,-38],[-143,-72],[-23,-70],[0,-38],[40,-31],[57,0],[157,35],[2,-9],[-46,-46],[-320,-119],[-87,-44],[-80,-14],[-44,-16],[-189,-83],[-59,-35],[-123,-23],[-119,37],[-9,9],[1,38],[-35,46],[-120,7],[-3,10],[3,8],[22,13],[-67,65],[-15,-3],[-15,28],[29,61],[76,35],[21,27],[-2,35],[25,29],[129,105],[308,163],[282,122],[89,49],[195,85],[34,11],[15,-10],[46,5],[73,41],[-5,14],[10,15],[212,109],[72,1],[21,-9],[84,39],[57,37],[1,44],[27,29],[73,37],[60,46],[82,45],[38,-3],[40,26]],[[147153,124873],[-3,7],[-11,19],[-54,53],[0,1],[-4,5],[-40,60],[-20,17],[-38,12],[-41,33],[-2,18],[17,108],[18,4],[46,-14],[25,-25],[53,-79],[19,-49],[50,-129],[40,-28],[146,-61],[88,12],[79,-24],[222,-92],[21,7],[20,22],[6,36],[-7,29],[8,5],[31,-47],[28,-64],[173,-62],[-1,-12],[-51,-66],[-7,-51],[-81,-52],[-5,-12],[6,-26],[-44,-26],[-48,-4],[-40,23],[-77,8],[-67,22],[-55,-8],[-61,33],[-24,36],[-7,48],[-58,49],[-91,127],[-43,32],[-74,32],[-21,20],[-10,32],[-11,21]],[[141653,120859],[-81,-43],[-66,-11],[-77,27],[-7,40],[8,38],[47,110],[13,14],[74,26],[91,-34],[51,-53],[-52,4],[-14,-7],[-12,-20],[-5,-17],[2,-23],[28,-51]],[[141875,121606],[99,-14],[47,-14],[14,-9],[46,-63],[2,-87],[-15,-38],[-14,-129],[5,-31],[21,-39],[1,-51],[-75,-34],[-58,39],[-25,39],[-63,74],[-56,44],[-23,27],[-6,19],[-17,177],[20,59],[33,31],[22,5],[42,-5]],[[151330,104620],[-161,-4],[-7,-1],[-13,0],[-4,0],[-296,-11],[-32,-1],[-5,0],[-152,-6],[-11,-1],[-96,-4],[-71,-2],[-286,-13],[-429,-19],[-1,0],[-1759,-65],[-133,-5],[-10,-1],[-1,0],[-141,-4],[-1349,-44]],[[138972,104757],[5,4],[79,54],[1,1],[26,18],[0,0],[4,3],[57,40],[3,2],[4,3],[5,4],[86,67],[59,46],[66,51],[6,5],[66,61],[65,59],[2,1],[111,124],[5,5],[8,10],[5,5],[0,0],[52,57],[2,2],[20,23],[0,0],[10,10],[6,8],[9,13],[1,1],[3,5],[14,21],[0,1],[2,3],[3,4],[38,58],[9,15],[4,8],[30,62],[3,6],[0,1],[4,7],[4,8],[2,3],[8,18],[3,6],[2,7],[62,187],[2,5],[0,2],[1,2],[1,3],[8,23],[18,56],[0,1],[26,54],[1,1],[14,30],[2,3],[11,24],[3,5],[18,38],[8,17],[3,7],[1,2],[2,4],[86,177],[27,57],[41,102],[18,65],[23,26],[46,53],[1,1],[5,7],[0,0],[2,3],[1,2],[1,1],[84,114],[5,6],[6,8],[3,3],[121,164],[7,10],[12,18],[1,2],[3,5],[10,15],[3,4],[2,3],[1,1],[25,38],[5,7],[6,10],[0,0],[8,14],[4,6],[1,3],[55,95],[32,55],[126,281],[91,235],[46,180],[-2,36],[30,57],[11,30],[45,122],[44,180],[30,270],[3,26],[20,124],[0,0],[2,7],[0,2],[13,43],[11,40],[7,46],[1,2],[1,8],[-13,213],[9,36],[39,96],[27,137],[7,136],[-6,215],[-2,23],[-7,81],[-3,245],[4,129],[-13,121],[-7,175],[-37,344],[-24,136],[-42,168],[-22,39],[-1,47],[-15,82],[-64,173],[-32,87],[-67,151],[-45,102],[-2,4],[-16,36],[-50,103],[-54,112],[-15,30],[-1,2],[-3,7],[-1,2],[-8,16],[0,1],[-8,16],[-13,27],[-91,188],[-4,7],[-8,17],[-1,2],[-8,16],[-3,7],[-10,21],[-5,9],[-9,18],[-21,54],[-5,12],[-2,5],[-5,12],[-11,27],[-15,44],[-57,165],[-27,76],[0,1],[-1,3],[-1,2],[-9,34],[-1,1],[-1,3],[-2,8],[-35,124],[-1,3],[-21,87],[-6,22],[-3,11],[-2,11],[-17,69],[-24,97],[0,0],[-1,2],[-29,89],[-2,5],[-5,14],[-2,6],[-1,2],[-6,12],[-2,4],[0,1],[-2,3],[-3,6],[0,0],[-83,169],[-13,26],[0,1],[-11,22],[-7,14],[-3,7],[-3,5],[-2,3],[-1,4],[-3,5],[-4,9],[-5,9],[-1,2],[0,1],[-34,82],[-31,112],[-2,8],[-1,12],[-1,1],[0,6],[-1,6],[0,1],[-6,51],[0,5],[0,4],[1,38],[0,10],[0,4],[7,58],[1,8],[1,3],[31,87],[2,5],[6,8],[3,5],[33,49],[6,9],[6,10],[13,18],[2,4],[10,12],[4,5],[7,9],[5,7],[1,1],[4,5],[21,26],[29,36],[5,7],[19,23],[4,7],[0,0],[1,2],[62,88],[7,10],[4,8],[55,112],[1,3],[1,3],[8,24],[18,58],[2,4],[23,130],[0,2],[0,16],[0,1],[-1,85],[0,3],[0,4],[0,13],[0,1],[-6,45],[-2,16],[-2,12],[0,3],[-1,2],[-3,11],[-38,153],[-1,16],[-1,12],[-2,30],[-5,83],[0,2],[-1,2],[-5,24],[-6,30],[-12,54],[-30,144],[-2,5],[0,1],[0,1],[-67,136],[-7,13],[-4,6],[-63,97],[-5,9],[-4,9],[-1,2],[-16,33],[-22,76],[0,48],[0,2],[1,1],[20,45],[1,3],[1,1],[27,33],[2,4],[10,7],[105,81],[53,40],[26,20],[2,2],[1,0],[1,2],[61,67],[11,16],[4,6],[3,4],[13,19],[1,3],[75,136],[11,22],[3,6],[2,4],[35,76],[24,53],[1,1],[63,92],[30,78],[1,2],[10,26],[9,30],[20,70],[60,66],[2,4],[28,73],[3,7],[6,15],[1,2],[2,4],[8,18],[4,7],[3,6],[26,55],[1,2],[15,31],[116,184],[62,276],[14,99],[-1,69],[-13,83],[1,69],[10,87],[0,0],[0,0],[19,29],[18,63],[19,83],[36,152],[11,88],[-17,138],[-24,72],[-81,193],[-18,78],[8,114],[6,26],[24,35],[59,35],[221,72],[10,9],[32,27],[2,1],[136,-1],[2,0],[5,0],[1,1],[46,13],[8,2],[2,2],[54,45],[6,4],[41,83],[4,12],[1,3],[0,1],[7,27],[5,15],[1,42],[5,131],[21,83],[0,66],[-19,152],[-5,96],[6,55],[15,49],[29,26],[76,23],[26,-41],[35,-23],[45,-16],[62,2],[45,31],[27,43],[21,73],[20,30],[32,25],[39,68],[13,50],[26,21],[58,-2],[66,-31],[23,-21],[42,-72],[37,-21],[57,-5],[67,11],[76,27],[29,20],[99,140],[8,25],[8,87],[17,72],[35,41],[57,138],[20,22],[105,49],[61,54],[53,81],[20,63],[3,53],[69,147],[137,203],[20,-10],[6,-18],[17,-13],[51,0],[26,9],[78,61],[11,39],[39,51],[39,-3],[50,-103],[-17,-60],[-20,-19],[-56,-30],[-35,-42],[-2,-10],[-3,-8],[-3,-5],[-4,-2],[-6,0],[-7,0],[-6,6],[-14,2],[-60,-11],[-35,-20],[-53,-107],[19,-70],[95,-209],[36,-15],[27,-45],[0,-78],[-15,-11],[-14,10],[-85,-14],[-9,-93],[-35,-43],[-47,-42],[56,-69],[9,1],[7,-82],[1,-236],[-71,-18],[-15,-10],[-53,-153],[-20,-33],[-13,-48],[-12,-123],[3,-87],[36,-103],[17,-103],[-14,-72],[2,-2],[15,-19],[30,-19],[13,-2],[3,-1],[11,-2],[4,0],[32,-6],[11,1],[8,0],[21,2],[2,1],[1,0],[19,13],[1,1],[0,3],[1,0],[5,47],[3,20],[0,1],[1,4],[34,118],[1,3],[130,276],[25,24],[22,21],[9,80],[0,0],[0,3],[-83,5],[-1,0],[-22,-14],[-18,36],[5,7],[2,1],[19,23],[2,3],[1,0],[18,21],[44,52],[2,5],[3,5],[17,34],[11,40],[5,16],[33,116],[-1,4],[-1,4],[-5,23],[1,4],[4,19],[3,13],[4,4],[96,75],[1,0],[63,6],[9,-27],[4,-11],[4,-13],[1,-5],[7,-34],[1,-5],[5,-20],[7,-34],[-7,-11],[-14,2],[-2,0],[-2,1],[-2,0],[-8,-4],[-42,-25],[-12,-77],[-3,-20],[-3,-19],[-2,-11],[0,-1],[0,-1],[0,-8],[0,-1],[0,-1],[-1,-5],[0,-2],[-3,-71],[0,-8],[11,-25],[2,-5],[1,-2],[-4,-21],[-1,-4],[-30,-155],[-10,-33],[-5,-15],[-1,-1],[-21,-36],[-1,-2],[-12,-4],[-7,-2],[-12,-4],[-7,-2],[-1,-1],[-29,-21],[-23,-17],[-19,-13],[-5,-4],[-10,-14],[-13,-16],[-4,-6],[-17,-23],[-4,-5],[-3,-5],[-8,-10],[-7,-19],[-9,-22],[0,0],[0,-8],[0,-38],[0,-1],[0,-19],[0,-4],[0,-5],[-1,-26],[0,0],[-30,-75],[-8,-20],[-15,-38],[-4,-10],[-2,-3],[3,-3],[17,-21],[60,-32],[2,-1],[1,0],[58,-9],[40,7],[15,17],[51,61],[17,20],[0,0],[0,2],[3,22],[-1,5],[-2,23],[-2,15],[-7,14],[-8,15],[3,6],[4,9],[29,67],[12,7],[42,26],[10,6],[17,10],[6,4],[2,1],[2,1],[0,0],[43,50],[0,0],[0,0],[1,6],[8,46],[11,20],[0,0],[1,1],[4,9],[3,4],[10,17],[38,69],[60,108],[10,67],[62,83],[38,95],[64,335],[-12,98],[4,139],[11,46],[41,66],[-2,238],[-21,46],[-16,83],[-13,188],[-23,43],[-2,89],[-4,137],[62,177],[59,59],[75,56],[41,46],[59,49],[47,16],[20,-12],[57,7],[40,20],[29,31],[11,26],[60,42],[95,87],[48,18],[52,1],[143,47],[174,-16],[82,-8],[25,-2],[10,-1],[3,-1],[9,-1],[22,-2],[30,-9],[4,-1],[7,-2],[1,0],[1,0],[38,-2],[39,27],[86,17],[86,17],[59,12],[159,85],[12,48],[-2,35],[-12,39],[-21,21],[-199,34],[-1,0],[-9,2],[-5,1],[-2,0],[-1,0],[-32,-9],[-3,-11],[6,-5],[6,-6],[1,-1],[8,-7],[4,-4],[20,-3],[5,0],[-5,-7],[-58,22],[-149,59],[-10,4],[-9,3],[-3,1],[-22,24],[-12,13],[-2,2],[-8,8],[-61,65],[-3,4],[-64,81],[-2,3],[-32,93],[-25,72],[-19,56],[-1,2],[-5,21],[-1,1],[-16,65],[-1,10],[-1,3],[-5,53],[-1,9],[-7,63],[-1,6],[0,2],[0,0],[3,20],[1,6],[0,5],[1,2],[2,4],[20,43],[0,0],[2,4],[1,0],[14,16],[3,3],[3,3],[3,3],[7,7],[1,2],[1,0],[2,3],[1,1],[19,20],[5,5],[7,8],[52,84],[0,1],[12,26],[2,5],[0,1],[1,7],[2,20],[2,2],[10,11],[21,22],[7,6],[9,10],[2,0],[59,21],[14,5],[20,7],[56,20],[3,1],[15,6],[4,2],[4,4],[22,17],[5,6],[13,14],[4,5],[14,32],[4,9],[1,1],[80,71],[12,11],[2,3],[90,108],[7,8],[4,20],[6,27],[2,10],[-6,32],[0,1],[-1,2],[-5,7],[-8,9],[-5,7],[-10,14],[-3,3],[-3,2],[-9,6],[-4,2],[-10,7],[-38,24],[-51,33],[-2,1],[-2,0],[-2,0],[0,0],[-2,0],[-3,1],[-42,5],[-18,3],[-5,0],[-31,20],[-11,12],[20,10],[6,4],[45,-16],[208,0],[2,-1],[23,-7],[18,-5],[5,-2],[2,0],[8,-5],[7,-5],[2,-1],[36,-23],[159,10],[95,-36],[110,6],[2,0],[8,0],[6,1],[6,1],[16,3],[4,0],[26,17],[11,7],[2,2],[0,0],[0,0],[25,40],[3,4],[5,42],[-27,26],[-18,18],[-1,0],[-3,10],[48,33],[22,9],[1,0],[4,2],[78,-33],[35,7],[29,20],[6,-1],[23,-5],[27,-46],[10,-57],[125,-50],[9,-35],[127,-45],[147,-91],[114,-56],[67,-40],[8,-18],[52,-40],[0,0],[0,-1],[284,-188],[71,12],[25,46],[29,25],[51,1],[49,-30],[87,-39],[172,44],[146,-55],[71,-42],[202,-50],[41,-38],[29,-28],[57,-83],[86,-96],[65,-57],[39,-57],[8,-28],[-1,-70],[17,-93],[20,-53],[28,-39],[49,-39],[73,-34],[72,-6],[60,22],[13,13],[28,4],[70,-10],[41,-20],[75,15],[142,-5],[109,-36],[101,-89],[86,-104],[62,-58],[128,-80],[66,-13],[57,4],[64,-31],[67,0],[57,11],[90,-84],[108,-58],[88,-64],[163,-95],[106,-26],[74,18],[13,9],[4,28],[27,-1],[66,-54],[20,-4],[66,55],[29,-8],[41,-70],[0,0],[35,-47],[82,-108],[47,-34],[29,-34],[7,-22],[2,-7],[1,-1],[0,0],[7,-5],[71,-51],[1,0],[0,0],[2,-1],[5,-1],[39,-11],[11,-13],[13,-26],[-23,-70],[-90,-45],[0,-34],[24,-59],[67,-99],[12,-18],[10,-1],[47,-105],[3,-48],[16,-29],[14,-18],[41,-7],[40,-71],[79,-26],[1,-10],[-12,-11],[3,-44],[38,-148],[36,-42],[27,-106],[-2,-32],[41,-83],[12,-6],[20,-33],[20,-56],[-20,-17],[-61,15],[-52,29],[-139,46],[-64,45],[-36,58],[-116,40],[-127,-63],[-30,-33],[-42,-78],[-3,-17],[29,-75],[41,-24],[14,-19],[-17,-40],[-11,0],[-41,-48],[24,-189],[17,-56],[22,-40],[28,-30],[76,-40],[21,-61],[18,-17],[151,-83],[118,-28],[-2,-109],[0,-27],[0,-1],[0,-1],[10,-21],[14,-31],[1,-1],[5,-6],[0,0],[2,-2],[14,-17],[6,-8],[23,-28],[3,-32],[4,-39],[12,-109],[0,0],[-1,-16],[0,-5],[-1,-51],[-4,-101],[0,0],[-3,-14],[-1,-4],[0,-2],[1,-20],[1,-12],[1,-4],[0,-6],[4,-13],[20,-67],[1,-3],[9,-14],[12,-20],[3,-3],[3,-4],[22,-21],[9,-9],[2,-3],[3,-2],[-5,-46],[-1,-14],[-1,-7],[0,-1],[-1,-7],[0,-1],[0,-2],[-2,-19],[-3,-25],[-2,-9],[-6,-24],[-1,-2],[-24,-96],[-4,-13],[-1,-5],[-1,-5],[-1,-3],[-6,-23],[-22,-38],[-43,-75],[-1,-2],[-6,-26],[-3,-9],[0,-1],[-17,-68],[0,-1],[0,-1],[-2,-31],[0,0],[-1,-15],[0,-10],[-1,-10],[1,-8],[5,-107],[0,-2],[0,-7],[0,-6],[0,-3],[1,-6],[0,-2],[0,-3],[0,-8],[0,0],[17,-75],[0,-2],[1,-3],[0,-1],[1,-41],[-3,-12],[-3,-10],[-1,-3],[-3,-11],[-1,-3],[-24,-85],[-1,-2],[0,-1],[1,-13],[2,-127],[-34,-206],[-1,-76],[9,-70],[11,-29],[0,-23],[-44,-159],[-6,-72],[10,-87],[-16,-37],[-25,-16],[-31,13],[-44,1],[-34,-24],[-104,-128],[-46,-37],[-18,-33],[-24,-76],[-14,-14],[-48,-21],[-11,40],[-7,3],[-49,20],[-7,4],[-61,6],[-76,-17],[-31,-15],[-59,-60],[-47,-66],[-42,-104],[-14,-82],[-3,-63],[-42,-171],[0,-1],[-3,-11],[-1,-5],[-5,-21],[-1,-24],[-1,-32],[0,-5],[0,-1],[-2,-69],[0,-3],[0,-11],[1,-11],[2,-16],[1,-8],[-20,-91],[-54,-72],[-13,-37],[4,-48],[23,-64],[-63,-10],[-73,8],[-106,-19],[-108,-80],[-31,-77],[29,-132],[-105,-6],[-129,-7],[-11,-13],[-37,-11],[-21,-6],[-1,-1],[-1,0],[-2,0],[-56,0],[-32,0],[-148,19],[-1,0],[-2,0],[0,0],[0,0],[-71,-37],[-11,-11],[-1,-1],[-1,0],[-6,-6],[-5,-5],[-1,-5],[-1,-5],[0,-1],[0,-1],[-1,-1],[-1,-8],[0,-1],[-1,-1],[-8,-9],[0,0],[-2,-3],[-1,-1],[-1,0],[0,-1],[-1,-1],[-35,-43],[-1,0],[-27,-6],[-2,-1],[-9,-19],[0,-1],[-19,-42],[-1,-3],[0,0],[-17,-57],[-3,-56],[-60,-26],[-14,-38],[-21,-56],[-4,-211],[-31,-343],[-11,-51],[-59,-85],[-34,5],[-5,-8],[7,-43],[55,-175],[36,-70],[73,-142],[45,-43],[165,-94],[138,-10],[29,-9],[102,-55],[30,-7],[3,31],[161,-80],[82,-105],[16,-4],[108,-30],[13,3],[44,39],[130,147],[85,106],[119,170],[34,4],[17,42],[-9,30],[42,44],[56,41],[33,6],[9,-18],[25,-18],[97,18],[37,44],[10,27],[8,24],[20,36],[72,103],[4,27],[-10,15],[-19,8],[31,74],[45,65],[36,6],[18,19],[3,14],[-7,49],[6,39],[12,32],[63,36],[5,6],[-1,19],[112,65],[97,115],[2,66],[-7,23],[-27,30],[-26,9],[-2,17],[5,12],[34,17],[71,10],[48,24],[85,77],[49,90],[26,63],[1,23],[127,37],[115,10],[55,-5],[129,37],[39,18],[52,39],[47,11],[104,-11],[49,12],[27,14],[44,47],[62,126],[19,20],[93,7],[31,11],[86,86],[32,-2],[7,-12],[34,-6],[68,36],[47,6],[96,-97],[51,-30],[157,-40],[146,-68],[18,-47],[19,-21],[67,-13],[68,-54],[27,-32],[38,-84],[60,-114],[9,-7],[60,-150],[54,-169],[85,-79],[45,-76],[1,-30],[-16,-10],[-2,-9],[13,-25],[39,-32],[58,-310],[-4,-62],[6,-46],[19,-35],[22,-245],[5,-57],[-4,-47],[20,-330],[9,-64],[15,-42],[30,-186],[73,-204],[1,-28],[44,-164],[51,-132],[4,-29],[-5,-46],[16,-269],[-5,-97],[25,-73],[2,-87],[-11,-52],[35,-399],[14,-62],[38,-79],[21,-138],[0,-4],[5,-32],[1,-2],[5,-17],[16,-53],[5,-17],[1,-5],[0,0],[0,-2],[0,-1],[3,-22],[1,-12],[7,-72],[2,-12],[0,-1],[0,-2],[14,-65],[2,-11],[55,-74],[51,-129],[0,-1],[24,-50],[27,-56],[75,-159],[25,-11],[-116,-340],[-27,-51],[-55,-195],[-50,-765],[-96,-475],[-33,-116],[-16,-32],[-223,-265],[-21,-17],[-63,-9],[-66,42],[-198,-174],[-27,-18],[4,50],[21,34],[31,12],[25,41],[-60,58],[-1,83],[-26,68],[-48,-12],[-37,25],[-7,34],[45,44],[64,14],[6,45],[-31,32],[1,10],[76,50],[86,-30],[54,55],[17,26],[12,42],[-3,47],[-26,39],[-16,11],[-90,16],[-53,41],[-41,15],[-57,-2],[-19,-30],[-6,0],[-68,-4],[-98,-64],[-45,-70],[-56,-17],[-43,14],[-18,-5],[-59,-66],[-24,-72],[4,-49],[29,-27],[81,-37],[5,-26],[-5,-28],[3,-48],[24,-56],[-3,-34],[-8,-5],[-17,23],[-28,13],[-89,-1],[-48,-15],[-43,-35],[-12,-25],[-7,-33],[-30,-35],[-3,-5],[-52,-86],[-29,-112],[-6,-145],[49,-102],[0,-1],[-57,-212],[-9,-50],[-20,-43],[-16,-20],[-62,-36],[-14,-19],[-36,-74],[18,-36],[-130,-62],[-107,-36],[-109,-13],[-168,-60],[-57,-45],[-62,-91],[-115,-255],[-12,-179],[-10,-139],[35,-184],[-33,-245],[-89,-13],[-40,-59],[-7,-3],[-66,-33],[-2,-22],[8,-4],[5,-44],[-10,-104],[9,-9],[0,0],[16,-50],[-21,-58],[-12,-7],[-67,-6],[-2,-46],[-28,-35],[0,-1],[-24,3],[0,0],[-5,-3],[-11,-5],[-2,-1],[-1,0],[0,0],[-2,-3],[-72,-69],[-1,-2],[-3,-5],[-19,-43],[-6,-13],[-1,-2],[0,-5],[-1,-16],[0,-9],[0,-14],[-45,-58],[-3,1],[-61,25],[-21,1],[-1,0],[-11,1],[-8,-3],[-5,-1],[-12,-4],[-2,-2],[-8,-6],[-38,-28],[-37,-54],[0,0],[0,0],[-4,-12],[-12,-40],[-10,-28],[-2,-8],[-2,-20],[-1,-6],[-2,-29],[0,-1],[-2,-19],[-1,-12],[-21,-48],[-66,-60],[-24,-12],[-22,43],[-1,2],[-27,-14],[-8,-4],[-27,-46],[-17,-28],[-8,-15],[-44,-101],[-5,-11],[-47,-40],[0,0],[-11,-5],[-4,-1],[-18,-8],[-11,-5],[-6,-8],[-1,-2],[-12,-16],[-8,-23],[-2,-37],[-1,-11],[-1,-19],[-2,-30],[20,-89],[1,-7],[1,-3],[0,0],[6,-15],[5,-13],[5,-12],[0,-1],[3,-7],[1,-2],[3,-8],[13,-35],[1,0],[0,0],[3,-13],[8,-33],[1,-1],[-1,-1],[-37,-18],[-64,-12],[-8,-10]],[[125799,128585],[1,0],[71,48],[4,3],[1,0],[2,1],[6,5],[85,57],[60,40],[8,5],[18,12],[2,1],[74,34],[0,0],[77,-24],[41,21],[40,20],[1,1],[4,2],[13,7],[5,2],[48,25],[0,0],[49,14],[6,2],[46,13],[270,105],[232,47],[203,66],[62,30],[119,93],[37,50],[44,35],[61,33],[142,116],[40,47],[56,66],[13,13],[50,51],[46,46],[39,39],[3,4],[9,8],[6,5],[8,5],[12,8],[35,24],[4,2],[3,1],[7,3],[138,65],[8,2],[5,1],[108,25],[121,28],[16,3],[8,1],[17,1],[12,1],[4,1],[2,0],[1,0],[109,9],[2,0],[4,0],[13,1],[46,-10],[4,-2],[29,-12],[18,-8],[12,-5],[5,-2],[18,-19],[8,-10],[58,-3],[76,27],[74,27],[22,7],[7,3],[2,1],[20,3],[81,13],[6,1],[6,1],[12,2],[5,1],[32,12],[32,12],[5,2],[6,2],[50,-1],[4,0],[0,0],[5,-3],[14,-7],[10,-6],[0,0],[1,0],[22,-1],[36,-3],[12,-1],[1,0],[3,0],[1,0],[0,0],[3,0],[1,1],[60,5],[17,1],[0,0],[7,1],[2,0],[3,0],[19,2],[11,1],[11,3],[69,19],[7,2],[45,19],[21,9],[85,36],[5,2],[127,65],[69,34],[46,24],[69,35],[27,13],[105,53],[3,2],[76,47],[2,1],[6,5],[86,80],[4,5],[7,9],[59,82],[55,78],[1,1],[94,96],[1,1],[1,0],[49,38],[3,0],[12,3],[23,5],[1,-2],[8,-10],[10,-13],[26,-14],[71,-6],[87,16],[16,11],[39,24],[31,19],[5,1],[34,8],[5,-7],[17,-23],[88,1],[2,0],[22,5],[2,1],[17,4],[17,7],[14,7],[1,0],[21,10],[46,29],[3,2],[8,8],[48,50],[40,60],[28,43],[4,6],[4,9],[31,70],[3,6],[21,75],[16,56],[1,2],[14,19],[34,45],[1,2],[1,1],[4,5],[13,7],[0,0],[49,27],[61,34],[1,0],[2,0],[24,4],[81,86],[1,2],[1,1],[32,34],[1,1],[4,4],[0,0],[2,2],[4,2],[55,29],[33,17],[19,-1],[3,-1],[17,-1],[4,0],[50,27],[51,59],[14,16],[0,1],[62,73],[4,3],[1,1],[59,51],[37,31],[0,0],[8,7],[1,1],[3,2],[2,1],[80,57],[6,4],[4,3],[2,2],[3,2],[21,11],[34,19],[4,2],[31,3],[21,2],[7,1],[23,10],[32,15],[6,2],[1,1],[17,11],[32,21],[0,0],[7,1],[35,6],[49,10],[1,0],[1,0],[39,18],[2,2],[0,0],[6,5],[165,145],[32,28],[10,9],[2,1],[9,8],[27,24],[14,12],[1,1],[8,9],[42,50],[30,35],[5,5],[24,65],[2,6],[17,25],[3,4],[21,31],[2,2],[98,102],[1,2],[1,1],[47,48],[0,1],[68,41],[2,1],[20,13],[10,6],[7,4],[39,16],[68,27],[133,52],[76,43],[8,6],[57,43],[2,1],[4,1],[34,8],[129,29],[1,0],[4,2],[35,21],[4,2],[6,6],[27,27],[6,19],[-3,16],[0,0],[17,6],[0,0],[19,6],[2,1],[5,2],[89,29],[0,0],[6,1],[39,4],[6,1],[3,0],[59,6],[1,0],[1,1],[25,8],[11,3],[3,1],[7,1],[31,5],[3,1],[140,21],[1,1],[18,2],[1,0],[5,-1],[6,-1],[2,0],[1,-1],[1,0],[2,0],[4,-1],[10,-2],[6,1],[3,0],[1,0],[24,3],[65,6],[4,2],[1,24],[1,0],[4,1],[23,4],[1,0],[13,1],[20,2],[0,0],[15,1],[20,1],[16,2],[6,0],[4,0],[13,1],[2,1],[3,0],[100,7],[2,0],[10,1],[3,0],[57,-1],[13,0],[4,0],[2,0],[3,0],[5,0],[2,0],[1,0],[9,-1],[14,0],[68,-1],[1,0],[2,0],[3,-1],[2,0],[19,-1],[4,-1],[3,0],[0,0],[66,-6],[16,-10],[297,-15],[58,7],[163,-63],[95,-57],[54,-46],[21,-167],[-8,-24],[-32,-1],[-78,23],[-32,-3],[-29,-11],[-21,-21],[-130,-32],[-55,-37],[-43,7],[-28,21],[-50,22],[-31,3],[-93,1],[-218,-28],[-56,-14],[-30,-63],[-2,-29],[11,-30],[29,-29],[27,-6],[32,-43],[2,-23],[-19,-31],[-11,-9],[-44,1],[-38,-9],[-75,-49],[-100,-81],[-141,-40],[-19,-12],[-42,-45],[-93,-126],[-44,-11],[-31,-20],[-54,-77],[-114,-115],[-114,-35],[-39,6],[-27,-5],[-56,-47],[-5,-5],[-1,-1],[-22,-36],[-6,-12],[-1,-1],[-12,-46],[-6,-24],[0,-13],[-1,-4],[0,-2],[-1,-50],[0,-12],[2,-7],[9,-29],[0,0],[4,-4],[5,-5],[1,-1],[1,0],[8,1],[9,1],[-1,-18],[-28,-32],[-29,-18],[-7,2],[-1,4],[-3,13],[0,2],[0,1],[-11,11],[-2,1],[0,1],[-4,3],[-1,1],[-25,7],[-2,0],[-1,0],[-32,-8],[-35,-26],[-1,-1],[0,0],[-26,-41],[0,-1],[-1,0],[-1,-15],[3,-3],[1,-1],[2,-2],[0,-3],[2,-19],[0,-3],[0,-3],[-2,-13],[0,-2],[-1,-2],[-1,-8],[0,-1],[-1,-3],[-1,-2],[0,0],[-2,-5],[-4,-9],[-1,-1],[-1,-4],[-2,-4],[-9,-21],[-9,-22],[-4,-8],[0,0],[-1,-1],[-55,-32],[-8,-4],[-66,-38],[-16,-9],[-10,-6],[-16,-4],[-7,-1],[-1,0],[-2,-2],[-10,-13],[-12,-36],[-2,-55],[-1,-1],[-10,-51],[-3,-12],[0,-2],[-2,-10],[-1,-6],[-1,-6],[-1,-3],[0,-1],[-32,-101],[-1,-2],[-1,-1],[-21,-31],[-1,-1],[-18,-16],[-19,-18],[-4,-2],[0,-1],[-1,0],[-2,-3],[-1,-3],[-4,-5],[-3,-6],[-5,-6],[-54,-82],[-3,-4],[-3,-3],[-15,-16],[-2,-3],[-1,-1],[-19,-4],[0,0],[-101,-24],[-17,-127],[-9,-38],[-4,-22],[-1,-4],[-7,-34],[-1,0],[-1,-7],[-1,-6],[-1,-5],[-9,-21],[-60,-149],[-6,-15],[-1,-20],[-3,-69],[-3,-60],[0,-5],[-1,-14],[0,-8],[-21,-93],[4,-27],[34,-100],[40,-96],[88,0],[17,33],[68,91],[124,132],[-3,30],[1,8],[1,9],[3,11],[2,12],[7,12],[10,12],[12,4],[13,-4],[23,-5],[2,0],[4,-1],[2,1],[30,3],[1,0],[1,1],[15,17],[47,50],[6,5],[0,1],[82,87],[2,2],[5,4],[3,2],[3,2],[8,7],[20,16],[11,8],[27,21],[2,2],[8,6],[16,13],[0,0],[3,2],[16,10],[8,5],[3,2],[5,3],[40,24],[13,15],[29,32],[12,13],[0,0],[9,10],[5,3],[4,2],[2,1],[2,1],[0,0],[9,5],[10,4],[0,1],[9,4],[1,1],[142,72],[64,33],[35,18],[0,0],[9,7],[3,1],[4,4],[0,0],[2,1],[6,5],[2,1],[14,10],[3,2],[1,0],[36,7],[6,1],[1,0],[2,-2],[1,0],[1,0],[0,-1],[1,0],[1,-1],[33,-18],[0,0],[-9,-13],[-54,-79],[-23,-21],[-43,-38],[-10,-9],[-2,-1],[-16,-14],[-2,-2],[-6,-6],[-30,-26],[-5,-5],[16,-27],[4,-6],[25,-39],[49,2],[4,1],[111,21],[13,2],[2,1],[5,2],[1,1],[7,2],[60,24],[4,1],[9,4],[2,0],[3,2],[1,0],[4,1],[3,0],[2,1],[0,0],[4,1],[50,11],[1,0],[6,2],[1,0],[7,-1],[19,-3],[35,-6],[6,-2],[70,-28],[42,-17],[2,0],[9,-1],[2,-1],[92,-8],[3,0],[63,-5],[1,0],[10,1],[4,1],[25,3],[63,9],[4,1],[4,0],[1,0],[4,0],[142,3],[6,0],[11,0],[3,0],[7,0],[29,0],[1,0],[1,0],[45,-40],[47,-43],[2,-1],[2,-1],[99,-41],[3,-1],[6,0],[12,2],[9,4],[32,17],[11,5],[38,8],[10,-12],[3,-4],[0,0],[73,-36],[19,-2],[18,-2],[3,0],[1,-2],[16,-12],[1,0],[1,-1],[1,-1],[1,-9],[0,-3],[1,-8],[0,-1],[-7,-8],[-2,-2],[7,-18],[39,-27],[1,0],[1,0],[36,-5],[0,0],[1,1],[4,3],[22,16],[7,5],[4,0],[2,0],[2,0],[9,-1],[4,0],[0,-1],[0,-1],[22,-73],[-1,-1],[0,-1],[-6,-12],[1,-4],[0,-2],[8,-45],[10,-29],[16,-17],[5,-1],[1,-1],[44,-9],[70,8],[32,27],[0,0],[0,0],[-8,33],[0,1],[3,10],[0,2],[2,0],[19,3],[3,0],[4,-5],[16,-20],[2,-2],[4,-37],[0,-1],[1,-9],[0,-1],[-3,-11],[-1,-5],[9,-18],[35,-26],[40,-14],[18,4],[14,2],[3,1],[4,-1],[27,-7],[17,-30],[2,-3],[1,-2],[2,-3],[1,-1],[27,-30],[7,-8],[4,-4],[11,-13],[1,-1],[11,-12],[6,-7],[3,-4],[47,-27],[0,-1],[3,-29],[5,-40],[3,-31],[0,0],[1,-8],[0,-2],[2,-15],[0,-3],[1,-9],[1,-7],[0,-3],[1,-4],[3,-12],[7,-26],[1,-2],[11,-42],[4,-14],[3,-12],[4,-5],[31,-45],[21,-18],[37,-32],[16,-14],[4,-3],[10,-9],[19,-17],[35,-30],[3,-3],[3,-3],[35,-29],[-1,-3],[-1,-18],[-2,-32],[0,-1],[19,-37],[46,-87],[12,-24],[1,-1],[6,-4],[29,-20],[2,-1],[2,-1],[86,-32],[4,-1],[5,-21],[-4,-26],[13,-57],[46,-44],[33,-15],[115,-6],[29,-32],[71,-10],[8,-65],[-42,-37],[1,-8],[39,-86],[24,-32],[-54,-23],[-13,-46],[17,-43],[29,-36],[54,-50],[52,-29],[5,-3],[143,-42],[5,-1],[5,-1],[184,-18],[2,0],[2,0],[194,12],[10,1],[8,2],[92,31],[0,0],[107,-11],[68,-6],[40,5],[33,5],[32,37],[79,58],[114,23],[60,28],[46,40],[31,-5],[117,-30],[45,-50],[6,-34],[59,-124],[2,-28],[-12,-13],[9,-21],[71,-37],[88,7],[54,-38],[18,-37],[1,-47],[32,-21],[92,-15],[46,0],[79,18],[18,59],[8,54],[19,30],[58,55],[71,6],[67,1],[52,-20],[18,-17],[1,-18],[74,-115],[27,-27],[19,-4],[43,81],[-9,41],[9,42],[9,131],[-44,25],[-22,42],[-27,160],[50,55],[64,30],[9,-20],[18,-3],[52,10],[14,10],[93,-133],[-6,-77],[-11,-46],[-9,-21],[-24,-21],[-16,-41],[-4,-31],[36,-37],[34,-4],[25,31],[9,28],[22,19],[10,-2],[9,-71],[-8,-41],[84,-35],[105,120],[120,89],[109,97],[41,55],[7,33],[47,43],[34,3],[57,-19],[26,4],[172,71],[148,73],[594,377],[96,76],[86,18],[68,-78],[28,-11],[45,-2],[94,16],[137,48],[153,30],[152,16],[109,39],[169,31],[49,-4],[25,-2],[4,0],[57,-4],[3,-1],[90,-20],[70,-17],[6,-1],[9,-1],[151,-17],[2,0],[29,-1],[11,0],[4,0],[89,0],[49,4],[99,10],[20,2],[18,-1],[60,-3],[83,-4],[27,-4],[79,-12],[6,-1],[2,0],[21,-4],[2,0],[9,0],[96,-1],[41,-1],[18,0],[121,8],[98,22],[3,1],[411,165],[27,14],[57,30],[186,97],[24,12],[116,42],[5,1],[3,1],[66,11],[238,39],[401,-28],[100,12],[99,44],[73,16],[91,2],[39,-7],[9,-10],[-132,-119],[-74,-85],[-46,-78],[-27,-75],[-9,-63],[6,-48],[-26,-248],[-6,-119],[6,-96],[15,-64],[7,-71],[8,-3],[7,-37],[-6,-16],[-68,-27],[-27,-24],[-12,-31],[5,-59],[18,-53],[59,-81],[30,-23],[38,-16],[168,-17],[52,19],[29,36],[38,9],[10,-44],[45,-52],[25,-12],[80,-10],[67,7],[50,15],[43,-48],[21,-57],[53,-23],[108,11],[113,36],[168,73],[124,78],[41,18],[90,-27],[84,13],[53,-64],[31,-75],[88,-86],[39,-57],[80,-47],[176,103],[37,5],[51,-38],[28,8],[34,33],[26,65],[1,44],[-29,23],[66,107],[91,60],[94,-10],[72,47],[182,-43],[224,-24],[140,192],[119,30],[199,-38],[39,-10],[40,-62],[24,-67],[-50,-169],[-78,-256],[27,-229],[86,-516],[27,-134],[-37,-36],[-25,-5],[-35,-4],[-42,-35],[-4,-4],[-8,-2],[-5,0],[-4,2],[-1,3],[-1,7],[-1,8],[-26,27],[-85,11],[-134,-18],[-50,-39],[-59,-87],[14,-69],[-9,-63],[-14,-20],[112,-63],[89,15],[71,88],[21,-11],[171,-7],[37,-31],[6,-26],[48,-89],[16,-15],[24,-7],[106,-1],[124,-72],[-17,-42],[-28,12],[-48,-29],[-35,-31],[-28,-47],[-12,-36],[2,-21],[20,-25],[54,-41],[87,-121],[80,-51],[61,-58],[94,-25],[45,6],[28,12],[18,-11],[13,-44],[15,-12],[83,-32],[30,-62],[100,-27],[18,8],[84,152],[56,-17],[44,-99],[88,-33],[65,42],[41,70],[0,68],[-32,96],[-83,26],[-59,83],[-42,150],[30,24],[13,1],[72,-33],[47,-42],[30,-13],[58,6],[102,-6],[18,14],[12,36],[59,12],[156,-16],[96,19],[35,-9],[37,-31],[62,-29],[63,-3],[19,-30],[13,-42],[0,-25],[27,-40],[41,-15],[25,-54],[14,-53],[9,-79],[30,-50],[139,-58],[24,0],[28,-17],[25,-38],[2,-20],[-31,-62],[-26,-16],[-80,-195],[-24,-29],[-33,-24],[-131,-30],[-77,16],[-181,81],[-93,66],[-110,-50],[-116,-7],[-50,18],[-36,2],[-86,-14],[-9,-16],[-64,7],[-54,21],[-9,28],[-17,12],[-54,-9],[-18,-13],[-29,3],[-19,54],[-21,2],[-67,31],[-55,34],[-5,9],[-109,-12],[-38,-38],[-114,37],[-120,8],[-42,-28],[-77,-12],[-229,59],[-38,-18],[-55,28],[-7,21],[-14,7],[-12,-1],[-96,-15],[-1,0],[-105,-42],[-10,-4],[-10,7],[-1,1],[-11,7],[-92,-3],[-39,-1],[-19,-1],[-70,-2],[-58,-54],[-3,-4],[-24,0],[-2,0],[-17,1],[-55,0],[-132,0],[-7,0],[-2,0],[-2,0],[-15,0],[-2,0],[-2,0],[-2,0],[-3,0],[-11,0],[-1,-1],[-4,-4],[-51,-43],[-29,-24],[0,0],[-2,-1],[-14,-8],[-69,-39],[0,0],[-40,27],[-15,11],[-24,16],[-1,1],[-1,0],[-2,2],[-1,1],[-1,0],[-42,29],[-63,43],[-1,1],[-29,66],[0,1],[-4,9],[-20,20],[0,0],[0,0],[-1,0],[-61,-37],[-12,-7],[-38,27],[-18,12],[-7,5],[-1,3],[-7,15],[-2,4],[2,14],[1,2],[-2,3],[-4,11],[-6,1],[-11,2],[-68,11],[-26,-19],[1,-79],[-41,-14],[-27,5],[-7,16],[-1,27],[16,65],[-11,72],[-28,68],[-13,17],[-71,47],[-63,-7],[-20,-22],[-83,-1],[-141,116],[-33,14],[-37,-10],[-33,-23],[-43,-55],[-19,-39],[0,-50],[23,-187],[7,-8],[-3,-20],[-9,-11],[-60,-2],[-69,-18],[-27,-30],[-31,-77],[-2,-19],[23,-45],[51,-27],[20,-35],[1,-21],[-76,-45],[14,-48],[3,-10],[30,-106],[0,0],[21,-39],[0,-1],[1,0],[20,-25],[28,-34],[2,-2],[2,-2],[-4,-13],[0,0],[-9,-5],[-2,-1],[-3,-2],[0,0],[-1,-1],[-5,0],[-6,-1],[-42,-2],[0,0],[-1,-1],[-2,-1],[-4,-5],[-1,-4],[-2,-9],[-8,-35],[-5,0],[-73,-7],[0,0],[-17,11],[-11,8],[-14,9],[-56,39],[-6,4],[-64,44],[-102,47],[-31,15],[-9,4],[-2,3],[-8,15],[0,1],[-3,6],[-12,20],[-1,1],[0,1],[1,10],[2,18],[0,5],[0,4],[0,0],[-7,20],[-4,10],[-5,14],[-1,1],[-3,1],[-5,2],[-5,1],[-17,4],[-9,2],[-1,1],[-10,6],[-11,7],[-6,4],[-3,2],[-23,15],[-10,6],[-10,7],[0,0],[-15,18],[-6,8],[-2,2],[-1,2],[-84,38],[-1,1],[-53,34],[0,0],[-70,122],[-2,3],[0,1],[-125,140],[-9,9],[-4,4],[0,0],[-65,59],[-41,37],[-24,14],[-3,2],[-11,7],[-26,10],[-95,38],[-4,2],[-3,1],[-20,8],[-5,2],[-96,21],[-24,5],[-1,0],[-52,20],[0,0],[-8,6],[-6,4],[-25,16],[-41,28],[-2,1],[-7,4],[0,1],[-12,8],[-12,5],[-14,7],[-8,3],[-4,2],[-6,1],[-10,1],[-7,1],[-17,3],[0,0],[-1,0],[-142,-16],[-15,-8],[-1,-1],[-9,-4],[-49,41],[-14,12],[-11,10],[-9,8],[-4,3],[-4,4],[-1,0],[-1,0],[-8,2],[-86,13],[-25,4],[-40,6],[-7,3],[-37,15],[-35,15],[0,0],[-8,5],[-19,14],[-33,22],[-24,16],[-20,14],[-71,29],[-1,0],[-2,0],[-72,-2],[-1,0],[0,-1],[-38,-26],[-2,0],[-52,-23],[0,0],[-3,5],[-2,2],[-1,1],[-26,38],[-14,21],[-38,16],[-19,9],[-9,4],[-55,3],[-8,-5],[-2,-1],[-9,-5],[-19,-11],[-2,0],[-14,-8],[-1,-1],[0,0],[0,0],[-1,-4],[0,-5],[0,0],[5,-4],[2,-3],[-20,-30],[-1,-1],[-4,-6],[-22,11],[-50,22],[-8,4],[-26,12],[-16,7],[-1,0],[0,0],[-21,1],[-48,2],[-2,0],[-1,0],[-45,-11],[-32,-17],[-1,0],[0,-1],[-25,-20],[-2,-1],[0,-1],[-16,-13],[-23,-18],[-5,-4],[-7,-8],[-11,-12],[-56,-59],[-9,-9],[-147,-156],[-44,-93],[-7,-15],[0,-1],[-28,-29],[-11,-13],[-3,-3],[-1,-1],[-62,-67],[0,-1],[-4,-4],[-1,-1],[-4,-4],[-1,-3],[-5,-12],[-2,-4],[-14,-30],[0,0],[-34,-33],[-2,-1],[-87,-24],[-33,-9],[-1,0],[-15,4],[-10,2],[-2,1],[-6,2],[-36,9],[-29,8],[-3,0],[-25,-1],[-43,0],[0,0],[-61,18],[-39,12],[-12,5],[-59,26],[-1,0],[-5,1],[-63,11],[-5,0],[-2,0],[-22,-2],[-2,-1],[-2,-1],[-10,-5],[-18,-9],[-1,-2],[-1,-1],[-13,-22],[-9,-16],[-1,-2],[-7,-2],[-3,-1],[-1,0],[-9,-4],[-1,0],[-3,-1],[-12,-4],[-2,0],[-63,14],[-4,0],[-15,1],[-63,2],[-39,-7],[-59,-41],[-12,-13],[0,0],[-38,-40],[-12,-51],[0,-29],[33,-22],[25,-28],[-13,-13],[-25,7],[-122,78],[-165,71],[-191,56],[-77,15],[-83,7],[-106,-10],[-81,-36],[-16,-14],[-34,-4],[-137,47],[-42,-1],[-45,-21],[-32,-51],[-16,-14],[-53,-4],[-25,19],[-85,-33],[-139,-133],[-30,-45],[-31,-270],[-61,-87],[-22,-143],[13,-36],[-45,-40],[-22,-4],[-95,3],[-21,28],[-53,-8],[-32,-20],[-13,-21],[-2,-15],[6,-17],[-4,-17],[-13,-39],[-13,-17],[-1,0],[-15,-18],[-2,-1],[-7,-3],[-49,-15],[-16,6],[-22,8],[-48,-12],[-26,-53],[-37,13],[-29,25],[-38,-10],[-14,-23],[-18,-55],[-7,-78],[-30,-49],[-14,-13],[-16,-1],[-107,41],[-38,-22],[-18,-35],[4,-113],[-10,-78],[-22,-4],[-65,21],[-33,-13],[-18,-17],[-10,-22],[40,-192],[1,-68],[-26,32],[-34,24],[-56,-11],[-65,29],[-77,62],[-6,28],[-24,41],[-47,5],[-35,94],[-2,45],[9,33],[39,35],[59,-15],[47,19],[39,52],[0,34],[-13,9],[-9,48],[32,41],[57,18],[52,75],[-6,79],[14,91],[50,8],[19,-21],[53,-19],[52,14],[24,51],[-15,16],[-3,15],[18,33],[21,20],[29,-5],[22,18],[7,27],[-13,43],[14,47],[20,21],[15,3],[25,17],[35,65],[4,19],[-5,89],[-13,38],[-31,38],[-44,31],[-52,20],[-57,-9],[-36,-67],[-38,-43],[-37,-3],[-45,-38],[-27,-41],[2,-83],[-49,-46],[-275,57],[-28,16],[-51,79],[-26,16],[-32,-3],[-87,-35],[-8,-28],[7,-122],[19,-14],[9,-27],[5,-51],[-45,-84],[-58,-71],[-74,-48],[-8,-25],[11,-23],[-4,-18],[-61,-76],[-12,-63],[11,-34],[-116,-60],[-24,9],[-67,-2],[-32,-10],[-62,-58],[-85,-10],[-74,-114],[-9,11],[-2,49],[-9,35],[-42,22],[-12,47],[8,69],[17,44],[9,121],[-22,65],[-1,129],[-25,91],[-61,105],[-4,2],[-1,1],[-46,32],[-46,-8],[-31,-15],[-38,-51],[-7,-10],[-19,-47],[-2,-16],[0,-1],[-1,-12],[-1,-3],[0,-8],[-2,-14],[1,-25],[0,-8],[1,-34],[1,-44],[-2,-5],[-19,-57],[-2,-39],[7,-27],[25,-9],[10,-17],[-16,-56],[-16,-19],[-32,-70],[38,-49],[2,-2],[-7,-2],[-46,-13],[-3,-1],[0,0],[-68,-19],[-8,-2],[-14,-12],[0,-1],[-1,-16],[-2,-2],[-42,-44],[-3,-1],[-59,-19],[-3,-1],[-64,-40],[-13,-8],[-41,-26],[-39,-25],[-5,-6],[-66,-93],[-20,-27],[-52,-98],[-16,-30],[-13,-23],[-17,-32],[-32,-42],[-8,-10],[-57,-98],[-39,-67],[-4,-8],[-6,-10],[-1,-3],[-2,-6],[-60,-161],[-29,-80],[-3,-5],[-61,-124],[-42,-44],[-8,-9],[-39,-69],[-10,-19],[-1,-5],[-2,-14],[-1,-5],[3,-25],[0,-2],[8,-16],[5,-8],[4,-3],[5,-3],[2,-1],[4,-3],[-1,-3],[-6,-20],[-2,-3],[-5,-7],[-5,-9],[-19,-30],[-7,-5],[-47,-33],[-2,-2],[-30,-37],[-2,-7],[-2,-5],[-14,-44],[-25,-24],[-61,-57],[-5,-5],[-1,-1],[-1,-1],[-6,-6],[-4,-3],[-7,-27],[-20,-71],[-37,-51],[-64,-90],[-15,-22],[-17,-43],[-4,-11],[-1,-9],[-5,-51],[-61,-63],[-3,-3],[-31,-32],[-1,-2],[-116,-163],[-24,-33],[-3,-5],[-30,-42],[-67,-80],[-17,-22],[-50,-60],[-13,-9],[-14,-10],[-26,-18],[-70,-75],[-12,-13],[-8,-14],[-32,-56],[-15,-27],[-26,-59],[-1,-2],[-4,-11],[-11,-44],[1,-5],[1,-7],[0,0],[1,-7],[5,-27],[4,-6],[8,-12],[5,-9],[3,-4],[7,-11],[1,-1],[1,-1],[0,-1],[1,-2],[3,-3],[3,-5],[5,-5],[4,-3],[20,-18],[7,-7],[3,1],[28,3],[-31,-10]],[[107872,96030],[-14,46],[-769,1191],[-112,61],[0,13],[5,107],[-8,25],[-255,254],[-237,609],[-19,89],[41,38],[81,144],[-137,126],[-2,-41],[-47,-65],[-142,2],[-30,9],[-36,27],[-9,26],[-20,183],[4,23],[29,34]],[[75813,110907],[871,3],[6,1],[869,-3],[2,0],[256,0],[1,0],[4,0],[0,0],[369,0],[234,0],[762,0],[4,0],[480,-2],[765,-2],[1117,-2],[172,0],[1312,-1],[1,0],[759,0],[916,-16],[1449,9],[4,-1],[4,1],[4,0],[2,0],[961,0],[22,-1],[189,1],[69,0],[1227,4],[34,0],[35,1],[226,2],[430,-3],[22,0],[241,0],[22,-1],[291,0],[0,0],[0,0],[262,1],[2,0],[26,0],[311,-2],[24,0],[85,0],[159,0],[38,0],[2,0],[83,-1],[34,-1],[149,1],[29,0],[36,-1],[37,1],[103,-1],[46,1],[22,-1],[11,0],[44,0],[73,1],[93,-1],[60,0],[28,0],[65,0],[8,0],[476,0],[124,0],[5,0],[146,1],[13,0],[59,0],[12,-1],[278,1],[78,-1],[12,1],[9,0],[78,0],[217,0],[93,0],[30,0],[1,0],[72,1],[144,-1],[124,1],[38,0],[44,1],[12,-1],[198,0],[7,0],[211,-1],[2,1],[79,-1],[140,1],[157,-1],[0,0],[59,1],[12,-1],[278,1],[83,-1],[136,1],[80,0],[282,1],[7,-1],[347,1],[14,-1],[244,1],[11,-52],[19,-50],[85,-151],[74,-62],[444,-241],[60,-26],[385,-170],[142,-49],[31,-25],[369,-303],[80,-33],[65,-9],[62,4],[184,32],[49,30],[102,95],[75,111],[31,90],[17,116],[35,20],[75,24],[62,6],[52,-39],[146,-56],[322,-36],[189,12],[378,26],[171,23],[228,32],[347,-9],[262,-28],[142,-120],[103,-121],[99,-58],[94,-55],[313,-60],[95,-38],[39,-19],[200,-103],[149,-33],[50,12],[343,-136],[24,-14],[303,-186],[41,-89],[20,-83],[-12,-58],[-3,-46],[12,-43],[265,-383],[36,-54],[53,-37],[455,-130],[44,1],[118,47]],[[17355,105919],[46,6],[720,9],[1576,-16],[132,0],[2006,-8],[5,0],[2121,21],[4293,16]],[[198072,111200],[-55,-136],[-94,-160],[-17,-22],[-40,-35],[-130,-259],[-53,-132],[-17,-91],[-6,-34],[-4,-60]],[[195144,120886],[24,277],[25,16],[221,255],[114,395],[-20,59],[-145,96],[153,39],[213,142],[168,138],[47,17],[64,-56],[14,-68],[13,-21],[97,-82],[181,-58],[162,-10],[28,12],[27,49],[17,35],[-1,17],[55,143],[27,36],[49,17]],[[186819,100291],[10,4],[16,-14],[4,-16],[-3,-46],[-13,-1],[-13,17],[-2,33],[1,23]],[[185838,99501],[4,3],[2,-1],[5,-7],[-20,-47],[-4,-6],[-7,4],[-3,6],[1,4],[22,44]],[[185459,98683],[-16,-3],[-44,-38],[-63,-36],[-16,5],[-65,-44],[-38,-11],[-34,-34],[-50,-7],[-49,-25],[-13,3],[-16,27],[-6,28],[13,30],[36,35],[4,51],[-22,60],[69,58],[44,0],[22,29],[25,141],[27,38],[5,24],[-3,71],[-18,4],[-3,12],[5,60],[41,53],[34,16],[22,-2],[14,-14],[63,-16],[121,16],[123,32],[39,-3],[23,-34],[7,-86],[27,-59],[26,-41],[-22,-50],[-33,-47],[-83,-88],[-75,-97],[-4,4],[-34,-24],[-57,-63],[-11,18],[-15,7]],[[192836,101506],[14,18],[6,35],[156,-68],[11,-37],[-22,-177],[-32,-21],[-5,4],[0,104],[-22,53],[-12,12],[-52,21],[-68,-4],[-10,10],[-4,17],[8,15],[32,18]],[[193527,102409],[62,17],[-31,-47],[-41,-21],[-60,-27],[-59,-29],[-58,-43],[-29,-17],[-126,-16],[7,29],[20,37],[22,40],[17,15],[44,-3],[58,39],[40,-5],[100,23],[34,8]],[[186842,100424],[0,-4],[0,-3],[0,-7],[3,-12],[-2,-5],[-15,-3],[-16,14],[0,10],[9,2],[2,14],[6,5],[9,-4],[3,-4],[1,-3]],[[187244,100914],[5,-27],[-14,-56],[-8,-11],[-9,5],[-50,-22],[-19,-68],[-11,-19],[-43,-28],[-87,-37],[-36,-35],[-92,-61],[-90,-135],[-8,-22],[-5,-12],[-2,-47],[-12,-53],[2,-21],[12,-12],[10,-22],[0,-13],[0,-12],[3,-17],[-5,-6],[-4,-4],[-6,6],[-10,20],[-11,22],[6,24],[-10,22],[-6,-1],[-12,-17],[-9,-21],[-27,8],[-22,-14],[-10,-57],[2,-21],[12,-28],[27,-34],[26,-14],[42,-73],[17,-30],[19,2],[28,27],[1,0],[52,100],[-1,29],[95,130],[6,19],[-14,43],[4,5],[58,18],[140,-65],[18,8],[54,26],[5,71],[49,71],[27,28],[25,6],[34,-7],[58,24],[24,22],[93,40],[14,2],[66,-35],[106,28],[15,-7],[55,26],[11,23],[2,4],[17,92],[24,21],[2,-1],[17,-14],[7,-5],[14,-6],[39,-17],[12,-2],[15,-2],[42,-6],[27,-3],[3,-1],[25,-25],[1,-8],[3,-33],[84,-7],[11,25],[-2,84],[10,59],[4,6],[25,0],[67,-87],[32,-30],[48,-24],[26,-7],[6,9],[46,12],[134,-25],[0,0],[241,-96],[294,117],[10,31],[6,103],[14,51],[112,29],[105,5],[139,-54],[12,12],[163,10],[150,-2],[151,-18],[94,2],[228,34],[190,-22],[52,50],[167,51],[92,20],[89,-11],[109,15],[183,35],[73,59],[17,30],[41,21],[103,89],[162,72],[61,73],[57,95],[100,9],[77,41],[150,186],[83,21],[40,13],[115,76],[45,14],[21,-19],[18,-4],[84,35],[26,-8],[2,-15],[-58,-96],[-43,-43],[-129,-80],[1,98],[-23,28],[-23,4],[-20,-7],[-31,-25],[-32,-59],[1,-66],[65,-90],[72,-38],[63,-3],[14,-19],[-24,-44],[35,-81],[48,-46],[71,13],[43,-2],[44,-19],[57,-41],[42,1],[26,16],[14,14],[17,38],[44,35],[9,3],[24,-10],[61,-60],[8,-42],[-8,-37],[77,-119],[27,-28],[25,-13],[24,-1],[46,25],[11,35],[3,15],[11,13],[54,2],[13,-23],[3,0],[7,2],[13,6],[8,16],[-8,30],[-1,24],[16,10],[43,-9],[76,37],[58,57],[118,40],[22,32],[3,28],[-5,20],[7,36],[79,31],[69,15],[74,2],[13,-17],[22,-9],[73,-3],[19,9],[26,-16],[4,-15],[-64,-91],[-110,-60],[-117,-30],[-343,-170],[-312,-137],[-1032,-523],[-272,-119],[-379,-146],[-630,-229],[-29,-17],[-15,4],[-40,-14],[-348,-142],[-220,-98],[-328,-166],[-155,-66],[-331,-104],[-232,-72],[-112,-29],[-85,-18],[-8,0],[-154,-3],[-12,8],[-35,66],[-118,-26],[-149,-65],[-116,-37],[-98,-32],[-410,-98],[-79,15],[-99,5],[-131,-25],[-200,4],[-197,4],[2,10],[3,21],[-79,1],[-97,-25],[-20,-6],[-101,-36],[-163,-81],[-204,-78],[1,50],[6,25],[-11,23],[-11,6],[-21,13],[-21,23],[-34,-4],[-117,-11],[-39,1],[-26,11],[-11,8],[-3,18],[21,27],[3,6],[17,30],[-6,25],[-28,25],[-80,18],[-25,42],[-10,59],[15,61],[9,18],[14,28],[50,62],[-8,98],[-9,13],[-4,5],[-3,23],[12,32],[11,10],[7,31],[-10,26],[-19,12]],[[164865,107284],[162,74],[265,153],[189,129],[175,108],[129,94],[133,108],[78,35],[89,85],[87,123],[86,66],[73,68],[37,43],[35,4],[27,-7],[13,4],[31,28],[19,25],[126,57],[69,59],[80,42],[72,22],[110,49],[163,38],[37,54],[7,26],[26,99],[12,6],[16,16],[30,59],[9,36],[119,132],[21,0],[34,24],[6,117],[49,103],[110,61],[47,15],[55,4],[172,132],[95,26],[182,164],[55,68],[8,39],[-19,42],[-10,2],[-16,61],[-7,68],[19,42],[3,30],[-22,55],[-24,5],[-38,69],[-34,87],[-76,9],[25,66],[0,116],[-13,49],[-35,68],[-9,7],[-41,37],[-147,54],[-143,92],[-31,47],[-31,358],[-1,13],[-109,28],[-29,78],[35,178],[47,56],[6,27],[-59,473],[-44,116],[185,56],[176,38],[151,59],[262,88],[84,37],[9,-5],[206,48],[112,37],[185,33],[229,81],[318,59],[215,26],[23,-2],[35,-17],[28,2],[349,26],[42,-13],[396,-15],[63,-9],[324,32],[149,0],[297,-44],[102,-7],[3,0],[68,19],[41,-5],[45,-23],[110,-32],[66,0],[108,-36],[216,-31],[70,-18],[45,-3],[91,10],[12,-19],[97,-36],[60,-33],[47,-76],[150,-125],[25,-17],[93,-41],[96,-71],[91,-68],[96,-37],[62,-6],[122,78],[89,21],[146,55],[82,18],[86,35],[20,3],[35,4],[128,15],[97,1],[39,-14],[146,-4],[183,34],[151,-13],[108,30],[48,-10],[68,12],[164,-35],[122,-48],[125,1],[42,15],[110,-22],[23,3],[109,71],[66,34],[64,10],[35,-5],[82,28],[49,34],[172,21],[94,44],[80,65],[59,59],[32,1],[88,4],[50,41],[55,68],[99,172],[44,60],[50,29],[37,21],[162,125],[114,58],[36,41],[22,13],[33,-10],[73,31],[53,86],[128,82],[73,60],[26,9],[153,13],[86,-61],[53,-8],[124,5],[137,59],[88,22],[26,19],[39,60],[30,74],[23,74],[16,126],[10,245],[-15,151],[-18,191],[-28,172],[-59,251],[-77,107],[-62,61],[-39,16],[-20,13],[-5,35],[7,38],[23,23],[26,27],[28,23],[43,11],[24,12],[32,-3],[26,-11],[30,-41],[63,-10],[35,21],[44,42],[82,50],[47,5],[45,21],[22,25],[8,74],[-20,100],[-12,36],[-2,26],[0,46],[-18,36],[-25,13],[-87,-12],[-56,44],[-158,58],[-32,-24],[-28,-11],[-29,0],[-22,2],[-22,9],[-16,14],[0,32],[7,41],[-10,28],[-45,40],[-22,11],[-33,9],[-8,22],[-4,25],[2,41],[9,71],[-13,59],[-13,11],[-206,57],[-1,83],[-23,63],[11,56],[21,58],[9,49],[158,326],[96,23],[150,0],[142,54],[57,33],[99,91],[169,274],[267,183],[163,78],[83,-3],[30,-20],[75,31],[134,94],[152,133],[42,42],[144,143],[48,196],[155,221],[253,254],[752,721],[213,184],[365,279],[116,101],[-21,50],[90,61],[245,141],[99,27],[181,68],[276,162],[138,85],[80,59],[21,37],[1,29],[24,28],[74,30],[535,161],[91,-7],[281,-43],[85,-12],[1505,-56],[530,-3],[438,21],[560,27],[917,14],[1031,34]],[[154093,104023],[34,-4],[40,38],[8,-5],[-10,-116],[-20,-36],[-10,-7],[-48,-2],[-88,48],[-36,29],[0,11],[62,81],[42,0],[14,-9],[12,-28]],[[153637,104257],[59,12],[12,12],[33,9],[12,-6],[-4,-11],[-12,-22],[-109,-121],[-28,-22],[-27,-5],[-5,93],[34,50],[35,11]],[[153715,104428],[63,16],[13,-15],[-29,-20],[-40,-37],[-13,-38],[-2,-15],[-30,-6],[-47,70],[50,36],[35,9]],[[153678,104575],[11,-15],[6,-60],[-27,-8],[-69,11],[-2,9],[10,24],[26,36],[20,8],[25,-5]],[[151330,104620],[-6,-25],[24,-83],[11,-19],[134,-78],[62,4],[62,-27],[68,6],[56,28],[14,26],[0,23],[41,-9],[103,-87],[11,-10],[7,-5],[12,-20],[3,-2],[5,-3],[5,-2],[7,-4],[24,-13],[148,-104],[24,-34],[136,-65],[106,-39],[72,-26],[154,-22],[66,-34],[71,-56],[67,-106],[18,-29],[1,-1],[1,-1],[41,-46],[3,-3],[10,-11],[33,-27],[6,-5],[3,-2],[61,-51],[1,0],[110,-70],[0,-1],[1,0],[40,-15],[89,-34],[134,24],[3,2],[32,15],[22,16],[26,19],[21,21],[11,18],[19,28],[12,19],[4,6],[1,12],[5,67],[-3,12],[-2,8],[-8,29],[-3,12],[6,8],[2,3],[2,2],[9,14],[5,7],[20,12],[49,9],[51,-84],[95,-120],[33,-28],[49,-1],[81,29],[37,-7],[25,-5],[4,0],[1,0],[4,-1],[8,-2],[3,0],[20,-4],[6,-1],[9,-2],[1,-1],[9,-9],[14,-15],[2,-1],[0,-2],[-3,-45],[-17,-25],[-20,-27],[7,-30],[0,-2],[22,-43],[14,-20],[56,-18],[25,-8],[109,-151],[149,-149],[2,-17],[216,-141],[162,-78],[54,-13],[66,-1],[76,24],[107,53],[122,84],[133,63],[50,9],[51,9],[156,-9],[30,4],[55,8],[51,18],[224,149],[17,18],[10,26],[5,3],[11,-12],[60,14],[261,102],[301,103],[64,-6],[97,-40],[12,-5],[8,-20],[15,-14],[76,-35],[27,-5],[7,-1],[188,-34],[62,2],[38,12],[47,15],[4,1],[92,30],[1,0],[35,3],[3,1],[2,0],[20,1],[1,0],[43,-3],[49,-21],[1,0],[23,-6],[14,-4],[46,-11],[1,-1],[4,-1],[2,1],[9,3],[11,3],[22,15],[18,11],[5,3],[3,2],[23,15],[9,6],[5,3],[17,11],[0,0],[12,16],[3,4],[50,41],[7,6],[12,10],[85,70],[0,0],[55,21],[5,2],[27,11],[27,11],[23,18],[39,31],[1,1],[3,2],[20,17],[2,1],[37,30],[24,24],[0,0],[4,4],[2,2],[43,42],[0,0],[0,0],[2,2],[2,2],[4,4],[7,7],[0,0],[47,46],[114,126],[0,0],[6,7],[1,1],[10,4],[23,10],[42,17],[33,13],[43,39],[6,7],[35,37],[42,44],[49,70],[18,24],[15,21],[3,4],[0,1],[0,0],[1,0],[3,3],[1,1],[9,7],[4,4],[3,2],[5,5],[16,13],[67,57],[19,16],[6,6],[6,5],[8,6],[6,6],[1,0],[43,37],[2,1],[27,21],[23,19],[0,0],[3,2],[4,3],[14,11],[1,1],[4,3],[52,41],[85,51],[76,45],[9,5],[2,2],[17,10],[47,42],[7,6],[26,-1],[3,-1],[50,-7],[5,-1],[1,0],[3,1],[13,4],[14,4],[10,2],[4,1],[12,3],[0,1],[3,1],[0,1],[166,88],[3,1],[33,18],[30,16],[4,3],[58,33],[166,97],[34,21],[52,18],[12,5],[10,3],[150,83],[100,34],[52,37],[28,4],[2,1],[38,5],[67,11],[9,1],[46,7],[82,13],[72,17],[60,15],[171,78],[6,3],[92,42],[28,13],[10,4],[6,3],[6,5],[2,2],[15,12],[2,4],[7,9],[17,24],[2,3],[4,1],[6,0],[14,3],[29,4],[4,1],[3,0],[6,-16],[3,-8],[4,1],[14,6],[20,7],[4,2],[10,3],[7,3],[14,6],[16,5],[111,26],[25,6],[12,5],[19,7],[15,5],[32,12],[22,8],[212,78],[59,22],[1,0],[39,15],[98,36],[9,4],[10,5],[0,0],[4,2],[13,7],[32,15],[10,5],[17,9],[8,3],[73,28],[9,4],[5,2],[3,1],[14,5],[12,5],[10,4],[0,0]],[[1912,105938],[-9,37],[-207,197],[-62,2],[-45,29],[-53,79],[-98,125],[-56,109],[-3,15],[20,59],[-1,25],[-14,35],[-22,9],[-16,42],[-3,31],[13,0],[11,19],[-3,91],[-24,38],[-20,9],[-7,15],[-4,16],[2,61],[-8,50],[-22,41],[-100,116],[-2,18],[11,32],[13,87],[-20,145],[-69,121],[8,15],[6,85],[5,125],[-3,91],[-11,123],[-25,72],[-1,26],[48,105],[-4,88],[6,63],[82,239],[31,132],[2,41],[-40,113],[6,101],[-7,46],[-44,152],[-13,18],[-125,71],[-2,9],[14,35],[-3,26],[-93,212],[-66,45],[-25,-4],[-2,-12],[-40,-19],[-12,1],[-5,9],[-6,84],[-30,179],[-42,121],[-30,43],[-30,88],[191,381],[71,169],[6,17],[61,181],[21,44],[76,352],[14,129],[-8,92],[38,54],[82,288],[24,130],[-1,63],[48,230],[-24,100],[-19,44],[-23,14],[-9,19],[56,99],[53,65],[73,18],[43,43],[97,184],[103,237],[115,327],[81,272],[53,264],[59,285],[-7,31],[24,77],[18,82],[91,510],[36,270],[31,235],[28,235],[33,385],[41,340],[-12,107],[32,227],[9,131],[-4,41],[17,142],[7,150],[-3,26],[-18,10],[-4,10],[0,8],[2,51],[23,85],[4,31],[-6,23],[33,86],[31,190],[28,225],[13,20],[34,20],[15,24],[-23,29],[-20,-18],[-10,53],[0,182],[-9,43],[3,71],[27,149],[33,381],[-7,24],[-48,-20],[-8,11],[71,56],[1,50],[24,131],[-6,52],[-38,70],[25,97],[16,171],[-26,124],[-34,44],[5,132],[27,164],[13,21],[33,14],[20,58],[60,252],[27,136],[-2,42],[6,65],[32,164],[39,308],[1,6],[-1,10],[-19,-5],[-30,13],[8,74],[13,61],[23,38],[4,-2],[56,48],[52,255],[26,277],[-17,77],[37,314],[-5,183],[-32,98],[-21,10],[-107,-10],[1,15],[102,39],[23,35],[28,156],[19,221],[-12,91],[-33,91],[-13,110],[21,19],[16,0],[32,84],[37,270],[-33,32],[20,71],[44,378],[-1,232],[-14,91],[-10,31],[-83,117],[-51,24],[2,32],[46,70],[0,4],[29,268],[-5,163],[-18,187],[-43,112],[-50,42],[-2,38],[87,112],[46,27],[57,6],[16,8],[35,160],[-5,160],[-15,148],[-52,220],[-43,127],[-54,134],[-83,175],[-50,96],[-51,29],[47,34],[34,6],[15,-10],[35,-56],[-6,-32],[11,-30],[18,-9],[75,-9],[43,-19],[84,-62],[54,-60],[30,-50],[48,-23],[133,-37],[44,16],[5,46],[-80,62],[-12,27],[9,9],[93,13],[62,-9],[102,29],[125,55],[85,-33],[88,-9],[22,4],[115,63],[6,15],[26,14],[41,-1],[70,-18],[14,12],[23,48],[4,37],[9,13],[34,13],[29,1],[20,-23],[51,-30],[139,97],[2,54]],[[195580,103292],[-21,-20],[-3,-28],[-35,-32],[-3,61],[17,155],[34,5],[28,59],[-44,47],[-4,49],[28,160],[20,55],[20,27],[12,4],[24,-16],[14,-72],[-13,-269],[11,-94],[-75,-42],[-10,-49]],[[195788,103424],[5,-19],[-9,-22],[-55,62],[7,15],[52,-36]],[[195772,103865],[-17,28],[-4,43],[12,56],[15,16],[11,35],[3,39],[-28,27],[-48,14],[-60,95],[-12,47],[65,14],[36,-25],[9,-53],[-3,-9],[-20,-7],[-5,-24],[48,-35],[58,-13],[34,-39],[8,-79],[-15,-42],[-37,-74],[-31,-22],[-19,8]],[[195954,104202],[13,-5],[14,-45],[-35,-2],[-11,25],[14,8],[5,19]],[[194825,101962],[34,42],[11,48],[2,49],[11,20],[46,-21],[23,-37],[3,-19],[-12,-42],[-25,-45],[-6,-55],[18,-41],[39,-46],[21,-9],[2,-18],[-11,-38],[-18,-10],[-153,-26],[-23,2],[-43,32],[-5,35],[27,108],[39,31],[20,40]],[[196162,104511],[-11,-25],[-48,-39],[12,-79],[-14,-72],[-66,-122],[-28,12],[-11,37],[3,12],[-41,88],[-26,-1],[-11,-50],[-31,-64],[-9,3],[-8,23],[-9,89],[13,45],[13,-1],[22,34],[7,71],[-54,79],[-33,26],[-102,23],[-27,-3],[-11,-14],[-3,-2],[-43,-65],[0,-82],[-27,-111],[-18,-30],[-15,4],[-29,22],[-3,44],[5,13],[-4,4],[-101,0],[-86,11],[-6,10],[4,8],[-14,6],[-13,-19],[18,-114],[53,16],[17,16],[59,-41],[2,-43],[18,-320],[-161,-44],[19,-76],[77,-135],[15,-17],[10,-56],[-1,-34],[-24,-88],[6,-69],[7,-13],[1,-20],[-3,-27],[-10,-13],[-6,14],[-29,-11],[0,-24],[10,-31],[-2,-26],[-18,-46],[-15,-18],[-13,1],[-29,-15],[-25,-27],[2,-124],[-72,-109],[-30,-71],[-111,15],[-49,9],[-105,-16],[-253,-62],[-233,-89],[-50,-29],[-70,-27],[-31,-3],[-163,-15],[-45,-11],[-175,-50],[-87,-46],[-20,17],[3,34],[9,28]],[[196544,103454],[-59,-17],[-16,-20],[3,-20],[-99,-72],[-10,-37],[-84,-30],[-7,6],[-7,10],[1,18],[24,67],[-1,30],[-34,37],[-1,19],[-24,18],[20,75],[-47,156],[18,125],[4,147],[-18,47],[1,40],[1,24],[-15,12],[-90,-31],[-11,-157],[28,-63],[-2,-193],[7,-17],[24,-21],[-5,-33],[-13,-34],[0,-1],[-1,-2],[-27,-67],[8,-68],[5,-2],[1,-15],[-3,-11],[-1,-2],[-7,-20],[-1,-3],[-2,-7],[-22,-14],[0,2],[2,32],[0,12],[-24,23],[-44,15],[-11,-1],[-53,-4],[-13,0],[-35,-18],[-5,-22],[-14,-63],[-8,-34],[-1,-2],[0,-3],[0,0],[-5,-21],[-1,-3],[0,0],[-5,-4],[-16,-11],[-1,-1],[-3,-2],[0,0],[0,0],[-5,3],[0,16],[-32,5],[-59,-33],[-1,0],[-49,9],[-1,2],[-25,27],[0,0],[0,1],[-2,1],[-1,1],[0,1],[-1,0],[-9,11],[-2,1],[0,1],[-1,1],[-1,1],[0,0],[3,13],[1,4],[1,5],[53,31],[41,-8],[71,40],[-3,55],[-21,71],[-17,6],[-11,17],[-1,53],[66,81],[9,61],[25,64],[34,57],[22,9],[12,19],[43,148],[4,40],[-11,22],[13,23],[76,73],[143,16],[60,164]],[[102293,37088],[11,3],[38,35],[23,32],[-2,51],[-21,108],[-13,27],[-10,20],[16,23],[8,13],[90,69],[216,11],[107,36],[23,24],[-19,41],[-2,25],[60,10],[89,44],[7,8],[-9,22],[41,89],[161,128],[0,15],[-13,6],[4,9],[64,69],[44,26],[102,0],[23,17],[18,51],[48,32],[193,41],[93,31],[62,39],[55,50],[14,39],[-7,22],[15,11],[36,10],[7,-23],[13,-116],[-59,-80],[-93,-41],[-398,-239],[-270,-204],[-269,-236],[-232,-224],[-336,-357],[-14,-18],[-277,-351],[-139,-198],[-126,-194],[-111,-205],[-37,-85],[-13,-77],[-3,-12],[-144,-207],[-113,-201],[-185,-377],[-129,-306],[-73,-191],[-199,-517],[-104,-319],[-81,-298],[-77,-346],[-11,-48],[-47,-287],[-28,-244],[-22,-298],[-8,-263],[3,-273],[28,-412],[22,-189],[49,-313],[67,-357],[119,-502],[47,-173],[46,-173],[21,-57],[145,-597],[23,-110],[106,-520],[33,-195],[46,-371],[43,-514],[26,-108],[-26,4],[-31,50],[-7,123],[-28,216],[3,153],[-19,185],[-39,284],[-75,406],[-44,159],[-49,101],[-2,27],[-8,113],[-17,109],[-24,74],[-30,59],[-51,192],[-59,31],[-67,142],[10,72],[-2,28],[-31,104],[-5,12],[-24,58],[-50,176],[8,92],[-35,172],[-63,49],[-27,66],[-2,61],[13,21],[12,92],[-2,41],[-15,37],[-6,34],[8,70],[-18,64],[-52,61],[14,271],[-8,66],[-22,65],[8,218],[-3,528],[2,74],[12,79],[-3,36],[-12,18],[2,309],[46,213],[-9,17],[-24,9],[16,121],[27,105],[5,130],[2,8],[22,102],[8,20],[17,10],[9,16],[-17,93],[-17,33],[19,132],[55,151],[39,59],[18,50],[6,28],[-5,37],[4,44],[46,145],[86,166],[40,121],[60,104],[32,69],[-15,35],[5,19],[31,56],[15,14],[1,1],[40,83],[-16,20],[-5,25],[41,123],[34,3],[11,-13],[18,7],[49,92],[13,71],[-1,69],[-22,30],[2,17],[47,24],[72,137],[16,59],[18,9],[28,-4],[23,10],[60,81],[11,21],[1,20],[89,145],[4,45],[13,51],[22,29],[1,24],[-23,18],[-100,-16],[-16,4],[-15,24],[8,10],[277,74],[3,6],[47,78],[108,236],[-16,24],[6,28],[112,182],[29,112],[-3,9],[-8,0],[-19,-11],[-2,23],[31,104],[38,91],[4,1],[6,-35],[9,-4],[37,20],[20,50],[54,44],[22,40],[-12,39],[9,29],[78,94],[55,3],[17,38],[-8,11],[-2,63],[8,88],[27,71],[16,9],[16,-10],[22,-24],[28,-54],[43,-33],[56,15]],[[113262,44915],[-55,-73],[-51,-13],[-85,4],[-150,28],[-258,9],[-202,-51],[-279,-124],[-812,-420],[-62,-32],[-476,-246],[-345,-186],[-132,-81],[-145,-103],[-87,-75],[-52,-62],[-57,-98],[-26,-70],[-50,0],[-62,-36],[-63,-2],[-13,13],[-3,57],[60,88],[47,38],[111,126],[64,51],[73,147],[18,25],[33,27],[24,7],[33,-2],[40,-21],[65,11],[72,37],[53,43],[-5,77],[15,31],[41,57],[50,33],[46,-12],[26,-26],[53,-32],[79,9],[58,26],[-30,91],[-23,-3],[-6,1],[-41,14],[-5,1],[-9,33],[-21,29],[-34,45],[-5,7],[-14,16],[-28,9],[-59,-8],[-2,-2],[-1,-1],[-27,-22],[-56,-30],[-61,-21],[-29,-11],[-14,-4],[0,-1],[-14,-5],[-209,-64],[-24,-8],[-8,-2],[-98,-21],[-82,-38],[-55,-6],[-8,-1],[0,0],[0,1],[-35,4],[-5,1],[-3,1],[0,1],[-5,2],[-14,9],[0,0],[-18,11],[0,0],[-1,0],[-4,3],[-8,20],[-3,7],[-9,22],[-1,1],[-10,26],[-4,9],[41,6],[30,-5],[58,71],[76,105],[95,204],[57,344],[3,45],[-11,96],[-107,257],[-39,53],[-21,8],[-112,-66],[-76,-32],[-88,-53],[-128,-175],[-51,-129],[-9,-82],[-19,-38],[-75,-49],[-82,-23],[-21,8],[-37,77],[-11,24],[-7,70],[-24,25],[-85,13],[-25,-77],[-59,-63],[-61,-63],[-1,-2],[-2,-6],[-5,-9],[-12,-26],[-3,-5],[-4,-13],[-3,-14],[-7,-24],[0,-1],[7,-47],[1,-3],[6,-7],[40,-42],[1,-1],[4,-4],[1,-1],[38,-40],[15,-28],[7,-14],[0,-1],[0,-1],[0,-1],[-23,-49],[-68,-83],[-31,-74],[-1,-2],[-1,-3],[0,0],[-6,-17],[0,-2],[0,0],[5,-31],[6,-41],[7,-11],[51,-83],[64,-49],[86,-31],[87,-19],[5,-1],[2,-1],[84,-19],[2,0],[-14,-48],[-46,-90],[-18,-92],[42,-12],[104,-73],[13,-90],[3,-242],[-28,-141],[1,-148],[27,-51],[39,-24],[40,5],[56,17],[91,43],[9,78],[0,111],[43,46],[95,-89],[18,-3],[10,9],[116,-12],[2,10],[50,9],[32,-33],[-31,2],[-142,-134],[-60,-70],[-64,-57],[-816,-651],[-204,-182],[-105,-114],[-32,-52],[-12,-19],[-10,-33],[-243,-219],[-174,-171],[-122,-134],[-91,-137],[-46,-28],[-161,-150],[-86,-109],[-20,-48],[-124,-34],[-85,-3],[-173,-112],[-75,-58],[-224,-172],[-896,-620],[-262,-158],[-427,-222],[-283,-157],[-428,-270],[-95,-50],[-89,-84],[-94,-65],[-121,-100],[-67,-83],[-26,-7],[-47,-32],[-108,-97],[-4,-19],[5,-31],[-29,-18],[-3,11],[-9,35],[22,42],[6,13],[144,166],[244,199],[164,85],[17,26],[15,46],[255,174],[149,73],[215,137],[48,10],[93,53],[79,32],[15,41],[-13,33],[9,103],[17,43],[-28,24],[-38,16],[-24,-12],[-13,-41],[-99,23],[-52,-18],[-89,-68],[-99,-53],[-181,-65],[-142,-89],[-41,-32],[-86,-33],[-26,2],[-19,79],[0,25],[43,28],[30,30],[6,45],[-68,94],[83,103],[-23,15],[82,111],[4,33],[-17,23],[-24,10],[-75,-13],[-31,-10],[-94,-58],[-24,-5],[-19,25],[-71,-28],[-59,-58],[-4,-55],[6,-76],[-71,-15],[-21,-5],[-164,-71],[-11,-32],[-30,-21],[-327,-212],[-52,-17],[19,53],[9,81],[-20,55],[-17,15],[-75,20],[2,13],[47,38],[4,28],[-12,25],[-24,12],[-144,36],[-35,2],[-30,-7],[-35,116],[9,30],[41,66],[-2,20],[-5,25],[-21,8],[-30,24],[-10,8],[-1,0],[-6,39],[0,1],[-3,21],[-13,30],[0,0],[-1,0],[-27,10],[-8,3],[-41,-16],[-108,-42],[-2,-1],[-40,-15],[-10,-4],[-25,-27],[-33,-36],[24,-46],[84,-93],[4,-71],[22,-23],[17,-2],[28,-25],[19,-28],[0,-13],[-34,-43],[-11,-27],[43,-179],[11,-13],[125,5],[32,-10],[3,-30],[12,-28],[91,-56],[37,-7],[15,-18],[28,-96],[32,-45],[203,-174],[112,-116],[34,-41],[30,-50],[-6,-33],[-211,-103],[-74,-69],[-84,-50],[-58,-18],[-82,-43],[-62,-37],[-39,-46],[-78,-55],[-32,-16],[-185,-37],[-80,-56],[-58,58],[-22,0],[-13,-23],[-26,31],[18,103],[-20,152],[-17,32],[-45,10],[-97,0],[-48,16],[-18,-6],[-5,-2],[-14,-11],[-14,-12],[-17,-36],[-35,-72],[-16,-91],[-1,-5],[0,0],[0,0],[0,0],[2,-68],[0,-8],[1,-10],[1,-3],[0,-3],[0,-3],[5,-43],[6,-64],[-1,-24],[-3,-34],[-52,-76],[-13,-32],[13,-41],[25,-47],[44,-84],[0,-28],[-48,-128],[-36,-35],[-117,-117],[-112,-86],[-93,-116],[-45,-27],[-90,-117],[-102,-2],[-138,71],[-27,-8],[-72,-58],[-6,-35],[22,-48],[-3,-20],[-30,-48],[-13,-46],[0,-53],[15,-101],[20,-58],[-18,-43],[-36,-22],[-30,-33],[-48,-129],[-51,-45],[-167,-316],[-28,-17],[-21,-86],[-4,-15],[-3,-3],[-28,-22],[-40,-69],[-103,-235],[-5,-9],[-7,-29],[-1,-2],[-1,-5],[-6,-1],[-15,-5],[-3,0],[-12,-4],[-45,0],[-1,0],[-6,2],[-32,7],[-3,1],[-6,3],[-2,1],[-8,4],[-1,2],[-2,3],[-1,2],[-4,11],[0,8],[0,2],[0,8],[0,0],[3,27],[-7,26],[-23,27],[-24,43],[-1,6],[-5,29],[0,2],[-29,54],[-21,9],[-7,3],[-17,8],[-34,6],[-5,1],[-11,-2],[-32,-7],[-36,-8],[-23,-11],[-60,-28],[-27,-12],[-9,-7],[-99,-84],[-20,6],[-2,-2],[-2,-2],[-66,-60],[-46,-118],[-6,-154],[26,-81],[66,-123],[78,-81],[112,-63],[229,-79],[-22,-85],[-22,-5],[-112,-321],[-8,-45],[4,-30],[13,-23],[-30,-41],[-71,-73],[-13,-51],[-43,-166],[-24,-48],[-15,-73],[-11,-121],[-32,-101],[-24,-38],[-22,-126],[7,-63],[-11,-55],[-24,-56],[-73,-225],[-9,-45],[-12,-28],[-30,-43],[-26,-20],[-37,-17],[-75,0],[-117,-79],[-93,-113],[-88,17],[-45,28],[-9,33],[37,-8],[37,13],[8,30],[26,36],[47,0],[24,17],[-17,68],[13,28],[56,53],[0,63],[-11,38],[-54,38],[-47,-25],[-22,-43],[-65,-86],[-120,-98],[-48,-31],[-92,-121],[-46,10],[-36,-5],[-19,-20],[0,-2],[-13,-53],[4,-89],[15,-30],[22,-20],[116,-3],[54,-10],[32,-7],[47,-31],[67,-17],[84,10],[37,20],[24,23],[11,22],[55,32],[67,14],[31,29],[30,15],[96,8],[7,-32],[-46,-275],[-37,-285],[5,-141],[-32,-5],[-13,-24],[-3,-53],[-19,-21],[-50,14],[-19,20],[-40,-6],[-16,-35],[10,-80],[57,-59],[-5,-16],[-12,-5],[-17,-21],[-3,-20],[4,-93],[33,-11],[14,-17],[1,-31],[-18,-118],[-8,-7],[-13,14],[-193,-4],[-46,-19],[-22,-28],[16,-47],[5,-77],[-10,-65],[-11,-24],[0,-42],[53,-161],[3,-27],[-29,-29],[-16,-33],[0,-103],[-22,-16],[-18,-110],[39,-71],[18,-16],[37,1],[102,-106],[93,-198],[24,-32],[23,8],[11,-88],[5,-153],[82,-380],[-3,-120],[17,-46],[47,-136],[41,-94],[-19,-165],[-13,-18],[-18,-50],[0,-60],[16,-50],[-10,-32],[-24,-39],[-21,-17],[0,-56],[14,-28],[43,-18],[18,3],[14,15],[20,-12],[-5,-71],[-32,-78],[8,-20],[50,-20],[29,8],[14,18],[-3,14],[46,-29],[17,-11],[30,-72],[-18,-68],[-53,-75],[-11,-131],[4,-35],[11,-9],[43,29],[15,17],[10,43],[41,39],[54,14],[30,-17],[18,-26],[-24,-93],[-58,-66],[-6,-22],[27,-13],[-2,-92],[13,-126],[10,-9],[34,0],[34,32],[40,8],[17,-102],[-3,-20],[-49,-64],[0,-37],[62,-130],[29,-9],[6,-41],[-4,-49],[-40,-114],[38,-85],[41,-69],[12,-40],[-4,-13],[-40,-19],[-4,-28],[56,-80],[33,-28],[88,-30],[142,-4],[31,-13],[17,-174],[-36,-58],[-37,3],[-36,-17],[-5,-15],[25,-140],[9,-11],[30,-10],[47,6],[78,35],[27,34],[16,37],[1,45],[-35,105],[-24,4],[-15,38],[65,53],[48,-9],[-5,-115],[5,-105],[23,-231],[-99,-41],[-203,-19],[-159,-36],[-282,-102],[-51,-77],[-18,-63],[2,-89],[-153,-141],[-324,117],[-53,36],[-262,250],[-313,420],[-13,57],[-702,135],[-94,18],[-438,-19],[-14,-22],[-119,-64],[-323,68],[-400,85],[-84,54],[-448,359],[-191,268],[-100,56],[-439,169],[-3,1],[-134,10],[-35,-46],[-267,135],[-167,267],[-206,189],[-55,7],[-143,-24],[-682,203],[-214,157],[-228,591],[-15,65],[-135,588],[-123,489],[-96,273],[-195,315],[-210,137],[-247,439],[-21,197],[5,20],[16,19],[61,118],[13,406],[-56,365],[-39,70],[-6,4],[-34,18],[-28,-15],[-87,61],[-129,141],[-25,32],[-4,17],[113,200],[51,169],[19,97],[28,376],[-144,435],[-82,160],[-216,176],[-84,14],[-10,-8],[-3,-20],[-143,-1],[-650,676],[-120,157],[-93,287],[-10,55],[31,143],[-96,89],[-255,359],[-240,502],[-87,206],[-10,33],[-17,18],[-205,102],[-100,40],[-114,71],[-26,31],[-177,216],[-123,174],[-204,653],[48,457],[-17,12],[-178,61],[-66,108],[-91,301],[-61,60],[-197,264],[-36,143],[-7,72],[19,57],[-3,118],[-102,321],[-42,100],[-157,179],[-185,269],[-41,137],[12,200],[8,13],[-66,430],[-16,54],[-23,78],[-437,706],[-14,24],[-573,499],[-153,78],[-154,254],[-21,76],[-61,142],[-99,54],[-185,20],[-358,255],[-45,464],[-11,28],[-234,173],[-108,15],[-221,474],[-187,62],[-627,4],[-33,-61],[-42,-22],[-423,114],[-90,24],[-356,70],[-225,26],[-351,-56],[-34,-25],[-243,37],[-536,303],[-73,49],[-55,58],[-86,0],[-10,0],[-151,-157],[-81,-407],[-65,18],[-108,57],[-194,50],[-51,-26],[-198,-161],[-213,-4],[-192,-53],[-90,-75],[-31,-133],[-173,-509],[-133,-250],[-99,-100],[-85,-418],[-5,-144],[-156,-274],[-73,-342],[35,-194],[19,2],[36,-22],[16,-82],[-41,-51],[-267,-188],[-164,-77],[-399,-633],[-40,-240],[-151,-61],[-27,-4],[-432,89],[-373,169],[-321,254],[2,48],[-120,169],[-81,92],[-122,86],[-189,53],[-62,-12],[-322,103],[-194,203],[-88,187],[-3,1],[-167,76],[-318,78],[-140,22],[-228,79],[-434,342],[-87,97],[-168,293],[-83,172],[-103,86],[-98,26],[-113,43],[-267,162],[-444,401],[-84,178],[-41,192],[2,63],[-62,211],[-247,491],[-124,198],[-28,4],[-18,48],[-51,487],[29,365],[-6,430],[-79,280],[-193,324],[-71,66],[-288,376],[-49,544],[-209,491],[-155,55],[-48,67],[-217,298],[-311,329],[-300,245],[-143,-3],[-56,17],[-474,280],[-63,171],[-531,476],[-77,151],[-7,83],[-21,103],[-66,125],[-167,165],[-222,102],[-150,141],[-159,183],[-277,431],[-114,56],[-83,60],[-212,312],[-61,57],[-34,31],[-339,109],[-123,52],[-257,192],[-11,13],[-6,6],[-6,7],[-14,21],[-20,31],[-130,336],[-378,767],[-88,148],[-135,99],[-69,24],[-131,-25],[-206,159]],[[40258,8878],[5,-5],[17,-28],[21,-163],[-1,-22],[-26,-89],[-6,-11],[-14,-22],[-17,-14],[-29,14],[-73,84],[-9,16],[-22,96],[1,4],[77,134],[8,10],[56,2],[12,-6]],[[42959,9290],[4,13],[31,42],[74,-33],[3,-4],[3,-24],[-3,-44],[-15,-49],[-29,-36],[-31,-8],[-4,4],[-23,40],[3,29],[5,16],[-1,14],[-4,20],[-13,20]],[[42254,9668],[-34,51],[-19,41],[7,8],[25,7],[24,-17],[10,-19],[11,-9],[24,26],[12,74],[18,160],[7,9],[10,-10],[25,-35],[10,-41],[1,-12],[-5,-33],[-5,-7],[-6,7],[-17,-9],[-5,-27],[7,-123],[6,-17],[18,-22],[21,13],[-3,36],[-4,15],[-1,12],[12,11],[28,0],[4,-78],[-1,-42],[-15,-63],[-10,-16],[-19,14],[-1,11],[-20,8],[-35,-24],[-2,-12],[9,-27],[1,-50],[-74,-157],[-23,-31],[-29,-28],[-41,-170],[6,-29],[-10,-66],[-20,-31],[-35,67],[-7,78],[5,10],[17,16],[30,105],[32,82],[19,35],[20,19],[3,10],[-13,26],[-7,6],[-33,-28],[-40,12],[-32,124],[1,23],[58,110],[34,-26],[20,-25],[10,-26],[0,-6],[-3,-2],[0,-8],[3,-8],[22,15],[14,19],[5,16],[-1,12],[-19,46]],[[42797,9564],[5,8],[61,13],[35,-3],[10,-27],[30,-148],[0,-10],[-1,-4],[-76,-92],[-20,-7],[-10,8],[-3,6],[0,62],[6,32],[17,32],[-8,49],[-38,23],[-8,58]],[[42687,9828],[29,-12],[5,-6],[12,-41],[4,-44],[-6,-12],[-5,-4],[-12,-58],[4,-51],[11,-13],[43,-37],[0,-8],[-3,-12],[-16,-22],[-8,6],[-21,28],[-34,-4],[-19,-35],[-31,-29],[-4,2],[-6,8],[-7,15],[-6,36],[-2,118],[13,29],[19,74],[3,70],[27,160],[1,1],[21,-39],[2,-30],[-2,-33],[-12,-57]],[[40702,9363],[24,-35],[19,-9],[14,-1],[11,3],[43,-24],[32,-25],[7,-7],[24,-37],[1,-5],[3,-33],[-5,-12],[-7,-6],[-16,-5],[-8,5],[-17,19],[-1,9],[6,17],[0,12],[-9,26],[-14,12],[-15,-2],[-20,-7],[-16,-20],[-3,-8],[2,-11],[-9,-23],[-37,-64],[-25,8],[-30,36],[-27,45],[-5,29],[-4,5],[-31,24],[-11,1],[-22,-6],[-13,19],[-4,14],[6,44],[31,39],[20,11],[87,-23],[19,-15]],[[41758,9967],[-25,32],[-5,-1],[-24,-31],[-9,-44],[2,-16],[1,-11],[22,-64],[16,-17],[24,-14],[56,-135],[3,-27],[-5,-37],[-15,-88],[-128,45],[-23,27],[-17,48],[-6,33],[-56,-46],[-7,-24],[4,-20],[-14,-101],[-8,-22],[-12,-21],[-4,5],[2,50],[4,34],[-4,28],[-17,42],[-25,35],[-25,203],[-21,53],[9,52],[27,102],[16,20],[57,44],[21,2],[21,-3],[18,-20],[4,-12],[7,-58],[0,-33],[32,16],[26,101],[5,3],[20,-1],[28,-14],[-3,-12],[1,-9],[2,-14],[4,-6],[91,-34],[15,9],[3,12],[33,46],[16,2],[11,-4],[8,-14],[13,-32],[20,-78],[-10,-100],[-6,-23],[-31,12],[-8,15],[-3,13],[-13,30],[-51,17],[-6,-4],[-6,-14],[-9,-8],[-7,-1],[-6,5],[-38,32],[-11,21],[16,24]],[[41988,10312],[69,2],[15,-145],[0,-8],[-3,-15],[-5,-1],[-50,23],[-70,-5],[-26,-11],[-11,-2],[-22,33],[-11,23],[0,13],[16,47],[46,51],[6,4],[30,-2],[16,-7]],[[37174,6582],[42,-20],[5,-6],[12,-22],[23,-62],[41,31],[6,-2],[8,-27],[-10,-54],[-84,-79],[-42,16],[-53,-95],[-23,43],[-2,11],[-5,5],[-14,5],[-13,0],[-50,-16],[-31,-27],[-6,-13],[-18,-6],[-60,132],[-16,42],[5,51],[12,74],[67,96],[17,19],[36,3],[67,-4],[5,-3],[3,-6],[2,-28],[-4,-24],[-6,-15],[14,-33],[5,-6],[26,-9],[4,1],[6,8],[23,46],[3,1],[1,-4],[4,-23]],[[37675,6460],[4,0],[37,-65],[-1,-7],[-8,-16],[-75,9],[-13,13],[-28,5],[-85,-26],[-24,11],[-1,6],[13,13],[26,13],[107,36],[48,8]],[[37942,6582],[35,9],[17,-17],[5,-28],[-1,-12],[-22,-79],[-7,-6],[-76,-31],[-153,31],[-9,5],[-11,25],[18,37],[51,40],[49,-2],[21,-8],[17,-2],[25,4],[11,31],[30,3]],[[37397,6904],[19,1],[24,-7],[3,-27],[-2,-4],[-30,-22],[-37,-50],[0,-8],[2,-9],[5,-16],[44,-57],[15,-3],[16,7],[69,7],[15,-19],[8,-16],[-11,-46],[-12,2],[-10,8],[-50,-6],[-4,-7],[-41,-121],[-9,-42],[-14,-11],[-9,0],[-38,25],[-18,25],[-20,153],[12,22],[24,26],[7,12],[4,15],[-9,19],[-9,10],[-16,7],[-3,-4],[-7,-27],[-12,-11],[-28,-4],[-12,17],[-6,15],[0,15],[6,34],[29,80],[10,4],[10,-2],[10,-6],[19,-21],[56,42]],[[39880,7678],[5,7],[67,-28],[136,-37],[36,-53],[6,-19],[7,-54],[-7,-23],[-42,-42],[-112,57],[-28,-67],[2,-5],[-21,6],[-86,103],[13,155],[24,0]],[[30276,21185],[16,39],[1,95],[46,85],[34,-2],[22,-16],[42,-186],[0,-29],[15,-36],[142,-172],[7,-11],[180,-69],[102,-49],[9,-20],[7,-20],[50,-74],[12,0],[0,-18],[-30,-11],[-115,33],[-45,7],[-11,-9],[-12,-15],[-22,-15],[-34,-3],[-19,11],[-7,27],[-108,110],[-42,77],[-109,175],[-6,3],[-6,-4],[-19,3],[-102,57],[-1,30],[3,7]],[[36244,20427],[0,-30],[4,-7],[13,-4],[4,6],[11,2],[8,-11],[10,-79],[0,-42],[-7,-16],[1,-81],[37,-144],[53,-55],[41,1],[5,-32],[-4,-48],[-4,-25],[-19,-37],[-97,-34],[-14,3],[-4,8],[-4,2],[-24,-2],[-122,-75],[-83,-64],[-38,-65],[-7,-35],[14,-42],[14,-24],[9,-5],[1,-7],[-3,-30],[-20,-23],[-78,-5],[-21,33],[3,6],[1,10],[-9,20],[-17,27],[-41,39],[-112,83],[-21,12],[-27,5],[-58,-22],[-58,-7],[-28,3],[-4,13],[-24,32],[-26,22],[-32,16],[-39,5],[-33,54],[-57,74],[-22,24],[-88,72],[-58,-7],[-36,-8],[-10,4],[-8,7],[-75,102],[-24,42],[-28,10],[-24,1],[-23,11],[-3,5],[-1,6],[6,32],[0,13],[-11,67],[-4,18],[-14,38],[-53,107],[0,24],[40,49],[45,32],[90,3],[78,-7],[20,-15],[30,-14],[89,-26],[22,3],[50,19],[27,35],[6,35],[-7,39],[-14,20],[-8,6],[2,9],[13,26],[40,57],[19,12],[61,24],[43,-2],[24,3],[7,10],[2,77],[52,81],[66,-43],[6,-14],[17,-13],[17,-2],[43,48],[88,43],[19,19],[0,64],[6,9],[23,-17],[10,-23],[1,-10],[-8,-23],[12,-50],[38,-120],[59,-13],[20,2],[48,12],[2,9],[0,12],[2,11],[3,6],[26,16],[80,-33],[60,-33],[16,-30],[12,-44],[1,-23],[-3,-133],[-6,-50],[-7,-46]],[[62463,25641],[5,-11],[19,-44],[25,-48],[8,-8],[10,0],[5,4],[39,34],[11,30],[-1,4],[3,28],[20,42],[22,-12],[24,-6],[18,4],[18,8],[12,15],[13,8],[31,5],[13,-1],[35,-13],[40,14],[7,8],[3,20],[33,36],[32,32],[33,16],[30,-48],[2,-9],[-3,-10],[-1,-45],[22,-46],[9,-9],[19,-13],[41,-23],[54,-35],[12,-12],[11,-15],[4,-11],[-6,-23],[4,-9],[17,-13],[27,-15],[67,-33],[25,-21],[11,-19],[7,-17],[59,-64],[36,-18],[48,-43],[10,-18],[1,-7],[-1,-8],[7,-23],[86,-181],[43,-35],[42,-26],[6,-3],[10,3],[7,-6],[23,-35],[23,-51],[3,-10],[1,-15],[-2,-11],[-25,4],[-38,46],[-8,24],[-9,11],[-71,52],[-62,24],[-10,7],[-40,35],[-44,70],[-25,58],[-37,48],[-34,6],[-46,21],[-35,28],[1,5],[-10,17],[-9,14],[-10,8],[-21,4],[-25,-1],[-19,-21],[5,-23],[72,-70],[72,-51],[16,-22],[17,-28],[2,-8],[-24,-58],[31,-31],[19,-17],[133,-88],[6,2],[22,-3],[44,-19],[30,-18],[11,-24],[16,-69],[8,-16],[22,-28],[22,-21],[26,-15],[21,-16],[56,-66],[-61,-27],[11,-25],[105,-119],[13,-24],[4,-12],[1,-9],[-34,-156],[-4,-6],[-11,-11],[-32,16],[-29,5],[-19,-6],[-30,-29],[-1,-13],[28,-26],[8,-10],[13,-112],[-4,-108],[-14,-67],[-44,-149],[-8,-7],[-29,-49],[-16,-35],[18,-26],[-3,-34],[-46,-134],[5,-21],[-7,-18],[-51,-52],[-37,0],[-86,134],[-100,225],[-5,31],[3,85],[11,61],[29,69],[-39,32],[-13,-12],[-16,2],[-3,5],[-46,111],[13,26],[25,11],[7,-14],[2,-8],[3,-9],[47,-11],[6,8],[-3,43],[-117,87],[-94,75],[0,24],[-7,25],[-35,49],[-77,56],[-14,12],[-72,130],[-12,19],[-8,8],[-17,3],[-20,24],[-25,70],[-2,59],[-35,98],[-54,84],[-19,22],[-13,11],[-73,156],[-16,24],[-18,15],[-57,98],[-8,53],[-12,29],[-63,70],[-56,50],[-9,5],[-12,-6],[-8,1],[-19,13],[-28,34],[-78,114],[-83,162],[-21,77],[-1,15],[73,-36],[115,-63],[6,-8],[13,-30],[34,-27],[20,-2],[25,12],[9,-7],[45,-89]],[[67934,21280],[0,-27],[53,-87],[11,1],[13,10],[22,1],[3,-1],[1,-3],[3,-19],[-9,-118],[-4,-22],[-75,-55],[-144,33],[-33,20],[-13,42],[2,7],[46,81],[100,143],[16,7],[8,-13]],[[67171,21727],[64,-36],[40,-12],[20,-1],[34,-29],[3,-34],[-18,-39],[44,-117],[-1,-61],[34,-157],[-71,35],[-50,38],[-4,6],[-1,8],[-82,134],[-22,22],[-69,142],[-33,120],[-1,7],[18,8],[25,-2],[3,-2],[8,-13],[12,-6],[47,-11]],[[44484,13466],[35,-18],[16,-14],[4,-8],[-10,-11],[-16,2],[-4,7],[-12,7],[-34,8],[-53,-9],[-7,-3],[-15,-26],[-4,-22],[-16,-12],[-137,-47],[-3,6],[-2,29],[17,50],[7,16],[29,45],[91,26],[49,7],[13,-1],[52,-32]],[[33278,27674],[123,-14],[10,7],[27,5],[39,-4],[45,-18],[1,-7],[3,-3],[101,-47],[77,-14],[6,-14],[-1,-8],[-22,-85],[-25,-90],[-23,-78],[-4,-11],[-22,-38],[-29,-38],[-10,-3],[-13,4],[-45,31],[-11,14],[-14,6],[-45,16],[-46,5],[-69,-7],[-47,-14],[-31,-13],[-54,-30],[-15,-34],[-30,-54],[-26,-35],[-31,-32],[-16,-24],[-19,-44],[-11,-44],[-1,-22],[3,-11],[4,-105],[-52,-91],[-82,43],[-7,10],[-1,8],[17,25],[0,5],[-40,155],[-30,83],[-7,14],[-32,50],[-46,62],[-33,25],[-13,4],[-11,12],[-21,33],[-1,9],[-2,3],[-36,25],[-17,11],[-22,7],[-15,-2],[-9,-9],[4,-7],[-9,-3],[-52,5],[-13,18],[-3,18],[4,6],[2,8],[0,20],[-19,69],[-24,65],[-20,46],[-48,68],[-60,65],[-34,32],[-113,75],[-111,70],[-43,17],[-32,7],[-74,5],[-24,-2],[-125,-83],[-9,-9],[-5,-11],[-1,-4],[2,-20],[-4,-26],[-33,-45],[-75,-61],[-23,-1],[-70,68],[-77,54],[-52,26],[-39,99],[-16,52],[-4,18],[-16,112],[10,146],[7,75],[33,93],[26,45],[10,33],[2,25],[-7,84],[1,41],[11,-5],[5,7],[4,15],[2,19],[-1,23],[-6,37],[-3,53],[4,4],[28,-9],[5,2],[7,11],[7,1],[4,-6],[5,-23],[12,-12],[3,-28],[0,-22],[-3,-9],[-9,-15],[0,-6],[3,-4],[1,-13],[-5,-48],[2,-14],[6,-22],[6,-11],[16,-22],[63,-52],[101,-70],[129,-61],[72,-44],[43,-22],[68,-27],[32,3],[7,6],[29,29],[32,43],[88,91],[67,59],[87,53],[12,4],[7,-1],[16,-15],[49,-12],[10,0],[4,10],[7,6],[21,-6],[25,-17],[10,-22],[7,-21],[59,-97],[15,-15],[11,-6],[20,-2],[12,-8],[14,-58],[25,-151],[-5,-77],[15,-22],[14,-13],[24,-11],[50,-32],[36,-36],[81,-23],[67,-7],[10,-5],[46,-58],[10,-33],[1,-8],[8,-19],[6,-10],[19,-17],[78,-23],[23,2],[53,-9],[23,-11],[10,-10]],[[38167,28629],[19,10],[20,24],[12,5],[23,-11],[11,-17],[34,3],[9,4],[7,8],[3,10],[0,4],[-3,4],[3,7],[17,-2],[21,-16],[29,-71],[4,-97],[-23,-22],[-29,5],[-39,-5],[-60,-23],[-7,-10],[-39,3],[-48,29],[-3,2],[-23,46],[17,17],[26,46],[19,47]],[[34030,31522],[2,11],[27,48],[9,12],[19,13],[37,21],[50,-10],[23,-19],[14,-16],[20,-48],[6,-32],[2,-44],[-4,-21],[-23,-65],[-16,-24],[-43,-32],[-38,4],[-33,16],[-35,38],[-16,38],[-3,38],[0,38],[2,34]],[[33522,33285],[4,11],[7,8],[15,7],[9,-1],[5,-58],[-4,-12],[-3,-3],[-19,1],[-6,9],[-7,15],[-2,19],[1,4]],[[35502,34502],[0,0],[8,-27],[-31,-16],[-20,-21],[-16,-54],[-11,-11],[-10,4],[-12,14],[-1,3],[-5,19],[0,15],[8,11],[9,17],[15,16],[19,14],[24,13],[8,3],[15,0]],[[64600,21310],[21,-6],[39,-3],[38,58],[16,17],[27,12],[7,-5],[3,-29],[0,-12],[-4,-8],[-9,-2],[-15,-22],[-22,-54],[-10,-37],[1,-26],[-11,-60],[-5,-14],[-44,-11],[-20,4],[-42,97],[-16,74],[20,4],[26,23]],[[64623,21689],[29,-35],[15,-68],[3,-32],[0,-9],[-4,0],[-34,27],[-28,30],[-29,21],[-35,-2],[-8,3],[-66,88],[-11,23],[14,29],[-8,49],[-71,100],[-27,98],[-44,17],[-14,-2],[-5,4],[-42,124],[22,90],[16,79],[-13,41],[-13,17],[-20,13],[-24,-11],[-11,4],[-5,13],[0,4],[10,32],[28,-11],[22,-17],[14,-17],[51,-39],[81,4],[9,35],[-1,13],[-10,28],[-81,74],[-48,5],[-156,79],[-44,32],[-23,72],[-51,41],[-71,22],[-64,76],[-103,215],[-6,16],[-1,23],[10,67],[14,65],[13,26],[19,12],[8,0],[114,-36],[7,-8],[17,-2],[14,30],[-7,32],[-16,17],[-31,-2],[-42,3],[-66,28],[0,5],[17,15],[25,4],[52,-11],[16,13],[7,40],[-15,23],[-7,18],[15,1],[48,-7],[69,-47],[105,-99],[44,-41],[49,-67],[2,-56],[4,-4],[38,-4],[22,15],[0,31],[-12,46],[-16,34],[-9,16],[-7,6],[-6,3],[-6,-5],[-7,4],[-11,18],[-2,12],[23,19],[25,-1],[25,-10],[50,7],[22,-2],[13,-20],[9,-25],[-2,-54],[9,-21],[21,-42],[6,-18],[12,-20],[13,4],[39,-52],[10,-23],[38,-57],[4,-11],[-1,-23],[2,-27],[-98,-65],[10,-149],[14,-44],[22,-8],[18,-13],[53,-54],[2,-6],[-15,-15],[-10,-3],[-16,-22],[7,-126],[44,-6],[48,-2],[19,-17],[14,-24],[22,-206],[2,-64],[-11,1],[-14,-15],[-8,-13],[0,-10],[2,-5],[44,-55],[40,-151],[-3,-33],[-14,-14],[-24,-6],[-8,3],[-29,23],[-10,19],[-5,44],[-6,29],[-10,25],[-31,61],[-44,49],[-6,3],[-22,-20],[1,-26],[19,-72],[-32,-50],[-8,-4],[-8,-27],[-2,-24],[27,-2],[37,13],[12,11],[50,-123],[-3,-24]],[[65507,23654],[17,-23],[6,-18],[-35,-96],[-11,-17],[-1,2],[-18,-16],[-23,-73],[-8,-42],[-44,-79],[-17,-15],[-58,-5],[-94,-57],[-1,-5],[-51,-16],[-53,51],[-24,48],[21,81],[-123,78],[-38,7],[-52,23],[-48,44],[-26,30],[-19,26],[-5,7],[-2,9],[-19,20],[-34,32],[-12,-4],[-20,-76],[7,-41],[11,-23],[30,-40],[19,-6],[23,25],[4,6],[-2,7],[-4,7],[0,14],[6,14],[61,-70],[6,-19],[4,-39],[25,-64],[15,12],[62,12],[53,-12],[5,-5],[75,-148],[10,-23],[-24,-3],[-24,-7],[0,-11],[7,-18],[6,-5],[15,-1],[18,-37],[-2,-64],[-5,-21],[-25,-49],[-138,-40],[-8,0],[-16,25],[-15,9],[-5,1],[-22,-13],[-11,-13],[3,-36],[-7,-68],[-30,-63],[-15,-16],[-59,-39],[-32,-13],[-17,-3],[-11,7],[-38,73],[-31,67],[-13,32],[-1,13],[1,17],[-3,11],[-5,12],[-15,26],[-14,47],[-11,15],[-8,5],[-22,38],[-16,16],[-13,6],[-13,14],[-23,47],[-8,29],[-5,29],[-24,70],[-9,38],[-11,38],[-8,33],[-11,32],[-31,51],[-8,-6],[-2,-30],[-12,-45],[-15,-25],[-7,0],[-22,15],[-9,2],[-78,1],[-33,34],[-60,75],[0,33],[-42,57],[-58,28],[-100,35],[-14,76],[12,37],[81,113],[109,26],[68,13],[79,36],[79,5],[89,14],[79,22],[16,3],[4,-3],[7,6],[0,24],[12,15],[174,98],[139,-64],[25,-20],[74,-91],[34,-55],[14,-33],[42,-20],[30,7],[16,11],[30,11],[81,-47],[41,-45],[7,-21],[91,-21],[40,-1],[5,3],[9,-13],[1,-19],[4,-16],[5,-5],[10,-1],[22,-24],[17,-15],[17,11],[16,-1],[5,5],[7,1]],[[67414,21653],[5,4],[13,1],[45,-16],[24,7],[11,0],[9,-19],[34,-29],[20,-2],[11,11],[13,7],[21,0],[59,-29],[27,-25],[-9,-8],[-1,-24],[85,-165],[16,-54],[1,-60],[-4,-16],[-80,-63],[-17,2],[-15,13],[-4,7],[-28,2],[-23,-69],[-1,-25],[-10,-16],[-11,-2],[-38,23],[-12,14],[11,43],[-7,96],[-29,26],[-6,42],[10,21],[21,1],[-6,41],[-25,13],[-31,15],[-17,12],[-58,113],[-13,77],[9,31]],[[65676,21147],[53,-31],[15,4],[10,-5],[11,-19],[12,-49],[0,-45],[-21,-91],[-17,5],[-24,12],[-6,-1],[-20,-30],[-17,-86],[18,-22],[32,27],[11,-1],[7,-7],[9,-21],[10,-45],[-3,-13],[-17,-10],[-32,-58],[-33,-132],[8,-73],[11,-48],[20,-63],[-2,-5],[-11,-1],[-16,8],[-91,75],[-4,8],[-7,24],[9,23],[6,51],[0,40],[-19,76],[-37,55],[-123,27],[-8,-7],[-10,-16],[-13,-35],[-37,174],[0,18],[5,40],[106,53],[35,-4],[4,-3],[17,-65],[0,-14],[-9,-21],[-10,-10],[-5,-10],[7,-48],[5,-13],[9,-7],[19,8],[26,56],[10,56],[-11,31],[-5,48],[2,5],[51,-6],[27,34],[-21,20],[-6,48],[-1,19],[12,32],[59,38]],[[64823,22515],[19,34],[10,7],[153,54],[74,53],[41,14],[44,23],[25,39],[40,-11],[111,-92],[17,2],[12,-13],[69,-88],[14,-64],[-3,-14],[6,-20],[6,-11],[13,-16],[180,-104],[37,-11],[47,44],[252,-83],[23,-10],[5,-5],[8,-16],[37,-31],[66,-32],[58,-38],[55,-44],[89,-188],[7,-20],[16,-4],[29,20],[16,16],[13,0],[34,-19],[66,-89],[16,-30],[46,-38],[71,-11],[47,-1],[12,-3],[68,-49],[10,-16],[2,-6],[-13,-27],[-13,-5],[-50,13],[-16,9],[-4,7],[-21,8],[-75,1],[-9,-4],[-5,-31],[49,-55],[40,-17],[12,-10],[-1,-6],[-13,-19],[-93,-81],[-39,-41],[-3,-17],[5,-4],[22,4],[64,15],[85,105],[15,3],[61,-61],[60,13],[43,-57],[53,-65],[15,-7],[15,9],[7,-27],[0,-20],[-10,-63],[-17,-14],[-50,-15],[-7,-24],[26,-21],[10,-4],[83,12],[19,17],[9,20],[-2,39],[-8,24],[-10,9],[-3,13],[1,36],[9,44],[6,9],[30,-7],[12,-8],[53,-82],[27,-59],[3,-37],[-25,-53],[0,-20],[12,-34],[4,-3],[22,6],[9,-80],[-8,-127],[-33,-78],[-10,-13],[-11,-8],[-7,-24],[1,-7],[17,-27],[46,20],[6,8],[28,99],[12,59],[8,10],[26,11],[20,-5],[146,-341],[9,-4],[20,-19],[33,-56],[11,-26],[13,-141],[1,-55],[-2,-24],[-89,-88],[-21,-9],[-22,14],[-25,7],[-65,2],[-5,-5],[-10,-22],[1,-4],[9,-20],[-1,-2],[-25,-9],[-119,168],[-2,6],[4,17],[7,4],[9,29],[-6,27],[-121,82],[-72,-88],[-90,21],[-31,12],[-40,22],[-6,6],[-10,19],[-5,25],[10,5],[15,20],[-1,10],[-53,215],[-19,26],[-1,1],[-11,-6],[-20,-38],[8,-87],[2,-18],[5,-10],[0,-7],[-3,-3],[-4,3],[-19,33],[-22,89],[-7,64],[0,22],[2,15],[3,2],[-3,24],[-43,40],[-17,2],[-5,-37],[14,-12],[3,-6],[13,-46],[-17,-34],[-22,-31],[-32,-31],[49,-56],[67,-87],[10,-38],[-1,-8],[-24,-91],[-68,-9],[-54,-3],[-61,7],[-17,14],[-17,27],[-2,8],[13,28],[0,74],[-1,33],[-11,18],[-47,57],[-68,55],[-5,0],[-39,-16],[-14,-36],[-50,34],[-15,29],[-64,-6],[-3,-33],[93,-104],[98,-75],[58,-84],[10,-24],[-10,-32],[0,-21],[15,-22],[58,4],[122,-162],[3,-21],[36,-19],[75,-18],[19,18],[-1,7],[-20,45],[-9,12],[-10,6],[-14,26],[6,30],[55,53],[98,-20],[36,-28],[64,-147],[34,-53],[5,-23],[-6,-39],[-33,3],[-20,12],[-37,36],[-11,25],[-12,8],[-18,6],[-7,0],[-17,-26],[-1,-12],[8,-17],[16,-7],[52,-58],[107,-134],[6,-11],[1,-5],[-13,-18],[-75,-38],[-99,-5],[-4,2],[-7,32],[-11,22],[-31,42],[-24,20],[-25,13],[-10,0],[-19,-12],[-12,3],[-125,82],[-109,86],[-38,26],[-46,16],[-19,32],[-12,51],[-35,53],[-4,2],[-23,-14],[-16,6],[-67,85],[7,25],[5,5],[64,40],[8,7],[4,7],[-44,37],[-34,-3],[-4,-8],[-6,-5],[-6,-3],[-9,1],[-56,78],[34,50],[-2,19],[-57,30],[-28,-15],[-12,-44],[-27,-44],[-15,-14],[-23,24],[-10,4],[-15,-4],[-13,-43],[-7,-12],[-6,-7],[-16,-9],[-16,6],[-39,47],[-8,15],[-9,24],[-20,85],[-4,30],[5,30],[26,47],[33,36],[18,8],[27,-16],[12,-21],[2,-6],[36,-40],[24,5],[17,25],[-2,29],[-3,10],[-26,8],[-32,14],[-8,15],[-4,16],[0,26],[3,22],[15,47],[13,16],[26,5],[24,106],[5,34],[-54,42],[-49,66],[17,24],[-8,22],[-61,85],[-35,33],[-59,-86],[-20,15],[-22,6],[-104,6],[-63,19],[-1,2],[7,63],[10,-1],[3,7],[-14,57],[-63,73],[-25,5],[-58,0],[-11,-28],[12,-22],[20,-14],[2,2],[8,-12],[12,-25],[2,-15],[-20,-43],[-26,-9],[-30,-3],[-47,4],[-22,8],[-84,72],[-3,4],[9,108],[10,28],[52,45],[13,1],[118,-21],[24,9],[51,73],[3,7],[5,36],[-47,87],[-18,13],[-31,-10],[-8,-10],[-27,-7],[-96,96],[-75,124],[-7,-106],[-37,-167],[-45,-53],[-95,-31],[-41,31],[-18,24],[9,34],[12,10],[11,27],[3,69],[-2,153],[4,15],[15,31],[45,180],[-9,39],[-15,10],[-59,18],[-37,-8],[-109,206],[-7,37],[6,4],[7,-1],[6,35],[-3,6],[-3,8]],[[64985,21519],[14,-21],[5,-11],[8,-38],[5,-49],[-3,-9],[-23,-17],[-9,0],[-24,15],[-15,13],[-35,43],[-11,34],[-1,11],[2,10],[23,56],[13,11],[11,4],[12,-3],[22,-35],[6,-14]],[[62003,24533],[-1,-20],[8,-3],[13,2],[66,-23],[25,-25],[33,5],[99,-16],[9,-20],[22,-27],[50,-35],[38,-2],[81,29],[33,47],[30,61],[31,11],[38,5],[8,12],[15,53],[30,21],[12,-3],[20,-29],[33,-70],[15,-49],[87,-90],[28,-43],[102,-180],[3,-41],[-16,-57],[-20,-25],[-96,-76],[-57,-11],[-6,-1],[-8,5],[-51,35],[-127,39],[-91,18],[-72,10],[-91,19],[-47,17],[-64,18],[-10,-32],[-38,-53],[-47,32],[-19,-24],[17,-25],[13,-13],[45,-22],[76,-18],[15,17],[14,30],[22,-4],[20,-13],[-1,-19],[-7,-4],[-20,-27],[-8,-14],[-6,-31],[12,-34],[33,-52],[0,-5],[3,-9],[15,-5],[34,-49],[8,-24],[9,-32],[-1,-8],[-36,-48],[1,-10],[6,-13],[4,-13],[-3,-16],[3,-21],[-14,-19],[-15,-7],[-1,-6],[2,-10],[3,-9],[4,-5],[2,-8],[-14,-23],[5,-18],[-10,-25],[-12,7],[-46,-5],[-68,-25],[-53,9],[-14,16],[-14,47],[-52,12],[-30,15],[-64,43],[-24,22],[0,25],[6,37],[-84,64],[-56,26],[-25,3],[-48,-27],[-26,14],[-118,122],[-58,66],[-1,30],[-10,15],[-82,70],[-7,3],[-2,1],[-16,-9],[-70,8],[-26,28],[-27,45],[-53,9],[-18,-15],[-16,5],[-7,17],[-72,223],[-18,59],[-7,30],[2,42],[23,42],[22,6],[9,-6],[14,95],[-20,178],[-42,83],[-4,37],[52,37],[21,6],[7,-14],[5,-24],[23,-48],[17,-26],[74,-88],[31,37],[-2,6],[-9,12],[-4,-2],[-5,3],[-2,15],[3,96],[14,23],[87,42],[13,-26],[48,22],[1,24],[18,93],[44,125],[14,21],[15,7],[31,-31],[43,-37],[25,-5],[72,24],[41,3],[74,-21],[23,-13],[10,-8],[15,-111],[1,-46],[-22,-65],[-18,-124],[42,-78],[21,-11],[19,25],[4,22],[1,44],[-10,15],[-11,37],[0,6],[2,45],[19,75],[1,121],[18,36],[5,7],[13,4],[134,-30],[12,8],[129,62],[25,-2],[6,-11],[21,-21],[84,27],[9,1],[22,-13],[25,-22],[50,-73],[27,-92],[6,-30],[-35,-116],[-142,11],[-21,-31],[20,-31],[23,-10],[16,-5],[66,4],[86,-29],[45,-19],[13,-19],[-41,-89],[-139,-104],[-23,-8],[-94,9],[-36,15],[-60,35],[-30,4],[-97,0],[-44,14],[-24,-14],[-1,-15]],[[64086,21580],[1,-7],[-5,-3],[-33,0],[-131,63],[-50,77],[-35,51],[-104,60],[-47,42],[-90,111],[-60,66],[-47,38],[-5,2],[-12,23],[-18,60],[0,32],[7,32],[12,27],[10,-6],[11,4],[10,25],[-12,23],[-17,19],[-18,-6],[-25,-19],[1,-22],[-15,-40],[-16,-30],[-8,-10],[-13,-9],[-7,7],[-57,79],[-1,6],[-44,37],[-47,-7],[-53,0],[-44,33],[-24,27],[-4,11],[12,27],[11,12],[-7,20],[-32,4],[-30,-37],[-45,-9],[-35,54],[-8,34],[-18,155],[12,27],[2,36],[-35,33],[-34,19],[-25,55],[4,54],[15,9],[9,13],[-2,15],[-15,75],[-22,-1],[-6,-26],[-23,-6],[-9,13],[3,15],[-3,18],[-23,25],[-9,8],[-5,1],[-18,12],[-10,20],[-5,10],[-4,10],[-14,37],[-12,19],[-25,31],[7,47],[12,41],[-11,14],[-12,46],[5,17],[-6,22],[-10,6],[-35,-16],[-6,-5],[-9,-16],[-17,-9],[-23,4],[-7,-2],[-19,-19],[-2,-18],[-23,-50],[-15,12],[-1,5],[-14,18],[-51,44],[-5,8],[0,9],[-6,13],[-33,6],[-7,4],[-5,10],[-42,14],[-19,22],[-14,8],[-4,12],[3,12],[18,28],[18,7],[2,20],[-1,9],[-3,10],[-10,9],[-3,9],[6,5],[10,33],[10,24],[11,9],[7,27],[-8,19],[-4,2],[-2,-3],[-1,2],[-2,3],[-2,5],[2,6],[1,5],[13,8],[2,11],[-22,63],[-35,47],[18,13],[12,63],[20,76],[15,27],[60,13],[9,-3],[33,-20],[40,-30],[2,-5],[-1,-34],[17,-17],[29,11],[14,16],[10,23],[16,7],[61,-30],[-1,-17],[14,-13],[16,-5],[81,3],[22,12],[9,12],[80,57],[29,13],[44,3],[87,-111],[28,-88],[-10,-20],[-9,9],[-64,32],[-31,-18],[-22,-20],[1,-12],[10,-29],[5,-5],[7,-3],[20,15],[47,-8],[38,-34],[23,-25],[218,-333],[52,-86],[32,-84],[13,-40],[33,-27],[41,-43],[36,-102],[40,-37],[25,-35],[83,-135],[61,-117],[25,-55],[56,-172],[4,-30],[-3,-7],[-28,-13],[14,-33],[21,-39],[11,-14],[5,-3],[24,-34],[59,-128],[71,-177],[24,-61],[15,-39],[36,-145],[7,-35],[4,-29]],[[62342,23318],[6,-13],[3,-15],[38,-56],[37,-12],[4,-7],[3,-6],[2,-16],[2,-5],[4,-4],[21,-3],[22,-17],[5,-11],[38,-59],[24,-42],[5,-27],[6,-6],[7,-2],[3,22],[5,3],[11,-1],[7,-20],[17,-72],[8,-19],[5,-177],[-8,-23],[-26,-11],[-54,-58],[-8,-10],[2,-13],[-1,-9],[-34,-44],[-32,-4],[-4,3],[-21,68],[-22,88],[-10,45],[13,46],[19,27],[11,29],[-6,72],[-3,7],[-24,18],[-11,4],[-23,-3],[-9,-17],[-34,26],[-54,118],[-32,99],[-19,19],[-17,3],[-5,4],[-7,15],[3,17],[9,11],[61,48],[30,6],[17,-5],[16,-11]],[[50699,25012],[9,-10],[10,-30],[2,-58],[-20,-74],[8,-94],[18,-62],[-32,-66],[-8,-26],[16,-34],[40,21],[9,-10],[10,-32],[-2,-67],[-9,-79],[-14,-62],[24,-85],[4,-40],[1,-61],[-9,-112],[-4,-7],[-17,9],[-39,28],[-28,26],[10,10],[2,7],[-5,15],[-25,10],[-47,0],[-28,-16],[-12,10],[-3,34],[-1,71],[6,336],[4,148],[5,19],[3,3],[14,-12],[-1,-47],[30,-25],[10,5],[15,22],[3,10],[-14,31],[-10,7],[-15,66],[0,15],[57,159],[30,48],[3,-1]],[[50732,25310],[41,42],[82,-68],[8,-11],[-13,-72],[-4,-11],[-84,-58],[-22,-9],[-31,71],[-4,74],[2,18],[20,24],[5,0]],[[50311,25236],[40,1],[64,-62],[3,-8],[-2,-42],[-3,-16],[-44,-54],[-39,27],[-64,95],[30,76],[8,-6],[7,-11]],[[50869,25875],[13,3],[35,-14],[8,-11],[-4,-47],[-21,-48],[-9,-14],[-44,0],[-24,9],[-29,-5],[-45,-16],[-14,1],[2,8],[59,97],[13,2],[16,-7],[11,6],[33,36]],[[51118,24509],[13,32],[0,39],[-2,4],[-10,3],[-12,-8],[-4,4],[-7,15],[-1,21],[1,6],[37,78],[23,31],[13,-1],[7,-5],[5,-12],[0,-14],[-5,-18],[14,-29],[19,1],[45,31],[6,1],[4,-5],[3,-13],[-3,-29],[-44,-91],[-4,-31],[1,-6],[25,-18],[10,16],[59,125],[13,15],[22,7],[7,-9],[6,-27],[-15,-72],[-23,-99],[-82,-162],[-35,-82],[-22,-98],[-53,-191],[-2,-76],[3,-15],[-25,-81],[-34,-60],[-3,-11],[3,-32],[10,-22],[6,-6],[10,0],[5,4],[25,-3],[5,-4],[10,-74],[-6,-27],[-44,-61],[-7,-1],[-1,9],[-4,8],[-27,6],[-20,-8],[-20,-14],[-16,-43],[0,-17],[2,-10],[1,-17],[-8,-29],[-12,-10],[-28,-10],[-10,3],[-5,-5],[-43,-64],[-10,-33],[-32,-29],[-35,6],[-14,12],[-4,7],[-9,114],[2,39],[9,29],[13,22],[39,20],[-2,49],[-17,27],[-3,30],[36,89],[8,7],[20,-4],[14,3],[3,5],[13,42],[-5,14],[3,46],[50,129],[47,81],[17,33],[10,24],[14,45],[7,36],[22,162],[-3,28],[-12,23],[4,21],[23,19],[24,14],[3,8],[9,57],[2,38],[-22,48]],[[24736,92],[-3,-27],[-25,-55],[-29,-10],[-9,23],[-10,114],[10,20],[23,31],[19,-2],[18,-42],[6,-52]],[[24849,255],[0,-15],[-10,-23],[-14,-17],[-8,-7],[-3,2],[-1,164],[14,39],[13,7],[37,-50],[12,-48],[5,-56],[-45,4]],[[22665,1331],[18,0],[58,-40],[37,-27],[14,-25],[-2,-24],[1,-16],[2,-5],[77,-95],[69,-141],[23,-35],[40,-46],[20,-15],[14,-2],[12,-7],[25,-61],[8,-37],[3,-25],[5,-11],[27,-14],[69,-15],[50,-10],[14,-12],[59,-68],[5,-12],[-18,-12],[-49,-4],[-10,5],[-4,9],[-18,21],[-102,-14],[-40,52],[-1,26],[-11,16],[-104,131],[-35,41],[-24,60],[-19,48],[-41,88],[-17,29],[-102,107],[-11,6],[-36,-4],[-10,-7],[-17,13],[-58,53],[-68,86],[-2,5],[-5,28],[20,44],[18,6],[11,-9],[6,-22],[7,-15],[46,-37],[46,-7]],[[26979,1222],[-35,99],[-12,45],[19,68],[15,19],[36,6],[16,-3],[21,-14],[66,7],[3,18],[22,42],[13,12],[10,0],[19,-17],[6,-15],[11,-150],[-9,-39],[-4,-3],[-8,15],[-2,16],[3,10],[-5,60],[-6,4],[-3,-3],[-3,-7],[-32,-102],[-3,-17],[-3,-29],[-2,-55],[48,-46],[33,-11],[25,-1],[9,14],[106,41],[84,3],[20,-3],[3,-5],[6,-15],[16,-110],[-1,-75],[-5,-31],[-14,-70],[-52,-19],[-128,50],[-22,35],[-13,6],[-9,-11],[-60,-150],[-25,6],[-91,-9],[-10,-4],[-22,-47],[-15,-62],[-48,-45],[-7,7],[-15,43],[-2,17],[11,44],[-23,55],[-25,8],[-38,-112],[-26,-98],[-8,-3],[-15,6],[-30,25],[-3,12],[-4,52],[6,66],[8,20],[25,45],[18,23],[24,-4],[9,8],[22,53],[3,12],[0,6],[-11,82],[-23,14],[-13,40],[1,21],[6,24],[6,9],[47,11],[64,-10],[25,116]],[[25974,1130],[4,-18],[-17,-37],[-27,-48],[0,-23],[4,-13],[10,-13],[1,-15],[-14,-37],[-15,-18],[-11,-2],[-9,6],[-10,20],[-12,9],[-3,-2],[-15,-38],[-10,-44],[0,-11],[3,-19],[10,-29],[12,-59],[-3,-20],[-3,-2],[-20,14],[-15,25],[-5,21],[-3,43],[-4,21],[-6,9],[-103,61],[-16,-14],[-23,19],[-8,18],[13,54],[80,2],[58,23],[6,6],[8,40],[1,29],[-3,31],[-7,17],[-7,14],[-30,12],[-42,-1],[-20,21],[-20,31],[-6,23],[-83,86],[-41,47],[-9,18],[-4,21],[4,16],[3,9],[23,46],[22,11],[28,10],[20,4],[33,-6],[20,-8],[9,-12],[57,-14],[37,14],[11,-8],[38,-88],[-11,-51],[3,-9],[60,-71],[7,-3],[90,1],[65,21],[74,17],[1,-5],[-10,-35],[-23,-36],[-36,-15],[-6,4],[-42,-9],[-60,-27],[-3,-34]],[[26402,958],[-30,18],[-26,-3],[-26,-10],[-19,-25],[-25,-18],[-49,-8],[-30,2],[-36,21],[-8,-2],[-15,-15],[-8,-57],[5,-30],[-16,-12],[-19,27],[-36,96],[3,9],[7,13],[56,47],[41,-28],[41,-17],[18,-2],[21,6],[17,30],[35,24],[174,58],[42,29],[26,29],[5,19],[5,56],[1,90],[-1,98],[2,15],[6,15],[10,11],[25,0],[54,-26],[43,-69],[10,-25],[-34,-97],[-38,-33],[-8,-13],[-8,-44],[7,-122],[10,-55],[-2,-24],[-22,-50],[-112,-49],[-13,1],[-21,11],[-19,17],[-2,7],[0,8],[2,9],[-7,26],[-19,26],[-17,16]],[[25013,1187],[-16,4],[-7,6],[-55,87],[3,29],[12,59],[29,31],[9,7],[8,-2],[22,-19],[20,-25],[18,-34],[14,-63],[-17,-59],[-25,-18],[-15,-3]],[[22283,1718],[-12,23],[-4,4],[-23,-1],[-4,-3],[-16,9],[-9,10],[-4,5],[-53,105],[-8,28],[65,-29],[4,-5],[9,-12],[12,-18],[3,-6],[33,-85],[7,-25]],[[27746,1196],[13,10],[5,-29],[-1,-30],[-7,-51],[-21,16],[-62,-9],[-50,-79],[-22,-16],[-15,1],[-43,15],[-33,16],[-18,26],[-1,7],[17,112],[11,19],[31,-5],[4,-5],[1,-7],[8,-19],[19,-25],[41,-13],[18,5],[8,21],[-1,6],[-6,11],[-36,32],[4,6],[44,27],[44,15],[26,1],[8,-11],[14,-47]],[[21556,2475],[-24,-21],[-6,-7],[-34,-46],[-6,-20],[6,-26],[3,-9],[27,-17],[7,-3],[27,3],[4,-10],[-2,-33],[-5,-27],[-6,-5],[-39,-5],[-73,33],[-71,34],[-35,-18],[-25,-30],[-24,-68],[0,-6],[6,-11],[-2,-53],[-13,-35],[-10,-3],[-8,10],[-8,20],[2,6],[-2,14],[-18,32],[-35,46],[-21,13],[-8,11],[-2,34],[3,4],[30,24],[38,16],[18,-6],[52,72],[4,18],[67,24],[67,-3],[14,17],[7,35],[3,17],[2,53],[44,137],[19,46],[39,27],[54,-71],[12,-51],[-10,-36],[-8,-14],[-5,3],[-12,-2],[-9,-6],[-26,-80],[-8,-27]],[[23620,1888],[-8,-52],[-9,-27],[-8,-9],[-83,-64],[-11,-3],[-23,4],[-88,76],[-35,64],[-8,39],[9,106],[4,2],[28,-6],[11,-8],[12,7],[32,55],[12,12],[38,12],[24,-2],[15,-10],[39,-50],[65,-92],[4,-21],[-1,-8],[-11,-24],[-8,-1]],[[22362,2208],[17,19],[14,-3],[70,-47],[17,-18],[19,-40],[-2,-17],[-23,-41],[-28,-48],[-20,-4],[-16,3],[-16,28],[-15,54],[-11,71],[-6,43]],[[28025,1359],[7,8],[3,-1],[15,-14],[2,-4],[0,-8],[-61,-60],[-13,1],[-17,31],[-1,10],[5,37],[6,15],[9,6],[45,-21]],[[27696,1508],[-25,-23],[12,-38],[5,-5],[6,-16],[-1,-10],[-5,-13],[-28,-14],[-21,4],[-99,83],[-5,13],[-17,83],[-11,60],[6,24],[31,58],[27,30],[84,-30],[69,-173],[-10,-22],[-18,-11]],[[22052,2441],[2,7],[22,-7],[31,-40],[4,-9],[8,-72],[-17,-25],[-40,-2],[-25,32],[-3,14],[-5,71],[13,26],[10,5]],[[29342,1991],[-21,13],[-22,4],[-3,-9],[-19,-1],[-39,25],[-42,39],[-5,19],[2,13],[10,14],[9,5],[48,-19],[17,-17],[8,0],[17,18],[8,14],[12,37],[-3,26],[-10,25],[0,17],[4,10],[132,86],[29,-6],[86,-65],[52,-100],[28,-56],[5,-18],[0,-44],[-2,-8],[-43,-115],[-22,-45],[-22,-2],[-22,12],[-70,16],[-4,-2],[-15,-31],[-1,-17],[4,-38],[7,-13],[15,-21],[40,-33],[45,-71],[8,-17],[2,-9],[-6,-48],[-5,-7],[-8,1],[-7,20],[-5,10],[-28,21],[-61,-18],[-11,-26],[-83,19],[-30,11],[-14,-13],[-15,-27],[-16,-36],[-25,-75],[-41,31],[-53,-11],[-1,-15],[-45,-25],[-24,10],[-13,12],[-21,-28],[-94,-47],[-21,-5],[-47,62],[-100,31],[-79,-8],[-31,-18],[-14,-17],[1,-32],[-78,-9],[-9,7],[-50,22],[-115,25],[-18,2],[-7,-8],[-2,-8],[-20,-8],[-18,34],[14,12],[126,47],[37,12],[23,2],[16,-12],[-1,-3],[4,-16],[21,-29],[46,50],[47,6],[3,-7],[12,6],[40,37],[14,30],[-5,23],[6,18],[14,16],[38,-34],[27,-29],[51,-4],[126,31],[49,30],[34,36],[10,35],[2,15],[26,32],[29,9],[30,2],[10,-10],[31,-20],[8,0],[10,28],[-1,5],[-52,48],[-6,24],[9,13],[52,-2],[38,-17],[31,-5],[28,6],[46,65],[-8,72],[-44,13]],[[30026,1665],[12,-20],[77,-89],[17,-12],[28,29],[90,-23],[0,-4],[3,-9],[15,-16],[115,6],[63,18],[47,0],[5,-5],[12,-20],[40,-8],[46,3],[59,-12],[-1,-16],[-70,-26],[-13,-3],[-59,15],[-95,-33],[-103,-8],[-106,-25],[-84,-31],[-35,-4],[-64,54],[-104,32],[-78,-18],[-16,-11],[-4,-12],[-10,-6],[-68,23],[-36,21],[1,17],[-37,83],[-20,3],[-9,-6],[-9,3],[-24,34],[-12,23],[-6,19],[3,6],[11,6],[52,-21],[90,-10],[59,-38],[7,-11],[6,-2],[15,2],[77,52],[64,35],[28,13],[21,2]],[[21326,2659],[-21,14],[-11,15],[-14,26],[-13,32],[-5,29],[-2,33],[2,17],[8,20],[17,24],[23,20],[11,6],[26,5],[16,-6],[23,-21],[15,-28],[11,-27],[7,-30],[-2,-48],[-4,-21],[-8,-18],[-7,-11],[-27,-22],[-15,-7],[-30,-2]],[[30954,1897],[9,76],[40,108],[6,9],[87,78],[25,18],[41,-6],[78,-55],[16,-23],[10,-33],[2,-29],[-10,-22],[-94,-100],[-107,-50],[-78,-2],[-8,6],[-17,25]],[[19984,3622],[-8,7],[-11,21],[-14,44],[2,23],[32,2],[40,-28],[14,-24],[-24,-49],[-31,4]],[[17819,4601],[39,60],[54,-3],[52,-18],[31,-11],[3,-6],[-1,-7],[-18,-20],[-15,-2],[-33,-28],[-14,-39],[-6,-29],[0,-18],[8,-12],[1,-7],[6,-28],[2,-57],[-1,-98],[-70,22],[-6,4],[-3,6],[-29,54],[-8,36],[-5,23],[-27,9],[-16,-15],[-31,-8],[-27,5],[-17,8],[-9,15],[-54,49],[-9,6],[-27,8],[0,5],[27,54],[60,33],[6,1],[19,-31],[7,-9],[23,-10],[24,10],[5,3],[22,34],[0,7],[-3,15],[10,5],[30,-16]],[[32226,2316],[-4,-6],[-5,3],[-11,54],[-2,47],[4,19],[14,31],[13,18],[23,18],[58,-70],[1,-5],[-10,-67],[-5,-13],[-20,-30],[-15,-3],[-41,4]],[[32649,2568],[3,98],[8,77],[3,7],[81,103],[51,43],[37,-1],[53,-35],[18,-17],[4,-16],[4,-36],[-5,-27],[-33,-91],[-30,-15],[-22,-4],[-6,3],[-4,12],[-6,7],[-9,-3],[-12,-9],[-35,-42],[-28,-53],[-8,-27],[-10,-15],[-54,41]],[[18314,5064],[23,10],[4,2],[32,-33],[11,-16],[7,-34],[2,-20],[-1,-3],[-45,20],[-33,34],[-3,32],[3,8]],[[33264,3107],[40,7],[66,-31],[9,-10],[2,-24],[-1,-30],[-11,-50],[-7,-9],[-34,-11],[-54,1],[-14,10],[-2,3],[6,144]],[[18251,5047],[-28,32],[-9,24],[-6,25],[2,8],[27,-14],[18,-17],[14,-38],[-18,-20]],[[18189,5131],[-1,9],[-5,7],[-29,5],[-16,32],[-11,31],[6,2],[13,-4],[14,-12],[30,-41],[7,-19],[-8,-10]],[[17116,5670],[9,57],[2,34],[-8,38],[-96,149],[-52,8],[-35,-5],[-35,-9],[-39,28],[-4,40],[171,119],[13,4],[97,-19],[330,-155],[13,-11],[8,-10],[23,-40],[9,-36],[33,-61],[22,2],[15,-3],[38,-54],[101,-230],[3,-36],[-4,-4],[-10,2],[-104,23],[-15,16],[-46,83],[-5,2],[-19,-11],[-19,-36],[-19,-59],[-8,-19],[-24,-14],[-8,-2],[-15,5],[-109,67],[-95,-53],[-82,95],[-36,95]],[[33472,3290],[37,-17],[43,13],[37,48],[41,38],[23,-2],[43,-15],[40,-49],[-11,-88],[-15,-77],[-43,-9],[-89,59],[-39,-4],[-6,-18],[-9,-15],[-28,-23],[-22,-10],[-11,3],[-33,33],[-20,61],[5,37],[13,22],[13,7],[31,6]],[[35063,4280],[-15,-4],[-39,-31],[-22,-37],[-13,-29],[-23,-69],[2,-71],[-23,-63],[-17,-13],[-17,-31],[-18,-40],[-7,-20],[-6,-25],[-3,-45],[-35,-49],[-27,-18],[-18,2],[-8,8],[-24,-9],[-8,-7],[-22,-44],[-9,-25],[-55,-77],[-49,-37],[-60,-62],[-87,-103],[-122,-109],[-56,-38],[40,93],[14,15],[44,11],[19,11],[11,20],[81,194],[60,182],[16,61],[3,25],[-11,28],[-8,9],[-13,7],[-13,16],[-5,27],[2,56],[5,28],[2,11],[21,53],[127,188],[75,-18],[14,3],[21,13],[9,16],[44,5],[31,-16],[45,-11],[5,1],[15,24],[-28,108],[-7,17],[-4,3],[-34,64],[5,198],[35,105],[24,15],[18,18],[48,72],[1,8],[34,30],[50,29],[129,56],[23,-8],[19,-17],[2,-3],[-3,-22],[1,-10],[27,-26],[36,-13],[12,-1],[69,1],[18,8],[6,1],[2,-4],[3,-13],[5,-29],[-3,-21],[-15,-44],[-31,-48],[-7,-20],[-4,-18],[3,-22],[6,-16],[8,-9],[6,-16],[2,-37],[-1,-18],[-8,-20],[-17,-26],[-5,-2],[-73,-63],[-26,-30],[-17,-30],[-27,-32],[-107,-91],[-48,-30]],[[33416,3359],[-1,-17],[-2,-9],[-12,-24],[-31,-30],[-45,30],[-20,46],[-1,26],[17,40],[8,10],[35,2],[26,-15],[19,-16],[7,-18],[0,-25]],[[33672,3496],[-20,10],[-18,36],[-3,10],[-3,15],[10,101],[3,6],[41,24],[17,4],[16,-26],[2,-6],[1,-56],[-26,-91],[-20,-27]],[[36330,6110],[46,37],[31,-4],[7,-5],[18,-24],[22,-38],[16,-54],[-16,-12],[-15,-5],[-17,-72],[8,-25],[23,-42],[23,-20],[21,-9],[14,0],[65,44],[39,37],[5,16],[1,10],[-9,81],[49,131],[6,-2],[11,-15],[3,-7],[1,-8],[-2,-43],[41,-36],[34,56],[14,-11],[59,-96],[3,-10],[1,-39],[-17,-74],[-13,-12],[-63,-23],[-28,-28],[-30,-64],[-11,-54],[-25,-29],[-97,-122],[0,-48],[13,-28],[63,52],[7,24],[34,41],[74,65],[31,13],[80,67],[-3,8],[1,17],[11,20],[70,51],[7,-2],[16,-21],[5,-11],[-4,-145],[-44,-105],[-29,-17],[-55,-61],[-1,-13],[-7,-26],[-8,-8],[-143,-115],[-23,12],[-58,-43],[-19,-18],[-7,-217],[-63,-106],[-5,-5],[-6,1],[-44,25],[-23,17],[-10,19],[-24,-45],[-7,-102],[-69,-27],[-11,-34],[-44,23],[-38,31],[-28,-65],[-43,44],[-12,-2],[1,-37],[-22,-21],[-33,-21],[-13,19],[-10,1],[-58,-71],[-80,-85],[-6,-63],[-4,-7],[-38,-5],[-38,14],[-49,-49],[-18,-60],[-16,-64],[-26,-4],[-16,17],[-8,4],[-50,22],[-8,-3],[-11,-7],[-5,-81],[-21,-1],[-153,68],[-37,32],[-17,20],[-2,16],[55,50],[68,112],[14,16],[39,13],[30,-14],[121,89],[11,28],[0,15],[14,12],[61,-2],[20,-15],[19,-18],[20,22],[9,43],[15,35],[19,31],[10,-1],[41,-18],[9,-7],[17,-4],[5,9],[27,88],[51,30],[-8,59],[-25,13],[-5,9],[-35,125],[-3,18],[3,8],[16,24],[30,16],[15,3],[8,-16],[15,-14],[7,1],[47,39],[0,16],[-10,14],[-12,11],[-42,24],[0,51],[7,27],[14,22],[16,19],[22,9],[71,9],[27,-2],[42,-98],[0,-35],[28,-2],[24,22],[14,125],[-10,35],[-67,24],[-86,44],[-18,16],[-14,-5],[-6,-10],[-8,-21],[-10,-17],[-11,-2],[-8,5],[-53,63],[-69,89],[-7,92],[67,152],[22,37],[89,79],[45,33],[57,16],[58,58],[5,2],[4,-3],[15,-27]],[[33392,12008],[21,9],[19,-3],[32,-21],[1,-6],[-15,-36],[-65,-101],[-12,-9],[-52,11],[-8,4],[-7,7],[-10,17],[-5,15],[1,15],[-5,25],[-8,12],[-64,19],[-29,49],[-4,11],[23,7],[76,-20],[60,-10],[51,5]],[[32705,13209],[-5,39],[-12,23],[-19,4],[-30,-2],[-55,12],[-2,19],[1,52],[2,3],[13,21],[11,10],[50,26],[17,4],[18,-16],[21,-3],[24,9],[67,35],[10,-15],[-14,-98],[-97,-123]],[[45970,12347],[47,14],[10,-22],[6,-31],[-8,-83],[32,-82],[6,-45],[-10,-68],[-18,-10],[-41,26],[-61,-26],[-11,13],[-36,90],[3,23],[60,85],[11,82],[10,34]],[[46790,14150],[13,-19],[4,-10],[1,-9],[-32,-55],[-69,-96],[-34,-30],[-45,-67],[-23,-52],[-15,-41],[-6,-31],[-20,-54],[-5,-7],[-20,-7],[-10,4],[-15,12],[-12,15],[-9,17],[-3,15],[15,70],[20,86],[19,64],[120,222],[8,11],[9,3],[58,9],[37,-21],[12,-10],[5,-9],[-3,-10]],[[47203,14246],[20,22],[32,12],[10,-15],[5,-14],[-10,-45],[-47,-77],[-34,-23],[-111,-35],[-22,3],[-19,-2],[-27,-22],[-26,-34],[-68,5],[-37,7],[-5,3],[-18,27],[-7,37],[10,53],[18,56],[14,28],[35,43],[16,14],[13,-3],[5,-5],[20,-2],[40,26],[18,23],[8,5],[7,2],[6,-5],[12,-22],[8,-30],[6,-13],[40,-52],[16,-5],[15,4],[57,34]],[[47998,17461],[40,46],[9,16],[27,-15],[29,-87],[-1,-27],[-2,-9],[-15,-19],[-6,2],[-2,9],[-9,10],[-22,-1],[-53,-19],[-15,-26],[-3,-10],[-12,-63],[2,-9],[48,-108],[27,-23],[27,53],[2,3],[5,-5],[-11,-104],[-12,-88],[-4,-14],[1,-6],[9,-6],[19,-3],[10,10],[14,40],[11,14],[19,21],[32,22],[47,23],[75,22],[16,2],[9,-6],[5,-59],[0,-21],[-57,-155],[-23,-31],[-6,-76],[0,-43],[9,-58],[-24,-41],[-51,0],[-75,15],[-10,-51],[-53,21],[-34,36],[-39,-19],[-13,-11],[-20,0],[-33,17],[-4,6],[-2,15],[-5,12],[-23,20],[-22,-11],[-21,-30],[-9,-3],[-15,1],[-14,8],[-44,5],[-50,6],[-13,-4],[-6,-22],[0,-5],[20,-21],[9,2],[14,13],[33,-23],[122,-28],[21,-16],[23,-26],[52,-30],[40,-5],[10,-6],[25,-37],[3,-42],[-3,-98],[-15,-50],[-24,-60],[-8,-15],[-4,3],[-59,9],[-8,-27],[-20,-41],[-70,38],[-17,22],[-16,44],[-72,13],[-20,-7],[-37,-37],[-17,-23],[-12,-30],[-10,-35],[18,-18],[4,1],[47,31],[16,15],[1,6],[3,0],[43,-26],[33,-44],[2,-5],[-4,-19],[-33,-53],[-44,-53],[-17,-14],[-41,-12],[-35,0],[-7,6],[-28,-6],[-6,-9],[-2,-13],[1,-10],[3,-8],[52,-41],[39,1],[20,25],[18,15],[108,36],[69,-30],[6,-7],[9,-21],[-19,-50],[-7,-15],[-31,-27],[-40,-14],[-94,-98],[-9,1],[-4,4],[-3,9],[-12,0],[-26,-24],[-23,-51],[-2,-18],[2,-15],[1,-3],[9,-8],[7,3],[10,-29],[0,-20],[-16,-67],[-50,-55],[-11,-2],[-38,27],[-1,6],[13,65],[-5,13],[-48,52],[-22,-35],[-9,20],[-6,23],[2,83],[2,12],[22,52],[14,11],[26,83],[0,4],[-7,18],[-25,16],[-34,-16],[-12,-21],[1,-10],[4,-8],[-67,-235],[2,-26],[-4,-23],[-37,17],[-29,19],[-13,4],[-64,-41],[-13,-39],[7,-33],[10,1],[53,24],[5,1],[16,-12],[55,-109],[-1,-62],[-27,-71],[-21,-19],[-37,-22],[-23,-23],[-13,-80],[20,-30],[10,2],[6,9],[10,-18],[-3,-25],[-12,-25],[-48,-58],[-19,13],[-6,8],[-6,2],[-9,-3],[-24,-30],[-3,-7],[-26,-109],[-7,-64],[-26,-54],[-7,-9],[-15,-8],[-23,-7],[-11,26],[-16,13],[-11,-4],[-11,-11],[-15,-26],[-16,-18],[-18,-14],[-7,-2],[-12,5],[5,90],[23,142],[3,11],[9,15],[11,12],[8,5],[27,89],[31,72],[32,36],[20,47],[6,32],[-22,8],[-28,3],[-8,-10],[-2,-8],[-14,-12],[-35,-20],[-6,15],[-11,77],[12,159],[29,66],[10,10],[15,2],[37,69],[11,47],[1,26],[-9,35],[-9,3],[-14,-13],[-8,-38],[0,-6],[-24,-56],[-84,-151],[-3,-38],[-13,-84],[-16,-73],[-11,-43],[-35,-45],[-15,-30],[-12,-4],[-5,-6],[-27,-87],[-5,-34],[2,-30],[4,-14],[-3,-11],[-32,-53],[-17,-22],[-6,-1],[3,13],[-3,25],[-13,64],[-14,42],[-8,14],[-79,72],[-23,13],[-66,17],[-33,0],[-12,3],[-8,22],[0,67],[-18,106],[-48,199],[-9,31],[-10,27],[-47,88],[-25,33],[-20,19],[-74,16],[-6,-2],[-33,-28],[-34,-2],[-15,12],[-2,4],[29,53],[5,18],[3,203],[-4,27],[-5,16],[-2,59],[30,159],[8,14],[12,13],[10,2],[35,60],[2,90],[9,5],[11,-7],[29,-1],[26,42],[12,36],[45,90],[90,98],[23,15],[12,-10],[89,5],[25,15],[18,26],[33,1],[13,-13],[1,-3],[15,-98],[23,-113],[15,-28],[20,8],[8,-2],[10,-8],[5,-9],[6,-19],[9,-46],[7,-31],[27,-92],[19,-41],[109,-133],[8,-2],[13,31],[-4,27],[-49,78],[-66,58],[-2,4],[-36,122],[-4,88],[3,22],[14,25],[13,44],[6,28],[-13,17],[-26,27],[-5,1],[-28,28],[-4,10],[0,28],[4,10],[8,6],[96,18],[39,0],[34,6],[3,3],[7,36],[-11,14],[-20,13],[-114,27],[-60,5],[-21,-10],[-22,-30],[-11,0],[-5,14],[-45,243],[75,145],[51,60],[26,24],[66,-4],[85,-85],[36,-95],[9,-53],[0,-8],[6,-56],[8,-27],[6,-8],[30,6],[14,32],[4,91],[-5,66],[-23,38],[-14,42],[3,19],[25,2],[43,-12],[53,-27],[8,5],[8,50],[0,12],[-7,27],[-4,2],[-61,1],[-50,22],[-15,8],[-55,50],[-19,23],[-10,18],[-1,24],[1,53],[4,14],[22,25],[12,6],[9,-8],[11,-18],[182,-113],[6,-2],[25,15],[108,-47],[4,1],[23,19],[2,9],[-120,113],[-34,15],[-39,29],[-35,52],[-5,12],[1,12],[18,10],[36,9],[14,-14],[6,-11],[90,-58],[56,-10],[13,10],[1,7],[15,45],[136,-12],[4,3],[7,35],[-8,61],[-11,44],[12,9],[101,22],[3,-9],[3,-99],[-5,-29],[-31,-91],[-12,-23],[-39,-127],[-4,-30],[3,-46],[10,-88],[19,-42],[14,-16],[10,-5],[7,1],[20,11],[-1,16],[-6,11],[-10,39],[-17,115],[4,21],[10,34],[22,42],[34,-30],[7,-11],[23,10],[52,84],[14,46],[-4,20],[-16,16],[-3,6],[-3,26],[2,11],[37,32],[10,-41],[19,-12],[15,5],[14,36],[21,74],[6,50],[26,41],[10,3],[6,-4],[5,-8],[-1,-48],[-9,-24],[2,-6],[12,-11],[34,-3],[22,12],[37,-11],[-2,-33],[-19,-50],[-12,2],[-9,6],[-9,6],[-10,12],[-10,-1],[-29,-8],[-11,-37],[57,-132],[5,-8],[12,-7]],[[47965,18451],[-33,-8],[-16,-56],[75,-175],[-3,-25],[-56,-34],[-50,-13],[-23,8],[-50,-11],[-20,-44],[-4,-49],[2,-14],[-8,-12],[-11,-2],[-3,3],[-23,60],[-9,104],[-6,22],[-6,15],[-22,15],[-8,-21],[12,-145],[1,-81],[-13,-53],[-38,-37],[-53,-27],[-7,6],[-8,33],[-14,12],[-17,10],[-69,17],[-73,24],[-16,16],[-13,16],[-11,-3],[-52,-99],[0,-8],[26,-45],[25,-34],[18,-18],[52,-8],[88,-47],[5,-5],[1,-5],[-59,-51],[-30,-8],[-106,12],[-99,28],[-9,9],[-7,15],[-3,2],[-64,-5],[-43,-37],[-17,-9],[-54,31],[-1,10],[3,14],[53,183],[26,25],[7,4],[11,-4],[38,-38],[33,-40],[31,-22],[10,8],[0,37],[-25,43],[-45,38],[-16,23],[-1,107],[24,28],[90,-21],[11,2],[19,17],[25,38],[1,6],[-10,15],[-52,15],[-22,14],[-21,24],[-2,6],[1,9],[29,108],[37,-2],[11,-6],[12,-16],[38,-6],[44,22],[5,15],[1,38],[-13,1],[-24,-7],[-10,11],[-20,34],[-1,9],[7,14],[23,21],[25,-14],[44,-3],[10,29],[14,69],[-12,1],[-45,-6],[-49,49],[-8,18],[2,4],[20,-8],[18,2],[27,11],[17,24],[8,22],[-1,23],[18,79],[8,6],[29,4],[60,58],[2,35],[-1,10],[-8,0],[-7,-8],[-4,0],[-31,19],[-26,79],[-8,45],[13,59],[13,38],[32,56],[7,-1],[12,-16],[5,-22],[7,-14],[35,10],[31,69],[74,72],[15,3],[9,-10],[12,-97],[-5,-138],[-9,-22],[-23,-26],[-25,-99],[-15,-69],[-2,-19],[0,-34],[46,-155],[16,-3],[72,44],[17,18],[5,65],[-7,21],[-11,23],[-4,5],[-1,18],[19,32],[6,1],[18,-6],[25,-22],[60,-72],[0,-34],[10,-7],[21,2],[43,111],[3,1],[40,-42],[3,-11],[-9,-92],[-1,-80],[5,-66],[8,-39],[25,7],[2,29],[-8,43],[9,73],[63,117],[5,-4],[20,-29],[3,-7],[26,-133],[10,-86],[-5,-42],[-54,-159],[-24,-21],[-81,32],[-33,37],[-4,17],[2,10],[11,3],[0,14],[-38,61],[-7,-8]],[[65286,23076],[9,30],[18,32],[25,21],[21,12],[34,-7],[24,3],[8,9],[7,26],[6,10],[34,42],[18,3],[52,-1],[43,-15],[9,-9],[27,-44],[-14,-49],[-2,-19],[-3,-39],[3,-20],[17,-20],[22,-16],[19,-29],[7,-16],[11,-45],[-36,-66],[-42,-40],[-44,-70],[-29,-17],[-167,58],[-38,2],[-29,13],[-19,39],[-1,5],[6,9],[2,34],[-4,110],[-1,4],[-7,4],[-2,6],[2,18],[14,32]],[[61737,25614],[-11,-7],[0,-14],[-30,-41],[-12,7],[-40,14],[-68,7],[-7,-3],[-55,-114],[-74,-64],[-58,-61],[-9,-4],[-6,7],[-1,7],[-2,67],[-25,68],[-26,18],[-5,-6],[-1,-28],[-4,-3],[-48,1],[-12,7],[-9,19],[2,19],[12,26],[12,3],[7,9],[22,42],[5,23],[-16,40],[-20,3],[-36,58],[-21,100],[-150,138],[-10,19],[-2,22],[-11,21],[-56,60],[-49,35],[-11,12],[3,25],[18,38],[-62,153],[-19,23],[-77,53],[-26,4],[-14,-8],[2,-8],[11,-21],[19,-25],[37,-33],[58,-112],[45,-238],[-5,-16],[-41,-28],[-28,-13],[-164,46],[-31,-6],[-43,3],[-22,7],[-93,163],[-18,54],[-23,17],[-10,-16],[-5,-18],[5,-24],[13,-35],[6,-45],[-21,-61],[-34,-14],[-7,1],[-20,9],[-16,16],[-23,9],[-25,1],[-30,-3],[-5,-4],[-1,-34],[-28,-25],[-24,15],[-7,23],[-30,30],[-21,-51],[8,-16],[3,-53],[-2,-1],[7,-15],[10,-15],[59,-1],[91,20],[14,24],[69,-7],[58,11],[29,0],[50,-16],[88,-40],[150,-126],[9,-15],[-3,-44],[-9,-38],[-7,-17],[-9,-10],[-15,-33],[-10,-59],[25,-7],[44,83],[22,51],[-5,43],[6,23],[62,19],[1,35],[9,1],[15,-15],[77,-159],[45,-87],[15,-10],[76,-18],[14,-48],[39,-51],[26,-12],[21,-33],[36,-69],[-17,-89],[-11,-22],[-103,-135],[-9,-7],[-10,-2],[-9,1],[-10,6],[-4,10],[-4,16],[-2,16],[1,22],[6,7],[-2,25],[-10,3],[-7,2],[-44,-8],[-25,-53],[25,-24],[6,-3],[14,-29],[8,-62],[-2,-9],[-9,-10],[-74,-23],[-69,26],[-18,4],[-42,-3],[-15,-14],[-9,-24],[3,-28],[15,-10],[72,-61],[12,-15],[19,-47],[1,-67],[-3,-9],[-14,-21],[-30,-25],[-43,3],[-37,40],[-14,20],[-1,41],[-20,19],[-27,-15],[-20,-3],[-78,15],[-3,30],[-125,81],[-40,2],[-22,-1],[-8,-4],[-39,-54],[-24,-26],[-28,17],[-54,24],[-65,18],[-13,0],[-23,-6],[-19,5],[-126,45],[-102,42],[-79,26],[-42,7],[-18,-14],[-42,13],[-12,8],[-15,53],[-15,24],[-6,8],[-129,70],[-88,27],[-27,4],[-32,18],[-20,21],[-8,16],[-2,4],[-2,21],[2,16],[-2,17],[-10,36],[-23,46],[-28,27],[-43,32],[-99,58],[-78,32],[-5,30],[3,27],[-7,17],[-25,2],[-98,-12],[-366,-11],[-77,33],[-66,33],[-90,29],[-74,16],[-121,7],[-219,14],[-70,7],[-77,12],[-126,35],[-58,21],[-159,52],[-108,20],[-11,13],[0,5],[4,28],[4,14],[29,-2],[11,30],[-9,77],[2,86],[1,11],[7,15],[8,8],[35,10],[13,-6],[7,-25],[-8,-19],[-1,-11],[9,-15],[17,-2],[26,9],[6,7],[16,30],[2,9],[-3,9],[-9,7],[-7,10],[-7,42],[24,123],[-22,48],[-18,-24],[-25,-1],[-9,3],[-8,10],[-2,8],[2,25],[2,9],[10,17],[4,26],[-28,39],[-21,23],[-25,37],[-56,98],[-20,40],[-13,47],[0,13],[4,7],[11,5],[12,19],[21,53],[4,14],[-7,130],[-9,37],[-34,48],[-38,-23],[-1,-59],[17,-125],[0,-11],[-33,-45],[-19,-13],[-7,-11],[-5,-18],[-13,-145],[19,-56],[-2,-15],[-11,-38],[-6,-11],[-62,-91],[-118,-191],[-26,-31],[-15,-23],[-6,-19],[-2,-26],[-11,-30],[-28,-46],[-11,-12],[-9,-10],[-22,-13],[-57,-29],[-180,-66],[-27,-19],[-72,-22],[-140,-30],[-40,-2],[-86,21],[-139,22],[-56,4],[-190,-5],[-18,5],[-17,32],[-65,162],[-53,-13],[-71,-73],[-52,-62],[-158,38],[-41,5],[-48,-2],[-28,-7],[-51,-23],[-31,-10],[-26,-4],[-103,-7],[-252,-47],[-43,-12],[-89,-33],[-89,-41],[-50,-32],[-26,-17],[-113,-110],[-49,-40],[-46,-24],[-167,-107],[-159,-114],[-53,-49],[-130,-138],[-4,-4],[-33,-10],[-43,-2],[-9,2],[-3,11],[-4,7],[-10,3],[-12,2],[-24,-10],[-16,21],[-4,22],[8,34],[-117,75],[-64,24],[-23,2],[-32,40],[-10,37],[-55,-12],[-31,-17],[-7,-9],[2,-39],[-46,-37],[-11,2],[-28,24],[-23,9],[-27,-14],[-6,-9],[-4,-14],[1,-8],[-3,-2],[-32,-6],[-59,27],[-20,33],[0,16],[-6,22],[-5,8],[-55,39],[-37,13],[-27,7],[-88,-39],[-10,-34],[-27,9],[-18,167],[8,109],[7,27],[2,65],[-18,19],[-22,-5],[-9,-8],[-5,-34],[-49,-18],[-17,-2],[-23,-9],[-79,-81],[-17,-26],[-14,-41],[-2,-30],[2,-47],[51,-84],[65,-51],[-5,-17],[-84,-20],[-132,30],[-139,61],[-17,42],[4,6],[-1,14],[-3,8],[-33,9],[-26,18],[-30,7],[-67,2],[-57,-4],[-44,-50],[-33,-54],[-23,-13],[-56,0],[-12,9],[-5,7],[-1,6],[23,69],[36,39],[38,60],[36,167],[-25,18],[-20,-18],[-6,-32],[-5,-44],[-11,-33],[-6,-3],[-88,-126],[-47,-71],[-21,-40],[-23,-33],[-73,-81],[-25,-8],[-55,-10],[-5,5],[-24,-25],[0,-12],[12,-51],[14,-36],[16,5],[13,23],[18,16],[111,82],[6,1],[4,-5],[0,-9],[33,-18],[-17,-71],[-39,-74],[-48,-50],[-28,-9],[-60,-79],[-42,-66],[-18,-38],[-27,-69],[-38,-87],[-15,-11],[-11,-1],[-9,1],[-46,47],[-8,17],[-2,11],[5,20],[19,39],[35,53],[18,10],[16,47],[6,31],[-18,10],[-26,-13],[-22,-23],[-8,-28],[-25,-13],[-53,-2],[-12,20],[-13,60],[-3,20],[30,181],[11,49],[13,18],[48,24],[7,-9],[20,-16],[45,-7],[61,63],[32,54],[11,48],[100,70],[51,62],[83,118],[46,42],[11,3],[22,14],[30,31],[1,18],[-2,4],[-21,12],[-14,0],[-17,-17],[-25,-13],[-7,1],[-2,3],[-7,33],[1,1],[-14,47],[7,19],[8,24],[10,51],[-2,8],[-2,0],[-6,-4],[-4,-5],[-11,-17],[-10,-26],[-2,-8],[-8,-49],[0,-8],[-1,-40],[1,-4],[-18,-26],[-25,-30],[-2,2],[-1,1],[-4,5],[-3,12],[-1,37],[9,69],[17,42],[3,8],[10,31],[4,24],[-6,20],[-4,-2],[-40,-91],[-21,-51],[-6,-7],[-20,-25],[-21,-25],[-19,-29],[-9,-14],[-7,-16],[-1,-7],[-28,-28],[-51,-28],[-6,7],[-7,10],[-9,18],[-3,8],[-2,6],[4,10],[40,103],[5,12],[21,48],[11,16],[14,23],[32,72],[-7,22],[-8,20],[-19,23],[-1,-8],[-1,-7],[-6,-27],[-2,-8],[-15,-45],[-23,-47],[-6,-5],[-21,6],[-8,2],[-3,3],[-2,16],[-8,0],[-5,-9],[-5,-17],[5,-30],[-4,-14],[-12,-15],[-36,-15],[-11,6],[-4,6],[-2,6],[-2,24],[-27,-9],[-21,-59],[-1,-52],[-6,-9],[-44,-40],[-19,-12],[-18,11],[-13,-2],[-36,-14],[-21,-18],[-9,-19],[-22,-2],[-19,14],[-46,74],[-8,19],[68,70],[34,-3],[41,67],[29,10],[75,70],[36,44],[32,42],[37,105],[0,38],[-3,6],[-13,2],[-57,-29],[-3,-11],[-6,-53],[-10,-40],[-12,-19],[-43,-42],[-121,-59],[-4,-1],[-81,105],[-36,-11],[-16,-61],[-7,-33],[1,-12],[9,-20],[-1,-14],[-2,-7],[-22,-19],[-34,-22],[-20,18],[-13,55],[-6,31],[18,31],[5,27],[12,11],[29,-16],[20,23],[-23,47],[-26,22],[-22,50],[-10,48],[19,79],[6,146],[-14,26],[-24,-3],[-61,-77],[-29,-113],[-2,-43],[4,-14],[-3,-12],[-5,-18],[-28,-61],[-29,-35],[-55,-7],[-15,2],[-21,34],[0,25],[4,43],[-19,23],[-28,2],[-10,-22],[-8,-55],[3,-41],[16,-34],[-3,-16],[-18,-25],[-8,-2],[-23,12],[-11,9],[-7,9],[-9,17],[2,19],[-7,26],[-2,3],[-22,-19],[-14,-17],[3,-31],[21,-96],[-56,-117],[-66,11],[-3,7],[-13,62],[-10,33],[-23,28],[-15,-5],[4,-71],[4,-13],[3,-1],[11,-14],[-10,-46],[-7,0],[-17,10],[-8,8],[-46,245],[-4,26],[-1,72],[5,27],[-21,49],[-11,7],[-25,-14],[7,-16],[3,-23],[6,-152],[2,-109],[13,-39],[31,-76],[28,-82],[1,-58],[-17,-18],[-31,-21],[-4,6],[-17,52],[9,16],[-7,18],[-64,38],[-25,-5],[-1,-95],[11,-19],[15,-18],[14,3],[28,-54],[5,-13],[-2,-4],[-6,-10],[-26,-17],[-43,-6],[-23,2],[-48,-9],[2,-14],[-1,-16],[-74,-100],[-53,-14],[-30,-1],[-11,9],[-16,44],[-3,24],[2,168],[4,47],[6,48],[21,89],[23,146],[-3,25],[-20,37],[-13,13],[-9,3],[-6,-4],[-4,-24],[2,-14],[-24,-128],[-20,-5],[-7,12],[-19,48],[-33,71],[-22,5],[-9,-21],[14,-57],[11,-98],[-3,-67],[-7,-46],[-10,-41],[-18,-11],[-3,-45],[16,-124],[0,-59],[-10,-72],[-5,-14],[-20,-9],[-12,0],[-9,15],[-30,20],[-7,-46],[3,-28],[3,-16],[13,-22],[11,-10],[16,27],[8,2],[13,-5],[17,-16],[13,-54],[11,-121],[15,-30],[17,25],[3,70],[15,110],[6,12],[28,28],[67,14],[27,-12],[15,-16],[43,-133],[6,-32],[-20,-100],[-55,-88],[-9,8],[-11,-16],[-15,-77],[-4,-36],[-8,-48],[-3,-5],[3,-63],[7,-31],[20,-22],[24,26],[26,35],[2,18],[-5,14],[2,34],[19,93],[42,109],[9,8],[14,0],[123,-131],[20,-30],[2,-38],[-2,-14],[47,-68],[4,-215],[11,-170],[-30,-19],[-42,-10],[-36,25],[-5,14],[-5,19],[-2,21],[-2,7],[-21,17],[-20,2],[-15,-24],[7,-29],[9,-23],[0,-14],[-40,-88],[-19,-26],[-9,-7],[-10,-99],[23,-11],[4,4],[7,13],[21,82],[42,42],[7,2],[17,-10],[5,-7],[-1,-16],[-4,-14],[-22,-11],[2,-28],[43,-22],[21,6],[2,14],[-3,34],[-4,20],[8,16],[52,-38],[-10,-62],[-11,-12],[1,-9],[11,-30],[4,-5],[28,15],[7,10],[-6,28],[-8,10],[1,6],[13,24],[7,8],[52,-41],[1,-17],[-4,-28],[-5,-19],[-1,-5],[-26,-11],[-12,-72],[3,-109],[25,-8],[9,21],[12,47],[0,51],[16,36],[33,52],[43,-2],[23,-22],[9,-19],[0,-20],[-46,-106],[-19,-14],[0,-57],[7,-71],[10,-14],[24,10],[31,100],[12,70],[7,17],[12,21],[9,10],[27,-17],[7,-9],[2,-7],[0,-32],[-13,-97],[-32,-62],[-59,-82],[-18,-21],[-4,0],[-18,22],[-3,17],[-12,28],[-10,-8],[-7,-30],[-11,-24],[-19,-32],[-13,-16],[-55,-33],[-22,-4],[-3,6],[12,98],[14,16],[12,-1],[27,7],[11,11],[0,14],[-13,16],[-36,18],[-26,-30],[-47,-30],[-43,19],[-2,60],[9,17],[-47,197],[-15,18],[-11,5],[-22,-17],[-7,-16],[9,-81],[18,-129],[17,-149],[-8,-71],[-11,-17],[-25,14],[-11,9],[-3,8],[1,15],[-8,20],[-24,-1],[-28,-12],[-1,-43],[3,-9],[-21,-79],[-24,-36],[-33,-1],[-3,5],[-2,10],[3,32],[0,6],[0,5],[-2,4],[-6,2],[-5,-4],[-9,-14],[-18,-22],[-9,0],[-2,3],[-6,15],[-10,16],[-7,8],[-6,5],[-5,-1],[-4,-2],[-2,-3],[-2,-3],[-1,-9],[-20,-22],[-2,-4],[-1,-31],[-16,-38],[-27,-10],[-13,8],[-8,22],[-14,11],[-14,18],[-3,8],[-1,13],[-6,4],[-18,1],[-15,-7],[-12,-25],[-6,-23],[-19,-19],[-11,2],[-3,11],[-2,17],[-6,14],[-10,-3],[-12,-44],[-22,-7],[-6,4],[-3,11],[-2,5],[0,2],[2,5],[2,4],[3,6],[-2,12],[6,38],[20,34],[-1,22],[-7,17],[-12,19],[-9,3],[-22,-48],[-29,-11],[-41,-101],[-3,-63],[12,-100],[-27,-86],[-70,163],[-5,31],[-49,160],[-27,48],[-25,-14],[-14,-31],[43,-199],[-8,-7],[-3,-14],[-4,-97],[-11,1],[-31,16],[-13,-111],[-3,-125],[54,-83],[33,-26],[13,-128],[-60,-10],[-55,82],[-44,103],[-60,119],[-16,-122],[72,-277],[-3,-36],[3,-46],[-10,-32],[-12,-24],[-47,38],[-21,112],[-56,56],[-79,9],[-35,-43],[-4,-40],[30,-32],[34,-8],[38,-51],[-3,-48],[-26,-44],[-3,-66],[11,-94],[-40,40],[-27,16],[10,-103],[-29,-110],[-35,-65],[-17,-49],[-40,-45],[-28,-2],[-6,66],[5,54],[-18,79],[-25,-6],[-6,-8],[-26,-113],[3,-94],[-14,-136],[-15,-11],[-17,8],[-7,10],[-3,15],[2,7],[-1,11],[-2,10],[-9,16],[-13,4],[-11,24],[-13,34],[-5,26],[3,58],[-12,39],[-6,11],[-6,6],[-7,-3],[-11,-29],[-5,-36],[1,-28],[-3,-18],[-10,-5],[-15,4],[-6,-7],[8,-33],[10,-21],[19,-20],[21,-17],[4,2],[7,-10],[11,-32],[1,-8],[0,-19],[7,-39],[6,-9],[-8,-49],[-38,-25],[-1,1],[-13,51],[-6,19],[-10,5],[-14,-4],[-23,-27],[-7,-22],[-1,-41],[7,-55],[-8,-68],[-17,-30],[-17,-20],[-10,-16],[-20,-87],[-25,-24],[2,-15],[22,-36],[13,-26],[2,-12],[-3,-30],[-26,-63],[-14,-6],[-15,3],[-8,-16],[-3,-16],[-5,-2],[-8,19],[-8,26],[-1,14],[6,16],[-8,29],[-19,-12],[-10,12],[-18,36],[-4,12],[-11,2],[-4,-34],[4,-8],[-2,-8],[-7,-31],[-4,-1],[-9,-17],[14,-48],[4,-27],[1,-25],[-12,-23],[-28,-27],[-18,-6],[-6,7],[-3,9],[-15,14],[-17,6],[-29,-20],[-14,17],[-6,0],[-3,-8],[0,-7],[2,-12],[-2,-12],[-9,-15],[-35,18],[-40,32],[-10,17],[-9,31],[-12,21],[-8,5],[-13,-30],[-1,-34],[-7,-16],[-28,-35],[-15,-13],[-6,-12],[-3,-13],[7,-17],[15,-5],[6,-9],[3,-7],[1,-9],[-1,-13],[-15,-4],[-32,-1],[-12,-15],[-1,-18],[9,-33],[0,-17],[-7,-11],[-89,-28],[-8,-14],[-8,-7],[-15,-6],[-8,3],[-21,33],[-10,66],[-2,24],[-5,12],[-58,-49],[-31,-4],[-41,22],[-3,8],[3,14],[4,4],[-3,21],[-20,10],[-21,-16],[-4,-9],[-19,9],[-36,128],[10,77],[7,13],[22,19],[14,19],[5,32],[-1,21],[-23,23],[0,13],[7,49],[42,57],[41,35],[17,3],[12,-15],[10,6],[5,10],[3,48],[7,15],[43,48],[59,-11],[23,4],[9,15],[17,17],[17,2],[13,-2],[-1,27],[-11,40],[15,70],[10,21],[43,24],[30,33],[40,26],[2,16],[-1,14],[-9,15],[-12,26],[-1,9],[1,10],[62,9],[4,-31],[-2,-11],[6,-25],[12,5],[13,63],[2,17],[-9,14],[-22,9],[-24,43],[-6,22],[1,13],[21,21],[32,51],[1,15],[-2,6],[-3,42],[9,35],[44,127],[58,107],[-17,-9],[-24,-29],[-17,6],[-7,8],[-18,1],[-28,-17],[-34,-50],[-36,-73],[-25,-60],[-73,-135],[-38,-18],[-34,-38],[-8,-12],[0,-8],[2,-22],[-4,-14],[-8,-15],[-30,-32],[-119,-11],[-42,19],[-60,39],[-47,25],[-34,26],[-25,36],[-12,21],[-16,40],[-3,21],[3,31],[10,57],[3,72],[-6,79],[4,25],[9,24],[7,50],[1,63],[-7,150],[2,55],[23,66],[17,79],[9,30],[37,80],[15,45],[14,58],[35,118],[5,38],[-2,91],[-8,67],[-13,65],[-13,72],[1,16],[5,18],[42,50],[5,-5],[1,2],[-8,70],[-3,42],[-5,40],[-23,134],[-2,17],[2,55],[-6,11],[-33,18],[-22,22],[-8,12],[-12,28],[-13,41],[-5,20],[-8,25],[-18,38],[-29,39],[-22,41],[-12,34],[-3,21],[16,27],[9,12],[46,33],[20,23],[6,11],[4,17],[0,12],[-5,14],[5,12],[30,25],[82,37],[33,20],[17,21],[8,12],[-1,10],[6,20],[73,129],[5,13],[1,9],[23,46],[23,40],[22,55],[39,76],[13,53],[52,57],[13,23],[45,57],[0,14],[6,8],[34,33],[14,22],[18,36],[18,13],[22,-9],[13,-13],[40,-67],[29,-43],[27,-35],[19,-15],[25,-11],[25,-2],[86,6],[11,3],[22,0],[-6,11],[0,8],[5,6],[64,47],[29,28],[19,60],[13,22],[14,8],[15,1],[37,16],[6,-8],[10,1],[2,61],[-4,15],[-13,48],[-13,12],[-32,21],[-1,5],[-25,33],[-28,31],[-21,-1],[-56,32],[-41,17],[-75,40],[-24,8],[-10,8],[2,24],[28,99],[10,48],[-3,13],[-3,20],[-77,9],[-47,-7],[-57,-17],[-36,-25],[-8,-11],[-6,-1],[-13,9],[-13,-5],[1,-3],[-6,-7],[-16,-12],[-46,-22],[-22,-17],[-34,-14],[-13,1],[-11,6],[-64,48],[-23,-8],[0,-5],[-11,-8],[-20,8],[-19,22],[-8,1],[-4,-8],[3,-50],[-4,-20],[-5,-17],[-13,-24],[-81,-82],[-10,-14],[-3,-10],[-32,-38],[-23,-15],[-11,6],[-2,-2],[-3,-4],[0,-5],[2,-7],[-2,-11],[-4,-13],[-9,-7],[-13,-12],[-15,-19],[-7,-14],[-22,-94],[-1,-20],[-14,-104],[1,-18],[-1,-16],[-6,-35],[-12,-43],[-17,-14],[-48,-24],[-30,-20],[-9,-15],[-2,-11],[-10,-30],[-12,-16],[-10,-5],[-51,-9],[-33,-13],[-9,-7],[-38,-58],[-21,-44],[-30,-54],[-8,-28],[-1,-11],[-22,-54],[-9,-14],[-16,-8],[0,-29],[-7,-32],[-28,-63],[-4,-15],[-3,-23],[9,-32],[14,-34],[13,-23],[29,-41],[62,-112],[3,-10],[2,-22],[-2,-13],[-4,-7],[-23,-3],[-5,3],[-11,13],[-21,5],[-17,0],[-7,5],[-13,19],[-9,9],[-19,9],[-7,-4],[-2,-7],[17,-23],[2,-5],[1,-4],[-15,-21],[-33,-33],[-3,10],[-1,17],[-3,4],[-5,2],[-16,-7],[2,-11],[-1,-14],[-10,-5],[-8,13],[-74,-108],[-3,-139],[5,-129],[-8,-9],[-13,-2],[-22,-24],[-40,-87],[-25,-83],[-2,-16],[-2,-63],[3,-29],[10,-38],[7,-17],[16,-28],[11,-11],[63,-27],[-44,-71],[-4,-9],[-3,-19],[-28,-16],[-10,-10],[-3,-8],[-3,-12],[0,-42],[5,-26],[1,-32],[-10,-37],[-7,-8],[-18,-5],[-10,-7],[-16,-28],[-28,-63],[-5,-25],[-2,-34],[-5,-9],[-52,-30],[-3,4],[-1,4],[-2,7],[-13,2],[-19,25],[-9,3],[-22,-16],[-14,-3],[-22,-26],[7,-19],[-4,-33],[3,-17],[10,-29],[18,-28],[32,-12],[9,4],[9,-2],[8,-25],[-6,-29],[2,-6],[29,-28],[21,-7],[37,-22],[25,-36],[9,-22],[4,-53],[-7,-32],[-10,-28],[1,-24],[3,-14],[-22,-55],[-16,-53],[2,-81],[0,-30],[-3,-13],[-27,-34],[-36,-30],[-7,-23],[1,-22],[-40,-21],[-13,2],[-8,8],[-14,-5],[-14,-14],[-25,-10],[-15,6],[-31,2],[-14,-5],[-20,-16],[-22,-33],[-48,-42],[-57,-11],[-9,-14],[0,-11],[-16,-45],[-15,-25],[-3,-18],[2,-8],[8,-11],[17,5],[13,30],[14,11],[17,5],[13,-1],[36,-23],[22,26],[14,46],[53,19],[12,-5],[6,-7],[16,-34],[6,-42],[-3,-160],[-4,-76],[-41,-45],[-11,-4],[-17,-61],[-41,-60],[-20,-11],[-14,10],[-9,9],[-20,50],[-10,3],[-12,-7],[-9,-9],[0,-3],[1,-5],[9,-17],[15,-37],[1,-9],[-2,-11],[-4,-6],[-26,-19],[-24,21],[-14,6],[-9,-1],[-13,-10],[-6,4],[-4,7],[-1,20],[15,23],[4,21],[-3,50],[-14,96],[-74,101],[-15,12],[8,-62],[15,-43],[9,-33],[7,-24],[7,-36],[3,-26],[-2,-90],[-6,-23],[-49,-44],[-21,13],[-24,23],[-10,-33],[-1,-25],[4,-15],[18,-19],[30,-3],[8,-18],[2,-21],[-7,-76],[-4,-12],[-27,-6],[-15,2],[-13,-4],[-54,-29],[-32,-26],[4,-48],[33,-29],[33,-55],[12,-30],[-13,-70],[-14,-17],[-45,-38],[-13,-8],[-34,4],[-26,-21],[-10,-14],[-9,-23],[-9,-48],[-5,1],[-5,11],[-6,9],[-25,-8],[-2,-7],[0,-8],[0,-14],[-6,-7],[-15,-7],[-10,8],[-8,2],[-6,-4],[-7,-12],[-15,-40],[-10,-7],[-14,-6],[-1,-12],[3,-16],[19,-19],[57,21],[6,-14],[3,-23],[-34,-43],[-24,-39],[-3,-29],[-2,-59],[13,-104],[12,-11],[-21,-95],[-27,-57],[-21,-24],[-13,-7],[-1,-10],[13,-43],[7,-15],[5,10],[2,11],[8,16],[39,7],[7,-5],[13,-42],[5,-22],[-2,-17],[-14,-37],[1,-19],[13,-36],[23,-45],[14,-22],[-1,16],[19,22],[15,33],[24,90],[26,12],[19,4],[51,1],[16,-5],[72,0],[9,8],[15,27],[3,15],[5,5],[8,0],[43,-30],[-1,14],[0,15],[30,34],[8,-2],[57,-87],[36,-41],[66,-34],[21,-3],[14,10],[16,37],[17,-15],[15,-20],[13,-11],[13,6],[21,-4],[11,-32],[6,-11],[26,-33],[13,-10],[15,2],[15,-25],[27,-59],[1,-10],[4,-7],[9,-10],[8,-3],[14,14],[13,-9],[4,-12],[0,-1],[-51,-36],[-8,2],[-9,-3],[-6,-7],[-3,-9],[-4,-17],[-3,-37],[8,-49],[1,-78],[-5,-57],[-12,-54],[-10,-31],[-11,-5],[-10,5],[-8,-1],[-52,-76],[-15,-44],[-1,-44],[2,-27],[-6,-15],[-55,-71],[-77,-38],[-29,-7],[-24,4],[-16,-4],[-36,-25],[-1,-21],[17,-183],[9,-3],[-11,-43],[-2,-8],[-19,-21],[-12,-3],[-4,7],[-21,-5],[-44,-21],[-7,-8],[-3,-21],[1,-14],[5,-31],[6,-25],[5,-14],[21,-43],[19,-29],[5,-2],[8,6],[15,0],[23,-19],[-6,-36],[-71,-95],[-33,3],[-6,6],[-10,5],[-16,-3],[0,-33],[7,-51],[2,-3],[7,3],[17,-9],[52,-64],[-8,-165],[-19,-55],[-34,-23],[-8,-69],[27,-23],[8,-13],[-9,-11],[-38,-21],[-22,10],[-24,-113],[-49,56],[-45,42],[-10,5],[-19,-11],[-4,-10],[11,-27],[9,-15],[13,-62],[2,-82],[-10,-17],[-19,-11],[-35,3],[-13,-74],[-9,-18],[-58,15],[-10,26],[0,26],[-2,8],[-8,6],[-14,-1],[-6,-2],[-30,-32],[-3,-12],[-2,-29],[2,-22],[3,-15],[-9,-25],[-13,-24],[-8,-6],[-27,-11],[-11,3],[-6,12],[-4,15],[-4,5],[-44,7],[-13,-4],[-79,-56],[-25,-40],[-62,-125],[30,-49],[25,-33],[8,-4],[4,-10],[2,-48],[-7,-29],[-10,-19],[-44,-36],[-63,-84],[-28,-16],[-23,-2],[-5,5],[-21,-1],[-8,-15],[0,-13],[19,-86],[27,-29],[8,-5],[16,-3],[1,-3],[2,-49],[-8,-30],[-57,-48],[-90,54],[-38,27],[-29,29],[-8,15],[-6,4],[-21,1],[-14,-10],[-8,-10],[-9,-16],[-4,-20],[5,-126],[4,-23],[11,-23],[12,-10],[-1,-75],[-55,-48],[-18,-26],[5,-90],[6,-12],[11,-74],[1,-13],[-46,-19],[-78,-22],[-28,-35],[-28,1],[-21,7],[-19,16],[-3,10],[-24,24],[-20,-9],[-7,-14],[19,-144],[8,-30],[13,-34],[25,-30],[3,-8],[-4,-29],[-60,-16],[-8,7],[-43,54],[-44,12],[-9,-7],[-11,-16],[4,-34],[-2,-34],[-4,-12],[-24,-10],[-66,-68],[-13,-43],[-10,-26],[-72,-141],[-24,-15],[-17,-20],[-3,-20],[0,-68],[14,-15],[28,3],[64,88],[65,75],[27,-92],[1,-66],[-3,-41],[-14,6],[-16,-4],[-17,-29],[2,-20],[9,-41],[11,-15],[34,-24],[13,2],[3,-3],[6,-17],[-10,-56],[-1,-5],[-7,-20],[-50,-66],[-11,-53],[12,-10],[5,-12],[3,-21],[-48,-84],[-21,-22],[-14,-68],[19,-32],[7,-40],[-3,-5],[-3,-4],[-76,4],[-100,-32],[-7,-13],[-11,-37],[-2,-17],[0,-10],[8,-43],[1,-69],[-4,-15],[-16,-23],[-13,6],[-47,84],[-11,21],[-2,11],[2,5],[-1,6],[-4,4],[-7,1],[-14,-5],[-7,-6],[-12,-24],[12,-78],[-41,-31],[-15,-20],[-7,-15],[-11,-36],[-19,-113],[-73,-30],[-2,-18],[2,-5],[26,-43],[5,-25],[-13,-43],[-18,-16],[-15,-8],[-83,57],[-8,7],[-2,14],[-9,15],[-37,37],[-48,43],[-15,2],[-10,-3],[-25,-19],[-15,-28],[-8,-37],[5,-18],[12,-33],[6,-11],[9,-5],[10,9],[14,-2],[3,-3],[13,-47],[1,-21],[-88,-42],[-10,-19],[-7,-36],[-3,-21],[-2,-63],[19,-48],[10,-11],[33,-11],[8,3],[14,13],[2,-3],[33,-54],[1,-10],[-1,-10],[-3,-22],[-3,-6],[-24,-21],[-35,-13],[-10,7],[-39,-3],[-14,-5],[-8,-5],[-16,-21],[-33,-16],[-34,37],[-11,24],[-5,18],[-4,9],[-23,47],[-16,5],[-9,-2],[-131,-80],[-11,-13],[-76,-153],[4,-34],[5,-15],[35,2],[18,36],[14,10],[45,17],[71,-53],[13,-31],[20,-70],[0,-29],[-27,-49],[-5,-2],[-20,6],[-69,48],[-64,-25],[-78,4],[-5,-8],[-5,-40],[9,-10],[9,-6],[3,-6],[2,-55],[-6,-15],[-107,-13],[-39,26],[-40,-2],[-56,-81],[-61,-190],[-2,-10],[3,-24],[19,-50],[50,15],[36,-25],[54,1],[7,7],[7,-1],[112,-45],[7,-23],[-7,-35],[-27,-45],[-20,-15],[-46,-48],[0,-35],[9,-7],[61,5],[60,53],[11,26],[47,25],[4,1],[3,-4],[-1,-22],[-92,-124],[-61,-69],[-45,-79],[-11,-60],[7,-40],[9,-62],[-3,-5],[-25,8],[-21,53],[0,5],[5,12],[-2,5],[-9,10],[-14,-1],[-5,-6],[-7,-33],[4,-13],[32,-67],[33,-36],[16,-48],[-2,-23],[-12,-27],[-7,-4],[-7,8],[-29,62],[-8,1],[-22,-13],[0,-22],[9,-9],[4,-7],[4,-41],[-1,-18],[-9,-7],[-97,130],[-4,8],[-16,140],[7,13],[8,9],[-1,6],[-26,16],[-22,-28],[-9,-18],[-12,-39],[0,-47],[19,-97],[10,-6],[10,-16],[6,-16],[6,-24],[3,-44],[-3,-64],[-16,-21],[-58,-9],[-12,12],[-4,9],[4,76],[3,17],[-18,12],[-93,-37],[-23,-127],[-5,-39],[-79,-36],[-119,-68],[-113,-68],[-65,-45],[-22,-19],[-15,-38],[-2,-11],[1,-47],[4,-49],[8,-30],[-4,-19],[-10,-3],[-12,7],[-43,75],[-5,22],[-1,10],[3,23],[-3,102],[-27,5],[-10,-6],[-27,-33],[-3,-17],[40,-52],[31,-202],[-3,-42],[-12,-31],[-12,-20],[-8,-41],[2,-15],[19,-31],[12,-54],[-7,-46],[-14,-34],[-36,-95],[-65,-66],[-28,-15],[-4,0],[-19,66],[0,8],[5,19],[9,10],[45,16],[6,-5],[24,13],[8,28],[-13,33],[-10,16],[-32,1],[-9,58],[-14,127],[-1,32],[26,127],[2,4],[20,5],[-8,17],[-37,32],[-67,23],[-91,5],[-24,-15],[-11,-15],[-4,-13],[13,-38],[9,-49],[-9,-36],[-11,-10],[-15,-2],[-46,33],[-64,-28],[-13,-13],[-14,-50],[-2,-14],[2,-13],[4,-6],[2,-83],[-53,-105],[-43,-62],[-80,-57],[-42,-2],[-27,8],[-56,25],[-5,-1],[-4,-7],[-6,-12],[-1,-21],[3,-21],[47,-77],[-30,-74],[-7,-35],[-7,-62],[1,-13],[8,-27],[0,-20],[-12,-43],[-15,-28],[-17,-13],[-14,-1],[-15,61],[-15,45],[-35,89],[-18,23],[-17,-4],[-16,-45],[-10,-22],[-12,-13],[-39,20],[-28,-7],[-12,-8],[-12,-15],[-3,-21],[4,-21],[37,-7],[67,2],[7,-13],[9,-25],[3,-18],[1,-44],[-10,-35],[-101,-38],[-14,4],[-43,34],[-10,37],[4,18],[11,23],[0,4],[-9,18],[-21,14],[-16,4],[-39,-14],[-11,-14],[-16,-29],[-19,-86],[-1,-15],[3,-11],[-3,-17],[-9,-34],[-12,-24],[-178,-205],[-43,-16],[-42,6],[6,8],[2,24],[-4,14],[-30,10],[-17,-7],[-69,-50],[-11,-23],[-24,-4],[-20,4],[-12,50],[3,14],[10,16],[5,50],[0,52],[-5,88],[-6,14],[4,28],[64,182],[5,23],[4,63],[-4,14],[-7,13],[-29,17],[-22,5],[-60,-6],[-39,-16],[-52,-33],[-13,-17],[-7,-19],[-55,-212],[1,-11],[27,-207],[9,-15],[4,-19],[-22,-76],[-74,-220],[-5,-9],[-10,-9],[-6,-10],[-6,-25],[-7,-41],[-1,-22],[6,-18],[2,-12],[-2,-9],[-18,-46],[-16,5],[-39,39],[-22,15],[-47,0],[-10,-8],[-3,-10],[1,-17],[56,-121],[35,-28],[23,-61],[-2,-34],[-3,-13],[-75,-89],[-68,55],[-17,43],[7,44],[-10,27],[-15,7],[-32,-13],[-28,-87],[-3,-24],[2,-15],[21,-43],[19,-32],[3,-15],[-20,-76],[-24,-24],[-5,-1],[-13,0],[-13,9],[-13,15],[-8,14],[-1,6],[-57,-10],[-45,-22],[-57,27],[-20,26],[-26,46],[-14,39],[-2,26],[12,10],[40,23],[8,-3],[11,-12],[6,-13],[14,-15],[7,0],[6,4],[0,35],[-44,65],[-35,17],[-18,50],[-7,34],[-5,33],[-19,82],[-3,4],[-77,95],[-39,7],[-20,-15],[-11,-13],[-14,-43],[-12,-57],[-6,-51],[0,-27],[8,-19],[21,-29],[23,-5],[20,12],[6,-5],[28,-42],[41,-81],[-1,-16],[-2,-4],[-8,-10],[-9,1],[-6,-68],[28,-94],[38,-84],[12,-102],[-18,-1],[-29,32],[-31,16],[-38,-8],[-16,-14],[-7,-12],[-2,-15],[14,-17],[3,-13],[-1,-18],[-51,-68],[-56,-23],[-11,-1],[-35,13],[-33,30],[-65,109],[1,38],[5,7],[-2,27],[-9,22],[-43,82],[-51,46],[-20,14],[-7,1],[-29,-9],[-47,-31],[-19,-22],[-17,-59],[-7,-41],[1,-16],[9,-27],[7,-9],[24,-18],[14,-6],[24,5],[83,-68],[18,-21],[20,-59],[-24,-41],[-67,-104],[-50,-97],[-74,-54],[-44,-50],[-17,-25],[3,-22],[34,-55],[22,-32],[86,21],[8,5],[24,47],[3,3],[41,-25],[41,-61],[57,-95],[10,-35],[-5,-27],[-35,-4],[-28,11],[-21,59],[-42,6],[-9,-4],[-11,-16],[-67,-4],[-40,51],[-15,52],[-5,9],[-13,7],[-17,-7],[-14,-10],[-10,-11],[-23,-54],[-4,-13],[4,-11],[0,-125],[-30,-4],[-15,-5],[-70,-84],[-7,-16],[-3,-13],[-82,26],[-72,7],[-53,-4],[-52,-16],[-84,-17],[-13,1],[-107,-42],[-83,-59],[-45,-38],[-21,-33],[-58,-106],[-5,-15],[3,-67],[8,-24],[0,-8],[-11,-38],[-52,-85],[-35,-32],[-38,-18],[-19,-1],[-57,-28],[-16,-10],[-34,-30],[-97,-5],[-43,13],[-55,29],[-35,56],[-3,15],[-35,110],[-7,19],[-27,28],[-11,26],[-14,98],[0,10],[12,45],[11,16],[75,65],[63,34],[17,13],[12,15],[14,26],[53,226],[34,164],[8,62],[-7,56],[9,32],[51,85],[45,31],[8,0],[53,-34],[13,-17],[9,-20],[10,-8],[43,24],[75,69],[1,9],[33,56],[37,42],[11,-12],[20,2],[24,6],[26,15],[31,36],[24,36],[27,51],[16,35],[11,18],[9,3],[12,-4],[17,3],[33,21],[22,21],[14,10],[32,-13],[87,3],[71,21],[32,4],[8,-17],[-4,-37],[7,-19],[71,-69],[20,-27],[16,-33],[14,-35],[27,-81],[1,-19],[-6,-23],[-1,-58],[2,-8],[4,-3],[17,5],[49,48],[12,18],[-5,44],[-1,9],[-19,30],[-8,4],[-4,12],[-3,59],[4,14],[13,10],[8,-1],[25,-26],[11,-1],[34,28],[1,11],[-4,8],[-59,93],[-16,116],[-24,108],[-3,-2],[-5,13],[-3,20],[3,16],[37,50],[57,56],[38,28],[46,26],[22,-5],[1,-8],[10,-4],[36,0],[69,9],[65,38],[15,37],[13,62],[-7,42],[-9,10],[-5,2],[-11,-3],[-9,-21],[-12,6],[-7,7],[-1,2],[0,12],[6,42],[5,9],[112,96],[16,3],[22,33],[18,41],[21,67],[16,106],[27,92],[4,2],[33,53],[23,39],[15,32],[57,154],[56,140],[27,87],[28,76],[43,59],[37,44],[42,88],[8,25],[87,101],[57,86],[29,79],[31,61],[7,8],[30,17],[53,26],[61,46],[44,49],[117,61],[60,37],[75,54],[11,-7],[3,-9],[18,-35],[32,-20],[16,13],[102,26],[22,-26],[23,12],[17,25],[3,12],[101,111],[22,10],[10,-10],[56,-88],[2,-7],[4,-46],[2,-46],[-16,8],[-13,-1],[-63,-48],[-11,-114],[9,-40],[9,-27],[11,-17],[134,-151],[31,50],[34,-16],[63,-44],[6,1],[3,16],[-2,23],[-9,11],[-13,11],[-18,5],[-58,46],[-7,13],[-31,163],[28,35],[35,-13],[54,1],[66,25],[11,11],[15,9],[22,3],[14,-9],[22,-50],[4,-43],[46,-67],[45,25],[44,-34],[48,-19],[15,3],[9,25],[-7,19],[-27,35],[-24,25],[-3,10],[37,37],[-8,57],[-50,15],[-56,39],[-41,37],[-64,23],[-48,27],[-4,46],[2,31],[-2,22],[-4,7],[-5,7],[-25,13],[-6,-14],[-2,-6],[-2,-6],[-2,-3],[-3,-4],[-3,5],[8,42],[51,181],[3,19],[16,97],[17,163],[2,88],[7,47],[15,69],[12,29],[18,30],[33,41],[37,77],[10,27],[6,36],[37,71],[53,37],[63,85],[19,31],[28,53],[78,178],[9,14],[145,143],[80,85],[80,52],[57,49],[36,38],[43,86],[-17,26],[12,20],[82,111],[39,50],[10,9],[42,61],[15,24],[42,94],[3,-3],[3,-14],[22,-31],[25,-25],[18,-17],[0,0],[24,-16],[15,-6],[65,-13],[106,43],[8,58],[-8,53],[-6,23],[-18,19],[-54,152],[-1,143],[3,107],[11,65],[73,248],[41,129],[50,137],[16,25],[94,131],[62,69],[60,103],[4,12],[8,8],[14,3],[17,31],[10,32],[22,87],[9,55],[3,11],[105,179],[10,13],[54,52],[21,6],[-3,-15],[11,-44],[39,-78],[33,-19],[25,3],[3,64],[-3,19],[-32,130],[-18,56],[-9,9],[-39,-5],[-26,-17],[-7,1],[-25,61],[-21,186],[12,122],[-6,222],[-14,210],[-14,169],[-4,126],[0,83],[1,9],[14,51],[16,32],[15,10],[18,2],[78,46],[9,28],[15,84],[-17,27],[-6,-2],[-11,-13],[-11,-40],[-13,-4],[-19,13],[-73,67],[-28,31],[-6,12],[-17,57],[-9,61],[-1,141],[2,54],[13,137],[2,22],[12,47],[5,15],[40,60],[15,-3],[15,26],[18,45],[10,34],[16,86],[8,25],[10,28],[49,104],[69,129],[8,44],[15,216],[-2,45],[-1,6],[-10,19],[-9,33],[-1,28],[18,35],[4,6],[7,32],[-19,81],[-50,23],[-5,-25],[10,-73],[-17,-64],[0,0],[-32,-55],[-55,-60],[-8,-9],[-12,-11],[-20,-14],[-15,-8],[-13,-2],[-59,-58],[-56,-75],[-44,-23],[-36,-40],[-3,-10],[-2,-18],[-5,-16],[-114,-85],[-20,-21],[-23,-31],[-33,-46],[-42,-51],[-111,-108],[-28,-27],[-50,-42],[-31,-22],[-42,-12],[-20,0],[-17,6],[-39,22],[-23,18],[-30,32],[-6,11],[-2,9],[1,13],[-6,27],[-17,58],[-11,30],[-27,42],[-24,25],[-22,15],[-29,10],[-49,3],[-24,7],[-11,8],[-15,20],[-3,9],[-2,19],[-2,61],[-5,43],[-10,33],[-35,51],[-21,19],[-70,-106],[-10,-5],[-14,4],[-16,-27],[-4,-117],[1,-13],[1,-9],[11,-29],[10,-27],[5,-9],[2,-21],[-7,-42],[-9,-36],[-8,-14],[-12,-10],[-17,-8],[-3,-64],[48,-150],[72,-165],[56,-106],[19,-31],[-56,-187],[-26,-31],[-41,-24],[-13,-4],[-42,7],[-93,27],[-16,10],[-21,45],[-122,233],[-64,134],[-129,242],[-36,57],[-60,70],[-50,51],[-28,16],[-21,5],[-21,3],[-55,-1],[24,97],[9,15],[0,23],[-10,26],[-9,19],[-14,21],[-24,12],[-13,-2],[-26,-22],[-17,-9],[-10,5],[-8,-5],[3,-174],[-48,4],[24,-83],[-7,-44],[-78,-75],[-92,141],[3,52],[-62,26],[-26,-66],[-49,3],[-17,115],[-61,-49],[-56,92],[-33,14],[45,103],[-71,163],[-121,-126],[-123,-165],[-79,-141],[-48,-210],[-31,131],[-115,-80],[-26,-34],[-45,-59],[-67,-88],[-119,-128],[-4,-18],[-17,-67],[11,-95],[-118,-97],[-20,-54],[-62,-31],[-39,-94],[-55,-39],[-23,106],[-97,73],[-161,-64],[-95,49],[140,116],[54,-68],[50,32],[6,100],[60,163],[-1,120],[-55,323],[-58,207],[-148,182],[-78,227],[17,91],[69,-55],[-33,222],[38,66],[47,92],[7,11],[22,97],[44,4],[24,59],[-60,144],[-99,191],[-67,212],[-106,187],[-72,109],[-20,144],[-8,20],[-13,25],[-18,2],[-27,35],[-19,38],[-18,44],[-24,76],[-9,47],[-3,33],[1,9],[9,15],[11,37],[6,78],[-3,15],[-26,38],[-20,10],[-11,-5],[-3,-14],[3,-21],[0,-13],[-16,-85],[-5,-14],[-5,-11],[-12,-12],[-3,0],[-40,86],[-13,48],[-1,10],[-1,12],[-27,14],[-19,-5],[-14,-23],[0,-14],[-9,-41],[-9,-19],[-5,-18],[-4,-38],[1,-26],[15,-52],[11,-90],[-12,-115],[-20,-24],[-42,-36],[-29,-16],[-18,0],[-33,10],[-45,-13],[0,-18],[-5,-15],[-9,-12],[-52,-51],[-61,-44],[-53,-47],[-43,-58],[-58,-60],[-49,-45],[-139,-76],[-31,-14],[-138,-51],[-84,-23],[-34,-6],[-56,-5],[-131,3],[-126,42],[-31,16],[-16,19],[-25,41],[-42,115],[-9,42],[-2,19],[0,14],[7,15],[15,17],[14,7],[29,5],[7,20],[-17,40],[-54,71],[-95,59],[-27,0],[-44,45],[-71,134],[-35,72],[2,16],[-1,17],[-11,21],[-10,11],[-21,11],[-13,3],[-33,33],[-21,26],[-14,17],[-11,23],[-6,21],[-1,12],[-42,62],[-21,-14],[-42,2],[-60,17],[-42,26],[-54,48],[-38,43],[-45,57],[-65,104],[-3,12],[5,24],[3,5],[40,26],[16,3],[26,26],[13,22],[25,67],[1,45],[-4,14],[-4,6],[-5,6],[-13,6],[-57,-1],[-101,-117],[-43,-8],[-97,16],[-12,14],[-25,47],[-14,36],[0,4],[3,14],[25,48],[10,8],[17,1],[28,-8],[18,0],[17,10],[66,110],[6,12],[15,53],[63,92],[8,4],[8,-5],[13,-2],[27,32],[14,31],[3,14],[0,16],[-6,12],[-33,32],[-12,18],[-7,15],[-9,29],[-3,27],[3,11],[5,-5],[10,-2],[33,14],[25,26],[15,22],[-14,32],[-55,-25],[-9,-1],[-8,25],[-2,27],[16,89],[40,109],[4,9],[11,2],[6,8],[9,33],[-14,9],[-15,-4],[-50,-59],[-17,-44],[13,-28],[-46,-76],[-40,-27],[-35,-10],[-2,27],[-42,83],[3,42],[47,11],[0,28],[-15,24],[-22,76],[-1,14],[4,8],[41,69],[13,12],[15,3],[1,-4],[11,-4],[50,1],[17,7],[28,27],[7,16],[-2,40],[13,85],[21,-13],[25,6],[0,39],[-13,21],[-7,5],[-40,2],[-32,-5],[-7,-7],[-5,-7],[3,-57],[4,-7],[3,-10],[-2,-33],[-12,-15],[-14,4],[-23,11],[-52,39],[-42,77],[-7,17],[-2,10],[7,19],[0,8],[-3,19],[-4,4],[-24,6],[-72,66],[-15,-1],[-12,-30],[-9,-106],[-3,-45],[1,-16],[4,-29],[5,-11],[4,-5],[0,-10],[-4,-7],[-21,-10],[-26,-2],[-77,22],[-41,17],[-24,26],[-12,25],[-45,250],[-4,39],[3,48],[4,24],[-3,23],[-11,15],[-22,20],[-100,28],[-16,-9],[-6,-8],[-12,7],[-23,26],[-18,36],[-34,120],[-6,35],[-1,15],[1,22],[56,54],[34,24],[7,1],[18,18],[12,46],[1,30],[-8,21],[-45,67],[-84,57],[-41,-4],[-13,-12],[-3,-10],[-10,-17],[-27,-13],[-31,-8],[-10,-23],[8,-21],[19,-29],[-13,-18],[-26,-3],[-13,27],[-31,83],[-6,21],[-13,55],[-3,15],[-2,17],[8,260],[3,34],[6,22],[8,-1],[1,-4],[0,-30],[1,-97],[2,-64],[1,-17],[6,-1],[60,20],[17,8],[12,11],[36,23],[49,25],[63,20],[9,7],[-2,37],[-36,1],[-63,31],[-47,36],[-11,15],[-73,159],[-2,11],[-1,20],[7,6],[99,44],[66,-10],[87,5],[9,6],[7,12],[0,15],[4,7],[26,13],[43,6],[24,20],[6,9],[-11,28],[-46,62],[-29,47],[-20,58],[-15,55],[-15,80],[-1,18],[3,77],[2,35],[6,34],[18,75],[23,75],[36,78],[84,199],[88,198],[25,51],[18,47],[10,58],[17,57],[48,102],[73,128],[36,45],[132,82],[72,55],[-8,39],[-14,4],[-35,-19],[-38,-14],[-16,5],[-11,14],[-6,10],[-4,11],[-2,15],[4,61],[14,16],[37,-24],[8,-23],[15,-8],[15,13],[-45,302],[-6,9],[-5,3],[-6,23],[-2,31],[0,19],[15,79],[10,30],[30,17],[19,32],[10,51],[4,63],[-5,57],[-17,22],[0,7],[31,114],[22,39],[72,91],[1,27],[-24,15],[-22,-13],[-2,5],[-1,10],[2,28],[4,15],[96,194],[48,84],[43,37],[112,69],[50,24],[54,12],[23,0],[51,-25],[47,-32],[20,-21],[72,-4],[25,3],[18,-8],[5,-5],[2,-10],[17,-41],[44,-65],[28,-35],[19,13],[46,-19],[9,-28],[11,-21],[27,-30],[31,-19],[13,-11],[44,-61],[39,-37],[137,43],[56,28],[10,10],[27,66],[54,78],[13,14],[38,71],[5,13],[1,12],[-7,53],[0,12],[2,12],[9,19],[37,31],[8,1],[9,-7],[17,5],[26,17],[17,24],[49,112],[10,24],[86,225],[3,11],[2,26],[-3,17],[4,19],[23,65],[21,45],[35,50],[20,35],[2,8],[-1,10],[-20,69],[-11,24],[3,7],[32,8],[48,-21],[30,-23],[22,-9],[11,-1],[26,8],[27,-52],[0,-33],[-3,-6],[0,-6],[10,-25],[12,-25],[71,4],[67,15],[53,23],[43,30],[22,5],[64,-15],[7,-14],[23,6],[74,30],[101,48],[85,57],[38,39],[1,5],[6,61],[10,37],[43,80],[69,162],[13,33],[56,179],[15,52],[9,49],[-1,46],[-11,95],[-23,75],[-23,79],[-40,108],[-23,50],[-12,18],[-42,141],[-20,90],[-12,109],[-10,123],[1,14],[3,15],[-27,69],[-206,281],[-30,59],[-36,1],[-73,38],[-38,-10],[-5,-4],[-14,-28],[-11,34],[8,148],[4,47],[53,68],[10,7],[9,-17],[10,-12],[22,-14],[65,-21],[26,-5],[31,0],[56,7],[37,19],[7,7],[0,12],[-5,22],[-15,9],[-7,6],[-5,7],[-3,9],[2,11],[1,9],[40,7],[16,8],[20,18],[89,153],[4,22],[1,8],[-5,133],[-6,83],[-74,143],[-54,81],[-37,21],[-73,71],[-18,23],[-24,37],[-14,29],[-1,11],[2,9],[-23,12],[-10,-15],[-2,-7],[-2,-29],[2,-16],[2,-10],[-9,-27],[-32,-54],[-19,-23],[-21,-57],[-17,-58],[-4,-29],[3,-26],[-1,-8],[-6,-14],[-24,-28],[-11,-10],[-62,-22],[-57,17],[-26,13],[-11,10],[-18,26],[-137,-203],[-17,-15],[-25,-14],[-111,-34],[-29,-16],[-21,-16],[-12,-20],[-18,-39],[-1,-28],[-7,-59],[-23,-27],[-15,-10],[-35,-35],[-132,-158],[-9,-26],[-36,-119],[0,-9],[11,-22],[0,-19],[-12,-147],[-8,-15],[-16,-12],[-34,-40],[-32,-65],[-15,-21],[-4,5],[-8,18],[-6,38],[1,28],[3,24],[-4,47],[-5,23],[-25,69],[-21,86],[-3,57],[-65,91],[-21,8],[-44,-16],[-8,-6],[9,-32],[5,-32],[5,-77],[-41,-98],[-7,-67],[-8,-13],[-22,-18],[-18,3],[-42,66],[-18,58],[-5,31],[-74,75],[-47,40],[-29,19],[-108,55],[-39,5],[-128,4],[-33,-8],[-13,-20],[-55,-36],[-14,-1],[-37,14],[-20,3],[-54,2],[-80,-8],[-34,-9],[-80,-45],[-48,-40],[-40,-34],[-179,-171],[-20,-12],[-27,-11],[-91,-24],[-10,0],[-145,71],[-145,55],[-99,26],[-145,47],[-49,5],[-73,16],[-194,51],[-34,17],[-114,120],[-16,30],[-29,92],[-18,63],[-7,32],[0,123],[1,25],[33,26],[9,26],[5,22],[1,14],[0,42],[-2,17],[-5,28],[-13,26],[-71,121],[-40,42],[-21,19],[-16,8],[-38,38],[-11,27],[0,6],[7,13],[4,30],[-3,26],[-3,15],[-27,39],[-62,52],[-29,31],[-18,34],[-19,46],[1,19],[2,5],[7,7],[7,0],[10,-4],[25,-20],[8,-19],[7,-6],[43,-13],[60,0],[22,10],[2,29],[20,24],[59,34],[8,8],[20,35],[10,23],[3,14],[0,16],[-4,11],[-8,52],[0,16],[16,28],[44,44],[27,53],[-10,28],[-13,21],[-43,46],[-33,26],[-23,11],[-23,5],[-15,-2],[-17,-5],[-20,-26],[-20,-2],[-17,4],[-81,21],[-39,24],[-34,27],[-89,46],[-52,12],[-48,2],[-158,21],[-53,27],[-70,73],[-32,42],[-1,8],[-62,72],[-91,72],[-6,18],[-41,29],[-39,17],[-21,2],[-35,22],[-19,16],[-16,37],[0,16],[2,4],[-3,24],[-18,36],[-6,33],[4,34],[18,70],[85,99],[84,63],[83,52],[134,106],[152,153],[47,62],[72,87],[109,115],[15,27],[86,104],[154,163],[48,55],[130,116],[16,-21],[18,-6],[25,-16],[15,4],[22,-8],[6,-6],[26,-11],[11,-9],[4,-6],[0,-7],[-11,-6],[-7,-14],[0,-8],[8,-13],[25,-14],[10,-13],[1,-10],[4,-6],[23,-10],[25,8],[34,-1],[23,5],[22,12],[11,-2],[21,-14],[32,-15],[24,-3],[4,-14],[17,9],[24,19],[3,-1],[20,35],[9,4],[1,-3],[-2,-8],[2,-3],[11,11],[16,5],[5,-4],[8,5],[2,23],[26,32],[0,21],[-5,22],[-19,3],[-11,11],[-18,27],[-23,27],[-25,20],[-48,15],[-36,-8],[-23,9],[-4,3],[-9,18],[-6,16],[-2,29],[7,16],[8,37],[-5,26],[-9,22],[-6,25],[-1,11],[-1,27],[9,11],[43,42],[90,72],[173,145],[145,113],[42,21],[272,180],[205,106],[0,0],[37,2],[166,41],[77,10],[1,-3],[0,-3],[-4,-35],[53,-42],[22,7],[17,13],[65,-21],[21,-79],[1,-41],[-1,-17],[-18,-86],[-23,-43],[-29,-44],[-7,-24],[-10,-47],[6,-140],[18,-46],[6,-8],[9,-54],[1,-19],[-8,-29],[-39,-72],[-33,-33],[-61,-24],[-21,-19],[-8,-41],[2,-5],[8,-2],[48,1],[61,31],[28,-67],[14,-54],[11,-32],[32,-48],[22,-40],[4,-19],[2,-29],[98,3],[55,33],[25,28],[4,11],[103,9],[22,-20],[18,-12],[82,-14],[15,2],[36,12],[31,15],[33,24],[82,23],[57,21],[27,5],[51,-60],[1,-8],[5,-9],[27,-28],[9,-1],[62,20],[48,37],[24,-19],[9,-31],[16,-13],[13,0],[28,12],[40,29],[42,39],[42,57],[1,-1],[7,-20],[6,-4],[66,-2],[54,-45],[79,-30],[13,26],[2,20],[7,32],[13,44],[59,96],[9,26],[22,74],[1,21],[4,34],[36,151],[40,58],[79,2],[19,-5],[4,-27],[5,-15],[9,-29],[6,-5],[34,-11],[44,-1],[35,27],[37,37],[13,5],[11,-8],[12,-2],[24,12],[4,3],[1,6],[0,7],[-5,27],[-3,7],[-46,60],[-16,51],[-8,17],[-15,29],[-16,16],[-23,10],[-39,10],[-99,48],[-114,33],[-114,-17],[-78,-92],[-62,-46],[-3,11],[17,116],[4,36],[2,62],[-6,108],[-11,53],[-113,159],[-44,39],[-5,8],[-6,29],[-8,38],[-8,26],[-13,30],[-26,50],[-38,46],[-28,15],[-55,14],[-49,5],[-53,19],[-1,17],[-2,20],[-9,43],[-24,60],[-21,45],[-16,26],[-14,19],[-5,9],[-3,10],[-2,10],[1,34],[4,28],[8,29],[11,15],[55,42],[98,46],[45,-38],[8,-26],[33,-83],[82,-147],[15,-21],[16,-10],[16,-4],[24,0],[4,-46],[-9,-58],[-6,-26],[-11,-18],[-5,-16],[-4,-15],[-3,-25],[6,-66],[4,-29],[4,-12],[26,-29],[46,-61],[12,-23],[17,-43],[6,-26],[8,-21],[27,-30],[81,-82],[101,-94],[35,-22],[38,13],[53,35],[70,66],[27,66],[-11,34],[-72,-3],[-36,-9],[-10,0],[-11,5],[-7,12],[-1,8],[5,9],[1,13],[-7,38],[-37,43],[-40,22],[-47,33],[-20,21],[-126,178],[-12,26],[3,186],[8,39],[14,12],[16,37],[6,32],[0,31],[34,136],[14,66],[3,26],[-2,9],[1,3],[8,3],[75,-53],[51,12],[1,20],[-2,35],[-15,29],[-18,22],[-64,45],[-50,0],[-8,-24],[-35,64],[-28,35],[-8,5],[-17,2],[-9,-1],[-29,-10],[-148,-73],[-56,-51],[-13,-18],[0,-11],[-3,-3],[-76,-6],[-20,-11],[-20,-17],[-11,-1],[-11,6],[-9,13],[-4,11],[3,12],[-5,51],[-6,26],[-6,11],[-6,-1],[-9,-9],[-6,-21],[-1,-33],[-55,-21],[-24,-2],[-10,5],[-5,12],[0,18],[1,9],[-2,8],[-12,28],[-16,19],[-53,-32],[-31,-22],[-6,-8],[-6,-36],[-9,-13],[-23,-16],[-132,65],[-134,32],[-67,24],[-29,14],[-35,10],[-55,7],[-32,13],[-49,30],[-22,19],[-7,12],[1,18],[-1,61],[-2,49],[-4,58],[-16,106],[-48,211],[-24,86],[-18,64],[-91,268],[-51,111],[-19,36],[-24,33],[-44,47],[-213,183],[-161,209],[-84,103],[-98,118],[-46,43],[-40,54],[-24,43],[-3,21],[-6,9],[-76,64],[-45,37],[-40,30],[-107,33],[-55,1],[-27,6],[-46,27],[-64,63],[-6,9],[-9,38],[-4,11],[-158,220],[-40,44],[-38,37],[-66,52],[-58,40],[-71,39],[-64,-3],[-29,-11],[-10,-9],[-3,2],[8,15],[17,20],[66,57],[205,123],[9,10],[13,18],[8,19],[14,45],[2,8],[1,13],[4,94],[31,100],[7,25],[5,27],[0,7],[-4,19],[1,61],[10,117],[9,33],[1,27],[6,205],[-1,27],[-3,32],[-5,32],[-12,97],[-1,30],[6,15],[245,-26],[91,-16],[57,-3],[31,8],[120,12],[219,70],[51,23],[44,7],[95,43],[79,25],[139,32],[27,10],[56,36],[18,16],[37,46],[58,40],[47,66],[21,41],[18,28],[61,66],[41,58],[47,81],[23,43],[47,126],[88,193],[37,22],[3,4],[52,161],[15,55],[3,39],[-1,21],[1,30],[15,106],[10,52],[3,2],[6,15],[5,42],[4,72],[-3,16],[-7,26],[-27,29],[-27,41],[0,9],[3,8],[51,33],[59,199],[-4,17],[-24,37],[-30,22],[-5,2],[-10,-5],[12,70],[29,63],[28,40],[20,13],[21,19],[40,97],[33,65],[52,93],[6,5],[3,-10],[4,0],[4,3],[58,144],[5,18],[4,45],[-4,31],[1,61],[5,4],[35,5],[24,36],[-3,15],[-2,25],[24,78],[86,129],[32,63],[43,90],[18,56],[13,51],[20,54],[35,42],[5,4],[4,-2],[1,-9],[-1,-10],[-1,-10],[0,-32],[9,-21],[20,-25],[13,-10],[6,17],[0,13],[5,10],[39,-7],[10,-20],[9,-26],[17,-11],[65,-1],[73,18],[50,23],[31,24],[96,127],[34,53],[15,-24],[8,4],[78,72],[58,77],[109,168],[22,35],[2,6],[2,21],[141,234],[81,182],[74,144],[61,102],[77,158],[33,40],[31,31],[174,141],[20,15],[13,6],[-2,-41],[4,-22],[14,-46],[-15,-26],[-72,-28],[-23,-12],[-1,-17],[-2,-40],[28,-48],[14,1],[78,11],[77,26],[13,8],[12,15],[-9,31],[-6,6],[-1,15],[183,12],[27,8],[122,46],[0,27],[-4,24],[1,8],[78,-4],[52,17],[69,39],[80,64],[23,21],[38,42],[31,42],[106,152],[41,73],[13,28],[69,162],[57,187],[22,64],[50,142],[70,187],[17,33],[63,102],[13,17],[27,25],[5,-42],[6,-38],[4,-11],[17,-32],[4,-3],[73,-45],[27,-10],[20,-1],[10,6],[49,8],[81,-21],[34,-83],[-3,-16],[-2,-23],[0,-4],[18,-26],[30,40],[17,52],[17,-27],[6,-7],[31,11],[13,13],[24,2],[60,-14],[41,-14],[13,-14],[6,-54],[6,-28],[29,-53],[5,-12],[3,-14],[2,-20],[-9,-34],[-7,-17],[-46,-53],[-33,-59],[-1,-18],[-22,-67],[-34,-54],[-28,-1],[-40,-16],[-14,-9],[-7,-35],[-1,-103],[1,-10],[2,-6],[32,-69],[8,-79],[-5,-6],[0,-19],[4,-19],[4,-4],[25,4],[11,12],[11,30],[3,16],[80,24],[52,-4],[51,65],[19,35],[5,27],[0,9],[-1,24],[-5,37],[-6,32],[3,62],[11,11],[24,52],[9,29],[7,36],[9,26],[44,35],[1,-8],[4,-15],[31,-54],[7,-7],[5,1],[4,11],[6,23],[2,19],[-1,16],[-5,24],[-10,29],[-64,71],[-1,5],[-1,7],[5,22],[3,5],[52,84],[2,-2],[2,-17],[4,-13],[14,-43],[4,-8],[7,-5],[19,8],[3,28],[-1,19],[-5,35],[-17,41],[10,44],[16,6],[54,-33],[103,-74],[105,-106],[7,-8],[17,-29],[12,-37],[-11,-33],[-4,-36],[-11,-137],[13,-76],[48,-66],[36,-20],[10,0],[8,11],[30,21],[42,19],[57,-30],[22,-24],[5,-16],[-4,-43],[35,-11],[6,3],[22,27],[28,44],[34,74],[8,30],[8,48],[5,38],[0,10],[-1,5],[0,5],[22,22],[63,37],[15,5],[127,13],[22,7],[33,18],[35,29],[17,18],[36,49],[8,6],[56,22],[53,-14],[20,-15],[142,-3],[22,5],[81,29],[80,-12],[120,-32],[22,-20],[32,-59],[0,-8],[-1,-7],[-26,-12],[-13,-10],[-10,-15],[-31,-138],[1,-35],[-45,-73],[0,-12],[19,-81],[25,-61],[10,-15],[33,-8],[5,7],[5,21],[5,3],[46,-33],[38,-4],[18,3],[13,8],[52,-12],[0,-15],[1,-12],[24,-1],[27,17],[57,-2],[40,-9],[23,12],[15,19],[14,7],[11,-2],[4,-6],[0,-5],[-7,-5],[-6,-13],[-10,-44],[-3,-18],[19,-25],[6,-17],[-23,-30],[-27,-12],[-51,-41],[-7,-23],[-2,-27],[33,-32],[15,-4],[16,15],[33,15],[77,18],[26,15],[30,5],[66,-3],[64,-19],[29,-9],[46,-34],[22,18],[-6,38],[-5,37],[0,28],[29,30],[3,-2],[4,-11],[3,-23],[33,2],[12,56],[35,37],[34,24],[11,-3],[22,19],[22,46],[1,21],[6,28],[25,3],[39,13],[19,14],[106,34],[42,4],[3,-1],[16,-45],[-9,-57],[16,-22],[29,21],[29,11],[36,-2],[43,5],[4,3],[15,22],[91,197],[34,-33],[6,0],[11,5],[26,25],[5,13],[6,7],[30,20],[2,0],[6,-7],[42,-6],[9,4],[15,12],[6,9],[6,17],[23,30],[23,-25],[12,-23],[11,-1],[47,29],[81,6],[63,-26],[86,-65],[17,13],[41,6],[48,-30],[31,35],[11,34],[0,8],[16,8],[36,-4],[14,-8],[7,-8],[81,-95],[15,-39],[1,-44],[9,-14],[11,-8],[25,-4],[27,10],[6,6],[36,73],[4,18],[26,36],[30,9],[28,0],[11,-8],[2,-4],[1,-6],[1,-4],[8,-5],[72,-4],[65,-24],[33,-25],[29,-57],[26,-56],[56,-25],[18,15],[36,14],[47,11],[48,-9],[18,-1],[10,4],[19,13],[47,92],[11,-22],[7,-26],[14,-34],[29,-31],[14,-6],[102,22],[8,13],[27,61],[8,33],[91,12],[12,5],[48,35],[65,35],[35,8],[23,-2],[45,14],[14,11],[22,5],[62,0],[28,-5],[11,-5],[14,-17],[54,11],[30,12],[20,14],[23,24],[0,41],[10,-1],[37,-21],[9,-17],[14,-20],[5,-4],[99,-56],[28,-6],[33,16],[11,-3],[28,-24],[6,-23],[25,-16],[18,-5],[49,0],[50,11],[22,-16],[18,-21],[15,-2],[99,19],[14,-2],[20,-23],[10,-8],[27,24],[16,26],[2,4],[-2,28],[1,1],[39,2],[35,-7],[40,10],[30,19],[13,25],[30,77],[17,58],[64,49],[10,0],[54,32],[27,26],[19,47],[4,5],[25,10],[7,37],[51,158],[13,8],[30,2],[34,13],[2,25],[8,9],[49,35],[26,6],[12,12],[-4,9],[-1,12],[10,10],[20,-2],[31,-9],[2,-7],[-2,-28],[3,-20],[5,-26],[9,-15],[5,-4],[28,11],[54,30],[13,26],[1,19],[25,32],[6,2],[37,-4],[29,-13],[14,-8],[24,-23],[35,16],[-1,37],[67,-15],[127,-15],[180,-77],[35,-20],[38,-40],[13,-35],[81,17],[24,-13],[93,-36],[21,-6],[5,-3],[5,-13],[15,-20],[48,-58],[29,12],[10,17],[7,18],[29,19],[14,4],[88,-10],[77,-27],[60,-32],[80,-57],[10,-43],[10,-24],[33,-36],[13,-8],[58,21],[13,9],[-1,11],[-3,35],[0,76],[59,5],[84,-24],[690,-2396],[1622,-5550],[0,-2],[2461,-8211],[962,-3146],[54,-178],[418,28],[-8,206],[459,-51],[124,448],[462,305],[27,-68],[66,-532],[183,-121],[243,-29],[86,4],[98,-180],[2,-7],[60,-62],[68,-32],[642,-331],[462,-237],[266,-471],[35,-176],[1,1],[61,43],[79,277],[220,472],[15,59],[189,134],[4,241],[-1,56],[-106,275],[65,106],[5,7],[33,57],[9,155],[-28,67],[-25,98],[2,89],[131,128],[92,142],[75,141],[137,263],[213,-74],[155,-106],[16,-7],[31,16],[113,-75],[60,-164],[21,-80],[37,-70],[57,-88],[30,-46],[62,-85],[191,3],[97,-38],[139,-65],[67,44],[146,-142],[29,-58],[34,-53],[11,-12],[62,-70],[109,-81],[270,-29],[156,-11],[173,-140],[33,-24],[178,-93],[156,-94],[47,-97],[25,-67],[120,-102],[24,-19],[164,-100],[66,-46],[201,-241],[292,-193],[202,-208],[149,-113],[174,-171],[281,-195],[203,-194],[118,-188],[133,-65],[128,-217],[129,-115],[77,-10],[75,-51],[148,-178],[110,-51],[128,92],[189,-57],[289,-17],[100,-31],[3,-1],[283,109],[55,-23],[161,-73],[84,11],[68,30],[119,-166],[186,27],[101,126],[128,-109],[29,-29],[31,-38],[59,-154],[20,-222],[-18,-57],[0,-12],[12,-82],[17,-41],[17,-35],[13,-22],[28,-18],[30,-23],[74,-203],[21,-30],[91,-117],[68,-50],[85,-154],[31,-52],[65,-44],[7,-10],[11,-23],[1,-15],[-3,-36],[-8,-53],[-14,-135],[0,-57],[4,-74],[13,-64],[21,-120],[4,-96],[1,-97],[-1,-39],[-10,-140],[-44,-246],[-41,-152],[-46,-66],[-4,-46],[44,-24],[-12,-16],[-20,-58],[2,-7],[-11,-1],[-64,40],[-25,31],[6,22],[-1,6],[-14,21],[-11,10],[-43,17],[-14,-5],[23,-55],[6,-21],[-6,-25],[-16,-41],[-16,-10],[-13,-2],[-40,1],[-19,8],[-29,23],[-28,28],[-8,34],[-44,84],[-37,54],[-14,28],[-19,74],[-7,5],[-21,-8],[-41,11],[-8,7],[-22,70],[-15,80],[-1,9],[-13,30],[-29,-8],[-22,8],[-35,22],[-33,28],[-11,12],[-18,17],[-6,9],[-29,51],[0,3],[45,172],[5,71],[-14,36],[15,34],[13,8],[38,12],[1,13],[-9,22],[-10,4],[-46,81],[-92,111],[-7,11],[-7,23],[-4,33],[2,27],[-7,60],[-24,81],[-63,120],[-101,177],[-80,88],[-75,59],[-173,120],[-104,44],[-24,16],[-48,37],[-11,-8],[-5,-8],[2,-21],[5,-17],[12,-18],[116,-53],[134,-88],[38,-45],[36,-58],[5,-7],[69,-50],[56,-47],[49,-62],[78,-132],[2,-47],[-23,-34],[2,-27],[51,-135],[88,-138],[29,-10],[51,-69],[2,-17],[-3,-27],[-6,-21],[-7,-4],[-10,34],[-86,104],[-13,8],[-20,-5],[9,-33],[11,-27],[5,-2],[8,-9],[26,-41],[43,-129],[-8,-86],[-28,-164],[-20,-27],[-18,-14],[-25,-5],[-33,4],[-51,31],[-17,26],[12,34],[10,76],[-1,27],[-20,145],[-7,15],[-23,41],[-6,0],[-55,-53],[-13,-19],[3,-11],[23,-36],[29,-11],[22,-24],[6,-15],[4,-88],[-1,-13],[-17,-53],[-41,-101],[-19,-12],[-3,-1],[-16,12],[-19,27],[-32,25],[-27,31],[3,26],[-17,16],[-26,3],[-13,-9],[-1,-12],[16,-71],[-4,-11],[-13,-7],[-24,15],[-19,-5],[-70,26],[-64,-7],[-47,24],[-7,6],[-9,20],[-9,8],[-112,39],[-23,13],[-55,127],[-1,11],[28,58],[25,14],[21,37],[30,105],[0,28],[-27,17],[-13,1],[-18,-5],[-35,23],[-4,5],[-5,10],[-1,22],[-7,35],[-17,67],[-12,15],[-29,16],[-14,16],[-3,44],[6,21],[36,59],[-6,38],[-3,8],[-16,5],[-25,-8],[-9,-12],[-2,-11],[1,-12],[-4,0],[-19,29],[-41,89],[4,22],[-2,36],[-8,23],[-4,6],[-30,-10],[-34,-65],[-42,-34],[-6,-9],[21,-33],[28,-29],[45,-4],[16,-22],[7,-40],[21,-140],[1,-31],[27,-76],[14,-26],[-1,-94],[-5,-71],[-51,13],[-13,-31],[5,-12],[45,-60],[38,-68],[1,-93],[-15,-5],[-35,12],[-42,22],[-20,5],[-38,-10],[-14,-8],[-29,0],[-9,3],[-51,29],[-35,45],[-11,19],[-4,17],[-5,8],[-49,76],[-23,33],[-20,10],[-36,28],[-44,43],[0,10],[16,2],[16,-3],[31,-18],[22,7],[9,20],[-4,24],[-21,51],[-7,11],[-9,33],[35,52],[14,13],[6,55],[-19,94],[-48,179],[-96,155],[-10,106],[1,11],[33,-22],[4,96],[-23,144],[-19,25],[-15,-5],[-28,-23],[-12,-35],[27,-107],[-18,-23],[-19,-67],[-17,-146],[120,-163],[8,-35],[-4,-52],[-7,-13],[-20,-8],[-34,-2],[-42,-44],[-4,-97],[12,-26],[16,-12],[2,-6],[-3,-28],[-40,-32],[-6,3],[-38,38],[-5,9],[-17,43],[-40,86],[-93,107],[-78,66],[-33,3],[-38,-42],[-29,-57],[6,-14],[4,-27],[-6,-15],[-77,70],[-45,45],[-39,57],[-54,144],[6,58],[14,12],[10,-2],[19,5],[23,20],[7,20],[-15,87],[-6,13],[-3,26],[-3,89],[7,20],[60,81],[10,3],[10,0],[27,-18],[38,-34],[4,-5],[5,-18],[25,-13],[2,11],[-4,32],[-23,78],[-49,64],[-113,186],[-1,14],[6,6],[19,3],[122,-11],[13,-11],[30,-42],[-4,-10],[15,-27],[25,-20],[25,-12],[5,1],[2,42],[-1,8],[-9,15],[-70,97],[-41,21],[-26,9],[-16,-15],[-9,-4],[-90,43],[-8,8],[-37,75],[-9,30],[-1,16],[23,46],[-1,57],[5,21],[-9,33],[-12,26],[-24,14],[-12,-12],[-7,-12],[-12,-32],[-25,3],[-15,-11],[-9,-14],[-42,-22],[-20,7],[-67,6],[-7,32],[-6,27],[26,155],[23,102],[-5,6],[-18,1],[-12,-9],[-24,-28],[-26,-109],[-4,-28],[12,-30],[-7,-13],[-21,-14],[-85,0],[-156,34],[-32,25],[-12,14],[2,5],[-4,11],[-8,9],[-33,26],[-14,6],[-20,4],[-32,16],[-67,57],[-28,49],[23,14],[21,46],[13,72],[-48,69],[-25,7],[-12,-13],[3,-21],[-10,-81],[-24,4],[-44,-14],[11,-49],[-46,31],[-62,19],[-45,-14],[-28,-25],[-24,-10],[-34,29],[-8,16],[-1,13],[-25,15],[-10,-3],[-9,-9],[-42,-90],[-156,10],[-55,9],[0,0],[-75,112],[-4,17],[-6,67],[6,71],[9,13],[19,3],[14,-6],[8,-14],[17,1],[44,32],[49,43],[7,37],[-12,61],[-9,0],[-51,-25],[-7,-14],[-48,-9],[-40,-2],[-12,1],[-18,7],[-6,7],[-13,21],[-3,18],[4,18],[-81,93],[-47,61],[-10,22],[-26,88],[1,12],[12,9],[4,10],[0,26],[-10,17],[-26,0],[-14,-21],[0,-11],[-3,-7],[-19,-24],[-12,-3],[-45,4],[-62,40],[-20,20],[-22,44],[-29,130],[-1,14],[57,42],[46,-15],[18,-12],[10,-2],[31,5],[43,17],[36,4],[182,-14],[53,-13],[9,2],[4,34],[-18,14],[-94,35],[-32,9],[-13,-1],[-26,-16],[-189,53],[-72,25],[-19,11],[-6,24],[-67,132],[-27,-15],[-7,-4],[-6,-39],[5,-19],[15,-58],[8,-13],[6,-5],[5,-16],[-1,-6],[-12,-18],[-15,-10],[-23,6],[-3,-9],[-5,-2],[-117,22],[-279,228],[-79,49],[-23,22],[-36,46],[-114,146],[-382,-168],[-148,79],[-172,94],[-298,162],[-406,748],[-69,122],[36,21],[-22,45],[-83,144],[-63,91],[-84,102],[-119,99],[-97,96],[4,-26],[22,-80],[38,-63],[35,-26],[40,-3],[43,-56],[29,-44],[2,-132],[26,-79],[20,-55],[46,-10],[15,-6],[6,-5],[56,-83],[30,-82],[8,-40],[-13,-9],[-5,-33],[98,-113],[12,-5],[36,-31],[11,-13],[44,-90],[163,-191],[27,-53],[6,-22],[-3,-4],[-4,1],[-13,12],[-11,15],[-23,-9],[1,-13],[13,-32],[41,-47],[65,-83],[91,-124],[81,-131],[38,-76],[10,-39],[-1,-6],[-4,2],[-17,19],[-17,-24],[0,-12],[15,-59],[22,-35],[77,-88],[-14,-8],[-19,12],[-21,-10],[-44,-7],[-69,18],[-7,-1],[-15,-11],[-22,-21],[-10,-3],[-21,6],[-52,36],[-86,86],[-19,25],[-63,101],[-12,-7]],[[82344,23725],[21,-2],[106,-71],[43,-50],[12,-53],[16,-36],[321,-207],[102,-107],[23,-7],[68,-43],[34,-59],[12,-11],[28,-11],[34,4],[45,33],[35,3],[140,-64],[29,-26],[54,-8],[135,-56],[97,-49],[156,-91],[14,-17],[61,-45],[234,-155],[140,-77],[50,-15],[51,-39],[127,-129],[151,-111],[45,-58],[61,-48],[133,-139],[20,-13],[58,-72],[32,-49],[18,-57],[63,-71],[36,-25],[14,-1],[41,-64],[11,-29],[3,-57],[-5,-59],[-12,-59],[20,-79],[19,-117],[-6,-22],[24,-173],[30,-50],[30,-11],[56,12],[62,52],[147,-10],[41,-55],[52,-103],[35,-92],[-1,-93],[25,-155],[41,-44],[43,-30],[51,-8],[11,-12],[2,-11],[-6,-42],[21,-45],[54,-39],[25,-25],[18,-32],[89,-84],[117,-75],[89,-42],[65,-57],[40,-6],[51,-40],[24,-40],[3,-16],[-25,-190],[-46,-86],[-95,-125],[-64,-56],[-133,-139],[-47,-77],[-65,-79],[-50,-80],[-136,-84],[-144,-68],[-175,-123],[-67,-70],[-91,-35],[-49,6],[-54,-12],[-30,-23],[-35,-1],[-150,59],[-80,18],[-114,-34],[-24,-22],[-28,-54],[-93,-80],[-18,-81],[-37,-43],[-62,-30],[-45,-4],[-90,-63],[-31,-40],[-14,-45],[-66,-91],[-42,-23],[-142,-39],[-31,-26],[13,-22],[2,-20],[-23,-35],[-23,-5],[-9,-10],[-44,-112],[-22,-11],[-20,-32],[18,-65],[12,-78],[-3,-37],[-25,-70],[-34,-24],[-16,-25],[-37,-116],[11,-92],[-13,-45],[-45,-4],[-36,-41],[2,-10],[-36,-90],[-64,-82],[-46,-35],[-37,8],[-26,24],[-15,45],[-17,43],[-144,152],[-149,69],[-182,170],[-186,58],[-112,70],[-12,14],[-20,84],[-82,130],[-18,2],[-77,205],[-9,176],[9,310],[-15,63],[-11,143],[15,81],[0,122],[-13,193],[-13,55],[-59,154],[-72,119],[8,72],[-58,79],[-15,42],[-24,149],[2,53],[-8,14],[-26,19],[-20,4],[0,-18],[-10,-2],[-50,28],[-7,12],[-17,107],[-51,187],[-10,26],[-13,16],[-17,7],[-27,154],[-42,112],[-97,179],[-123,42],[-17,20],[-12,28],[0,50],[20,14],[-12,34],[-33,59],[-51,46],[-17,25],[-13,76],[-53,63],[19,59],[8,71],[-6,119],[89,105],[48,76],[68,138],[20,23],[41,22],[57,6],[18,-19],[19,-6],[50,31],[-12,57],[2,24],[29,60],[34,124],[22,54],[-4,20],[3,26],[81,107],[29,73],[54,38],[8,-8],[13,2],[8,34],[2,64],[-7,153],[-17,49],[-102,141],[-73,85],[-84,145],[-82,200],[-67,303],[-3,154],[27,97],[25,38],[29,22],[75,16],[164,-65],[116,-75],[19,-5]],[[63455,31973],[16,8],[31,-17],[17,-98],[-24,-12],[-21,23],[-19,96]],[[64881,33347],[8,18],[14,163],[58,28],[90,3],[55,-39],[33,-66],[0,-17],[-12,-11],[-15,-5],[-12,9],[-8,-9],[-33,-106],[-9,-140],[32,-85],[13,-75],[-67,-53],[-90,-35],[-85,-14],[-47,-38],[-38,-87],[-40,-121],[-36,-166],[20,-15],[-16,-34],[-49,25],[-70,63],[-69,104],[-5,171],[28,187],[6,14],[50,47],[26,41],[7,24],[40,54],[79,42],[104,72],[32,33],[6,18]],[[67317,34509],[84,47],[77,-41],[11,-17],[72,-31],[29,-2],[8,14],[13,-1],[58,-50],[106,-116],[45,-160],[46,-33],[10,-27],[12,-72],[4,-84],[-55,-162],[-5,-88],[-8,-24],[-29,-18],[-13,-40],[-1,-89],[67,-287],[6,-45],[-4,-15],[-53,-49],[-15,-56],[-87,-70],[-80,-130],[-57,-63],[-69,-61],[-103,63],[-75,35],[-103,17],[-141,11],[-77,31],[-13,21],[-24,-6],[-97,2],[-116,103],[-49,83],[-105,128],[-38,17],[-92,23],[-61,41],[-149,60],[-32,32],[-106,167],[-18,66],[-5,164],[18,44],[102,134],[16,76],[12,136],[21,46],[90,60],[109,21],[206,175],[57,55],[24,35],[90,6],[21,-6],[22,-11],[34,-50],[23,12],[42,-12],[18,-11],[7,-23],[12,-17],[31,-12],[22,24],[-9,74],[41,36],[32,-4],[54,-35],[39,9],[56,-16],[42,-34]],[[77076,28725],[60,-20],[27,15],[11,19],[8,93],[-10,12],[1,10],[33,30],[19,-8],[27,-26],[56,-106],[9,-46],[22,-35],[110,-44],[58,-24],[18,8],[6,18],[-4,13],[113,-44],[96,12],[70,30],[186,18],[112,-26],[17,-22],[13,-52],[64,7],[26,-13],[1,-47],[-31,-98],[-70,-117],[-89,-90],[-51,-38],[-8,-29],[-147,-55],[-110,-23],[-37,-41],[-57,16],[-15,21],[-228,72],[-195,89],[-91,33],[-23,12],[-26,36],[-163,48],[-59,6],[-109,-13],[-65,-27],[-411,-8],[-170,41],[-63,48],[35,133],[-3,17],[15,51],[27,57],[26,26],[8,-3],[47,59],[15,32],[7,48],[-8,85],[-30,42],[-18,11],[-9,16],[6,24],[13,8],[62,-36],[57,-7],[53,6],[39,-15],[44,-61],[27,-12],[110,-30],[34,-2],[12,8],[62,-8],[59,-24],[57,0],[133,-52],[42,-4],[19,9],[29,-1],[99,-32]],[[79284,25271],[-20,-12],[-39,10],[-91,-46],[-75,67],[-96,-42],[-37,-32],[-22,20],[-75,-33],[-55,13],[-91,108],[2,26],[14,45],[52,75],[101,38],[124,102],[10,33],[119,59],[37,-10],[58,-55],[50,-76],[5,-32],[-20,-25],[-9,-130],[14,-17],[51,-26],[7,-36],[-14,-24]],[[78693,27831],[-2,12],[17,35],[54,-10],[53,-67],[69,-24],[56,-59],[13,0],[92,-193],[45,-68],[26,-18],[15,-56],[11,-13],[33,-19],[18,-34],[18,-61],[58,-93],[26,-19],[184,76],[132,34],[39,38],[10,25],[62,41],[26,0],[14,-15],[31,37],[28,17],[70,-41],[75,22],[49,-55],[43,16],[79,-20],[51,-32],[9,-71],[14,-7],[16,8],[17,-10],[12,-49],[182,-161],[12,-12],[20,-46],[131,-28],[21,-71],[65,-105],[58,3],[34,16],[129,-114],[101,-17],[120,-70],[6,-31],[65,-68],[19,-46],[-3,-45],[15,-73],[8,-109],[-10,-45],[-29,-77],[-37,-61],[-23,7],[-37,-20],[-30,-48],[-8,-39],[-29,-52],[-22,-10],[-83,16],[-26,-28],[-108,-70],[-30,-29],[-45,-18],[-7,3],[-17,26],[-33,4],[-47,-9],[-12,-16],[-45,31],[-33,12],[-63,-14],[-53,-25],[-35,-33],[-102,-68],[-66,-22],[-11,-22],[-18,-16],[-33,-11],[-77,14],[-107,-1],[-27,-24],[-39,-14],[-26,0],[-146,46],[-11,18],[4,22],[-11,24],[-22,18],[-15,-15],[-16,-3],[-26,17],[-27,35],[2,30],[-49,145],[13,35],[4,34],[-51,248],[-23,105],[-11,30],[-24,29],[-26,88],[-12,94],[-14,47],[-41,48],[-65,41],[-47,11],[-16,-2],[-34,-25],[-25,-66],[-46,-10],[-381,236],[-209,259],[-51,94],[3,10],[-12,79],[-16,32],[-25,21],[-12,22],[0,162],[31,137],[40,133],[48,7],[21,27],[9,27],[-8,12],[2,27],[87,-4],[30,-16]],[[77263,27426],[74,8],[72,-34],[129,-11],[73,-18],[85,-40],[260,-275],[53,-67],[75,-129],[8,-29],[4,-56],[-20,-73],[-58,-148],[-28,-21],[-19,1],[-65,-24],[-70,-46],[-67,-23],[-149,5],[-68,-17],[-78,113],[-55,154],[0,146],[-19,57],[-69,119],[-21,26],[-179,124],[-24,39],[-10,30],[-14,70],[7,45],[78,65],[36,11],[59,-2]],[[73129,29549],[-159,-28],[-56,-1],[-38,22],[-42,78],[-8,29],[36,19],[-11,23],[-22,19],[-20,-21],[-48,149],[-36,76],[-43,60],[-53,58],[-71,45],[-11,28],[-6,57],[-13,47],[-48,93],[-57,63],[-59,53],[-63,94],[-17,184],[-8,47],[-14,36],[-73,91],[-121,100],[5,15],[85,15],[237,3],[80,-23],[164,13],[64,46],[-4,33],[-12,14],[4,9],[92,98],[39,77],[-5,44],[7,30],[83,126],[61,75],[92,36],[17,21],[69,-3],[96,-122],[44,-106],[42,-72],[24,-22],[16,-77],[1,-34],[61,-95],[42,-29],[107,-160],[5,-77],[25,-14],[17,30],[42,-18],[16,-17],[76,-143],[11,-91],[-45,-10],[-5,-48],[49,-171],[22,-38],[63,-24],[36,-28],[15,-51],[37,-53],[82,-78],[24,7],[18,20],[2,50],[-25,114],[7,20],[26,17],[39,-2],[64,-15],[24,-17],[9,-58],[-12,-31],[-9,-72],[4,-47],[17,-53],[33,-14],[7,0],[6,4],[8,2],[2,-1],[2,0],[2,-1],[1,0],[3,-8],[5,-10],[10,-18],[46,-67],[3,-21],[-7,-52],[14,-53],[10,-26],[55,-89],[15,-18],[133,-108],[37,2],[1,-26],[0,-34],[-135,-134],[6,-38],[-20,-11],[-35,-8],[-16,10],[-3,13],[6,28],[-9,48],[-10,16],[-28,14],[-128,-38],[-30,6],[-46,-25],[-48,-63],[-60,-10],[-45,17],[-14,21],[-9,35],[-30,42],[-59,56],[-177,93],[-26,68],[-22,40],[-23,11],[-46,-51],[7,-25],[19,-15],[13,-27],[-156,13],[2,30],[-8,32],[-67,50],[-20,-2],[-54,-44],[-126,-37],[-73,-12]]],"objects":{"us":{"type":"GeometryCollection","geometries":[{"arcs":[[0,1,2,3,4]],"type":"Polygon","properties":{"geo_id":"0400000US04","fips_state":"04","name":"Arizona","iso_3166_2":"AZ","census":6392017,"pop_estimataes_base":6392310,"pop_2010":6411999,"pop_2011":6472867,"pop_2012":6556236,"pop_2013":6634997,"pop_2014":6731484},"id":0},{"arcs":[[5,6,7,8,9,10]],"type":"Polygon","properties":{"geo_id":"0400000US05","fips_state":"05","name":"Arkansas","iso_3166_2":"AR","census":2915918,"pop_estimataes_base":2915958,"pop_2010":2922297,"pop_2011":2938430,"pop_2012":2949300,"pop_2013":2958765,"pop_2014":2966369},"id":1},{"arcs":[[[11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21,22,-3,23]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US06","fips_state":"06","name":"California","iso_3166_2":"CA","census":37253956,"pop_estimataes_base":37254503,"pop_2010":37336011,"pop_2011":37701901,"pop_2012":38062780,"pop_2013":38431393,"pop_2014":38802500},"id":2},{"arcs":[[24,25,26,27,28,29]],"type":"Polygon","properties":{"geo_id":"0400000US08","fips_state":"08","name":"Colorado","iso_3166_2":"CO","census":5029196,"pop_estimataes_base":5029324,"pop_2010":5048575,"pop_2011":5119661,"pop_2012":5191709,"pop_2013":5272086,"pop_2014":5355866},"id":3},{"arcs":[[30,31,32,33]],"type":"Polygon","properties":{"geo_id":"0400000US09","fips_state":"09","name":"Connecticut","iso_3166_2":"CT","census":3574097,"pop_estimataes_base":3574096,"pop_2010":3579345,"pop_2011":3590537,"pop_2012":3594362,"pop_2013":3599341,"pop_2014":3596677},"id":4},{"arcs":[[34,35]],"type":"Polygon","properties":{"geo_id":"0400000US11","fips_state":"11","name":"District of Columbia","iso_3166_2":"DC","census":601723,"pop_estimataes_base":601767,"pop_2010":605210,"pop_2011":620427,"pop_2012":635040,"pop_2013":649111,"pop_2014":658893},"id":5},{"arcs":[[36,37,38,39,40,41]],"type":"Polygon","properties":{"geo_id":"0400000US13","fips_state":"13","name":"Georgia","iso_3166_2":"GA","census":9687653,"pop_estimataes_base":9688681,"pop_2010":9714464,"pop_2011":9813201,"pop_2012":9919000,"pop_2013":9994759,"pop_2014":10097343},"id":6},{"arcs":[[42,43,44,45,46,47]],"type":"Polygon","properties":{"geo_id":"0400000US17","fips_state":"17","name":"Illinois","iso_3166_2":"IL","census":12830632,"pop_estimataes_base":12831587,"pop_2010":12840097,"pop_2011":12858725,"pop_2012":12873763,"pop_2013":12890552,"pop_2014":12880580},"id":7},{"arcs":[[48,-44,49,50,51]],"type":"Polygon","properties":{"geo_id":"0400000US18","fips_state":"18","name":"Indiana","iso_3166_2":"IN","census":6483802,"pop_estimataes_base":6484192,"pop_2010":6490308,"pop_2011":6516560,"pop_2012":6537632,"pop_2013":6570713,"pop_2014":6596855},"id":8},{"arcs":[[[52]],[[-11,53,54,55]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US22","fips_state":"22","name":"Louisiana","iso_3166_2":"LA","census":4533372,"pop_estimataes_base":4533479,"pop_2010":4545581,"pop_2011":4575972,"pop_2012":4604744,"pop_2013":4629284,"pop_2014":4649676},"id":9},{"arcs":[[56,57,58,59,60]],"type":"Polygon","properties":{"geo_id":"0400000US27","fips_state":"27","name":"Minnesota","iso_3166_2":"MN","census":5303925,"pop_estimataes_base":5303925,"pop_2010":5310418,"pop_2011":5348036,"pop_2012":5380615,"pop_2013":5422060,"pop_2014":5457173},"id":10},{"arcs":[[[61]],[[62]],[[63]],[[64]],[[65,66,-54,-10,67]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US28","fips_state":"28","name":"Mississippi","iso_3166_2":"MS","census":2967297,"pop_estimataes_base":2968103,"pop_2010":2970811,"pop_2011":2978464,"pop_2012":2986137,"pop_2013":2992206,"pop_2014":2994079},"id":11},{"arcs":[[68,69,70,71,72]],"type":"Polygon","properties":{"geo_id":"0400000US30","fips_state":"30","name":"Montana","iso_3166_2":"MT","census":989415,"pop_estimataes_base":989417,"pop_2010":990575,"pop_2011":997661,"pop_2012":1005163,"pop_2013":1014864,"pop_2014":1023579},"id":12},{"arcs":[[73,-1,-28,74,75]],"type":"Polygon","properties":{"geo_id":"0400000US35","fips_state":"35","name":"New Mexico","iso_3166_2":"NM","census":2059179,"pop_estimataes_base":2059192,"pop_2010":2064950,"pop_2011":2078407,"pop_2012":2084594,"pop_2013":2086895,"pop_2014":2085572},"id":13},{"arcs":[[-71,76,-59,77]],"type":"Polygon","properties":{"geo_id":"0400000US38","fips_state":"38","name":"North Dakota","iso_3166_2":"ND","census":672591,"pop_estimataes_base":672591,"pop_2010":674345,"pop_2011":685242,"pop_2012":701705,"pop_2013":723857,"pop_2014":739482},"id":14},{"arcs":[[-75,-27,78,79,-7,80]],"type":"Polygon","properties":{"geo_id":"0400000US40","fips_state":"40","name":"Oklahoma","iso_3166_2":"OK","census":3751351,"pop_estimataes_base":3751616,"pop_2010":3759481,"pop_2011":3786527,"pop_2012":3817059,"pop_2013":3853118,"pop_2014":3878051},"id":15},{"arcs":[[81,82,83,84,85,86,87]],"type":"Polygon","properties":{"geo_id":"0400000US42","fips_state":"42","name":"Pennsylvania","iso_3166_2":"PA","census":12702379,"pop_estimataes_base":12702884,"pop_2010":12711077,"pop_2011":12743995,"pop_2012":12770043,"pop_2013":12781296,"pop_2014":12787209},"id":16},{"arcs":[[88,-42,89,-68,-9,90,91,92,93,94]],"type":"Polygon","properties":{"geo_id":"0400000US47","fips_state":"47","name":"Tennessee","iso_3166_2":"TN","census":6346105,"pop_estimataes_base":6346275,"pop_2010":6356628,"pop_2011":6398389,"pop_2012":6455177,"pop_2013":6497269,"pop_2014":6549352},"id":17},{"arcs":[[[95,96]],[[97]],[[98,99]],[[100,-36,101,102,103,-95,104,105]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US51","fips_state":"51","name":"Virginia","iso_3166_2":"VA","census":8001024,"pop_estimataes_base":8001023,"pop_2010":8025376,"pop_2011":8110188,"pop_2012":8193422,"pop_2013":8270345,"pop_2014":8326289},"id":18},{"arcs":[[[106]],[[107,108]],[[109,110,111,-87]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US10","fips_state":"10","name":"Delaware","iso_3166_2":"DE","census":897934,"pop_estimataes_base":897936,"pop_2010":899731,"pop_2011":907829,"pop_2012":916881,"pop_2013":925240,"pop_2014":935614},"id":19},{"arcs":[[112,113,-82,114,-106]],"type":"Polygon","properties":{"geo_id":"0400000US54","fips_state":"54","name":"West Virginia","iso_3166_2":"WV","census":1852994,"pop_estimataes_base":1853033,"pop_2010":1854176,"pop_2011":1854982,"pop_2012":1856313,"pop_2013":1853595,"pop_2014":1850326},"id":20},{"arcs":[[[115]],[[116]],[[117]],[[118]],[[119]],[[-48,120,-61,121,122,123]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US55","fips_state":"55","name":"Wisconsin","iso_3166_2":"WI","census":5686986,"pop_estimataes_base":5687289,"pop_2010":5689268,"pop_2011":5708785,"pop_2012":5724888,"pop_2013":5742953,"pop_2014":5757564},"id":21},{"arcs":[[124,-30,125,126,-73,127]],"type":"Polygon","properties":{"geo_id":"0400000US56","fips_state":"56","name":"Wyoming","iso_3166_2":"WY","census":563626,"pop_estimataes_base":563767,"pop_2010":564358,"pop_2011":567631,"pop_2012":576893,"pop_2013":583223,"pop_2014":584153},"id":22},{"arcs":[[[128]],[[-41,129,130,-66,-90]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US01","fips_state":"01","name":"Alabama","iso_3166_2":"AL","census":4779736,"pop_estimataes_base":4780127,"pop_2010":4785822,"pop_2011":4801695,"pop_2012":4817484,"pop_2013":4833996,"pop_2014":4849377},"id":23},{"arcs":[[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141]],[[142]],[[143]],[[144,-130,-40]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US12","fips_state":"12","name":"Florida","iso_3166_2":"FL","census":18801310,"pop_estimataes_base":18804623,"pop_2010":18852220,"pop_2011":19107900,"pop_2012":19355257,"pop_2013":19600311,"pop_2014":19893297},"id":24},{"arcs":[[-127,145,146,147,148,149,-69]],"type":"Polygon","properties":{"geo_id":"0400000US16","fips_state":"16","name":"Idaho","iso_3166_2":"ID","census":1567582,"pop_estimataes_base":1567652,"pop_2010":1570639,"pop_2011":1583780,"pop_2012":1595590,"pop_2013":1612843,"pop_2014":1634464},"id":25},{"arcs":[[-26,150,151,-79]],"type":"Polygon","properties":{"geo_id":"0400000US20","fips_state":"20","name":"Kansas","iso_3166_2":"KS","census":2853118,"pop_estimataes_base":2853132,"pop_2010":2858949,"pop_2011":2869965,"pop_2012":2885966,"pop_2013":2895801,"pop_2014":2904021},"id":26},{"arcs":[[[152]],[[-100,153]],[[-102,-35,-101,-115,-88,-112,154,-97,155]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US24","fips_state":"24","name":"Maryland","iso_3166_2":"MD","census":5773552,"pop_estimataes_base":5773785,"pop_2010":5788101,"pop_2011":5843833,"pop_2012":5891819,"pop_2013":5938737,"pop_2014":5976407},"id":27},{"arcs":[[156,157,-109,158,-110,-86]],"type":"Polygon","properties":{"geo_id":"0400000US34","fips_state":"34","name":"New Jersey","iso_3166_2":"NJ","census":8791894,"pop_estimataes_base":8791936,"pop_2010":8803580,"pop_2011":8842614,"pop_2012":8876000,"pop_2013":8911502,"pop_2014":8938175},"id":28},{"arcs":[[[159]],[[160]],[[161,162,-37,-89,-104]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US37","fips_state":"37","name":"North Carolina","iso_3166_2":"NC","census":9535483,"pop_estimataes_base":9535691,"pop_2010":9559488,"pop_2011":9651502,"pop_2012":9748181,"pop_2013":9848917,"pop_2014":9943964},"id":29},{"arcs":[[163,-38,-163]],"type":"Polygon","properties":{"geo_id":"0400000US45","fips_state":"45","name":"South Carolina","iso_3166_2":"SC","census":4625364,"pop_estimataes_base":4625401,"pop_2010":4636290,"pop_2011":4673054,"pop_2012":4722621,"pop_2013":4771929,"pop_2014":4832482},"id":30},{"arcs":[[[164]],[[165]],[[166]],[[167]],[[168]],[[169]],[[170]],[[171]],[[172]],[[173]],[[-149,174,175]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US53","fips_state":"53","name":"Washington","iso_3166_2":"WA","census":6724540,"pop_estimataes_base":6724543,"pop_2010":6741911,"pop_2011":6822112,"pop_2012":6896325,"pop_2013":6973742,"pop_2014":7061530},"id":31},{"arcs":[[176,177,178,179]],"type":"Polygon","properties":{"geo_id":"0400000US50","fips_state":"50","name":"Vermont","iso_3166_2":"VT","census":625741,"pop_estimataes_base":625745,"pop_2010":625792,"pop_2011":626450,"pop_2012":626138,"pop_2013":626855,"pop_2014":626562},"id":32},{"arcs":[[-126,-29,-5,180,-146]],"type":"Polygon","properties":{"geo_id":"0400000US49","fips_state":"49","name":"Utah","iso_3166_2":"UT","census":2763885,"pop_estimataes_base":2763885,"pop_2010":2774346,"pop_2011":2815324,"pop_2012":2855194,"pop_2013":2902787,"pop_2014":2942902},"id":33},{"arcs":[[-47,181,182,183,-57,-121]],"type":"Polygon","properties":{"geo_id":"0400000US19","fips_state":"19","name":"Iowa","iso_3166_2":"IA","census":3046355,"pop_estimataes_base":3046869,"pop_2010":3050295,"pop_2011":3064904,"pop_2012":3075935,"pop_2013":3092341,"pop_2014":3107126},"id":34},{"arcs":[[[184,-92]],[[-105,-94,185,-45,-49,186,-113]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US21","fips_state":"21","name":"Kentucky","iso_3166_2":"KY","census":4339367,"pop_estimataes_base":4339349,"pop_2010":4349838,"pop_2011":4370038,"pop_2012":4383465,"pop_2013":4399583,"pop_2014":4413457},"id":35},{"arcs":[[[187]],[[188]],[[189]],[[190]],[[191]],[[192]],[[193]],[[194]],[[195]],[[196]],[[197]],[[198]],[[199]],[[200]],[[201]],[[202]],[[203]],[[204]],[[205]],[[206]],[[207]],[[208]],[[209,210]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US23","fips_state":"23","name":"Maine","iso_3166_2":"ME","census":1328361,"pop_estimataes_base":1328361,"pop_2010":1327361,"pop_2011":1327930,"pop_2012":1328592,"pop_2013":1328702,"pop_2014":1330089},"id":36},{"arcs":[[[211]],[[212]],[[213]],[[214,-177,215,216,217,218,219,-34]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US25","fips_state":"25","name":"Massachusetts","iso_3166_2":"MA","census":6547629,"pop_estimataes_base":6547817,"pop_2010":6564073,"pop_2011":6612270,"pop_2012":6655829,"pop_2013":6708874,"pop_2014":6745408},"id":37},{"arcs":[[[220]],[[221]],[[222]],[[223]],[[224]],[[225,-51,226]],[[227,-123]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US26","fips_state":"26","name":"Michigan","iso_3166_2":"MI","census":9883640,"pop_estimataes_base":9884133,"pop_2010":9876498,"pop_2011":9875736,"pop_2012":9884781,"pop_2013":9898193,"pop_2014":9909877},"id":38},{"arcs":[[-8,-80,-152,228,-182,-46,-186,-93,-185,-91]],"type":"Polygon","properties":{"geo_id":"0400000US29","fips_state":"29","name":"Missouri","iso_3166_2":"MO","census":5988927,"pop_estimataes_base":5988923,"pop_2010":5996085,"pop_2011":6010544,"pop_2012":6025281,"pop_2013":6044917,"pop_2014":6063589},"id":39},{"arcs":[[229,-183,-229,-151,-25,-125]],"type":"Polygon","properties":{"geo_id":"0400000US31","fips_state":"31","name":"Nebraska","iso_3166_2":"NE","census":1826341,"pop_estimataes_base":1826341,"pop_2010":1829865,"pop_2011":1842232,"pop_2012":1855487,"pop_2013":1868969,"pop_2014":1881503},"id":40},{"arcs":[[-4,-23,230,-147,-181]],"type":"Polygon","properties":{"geo_id":"0400000US32","fips_state":"32","name":"Nevada","iso_3166_2":"NV","census":2700551,"pop_estimataes_base":2700692,"pop_2010":2703493,"pop_2011":2718586,"pop_2012":2755245,"pop_2013":2791494,"pop_2014":2839099},"id":41},{"arcs":[[231,-216,-180,232,-210]],"type":"Polygon","properties":{"geo_id":"0400000US33","fips_state":"33","name":"New Hampshire","iso_3166_2":"NH","census":1316470,"pop_estimataes_base":1316466,"pop_2010":1316517,"pop_2011":1318109,"pop_2012":1321297,"pop_2013":1322616,"pop_2014":1326813},"id":42},{"arcs":[[[233]],[[234]],[[235]],[[236]],[[237]],[[238]],[[-215,-33,239,-157,-85,240,-178]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US36","fips_state":"36","name":"New York","iso_3166_2":"NY","census":19378102,"pop_estimataes_base":19378112,"pop_2010":19400867,"pop_2011":19521745,"pop_2012":19607140,"pop_2013":19695680,"pop_2014":19746227},"id":43},{"arcs":[[[241]],[[242]],[[243]],[[244]],[[-187,-52,-226,245,-83,-114]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US39","fips_state":"39","name":"Ohio","iso_3166_2":"OH","census":11536504,"pop_estimataes_base":11536725,"pop_2010":11540070,"pop_2011":11544757,"pop_2012":11550901,"pop_2013":11572005,"pop_2014":11594163},"id":44},{"arcs":[[-148,-231,-22,246,-175]],"type":"Polygon","properties":{"geo_id":"0400000US41","fips_state":"41","name":"Oregon","iso_3166_2":"OR","census":3831074,"pop_estimataes_base":3831073,"pop_2010":3837083,"pop_2011":3867644,"pop_2012":3898684,"pop_2013":3928068,"pop_2014":3970239},"id":45},{"arcs":[[[247]],[[248]],[[249]],[[250]],[[251]],[[-31,-220,252]],[[253,-218]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US44","fips_state":"44","name":"Rhode Island","iso_3166_2":"RI","census":1052567,"pop_estimataes_base":1052931,"pop_2010":1053078,"pop_2011":1052020,"pop_2012":1052637,"pop_2013":1053354,"pop_2014":1055173},"id":46},{"arcs":[[-72,-78,-58,-184,-230,-128]],"type":"Polygon","properties":{"geo_id":"0400000US46","fips_state":"46","name":"South Dakota","iso_3166_2":"SD","census":814180,"pop_estimataes_base":814191,"pop_2010":816192,"pop_2011":824171,"pop_2012":834504,"pop_2013":845510,"pop_2014":853175},"id":47},{"arcs":[[[254]],[[-6,-56,255,-76,-81]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US48","fips_state":"48","name":"Texas","iso_3166_2":"TX","census":25145561,"pop_estimataes_base":25146104,"pop_2010":25245717,"pop_2011":25657477,"pop_2012":26094422,"pop_2013":26505637,"pop_2014":26956958},"id":48},{"arcs":[[[256]],[[257]],[[258]],[[259]],[[260]],[[261]],[[262]],[[263]],[[264]],[[265]],[[266]],[[267]],[[268]],[[269]],[[270]],[[271]],[[272]],[[273]],[[274]],[[275]],[[276]],[[277]],[[278]],[[279]],[[280]],[[281]],[[282]],[[283]],[[284]],[[285]],[[286]],[[287]],[[288]],[[289]],[[290]],[[291]],[[292]],[[293]],[[294]],[[295]],[[296]],[[297]],[[298]],[[299]],[[300]],[[301]],[[302]],[[303]],[[304]],[[305]],[[306]],[[307]],[[308]],[[309]],[[310]],[[311]],[[312]],[[313]],[[314]],[[315]],[[316]],[[317]],[[318]],[[319]],[[320]],[[321]],[[322]],[[323]],[[324]],[[325]],[[326]],[[327]],[[328]],[[329]],[[330]],[[331]],[[332]],[[333]],[[334]],[[335]],[[336]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US02","fips_state":"02","name":"Alaska","iso_3166_2":"AK","census":710231,"pop_estimataes_base":710249,"pop_2010":713856,"pop_2011":722572,"pop_2012":731081,"pop_2013":737259,"pop_2014":736732},"id":49},{"arcs":[[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[343]],[[344]],[[345]]],"type":"MultiPolygon","properties":{"geo_id":"0400000US15","fips_state":"15","name":"Hawaii","iso_3166_2":"HI","census":1360301,"pop_estimataes_base":1360301,"pop_2010":1363950,"pop_2011":1378251,"pop_2012":1392766,"pop_2013":1408987,"pop_2014":1419561},"id":50}]}},"crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/briantrang/Documents/tapology/frontend/regional-mma/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-maps":
/*!************************************!*\
  !*** external "react-simple-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "topojson-client":
/*!**********************************!*\
  !*** external "topojson-client" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("topojson-client");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map