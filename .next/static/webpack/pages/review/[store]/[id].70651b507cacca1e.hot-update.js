"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/review/[store]/[id]",{

/***/ "./pages/review/[store]/[id]/index.js":
/*!********************************************!*\
  !*** ./pages/review/[store]/[id]/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store\n\n\n\n\nvar _this = undefined;\nvar App = function(param) {\n    var data = param.data;\n    if (data === null) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Woops!\"\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 10,\n        columnNumber: 28\n    }, _this));\n    var storeData = data.storeData, reviewData = data.reviewData;\n    var customer = reviewData.customer, productName = reviewData.productName;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    storeData.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = App;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQWtJO0FBQzNGO0FBRXFCO0FBQ2U7QUFDaEM7O0FBRTNDLEdBQUssQ0FBQ0ssR0FBRyxHQUFHLFFBQVEsUUFBSSxDQUFDO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUVoQixFQUFFLEVBQUNBLElBQUksS0FBSyxJQUFJLEVBQUUsTUFBTSw2RUFBRUMsQ0FBRztrQkFBQyxDQUFNOzs7Ozs7SUFFcEMsR0FBSyxDQUFFQyxTQUFTLEdBQWdCRixJQUFJLENBQTdCRSxTQUFTLEVBQUVDLFVBQVUsR0FBSUgsSUFBSSxDQUFsQkcsVUFBVTtJQUM1QixHQUFLLENBQUVDLFFBQVEsR0FBaUJELFVBQVUsQ0FBbkNDLFFBQVEsRUFBRUMsV0FBVyxHQUFJRixVQUFVLENBQXpCRSxXQUFXO0lBRTVCLE1BQU0sNkVBQ0hKLENBQUc7O3dGQUNESyxDQUFFOztvQkFBQyxDQUFJO29CQUFDRixRQUFRLENBQUNHLElBQUk7Ozs7Ozs7d0ZBQ3JCRCxDQUFFOztvQkFBQyxDQUEyQjtvQkFBQ0QsV0FBVztvQkFBQyxDQUFpQjtvQkFBQ0gsU0FBUyxDQUFDSyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBR2xGLENBQUM7S0FiS1IsR0FBRzs7QUF1Q1QsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmV2aWV3L1tzdG9yZV0vW2lkXS9pbmRleC5qcz8yZDU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludmlkdWFsIGR5bmFtaWMgcGFnZSBmb3IgZWFjaCBzdG9yZSwgaW4gd2hpY2ggd2Ugd2lsbCBwYXNzIGEgcXVlcnkgaWQgYW5kIHRoYXQgZ2l2ZXMgdXMgdGhlIGNvcnJlY3QgcmV2aWV3IGZsb3cgZm9yIHRoYXQgc3RvcmVcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtkYn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24sIHVzZURvY3VtZW50IH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5cbmNvbnN0IEFwcCA9ICh7ZGF0YX0pID0+IHtcblxuICBpZihkYXRhID09PSBudWxsKSByZXR1cm4gPGRpdj5Xb29wcyE8L2Rpdj5cblxuICBjb25zdCB7c3RvcmVEYXRhLCByZXZpZXdEYXRhfSA9IGRhdGE7XG4gIGNvbnN0IHtjdXN0b21lciwgcHJvZHVjdE5hbWV9ID0gcmV2aWV3RGF0YVxuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhleSB7Y3VzdG9tZXIubmFtZX08L2gxPlxuICAgICAgPGgxPkhvcGUgeW91IGFyZSBlbmpveWluZyB5b3VyIHtwcm9kdWN0TmFtZX0geW91IGJvdWdodCBmcm9tIHtzdG9yZURhdGEubmFtZX08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBcbiAgY29uc3Qge3N0b3JlLCBpZH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCBzdG9yZVJlZiA9IGRvYyhkYiwgYG1lcmNoYW50cy9gLCBgJHtzdG9yZX1gKTtcbiAgY29uc3QgcmV2aWV3UmVmID0gZG9jKGRiLCBgbWVyY2hhbnRzLyR7c3RvcmV9L3Jldmlld3NgLCBgJHtpZH1gKTtcblxuICBjb25zdCByZXZpZXdEb2MgPSBhd2FpdCBnZXREb2MocmV2aWV3UmVmKTtcbiAgY29uc3Qgc3RvcmVEb2MgPSBhd2FpdCBnZXREb2Moc3RvcmVSZWYpO1xuXG4gIC8vIElmIGVpdGhlciBtZXJjaGFudCBvciByZXZpZXcgZG9lc24ndCBleGlzdFxuICBpZighc3RvcmVEb2MuZXhpc3RzKCkgfHwgIXJldmlld0RvYy5leGlzdHMoKSkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogbnVsbCB9IH1cblxuICBjb25zdCBzdG9yZURhdGEgPSBzdG9yZURvYy5kYXRhKCk7XG4gIGNvbnN0IHJldmlld0RhdGEgPSByZXZpZXdEb2MuZGF0YSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IHsgc3RvcmVEYXRhLCByZXZpZXdEYXRhIH1cbiAgICB9XG4gIH1cbn1cblxuICBcblxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJ1c2VDb2xsZWN0aW9uIiwidXNlRG9jdW1lbnQiLCJDbGlwTG9hZGVyIiwiQXBwIiwiZGF0YSIsImRpdiIsInN0b3JlRGF0YSIsInJldmlld0RhdGEiLCJjdXN0b21lciIsInByb2R1Y3ROYW1lIiwiaDEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/review/[store]/[id]/index.js\n");

/***/ })

});