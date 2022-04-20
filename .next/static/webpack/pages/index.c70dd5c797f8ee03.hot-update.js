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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/UseSpeakers */ \"./src/useHooks/UseSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Speakers = function() {\n    var _this1 = _this;\n    var ref = (0,_useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerList.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                    heartFavHandler: heartFavHandler\n                                }, s), s.id, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, _this);\n};\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUNJO0FBQ2dCO0FBQ2Q7QUFDaUI7QUFFaEQsSUFBTU0sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBSUlELEdBQWEsR0FBYkEsaUVBQVcsRUFBRSxFQUhmRSxXQUFXLEdBR1RGLEdBQWEsQ0FIZkUsV0FBVyxFQUNYQyxTQUFTLEdBRVBILEdBQWEsQ0FGZkcsU0FBUyxFQUNUQyxlQUFlLEdBQ2JKLEdBQWEsQ0FEZkksZUFBZTtJQUdqQixPQUFPRCxTQUFTLGlCQUNaLDhEQUFDRSxLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0saUJBRXJCLDhEQUFDQSxLQUFHOzswQkFDRiw4REFBQ1QsNkNBQUk7Ozs7cUJBQUc7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3FCQUFHOzBCQUVWLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0NBQ3hCLDhEQUFDUix1REFBYzs7Ozs2QkFBRztrQ0FFbEIsOERBQUNPLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxLQUFLO2tDQUNsQiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7c0NBQ3ZCSixXQUFXLENBQUNLLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQztxREFDaEIsOERBQUNULGdEQUFPO29DQUVOSyxlQUFlLEVBQUVBLGVBQWU7bUNBQzVCSSxDQUFDLEdBRkFBLENBQUMsQ0FBQ0MsRUFBRTs7OzswQ0FHVDs2QkFDSCxDQUFDOzs7OztpQ0FDRTs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNKO0FBL0JLUixLQUFBQSxRQUFRO0FBaUNkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2F0U3VuU3BlYWtlcnMgZnJvbSAnLi9TYXRTdW5TcGVha2VycydcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcbmltcG9ydCBVc2VTcGVha2VycyBmcm9tICcuL3VzZUhvb2tzL1VzZVNwZWFrZXJzJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgY29uc3QgeyBcbiAgICBzcGVha2VyTGlzdCwgXG4gICAgaXNMb2FkaW5nLCBcbiAgICBoZWFydEZhdkhhbmRsZXJcbiAgfSA9IFVzZVNwZWFrZXJzKClcblxuICByZXR1cm4gaXNMb2FkaW5nIFxuICAgID8gPGRpdj4uLi5Mb2FkaW5nPC9kaXY+XG4gICAgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPFNhdFN1blNwZWFrZXJzIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWRlY2snPlxuICAgICAgICAgICAgICB7c3BlYWtlckxpc3QubWFwKHMgPT4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICAgICAgICBoZWFydEZhdkhhbmRsZXI9e2hlYXJ0RmF2SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIHsuLi5zfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiSGVhZGVyIiwiU2F0U3VuU3BlYWtlcnMiLCJTcGVha2VyIiwiVXNlU3BlYWtlcnMiLCJTcGVha2VycyIsInNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwiaGVhcnRGYXZIYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ }),

