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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SatSunSpeakers */ \"./src/SatSunSpeakers.js\");\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speaker */ \"./src/Speaker.js\");\n/* harmony import */ var _useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useHooks/UseSpeakers */ \"./src/useHooks/UseSpeakers.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Speakers = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, heartFavHandler = ref.heartFavHandler;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSat = ref1[0], setSpeakersSat = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakersSun = ref2[0], setSpeakersSun = ref2[1];\n    var handleChangeSat = function() {\n        return setSpeakersSat(!speakersSat);\n    };\n    var handleChangeSun = function() {\n        return setSpeakersSun(!speakersSun);\n    };\n    var satSunProps = {\n        speakersSat: speakersSat,\n        speakersSun: speakersSun,\n        handleChangeSat: handleChangeSat,\n        handleChangeSun: handleChangeSun\n    };\n    var sortedSpeakers = speakerList.filter(function(s) {\n        return speakersSat && s.sat || speakersSun && s.sun;\n    }).sort(sortByName());\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"...Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SatSunSpeakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, satSunProps), void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: sortedSpeakers.map(function(s) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({\n                                    heartFavHandler: heartFavHandler\n                                }, s), s.id, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/Speakers.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, _this);\n};\n_s(Speakers, \"Rivvjcp0KS73NUozfL9SYsVcp+w=\");\n_c = Speakers;\nfunction sortByName(a, b) {\n    if (a.firstName > b.firstName) return -1;\n    if (a.firstName < b.firstName) return 1;\n    return 0;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNJO0FBQ2dCO0FBQ2Q7QUFDaUI7O0FBRWhELElBQU1PLFFBQVEsR0FBRyxXQUFNOzs7SUFDckIsSUFJSUQsR0FBYSxHQUFiQSxpRUFBVyxFQUFFLEVBSGZFLFdBQVcsR0FHVEYsR0FBYSxDQUhmRSxXQUFXLEVBQ1hDLFNBQVMsR0FFUEgsR0FBYSxDQUZmRyxTQUFTLEVBQ1RDLGVBQWUsR0FDYkosR0FBYSxDQURmSSxlQUFlO0lBR2pCLElBQXNDVCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBZHRELFdBY29CLEdBQW9CQSxJQUFjLEdBQWxDLEVBZHBCLGNBY29DLEdBQUlBLElBQWMsR0FBbEI7SUFDbEMsSUFBc0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFmdEQsV0Flb0IsR0FBb0JBLElBQWMsR0FBbEMsRUFmcEIsY0Flb0MsR0FBSUEsSUFBYyxHQUFsQjtJQUVsQyxJQUFNYyxlQUFlLEdBQUc7ZUFBTUgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztLQUFBO0lBQzFELElBQU1LLGVBQWUsR0FBRztlQUFNRixjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO0tBQUE7SUFFMUQsSUFBTUksV0FBVyxHQUFHO1FBQ2xCTixXQUFXLEVBQVhBLFdBQVc7UUFDWEUsV0FBVyxFQUFYQSxXQUFXO1FBQ1hFLGVBQWUsRUFBZkEsZUFBZTtRQUNmQyxlQUFlLEVBQWZBLGVBQWU7S0FDaEI7SUFFRCxJQUFNRSxjQUFjLEdBQUdWLFdBQVcsQ0FDL0JXLE1BQU0sQ0FBQ0MsU0FBQUEsQ0FBQztlQUFJLFdBQVksSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLElBQU1SLFdBQVcsSUFBSU8sQ0FBQyxDQUFDRSxHQUFHO0tBQUMsQ0FBQyxDQUM3REMsSUFBSSxDQUFDQyxVQUFVLEVBQUUsQ0FBQztJQUVyQixPQUFPZixTQUFTLGlCQUNaLDhEQUFDZ0IsS0FBRztrQkFBQyxZQUFVOzs7OzthQUFNLGlCQUVyQiw4REFBQ0EsS0FBRzs7MEJBQ0YsOERBQUN2Qiw2Q0FBSTs7OztxQkFBRzswQkFDUiw4REFBQ0MsK0NBQU07Ozs7cUJBQUc7MEJBRVYsOERBQUNzQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0NBQ3hCLDhEQUFDdEIsdURBQWMsb0JBQUthLFdBQVc7Ozs7NkJBQUc7a0NBRWxDLDhEQUFDUSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsS0FBSztrQ0FDbEIsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxXQUFXO3NDQUN2QlIsY0FBYyxDQUFDUyxHQUFHLENBQUNQLFNBQUFBLENBQUM7cURBQ25CLDhEQUFDZixnREFBTztvQ0FFTkssZUFBZSxFQUFFQSxlQUFlO21DQUM1QlUsQ0FBQyxHQUZBQSxDQUFDLENBQUNRLEVBQUU7Ozs7MENBR1Q7NkJBQ0gsQ0FBQzs7Ozs7aUNBQ0U7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ1A7Q0FDSjtHQWhES3JCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWtEZCxTQUFTaUIsVUFBVSxDQUFDSyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUN4QixJQUFHRCxDQUFDLENBQUNFLFNBQVMsR0FBR0QsQ0FBQyxDQUFDQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBR0YsQ0FBQyxDQUFDRSxTQUFTLEdBQUdELENBQUMsQ0FBQ0MsU0FBUyxFQUFFLE9BQU8sQ0FBQztJQUN0QyxPQUFPLENBQUM7Q0FDVDtBQUVELCtEQUFleEIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnMuanM/MmZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2F0U3VuU3BlYWtlcnMgZnJvbSAnLi9TYXRTdW5TcGVha2VycydcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcbmltcG9ydCBVc2VTcGVha2VycyBmcm9tICcuL3VzZUhvb2tzL1VzZVNwZWFrZXJzJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgY29uc3QgeyBcbiAgICBzcGVha2VyTGlzdCwgXG4gICAgaXNMb2FkaW5nLCBcbiAgICBoZWFydEZhdkhhbmRsZXJcbiAgfSA9IFVzZVNwZWFrZXJzKClcblxuICBjb25zdCBbc3BlYWtlcnNTYXQsIHNldFNwZWFrZXJzU2F0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzcGVha2Vyc1N1biwgc2V0U3BlYWtlcnNTdW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYXQgPSAoKSA9PiBzZXRTcGVha2Vyc1NhdCghc3BlYWtlcnNTYXQpXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1biA9ICgpID0+IHNldFNwZWFrZXJzU3VuKCFzcGVha2Vyc1N1bilcblxuICBjb25zdCBzYXRTdW5Qcm9wcyA9IHtcbiAgICBzcGVha2Vyc1NhdCxcbiAgICBzcGVha2Vyc1N1bixcbiAgICBoYW5kbGVDaGFuZ2VTYXQsXG4gICAgaGFuZGxlQ2hhbmdlU3VuXG4gIH1cblxuICBjb25zdCBzb3J0ZWRTcGVha2VycyA9IHNwZWFrZXJMaXN0XG4gICAgLmZpbHRlcihzID0+IChzcGVha2Vyc1NhdCAmJiBzLnNhdCkgfHwgKHNwZWFrZXJzU3VuICYmIHMuc3VuKSlcbiAgICAuc29ydChzb3J0QnlOYW1lKCkpXG5cbiAgcmV0dXJuIGlzTG9hZGluZyBcbiAgICA/IDxkaXY+Li4uTG9hZGluZzwvZGl2PlxuICAgIDogKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxTYXRTdW5TcGVha2VycyB7Li4uc2F0U3VuUHJvcHN9Lz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtZGVjayc+XG4gICAgICAgICAgICAgIHtzb3J0ZWRTcGVha2Vycy5tYXAocyA9PiAoXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICAgIGtleT17cy5pZH1cbiAgICAgICAgICAgICAgICAgIGhlYXJ0RmF2SGFuZGxlcj17aGVhcnRGYXZIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgey4uLnN9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBzb3J0QnlOYW1lKGEsIGIpIHtcbiAgaWYoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkgcmV0dXJuIC0xXG4gIGlmKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJIZWFkZXIiLCJTYXRTdW5TcGVha2VycyIsIlNwZWFrZXIiLCJVc2VTcGVha2VycyIsIlNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJoZWFydEZhdkhhbmRsZXIiLCJzcGVha2Vyc1NhdCIsInNldFNwZWFrZXJzU2F0Iiwic3BlYWtlcnNTdW4iLCJzZXRTcGVha2Vyc1N1biIsImhhbmRsZUNoYW5nZVNhdCIsImhhbmRsZUNoYW5nZVN1biIsInNhdFN1blByb3BzIiwic29ydGVkU3BlYWtlcnMiLCJmaWx0ZXIiLCJzIiwic2F0Iiwic3VuIiwic29ydCIsInNvcnRCeU5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpZCIsImEiLCJiIiwiZmlyc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});