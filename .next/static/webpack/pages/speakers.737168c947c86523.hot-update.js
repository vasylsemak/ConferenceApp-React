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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTION\": function() { return /* binding */ ACTION; },\n/* harmony export */   \"default\": function() { return /* binding */ speakersReducer; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar ACTION = {\n    setSpeakerList: \"setSpeakerList\",\n    favorite: \"favorite\",\n    unfavorite: \"unfavorite\"\n};\nfunction speakersReducer(state, action) {\n    var toggleFavorite = function(favValue) {\n        return state.map(function(el) {\n            return el.id === action.sessionId ? _objectSpread({}, el, {\n                favorite: favValue\n            }) : el;\n        });\n    };\n    switch(action.type){\n        case setSpeakerList:\n            return action.data;\n        case favorite:\n            return toggleFavorite(true);\n        case unfavorite:\n            return toggleFavorite(false);\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvc3BlYWtlcnNSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNLEdBQUc7SUFDcEJDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaENDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCQyxVQUFVLEVBQUUsWUFBWTtDQUN6QjtBQUVjLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDckQsSUFBTUMsY0FBYyxHQUFHQyxTQUFBQSxRQUFRO2VBQUtILEtBQUssQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxFQUFFO21CQUM5Q0EsRUFBRSxDQUFDQyxFQUFFLEtBQUtMLE1BQU0sQ0FBQ00sU0FBUyxHQUFJLGtCQUFJRixFQUFFO2dCQUFFUixRQUFRLEVBQUVNLFFBQVE7Y0FBQyxHQUFHRSxFQUFFO1NBQUEsQ0FBQztLQUFBO0lBRWpFLE9BQU9KLE1BQU0sQ0FBQ08sSUFBSTtRQUNoQixLQUFLWixjQUFjO1lBQ2pCLE9BQU9LLE1BQU0sQ0FBQ1EsSUFBSTtRQUNwQixLQUFLWixRQUFRO1lBQ1gsT0FBT0ssY0FBYyxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLSixVQUFVO1lBQ2IsT0FBT0ksY0FBYyxDQUFDLEtBQUssQ0FBQztRQUM5QjtZQUNFLE9BQU9GLEtBQUs7S0FDZjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2Vycy9zcGVha2Vyc1JlZHVjZXIuanM/N2I0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUNUSU9OID0ge1xuICBzZXRTcGVha2VyTGlzdDogJ3NldFNwZWFrZXJMaXN0JyxcbiAgZmF2b3JpdGU6ICdmYXZvcml0ZScsXG4gIHVuZmF2b3JpdGU6ICd1bmZhdm9yaXRlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGVha2Vyc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IGZhdlZhbHVlID0+ICBzdGF0ZS5tYXAoZWwgPT5cbiAgICBlbC5pZCA9PT0gYWN0aW9uLnNlc3Npb25JZCA/ICB7Li4uZWwsIGZhdm9yaXRlOiBmYXZWYWx1ZX0gOiBlbClcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHNldFNwZWFrZXJMaXN0OlxuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gICAgY2FzZSBmYXZvcml0ZTpcbiAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZSh0cnVlKVxuICAgIGNhc2UgdW5mYXZvcml0ZTpcbiAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZShmYWxzZSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn0iXSwibmFtZXMiOlsiQUNUSU9OIiwic2V0U3BlYWtlckxpc3QiLCJmYXZvcml0ZSIsInVuZmF2b3JpdGUiLCJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInRvZ2dsZUZhdm9yaXRlIiwiZmF2VmFsdWUiLCJtYXAiLCJlbCIsImlkIiwic2Vzc2lvbklkIiwidHlwZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/speakersReducer.js\n");

/***/ })

});