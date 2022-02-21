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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.js\");\n/* harmony import */ var _components_Containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Containers */ \"./components/Containers.js\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Buttons */ \"./components/Buttons.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LoginForm = function(param) {\n    var handleLogin = param.handleLogin, isLoading = param.isLoading;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), password = ref1[0], setPassword = ref1[1];\n    var ref2 = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), 4), signInWithEmailAndPassword = ref2[0], user = ref2[1], loading = ref2[2], error = ref2[3];\n    if (error) return react_hot_toast__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(error.message);\n    var login = function() {\n        signInWithEmailAndPassword(email, password);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.Toaster, {}, void 0, false, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        name: \"Email\",\n                        type: \"email\",\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        placeholder: 'Email',\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        name: \"Password\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        },\n                        placeholder: 'Password',\n                        value: password\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, {\n                        onClick: function() {\n                            return login();\n                        },\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_8__.Loading, {\n                            type: \"spinner\",\n                            colour: '#fff',\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                            lineNumber: 46,\n                            columnNumber: 22\n                        }, _this) : 'Login'\n                    }, void 0, false, {\n                        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(LoginForm, \"RAXPdbFF/asfbW39RzFuoxoIq2Q=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = LoginForm;\nvar Login = function() {\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_lib_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), user = ref.user, loading = ref.loading, error = ref.error;\n    if (user) return router.push('/dashboard');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Containers__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"block w-full p-8 bg-white mt-16 shadow rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginForm, {}, void 0, false, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/login.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this));\n};\n_s1(Login, \"9mFPiLnCDZKuLj7C1H4GCfONMwo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c1 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginForm\");\n$RefreshReg$(_c1, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRGQsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUM7SUFiS3lCLEtBQUs7O1FBQ01uQyxrREFBUztRQUNPRyxtRUFBWTs7O01BRnZDZ0MsS0FBSztBQWlCWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUsIHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5pbXBvcnQge2F1dGh9IGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSc7XG5pbXBvcnQge0xheW91dH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXJzJ1xuaW1wb3J0IHtQcmltYXJ5QnV0dG9ufSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbnMnO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICh7aGFuZGxlTG9naW4sIGlzTG9hZGluZ30pID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW1xuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgIHVzZXIsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgpO1xuICAgIFxuICBpZihlcnJvcikgcmV0dXJuIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpXG5cbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc3BhY2UteS00XCI+XG4gICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgIG5hbWU9XCJFbWFpbFwiIFxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICBwbGFjZWhvbGRlcj17J0VtYWlsJ31cbiAgICAgICAgdmFsdWU9e2VtYWlsfSAvPlxuICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICBuYW1lPVwiUGFzc3dvcmRcIiBcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgcGxhY2Vob2xkZXI9eydQYXNzd29yZCd9XG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgPFByaW1hcnlCdXR0b24gb25DbGljaz17KCkgPT4gbG9naW4oKX0+XG4gICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZyB0eXBlPVwic3Bpbm5lclwiIGNvbG91cj17JyNmZmYnfSBzaXplPXsxNn0gLz4gOiAnTG9naW4nfVxuICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHsgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7dXNlciwgbG9hZGluZywgZXJyb3J9ID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIGlmKHVzZXIpIHJldHVybiByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpICBcbiAgXG4gIHJldHVybihcbiAgICA8TGF5b3V0PiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcC04IGJnLXdoaXRlIG10LTE2IHNoYWRvdyByb3VuZGVkLW1kXCI+XG4gICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidG9hc3QiLCJUb2FzdGVyIiwidXNlQXV0aFN0YXRlIiwidXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJhdXRoIiwiVGV4dEZpZWxkIiwiTGF5b3V0IiwiUHJpbWFyeUJ1dHRvbiIsIkxvYWRpbmciLCJMb2dpbkZvcm0iLCJoYW5kbGVMb2dpbiIsImlzTG9hZGluZyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImxvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImNvbG91ciIsInNpemUiLCJMb2dpbiIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});