webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo-projection/index.js ***!
  \*************************************************/
/*! exports provided: geoAiry, geoAiryRaw, geoAitoff, geoAitoffRaw, geoArmadillo, geoArmadilloRaw, geoAugust, geoAugustRaw, geoBaker, geoBakerRaw, geoBerghaus, geoBerghausRaw, geoBoggs, geoBoggsRaw, geoBonne, geoBonneRaw, geoBottomley, geoBottomleyRaw, geoBromley, geoBromleyRaw, geoChamberlin, geoChamberlinRaw, geoChamberlinAfrica, geoCollignon, geoCollignonRaw, geoCraig, geoCraigRaw, geoCraster, geoCrasterRaw, geoCylindricalEqualArea, geoCylindricalEqualAreaRaw, geoCylindricalStereographic, geoCylindricalStereographicRaw, geoEckert1, geoEckert1Raw, geoEckert2, geoEckert2Raw, geoEckert3, geoEckert3Raw, geoEckert4, geoEckert4Raw, geoEckert5, geoEckert5Raw, geoEckert6, geoEckert6Raw, geoEisenlohr, geoEisenlohrRaw, geoFahey, geoFaheyRaw, geoFoucaut, geoFoucautRaw, geoGilbert, geoGingery, geoGingeryRaw, geoGinzburg4, geoGinzburg4Raw, geoGinzburg5, geoGinzburg5Raw, geoGinzburg6, geoGinzburg6Raw, geoGinzburg8, geoGinzburg8Raw, geoGinzburg9, geoGinzburg9Raw, geoGringorten, geoGringortenRaw, geoGuyou, geoGuyouRaw, geoHammer, geoHammerRaw, geoHammerRetroazimuthal, geoHammerRetroazimuthalRaw, geoHealpix, geoHealpixRaw, geoHill, geoHillRaw, geoHomolosine, geoHomolosineRaw, geoInterrupt, geoInterruptedBoggs, geoInterruptedHomolosine, geoInterruptedMollweide, geoInterruptedMollweideHemispheres, geoInterruptedSinuMollweide, geoInterruptedSinusoidal, geoKavrayskiy7, geoKavrayskiy7Raw, geoLagrange, geoLagrangeRaw, geoLarrivee, geoLarriveeRaw, geoLaskowski, geoLaskowskiRaw, geoLittrow, geoLittrowRaw, geoLoximuthal, geoLoximuthalRaw, geoMiller, geoMillerRaw, geoModifiedStereographic, geoModifiedStereographicRaw, geoModifiedStereographicAlaska, geoModifiedStereographicGs48, geoModifiedStereographicGs50, geoModifiedStereographicMiller, geoModifiedStereographicLee, geoMollweide, geoMollweideRaw, geoMtFlatPolarParabolic, geoMtFlatPolarParabolicRaw, geoMtFlatPolarQuartic, geoMtFlatPolarQuarticRaw, geoMtFlatPolarSinusoidal, geoMtFlatPolarSinusoidalRaw, geoNaturalEarth, geoNaturalEarthRaw, geoNellHammer, geoNellHammerRaw, geoPatterson, geoPattersonRaw, geoPolyconic, geoPolyconicRaw, geoPolyhedral, geoPolyhedralButterfly, geoPolyhedralCollignon, geoPolyhedralWaterman, geoProject, geoGringortenQuincuncial, geoPeirceQuincuncial, geoPierceQuincuncial, geoQuantize, geoQuincuncial, geoRectangularPolyconic, geoRectangularPolyconicRaw, geoRobinson, geoRobinsonRaw, geoSatellite, geoSatelliteRaw, geoSinuMollweide, geoSinuMollweideRaw, geoSinusoidal, geoSinusoidalRaw, geoStitch, geoTimes, geoTimesRaw, geoTwoPointAzimuthal, geoTwoPointAzimuthalRaw, geoTwoPointAzimuthalUsa, geoTwoPointEquidistant, geoTwoPointEquidistantRaw, geoTwoPointEquidistantUsa, geoVanDerGrinten, geoVanDerGrintenRaw, geoVanDerGrinten2, geoVanDerGrinten2Raw, geoVanDerGrinten3, geoVanDerGrinten3Raw, geoVanDerGrinten4, geoVanDerGrinten4Raw, geoWagner4, geoWagner4Raw, geoWagner6, geoWagner6Raw, geoWagner7, geoWagner7Raw, geoWiechel, geoWiechelRaw, geoWinkel3, geoWinkel3Raw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_airy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/airy */ "./node_modules/d3-geo-projection/src/airy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAiry", function() { return _src_airy__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAiryRaw", function() { return _src_airy__WEBPACK_IMPORTED_MODULE_0__["airyRaw"]; });

/* harmony import */ var _src_aitoff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/aitoff */ "./node_modules/d3-geo-projection/src/aitoff.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAitoff", function() { return _src_aitoff__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAitoffRaw", function() { return _src_aitoff__WEBPACK_IMPORTED_MODULE_1__["aitoffRaw"]; });

/* harmony import */ var _src_armadillo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/armadillo */ "./node_modules/d3-geo-projection/src/armadillo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoArmadillo", function() { return _src_armadillo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoArmadilloRaw", function() { return _src_armadillo__WEBPACK_IMPORTED_MODULE_2__["armadilloRaw"]; });

/* harmony import */ var _src_august__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/august */ "./node_modules/d3-geo-projection/src/august.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAugust", function() { return _src_august__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAugustRaw", function() { return _src_august__WEBPACK_IMPORTED_MODULE_3__["augustRaw"]; });

/* harmony import */ var _src_baker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/baker */ "./node_modules/d3-geo-projection/src/baker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBaker", function() { return _src_baker__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBakerRaw", function() { return _src_baker__WEBPACK_IMPORTED_MODULE_4__["bakerRaw"]; });

/* harmony import */ var _src_berghaus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/berghaus */ "./node_modules/d3-geo-projection/src/berghaus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBerghaus", function() { return _src_berghaus__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBerghausRaw", function() { return _src_berghaus__WEBPACK_IMPORTED_MODULE_5__["berghausRaw"]; });

/* harmony import */ var _src_boggs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/boggs */ "./node_modules/d3-geo-projection/src/boggs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBoggs", function() { return _src_boggs__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBoggsRaw", function() { return _src_boggs__WEBPACK_IMPORTED_MODULE_6__["boggsRaw"]; });

/* harmony import */ var _src_bonne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/bonne */ "./node_modules/d3-geo-projection/src/bonne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBonne", function() { return _src_bonne__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBonneRaw", function() { return _src_bonne__WEBPACK_IMPORTED_MODULE_7__["bonneRaw"]; });

/* harmony import */ var _src_bottomley__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/bottomley */ "./node_modules/d3-geo-projection/src/bottomley.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBottomley", function() { return _src_bottomley__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBottomleyRaw", function() { return _src_bottomley__WEBPACK_IMPORTED_MODULE_8__["bottomleyRaw"]; });

/* harmony import */ var _src_bromley__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/bromley */ "./node_modules/d3-geo-projection/src/bromley.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBromley", function() { return _src_bromley__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBromleyRaw", function() { return _src_bromley__WEBPACK_IMPORTED_MODULE_9__["bromleyRaw"]; });

/* harmony import */ var _src_chamberlin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/chamberlin */ "./node_modules/d3-geo-projection/src/chamberlin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoChamberlin", function() { return _src_chamberlin__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinRaw", function() { return _src_chamberlin__WEBPACK_IMPORTED_MODULE_10__["chamberlinRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinAfrica", function() { return _src_chamberlin__WEBPACK_IMPORTED_MODULE_10__["chamberlinAfrica"]; });

/* harmony import */ var _src_collignon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/collignon */ "./node_modules/d3-geo-projection/src/collignon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCollignon", function() { return _src_collignon__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCollignonRaw", function() { return _src_collignon__WEBPACK_IMPORTED_MODULE_11__["collignonRaw"]; });

/* harmony import */ var _src_craig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/craig */ "./node_modules/d3-geo-projection/src/craig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCraig", function() { return _src_craig__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCraigRaw", function() { return _src_craig__WEBPACK_IMPORTED_MODULE_12__["craigRaw"]; });

/* harmony import */ var _src_craster__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/craster */ "./node_modules/d3-geo-projection/src/craster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCraster", function() { return _src_craster__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCrasterRaw", function() { return _src_craster__WEBPACK_IMPORTED_MODULE_13__["crasterRaw"]; });

/* harmony import */ var _src_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/cylindricalEqualArea */ "./node_modules/d3-geo-projection/src/cylindricalEqualArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualArea", function() { return _src_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualAreaRaw", function() { return _src_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_14__["cylindricalEqualAreaRaw"]; });

/* harmony import */ var _src_cylindricalStereographic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/cylindricalStereographic */ "./node_modules/d3-geo-projection/src/cylindricalStereographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographic", function() { return _src_cylindricalStereographic__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographicRaw", function() { return _src_cylindricalStereographic__WEBPACK_IMPORTED_MODULE_15__["cylindricalStereographicRaw"]; });

/* harmony import */ var _src_eckert1_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/eckert1.js */ "./node_modules/d3-geo-projection/src/eckert1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert1", function() { return _src_eckert1_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert1Raw", function() { return _src_eckert1_js__WEBPACK_IMPORTED_MODULE_16__["eckert1Raw"]; });

/* harmony import */ var _src_eckert2_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/eckert2.js */ "./node_modules/d3-geo-projection/src/eckert2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert2", function() { return _src_eckert2_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert2Raw", function() { return _src_eckert2_js__WEBPACK_IMPORTED_MODULE_17__["eckert2Raw"]; });

/* harmony import */ var _src_eckert3_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/eckert3.js */ "./node_modules/d3-geo-projection/src/eckert3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert3", function() { return _src_eckert3_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert3Raw", function() { return _src_eckert3_js__WEBPACK_IMPORTED_MODULE_18__["eckert3Raw"]; });

/* harmony import */ var _src_eckert4_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/eckert4.js */ "./node_modules/d3-geo-projection/src/eckert4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert4", function() { return _src_eckert4_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert4Raw", function() { return _src_eckert4_js__WEBPACK_IMPORTED_MODULE_19__["eckert4Raw"]; });

/* harmony import */ var _src_eckert5_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/eckert5.js */ "./node_modules/d3-geo-projection/src/eckert5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert5", function() { return _src_eckert5_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert5Raw", function() { return _src_eckert5_js__WEBPACK_IMPORTED_MODULE_20__["eckert5Raw"]; });

/* harmony import */ var _src_eckert6_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/eckert6.js */ "./node_modules/d3-geo-projection/src/eckert6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert6", function() { return _src_eckert6_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEckert6Raw", function() { return _src_eckert6_js__WEBPACK_IMPORTED_MODULE_21__["eckert6Raw"]; });

/* harmony import */ var _src_eisenlohr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/eisenlohr.js */ "./node_modules/d3-geo-projection/src/eisenlohr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohr", function() { return _src_eisenlohr_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohrRaw", function() { return _src_eisenlohr_js__WEBPACK_IMPORTED_MODULE_22__["eisenlohrRaw"]; });

/* harmony import */ var _src_fahey_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/fahey.js */ "./node_modules/d3-geo-projection/src/fahey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoFahey", function() { return _src_fahey_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoFaheyRaw", function() { return _src_fahey_js__WEBPACK_IMPORTED_MODULE_23__["faheyRaw"]; });

/* harmony import */ var _src_foucaut_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/foucaut.js */ "./node_modules/d3-geo-projection/src/foucaut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoFoucaut", function() { return _src_foucaut_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoFoucautRaw", function() { return _src_foucaut_js__WEBPACK_IMPORTED_MODULE_24__["foucautRaw"]; });

/* harmony import */ var _src_gilbert_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/gilbert.js */ "./node_modules/d3-geo-projection/src/gilbert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGilbert", function() { return _src_gilbert_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _src_gingery_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/gingery.js */ "./node_modules/d3-geo-projection/src/gingery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGingery", function() { return _src_gingery_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGingeryRaw", function() { return _src_gingery_js__WEBPACK_IMPORTED_MODULE_26__["gingeryRaw"]; });

/* harmony import */ var _src_ginzburg4_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/ginzburg4.js */ "./node_modules/d3-geo-projection/src/ginzburg4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4", function() { return _src_ginzburg4_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4Raw", function() { return _src_ginzburg4_js__WEBPACK_IMPORTED_MODULE_27__["ginzburg4Raw"]; });

/* harmony import */ var _src_ginzburg5_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/ginzburg5.js */ "./node_modules/d3-geo-projection/src/ginzburg5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5", function() { return _src_ginzburg5_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5Raw", function() { return _src_ginzburg5_js__WEBPACK_IMPORTED_MODULE_28__["ginzburg5Raw"]; });

/* harmony import */ var _src_ginzburg6_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/ginzburg6.js */ "./node_modules/d3-geo-projection/src/ginzburg6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6", function() { return _src_ginzburg6_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6Raw", function() { return _src_ginzburg6_js__WEBPACK_IMPORTED_MODULE_29__["ginzburg6Raw"]; });

/* harmony import */ var _src_ginzburg8_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/ginzburg8.js */ "./node_modules/d3-geo-projection/src/ginzburg8.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8", function() { return _src_ginzburg8_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8Raw", function() { return _src_ginzburg8_js__WEBPACK_IMPORTED_MODULE_30__["ginzburg8Raw"]; });

/* harmony import */ var _src_ginzburg9_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/ginzburg9.js */ "./node_modules/d3-geo-projection/src/ginzburg9.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9", function() { return _src_ginzburg9_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9Raw", function() { return _src_ginzburg9_js__WEBPACK_IMPORTED_MODULE_31__["ginzburg9Raw"]; });

/* harmony import */ var _src_gringorten_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/gringorten.js */ "./node_modules/d3-geo-projection/src/gringorten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGringorten", function() { return _src_gringorten_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGringortenRaw", function() { return _src_gringorten_js__WEBPACK_IMPORTED_MODULE_32__["gringortenRaw"]; });

/* harmony import */ var _src_guyou_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/guyou.js */ "./node_modules/d3-geo-projection/src/guyou.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGuyou", function() { return _src_guyou_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGuyouRaw", function() { return _src_guyou_js__WEBPACK_IMPORTED_MODULE_33__["guyouRaw"]; });

/* harmony import */ var _src_hammer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/hammer.js */ "./node_modules/d3-geo-projection/src/hammer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHammer", function() { return _src_hammer_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHammerRaw", function() { return _src_hammer_js__WEBPACK_IMPORTED_MODULE_34__["hammerRaw"]; });

/* harmony import */ var _src_hammerRetroazimuthal_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/hammerRetroazimuthal.js */ "./node_modules/d3-geo-projection/src/hammerRetroazimuthal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthal", function() { return _src_hammerRetroazimuthal_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthalRaw", function() { return _src_hammerRetroazimuthal_js__WEBPACK_IMPORTED_MODULE_35__["hammerRetroazimuthalRaw"]; });

/* harmony import */ var _src_healpix_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/healpix.js */ "./node_modules/d3-geo-projection/src/healpix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHealpix", function() { return _src_healpix_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHealpixRaw", function() { return _src_healpix_js__WEBPACK_IMPORTED_MODULE_36__["healpixRaw"]; });

/* harmony import */ var _src_hill_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/hill.js */ "./node_modules/d3-geo-projection/src/hill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHill", function() { return _src_hill_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHillRaw", function() { return _src_hill_js__WEBPACK_IMPORTED_MODULE_37__["hillRaw"]; });

/* harmony import */ var _src_homolosine_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/homolosine.js */ "./node_modules/d3-geo-projection/src/homolosine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHomolosine", function() { return _src_homolosine_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoHomolosineRaw", function() { return _src_homolosine_js__WEBPACK_IMPORTED_MODULE_38__["homolosineRaw"]; });

/* harmony import */ var _src_interrupted_index__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/interrupted/index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterrupt", function() { return _src_interrupted_index__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _src_interrupted_boggs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./src/interrupted/boggs */ "./node_modules/d3-geo-projection/src/interrupted/boggs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedBoggs", function() { return _src_interrupted_boggs__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _src_interrupted_homolosine__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./src/interrupted/homolosine */ "./node_modules/d3-geo-projection/src/interrupted/homolosine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedHomolosine", function() { return _src_interrupted_homolosine__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _src_interrupted_mollweide__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./src/interrupted/mollweide */ "./node_modules/d3-geo-projection/src/interrupted/mollweide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweide", function() { return _src_interrupted_mollweide__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _src_interrupted_mollweideHemispheres__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./src/interrupted/mollweideHemispheres */ "./node_modules/d3-geo-projection/src/interrupted/mollweideHemispheres.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweideHemispheres", function() { return _src_interrupted_mollweideHemispheres__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _src_interrupted_sinuMollweide__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./src/interrupted/sinuMollweide */ "./node_modules/d3-geo-projection/src/interrupted/sinuMollweide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinuMollweide", function() { return _src_interrupted_sinuMollweide__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _src_interrupted_sinusoidal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./src/interrupted/sinusoidal */ "./node_modules/d3-geo-projection/src/interrupted/sinusoidal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinusoidal", function() { return _src_interrupted_sinusoidal__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _src_kavrayskiy7_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./src/kavrayskiy7.js */ "./node_modules/d3-geo-projection/src/kavrayskiy7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7", function() { return _src_kavrayskiy7_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7Raw", function() { return _src_kavrayskiy7_js__WEBPACK_IMPORTED_MODULE_46__["kavrayskiy7Raw"]; });

/* harmony import */ var _src_lagrange_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./src/lagrange.js */ "./node_modules/d3-geo-projection/src/lagrange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLagrange", function() { return _src_lagrange_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLagrangeRaw", function() { return _src_lagrange_js__WEBPACK_IMPORTED_MODULE_47__["lagrangeRaw"]; });

/* harmony import */ var _src_larrivee__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./src/larrivee */ "./node_modules/d3-geo-projection/src/larrivee.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLarrivee", function() { return _src_larrivee__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLarriveeRaw", function() { return _src_larrivee__WEBPACK_IMPORTED_MODULE_48__["larriveeRaw"]; });

/* harmony import */ var _src_laskowski__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./src/laskowski */ "./node_modules/d3-geo-projection/src/laskowski.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLaskowski", function() { return _src_laskowski__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLaskowskiRaw", function() { return _src_laskowski__WEBPACK_IMPORTED_MODULE_49__["laskowskiRaw"]; });

/* harmony import */ var _src_littrow_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./src/littrow.js */ "./node_modules/d3-geo-projection/src/littrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLittrow", function() { return _src_littrow_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLittrowRaw", function() { return _src_littrow_js__WEBPACK_IMPORTED_MODULE_50__["littrowRaw"]; });

/* harmony import */ var _src_loximuthal_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./src/loximuthal.js */ "./node_modules/d3-geo-projection/src/loximuthal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthal", function() { return _src_loximuthal_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthalRaw", function() { return _src_loximuthal_js__WEBPACK_IMPORTED_MODULE_51__["loximuthalRaw"]; });

/* harmony import */ var _src_miller__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./src/miller */ "./node_modules/d3-geo-projection/src/miller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMiller", function() { return _src_miller__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMillerRaw", function() { return _src_miller__WEBPACK_IMPORTED_MODULE_52__["millerRaw"]; });

/* harmony import */ var _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./src/modifiedStereographic */ "./node_modules/d3-geo-projection/src/modifiedStereographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographic", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicRaw", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicAlaska", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicAlaska"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs48", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicGs48"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs50", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicGs50"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicMiller", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicMiller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicLee", function() { return _src_modifiedStereographic__WEBPACK_IMPORTED_MODULE_53__["modifiedStereographicLee"]; });

/* harmony import */ var _src_mollweide__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./src/mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMollweide", function() { return _src_mollweide__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMollweideRaw", function() { return _src_mollweide__WEBPACK_IMPORTED_MODULE_54__["mollweideRaw"]; });

/* harmony import */ var _src_mtFlatPolarParabolic__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./src/mtFlatPolarParabolic */ "./node_modules/d3-geo-projection/src/mtFlatPolarParabolic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolic", function() { return _src_mtFlatPolarParabolic__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolicRaw", function() { return _src_mtFlatPolarParabolic__WEBPACK_IMPORTED_MODULE_55__["mtFlatPolarParabolicRaw"]; });

/* harmony import */ var _src_mtFlatPolarQuartic__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./src/mtFlatPolarQuartic */ "./node_modules/d3-geo-projection/src/mtFlatPolarQuartic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuartic", function() { return _src_mtFlatPolarQuartic__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuarticRaw", function() { return _src_mtFlatPolarQuartic__WEBPACK_IMPORTED_MODULE_56__["mtFlatPolarQuarticRaw"]; });

/* harmony import */ var _src_mtFlatPolarSinusoidal__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./src/mtFlatPolarSinusoidal */ "./node_modules/d3-geo-projection/src/mtFlatPolarSinusoidal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidal", function() { return _src_mtFlatPolarSinusoidal__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidalRaw", function() { return _src_mtFlatPolarSinusoidal__WEBPACK_IMPORTED_MODULE_57__["mtFlatPolarSinusoidalRaw"]; });

/* harmony import */ var _src_naturalEarth__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./src/naturalEarth */ "./node_modules/d3-geo-projection/src/naturalEarth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth", function() { return _src_naturalEarth__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarthRaw", function() { return _src_naturalEarth__WEBPACK_IMPORTED_MODULE_58__["naturalEarthRaw"]; });

/* harmony import */ var _src_nellHammer__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./src/nellHammer */ "./node_modules/d3-geo-projection/src/nellHammer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNellHammer", function() { return _src_nellHammer__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNellHammerRaw", function() { return _src_nellHammer__WEBPACK_IMPORTED_MODULE_59__["nellHammerRaw"]; });

/* harmony import */ var _src_patterson__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./src/patterson */ "./node_modules/d3-geo-projection/src/patterson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPatterson", function() { return _src_patterson__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPattersonRaw", function() { return _src_patterson__WEBPACK_IMPORTED_MODULE_60__["pattersonRaw"]; });

/* harmony import */ var _src_polyconic__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./src/polyconic */ "./node_modules/d3-geo-projection/src/polyconic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyconic", function() { return _src_polyconic__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyconicRaw", function() { return _src_polyconic__WEBPACK_IMPORTED_MODULE_61__["polyconicRaw"]; });

/* harmony import */ var _src_polyhedral_index_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./src/polyhedral/index.js */ "./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedral", function() { return _src_polyhedral_index_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _src_polyhedral_butterfly_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./src/polyhedral/butterfly.js */ "./node_modules/d3-geo-projection/src/polyhedral/butterfly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralButterfly", function() { return _src_polyhedral_butterfly_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _src_polyhedral_collignon_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./src/polyhedral/collignon.js */ "./node_modules/d3-geo-projection/src/polyhedral/collignon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralCollignon", function() { return _src_polyhedral_collignon_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _src_polyhedral_waterman_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./src/polyhedral/waterman.js */ "./node_modules/d3-geo-projection/src/polyhedral/waterman.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralWaterman", function() { return _src_polyhedral_waterman_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _src_project_index__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./src/project/index */ "./node_modules/d3-geo-projection/src/project/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProject", function() { return _src_project_index__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _src_quincuncial_gringorten_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./src/quincuncial/gringorten.js */ "./node_modules/d3-geo-projection/src/quincuncial/gringorten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGringortenQuincuncial", function() { return _src_quincuncial_gringorten_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _src_quincuncial_peirce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./src/quincuncial/peirce.js */ "./node_modules/d3-geo-projection/src/quincuncial/peirce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPeirceQuincuncial", function() { return _src_quincuncial_peirce_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPierceQuincuncial", function() { return _src_quincuncial_peirce_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/d3-geo-projection/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoQuantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _src_quincuncial_index_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./src/quincuncial/index.js */ "./node_modules/d3-geo-projection/src/quincuncial/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoQuincuncial", function() { return _src_quincuncial_index_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _src_rectangularPolyconic__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./src/rectangularPolyconic */ "./node_modules/d3-geo-projection/src/rectangularPolyconic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconic", function() { return _src_rectangularPolyconic__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconicRaw", function() { return _src_rectangularPolyconic__WEBPACK_IMPORTED_MODULE_71__["rectangularPolyconicRaw"]; });

/* harmony import */ var _src_robinson__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./src/robinson */ "./node_modules/d3-geo-projection/src/robinson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRobinson", function() { return _src_robinson__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRobinsonRaw", function() { return _src_robinson__WEBPACK_IMPORTED_MODULE_72__["robinsonRaw"]; });

/* harmony import */ var _src_satellite__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./src/satellite */ "./node_modules/d3-geo-projection/src/satellite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSatellite", function() { return _src_satellite__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSatelliteRaw", function() { return _src_satellite__WEBPACK_IMPORTED_MODULE_73__["satelliteRaw"]; });

/* harmony import */ var _src_sinuMollweide__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./src/sinuMollweide */ "./node_modules/d3-geo-projection/src/sinuMollweide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweide", function() { return _src_sinuMollweide__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweideRaw", function() { return _src_sinuMollweide__WEBPACK_IMPORTED_MODULE_74__["sinuMollweideRaw"]; });

/* harmony import */ var _src_sinusoidal__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./src/sinusoidal */ "./node_modules/d3-geo-projection/src/sinusoidal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidal", function() { return _src_sinusoidal__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidalRaw", function() { return _src_sinusoidal__WEBPACK_IMPORTED_MODULE_75__["sinusoidalRaw"]; });

/* harmony import */ var _src_stitch__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./src/stitch */ "./node_modules/d3-geo-projection/src/stitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStitch", function() { return _src_stitch__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _src_times__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./src/times */ "./node_modules/d3-geo-projection/src/times.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTimes", function() { return _src_times__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTimesRaw", function() { return _src_times__WEBPACK_IMPORTED_MODULE_77__["timesRaw"]; });

/* harmony import */ var _src_twoPointAzimuthal__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./src/twoPointAzimuthal */ "./node_modules/d3-geo-projection/src/twoPointAzimuthal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthal", function() { return _src_twoPointAzimuthal__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalRaw", function() { return _src_twoPointAzimuthal__WEBPACK_IMPORTED_MODULE_78__["twoPointAzimuthalRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalUsa", function() { return _src_twoPointAzimuthal__WEBPACK_IMPORTED_MODULE_78__["twoPointAzimuthalUsa"]; });

/* harmony import */ var _src_twoPointEquidistant__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./src/twoPointEquidistant */ "./node_modules/d3-geo-projection/src/twoPointEquidistant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistant", function() { return _src_twoPointEquidistant__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantRaw", function() { return _src_twoPointEquidistant__WEBPACK_IMPORTED_MODULE_79__["twoPointEquidistantRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantUsa", function() { return _src_twoPointEquidistant__WEBPACK_IMPORTED_MODULE_79__["twoPointEquidistantUsa"]; });

/* harmony import */ var _src_vanDerGrinten__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./src/vanDerGrinten */ "./node_modules/d3-geo-projection/src/vanDerGrinten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten", function() { return _src_vanDerGrinten__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrintenRaw", function() { return _src_vanDerGrinten__WEBPACK_IMPORTED_MODULE_80__["vanDerGrintenRaw"]; });

/* harmony import */ var _src_vanDerGrinten2__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./src/vanDerGrinten2 */ "./node_modules/d3-geo-projection/src/vanDerGrinten2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2", function() { return _src_vanDerGrinten2__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2Raw", function() { return _src_vanDerGrinten2__WEBPACK_IMPORTED_MODULE_81__["vanDerGrinten2Raw"]; });

/* harmony import */ var _src_vanDerGrinten3__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./src/vanDerGrinten3 */ "./node_modules/d3-geo-projection/src/vanDerGrinten3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3", function() { return _src_vanDerGrinten3__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3Raw", function() { return _src_vanDerGrinten3__WEBPACK_IMPORTED_MODULE_82__["vanDerGrinten3Raw"]; });

/* harmony import */ var _src_vanDerGrinten4__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./src/vanDerGrinten4 */ "./node_modules/d3-geo-projection/src/vanDerGrinten4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4", function() { return _src_vanDerGrinten4__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4Raw", function() { return _src_vanDerGrinten4__WEBPACK_IMPORTED_MODULE_83__["vanDerGrinten4Raw"]; });

/* harmony import */ var _src_wagner4_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./src/wagner4.js */ "./node_modules/d3-geo-projection/src/wagner4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner4", function() { return _src_wagner4_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner4Raw", function() { return _src_wagner4_js__WEBPACK_IMPORTED_MODULE_84__["wagner4Raw"]; });

/* harmony import */ var _src_wagner6_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./src/wagner6.js */ "./node_modules/d3-geo-projection/src/wagner6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner6", function() { return _src_wagner6_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner6Raw", function() { return _src_wagner6_js__WEBPACK_IMPORTED_MODULE_85__["wagner6Raw"]; });

/* harmony import */ var _src_wagner7_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./src/wagner7.js */ "./node_modules/d3-geo-projection/src/wagner7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner7", function() { return _src_wagner7_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWagner7Raw", function() { return _src_wagner7_js__WEBPACK_IMPORTED_MODULE_86__["wagner7Raw"]; });

/* harmony import */ var _src_wiechel_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./src/wiechel.js */ "./node_modules/d3-geo-projection/src/wiechel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWiechel", function() { return _src_wiechel_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWiechelRaw", function() { return _src_wiechel_js__WEBPACK_IMPORTED_MODULE_87__["wiechelRaw"]; });

/* harmony import */ var _src_winkel3__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./src/winkel3 */ "./node_modules/d3-geo-projection/src/winkel3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3", function() { return _src_winkel3__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3Raw", function() { return _src_winkel3__WEBPACK_IMPORTED_MODULE_88__["winkel3Raw"]; });






































































 // DEPRECATED misspelling






















/***/ }),

/***/ "./node_modules/d3-geo-projection/src/airy.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/airy.js ***!
  \****************************************************/
/*! exports provided: airyRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airyRaw", function() { return airyRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function airyRaw(beta) {
  var tanBeta_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(beta / 2),
      b = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(beta / 2)) / (tanBeta_2 * tanBeta_2);

  function forward(x, y) {
    var cosx = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(x),
        cosy = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y),
        siny = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(y),
        cosz = cosy * cosx,
        k = -((1 - cosz ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])((1 + cosz) / 2) / (1 - cosz) : -0.5) + b / (1 + cosz));
    return [k * cosy * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x), k * siny];
  }

  forward.invert = function(x, y) {
    var r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y),
        z = -beta / 2,
        i = 50, delta;
    if (!r) return [0, 0];
    do {
      var z_2 = z / 2,
          cosz_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(z_2),
          sinz_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(z_2),
          tanz_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(z_2),
          lnsecz_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(1 / cosz_2);
      z -= delta = (2 / tanz_2 * lnsecz_2 - b * tanz_2 - r) / (-lnsecz_2 / (sinz_2 * sinz_2) + 1 - b / (2 * cosz_2 * cosz_2));
    } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
    var sinz = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(z);
    return [Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x * sinz, r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(z)), Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y * sinz / r)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var beta = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(airyRaw),
      p = m(beta);

  p.radius = function(_) {
    return arguments.length ? m(beta = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]) : beta * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
  };

  return p
      .scale(179.976)
      .clipAngle(147);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/aitoff.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/aitoff.js ***!
  \******************************************************/
/*! exports provided: aitoffRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aitoffRaw", function() { return aitoffRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function aitoffRaw(x, y) {
  var cosy = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y), sincia = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sinci"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(cosy * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(x /= 2)));
  return [2 * cosy * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x) * sincia, Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(y) * sincia];
}

// Abort if [x, y] is not within an ellipse centered at [0, 0] with
// semi-major axis pi and semi-minor axis pi/2.
aitoffRaw.invert = function(x, y) {
  if (x * x + 4 * y * y > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] + _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return;
  var x1 = x, y1 = y, i = 25;
  do {
    var sinx = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x1),
        sinx_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x1 / 2),
        cosx_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(x1 / 2),
        siny = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(y1),
        cosy = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y1),
        sin_2y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * y1),
        sin2y = siny * siny,
        cos2y = cosy * cosy,
        sin2x_2 = sinx_2 * sinx_2,
        c = 1 - cos2y * cosx_2 * cosx_2,
        e = c ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(cosy * cosx_2) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(f = 1 / c) : f = 0,
        f,
        fx = 2 * e * cosy * sinx_2 - x,
        fy = e * siny - y,
        dxdx = f * (cos2y * sin2x_2 + e * cosy * cosx_2 * sin2y),
        dxdy = f * (0.5 * sinx * sin_2y - e * 2 * siny * sinx_2),
        dydx = f * 0.25 * (sin_2y * sinx_2 - e * siny * cos2y * sinx),
        dydy = f * (sin2y * cosx_2 + e * sin2x_2 * cosy),
        z = dxdy * dydx - dydy * dxdx;
    if (!z) break;
    var dx = (fy * dxdy - fx * dydy) / z,
        dy = (fx * dydx - fy * dxdx) / z;
    x1 -= dx, y1 -= dy;
  } while ((Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dx) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dy) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) && --i > 0);
  return [x1, y1];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(aitoffRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/armadillo.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/armadillo.js ***!
  \*********************************************************/
/*! exports provided: armadilloRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "armadilloRaw", function() { return armadilloRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function armadilloRaw(phi0) {
  var sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0),
      cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0),
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(sPhi0 * phi0),
      k = (1 + sinPhi0 - cosPhi0) / 2;

  function forward(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        cosLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda /= 2);
    return [
      (1 + cosPhi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
      (sPhi0 * phi > -Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(cosLambda, tanPhi0) - 1e-3 ? 0 : -sPhi0 * 10) + k + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) * cosPhi0 - (1 + cosPhi) * sinPhi0 * cosLambda // TODO D3 core should allow null or [NaN, NaN] to be returned.
    ];
  }

  forward.invert = function(x, y) {
    var lambda = 0,
        phi = 0,
        i = 50;
    do {
      var cosLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda),
          sinLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
          cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
          sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
          A = 1 + cosPhi,
          fx = A * sinLambda - x,
          fy = k + sinPhi * cosPhi0 - A * sinPhi0 * cosLambda - y,
          dxdLambda = A * cosLambda / 2,
          dxdPhi = -sinLambda * sinPhi,
          dydLambda = sinPhi0 * A * sinLambda / 2,
          dydPhi = cosPhi0 * cosPhi + sinPhi0 * cosLambda * sinPhi,
          denominator = dxdPhi * dydLambda - dydPhi * dxdLambda,
          dLambda = (fy * dxdPhi - fx * dydPhi) / denominator / 2,
          dPhi = (fx * dydLambda - fy * dxdLambda) / denominator;
      lambda -= dLambda, phi -= dPhi;
    } while ((Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dLambda) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dPhi) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) && --i > 0);
    return sPhi0 * phi > -Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda), tanPhi0) - 1e-3 ? [lambda * 2, phi] : null;
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var phi0 = 20 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"],
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(sPhi0 * phi0),
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(armadilloRaw),
      p = m(phi0),
      stream_ = p.stream;

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
    tanPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])((sPhi0 = (phi0 = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]) >= 0 ? 1 : -1) * phi0);
    return m(phi0);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var lambda = sPhi0 * -180; sPhi0 * lambda < 180; lambda += sPhi0 * 90) sphereStream.point(lambda, sPhi0 * 90);
      while (sPhi0 * (lambda -= phi0) >= -180) { // TODO precision?
        sphereStream.point(lambda, sPhi0 * -Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda * _math__WEBPACK_IMPORTED_MODULE_1__["radians"] / 2), tanPhi0) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(218.695)
      .center([0, 28.0974]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/august.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/august.js ***!
  \******************************************************/
/*! exports provided: augustRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augustRaw", function() { return augustRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function augustRaw(lambda, phi) {
  var tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi / 2),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - tanPhi * tanPhi),
      c = 1 + k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda /= 2),
      x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * k / c,
      y = tanPhi / c,
      x2 = x * x,
      y2 = y * y;
  return [
    4 / 3 * x * (3 + x2 - 3 * y2),
    4 / 3 * y * (3 + 3 * x2 - y2)
  ];
}

augustRaw.invert = function(x, y) {
  x *= 3 / 8, y *= 3 / 8;
  if (!x && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) > 1) return null;
  var x2 = x * x,
      y2 = y * y,
      s = 1 + x2 + y2,
      sin3Eta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])((s - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(s * s - 4 * y * y)) / 2),
      eta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sin3Eta) / 3,
      xi = sin3Eta ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["arcosh"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y / sin3Eta)) / 3 : Object(_math__WEBPACK_IMPORTED_MODULE_1__["arsinh"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x)) / 3,
      cosEta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(eta),
      coshXi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cosh"])(xi),
      d = coshXi * coshXi - cosEta * cosEta;
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sinh"])(xi) * cosEta, 0.25 - d),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(coshXi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(eta), 0.25 + d)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(augustRaw)
      .scale(66.1603);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/baker.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/baker.js ***!
  \*****************************************************/
/*! exports provided: bakerRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bakerRaw", function() { return bakerRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var sqrt8 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(8),
    phi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(1 + _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"]);

function bakerRaw(lambda, phi) {
  var phi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi);
  return phi0 < _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]
      ? [lambda, Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(_math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] + phi / 2))]
      : [lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0) * (2 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"] - 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0)), Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * (2 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"] * (phi0 - _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]) - Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi0 / 2)))];
}

bakerRaw.invert = function(x, y) {
  if ((y0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y)) < phi0) return [x, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["exp"])(y)) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]];
  var phi = _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"], i = 25, delta, y0;
  do {
    var cosPhi_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi / 2), tanPhi_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi / 2);
    phi -= delta = (sqrt8 * (phi - _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]) - Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(tanPhi_2) - y0) / (sqrt8 - cosPhi_2 * cosPhi_2 / (2 * tanPhi_2));
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon2"] && --i > 0);
  return [x / (Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * (sqrt8 - 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi))), Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(bakerRaw)
      .scale(112.314);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/berghaus.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/berghaus.js ***!
  \********************************************************/
/*! exports provided: berghausRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "berghausRaw", function() { return berghausRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function berghausRaw(lobes) {
  var k = 2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lobes;

  function forward(lambda, phi) {
    var p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEquidistantRaw"])(lambda, phi);
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) > _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) { // back hemisphere
      var theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(p[1], p[0]),
          r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(p[0] * p[0] + p[1] * p[1]),
          theta0 = k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["round"])((theta - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) / k) + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
          α = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta -= theta0), 2 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta)); // angle relative to lobe end
      theta = theta0 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(α)) - α;
      p[0] = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta);
      p[1] = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta);
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y);
    if (r > _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) {
      var theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y, x),
          theta0 = k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["round"])((theta - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) / k) + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
          s = theta > theta0 ? -1 : 1,
          A = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta0 - theta),
          cotα = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(s * Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])((A - _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] - 2 * A) + r * r)));
      theta = theta0 + 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])((cotα + s * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(cotα * cotα - 3)) / 3);
      x = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta), y = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta);
    }
    return d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEquidistantRaw"].invert(x, y);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var lobes = 5,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(berghausRaw),
      p = m(lobes),
      projectionStream = p.stream,
      epsilon = 1e-2,
      cr = -Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(epsilon * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]),
      sr = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(epsilon * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);

  p.lobes = function(_) {
    return arguments.length ? m(lobes = +_) : lobes;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = projectionStream(stream),
        sphereStream = (p.rotate([0, 0]), projectionStream(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 360 / lobes, delta0 = 2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lobes, phi = 90 - 180 / lobes, phi0 = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]; i < lobes; ++i, phi -= delta, phi0 -= delta0) {
        sphereStream.point(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(sr * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0), cr) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sr * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0)) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]);
        if (phi < -90) {
          sphereStream.point(-90, -180 - phi - epsilon);
          sphereStream.point(-90, -180 - phi + epsilon);
        } else {
          sphereStream.point(90, phi + epsilon);
          sphereStream.point(90, phi - epsilon);
        }
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(87.8076)
      .center([0, 17.1875])
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/boggs.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/boggs.js ***!
  \*****************************************************/
/*! exports provided: boggsRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boggsRaw", function() { return boggsRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");




var k = 2.00276,
    w = 1.11072;

function boggsRaw(lambda, phi) {
  var theta = Object(_mollweide__WEBPACK_IMPORTED_MODULE_1__["mollweideBromleyTheta"])(_math__WEBPACK_IMPORTED_MODULE_2__["pi"], phi);
  return [k * lambda / (1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) + w / Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(theta)), (phi + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(theta)) / k];
}

boggsRaw.invert = function(x, y) {
  var ky = k * y, theta = y < 0 ? -_math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"] : _math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"], i = 25, delta, phi;
  do {
    phi = ky - _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(theta);
    theta -= delta = (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(2 * theta) + 2 * theta - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi)) / (2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(2 * theta) + 2 + _math__WEBPACK_IMPORTED_MODULE_2__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) * _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(theta));
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && --i > 0);
  phi = ky - _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(theta);
  return [x * (1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) + w / Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(theta)) / k, phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(boggsRaw)
      .scale(160.857);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bonne.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/bonne.js ***!
  \*****************************************************/
/*! exports provided: bonneRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonneRaw", function() { return bonneRaw; });
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _sinusoidal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sinusoidal */ "./node_modules/d3-geo-projection/src/sinusoidal.js");




function bonneRaw(phi0) {
  if (!phi0) return _sinusoidal__WEBPACK_IMPORTED_MODULE_2__["sinusoidalRaw"];
  var cotPhi0 = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi0);

  function forward(lambda, phi) {
    var rho = cotPhi0 + phi0 - phi,
        e = rho ? lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) / rho : rho;
    return [rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(e), cotPhi0 - rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(e)];
  }

  forward.invert = function(x, y) {
    var rho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + (y = cotPhi0 - y) * y),
        phi = cotPhi0 + phi0 - rho;
    return [rho / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x, y), phi];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_0__["default"])(bonneRaw)
      .scale(123.082)
      .center([0, 26.1441])
      .parallel(45);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bottomley.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/bottomley.js ***!
  \*********************************************************/
/*! exports provided: bottomleyRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomleyRaw", function() { return bottomleyRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function bottomleyRaw(sinPsi) {

  function forward(lambda, phi) {
    var rho = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - phi,
        eta = rho ? lambda * sinPsi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rho) / rho : rho;
    return [rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(eta) / sinPsi, _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(eta)];
  }

  forward.invert = function(x, y) {
    var x1 = x * sinPsi,
        y1 = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - y,
        rho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x1 * x1 + y1 * y1),
        eta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x1, y1);
    return [(rho ? rho / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rho) : 1) * eta / sinPsi, _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - rho];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var sinPsi = 0.5,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(bottomleyRaw),
      p = m(sinPsi);

  p.fraction = function(_) {
    return arguments.length ? m(sinPsi = +_) : sinPsi;
  };

  return p
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bromley.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/bromley.js ***!
  \*******************************************************/
/*! exports provided: bromleyRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bromleyRaw", function() { return bromleyRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");




var bromleyRaw = Object(_mollweide__WEBPACK_IMPORTED_MODULE_2__["mollweideBromleyRaw"])(1, 4 / _math__WEBPACK_IMPORTED_MODULE_1__["pi"], _math__WEBPACK_IMPORTED_MODULE_1__["pi"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(bromleyRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/chamberlin.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/chamberlin.js ***!
  \**********************************************************/
/*! exports provided: chamberlinRaw, chamberlinAfrica, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chamberlinRaw", function() { return chamberlinRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chamberlinAfrica", function() { return chamberlinAfrica; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chamberlin; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



// Azimuthal distance.
function distance(dPhi, c1, s1, c2, s2, dLambda) {
  var cosdLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(dLambda), r;
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dPhi) > 1 || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dLambda) > 1) {
    r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(s1 * s2 + c1 * c2 * cosdLambda);
  } else {
    var sindPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(dPhi / 2), sindLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(dLambda / 2);
    r = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(sindPhi * sindPhi + c1 * c2 * sindLambda * sindLambda));
  }
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(r) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [r, Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(c2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(dLambda), c1 * s2 - s1 * c2 * cosdLambda)] : [0, 0];
}

// Angle opposite a, and contained between sides of lengths b and c.
function angle(b, c, a) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])((b * b + c * c - a * a) / (2 * b * c));
}

// Normalize longitude.
function longitude(lambda) {
  return lambda - 2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["floor"])((lambda + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / (2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]));
}

function chamberlinRaw(p0, p1, p2) {
  var points = [
    [p0[0], p0[1], Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(p0[1]), Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(p0[1])],
    [p1[0], p1[1], Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(p1[1]), Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(p1[1])],
    [p2[0], p2[1], Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(p2[1]), Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(p2[1])]
  ];

  for (var a = points[2], b, i = 0; i < 3; ++i, a = b) {
    b = points[i];
    a.v = distance(b[1] - a[1], a[3], a[2], b[3], b[2], b[0] - a[0]);
    a.point = [0, 0];
  }

  var beta0 = angle(points[0].v[0], points[2].v[0], points[1].v[0]),
      beta1 = angle(points[0].v[0], points[1].v[0], points[2].v[0]),
      beta2 = _math__WEBPACK_IMPORTED_MODULE_1__["pi"] - beta0;

  points[2].point[1] = 0;
  points[0].point[0] = -(points[1].point[0] = points[0].v[0] / 2);

  var mean = [
    points[2].point[0] = points[0].point[0] + points[2].v[0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(beta0),
    2 * (points[0].point[1] = points[1].point[1] = points[2].v[0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(beta0))
  ];

  function forward(lambda, phi) {
    var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        v = new Array(3), i;

    // Compute distance and azimuth from control points.
    for (i = 0; i < 3; ++i) {
      var p = points[i];
      v[i] = distance(phi - p[1], p[3], p[2], cosPhi, sinPhi, lambda - p[0]);
      if (!v[i][0]) return p.point;
      v[i][1] = longitude(v[i][1] - p.v[1]);
    }

    // Arithmetic mean of interception points.
    var point = mean.slice();
    for (i = 0; i < 3; ++i) {
      var j = i == 2 ? 0 : i + 1;
      var a = angle(points[i].v[0], v[i][0], v[j][0]);
      if (v[i][1] < 0) a = -a;

      if (!i) {
        point[0] += v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(a);
        point[1] -= v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(a);
      } else if (i == 1) {
        a = beta1 - a;
        point[0] -= v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(a);
        point[1] -= v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(a);
      } else {
        a = beta2 - a;
        point[0] += v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(a);
        point[1] += v[i][0] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(a);
      }
    }

    point[0] /= 3, point[1] /= 3;
    return point;
  }

  return forward;
}

function pointRadians(p) {
  return p[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], p[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], p;
}

function chamberlinAfrica() {
  return chamberlin([0, 22], [45, 22], [22.5, -22])
      .scale(380)
      .center([22.5, 2]);
}

function chamberlin(p0, p1, p2) { // TODO order matters!
  var c = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCentroid"])({type: "MultiPoint", coordinates: [p0, p1, p2]}),
      R = [-c[0], -c[1]],
      r = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoRotation"])(R),
      p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(chamberlinRaw(pointRadians(r(p0)), pointRadians(r(p1)), pointRadians(r(p2)))).rotate(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/collignon.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/collignon.js ***!
  \*********************************************************/
/*! exports provided: collignonRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collignonRaw", function() { return collignonRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function collignonRaw(lambda, phi) {
  var alpha = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi));
  return [(2 / _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"]) * lambda * alpha, _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] * (1 - alpha)];
}

collignonRaw.invert = function(x, y) {
  var lambda = (lambda = y / _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] - 1) * lambda;
  return [lambda > 0 ? x * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lambda) / 2 : 0, Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(1 - lambda)];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(collignonRaw)
      .scale(95.6464)
      .center([0, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/craig.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/craig.js ***!
  \*****************************************************/
/*! exports provided: craigRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "craigRaw", function() { return craigRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");



function craigRaw(phi0) {
  var tanPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi0);

  function forward(lambda, phi) {
    return [lambda, (lambda ? lambda / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda) : 1) * (Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda) - tanPhi0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi))];
  }

  forward.invert = tanPhi0 ? function(x, y) {
    if (x) y *= Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / x;
    var cosλ = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x);
    return [x, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(cosλ * cosλ + tanPhi0 * tanPhi0 - y * y) - cosλ, tanPhi0 - y)];
  } : function(x, y) {
    return [x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(x ? y * Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(x) / x : y)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_1__["default"])(craigRaw)
      .scale(249.828)
      .clipAngle(90);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/craster.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/craster.js ***!
  \*******************************************************/
/*! exports provided: crasterRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crasterRaw", function() { return crasterRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var sqrt3 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3);

function crasterRaw(lambda, phi) {
  return [sqrt3 * lambda * (2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(2 * phi / 3) - 1) / _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"], sqrt3 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi / 3)];
}

crasterRaw.invert = function(x, y) {
  var phi = 3 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y / (sqrt3 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"]));
  return [_math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] * x / (sqrt3 * (2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(2 * phi / 3) - 1)), phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(crasterRaw)
      .scale(156.19);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/cylindricalEqualArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/cylindricalEqualArea.js ***!
  \********************************************************************/
/*! exports provided: cylindricalEqualAreaRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cylindricalEqualAreaRaw", function() { return cylindricalEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");



function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(y * cosPhi0)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_1__["default"])(cylindricalEqualAreaRaw)
      .parallel(38.58) // acos(sqrt(width / height / pi)) * radians
      .scale(195.044); // width / (sqrt(width / height / pi) * 2 * pi)
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/cylindricalStereographic.js":
/*!************************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/cylindricalStereographic.js ***!
  \************************************************************************/
/*! exports provided: cylindricalStereographicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cylindricalStereographicRaw", function() { return cylindricalStereographicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");



function cylindricalStereographicRaw(phi0) {
  var cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, (1 + cosPhi0) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi / 2)];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(y / (1 + cosPhi0)) * 2];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_1__["default"])(cylindricalStereographicRaw)
      .scale(124.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert1.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert1.js ***!
  \*******************************************************/
/*! exports provided: eckert1Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert1Raw", function() { return eckert1Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert1Raw(lambda, phi) {
  var alpha = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(8 / (3 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]));
  return [
    alpha * lambda * (1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]),
    alpha * phi
  ];
}

eckert1Raw.invert = function(x, y) {
  var alpha = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(8 / (3 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"])),
      phi = y / alpha;
  return [
    x / (alpha * (1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) / _math__WEBPACK_IMPORTED_MODULE_1__["pi"])),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert1Raw)
      .scale(165.664);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert2.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert2.js ***!
  \*******************************************************/
/*! exports provided: eckert2Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert2Raw", function() { return eckert2Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert2Raw(lambda, phi) {
  var alpha = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(4 - 3 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi)));
  return [
    2 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(6 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) * lambda * alpha,
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 3) * (2 - alpha)
  ];
}

eckert2Raw.invert = function(x, y) {
  var alpha = 2 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 3);
  return [
    x * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(6 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / (2 * alpha),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((4 - alpha * alpha) / 3)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert2Raw)
      .scale(165.664);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert3.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert3.js ***!
  \*******************************************************/
/*! exports provided: eckert3Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert3Raw", function() { return eckert3Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert3Raw(lambda, phi) {
  var k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]));
  return [
    2 / k * lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - 4 * phi * phi / (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]))),
    4 / k * phi
  ];
}

eckert3Raw.invert = function(x, y) {
  var k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])) / 2;
  return [
    x * k / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - y * y * (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / (4 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]))),
    y * k / 2
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert3Raw)
      .scale(180.739);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert4.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert4.js ***!
  \*******************************************************/
/*! exports provided: eckert4Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert4Raw", function() { return eckert4Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert4Raw(lambda, phi) {
  var k = (2 + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
  phi /= 2;
  for (var i = 0, delta = Infinity; i < 10 && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; i++) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
    phi -= delta = (phi + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) * (cosPhi + 2) - k) / (2 * cosPhi * (1 + cosPhi));
  }
  return [
    2 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])) * lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)),
    2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)
  ];
}

eckert4Raw.invert = function(x, y) {
  var A = y * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])((4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / 2,
      k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(A),
      c = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(k);
  return [
    x / (2 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])) * (1 + c)),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((k + A * (c + 2)) / (2 + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert4Raw)
      .scale(180.739);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert5.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert5.js ***!
  \*******************************************************/
/*! exports provided: eckert5Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert5Raw", function() { return eckert5Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert5Raw(lambda, phi) {
  return [
    lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]),
    2 * phi / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])
  ];
}

eckert5Raw.invert = function(x, y) {
  var k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]),
      phi = y * k / 2;
  return [
    k * x / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert5Raw)
      .scale(173.044);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert6.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eckert6.js ***!
  \*******************************************************/
/*! exports provided: eckert6Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eckert6Raw", function() { return eckert6Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function eckert6Raw(lambda, phi) {
  var k = (1 + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
  for (var i = 0, delta = Infinity; i < 10 && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; i++) {
    phi -= delta = (phi + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) - k) / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi));
  }
  k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]);
  return [
    lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)) / k,
    2 * phi / k
  ];
}

eckert6Raw.invert = function(x, y) {
  var j = 1 + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(j / 2);
  return [
    x * 2 * k / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y *= k)),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((y + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(y)) / j)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eckert6Raw)
      .scale(173.044);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eisenlohr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/eisenlohr.js ***!
  \*********************************************************/
/*! exports provided: eisenlohrRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eisenlohrRaw", function() { return eisenlohrRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _august__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./august */ "./node_modules/d3-geo-projection/src/august.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");




var eisenlohrK = 3 + 2 * _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"];

function eisenlohrRaw(lambda, phi) {
  var s0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda /= 2),
      c0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi)),
      c1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi /= 2),
      t = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi) / (c1 + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * k),
      c = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(2 / (1 + t * t)),
      v = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])((_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c1 + (c0 + s0) * k) / (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c1 + (c0 - s0) * k));
  return [
    eisenlohrK * (c * (v - 1 / v) - 2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(v)),
    eisenlohrK * (c * t * (v + 1 / v) - 2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan"])(t))
  ];
}

eisenlohrRaw.invert = function(x, y) {
  if (!(p = _august__WEBPACK_IMPORTED_MODULE_1__["augustRaw"].invert(x / 1.2, y * 1.065))) return null;
  var lambda = p[0], phi = p[1], i = 20, p;
  x /= eisenlohrK, y /= eisenlohrK;
  do {
    var _0 = lambda / 2,
        _1 = phi / 2,
        s0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(_0),
        c0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(_0),
        s1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(_1),
        c1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(_1),
        cos1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi),
        k = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(cos1),
        t = s1 / (c1 + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * k),
        t2 = t * t,
        c = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(2 / (1 + t2)),
        v0 = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c1 + (c0 + s0) * k),
        v1 = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c1 + (c0 - s0) * k),
        v2 = v0 / v1,
        v = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(v2),
        vm1v = v - 1 / v,
        vp1v = v + 1 / v,
        fx = c * vm1v - 2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(v) - x,
        fy = c * t * vp1v - 2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan"])(t) - y,
        deltatDeltaLambda = s1 && _math__WEBPACK_IMPORTED_MODULE_2__["sqrt1_2"] * k * s0 * t2 / s1,
        deltatDeltaPhi = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * c1 + k) / (2 * (c1 + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * k) * (c1 + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * k) * k),
        deltacDeltat = -0.5 * t * c * c * c,
        deltacDeltaLambda = deltacDeltat * deltatDeltaLambda,
        deltacDeltaPhi = deltacDeltat * deltatDeltaPhi,
        A = (A = 2 * c1 + _math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * k * (c0 - s0)) * A * v,
        deltavDeltaLambda = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * c0 * c1 * k + cos1) / A,
        deltavDeltaPhi = -(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] * s0 * s1) / (k * A),
        deltaxDeltaLambda = vm1v * deltacDeltaLambda - 2 * deltavDeltaLambda / v + c * (deltavDeltaLambda + deltavDeltaLambda / v2),
        deltaxDeltaPhi = vm1v * deltacDeltaPhi - 2 * deltavDeltaPhi / v + c * (deltavDeltaPhi + deltavDeltaPhi / v2),
        deltayDeltaLambda = t * vp1v * deltacDeltaLambda - 2 * deltatDeltaLambda / (1 + t2) + c * vp1v * deltatDeltaLambda + c * t * (deltavDeltaLambda - deltavDeltaLambda / v2),
        deltayDeltaPhi = t * vp1v * deltacDeltaPhi - 2 * deltatDeltaPhi / (1 + t2) + c * vp1v * deltatDeltaPhi + c * t * (deltavDeltaPhi - deltavDeltaPhi / v2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
    if (!denominator) break;
    var deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda;
    phi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(-_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"], Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"], phi - deltaPhi));
  } while ((Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(deltaLambda) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(deltaPhi) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && --i > 0);
  return Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(phi) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? [0, phi] : i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(eisenlohrRaw)
      .scale(62.5271);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/elliptic.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/elliptic.js ***!
  \********************************************************/
/*! exports provided: ellipticJi, ellipticJ, ellipticFi, ellipticF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipticJi", function() { return ellipticJi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipticJ", function() { return ellipticJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipticFi", function() { return ellipticFi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipticF", function() { return ellipticF; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");


// Returns [sn, cn, dn](u + iv|m).
function ellipticJi(u, v, m) {
  var a, b, c;
  if (!u) {
    b = ellipticJ(v, 1 - m);
    return [
      [0, b[0] / b[1]],
      [1 / b[1], 0],
      [b[2] / b[1], 0]
    ];
  }
  a = ellipticJ(u, m);
  if (!v) return [[a[0], 0], [a[1], 0], [a[2], 0]];
  b = ellipticJ(v, 1 - m);
  c = b[1] * b[1] + m * a[0] * a[0] * b[0] * b[0];
  return [
    [a[0] * b[2] / c, a[1] * a[2] * b[0] * b[1] / c],
    [a[1] * b[1] / c, -a[0] * a[2] * b[0] * b[2] / c],
    [a[2] * b[1] * b[2] / c, -m * a[0] * a[1] * b[0] / c]
  ];
}

// Returns [sn, cn, dn, ph](u|m).
function ellipticJ(u, m) {
  var ai, b, phi, t, twon;
  if (m < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    t = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(u);
    b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(u);
    ai = m * (u - t * b) / 4;
    return [
      t - ai * b,
      b + ai * t,
      1 - m * t * t / 2,
      u - ai
    ];
  }
  if (m >= 1 - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    ai = (1 - m) / 4;
    b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cosh"])(u);
    t = Object(_math__WEBPACK_IMPORTED_MODULE_0__["tanh"])(u);
    phi = 1 / b;
    twon = b * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sinh"])(u);
    return [
      t + ai * (twon - u) / (b * b),
      phi - ai * t * phi * (twon - u),
      phi + ai * t * phi * (twon + u),
      2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["exp"])(u)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + ai * (twon - u) / b
    ];
  }

  var a = [1, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(m), 0, 0, 0, 0, 0, 0, 0, 0],
      i = 0;
  b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(1 - m);
  twon = 1;

  while (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(c[i] / a[i]) > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] && i < 8) {
    ai = a[i++];
    c[i] = (ai - b) / 2;
    a[i] = (ai + b) / 2;
    b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(ai * b);
    twon *= 2;
  }

  phi = twon * a[i] * u;
  do {
    t = c[i] * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(b = phi) / a[i];
    phi = (Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(t) + phi) / 2;
  } while (--i);

  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi), t = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi), t / Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi - b), phi];
}

// Calculate F(phi+iPsi|m).
// See Abramowitz and Stegun, 17.4.11.
function ellipticFi(phi, psi, m) {
  var r = Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(phi),
      i = Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(psi),
      sinhPsi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sinh"])(i);
  if (r) {
    var cscPhi = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(r),
        cotPhi2 = 1 / (Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(r) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(r)),
        b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m),
        c = (m - 1) * cotPhi2,
        cotLambda2 = (-b + Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(b * b - 4 * c)) / 2;
    return [
      ellipticF(Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(1 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(cotLambda2)), m) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(phi),
      ellipticF(Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(psi)
    ];
  }
  return [
    0,
    ellipticF(Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(sinhPsi), 1 - m) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(psi)
  ];
}

// Calculate F(phi|m) where m = k² = sin²α.
// See Abramowitz and Stegun, 17.6.7.
function ellipticF(phi, m) {
  if (!m) return phi;
  if (m === 1) return Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi / 2 + _math__WEBPACK_IMPORTED_MODULE_0__["quarterPi"]));
  var a = 1,
      b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(1 - m),
      c = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(m);
  for (var i = 0; Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(c) > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; i++) {
    if (phi % _math__WEBPACK_IMPORTED_MODULE_0__["pi"]) {
      var dPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(b * Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi) / a);
      if (dPhi < 0) dPhi += _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
      phi += dPhi + ~~(phi / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]) * _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
    } else phi += phi;
    c = (a + b) / 2;
    b = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(a * b);
    c = ((a = c) - b) / 2;
  }
  return phi / (Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(2, i) * a);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/fahey.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/fahey.js ***!
  \*****************************************************/
/*! exports provided: faheyRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faheyRaw", function() { return faheyRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var faheyK = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(35 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);

function faheyRaw(lambda, phi) {
  var t = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi / 2);
  return [lambda * faheyK * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - t * t), (1 + faheyK) * t];
}

faheyRaw.invert = function(x, y) {
  var t = y / (1 + faheyK);
  return [x && x / (faheyK * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - t * t)), 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(t)];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(faheyRaw)
      .scale(137.152);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/foucaut.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/foucaut.js ***!
  \*******************************************************/
/*! exports provided: foucautRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foucautRaw", function() { return foucautRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function foucautRaw(lambda, phi) {
  var k = phi / 2, cosk = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(k);
  return [ 2 * lambda / _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * cosk * cosk, _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(k)];
}

foucautRaw.invert = function(x, y) {
  var k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(y / _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"]), cosk = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(k), phi = 2 * k;
  return [x * _math__WEBPACK_IMPORTED_MODULE_1__["sqrtPi"] / 2 / (Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * cosk * cosk), phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(foucautRaw)
      .scale(135.264);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gilbert.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/gilbert.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function gilbertForward(point) {
  return [point[0] / 2, Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(point[1] / 2 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"])) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]];
}

function gilbertInvert(point) {
  return [point[0] * 2, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(point[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"])) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]];
}

/* harmony default export */ __webpack_exports__["default"] = (function(projectionType) {
  if (projectionType == null) projectionType = d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoOrthographic"];
  var projection = projectionType(),
      equirectangular = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoEquirectangular"])().scale(_math__WEBPACK_IMPORTED_MODULE_1__["degrees"]).precision(0).clipAngle(null).translate([0, 0]); // antimeridian cutting

  function gilbert(point) {
    return projection(gilbertForward(point));
  }

  if (projection.invert) gilbert.invert = function(point) {
    return gilbertInvert(projection.invert(point));
  };

  gilbert.stream = function(stream) {
    var s1 = projection.stream(stream), s0 = equirectangular.stream({
      point: function(lambda, phi) { s1.point(lambda / 2, Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(-phi / 2 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"])) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]); },
      lineStart: function() { s1.lineStart(); },
      lineEnd: function() { s1.lineEnd(); },
      polygonStart: function() { s1.polygonStart(); },
      polygonEnd: function() { s1.polygonEnd(); }
    });
    s0.sphere = s1.sphere;
    return s0;
  };

  function property(name) {
    gilbert[name] = function(_) {
      return arguments.length ? (projection[name](_), gilbert) : projection[name]();
    };
  }

  gilbert.rotate = function(_) {
    return arguments.length ? (equirectangular.rotate(_), gilbert) : equirectangular.rotate();
  };

  gilbert.center = function(_) {
    return arguments.length ? (projection.center(gilbertForward(_)), gilbert) : gilbertInvert(projection.center());
  };

  property("clipAngle");
  property("clipExtent");
  property("scale");
  property("translate");
  property("precision");

  return gilbert
      .scale(249.5);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gingery.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/gingery.js ***!
  \*******************************************************/
/*! exports provided: gingeryRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gingeryRaw", function() { return gingeryRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function gingeryRaw(rho, n) {
  var k = 2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / n,
      rho2 = rho * rho;

  function forward(lambda, phi) {
    var p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEquidistantRaw"])(lambda, phi),
        x = p[0],
        y = p[1],
        r2 = x * x + y * y;

    if (r2 > rho2) {
      var r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(r2),
          theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y, x),
          theta0 = k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["round"])(theta / k),
          alpha = theta - theta0,
          rhoCosAlpha = rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(alpha),
          k_ = (rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(alpha) - alpha * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rhoCosAlpha)) / (_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - rhoCosAlpha),
          s_ = gingeryLength(alpha, k_),
          e = (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] - rho) / gingeryIntegrate(s_, rhoCosAlpha, _math__WEBPACK_IMPORTED_MODULE_1__["pi"]);

      x = r;
      var i = 50, delta;
      do {
        x -= delta = (rho + gingeryIntegrate(s_, rhoCosAlpha, x) * e - r) / (s_(x) * e);
      } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);

      y = alpha * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x);
      if (x < _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) y -= k_ * (x - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]);

      var s = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta0),
          c = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta0);
      p[0] = x * c - y * s;
      p[1] = x * s + y * c;
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r2 = x * x + y * y;
    if (r2 > rho2) {
      var r = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(r2),
          theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y, x),
          theta0 = k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["round"])(theta / k),
          dTheta = theta - theta0;

      x = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(dTheta);
      y = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(dTheta);

      var x_halfPi = x - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
          sinx = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(x),
          alpha = y / sinx,
          delta = x < _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] ? Infinity : 0,
          i = 10;

      while (true) {
        var rhosinAlpha = rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(alpha),
            rhoCosAlpha = rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(alpha),
            sinRhoCosAlpha = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rhoCosAlpha),
            halfPi_RhoCosAlpha = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - rhoCosAlpha,
            k_ = (rhosinAlpha - alpha * sinRhoCosAlpha) / halfPi_RhoCosAlpha,
            s_ = gingeryLength(alpha, k_);

        if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon2"] || !--i) break;

        alpha -= delta = (alpha * sinx - k_ * x_halfPi - y) / (
          sinx - x_halfPi * 2 * (
            halfPi_RhoCosAlpha * (rhoCosAlpha + alpha * rhosinAlpha * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(rhoCosAlpha) - sinRhoCosAlpha) -
            rhosinAlpha * (rhosinAlpha - alpha * sinRhoCosAlpha)
          ) / (halfPi_RhoCosAlpha * halfPi_RhoCosAlpha));
      }
      r = rho + gingeryIntegrate(s_, rhoCosAlpha, x) * (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] - rho) / gingeryIntegrate(s_, rhoCosAlpha, _math__WEBPACK_IMPORTED_MODULE_1__["pi"]);
      theta = theta0 + alpha;
      x = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta);
      y = r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta);
    }
    return d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEquidistantRaw"].invert(x, y);
  };

  return forward;
}

function gingeryLength(alpha, k) {
  return function(x) {
    var y_ = alpha * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(x);
    if (x < _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) y_ -= k;
    return Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 + y_ * y_);
  };
}

// Numerical integration: trapezoidal rule.
function gingeryIntegrate(f, a, b) {
  var n = 50,
      h = (b - a) / n,
      s = f(a) + f(b);
  for (var i = 1, x = a; i < n; ++i) s += 2 * f(x += h);
  return s * 0.5 * h;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var n = 6,
      rho = 30 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"],
      cRho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(rho),
      sRho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rho),
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(gingeryRaw),
      p = m(rho, n),
      stream_ = p.stream,
      epsilon = 1e-2,
      cr = -Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(epsilon * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]),
      sr = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(epsilon * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);

  p.radius = function(_) {
    if (!arguments.length) return rho * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
    cRho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(rho = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    sRho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rho);
    return m(rho, n);
  };

  p.lobes = function(_) {
    if (!arguments.length) return n;
    return m(rho, n = +_);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / n, phi = 0; i < n; ++i, phi -= delta) {
        sphereStream.point(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(sr * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi), cr) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sr * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]);
        sphereStream.point(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(sRho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi - delta / 2), cRho) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sRho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi - delta / 2)) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .rotate([90, -40])
      .scale(91.7095)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg4.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburg4.js ***!
  \*********************************************************/
/*! exports provided: ginzburg4Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ginzburg4Raw", function() { return ginzburg4Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ginzburgPolyconic */ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg4Raw = Object(_ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__["default"])(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(ginzburg4Raw)
      .scale(149.995);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg5.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburg5.js ***!
  \*********************************************************/
/*! exports provided: ginzburg5Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ginzburg5Raw", function() { return ginzburg5Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ginzburgPolyconic */ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg5Raw = Object(_ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__["default"])(2.583819, -0.835827, 0.170354, -0.038094, 1.543313, -0.411435,0.082742);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(ginzburg5Raw)
      .scale(153.93);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg6.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburg6.js ***!
  \*********************************************************/
/*! exports provided: ginzburg6Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ginzburg6Raw", function() { return ginzburg6Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ginzburgPolyconic */ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");




var ginzburg6Raw = Object(_ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__["default"])(5 / 6 * _math__WEBPACK_IMPORTED_MODULE_2__["pi"], -0.62636, -0.0344, 0, 1.3493, -0.05524, 0, 0.045);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(ginzburg6Raw)
      .scale(130.945);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg8.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburg8.js ***!
  \*********************************************************/
/*! exports provided: ginzburg8Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ginzburg8Raw", function() { return ginzburg8Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function ginzburg8Raw(lambda, phi) {
  var lambda2 = lambda * lambda,
      phi2 = phi * phi;
  return [
    lambda * (1 - 0.162388 * phi2) * (0.87 - 0.000952426 * lambda2 * lambda2),
    phi * (1 + phi2 / 12)
  ];
}

ginzburg8Raw.invert = function(x, y) {
  var lambda = x,
      phi = y,
      i = 50, delta;
  do {
    var phi2 = phi * phi;
    phi -= delta = (phi * (1 + phi2 / 12) - y) / (1 + phi2 / 4);
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  i = 50;
  x /= 1 -0.162388 * phi2;
  do {
    var lambda4 = (lambda4 = lambda * lambda) * lambda4;
    lambda -= delta = (lambda * (0.87 - 0.000952426 * lambda4) - x) / (0.87 - 0.00476213 * lambda4);
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(ginzburg8Raw)
      .scale(131.747);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg9.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburg9.js ***!
  \*********************************************************/
/*! exports provided: ginzburg9Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ginzburg9Raw", function() { return ginzburg9Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ginzburgPolyconic */ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg9Raw = Object(_ginzburgPolyconic__WEBPACK_IMPORTED_MODULE_1__["default"])(2.6516, -0.76534, 0.19123, -0.047094, 1.36289, -0.13965,0.031762);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(ginzburg9Raw)
      .scale(131.087);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/ginzburgPolyconic.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f, g, h) {
  if (arguments.length < 8) h = 0;

  function forward(lambda, phi) {
    if (!phi) return [a * lambda / _math__WEBPACK_IMPORTED_MODULE_0__["pi"], 0];
    var phi2 = phi * phi,
        xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
        yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
        m = (xB * xB + yB * yB) / (2 * yB),
        alpha = lambda * Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(xB / m) / _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
    return [m * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(alpha), phi * (1 + phi2 * h) + m * (1 - Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(alpha))];
  }

  forward.invert = function(x, y) {
    var lambda = _math__WEBPACK_IMPORTED_MODULE_0__["pi"] * x / a,
        phi = y,
        deltaLambda, deltaPhi, i = 50;
    do {
      var phi2 = phi * phi,
          xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
          yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
          p = xB * xB + yB * yB,
          q = 2 * yB,
          m = p / q,
          m2 = m * m,
          dAlphadLambda = Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(xB / m) / _math__WEBPACK_IMPORTED_MODULE_0__["pi"],
          alpha = lambda * dAlphadLambda,
          xB2 = xB * xB,
          dxBdPhi = (2 * b + phi2 * (4 * c + phi2 * 6 * d)) * phi,
          dyBdPhi = e + phi2 * (3 * f + phi2 * 5 * g),
          dpdPhi = 2 * (xB * dxBdPhi + yB * (dyBdPhi - 1)),
          dqdPhi = 2 * (dyBdPhi - 1),
          dmdPhi = (dpdPhi * q - p * dqdPhi) / (q * q),
          cosAlpha = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(alpha),
          sinAlpha = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(alpha),
          mcosAlpha = m * cosAlpha,
          msinAlpha = m * sinAlpha,
          dAlphadPhi = ((lambda / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]) * (1 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(1 - xB2 / m2)) * (dxBdPhi * m - xB * dmdPhi)) / m2,
          fx = msinAlpha - x,
          fy = phi * (1 + phi2 * h) + m - mcosAlpha - y,
          deltaxDeltaPhi = dmdPhi * sinAlpha + mcosAlpha * dAlphadPhi,
          deltaxDeltaLambda = mcosAlpha * dAlphadLambda,
          deltayDeltaPhi = 1 + dmdPhi - (dmdPhi * cosAlpha - msinAlpha * dAlphadPhi),
          deltayDeltaLambda = msinAlpha * dAlphadLambda,
          denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
      if (!denominator) break;
      lambda -= deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator;
      phi -= deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    } while ((Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(deltaLambda) > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(deltaPhi) > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) && --i > 0);
    return [lambda, phi];
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gringorten.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/gringorten.js ***!
  \**********************************************************/
/*! exports provided: gringortenRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gringortenRaw", function() { return gringortenRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./square */ "./node_modules/d3-geo-projection/src/square.js");




function gringortenRaw(lambda, phi) {
  var sLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(lambda),
      sPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi),
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
      y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
      z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(sPhi * phi);
  lambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y, z));
  phi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x);
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda %= _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
  var point = gringortenHexadecant(lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4 ? _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - lambda : lambda, phi);
  if (lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4) z = point[0], point[0] = -point[1], point[1] = -z;
  return (point[0] *= sLambda, point[1] *= -sPhi, point);
}

gringortenRaw.invert = function(x, y) {
  var sx = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x),
      sy = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y),
      x0 = -sx * x,
      y0 = -sy * y,
      t = y0 / x0 < 1,
      p = gringortenHexadecantInvert(t ? y0 : x0, t ? x0 : y0),
      lambda = p[0],
      phi = p[1],
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
  if (t) lambda = -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - lambda;
  return [sx * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi, -Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)) + _math__WEBPACK_IMPORTED_MODULE_1__["pi"]), sy * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi)];
};

function gringortenHexadecant(lambda, phi) {
  if (phi === _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) return [0, 0];

  var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      r = sinPhi * sinPhi,
      r2 = r * r,
      j = 1 + r2,
      k = 1 + 3 * r2,
      q = 1 - r2,
      z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(j)),
      v = q + r * j * z,
      p2 = (1 - sinPhi) / v,
      p = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(p2),
      a2 = p2 * j,
      a = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2),
      h = p * q,
      x,
      i;

  if (lambda === 0) return [0, -(h + r * a)];

  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * k) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = (0.5 * dp2dPhi) / p,
      dhdPhi = q * dpdPhi - 2 * r * p * drdPhi,
      dra2dPhi = r * j * dp2dPhi + p2 * k * drdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * dra2dPhi,
      zeta = -2 * secPhi * dhdPhi,
      lambda1 = 4 * lambda / _math__WEBPACK_IMPORTED_MODULE_1__["pi"],
      delta;

  // Slower but accurate bisection method.
  if (lambda > 0.222 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] || phi < _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4 && lambda > 0.175 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) {
    x = (h + r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2 * (1 + r2) - h * h)) / (1 + r2);
    if (lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4) return [x, x];
    var x1 = x, x0 = 0.5 * x;
    x = 0.5 * (x0 + x1), i = 50;
    do {
      var g = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2 - x * x),
          f = (x * (zeta + mu * g) + nu * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x / a)) - lambda1;
      if (!f) break;
      if (f < 0) x0 = x;
      else x1 = x;
      x = 0.5 * (x0 + x1);
    } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x1 - x0) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  }

  // Newton-Raphson.
  else {
    x = _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"], i = 25;
    do {
      var x2 = x * x,
          g2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2 - x2),
          zetaMug = zeta + mu * g2,
          f2 = x * zetaMug + nu * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x / a) - lambda1,
          df = zetaMug + (nu - mu * x2) / g2;
      x -= delta = g2 ? f2 / df : 0;
    } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  }

  return [x, -h - r * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2 - x * x)];
}

function gringortenHexadecantInvert(x, y) {
  var x0 = 0,
      x1 = 1,
      r = 0.5,
      i = 50;

  while (true) {
    var r2 = r * r,
        sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(r),
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 + r2)),
        v = (1 - r2) + r * (1 + r2) * z,
        p2 = (1 - sinPhi) / v,
        p = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(p2),
        a2 = p2 * (1 + r2),
        h = p * (1 - r2),
        g2 = a2 - x * x,
        g = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(g2),
        y0 = y + h + r * g;
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x1 - x0) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon2"] || --i === 0 || y0 === 0) break;
    if (y0 > 0) x0 = r;
    else x1 = r;
    r = 0.5 * (x0 + x1);
  }

  if (!i) return null;

  var phi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinPhi),
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * (1 + 3 * r2)) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = 0.5 * dp2dPhi / p,
      dhdPhi = (1 - r2) * dpdPhi - 2 * r * p * drdPhi,
      zeta = -2 * secPhi * dhdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * (r * (1 + r2) * dp2dPhi + p2 * (1 + 3 * r2) * drdPhi);

  return [_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4 * (x * (zeta + mu * g) + nu * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a2))), phi];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(Object(_square__WEBPACK_IMPORTED_MODULE_2__["default"])(gringortenRaw))
      .scale(239.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/guyou.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/guyou.js ***!
  \*****************************************************/
/*! exports provided: guyouRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guyouRaw", function() { return guyouRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _elliptic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elliptic */ "./node_modules/d3-geo-projection/src/elliptic.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./square */ "./node_modules/d3-geo-projection/src/square.js");





function guyouRaw(lambda, phi) {
  var k_ = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] - 1) / (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] + 1),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(1 - k_ * k_),
      K = Object(_elliptic__WEBPACK_IMPORTED_MODULE_1__["ellipticF"])(_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"], k * k),
      f = -1,
      psi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["tan"])(_math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 4 + Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(phi) / 2)),
      r = Object(_math__WEBPACK_IMPORTED_MODULE_2__["exp"])(f * psi) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(k_),
      at = guyouComplexAtan(r * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(f * lambda), r * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(f * lambda)),
      t = Object(_elliptic__WEBPACK_IMPORTED_MODULE_1__["ellipticFi"])(at[0], at[1], k * k);
  return [-t[1], (phi >= 0 ? 1 : -1) * (0.5 * K - t[0])];
}

function guyouComplexAtan(x, y) {
  var x2 = x * x,
      y_1 = y + 1,
      t = 1 - x2 - y * y;
  return [
   0.5 * ((x >= 0 ? _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] : -_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"]) - Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t, 2 * x)),
    -0.25 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(t * t + 4 * x2) +0.5 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(y_1 * y_1 + x2)
  ];
}

function guyouComplexDivide(a, b) {
  var denominator = b[0] * b[0] + b[1] * b[1];
  return [
    (a[0] * b[0] + a[1] * b[1]) / denominator,
    (a[1] * b[0] - a[0] * b[1]) / denominator
  ];
}

guyouRaw.invert = function(x, y) {
  var k_ = (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] - 1) / (_math__WEBPACK_IMPORTED_MODULE_2__["sqrt2"] + 1),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(1 - k_ * k_),
      K = Object(_elliptic__WEBPACK_IMPORTED_MODULE_1__["ellipticF"])(_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"], k * k),
      f = -1,
      j = Object(_elliptic__WEBPACK_IMPORTED_MODULE_1__["ellipticJi"])(0.5 * K - y, -x, k * k),
      tn = guyouComplexDivide(j[0], j[1]),
      lambda = Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(tn[1], tn[0]) / f;
  return [
    lambda,
    2 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["exp"])(0.5 / f * Object(_math__WEBPACK_IMPORTED_MODULE_2__["log"])(k_ * tn[0] * tn[0] + k_ * tn[1] * tn[1]))) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"]
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(Object(_square__WEBPACK_IMPORTED_MODULE_3__["default"])(guyouRaw))
      .scale(151.496);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hammer.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/hammer.js ***!
  \******************************************************/
/*! exports provided: hammerRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hammerRaw", function() { return hammerRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function hammerRaw(A, B) {
  if (arguments.length < 2) B = A;
  if (B === 1) return d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEqualAreaRaw"];
  if (B === Infinity) return hammerQuarticAuthalicRaw;

  function forward(lambda, phi) {
    var coordinates = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEqualAreaRaw"])(lambda / B, phi);
    coordinates[0] *= A;
    return coordinates;
  }

  forward.invert = function(x, y) {
    var coordinates = d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEqualAreaRaw"].invert(x / A, y);
    coordinates[0] *= B;
    return coordinates;
  };

  return forward;
}

function hammerQuarticAuthalicRaw(lambda, phi) {
  return [
    lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi /= 2),
    2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)
  ];
}

hammerQuarticAuthalicRaw.invert = function(x, y) {
  var phi = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y / 2);
  return [
    x * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi / 2) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var B = 2,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(hammerRaw),
      p = m(B);

  p.coefficient = function(_) {
    if (!arguments.length) return B;
    return m(B = +_);
  };

  return p
    .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hammerRetroazimuthal.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/hammerRetroazimuthal.js ***!
  \********************************************************************/
/*! exports provided: hammerRetroazimuthalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hammerRetroazimuthalRaw", function() { return hammerRetroazimuthalRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function hammerRetroazimuthalRaw(phi0) {
  var sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0),
      cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0),
      rotate = hammerRetroazimuthalRotation(phi0);

  rotate.invert = hammerRetroazimuthalRotation(-phi0);

  function forward(lambda, phi) {
    var p = rotate(lambda, phi);
    lambda = p[0], phi = p[1];
    var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        cosLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda),
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda),
        sinz = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(z),
        K = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(sinz) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? z / sinz : 1;
    return [
      K * cosPhi0 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
      (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) > _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] ? K : -K) // rotate for back hemisphere
        * (sinPhi0 * cosPhi - cosPhi0 * sinPhi * cosLambda)
    ];
  }

  forward.invert = function(x, y) {
    var rho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y),
        sinz = -Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(rho),
        cosz = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(rho),
        a = rho * cosz,
        b = -y * sinz,
        c = rho * sinPhi0,
        d = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a * a + b * b - c * c),
        phi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(a * c + b * d, b * c - a * d),
        lambda = (rho > _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x * sinz, rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * cosz + y * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) * sinz);
    return rotate.invert(lambda, phi);
  };

  return forward;
}

// Latitudinal rotation by phi0.
// Temporary hack until D3 supports arbitrary small-circle clipping origins.
function hammerRetroazimuthalRotation(phi0) {
  var sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0),
      cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0);

  return function(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y, x * cosPhi0 - z * sinPhi0),
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(z * cosPhi0 + x * sinPhi0)
    ];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var phi0 = 0,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(hammerRetroazimuthalRaw),
      p = m(phi0),
      rotate_ = p.rotate,
      stream_ = p.stream,
      circle = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCircle"])();

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
    var r = p.rotate();
    return m(phi0 = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]).rotate(r);
  };

  // Temporary hack; see hammerRetroazimuthalRotation.
  p.rotate = function(_) {
    if (!arguments.length) return (_ = rotate_.call(p), _[1] += phi0 * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], _);
    rotate_.call(p, [_[0], _[1] - phi0 * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]]);
    circle.center([-_[0], -_[1]]);
    return p;
  };

  p.stream = function(stream) {
    stream = stream_(stream);
    stream.sphere = function() {
      stream.polygonStart();
      var epsilon = 1e-2,
          ring = circle.radius(90 - epsilon)().coordinates[0],
          n = ring.length - 1,
          i = -1,
          p;
      stream.lineStart();
      while (++i < n) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      ring = circle.radius(90 + epsilon)().coordinates[0];
      n = ring.length - 1;
      stream.lineStart();
      while (--i >= 0) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      stream.polygonEnd();
    };
    return stream;
  };

  return p
      .scale(79.4187)
      .parallel(45)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/healpix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/healpix.js ***!
  \*******************************************************/
/*! exports provided: healpixRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healpixRaw", function() { return healpixRaw; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _collignon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collignon */ "./node_modules/d3-geo-projection/src/collignon.js");
/* harmony import */ var _cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cylindricalEqualArea */ "./node_modules/d3-geo-projection/src/cylindricalEqualArea.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");






var healpixParallel = 41 + 48 / 36 + 37 / 3600, // for K=3; TODO automate
    healpixLambert = Object(_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_3__["cylindricalEqualAreaRaw"])(0);

function healpixRaw(H) {
  var phi0 = healpixParallel * _math__WEBPACK_IMPORTED_MODULE_4__["radians"],
      dx = Object(_collignon__WEBPACK_IMPORTED_MODULE_2__["collignonRaw"])(_math__WEBPACK_IMPORTED_MODULE_4__["pi"], phi0)[0] - Object(_collignon__WEBPACK_IMPORTED_MODULE_2__["collignonRaw"])(-_math__WEBPACK_IMPORTED_MODULE_4__["pi"], phi0)[0],
      y0 = healpixLambert(0, phi0)[1],
      y1 = Object(_collignon__WEBPACK_IMPORTED_MODULE_2__["collignonRaw"])(0, phi0)[1],
      dy1 = _math__WEBPACK_IMPORTED_MODULE_4__["sqrtPi"] - y1,
      k = _math__WEBPACK_IMPORTED_MODULE_4__["tau"] / H,
      w = 4 / _math__WEBPACK_IMPORTED_MODULE_4__["tau"],
      h = y0 + (dy1 * dy1 * 4) / _math__WEBPACK_IMPORTED_MODULE_4__["tau"];

  function forward(lambda, phi) {
    var point,
        phi2 = Object(_math__WEBPACK_IMPORTED_MODULE_4__["abs"])(phi);
    if (phi2 > phi0) {
      var i = Object(_math__WEBPACK_IMPORTED_MODULE_4__["min"])(H - 1, Object(_math__WEBPACK_IMPORTED_MODULE_4__["max"])(0, Object(_math__WEBPACK_IMPORTED_MODULE_4__["floor"])((lambda + _math__WEBPACK_IMPORTED_MODULE_4__["pi"]) / k)));
      lambda += _math__WEBPACK_IMPORTED_MODULE_4__["pi"] * (H - 1) / H - i * k;
      point = Object(_collignon__WEBPACK_IMPORTED_MODULE_2__["collignonRaw"])(lambda, phi2);
      point[0] = point[0] * _math__WEBPACK_IMPORTED_MODULE_4__["tau"] / dx - _math__WEBPACK_IMPORTED_MODULE_4__["tau"] * (H - 1) / (2 * H) + i * _math__WEBPACK_IMPORTED_MODULE_4__["tau"] / H;
      point[1] = y0 + (point[1] - y1) * 4 * dy1 / _math__WEBPACK_IMPORTED_MODULE_4__["tau"];
      if (phi < 0) point[1] = -point[1];
    } else {
      point = healpixLambert(lambda, phi);
    }
    point[0] *= w, point[1] /= h;
    return point;
  }

  forward.invert = function(x, y) {
    x /= w, y *= h;
    var y2 = Object(_math__WEBPACK_IMPORTED_MODULE_4__["abs"])(y);
    if (y2 > y0) {
      var i = Object(_math__WEBPACK_IMPORTED_MODULE_4__["min"])(H - 1, Object(_math__WEBPACK_IMPORTED_MODULE_4__["max"])(0, Object(_math__WEBPACK_IMPORTED_MODULE_4__["floor"])((x + _math__WEBPACK_IMPORTED_MODULE_4__["pi"]) / k)));
      x = (x + _math__WEBPACK_IMPORTED_MODULE_4__["pi"] * (H - 1) / H - i * k) * dx / _math__WEBPACK_IMPORTED_MODULE_4__["tau"];
      var point = _collignon__WEBPACK_IMPORTED_MODULE_2__["collignonRaw"].invert(x, 0.25 * (y2 - y0) * _math__WEBPACK_IMPORTED_MODULE_4__["tau"] / dy1 + y1);
      point[0] -= _math__WEBPACK_IMPORTED_MODULE_4__["pi"] * (H - 1) / H - i * k;
      if (y < 0) point[1] = -point[1];
      return point;
    }
    return healpixLambert.invert(x, y);
  };

  return forward;
}

function sphere(step) {
  return {
    type: "Polygon",
    coordinates: [
      Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(-180, 180 + step / 2, step).map(function(x, i) { return [x, i & 1 ? 90 - 1e-6 : healpixParallel]; })
      .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(180, -180 - step / 2, -step).map(function(x, i) { return [x, i & 1 ? -90 + 1e-6 : -healpixParallel]; }))
    ]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var H = 4,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoProjectionMutator"])(healpixRaw),
      p = m(H),
      stream_ = p.stream;

  p.lobes = function(_) {
    return arguments.length ? m(H = +_) : H;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoStream"])(sphere(180 / H), sphereStream); };
    return rotateStream;
  };

  return p
      .scale(239.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hill.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/hill.js ***!
  \****************************************************/
/*! exports provided: hillRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hillRaw", function() { return hillRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function hillRaw(K) {
  var L = 1 + K,
      sinBt = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(1 / L),
      Bt = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinBt),
      A = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / (B = _math__WEBPACK_IMPORTED_MODULE_1__["pi"] + 4 * Bt * L)),
      B,
      rho0 = 0.5 * A * (L + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(K * (2 + K))),
      K2 = K * K,
      L2 = L * L;

  function forward(lambda, phi) {
    var t = 1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        rho,
        omega;
    if (t && t < 2) {
      var theta = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] - phi, i = 25, delta;
      do {
        var sinTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta),
            cosTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta),
            Bt_Bt1 = Bt + Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(sinTheta, L - cosTheta),
            C = 1 + L2 - 2 * L * cosTheta;
        theta -= delta = (theta - K2 * Bt - L * sinTheta + C * Bt_Bt1 -0.5 * t * B) / (2 * L * sinTheta * Bt_Bt1);
      } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon2"] && --i > 0);
      rho = A * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(C);
      omega = lambda * Bt_Bt1 / _math__WEBPACK_IMPORTED_MODULE_1__["pi"];
    } else {
      rho = A * (K + t);
      omega = lambda * Bt / _math__WEBPACK_IMPORTED_MODULE_1__["pi"];
    }
    return [
      rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(omega),
      rho0 - rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(omega)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + (y -= rho0) * y,
        cosTheta = (1 + L2 - rho2 / (A * A)) / (2 * L),
        theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(cosTheta),
        sinTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta),
        Bt_Bt1 = Bt + Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(sinTheta, L - cosTheta);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(rho2)) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / Bt_Bt1,
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(1 - 2 * (theta - K2 * Bt - L * sinTheta + (1 + L2 - 2 * L * cosTheta) * Bt_Bt1) / B)
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var K = 1,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(hillRaw),
      p = m(K);

  p.ratio = function(_) {
    return arguments.length ? m(K = +_) : K;
  };

  return p
      .scale(167.774)
      .center([0, 18.67]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/homolosine.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/homolosine.js ***!
  \**********************************************************/
/*! exports provided: homolosineRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homolosineRaw", function() { return homolosineRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var _sinusoidal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sinusoidal */ "./node_modules/d3-geo-projection/src/sinusoidal.js");
/* harmony import */ var _sinuMollweide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sinuMollweide */ "./node_modules/d3-geo-projection/src/sinuMollweide.js");






function homolosineRaw(lambda, phi) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) > _sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweidePhi"]
      ? (lambda = Object(_mollweide__WEBPACK_IMPORTED_MODULE_2__["mollweideRaw"])(lambda, phi), lambda[1] -= phi > 0 ? _sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweideY"] : -_sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweideY"], lambda)
      : Object(_sinusoidal__WEBPACK_IMPORTED_MODULE_3__["sinusoidalRaw"])(lambda, phi);
}

homolosineRaw.invert = function(x, y) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) > _sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweidePhi"]
      ? _mollweide__WEBPACK_IMPORTED_MODULE_2__["mollweideRaw"].invert(x, y + (y > 0 ? _sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweideY"] : -_sinuMollweide__WEBPACK_IMPORTED_MODULE_4__["sinuMollweideY"]))
      : _sinusoidal__WEBPACK_IMPORTED_MODULE_3__["sinusoidalRaw"].invert(x, y);
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(homolosineRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/boggs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/boggs.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boggs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boggs */ "./node_modules/d3-geo-projection/src/boggs.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_boggs__WEBPACK_IMPORTED_MODULE_0__["boggsRaw"], lobes)
      .scale(160.857);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/homolosine.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/homolosine.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homolosine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homolosine */ "./node_modules/d3-geo-projection/src/homolosine.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_homolosine__WEBPACK_IMPORTED_MODULE_0__["homolosineRaw"], lobes)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");




function pointEqual(a, b) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a[0] - b[0]) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a[1] - b[1]) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
}

function interpolateLine(coordinates, m) {
  var i = -1,
      n = coordinates.length,
      p0 = coordinates[0],
      p1,
      dx,
      dy,
      resampled = [];
  while (++i < n) {
    p1 = coordinates[i];
    dx = (p1[0] - p0[0]) / m;
    dy = (p1[1] - p0[1]) / m;
    for (var j = 0; j < m; ++j) resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
    p0 = p1;
  }
  resampled.push(p1);
  return resampled;
}

function interpolateSphere(lobes) {
  var coordinates = [],
      lobe,
      lambda0, phi0, phi1,
      lambda2, phi2,
      i, n = lobes[0].length;

  // Northern Hemisphere
  for (i = 0; i < n; ++i) {
    lobe = lobes[0][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda0 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi0 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda0 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi1 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda2 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi1 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda2 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi2 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]]
    ], 30));
  }

  // Southern Hemisphere
  for (i = lobes[1].length - 1; i >= 0; --i) {
    lobe = lobes[1][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda2 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi2 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda2 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi1 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda0 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi1 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]],
      [lambda0 + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"], phi0 - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]]
    ], 30));
  }

  return {
    type: "Polygon",
    coordinates: [Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["merge"])(coordinates)]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(project, lobes) {
  var sphere = interpolateSphere(lobes);

  lobes = lobes.map(function(lobe) {
    return lobe.map(function(l) {
      return [
        [l[0][0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], l[0][1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"]],
        [l[1][0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], l[1][1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"]],
        [l[2][0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], l[2][1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"]]
      ];
    });
  });

  var bounds = lobes.map(function(lobe) {
    return lobe.map(function(l) {
      var x0 = project(l[0][0], l[0][1])[0],
          x1 = project(l[2][0], l[2][1])[0],
          y0 = project(l[1][0], l[0][1])[1],
          y1 = project(l[1][0], l[1][1])[1],
          t;
      if (y0 > y1) t = y0, y0 = y1, y1 = t;
      return [[x0, y0], [x1, y1]];
    });
  });

  function forward(lambda, phi) {
    var sign = phi < 0 ? -1 : +1, lobe = lobes[+(phi < 0)];
    for (var i = 0, n = lobe.length - 1; i < n && lambda > lobe[i][2][0]; ++i);
    var p = project(lambda - lobe[i][1][0], phi);
    p[0] += project(lobe[i][1][0], sign * phi > sign * lobe[i][0][1] ? lobe[i][0][1] : phi)[0];
    return p;
  }

  // Assumes mutually exclusive bounding boxes for lobes.
  if (project.invert) forward.invert = function(x, y) {
    var bound = bounds[+(y < 0)], lobe = lobes[+(y < 0)];
    for (var i = 0, n = bound.length; i < n; ++i) {
      var b = bound[i];
      if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
        var p = project.invert(x - project(lobe[i][1][0], 0)[0], y);
        p[0] += lobe[i][1][0];
        return pointEqual(forward(p[0], p[1]), [x, y]) ? p : null;
      }
    }
  };

  var p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoProjection"])(forward),
      stream_ = p.stream;

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoStream"])(sphere, sphereStream); };
    return rotateStream;
  };

  return p;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/mollweide.js":
/*!*********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/mollweide.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_mollweide__WEBPACK_IMPORTED_MODULE_0__["mollweideRaw"], lobes)
      .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/mollweideHemispheres.js":
/*!********************************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/mollweideHemispheres.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [ -90,  90], [   0,   0]],
  [[   0,   0], [  90,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [ -90, -90], [   0,   0]],
  [[   0,   0], [  90, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_mollweide__WEBPACK_IMPORTED_MODULE_0__["mollweideRaw"], lobes)
      .scale(169.529)
      .rotate([20, 0]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/sinuMollweide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/sinuMollweide.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinuMollweide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sinuMollweide */ "./node_modules/d3-geo-projection/src/sinuMollweide.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,  35], [ -30,  90], [   0,  35]],
  [[   0,  35], [  30,  90], [ 180,  35]]
], [ // southern hemisphere
  [[-180, -10], [-102, -90], [ -65, -10]],
  [[ -65, -10], [   5, -90], [  77, -10]],
  [[  77, -10], [ 103, -90], [ 180, -10]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_sinuMollweide__WEBPACK_IMPORTED_MODULE_0__["sinuMollweideRaw"], lobes)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/sinusoidal.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/interrupted/sinusoidal.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinusoidal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sinusoidal */ "./node_modules/d3-geo-projection/src/sinusoidal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-110,  90], [ -40,   0]],
  [[ -40,   0], [   0,  90], [  40,   0]],
  [[  40,   0], [ 110,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-110, -90], [ -40,   0]],
  [[ -40,   0], [   0, -90], [  40,   0]],
  [[  40,   0], [ 110, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_sinusoidal__WEBPACK_IMPORTED_MODULE_0__["sinusoidalRaw"], lobes)
      .scale(152.63)
      .rotate([-20, 0]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/kavrayskiy7.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/kavrayskiy7.js ***!
  \***********************************************************/
/*! exports provided: kavrayskiy7Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kavrayskiy7Raw", function() { return kavrayskiy7Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function kavrayskiy7Raw(lambda, phi) {
  return [3 / _math__WEBPACK_IMPORTED_MODULE_1__["tau"] * lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [_math__WEBPACK_IMPORTED_MODULE_1__["tau"] / 3 * x / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 3 - y * y), y];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(kavrayskiy7Raw)
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/lagrange.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/lagrange.js ***!
  \********************************************************/
/*! exports provided: lagrangeRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lagrangeRaw", function() { return lagrangeRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function lagrangeRaw(n) {

  function forward(lambda, phi) {
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [0, phi < 0 ? -2 : 2];
    var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        v = Object(_math__WEBPACK_IMPORTED_MODULE_1__["pow"])((1 + sinPhi) / (1 - sinPhi), n / 2),
        c = 0.5 * (v + 1 / v) + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda *= n);
    return [
      2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) / c,
      (v - 1 / v) / c
    ];
  }

  forward.invert = function(x, y) {
    var y0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y);
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y0 - 2) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return x ? null : [0, Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]];
    if (y0 > 2) return null;

    x /= 2, y /= 2;
    var x2 = x * x,
        y2 = y * y,
        t = 2 * y / (1 + x2 + y2); // tanh(nPhi)
    t = Object(_math__WEBPACK_IMPORTED_MODULE_1__["pow"])((1 + t) / (1 - t), 1 / n);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(2 * x, 1 - x2 - y2) / n,
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((t - 1) / (t + 1))
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var n = 0.5,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(lagrangeRaw),
      p = m(n);

  p.spacing = function(_) {
    return arguments.length ? m(n = +_) : n;
  };

  return p
      .scale(124.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/larrivee.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/larrivee.js ***!
  \********************************************************/
/*! exports provided: larriveeRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "larriveeRaw", function() { return larriveeRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var pi_sqrt2 = _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"];

function larriveeRaw(lambda, phi) {
  return [
    lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi))) / 2,
    phi / (Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi / 2) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda / 6))
  ];
}

larriveeRaw.invert = function(x, y) {
  var x0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x),
      y0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y),
      lambda = _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"],
      phi = _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
  if (y0 < pi_sqrt2) phi *= y0 / pi_sqrt2;
  else lambda += 6 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(pi_sqrt2 / y0);
  for (var i = 0; i < 25; i++) {
    var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        sqrtcosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)),
        sinPhi_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi / 2),
        cosPhi_2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi / 2),
        sinLambda_6 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda / 6),
        cosLambda_6 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda / 6),
        f0 = 0.5 * lambda * (1 + sqrtcosPhi) - x0,
        f1 = phi / (cosPhi_2 * cosLambda_6) - y0,
        df0dPhi = sqrtcosPhi ? -0.25 * lambda * sinPhi / sqrtcosPhi : 0,
        df0dLambda = 0.5 * (1 + sqrtcosPhi),
        df1dPhi = (1 +0.5 * phi * sinPhi_2 / cosPhi_2) / (cosPhi_2 * cosLambda_6),
        df1dLambda = (phi / cosPhi_2) * (sinLambda_6 / 6) / (cosLambda_6 * cosLambda_6),
        denom = df0dPhi * df1dLambda - df1dPhi * df0dLambda,
        dPhi = (f0 * df1dLambda - f1 * df0dLambda) / denom,
        dLambda = (f1 * df0dPhi - f0 * df1dPhi) / denom;
    phi -= dPhi;
    lambda -= dLambda;
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dPhi) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(dLambda) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) break;
  }
  return [x < 0 ? -lambda : lambda, y < 0 ? -phi : phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(larriveeRaw)
      .scale(97.2672);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/laskowski.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/laskowski.js ***!
  \*********************************************************/
/*! exports provided: laskowskiRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "laskowskiRaw", function() { return laskowskiRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function laskowskiRaw(lambda, phi) {
  var lambda2 = lambda * lambda, phi2 = phi * phi;
  return [
    lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)),
    phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032))
  ];
}

laskowskiRaw.invert = function(x, y) {
  var lambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"],
      phi = y / 2,
      i = 50;
  do {
    var lambda2 = lambda * lambda,
        phi2 = phi * phi,
        lambdaPhi = lambda * phi,
        fx = lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)) - x,
        fy = phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032)) - y,
        deltaxDeltaLambda = 0.975534 - phi2 * (0.119161 + 3 * lambda2 * 0.0143059 + phi2 * 0.0547009),
        deltaxDeltaPhi = -lambdaPhi * (2 * 0.119161 + 4 * 0.0547009 * phi2 + 2 * 0.0143059 * lambda2),
        deltayDeltaLambda = lambdaPhi * (2 * 0.0802894 + 4 * 0.000199025 * lambda2 + 2 * -0.02855 * phi2),
        deltayDeltaPhi = 1.00384 + lambda2 * (0.0802894 + 0.000199025 * lambda2) + phi2 * (3 * (0.0998909 - 0.02855 * lambda2) - 5 * 0.0491032 * phi2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda,
        deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda, phi -= deltaPhi;
  } while ((Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(deltaLambda) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(deltaPhi) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) && --i > 0);
  return i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(laskowskiRaw)
      .scale(139.98);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/littrow.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/littrow.js ***!
  \*******************************************************/
/*! exports provided: littrowRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "littrowRaw", function() { return littrowRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function littrowRaw(lambda, phi) {
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda)
  ];
}

littrowRaw.invert = function(x, y) {
  var x2 = x * x,
      y2 = y * y,
      y2_1 = y2 + 1,
      cosPhi = x
          ? _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])((y2_1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x2 * x2 + 2 * x2 * (y2 - 1) + y2_1 * y2_1)) / x2 + 1)
          : 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(y2_1);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x * cosPhi),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(cosPhi)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(littrowRaw)
      .scale(144.049)
      .clipAngle(90 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/loximuthal.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/loximuthal.js ***!
  \**********************************************************/
/*! exports provided: loximuthalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loximuthalRaw", function() { return loximuthalRaw; });
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function loximuthalRaw(phi0) {
  var cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0),
      tanPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(_math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] + phi0 / 2);

  function forward(lambda, phi) {
    var y = phi - phi0,
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? lambda * cosPhi0
            : Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x = _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] + phi / 2) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]
            ? 0 : lambda * y / Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(x) / tanPhi0);
    return [x, y];
  }

  forward.invert = function(x, y) {
    var lambda,
        phi = y + phi0;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? x / cosPhi0
          : (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda = _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] + phi / 2) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) ? 0
          : x * Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(lambda) / tanPhi0) / y,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_0__["default"])(loximuthalRaw)
      .parallel(40)
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/math.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/math.js ***!
  \****************************************************/
/*! exports provided: abs, atan, atan2, ceil, cos, exp, floor, log, max, min, pow, round, sign, sin, tan, epsilon, epsilon2, pi, halfPi, quarterPi, sqrt1_2, sqrt2, sqrtPi, tau, degrees, radians, sinci, asin, acos, sqrt, tanh, sinh, cosh, arsinh, arcosh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarterPi", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt1_2", function() { return sqrt1_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt2", function() { return sqrt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrtPi", function() { return sqrtPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinci", function() { return sinci; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tanh", function() { return tanh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinh", function() { return sinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosh", function() { return cosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arsinh", function() { return arsinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcosh", function() { return arcosh; });
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var max = Math.max;
var min = Math.min;
var pow = Math.pow;
var round = Math.round;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sin = Math.sin;
var tan = Math.tan;

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var sqrt1_2 = Math.SQRT1_2;
var sqrt2 = sqrt(2);
var sqrtPi = sqrt(pi);
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;

function sinci(x) {
  return x ? x / Math.sin(x) : 1;
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function sqrt(x) {
  return x > 0 ? Math.sqrt(x) : 0;
}

function tanh(x) {
  x = exp(2 * x);
  return (x - 1) / (x + 1);
}

function sinh(x) {
  return (exp(x) - exp(-x)) / 2;
}

function cosh(x) {
  return (exp(x) + exp(-x)) / 2;
}

function arsinh(x) {
  return log(x + sqrt(x * x + 1));
}

function arcosh(x) {
  return log(x + sqrt(x * x - 1));
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/miller.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/miller.js ***!
  \******************************************************/
/*! exports provided: millerRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millerRaw", function() { return millerRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function millerRaw(lambda, phi) {
  return [lambda, 1.25 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(_math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] + 0.4 * phi))];
}

millerRaw.invert = function(x, y) {
  return [x, 2.5 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["exp"])(0.8 * y)) - 0.625 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(millerRaw)
      .scale(108.318);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/modifiedStereographic.js":
/*!*********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/modifiedStereographic.js ***!
  \*********************************************************************/
/*! exports provided: modifiedStereographicRaw, modifiedStereographicAlaska, modifiedStereographicGs48, modifiedStereographicGs50, modifiedStereographicMiller, modifiedStereographicLee, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicRaw", function() { return modifiedStereographicRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicAlaska", function() { return modifiedStereographicAlaska; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicGs48", function() { return modifiedStereographicGs48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicGs50", function() { return modifiedStereographicGs50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicMiller", function() { return modifiedStereographicMiller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedStereographicLee", function() { return modifiedStereographicLee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modifiedStereographic; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function modifiedStereographicRaw(C) {
  var m = C.length - 1;

  function forward(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        k = 2 / (1 + cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda)),
        zr = k * cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
        zi = k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        i = m,
        w = C[i],
        ar = w[0],
        ai = w[1],
        t;
    while (--i >= 0) {
      w = C[i];
      ar = w[0] + zr * (t = ar) - zi * ai;
      ai = w[1] + zr * ai + zi * t;
    }
    ar = zr * (t = ar) - zi * ai;
    ai = zr * ai + zi * t;
    return [ar, ai];
  }

  forward.invert = function(x, y) {
    var i = 20,
        zr = x,
        zi = y;
    do {
      var j = m,
          w = C[j],
          ar = w[0],
          ai = w[1],
          br = 0,
          bi = 0,
          t;

      while (--j >= 0) {
        w = C[j];
        br = ar + zr * (t = br) - zi * bi;
        bi = ai + zr * bi + zi * t;
        ar = w[0] + zr * (t = ar) - zi * ai;
        ai = w[1] + zr * ai + zi * t;
      }
      br = ar + zr * (t = br) - zi * bi;
      bi = ai + zr * bi + zi * t;
      ar = zr * (t = ar) - zi * ai - x;
      ai = zr * ai + zi * t - y;

      var denominator = br * br + bi * bi, deltar, deltai;
      zr -= deltar = (ar * br + ai * bi) / denominator;
      zi -= deltai = (ai * br - ar * bi) / denominator;
    } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(deltar) + Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(deltai) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] * _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);

    if (i) {
      var rho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(zr * zr + zi * zi),
          c = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(rho * 0.5),
          sinc = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(c);
      return [Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(zr * sinc, rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(c)), rho ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(zi * sinc / rho) : 0];
    }
  };

  return forward;
}

var alaska = [[0.9972523, 0], [0.0052513, -0.0041175], [0.0074606, 0.0048125], [-0.0153783, -0.1968253], [0.0636871, -0.1408027], [0.3660976, -0.2937382]],
    gs48 = [[0.98879, 0], [0, 0], [-0.050909, 0], [0, 0], [0.075528, 0]],
    gs50 = [[0.9842990, 0], [0.0211642, 0.0037608], [-0.1036018, -0.0575102], [-0.0329095, -0.0320119], [0.0499471, 0.1223335], [0.0260460, 0.0899805], [0.0007388, -0.1435792], [0.0075848, -0.1334108], [-0.0216473, 0.0776645], [-0.0225161, 0.0853673]],
    miller = [[0.9245, 0], [0, 0], [0.01943, 0]],
    lee = [[0.721316, 0], [0, 0], [-0.00881625, -0.00617325]];

function modifiedStereographicAlaska() {
  return modifiedStereographic(alaska, [152, -64])
      .scale(1500)
      .center([-160.908, 62.4864])
      .clipAngle(25);
}

function modifiedStereographicGs48() {
  return modifiedStereographic(gs48, [95, -38])
      .scale(1000)
      .clipAngle(55)
      .center([-96.5563, 38.8675]);
}

function modifiedStereographicGs50() {
  return modifiedStereographic(gs50, [120, -45])
      .scale(359.513)
      .clipAngle(55)
      .center([-117.474, 53.0628]);
}

function modifiedStereographicMiller() {
  return modifiedStereographic(miller, [-20, -18])
      .scale(209.091)
      .center([20, 16.7214])
      .clipAngle(82);
}

function modifiedStereographicLee() {
  return modifiedStereographic(lee, [165, 10])
      .scale(250)
      .clipAngle(130)
      .center([-165, -10]);
}

function modifiedStereographic(coefficients, rotate) {
  var p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(modifiedStereographicRaw(coefficients)).rotate(rotate).clipAngle(90),
      r = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoRotation"])(rotate),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mollweide.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/mollweide.js ***!
  \*********************************************************/
/*! exports provided: mollweideBromleyTheta, mollweideBromleyRaw, mollweideRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mollweideBromleyTheta", function() { return mollweideBromleyTheta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mollweideBromleyRaw", function() { return mollweideBromleyRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mollweideRaw", function() { return mollweideRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function mollweideBromleyTheta(cp, phi) {
  var cpsinPhi = cp * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi), i = 30, delta;
  do phi -= delta = (phi + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) - cpsinPhi) / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi));
  while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return phi / 2;
}

function mollweideBromleyRaw(cx, cy, cp) {

  function forward(lambda, phi) {
    return [cx * lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi = mollweideBromleyTheta(cp, phi)), cy * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)];
  }

  forward.invert = function(x, y) {
    return y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y / cy), [x / (cx * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y)), Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((2 * y + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * y)) / cp)];
  };

  return forward;
}

var mollweideRaw = mollweideBromleyRaw(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"] / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"], _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"], _math__WEBPACK_IMPORTED_MODULE_1__["pi"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(mollweideRaw)
      .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarParabolic.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/mtFlatPolarParabolic.js ***!
  \********************************************************************/
/*! exports provided: mtFlatPolarParabolicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mtFlatPolarParabolicRaw", function() { return mtFlatPolarParabolicRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var sqrt6 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(6),
    sqrt7 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(7);

function mtFlatPolarParabolicRaw(lambda, phi) {
  var theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(7 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi) / (3 * sqrt6));
  return [
    sqrt6 * lambda * (2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(2 * theta / 3) - 1) / sqrt7,
    9 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta / 3) / sqrt7
  ];
}

mtFlatPolarParabolicRaw.invert = function(x, y) {
  var theta = 3 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y * sqrt7 / 9);
  return [
    x * sqrt7 / (sqrt6 * (2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(2 * theta / 3) - 1)),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta) * 3 * sqrt6 / 7)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(mtFlatPolarParabolicRaw)
      .scale(164.859);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarQuartic.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/mtFlatPolarQuartic.js ***!
  \******************************************************************/
/*! exports provided: mtFlatPolarQuarticRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mtFlatPolarQuarticRaw", function() { return mtFlatPolarQuarticRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function mtFlatPolarQuarticRaw(lambda, phi) {
  var k = (1 + _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"]) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      theta = phi;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta / 2) + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta) - k) / (0.5 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta / 2) + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta));
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) break;
  }
  return [
    lambda * (1 + 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta / 2)) / (3 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"]),
    2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta / 2) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"])
  ];
}

mtFlatPolarQuarticRaw.invert = function(x, y) {
  var sinTheta_2 = y * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 + _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"]) / (2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3)),
      theta = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinTheta_2);
  return [
    3 * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt2"] * x / (1 + 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta / 2)),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((sinTheta_2 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta)) / (1 + _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"]))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(mtFlatPolarQuarticRaw)
      .scale(188.209);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarSinusoidal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/mtFlatPolarSinusoidal.js ***!
  \*********************************************************************/
/*! exports provided: mtFlatPolarSinusoidalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mtFlatPolarSinusoidalRaw", function() { return mtFlatPolarSinusoidalRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function mtFlatPolarSinusoidalRaw(lambda, phi) {
  var A = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(6 / (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])),
      k = (1 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      theta = phi / 2;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (theta / 2 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta) - k) / (0.5 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta));
    if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) break;
  }
  return [
    A * (0.5 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta)) * lambda / 1.5,
    A * theta
  ];
}

mtFlatPolarSinusoidalRaw.invert = function(x, y) {
  var A = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(6 / (4 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"])),
      theta = y / A;
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(theta) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) theta = theta < 0 ? -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
  return [
    1.5 * x / (A * (0.5 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta))),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])((theta / 2 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(theta)) / (1 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(mtFlatPolarSinusoidalRaw)
      .scale(166.518);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/naturalEarth.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/naturalEarth.js ***!
  \************************************************************/
/*! exports provided: naturalEarthRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "naturalEarthRaw", function() { return naturalEarthRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function naturalEarthRaw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarthRaw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(naturalEarthRaw)
      .scale(175.295);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/nellHammer.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/nellHammer.js ***!
  \**********************************************************/
/*! exports provided: nellHammerRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nellHammerRaw", function() { return nellHammerRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function nellHammerRaw(lambda, phi) {
  return [
    lambda * (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi)) / 2,
    2 * (phi - Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi / 2))
  ];
}

nellHammerRaw.invert = function(x, y) {
  var p = y / 2;
  for (var i = 0, delta = Infinity; i < 10 && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; ++i) {
    var c = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y / 2);
    y -= delta = (y - Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(y / 2) - p) / (1 - 0.5 / (c * c));
  }
  return [
    2 * x / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y)),
    y
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(nellHammerRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/noop.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/noop.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/parallel1.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/parallel1.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



/* harmony default export */ __webpack_exports__["default"] = (function(projectAt) {
  var phi0 = 0,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(projectAt),
      p = m(phi0);

  p.parallel = function(_) {
    return arguments.length ? m(phi0 = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]) : phi0 * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
  };

  return p;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/patterson.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/patterson.js ***!
  \*********************************************************/
/*! exports provided: pattersonRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattersonRaw", function() { return pattersonRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



// Based on Java implementation by Bojan Savric.
// https://github.com/OSUCartography/JMapProjLib/blob/master/src/com/jhlabs/map/proj/PattersonProjection.java

var pattersonK1 = 1.0148,
    pattersonK2 = 0.23185,
    pattersonK3 = -0.14499,
    pattersonK4 = 0.02406,
    pattersonC1 = pattersonK1,
    pattersonC2 = 5 * pattersonK2,
    pattersonC3 = 7 * pattersonK3,
    pattersonC4 = 9 * pattersonK4,
    pattersonYmax = 1.790857183;

function pattersonRaw(lambda, phi) {
  var phi2 = phi * phi;
  return [
    lambda,
    phi * (pattersonK1 + phi2 * phi2 * (pattersonK2 + phi2 * (pattersonK3 + pattersonK4 * phi2)))
  ];
}

pattersonRaw.invert = function(x, y) {
  if (y > pattersonYmax) y = pattersonYmax;
  else if (y < -pattersonYmax) y = -pattersonYmax;
  var yc = y, delta;

  do { // Newton-Raphson
    var y2 = yc * yc;
    yc -= delta = ((yc * (pattersonK1 + y2 * y2 * (pattersonK2 + y2 * (pattersonK3 + pattersonK4 * y2)))) - y) / (pattersonC1 + y2 * y2 * (pattersonC2 + y2 * (pattersonC3 + pattersonC4 * y2)));
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]);

  return [x, yc];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(pattersonRaw)
      .scale(139.319);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyconic.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyconic.js ***!
  \*********************************************************/
/*! exports provided: polyconicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyconicRaw", function() { return polyconicRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function polyconicRaw(lambda, phi) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [lambda, 0];
  var tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi),
      k = lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(k) / tanPhi,
    phi + (1 - Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(k)) / tanPhi
  ];
}

polyconicRaw.invert = function(x, y) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [x, 0];
  var k = x * x + y * y,
      phi = y * 0.5,
      i = 10, delta;
  do {
    var tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi),
        secPhi = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        j = k - 2 * y * phi + phi * phi;
    phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi);
  return [
    (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi + 1 / tanPhi) ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(x * tanPhi) : Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x * tanPhi)) + _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"])) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(polyconicRaw)
      .scale(103.74);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/butterfly.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/butterfly.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var _octahedron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./octahedron */ "./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");





/* harmony default export */ __webpack_exports__["default"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCentroid"])({type: "MultiPoint", coordinates: face});
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoGnomonic"])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var faces = _octahedron__WEBPACK_IMPORTED_MODULE_3__["default"].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(faces[0], function(lambda, phi) {
        return faces[lambda < -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(101.858)
      .center([0, 45]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/collignon.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/collignon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _collignon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collignon */ "./node_modules/d3-geo-projection/src/collignon.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var _octahedron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./octahedron */ "./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");






var kx = 2 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(3);

function collignonK(a, b) {
  var p = Object(_collignon__WEBPACK_IMPORTED_MODULE_1__["collignonRaw"])(a, b);
  return [p[0] * kx, p[1]];
}

collignonK.invert = function(x,y) {
  return _collignon__WEBPACK_IMPORTED_MODULE_1__["collignonRaw"].invert(x / kx, y);
};

/* harmony default export */ __webpack_exports__["default"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCentroid"])({type: "MultiPoint", coordinates: face});
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(collignonK).translate([0, 0]).scale(1).rotate(c[1] > 0 ? [-c[0], 0] : [180 - c[0], 180]);
  };

  var faces = _octahedron__WEBPACK_IMPORTED_MODULE_4__["default"].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return Object(_index__WEBPACK_IMPORTED_MODULE_3__["default"])(faces[0], function(lambda, phi) {
        return faces[lambda < -_math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(121.906)
      .center([0, 48.5904]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "./node_modules/d3-geo-projection/src/polyhedral/matrix.js");




// Creates a polyhedral projection.
//  * root: a spanning tree of polygon faces.  Nodes are automatically
//    augmented with a transform matrix.
//  * face: a function that returns the appropriate node for a given {lambda, phi}
//    point (radians).
//  * r: rotation angle for final polyhedral net.  Defaults to -pi / 6 (for
//    butterflies).
/* harmony default export */ __webpack_exports__["default"] = (function(root, face, r) {

  r = r == null ? -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 6 : r; // TODO automate

  recurse(root, {transform: [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(r), Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(r), 0,
    -Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(r), Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(r), 0
  ]});

  function recurse(node, parent) {
    node.edges = faceEdges(node.face);
    // Find shared edge.
    if (parent.face) {
      var shared = node.shared = sharedEdge(node.face, parent.face),
          m = Object(_matrix__WEBPACK_IMPORTED_MODULE_2__["default"])(shared.map(parent.project), shared.map(node.project));
      node.transform = parent.transform ? Object(_matrix__WEBPACK_IMPORTED_MODULE_2__["multiply"])(parent.transform, m) : m;
      // Replace shared edge in parent edges array.
      var edges = parent.edges;
      for (var i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = node;
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = node;
      }
      edges = node.edges;
      for (i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = parent;
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = parent;
      }
    } else {
      node.transform = parent.transform;
    }
    if (node.children) {
      node.children.forEach(function(child) {
        recurse(child, node);
      });
    }
    return node;
  }

  function forward(lambda, phi) {
    var node = face(lambda, phi),
        point = node.project([lambda * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], phi * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]]),
        t;
    if (t = node.transform) {
      return [
        t[0] * point[0] + t[1] * point[1] + t[2],
        -(t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    point[1] = -point[1];
    return point;
  }

  // Naive inverse!  A faster solution would use bounding boxes, or even a
  // polygonal quadtree.
  if (hasInverse(root)) forward.invert = function(x, y) {
    var coordinates = faceInvert(root, [x, -y]);
    return coordinates && (coordinates[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates);
  };

  function faceInvert(node, coordinates) {
    var invert = node.project.invert,
        t = node.transform,
        point = coordinates;
    if (t) {
      t = Object(_matrix__WEBPACK_IMPORTED_MODULE_2__["inverse"])(t);
      point = [
        t[0] * point[0] + t[1] * point[1] + t[2],
        (t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    if (invert && node === faceDegrees(p = invert(point))) return p;
    var p,
        children = node.children;
    for (var i = 0, n = children && children.length; i < n; ++i) {
      if (p = faceInvert(children[i], coordinates)) return p;
    }
  }

  function faceDegrees(coordinates) {
    return face(coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
  }

  var proj = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(forward),
      stream_ = proj.stream;

  proj.stream = function(stream) {
    var rotate = proj.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (proj.rotate([0, 0]), stream_(stream));
    proj.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart();
      sphereStream.lineStart();
      outline(sphereStream, root);
      sphereStream.lineEnd();
      sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return proj;
});

function outline(stream, node, parent) {
  var point,
      edges = node.edges,
      n = edges.length,
      edge,
      multiPoint = {type: "MultiPoint", coordinates: node.face},
      notPoles = node.face.filter(function(d) { return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(d[1]) !== 90; }),
      b = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoBounds"])({type: "MultiPoint", coordinates: notPoles}),
      inside = false,
      j = -1,
      dx = b[1][0] - b[0][0];
  // TODO
  var c = dx === 180 || dx === 360
      ? [(b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2]
      : Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCentroid"])(multiPoint);
  // First find the shared edge…
  if (parent) while (++j < n) {
    if (edges[j] === parent) break;
  }
  ++j;
  for (var i = 0; i < n; ++i) {
    edge = edges[(i + j) % n];
    if (Array.isArray(edge)) {
      if (!inside) {
        stream.point((point = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoInterpolate"])(edge[0], c)(_math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]))[0], point[1]);
        inside = true;
      }
      stream.point((point = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoInterpolate"])(edge[1], c)(_math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]))[0], point[1]);
    } else {
      inside = false;
      if (edge !== parent) outline(stream, edge, node);
    }
  }
}

// Tests equality of two spherical points.
function pointEqual(a, b) {
  return a && b && a[0] === b[0] && a[1] === b[1];
}

// Finds a shared edge given two clockwise polygons.
function sharedEdge(a, b) {
  var x, y, n = a.length, found = null;
  for (var i = 0; i < n; ++i) {
    x = a[i];
    for (var j = b.length; --j >= 0;) {
      y = b[j];
      if (x[0] === y[0] && x[1] === y[1]) {
        if (found) return [found, x];
        found = x;
      }
    }
  }
}

// Converts an array of n face vertices to an array of n + 1 edges.
function faceEdges(face) {
  var n = face.length,
      edges = [];
  for (var a = face[n - 1], i = 0; i < n; ++i) edges.push([a, a = face[i]]);
  return edges;
}

function hasInverse(node) {
  return node.project.invert || node.children && node.children.some(hasInverse);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/matrix.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/matrix.js ***!
  \*****************************************************************/
/*! exports provided: default, inverse, multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");


// Note: 6-element arrays are used to denote the 3x3 affine transform matrix:
// [a, b, c,
//  d, e, f,
//  0, 0, 1] - this redundant row is left out.

// Transform matrix for [a0, a1] -> [b0, b1].
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var u = subtract(a[1], a[0]),
      v = subtract(b[1], b[0]),
      phi = angle(u, v),
      s = length(u) / length(v);

  return multiply([
    1, 0, a[0][0],
    0, 1, a[0][1]
  ], multiply([
    s, 0, 0,
    0, s, 0
  ], multiply([
    Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi), 0,
    -Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi), Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi), 0
  ], [
    1, 0, -b[0][0],
    0, 1, -b[0][1]
  ])));
});

// Inverts a transform matrix.
function inverse(m) {
  var k = 1 / (m[0] * m[4] - m[1] * m[3]);
  return [
    k * m[4], -k * m[1], k * (m[1] * m[5] - m[2] * m[4]),
    -k * m[3], k * m[0], k * (m[2] * m[3] - m[0] * m[5])
  ];
}

// Multiplies two 3x2 matrices.
function multiply(a, b) {
  return [
    a[0] * b[0] + a[1] * b[3],
    a[0] * b[1] + a[1] * b[4],
    a[0] * b[2] + a[1] * b[5] + a[2],
    a[3] * b[0] + a[4] * b[3],
    a[3] * b[1] + a[4] * b[4],
    a[3] * b[2] + a[4] * b[5] + a[5]
  ];
}

// Subtracts 2D vectors.
function subtract(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

// Magnitude of a 2D vector.
function length(v) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(v[0] * v[0] + v[1] * v[1]);
}

// Angle between two 2D vectors.
function angle(a, b) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/octahedron.js":
/*!*********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/octahedron.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO generate on-the-fly to avoid external modification.
var octahedron = [
  [0, 90],
  [-90, 0], [0, 0], [90, 0], [180, 0],
  [0, -90]
];

/* harmony default export */ __webpack_exports__["default"] = ([
  [0, 2, 1],
  [0, 3, 2],
  [5, 1, 2],
  [5, 2, 3],
  [0, 1, 4],
  [0, 4, 3],
  [5, 4, 1],
  [5, 3, 4]
].map(function(face) {
  return face.map(function(i) {
    return octahedron[i];
  });
}));


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/waterman.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/polyhedral/waterman.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var _octahedron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./octahedron */ "./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");





/* harmony default export */ __webpack_exports__["default"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = face.length === 6 ? Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoCentroid"])({type: "MultiPoint", coordinates: face}) : face[0];
    return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoGnomonic"])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var w5 = _octahedron__WEBPACK_IMPORTED_MODULE_3__["default"].map(function(face) {
    var xyz = face.map(cartesian),
        n = xyz.length,
        a = xyz[n - 1],
        b,
        hexagon = [];
    for (var i = 0; i < n; ++i) {
      b = xyz[i];
      hexagon.push(spherical([
        a[0] * 0.9486832980505138 + b[0] * 0.31622776601683794,
        a[1] * 0.9486832980505138 + b[1] * 0.31622776601683794,
        a[2] * 0.9486832980505138 + b[2] * 0.31622776601683794
      ]), spherical([
        b[0] * 0.9486832980505138 + a[0] * 0.31622776601683794,
        b[1] * 0.9486832980505138 + a[1] * 0.31622776601683794,
        b[2] * 0.9486832980505138 + a[2] * 0.31622776601683794
      ]));
      a = b;
    }
    return hexagon;
  });

  var cornerNormals = [];

  var parents = [-1, 0, 0, 1, 0, 1, 4, 5];

  w5.forEach(function(hexagon, j) {
    var face = _octahedron__WEBPACK_IMPORTED_MODULE_3__["default"][j],
        n = face.length,
        normals = cornerNormals[j] = [];
    for (var i = 0; i < n; ++i) {
      w5.push([
        face[i],
        hexagon[(i * 2 + 2) % (2 * n)],
        hexagon[(i * 2 + 1) % (2 * n)]
      ]);
      parents.push(j);
      normals.push(cross(
        cartesian(hexagon[(i * 2 + 2) % (2 * n)]),
        cartesian(hexagon[(i * 2 + 1) % (2 * n)])
      ));
    }
  });

  var faces = w5.map(function(face) {
    return {
      project: faceProjection(face),
      face: face
    };
  });

  parents.forEach(function(d, i) {
    var parent = faces[d];
    parent && (parent.children || (parent.children = [])).push(faces[i]);
  });

  function face(lambda, phi) {
    var cosphi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        p = [cosphi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda), cosphi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda), Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)];

    var hexagon = lambda < -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 2 ? phi < 0 ? 6 : 4
        : lambda < 0 ? phi < 0 ? 2 : 0
        : lambda < _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 2 ? phi < 0 ? 3 : 1
        : phi < 0 ? 7 : 5;

    var n = cornerNormals[hexagon];

    return faces[dot(n[0], p) < 0 ? 8 + 3 * hexagon
        : dot(n[1], p) < 0 ? 8 + 3 * hexagon + 1
        : dot(n[2], p) < 0 ? 8 + 3 * hexagon + 2
        : hexagon];
  }

  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(faces[0], face)
      .scale(110.625)
      .center([0,45]);
});

function dot(a, b) {
  for (var i = 0, n = a.length, s = 0; i < n; ++i) s += a[i] * b[i];
  return s;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

// Converts 3D Cartesian to spherical coordinates (degrees).
function spherical(cartesian) {
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(cartesian[1], cartesian[0]) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["max"])(-1, Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(1, cartesian[2]))) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]
  ];
}

// Converts spherical coordinates (degrees) to 3D Cartesian.
function cartesian(coordinates) {
  var lambda = coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"],
      phi = coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"],
      cosphi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
  return [
    cosphi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda),
    cosphi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)
  ];
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/clockwise.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/project/clockwise.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(ring) {
  if ((n = ring.length) < 4) return false;
  var i = 0,
      n,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area <= 0;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/contains.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/project/contains.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(ring, point) {
  var x = point[0],
      y = point[1],
      contains = false;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1],
        pj = ring[j], xj = pj[0], yj = pj[1];
    if (((yi > y) ^ (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) contains = !contains;
  }
  return contains;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/project/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo-projection/src/noop.js");
/* harmony import */ var _clockwise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clockwise */ "./node_modules/d3-geo-projection/src/project/clockwise.js");
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains */ "./node_modules/d3-geo-projection/src/project/contains.js");





/* harmony default export */ __webpack_exports__["default"] = (function(object, projection) {
  var stream = projection.stream, project;
  if (!stream) throw new Error("invalid projection");
  switch (object && object.type) {
    case "Feature": project = projectFeature; break;
    case "FeatureCollection": project = projectFeatureCollection; break;
    default: project = projectGeometry; break;
  }
  return project(object, stream);
});

function projectFeatureCollection(o, stream) {
  return {
    type: "FeatureCollection",
    features: o.features.map(function(f) {
      return projectFeature(f, stream);
    })
  };
}

function projectFeature(o, stream) {
  return {
    type: "Feature",
    id: o.id,
    properties: o.properties,
    geometry: projectGeometry(o.geometry, stream)
  };
}

function projectGeometryCollection(o, stream) {
  return {
    type: "GeometryCollection",
    geometries: o.geometries.map(function(o) {
      return projectGeometry(o, stream);
    })
  };
}

function projectGeometry(o, stream) {
  if (!o) return null;
  if (o.type === "GeometryCollection") return projectGeometryCollection(o, stream);
  var sink;
  switch (o.type) {
    case "Point": sink = sinkPoint; break;
    case "MultiPoint": sink = sinkPoint; break;
    case "LineString": sink = sinkLine; break;
    case "MultiLineString": sink = sinkLine; break;
    case "Polygon": sink = sinkPolygon; break;
    case "MultiPolygon": sink = sinkPolygon; break;
    case "Sphere": sink = sinkPolygon; break;
    default: return null;
  }
  Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoStream"])(o, stream(sink));
  return sink.result();
}

var points = [],
    lines = [];

var sinkPoint = {
  point: function(x, y) {
    points.push([x, y]);
  },
  result: function() {
    var result = !points.length ? null
        : points.length < 2 ? {type: "Point", coordinates: points[0]}
        : {type: "MultiPoint", coordinates: points};
    points = [];
    return result;
  }
};

var sinkLine = {
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    if (points.length) lines.push(points), points = [];
  },
  result: function() {
    var result = !lines.length ? null
        : lines.length < 2 ? {type: "LineString", coordinates: lines[0]}
        : {type: "MultiLineString", coordinates: lines};
    lines = [];
    return result;
  }
};

var sinkPolygon = {
  polygonStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    var n = points.length;
    if (n) {
      do points.push(points[0].slice()); while (++n < 4);
      lines.push(points), points = [];
    }
  },
  polygonEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  result: function() {
    if (!lines.length) return null;
    var polygons = [],
        holes = [];

    // https://github.com/d3/d3/issues/1558
    lines.forEach(function(ring) {
      if (Object(_clockwise__WEBPACK_IMPORTED_MODULE_2__["default"])(ring)) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      var point = hole[0];
      polygons.some(function(polygon) {
        if (Object(_contains__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon[0], point)) {
          polygon.push(hole);
          return true;
        }
      }) || polygons.push([hole]);
    });

    lines = [];

    return !polygons.length ? null
        : polygons.length > 1 ? {type: "MultiPolygon", coordinates: polygons}
        : {type: "Polygon", coordinates: polygons[0]};
  }
};


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quantize.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/quantize.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(o, digits) {
  if (!(0 <= (digits = +digits) && digits <= 20)) throw new Error("invalid digits");

  function quantizePoint(coordinates) {
    coordinates[0] = +coordinates[0].toFixed(digits);
    coordinates[1] = +coordinates[1].toFixed(digits);
  }

  function quantizePoints(coordinates) {
    coordinates.forEach(quantizePoint);
  }

  function quantizePolygon(coordinates) {
    coordinates.forEach(quantizePoints);
  }

  function quantizeGeometry(o) {
    if (o) switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(quantizeGeometry); break;
      case "Point": quantizePoint(o.coordinates); break;
      case "MultiPoint": case "LineString": quantizePoints(o.coordinates); break;
      case "MultiLineString": case "Polygon": quantizePolygon(o.coordinates); break;
      case "MultiPolygon": o.coordinates.forEach(quantizePolygon); break;
      default: return;
    }
  }

  function quantizeFeature(o) {
    quantizeGeometry(o.geometry);
  }

  if (o) switch (o.type) {
    case "Feature": quantizeFeature(o); break;
    case "FeatureCollection": o.features.forEach(quantizeFeature); break;
    default: quantizeGeometry(o); break;
  }

  return o;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/gringorten.js":
/*!**********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/quincuncial/gringorten.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gringorten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gringorten */ "./node_modules/d3-geo-projection/src/gringorten.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/quincuncial/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_gringorten__WEBPACK_IMPORTED_MODULE_0__["gringortenRaw"])
      .scale(176.423);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/quincuncial/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo-projection/src/math.js");



/* harmony default export */ __webpack_exports__["default"] = (function(project) {
  var dx = project(_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"], 0)[0] - project(-_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"], 0)[0];

  function projectQuincuncial(lambda, phi) {
    var t = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) < _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
        p = project(t ? lambda : lambda > 0 ? lambda - _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : lambda + _math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi),
        x = (p[0] - p[1]) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"],
        y = (p[0] + p[1]) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"];
    if (t) return [x, y];
    var d = dx * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"],
        s = x > 0 ^ y > 0 ? -1 : 1;
    return [s * x - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * d, s * y - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * d];
  }

  if (project.invert) projectQuincuncial.invert = function(x0, y0) {
    var x = (x0 + y0) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"],
        y = (y0 - x0) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"],
        t = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x) < 0.5 * dx && Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < 0.5 * dx;

    if (!t) {
      var d = dx * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"],
          s = x > 0 ^ y > 0 ? -1 : 1,
          x1 = -s * (x0 + (y > 0 ? 1 : -1) * d),
          y1 = -s * (y0 + (x > 0 ? 1 : -1) * d);
      x = (-x1 - y1) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"];
      y = (x1 - y1) * _math__WEBPACK_IMPORTED_MODULE_1__["sqrt1_2"];
    }

    var p = project.invert(x, y);
    if (!t) p[0] += x > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["pi"];
    return p;
  };

  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(projectQuincuncial)
      .rotate([-90, -90, 45])
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/peirce.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/quincuncial/peirce.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guyou__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guyou */ "./node_modules/d3-geo-projection/src/guyou.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo-projection/src/quincuncial/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(_guyou__WEBPACK_IMPORTED_MODULE_0__["guyouRaw"])
      .scale(111.48);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/rectangularPolyconic.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/rectangularPolyconic.js ***!
  \********************************************************************/
/*! exports provided: rectangularPolyconicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangularPolyconicRaw", function() { return rectangularPolyconicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _parallel1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallel1 */ "./node_modules/d3-geo-projection/src/parallel1.js");



function rectangularPolyconicRaw(phi0) {
  var sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi0);

  function forward(lambda, phi) {
    var A = sinPhi0 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(lambda * sinPhi0 / 2) / sinPhi0 : lambda / 2;
    if (!phi) return [2 * A, -phi0];
    var E = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(A * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi)),
        cotPhi = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(E) * cotPhi,
      phi + (1 - Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(E)) * cotPhi - phi0
    ];
  }

  // TODO return null for points outside outline.
  forward.invert = function(x, y) {
    if (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(y += phi0) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return [sinPhi0 ? 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(sinPhi0 * x / 2) / sinPhi0 : x, 0];
    var k = x * x + y * y,
        phi = 0,
        i = 10, delta;
    do {
      var tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi),
          secPhi = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
          j = k - 2 * y * phi + phi * phi;
      phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
    } while (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] && --i > 0);
    var E = x * (tanPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(phi)),
        A = Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(y) < Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(phi + 1 / tanPhi) ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(E) * 0.5 : Object(_math__WEBPACK_IMPORTED_MODULE_0__["acos"])(E) * 0.5 + _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 4) / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
    return [
      sinPhi0 ? 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(sinPhi0 * A) / sinPhi0 : 2 * A,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_parallel1__WEBPACK_IMPORTED_MODULE_1__["default"])(rectangularPolyconicRaw)
      .scale(131.215);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/robinson.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/robinson.js ***!
  \********************************************************/
/*! exports provided: robinsonRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "robinsonRaw", function() { return robinsonRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



var K = [
  [0.9986, -0.062],
  [1.0000, 0.0000],
  [0.9986, 0.0620],
  [0.9954, 0.1240],
  [0.9900, 0.1860],
  [0.9822, 0.2480],
  [0.9730, 0.3100],
  [0.9600, 0.3720],
  [0.9427, 0.4340],
  [0.9216, 0.4958],
  [0.8962, 0.5571],
  [0.8679, 0.6176],
  [0.8350, 0.6769],
  [0.7986, 0.7346],
  [0.7597, 0.7903],
  [0.7186, 0.8435],
  [0.6732, 0.8936],
  [0.6213, 0.9394],
  [0.5722, 0.9761],
  [0.5322, 1.0000]
];

K.forEach(function(d) {
  d[1] *= 1.0144;
});

function robinsonRaw(lambda, phi) {
  var i = Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(18, Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) * 36 / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]),
      i0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["floor"])(i),
      di = i - i0,
      ax = (k = K[i0])[0],
      ay = k[1],
      bx = (k = K[++i0])[0],
      by = k[1],
      cx = (k = K[Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(19, ++i0)])[0],
      cy = k[1],
      k;
  return [
    lambda * (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    (phi > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2)
  ];
}

robinsonRaw.invert = function(x, y) {
  var yy = y / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      phi = yy * 90,
      i = Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(18, Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi / 5)),
      i0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["max"])(0, Object(_math__WEBPACK_IMPORTED_MODULE_1__["floor"])(i));
  do {
    var ay = K[i0][1],
        by = K[i0 + 1][1],
        cy = K[Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(19, i0 + 2)][1],
        u = cy - ay,
        v = cy - 2 * by + ay,
        t = 2 * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(yy) - by) / u,
        c = v / u,
        di = t * (1 - c * t * (1 - 2 * c * t));
    if (di >= 0 || i0 === 1) {
      phi = (y >= 0 ? 5 : -5) * (di + i);
      var j = 50, delta;
      do {
        i = Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(18, Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) / 5);
        i0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["floor"])(i);
        di = i - i0;
        ay = K[i0][1];
        by = K[i0 + 1][1];
        cy = K[Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(19, i0 + 2)][1];
        phi -= (delta = (y >= 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2) - y) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
      } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon2"] && --j > 0);
      break;
    }
  } while (--i0 >= 0);
  var ax = K[i0][0],
      bx = K[i0 + 1][0],
      cx = K[Object(_math__WEBPACK_IMPORTED_MODULE_1__["min"])(19, i0 + 2)][0];
  return [
    x / (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    phi * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(robinsonRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/satellite.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/satellite.js ***!
  \*********************************************************/
/*! exports provided: satelliteRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satelliteRaw", function() { return satelliteRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function satelliteVerticalRaw(P) {
  function forward(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        k = (P - 1) / (P - cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda));
    return [
      k * cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
      k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + y * y,
        rho = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(rho2),
        sinc = (P - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - rho2 * (P + 1) / (P - 1))) / ((P - 1) / rho + rho / (P - 1));
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x * sinc, rho * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - sinc * sinc)),
      rho ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y * sinc / rho) : 0
    ];
  };

  return forward;
}

function satelliteRaw(P, omega) {
  var vertical = satelliteVerticalRaw(P);
  if (!omega) return vertical;
  var cosOmega = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(omega),
      sinOmega = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(omega);

  function forward(lambda, phi) {
    var coordinates = vertical(lambda, phi),
        y = coordinates[1],
        A = y * sinOmega / (P - 1) + cosOmega;
    return [
      coordinates[0] * cosOmega / A,
      y / A
    ];
  }

  forward.invert = function(x, y) {
    var k = (P - 1) / (P - 1 - y * sinOmega);
    return vertical.invert(k * x, k * y * cosOmega);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var distance = 2,
      omega = 0,
      m = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjectionMutator"])(satelliteRaw),
      p = m(distance, omega);

  // As a multiple of radius.
  p.distance = function(_) {
    if (!arguments.length) return distance;
    return m(distance = +_, omega);
  };

  p.tilt = function(_) {
    if (!arguments.length) return omega * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"];
    return m(distance, omega = _ * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
  };

  return p
      .scale(432.147)
      .clipAngle(Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(1 / distance) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"] - 1e-6);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/sinuMollweide.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/sinuMollweide.js ***!
  \*************************************************************/
/*! exports provided: sinuMollweidePhi, sinuMollweideY, sinuMollweideRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinuMollweidePhi", function() { return sinuMollweidePhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinuMollweideY", function() { return sinuMollweideY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinuMollweideRaw", function() { return sinuMollweideRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var _sinusoidal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sinusoidal */ "./node_modules/d3-geo-projection/src/sinusoidal.js");




var sinuMollweidePhi = 0.7109889596207567;

var sinuMollweideY = 0.0528035274542;

function sinuMollweideRaw(lambda, phi) {
  return phi > -sinuMollweidePhi
      ? (lambda = Object(_mollweide__WEBPACK_IMPORTED_MODULE_1__["mollweideRaw"])(lambda, phi), lambda[1] += sinuMollweideY, lambda)
      : Object(_sinusoidal__WEBPACK_IMPORTED_MODULE_2__["sinusoidalRaw"])(lambda, phi);
}

sinuMollweideRaw.invert = function(x, y) {
  return y > -sinuMollweidePhi
      ? _mollweide__WEBPACK_IMPORTED_MODULE_1__["mollweideRaw"].invert(x, y - sinuMollweideY)
      : _sinusoidal__WEBPACK_IMPORTED_MODULE_2__["sinusoidalRaw"].invert(x, y);
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(sinuMollweideRaw)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/sinusoidal.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/sinusoidal.js ***!
  \**********************************************************/
/*! exports provided: sinusoidalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinusoidalRaw", function() { return sinusoidalRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function sinusoidalRaw(lambda, phi) {
  return [lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi), phi];
}

sinusoidalRaw.invert = function(x, y) {
  return [x / Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(y), y];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(sinusoidalRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/square.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/square.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(project) {
  var dx = project(_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"], 0)[0] - project(-_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"], 0)[0];

  function projectSquare(lambda, phi) {
    var s = lambda > 0 ? -0.5 : 0.5,
        point = project(lambda + s * _math__WEBPACK_IMPORTED_MODULE_0__["pi"], phi);
    point[0] -= s * dx;
    return point;
  }

  if (project.invert) projectSquare.invert = function(x, y) {
    var s = x > 0 ? -0.5 : 0.5,
        location = project.invert(x + s * dx, y),
        lambda = location[0] - s * _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
    if (lambda < -_math__WEBPACK_IMPORTED_MODULE_0__["pi"]) lambda += 2 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
    else if (lambda > _math__WEBPACK_IMPORTED_MODULE_0__["pi"]) lambda -= 2 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"];
    location[0] = lambda;
    return location;
  };

  return projectSquare;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/stitch.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/stitch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var epsilon = 1e-4,
    epsilonInverse = 1e4,
    x0 = -180, x0e = x0 + epsilon,
    x1 = 180, x1e = x1 - epsilon,
    y0 = -90, y0e = y0 + epsilon,
    y1 = 90, y1e = y1 - epsilon;

function quantize(x) {
  return Math.floor(x * epsilonInverse) / epsilonInverse;
}

function normalizePoint(y) {
  return y === y0 || y === y1
      ? [0, y] // pole
      : [x0, quantize(y)]; // antimeridian
}

function clampPoint(p) {
  if (p[0] <= x0e) p[0] = x0;
  else if (p[0] >= x1e) p[0] = x1;
  if (p[1] <= y0e) p[1] = y0;
  else if (p[1] >= y1e) p[1] = y1;
}

function clampPoints(points) {
  points.forEach(clampPoint);
}

// For each ring, detect where it crosses the antimeridian or pole.
function extractFragments(polygon, fragments) {
  for (var j = 0, m = polygon.length; j < m; ++j) {
    var ring = polygon[j];
    ring.polygon = polygon;

    // By default, assume that this ring doesn’t need any stitching.
    fragments.push(ring);

    for (var i = 0, n = ring.length; i < n; ++i) {
      var point = ring[i],
          x = point[0],
          y = point[1];

      // If this is an antimeridian or polar point…
      if (x <= x0e || x >= x1e || y <= y0e || y >= y1e) {
        clampPoint(point);

        // Advance through any antimeridian or polar points…
        for (var k = i + 1; k < n; ++k) {
          var pointk = ring[k],
              xk = pointk[0],
              yk = pointk[1];
          if (xk > x0e && xk < x1e && yk > y0e && yk < y1e) break;
        }

        // If this was just a single antimeridian or polar point,
        // we don’t need to cut this ring into a fragment;
        // we can just leave it as-is.
        if (k === i + 1) continue;

        // Otherwise, if this is not the first point in the ring,
        // cut the current fragment so that it ends at the current point.
        // The current point is also normalized for later joining.
        if (i) {
          var fragmentBefore = ring.slice(0, i + 1);
          fragmentBefore.polygon = polygon;
          fragmentBefore[fragmentBefore.length - 1] = normalizePoint(y);
          fragments[fragments.length - 1] = fragmentBefore;
        }

        // If the ring started with an antimeridian fragment,
        // we can ignore that fragment entirely.
        else fragments.pop();

        // If the remainder of the ring is an antimeridian fragment,
        // move on to the next ring.
        if (k >= n) break;

        // Otherwise, add the remaining ring fragment and continue.
        fragments.push(ring = ring.slice(k - 1));
        ring[0] = normalizePoint(ring[0][1]);
        ring.polygon = polygon;
        i = -1;
        n = ring.length;
      }
    }
  }
  polygon.length = 0;
}

// Now stitch the fragments back together into rings.
// TODO remove empty polygons.
function stitchFragments(fragments) {
  var i, n = fragments.length;

  // To connect the fragments start-to-end, create a simple index by end.
  var fragmentByStart = {},
      fragmentByEnd = {},
      fragment,
      start,
      startFragment,
      end,
      endFragment;

  // For each fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    start = fragment[0];
    end = fragment[fragment.length - 1];

    // If this fragment is closed, add it as a standalone ring.
    if (start[0] === end[0] && start[1] === end[1]) {
      fragment.polygon.push(fragment);
      fragments[i] = null;
      continue;
    }

    fragment.index = i;
    fragmentByStart[start] = fragmentByEnd[end] = fragment;
  }

  // For each open fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    if (fragment) {
      start = fragment[0];
      end = fragment[fragment.length - 1];
      startFragment = fragmentByEnd[start];
      endFragment = fragmentByStart[end];

      delete fragmentByStart[start];
      delete fragmentByEnd[end];

      // If this fragment is closed, add it as a standalone ring.
      if (start[0] === end[0] && start[1] === end[1]) {
        fragment.polygon.push(fragment);
        continue;
      }

      if (startFragment) {
        delete fragmentByEnd[start];
        delete fragmentByStart[startFragment[0]];
        startFragment.pop(); // drop the shared coordinate
        fragments[startFragment.index] = null;
        fragment = startFragment.concat(fragment);
        fragment.polygon = startFragment.polygon;

        if (startFragment === endFragment) {
          // Connect both ends to this single fragment to create a ring.
          fragment.polygon.push(fragment);
        } else {
          fragment.index = n++;
          fragments.push(fragmentByStart[fragment[0]] = fragmentByEnd[fragment[fragment.length - 1]] = fragment);
        }
      } else if (endFragment) {
        delete fragmentByStart[end];
        delete fragmentByEnd[endFragment[endFragment.length - 1]];
        fragment.pop(); // drop the shared coordinate
        fragment = fragment.concat(endFragment);
        fragment.polygon = endFragment.polygon;
        fragment.index = n++;
        fragments[endFragment.index] = null;
        fragments.push(fragmentByStart[fragment[0]] = fragmentByEnd[fragment[fragment.length - 1]] = fragment);
      } else {
        fragment.push(fragment[0]); // close ring
        fragment.polygon.push(fragment);
      }
    }
  }
}

function stitchFeature(o) {
  stitchGeometry(o.geometry);
}

function stitchGeometry(o) {
  if (!o) return;
  var fragments, i, n;

  switch (o.type) {
    case "GeometryCollection": {
      o.geometries.forEach(stitchGeometry);
      return;
    }
    case "Point": {
      clampPoint(o.coordinates);
      break;
    }
    case "MultiPoint":
    case "LineString": {
      clampPoints(o.coordinates);
      break;
    }
    case "MultiLineString": {
      o.coordinates.forEach(clampPoints);
      break;
    }
    case "Polygon": {
      extractFragments(o.coordinates, fragments = []);
      break;
    }
    case "MultiPolygon": {
      fragments = [], i = -1, n = o.coordinates.length;
      while (++i < n) extractFragments(o.coordinates[i], fragments);
      break;
    }
    default: return;
  }

  stitchFragments(fragments);
}

/* harmony default export */ __webpack_exports__["default"] = (function(o) {
  if (o) switch (o.type) {
    case "Feature": stitchFeature(o); break;
    case "FeatureCollection": o.features.forEach(stitchFeature); break;
    default: stitchGeometry(o); break;
  }
  return o;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/times.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/times.js ***!
  \*****************************************************/
/*! exports provided: timesRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesRaw", function() { return timesRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function timesRaw(lambda, phi) {
  var t = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(phi / 2),
      s = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(_math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] * t);
  return [
    lambda * (0.74482 - 0.34588 * s * s),
    1.70711 * t
  ];
}

timesRaw.invert = function(x, y) {
  var t = y / 1.70711,
      s = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(_math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"] * t);
  return [
    x / (0.74482 - 0.34588 * s * s),
    2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(t)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(timesRaw)
      .scale(146.153);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPoint.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/twoPoint.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



// Compute the origin as the midpoint of the two reference points.
// Rotate one of the reference points by the origin.
// Apply the spherical law of sines to compute gamma rotation.
/* harmony default export */ __webpack_exports__["default"] = (function(raw, p0, p1) {
  var i = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoInterpolate"])(p0, p1),
      o = i(0.5),
      a = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoRotation"])([-o[0], -o[1]])(p0),
      b = i.distance / 2,
      y = -Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(a[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(b)),
      R = [-o[0], -o[1], -(a[0] > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] - y : y) * _math__WEBPACK_IMPORTED_MODULE_1__["degrees"]],
      p = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(raw(b)).rotate(R),
      r = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoRotation"])(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPointAzimuthal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/twoPointAzimuthal.js ***!
  \*****************************************************************/
/*! exports provided: twoPointAzimuthalRaw, twoPointAzimuthalUsa, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoPointAzimuthalRaw", function() { return twoPointAzimuthalRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoPointAzimuthalUsa", function() { return twoPointAzimuthalUsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return twoPointAzimuthal; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _twoPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twoPoint */ "./node_modules/d3-geo-projection/src/twoPoint.js");




function twoPointAzimuthalRaw(d) {
  var cosd = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(d);

  function forward(lambda, phi) {
    var coordinates = Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoGnomonicRaw"])(lambda, phi);
    coordinates[0] *= cosd;
    return coordinates;
  }

  forward.invert = function(x, y) {
    return d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoGnomonicRaw"].invert(x / cosd, y);
  };

  return forward;
}

function twoPointAzimuthalUsa() {
  return twoPointAzimuthal([-158, 21.5], [-77, 39])
      .clipAngle(60)
      .scale(400);
}

function twoPointAzimuthal(p0, p1) {
  return Object(_twoPoint__WEBPACK_IMPORTED_MODULE_2__["default"])(twoPointAzimuthalRaw, p0, p1);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPointEquidistant.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/twoPointEquidistant.js ***!
  \*******************************************************************/
/*! exports provided: twoPointEquidistantRaw, twoPointEquidistantUsa, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoPointEquidistantRaw", function() { return twoPointEquidistantRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoPointEquidistantUsa", function() { return twoPointEquidistantUsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return twoPointEquidistant; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _twoPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twoPoint */ "./node_modules/d3-geo-projection/src/twoPoint.js");




// TODO clip to ellipse
function twoPointEquidistantRaw(z0) {
  if (!(z0 *= 2)) return d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoAzimuthalEquidistantRaw"];
  var lambdaa = -z0 / 2,
      lambdab = -lambdaa,
      z02 = z0 * z0,
      tanLambda0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(lambdab),
      S = 0.5 / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambdab);

  function forward(lambda, phi) {
    var za = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda - lambdaa)),
        zb = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda - lambdab)),
        ys = phi < 0 ? -1 : 1;
    za *= za, zb *= zb;
    return [
      (za - zb) / (2 * z0),
      ys * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(4 * z02 * zb - (z02 - za + zb) * (z02 - za + zb)) / (2 * z0)
    ];
  }

  forward.invert = function(x, y) {
    var y2 = y * y,
        cosza = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(y2 + (t = x + lambdaa) * t)),
        coszb = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(y2 + (t = x + lambdab) * t)),
        t,
        d;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(d = cosza - coszb, t = (cosza + coszb) * tanLambda0),
      (y < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(t * t + d * d) * S)
    ];
  };

  return forward;
}

function twoPointEquidistantUsa() {
  return twoPointEquidistant([-158, 21.5], [-77, 39])
      .clipAngle(130)
      .scale(122.571);
}

function twoPointEquidistant(p0, p1) {
  return Object(_twoPoint__WEBPACK_IMPORTED_MODULE_2__["default"])(twoPointEquidistantRaw, p0, p1);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/vanDerGrinten.js ***!
  \*************************************************************/
/*! exports provided: vanDerGrintenRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vanDerGrintenRaw", function() { return vanDerGrintenRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function vanDerGrintenRaw(lambda, phi) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [lambda, 0];
  var sinTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]),
      theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinTheta);
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [0, Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(theta / 2)];
  var cosTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta),
      A = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lambda - lambda / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / 2,
      A2 = A * A,
      G = cosTheta / (sinTheta + cosTheta - 1),
      P = G * (2 / sinTheta - 1),
      P2 = P * P,
      P2_A2 = P2 + A2,
      G_P2 = G - P2,
      Q = A2 + G;
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(lambda) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (A * G_P2 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(A2 * G_P2 * G_P2 - P2_A2 * (G * G - P2))) / P2_A2,
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (P * Q - A * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])((A2 + 1) * P2_A2 - Q * Q)) / P2_A2
  ];
}

vanDerGrintenRaw.invert = function(x, y) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [x, 0];
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [0, _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(y / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]))];
  var x2 = (x /= _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) * x,
      y2 = (y /= _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) * y,
      x2_y2 = x2 + y2,
      z = x2_y2 * x2_y2,
      c1 = -Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y) * (1 + x2_y2),
      c2 = c1 - 2 * y2 + x2,
      c3 = -2 * c1 + 1 + 2 * y2 + z,
      d = y2 / c3 + (2 * c2 * c2 * c2 / (c3 * c3 * c3) - 9 * c1 * c2 / (c3 * c3)) / 27,
      a1 = (c1 - c2 * c2 / (3 * c3)) / c3,
      m1 = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(-a1 / 3),
      theta1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["acos"])(3 * d / (a1 * m1)) / 3;
  return [
    _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (x2_y2 - 1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 + 2 * (x2 - y2) + z)) / (2 * x),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (-m1 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta1 + _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 3) - c2 / (3 * c3))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(vanDerGrintenRaw)
      .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten2.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/vanDerGrinten2.js ***!
  \**************************************************************/
/*! exports provided: vanDerGrinten2Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vanDerGrinten2Raw", function() { return vanDerGrinten2Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten2Raw(lambda, phi) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [lambda, 0];
  var sinTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]),
      theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinTheta);
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [0, Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(theta / 2)];
  var cosTheta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta),
      A = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lambda - lambda / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / 2,
      A2 = A * A,
      x1 = cosTheta * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 + A2) - A * cosTheta) / (1 + A2 * sinTheta * sinTheta);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(lambda) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * x1,
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - x1 * (2 * A + x1))
  ];
}

vanDerGrinten2Raw.invert = function(x, y) {
  if (!x) return [0, _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(y / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]))];
  var x1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]),
      A = (1 - x1 * x1 - (y /= _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) * y) / (2 * x1),
      A2 = A * A,
      B = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(A2 + 1);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (B - A),
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(y) * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])((1 - 2 * A * x1) * (A + B) - x1), Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(B + A + x1)))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(vanDerGrinten2Raw)
      .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten3.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/vanDerGrinten3.js ***!
  \**************************************************************/
/*! exports provided: vanDerGrinten3Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vanDerGrinten3Raw", function() { return vanDerGrinten3Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten3Raw(lambda, phi) {
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [lambda, 0];
  var sinTheta = phi / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      theta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(sinTheta);
  if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) return [0, _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(theta / 2)];
  var A = (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] / lambda - lambda / _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) / 2,
      y1 = sinTheta / (1 + Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(theta));
  return [
    _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(lambda) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(A * A + 1 - y1 * y1) - A),
    _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * y1
  ];
}

vanDerGrinten3Raw.invert = function(x, y) {
  if (!y) return [x, 0];
  var y1 = y / _math__WEBPACK_IMPORTED_MODULE_1__["pi"],
      A = (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (1 - y1 * y1) - x * x) / (2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * x);
  return [
    x ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(A * A + 1) - A) : 0,
    _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])(y1))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(vanDerGrinten3Raw)
        .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten4.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/vanDerGrinten4.js ***!
  \**************************************************************/
/*! exports provided: vanDerGrinten4Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vanDerGrinten4Raw", function() { return vanDerGrinten4Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten4Raw(lambda, phi) {
  if (!phi) return [lambda, 0];
  var phi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(phi);
  if (!lambda || phi0 === _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) return [0, phi];
  var B = phi0 / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      B2 = B * B,
      C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
      C2 = C * C,
      BC = B * C,
      B_C2 = B2 + C2 + 2 * BC,
      B_3C = B + 3 * C,
      lambda0 = lambda / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      lambda1 = lambda0 + 1 / lambda0,
      D = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) - _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(lambda1 * lambda1 - 4),
      D2 = D * D,
      F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + 12 * BC * C2 + 4 * C2 * C2),
      x1 = (D * (B_C2 + C2 - 1) + 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(F)) / (4 * B_C2 + D2);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(lambda) * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * x1,
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(phi) * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 + D * Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x1) - x1 * x1)
  ];
}

vanDerGrinten4Raw.invert = function(x, y) {
  var delta;
  if (!x || !y) return [x, y];
  y /= _math__WEBPACK_IMPORTED_MODULE_1__["pi"];
  var x1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * x / _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"],
      D = (x1 * x1 - 1 + 4 * y * y) / Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x1),
      D2 = D * D,
      B = 2 * y,
      i = 50;
  do {
    var B2 = B * B,
        C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
        C_ = (3 * B - B2 * B - 10) / (2 * B2 * B),
        C2 = C * C,
        BC = B * C,
        B_C = B + C,
        B_C2 = B_C * B_C,
        B_3C = B + 3 * C,
        F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + C2 * (12 * BC + 4 * C2)),
        F_ = -2 * B_C * (4 * BC * C2 + (1 - 4 * B2 + 3 * B2 * B2) * (1 + C_) + C2 * (-6 + 14 * B2 - D2 + (-8 + 8 * B2 - 2 * D2) * C_) + BC * (-8 + 12 * B2 + (-10 + 10 * B2 - D2) * C_)),
        sqrtF = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(F),
        f = D * (B_C2 + C2 - 1) + 2 * sqrtF - x1 * (4 * B_C2 + D2),
        f_ = D * (2 * C * C_ + 2 * B_C * (1 + C_)) + F_ / sqrtF - 8 * B_C * (D * (-1 + C2 + B_C2) + 2 * sqrtF) * (1 + C_) / (D2 + 4 * B_C2);
    B -= delta = f / f_;
  } while (delta > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["sign"])(x) * (Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(D * D + 4) + D) * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] / 4,
    _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] * B
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(vanDerGrinten4Raw)
      .scale(127.16);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner4.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/wagner4.js ***!
  \*******************************************************/
/*! exports provided: wagner4Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wagner4Raw", function() { return wagner4Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var _mollweide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mollweide */ "./node_modules/d3-geo-projection/src/mollweide.js");




var A = 4 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] + 3 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3),
    B = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 * _math__WEBPACK_IMPORTED_MODULE_1__["pi"] * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3) / A);

var wagner4Raw = Object(_mollweide__WEBPACK_IMPORTED_MODULE_2__["mollweideBromleyRaw"])(B * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3) / _math__WEBPACK_IMPORTED_MODULE_1__["pi"], B, A / 6);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(wagner4Raw)
      .scale(176.84);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner6.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/wagner6.js ***!
  \*******************************************************/
/*! exports provided: wagner6Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wagner6Raw", function() { return wagner6Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function wagner6Raw(lambda, phi) {
  return [lambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - 3 * phi * phi / (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"])), phi];
}

wagner6Raw.invert = function(x, y) {
  return [x / Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - 3 * y * y / (_math__WEBPACK_IMPORTED_MODULE_1__["pi"] * _math__WEBPACK_IMPORTED_MODULE_1__["pi"])), y];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(wagner6Raw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner7.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/wagner7.js ***!
  \*******************************************************/
/*! exports provided: wagner7Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wagner7Raw", function() { return wagner7Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function wagner7Raw(lambda, phi) {
  var s = 0.90631 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      c0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - s * s),
      c1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(2 / (1 + c0 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda /= 3)));
  return [
    2.66723 * c0 * c1 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda),
    1.24104 * s * c1
  ];
}

wagner7Raw.invert = function(x, y) {
  var t1 = x / 2.66723,
      t2 = y / 1.24104,
      p = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(t1 * t1 + t2 * t2),
      c = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(p / 2);
  return [
    3 * Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(x * Object(_math__WEBPACK_IMPORTED_MODULE_1__["tan"])(c), 2.66723 * p),
    p && Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(y * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(c) / (1.24104 * 0.90631 * p))
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(wagner7Raw)
      .scale(172.632);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wiechel.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/wiechel.js ***!
  \*******************************************************/
/*! exports provided: wiechelRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wiechelRaw", function() { return wiechelRaw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");



function wiechelRaw(lambda, phi) {
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
      sin1_Phi = 1 - sinPhi,
      cosLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi, -Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi))),
      sinLambda = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda);
  cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(1 - sinPhi * sinPhi);
  return [
    sinLambda * cosPhi - cosLambda * sin1_Phi,
    -cosLambda * cosPhi - sinLambda * sin1_Phi
  ];
}

wiechelRaw.invert = function(x, y) {
  var w = (x * x + y * y) / -2,
      k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(-w * (2 + w)),
      b = y * w + x * k,
      a = x * w - y * k,
      D = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a * a + b * b);
  return [
    Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(k * b, D * (1 + w)),
    D ? -Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * a / D) : 0
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(wiechelRaw)
      .rotate([0, -90, 45])
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/winkel3.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-geo-projection/src/winkel3.js ***!
  \*******************************************************/
/*! exports provided: winkel3Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "winkel3Raw", function() { return winkel3Raw; });
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");
/* harmony import */ var _aitoff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aitoff */ "./node_modules/d3-geo-projection/src/aitoff.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo-projection/src/math.js");




function winkel3Raw(lambda, phi) {
  var coordinates = Object(_aitoff__WEBPACK_IMPORTED_MODULE_1__["aitoffRaw"])(lambda, phi);
  return [
    (coordinates[0] + lambda / _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"]) / 2,
    (coordinates[1] + phi) / 2
  ];
}

winkel3Raw.invert = function(x, y) {
  var lambda = x, phi = y, i = 25;
  do {
    var cosphi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi),
        sinphi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi),
        sin_2phi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(2 * phi),
        sin2phi = sinphi * sinphi,
        cos2phi = cosphi * cosphi,
        sinlambda = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda),
        coslambda_2 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda / 2),
        sinlambda_2 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda / 2),
        sin2lambda_2 = sinlambda_2 * sinlambda_2,
        C = 1 - cos2phi * coslambda_2 * coslambda_2,
        E = C ? Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])(cosphi * coslambda_2) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(F = 1 / C) : F = 0,
        F,
        fx = 0.5 * (2 * E * cosphi * sinlambda_2 + lambda / _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"]) - x,
        fy = 0.5 * (E * sinphi + phi) - y,
        dxdlambda = 0.5 * F * (cos2phi * sin2lambda_2 + E * cosphi * coslambda_2 * sin2phi) + 0.5 / _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        dxdphi = F * (sinlambda * sin_2phi / 4 - E * sinphi * sinlambda_2),
        dydlambda = 0.125 * F * (sin_2phi * sinlambda_2 - E * sinphi * cos2phi * sinlambda),
        dydphi = 0.5 * F * (sin2phi * coslambda_2 + E * sin2lambda_2 * cosphi) + 0.5,
        denominator = dxdphi * dydlambda - dydphi * dxdlambda,
        dlambda = (fy * dxdphi - fx * dydphi) / denominator,
        dphi = (fx * dydlambda - fy * dxdlambda) / denominator;
    lambda -= dlambda, phi -= dphi;
  } while ((Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(dlambda) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(dphi) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_0__["geoProjection"])(winkel3Raw)
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3-geo/index.js ***!
  \**************************************/
/*! exports provided: geoArea, geoBounds, geoCentroid, geoCircle, geoClipExtent, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/area */ "./node_modules/d3-geo/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return _src_area__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/bounds */ "./node_modules/d3-geo/src/bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return _src_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_centroid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/centroid */ "./node_modules/d3-geo/src/centroid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return _src_centroid__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/circle */ "./node_modules/d3-geo/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return _src_circle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_clip_extent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/clip/extent */ "./node_modules/d3-geo/src/clip/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return _src_clip_extent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/contains */ "./node_modules/d3-geo/src/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return _src_contains__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_distance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/distance */ "./node_modules/d3-geo/src/distance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return _src_distance__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_graticule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/graticule */ "./node_modules/d3-geo/src/graticule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return _src_graticule__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return _src_graticule__WEBPACK_IMPORTED_MODULE_7__["graticule10"]; });

/* harmony import */ var _src_interpolate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/interpolate */ "./node_modules/d3-geo/src/interpolate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return _src_interpolate__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_length__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/length */ "./node_modules/d3-geo/src/length.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return _src_length__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_path_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/path/index */ "./node_modules/d3-geo/src/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return _src_path_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_projection_albers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/projection/albers */ "./node_modules/d3-geo/src/projection/albers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return _src_projection_albers__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_projection_albersUsa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/projection/albersUsa */ "./node_modules/d3-geo/src/projection/albersUsa.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return _src_projection_albersUsa__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/projection/azimuthalEqualArea */ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return _src_projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return _src_projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_13__["azimuthalEqualAreaRaw"]; });

/* harmony import */ var _src_projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/projection/azimuthalEquidistant */ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return _src_projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return _src_projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_14__["azimuthalEquidistantRaw"]; });

/* harmony import */ var _src_projection_conicConformal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/projection/conicConformal */ "./node_modules/d3-geo/src/projection/conicConformal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return _src_projection_conicConformal__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return _src_projection_conicConformal__WEBPACK_IMPORTED_MODULE_15__["conicConformalRaw"]; });

/* harmony import */ var _src_projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/projection/conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return _src_projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return _src_projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_16__["conicEqualAreaRaw"]; });

/* harmony import */ var _src_projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/projection/conicEquidistant */ "./node_modules/d3-geo/src/projection/conicEquidistant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return _src_projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return _src_projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_17__["conicEquidistantRaw"]; });

/* harmony import */ var _src_projection_equirectangular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/projection/equirectangular */ "./node_modules/d3-geo/src/projection/equirectangular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return _src_projection_equirectangular__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return _src_projection_equirectangular__WEBPACK_IMPORTED_MODULE_18__["equirectangularRaw"]; });

/* harmony import */ var _src_projection_gnomonic__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/projection/gnomonic */ "./node_modules/d3-geo/src/projection/gnomonic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return _src_projection_gnomonic__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return _src_projection_gnomonic__WEBPACK_IMPORTED_MODULE_19__["gnomonicRaw"]; });

/* harmony import */ var _src_projection_identity__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/projection/identity */ "./node_modules/d3-geo/src/projection/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return _src_projection_identity__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_projection_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/projection/index */ "./node_modules/d3-geo/src/projection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return _src_projection_index__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return _src_projection_index__WEBPACK_IMPORTED_MODULE_21__["projectionMutator"]; });

/* harmony import */ var _src_projection_mercator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/projection/mercator */ "./node_modules/d3-geo/src/projection/mercator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return _src_projection_mercator__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return _src_projection_mercator__WEBPACK_IMPORTED_MODULE_22__["mercatorRaw"]; });

/* harmony import */ var _src_projection_orthographic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/projection/orthographic */ "./node_modules/d3-geo/src/projection/orthographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return _src_projection_orthographic__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return _src_projection_orthographic__WEBPACK_IMPORTED_MODULE_23__["orthographicRaw"]; });

/* harmony import */ var _src_projection_stereographic__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/projection/stereographic */ "./node_modules/d3-geo/src/projection/stereographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return _src_projection_stereographic__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return _src_projection_stereographic__WEBPACK_IMPORTED_MODULE_24__["stereographicRaw"]; });

/* harmony import */ var _src_projection_transverseMercator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/projection/transverseMercator */ "./node_modules/d3-geo/src/projection/transverseMercator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return _src_projection_transverseMercator__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return _src_projection_transverseMercator__WEBPACK_IMPORTED_MODULE_25__["transverseMercatorRaw"]; });

/* harmony import */ var _src_rotation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return _src_rotation__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _src_stream__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return _src_stream__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return _src_transform__WEBPACK_IMPORTED_MODULE_28__["default"]; });





 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).


























/***/ }),

