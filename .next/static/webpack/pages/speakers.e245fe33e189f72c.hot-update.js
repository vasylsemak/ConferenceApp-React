"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/speaker-data */ \"./src/data/speaker-data.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Speakers = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakerList = ref[0], setSpeakerList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1500);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        setSpeakerList(_data_speaker_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 29,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: speakerList.map(function(s) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                children: s\n                            }, s.id, false, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 30,\n        columnNumber: 6\n    }, _this);\n};\n_s(Speakers, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWtEO0FBQ3JCO0FBQ0o7QUFDTTtBQUNjOztBQUU3QyxJQUFNTyxRQUFRLEdBQUcsV0FBTTs7O0lBQ3JCLElBQXNDTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUHBELFdBT29CLEdBQW9CQSxHQUFZLEdBQWhDLEVBUHBCLGNBT29DLEdBQUlBLEdBQVksR0FBaEI7SUFDbEMsSUFBa0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFSbEQsU0FRa0IsR0FBa0JBLElBQWMsR0FBaEMsRUFSbEIsWUFRZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFbEIsSUFBSUMsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSztZQUN2QkMsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZELE9BQU8sRUFBRTthQUNWLEVBQUUsSUFBSSxDQUFDO1NBQ1QsQ0FBQyxDQUFDRSxJQUFJLENBQUMsV0FBTTtZQUNaSixZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUM7UUFFRkYsY0FBYyxDQUFDSCwwREFBVyxDQUFDO1FBRTNCLE9BQU8sV0FBTTtZQUNYVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQztLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4sT0FBT1AsU0FBUyxpQkFBRyw4REFBQ1EsS0FBRztrQkFBQyxZQUFVOzs7OzthQUFNLGlCQUNyQyw4REFBQ0EsS0FBRzs7MEJBRUgsOERBQUNkLDZDQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDRCwrQ0FBTTs7OztxQkFBRzswQkFFViw4REFBQ2UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBQ3hCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFDbEIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxXQUFXO2tDQUN2QlgsV0FBVyxDQUFDWSxHQUFHLENBQUNDLFNBQUFBLENBQUM7aURBQ2hCLDhEQUFDaEIsZ0RBQU87Z0NBQVlpQixRQUFRLEVBQUVELENBQUM7K0JBQWpCQSxDQUFDLENBQUNFLEVBQUU7Ozs7c0NBQWlCO3lCQUNwQyxDQUFDOzs7Ozs2QkFDRTs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFFRixDQUFDO0NBQ1Y7R0F2Q0toQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF5Q2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi9kYXRhL3NwZWFrZXItZGF0YSdcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSwgMTUwMClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KVxuXG4gICAgc2V0U3BlYWtlckxpc3Qoc3BlYWtlckRhdGEpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAgZnJvbSBTcGVha2VycyBjb21wb25lbnQnKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIGlzTG9hZGluZyA/IDxkaXY+Li4uTG9hZGluZzwvZGl2PiA6XG4gICAgKDxkaXY+XG5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1kZWNrJz5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdC5tYXAocyA9PiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyIGtleT17cy5pZH0gY2hpbGRyZW49e3N9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIk1lbnUiLCJTcGVha2VyIiwic3BlYWtlckRhdGEiLCJTcGVha2VycyIsInNwZWFrZXJMaXN0Iiwic2V0U3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInMiLCJjaGlsZHJlbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});