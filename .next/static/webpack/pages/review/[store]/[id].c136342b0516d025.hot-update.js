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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store\n\n\n\n\nvar _this = undefined;\nvar App = function(param) {\n    var storeDetails = param.storeDetails, reviewData = param.reviewData;\n    if (storeDetails.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Woops!\"\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 10,\n        columnNumber: 33\n    }, _this));\n    var customer = reviewData.customer, productName = reviewData.productName;\n    var name = storeDetails.name;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = App;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQWtJO0FBQzNGO0FBRXFCO0FBQ2U7QUFDaEM7O0FBRTNDLEdBQUssQ0FBQ0ssR0FBRyxHQUFHLFFBQVEsUUFBd0IsQ0FBQztRQUEvQkMsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTtJQUVwQyxFQUFFLEVBQUNELFlBQVksQ0FBQ0UsS0FBSyxFQUFFLE1BQU0sNkVBQUVDLENBQUc7a0JBQUMsQ0FBTTs7Ozs7O0lBRXpDLEdBQUssQ0FBRUMsUUFBUSxHQUFpQkgsVUFBVSxDQUFuQ0csUUFBUSxFQUFFQyxXQUFXLEdBQUlKLFVBQVUsQ0FBekJJLFdBQVc7SUFDNUIsR0FBSyxDQUFFQyxJQUFJLEdBQUlOLFlBQVksQ0FBcEJNLElBQUk7SUFFWCxNQUFNLDZFQUNISCxDQUFHOzt3RkFDREksQ0FBRTs7b0JBQUMsQ0FBSTtvQkFBQ0gsUUFBUSxDQUFDRSxJQUFJOzs7Ozs7O3dGQUNyQkMsQ0FBRTs7b0JBQUMsQ0FBMkI7b0JBQUNGLFdBQVc7b0JBQUMsQ0FBaUI7b0JBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFHeEUsQ0FBQztLQWJLUCxHQUFHOztBQXNDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzPzJkNTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW52aWR1YWwgZHluYW1pYyBwYWdlIGZvciBlYWNoIHN0b3JlLCBpbiB3aGljaCB3ZSB3aWxsIHBhc3MgYSBxdWVyeSBpZCBhbmQgdGhhdCBnaXZlcyB1cyB0aGUgY29ycmVjdCByZXZpZXcgZmxvdyBmb3IgdGhhdCBzdG9yZVxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge2RifSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiwgdXNlRG9jdW1lbnQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcblxuY29uc3QgQXBwID0gKHtzdG9yZURldGFpbHMsIHJldmlld0RhdGF9KSA9PiB7XG5cbiAgaWYoc3RvcmVEZXRhaWxzLmVycm9yKSByZXR1cm4gPGRpdj5Xb29wcyE8L2Rpdj5cblxuICBjb25zdCB7Y3VzdG9tZXIsIHByb2R1Y3ROYW1lfSA9IHJldmlld0RhdGFcbiAgY29uc3Qge25hbWV9ID0gc3RvcmVEZXRhaWxzO1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhleSB7Y3VzdG9tZXIubmFtZX08L2gxPlxuICAgICAgPGgxPkhvcGUgeW91IGFyZSBlbmpveWluZyB5b3VyIHtwcm9kdWN0TmFtZX0geW91IGJvdWdodCBmcm9tIHtuYW1lfTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIENvbnNpZGVyIGRvaW5nIGFsbCBGQiBHRVQgcmVxdWVzdHMgbGlrZSB0aGlzPyBEb2Vzbid0IG5lZWQgdG8gYmUgZG9uZSBjbGllbnQgc2lkZSBpZiB0aGVyZSdzIG5vIHVwZGF0aW5nIGFuZCBoeWRyYXRpbmdcbiAgXG4gIGNvbnN0IHtzdG9yZSwgaWR9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCBzdG9yZVJlZiA9IGRvYyhkYiwgYG1lcmNoYW50cy9gLCBgJHtzdG9yZX1gKTtcbiAgY29uc3QgcmV2aWV3UmVmID0gZG9jKGRiLCBgbWVyY2hhbnRzLyR7c3RvcmV9L3Jldmlld3NgLCBgJHtpZH1gKTtcblxuICBjb25zdCByZXZpZXdEb2MgPSBhd2FpdCBnZXREb2MocmV2aWV3UmVmKTtcbiAgY29uc3Qgc3RvcmVEb2MgPSBhd2FpdCBnZXREb2Moc3RvcmVSZWYpO1xuXG4gIGlmKCFzdG9yZURvYy5leGlzdHMpIHJldHVybiB7IGVycm9yOjQwNCB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc3RvcmVEZXRhaWxzOiBzdG9yZURvYy5kYXRhKCksXG4gICAgICByZXZpZXdEYXRhOiByZXZpZXdEb2MuZGF0YSgpXG4gICAgfVxuICB9XG59XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwidXNlQ29sbGVjdGlvbiIsInVzZURvY3VtZW50IiwiQ2xpcExvYWRlciIsIkFwcCIsInN0b3JlRGV0YWlscyIsInJldmlld0RhdGEiLCJlcnJvciIsImRpdiIsImN1c3RvbWVyIiwicHJvZHVjdE5hbWUiLCJuYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/review/[store]/[id]/index.js\n");

/***/ })

});