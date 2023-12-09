"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/moderation/analytics/page",{

/***/ "(app-pages-browser)/./app/moderation/analytics/page.tsx":
/*!*******************************************!*\
  !*** ./app/moderation/analytics/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Moderation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SideMenu */ \"(app-pages-browser)/./app/moderation/SideMenu.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var _components_PieChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PieChart */ \"(app-pages-browser)/./components/PieChart.tsx\");\n/* harmony import */ var _components_Verticalbarchart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Verticalbarchart */ \"(app-pages-browser)/./components/Verticalbarchart.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Moderation() {\n    _s();\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userData, setuserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [dropId, setDropId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [dropDownMenu, setDropdownMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    //===============================================dropdown\n    const handleDropdown = (id)=>{\n        setDropdownMenu(!dropDownMenu);\n        setDropId(id);\n    };\n    //=======================================dropdown menu\n    const handleClickOutside = (event)=>{\n        if (dropdownRef.current && !dropRef.current && !dropdownRef.current.contains(event.target)) {\n            setDropdownMenu(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"click\", handleClickOutside);\n        return ()=>document.removeEventListener(\"click\", handleClickOutside);\n    }, []);\n    const fetchData = async ()=>{\n        var _session_user;\n        fetch(\"https://kwiks-data.com/video/moderation?skip=0&limit=10\", {\n            method: \"GET\",\n            headers: {\n                // @ts-ignore\n                Authorization: \"Bearer \".concat(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.token),\n                // Authorization: `Bearer ${token}`,\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((data)=>{\n            setIsLoading(false);\n            setuserData(data.data);\n            console.log(data);\n            return;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        session\n    ]);\n    const checkLogin = (id)=>{\n        var _session_user;\n        const url = \"/user/\" + id;\n        if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.token) {\n            const newWindow = window.open(url, \"_blank\", \"noopener,noreferrer\");\n            if (newWindow) newWindow.opener = null;\n        } else {}\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-md:pl-0  max-md:pr-0 container flex relative justify-center lg:justify-between mt-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[60px] bg-gray-100 rounded-md mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[200px] h-[35px]  bg-gray-100 rounded-full mt-5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-10 mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[500px] h-[500px] bg-gray-100 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[500px] h-[500px] bg-gray-100 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[500px] h-[500px] bg-gray-100 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[500px] h-[500px] bg-gray-100 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            className: \"w-[500px] h-[500px] bg-gray-100 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n            lineNumber: 75,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-md:pl-0 max-md:pr-0 container flex relative justify-center lg:justify-between mt-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-9/12 w-full max-md:w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"max-md:pl-5 max-md:pr-5 mt-10 container grid grid-cols-2 gap-6 pb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PieChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 16\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verticalbarchart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 16\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\app\\\\moderation\\\\analytics\\\\page.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Moderation, \"ASgQZU3tKPOdopAzrbnRexyksQk=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Moderation;\nvar _c;\n$RefreshReg$(_c, \"Moderation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb2RlcmF0aW9uL2FuYWx5dGljcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXlEO0FBQ2I7QUFFUTtBQUVsQjtBQUNlO0FBQ0w7QUFDZTtBQUM1QyxTQUFTVTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR04sa0VBQVFBO0lBQzFCLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBO0lBQ3hDLE1BQU0sRUFBRWMsTUFBTUMsT0FBTyxFQUFFLEdBQUdiLDJEQUFVQTtJQUVwQyxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1vQixjQUFhbkIsNkNBQU1BO0lBQ3pCLE1BQU1vQixVQUFTcEIsNkNBQU1BO0lBRXJCLHlEQUF5RDtJQUUzRCxNQUFNcUIsaUJBQWUsQ0FBQ0M7UUFFcEJKLGdCQUFnQixDQUFDRDtRQUNqQkQsVUFBVU07SUFDWjtJQUNBLHNEQUFzRDtJQUN0RCxNQUFNQyxxQkFBcUIsQ0FBQ0M7UUFFMUIsSUFBSUwsWUFBWU0sT0FBTyxJQUFJLENBQUNMLFFBQVFLLE9BQU8sSUFBSSxDQUFDTixZQUFZTSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUFHO1lBQzFGVCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUNBcEIsZ0RBQVNBLENBQUM7UUFDUjhCLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNOO1FBRW5DLE9BQU8sSUFBTUssU0FBU0UsbUJBQW1CLENBQUMsU0FBU1A7SUFDckQsR0FBRyxFQUFFO0lBQ0gsTUFBTVEsWUFBWTtZQUthakI7UUFKN0JrQixNQUFNLDJEQUEyRDtZQUMvREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGFBQWE7Z0JBQ2JDLGVBQWUsVUFBK0IsT0FBckJyQixvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTc0IsSUFBSSxjQUFidEIsb0NBQUFBLGNBQWV1QixLQUFLO2dCQUM3QyxvQ0FBb0M7Z0JBQ3BDLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0dDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ3pCO1lBQ0xILGFBQWE7WUFDYkUsWUFBWUMsS0FBS0EsSUFBSTtZQUNyQjRCLFFBQVFDLEdBQUcsQ0FBQzdCO1lBQ1o7UUFDRjtJQUNKO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1JpQztJQUNGLEdBQUc7UUFBQ2pCO0tBQVE7SUFFWixNQUFNNkIsYUFBYSxDQUFDckI7WUFFZFI7UUFESixNQUFNOEIsTUFBTSxXQUFXdEI7UUFDdkIsSUFBSVIsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU3NCLElBQUksY0FBYnRCLG9DQUFBQSxjQUFldUIsS0FBSyxFQUFFO1lBQ3hCLE1BQU1RLFlBQVlDLE9BQU9DLElBQUksQ0FBQ0gsS0FBSyxVQUFVO1lBQzdDLElBQUlDLFdBQVdBLFVBQVVHLE1BQU0sR0FBRztRQUNwQyxPQUFPLENBQ1A7SUFDRjtJQUVBLElBQUl2QyxXQUFXO1FBQ2IscUJBQU8sOERBQUN3QztZQUFJQyxXQUFVOzs4QkFDcEIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQzlDLDZEQUFRQTs0QkFBQzhDLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUM5Qyw2REFBUUE7NEJBQUM4QyxXQUFVOzs7Ozs7c0NBQ3BCLDhEQUFDOUMsNkRBQVFBOzRCQUFDOEMsV0FBVTs7Ozs7O3NDQUNwQiw4REFBQzlDLDZEQUFRQTs0QkFBQzhDLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUM5Qyw2REFBUUE7NEJBQUM4QyxXQUFVOzs7Ozs7c0NBQ3BCLDhEQUFDOUMsNkRBQVFBOzRCQUFDOEMsV0FBVTs7Ozs7O3NDQUNwQiw4REFBQzlDLDZEQUFRQTs0QkFBQzhDLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFbEIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQzlDLDZEQUFRQTs0QkFBQzhDLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUM5Qyw2REFBUUE7NEJBQUM4QyxXQUFVOzs7Ozs7c0NBQ3BCLDhEQUFDOUMsNkRBQVFBOzRCQUFDOEMsV0FBVTs7Ozs7O3NDQUNwQiw4REFBQzlDLDZEQUFRQTs0QkFBQzhDLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUM5Qyw2REFBUUE7NEJBQUM4QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHMUI7SUFHQSxxQkFDRTtrQkFDRSw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUMvQyxpREFBUUE7Ozs7OzhCQUNULDhEQUFDOEM7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFRRCxXQUFVOzswQ0FDbkIsOERBQUNEOzBDQUFJLDRFQUFDNUMsNERBQVFBOzs7Ozs7Ozs7OzBDQUNkLDhEQUFDNEM7MENBQUksNEVBQUMzQyxvRUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0I7R0FuR3dCQzs7UUFDSkwsOERBQVFBO1FBR0FELHVEQUFVQTs7O0tBSmRNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tb2RlcmF0aW9uL2FuYWx5dGljcy9wYWdlLnRzeD9mOGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSx1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCJcclxuaW1wb3J0IElzTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL0lzTG9hZGluZ1wiXHJcbmltcG9ydCBTaWRlTWVudSBmcm9tIFwiLi4vU2lkZU1lbnVcIlxyXG5pbXBvcnQge1NrZWxldG9ufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCJcclxuaW1wb3J0IFBpZUNoYXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvUGllQ2hhcnRcIlxyXG5pbXBvcnQgVmVydGljYWxCYXJDaGF0IGZyb20gXCJAL2NvbXBvbmVudHMvVmVydGljYWxiYXJjaGFydFwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVyYXRpb24oKSB7XHJcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0dXNlckRhdGFdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IFtkcm9wSWQsIHNldERyb3BJZF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2Ryb3BEb3duTWVudSwgc2V0RHJvcGRvd25NZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGRyb3Bkb3duUmVmPSB1c2VSZWYoKVxyXG4gIGNvbnN0IGRyb3BSZWY9IHVzZVJlZigpXHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kcm9wZG93blxyXG5cclxuY29uc3QgaGFuZGxlRHJvcGRvd249KGlkKT0+e1xyXG4gXHJcbiAgc2V0RHJvcGRvd25NZW51KCFkcm9wRG93bk1lbnUpXHJcbiAgc2V0RHJvcElkKGlkKVxyXG59XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ZHJvcGRvd24gbWVudVxyXG5jb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgaWYgKGRyb3Bkb3duUmVmLmN1cnJlbnQgJiYgIWRyb3BSZWYuY3VycmVudCAmJiAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICBzZXREcm9wZG93bk1lbnUoZmFsc2UpO1xyXG4gIH1cclxufTtcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcblxyXG4gIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSlcclxufSwgW10pO1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9rd2lrcy1kYXRhLmNvbS92aWRlby9tb2RlcmF0aW9uP3NraXA9MCZsaW1pdD0xMFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbj8udXNlcj8udG9rZW59YCxcclxuICAgICAgICAvLyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldHVzZXJEYXRhKGRhdGEuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW3Nlc3Npb25dKVxyXG5cclxuICBjb25zdCBjaGVja0xvZ2luID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBcIi91c2VyL1wiICsgaWRcclxuICAgIGlmIChzZXNzaW9uPy51c2VyPy50b2tlbikge1xyXG4gICAgICBjb25zdCBuZXdXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIsIFwibm9vcGVuZXIsbm9yZWZlcnJlclwiKVxyXG4gICAgICBpZiAobmV3V2luZG93KSBuZXdXaW5kb3cub3BlbmVyID0gbnVsbFxyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1heC1tZDpwbC0wICBtYXgtbWQ6cHItMCBjb250YWluZXIgZmxleCByZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gbXQtMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xXCI+XHJcbiAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVsyMDBweF0gaC1bNjBweF0gYmctZ3JheS0xMDAgcm91bmRlZC1tZCBtdC01XCIvPlxyXG4gICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bMjAwcHhdIGgtWzM1cHhdICBiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgbXQtNVwiLz5cclxuICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzIwMHB4XSBoLVszNXB4XSAgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIG10LTVcIi8+XHJcbiAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVsyMDBweF0gaC1bMzVweF0gIGJnLWdyYXktMTAwIHJvdW5kZWQtZnVsbCBtdC01XCIvPlxyXG4gICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bMjAwcHhdIGgtWzM1cHhdICBiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgbXQtNVwiLz5cclxuICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzIwMHB4XSBoLVszNXB4XSAgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIG10LTVcIi8+XHJcbiAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVsyMDBweF0gaC1bMzVweF0gIGJnLWdyYXktMTAwIHJvdW5kZWQtZnVsbCBtdC01XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEwIG10LTVcIj5cclxuICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bNTAwcHhdIGgtWzUwMHB4XSBiZy1ncmF5LTEwMCByb3VuZGVkLW1kXCIvPlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVs1MDBweF0gaC1bNTAwcHhdIGJnLWdyYXktMTAwIHJvdW5kZWQtbWRcIi8+XHJcbiAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzUwMHB4XSBoLVs1MDBweF0gYmctZ3JheS0xMDAgcm91bmRlZC1tZFwiLz5cclxuICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bNTAwcHhdIGgtWzUwMHB4XSBiZy1ncmF5LTEwMCByb3VuZGVkLW1kXCIvPlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVs1MDBweF0gaC1bNTAwcHhdIGJnLWdyYXktMTAwIHJvdW5kZWQtbWRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1tZDpwbC0wIG1heC1tZDpwci0wIGNvbnRhaW5lciBmbGV4IHJlbGF0aXZlIGp1c3RpZnktY2VudGVyIGxnOmp1c3RpZnktYmV0d2VlbiBtdC0xNlwiPlxyXG4gICAgICAgIDxTaWRlTWVudSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy05LzEyIHctZnVsbCBtYXgtbWQ6dy1mdWxsXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtbWQ6cGwtNSBtYXgtbWQ6cHItNSBtdC0xMCBjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2PjxQaWVDaGFydC8+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjxWZXJ0aWNhbEJhckNoYXQvPjwvZGl2PlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVNlc3Npb24iLCJ1c2VUb2FzdCIsIlNpZGVNZW51IiwiU2tlbGV0b24iLCJQaWVDaGFydCIsIlZlcnRpY2FsQmFyQ2hhdCIsIk1vZGVyYXRpb24iLCJ0b2FzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXJEYXRhIiwic2V0dXNlckRhdGEiLCJkYXRhIiwic2Vzc2lvbiIsImRyb3BJZCIsInNldERyb3BJZCIsImRyb3BEb3duTWVudSIsInNldERyb3Bkb3duTWVudSIsImRyb3Bkb3duUmVmIiwiZHJvcFJlZiIsImhhbmRsZURyb3Bkb3duIiwiaWQiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsInRva2VuIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2tMb2dpbiIsInVybCIsIm5ld1dpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJvcGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/moderation/analytics/page.tsx\n"));

/***/ })

});