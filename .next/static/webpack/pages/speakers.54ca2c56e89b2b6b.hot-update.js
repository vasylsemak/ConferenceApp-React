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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/useSpeakers */ \"./src/useHooks/useSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n// import speakerData from './data/speaker-data'\n\nvar isLoading = true;\nvar useSpeakers = useSpeakers();\nconsole.log(\"useSpeakers => \", useSpeakers);\nvar Speakers = function() {\n    var _this1 = _this;\n    // const [speakerList, setSpeakerList] = useState([])\n    // const [isLoading, setIsLoading] = useState(true)\n    // const [speakersSat, setSpeakersSat] = useState(true)\n    // const [speakersSun, setSpeakersSun] = useState(true)\n    // load speaker-data to state after initial rendering\n    //   useEffect(() => {\n    //     setIsLoading(true)\n    //     new Promise((resolve) => {\n    //       setTimeout(() => {\n    //         resolve()\n    //       }, 1500)\n    //     }).then(() => {\n    //       setIsLoading(false)\n    //     })\n    //     setSpeakerList(speakerData)\n    //     return () => {\n    //       console.log('cleanup from Speakers component')\n    //     }\n    //   }, [])\n    // //  favorite speaker functionality\n    //   const heartFavHandler = (e, favValue) => {\n    //     e.preventDefault()\n    //     // select clicked speaker by attribute 'data-session-id'\n    //     const sessionId = parseInt(e.target.attributes['data-sessionid'].value)\n    //     const refinedSpeakerList = speakerList.map(s => s.id === sessionId\n    //       ? {...s, favorite: favValue} : s)\n    //     setSpeakerList(refinedSpeakerList)\n    //   }\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 53,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: speakerList.map(function(s) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                heartFavHandler: heartFavHandler\n                            }, s), s.id, false, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 54,\n        columnNumber: 6\n    }, _this);\n};\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDSTtBQUNnQjtBQUNkO0FBQy9CLGdEQUFnRDtBQUNBO0FBRWhELElBQU1RLFNBQVMsR0FBRyxJQUFJO0FBRXRCLElBQU1DLFdBQVcsR0FBR0EsV0FBVyxFQUFFO0FBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUYsV0FBVyxDQUFDO0FBRTNDLElBQU1HLFFBQVEsR0FBRyxXQUFNOztJQUNyQixxREFBcUQ7SUFDckQsbURBQW1EO0lBRW5ELHVEQUF1RDtJQUN2RCx1REFBdUQ7SUFFekQscURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFFekIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsU0FBUztJQUVULGtDQUFrQztJQUVsQyxxQkFBcUI7SUFDckIsdURBQXVEO0lBQ3ZELFFBQVE7SUFDUixXQUFXO0lBRVgscUNBQXFDO0lBQ3JDLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsK0RBQStEO0lBQy9ELDhFQUE4RTtJQUU5RSx5RUFBeUU7SUFDekUsMENBQTBDO0lBRTFDLHlDQUF5QztJQUN6QyxNQUFNO0lBR0osT0FBT0osU0FBUyxpQkFBRyw4REFBQ0ssS0FBRztrQkFBQyxZQUFVOzs7OzthQUFNLGlCQUNyQyw4REFBQ0EsS0FBRzs7MEJBQ0gsOERBQUNWLDZDQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDQywrQ0FBTTs7OztxQkFBRzswQkFFViw4REFBQ1MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBUXhCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFDbEIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxXQUFXO2tDQUN2QkMsV0FBVyxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLENBQUM7aURBQ2hCLDhEQUFDWCxnREFBTztnQ0FFTlksZUFBZSxFQUFFQSxlQUFlOytCQUM1QkQsQ0FBQyxHQUZBQSxDQUFDLENBQUNFLEVBQUU7Ozs7c0NBR1Q7eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0U7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7O2FBRUYsQ0FBQztDQUNWO0FBbEVLUCxLQUFBQSxRQUFRO0FBb0VkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNhdFN1blNwZWFrZXJzIGZyb20gJy4vU2F0U3VuU3BlYWtlcnMnXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXG4vLyBpbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi9kYXRhL3NwZWFrZXItZGF0YSdcbmltcG9ydCBVc2VTcGVha2VycyBmcm9tICcuL3VzZUhvb2tzL3VzZVNwZWFrZXJzJ1xuXG5jb25zdCBpc0xvYWRpbmcgPSB0cnVlXG5cbmNvbnN0IHVzZVNwZWFrZXJzID0gdXNlU3BlYWtlcnMoKTtcbmNvbnNvbGUubG9nKCd1c2VTcGVha2VycyA9PiAnLCB1c2VTcGVha2VycylcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIC8vIGNvbnN0IFtzcGVha2Vyc1NhdCwgc2V0U3BlYWtlcnNTYXRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgLy8gY29uc3QgW3NwZWFrZXJzU3VuLCBzZXRTcGVha2Vyc1N1bl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4vLyBsb2FkIHNwZWFrZXItZGF0YSB0byBzdGF0ZSBhZnRlciBpbml0aWFsIHJlbmRlcmluZ1xuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4vLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICByZXNvbHZlKClcbi8vICAgICAgIH0sIDE1MDApXG4vLyAgICAgfSkudGhlbigoKSA9PiB7XG4vLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4vLyAgICAgfSlcblxuLy8gICAgIHNldFNwZWFrZXJMaXN0KHNwZWFrZXJEYXRhKVxuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwIGZyb20gU3BlYWtlcnMgY29tcG9uZW50Jylcbi8vICAgICB9XG4vLyAgIH0sIFtdKVxuXG4vLyAvLyAgZmF2b3JpdGUgc3BlYWtlciBmdW5jdGlvbmFsaXR5XG4vLyAgIGNvbnN0IGhlYXJ0RmF2SGFuZGxlciA9IChlLCBmYXZWYWx1ZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuLy8gICAgIC8vIHNlbGVjdCBjbGlja2VkIHNwZWFrZXIgYnkgYXR0cmlidXRlICdkYXRhLXNlc3Npb24taWQnXG4vLyAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSlcblxuLy8gICAgIGNvbnN0IHJlZmluZWRTcGVha2VyTGlzdCA9IHNwZWFrZXJMaXN0Lm1hcChzID0+IHMuaWQgPT09IHNlc3Npb25JZFxuLy8gICAgICAgPyB7Li4ucywgZmF2b3JpdGU6IGZhdlZhbHVlfSA6IHMpXG5cbi8vICAgICBzZXRTcGVha2VyTGlzdChyZWZpbmVkU3BlYWtlckxpc3QpXG4vLyAgIH1cblxuXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8ZGl2Pi4uLkxvYWRpbmc8L2Rpdj4gOlxuICAgICg8ZGl2PlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIHsvKiA8U2F0U3VuU3BlYWtlcnNcbiAgICAgICAgICBzcGVha1NhdD17c3BlYWtlcnNTYXR9XG4gICAgICAgICAgc3BlYWtTdW49e3NwZWFrZXJzU3VufVxuICAgICAgICAgIGhhbmRsZVNhdD17aGFuZGxlQ2hhbmdlU2F0fVxuICAgICAgICAgIGhhbmRsZVN1bj17aGFuZGxlQ2hhbmdlU3VufVxuICAgICAgICAvPiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1kZWNrJz5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdC5tYXAocyA9PiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzLmlkfVxuICAgICAgICAgICAgICAgIGhlYXJ0RmF2SGFuZGxlcj17aGVhcnRGYXZIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHsuLi5zfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVudSIsIkhlYWRlciIsIlNhdFN1blNwZWFrZXJzIiwiU3BlYWtlciIsIlVzZVNwZWFrZXJzIiwiaXNMb2FkaW5nIiwidXNlU3BlYWtlcnMiLCJjb25zb2xlIiwibG9nIiwiU3BlYWtlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGVha2VyTGlzdCIsIm1hcCIsInMiLCJoZWFydEZhdkhhbmRsZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ }),