/***/ "./node_modules/d3-geo/src/adder.js":
/*!******************************************!*\
  !*** ./node_modules/d3-geo/src/adder.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/area.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/area.js ***!
  \*****************************************/
/*! exports provided: areaRingSum, areaStream, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaRingSum", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaStream", function() { return areaStream; });
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");





var areaRingSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])();

var areaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["tau"] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  sphere: function() {
    areaSum.add(_math__WEBPACK_IMPORTED_MODULE_1__["tau"]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi = phi / 2 + _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]), sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  phi = phi / 2 + _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(adLambda),
      v = k * sdLambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(adLambda);
  areaRingSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  areaSum.reset();
  Object(_stream__WEBPACK_IMPORTED_MODULE_3__["default"])(object, areaStream);
  return areaSum * 2;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/bounds.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/bounds.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-geo/src/area.js");
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonStart();
  },
  polygonEnd: function() {
    _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (_area__WEBPACK_IMPORTED_MODULE_1__["areaRingSum"] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > _math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi1 = 90;
    else if (deltaSum < -_math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesian"])([lambda * _math__WEBPACK_IMPORTED_MODULE_3__["radians"], phi * _math__WEBPACK_IMPORTED_MODULE_3__["radians"]]);
  if (p0) {
    var normal = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(equatorial, normal);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianNormalizeInPlace"])(inflection);
    inflection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["spherical"])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"] * sign,
        phii,
        antimeridian = Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineEnd();
  if (Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(deltaSum) > _math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["default"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(_stream__WEBPACK_IMPORTED_MODULE_4__["default"])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/cartesian.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/cartesian.js ***!
  \**********************************************/
