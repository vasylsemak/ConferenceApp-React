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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nvar toggleFavorite = function(anArr, favValue, id) {\n    return anArr.map(function(el) {\n        return el.id === id ? _objectSpread({}, el, {\n            favorite: favValue\n        }) : el;\n    });\n};\nfunction UseSpeakers() {\n    var speakersReducer = function speakersReducer(state, action) {\n        switch(action.type){\n            case \"setSpeakerList\":\n                return action.data;\n            case \"favorite\":\n                return toggleFavorite(state, true, action.sessionId);\n            case \"unfavorite\":\n                return toggleFavorite(state, false, action.sessionId);\n            default:\n                return state;\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(speakersReducer, []), speakerList = ref1[0], dispatch = ref1[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        dispatch({\n            type: \"setSpeakerList\",\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  Favorite Speaker toggle functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? \"favorite\" : \"unfavorite\",\n            sessionId: sessionId\n        });\n    };\n    // results of custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler\n    };\n};\n_s(UseSpeakers, \"syeIWC6w/A01PJZG9F5EeyZU4xM=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ1Q7O0FBRTlDLElBQU1JLGNBQWMsR0FBRyxTQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsRUFBRTtXQUN6Q0YsS0FBSyxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLEVBQUU7ZUFBSUEsRUFBRSxDQUFDRixFQUFFLEtBQUtBLEVBQUUsR0FDdkIsa0JBQUlFLEVBQUU7WUFBRUMsUUFBUSxFQUFFSixRQUFRO1VBQUMsR0FBR0csRUFBRTtLQUFBLENBQUM7Q0FBQTtBQUl6QixTQUFTRSxXQUFXLEdBQUc7UUFJM0JDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtRQUN0QyxPQUFPQSxNQUFNLENBQUNDLElBQUk7WUFDaEIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU9ELE1BQU0sQ0FBQ0UsSUFBSTtZQUNwQixLQUFLLFVBQVU7Z0JBQ2IsT0FBT1osY0FBYyxDQUFDUyxLQUFLLEVBQUUsSUFBSSxFQUFFQyxNQUFNLENBQUNHLFNBQVMsQ0FBQztZQUN0RCxLQUFLLFlBQVk7Z0JBQ2YsT0FBT2IsY0FBYyxDQUFDUyxLQUFLLEVBQUUsS0FBSyxFQUFFQyxNQUFNLENBQUNHLFNBQVMsQ0FBQztZQUN2RDtnQkFDRSxPQUFPSixLQUFLO1NBQ2Y7S0FDRjs7SUFkRCxJQUFrQ2IsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVZsRCxTQVVrQixHQUFrQkEsR0FBYyxHQUFoQyxFQVZsQixZQVVnQyxHQUFJQSxHQUFjLEdBQWxCO0lBQzlCLElBQWdDRSxJQUErQixHQUEvQkEsaURBQVUsQ0FBQ1UsZUFBZSxFQUFFLEVBQUUsQ0FBQyxFQVhqRSxXQVdvQixHQUFjVixJQUErQixHQUE3QyxFQVhwQixRQVc4QixHQUFJQSxJQUErQixHQUFuQztJQWU5Qix3Q0FBd0M7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNka0IsWUFBWSxDQUFDLElBQUksQ0FBQztRQUVsQixJQUFJRyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1lBQ3ZCQyxVQUFVLENBQUMsV0FBTTtnQkFDZkQsT0FBTyxFQUFFO2FBQ1YsRUFBRSxJQUFJLENBQUM7U0FDVCxDQUFDLENBQUNFLElBQUksQ0FBQyxXQUFNO1lBQ1pOLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDcEIsQ0FBQztRQUVGRSxRQUFRLENBQUM7WUFDUE4sSUFBSSxFQUFFLGdCQUFnQjtZQUN0QkMsSUFBSSxFQUFFYiwwREFBVztTQUNsQixDQUFDO1FBRUYsT0FBTyxXQUFNO1lBQ1h1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQztLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRVIseUNBQXlDO0lBQ3ZDLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxDQUFDLEVBQUV2QixRQUFRLEVBQUs7UUFDdkN1QixDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQix3REFBd0Q7UUFDeEQsSUFBTWIsU0FBUyxHQUFHYyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1FBRXZFYixRQUFRLENBQUM7WUFDUE4sSUFBSSxFQUFFVCxRQUFRLEdBQUcsVUFBVSxHQUFHLFlBQVk7WUFDMUNXLFNBQVMsRUFBRUEsU0FBUztTQUNyQixDQUFDO0tBQ0g7SUFFSCx5QkFBeUI7SUFDdkIsT0FBTztRQUFFRyxXQUFXLEVBQVhBLFdBQVc7UUFBRUYsU0FBUyxFQUFUQSxTQUFTO1FBQUVVLGVBQWUsRUFBZkEsZUFBZTtLQUFFO0NBQ25EO0dBckR1QmpCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanM/MGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vZGF0YS9zcGVha2VyLWRhdGEnXG5cbmNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gKGFuQXJyLCBmYXZWYWx1ZSwgaWQpID0+IFxuICBhbkFyci5tYXAoZWwgPT4gZWwuaWQgPT09IGlkIFxuICAgID8gIHsuLi5lbCwgZmF2b3JpdGU6IGZhdlZhbHVlfSA6IGVsKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlU3BlYWtlcnMoKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCBbXSlcblxuICBmdW5jdGlvbiBzcGVha2Vyc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnc2V0U3BlYWtlckxpc3QnOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgICAgIGNhc2UgJ2Zhdm9yaXRlJzpcbiAgICAgICAgcmV0dXJuIHRvZ2dsZUZhdm9yaXRlKHN0YXRlLCB0cnVlLCBhY3Rpb24uc2Vzc2lvbklkKVxuICAgICAgY2FzZSAndW5mYXZvcml0ZSc6XG4gICAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZShzdGF0ZSwgZmFsc2UsIGFjdGlvbi5zZXNzaW9uSWQpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbiAgXG4vLyBHZXQgc3BlYWtlcnMgZGF0YSBzaW11bGF0aW5nIEFQSSBjYWxsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0sIDEwMDApXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSlcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXG4gICAgICBkYXRhOiBzcGVha2VyRGF0YVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwIGZyb20gU3BlYWtlcnMgY29tcG9uZW50JylcbiAgICB9XG4gIH0sIFtdKVxuXG4vLyAgRmF2b3JpdGUgU3BlYWtlciB0b2dnbGUgZnVuY3Rpb25hbGl0eVxuICBjb25zdCBoZWFydEZhdkhhbmRsZXIgPSAoZSwgZmF2VmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBzZWxlY3QgY2xpY2tlZCBzcGVha2VyIGJ5IGF0dHJpYnV0ZSAnZGF0YS1zZXNzaW9uLWlkJ1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZWYWx1ZSA/ICdmYXZvcml0ZScgOiAndW5mYXZvcml0ZScsXG4gICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZFxuICAgIH0pXG4gIH1cblxuLy8gcmVzdWx0cyBvZiBjdXN0b20gaG9va1xuICByZXR1cm4geyBzcGVha2VyTGlzdCwgaXNMb2FkaW5nLCBoZWFydEZhdkhhbmRsZXIgfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInNwZWFrZXJEYXRhIiwidG9nZ2xlRmF2b3JpdGUiLCJhbkFyciIsImZhdlZhbHVlIiwiaWQiLCJtYXAiLCJlbCIsImZhdm9yaXRlIiwiVXNlU3BlYWtlcnMiLCJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwic2Vzc2lvbklkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaGVhcnRGYXZIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});