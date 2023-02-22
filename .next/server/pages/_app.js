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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/theme.json */ \"./config/theme.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // default theme setup\n    // import google font css\n    const pf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.primary;\n    const sf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.secondary;\n    const [fontcss, setFontcss] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? \"&family=\" + sf : \"\"}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));\n    }, [\n        pf,\n        sf\n    ]);\n    // google tag manager (gtm)\n    const tagManagerArgs = {\n        gtmId: _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params.tag_manager_id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n             false && 0;\n        }, 5000);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Siddheshsingh Tanwar\\\\OneDrive\\\\Desktop\\\\Yudit\\\\pages\\\\_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `${fontcss}`\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Siddheshsingh Tanwar\\\\OneDrive\\\\Desktop\\\\Yudit\\\\pages\\\\_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Siddheshsingh Tanwar\\\\OneDrive\\\\Desktop\\\\Yudit\\\\pages\\\\_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Siddheshsingh Tanwar\\\\OneDrive\\\\Desktop\\\\Yudit\\\\pages\\\\_app.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Siddheshsingh Tanwar\\\\OneDrive\\\\Desktop\\\\Yudit\\\\pages\\\\_app.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNGO0FBQ1Y7QUFDZTtBQUNGO0FBQ2Y7QUFFM0IsTUFBTU0sTUFBTSxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDeEMsc0JBQXNCO0lBRXRCLHlCQUF5QjtJQUN6QixNQUFNQyxLQUFLUix5RUFBK0I7SUFDMUMsTUFBTVksS0FBS1osMkVBQWlDO0lBQzVDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUE7SUFDdENELGdEQUFTQSxDQUFDLElBQU07UUFDZGMsTUFDRSxDQUFDLHlDQUF5QyxFQUFFUixHQUFHLEVBQzdDSSxLQUFLLGFBQWFBLEtBQUssRUFBRSxDQUMxQixhQUFhLENBQUMsRUFDZkssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDLENBQUNHLE1BQVFMLFdBQVdLO0lBQ3RELEdBQUc7UUFBQ1o7UUFBSUk7S0FBRztJQUVYLDJCQUEyQjtJQUMzQixNQUFNUyxpQkFBaUI7UUFDckJDLE9BQU92QixzRUFBNEI7SUFDckM7SUFDQUcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkdUIsV0FBVyxJQUFNO1lBM0JyQixNQTZCb0MsSUFDNUJyQixDQUFxQ2lCO1FBQ3pDLEdBQUc7SUFDSCx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDcEIsa0RBQUlBOztrQ0FFSCw4REFBQzBCO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyx5QkFBeUI7NEJBQ3ZCQyxRQUFRLENBQUMsRUFBRW5CLFFBQVEsQ0FBQzt3QkFDdEI7Ozs7OztrQ0FHRiw4REFBQ29CO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUM5QjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnc3ByaW5nLWxpZ2h0LW5leHRqcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCJAY29uZmlnL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiQGNvbmZpZy90aGVtZS5qc29uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFnTWFuYWdlciBmcm9tIFwicmVhY3QtZ3RtLW1vZHVsZVwiO1xyXG5pbXBvcnQgXCJzdHlsZXMvc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIC8vIGRlZmF1bHQgdGhlbWUgc2V0dXBcclxuXHJcbiAgLy8gaW1wb3J0IGdvb2dsZSBmb250IGNzc1xyXG4gIGNvbnN0IHBmID0gdGhlbWUuZm9udHMuZm9udF9mYW1pbHkucHJpbWFyeTtcclxuICBjb25zdCBzZiA9IHRoZW1lLmZvbnRzLmZvbnRfZmFtaWx5LnNlY29uZGFyeTtcclxuICBjb25zdCBbZm9udGNzcywgc2V0Rm9udGNzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9JHtwZn0ke1xyXG4gICAgICAgIHNmID8gXCImZmFtaWx5PVwiICsgc2YgOiBcIlwiXHJcbiAgICAgIH0mZGlzcGxheT1zd2FwYFxyXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkudGhlbigoY3NzKSA9PiBzZXRGb250Y3NzKGNzcykpKTtcclxuICB9LCBbcGYsIHNmXSk7XHJcblxyXG4gIC8vIGdvb2dsZSB0YWcgbWFuYWdlciAoZ3RtKVxyXG4gIGNvbnN0IHRhZ01hbmFnZXJBcmdzID0ge1xyXG4gICAgZ3RtSWQ6IGNvbmZpZy5wYXJhbXMudGFnX21hbmFnZXJfaWQsXHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIGNvbmZpZy5wYXJhbXMudGFnX21hbmFnZXJfaWQgJiZcclxuICAgICAgICBUYWdNYW5hZ2VyLmluaXRpYWxpemUodGFnTWFuYWdlckFyZ3MpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgey8qIGdvb2dsZSBmb250IGNzcyAqL31cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IGAke2ZvbnRjc3N9YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogcmVzcG9uc2l2ZSBtZXRhICovfVxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRoZW1lIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFnTWFuYWdlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBmIiwiZm9udHMiLCJmb250X2ZhbWlseSIsInByaW1hcnkiLCJzZiIsInNlY29uZGFyeSIsImZvbnRjc3MiLCJzZXRGb250Y3NzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwidGV4dCIsImNzcyIsInRhZ01hbmFnZXJBcmdzIiwiZ3RtSWQiLCJwYXJhbXMiLCJ0YWdfbWFuYWdlcl9pZCIsInNldFRpbWVvdXQiLCJpbml0aWFsaXplIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"YUDIT","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"48","logo_text":"Bigspring Light"},"settings":{"pagination":4,"summary_length":200,"blog_folder":"blogs"},"nav_button":{"enable":true,"label":"Get Started","link":"/contact"},"params":{"contact_form_action":"","tag_manager_id":"","footer_content":"SECURITY SERVICES | MANPOWER SUPPLY | HOUSE KEEPING |PAYROLL | FIRE MANAGEMENT |DETECTIVE |HR- Services","copyright":"Designed and Developed By [@SiddheshsinghTanwar](https://www.linkedin.com/in/siddheshsingh-tanwar-3a8588213/)"},"metadata":{"meta_author":"SiddheshsinghTanwar","meta_image":"","meta_description":"A SAAS template for nextjs"}}');

/***/ }),

/***/ "./config/theme.json":
/*!***************************!*\
  !*** ./config/theme.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"colors":{"default":{"theme_color":{"primary":"#0aa8a7","body":"#fff","border":"#e9e9e9","theme_light":"#edf6f5"},"text_color":{"default":"#777","dark":"#222"}}},"fonts":{"font_family":{"primary":"Lato:wght@300;400;700","primary_type":"sans-serif"},"font_size":{"base":"16","scale":"1.250"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();