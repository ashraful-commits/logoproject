"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-intersection-observer";
exports.ids = ["vendor-chunks/react-intersection-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-intersection-observer/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-intersection-observer/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InView: () => (/* binding */ InView),\n/* harmony export */   defaultFallbackInView: () => (/* binding */ defaultFallbackInView),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\nvar __defProp = Object.defineProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\n\n// src/InView.tsx\n\n\n// src/observe.ts\nvar observerMap = /* @__PURE__ */ new Map();\nvar RootIds = /* @__PURE__ */ new WeakMap();\nvar rootId = 0;\nvar unsupportedValue = void 0;\nfunction defaultFallbackInView(inView) {\n  unsupportedValue = inView;\n}\nfunction getRootId(root) {\n  if (!root)\n    return \"0\";\n  if (RootIds.has(root))\n    return RootIds.get(root);\n  rootId += 1;\n  RootIds.set(root, rootId.toString());\n  return RootIds.get(root);\n}\nfunction optionsToId(options) {\n  return Object.keys(options).sort().filter(\n    (key) => options[key] !== void 0\n  ).map((key) => {\n    return `${key}_${key === \"root\" ? getRootId(options.root) : options[key]}`;\n  }).toString();\n}\nfunction createObserver(options) {\n  let id = optionsToId(options);\n  let instance = observerMap.get(id);\n  if (!instance) {\n    const elements = /* @__PURE__ */ new Map();\n    let thresholds;\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach((entry) => {\n        var _a;\n        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);\n        if (options.trackVisibility && typeof entry.isVisible === \"undefined\") {\n          entry.isVisible = inView;\n        }\n        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {\n          callback(inView, entry);\n        });\n      });\n    }, options);\n    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);\n    instance = {\n      id,\n      observer,\n      elements\n    };\n    observerMap.set(id, instance);\n  }\n  return instance;\n}\nfunction observe(element, callback, options = {}, fallbackInView = unsupportedValue) {\n  if (typeof window.IntersectionObserver === \"undefined\" && fallbackInView !== void 0) {\n    const bounds = element.getBoundingClientRect();\n    callback(fallbackInView, {\n      isIntersecting: fallbackInView,\n      target: element,\n      intersectionRatio: typeof options.threshold === \"number\" ? options.threshold : 0,\n      time: 0,\n      boundingClientRect: bounds,\n      intersectionRect: bounds,\n      rootBounds: bounds\n    });\n    return () => {\n    };\n  }\n  const { id, observer, elements } = createObserver(options);\n  let callbacks = elements.get(element) || [];\n  if (!elements.has(element)) {\n    elements.set(element, callbacks);\n  }\n  callbacks.push(callback);\n  observer.observe(element);\n  return function unobserve() {\n    callbacks.splice(callbacks.indexOf(callback), 1);\n    if (callbacks.length === 0) {\n      elements.delete(element);\n      observer.unobserve(element);\n    }\n    if (elements.size === 0) {\n      observer.disconnect();\n      observerMap.delete(id);\n    }\n  };\n}\n\n// src/InView.tsx\nfunction isPlainChildren(props) {\n  return typeof props.children !== \"function\";\n}\nvar InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    __publicField(this, \"node\", null);\n    __publicField(this, \"_unobserveCb\", null);\n    __publicField(this, \"handleNode\", (node) => {\n      if (this.node) {\n        this.unobserve();\n        if (!node && !this.props.triggerOnce && !this.props.skip) {\n          this.setState({ inView: !!this.props.initialInView, entry: void 0 });\n        }\n      }\n      this.node = node ? node : null;\n      this.observeNode();\n    });\n    __publicField(this, \"handleChange\", (inView, entry) => {\n      if (inView && this.props.triggerOnce) {\n        this.unobserve();\n      }\n      if (!isPlainChildren(this.props)) {\n        this.setState({ inView, entry });\n      }\n      if (this.props.onChange) {\n        this.props.onChange(inView, entry);\n      }\n    });\n    this.state = {\n      inView: !!props.initialInView,\n      entry: void 0\n    };\n  }\n  componentDidMount() {\n    this.unobserve();\n    this.observeNode();\n  }\n  componentDidUpdate(prevProps) {\n    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {\n      this.unobserve();\n      this.observeNode();\n    }\n  }\n  componentWillUnmount() {\n    this.unobserve();\n  }\n  observeNode() {\n    if (!this.node || this.props.skip)\n      return;\n    const {\n      threshold,\n      root,\n      rootMargin,\n      trackVisibility,\n      delay,\n      fallbackInView\n    } = this.props;\n    this._unobserveCb = observe(\n      this.node,\n      this.handleChange,\n      {\n        threshold,\n        root,\n        rootMargin,\n        // @ts-ignore\n        trackVisibility,\n        // @ts-ignore\n        delay\n      },\n      fallbackInView\n    );\n  }\n  unobserve() {\n    if (this._unobserveCb) {\n      this._unobserveCb();\n      this._unobserveCb = null;\n    }\n  }\n  render() {\n    const { children } = this.props;\n    if (typeof children === \"function\") {\n      const { inView, entry } = this.state;\n      return children({ inView, entry, ref: this.handleNode });\n    }\n    const {\n      as,\n      triggerOnce,\n      threshold,\n      root,\n      rootMargin,\n      onChange,\n      skip,\n      trackVisibility,\n      delay,\n      initialInView,\n      fallbackInView,\n      ...props\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\n      as || \"div\",\n      { ref: this.handleNode, ...props },\n      children\n    );\n  }\n};\n\n// src/useInView.tsx\n\nfunction useInView({\n  threshold,\n  delay,\n  trackVisibility,\n  rootMargin,\n  root,\n  triggerOnce,\n  skip,\n  initialInView,\n  fallbackInView,\n  onChange\n} = {}) {\n  var _a;\n  const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n  const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n    inView: !!initialInView,\n    entry: void 0\n  });\n  callback.current = onChange;\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(\n    () => {\n      if (skip || !ref)\n        return;\n      let unobserve;\n      unobserve = observe(\n        ref,\n        (inView, entry) => {\n          setState({\n            inView,\n            entry\n          });\n          if (callback.current)\n            callback.current(inView, entry);\n          if (entry.isIntersecting && triggerOnce && unobserve) {\n            unobserve();\n            unobserve = void 0;\n          }\n        },\n        {\n          root,\n          rootMargin,\n          threshold,\n          // @ts-ignore\n          trackVisibility,\n          // @ts-ignore\n          delay\n        },\n        fallbackInView\n      );\n      return () => {\n        if (unobserve) {\n          unobserve();\n        }\n      };\n    },\n    // We break the rule here, because we aren't including the actual `threshold` variable\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n      // If the threshold is an array, convert it to a string, so it won't change between renders.\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n      Array.isArray(threshold) ? threshold.toString() : threshold,\n      ref,\n      root,\n      rootMargin,\n      triggerOnce,\n      skip,\n      trackVisibility,\n      fallbackInView,\n      delay\n    ]\n  );\n  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;\n  const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {\n    previousEntryTarget.current = entryTarget;\n    setState({\n      inView: !!initialInView,\n      entry: void 0\n    });\n  }\n  const result = [setRef, state.inView, state.entry];\n  result.ref = result[0];\n  result.inView = result[1];\n  result.entry = result[2];\n  return result;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksR0FBRyx3REFBd0Q7QUFDN0UsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQW1EO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUIsd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFdBQVcsZ0RBQW1CO0FBQzlCO0FBQ0EsUUFBUSxnQ0FBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSTtBQUNOO0FBQ0Esd0JBQXdCLDJDQUFlO0FBQ3ZDLG1CQUFtQix5Q0FBYTtBQUNoQyw0QkFBNEIsMkNBQWU7QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsNENBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rd2lrcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIvaW5kZXgubWpzPzBhNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIHNyYy9JblZpZXcudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gc3JjL29ic2VydmUudHNcbnZhciBvYnNlcnZlck1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgUm9vdElkcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJvb3RJZCA9IDA7XG52YXIgdW5zdXBwb3J0ZWRWYWx1ZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGRlZmF1bHRGYWxsYmFja0luVmlldyhpblZpZXcpIHtcbiAgdW5zdXBwb3J0ZWRWYWx1ZSA9IGluVmlldztcbn1cbmZ1bmN0aW9uIGdldFJvb3RJZChyb290KSB7XG4gIGlmICghcm9vdClcbiAgICByZXR1cm4gXCIwXCI7XG4gIGlmIChSb290SWRzLmhhcyhyb290KSlcbiAgICByZXR1cm4gUm9vdElkcy5nZXQocm9vdCk7XG4gIHJvb3RJZCArPSAxO1xuICBSb290SWRzLnNldChyb290LCByb290SWQudG9TdHJpbmcoKSk7XG4gIHJldHVybiBSb290SWRzLmdldChyb290KTtcbn1cbmZ1bmN0aW9uIG9wdGlvbnNUb0lkKG9wdGlvbnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLnNvcnQoKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gb3B0aW9uc1trZXldICE9PSB2b2lkIDBcbiAgKS5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiBgJHtrZXl9XyR7a2V5ID09PSBcInJvb3RcIiA/IGdldFJvb3RJZChvcHRpb25zLnJvb3QpIDogb3B0aW9uc1trZXldfWA7XG4gIH0pLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gIGxldCBpZCA9IG9wdGlvbnNUb0lkKG9wdGlvbnMpO1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlck1hcC5nZXQoaWQpO1xuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGxldCB0aHJlc2hvbGRzO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaW5WaWV3ID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgdGhyZXNob2xkcy5zb21lKCh0aHJlc2hvbGQpID0+IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IHRocmVzaG9sZCk7XG4gICAgICAgIGlmIChvcHRpb25zLnRyYWNrVmlzaWJpbGl0eSAmJiB0eXBlb2YgZW50cnkuaXNWaXNpYmxlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZW50cnkuaXNWaXNpYmxlID0gaW5WaWV3O1xuICAgICAgICB9XG4gICAgICAgIChfYSA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayhpblZpZXcsIGVudHJ5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICB0aHJlc2hvbGRzID0gb2JzZXJ2ZXIudGhyZXNob2xkcyB8fCAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRocmVzaG9sZCkgPyBvcHRpb25zLnRocmVzaG9sZCA6IFtvcHRpb25zLnRocmVzaG9sZCB8fCAwXSk7XG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHNcbiAgICB9O1xuICAgIG9ic2VydmVyTWFwLnNldChpZCwgaW5zdGFuY2UpO1xuICB9XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSwgZmFsbGJhY2tJblZpZXcgPSB1bnN1cHBvcnRlZFZhbHVlKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiICYmIGZhbGxiYWNrSW5WaWV3ICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNhbGxiYWNrKGZhbGxiYWNrSW5WaWV3LCB7XG4gICAgICBpc0ludGVyc2VjdGluZzogZmFsbGJhY2tJblZpZXcsXG4gICAgICB0YXJnZXQ6IGVsZW1lbnQsXG4gICAgICBpbnRlcnNlY3Rpb25SYXRpbzogdHlwZW9mIG9wdGlvbnMudGhyZXNob2xkID09PSBcIm51bWJlclwiID8gb3B0aW9ucy50aHJlc2hvbGQgOiAwLFxuICAgICAgdGltZTogMCxcbiAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogYm91bmRzLFxuICAgICAgaW50ZXJzZWN0aW9uUmVjdDogYm91bmRzLFxuICAgICAgcm9vdEJvdW5kczogYm91bmRzXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gIGxldCBjYWxsYmFja3MgPSBlbGVtZW50cy5nZXQoZWxlbWVudCkgfHwgW107XG4gIGlmICghZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG4gIH1cbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIGNhbGxiYWNrcy5zcGxpY2UoY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgb2JzZXJ2ZXJNYXAuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHNyYy9JblZpZXcudHN4XG5mdW5jdGlvbiBpc1BsYWluQ2hpbGRyZW4ocHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiAhPT0gXCJmdW5jdGlvblwiO1xufVxudmFyIEluVmlldyA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm5vZGVcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIl91bm9ic2VydmVDYlwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlTm9kZVwiLCAobm9kZSkgPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgICAgICBpZiAoIW5vZGUgJiYgIXRoaXMucHJvcHMudHJpZ2dlck9uY2UgJiYgIXRoaXMucHJvcHMuc2tpcCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpblZpZXc6ICEhdGhpcy5wcm9wcy5pbml0aWFsSW5WaWV3LCBlbnRyeTogdm9pZCAwIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUgPSBub2RlID8gbm9kZSA6IG51bGw7XG4gICAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUNoYW5nZVwiLCAoaW5WaWV3LCBlbnRyeSkgPT4ge1xuICAgICAgaWYgKGluVmlldyAmJiB0aGlzLnByb3BzLnRyaWdnZXJPbmNlKSB7XG4gICAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzUGxhaW5DaGlsZHJlbih0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5WaWV3LCBlbnRyeSB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaW5WaWV3LCBlbnRyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluVmlldzogISFwcm9wcy5pbml0aWFsSW5WaWV3LFxuICAgICAgZW50cnk6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMucm9vdE1hcmdpbiAhPT0gdGhpcy5wcm9wcy5yb290TWFyZ2luIHx8IHByZXZQcm9wcy5yb290ICE9PSB0aGlzLnByb3BzLnJvb3QgfHwgcHJldlByb3BzLnRocmVzaG9sZCAhPT0gdGhpcy5wcm9wcy50aHJlc2hvbGQgfHwgcHJldlByb3BzLnNraXAgIT09IHRoaXMucHJvcHMuc2tpcCB8fCBwcmV2UHJvcHMudHJhY2tWaXNpYmlsaXR5ICE9PSB0aGlzLnByb3BzLnRyYWNrVmlzaWJpbGl0eSB8fCBwcmV2UHJvcHMuZGVsYXkgIT09IHRoaXMucHJvcHMuZGVsYXkpIHtcbiAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gIH1cbiAgb2JzZXJ2ZU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgdGhpcy5wcm9wcy5za2lwKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIHJvb3QsXG4gICAgICByb290TWFyZ2luLFxuICAgICAgdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgZGVsYXksXG4gICAgICBmYWxsYmFja0luVmlld1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX3Vub2JzZXJ2ZUNiID0gb2JzZXJ2ZShcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRlbGF5XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICApO1xuICB9XG4gIHVub2JzZXJ2ZSgpIHtcbiAgICBpZiAodGhpcy5fdW5vYnNlcnZlQ2IpIHtcbiAgICAgIHRoaXMuX3Vub2JzZXJ2ZUNiKCk7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYiA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgeyBpblZpZXcsIGVudHJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgaW5WaWV3LCBlbnRyeSwgcmVmOiB0aGlzLmhhbmRsZU5vZGUgfSk7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGFzLFxuICAgICAgdHJpZ2dlck9uY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2tpcCxcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGRlbGF5LFxuICAgICAgaW5pdGlhbEluVmlldyxcbiAgICAgIGZhbGxiYWNrSW5WaWV3LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIGFzIHx8IFwiZGl2XCIsXG4gICAgICB7IHJlZjogdGhpcy5oYW5kbGVOb2RlLCAuLi5wcm9wcyB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59O1xuXG4vLyBzcmMvdXNlSW5WaWV3LnRzeFxuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gdXNlSW5WaWV3KHtcbiAgdGhyZXNob2xkLFxuICBkZWxheSxcbiAgdHJhY2tWaXNpYmlsaXR5LFxuICByb290TWFyZ2luLFxuICByb290LFxuICB0cmlnZ2VyT25jZSxcbiAgc2tpcCxcbiAgaW5pdGlhbEluVmlldyxcbiAgZmFsbGJhY2tJblZpZXcsXG4gIG9uQ2hhbmdlXG59ID0ge30pIHtcbiAgdmFyIF9hO1xuICBjb25zdCBbcmVmLCBzZXRSZWZdID0gUmVhY3QyLnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjYWxsYmFjayA9IFJlYWN0Mi51c2VSZWYoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdDIudXNlU3RhdGUoe1xuICAgIGluVmlldzogISFpbml0aWFsSW5WaWV3LFxuICAgIGVudHJ5OiB2b2lkIDBcbiAgfSk7XG4gIGNhbGxiYWNrLmN1cnJlbnQgPSBvbkNoYW5nZTtcbiAgUmVhY3QyLnVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc2tpcCB8fCAhcmVmKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgdW5vYnNlcnZlO1xuICAgICAgdW5vYnNlcnZlID0gb2JzZXJ2ZShcbiAgICAgICAgcmVmLFxuICAgICAgICAoaW5WaWV3LCBlbnRyeSkgPT4ge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGluVmlldyxcbiAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrLmN1cnJlbnQpXG4gICAgICAgICAgICBjYWxsYmFjay5jdXJyZW50KGluVmlldywgZW50cnkpO1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0cmlnZ2VyT25jZSAmJiB1bm9ic2VydmUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZSgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgZGVsYXlcbiAgICAgICAgfSxcbiAgICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAodW5vYnNlcnZlKSB7XG4gICAgICAgICAgdW5vYnNlcnZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBXZSBicmVhayB0aGUgcnVsZSBoZXJlLCBiZWNhdXNlIHdlIGFyZW4ndCBpbmNsdWRpbmcgdGhlIGFjdHVhbCBgdGhyZXNob2xkYCB2YXJpYWJsZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXG4gICAgICAvLyBJZiB0aGUgdGhyZXNob2xkIGlzIGFuIGFycmF5LCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLCBzbyBpdCB3b24ndCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICAgQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpID8gdGhyZXNob2xkLnRvU3RyaW5nKCkgOiB0aHJlc2hvbGQsXG4gICAgICByZWYsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgc2tpcCxcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3LFxuICAgICAgZGVsYXlcbiAgICBdXG4gICk7XG4gIGNvbnN0IGVudHJ5VGFyZ2V0ID0gKF9hID0gc3RhdGUuZW50cnkpID09IG51bGwgPyB2b2lkIDAgOiBfYS50YXJnZXQ7XG4gIGNvbnN0IHByZXZpb3VzRW50cnlUYXJnZXQgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGlmICghcmVmICYmIGVudHJ5VGFyZ2V0ICYmICF0cmlnZ2VyT25jZSAmJiAhc2tpcCAmJiBwcmV2aW91c0VudHJ5VGFyZ2V0LmN1cnJlbnQgIT09IGVudHJ5VGFyZ2V0KSB7XG4gICAgcHJldmlvdXNFbnRyeVRhcmdldC5jdXJyZW50ID0gZW50cnlUYXJnZXQ7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaW5WaWV3OiAhIWluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdm9pZCAwXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gW3NldFJlZiwgc3RhdGUuaW5WaWV3LCBzdGF0ZS5lbnRyeV07XG4gIHJlc3VsdC5yZWYgPSByZXN1bHRbMF07XG4gIHJlc3VsdC5pblZpZXcgPSByZXN1bHRbMV07XG4gIHJlc3VsdC5lbnRyeSA9IHJlc3VsdFsyXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCB7XG4gIEluVmlldyxcbiAgZGVmYXVsdEZhbGxiYWNrSW5WaWV3LFxuICBvYnNlcnZlLFxuICB1c2VJblZpZXdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-intersection-observer/index.mjs\n");

/***/ })

};
;