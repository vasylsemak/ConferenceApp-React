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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/useSpeakers */ \"./src/useHooks/useSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n// import speakerData from './data/speaker-data'\n\nvar isLoading = true;\nvar Speakers = function() {\n    var _this1 = _this;\n    // const [speakerList, setSpeakerList] = useState([])\n    // const [isLoading, setIsLoading] = useState(true)\n    // const [speakersSat, setSpeakersSat] = useState(true)\n    // const [speakersSun, setSpeakersSun] = useState(true)\n    // load speaker-data to state after initial rendering\n    //   useEffect(() => {\n    //     setIsLoading(true)\n    //     new Promise((resolve) => {\n    //       setTimeout(() => {\n    //         resolve()\n    //       }, 1500)\n    //     }).then(() => {\n    //       setIsLoading(false)\n    //     })\n    //     setSpeakerList(speakerData)\n    //     return () => {\n    //       console.log('cleanup from Speakers component')\n    //     }\n    //   }, [])\n    // //  favorite speaker functionality\n    //   const heartFavHandler = (e, favValue) => {\n    //     e.preventDefault()\n    //     // select clicked speaker by attribute 'data-session-id'\n    //     const sessionId = parseInt(e.target.attributes['data-sessionid'].value)\n    //     const refinedSpeakerList = speakerList.map(s => s.id === sessionId\n    //       ? {...s, favorite: favValue} : s)\n    //     setSpeakerList(refinedSpeakerList)\n    //   }\n    var ref = (0,_useHooks_useSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading1 = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    console.log(\"useSpeakers => \", speakerList);\n    return isLoading1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 53,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: speakerList.map(function(s) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                heartFavHandler: heartFavHandler\n                            }, s), s.id, false, {\n                                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 54,\n        columnNumber: 6\n    }, _this);\n};\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDSTtBQUNnQjtBQUNkO0FBQy9CLGdEQUFnRDtBQUNBO0FBRWhELElBQU1RLFNBQVMsR0FBRyxJQUFJO0FBRXRCLElBQU1DLFFBQVEsR0FBRyxXQUFNOztJQUNyQixxREFBcUQ7SUFDckQsbURBQW1EO0lBRW5ELHVEQUF1RDtJQUN2RCx1REFBdUQ7SUFFekQscURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFFekIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsU0FBUztJQUVULGtDQUFrQztJQUVsQyxxQkFBcUI7SUFDckIsdURBQXVEO0lBQ3ZELFFBQVE7SUFDUixXQUFXO0lBRVgscUNBQXFDO0lBQ3JDLCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsK0RBQStEO0lBQy9ELDhFQUE4RTtJQUU5RSx5RUFBeUU7SUFDekUsMENBQTBDO0lBRTFDLHlDQUF5QztJQUN6QyxNQUFNO0lBR0osSUFBb0RGLEdBQWEsR0FBYkEsaUVBQVcsRUFBRSxFQUF6REcsV0FBVyxHQUFpQ0gsR0FBYSxDQUF6REcsV0FBVyxFQUFFRixVQUFTLEdBQXNCRCxHQUFhLENBQTVDQyxTQUFTLEVBQUVHLGVBQWUsR0FBS0osR0FBYSxDQUFqQ0ksZUFBZTtJQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVILFdBQVcsQ0FBQztJQUUzQyxPQUFPRixVQUFTLGlCQUFHLDhEQUFDTSxLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0saUJBQ3JDLDhEQUFDQSxLQUFHOzswQkFDSCw4REFBQ1gsNkNBQUk7Ozs7cUJBQUc7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3FCQUFHOzBCQUVWLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzswQkFReEIsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOzhCQUNsQiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7a0NBQ3ZCTCxXQUFXLENBQUNNLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQztpREFDaEIsOERBQUNYLGdEQUFPO2dDQUVOSyxlQUFlLEVBQUVBLGVBQWU7K0JBQzVCTSxDQUFDLEdBRkFBLENBQUMsQ0FBQ0MsRUFBRTs7OztzQ0FHVDt5QkFDSCxDQUFDOzs7Ozs2QkFDRTs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFFRixDQUFDO0NBQ1Y7QUFyRUtULEtBQUFBLFFBQVE7QUF1RWQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2F0U3VuU3BlYWtlcnMgZnJvbSAnLi9TYXRTdW5TcGVha2VycydcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcbi8vIGltcG9ydCBzcGVha2VyRGF0YSBmcm9tICcuL2RhdGEvc3BlYWtlci1kYXRhJ1xuaW1wb3J0IFVzZVNwZWFrZXJzIGZyb20gJy4vdXNlSG9va3MvdXNlU3BlYWtlcnMnXG5cbmNvbnN0IGlzTG9hZGluZyA9IHRydWVcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIC8vIGNvbnN0IFtzcGVha2Vyc1NhdCwgc2V0U3BlYWtlcnNTYXRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgLy8gY29uc3QgW3NwZWFrZXJzU3VuLCBzZXRTcGVha2Vyc1N1bl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4vLyBsb2FkIHNwZWFrZXItZGF0YSB0byBzdGF0ZSBhZnRlciBpbml0aWFsIHJlbmRlcmluZ1xuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4vLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICByZXNvbHZlKClcbi8vICAgICAgIH0sIDE1MDApXG4vLyAgICAgfSkudGhlbigoKSA9PiB7XG4vLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4vLyAgICAgfSlcblxuLy8gICAgIHNldFNwZWFrZXJMaXN0KHNwZWFrZXJEYXRhKVxuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwIGZyb20gU3BlYWtlcnMgY29tcG9uZW50Jylcbi8vICAgICB9XG4vLyAgIH0sIFtdKVxuXG4vLyAvLyAgZmF2b3JpdGUgc3BlYWtlciBmdW5jdGlvbmFsaXR5XG4vLyAgIGNvbnN0IGhlYXJ0RmF2SGFuZGxlciA9IChlLCBmYXZWYWx1ZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuLy8gICAgIC8vIHNlbGVjdCBjbGlja2VkIHNwZWFrZXIgYnkgYXR0cmlidXRlICdkYXRhLXNlc3Npb24taWQnXG4vLyAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSlcblxuLy8gICAgIGNvbnN0IHJlZmluZWRTcGVha2VyTGlzdCA9IHNwZWFrZXJMaXN0Lm1hcChzID0+IHMuaWQgPT09IHNlc3Npb25JZFxuLy8gICAgICAgPyB7Li4ucywgZmF2b3JpdGU6IGZhdlZhbHVlfSA6IHMpXG5cbi8vICAgICBzZXRTcGVha2VyTGlzdChyZWZpbmVkU3BlYWtlckxpc3QpXG4vLyAgIH1cblxuXG4gIGNvbnN0IHsgc3BlYWtlckxpc3QsIGlzTG9hZGluZywgaGVhcnRGYXZIYW5kbGVyIH0gPSBVc2VTcGVha2VycygpXG4gIGNvbnNvbGUubG9nKCd1c2VTcGVha2VycyA9PiAnLCBzcGVha2VyTGlzdClcblxuICByZXR1cm4gaXNMb2FkaW5nID8gPGRpdj4uLi5Mb2FkaW5nPC9kaXY+IDpcbiAgICAoPGRpdj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICB7LyogPFNhdFN1blNwZWFrZXJzXG4gICAgICAgICAgc3BlYWtTYXQ9e3NwZWFrZXJzU2F0fVxuICAgICAgICAgIHNwZWFrU3VuPXtzcGVha2Vyc1N1bn1cbiAgICAgICAgICBoYW5kbGVTYXQ9e2hhbmRsZUNoYW5nZVNhdH1cbiAgICAgICAgICBoYW5kbGVTdW49e2hhbmRsZUNoYW5nZVN1bn1cbiAgICAgICAgLz4gKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtZGVjayc+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3QubWFwKHMgPT4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17cy5pZH1cbiAgICAgICAgICAgICAgICBoZWFydEZhdkhhbmRsZXI9e2hlYXJ0RmF2SGFuZGxlcn1cbiAgICAgICAgICAgICAgICB7Li4uc30gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lbnUiLCJIZWFkZXIiLCJTYXRTdW5TcGVha2VycyIsIlNwZWFrZXIiLCJVc2VTcGVha2VycyIsImlzTG9hZGluZyIsIlNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJoZWFydEZhdkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});