/*! exports provided: spherical, cartesian, cartesianDot, cartesianCross, cartesianAddInPlace, cartesianScale, cartesianNormalizeInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spherical", function() { return spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesian", function() { return cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianDot", function() { return cartesianDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianCross", function() { return cartesianCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianAddInPlace", function() { return cartesianAddInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianScale", function() { return cartesianScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianNormalizeInPlace", function() { return cartesianNormalizeInPlace; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


function spherical(cartesian) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(cartesian[1], cartesian[0]), Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  return [cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/centroid.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/centroid.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  centroidPointCartesian(cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      w = Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(cx * cx + cy * cy + cz * cz),
      w = Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(_stream__WEBPACK_IMPORTED_MODULE_2__["default"])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) return [NaN, NaN];
  }

  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(m)) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/circle.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/circle.js ***!
  \*******************************************/
/*! exports provided: circleStream, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleStream", function() { return circleStream; });
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-geo/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotation */ "./node_modules/d3-geo/src/rotation.js");





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      sinRadius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])([cosRadius, -sinRadius * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(t), -sinRadius * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(point), point[0] -= cosRadius;
  Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianNormalizeInPlace"])(point);
  var radius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) % _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var center = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0]),
      radius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(90),
      precision = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= _math__WEBPACK_IMPORTED_MODULE_2__["degrees"], x[1] *= _math__WEBPACK_IMPORTED_MODULE_2__["degrees"];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * _math__WEBPACK_IMPORTED_MODULE_2__["radians"],
        p = precision.apply(this, arguments) * _math__WEBPACK_IMPORTED_MODULE_2__["radians"];
    ring = [];
    rotate = Object(_rotation__WEBPACK_IMPORTED_MODULE_3__["rotateRadians"])(-c[0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], -c[1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/antimeridian.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/antimeridian.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/clip/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["pi"],
          delta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - lambda0);
      if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta - _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) { // line crosses antimeridian
        if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - sign0) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda0 -= sign0 * _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; // handle degeneracies
        if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - sign1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda1 -= sign1 * _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0 - lambda1);
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(sinLambda0Lambda1) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]
      ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])((Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0) * (cosPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi1)) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda1)
          - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi1) * (cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0)) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(0, phi);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(0, -phi);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
  } else if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(from[0] - to[0]) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) {
    var lambda = from[0] < to[0] ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["pi"];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/buffer.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/buffer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/circle.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/circle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../circle */ "./node_modules/d3-geo/src/circle.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _pointEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointEqual */ "./node_modules/d3-geo/src/pointEqual.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/clip/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function(radius, delta) {
  var cr = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      smallRadius = cr > 0,
      notHemisphere = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(cr) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(_circle__WEBPACK_IMPORTED_MODULE_1__["circleStream"])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? _math__WEBPACK_IMPORTED_MODULE_2__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_2__["pi"]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point2) || Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point1, point2)) {
            point1[0] += _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            point1[1] += _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(a),
        pb = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(pa, pb),
        n2n2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(n1, n2),
        A = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n1, c1),
        B = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n2, c2);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, u),
        uu = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(u, u),
        t2 = w * w - uu * (Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(t2),
        q = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w - t) / uu);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q, A);
    q = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(delta - _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"],
        meridian = polar || delta < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(q[0] - lambda0) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > _math__WEBPACK_IMPORTED_MODULE_2__["pi"] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w + t) / uu);
      Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q1, A);
      return [q, Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : _math__WEBPACK_IMPORTED_MODULE_2__["pi"] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(_index__WEBPACK_IMPORTED_MODULE_4__["default"])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-_math__WEBPACK_IMPORTED_MODULE_2__["pi"], radius - _math__WEBPACK_IMPORTED_MODULE_2__["pi"]]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/extent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/extent.js ***!
  \************************************************/
