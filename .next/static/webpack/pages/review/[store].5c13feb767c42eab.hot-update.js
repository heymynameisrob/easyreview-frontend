"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/review/[store]",{

/***/ "./pages/review/[store].js":
/*!*********************************!*\
  !*** ./pages/review/[store].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar App = function(param) {\n    var storeDetails = param.storeDetails, reviewData = param.reviewData;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, store = _query.store, id = _query.id;\n    // const [value, loading, error] = useDocument(doc(db, `merchants/${store}/reviews`, `${id}`))  \n    // if(error) return <div>Oh no, something went wrong</div> // Change\n    // if(loading) return <div><ClipLoader color=\"#000\" /></div>  \n    // const {customer, productName} = reviewData;\n    console.log(reviewData);\n    console.log(storeDetails);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    storeDetails\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_s(App, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = App;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUFrSTtBQUMzRjtBQUVxQjtBQUNlO0FBQ2hDOzs7QUFFM0MsR0FBSyxDQUFDSyxHQUFHLEdBQUcsUUFBUSxRQUF3QixDQUFDO1FBQS9CQyxZQUFZLFNBQVpBLFlBQVksRUFBRUMsVUFBVSxTQUFWQSxVQUFVOztJQUNwQyxHQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7SUFDeEIsR0FBSyxDQUFlUSxNQUFZLEdBQVpBLE1BQU0sQ0FBQ0MsS0FBSyxFQUF6QkMsS0FBSyxHQUFRRixNQUFZLENBQXpCRSxLQUFLLEVBQUVDLEVBQUUsR0FBSUgsTUFBWSxDQUFsQkcsRUFBRTtJQUNoQixFQUFnRztJQUVoRyxFQUFvRTtJQUNwRSxFQUE4RDtJQUU5RCxFQUE4QztJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFVBQVU7SUFDdEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxZQUFZO0lBRXhCLE1BQU0sNkVBQ0hRLENBQUc7O3dGQUNEQyxDQUFFOztvQkFBQyxDQUFJO29CQUFDQyxRQUFRLENBQUNDLElBQUk7Ozs7Ozs7d0ZBQ3JCRixDQUFFOztvQkFBQyxDQUEyQjtvQkFBQ0csV0FBVztvQkFBQyxDQUFpQjtvQkFBQ1osWUFBWTs7Ozs7Ozs7Ozs7OztBQUdoRixDQUFDO0dBbEJLRCxHQUFHOztRQUNRTCxrREFBUzs7O0tBRHBCSyxHQUFHOztBQTBDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS5qcz82NzIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludmlkdWFsIGR5bmFtaWMgcGFnZSBmb3IgZWFjaCBzdG9yZSwgaW4gd2hpY2ggd2Ugd2lsbCBwYXNzIGEgcXVlcnkgaWQgYW5kIHRoYXQgZ2l2ZXMgdXMgdGhlIGNvcnJlY3QgcmV2aWV3IGZsb3cgZm9yIHRoYXQgc3RvcmVcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtkYn0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24sIHVzZURvY3VtZW50IH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5cbmNvbnN0IEFwcCA9ICh7c3RvcmVEZXRhaWxzLCByZXZpZXdEYXRhfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3N0b3JlLCBpZH0gPSByb3V0ZXIucXVlcnlcbiAgLy8gY29uc3QgW3ZhbHVlLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VEb2N1bWVudChkb2MoZGIsIGBtZXJjaGFudHMvJHtzdG9yZX0vcmV2aWV3c2AsIGAke2lkfWApKSAgXG5cbiAgLy8gaWYoZXJyb3IpIHJldHVybiA8ZGl2Pk9oIG5vLCBzb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PiAvLyBDaGFuZ2VcbiAgLy8gaWYobG9hZGluZykgcmV0dXJuIDxkaXY+PENsaXBMb2FkZXIgY29sb3I9XCIjMDAwXCIgLz48L2Rpdj4gIFxuXG4gIC8vIGNvbnN0IHtjdXN0b21lciwgcHJvZHVjdE5hbWV9ID0gcmV2aWV3RGF0YTtcbiAgY29uc29sZS5sb2cocmV2aWV3RGF0YSlcbiAgY29uc29sZS5sb2coc3RvcmVEZXRhaWxzKVxuICBcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGV5IHtjdXN0b21lci5uYW1lfTwvaDE+XG4gICAgICA8aDE+SG9wZSB5b3UgYXJlIGVuam95aW5nIHlvdXIge3Byb2R1Y3ROYW1lfSB5b3UgYm91Z2h0IGZyb20ge3N0b3JlRGV0YWlsc308L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyBDb25zaWRlciBkb2luZyBhbGwgRkIgR0VUIHJlcXVlc3RzIGxpa2UgdGhpcz8gRG9lc24ndCBuZWVkIHRvIGJlIGRvbmUgY2xpZW50IHNpZGUgaWYgdGhlcmUncyBubyB1cGRhdGluZyBhbmQgaHlkcmF0aW5nXG4gIGNvbnN0IHtzdG9yZSwgaWR9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCBzdG9yZVJlZiA9IGRvYyhkYiwgYG1lcmNoYW50cy9gLCBgJHtzdG9yZX1gKTtcbiAgY29uc3QgcmV2aWV3UmVmID0gZG9jKGRiLCBgbWVyY2hhbnRzLyR7c3RvcmV9L3Jldmlld3NgLCBgJHtpZH1gKTtcblxuICBjb25zdCByZXZpZXdEb2MgPSBhd2FpdCBnZXREb2MocmV2aWV3UmVmKTtcbiAgY29uc3Qgc3RvcmVEb2MgPSBhd2FpdCBnZXREb2Moc3RvcmVSZWYpO1xuXG4gIGNvbnN0IHtuYW1lfSA9IHN0b3JlRG9jLmRhdGEoKTtcbiAgY29uc3QgcmV2aWV3RGF0YSA9IHJldmlld0RvYy5kYXRhKCk7XG4gIFxuICBjb25zb2xlLmxvZyhyZXZpZXdEb2MuZGF0YSgpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzdG9yZURldGFpbHM6IG5hbWUsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwidXNlQ29sbGVjdGlvbiIsInVzZURvY3VtZW50IiwiQ2xpcExvYWRlciIsIkFwcCIsInN0b3JlRGV0YWlscyIsInJldmlld0RhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsInN0b3JlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJjdXN0b21lciIsIm5hbWUiLCJwcm9kdWN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/review/[store].js\n");

/***/ })

});