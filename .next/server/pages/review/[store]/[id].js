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
exports.id = "pages/review/[store]/[id]";
exports.ids = ["pages/review/[store]/[id]"];
exports.modules = {

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD0I9mVldI19iGpGSzZf8qM7r5KPwWGzOU\",\n    authDomain: \"shopify-reviews-18ce4.firebaseapp.com\",\n    projectId: \"shopify-reviews-18ce4\",\n    storageBucket: \"shopify-reviews-18ce4.appspot.com\",\n    messagingSenderId: \"234429741590\",\n    appId: \"1:234429741590:web:9aaae87a6e84a92f6d1337\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFDVTtBQUVqRCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUVDLHlDQUF3QztJQUNoREcsVUFBVSxFQUFFSCx1Q0FBNEM7SUFDeERLLFNBQVMsRUFBRUwsdUJBQTJDO0lBQ3RETyxhQUFhLEVBQUVQLG1DQUErQztJQUM5RFMsaUJBQWlCLEVBQUVULGNBQW9EO0lBQ3ZFVyxLQUFLLEVBQUVYLDJDQUF1QztBQUNoRCxDQUFDO0FBRUQsS0FBSyxDQUFDYSxHQUFHLEdBQUdsQiwyREFBYSxDQUFDRyxjQUFjO0FBQ3hDLEtBQUssQ0FBQ2dCLEVBQUUsR0FBR2pCLGdFQUFZLENBQUNnQixHQUFHO0FBQzNCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHbkIsc0RBQU87QUFFQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktcmV2aWV3LXNob3BpZnkvLi9saWIvZmlyZWJhc2UuanM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcbn1cblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcblxuZXhwb3J0IHthcHAsIGRiLCBhdXRofSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhcHAiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./pages/review/[store]/[id]/index.js":
/*!********************************************!*\
  !*** ./pages/review/[store]/[id]/index.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _lib_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _lib_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store\n\n\n\n\nconst App = ({ data  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { store , id  } = router.query;\n    if (data === null) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Woops!\"\n    }, void 0, false, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 11,\n        columnNumber: 28\n    }, undefined));\n    const { storeData , reviewData  } = data;\n    const { customer , productName  } = reviewData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Hey \",\n                    customer.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Hope you are enjoying your \",\n                    productName,\n                    \" you bought from \",\n                    storeData.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: `/review/${store}/${id}/start?step=1`,\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robhoughnuom/Documents/🤓 Development/easy-review-shopify/pages/review/[store]/[id]/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getServerSideProps(context) {\n    const { store , id  } = context.query;\n    const storeRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.db, `merchants/`, `${store}`);\n    const reviewRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.db, `merchants/${store}/reviews`, `${id}`);\n    const reviewDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(reviewRef);\n    const storeDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(storeRef);\n    // If either merchant or review doesn't exist\n    if (!storeDoc.exists() || !reviewDoc.exists()) return {\n        props: {\n            data: null\n        }\n    };\n    const storeData = storeDoc.data();\n    const reviewData = reviewDoc.data();\n    return {\n        props: {\n            data: {\n                storeData,\n                reviewData\n            }\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBa0k7QUFDdEc7QUFDUztBQUNNO0FBQ0s7QUFFaEQsS0FBSyxDQUFDSyxHQUFHLElBQUksQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEdBQUssQ0FBQztJQUN2QixLQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEIsS0FBSyxDQUFDLENBQUNPLENBQUFBLEtBQUssR0FBRUMsRUFBRSxHQUFDLEdBQUdGLE1BQU0sQ0FBQ0csS0FBSztJQUVoQyxFQUFFLEVBQUNKLElBQUksS0FBSyxJQUFJLEVBQUUsTUFBTSw2RUFBRUssQ0FBRztrQkFBQyxDQUFNOzs7Ozs7SUFFcEMsS0FBSyxDQUFDLENBQUNDLENBQUFBLFNBQVMsR0FBRUMsVUFBVSxHQUFDLEdBQUdQLElBQUk7SUFDcEMsS0FBSyxDQUFDLENBQUNRLENBQUFBLFFBQVEsR0FBRUMsV0FBVyxHQUFDLEdBQUdGLFVBQVU7SUFFMUMsTUFBTSw2RUFDSEYsQ0FBRzs7d0ZBQ0RLLENBQUU7O29CQUFDLENBQUk7b0JBQUNGLFFBQVEsQ0FBQ0csSUFBSTs7Ozs7Ozt3RkFDckJDLENBQUM7O29CQUFDLENBQTJCO29CQUFDSCxXQUFXO29CQUFDLENBQWlCO29CQUFDSCxTQUFTLENBQUNLLElBQUk7Ozs7Ozs7d0ZBQzFFakIsa0RBQUk7Z0JBQUNtQixJQUFJLEdBQUcsUUFBUSxFQUFFWCxLQUFLLENBQUMsQ0FBQyxFQUFFQyxFQUFFLENBQUMsYUFBYTswQkFBRyxDQUFLOzs7Ozs7Ozs7Ozs7QUFHOUQsQ0FBQztBQUVNLGVBQWVXLGtCQUFrQixDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUVqRCxLQUFLLENBQUMsQ0FBQ2IsQ0FBQUEsS0FBSyxHQUFFQyxFQUFFLEdBQUMsR0FBR1ksT0FBTyxDQUFDWCxLQUFLO0lBQ2pDLEtBQUssQ0FBQ1ksUUFBUSxHQUFHbkIsdURBQUcsQ0FBQ0QsNkNBQUUsR0FBRyxVQUFVLE1BQU1NLEtBQUs7SUFDL0MsS0FBSyxDQUFDZSxTQUFTLEdBQUdwQix1REFBRyxDQUFDRCw2Q0FBRSxHQUFHLFVBQVUsRUFBRU0sS0FBSyxDQUFDLFFBQVEsTUFBTUMsRUFBRTtJQUU3RCxLQUFLLENBQUNlLFNBQVMsR0FBRyxLQUFLLENBQUNwQiwwREFBTSxDQUFDbUIsU0FBUztJQUN4QyxLQUFLLENBQUNFLFFBQVEsR0FBRyxLQUFLLENBQUNyQiwwREFBTSxDQUFDa0IsUUFBUTtJQUV0QyxFQUE2QztJQUM3QyxFQUFFLEdBQUVHLFFBQVEsQ0FBQ0MsTUFBTSxPQUFPRixTQUFTLENBQUNFLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQztRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDckIsSUFBSSxFQUFFLElBQUk7UUFBQyxDQUFDO0lBQUMsQ0FBQztJQUU5RSxLQUFLLENBQUNNLFNBQVMsR0FBR2EsUUFBUSxDQUFDbkIsSUFBSTtJQUMvQixLQUFLLENBQUNPLFVBQVUsR0FBR1csU0FBUyxDQUFDbEIsSUFBSTtJQUVqQyxNQUFNLENBQUMsQ0FBQztRQUNOcUIsS0FBSyxFQUFFLENBQUM7WUFDTnJCLElBQUksRUFBRSxDQUFDO2dCQUFDTSxTQUFTO2dCQUFFQyxVQUFVO1lBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFJRCxpRUFBZVIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktcmV2aWV3LXNob3BpZnkvLi9wYWdlcy9yZXZpZXcvW3N0b3JlXS9baWRdL2luZGV4LmpzPzJkNTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW52aWR1YWwgZHluYW1pYyBwYWdlIGZvciBlYWNoIHN0b3JlLCBpbiB3aGljaCB3ZSB3aWxsIHBhc3MgYSBxdWVyeSBpZCBhbmQgdGhhdCBnaXZlcyB1cyB0aGUgY29ycmVjdCByZXZpZXcgZmxvdyBmb3IgdGhhdCBzdG9yZVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtkYn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgQXBwID0gKHtkYXRhfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3N0b3JlLCBpZH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgaWYoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIDxkaXY+V29vcHMhPC9kaXY+XG5cbiAgY29uc3Qge3N0b3JlRGF0YSwgcmV2aWV3RGF0YX0gPSBkYXRhO1xuICBjb25zdCB7Y3VzdG9tZXIsIHByb2R1Y3ROYW1lfSA9IHJldmlld0RhdGFcblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZXkge2N1c3RvbWVyLm5hbWV9PC9oMT5cbiAgICAgIDxwPkhvcGUgeW91IGFyZSBlbmpveWluZyB5b3VyIHtwcm9kdWN0TmFtZX0geW91IGJvdWdodCBmcm9tIHtzdG9yZURhdGEubmFtZX08L3A+XG4gICAgICA8TGluayBocmVmPXtgL3Jldmlldy8ke3N0b3JlfS8ke2lkfS9zdGFydD9zdGVwPTFgfT5TdGFydDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgXG4gIGNvbnN0IHtzdG9yZSwgaWR9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3Qgc3RvcmVSZWYgPSBkb2MoZGIsIGBtZXJjaGFudHMvYCwgYCR7c3RvcmV9YCk7XG4gIGNvbnN0IHJldmlld1JlZiA9IGRvYyhkYiwgYG1lcmNoYW50cy8ke3N0b3JlfS9yZXZpZXdzYCwgYCR7aWR9YCk7XG5cbiAgY29uc3QgcmV2aWV3RG9jID0gYXdhaXQgZ2V0RG9jKHJldmlld1JlZik7XG4gIGNvbnN0IHN0b3JlRG9jID0gYXdhaXQgZ2V0RG9jKHN0b3JlUmVmKTtcblxuICAvLyBJZiBlaXRoZXIgbWVyY2hhbnQgb3IgcmV2aWV3IGRvZXNuJ3QgZXhpc3RcbiAgaWYoIXN0b3JlRG9jLmV4aXN0cygpIHx8ICFyZXZpZXdEb2MuZXhpc3RzKCkpIHJldHVybiB7IHByb3BzOiB7IGRhdGE6IG51bGwgfSB9XG5cbiAgY29uc3Qgc3RvcmVEYXRhID0gc3RvcmVEb2MuZGF0YSgpO1xuICBjb25zdCByZXZpZXdEYXRhID0gcmV2aWV3RG9jLmRhdGEoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiB7IHN0b3JlRGF0YSwgcmV2aWV3RGF0YSB9XG4gICAgfVxuICB9XG59XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiZGIiLCJkb2MiLCJnZXREb2MiLCJBcHAiLCJkYXRhIiwicm91dGVyIiwic3RvcmUiLCJpZCIsInF1ZXJ5IiwiZGl2Iiwic3RvcmVEYXRhIiwicmV2aWV3RGF0YSIsImN1c3RvbWVyIiwicHJvZHVjdE5hbWUiLCJoMSIsIm5hbWUiLCJwIiwiaHJlZiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdG9yZVJlZiIsInJldmlld1JlZiIsInJldmlld0RvYyIsInN0b3JlRG9jIiwiZXhpc3RzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/review/[store]/[id]/index.js\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/review/[store]/[id]/index.js"));
module.exports = __webpack_exports__;

})();