webpackHotUpdate("static\\development\\pages\\filmes\\[slug].js",{

/***/ "./pages/filmes/[slug].js":
/*!********************************!*\
  !*** ./pages/filmes/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Sidouxie\\Desktop\\site web\\Droppy\\pages\\filmes\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var filme = _ref.filme;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Droppy - ".concat(filme.title, " en VF streaming gratuit."),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbImZpbG1lIiwidGl0bGUiLCJjYXRlZ29yeSIsInNjZW5hcmlvIiwiZHVyZWUiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJjb3ZlciIsInVybCIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQW9EZTtBQUFBLE1BQUdBLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBRVgsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsMERBQUQ7QUFBUSxTQUFLLHFCQUFjQSxLQUFLLENBQUNDLEtBQXBCLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU1ELEtBQUssQ0FBQ0MsS0FBWixNQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsU0FBaUNELEtBQUssQ0FBQ0UsUUFBdkMsTUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFILFVBQW9DRixLQUFLLENBQUNHLFFBQTFDLE1BSEQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSCxVQUF1Q0gsS0FBSyxDQUFDSSxLQUE3QyxXQUpELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsVUFBK0JKLEtBQUssQ0FBQ0ssV0FBckMsTUFMRCxFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFILFVBQXdDTCxLQUFLLENBQUNNLElBQTlDLE1BTkQsRUFPQztBQUFLLE9BQUcsRUFBRU4sS0FBSyxDQUFDTyxLQUFOLENBQVlDLEdBQXRCO0FBQTJCLE9BQUcsRUFBRVIsS0FBSyxDQUFDTyxLQUFOLENBQVlFLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRCxDQURILENBRlc7QUFBQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmaWxtZXNcXFtzbHVnXS5qcy43MzZjZTRiOTk3MjU0MDA3MmUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudChwcm9jZXNzLmVudi5BUElfVVJMKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCB7IGZpbG1lIH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KGBcclxuICAgICAgICBxdWVyeSBQcm9kdWN0UGFnZVF1ZXJ5KCRzbHVnIDogU3RyaW5nISkge1xyXG4gICAgICAgICAgICBmaWxtZSh3aGVyZSA6IHtzbHVnOiAkc2x1Z30pIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgeWVhclxyXG4gICAgICAgICAgICAgICAgc2NlbmFyaW9cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBkdXJlZVxyXG4gICAgICAgICAgICAgICAgY292ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGAsIHtcclxuICAgICAgICBzbHVnOiBwYXJhbXMuc2x1Z1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZpbG1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB7IGZpbG1lcyB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcclxuICAgICAgICBgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbG1lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBmaWxtZXMubWFwKCh7IHNsdWcgfSkgPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWcgfSxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgZmlsbWUgfSkgPT4gKFxyXG4gICAgXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICA8TGF5b3V0IHRpdGxlPXtgRHJvcHB5IC0gJHtmaWxtZS50aXRsZX0gZW4gVkYgc3RyZWFtaW5nIGdyYXR1aXQuYH0+XHJcbiAgICAgICAgPGgxPiB7ZmlsbWUudGl0bGV9IDwvaDE+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5DYXTDqWdvcmllPC9zdHJvbmc+IDoge2ZpbG1lLmNhdGVnb3J5fSA8L3A+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5Sw6lhbGlzYXRldXI8L3N0cm9uZz4gOiAge2ZpbG1lLnNjZW5hcmlvfSA8L3A+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5EdXLDqWUgZHUgZmlsbWU8L3N0cm9uZz4gOiAge2ZpbG1lLmR1cmVlfSBNaW4uIDwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPlLDqXN1bcOpPC9zdHJvbmc+IDogIHtmaWxtZS5kZXNjcmlwdGlvbn0gPC9wPlxyXG4gICAgICAgIDxwPjxzdHJvbmc+QW5uw6llIGRlIHNvcnRpZTwvc3Ryb25nPiA6ICB7ZmlsbWUueWVhcn0gPC9wPlxyXG4gICAgICAgIDxpbWcgc3JjPXtmaWxtZS5jb3Zlci51cmx9IGFsdD17ZmlsbWUuY292ZXIuZmlsZU5hbWV9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBcclxuKSJdLCJzb3VyY2VSb290IjoiIn0=