"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/[userId]/page",{

/***/ "(app-pages-browser)/./components/Player.tsx":
/*!*******************************!*\
  !*** ./components/Player.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/lazy */ \"(app-pages-browser)/./node_modules/react-player/lazy/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst VideoPlayer = (props)=>{\n    _s();\n    const source = props.src;\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        rootMargin: \"-20% 0% -70% 0%\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            var // Video is in view, play it\n            _videoRef_current;\n            (_videoRef_current = videoRef.current) === null || _videoRef_current === void 0 ? void 0 : _videoRef_current.seekTo(0) // Reset video to start when it comes into view\n            ;\n        } else {\n            var // Video is out of view, pause it\n            _videoRef_current1;\n            (_videoRef_current1 = videoRef.current) === null || _videoRef_current1 === void 0 ? void 0 : _videoRef_current1.seekTo(0) // Reset video to start when it goes out of view\n            ;\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player_lazy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"react-player\",\n            ref: videoRef,\n            url: source,\n            controls: true,\n            playing: inView\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\Player.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\Player.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoPlayer, \"C5A+S9dfAiHGE0lvPHBqLlAAJA0=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = VideoPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoPlayer);\nvar _c;\n$RefreshReg$(_c, \"VideoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUNPO0FBQ1o7QUFFM0MsTUFBTUssY0FBYyxDQUFDQzs7SUFDbkIsTUFBTUMsU0FBU0QsTUFBTUUsR0FBRztJQUN4QixNQUFNQyxXQUFXUCw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNRLEtBQUtDLE9BQU8sR0FBR1Isc0VBQVNBLENBQUM7UUFDOUJTLFlBQVk7SUFDZDtJQUVBWCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFFBQVE7Z0JBQ1YsNEJBQTRCO1lBQzVCRjthQUFBQSxvQkFBQUEsU0FBU0ksT0FBTyxjQUFoQkosd0NBQUFBLGtCQUFrQkssTUFBTSxDQUFDLEdBQUcsK0NBQStDOztRQUM3RSxPQUFPO2dCQUNMLGlDQUFpQztZQUNqQ0w7YUFBQUEscUJBQUFBLFNBQVNJLE9BQU8sY0FBaEJKLHlDQUFBQSxtQkFBa0JLLE1BQU0sQ0FBQyxHQUFHLGdEQUFnRDs7UUFDOUU7SUFDRixHQUFHO1FBQUNIO0tBQU87SUFFWCxxQkFDRSw4REFBQ0k7UUFBSUwsS0FBS0E7a0JBQ1IsNEVBQUNOLHlEQUFXQTtZQUNWWSxXQUFVO1lBQ1ZOLEtBQUtEO1lBQ0xRLEtBQUtWO1lBQ0xXLFFBQVE7WUFDUkMsU0FBU1I7Ozs7Ozs7Ozs7O0FBS2pCO0dBN0JNTjs7UUFHa0JGLGtFQUFTQTs7O0tBSDNCRTtBQStCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci50c3g/MWM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllci9sYXp5XCJcblxuY29uc3QgVmlkZW9QbGF5ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc291cmNlID0gcHJvcHMuc3JjXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoe1xuICAgIHJvb3RNYXJnaW46IFwiLTIwJSAwJSAtNzAlIDAlXCIsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICAvLyBWaWRlbyBpcyBpbiB2aWV3LCBwbGF5IGl0XG4gICAgICB2aWRlb1JlZi5jdXJyZW50Py5zZWVrVG8oMCkgLy8gUmVzZXQgdmlkZW8gdG8gc3RhcnQgd2hlbiBpdCBjb21lcyBpbnRvIHZpZXdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVmlkZW8gaXMgb3V0IG9mIHZpZXcsIHBhdXNlIGl0XG4gICAgICB2aWRlb1JlZi5jdXJyZW50Py5zZWVrVG8oMCkgLy8gUmVzZXQgdmlkZW8gdG8gc3RhcnQgd2hlbiBpdCBnb2VzIG91dCBvZiB2aWV3XG4gICAgfVxuICB9LCBbaW5WaWV3XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgPFJlYWN0UGxheWVyIFxuICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXJcIlxuICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICB1cmw9e3NvdXJjZX1cbiAgICAgICAgY29udHJvbHNcbiAgICAgICAgcGxheWluZz17aW5WaWV3fVxuICAgICAgICBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUluVmlldyIsIlJlYWN0UGxheWVyIiwiVmlkZW9QbGF5ZXIiLCJwcm9wcyIsInNvdXJjZSIsInNyYyIsInZpZGVvUmVmIiwicmVmIiwiaW5WaWV3Iiwicm9vdE1hcmdpbiIsImN1cnJlbnQiLCJzZWVrVG8iLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJjb250cm9scyIsInBsYXlpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Player.tsx\n"));

/***/ })

});