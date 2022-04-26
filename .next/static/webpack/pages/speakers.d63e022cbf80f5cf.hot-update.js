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

/***/ "./src/reducers/speakersReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/speakersReducer.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTION\": function() { return /* binding */ ACTION; },\n/* harmony export */   \"default\": function() { return /* binding */ speakersReducer; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar ACTION = {\n    setSpeakerList: \"setSpeakerList\",\n    favorite: \"favorite\",\n    unfavorite: \"unfavorite\",\n    setIsLoading: \"setIsLoading\"\n};\nfunction speakersReducer(state, action) {\n    var toggleFavorite = function(favValue) {\n        return state.speakerList.map(function(el) {\n            return el.id === action.sessionId ? _objectSpread({}, el, {\n                favorite: favValue\n            }) : el;\n        });\n    };\n    switch(action.type){\n        case ACTION.setSpeakerList:\n            return _objectSpread({}, state, {\n                speakerList: action.data\n            });\n        case ACTION.setIsLoading:\n            return _objectSpread({}, state, {\n                isLoading: action.isLoading\n            });\n        case ACTION.favorite:\n            return _objectSpread({}, state, {\n                speakerList: toggleFavorite(true)\n            });\n        case ACTION.unfavorite:\n            return _objectSpread({}, state, {\n                speakerList: toggleFavorite(false)\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3BlYWtlcnNSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNLEdBQUc7SUFDcEJDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaENDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsWUFBWSxFQUFFLGNBQWM7Q0FDN0I7QUFFYyxTQUFTQyxlQUFlLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQ3JELElBQU1DLGNBQWMsR0FBR0MsU0FBQUEsUUFBUTtlQUFLSCxLQUFLLENBQUNJLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxFQUFFO21CQUMxREEsRUFBRSxDQUFDQyxFQUFFLEtBQUtOLE1BQU0sQ0FBQ08sU0FBUyxHQUFJLGtCQUFJRixFQUFFO2dCQUFFVixRQUFRLEVBQUVPLFFBQVE7Y0FBQyxHQUFHRyxFQUFFO1NBQUEsQ0FBQztLQUFBO0lBRWpFLE9BQU9MLE1BQU0sQ0FBQ1EsSUFBSTtRQUNoQixLQUFLZixNQUFNLENBQUNDLGNBQWM7WUFDeEIsT0FBTyxrQkFBS0ssS0FBSztnQkFBRUksV0FBVyxFQUFFSCxNQUFNLENBQUNTLElBQUk7Y0FBRTtRQUMvQyxLQUFLaEIsTUFBTSxDQUFDSSxZQUFZO1lBQ3RCLE9BQU8sa0JBQUtFLEtBQUs7Z0JBQUVXLFNBQVMsRUFBRVYsTUFBTSxDQUFDVSxTQUFTO2NBQUU7UUFDbEQsS0FBS2pCLE1BQU0sQ0FBQ0UsUUFBUTtZQUNsQixPQUFPLGtCQUFLSSxLQUFLO2dCQUFFSSxXQUFXLEVBQUVGLGNBQWMsQ0FBQyxJQUFJLENBQUM7Y0FBRTtRQUN4RCxLQUFLUixNQUFNLENBQUNHLFVBQVU7WUFDcEIsT0FBTyxrQkFBS0csS0FBSztnQkFBRUksV0FBVyxFQUFFRixjQUFjLENBQUMsS0FBSyxDQUFDO2NBQUU7UUFDekQ7WUFDRSxPQUFPRixLQUFLO0tBQ2Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvc3BlYWtlcnNSZWR1Y2VyLmpzPzdiNDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElPTiA9IHtcbiAgc2V0U3BlYWtlckxpc3Q6ICdzZXRTcGVha2VyTGlzdCcsXG4gIGZhdm9yaXRlOiAnZmF2b3JpdGUnLFxuICB1bmZhdm9yaXRlOiAndW5mYXZvcml0ZScsXG4gIHNldElzTG9hZGluZzogJ3NldElzTG9hZGluZycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwZWFrZXJzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gZmF2VmFsdWUgPT4gIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcChlbCA9PlxuICAgIGVsLmlkID09PSBhY3Rpb24uc2Vzc2lvbklkID8gIHsuLi5lbCwgZmF2b3JpdGU6IGZhdlZhbHVlfSA6IGVsKVxuXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSU9OLnNldFNwZWFrZXJMaXN0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNwZWFrZXJMaXN0OiBhY3Rpb24uZGF0YSB9XG4gICAgY2FzZSBBQ1RJT04uc2V0SXNMb2FkaW5nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZzogYWN0aW9uLmlzTG9hZGluZyB9XG4gICAgY2FzZSBBQ1RJT04uZmF2b3JpdGU6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHRvZ2dsZUZhdm9yaXRlKHRydWUpIH1cbiAgICBjYXNlIEFDVElPTi51bmZhdm9yaXRlOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNwZWFrZXJMaXN0OiB0b2dnbGVGYXZvcml0ZShmYWxzZSkgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufSJdLCJuYW1lcyI6WyJBQ1RJT04iLCJzZXRTcGVha2VyTGlzdCIsImZhdm9yaXRlIiwidW5mYXZvcml0ZSIsInNldElzTG9hZGluZyIsInNwZWFrZXJzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidG9nZ2xlRmF2b3JpdGUiLCJmYXZWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiZWwiLCJpZCIsInNlc3Npb25JZCIsInR5cGUiLCJkYXRhIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/speakersReducer.js\n");

/***/ })

});