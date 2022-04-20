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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Speakers = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakerList = ref[0], setSpeakerList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSat = ref2[0], setSpeakersSat = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSun = ref3[0], setSpeakersSun = ref3[1];\n    // load speaker-data to state after initial rendering\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1500);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        setSpeakerList(_data_speaker_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  favorite speaker functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        var refinedSpeakerList = speakerList.map(function(s) {\n            return s.id === sessionId ? _objectSpread({}, s, {\n                favorite: favValue\n            }) : s;\n        });\n        setSpeakerList(refinedSpeakerList);\n    };\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 46,\n        columnNumber: 22\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerList.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                    heartFavHandler: heartFavHandler\n                                }, s), s.id, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 47,\n        columnNumber: 6\n    }, _this);\n};\n_s(Speakers, \"7Jh4eH8LtQ33YyurcN5sG1OZvfw=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE4RGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2F0U3VuU3BlYWtlcnMgZnJvbSAnLi9TYXRTdW5TcGVha2VycydcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcbmltcG9ydCBzcGVha2VyRGF0YSBmcm9tICcuL2RhdGEvc3BlYWtlci1kYXRhJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgW3NwZWFrZXJzU2F0LCBzZXRTcGVha2Vyc1NhdF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3BlYWtlcnNTdW4sIHNldFNwZWFrZXJzU3VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbi8vIGxvYWQgc3BlYWtlci1kYXRhIHRvIHN0YXRlIGFmdGVyIGluaXRpYWwgcmVuZGVyaW5nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSwgMTUwMClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KVxuXG4gICAgc2V0U3BlYWtlckxpc3Qoc3BlYWtlckRhdGEpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAgZnJvbSBTcGVha2VycyBjb21wb25lbnQnKVxuICAgIH1cbiAgfSwgW10pXG5cbi8vICBmYXZvcml0ZSBzcGVha2VyIGZ1bmN0aW9uYWxpdHlcbiAgY29uc3QgaGVhcnRGYXZIYW5kbGVyID0gKGUsIGZhdlZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gc2VsZWN0IGNsaWNrZWQgc3BlYWtlciBieSBhdHRyaWJ1dGUgJ2RhdGEtc2Vzc2lvbi1pZCdcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKVxuXG4gICAgY29uc3QgcmVmaW5lZFNwZWFrZXJMaXN0ID0gc3BlYWtlckxpc3QubWFwKHMgPT4gcy5pZCA9PT0gc2Vzc2lvbklkXG4gICAgICA/IHsuLi5zLCBmYXZvcml0ZTogZmF2VmFsdWV9IDogcylcblxuICAgIHNldFNwZWFrZXJMaXN0KHJlZmluZWRTcGVha2VyTGlzdClcbiAgfVxuXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8ZGl2Pi4uLkxvYWRpbmc8L2Rpdj4gOlxuICAgICg8ZGl2PlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxTYXRTdW5TcGVha2VycyAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtZGVjayc+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3QubWFwKHMgPT4gKFxuICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgIGtleT17cy5pZH1cbiAgICAgICAgICAgICAgICBoZWFydEZhdkhhbmRsZXI9e2hlYXJ0RmF2SGFuZGxlcn1cbiAgICAgICAgICAgICAgICB7Li4uc30gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lbnUiLCJIZWFkZXIiLCJTYXRTdW5TcGVha2VycyIsIlNwZWFrZXIiLCJzcGVha2VyRGF0YSIsIlNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJzZXRTcGVha2VyTGlzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNwZWFrZXJzU2F0Iiwic2V0U3BlYWtlcnNTYXQiLCJzcGVha2Vyc1N1biIsInNldFNwZWFrZXJzU3VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJoZWFydEZhdkhhbmRsZXIiLCJlIiwiZmF2VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwicmVmaW5lZFNwZWFrZXJMaXN0IiwibWFwIiwicyIsImlkIiwiZmF2b3JpdGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});