"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/review/[store]";
exports.ids = ["pages/review/[store]"];
exports.modules = {

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD0I9mVldI19iGpGSzZf8qM7r5KPwWGzOU\",\n    authDomain: \"shopify-reviews-18ce4.firebaseapp.com\",\n    projectId: \"shopify-reviews-18ce4\",\n    storageBucket: \"shopify-reviews-18ce4.appspot.com\",\n    messagingSenderId: \"234429741590\",\n    appId: \"1:234429741590:web:9aaae87a6e84a92f6d1337\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFDVTtBQUVqRCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUVDLHlDQUF3QztJQUNoREcsVUFBVSxFQUFFSCx1Q0FBNEM7SUFDeERLLFNBQVMsRUFBRUwsdUJBQTJDO0lBQ3RETyxhQUFhLEVBQUVQLG1DQUErQztJQUM5RFMsaUJBQWlCLEVBQUVULGNBQW9EO0lBQ3ZFVyxLQUFLLEVBQUVYLDJDQUF1QztBQUNoRCxDQUFDO0FBRUQsS0FBSyxDQUFDYSxHQUFHLEdBQUdsQiwyREFBYSxDQUFDRyxjQUFjO0FBQ3hDLEtBQUssQ0FBQ2dCLEVBQUUsR0FBR2pCLGdFQUFZLENBQUNnQixHQUFHO0FBQzNCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHbkIsc0RBQU87QUFFQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktcmV2aWV3LXNob3BpZnkvLi9saWIvZmlyZWJhc2UuanM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcbn1cblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcblxuZXhwb3J0IHthcHAsIGRiLCBhdXRofSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhcHAiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./pages/review/[store].js":
/*!*********************************!*\
  !*** ./pages/review/[store].js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"react-spinners\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store\n\n\n\n\n\nconst App = ({ storeDetails , reviewData  })=>{\n    const { customer , productName  } = reviewData;\n    const { name  } = storeDetails;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getServerSideProps(context) {\n    // Consider doing all FB GET requests like this? Doesn't need to be done client side if there's no updating and hydrating\n    const { store , id  } = context.query;\n    const storeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, `merchants/`, `${store}`);\n    const reviewRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, `merchants/${store}/reviews`, `${id}`);\n    const reviewDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(reviewRef);\n    const storeDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(storeRef);\n    return {\n        props: {\n            storeDetails: storeDoc.data(),\n            reviewData: reviewDoc.data()\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBa0k7QUFDM0Y7QUFDRjtBQUN1QjtBQUNlO0FBQ2hDO0FBRTNDLEtBQUssQ0FBQ1EsR0FBRyxJQUFJLENBQUNDLENBQUFBLFlBQVksR0FBRUMsVUFBVSxHQUFDLEdBQUssQ0FBQztJQUUzQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFFQyxXQUFXLEdBQUMsR0FBR0YsVUFBVTtJQUMxQyxLQUFLLENBQUMsQ0FBQ0csQ0FBQUEsSUFBSSxHQUFDLEdBQUdKLFlBQVk7SUFFM0IsTUFBTSw2RUFDSEssQ0FBRzs7d0ZBQ0RDLENBQUU7O29CQUFDLENBQUk7b0JBQUNKLFFBQVEsQ0FBQ0UsSUFBSTs7Ozs7Ozt3RkFDckJFLENBQUU7O29CQUFDLENBQTJCO29CQUFDSCxXQUFXO29CQUFDLENBQWlCO29CQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBR3hFLENBQUM7QUFFTSxlQUFlRyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDakQsRUFBeUg7SUFFekgsS0FBSyxDQUFDLENBQUNDLENBQUFBLEtBQUssR0FBRUMsRUFBRSxHQUFDLEdBQUdGLE9BQU8sQ0FBQ0csS0FBSztJQUVqQyxLQUFLLENBQUNDLFFBQVEsR0FBR2xCLHVEQUFHLENBQUNGLDZDQUFFLEdBQUcsVUFBVSxNQUFNaUIsS0FBSztJQUMvQyxLQUFLLENBQUNJLFNBQVMsR0FBR25CLHVEQUFHLENBQUNGLDZDQUFFLEdBQUcsVUFBVSxFQUFFaUIsS0FBSyxDQUFDLFFBQVEsTUFBTUMsRUFBRTtJQUU3RCxLQUFLLENBQUNJLFNBQVMsR0FBRyxLQUFLLENBQUNuQiwwREFBTSxDQUFDa0IsU0FBUztJQUN4QyxLQUFLLENBQUNFLFFBQVEsR0FBRyxLQUFLLENBQUNwQiwwREFBTSxDQUFDaUIsUUFBUTtJQUV0QyxNQUFNLENBQUMsQ0FBQztRQUNOSSxLQUFLLEVBQUUsQ0FBQztZQUNOaEIsWUFBWSxFQUFFZSxRQUFRLENBQUNFLElBQUk7WUFDM0JoQixVQUFVLEVBQUVhLFNBQVMsQ0FBQ0csSUFBSTtRQUM1QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWxCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5LXJldmlldy1zaG9waWZ5Ly4vcGFnZXMvcmV2aWV3L1tzdG9yZV0uanM/NjcyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnZpZHVhbCBkeW5hbWljIHBhZ2UgZm9yIGVhY2ggc3RvcmUsIGluIHdoaWNoIHdlIHdpbGwgcGFzcyBhIHF1ZXJ5IGlkIGFuZCB0aGF0IGdpdmVzIHVzIHRoZSBjb3JyZWN0IHJldmlldyBmbG93IGZvciB0aGF0IHN0b3JlXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7ZGJ9IGZyb20gJy4uLy4uL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIGdldERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uLCB1c2VEb2N1bWVudCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBDbGlwTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuXG5jb25zdCBBcHAgPSAoe3N0b3JlRGV0YWlscywgcmV2aWV3RGF0YX0pID0+IHtcblxuICBjb25zdCB7Y3VzdG9tZXIsIHByb2R1Y3ROYW1lfSA9IHJldmlld0RhdGFcbiAgY29uc3Qge25hbWV9ID0gc3RvcmVEZXRhaWxzO1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhleSB7Y3VzdG9tZXIubmFtZX08L2gxPlxuICAgICAgPGgxPkhvcGUgeW91IGFyZSBlbmpveWluZyB5b3VyIHtwcm9kdWN0TmFtZX0geW91IGJvdWdodCBmcm9tIHtuYW1lfTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIENvbnNpZGVyIGRvaW5nIGFsbCBGQiBHRVQgcmVxdWVzdHMgbGlrZSB0aGlzPyBEb2Vzbid0IG5lZWQgdG8gYmUgZG9uZSBjbGllbnQgc2lkZSBpZiB0aGVyZSdzIG5vIHVwZGF0aW5nIGFuZCBoeWRyYXRpbmdcbiAgXG4gIGNvbnN0IHtzdG9yZSwgaWR9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCBzdG9yZVJlZiA9IGRvYyhkYiwgYG1lcmNoYW50cy9gLCBgJHtzdG9yZX1gKTtcbiAgY29uc3QgcmV2aWV3UmVmID0gZG9jKGRiLCBgbWVyY2hhbnRzLyR7c3RvcmV9L3Jldmlld3NgLCBgJHtpZH1gKTtcblxuICBjb25zdCByZXZpZXdEb2MgPSBhd2FpdCBnZXREb2MocmV2aWV3UmVmKTtcbiAgY29uc3Qgc3RvcmVEb2MgPSBhd2FpdCBnZXREb2Moc3RvcmVSZWYpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHN0b3JlRGV0YWlsczogc3RvcmVEb2MuZGF0YSgpLFxuICAgICAgcmV2aWV3RGF0YTogcmV2aWV3RG9jLmRhdGEoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0RG9jIiwidXNlQ29sbGVjdGlvbiIsInVzZURvY3VtZW50IiwiQ2xpcExvYWRlciIsIkFwcCIsInN0b3JlRGV0YWlscyIsInJldmlld0RhdGEiLCJjdXN0b21lciIsInByb2R1Y3ROYW1lIiwibmFtZSIsImRpdiIsImgxIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInN0b3JlIiwiaWQiLCJxdWVyeSIsInN0b3JlUmVmIiwicmV2aWV3UmVmIiwicmV2aWV3RG9jIiwic3RvcmVEb2MiLCJwcm9wcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/review/[store].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/review/[store].js"));
module.exports = __webpack_exports__;

})();