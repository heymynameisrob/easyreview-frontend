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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar App = function(param) {\n    var data = param.data;\n    if (data === null) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Woops!\"\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 10,\n        columnNumber: 28\n    }, _this));\n    var storeData = data.storeData, reviewData = data.reviewData;\n    var customer = reviewData.customer, productName = reviewData.productName;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    storeData.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = App;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHNEQ7QUFDZTtBQUNoQzs7QUFFM0MsR0FBSyxDQUFDSSxHQUFHLEdBQUcsUUFBUSxRQUFJLENBQUM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJO0lBRWhCLEVBQUUsRUFBQ0EsSUFBSSxLQUFLLElBQUksRUFBRSxNQUFNLDZFQUFFQyxDQUFHO2tCQUFDLENBQU07Ozs7OztJQUVwQyxHQUFLLENBQUVDLFNBQVMsR0FBZ0JGLElBQUksQ0FBN0JFLFNBQVMsRUFBRUMsVUFBVSxHQUFJSCxJQUFJLENBQWxCRyxVQUFVO0lBQzVCLEdBQUssQ0FBRUMsUUFBUSxHQUFpQkQsVUFBVSxDQUFuQ0MsUUFBUSxFQUFFQyxXQUFXLEdBQUlGLFVBQVUsQ0FBekJFLFdBQVc7SUFFNUIsTUFBTSw2RUFDSEosQ0FBRzs7d0ZBQ0RLLENBQUU7O29CQUFDLENBQUk7b0JBQUNGLFFBQVEsQ0FBQ0csSUFBSTs7Ozs7Ozt3RkFDckJELENBQUU7O29CQUFDLENBQTJCO29CQUFDRCxXQUFXO29CQUFDLENBQWlCO29CQUFDSCxTQUFTLENBQUNLLElBQUk7Ozs7Ozs7Ozs7Ozs7QUFHbEYsQ0FBQztLQWJLUixHQUFHOztBQXVDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzPzJkNTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW52aWR1YWwgZHluYW1pYyBwYWdlIGZvciBlYWNoIHN0b3JlLCBpbiB3aGljaCB3ZSB3aWxsIHBhc3MgYSBxdWVyeSBpZCBhbmQgdGhhdCBnaXZlcyB1cyB0aGUgY29ycmVjdCByZXZpZXcgZmxvdyBmb3IgdGhhdCBzdG9yZVxuXG5pbXBvcnQge2RifSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiwgdXNlRG9jdW1lbnQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcblxuY29uc3QgQXBwID0gKHtkYXRhfSkgPT4ge1xuXG4gIGlmKGRhdGEgPT09IG51bGwpIHJldHVybiA8ZGl2Pldvb3BzITwvZGl2PlxuXG4gIGNvbnN0IHtzdG9yZURhdGEsIHJldmlld0RhdGF9ID0gZGF0YTtcbiAgY29uc3Qge2N1c3RvbWVyLCBwcm9kdWN0TmFtZX0gPSByZXZpZXdEYXRhXG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGV5IHtjdXN0b21lci5uYW1lfTwvaDE+XG4gICAgICA8aDE+SG9wZSB5b3UgYXJlIGVuam95aW5nIHlvdXIge3Byb2R1Y3ROYW1lfSB5b3UgYm91Z2h0IGZyb20ge3N0b3JlRGF0YS5uYW1lfTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIFxuICBjb25zdCB7c3RvcmUsIGlkfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHN0b3JlUmVmID0gZG9jKGRiLCBgbWVyY2hhbnRzL2AsIGAke3N0b3JlfWApO1xuICBjb25zdCByZXZpZXdSZWYgPSBkb2MoZGIsIGBtZXJjaGFudHMvJHtzdG9yZX0vcmV2aWV3c2AsIGAke2lkfWApO1xuXG4gIGNvbnN0IHJldmlld0RvYyA9IGF3YWl0IGdldERvYyhyZXZpZXdSZWYpO1xuICBjb25zdCBzdG9yZURvYyA9IGF3YWl0IGdldERvYyhzdG9yZVJlZik7XG5cbiAgLy8gSWYgZWl0aGVyIG1lcmNoYW50IG9yIHJldmlldyBkb2Vzbid0IGV4aXN0XG4gIGlmKCFzdG9yZURvYy5leGlzdHMoKSB8fCAhcmV2aWV3RG9jLmV4aXN0cygpKSByZXR1cm4geyBwcm9wczogeyBkYXRhOiBudWxsIH0gfVxuXG4gIGNvbnN0IHN0b3JlRGF0YSA9IHN0b3JlRG9jLmRhdGEoKTtcbiAgY29uc3QgcmV2aWV3RGF0YSA9IHJldmlld0RvYy5kYXRhKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogeyBzdG9yZURhdGEsIHJldmlld0RhdGEgfVxuICAgIH1cbiAgfVxufVxuXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsInVzZUNvbGxlY3Rpb24iLCJ1c2VEb2N1bWVudCIsIkNsaXBMb2FkZXIiLCJBcHAiLCJkYXRhIiwiZGl2Iiwic3RvcmVEYXRhIiwicmV2aWV3RGF0YSIsImN1c3RvbWVyIiwicHJvZHVjdE5hbWUiLCJoMSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/review/[store]/[id]/index.js\n");

/***/ })

});