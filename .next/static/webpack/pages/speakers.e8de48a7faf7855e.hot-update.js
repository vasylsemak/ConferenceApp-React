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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UseSpeakers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/speaker-data */ \"./src/data/speaker-data.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction UseSpeakers() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), speakerList = ref[0], setSpeakerList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), speakersSat = ref2[0], setSpeakersSat = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), speakersSun = ref3[0], setSpeakersSun = ref3[1];\n    var handleChangeSat = function() {\n        return setSpeakersSat(!speakersSat);\n    };\n    var handleChangeSun = function() {\n        return setSpeakersSun(!speakersSun);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(function() {\n            setIsLoading(false);\n        });\n        // get speakers data simulating API call\n        setSpeakerList(_data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        return function() {\n            console.log(\"cleanup from Speakers component\");\n        };\n    }, [\n        _data_speaker_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        speakersSat,\n        speakersSun\n    ]);\n    //  Favorite Speaker toggle functionality\n    var heartFavHandler = function(e, favValue) {\n        e.preventDefault();\n        // select clicked speaker by attribute 'data-session-id'\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        var refinedSpeakerList = speakerList.map(function(s) {\n            return s.id === sessionId ? _objectSpread({}, s, {\n                favorite: favValue\n            }) : s;\n        });\n        setSpeakerList(refinedSpeakerList);\n    };\n    // console.log(\"sorted => \", sortedSpeakerList)\n    // return results from custom hook\n    return {\n        speakerList: sortedSpeakerList,\n        isLoading: isLoading,\n        heartFavHandler: heartFavHandler,\n        speakersSat: speakersSat,\n        speakersSun: speakersSun,\n        handleChangeSat: handleChangeSat,\n        handleChangeSun: handleChangeSun\n    };\n};\n_s(UseSpeakers, \"7Jh4eH8LtQ33YyurcN5sG1OZvfw=\");\n_c = UseSpeakers;\nvar _c;\n$RefreshReg$(_c, \"UseSpeakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlSG9va3MvVXNlU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7O0FBRS9CLFNBQVNHLFdBQVcsR0FBRzs7SUFDcEMsSUFBc0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKcEQsV0FJb0IsR0FBb0JBLEdBQVksR0FBaEMsRUFKcEIsY0FJb0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNsQyxJQUFrQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUxsRCxTQUtrQixHQUFrQkEsSUFBYyxHQUFoQyxFQUxsQixZQUtnQyxHQUFJQSxJQUFjLEdBQWxCO0lBRTlCLElBQXNDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBUHRELFdBT29CLEdBQW9CQSxJQUFjLEdBQWxDLEVBUHBCLGNBT29DLEdBQUlBLElBQWMsR0FBbEI7SUFDbEMsSUFBc0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFSdEQsV0FRb0IsR0FBb0JBLElBQWMsR0FBbEMsRUFScEIsY0FRb0MsR0FBSUEsSUFBYyxHQUFsQjtJQUVsQyxJQUFNWSxlQUFlLEdBQUc7ZUFBTUgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztLQUFBO0lBQzFELElBQU1LLGVBQWUsR0FBRztlQUFNRixjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO0tBQUE7SUFFMURULGdEQUFTLENBQUMsV0FBTTtRQUNkTSxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRWxCLElBQUlPLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDdkJDLFVBQVUsQ0FBQyxXQUFNO2dCQUNmRCxPQUFPLEVBQUU7YUFDVixFQUFFLElBQUksQ0FBQztTQUNULENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFdBQU07WUFDWlYsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDO1FBQ0Ysd0NBQXdDO1FBQ3hDRixjQUFjLENBQUNILDBEQUFXLENBQUM7UUFFM0IsT0FBTyxXQUFNO1lBQ1hnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQztLQUNGLEVBQUU7UUFBQ2pCLDBEQUFXO1FBQUVNLFdBQVc7UUFBRUUsV0FBVztLQUFDLENBQUM7SUFFN0MseUNBQXlDO0lBQ3ZDLElBQU1VLGVBQWUsR0FBRyxTQUFDQyxDQUFDLEVBQUVDLFFBQVEsRUFBSztRQUN2Q0QsQ0FBQyxDQUFDRSxjQUFjLEVBQUU7UUFDbEIsd0RBQXdEO1FBQ3hELElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLEtBQUssQ0FBQztRQUV2RSxJQUFNQyxrQkFBa0IsR0FBR3pCLFdBQVcsQ0FBQzBCLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQzttQkFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtSLFNBQVMsR0FDOUQsa0JBQUlPLENBQUM7Z0JBQUVFLFFBQVEsRUFBRVgsUUFBUTtjQUFDLEdBQUdTLENBQUM7U0FBQSxDQUFDO1FBRW5DMUIsY0FBYyxDQUFDd0Isa0JBQWtCLENBQUM7S0FDbkM7SUFHRCwrQ0FBK0M7SUFHakQsa0NBQWtDO0lBQ2hDLE9BQU87UUFDTHpCLFdBQVcsRUFBRThCLGlCQUFpQjtRQUM5QjVCLFNBQVMsRUFBVEEsU0FBUztRQUNUYyxlQUFlLEVBQWZBLGVBQWU7UUFDZlosV0FBVyxFQUFYQSxXQUFXO1FBQ1hFLFdBQVcsRUFBWEEsV0FBVztRQUNYRSxlQUFlLEVBQWZBLGVBQWU7UUFDZkMsZUFBZSxFQUFmQSxlQUFlO0tBQ2hCO0NBQ0Y7R0F0RHVCVixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUhvb2tzL1VzZVNwZWFrZXJzLmpzPzBhMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uL2RhdGEvc3BlYWtlci1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VTcGVha2VycygpIHtcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgW3NwZWFrZXJzU2F0LCBzZXRTcGVha2Vyc1NhdF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc3BlYWtlcnNTdW4sIHNldFNwZWFrZXJzU3VuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0ID0gKCkgPT4gc2V0U3BlYWtlcnNTYXQoIXNwZWFrZXJzU2F0KVxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW4gPSAoKSA9PiBzZXRTcGVha2Vyc1N1bighc3BlYWtlcnNTdW4pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcblxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gICAgLy8gZ2V0IHNwZWFrZXJzIGRhdGEgc2ltdWxhdGluZyBBUEkgY2FsbFxuICAgIHNldFNwZWFrZXJMaXN0KHNwZWFrZXJEYXRhKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwIGZyb20gU3BlYWtlcnMgY29tcG9uZW50JylcbiAgICB9XG4gIH0sIFtzcGVha2VyRGF0YSwgc3BlYWtlcnNTYXQsIHNwZWFrZXJzU3VuXSlcblxuLy8gIEZhdm9yaXRlIFNwZWFrZXIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbiAgY29uc3QgaGVhcnRGYXZIYW5kbGVyID0gKGUsIGZhdlZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gc2VsZWN0IGNsaWNrZWQgc3BlYWtlciBieSBhdHRyaWJ1dGUgJ2RhdGEtc2Vzc2lvbi1pZCdcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKVxuXG4gICAgY29uc3QgcmVmaW5lZFNwZWFrZXJMaXN0ID0gc3BlYWtlckxpc3QubWFwKHMgPT4gcy5pZCA9PT0gc2Vzc2lvbklkXG4gICAgICA/IHsuLi5zLCBmYXZvcml0ZTogZmF2VmFsdWV9IDogcylcblxuICAgIHNldFNwZWFrZXJMaXN0KHJlZmluZWRTcGVha2VyTGlzdClcbiAgfVxuXG5cbiAgLy8gY29uc29sZS5sb2coXCJzb3J0ZWQgPT4gXCIsIHNvcnRlZFNwZWFrZXJMaXN0KVxuXG5cbi8vIHJldHVybiByZXN1bHRzIGZyb20gY3VzdG9tIGhvb2tcbiAgcmV0dXJuIHsgXG4gICAgc3BlYWtlckxpc3Q6IHNvcnRlZFNwZWFrZXJMaXN0LCBcbiAgICBpc0xvYWRpbmcsIFxuICAgIGhlYXJ0RmF2SGFuZGxlcixcbiAgICBzcGVha2Vyc1NhdCxcbiAgICBzcGVha2Vyc1N1bixcbiAgICBoYW5kbGVDaGFuZ2VTYXQsXG4gICAgaGFuZGxlQ2hhbmdlU3VuXG4gIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzcGVha2VyRGF0YSIsIlVzZVNwZWFrZXJzIiwic3BlYWtlckxpc3QiLCJzZXRTcGVha2VyTGlzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNwZWFrZXJzU2F0Iiwic2V0U3BlYWtlcnNTYXQiLCJzcGVha2Vyc1N1biIsInNldFNwZWFrZXJzU3VuIiwiaGFuZGxlQ2hhbmdlU2F0IiwiaGFuZGxlQ2hhbmdlU3VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJoZWFydEZhdkhhbmRsZXIiLCJlIiwiZmF2VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwicmVmaW5lZFNwZWFrZXJMaXN0IiwibWFwIiwicyIsImlkIiwiZmF2b3JpdGUiLCJzb3J0ZWRTcGVha2VyTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/useHooks/UseSpeakers.js\n");

/***/ })

});