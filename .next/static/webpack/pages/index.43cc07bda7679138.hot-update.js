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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/useSpeakers */ \"./src/useHooks/useSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n// import speakerData from './data/speaker-data'\n\nvar Speakers = function() {\n    var _this1 = _this;\n    // const [speakerList, setSpeakerList] = useState([])\n    // const [isLoading, setIsLoading] = useState(true)\n    // const [speakersSat, setSpeakersSat] = useState(true)\n    // const [speakersSun, setSpeakersSun] = useState(true)\n    // load speaker-data to state after initial rendering\n    //   useEffect(() => {\n    //     setIsLoading(true)\n    //     new Promise((resolve) => {\n    //       setTimeout(() => {\n    //         resolve()\n    //       }, 1500)\n    //     }).then(() => {\n    //       setIsLoading(false)\n    //     })\n    //     setSpeakerList(speakerData)\n    //     return () => {\n    //       console.log('cleanup from Speakers component')\n    //     }\n    //   }, [])\n    // //  favorite speaker functionality\n    //   const heartFavHandler = (e, favValue) => {\n    //     e.preventDefault()\n    //     // select clicked speaker by attribute 'data-session-id'\n    //     const sessionId = parseInt(e.target.attributes['data-sessionid'].value)\n    //     const refinedSpeakerList = speakerList.map(s => s.id === sessionId\n    //       ? {...s, favorite: favValue} : s)\n    //     setSpeakerList(refinedSpeakerList)\n    //   }\n    var ref = (0,_useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    console.log(\"useSpeakers => \", speakerList);\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 51,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: speakerList.map(function(s) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                heartFavHandler: heartFavHandler\n                            }, s), s.id, false, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 52,\n        columnNumber: 6\n    }, _this);\n};\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUNJO0FBQ2dCO0FBQ2Q7QUFDL0IsZ0RBQWdEO0FBQ0E7QUFFaEQsSUFBTU0sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLHFEQUFxRDtJQUNyRCxtREFBbUQ7SUFFbkQsdURBQXVEO0lBQ3ZELHVEQUF1RDtJQUV6RCxxREFBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUV6QixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixTQUFTO0lBRVQsa0NBQWtDO0lBRWxDLHFCQUFxQjtJQUNyQix1REFBdUQ7SUFDdkQsUUFBUTtJQUNSLFdBQVc7SUFFWCxxQ0FBcUM7SUFDckMsK0NBQStDO0lBQy9DLHlCQUF5QjtJQUN6QiwrREFBK0Q7SUFDL0QsOEVBQThFO0lBRTlFLHlFQUF5RTtJQUN6RSwwQ0FBMEM7SUFFMUMseUNBQXlDO0lBQ3pDLE1BQU07SUFHSixJQUFvREQsR0FBYSxHQUFiQSxpRUFBVyxFQUFFLEVBQXpERSxXQUFXLEdBQWlDRixHQUFhLENBQXpERSxXQUFXLEVBQUVDLFNBQVMsR0FBc0JILEdBQWEsQ0FBNUNHLFNBQVMsRUFBRUMsZUFBZSxHQUFLSixHQUFhLENBQWpDSSxlQUFlO0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUosV0FBVyxDQUFDO0lBRTNDLE9BQU9DLFNBQVMsaUJBQUcsOERBQUNJLEtBQUc7a0JBQUMsWUFBVTs7Ozs7YUFBTSxpQkFDckMsOERBQUNBLEtBQUc7OzBCQUNILDhEQUFDWCw2Q0FBSTs7OztxQkFBRzswQkFDUiw4REFBQ0MsK0NBQU07Ozs7cUJBQUc7MEJBRVYsOERBQUNVLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOzBCQVF4Qiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLEtBQUs7OEJBQ2xCLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsV0FBVztrQ0FDdkJOLFdBQVcsQ0FBQ08sR0FBRyxDQUFDQyxTQUFBQSxDQUFDO2lEQUNoQiw4REFBQ1gsZ0RBQU87Z0NBRU5LLGVBQWUsRUFBRUEsZUFBZTsrQkFDNUJNLENBQUMsR0FGQUEsQ0FBQyxDQUFDQyxFQUFFOzs7O3NDQUdUO3lCQUNILENBQUM7Ozs7OzZCQUNFOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7OzthQUVGLENBQUM7Q0FDVjtBQXJFS1YsS0FBQUEsUUFBUTtBQXVFZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnMuanM/MmZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IFNhdFN1blNwZWFrZXJzIGZyb20gJy4vU2F0U3VuU3BlYWtlcnMnXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXG4vLyBpbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi9kYXRhL3NwZWFrZXItZGF0YSdcbmltcG9ydCBVc2VTcGVha2VycyBmcm9tICcuL3VzZUhvb2tzL3VzZVNwZWFrZXJzJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8gY29uc3QgW3NwZWFrZXJzU2F0LCBzZXRTcGVha2Vyc1NhdF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAvLyBjb25zdCBbc3BlYWtlcnNTdW4sIHNldFNwZWFrZXJzU3VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbi8vIGxvYWQgc3BlYWtlci1kYXRhIHRvIHN0YXRlIGFmdGVyIGluaXRpYWwgcmVuZGVyaW5nXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbi8vICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgIHJlc29sdmUoKVxuLy8gICAgICAgfSwgMTUwMClcbi8vICAgICB9KS50aGVuKCgpID0+IHtcbi8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbi8vICAgICB9KVxuXG4vLyAgICAgc2V0U3BlYWtlckxpc3Qoc3BlYWtlckRhdGEpXG5cbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAgZnJvbSBTcGVha2VycyBjb21wb25lbnQnKVxuLy8gICAgIH1cbi8vICAgfSwgW10pXG5cbi8vIC8vICBmYXZvcml0ZSBzcGVha2VyIGZ1bmN0aW9uYWxpdHlcbi8vICAgY29uc3QgaGVhcnRGYXZIYW5kbGVyID0gKGUsIGZhdlZhbHVlKSA9PiB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgICAgLy8gc2VsZWN0IGNsaWNrZWQgc3BlYWtlciBieSBhdHRyaWJ1dGUgJ2RhdGEtc2Vzc2lvbi1pZCdcbi8vICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKVxuXG4vLyAgICAgY29uc3QgcmVmaW5lZFNwZWFrZXJMaXN0ID0gc3BlYWtlckxpc3QubWFwKHMgPT4gcy5pZCA9PT0gc2Vzc2lvbklkXG4vLyAgICAgICA/IHsuLi5zLCBmYXZvcml0ZTogZmF2VmFsdWV9IDogcylcblxuLy8gICAgIHNldFNwZWFrZXJMaXN0KHJlZmluZWRTcGVha2VyTGlzdClcbi8vICAgfVxuXG5cbiAgY29uc3QgeyBzcGVha2VyTGlzdCwgaXNMb2FkaW5nLCBoZWFydEZhdkhhbmRsZXIgfSA9IFVzZVNwZWFrZXJzKClcbiAgY29uc29sZS5sb2coJ3VzZVNwZWFrZXJzID0+ICcsIHNwZWFrZXJMaXN0KVxuXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8ZGl2Pi4uLkxvYWRpbmc8L2Rpdj4gOlxuICAgICg8ZGl2PlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIHsvKiA8U2F0U3VuU3BlYWtlcnNcbiAgICAgICAgICBzcGVha1NhdD17c3BlYWtlcnNTYXR9XG4gICAgICAgICAgc3BlYWtTdW49e3NwZWFrZXJzU3VufVxuICAgICAgICAgIGhhbmRsZVNhdD17aGFuZGxlQ2hhbmdlU2F0fVxuICAgICAgICAgIGhhbmRsZVN1bj17aGFuZGxlQ2hhbmdlU3VufVxuICAgICAgICAvPiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1kZWNrJz5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdC5tYXAocyA9PiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAga2V5PXtzLmlkfVxuICAgICAgICAgICAgICAgIGhlYXJ0RmF2SGFuZGxlcj17aGVhcnRGYXZIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHsuLi5zfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJIZWFkZXIiLCJTYXRTdW5TcGVha2VycyIsIlNwZWFrZXIiLCJVc2VTcGVha2VycyIsIlNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJoZWFydEZhdkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});