/*! exports provided: clipExtent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipExtent", function() { return clipExtent; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-geo/src/clip/line.js");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygon */ "./node_modules/d3-geo/src/clip/polygon.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipExtent(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x0) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 0 : 3
        : Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x1) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 2 : 1
        : Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[1] - y0) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(_buffer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(_polygon__WEBPACK_IMPORTED_MODULE_3__["default"])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(_line__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygon */ "./node_modules/d3-geo/src/clip/polygon.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _polygonContains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polygonContains */ "./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(rotate, sink) {
    var line = clipLine(sink),
        rotatedStart = rotate.invert(start[0], start[1]),
        ringBuffer = Object(_buffer__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments);
        var startInside = Object(_polygonContains__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon, rotatedStart);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(_polygon__WEBPACK_IMPORTED_MODULE_1__["default"])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      var point = rotate(lambda, phi);
      if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      var point = rotate(lambda, phi);
      line.point(point[0], point[1]);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      var point = rotate(lambda, phi);
      ringSink.point(point[0], point[1]);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/line.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/line.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/polygon.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/polygon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pointEqual */ "./node_modules/d3-geo/src/pointEqual.js");


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["default"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(_pointEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/compose.js":
/*!********************************************!*\
  !*** ./node_modules/d3-geo/src/compose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/constant.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/constant.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/contains.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/contains.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polygonContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygonContains */ "./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distance */ "./node_modules/d3-geo/src/distance.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], coordinates[1]),
      ao = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], point),
      ob = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(point, coordinates[1]);
  return ao + ob <= ab + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
}

