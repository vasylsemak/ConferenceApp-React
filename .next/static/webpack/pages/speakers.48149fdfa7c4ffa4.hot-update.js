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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction toggleFavorite(anArr, favValue, id) {\n    return anArr.map(function(el) {\n        if (el.id === id) {\n            return _objectSpread({}, el, {\n                favorite: favValue\n            });\n        }\n        return el;\n    });\n}\nfunction UseSpeakers() {\n    var speakersReducer = function speakersReducer(state, action) {\n        switch(action.type){\n            case \"setSpeakerList\":\n                return action.data;\n            case \"favorite\":\n                return toggleFavorite(state, true, action.sessionId);\n            case \"unfavorite\":\n                return toggleFavorite(state, false, action.sessionId);\n            default:\n                return state;\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(speakersReducer, []), speakerList = ref1[0], dispatch = ref1[1];\n    // Get speakers data simulating API call\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        dispatch({\n            type: \"setSpeakerList\",\n            data: _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, []);\n    //  Favorite Speaker toggle functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favValue ? \"favorite\" : \"unfavorite\",\n            sessionId: sessionId\n        });\n    };\n    // results of custom hook\n    return {\n        speakerList: speakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler\n    };\n};\n_s(UseSpeakers, \"syeIWC6w/A01PJZG9F5EeyZU4xM=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vZGF0YS9zcGVha2VyLWRhdGEnXG5cbmZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlKGFuQXJyLCBmYXZWYWx1ZSwgaWQpIHtcbiAgcmV0dXJuIGFuQXJyLm1hcChlbCA9PiB7XG4gICAgaWYoZWwuaWQgPT09IGlkKSB7XG4gICAgICByZXR1cm4gey4uLmVsLCBmYXZvcml0ZTogZmF2VmFsdWV9XG4gICAgfVxuICAgIHJldHVybiBlbFxuICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZVNwZWFrZXJzKCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwgW10pXG5cbiAgZnVuY3Rpb24gc3BlYWtlcnNSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0JzpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gICAgICBjYXNlICdmYXZvcml0ZSc6XG4gICAgICAgIHJldHVybiB0b2dnbGVGYXZvcml0ZShzdGF0ZSwgdHJ1ZSwgYWN0aW9uLnNlc3Npb25JZClcbiAgICAgIGNhc2UgJ3VuZmF2b3JpdGUnOlxuICAgICAgICByZXR1cm4gdG9nZ2xlRmF2b3JpdGUoc3RhdGUsIGZhbHNlLCBhY3Rpb24uc2Vzc2lvbklkKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG4gIFxuLy8gR2V0IHNwZWFrZXJzIGRhdGEgc2ltdWxhdGluZyBBUEkgY2FsbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxuICAgICAgZGF0YTogc3BlYWtlckRhdGFcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCBmcm9tIFNwZWFrZXJzIGNvbXBvbmVudCcpXG4gICAgfVxuICB9LCBbXSlcblxuLy8gIEZhdm9yaXRlIFNwZWFrZXIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbiAgY29uc3QgaGVhcnRGYXZIYW5kbGVyID0gKGUsIGZhdlZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gc2VsZWN0IGNsaWNrZWQgc3BlYWtlciBieSBhdHRyaWJ1dGUgJ2RhdGEtc2Vzc2lvbi1pZCdcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2VmFsdWUgPyAnZmF2b3JpdGUnIDogJ3VuZmF2b3JpdGUnLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWRcbiAgICB9KVxuICB9XG5cbi8vIHJlc3VsdHMgb2YgY3VzdG9tIGhvb2tcbiAgcmV0dXJuIHsgc3BlYWtlckxpc3QsIGlzTG9hZGluZywgaGVhcnRGYXZIYW5kbGVyIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJzcGVha2VyRGF0YSIsInRvZ2dsZUZhdm9yaXRlIiwiYW5BcnIiLCJmYXZWYWx1ZSIsImlkIiwibWFwIiwiZWwiLCJmYXZvcml0ZSIsIlVzZVNwZWFrZXJzIiwic3BlYWtlcnNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInNlc3Npb25JZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImhlYXJ0RmF2SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});