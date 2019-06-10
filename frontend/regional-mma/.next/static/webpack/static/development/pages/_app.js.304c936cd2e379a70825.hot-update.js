webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Page */ "./src/Page.js");

var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/pages/_app.js";

 //this wraps around all



class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clickHandler", stateName => {
      this.setstate({
        selected: stateName
      });
    });

    this.state = {
      selected: "",
      states: ["Illinois", "Indiana", "Iowa", "KS/Missouri", "Michigan", "Minnesota", "Nebraska", "Dakotas", "Ohio", "Wisconsin", "New England", "New Jersey", "New York", "Pennsylvania", "Alabama", "Arkansas", "Florida", "Georgia", "Kentucky", "Louisiana", "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Virginia", "West Virginia", "Arizona", "New Mexico", "Oklahoma", "Texas", "California", "Colorado", "Idaho", "Montana", "Nevada", "Pac Northwest", "Utah", "Alaska", "Hawaii"]
    };
  }

  componentDidMount() {}

  render() {
    const {
      Component
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, {
      clicked: this.clickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.304c936cd2e379a70825.hot-update.js.map