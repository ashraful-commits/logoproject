"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/FollowButton.tsx":
/*!*************************************!*\
  !*** ./components/FollowButton.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FollowButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction FollowButton(props) {\n    var _session_user, _session;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const userToken = (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token;\n    const uploaderId = props.uploaderId;\n    const uploaderName = props.uploaderName;\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [followBtnText, setfollowBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"follow\");\n    function isIdAvailable(id, array) {\n        return array.indexOf(id) !== -1;\n    }\n    const followText = async (uploaderId)=>{\n        try {\n            const response = await fetch(\"https://kwiks-data.com/user\", {\n                cache: \"force-cache\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            console.log(data);\n            const following = data.data.following;\n            if (isIdAvailable(uploaderId, following)) {\n                setfollowBtnText(\"unfollow\");\n            } else {\n                setfollowBtnText(\"follow\");\n            }\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleFollow = async (userId)=>{\n        setIsLoading(true);\n        console.log(userId);\n        try {\n            var _session_user, _session;\n            const dataToSend = {\n                _id: userId\n            };\n            const response = await fetch(\"https://kwiks-data.com/user/follow\", {\n                method: \"POST\",\n                headers: {\n                    Authorization: \"Bearer \".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token),\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(dataToSend)\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            if (response.ok) {\n                setfollowBtnText((prevText)=>prevText === \"follow\" ? \"unfollow\" : \"follow\");\n                setIsLoading(false);\n                toast({\n                    title: \"Your now \".concat(followBtnText, \"ing <span>{uploaderName}</span>\")\n                });\n            }\n        // window.location.reload()\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        followText(uploaderId);\n    }, [\n        session,\n        uploaderId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: userToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"getBtn font-semibold cursor-pointer\",\n            onClick: async (e)=>handleFollow(uploaderId),\n            children: [\n                isLoading && \"Loading\",\n                !isLoading && followBtnText && uploaderId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        followBtnText\n                    ]\n                }, void 0, true) : \"...\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"https://apps.apple.com/us/app/kwiks/id6448708199\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"getBtn font-semibold\",\n                children: \"follow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n                lineNumber: 102,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 101,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(FollowButton, \"UkhW0feJPqv+8JB67TiMxiaOtzM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = FollowButton;\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9sbG93QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUN0QjtBQUNnQjtBQUVRO0FBRXJDLFNBQVNNLGFBQWFDLEtBQUs7UUFFdEJDLGVBQUFBOztJQURsQixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFDcEMsTUFBTU0sYUFBWUYsV0FBQUEscUJBQUFBLGdDQUFBQSxnQkFBQUEsU0FBU0csSUFBSSxjQUFiSCxvQ0FBQUEsY0FBZUksS0FBSztJQUN0QyxNQUFNQyxhQUFhTixNQUFNTSxVQUFVO0lBQ25DLE1BQU1DLGVBQWVQLE1BQU1PLFlBQVk7SUFDdkMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Ysa0VBQVFBO0lBRTFCLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRW5ELFNBQVNrQixjQUFjQyxFQUFFLEVBQUVDLEtBQUs7UUFDOUIsT0FBT0EsTUFBTUMsT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDaEM7SUFFQSxNQUFNRyxhQUFhLE9BQU9YO1FBQ3hCLElBQUk7WUFDRixNQUFNWSxXQUFXLE1BQU1DLE1BQU0sK0JBQStCO2dCQUMxREMsT0FBTztZQUNUO1lBQ0EsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1wQixPQUFPLE1BQU1nQixTQUFTSyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUN2QjtZQUNaLE1BQU13QixZQUFZeEIsS0FBS0EsSUFBSSxDQUFDd0IsU0FBUztZQUNyQyxJQUFJYixjQUFjUCxZQUFZb0IsWUFBWTtnQkFDeENkLGlCQUFpQjtZQUNuQixPQUFPO2dCQUNMQSxpQkFBaUI7WUFDbkI7WUFDQUYsYUFBYTtRQUNmLEVBQUUsT0FBT2lCLE9BQVk7WUFDbkJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUNGO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQm5CLGFBQWE7UUFDYmMsUUFBUUMsR0FBRyxDQUFDSTtRQUNaLElBQUk7Z0JBTzJCNUIsZUFBQUE7WUFON0IsTUFBTTZCLGFBQWE7Z0JBQ2pCQyxLQUFLRjtZQUNQO1lBQ0EsTUFBTVgsV0FBVyxNQUFNQyxNQUFNLHNDQUFzQztnQkFDakVhLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLGVBQWUsVUFBK0IsUUFBckJqQyxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTRyxJQUFJLGNBQWJILG9DQUFBQSxjQUFlSSxLQUFLO29CQUM3QyxnQkFBZ0I7Z0JBQ2xCO2dCQUNBOEIsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN2QjtZQUNBLElBQUksQ0FBQ1osU0FBU0csRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNcEIsT0FBTyxNQUFNZ0IsU0FBU0ssSUFBSTtZQUVoQyxJQUFJTCxTQUFTRyxFQUFFLEVBQUU7Z0JBQ2ZULGlCQUFpQixDQUFDMEIsV0FDaEJBLGFBQWEsV0FBVyxhQUFhO2dCQUV2QzVCLGFBQWE7Z0JBQ2JGLE1BQU07b0JBQ0orQixPQUFNLFlBQTBCLE9BQWQ1QixlQUFjO2dCQUNsQztZQUNGO1FBQ0EsMkJBQTJCO1FBQzdCLEVBQUUsT0FBT2dCLE9BQU87WUFDZEgsUUFBUUMsR0FBRyxDQUFDRTtRQUNkO0lBQ0Y7SUFFQWpDLGdEQUFTQSxDQUFDO1FBQ1J1QixXQUFXWDtJQUNiLEdBQUc7UUFBQ0w7UUFBU0s7S0FBVztJQUV4QixxQkFDRTtrQkFDR0gsMEJBQ0MsOERBQUNxQztZQUNDQyxXQUFVO1lBQ1ZDLFNBQVMsT0FBT0MsSUFBTWYsYUFBYXRCOztnQkFFbENHLGFBQWE7Z0JBQ2IsQ0FBQ0EsYUFBYUUsaUJBQWlCTCwyQkFDOUI7O3dCQUFFO3dCQUFFSzs7bUNBRUo7Ozs7OztpQ0FJSiw4REFBQ2Ysa0RBQUlBO1lBQUNnRCxNQUFLO3NCQUNULDRFQUFDSjtnQkFBSUMsV0FBVTswQkFBdUI7Ozs7Ozs7Ozs7OztBQUtoRDtHQWxHd0IxQzs7UUFDSUYsdURBQVVBO1FBSWxCQyw4REFBUUE7OztLQUxKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi50c3g/NGFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbGxvd0J1dHRvbihwcm9wcykge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCB1c2VyVG9rZW4gPSBzZXNzaW9uPy51c2VyPy50b2tlblxuICBjb25zdCB1cGxvYWRlcklkID0gcHJvcHMudXBsb2FkZXJJZFxuICBjb25zdCB1cGxvYWRlck5hbWUgPSBwcm9wcy51cGxvYWRlck5hbWVcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbZm9sbG93QnRuVGV4dCwgc2V0Zm9sbG93QnRuVGV4dF0gPSB1c2VTdGF0ZShcImZvbGxvd1wiKVxuXG4gIGZ1bmN0aW9uIGlzSWRBdmFpbGFibGUoaWQsIGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaWQpICE9PSAtMVxuICB9XG5cbiAgY29uc3QgZm9sbG93VGV4dCA9IGFzeW5jICh1cGxvYWRlcklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2t3aWtzLWRhdGEuY29tL3VzZXJcIiwge1xuICAgICAgICBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBjb25zdCBmb2xsb3dpbmcgPSBkYXRhLmRhdGEuZm9sbG93aW5nXG4gICAgICBpZiAoaXNJZEF2YWlsYWJsZSh1cGxvYWRlcklkLCBmb2xsb3dpbmcpKSB7XG4gICAgICAgIHNldGZvbGxvd0J0blRleHQoXCJ1bmZvbGxvd1wiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Zm9sbG93QnRuVGV4dChcImZvbGxvd1wiKVxuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZvbGxvdyA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFUb1NlbmQgPSB7XG4gICAgICAgIF9pZDogdXNlcklkLFxuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8va3dpa3MtZGF0YS5jb20vdXNlci9mb2xsb3dcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24/LnVzZXI/LnRva2VufWAsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFUb1NlbmQpLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIilcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgc2V0Zm9sbG93QnRuVGV4dCgocHJldlRleHQpID0+XG4gICAgICAgICAgcHJldlRleHQgPT09IFwiZm9sbG93XCIgPyBcInVuZm9sbG93XCIgOiBcImZvbGxvd1wiXG4gICAgICAgIClcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6YFlvdXIgbm93ICR7Zm9sbG93QnRuVGV4dH1pbmcgPHNwYW4+e3VwbG9hZGVyTmFtZX08L3NwYW4+YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9sbG93VGV4dCh1cGxvYWRlcklkKVxuICB9LCBbc2Vzc2lvbiwgdXBsb2FkZXJJZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJUb2tlbiA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdldEJ0biBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4gaGFuZGxlRm9sbG93KHVwbG9hZGVySWQpfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyAmJiBcIkxvYWRpbmdcIn1cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiBmb2xsb3dCdG5UZXh0ICYmIHVwbG9hZGVySWQgPyAoXG4gICAgICAgICAgICA8PiB7Zm9sbG93QnRuVGV4dH08Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCIuLi5cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2t3aWtzL2lkNjQ0ODcwODE5OVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2V0QnRuIGZvbnQtc2VtaWJvbGRcIj5mb2xsb3c8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlU2Vzc2lvbiIsInVzZVRvYXN0IiwiRm9sbG93QnV0dG9uIiwicHJvcHMiLCJzZXNzaW9uIiwiZGF0YSIsInVzZXJUb2tlbiIsInVzZXIiLCJ0b2tlbiIsInVwbG9hZGVySWQiLCJ1cGxvYWRlck5hbWUiLCJ0b2FzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZvbGxvd0J0blRleHQiLCJzZXRmb2xsb3dCdG5UZXh0IiwiaXNJZEF2YWlsYWJsZSIsImlkIiwiYXJyYXkiLCJpbmRleE9mIiwiZm9sbG93VGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZvbGxvd2luZyIsImVycm9yIiwiaGFuZGxlRm9sbG93IiwidXNlcklkIiwiZGF0YVRvU2VuZCIsIl9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcmV2VGV4dCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FollowButton.tsx\n"));

/***/ })

});