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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FollowButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction FollowButton(props) {\n    var _session_user, _session;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const userToken = (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token;\n    const uploaderId = props.uploaderId;\n    const uploaderName = props.uploaderName;\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [followBtnText, setfollowBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"follow\");\n    function isIdAvailable(id, array) {\n        return array.indexOf(id) !== -1;\n    }\n    const followText = async (uploaderId)=>{\n        try {\n            const response = await fetch(\"https://kwiks-data.com/user\", {\n                cache: \"force-cache\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            console.log(data);\n            const following = data.data.following;\n            if (isIdAvailable(uploaderId, following)) {\n                setfollowBtnText(\"unfollow\");\n            } else {\n                setfollowBtnText(\"follow\");\n            }\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleFollow = async (userId)=>{\n        setIsLoading(true);\n        console.log(userId);\n        try {\n            var _session_user, _session;\n            const dataToSend = {\n                _id: userId\n            };\n            const response = await fetch(\"https://kwiks-data.com/user/follow\", {\n                method: \"POST\",\n                headers: {\n                    Authorization: \"Bearer \".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.token),\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(dataToSend)\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const data = await response.json();\n            if (response.ok) {\n                setfollowBtnText((prevText)=>prevText === \"follow\" ? \"unfollow\" : \"follow\");\n                setIsLoading(false);\n                toast({\n                    title: \"Your Now {followB}ing\".concat(uploaderName)\n                });\n            }\n        // window.location.reload()\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        followText(uploaderId);\n    }, [\n        session,\n        uploaderId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: userToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"getBtn font-semibold cursor-pointer\",\n            onClick: async (e)=>handleFollow(uploaderId),\n            children: [\n                isLoading && \"Loading\",\n                !isLoading && followBtnText && uploaderId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        followBtnText\n                    ]\n                }, void 0, true) : \"...\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"https://apps.apple.com/us/app/kwiks/id6448708199\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"getBtn font-semibold\",\n                children: \"follow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n                lineNumber: 102,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\FollowButton.tsx\",\n            lineNumber: 101,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(FollowButton, \"UkhW0feJPqv+8JB67TiMxiaOtzM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = FollowButton;\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9sbG93QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUN0QjtBQUNnQjtBQUVRO0FBRXJDLFNBQVNNLGFBQWFDLEtBQUs7UUFFdEJDLGVBQUFBOztJQURsQixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFDcEMsTUFBTU0sYUFBWUYsV0FBQUEscUJBQUFBLGdDQUFBQSxnQkFBQUEsU0FBU0csSUFBSSxjQUFiSCxvQ0FBQUEsY0FBZUksS0FBSztJQUN0QyxNQUFNQyxhQUFhTixNQUFNTSxVQUFVO0lBQ25DLE1BQU1DLGVBQWVQLE1BQU1PLFlBQVk7SUFDdkMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Ysa0VBQVFBO0lBRTFCLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRW5ELFNBQVNrQixjQUFjQyxFQUFFLEVBQUVDLEtBQUs7UUFDOUIsT0FBT0EsTUFBTUMsT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDaEM7SUFFQSxNQUFNRyxhQUFhLE9BQU9YO1FBQ3hCLElBQUk7WUFDRixNQUFNWSxXQUFXLE1BQU1DLE1BQU0sK0JBQStCO2dCQUMxREMsT0FBTztZQUNUO1lBQ0EsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1wQixPQUFPLE1BQU1nQixTQUFTSyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUN2QjtZQUNaLE1BQU13QixZQUFZeEIsS0FBS0EsSUFBSSxDQUFDd0IsU0FBUztZQUNyQyxJQUFJYixjQUFjUCxZQUFZb0IsWUFBWTtnQkFDeENkLGlCQUFpQjtZQUNuQixPQUFPO2dCQUNMQSxpQkFBaUI7WUFDbkI7WUFDQUYsYUFBYTtRQUNmLEVBQUUsT0FBT2lCLE9BQVk7WUFDbkJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUNGO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQm5CLGFBQWE7UUFDYmMsUUFBUUMsR0FBRyxDQUFDSTtRQUNaLElBQUk7Z0JBTzJCNUIsZUFBQUE7WUFON0IsTUFBTTZCLGFBQWE7Z0JBQ2pCQyxLQUFLRjtZQUNQO1lBQ0EsTUFBTVgsV0FBVyxNQUFNQyxNQUFNLHNDQUFzQztnQkFDakVhLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLGVBQWUsVUFBK0IsUUFBckJqQyxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTRyxJQUFJLGNBQWJILG9DQUFBQSxjQUFlSSxLQUFLO29CQUM3QyxnQkFBZ0I7Z0JBQ2xCO2dCQUNBOEIsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN2QjtZQUNBLElBQUksQ0FBQ1osU0FBU0csRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNcEIsT0FBTyxNQUFNZ0IsU0FBU0ssSUFBSTtZQUVoQyxJQUFJTCxTQUFTRyxFQUFFLEVBQUU7Z0JBQ2ZULGlCQUFpQixDQUFDMEIsV0FDaEJBLGFBQWEsV0FBVyxhQUFhO2dCQUV2QzVCLGFBQWE7Z0JBQ2JGLE1BQU07b0JBQ0orQixPQUFNLHdCQUFxQyxPQUFiaEM7Z0JBQ2hDO1lBQ0Y7UUFDQSwyQkFBMkI7UUFDN0IsRUFBRSxPQUFPb0IsT0FBTztZQUNkSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Q7SUFDRjtJQUVBakMsZ0RBQVNBLENBQUM7UUFDUnVCLFdBQVdYO0lBQ2IsR0FBRztRQUFDTDtRQUFTSztLQUFXO0lBRXhCLHFCQUNFO2tCQUNHSCwwQkFDQyw4REFBQ3FDO1lBQ0NDLFdBQVU7WUFDVkMsU0FBUyxPQUFPQyxJQUFNZixhQUFhdEI7O2dCQUVsQ0csYUFBYTtnQkFDYixDQUFDQSxhQUFhRSxpQkFBaUJMLDJCQUM5Qjs7d0JBQUU7d0JBQUVLOzttQ0FFSjs7Ozs7O2lDQUlKLDhEQUFDZixrREFBSUE7WUFBQ2dELE1BQUs7c0JBQ1QsNEVBQUNKO2dCQUFJQyxXQUFVOzBCQUF1Qjs7Ozs7Ozs7Ozs7O0FBS2hEO0dBbEd3QjFDOztRQUNJRix1REFBVUE7UUFJbEJDLDhEQUFRQTs7O0tBTEpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sbG93QnV0dG9uLnRzeD80YWQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9sbG93QnV0dG9uKHByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IHVzZXJUb2tlbiA9IHNlc3Npb24/LnVzZXI/LnRva2VuXG4gIGNvbnN0IHVwbG9hZGVySWQgPSBwcm9wcy51cGxvYWRlcklkXG4gIGNvbnN0IHVwbG9hZGVyTmFtZSA9IHByb3BzLnVwbG9hZGVyTmFtZVxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IFtmb2xsb3dCdG5UZXh0LCBzZXRmb2xsb3dCdG5UZXh0XSA9IHVzZVN0YXRlKFwiZm9sbG93XCIpXG5cbiAgZnVuY3Rpb24gaXNJZEF2YWlsYWJsZShpZCwgYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihpZCkgIT09IC0xXG4gIH1cblxuICBjb25zdCBmb2xsb3dUZXh0ID0gYXN5bmMgKHVwbG9hZGVySWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8va3dpa3MtZGF0YS5jb20vdXNlclwiLCB7XG4gICAgICAgIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKVxuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGNvbnN0IGZvbGxvd2luZyA9IGRhdGEuZGF0YS5mb2xsb3dpbmdcbiAgICAgIGlmIChpc0lkQXZhaWxhYmxlKHVwbG9hZGVySWQsIGZvbGxvd2luZykpIHtcbiAgICAgICAgc2V0Zm9sbG93QnRuVGV4dChcInVuZm9sbG93XCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRmb2xsb3dCdG5UZXh0KFwiZm9sbG93XCIpXG4gICAgICB9XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRm9sbG93ID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YVRvU2VuZCA9IHtcbiAgICAgICAgX2lkOiB1c2VySWQsXG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9rd2lrcy1kYXRhLmNvbS91c2VyL2ZvbGxvd1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbj8udXNlcj8udG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZCksXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRmb2xsb3dCdG5UZXh0KChwcmV2VGV4dCkgPT5cbiAgICAgICAgICBwcmV2VGV4dCA9PT0gXCJmb2xsb3dcIiA/IFwidW5mb2xsb3dcIiA6IFwiZm9sbG93XCJcbiAgICAgICAgKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICB0aXRsZTpgWW91ciBOb3cge2ZvbGxvd0J9aW5nJHt1cGxvYWRlck5hbWV9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9sbG93VGV4dCh1cGxvYWRlcklkKVxuICB9LCBbc2Vzc2lvbiwgdXBsb2FkZXJJZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJUb2tlbiA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdldEJ0biBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4gaGFuZGxlRm9sbG93KHVwbG9hZGVySWQpfVxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyAmJiBcIkxvYWRpbmdcIn1cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiBmb2xsb3dCdG5UZXh0ICYmIHVwbG9hZGVySWQgPyAoXG4gICAgICAgICAgICA8PiB7Zm9sbG93QnRuVGV4dH08Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCIuLi5cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdXMvYXBwL2t3aWtzL2lkNjQ0ODcwODE5OVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2V0QnRuIGZvbnQtc2VtaWJvbGRcIj5mb2xsb3c8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlU2Vzc2lvbiIsInVzZVRvYXN0IiwiRm9sbG93QnV0dG9uIiwicHJvcHMiLCJzZXNzaW9uIiwiZGF0YSIsInVzZXJUb2tlbiIsInVzZXIiLCJ0b2tlbiIsInVwbG9hZGVySWQiLCJ1cGxvYWRlck5hbWUiLCJ0b2FzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZvbGxvd0J0blRleHQiLCJzZXRmb2xsb3dCdG5UZXh0IiwiaXNJZEF2YWlsYWJsZSIsImlkIiwiYXJyYXkiLCJpbmRleE9mIiwiZm9sbG93VGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZvbGxvd2luZyIsImVycm9yIiwiaGFuZGxlRm9sbG93IiwidXNlcklkIiwiZGF0YVRvU2VuZCIsIl9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcmV2VGV4dCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FollowButton.tsx\n"));

/***/ })

});