/***/ "./src/useHooks/UseSpeakers.js":
/*!*************************************!*\
  !*** ./src/useHooks/UseSpeakers.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\n// speakersSat\n// speakersSun\n// handleChangeSat\n// handleChangeSun\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), speakerList = ref[0], setSpeakerList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), speakersSat = ref2[0], setSpeakersSat = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), speakersSun = ref3[0], setSpeakersSun = ref3[1];\n    var handleChangeSat = function() {\n        return setSpeakersSat(!speakersSat);\n    };\n    var handleChangeSun = function() {\n        return setSpeakersSun(!speakersSun);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        // get speakers data simulating API call\n        setSpeakerList(_data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  favorite speaker functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        var refinedSpeakerList = speakerList.map(function(s) {\n            return s.id === sessionId ? _objectSpread({}, s, {\n                favorite: favValue\n            }) : s;\n        });\n        setSpeakerList(refinedSpeakerList);\n    };\n    // return results from custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler,\n        speakersSat: speakersSat,\n        speakersSun: speakersSun,\n        handleChangeSat: handleChangeSat,\n        handleChangeSun: handleChangeSun\n    };\n};\n_s(UseSpeakers, \"7Jh4eH8LtQ33YyurcN5sG1OZvfw=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7O0FBRTVDLGNBQWM7QUFDZCxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUVMLFNBQVNHLFdBQVcsR0FBRzs7SUFDcEMsSUFBc0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUcEQsV0FTb0IsR0FBb0JBLEdBQVksR0FBaEMsRUFUcEIsY0FTb0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNsQyxJQUFrQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVZsRCxTQVVrQixHQUFrQkEsSUFBYyxHQUFoQyxFQVZsQixZQVVnQyxHQUFJQSxJQUFjLEdBQWxCO0lBRTlCLElBQXNDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBWnRELFdBWW9CLEdBQW9CQSxJQUFjLEdBQWxDLEVBWnBCLGNBWW9DLEdBQUlBLElBQWMsR0FBbEI7SUFDbEMsSUFBc0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFidEQsV0Fhb0IsR0FBb0JBLElBQWMsR0FBbEMsRUFicEIsY0Fhb0MsR0FBSUEsSUFBYyxHQUFsQjtJQUVsQyxJQUFNWSxlQUFlLEdBQUc7ZUFBTUgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztLQUFBO0lBQzFELElBQU1LLGVBQWUsR0FBRztlQUFNRixjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO0tBQUE7SUFFMURULGdEQUFTLENBQUMsV0FBTTtRQUNkTSxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRWxCLElBQUlPLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDdkJDLFVBQVUsQ0FBQyxXQUFNO2dCQUNmRCxPQUFPLEVBQUU7YUFDVixFQUFFLElBQUksQ0FBQztTQUNULENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFdBQU07WUFDWlYsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDO1FBQ0Ysd0NBQXdDO1FBQ3hDRixjQUFjLENBQUNILDBEQUFXLENBQUM7UUFFM0IsT0FBTyxXQUFNO1lBQ1hnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQztLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRVIsa0NBQWtDO0lBQ2hDLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxDQUFDLEVBQUVDLFFBQVEsRUFBSztRQUN2Q0QsQ0FBQyxDQUFDRSxjQUFjLEVBQUU7UUFDbEIsd0RBQXdEO1FBQ3hELElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLEtBQUssQ0FBQztRQUV2RSxJQUFNQyxrQkFBa0IsR0FBR3pCLFdBQVcsQ0FBQzBCLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQzttQkFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtSLFNBQVMsR0FDOUQsa0JBQUlPLENBQUM7Z0JBQUVFLFFBQVEsRUFBRVgsUUFBUTtjQUFDLEdBQUdTLENBQUM7U0FBQSxDQUFDO1FBRW5DMUIsY0FBYyxDQUFDd0Isa0JBQWtCLENBQUM7S0FDbkM7SUFFSCxrQ0FBa0M7SUFDaEMsT0FBTztRQUNMekIsV0FBVyxFQUFYQSxXQUFXO1FBQ1hFLFNBQVMsRUFBVEEsU0FBUztRQUNUYyxlQUFlLEVBQWZBLGVBQWU7UUFDZlosV0FBVyxFQUFYQSxXQUFXO1FBQ1hFLFdBQVcsRUFBWEEsV0FBVztRQUNYRSxlQUFlLEVBQWZBLGVBQWU7UUFDZkMsZUFBZSxFQUFmQSxlQUFlO0tBQ2hCO0NBQ0Y7R0FsRHVCVixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUhvb2tzL1VzZVNwZWFrZXJzLmpzPzBhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uL2RhdGEvc3BlYWtlci1kYXRhJ1xuXG4gIC8vIHNwZWFrZXJzU2F0XG4gIC8vIHNwZWFrZXJzU3VuXG4gIC8vIGhhbmRsZUNoYW5nZVNhdFxuICAvLyBoYW5kbGVDaGFuZ2VTdW5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlU3BlYWtlcnMoKSB7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IFtzcGVha2Vyc1NhdCwgc2V0U3BlYWtlcnNTYXRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3NwZWFrZXJzU3VuLCBzZXRTcGVha2Vyc1N1bl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdCA9ICgpID0+IHNldFNwZWFrZXJzU2F0KCFzcGVha2Vyc1NhdClcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuID0gKCkgPT4gc2V0U3BlYWtlcnNTdW4oIXNwZWFrZXJzU3VuKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSwgMTAwMClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KVxuICAgIC8vIGdldCBzcGVha2VycyBkYXRhIHNpbXVsYXRpbmcgQVBJIGNhbGxcbiAgICBzZXRTcGVha2VyTGlzdChzcGVha2VyRGF0YSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCBmcm9tIFNwZWFrZXJzIGNvbXBvbmVudCcpXG4gICAgfVxuICB9LCBbXSlcblxuLy8gIGZhdm9yaXRlIHNwZWFrZXIgZnVuY3Rpb25hbGl0eVxuICBjb25zdCBoZWFydEZhdkhhbmRsZXIgPSAoZSwgZmF2VmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBzZWxlY3QgY2xpY2tlZCBzcGVha2VyIGJ5IGF0dHJpYnV0ZSAnZGF0YS1zZXNzaW9uLWlkJ1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpXG5cbiAgICBjb25zdCByZWZpbmVkU3BlYWtlckxpc3QgPSBzcGVha2VyTGlzdC5tYXAocyA9PiBzLmlkID09PSBzZXNzaW9uSWRcbiAgICAgID8gey4uLnMsIGZhdm9yaXRlOiBmYXZWYWx1ZX0gOiBzKVxuXG4gICAgc2V0U3BlYWtlckxpc3QocmVmaW5lZFNwZWFrZXJMaXN0KVxuICB9XG5cbi8vIHJldHVybiByZXN1bHRzIGZyb20gY3VzdG9tIGhvb2tcbiAgcmV0dXJuIHsgXG4gICAgc3BlYWtlckxpc3QsIFxuICAgIGlzTG9hZGluZywgXG4gICAgaGVhcnRGYXZIYW5kbGVyLFxuICAgIHNwZWFrZXJzU2F0LFxuICAgIHNwZWFrZXJzU3VuLFxuICAgIGhhbmRsZUNoYW5nZVNhdCxcbiAgICBoYW5kbGVDaGFuZ2VTdW5cbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNwZWFrZXJEYXRhIiwiVXNlU3BlYWtlcnMiLCJzcGVha2VyTGlzdCIsInNldFNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3BlYWtlcnNTYXQiLCJzZXRTcGVha2Vyc1NhdCIsInNwZWFrZXJzU3VuIiwic2V0U3BlYWtlcnNTdW4iLCJoYW5kbGVDaGFuZ2VTYXQiLCJoYW5kbGVDaGFuZ2VTdW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImhlYXJ0RmF2SGFuZGxlciIsImUiLCJmYXZWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJyZWZpbmVkU3BlYWtlckxpc3QiLCJtYXAiLCJzIiwiaWQiLCJmYXZvcml0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});