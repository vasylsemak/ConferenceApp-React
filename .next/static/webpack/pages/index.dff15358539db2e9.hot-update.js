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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConfigContext\": function() { return /* binding */ ConfigContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ \"./src/Speakers.js\");\nvar _this = undefined;\n\n\n\n\nvar ConfigContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nvar configVal = {\n    showSignMeUp: false\n};\nvar pageToShow = function(pageName) {\n    return pageName === \"Home\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/App.js\",\n        lineNumber: 9,\n        columnNumber: 25\n    }, _this) : pageName === \"Speakers\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/App.js\",\n        lineNumber: 10,\n        columnNumber: 31\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/App.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\nvar App = function(param) {\n    var pageName = param.pageName;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {\n        value: configVal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: pageToShow(pageName)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/App.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, _this);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDQTtBQUNRO0FBRTFCLElBQU1HLGFBQWEsaUJBQUdILDBEQUFtQixFQUFFLENBQUM7QUFDbkQsSUFBTUssU0FBUyxHQUFHO0lBQUVDLFlBQVksRUFBRSxLQUFLO0NBQUU7QUFFekMsSUFBTUMsVUFBVSxHQUFHQyxTQUFBQSxRQUFRO1dBQ3pCQSxRQUFRLEtBQUssTUFBTSxpQkFBRyw4REFBQ1AsNkNBQUk7Ozs7YUFBRyxHQUM1Qk8sUUFBUSxLQUFLLFVBQVUsaUJBQUcsOERBQUNOLGlEQUFROzs7O2FBQUcsaUJBQ3RDLDhEQUFDTyxLQUFHO2tCQUFDLFdBQVM7Ozs7O2FBQU07Q0FDdkI7QUFFRCxJQUFNQyxHQUFHLEdBQUc7UUFBR0YsUUFBUSxTQUFSQSxRQUFRO3lCQUNyQiw4REFBQ0wsYUFBYSxDQUFDUSxRQUFRO1FBQUNDLEtBQUssRUFBRVAsU0FBUztrQkFDdEM7c0JBQUdFLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO3lCQUFJOzs7OzthQUNKO0NBQzFCO0FBSktFLEtBQUFBLEdBQUc7QUFNVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQXBwLmpzP2UzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4vU3BlYWtlcnMnXG5cbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgY29uZmlnVmFsID0geyBzaG93U2lnbk1lVXA6IGZhbHNlIH1cblxuY29uc3QgcGFnZVRvU2hvdyA9IHBhZ2VOYW1lID0+IChcbiAgcGFnZU5hbWUgPT09ICdIb21lJyA/IDxIb21lIC8+XG4gIDogcGFnZU5hbWUgPT09ICdTcGVha2VycycgPyA8U3BlYWtlcnMgLz5cbiAgOiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PlxuKVxuXG5jb25zdCBBcHAgPSAoeyBwYWdlTmFtZSB9KSA9PiAoXG4gIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx9PlxuICAgIDw+e3BhZ2VUb1Nob3cocGFnZU5hbWUpfTwvPlxuICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWUiLCJTcGVha2VycyIsIkNvbmZpZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY29uZmlnVmFsIiwic2hvd1NpZ25NZVVwIiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiZGl2IiwiQXBwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ })

});