"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.js\");\n/* harmony import */ var _components_Containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Containers */ \"./components/Containers.js\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Buttons */ \"./components/Buttons.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LoginForm = function(param) {\n    var handleLogin = param.handleLogin, isLoading = param.isLoading;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), password = ref1[0], setPassword = ref1[1];\n    var ref2 = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), 4), signInWithEmailAndPassword = ref2[0], user = ref2[1], loading = ref2[2], error = ref2[3];\n    if (error) return react_hot_toast__WEBPACK_IMPORTED_MODULE_9__[\"default\"].erorr(error.message);\n    var login = function() {\n        signInWithEmailAndPassword(email, password);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.Toaster, {}, void 0, false, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        name: \"Email\",\n                        type: \"email\",\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        placeholder: 'Email',\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        name: \"Password\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        placeholder: 'Password',\n                        value: password\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, {\n                        onClick: function() {\n                            return login();\n                        },\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_8__.Loading, {\n                            type: \"spinner\",\n                            colour: '#fff',\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                            lineNumber: 46,\n                            columnNumber: 22\n                        }, _this) : 'Login'\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(LoginForm, \"RAXPdbFF/asfbW39RzFuoxoIq2Q=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = LoginForm;\nvar Login = function() {\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), user = ref.user, loading = ref.loading, error = ref.error;\n    if (user) return router.push('/dashboard');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Containers__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"block w-full p-8 bg-white mt-16 shadow rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginForm, {}, void 0, false, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Login, \"9mFPiLnCDZKuLj7C1H4GCfONMwo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c1 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginForm\");\n$RefreshReg$(_c1, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDL0RmLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO0lBYkswQixLQUFLOztRQUNNcEMsa0RBQVM7UUFDT0csbUVBQVk7OztNQUZ2Q2lDLEtBQUs7QUFpQlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlLCB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHthdXRofSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xuaW1wb3J0IHtMYXlvdXR9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVycydcbmltcG9ydCB7UHJpbWFyeUJ1dHRvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25zJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe2hhbmRsZUxvZ2luLCBpc0xvYWRpbmd9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtcbiAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICB1c2VyLFxuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcbiAgICBcbiAgaWYoZXJyb3IpIHJldHVybiB0b2FzdC5lcm9ycihlcnJvci5tZXNzYWdlKVxuXG4gIGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHNwYWNlLXktNFwiPlxuICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICBuYW1lPVwiRW1haWxcIiBcbiAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9eydFbWFpbCd9XG4gICAgICAgIHZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgbmFtZT1cIlBhc3N3b3JkXCIgXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgIHBsYWNlaG9sZGVyPXsnUGFzc3dvcmQnfVxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IC8+XG4gICAgICAgIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ2luKCl9PlxuICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmcgdHlwZT1cInNwaW5uZXJcIiBjb2xvdXI9eycjZmZmJ30gc2l6ZT17MTZ9IC8+IDogJ0xvZ2luJ31cbiAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgTG9naW4gPSAoKSA9PiB7IFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3VzZXIsIGxvYWRpbmcsIGVycm9yfSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcblxuICBpZih1c2VyKSByZXR1cm4gcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKSAgXG4gIFxuICByZXR1cm4oXG4gICAgPExheW91dD4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtOCBiZy13aGl0ZSBtdC0xNiBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgICAgICA8TG9naW5Gb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInRvYXN0IiwiVG9hc3RlciIsInVzZUF1dGhTdGF0ZSIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXV0aCIsIlRleHRGaWVsZCIsIkxheW91dCIsIlByaW1hcnlCdXR0b24iLCJMb2FkaW5nIiwiTG9naW5Gb3JtIiwiaGFuZGxlTG9naW4iLCJpc0xvYWRpbmciLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImVyb3JyIiwibWVzc2FnZSIsImxvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImNvbG91ciIsInNpemUiLCJMb2dpbiIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});