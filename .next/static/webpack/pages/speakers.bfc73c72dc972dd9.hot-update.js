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

/***/ "./src/useHooks/UseSpeakers.js":
/*!*************************************!*\
  !*** ./src/useHooks/UseSpeakers.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\n/* harmony import */ var _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/speakersReducer */ \"./src/reducers/speakersReducer.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        speakerList: [],\n        isLoading: true,\n        favClickCount: 5\n    }), state = ref[0], dispatch = ref[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n            isLoading: state.isLoading\n        });\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            dispatch({\n                type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n                isLoading: !state.isLoading\n            });\n        });\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setSpeakerList,\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  wrap in useCallback to memoize this handler on each speaker component,\n    //  so only component rerender if f-n values are changed\n    var toggleFavSpeaker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.favorite : _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.unfavorite,\n            sessionId: sessionId\n        });\n    }, []);\n    var favClickIncrement = function() {\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.incrementFav\n        });\n    };\n    // results of custom hook\n    return {\n        state: state,\n        toggleFavSpeaker: toggleFavSpeaker,\n        favClickIncrement: favClickIncrement\n    };\n};\n_s(UseSpeakers, \"4mev5vHJkatYZdLn0PBblBsfd8E=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEQ7QUFDWjtBQUN1Qjs7QUFHdEQsU0FBU00sV0FBVyxHQUFHOztJQUVwQyxJQUEwQkwsR0FJeEIsR0FKd0JBLGlEQUFVLENBQUNHLGlFQUFlLEVBQUU7UUFDcERHLFdBQVcsRUFBRSxFQUFFO1FBQ2ZDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLGFBQWEsRUFBRSxDQUFDO0tBQ2pCLENBQUMsRUFYSixLQU9jLEdBQWNSLEdBSXhCLEdBSlUsRUFQZCxRQU93QixHQUFJQSxHQUl4QixHQUpvQjtJQU94Qix3Q0FBd0M7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNkVyxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFUCwwRUFBbUI7WUFDekJHLFNBQVMsRUFBRUUsS0FBSyxDQUFDRixTQUFTO1NBQzNCLENBQUM7UUFDRixJQUFJTSxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFBRUQsT0FBTyxFQUFFO2FBQUUsRUFBRSxJQUFJLENBQUM7U0FDdEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsV0FBTTtZQUNaTixRQUFRLENBQUM7Z0JBQ1BDLElBQUksRUFBRVAsMEVBQW1CO2dCQUN6QkcsU0FBUyxFQUFFLENBQUNFLEtBQUssQ0FBQ0YsU0FBUzthQUM1QixDQUFDO1NBQ0gsQ0FBQztRQUNGRyxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFUCw0RUFBcUI7WUFDM0JjLElBQUksRUFBRWhCLDBEQUFXO1NBQ2xCLENBQUM7UUFDRixPQUFPLFdBQU07WUFBRWlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO1NBQUU7S0FDaEUsRUFBRSxFQUFFLENBQUM7SUFHUiwwRUFBMEU7SUFDMUUsd0RBQXdEO0lBQ3RELElBQU1DLGdCQUFnQixHQUFHcEIsa0RBQVcsQ0FBQyxTQUFDcUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUs7UUFDcERELENBQUMsQ0FBQ0UsY0FBYyxFQUFFO1FBQ2xCLHdEQUF3RDtRQUN4RCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDSyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxLQUFLLENBQUM7UUFDdkVuQixRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFWSxRQUFRLEdBQUduQixzRUFBZSxHQUFHQSx3RUFBaUI7WUFDcERxQixTQUFTLEVBQUVBLFNBQVM7U0FDckIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDO0lBR04sSUFBTU8saUJBQWlCLEdBQUcsV0FBTTtRQUM5QnRCLFFBQVEsQ0FBQztZQUFFQyxJQUFJLEVBQUVQLDBFQUFtQjtTQUFFLENBQUM7S0FDeEM7SUFFSCx5QkFBeUI7SUFDdkIsT0FBTztRQUFFSyxLQUFLLEVBQUxBLEtBQUs7UUFBRVksZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7UUFBRVcsaUJBQWlCLEVBQWpCQSxpQkFBaUI7S0FBRTtDQUN0RDtHQWxEdUIzQixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUhvb2tzL1VzZVNwZWFrZXJzLmpzPzBhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uL2RhdGEvc3BlYWtlci1kYXRhJ1xuaW1wb3J0IHNwZWFrZXJzUmVkdWNlciwgeyBBQ1RJT04gfSBmcm9tICcuLi9yZWR1Y2Vycy9zcGVha2Vyc1JlZHVjZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlU3BlYWtlcnMoKSB7XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwge1xuICAgIHNwZWFrZXJMaXN0OiBbXSxcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgZmF2Q2xpY2tDb3VudDogNVxuICB9KVxuXG5cbi8vIEdldCBzcGVha2VycyBkYXRhIHNpbXVsYXRpbmcgQVBJIGNhbGxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBQ1RJT04uc2V0SXNMb2FkaW5nLFxuICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcbiAgICB9KVxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZSgpIH0sIDEwMDApXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFDVElPTi5zZXRJc0xvYWRpbmcsXG4gICAgICAgIGlzTG9hZGluZzogIXN0YXRlLmlzTG9hZGluZ1xuICAgICAgfSlcbiAgICB9KVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVElPTi5zZXRTcGVha2VyTGlzdCxcbiAgICAgIGRhdGE6IHNwZWFrZXJEYXRhXG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4geyBjb25zb2xlLmxvZygnY2xlYW51cCBmcm9tIFNwZWFrZXJzIGNvbXBvbmVudCcpIH1cbiAgfSwgW10pXG5cblxuLy8gIHdyYXAgaW4gdXNlQ2FsbGJhY2sgdG8gbWVtb2l6ZSB0aGlzIGhhbmRsZXIgb24gZWFjaCBzcGVha2VyIGNvbXBvbmVudCxcbi8vICBzbyBvbmx5IGNvbXBvbmVudCByZXJlbmRlciBpZiBmLW4gdmFsdWVzIGFyZSBjaGFuZ2VkXG4gIGNvbnN0IHRvZ2dsZUZhdlNwZWFrZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2VmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBzZWxlY3QgY2xpY2tlZCBzcGVha2VyIGJ5IGF0dHJpYnV0ZSAnZGF0YS1zZXNzaW9uLWlkJ1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2VmFsdWUgPyBBQ1RJT04uZmF2b3JpdGUgOiBBQ1RJT04udW5mYXZvcml0ZSxcbiAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgfSlcbiAgfSwgW10pXG5cblxuICBjb25zdCBmYXZDbGlja0luY3JlbWVudCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5pbmNyZW1lbnRGYXYgfSlcbiAgfVxuXG4vLyByZXN1bHRzIG9mIGN1c3RvbSBob29rXG4gIHJldHVybiB7IHN0YXRlLCB0b2dnbGVGYXZTcGVha2VyLCBmYXZDbGlja0luY3JlbWVudCB9XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZUNhbGxiYWNrIiwic3BlYWtlckRhdGEiLCJzcGVha2Vyc1JlZHVjZXIiLCJBQ1RJT04iLCJVc2VTcGVha2VycyIsInNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwiZmF2Q2xpY2tDb3VudCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0SXNMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNldFNwZWFrZXJMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVGYXZTcGVha2VyIiwiZSIsImZhdlZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsImZhdm9yaXRlIiwidW5mYXZvcml0ZSIsImZhdkNsaWNrSW5jcmVtZW50IiwiaW5jcmVtZW50RmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});