function containsPolygon(coordinates, point) {
  return !!Object(_polygonContains__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], point[1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"]];
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/distance.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/distance.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./length */ "./node_modules/d3-geo/src/length.js");


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(_length__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/graticule.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/graticule.js ***!
  \**********************************************/
/*! exports provided: default, graticule10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return graticule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graticule10", function() { return graticule10; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");



function graticuleX(y0, y1, dy) {
  var y = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(y0, y1 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(x0, x1 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x % DX) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(x))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y % DY) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 90 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]])
      .extentMinor([[-180, -80 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 80 + _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/identity.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/identity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/interpolate.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/interpolate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var x0 = a[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y0 = a[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      x1 = b[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y1 = b[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      sy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0),
      cy1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1),
      sy1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1),
      kx0 = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x0),
      ky0 = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x0),
      kx1 = cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x1),
      ky1 = cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x1),
      d = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["haversin"])(y1 - y0) + cy0 * cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["haversin"])(x1 - x0))),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(d);

  var interpolate = d ? function(t) {
    var B = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(t *= d) / k,
        A = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"],
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(z, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y)) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]
    ];
  } : function() {
    return [x0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], y0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/length.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/length.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");





var lengthSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: lengthLineStart,
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
}

function lengthPointFirst(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi), cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      delta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda - lambda0),
      cosDelta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(delta),
      sinDelta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  lengthSum.reset();
  Object(_stream__WEBPACK_IMPORTED_MODULE_3__["default"])(object, lengthStream);
  return +lengthSum;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/math.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/math.js ***!
  \*****************************************/
/*! exports provided: epsilon, epsilon2, pi, halfPi, quarterPi, tau, degrees, radians, abs, atan, atan2, cos, ceil, exp, floor, log, pow, sin, sign, sqrt, tan, acos, asin, haversin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarterPi", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "haversin", function() { return haversin; });
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/noop.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/noop.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
function noop() {}


/***/ }),

