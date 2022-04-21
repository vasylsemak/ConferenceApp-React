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

/***/ "./src/useHooks/UseSpeakers.js":
/*!*************************************!*\
  !*** ./src/useHooks/UseSpeakers.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\n/* harmony import */ var _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/speakersReducer */ \"./src/reducers/speakersReducer.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], []), speakerList = ref1[0], dispatch = ref1[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setSpeakerList,\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  Favorite Speaker toggle functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.favorite : _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.unfavorite,\n            sessionId: sessionId\n        });\n    };\n    // results of custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler\n    };\n};\n_s(UseSpeakers, \"syeIWC6w/A01PJZG9F5EeyZU4xM=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDVDtBQUN1Qjs7QUFHdEQsU0FBU00sV0FBVyxHQUFHOztJQUNwQyxJQUFrQ04sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU5sRCxTQU1rQixHQUFrQkEsR0FBYyxHQUFoQyxFQU5sQixZQU1nQyxHQUFJQSxHQUFjLEdBQWxCO0lBQzlCLElBQWdDRSxJQUErQixHQUEvQkEsaURBQVUsQ0FBQ0UsaUVBQWUsRUFBRSxFQUFFLENBQUMsRUFQakUsV0FPb0IsR0FBY0YsSUFBK0IsR0FBN0MsRUFQcEIsUUFPOEIsR0FBSUEsSUFBK0IsR0FBbkM7SUFFOUIsd0NBQXdDO0lBQ3RDRCxnREFBUyxDQUFDLFdBQU07UUFDZE8sWUFBWSxDQUFDLElBQUksQ0FBQztRQUVsQixJQUFJRyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFBRUQsT0FBTyxFQUFFO2FBQUUsRUFBRSxJQUFJLENBQUM7U0FDdEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsV0FBTTtZQUNaTixZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUM7UUFFRkUsUUFBUSxDQUFDO1lBQ1BLLElBQUksRUFBRVYsNEVBQXFCO1lBQzNCWSxJQUFJLEVBQUVkLDBEQUFXO1NBQ2xCLENBQUM7UUFFRixPQUFPLFdBQU07WUFBRWUsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7U0FBRTtLQUNoRSxFQUFFLEVBQUUsQ0FBQztJQUVSLHlDQUF5QztJQUN2QyxJQUFNQyxlQUFlLEdBQUcsU0FBQ0MsQ0FBQyxFQUFFQyxRQUFRLEVBQUs7UUFDdkNELENBQUMsQ0FBQ0UsY0FBYyxFQUFFO1FBQ2xCLHdEQUF3RDtRQUN4RCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDSyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxLQUFLLENBQUM7UUFFdkVsQixRQUFRLENBQUM7WUFDUEssSUFBSSxFQUFFTyxRQUFRLEdBQUdqQixzRUFBZSxHQUFHQSx3RUFBaUI7WUFDcERtQixTQUFTLEVBQUVBLFNBQVM7U0FDckIsQ0FBQztLQUNIO0lBRUgseUJBQXlCO0lBQ3ZCLE9BQU87UUFBRWYsV0FBVyxFQUFYQSxXQUFXO1FBQUVGLFNBQVMsRUFBVEEsU0FBUztRQUFFYSxlQUFlLEVBQWZBLGVBQWU7S0FBRTtDQUNuRDtHQXBDdUJkLFdBQVc7QUFBWEEsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanM/MGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vZGF0YS9zcGVha2VyLWRhdGEnXG5pbXBvcnQgc3BlYWtlcnNSZWR1Y2VyLCB7IEFDVElPTiB9IGZyb20gJy4uL3JlZHVjZXJzL3NwZWFrZXJzUmVkdWNlcidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VTcGVha2VycygpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKVxuICBcbi8vIEdldCBzcGVha2VycyBkYXRhIHNpbXVsYXRpbmcgQVBJIGNhbGxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICBcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoKSB9LCAxMDAwKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBQ1RJT04uc2V0U3BlYWtlckxpc3QsXG4gICAgICBkYXRhOiBzcGVha2VyRGF0YVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuICgpID0+IHsgY29uc29sZS5sb2coJ2NsZWFudXAgZnJvbSBTcGVha2VycyBjb21wb25lbnQnKSB9XG4gIH0sIFtdKVxuXG4vLyAgRmF2b3JpdGUgU3BlYWtlciB0b2dnbGUgZnVuY3Rpb25hbGl0eVxuICBjb25zdCBoZWFydEZhdkhhbmRsZXIgPSAoZSwgZmF2VmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBzZWxlY3QgY2xpY2tlZCBzcGVha2VyIGJ5IGF0dHJpYnV0ZSAnZGF0YS1zZXNzaW9uLWlkJ1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZWYWx1ZSA/IEFDVElPTi5mYXZvcml0ZSA6IEFDVElPTi51bmZhdm9yaXRlLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWRcbiAgICB9KVxuICB9XG5cbi8vIHJlc3VsdHMgb2YgY3VzdG9tIGhvb2tcbiAgcmV0dXJuIHsgc3BlYWtlckxpc3QsIGlzTG9hZGluZywgaGVhcnRGYXZIYW5kbGVyIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJzcGVha2VyRGF0YSIsInNwZWFrZXJzUmVkdWNlciIsIkFDVElPTiIsIlVzZVNwZWFrZXJzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJ0eXBlIiwic2V0U3BlYWtlckxpc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhlYXJ0RmF2SGFuZGxlciIsImUiLCJmYXZWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJmYXZvcml0ZSIsInVuZmF2b3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});