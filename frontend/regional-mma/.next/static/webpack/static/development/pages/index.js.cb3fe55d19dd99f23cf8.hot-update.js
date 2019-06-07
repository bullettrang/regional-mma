webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/us-albers.json */ "./src/static/us-albers.json");
var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/us-albers.json */ "./src/static/us-albers.json", 1);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/lib/index.js");
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "About Page")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["ComposableMap"], {
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
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["ZoomableGroup"], {
      center: [-47, 18],
      disablePanning: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["Geographies"], {
      geography: this.state.geographyPaths,
      disableOptimization: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, (geographies, projection) => geographies.map((geography, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_5__["Geography"], {
      key: `${geography.properties.ADM0_A3}-${i}`,
      cacheId: `path-${geography.properties.ADM0_A3}-${i}`,
      round: true,
      name: geography.properties.name,
      key: geography.properties.name,
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, geography.properties.name))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomMap);

/***/ })

})
//# sourceMappingURL=index.js.cb3fe55d19dd99f23cf8.hot-update.js.map