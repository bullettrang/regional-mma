webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/us-albers.json */ "./src/static/us-albers.json");
var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/us-albers.json */ "./src/static/us-albers.json", 1);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/lib/index.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/src/CustomMap.js";





const wrapperStyles = {
  width: "100%",
  maxWidth: 480,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#7fcdff"
};

class CustomMap extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectHandler", stateName => {
      this.setState({
        selected: stateName
      });
    });

    this.state = {
      geographyPaths: [],
      selected: ''
    };
    this.loadPaths = this.loadPaths.bind(this);
  }

  componentDidMount() {
    this.loadPaths();
  }

  loadPaths() {
    const world = _static_us_albers_json__WEBPACK_IMPORTED_MODULE_5__; // Transform your paths with topojson however you want...

    const countries = Object(topojson_client__WEBPACK_IMPORTED_MODULE_3__["feature"])(world, world.objects[_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(world.objects)[0]]).features;
    this.setState({
      geographyPaths: countries
    });
  }

  render() {
    console.log('custommap ', this.props);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: wrapperStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__["ComposableMap"], {
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
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__["ZoomableGroup"], {
      center: [-47, 18],
      disablePanning: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__["Geographies"], {
      geography: this.state.geographyPaths,
      disableOptimization: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, (geographies, projection) => geographies.map((geography, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/state?state=${geography.properties.name}`,
      key: geography.properties.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_6__["Geography"], {
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
        lineNumber: 71
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomMap);

/***/ })

})
//# sourceMappingURL=_app.js.99caa495e3f0bb97d25d.hot-update.js.map