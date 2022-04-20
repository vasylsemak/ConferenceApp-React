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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/UseSpeakers */ \"./src/useHooks/UseSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Speakers = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSat = ref1[0], setSpeakersSat = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSun = ref2[0], setSpeakersSun = ref2[1];\n    var handleChangeSat = function() {\n        return setSpeakersSat(!speakersSat);\n    };\n    var handleChangeSun = function() {\n        return setSpeakersSun(!speakersSun);\n    };\n    var satSunProps = {\n        speakersSat: speakersSat,\n        speakersSun: speakersSun,\n        handleChangeSat: handleChangeSat,\n        handleChangeSun: handleChangeSun\n    };\n    var sortedSpeakers = speakerList.filter(function(s) {\n        return speakersSat && s.sat || speakersSun && s.sun;\n    });\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, satSunProps), void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: sortedSpeakers.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                    heartFavHandler: heartFavHandler\n                                }, s), s.id, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, _this);\n};\n_s(Speakers, \"Rivvjcp0KS73NUozfL9SYsVcp+w=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNJO0FBQ2dCO0FBQ2Q7QUFDaUI7O0FBRWhELElBQU1PLFFBQVEsR0FBRyxXQUFNOzs7SUFDckIsSUFJSUQsR0FBYSxHQUFiQSxpRUFBVyxFQUFFLEVBSGZFLFdBQVcsR0FHVEYsR0FBYSxDQUhmRSxXQUFXLEVBQ1hDLFNBQVMsR0FFUEgsR0FBYSxDQUZmRyxTQUFTLEVBQ1RDLGVBQWUsR0FDYkosR0FBYSxDQURmSSxlQUFlO0lBR2pCLElBQXNDVCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBZHRELFdBY29CLEdBQW9CQSxJQUFjLEdBQWxDLEVBZHBCLGNBY29DLEdBQUlBLElBQWMsR0FBbEI7SUFDbEMsSUFBc0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFmdEQsV0Flb0IsR0FBb0JBLElBQWMsR0FBbEMsRUFmcEIsY0Flb0MsR0FBSUEsSUFBYyxHQUFsQjtJQUVsQyxJQUFNYyxlQUFlLEdBQUc7ZUFBTUgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztLQUFBO0lBQzFELElBQU1LLGVBQWUsR0FBRztlQUFNRixjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO0tBQUE7SUFFMUQsSUFBTUksV0FBVyxHQUFHO1FBQ2xCTixXQUFXLEVBQVhBLFdBQVc7UUFDWEUsV0FBVyxFQUFYQSxXQUFXO1FBQ1hFLGVBQWUsRUFBZkEsZUFBZTtRQUNmQyxlQUFlLEVBQWZBLGVBQWU7S0FDaEI7SUFFRCxJQUFNRSxjQUFjLEdBQUdWLFdBQVcsQ0FBQ1csTUFBTSxDQUFDQyxTQUFBQSxDQUFDO2VBQ3pDLFdBQVksSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLElBQU1SLFdBQVcsSUFBSU8sQ0FBQyxDQUFDRSxHQUFHO0tBQUMsQ0FDakQ7SUFFRCxPQUFPYixTQUFTLGlCQUNaLDhEQUFDYyxLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0saUJBRXJCLDhEQUFDQSxLQUFHOzswQkFDRiw4REFBQ3JCLDZDQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDQywrQ0FBTTs7OztxQkFBRzswQkFFViw4REFBQ29CLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOztrQ0FDeEIsOERBQUNwQix1REFBYyxvQkFBS2EsV0FBVzs7Ozs2QkFBRztrQ0FFbEMsOERBQUNNLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxLQUFLO2tDQUNsQiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7c0NBQ3ZCTixjQUFjLENBQUNPLEdBQUcsQ0FBQ0wsU0FBQUEsQ0FBQztxREFDbkIsOERBQUNmLGdEQUFPO29DQUVOSyxlQUFlLEVBQUVBLGVBQWU7bUNBQzVCVSxDQUFDLEdBRkFBLENBQUMsQ0FBQ00sRUFBRTs7OzswQ0FHVDs2QkFDSCxDQUFDOzs7OztpQ0FDRTs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNKO0dBaERLbkIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBa0RkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBTYXRTdW5TcGVha2VycyBmcm9tICcuL1NhdFN1blNwZWFrZXJzJ1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJ1xuaW1wb3J0IFVzZVNwZWFrZXJzIGZyb20gJy4vdXNlSG9va3MvVXNlU3BlYWtlcnMnXG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuICBjb25zdCB7IFxuICAgIHNwZWFrZXJMaXN0LCBcbiAgICBpc0xvYWRpbmcsIFxuICAgIGhlYXJ0RmF2SGFuZGxlclxuICB9ID0gVXNlU3BlYWtlcnMoKVxuXG4gIGNvbnN0IFtzcGVha2Vyc1NhdCwgc2V0U3BlYWtlcnNTYXRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3NwZWFrZXJzU3VuLCBzZXRTcGVha2Vyc1N1bl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdCA9ICgpID0+IHNldFNwZWFrZXJzU2F0KCFzcGVha2Vyc1NhdClcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuID0gKCkgPT4gc2V0U3BlYWtlcnNTdW4oIXNwZWFrZXJzU3VuKVxuXG4gIGNvbnN0IHNhdFN1blByb3BzID0ge1xuICAgIHNwZWFrZXJzU2F0LFxuICAgIHNwZWFrZXJzU3VuLFxuICAgIGhhbmRsZUNoYW5nZVNhdCxcbiAgICBoYW5kbGVDaGFuZ2VTdW5cbiAgfVxuXG4gIGNvbnN0IHNvcnRlZFNwZWFrZXJzID0gc3BlYWtlckxpc3QuZmlsdGVyKHMgPT5cbiAgICAoc3BlYWtlcnNTYXQgJiYgcy5zYXQpIHx8IChzcGVha2Vyc1N1biAmJiBzLnN1bilcbiAgKVxuXG4gIHJldHVybiBpc0xvYWRpbmcgXG4gICAgPyA8ZGl2Pi4uLkxvYWRpbmc8L2Rpdj5cbiAgICA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNZW51IC8+XG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8U2F0U3VuU3BlYWtlcnMgey4uLnNhdFN1blByb3BzfS8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWRlY2snPlxuICAgICAgICAgICAgICB7c29ydGVkU3BlYWtlcnMubWFwKHMgPT4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICAgICAgICBoZWFydEZhdkhhbmRsZXI9e2hlYXJ0RmF2SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIHsuLi5zfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJIZWFkZXIiLCJTYXRTdW5TcGVha2VycyIsIlNwZWFrZXIiLCJVc2VTcGVha2VycyIsIlNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJoZWFydEZhdkhhbmRsZXIiLCJzcGVha2Vyc1NhdCIsInNldFNwZWFrZXJzU2F0Iiwic3BlYWtlcnNTdW4iLCJzZXRTcGVha2Vyc1N1biIsImhhbmRsZUNoYW5nZVNhdCIsImhhbmRsZUNoYW5nZVN1biIsInNhdFN1blByb3BzIiwic29ydGVkU3BlYWtlcnMiLCJmaWx0ZXIiLCJzIiwic2F0Iiwic3VuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});