/***/ "./src/useHooks/useSpeakers.js":
/*!*************************************!*\
  !*** ./src/useHooks/useSpeakers.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), speakerList = ref[0], setSpeakerList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1500);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        setSpeakerList(_data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  favorite speaker functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        var refinedSpeakerList = speakerList.map(function(s) {\n            return s.id === sessionId ? _objectSpread({}, s, {\n                favorite: favValue\n            }) : s;\n        });\n        setSpeakerList(refinedSpeakerList);\n    };\n    // return results from custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler\n    };\n};\n_s(UseSpeakers, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvdXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0o7O0FBRS9CLFNBQVNJLFdBQVcsR0FBRzs7SUFDcEMsSUFBc0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKcEQsV0FJb0IsR0FBb0JBLEdBQVksR0FBaEMsRUFKcEIsY0FJb0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNsQyxJQUFrQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUxsRCxTQUtrQixHQUFrQkEsSUFBYyxHQUFoQyxFQUxsQixZQUtnQyxHQUFJQSxJQUFjLEdBQWxCO0lBRTlCQyxnREFBUyxDQUFDLFdBQU07UUFDZE0sWUFBWSxDQUFDLElBQUksQ0FBQztRQUVsQixJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFDZkQsT0FBTyxFQUFFO2FBQ1YsRUFBRSxJQUFJLENBQUM7U0FDVCxDQUFDLENBQUNFLElBQUksQ0FBQyxXQUFNO1lBQ1pKLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDcEIsQ0FBQztRQUVGRixjQUFjLENBQUNILDBEQUFXLENBQUM7UUFFM0IsT0FBTyxXQUFNO1lBQ1hVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFUixrQ0FBa0M7SUFDaEMsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLENBQUMsRUFBRUMsUUFBUSxFQUFLO1FBQ3ZDRCxDQUFDLENBQUNFLGNBQWMsRUFBRTtRQUNsQix3REFBd0Q7UUFDeEQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNKLENBQUMsQ0FBQ0ssTUFBTSxDQUFDQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1FBRXZFLElBQU1DLGtCQUFrQixHQUFHbkIsV0FBVyxDQUFDb0IsR0FBRyxDQUFDQyxTQUFBQSxDQUFDO21CQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBS1IsU0FBUyxHQUM5RCxrQkFBSU8sQ0FBQztnQkFBRUUsUUFBUSxFQUFFWCxRQUFRO2NBQUMsR0FBR1MsQ0FBQztTQUFBLENBQUM7UUFFbkNwQixjQUFjLENBQUNrQixrQkFBa0IsQ0FBQztLQUNuQztJQUVILGtDQUFrQztJQUNoQyxPQUFPO1FBQ0xuQixXQUFXLEVBQVhBLFdBQVc7UUFDWEUsU0FBUyxFQUFUQSxTQUFTO1FBQ1RRLGVBQWUsRUFBZkEsZUFBZTtLQUNoQjtDQUNGO0dBeEN1QlgsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91c2VIb29rcy91c2VTcGVha2Vycy5qcz9mMGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vZGF0YS9zcGVha2VyLWRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZVNwZWFrZXJzKCkge1xuICBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0sIDE1MDApXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSlcblxuICAgIHNldFNwZWFrZXJMaXN0KHNwZWFrZXJEYXRhKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwIGZyb20gU3BlYWtlcnMgY29tcG9uZW50JylcbiAgICB9XG4gIH0sIFtdKVxuXG4vLyAgZmF2b3JpdGUgc3BlYWtlciBmdW5jdGlvbmFsaXR5XG4gIGNvbnN0IGhlYXJ0RmF2SGFuZGxlciA9IChlLCBmYXZWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIHNlbGVjdCBjbGlja2VkIHNwZWFrZXIgYnkgYXR0cmlidXRlICdkYXRhLXNlc3Npb24taWQnXG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSlcblxuICAgIGNvbnN0IHJlZmluZWRTcGVha2VyTGlzdCA9IHNwZWFrZXJMaXN0Lm1hcChzID0+IHMuaWQgPT09IHNlc3Npb25JZFxuICAgICAgPyB7Li4ucywgZmF2b3JpdGU6IGZhdlZhbHVlfSA6IHMpXG5cbiAgICBzZXRTcGVha2VyTGlzdChyZWZpbmVkU3BlYWtlckxpc3QpXG4gIH1cblxuLy8gcmV0dXJuIHJlc3VsdHMgZnJvbSBjdXN0b20gaG9va1xuICByZXR1cm4ge1xuICAgIHNwZWFrZXJMaXN0LFxuICAgIGlzTG9hZGluZyxcbiAgICBoZWFydEZhdkhhbmRsZXJcbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3BlYWtlckRhdGEiLCJVc2VTcGVha2VycyIsInNwZWFrZXJMaXN0Iiwic2V0U3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImhlYXJ0RmF2SGFuZGxlciIsImUiLCJmYXZWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJyZWZpbmVkU3BlYWtlckxpc3QiLCJtYXAiLCJzIiwiaWQiLCJmYXZvcml0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useHooks/useSpeakers.js\n");

/***/ })

});