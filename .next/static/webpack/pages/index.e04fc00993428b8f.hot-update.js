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

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; },\n/* harmony export */   \"GlobalProvider\": function() { return /* binding */ GlobalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useHooks/UseSpeakers */ \"./src/useHooks/UseSpeakers.js\");\nvar _this = undefined;\n\n\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar GlobalProvider = function(param) {\n    var children = param.children;\n    var ref = (0,_useHooks_UseSpeakers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), state = ref.state, toggleFavSpeaker = ref.toggleFavSpeaker;\n    var provider = {\n        showSignMeUp: true,\n        speakerList: state.speakerList,\n        isLoading: state.isLoading,\n        toggleFavSpeaker: toggleFavSpeaker\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: provider,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/ConferenceApp-React/src/GlobalState.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = GlobalProvider;\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFsU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFxQztBQUNXO0FBRXpDLElBQU1FLGFBQWEsaUJBQUdGLG9EQUFhLEVBQUU7QUFFckMsSUFBTUcsY0FBYyxHQUFHLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7SUFDdkMsSUFBb0NILEdBQWEsR0FBYkEsaUVBQVcsRUFBRSxFQUF6Q0ksS0FBSyxHQUF1QkosR0FBYSxDQUF6Q0ksS0FBSyxFQUFFQyxnQkFBZ0IsR0FBS0wsR0FBYSxDQUFsQ0ssZ0JBQWdCO0lBQy9CLElBQU1DLFFBQVEsR0FBRztRQUNmQyxZQUFZLEVBQUUsSUFBSTtRQUNsQkMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7UUFDOUJDLFNBQVMsRUFBRUwsS0FBSyxDQUFDSyxTQUFTO1FBQzFCSixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtLQUNqQjtJQUVELHFCQUNFLDhEQUFDSixhQUFhLENBQUNTLFFBQVE7UUFBQ0MsS0FBSyxFQUFFTCxRQUFRO2tCQUNwQ0gsUUFBUTs7Ozs7YUFDYyxDQUMxQjtDQUNGO0FBZFlELEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0dsb2JhbFN0YXRlLmpzPzM1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFVzZVNwZWFrZXJzIGZyb20gJy4vdXNlSG9va3MvVXNlU3BlYWtlcnMnXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgdG9nZ2xlRmF2U3BlYWtlciB9ID0gVXNlU3BlYWtlcnMoKVxuICBjb25zdCBwcm92aWRlciA9IHtcbiAgICBzaG93U2lnbk1lVXA6IHRydWUsXG4gICAgc3BlYWtlckxpc3Q6IHN0YXRlLnNwZWFrZXJMaXN0LFxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxuICAgIHRvZ2dsZUZhdlNwZWFrZXJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3ZpZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlVzZVNwZWFrZXJzIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInRvZ2dsZUZhdlNwZWFrZXIiLCJwcm92aWRlciIsInNob3dTaWduTWVVcCIsInNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GlobalState.js\n");

/***/ })

});