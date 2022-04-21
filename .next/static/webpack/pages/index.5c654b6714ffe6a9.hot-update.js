"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Speaker.js":
/*!************************!*\
  !*** ./src/Speaker.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _this = undefined;\n\n\n\nvar Speaker = function(param) {\n    var id = param.id, firstName = param.firstName, lastName = param.lastName, favorite = param.favorite, bio = param.bio, heartFavHandler = param.heartFavHandler;\n    console.log(\"Speaker => \".concat(lastName, \", \").concat(firstName, \"!\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card col-4 cardmin\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"card-img-top\",\n                primaryImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n                secondaryImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n                alt: \"\".concat(firstName, \" \").concat(lastName)\n            }, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"card-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-sessionid\": id,\n                                className: favorite ? \"heartredbutton\" : \"heartdarkbutton\",\n                                onClick: function(e) {\n                                    heartFavHandler(e, !favorite);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    firstName,\n                                    \" \",\n                                    lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speaker.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUI7QUFDOEI7QUFFdkQsSUFBTUUsT0FBTyxHQUFHLGdCQUVWO1FBREpDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsZUFBZSxTQUFmQSxlQUFlO0lBRXZEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFZLENBQWVOLE1BQVMsQ0FBdEJDLFFBQVEsRUFBQyxJQUFFLENBQVksT0FBQyxDQUFYRCxTQUFTLEVBQUMsR0FBQyxDQUFDLENBQUM7SUFFcEQscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7MEJBQ2pDLDhEQUFDWCw0REFBbUI7Z0JBQ2xCVyxTQUFTLEVBQUMsY0FBYztnQkFDeEJDLFVBQVUsRUFBRSw4QkFBNkIsQ0FBSyxNQUFJLENBQVBWLEVBQUUsRUFBQyxNQUFJLENBQUM7Z0JBQ25EVyxZQUFZLEVBQUUsMkJBQTBCLENBQUssTUFBSSxDQUFQWCxFQUFFLEVBQUMsTUFBSSxDQUFDO2dCQUNsRFksR0FBRyxFQUFFLEVBQUMsQ0FBZVYsTUFBUSxDQUFyQkQsU0FBUyxFQUFDLEdBQUMsQ0FBVyxRQUFUQyxRQUFRLENBQUU7Ozs7O3FCQUMvQjswQkFFRiw4REFBQ00sS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN4Qiw4REFBQ0ksSUFBRTt3QkFBQ0osU0FBUyxFQUFDLFlBQVk7OzBDQUN4Qiw4REFBQ0ssUUFBTTtnQ0FDTEMsZ0JBQWMsRUFBRWYsRUFBRTtnQ0FDbEJTLFNBQVMsRUFBRU4sUUFBUSxHQUFHLGdCQUFnQixHQUFHLGlCQUFpQjtnQ0FDMURhLE9BQU8sRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0NBQ2RaLGVBQWUsQ0FBQ1ksQ0FBQyxFQUFFLENBQUNkLFFBQVEsQ0FBQztpQ0FDOUI7Ozs7O3FDQUNEOzBDQUNGLDhEQUFDZSxNQUFJOztvQ0FBRWpCLFNBQVM7b0NBQUMsR0FBQztvQ0FBQ0MsUUFBUTs7Ozs7O3FDQUFROzs7Ozs7NkJBQ2hDO2tDQUNMLDhEQUFDZ0IsTUFBSTtrQ0FBRWQsR0FBRzs7Ozs7NkJBQVE7Ozs7OztxQkFDZDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBN0JLTCxLQUFBQSxPQUFPO0FBK0JiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2VyLmpzPzc0NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJ1xuXG5jb25zdCBTcGVha2VyID0gKHtcbiAgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGZhdm9yaXRlLCBiaW8sIGhlYXJ0RmF2SGFuZGxlclxufSkgPT4ge1xuICBjb25zb2xlLmxvZyhgU3BlYWtlciA9PiAke2xhc3ROYW1lfSwgJHtmaXJzdE5hbWV9IWApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGF0YS1zZXNzaW9uaWQ9e2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGhlYXJ0RmF2SGFuZGxlcihlLCAhZmF2b3JpdGUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX0ge2xhc3ROYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlciJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJTcGVha2VyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZhdm9yaXRlIiwiYmlvIiwiaGVhcnRGYXZIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJhbHQiLCJoNCIsImJ1dHRvbiIsImRhdGEtc2Vzc2lvbmlkIiwib25DbGljayIsImUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speaker.js\n");

/***/ })

});