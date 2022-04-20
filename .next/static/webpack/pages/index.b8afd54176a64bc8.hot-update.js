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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/useSpeakers */ \"./src/useHooks/useSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Speakers = function() {\n    var _this1 = _this;\n    var ref = (0,_useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 11,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        speakSat: speakersSat,\n                        speakSun: speakersSun,\n                        handleSat: handleChangeSat,\n                        handleSun: handleChangeSun\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerList.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                    heartFavHandler: heartFavHandler\n                                }, s), s.id, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 12,\n        columnNumber: 6\n    }, _this);\n};\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUNJO0FBQ2dCO0FBQ2Q7QUFDaUI7QUFFaEQsSUFBTU0sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQW9ERCxHQUFhLEdBQWJBLGlFQUFXLEVBQUUsRUFBekRFLFdBQVcsR0FBaUNGLEdBQWEsQ0FBekRFLFdBQVcsRUFBRUMsU0FBUyxHQUFzQkgsR0FBYSxDQUE1Q0csU0FBUyxFQUFFQyxlQUFlLEdBQUtKLEdBQWEsQ0FBakNJLGVBQWU7SUFFL0MsT0FBT0QsU0FBUyxpQkFBRyw4REFBQ0UsS0FBRztrQkFBQyxZQUFVOzs7OzthQUFNLGlCQUNyQyw4REFBQ0EsS0FBRzs7MEJBQ0gsOERBQUNULDZDQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDQywrQ0FBTTs7OztxQkFBRzswQkFFViw4REFBQ1EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN4Qiw4REFBQ1IsdURBQWM7d0JBQ2JTLFFBQVEsRUFBRUMsV0FBVzt3QkFDckJDLFFBQVEsRUFBRUMsV0FBVzt3QkFDckJDLFNBQVMsRUFBRUMsZUFBZTt3QkFDMUJDLFNBQVMsRUFBRUMsZUFBZTs7Ozs7NkJBQzFCO2tDQUVGLDhEQUFDVCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsS0FBSztrQ0FDbEIsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxXQUFXO3NDQUN2QkosV0FBVyxDQUFDYSxHQUFHLENBQUNDLFNBQUFBLENBQUM7cURBQ2hCLDhEQUFDakIsZ0RBQU87b0NBRU5LLGVBQWUsRUFBRUEsZUFBZTttQ0FDNUJZLENBQUMsR0FGQUEsQ0FBQyxDQUFDQyxFQUFFOzs7OzBDQUdUOzZCQUNILENBQUM7Ozs7O2lDQUNFOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzs7Ozs7YUFFRixDQUFDO0NBQ1Y7QUE5QktoQixLQUFBQSxRQUFRO0FBZ0NkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2F0U3VuU3BlYWtlcnMgZnJvbSAnLi9TYXRTdW5TcGVha2VycydcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcbmltcG9ydCBVc2VTcGVha2VycyBmcm9tICcuL3VzZUhvb2tzL3VzZVNwZWFrZXJzJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgY29uc3QgeyBzcGVha2VyTGlzdCwgaXNMb2FkaW5nLCBoZWFydEZhdkhhbmRsZXIgfSA9IFVzZVNwZWFrZXJzKClcblxuICByZXR1cm4gaXNMb2FkaW5nID8gPGRpdj4uLi5Mb2FkaW5nPC9kaXY+IDpcbiAgICAoPGRpdj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8U2F0U3VuU3BlYWtlcnNcbiAgICAgICAgICBzcGVha1NhdD17c3BlYWtlcnNTYXR9XG4gICAgICAgICAgc3BlYWtTdW49e3NwZWFrZXJzU3VufVxuICAgICAgICAgIGhhbmRsZVNhdD17aGFuZGxlQ2hhbmdlU2F0fVxuICAgICAgICAgIGhhbmRsZVN1bj17aGFuZGxlQ2hhbmdlU3VufVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWRlY2snPlxuICAgICAgICAgICAge3NwZWFrZXJMaXN0Lm1hcChzID0+IChcbiAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICAgICAgaGVhcnRGYXZIYW5kbGVyPXtoZWFydEZhdkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgey4uLnN9IFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkhlYWRlciIsIlNhdFN1blNwZWFrZXJzIiwiU3BlYWtlciIsIlVzZVNwZWFrZXJzIiwiU3BlYWtlcnMiLCJzcGVha2VyTGlzdCIsImlzTG9hZGluZyIsImhlYXJ0RmF2SGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsInNwZWFrU2F0Iiwic3BlYWtlcnNTYXQiLCJzcGVha1N1biIsInNwZWFrZXJzU3VuIiwiaGFuZGxlU2F0IiwiaGFuZGxlQ2hhbmdlU2F0IiwiaGFuZGxlU3VuIiwiaGFuZGxlQ2hhbmdlU3VuIiwibWFwIiwicyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});