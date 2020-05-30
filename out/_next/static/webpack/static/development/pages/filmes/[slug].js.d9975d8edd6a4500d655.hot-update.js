webpackHotUpdate("static\\development\\pages\\filmes\\[slug].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/filmes/[slug].js":
/*!********************************!*\
  !*** ./pages/filmes/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Sidouxie\\Desktop\\site web\\Droppy\\pages\\filmes\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["Droppy - ", " en VF streaming gratuit."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var filme = _ref.filme;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: _this.props.title(_templateObject(), filme.title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, " ", filme.title, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }, "Cat\xE9gorie"), " : ", filme.category, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 12
    }
  }, "R\xE9alisateur"), " :  ", filme.scenario, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }
  }, "Dur\xE9e du filme"), " :  ", filme.duree, " Min. "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 12
    }
  }, "R\xE9sum\xE9"), " :  ", filme.description, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }
  }, "Ann\xE9e de sortie"), " :  ", filme.year, " "), __jsx("img", {
    src: filme.cover.url,
    alt: filme.cover.fileName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZpbG1lcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiZmlsbWUiLCJwcm9wcyIsInRpdGxlIiwiY2F0ZWdvcnkiLCJzY2VuYXJpbyIsImR1cmVlIiwiZGVzY3JpcHRpb24iLCJ5ZWFyIiwiY292ZXIiLCJ1cmwiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7QUFvRGU7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUVYLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFiLG9CQUE4QkYsS0FBSyxDQUFDRSxLQUFwQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU1GLEtBQUssQ0FBQ0UsS0FBWixNQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsU0FBaUNGLEtBQUssQ0FBQ0csUUFBdkMsTUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFILFVBQW9DSCxLQUFLLENBQUNJLFFBQTFDLE1BSEQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSCxVQUF1Q0osS0FBSyxDQUFDSyxLQUE3QyxXQUpELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsVUFBK0JMLEtBQUssQ0FBQ00sV0FBckMsTUFMRCxFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFILFVBQXdDTixLQUFLLENBQUNPLElBQTlDLE1BTkQsRUFPQztBQUFLLE9BQUcsRUFBRVAsS0FBSyxDQUFDUSxLQUFOLENBQVlDLEdBQXRCO0FBQTJCLE9BQUcsRUFBRVQsS0FBSyxDQUFDUSxLQUFOLENBQVlFLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRCxDQURILENBRlc7QUFBQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmaWxtZXNcXFtzbHVnXS5qcy5kOTk3NWQ4ZWRkNmE0NTAwZDY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQocHJvY2Vzcy5lbnYuQVBJX1VSTCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgeyBmaWxtZSB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChgXHJcbiAgICAgICAgcXVlcnkgUHJvZHVjdFBhZ2VRdWVyeSgkc2x1ZyA6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgZmlsbWUod2hlcmUgOiB7c2x1ZzogJHNsdWd9KSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIHllYXJcclxuICAgICAgICAgICAgICAgIHNjZW5hcmlvXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZHVyZWVcclxuICAgICAgICAgICAgICAgIGNvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgLCB7XHJcbiAgICAgICAgc2x1ZzogcGFyYW1zLnNsdWdcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmaWxtZSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgeyBmaWxtZXMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXHJcbiAgICAgICAgYFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxtZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsdWcgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogZmlsbWVzLm1hcCgoeyBzbHVnIH0pID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGZpbG1lIH0pID0+IChcclxuICAgIFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgPExheW91dCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWBEcm9wcHkgLSAke2ZpbG1lLnRpdGxlfSBlbiBWRiBzdHJlYW1pbmcgZ3JhdHVpdC5gfT5cclxuICAgICAgICA8aDE+IHtmaWxtZS50aXRsZX0gPC9oMT5cclxuICAgICAgICA8cD48c3Ryb25nPkNhdMOpZ29yaWU8L3N0cm9uZz4gOiB7ZmlsbWUuY2F0ZWdvcnl9IDwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPlLDqWFsaXNhdGV1cjwvc3Ryb25nPiA6ICB7ZmlsbWUuc2NlbmFyaW99IDwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPkR1csOpZSBkdSBmaWxtZTwvc3Ryb25nPiA6ICB7ZmlsbWUuZHVyZWV9IE1pbi4gPC9wPlxyXG4gICAgICAgIDxwPjxzdHJvbmc+UsOpc3Vtw6k8L3N0cm9uZz4gOiAge2ZpbG1lLmRlc2NyaXB0aW9ufSA8L3A+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5Bbm7DqWUgZGUgc29ydGllPC9zdHJvbmc+IDogIHtmaWxtZS55ZWFyfSA8L3A+XHJcbiAgICAgICAgPGltZyBzcmM9e2ZpbG1lLmNvdmVyLnVybH0gYWx0PXtmaWxtZS5jb3Zlci5maWxlTmFtZX0gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIFxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==