/***/ "./node_modules/d3-geo/src/path/area.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/path/area.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");




var areaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    areaRingSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
    areaSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["default"] = (areaStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/bounds.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/bounds.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (boundsStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/centroid.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-geo/src/path/centroid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["default"] = (centroidStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/context.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/context.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathContext; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
        break;
      }
    }
  },
  result: _noop__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),

/***/ "./node_modules/d3-geo/src/path/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/path/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area */ "./node_modules/d3-geo/src/path/area.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounds */ "./node_modules/d3-geo/src/path/bounds.js");
/* harmony import */ var _centroid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./centroid */ "./node_modules/d3-geo/src/path/centroid.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/d3-geo/src/path/context.js");
/* harmony import */ var _measure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./measure */ "./node_modules/d3-geo/src/path/measure.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string */ "./node_modules/d3-geo/src/path/string.js");









/* harmony default export */ __webpack_exports__["default"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_area__WEBPACK_IMPORTED_MODULE_2__["default"]));
    return _area__WEBPACK_IMPORTED_MODULE_2__["default"].result();
  };

  path.measure = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_measure__WEBPACK_IMPORTED_MODULE_6__["default"]));
    return _measure__WEBPACK_IMPORTED_MODULE_6__["default"].result();
  };

  path.bounds = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_bounds__WEBPACK_IMPORTED_MODULE_3__["default"]));
    return _bounds__WEBPACK_IMPORTED_MODULE_3__["default"].result();
  };

  path.centroid = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_centroid__WEBPACK_IMPORTED_MODULE_4__["default"]));
    return _centroid__WEBPACK_IMPORTED_MODULE_4__["default"].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, _identity__WEBPACK_IMPORTED_MODULE_0__["default"]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new _string__WEBPACK_IMPORTED_MODULE_7__["default"]) : new _context__WEBPACK_IMPORTED_MODULE_5__["default"](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/path/measure.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/measure.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");




var lengthSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (lengthStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/string.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/string.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathString; });
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _circle: circle(4.5),
  pointRadius: function(_) {
    return this._circle = circle(_), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),

/***/ "./node_modules/d3-geo/src/pointEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/pointEqual.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[0] - b[0]) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] && Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[1] - b[1]) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/polygonContains.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo/src/polygonContains.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");




var sum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda), -Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + _math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
        sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi0),
        cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + _math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
          sinPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi1),
          cosPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > _math__WEBPACK_IMPORTED_MODULE_2__["pi"],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(k * sign * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(absDelta), cosPhi0 * cosPhi1 + k * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(absDelta)));
      angle += antimeridian ? delta + sign * _math__WEBPACK_IMPORTED_MODULE_2__["tau"] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point0), Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point1));
        Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(arc);
        var intersection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(normal, arc);
        Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -_math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] || angle < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && sum < -_math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) ^ (winding & 1);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albers.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albers.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conicEqualArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_0__["default"])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albersUsa.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albersUsa.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _albers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albers */ "./node_modules/d3-geo/src/projection/albers.js");
/* harmony import */ var _conicEqualArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var cache,
      cacheStream,
      lower48 = Object(_albers__WEBPACK_IMPORTED_MODULE_1__["default"])(), lower48Point,
      alaska = Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.120 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.214 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.166 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.115 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(albersUsa, size, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthal.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthal.js ***!
  \*********************************************************/
/*! exports provided: azimuthalRaw, azimuthalInvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalRaw", function() { return azimuthalRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalInvert", function() { return azimuthalInvert; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x),
        cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x),
      k * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y),
        c = angle(z),
        sc = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(c),
        cc = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(c);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x * sc, z * cc),
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z && y * sc / z)
    ];
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthalEqualArea.js ***!
  \******************************************************************/
/*! exports provided: azimuthalEqualAreaRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




var azimuthalEqualAreaRaw = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(cxcy) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / 2);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthalEquidistant.js ***!
  \********************************************************************/
/*! exports provided: azimuthalEquidistantRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




var azimuthalEquidistantRaw = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(c) {
  return (c = Object(_math__WEBPACK_IMPORTED_MODULE_0__["acos"])(c)) && c / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(c);
});

azimuthalEquidistantRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conic.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conic.js ***!
  \*****************************************************/
/*! exports provided: conicProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicProjection", function() { return conicProjection; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 3,
      m = Object(_index__WEBPACK_IMPORTED_MODULE_1__["projectionMutator"])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi1 = _[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"]) : [phi0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], phi1 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicConformal.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicConformal.js ***!
  \**************************************************************/
/*! exports provided: conicConformalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicConformalRaw", function() { return conicConformalRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _mercator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mercator */ "./node_modules/d3-geo/src/projection/mercator.js");




