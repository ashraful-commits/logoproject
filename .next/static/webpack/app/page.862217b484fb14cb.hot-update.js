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

/***/ "(app-pages-browser)/./components/Player.tsx":
/*!*******************************!*\
  !*** ./components/Player.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/lazy */ \"(app-pages-browser)/./node_modules/react-player/lazy/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst VideoPlayer = (props)=>{\n    _s();\n    const source = props.src;\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        rootMargin: \"-20% 0% -70% 0%\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (inView) {\n            var // Video is in view, play it\n            _videoRef_current;\n            (_videoRef_current = videoRef.current) === null || _videoRef_current === void 0 ? void 0 : _videoRef_current.seekTo(0) // Reset video to start when it comes into view\n            ;\n        } else {\n            var // Video is out of view, pause it\n            _videoRef_current1;\n            (_videoRef_current1 = videoRef.current) === null || _videoRef_current1 === void 0 ? void 0 : _videoRef_current1.seekTo(0) // Reset video to start when it goes out of view\n            ;\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-[300px] overfo\",\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player_lazy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"react-player\",\n            ref: videoRef,\n            url: source,\n            controls: true,\n            playing: inView\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\Player.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kwiks-web\\\\components\\\\Player.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoPlayer, \"C5A+S9dfAiHGE0lvPHBqLlAAJA0=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = VideoPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoPlayer);\nvar _c;\n$RefreshReg$(_c, \"VideoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUNPO0FBQ1o7QUFFM0MsTUFBTUssY0FBYyxDQUFDQzs7SUFDbkIsTUFBTUMsU0FBU0QsTUFBTUUsR0FBRztJQUN4QixNQUFNQyxXQUFXUCw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNRLEtBQUtDLE9BQU8sR0FBR1Isc0VBQVNBLENBQUM7UUFDOUJTLFlBQVk7SUFDZDtJQUVBWCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFFBQVE7Z0JBQ1YsNEJBQTRCO1lBQzVCRjthQUFBQSxvQkFBQUEsU0FBU0ksT0FBTyxjQUFoQkosd0NBQUFBLGtCQUFrQkssTUFBTSxDQUFDLEdBQUcsK0NBQStDOztRQUM3RSxPQUFPO2dCQUNMLGlDQUFpQztZQUNqQ0w7YUFBQUEscUJBQUFBLFNBQVNJLE9BQU8sY0FBaEJKLHlDQUFBQSxtQkFBa0JLLE1BQU0sQ0FBQyxHQUFHLGdEQUFnRDs7UUFDOUU7SUFDRixHQUFHO1FBQUNIO0tBQU87SUFFWCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtRQUF1Qk4sS0FBS0E7a0JBQ3pDLDRFQUFDTix5REFBV0E7WUFDVlksV0FBVTtZQUNWTixLQUFLRDtZQUNMUSxLQUFLVjtZQUNMVyxRQUFRO1lBQ1JDLFNBQVNSOzs7Ozs7Ozs7OztBQUtqQjtHQTdCTU47O1FBR2tCRixrRUFBU0E7OztLQUgzQkU7QUErQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIudHN4PzFjNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIlxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXIvbGF6eVwiXG5cbmNvbnN0IFZpZGVvUGxheWVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHNvdXJjZSA9IHByb3BzLnNyY1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcbiAgICByb290TWFyZ2luOiBcIi0yMCUgMCUgLTcwJSAwJVwiLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgLy8gVmlkZW8gaXMgaW4gdmlldywgcGxheSBpdFxuICAgICAgdmlkZW9SZWYuY3VycmVudD8uc2Vla1RvKDApIC8vIFJlc2V0IHZpZGVvIHRvIHN0YXJ0IHdoZW4gaXQgY29tZXMgaW50byB2aWV3XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFZpZGVvIGlzIG91dCBvZiB2aWV3LCBwYXVzZSBpdFxuICAgICAgdmlkZW9SZWYuY3VycmVudD8uc2Vla1RvKDApIC8vIFJlc2V0IHZpZGVvIHRvIHN0YXJ0IHdoZW4gaXQgZ29lcyBvdXQgb2Ygdmlld1xuICAgIH1cbiAgfSwgW2luVmlld10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVszMDBweF0gb3ZlcmZvXCIgcmVmPXtyZWZ9PlxuICAgICAgPFJlYWN0UGxheWVyIFxuICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXJcIlxuICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICB1cmw9e3NvdXJjZX1cbiAgICAgICAgY29udHJvbHNcbiAgICAgICAgcGxheWluZz17aW5WaWV3fVxuICAgICAgICBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUluVmlldyIsIlJlYWN0UGxheWVyIiwiVmlkZW9QbGF5ZXIiLCJwcm9wcyIsInNvdXJjZSIsInNyYyIsInZpZGVvUmVmIiwicmVmIiwiaW5WaWV3Iiwicm9vdE1hcmdpbiIsImN1cnJlbnQiLCJzZWVrVG8iLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJjb250cm9scyIsInBsYXlpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Player.tsx\n"));

/***/ })

});