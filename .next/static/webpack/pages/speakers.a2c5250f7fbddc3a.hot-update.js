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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\n/* harmony import */ var _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/speakersReducer */ \"./src/reducers/speakersReducer.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    // const [isLoading, setIsLoading] = useState(true)\n    // const [speakerList, dispatch] = useReducer(speakersReducer, [])\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        speakerList: [],\n        isLoading: true\n    }), state = ref[0], dispatch = ref[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n            isLoading: state.isLoading\n        });\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            dispatch({\n                type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setIsLoading,\n                isLoading: !state.isLoading\n            });\n        });\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setSpeakerList,\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  wrap in useCallback to memoize this handler on each speaker component,\n    //  so only component rerender if f-n values are changed\n    var toggleFavSpeaker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.favorite : _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.unfavorite,\n            sessionId: sessionId\n        });\n    }, []);\n    // results of custom hook\n    return {\n        state: state,\n        toggleFavSpeaker: toggleFavSpeaker\n    };\n};\n_s(UseSpeakers, \"xnjCfT5Evr9cR/6KVRULXgKAxK8=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0U7QUFDdEI7QUFDdUI7O0FBR3RELFNBQVNPLFdBQVcsR0FBRzs7SUFDcEMsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxJQUEwQkwsR0FHeEIsR0FId0JBLGlEQUFVLENBQUNHLGlFQUFlLEVBQUU7UUFDcERHLFdBQVcsRUFBRSxFQUFFO1FBQ2ZDLFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUMsRUFYSixLQVFjLEdBQWNQLEdBR3hCLEdBSFUsRUFSZCxRQVF3QixHQUFJQSxHQUd4QixHQUhvQjtJQUt4Qix3Q0FBd0M7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNkVSxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFTiwwRUFBbUI7WUFDekJHLFNBQVMsRUFBRUMsS0FBSyxDQUFDRCxTQUFTO1NBQzNCLENBQUM7UUFFRixJQUFJSyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFBRUQsT0FBTyxFQUFFO2FBQUUsRUFBRSxJQUFJLENBQUM7U0FDdEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsV0FBTTtZQUNaTixRQUFRLENBQUM7Z0JBQ1BDLElBQUksRUFBRU4sMEVBQW1CO2dCQUN6QkcsU0FBUyxFQUFFLENBQUNDLEtBQUssQ0FBQ0QsU0FBUzthQUM1QixDQUFDO1NBQ0gsQ0FBQztRQUVGRSxRQUFRLENBQUM7WUFDUEMsSUFBSSxFQUFFTiw0RUFBcUI7WUFDM0JhLElBQUksRUFBRWYsMERBQVc7U0FDbEIsQ0FBQztRQUVGLE9BQU8sV0FBTTtZQUFFZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7U0FBRTtLQUNoRSxFQUFFLEVBQUUsQ0FBQztJQUVSLDBFQUEwRTtJQUMxRSx3REFBd0Q7SUFDdEQsSUFBTUMsZ0JBQWdCLEdBQUduQixrREFBVyxDQUFDLFNBQUNvQixDQUFDLEVBQUVDLFFBQVEsRUFBSztRQUNwREQsQ0FBQyxDQUFDRSxjQUFjLEVBQUU7UUFDbEIsd0RBQXdEO1FBQ3hELElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLEtBQUssQ0FBQztRQUV2RW5CLFFBQVEsQ0FBQztZQUNQQyxJQUFJLEVBQUVZLFFBQVEsR0FBR2xCLHNFQUFlLEdBQUdBLHdFQUFpQjtZQUNwRG9CLFNBQVMsRUFBRUEsU0FBUztTQUNyQixDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUM7SUFFUix5QkFBeUI7SUFDdkIsT0FBTztRQUFFaEIsS0FBSyxFQUFMQSxLQUFLO1FBQUVZLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0tBQUU7Q0FDbkM7R0EvQ3VCZixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUhvb2tzL1VzZVNwZWFrZXJzLmpzPzBhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzcGVha2VyRGF0YSBmcm9tICcuLi9kYXRhL3NwZWFrZXItZGF0YSdcbmltcG9ydCBzcGVha2Vyc1JlZHVjZXIsIHsgQUNUSU9OIH0gZnJvbSAnLi4vcmVkdWNlcnMvc3BlYWtlcnNSZWR1Y2VyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZVNwZWFrZXJzKCkge1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwgW10pXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcbiAgICBzcGVha2VyTGlzdDogW10sXG4gICAgaXNMb2FkaW5nOiB0cnVlXG4gIH0pXG4gIFxuLy8gR2V0IHNwZWFrZXJzIGRhdGEgc2ltdWxhdGluZyBBUEkgY2FsbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVElPTi5zZXRJc0xvYWRpbmcsXG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xuICAgIH0pXG4gICAgXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKCkgfSwgMTAwMClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQUNUSU9OLnNldElzTG9hZGluZyxcbiAgICAgICAgaXNMb2FkaW5nOiAhc3RhdGUuaXNMb2FkaW5nXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBQ1RJT04uc2V0U3BlYWtlckxpc3QsXG4gICAgICBkYXRhOiBzcGVha2VyRGF0YVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuICgpID0+IHsgY29uc29sZS5sb2coJ2NsZWFudXAgZnJvbSBTcGVha2VycyBjb21wb25lbnQnKSB9XG4gIH0sIFtdKVxuXG4vLyAgd3JhcCBpbiB1c2VDYWxsYmFjayB0byBtZW1vaXplIHRoaXMgaGFuZGxlciBvbiBlYWNoIHNwZWFrZXIgY29tcG9uZW50LFxuLy8gIHNvIG9ubHkgY29tcG9uZW50IHJlcmVuZGVyIGlmIGYtbiB2YWx1ZXMgYXJlIGNoYW5nZWRcbiAgY29uc3QgdG9nZ2xlRmF2U3BlYWtlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIHNlbGVjdCBjbGlja2VkIHNwZWFrZXIgYnkgYXR0cmlidXRlICdkYXRhLXNlc3Npb24taWQnXG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSlcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdlZhbHVlID8gQUNUSU9OLmZhdm9yaXRlIDogQUNUSU9OLnVuZmF2b3JpdGUsXG4gICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZFxuICAgIH0pXG4gIH0sIFtdKVxuXG4vLyByZXN1bHRzIG9mIGN1c3RvbSBob29rXG4gIHJldHVybiB7IHN0YXRlLCB0b2dnbGVGYXZTcGVha2VyIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJ1c2VDYWxsYmFjayIsInNwZWFrZXJEYXRhIiwic3BlYWtlcnNSZWR1Y2VyIiwiQUNUSU9OIiwiVXNlU3BlYWtlcnMiLCJzcGVha2VyTGlzdCIsImlzTG9hZGluZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0SXNMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNldFNwZWFrZXJMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVGYXZTcGVha2VyIiwiZSIsImZhdlZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsImZhdm9yaXRlIiwidW5mYXZvcml0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});