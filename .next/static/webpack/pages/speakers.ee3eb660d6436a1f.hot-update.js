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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\n/* harmony import */ var _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/speakersReducer */ \"./src/reducers/speakersReducer.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    // const [isLoading, setIsLoading] = useState(true)\n    // const [speakerList, dispatch] = useReducer(speakersReducer, [])\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        speakerList: [],\n        isLoading: true\n    }), state = ref[0], dispatch = ref[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n            isLoading: state.isLoading\n        });\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            dispatch({\n                type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n                isLoading: !state.isLoading\n            });\n        });\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setSpeakerList,\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  Favorite Speaker toggle functionality\n    //  wrap in useCallback to memoize this handler on each speaker component,\n    //  so only component rerender if f-n values are changed\n    var toggleFavSpeaker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.favorite : _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.unfavorite,\n            sessionId: sessionId\n        });\n    }, []);\n    // results of custom hook\n    return {\n        state: state,\n        isLoading: isLoading,\n        toggleFavSpeaker: toggleFavSpeaker\n    };\n};\n_s(UseSpeakers, \"xnjCfT5Evr9cR/6KVRULXgKAxK8=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0U7QUFDdEI7QUFDdUI7O0FBR3RELFNBQVNPLFdBQVcsR0FBRzs7SUFDcEMsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxJQUEwQkwsR0FHeEIsR0FId0JBLGlEQUFVLENBQUNHLGlFQUFlLEVBQUU7UUFDcERHLFdBQVcsRUFBRSxFQUFFO1FBQ2ZDLFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUMsRUFYSixLQVFjLEdBQWNQLEdBR3hCLEdBSFUsRUFSZCxRQVF3QixHQUFJQSxHQUd4QixHQUhvQjtJQUt4Qix3Q0FBd0M7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNkVSxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFTiwwRUFBbUI7WUFDekJHLFNBQVMsRUFBRUMsS0FBSyxDQUFDRCxTQUFTO1NBQzNCLENBQUM7UUFFRixJQUFJSyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFBRUQsT0FBTyxFQUFFO2FBQUUsRUFBRSxJQUFJLENBQUM7U0FDdEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsV0FBTTtZQUNaTixRQUFRLENBQUM7Z0JBQ1BDLElBQUksRUFBRU4sMEVBQW1CO2dCQUN6QkcsU0FBUyxFQUFFLENBQUNDLEtBQUssQ0FBQ0QsU0FBUzthQUM1QixDQUFDO1NBQ0gsQ0FBQztRQUVGRSxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFTiw0RUFBcUI7WUFDM0JhLElBQUksRUFBRWYsMERBQVc7U0FDbEIsQ0FBQztRQUVGLE9BQU8sV0FBTTtZQUFFZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7U0FBRTtLQUNoRSxFQUFFLEVBQUUsQ0FBQztJQUVSLHlDQUF5QztJQUN6QywwRUFBMEU7SUFDMUUsd0RBQXdEO0lBQ3RELElBQU1DLGdCQUFnQixHQUFHbkIsa0RBQVcsQ0FBQyxTQUFDb0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUs7UUFDcERELENBQUMsQ0FBQ0UsY0FBYyxFQUFFO1FBQ2xCLHdEQUF3RDtRQUN4RCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDSyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxLQUFLLENBQUM7UUFFdkVuQixRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFWSxRQUFRLEdBQUdsQixzRUFBZSxHQUFHQSx3RUFBaUI7WUFDcERvQixTQUFTLEVBQUVBLFNBQVM7U0FDckIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDO0lBRVIseUJBQXlCO0lBQ3ZCLE9BQU87UUFBRWhCLEtBQUssRUFBTEEsS0FBSztRQUFFRCxTQUFTLEVBQVRBLFNBQVM7UUFBRWEsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7S0FBRTtDQUM5QztHQWhEdUJmLFdBQVc7QUFBWEEsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanM/MGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uL2RhdGEvc3BlYWtlci1kYXRhJ1xuaW1wb3J0IHNwZWFrZXJzUmVkdWNlciwgeyBBQ1RJT04gfSBmcm9tICcuLi9yZWR1Y2Vycy9zcGVha2Vyc1JlZHVjZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlU3BlYWtlcnMoKSB7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCBbXSlcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwge1xuICAgIHNwZWFrZXJMaXN0OiBbXSxcbiAgICBpc0xvYWRpbmc6IHRydWVcbiAgfSlcbiAgXG4vLyBHZXQgc3BlYWtlcnMgZGF0YSBzaW11bGF0aW5nIEFQSSBjYWxsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUNUSU9OLnNldElzTG9hZGluZyxcbiAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXG4gICAgfSlcbiAgICBcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoKSB9LCAxMDAwKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBQ1RJT04uc2V0SXNMb2FkaW5nLFxuICAgICAgICBpc0xvYWRpbmc6ICFzdGF0ZS5pc0xvYWRpbmdcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVElPTi5zZXRTcGVha2VyTGlzdCxcbiAgICAgIGRhdGE6IHNwZWFrZXJEYXRhXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gKCkgPT4geyBjb25zb2xlLmxvZygnY2xlYW51cCBmcm9tIFNwZWFrZXJzIGNvbXBvbmVudCcpIH1cbiAgfSwgW10pXG5cbi8vICBGYXZvcml0ZSBTcGVha2VyIHRvZ2dsZSBmdW5jdGlvbmFsaXR5XG4vLyAgd3JhcCBpbiB1c2VDYWxsYmFjayB0byBtZW1vaXplIHRoaXMgaGFuZGxlciBvbiBlYWNoIHNwZWFrZXIgY29tcG9uZW50LFxuLy8gIHNvIG9ubHkgY29tcG9uZW50IHJlcmVuZGVyIGlmIGYtbiB2YWx1ZXMgYXJlIGNoYW5nZWRcbiAgY29uc3QgdG9nZ2xlRmF2U3BlYWtlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIHNlbGVjdCBjbGlja2VkIHNwZWFrZXIgYnkgYXR0cmlidXRlICdkYXRhLXNlc3Npb24taWQnXG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSlcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdlZhbHVlID8gQUNUSU9OLmZhdm9yaXRlIDogQUNUSU9OLnVuZmF2b3JpdGUsXG4gICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZFxuICAgIH0pXG4gIH0sIFtdKVxuXG4vLyByZXN1bHRzIG9mIGN1c3RvbSBob29rXG4gIHJldHVybiB7IHN0YXRlLCBpc0xvYWRpbmcsIHRvZ2dsZUZhdlNwZWFrZXIgfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZUNhbGxiYWNrIiwic3BlYWtlckRhdGEiLCJzcGVha2Vyc1JlZHVjZXIiLCJBQ1RJT04iLCJVc2VTcGVha2VycyIsInNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwic3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJzZXRJc0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwic2V0U3BlYWtlckxpc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZUZhdlNwZWFrZXIiLCJlIiwiZmF2VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZmF2b3JpdGUiLCJ1bmZhdm9yaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});