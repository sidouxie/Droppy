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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
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
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Droppy - Regardez ", filme.title, " en VF streaming gratuit.")), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, " ", filme.title, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 20
    }
  }, "Cat\xE9gorie"), " : ", filme.category, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 20
    }
  }, "R\xE9alisateur"), " :  ", filme.scenario, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 20
    }
  }, "Dur\xE9e du filme"), " :  ", filme.duree, " Min. "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 20
    }
  }, "R\xE9sum\xE9"), " :  ", filme.description, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 20
    }
  }, "Ann\xE9e de sortie"), " :  ", filme.year, " "), __jsx("img", {
    src: filme.cover.url,
    alt: filme.cover.fileName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbImZpbG1lIiwidGl0bGUiLCJjYXRlZ29yeSIsInNjZW5hcmlvIiwiZHVyZWUiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJjb3ZlciIsInVybCIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFvRGU7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUVYLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUEwQkEsS0FBSyxDQUFDQyxLQUFoQyw4QkFBTixDQURKLEVBRVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNRCxLQUFLLENBQUNDLEtBQVosTUFGUixFQUdRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILFNBQWlDRCxLQUFLLENBQUNFLFFBQXZDLE1BSFIsRUFJUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxVQUFvQ0YsS0FBSyxDQUFDRyxRQUExQyxNQUpSLEVBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUgsVUFBdUNILEtBQUssQ0FBQ0ksS0FBN0MsV0FMUixFQU1RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILFVBQStCSixLQUFLLENBQUNLLFdBQXJDLE1BTlIsRUFPUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSCxVQUF3Q0wsS0FBSyxDQUFDTSxJQUE5QyxNQVBSLEVBUVE7QUFBSyxPQUFHLEVBQUVOLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxHQUF0QjtBQUEyQixPQUFHLEVBQUVSLEtBQUssQ0FBQ08sS0FBTixDQUFZRSxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUlIsQ0FESixDQUZXO0FBQUEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZmlsbWVzXFxbc2x1Z10uanMuMmNhNmQxMTliZTgyMTI2ZjM5M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQocHJvY2Vzcy5lbnYuQVBJX1VSTCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgeyBmaWxtZSB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChgXHJcbiAgICAgICAgcXVlcnkgUHJvZHVjdFBhZ2VRdWVyeSgkc2x1ZyA6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgZmlsbWUod2hlcmUgOiB7c2x1ZzogJHNsdWd9KSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIHllYXJcclxuICAgICAgICAgICAgICAgIHNjZW5hcmlvXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZHVyZWVcclxuICAgICAgICAgICAgICAgIGNvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgLCB7XHJcbiAgICAgICAgc2x1ZzogcGFyYW1zLnNsdWdcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmaWxtZSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgeyBmaWxtZXMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXHJcbiAgICAgICAgYFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxtZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsdWcgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogZmlsbWVzLm1hcCgoeyBzbHVnIH0pID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGZpbG1lIH0pID0+IChcclxuICAgIFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPjx0aXRsZT5Ecm9wcHkgLSBSZWdhcmRleiB7ZmlsbWUudGl0bGV9IGVuIFZGIHN0cmVhbWluZyBncmF0dWl0LjwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGgxPiB7ZmlsbWUudGl0bGV9IDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkNhdMOpZ29yaWU8L3N0cm9uZz4gOiB7ZmlsbWUuY2F0ZWdvcnl9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UsOpYWxpc2F0ZXVyPC9zdHJvbmc+IDogIHtmaWxtZS5zY2VuYXJpb30gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EdXLDqWUgZHUgZmlsbWU8L3N0cm9uZz4gOiAge2ZpbG1lLmR1cmVlfSBNaW4uIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UsOpc3Vtw6k8L3N0cm9uZz4gOiAge2ZpbG1lLmRlc2NyaXB0aW9ufSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkFubsOpZSBkZSBzb3J0aWU8L3N0cm9uZz4gOiAge2ZpbG1lLnllYXJ9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWxtZS5jb3Zlci51cmx9IGFsdD17ZmlsbWUuY292ZXIuZmlsZU5hbWV9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBcclxuKSJdLCJzb3VyY2VSb290IjoiIn0=