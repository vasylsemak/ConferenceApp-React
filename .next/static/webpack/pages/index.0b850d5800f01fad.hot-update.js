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

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar SignMeUp = function(param) {\n    var signupCallback = param.signupCallback;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var handleClick = function(e) {\n        e.preventDefault();\n        signupCallback(email);\n        alert(\"signup confirmed \");\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Enter email\",\n                    type: \"email\",\n                    name: \"email\",\n                    value: email,\n                    onChange: function(e) {\n                        return setEmail(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/SignMeUp.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bnt\",\n                    type: \"submit\",\n                    disabled: !email.includes(\"@\"),\n                    onClick: handleClick,\n                    children: \"Get Updates\"\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/SignMeUp.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/SignMeUp.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/SignMeUp.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignMeUp, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = SignMeUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignMeUp);\nvar _c;\n$RefreshReg$(_c, \"SignMeUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2lnbk1lVXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBdUM7O0FBRXZDLElBQU1FLFFBQVEsR0FBRyxnQkFBd0I7UUFBckJDLGNBQWMsU0FBZEEsY0FBYzs7SUFDaEMsSUFBMEJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFIeEMsS0FHYyxHQUFjQSxHQUFZLEdBQTFCLEVBSGQsUUFHd0IsR0FBSUEsR0FBWSxHQUFoQjtJQUV0QixJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQkwsY0FBYyxDQUFDQyxLQUFLLENBQUM7UUFDckJLLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUMxQkosUUFBUSxDQUFDLEVBQUUsQ0FBQztLQUNiO0lBRUQscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxTQUFTOzs4QkFDdEIsOERBQUNDLE9BQUs7b0JBQ0pDLFdBQVcsRUFBQyxhQUFhO29CQUN6QkMsSUFBSSxFQUFDLE9BQU87b0JBQ1pDLElBQUksRUFBQyxPQUFPO29CQUNaQyxLQUFLLEVBQUVaLEtBQUs7b0JBQ1phLFFBQVEsRUFBRVYsU0FBQUEsQ0FBQzsrQkFBSUYsUUFBUSxDQUFDRSxDQUFDLENBQUNXLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO3FCQUFBOzs7Ozt5QkFDdkM7OEJBQ0YsOERBQUNHLFFBQU07b0JBQ0xSLFNBQVMsRUFBQyxLQUFLO29CQUNmRyxJQUFJLEVBQUMsUUFBUTtvQkFDYk0sUUFBUSxFQUFFLENBQUNoQixLQUFLLENBQUNpQixRQUFRLENBQUMsR0FBRyxDQUFDO29CQUM5QkMsT0FBTyxFQUFFaEIsV0FBVzs4QkFDckIsYUFBVzs7Ozs7eUJBQVM7Ozs7OztpQkFFakI7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBOUJLSixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFnQ2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NpZ25NZVVwLmpzPzc5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFNpZ25NZVVwID0gKHsgc2lnbnVwQ2FsbGJhY2sgfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzaWdudXBDYWxsYmFjayhlbWFpbClcbiAgICBhbGVydCgnc2lnbnVwIGNvbmZpcm1lZCAnKVxuICAgIHNldEVtYWlsKCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBlbWFpbCdcbiAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdibnQnXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoJ0AnKX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgPkdldCBVcGRhdGVzPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduTWVVcCIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJpbmNsdWRlcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SignMeUp.js\n");

/***/ })

});