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

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; },\n/* harmony export */   \"GlobalProvider\": function() { return /* binding */ GlobalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useHooks/UseSpeakers */ \"./src/useHooks/UseSpeakers.js\");\nvar _this = undefined;\n\n\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar GlobalProvider = function(param) {\n    var children = param.children;\n    var ref = (0,_useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), speakerList = ref.speakerList, isLoading = ref.isLoading, toggleFavSpeaker = ref.toggleFavSpeaker;\n    var provider = {\n        showSignMeUp: true,\n        speakerList: speakerList,\n        isLoading: isLoading,\n        toggleFavSpeaker: toggleFavSpeaker\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: provider,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/GlobalState.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = GlobalProvider;\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFsU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFxQztBQUNXO0FBRXpDLElBQU1FLGFBQWEsaUJBQUdGLG9EQUFhLEVBQUU7QUFFckMsSUFBTUcsY0FBYyxHQUFHLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7SUFDdkMsSUFBcURILEdBQWEsR0FBYkEsaUVBQVcsRUFBRSxFQUExREksV0FBVyxHQUFrQ0osR0FBYSxDQUExREksV0FBVyxFQUFFQyxTQUFTLEdBQXVCTCxHQUFhLENBQTdDSyxTQUFTLEVBQUVDLGdCQUFnQixHQUFLTixHQUFhLENBQWxDTSxnQkFBZ0I7SUFDaEQsSUFBTUMsUUFBUSxHQUFHO1FBQ2ZDLFlBQVksRUFBRSxJQUFJO1FBQ2xCSixXQUFXLEVBQVhBLFdBQVc7UUFDWEMsU0FBUyxFQUFUQSxTQUFTO1FBQ1RDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0tBQ2pCO0lBRUQscUJBQ0UsOERBQUNMLGFBQWEsQ0FBQ1EsUUFBUTtRQUFDQyxLQUFLLEVBQUVILFFBQVE7a0JBQ3BDSixRQUFROzs7OzthQUNjLENBQzFCO0NBQ0Y7QUFkWUQsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvR2xvYmFsU3RhdGUuanM/MzU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVXNlU3BlYWtlcnMgZnJvbSAnLi91c2VIb29rcy9Vc2VTcGVha2VycydcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHNwZWFrZXJMaXN0LCBpc0xvYWRpbmcsIHRvZ2dsZUZhdlNwZWFrZXIgfSA9IFVzZVNwZWFrZXJzKClcbiAgY29uc3QgcHJvdmlkZXIgPSB7XG4gICAgc2hvd1NpZ25NZVVwOiB0cnVlLFxuICAgIHNwZWFrZXJMaXN0LFxuICAgIGlzTG9hZGluZyxcbiAgICB0b2dnbGVGYXZTcGVha2VyXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJVc2VTcGVha2VycyIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwic3BlYWtlckxpc3QiLCJpc0xvYWRpbmciLCJ0b2dnbGVGYXZTcGVha2VyIiwicHJvdmlkZXIiLCJzaG93U2lnbk1lVXAiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/GlobalState.js\n");

/***/ })

});