function tany(y) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(cy0 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(tany(y1) / tany(y0)),
      f = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y0), n) / n;

  if (!n) return _mercator__WEBPACK_IMPORTED_MODULE_2__["mercatorRaw"];

  function project(x, y) {
    if (f > 0) { if (y < -_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = -_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    else { if (y > _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    var r = f / Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y), n);
    return [r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(n * x), f - r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + fy * fy);
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(fy)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(fy), 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(f / r, 1 / n)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEqualArea.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicEqualArea.js ***!
  \**************************************************************/
/*! exports provided: conicEqualAreaRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEqualAreaRaw", function() { return conicEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cylindricalEqualArea */ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js");




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0), n = (sy0 + Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return Object(_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_2__["cylindricalEqualAreaRaw"])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c) / n;

  function project(x, y) {
    var r = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c - 2 * n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)) / n;
    return [r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x *= n), r0 - r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(r0y)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(r0y), Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEquidistant.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicEquidistant.js ***!
  \****************************************************************/
/*! exports provided: conicEquidistantRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEquidistantRaw", function() { return conicEquidistantRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _equirectangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equirectangular */ "./node_modules/d3-geo/src/projection/equirectangular.js");




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : (cy0 - Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return _equirectangular__WEBPACK_IMPORTED_MODULE_2__["equirectangularRaw"];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(nx), g - gy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(gy)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(gy), g - Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/cylindricalEqualArea.js ***!
  \********************************************************************/
/*! exports provided: cylindricalEqualAreaRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cylindricalEqualAreaRaw", function() { return cylindricalEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/equirectangular.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/equirectangular.js ***!
  \***************************************************************/
/*! exports provided: equirectangularRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equirectangularRaw", function() { return equirectangularRaw; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/fit.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/fit.js ***!
  \***************************************************/
/*! exports provided: fitExtent, fitSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitExtent", function() { return fitExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitSize", function() { return fitSize; });
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony import */ var _path_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../path/bounds */ "./node_modules/d3-geo/src/path/bounds.js");



function fitExtent(projection, extent, object) {
  var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      clip = projection.clipExtent && projection.clipExtent();

  projection
      .scale(150)
      .translate([0, 0]);

  if (clip != null) projection.clipExtent(null);

  Object(_stream__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projection.stream(_path_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]));

  var b = _path_bounds__WEBPACK_IMPORTED_MODULE_1__["default"].result(),
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

  if (clip != null) projection.clipExtent(clip);

  return projection
      .scale(k * 150)
      .translate([x, y]);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/gnomonic.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/gnomonic.js ***!
  \********************************************************/
/*! exports provided: gnomonicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomonicRaw", function() { return gnomonicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function gnomonicRaw(x, y) {
  var cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

gnomonicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math__WEBPACK_IMPORTED_MODULE_0__["atan"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/identity.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/identity.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clip_extent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clip/extent */ "./node_modules/d3-geo/src/clip/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? _identity__WEBPACK_IMPORTED_MODULE_1__["default"] : Object(_transform__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = _identity__WEBPACK_IMPORTED_MODULE_1__["default"], // scale, translate and reflect
      x0 = null, y0, x1, y1, clip = _identity__WEBPACK_IMPORTED_MODULE_1__["default"], // clip extent
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(clip(cacheStream = stream));
    },
    clipExtent: function(_) {
      return arguments.length ? (clip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity__WEBPACK_IMPORTED_MODULE_1__["default"]) : Object(_clip_extent__WEBPACK_IMPORTED_MODULE_0__["clipExtent"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(projection, size, object);
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/index.js ***!
  \*****************************************************/
/*! exports provided: default, projectionMutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectionMutator", function() { return projectionMutator; });
/* harmony import */ var _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clip/antimeridian */ "./node_modules/d3-geo/src/clip/antimeridian.js");
/* harmony import */ var _clip_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clip/circle */ "./node_modules/d3-geo/src/clip/circle.js");
/* harmony import */ var _clip_extent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clip/extent */ "./node_modules/d3-geo/src/clip/extent.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compose */ "./node_modules/d3-geo/src/compose.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");
/* harmony import */ var _resample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resample */ "./node_modules/d3-geo/src/projection/resample.js");











var transformRadians = Object(_transform__WEBPACK_IMPORTED_MODULE_7__["transformer"])({
  point: function(x, y) {
    this.stream.point(x * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], y * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]);
  }
});

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__["default"], // clip angle
      x0 = null, y0, x1, y1, postclip = _identity__WEBPACK_IMPORTED_MODULE_4__["default"], // clip extent
      delta2 = 0.5, projectResample = Object(_resample__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], point[1] * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], point[1] * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(_clip_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(theta = _ * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], 6 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]) : (theta = null, _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__["default"]), reset()) : theta * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity__WEBPACK_IMPORTED_MODULE_4__["default"]) : Object(_clip_extent__WEBPACK_IMPORTED_MODULE_2__["clipExtent"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], phi = _[1] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], recenter()) : [lambda * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], phi * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaPhi = _[1] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaGamma = _.length > 2 ? _[2] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"] : 0, recenter()) : [deltaLambda * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaPhi * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaGamma * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(_resample__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2 = _ * _), reset()) : Object(_math__WEBPACK_IMPORTED_MODULE_5__["sqrt"])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitExtent"])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitSize"])(projection, size, object);
  };

  function recenter() {
    projectRotate = Object(_compose__WEBPACK_IMPORTED_MODULE_3__["default"])(rotate = Object(_rotation__WEBPACK_IMPORTED_MODULE_6__["rotateRadians"])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/mercator.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/mercator.js ***!
  \********************************************************/
/*! exports provided: mercatorRaw, default, mercatorProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorRaw", function() { return mercatorRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorProjection", function() { return mercatorProjection; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function mercatorRaw(lambda, phi) {
  return [lambda, Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["exp"])(y)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
});

function mercatorProjection(project) {
  var m = Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = _math__WEBPACK_IMPORTED_MODULE_0__["pi"] * scale(),
        t = m(Object(_rotation__WEBPACK_IMPORTED_MODULE_1__["default"])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/orthographic.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/orthographic.js ***!
  \************************************************************/
/*! exports provided: orthographicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orthographicRaw", function() { return orthographicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function orthographicRaw(x, y) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)];
}

orthographicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math__WEBPACK_IMPORTED_MODULE_0__["asin"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/resample.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/resample.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(30 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["default"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(_transform__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a * a + b * b + c * c),
          phi2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(c /= m),
          lambda2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(c) - 1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - lambda1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? (lambda0 + lambda1) / 2 : Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/stereographic.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/stereographic.js ***!
  \*************************************************************/
/*! exports provided: stereographicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereographicRaw", function() { return stereographicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function stereographicRaw(x, y) {
  var cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = 1 + Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

stereographicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(z);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/transverseMercator.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/transverseMercator.js ***!
  \******************************************************************/
/*! exports provided: transverseMercatorRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transverseMercatorRaw", function() { return transverseMercatorRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _mercator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mercator */ "./node_modules/d3-geo/src/projection/mercator.js");



function transverseMercatorRaw(lambda, phi) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["exp"])(x)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var m = Object(_mercator__WEBPACK_IMPORTED_MODULE_1__["mercatorProjection"])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/rotation.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/rotation.js ***!
  \*********************************************/
/*! exports provided: rotateRadians, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRadians", function() { return rotateRadians; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/d3-geo/src/compose.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");



function rotationIdentity(lambda, phi) {
  return [lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda - _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda < -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= _math__WEBPACK_IMPORTED_MODULE_1__["tau"]) ? (deltaPhi || deltaGamma ? Object(_compose__WEBPACK_IMPORTED_MODULE_0__["default"])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda - _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda < -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaPhi),
      sinDeltaPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaPhi),
      cosDeltaGamma = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaGamma),
      sinDeltaGamma = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["default"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate.length > 2 ? rotate[2] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/stream.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/stream.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),

/***/ "./node_modules/d3-geo/src/transform.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/transform.js ***!
  \**********************************************/
/*! exports provided: default, transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony default export */ __webpack_exports__["default"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Annotation.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Annotation.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-simple-maps/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Annotation = function (_Component) {
  _inherits(Annotation, _Component);

  function Annotation() {
    _classCallCheck(this, Annotation);

    return _possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
  }

  _createClass(Annotation, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          projection = _props.projection,
          subject = _props.subject,
          style = _props.style,
          hiddenStyle = _props.hiddenStyle,
          dx = _props.dx,
          dy = _props.dy,
          zoom = _props.zoom,
          stroke = _props.stroke,
          strokeWidth = _props.strokeWidth,
          children = _props.children,
          curve = _props.curve,
          markerEnd = _props.markerEnd,
          width = _props.width,
          height = _props.height;


      var connectorPath = (0, _utils.createConnectorPath)(null, [-dx / zoom, -dy / zoom], curve);
      var translation = projection(subject);

      var lineString = {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [projection.invert([width / 2, height / 2]), subject]
        }
      };

      var radians = Math.PI / 2,
          degrees = 90;
      var isGlobe = projection.clipAngle && projection.clipAngle() === degrees;
      var isHidden = isGlobe && (0, _d3Geo.geoLength)(lineString) > radians;

      return _react2.default.createElement(
        "g",
        {
          className: "rsm-annotation",
          style: isHidden ? _extends({}, style, hiddenStyle) : style,
          transform: "translate(\n          " + (translation[0] + dx / zoom) + "\n          " + (translation[1] + dy / zoom) + "\n        )",
          textAnchor: (0, _utils.createTextAnchor)(dx)
        },
        children,
        _react2.default.createElement("path", {
          d: connectorPath,
          stroke: stroke,
          strokeWidth: strokeWidth,
          fill: "none",
          markerEnd: markerEnd
        })
      );
    }
  }]);

  return Annotation;
}(_react.Component);

Annotation.defaultProps = {
  curve: 0,
  markerEnd: "none",
  componentIdentifier: "Annotation",
  stroke: "#000000",
  strokeWidth: 1,
  zoom: 1
};

exports.default = Annotation;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Annotations.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Annotations.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MapGroup = __webpack_require__(/*! ./MapGroup */ "./node_modules/react-simple-maps/lib/MapGroup.js");

var _MapGroup2 = _interopRequireDefault(_MapGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Annotations = function Annotations(_ref) {
  var groupName = _ref.groupName,
      itemName = _ref.itemName,
      componentIdentifier = _ref.componentIdentifier,
      restProps = _objectWithoutProperties(_ref, ["groupName", "itemName", "componentIdentifier"]);

  return _react2.default.createElement(_MapGroup2.default, _extends({
    groupName: groupName,
    itemName: itemName
  }, restProps));
};

Annotations.defaultProps = {
  componentIdentifier: "Annotations",
  groupName: "annotations",
  itemName: "annotation"
};

exports.default = Annotations;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/ComposableMap.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/ComposableMap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _projections = __webpack_require__(/*! ./projections */ "./node_modules/react-simple-maps/lib/projections.js");

var _projections2 = _interopRequireDefault(_projections);

var _projectionConfig = __webpack_require__(/*! ./projectionConfig */ "./node_modules/react-simple-maps/lib/projectionConfig.js");

var _projectionConfig2 = _interopRequireDefault(_projectionConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComposableMap = function (_Component) {
  _inherits(ComposableMap, _Component);

  function ComposableMap() {
    _classCallCheck(this, ComposableMap);

    var _this = _possibleConstructorReturn(this, (ComposableMap.__proto__ || Object.getPrototypeOf(ComposableMap)).call(this));

    _this.projection = _this.projection.bind(_this);
    return _this;
  }

  _createClass(ComposableMap, [{
    key: "projection",
    value: function projection() {
      var _props = this.props,
          projection = _props.projection,
          projectionConfig = _props.projectionConfig,
          width = _props.width,
          height = _props.height;


      return typeof projection !== "function" ? (0, _projections2.default)(width, height, projectionConfig, projection) : projection(width, height, projectionConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          style = _props2.style,
          className = _props2.className,
          showCenter = _props2.showCenter,
          children = _props2.children,
          aspectRatio = _props2.aspectRatio,
          viewBox = _props2.viewBox,
          defs = _props2.defs;


      return _react2.default.createElement(
        "svg",
        { width: width,
          height: height,
          viewBox: viewBox ? viewBox : "0 0 " + width + " " + height,
          className: "rsm-svg " + (className || ''),
          style: style,
          preserveAspectRatio: aspectRatio },
        defs && _react2.default.createElement(
          "defs",
          null,
          defs
        ),
        _react2.default.cloneElement(this.props.children, {
          projection: this.projection(),
          width: width,
          height: height
        }),
        showCenter && _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("rect", { x: width / 2 - 0.5, y: 0, width: 1, height: height, fill: "#e91e63" }),
          _react2.default.createElement("rect", { x: 0, y: height / 2 - 0.5, width: width, height: 1, fill: "#e91e63" })
        )
      );
    }
  }]);

  return ComposableMap;
}(_react.Component);

ComposableMap.defaultProps = {
  width: 800,
  height: 450,
  projection: "times",
  projectionConfig: _projectionConfig2.default,
  aspectRatio: "xMidYMid",
  viewBox: null
};

exports.default = ComposableMap;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Geographies.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Geographies.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _topojsonClient = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Geographies = function (_Component) {
  _inherits(Geographies, _Component);

  function Geographies(props) {
    _classCallCheck(this, Geographies);

    var _this = _possibleConstructorReturn(this, (Geographies.__proto__ || Object.getPrototypeOf(Geographies)).call(this, props));

    _this.state = {
      geographyPaths: _this.shouldFetchGeographies(props.geography) ? [] : _this.parseGeographies(props.geography)
    };
    return _this;
  }

  _createClass(Geographies, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.geography !== this.props.geography) {
        if (this.shouldFetchGeographies(nextProps.geography)) {
          this.fetchGeographies(nextProps.geography);
        } else {
          this.setState({
            geographyPaths: this.parseGeographies(nextProps.geography)
          });
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var geoPathsChanged = nextState.geographyPaths.length !== this.state.geographyPaths.length;
      return geoPathsChanged || nextProps.disableOptimization;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.geographyUrl || this.props.geographyPaths) {
        console.warn("You are using the deprecated geographyUrl or geographyPaths props. Use the new geography prop instead. Check out the new docs here: https://github.com/zcreativelabs/react-simple-maps#Geographies-component");
      }
      if (this.shouldFetchGeographies(this.props.geography)) {
        this.fetchGeographies(this.props.geography);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelPendingRequest();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          projection = _props.projection,
          style = _props.style,
          children = _props.children;

      return _react2.default.createElement(
        "g",
        { className: "rsm-geographies", style: style },
        children(this.state.geographyPaths || [], projection)
      );
    }
  }, {
    key: "shouldFetchGeographies",
    value: function shouldFetchGeographies(geography) {
      return typeof geography === 'string';
    }
  }, {
    key: "parseGeographies",
    value: function parseGeographies(geography) {
      if (Array.isArray(geography)) {
        return geography;
      }

      if (Object.prototype.toString.call(geography) === '[object Object]') {
        return (0, _topojsonClient.feature)(geography, geography.objects[Object.keys(geography.objects)[0]]).features;
      }

      return [];
    }
  }, {
    key: "fetchGeographies",
    value: function fetchGeographies(geography) {
      var _this2 = this;

      var request = new XMLHttpRequest();
      request.open("GET", geography, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          var geographyPaths = JSON.parse(request.responseText);
          _this2.setState({
            geographyPaths: _this2.parseGeographies(geographyPaths)
          }, function () {
            if (_this2.props.onGeographyPathsLoaded) {
              _this2.props.onGeographyPathsLoaded(String(request.status));
            }
          });
        } else {
          if (_this2.props.onGeographyPathsLoaded) {
            _this2.props.onGeographyPathsLoaded(String(request.status));
          }
        }
      };
      request.onerror = function () {
        console.log("There was a connection error...");
      };
      request.send();

      this.cancelPendingRequest();
      this._xhr = request;
    }
  }, {
    key: "cancelPendingRequest",
    value: function cancelPendingRequest() {
      if (this._xhr) {
        this._xhr.abort();
        this._xhr = null;
      }
    }
  }]);

  return Geographies;
}(_react.Component);

Geographies.defaultProps = {
  componentIdentifier: "Geographies",
  disableOptimization: false,
  geography: ""
};

exports.default = Geographies;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Geography.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Geography.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-simple-maps/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pathCache = {};

var renderPath = function renderPath(cacheId, geography, projection, round, precision) {
  if (pathCache[cacheId]) return pathCache[cacheId];

  var pathString = cacheId ? pathCache[cacheId] ? pathCache[cacheId] : round ? (0, _utils.roundPath)((0, _d3Geo.geoPath)().projection(projection)(geography), precision) : (0, _d3Geo.geoPath)().projection(projection)(geography) : round ? (0, _utils.roundPath)((0, _d3Geo.geoPath)().projection(projection)(geography), precision) : (0, _d3Geo.geoPath)().projection(projection)(geography);

  if (cacheId) pathCache[cacheId] = pathString;

  return pathString;
};

