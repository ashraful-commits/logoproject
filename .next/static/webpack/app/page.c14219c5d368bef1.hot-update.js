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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FollowButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction FollowButton(props) {\n    var _session_user, _session;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const userToken = (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token;\n    const uploaderId = props.uploaderId;\n    const elment = document.createElement(\"p\");\n    elment.appendChield = props.uploaderName;\n    const uploaderName = element;\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [followBtnText, setfollowBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"follow\");\n    function isIdAvailable(id, array) {\n        return array.indexOf(id) !== -1;\n    }\n    const followText = async (uploaderId)=>{\n        try {\n            const response = await fetch(\"https://kwiks-data.com/user\", {\n                cache: \"force-cache\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            console.log(data);\n            const following = data.data.following;\n            if (isIdAvailable(uploaderId, following)) {\n                setfollowBtnText(\"unfollow\");\n            } else {\n                setfollowBtnText(\"follow\");\n            }\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleFollow = async (userId)=>{\n        setIsLoading(true);\n        console.log(userId);\n        try {\n            var _session_user, _session;\n            const dataToSend = {\n                _id: userId\n            };\n            const response = await fetch(\"https://kwiks-data.com/user/follow\", {\n                method: \"POST\",\n                headers: {\n                    Authorization: \"Bearer \".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token),\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(dataToSend)\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            if (response.ok) {\n                setfollowBtnText((prevText)=>prevText === \"follow\" ? \"unfollow\" : \"follow\");\n                setIsLoading(false);\n                toast({\n                    title: \"Your now \".concat(followBtnText, \"ing \").concat(uploaderName)\n                });\n            }\n        // window.location.reload()\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        followText(uploaderId);\n    }, [\n        session,\n        uploaderId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: userToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"getBtn font-semibold cursor-pointer\",\n            onClick: async (e)=>handleFollow(uploaderId),\n            children: [\n                isLoading && \"Loading\",\n                !isLoading && followBtnText && uploaderId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        followBtnText\n                    ]\n                }, void 0, true) : \"...\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 91,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"https://apps.apple.com/us/app/kwiks/id6448708199\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"getBtn font-semibold\",\n                children: \"follow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n                lineNumber: 104,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 103,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(FollowButton, \"UkhW0feJPqv+8JB67TiMxiaOtzM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = FollowButton;\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9sbG93QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUN0QjtBQUNnQjtBQUVRO0FBRXJDLFNBQVNNLGFBQWFDLEtBQUs7UUFFdEJDLGVBQUFBOztJQURsQixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFDcEMsTUFBTU0sYUFBWUYsV0FBQUEscUJBQUFBLGdDQUFBQSxnQkFBQUEsU0FBU0csSUFBSSxjQUFiSCxvQ0FBQUEsY0FBZUksS0FBSztJQUN0QyxNQUFNQyxhQUFhTixNQUFNTSxVQUFVO0lBQ25DLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztJQUN4Q0YsT0FBT0csWUFBWSxHQUFHVixNQUFNVyxZQUFZO0lBQ3RDLE1BQU1BLGVBQWVDO0lBQ3JCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdmLGtFQUFRQTtJQUUxQixNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNxQixlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRW5ELFNBQVN1QixjQUFjQyxFQUFFLEVBQUVDLEtBQUs7UUFDOUIsT0FBT0EsTUFBTUMsT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDaEM7SUFFQSxNQUFNRyxhQUFhLE9BQU9oQjtRQUN4QixJQUFJO1lBQ0YsTUFBTWlCLFdBQVcsTUFBTUMsTUFBTSwrQkFBK0I7Z0JBQzFEQyxPQUFPO1lBQ1Q7WUFDQSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsTUFBTXpCLE9BQU8sTUFBTXFCLFNBQVNLLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQzVCO1lBQ1osTUFBTTZCLFlBQVk3QixLQUFLQSxJQUFJLENBQUM2QixTQUFTO1lBQ3JDLElBQUliLGNBQWNaLFlBQVl5QixZQUFZO2dCQUN4Q2QsaUJBQWlCO1lBQ25CLE9BQU87Z0JBQ0xBLGlCQUFpQjtZQUNuQjtZQUNBRixhQUFhO1FBQ2YsRUFBRSxPQUFPaUIsT0FBWTtZQUNuQkgsUUFBUUMsR0FBRyxDQUFDRTtRQUNkO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCbkIsYUFBYTtRQUNiYyxRQUFRQyxHQUFHLENBQUNJO1FBQ1osSUFBSTtnQkFPMkJqQyxlQUFBQTtZQU43QixNQUFNa0MsYUFBYTtnQkFDakJDLEtBQUtGO1lBQ1A7WUFDQSxNQUFNWCxXQUFXLE1BQU1DLE1BQU0sc0NBQXNDO2dCQUNqRWEsUUFBUTtnQkFDUkMsU0FBUztvQkFDUEMsZUFBZSxVQUErQixRQUFyQnRDLFdBQUFBLHFCQUFBQSxnQ0FBQUEsZ0JBQUFBLFNBQVNHLElBQUksY0FBYkgsb0NBQUFBLGNBQWVJLEtBQUs7b0JBQzdDLGdCQUFnQjtnQkFDbEI7Z0JBQ0FtQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3ZCO1lBQ0EsSUFBSSxDQUFDWixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU16QixPQUFPLE1BQU1xQixTQUFTSyxJQUFJO1lBRWhDLElBQUlMLFNBQVNHLEVBQUUsRUFBRTtnQkFDZlQsaUJBQWlCLENBQUMwQixXQUNoQkEsYUFBYSxXQUFXLGFBQWE7Z0JBRXZDNUIsYUFBYTtnQkFDYkYsTUFBTTtvQkFDSitCLE9BQU0sWUFBZ0NqQyxPQUFwQkssZUFBYyxRQUFtQixPQUFiTDtnQkFDeEM7WUFDRjtRQUNBLDJCQUEyQjtRQUM3QixFQUFFLE9BQU9xQixPQUFPO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUNGO0lBRUF0QyxnREFBU0EsQ0FBQztRQUNSNEIsV0FBV2hCO0lBQ2IsR0FBRztRQUFDTDtRQUFTSztLQUFXO0lBRXhCLHFCQUNFO2tCQUNHSCwwQkFDQyw4REFBQzBDO1lBQ0NDLFdBQVU7WUFDVkMsU0FBUyxPQUFPQyxJQUFNZixhQUFhM0I7O2dCQUVsQ1EsYUFBYTtnQkFDYixDQUFDQSxhQUFhRSxpQkFBaUJWLDJCQUM5Qjs7d0JBQUU7d0JBQUVVOzttQ0FFSjs7Ozs7O2lDQUlKLDhEQUFDcEIsa0RBQUlBO1lBQUNxRCxNQUFLO3NCQUNULDRFQUFDSjtnQkFBSUMsV0FBVTswQkFBdUI7Ozs7Ozs7Ozs7OztBQUtoRDtHQXBHd0IvQzs7UUFDSUYsdURBQVVBO1FBTWxCQyw4REFBUUE7OztLQVBKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi50c3g/NGFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbGxvd0J1dHRvbihwcm9wcykge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCB1c2VyVG9rZW4gPSBzZXNzaW9uPy51c2VyPy50b2tlblxuICBjb25zdCB1cGxvYWRlcklkID0gcHJvcHMudXBsb2FkZXJJZFxuICBjb25zdCBlbG1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuZWxtZW50LmFwcGVuZENoaWVsZCA9IHByb3BzLnVwbG9hZGVyTmFtZVxuICBjb25zdCB1cGxvYWRlck5hbWUgPSBlbGVtZW50XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KClcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2ZvbGxvd0J0blRleHQsIHNldGZvbGxvd0J0blRleHRdID0gdXNlU3RhdGUoXCJmb2xsb3dcIilcblxuICBmdW5jdGlvbiBpc0lkQXZhaWxhYmxlKGlkLCBhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5pbmRleE9mKGlkKSAhPT0gLTFcbiAgfVxuXG4gIGNvbnN0IGZvbGxvd1RleHQgPSBhc3luYyAodXBsb2FkZXJJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9rd2lrcy1kYXRhLmNvbS91c2VyXCIsIHtcbiAgICAgICAgY2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpXG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgY29uc3QgZm9sbG93aW5nID0gZGF0YS5kYXRhLmZvbGxvd2luZ1xuICAgICAgaWYgKGlzSWRBdmFpbGFibGUodXBsb2FkZXJJZCwgZm9sbG93aW5nKSkge1xuICAgICAgICBzZXRmb2xsb3dCdG5UZXh0KFwidW5mb2xsb3dcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldGZvbGxvd0J0blRleHQoXCJmb2xsb3dcIilcbiAgICAgIH1cbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVGb2xsb3cgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgY29uc29sZS5sb2codXNlcklkKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhVG9TZW5kID0ge1xuICAgICAgICBfaWQ6IHVzZXJJZCxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2t3aWtzLWRhdGEuY29tL3VzZXIvZm9sbG93XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uPy51c2VyPy50b2tlbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSxcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHNldGZvbGxvd0J0blRleHQoKHByZXZUZXh0KSA9PlxuICAgICAgICAgIHByZXZUZXh0ID09PSBcImZvbGxvd1wiID8gXCJ1bmZvbGxvd1wiIDogXCJmb2xsb3dcIlxuICAgICAgICApXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOmBZb3VyIG5vdyAke2ZvbGxvd0J0blRleHR9aW5nICR7dXBsb2FkZXJOYW1lfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvbGxvd1RleHQodXBsb2FkZXJJZClcbiAgfSwgW3Nlc3Npb24sIHVwbG9hZGVySWRdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VyVG9rZW4gPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJnZXRCdG4gZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IGhhbmRsZUZvbGxvdyh1cGxvYWRlcklkKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgXCJMb2FkaW5nXCJ9XG4gICAgICAgICAgeyFpc0xvYWRpbmcgJiYgZm9sbG93QnRuVGV4dCAmJiB1cGxvYWRlcklkID8gKFxuICAgICAgICAgICAgPD4ge2ZvbGxvd0J0blRleHR9PC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiLi4uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3VzL2FwcC9rd2lrcy9pZDY0NDg3MDgxOTlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdldEJ0biBmb250LXNlbWlib2xkXCI+Zm9sbG93PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVNlc3Npb24iLCJ1c2VUb2FzdCIsIkZvbGxvd0J1dHRvbiIsInByb3BzIiwic2Vzc2lvbiIsImRhdGEiLCJ1c2VyVG9rZW4iLCJ1c2VyIiwidG9rZW4iLCJ1cGxvYWRlcklkIiwiZWxtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpZWxkIiwidXBsb2FkZXJOYW1lIiwiZWxlbWVudCIsInRvYXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9sbG93QnRuVGV4dCIsInNldGZvbGxvd0J0blRleHQiLCJpc0lkQXZhaWxhYmxlIiwiaWQiLCJhcnJheSIsImluZGV4T2YiLCJmb2xsb3dUZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsImNhY2hlIiwib2siLCJFcnJvciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZm9sbG93aW5nIiwiZXJyb3IiLCJoYW5kbGVGb2xsb3ciLCJ1c2VySWQiLCJkYXRhVG9TZW5kIiwiX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByZXZUZXh0IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FollowButton.tsx\n"));

/***/ })

});