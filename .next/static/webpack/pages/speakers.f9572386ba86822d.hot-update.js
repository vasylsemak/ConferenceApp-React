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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\n/* harmony import */ var _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/speakersReducer */ \"./src/reducers/speakersReducer.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], []), speakerList = ref1[0], dispatch = ref1[1];\n    // function speakersReducer(state, action) {\n    //   const toggleFavorite = favValue =>  state.map(el =>\n    //     el.id === action.sessionId ?  {...el, favorite: favValue} : el)\n    //   switch(action.type) {\n    //     case 'setSpeakerList':\n    //       return action.data\n    //     case 'favorite':\n    //       return toggleFavorite(true)\n    //     case 'unfavorite':\n    //       return toggleFavorite(false)\n    //     default:\n    //       return state\n    //   }\n    // }\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        dispatch({\n            type: _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.setSpeakerList,\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  Favorite Speaker toggle functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.favorite : _reducers_speakersReducer__WEBPACK_IMPORTED_MODULE_2__.ACTION.unfavorite,\n            sessionId: sessionId\n        });\n    };\n    // results of custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler\n    };\n};\n_s(UseSpeakers, \"syeIWC6w/A01PJZG9F5EeyZU4xM=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDVDtBQUN1Qjs7QUFHdEQsU0FBU00sV0FBVyxHQUFHOztJQUNwQyxJQUFrQ04sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU5sRCxTQU1rQixHQUFrQkEsR0FBYyxHQUFoQyxFQU5sQixZQU1nQyxHQUFJQSxHQUFjLEdBQWxCO0lBQzlCLElBQWdDRSxJQUErQixHQUEvQkEsaURBQVUsQ0FBQ0UsaUVBQWUsRUFBRSxFQUFFLENBQUMsRUFQakUsV0FPb0IsR0FBY0YsSUFBK0IsR0FBN0MsRUFQcEIsUUFPOEIsR0FBSUEsSUFBK0IsR0FBbkM7SUFFNUIsNENBQTRDO0lBQzVDLHdEQUF3RDtJQUN4RCxzRUFBc0U7SUFFdEUsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLElBQUk7SUFFTix3Q0FBd0M7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNkTyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRWxCLElBQUlHLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDdkJDLFVBQVUsQ0FBQyxXQUFNO2dCQUNmRCxPQUFPLEVBQUU7YUFDVixFQUFFLElBQUksQ0FBQztTQUNULENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFdBQU07WUFDWk4sWUFBWSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDO1FBRUZFLFFBQVEsQ0FBQztZQUNQSyxJQUFJLEVBQUVWLDRFQUFxQjtZQUMzQlksSUFBSSxFQUFFZCwwREFBVztTQUNsQixDQUFDO1FBRUYsT0FBTyxXQUFNO1lBQ1hlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFUix5Q0FBeUM7SUFDdkMsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLENBQUMsRUFBRUMsUUFBUSxFQUFLO1FBQ3ZDRCxDQUFDLENBQUNFLGNBQWMsRUFBRTtRQUNsQix3REFBd0Q7UUFDeEQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNKLENBQUMsQ0FBQ0ssTUFBTSxDQUFDQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1FBRXZFbEIsUUFBUSxDQUFDO1lBQ1BLLElBQUksRUFBRU8sUUFBUSxHQUFHakIsc0VBQWUsR0FBR0Esd0VBQWlCO1lBQ3BEbUIsU0FBUyxFQUFFQSxTQUFTO1NBQ3JCLENBQUM7S0FDSDtJQUVILHlCQUF5QjtJQUN2QixPQUFPO1FBQUVmLFdBQVcsRUFBWEEsV0FBVztRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRWEsZUFBZSxFQUFmQSxlQUFlO0tBQUU7Q0FDbkQ7R0F4RHVCZCxXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUhvb2tzL1VzZVNwZWFrZXJzLmpzPzBhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uL2RhdGEvc3BlYWtlci1kYXRhJ1xuaW1wb3J0IHNwZWFrZXJzUmVkdWNlciwgeyBBQ1RJT04gfSBmcm9tICcuLi9yZWR1Y2Vycy9zcGVha2Vyc1JlZHVjZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlU3BlYWtlcnMoKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCBbXSlcblxuICAvLyBmdW5jdGlvbiBzcGVha2Vyc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAvLyAgIGNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gZmF2VmFsdWUgPT4gIHN0YXRlLm1hcChlbCA9PlxuICAvLyAgICAgZWwuaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQgPyAgey4uLmVsLCBmYXZvcml0ZTogZmF2VmFsdWV9IDogZWwpXG5cbiAgLy8gICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgLy8gICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0JzpcbiAgLy8gICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIC8vICAgICBjYXNlICdmYXZvcml0ZSc6XG4gIC8vICAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZSh0cnVlKVxuICAvLyAgICAgY2FzZSAndW5mYXZvcml0ZSc6XG4gIC8vICAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZShmYWxzZSlcbiAgLy8gICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgIHJldHVybiBzdGF0ZVxuICAvLyAgIH1cbiAgLy8gfVxuICBcbi8vIEdldCBzcGVha2VycyBkYXRhIHNpbXVsYXRpbmcgQVBJIGNhbGxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICBcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSwgMTAwMClcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUNUSU9OLnNldFNwZWFrZXJMaXN0LFxuICAgICAgZGF0YTogc3BlYWtlckRhdGFcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCBmcm9tIFNwZWFrZXJzIGNvbXBvbmVudCcpXG4gICAgfVxuICB9LCBbXSlcblxuLy8gIEZhdm9yaXRlIFNwZWFrZXIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbiAgY29uc3QgaGVhcnRGYXZIYW5kbGVyID0gKGUsIGZhdlZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gc2VsZWN0IGNsaWNrZWQgc3BlYWtlciBieSBhdHRyaWJ1dGUgJ2RhdGEtc2Vzc2lvbi1pZCdcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2VmFsdWUgPyBBQ1RJT04uZmF2b3JpdGUgOiBBQ1RJT04udW5mYXZvcml0ZSxcbiAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgfSlcbiAgfVxuXG4vLyByZXN1bHRzIG9mIGN1c3RvbSBob29rXG4gIHJldHVybiB7IHNwZWFrZXJMaXN0LCBpc0xvYWRpbmcsIGhlYXJ0RmF2SGFuZGxlciB9XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlckRhdGEiLCJzcGVha2Vyc1JlZHVjZXIiLCJBQ1RJT04iLCJVc2VTcGVha2VycyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwidHlwZSIsInNldFNwZWFrZXJMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoZWFydEZhdkhhbmRsZXIiLCJlIiwiZmF2VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZmF2b3JpdGUiLCJ1bmZhdm9yaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});