var Geography = function (_Component) {
  _inherits(Geography, _Component);

  function Geography() {
    _classCallCheck(this, Geography);

    var _this = _possibleConstructorReturn(this, (Geography.__proto__ || Object.getPrototypeOf(Geography)).call(this));

    _this.state = {
      hover: false,
      pressed: false
    };

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseClick = _this.handleMouseClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(Geography, [{
    key: "handleMouseClick",
    value: function handleMouseClick(evt) {
      evt.persist();
      var _props = this.props,
          onClick = _props.onClick,
          geography = _props.geography;

      return onClick && onClick(geography, evt);
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(evt) {
      evt.persist();
      var _props2 = this.props,
          onMouseEnter = _props2.onMouseEnter,
          geography = _props2.geography;

      this.setState({
        hover: true
      }, function () {
        return onMouseEnter && onMouseEnter(geography, evt);
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(evt) {
      evt.persist();
      if (this.state.pressed) return;
      var _props3 = this.props,
          onMouseMove = _props3.onMouseMove,
          geography = _props3.geography;

      if (!this.state.hover) {
        this.setState({
          hover: true
        }, function () {
          return onMouseMove && onMouseMove(geography, evt);
        });
      } else if (onMouseMove) onMouseMove(geography, evt);else return;
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(evt) {
      evt.persist();
      var _props4 = this.props,
          onMouseLeave = _props4.onMouseLeave,
          geography = _props4.geography;

      this.setState({
        hover: false,
        pressed: false
      }, function () {
        return onMouseLeave && onMouseLeave(geography, evt);
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(evt) {
      evt.persist();
      var _props5 = this.props,
          onMouseDown = _props5.onMouseDown,
          geography = _props5.geography;

      this.setState({
        pressed: true
      }, function () {
        return onMouseDown && onMouseDown(geography, evt);
      });
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(evt) {
      evt.persist();
      var _props6 = this.props,
          onMouseUp = _props6.onMouseUp,
          geography = _props6.geography;

      this.setState({
        pressed: false
      }, function () {
        return onMouseUp && onMouseUp(geography, evt);
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      evt.persist();
      var _props7 = this.props,
          onFocus = _props7.onFocus,
          geography = _props7.geography;

      this.setState({
        hover: true
      }, function () {
        return onFocus && onFocus(geography, evt);
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      evt.persist();
      var _props8 = this.props,
          onBlur = _props8.onBlur,
          geography = _props8.geography;

      this.setState({
        hover: false
      }, function () {
        return onBlur && onBlur(geography, evt);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props9 = this.props,
          geography = _props9.geography,
          projection = _props9.projection,
          round = _props9.round,
          cacheId = _props9.cacheId,
          precision = _props9.precision,
          tabable = _props9.tabable,
          style = _props9.style;
      var _state = this.state,
          hover = _state.hover,
          pressed = _state.pressed;


      var pathString = renderPath(cacheId, geography, projection, round, precision);

      var excludeProps = ["geography", "projection", "round", "cacheId", "precision", "tabable", "style", "onClick", "onMouseEnter", "onMouseMove", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur"];

      var restProps = Object.keys(this.props).filter(function (key) {
        return excludeProps.indexOf(key) === -1;
      }).reduce(function (obj, key) {
        obj[key] = _this2.props[key];
        return obj;
      }, {});

      return _react2.default.createElement("path", _extends({
        d: pathString,
        className: "rsm-geography" + (pressed ? " rsm-geography--pressed" : "") + (hover ? " rsm-geography--hover" : ""),
        style: style[pressed || hover ? pressed ? "pressed" : "hover" : "default"],
        onClick: this.handleMouseClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        tabIndex: tabable ? 0 : -1
      }, restProps));
    }
  }]);

  return Geography;
}(_react.Component);

Geography.defaultProps = {
  precision: 0.1,
  cacheId: null,
  round: false,
  tabable: true,
  style: {
    default: {},
    hover: {},
    pressed: {}
  }
};

exports.default = Geography;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Graticule.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Graticule.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-simple-maps/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var computeGraticule = function computeGraticule(projection, step) {
  return (0, _d3Geo.geoPath)().projection(projection)((0, _d3Geo.geoGraticule)().step(step)());
};

var computeOutline = function computeOutline(projection) {
  return (0, _d3Geo.geoPath)().projection(projection)((0, _d3Geo.geoGraticule)().outline());
};

var Graticule = function (_Component) {
  _inherits(Graticule, _Component);

  function Graticule() {
    _classCallCheck(this, Graticule);

    var _this = _possibleConstructorReturn(this, (Graticule.__proto__ || Object.getPrototypeOf(Graticule)).call(this));

    _this.state = {
      renderGraticule: false,
      graticulePath: "",
      outlinePath: ""
    };
    _this.renderGraticule = _this.renderGraticule.bind(_this);
    return _this;
  }

  _createClass(Graticule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderGraticule();
    }
  }, {
    key: "renderGraticule",
    value: function renderGraticule() {
      var _props = this.props,
          step = _props.step,
          projection = _props.projection,
          round = _props.round,
          precision = _props.precision;


      this.setState({
        renderGraticule: true,
        graticulePath: round ? (0, _utils.roundPath)(computeGraticule(projection, step), precision) : computeGraticule(projection, step),
        outlinePath: round ? (0, _utils.roundPath)(computeOutline(projection), precision) : computeOutline(projection)
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _props2 = this.props,
          step = _props2.step,
          projection = _props2.projection,
          round = _props2.round,
          precision = _props2.precision,
          globe = _props2.globe;


      if (nextProps.round !== round || nextProps.precision !== precision || globe) {
        this.setState({
          graticulePath: nextProps.round ? (0, _utils.roundPath)(computeGraticule(projection, step), precision) : computeGraticule(projection, step),
          outlinePath: nextProps.round ? (0, _utils.roundPath)(computeOutline(projection), precision) : computeOutline(projection)
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.disableOptimization;
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          zoom = _props3.zoom,
          style = _props3.style,
          outline = _props3.outline,
          fill = _props3.fill,
          stroke = _props3.stroke;


      return this.state.renderGraticule && _react2.default.createElement(
        "g",
        { className: "rsm-graticule" },
        _react2.default.createElement("path", {
          fill: fill,
          stroke: stroke,
          d: this.state.graticulePath,
          style: style
        }),
        outline && _react2.default.createElement("path", {
          fill: fill,
          stroke: stroke,
          d: this.state.outlinePath,
          style: style
        })
      );
    }
  }]);

  return Graticule;
}(_react.Component);

Graticule.defaultProps = {
  componentIdentifier: "Graticule",
  disableOptimization: true,
  globe: false,
  round: true,
  precision: 0.1,
  step: [10, 10],
  outline: true,
  stroke: "#DDDDDD",
  fill: "transparent",
  style: {
    pointerEvents: "none"
  }
};

exports.default = Graticule;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Line.js":
/*!****************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Line.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Component) {
  _inherits(Line, _Component);

  function Line(props) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, props));

    _this.state = {
      hover: false,
      pressed: false
    };

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseClick = _this.handleMouseClick.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(Line, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter(evt) {
      evt.persist();
      var _props = this.props,
          onMouseEnter = _props.onMouseEnter,
          line = _props.line;

      this.setState({
        hover: true
      }, function () {
        return onMouseEnter && onMouseEnter(line, evt);
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(evt) {
      evt.persist();
      if (this.state.pressed) return;
      var _props2 = this.props,
          onMouseMove = _props2.onMouseMove,
          line = _props2.line;

      if (!this.state.hover) {
        this.setState({
          hover: true
        }, function () {
          return onMouseMove && onMouseMove(line, evt);
        });
      } else if (onMouseMove) onMouseMove(line, evt);else return;
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(evt) {
      evt.persist();
      var _props3 = this.props,
          onMouseLeave = _props3.onMouseLeave,
          line = _props3.line;

      this.setState({
        hover: false
      }, function () {
        return onMouseLeave && onMouseLeave(line, evt);
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(evt) {
      evt.persist();
      var _props4 = this.props,
          onMouseDown = _props4.onMouseDown,
          line = _props4.line;

      this.setState({
        pressed: true
      }, function () {
        return onMouseDown && onMouseDown(line, evt);
      });
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(evt) {
      evt.persist();
      var _props5 = this.props,
          onMouseUp = _props5.onMouseUp,
          line = _props5.line;

      this.setState({
        pressed: false
      }, function () {
        return onMouseUp && onMouseUp(line, evt);
      });
    }
  }, {
    key: "handleMouseClick",
    value: function handleMouseClick(evt) {
      if (!this.props.onClick) return;
      evt.persist();
      var _props6 = this.props,
          onClick = _props6.onClick,
          line = _props6.line,
          projection = _props6.projection;

      return onClick && onClick(line, [projection(line.coordinates.start), projection(line.coordinates.end)], evt);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      evt.persist();
      var _props7 = this.props,
          onFocus = _props7.onFocus,
          line = _props7.line;

      this.setState({
        hover: true
      }, function () {
        return onFocus && onFocus(line, evt);
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      evt.persist();
      var _props8 = this.props,
          onBlur = _props8.onBlur,
          line = _props8.line;

      this.setState({
        hover: false
      }, function () {
        return onBlur && onBlur(line, evt);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props9 = this.props,
          className = _props9.className,
          projection = _props9.projection,
          line = _props9.line,
          style = _props9.style,
          tabable = _props9.tabable,
          zoom = _props9.zoom,
          preserveMarkerAspect = _props9.preserveMarkerAspect,
          width = _props9.width,
          height = _props9.height,
          buildPath = _props9.buildPath,
          strokeWidth = _props9.strokeWidth;
      var _state = this.state,
          pressed = _state.pressed,
          hover = _state.hover;


      var scale = preserveMarkerAspect ? " scale(" + 1 / zoom + ")" : "";

      var buildLineString = function buildLineString(coordinates) {
        return {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [projection.invert([width / 2, height / 2]), coordinates]
          }
        };
      };
      var startLineString = buildLineString(line.coordinates.start);
      var endLineString = buildLineString(line.coordinates.end);

      var radians = Math.PI / 2,
          degrees = 90;
      var isGlobe = projection.clipAngle && projection.clipAngle() === degrees;
      var isHidden = isGlobe && ((0, _d3Geo.geoLength)(startLineString) > radians || (0, _d3Geo.geoLength)(endLineString) > radians);

      var start = projection(line.coordinates.start);
      var end = projection(line.coordinates.end);

      var path = buildPath ? buildPath(start, end, line) : "M " + start.join(" ") + " L " + end.join(" ");

      return _react2.default.createElement("path", {
        className: "rsm-line" + (pressed ? " rsm-line--pressed" : "") + (hover ? " rsm-line--hover" : "") + " " + className,
        transform: "" + scale,
        style: style[isHidden ? "hidden" : pressed || hover ? pressed ? "pressed" : "hover" : "default"],
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onClick: this.handleMouseClick,
        onMouseMove: this.handleMouseMove,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        tabIndex: tabable ? 0 : -1,
        d: path,
        strokeWidth: strokeWidth
      });
    }
  }]);

  return Line;
}(_react.Component);

Line.defaultProps = {
  style: {
    default: {},
    hover: {},
    pressed: {}
  },
  line: {
    coordinates: {
      start: [0, 0],
      end: [-99.1, 19.4]
    }
  },
  tabable: true,
  preserveMarkerAspect: true,
  strokeWidth: 1,
  className: ""
};

exports.default = Line;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Lines.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Lines.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MapGroup = __webpack_require__(/*! ./MapGroup */ "./node_modules/react-simple-maps/lib/MapGroup.js");

var _MapGroup2 = _interopRequireDefault(_MapGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Lines = function Lines(_ref) {
  var groupName = _ref.groupName,
      itemName = _ref.itemName,
      componentIdentifier = _ref.componentIdentifier,
      restProps = _objectWithoutProperties(_ref, ["groupName", "itemName", "componentIdentifier"]);

  return _react2.default.createElement(_MapGroup2.default, _extends({
    groupName: groupName,
    itemName: itemName
  }, restProps));
};

Lines.defaultProps = {
  componentIdentifier: "Lines",
  groupName: "lines",
  itemName: "line"
};

exports.default = Lines;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/MapGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/MapGroup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapGroup = function (_Component) {
  _inherits(MapGroup, _Component);

  function MapGroup() {
    _classCallCheck(this, MapGroup);

    return _possibleConstructorReturn(this, (MapGroup.__proto__ || Object.getPrototypeOf(MapGroup)).apply(this, arguments));
  }

  _createClass(MapGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          projection = _props.projection,
          style = _props.style,
          zoom = _props.zoom,
          width = _props.width,
          height = _props.height,
          groupName = _props.groupName,
          itemName = _props.itemName;

      return _react2.default.createElement(
        "g",
        { className: "rsm-" + groupName, style: style },
        !children ? null : children.length === undefined ? _react2.default.cloneElement(children, {
          projection: projection,
          zoom: zoom,
          width: width,
          height: height
        }) : children.map(function (child, i) {
          return !child ? null : _react2.default.cloneElement(child, {
            key: child.key || itemName + "-" + i,
            projection: projection,
            zoom: zoom,
            width: width,
            height: height
          });
        })
      );
    }
  }]);

  return MapGroup;
}(_react.Component);

MapGroup.defaultProps = {
  componentIdentifier: "Group",
  groupName: "group",
  itemName: "group-item"
};

exports.default = MapGroup;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Marker.js":
/*!******************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Marker.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marker = function (_Component) {
  _inherits(Marker, _Component);

  function Marker() {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this));

    _this.state = {
      hover: false,
      pressed: false
    };

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseClick = _this.handleMouseClick.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(Marker, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter(evt) {
      evt.persist();
      var _props = this.props,
          onMouseEnter = _props.onMouseEnter,
          marker = _props.marker;

      this.setState({
        hover: true
      }, function () {
        return onMouseEnter && onMouseEnter(marker, evt);
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(evt) {
      evt.persist();
      if (this.state.pressed) return;
      var _props2 = this.props,
          onMouseMove = _props2.onMouseMove,
          marker = _props2.marker;

      if (!this.state.hover) {
        this.setState({
          hover: true
        }, function () {
          return onMouseMove && onMouseMove(marker, evt);
        });
      } else if (onMouseMove) onMouseMove(marker, evt);else return;
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(evt) {
      evt.persist();
      var _props3 = this.props,
          onMouseLeave = _props3.onMouseLeave,
          marker = _props3.marker;

      this.setState({
        hover: false
      }, function () {
        return onMouseLeave && onMouseLeave(marker, evt);
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(evt) {
      evt.persist();
      var _props4 = this.props,
          onMouseDown = _props4.onMouseDown,
          marker = _props4.marker;

      this.setState({
        pressed: true
      }, function () {
        return onMouseDown && onMouseDown(marker, evt);
      });
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(evt) {
      evt.persist();
      var _props5 = this.props,
          onMouseUp = _props5.onMouseUp,
          marker = _props5.marker;

      this.setState({
        pressed: false
      }, function () {
        return onMouseUp && onMouseUp(marker, evt);
      });
    }
  }, {
    key: "handleMouseClick",
    value: function handleMouseClick(evt) {
      if (!this.props.onClick) return;
      evt.persist();
      var _props6 = this.props,
          onClick = _props6.onClick,
          marker = _props6.marker,
          projection = _props6.projection;

      return onClick && onClick(marker, projection(marker.coordinates), evt);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      evt.persist();
      var _props7 = this.props,
          onFocus = _props7.onFocus,
          marker = _props7.marker;

      this.setState({
        hover: true
      }, function () {
        return onFocus && onFocus(marker, evt);
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      evt.persist();
      var _props8 = this.props,
          onBlur = _props8.onBlur,
          marker = _props8.marker;

      this.setState({
        hover: false
      }, function () {
        return onBlur && onBlur(marker, evt);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props9 = this.props,
          projection = _props9.projection,
          marker = _props9.marker,
          style = _props9.style,
          tabable = _props9.tabable,
          zoom = _props9.zoom,
          children = _props9.children,
          preserveMarkerAspect = _props9.preserveMarkerAspect,
          width = _props9.width,
          height = _props9.height;
      var _state = this.state,
          pressed = _state.pressed,
          hover = _state.hover;


      var scale = preserveMarkerAspect ? " scale(" + 1 / zoom + ")" : "";
      var translation = projection(marker.coordinates);

      var lineString = {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [projection.invert([width / 2, height / 2]), marker.coordinates]
        }
      };

      var radians = Math.PI / 2,
          degrees = 90;
      var isGlobe = projection.clipAngle && projection.clipAngle() === degrees;
      var isHidden = isGlobe && (0, _d3Geo.geoLength)(lineString) > radians;

      return _react2.default.createElement(
        "g",
        { className: "rsm-marker" + (pressed ? " rsm-marker--pressed" : "") + (hover ? " rsm-marker--hover" : ""),
          transform: "translate(\n           " + translation[0] + "\n           " + translation[1] + "\n         ) " + scale,
          style: style[isHidden ? "hidden" : pressed || hover ? pressed ? "pressed" : "hover" : "default"],
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onClick: this.handleMouseClick,
          onMouseMove: this.handleMouseMove,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          tabIndex: tabable ? 0 : -1
        },
        children
      );
    }
  }]);

  return Marker;
}(_react.Component);

Marker.defaultProps = {
  style: {
    default: {},
    hover: {},
    pressed: {}
  },
  marker: {
    coordinates: [0, 0]
  },
  tabable: true,
  preserveMarkerAspect: true
};

exports.default = Marker;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/Markers.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/Markers.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MapGroup = __webpack_require__(/*! ./MapGroup */ "./node_modules/react-simple-maps/lib/MapGroup.js");

var _MapGroup2 = _interopRequireDefault(_MapGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Markers = function Markers(_ref) {
  var groupName = _ref.groupName,
      itemName = _ref.itemName,
      componentIdentifier = _ref.componentIdentifier,
      restProps = _objectWithoutProperties(_ref, ["groupName", "itemName", "componentIdentifier"]);

  return _react2.default.createElement(_MapGroup2.default, _extends({
    groupName: groupName,
    itemName: itemName
  }, restProps));
};

Markers.defaultProps = {
  componentIdentifier: "Markers",
  groupName: "markers",
  itemName: "marker"
};

exports.default = Markers;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/ZoomableGlobe.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/ZoomableGlobe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-simple-maps/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomableGlobe = function (_Component) {
  _inherits(ZoomableGlobe, _Component);

  function ZoomableGlobe(props) {
    _classCallCheck(this, ZoomableGlobe);

    var _this = _possibleConstructorReturn(this, (ZoomableGlobe.__proto__ || Object.getPrototypeOf(ZoomableGlobe)).call(this, props));

    var initialRotation = props.projection.rotate();

    _this.state = {
      mouseX: 0,
      mouseY: 0,
      mouseXStart: 0,
      mouseYStart: 0,
      isPressed: false,
      rotation: [initialRotation[0] - props.center[0], initialRotation[1] - props.center[1], initialRotation[2]]
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    return _this;
  }

  _createClass(ZoomableGlobe, [{
    key: "handleMouseMove",
    value: function handleMouseMove(_ref) {
      var pageX = _ref.pageX,
          pageY = _ref.pageY,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      if (this.props.disablePanning) return;
      if (!this.state.isPressed) return;

      var differenceX = clientX - this.state.mouseXStart;
      var differenceY = clientY - this.state.mouseYStart;

      this.setState({
        mouseX: clientX,
        mouseY: clientY,
        mouseXStart: clientX,
        mouseYStart: clientY,
        rotation: [this.state.rotation[0] + differenceX * this.props.sensitivity, this.state.rotation[1] - differenceY * this.props.sensitivity, this.state.rotation[2]]
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(_ref2) {
      var touches = _ref2.touches;

      this.handleMouseMove(touches[0]);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      if (this.props.disablePanning) return;
      if (!this.state.isPressed) return;
      this.setState({
        isPressed: false
      });
      if (!this.props.onMoveEnd) return;
      var newCenter = this.props.projection.invert([this.props.width / 2, this.props.height / 2]);
      this.props.onMoveEnd(newCenter);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(_ref3) {
      var pageX = _ref3.pageX,
          pageY = _ref3.pageY,
          clientX = _ref3.clientX,
          clientY = _ref3.clientY;

      if (this.props.disablePanning) return;
      this.setState({
        isPressed: true,
        mouseXStart: clientX,
        mouseYStart: clientY
      });
      if (!this.props.onMoveStart) return;
      var currentCenter = this.props.projection.invert([this.props.width / 2, this.props.height / 2]);
      this.props.onMoveStart(currentCenter);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(_ref4) {
      var touches = _ref4.touches;

      if (touches.length > 1) {
        this.handleMouseDown(touches[0]);
      } else {
        this.handleMouseUp();
      }
    }
  }, {
    key: "preventTouchScroll",
    value: function preventTouchScroll(evt) {
      if (evt.touches.length > 1) {
        evt.preventDefault();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _state = this.state,
          mouseX = _state.mouseX,
          mouseY = _state.mouseY;
      var _props = this.props,
          projection = _props.projection,
          center = _props.center,
          zoom = _props.zoom;


      var zoomFactor = nextProps.zoom / zoom;
      var centerChanged = JSON.stringify(nextProps.center) !== JSON.stringify(center);

      this.setState({
        zoom: nextProps.zoom,
        rotation: centerChanged ? [-nextProps.center[0], -nextProps.center[1], this.state.rotation[2]] : this.state.rotation
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          projection = _props2.projection,
          zoom = _props2.zoom;


      window.addEventListener("resize", this.handleResize);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.zoomableGlobeNode.addEventListener("touchmove", this.preventTouchScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("mouseup", this.handleMouseUp);
      this.zoomableGlobeNode.removeEventListener("touchmove", this.preventTouchScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height,
          zoom = _props3.zoom,
          style = _props3.style,
          projection = _props3.projection,
          children = _props3.children;
      var _state2 = this.state,
          mouseX = _state2.mouseX,
          mouseY = _state2.mouseY;


      return _react2.default.createElement(
        "g",
        { className: "rsm-zoomable-globe",
          ref: function ref(zoomableGlobeNode) {
            return _this2.zoomableGlobeNode = zoomableGlobeNode;
          },
          transform: "\n           translate(" + width / 2 + " " + height / 2 + ")\n           scale(" + zoom + ")\n           translate(" + -width / 2 + " " + -height / 2 + ")\n         ",
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleMouseUp,
          style: style
        },
        (0, _utils.createNewChildren)(children, {
          width: width,
          height: height,
          center: this.center,
          backdrop: this.backdrop,
          zoom: this.props.zoom,
          disablePanning: this.props.disablePanning,
          children: children,
          projection: projection.rotate(this.state.rotation)
        })
      );
    }
  }]);

  return ZoomableGlobe;
}(_react.Component);

ZoomableGlobe.defaultProps = {
  center: [0, 0],
  zoom: 1,
  disablePanning: false,
  sensitivity: 0.25
};

exports.default = ZoomableGlobe;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/ZoomableGroup.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/ZoomableGroup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-simple-maps/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZoomableGroup = function (_Component) {
  _inherits(ZoomableGroup, _Component);

  function ZoomableGroup(props) {
    _classCallCheck(this, ZoomableGroup);

    var _this = _possibleConstructorReturn(this, (ZoomableGroup.__proto__ || Object.getPrototypeOf(ZoomableGroup)).call(this, props));

    var backdrop = (0, _utils.computeBackdrop)(props.projection, props.backdrop);

    _this.state = {
      mouseX: (0, _utils.calculateMousePosition)("x", props.projection, props, props.zoom, 1),
      mouseY: (0, _utils.calculateMousePosition)("y", props.projection, props, props.zoom, 1),
      mouseXStart: 0,
      mouseYStart: 0,
      isPressed: false,
      resizeFactorX: 1,
      resizeFactorY: 1,
      backdrop: {
        width: Math.round(backdrop.width),
        height: Math.round(backdrop.height),
        x: Math.round(backdrop.x),
        y: Math.round(backdrop.y)
      }
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);

    return _this;
  }

  _createClass(ZoomableGroup, [{
    key: "handleMouseMove",
    value: function handleMouseMove(_ref) {
      var pageX = _ref.pageX,
          pageY = _ref.pageY;

      if (this.props.disablePanning) return;
      if (!this.state.isPressed) return;
      this.setState({
        mouseX: pageX - this.state.mouseXStart,
        mouseY: pageY - this.state.mouseYStart
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(_ref2) {
      var touches = _ref2.touches;

      this.handleMouseMove(touches[0]);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      if (this.props.disablePanning) return;
      if (!this.state.isPressed) return;
      this.setState({
        isPressed: false
      });
      if (!this.props.onMoveEnd) return;
      var _state = this.state,
          mouseX = _state.mouseX,
          mouseY = _state.mouseY,
          resizeFactorX = _state.resizeFactorX,
          resizeFactorY = _state.resizeFactorY;
      var _props = this.props,
          zoom = _props.zoom,
          width = _props.width,
          height = _props.height,
          projection = _props.projection,
          onMoveEnd = _props.onMoveEnd;

      var x = width / 2 - mouseX * resizeFactorX / zoom;
      var y = height / 2 - mouseY * resizeFactorY / zoom;
      var newCenter = projection.invert([x, y]);
      onMoveEnd(newCenter);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(_ref3) {
      var pageX = _ref3.pageX,
          pageY = _ref3.pageY;

      if (this.props.disablePanning) return;
      var _state2 = this.state,
          mouseX = _state2.mouseX,
          mouseY = _state2.mouseY,
          resizeFactorX = _state2.resizeFactorX,
          resizeFactorY = _state2.resizeFactorY;
      var _props2 = this.props,
          zoom = _props2.zoom,
          width = _props2.width,
          height = _props2.height,
          projection = _props2.projection,
          onMoveStart = _props2.onMoveStart;

      this.setState({
        isPressed: true,
        mouseXStart: pageX - mouseX,
        mouseYStart: pageY - mouseY
      });
      if (!onMoveStart) return;
      var x = width / 2 - mouseX * resizeFactorX / zoom;
      var y = height / 2 - mouseY * resizeFactorY / zoom;
      var currentCenter = projection.invert([x, y]);
      onMoveStart(currentCenter);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(_ref4) {
      var touches = _ref4.touches;

      if (touches.length > 1) {
        this.handleMouseDown(touches[0]);
      } else {
        this.handleMouseUp();
      }
    }
  }, {
    key: "preventTouchScroll",
    value: function preventTouchScroll(evt) {
      if (evt.touches.length > 1) {
        evt.preventDefault();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _state3 = this.state,
          mouseX = _state3.mouseX,
          mouseY = _state3.mouseY,
          resizeFactorX = _state3.resizeFactorX,
          resizeFactorY = _state3.resizeFactorY;
      var _props3 = this.props,
          projection = _props3.projection,
          center = _props3.center,
          zoom = _props3.zoom;


      var zoomFactor = nextProps.zoom / zoom;
      var centerChanged = JSON.stringify(nextProps.center) !== JSON.stringify(center);

      this.setState({
        zoom: nextProps.zoom,
        mouseX: centerChanged ? (0, _utils.calculateMousePosition)("x", nextProps.projection, nextProps, nextProps.zoom, resizeFactorX) : mouseX * zoomFactor,
        mouseY: centerChanged ? (0, _utils.calculateMousePosition)("y", nextProps.projection, nextProps, nextProps.zoom, resizeFactorY) : mouseY * zoomFactor
      });
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _props4 = this.props,
          width = _props4.width,
          height = _props4.height,
          projection = _props4.projection,
          zoom = _props4.zoom;


      var resizeFactorX = (0, _utils.calculateResizeFactor)(this.zoomableGroupNode.parentNode.getBoundingClientRect().width, width);
      var resizeFactorY = (0, _utils.calculateResizeFactor)(this.zoomableGroupNode.parentNode.getBoundingClientRect().height, height);

      var xPercentageChange = 1 / resizeFactorX * this.state.resizeFactorX;
      var yPercentageChange = 1 / resizeFactorY * this.state.resizeFactorY;

      this.setState({
        resizeFactorX: resizeFactorX,
        resizeFactorY: resizeFactorY,
        mouseX: this.state.mouseX * xPercentageChange,
        mouseY: this.state.mouseY * yPercentageChange
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props5 = this.props,
          width = _props5.width,
          height = _props5.height,
          projection = _props5.projection,
          zoom = _props5.zoom;


      var resizeFactorX = (0, _utils.calculateResizeFactor)(this.zoomableGroupNode.parentNode.getBoundingClientRect().width, width);
      var resizeFactorY = (0, _utils.calculateResizeFactor)(this.zoomableGroupNode.parentNode.getBoundingClientRect().height, height);

      this.setState({
        resizeFactorX: resizeFactorX,
        resizeFactorY: resizeFactorY,
        mouseX: (0, _utils.calculateMousePosition)("x", projection, this.props, zoom, resizeFactorX),
        mouseY: (0, _utils.calculateMousePosition)("y", projection, this.props, zoom, resizeFactorY)
      });

      window.addEventListener("resize", this.handleResize);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.zoomableGroupNode.addEventListener("touchmove", this.preventTouchScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("mouseup", this.handleMouseUp);
      this.zoomableGroupNode.removeEventListener("touchmove", this.preventTouchScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props6 = this.props,
          width = _props6.width,
          height = _props6.height,
          zoom = _props6.zoom,
          style = _props6.style,
          projection = _props6.projection,
          children = _props6.children;
      var _state4 = this.state,
          mouseX = _state4.mouseX,
          mouseY = _state4.mouseY,
          resizeFactorX = _state4.resizeFactorX,
          resizeFactorY = _state4.resizeFactorY;


      return _react2.default.createElement(
        "g",
        { className: "rsm-zoomable-group",
          ref: function ref(zoomableGroupNode) {
            return _this2.zoomableGroupNode = zoomableGroupNode;
          },
          transform: "\n           translate(\n             " + Math.round((width / 2 + resizeFactorX * mouseX) * 100) / 100 + "\n             " + Math.round((height / 2 + resizeFactorY * mouseY) * 100) / 100 + "\n           )\n           scale(" + zoom + ")\n           translate(" + -width / 2 + " " + -height / 2 + ")\n         ",
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleMouseUp,
          style: style
        },
        _react2.default.createElement("rect", {
          x: this.state.backdrop.x,
          y: this.state.backdrop.y,
          width: this.state.backdrop.width,
          height: this.state.backdrop.height,
          fill: "transparent",
          style: { strokeWidth: 0 }
        }),
        (0, _utils.createNewChildren)(children, this.props)
      );
    }
  }]);

  return ZoomableGroup;
}(_react.Component);

ZoomableGroup.defaultProps = {
  center: [0, 0],
  backdrop: {
    x: [-179.9, 179.9],
    y: [89.9, -89.9]
  },
  zoom: 1,
  disablePanning: false
};

exports.default = ZoomableGroup;

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ComposableMap = __webpack_require__(/*! ./ComposableMap */ "./node_modules/react-simple-maps/lib/ComposableMap.js");

Object.defineProperty(exports, "ComposableMap", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ComposableMap).default;
  }
});

var _ZoomableGroup = __webpack_require__(/*! ./ZoomableGroup */ "./node_modules/react-simple-maps/lib/ZoomableGroup.js");

Object.defineProperty(exports, "ZoomableGroup", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ZoomableGroup).default;
  }
});

var _ZoomableGlobe = __webpack_require__(/*! ./ZoomableGlobe */ "./node_modules/react-simple-maps/lib/ZoomableGlobe.js");

Object.defineProperty(exports, "ZoomableGlobe", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ZoomableGlobe).default;
  }
});

var _Geographies = __webpack_require__(/*! ./Geographies */ "./node_modules/react-simple-maps/lib/Geographies.js");

Object.defineProperty(exports, "Geographies", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Geographies).default;
  }
});

var _Geography = __webpack_require__(/*! ./Geography */ "./node_modules/react-simple-maps/lib/Geography.js");

Object.defineProperty(exports, "Geography", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Geography).default;
  }
});

var _Marker = __webpack_require__(/*! ./Marker */ "./node_modules/react-simple-maps/lib/Marker.js");

Object.defineProperty(exports, "Marker", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Marker).default;
  }
});

var _Markers = __webpack_require__(/*! ./Markers */ "./node_modules/react-simple-maps/lib/Markers.js");

Object.defineProperty(exports, "Markers", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Markers).default;
  }
});

var _Line = __webpack_require__(/*! ./Line */ "./node_modules/react-simple-maps/lib/Line.js");

Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Line).default;
  }
});

var _Lines = __webpack_require__(/*! ./Lines */ "./node_modules/react-simple-maps/lib/Lines.js");

Object.defineProperty(exports, "Lines", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Lines).default;
  }
});

var _MapGroup = __webpack_require__(/*! ./MapGroup */ "./node_modules/react-simple-maps/lib/MapGroup.js");

Object.defineProperty(exports, "MapGroup", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MapGroup).default;
  }
});

var _Annotation = __webpack_require__(/*! ./Annotation */ "./node_modules/react-simple-maps/lib/Annotation.js");

Object.defineProperty(exports, "Annotation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Annotation).default;
  }
});

var _Annotations = __webpack_require__(/*! ./Annotations */ "./node_modules/react-simple-maps/lib/Annotations.js");

Object.defineProperty(exports, "Annotations", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Annotations).default;
  }
});

var _Graticule = __webpack_require__(/*! ./Graticule */ "./node_modules/react-simple-maps/lib/Graticule.js");

Object.defineProperty(exports, "Graticule", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graticule).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/projectionConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/projectionConfig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  scale: 160,
  xOffset: 0,
  yOffset: 0,
  rotation: [0, 0, 0],
  precision: 0.1
};

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/projections.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/projections.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (width, height, config, projectionName) {

  var scale = config.scale || _projectionConfig2.default.scale;
  var xOffset = config.xOffset || _projectionConfig2.default.xOffset;
  var yOffset = config.yOffset || _projectionConfig2.default.yOffset;
  var rotation = config.rotation || _projectionConfig2.default.rotation;
  var precision = config.precision || _projectionConfig2.default.precision;

  var baseProjection = projectionReference[projectionName]().scale(scale).translate([xOffset + width / 2, yOffset + height / 2]).precision(precision);

  return projectionName === "albersUsa" ? baseProjection : projectionName === "orthographic" ? baseProjection.rotate(rotation).clipAngle(90) : baseProjection.rotate(rotation);
};

var _d3GeoProjection = __webpack_require__(/*! d3-geo-projection */ "./node_modules/d3-geo-projection/index.js");

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");

var _projectionConfig = __webpack_require__(/*! ./projectionConfig */ "./node_modules/react-simple-maps/lib/projectionConfig.js");

var _projectionConfig2 = _interopRequireDefault(_projectionConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectionReference = {
  mercator: _d3Geo.geoMercator,
  miller: _d3GeoProjection.geoMiller,
  times: _d3GeoProjection.geoTimes,
  robinson: _d3GeoProjection.geoRobinson,
  winkel3: _d3GeoProjection.geoWinkel3,
  eckert4: _d3GeoProjection.geoEckert4,
  albersUsa: _d3Geo.geoAlbersUsa,
  orthographic: _d3Geo.geoOrthographic
};

/***/ }),

/***/ "./node_modules/react-simple-maps/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-simple-maps/lib/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateResizeFactor = calculateResizeFactor;
exports.calculateMousePosition = calculateMousePosition;
exports.isChildOfType = isChildOfType;
exports.createNewChildren = createNewChildren;
exports.roundPath = roundPath;
exports.createConnectorPath = createConnectorPath;
exports.createTextAnchor = createTextAnchor;
exports.computeBackdrop = computeBackdrop;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calculateResizeFactor(actualDimension, baseDimension) {
  if (actualDimension === 0) return 1;
  return 1 / 100 * (100 / actualDimension * baseDimension);
}

function calculateMousePosition(direction, projection, props, zoom, resizeFactor) {
  var center = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : props.center;
  var width = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : props.width;
  var height = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : props.height;

  var reference = { x: 0, y: 1 };
  var canRotate = !!projection.rotate;
  var reverseRotation = !!canRotate ? projection.rotate().map(function (item) {
    return -item;
  }) : false;
  var point = !!reverseRotation ? projection.rotate(reverseRotation)([-center[0], -center[1]]) : projection([center[0], center[1]]);
  var returner = point ? (point[reference[direction]] - (reference[direction] === 0 ? width : height) / 2) * zoom * (1 / resizeFactor) : 0;
  if (canRotate) projection.rotate([-reverseRotation[0], -reverseRotation[1], -reverseRotation[2]]);
  return !!reverseRotation ? returner : -returner;
}

function isChildOfType(child, expectedTypes) {
  return expectedTypes.indexOf(child.props.componentIdentifier) !== -1;
}

function createNewChildren(children, props) {
  if (!children) return;
  if (!children.length) {
    return isChildOfType(children, ["Geographies"]) ? _react2.default.cloneElement(children, {
      projection: props.projection
    }) : isChildOfType(children, ["Group", "Markers", "Lines", "Annotations", "Annotation", "Graticule"]) ? _react2.default.cloneElement(children, {
      projection: props.projection,
      zoom: props.zoom,
      width: props.width,
      height: props.height,
      groupName: props.groupName,
      itemName: props.itemName
    }) : children;
  } else {
    return children.map(function (child, i) {
      if (!child) return;
      return isChildOfType(child, ["Geographies"]) ? _react2.default.cloneElement(child, {
        key: "zoomable-child-" + i,
        projection: props.projection
      }) : isChildOfType(child, ["Group", "Markers", "Lines", "Annotations", "Annotation", "Graticule"]) ? _react2.default.cloneElement(child, {
        key: "zoomable-child-" + i,
        projection: props.projection,
        zoom: props.zoom,
        width: props.width,
        height: props.height,
        groupName: props.groupName,
        itemName: props.itemName
      }) : child;
    });
  }
}

function roundPath(path, precision) {
  if (!path) return;
  var query = /[\d\.-][\d\.e-]*/g;
  return path.replace(query, function (n) {
    return Math.round(n * (1 / precision)) / (1 / precision);
  });
}

function createConnectorPath(connectorType, endPoint, curve) {
  var e0 = endPoint[0];
  var e1 = endPoint[1];
  return "M0,0 Q " + (curve + 1) / 2 * e0 + "," + (e1 - (curve + 1) / 2 * e1) + " " + e0 + "," + e1;
}

function createTextAnchor(dx) {
  if (dx > 0) return "start";else if (dx < 0) return "end";else return "middle";
}

function computeBackdrop(projection, backdrop) {
  var canRotate = projection.rotate;
  var originalRotation = canRotate ? projection.rotate() : null;

  var tl = canRotate ? projection.rotate([0, 0, 0])([backdrop.x[0], backdrop.y[0]]) : projection([backdrop.x[0], backdrop.y[0]]);

  var br = canRotate ? projection.rotate([0, 0, 0])([backdrop.x[1], backdrop.y[1]]) : projection([backdrop.x[1], backdrop.y[1]]);

  var x = tl ? tl[0] : 0;
  var x0 = br ? br[0] : 0;

  var y = tl ? tl[1] : 0;
  var y0 = br ? br[1] : 0;

  var width = x0 - x;
  var height = y0 - y;

  if (originalRotation) projection.rotate(originalRotation);

  return { x: x, y: y, width: width, height: height };
}

/***/ }),

/***/ "./node_modules/topojson-client/index.js":
/*!***********************************************!*\
  !*** ./node_modules/topojson-client/index.js ***!
  \***********************************************/
/*! exports provided: bbox, feature, mesh, meshArcs, merge, mergeArcs, neighbors, quantize, transform, untransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bbox */ "./node_modules/topojson-client/src/bbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return _src_bbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return _src_feature__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/mesh */ "./node_modules/topojson-client/src/mesh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["meshArcs"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/merge */ "./node_modules/topojson-client/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["mergeArcs"]; });

/* harmony import */ var _src_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/neighbors */ "./node_modules/topojson-client/src/neighbors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return _src_neighbors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/topojson-client/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/transform */ "./node_modules/topojson-client/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _src_transform__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_untransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/untransform */ "./node_modules/topojson-client/src/untransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return _src_untransform__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./node_modules/topojson-client/src/bbox.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/bbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson-client/src/transform.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var bbox = topology.bbox;

  function bboxPoint(p0) {
    p1[0] = p0[0], p1[1] = p0[1], t(p1);
    if (p1[0] < x0) x0 = p1[0];
    if (p1[0] > x1) x1 = p1[0];
    if (p1[1] < y0) y0 = p1[1];
    if (p1[1] > y1) y1 = p1[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  if (!bbox) {
    var t = Object(_transform__WEBPACK_IMPORTED_MODULE_0__["default"])(topology), p0, p1 = new Array(2), name,
        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

    topology.arcs.forEach(function(arc) {
      var i = -1, n = arc.length;
      while (++i < n) {
        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);
        if (p1[0] < x0) x0 = p1[0];
        if (p1[0] > x1) x1 = p1[0];
        if (p1[1] < y0) y0 = p1[1];
        if (p1[1] > y1) y1 = p1[1];
      }
    });

    for (name in topology.objects) {
      bboxGeometry(topology.objects[name]);
    }

    bbox = topology.bbox = [x0, y0, x1, y1];
  }

  return bbox;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/bisect.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/bisect.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/feature.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/feature.js ***!
  \*****************************************************/
/*! exports provided: default, feature, object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse */ "./node_modules/topojson-client/src/reverse.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson-client/src/transform.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(topology),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k].slice(), k));
    }
    if (i < 0) Object(_reverse__WEBPACK_IMPORTED_MODULE_0__["default"])(points, n);
  }

  function point(p) {
    return transformPoint(p.slice());
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0].slice());
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0].slice());
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),

/***/ "./node_modules/topojson-client/src/identity.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/identity.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/merge.js":
/*!***************************************************!*\
  !*** ./node_modules/topojson-client/src/merge.js ***!
  \***************************************************/
/*! exports provided: default, mergeArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return mergeArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson-client/src/stitch.js");



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}


/***/ }),

/***/ "./node_modules/topojson-client/src/mesh.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/mesh.js ***!
  \**************************************************/
/*! exports provided: default, meshArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return meshArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson-client/src/stitch.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),

/***/ "./node_modules/topojson-client/src/neighbors.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/neighbors.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/topojson-client/src/bisect.js");


/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/quantize.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/quantize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./node_modules/topojson-client/src/bbox.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology, n) {
  if (!((n = Math.floor(n)) >= 2)) throw new Error("n must be ≥2");
  if (topology.transform) throw new Error("already quantized");
  var bb = Object(_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(topology), name,
      dx = bb[0], kx = (bb[2] - dx) / (n - 1) || 1,
      dy = bb[1], ky = (bb[3] - dy) / (n - 1) || 1;

  function quantizePoint(p) {
    p[0] = Math.round((p[0] - dx) / kx);
    p[1] = Math.round((p[1] - dy) / ky);
  }

  function quantizeGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(quantizeGeometry); break;
      case "Point": quantizePoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(quantizePoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = 1,
        j = 1,
        n = arc.length,
        pi = arc[0],
        x0 = pi[0] = Math.round((pi[0] - dx) / kx),
        y0 = pi[1] = Math.round((pi[1] - dy) / ky),
        pj,
        x1,
        y1;

    for (; i < n; ++i) {
      pi = arc[i];
      x1 = Math.round((pi[0] - dx) / kx);
      y1 = Math.round((pi[1] - dy) / ky);
      if (x1 !== x0 || y1 !== y0) {
        pj = arc[j++];
        pj[0] = x1 - x0, x0 = x1;
        pj[1] = y1 - y0, y0 = y1;
      }
    }

    if (j < 2) {
      pj = arc[j++];
      pj[0] = 0;
      pj[1] = 0;
    }

    arc.length = j;
  });

  for (name in topology.objects) {
    quantizeGeometry(topology.objects[name]);
  }

  topology.transform = {
    scale: [kx, ky],
    translate: [dx, dy]
  };

  return topology;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/reverse.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/reverse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/stitch.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/stitch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/transform.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/transform.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  if ((transform = topology.transform) == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var transform,
      x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    point[0] = (x0 += point[0]) * kx + dx;
    point[1] = (y0 += point[1]) * ky + dy;
    return point;
  };
});


/***/ }),

/***/ "./node_modules/topojson-client/src/untransform.js":
/*!*********************************************************!*\
  !*** ./node_modules/topojson-client/src/untransform.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  if ((transform = topology.transform) == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var transform,
      x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(point, i) {
    if (!i) x0 = y0 = 0;
    var x1 = Math.round((point[0] - dx) / kx),
        y1 = Math.round((point[1] - dy) / ky);
    point[0] = x1 - x0, x0 = x1;
    point[1] = y1 - y0, y0 = y1;
    return point;
  };
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_CustomMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/CustomMap */ "./src/CustomMap.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/pages/index.js";
 // import Map from './Map';




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_CustomMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomMap */ "./src/CustomMap.js");
var _jsxFileName = "/Users/briantrang/Documents/tapology/frontend/regional-mma/src/App.js";
 // import Map from './Map';

 // import './App.css';

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");
/* harmony import */ var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/us-albers.json */ "./src/static/us-albers.json");
var _static_us_albers_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/us-albers.json */ "./src/static/us-albers.json", 1);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/lib/index.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__);

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
    const world = _static_us_albers_json__WEBPACK_IMPORTED_MODULE_3__; // Transform your paths with topojson however you want...

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
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__["ComposableMap"], {
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
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__["ZoomableGroup"], {
      center: [-47, 18],
      disablePanning: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__["Geographies"], {
      geography: this.state.geographyPaths,
      disableOptimization: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, (geographies, projection) => geographies.map((geography, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_4__["Geography"], {
      key: `${geography.properties.ADM0_A3}-${i}`,
      cacheId: `path-${geography.properties.ADM0_A3}-${i}`,
      round: true,
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
        lineNumber: 57
      },
      __self: this
    }))))));
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


/***/ })

})
//# sourceMappingURL=index.js.2be68d32672ad3097e0f.hot-update.js.map