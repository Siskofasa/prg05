/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/*! exports provided: default, VERSION, iteratee, restArguments, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, find, detect, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, findWhere, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, toArray, size, partition, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, zip, object, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, range, chunk, bind, partial, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, keys, allKeys, values, mapObject, pairs, invert, functions, methods, extend, extendOwn, assign, findKey, pick, omit, defaults, create, clone, tap, isMatch, isEqual, isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isFinite, isNaN, isBoolean, isNull, isUndefined, has, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, result, uniqueId, templateSettings, template, chain, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "./node_modules/underscore/modules/index-default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["iteratee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["restArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["collect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduceRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["detect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["every"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["include"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findWhere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["countBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["initial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["rest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["intersection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["difference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unzip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findLastIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortedIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["lastIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["negate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["allKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["functions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["methods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extendOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFinite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["has"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["propertyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["times"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unescape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["templateSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mixin"]; });





/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");



// Add all of the Underscore functions to the wrapper object.
var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/*! exports provided: default, VERSION, iteratee, restArguments, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, find, detect, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, findWhere, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, toArray, size, partition, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, zip, object, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, range, chunk, bind, partial, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, keys, allKeys, values, mapObject, pairs, invert, functions, methods, extend, extendOwn, assign, findKey, pick, omit, defaults, create, clone, tap, isMatch, isEqual, isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isFinite, isNaN, isBoolean, isNull, isUndefined, has, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, result, uniqueId, templateSettings, template, chain, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return iteratee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return restArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return findWhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return indexBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return initial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return sortedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return bindAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return allKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return functions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return extendOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return extendOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return isArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return isWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return isWeakSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return propertyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return matcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return times; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return templateSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
//     Underscore.js 1.10.2
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create;

// Create references to these builtin functions because we override them.
var _isNaN = root.isNaN,
    _isFinite = root.isFinite;

// Naked function reference for surrogate-prototype-swapping.
var Ctor = function(){};

// The Underscore object. All exported functions below are added to it in the
// modules/index-all.js using the mixin function.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

// Current version.
var VERSION = _.VERSION = '1.10.2';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return identity;
  if (isFunction(value)) return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray(value)) return matcher(value);
  return property(value);
}

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee = iteratee;
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}

// The function we actually call internally. It invokes _.iteratee if
// overridden, otherwise baseIteratee.
function cb(value, context, argCount) {
  if (_.iteratee !== iteratee) return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}

// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!isObject(prototype)) return {};
  if (nativeCreate) return nativeCreate(prototype);
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}

function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}

function _has(obj, path) {
  return obj != null && hasOwnProperty.call(obj, path);
}

function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = shallowProperty('length');
function isArrayLike(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


// Create a reducing function iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
  };
}

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
var reduce = createReduce(1);


// The right-associative version of reduce, also known as `foldr`.
var reduceRight = createReduce(-1);


// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}

// Determine whether all of the elements match a truth test.
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


// Determine if at least one element in the object matches a truth test.
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj)) obj = values(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}


// Invoke a method (with arguments) on every item in a collection.
var invoke = restArguments(function(obj, path, args) {
  var contextPath, func;
  if (isFunction(path)) {
    func = path;
  } else if (isArray(path)) {
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return map(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
});

// Convenience version of a common use case of `map`: fetching a property.
function pluck(obj, key) {
  return map(obj, property(key));
}

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}

// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = cb(iteratee, context);
    each(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}

// Shuffle a collection.
function shuffle(obj) {
  return sample(obj, Infinity);
}

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample = isArrayLike(obj) ? clone(obj) : values(obj);
  var length = getLength(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}

// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = cb(iteratee, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}

// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = cb(iteratee, context);
    each(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
var groupBy = group(function(result, value, key) {
  if (_has(result, key)) result[key].push(value); else result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
var indexBy = group(function(result, value, key) {
  result[key] = value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
var countBy = group(function(result, value, key) {
  if (_has(result, key)) result[key]++; else result[key] = 1;
});

var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
// Safely create a real, live array from anything iterable.
function toArray(obj) {
  if (!obj) return [];
  if (isArray(obj)) return slice.call(obj);
  if (isString(obj)) {
    // Keep surrogate pair characters together
    return obj.match(reStrSymbol);
  }
  if (isArrayLike(obj)) return map(obj, identity);
  return values(obj);
}

// Return the number of elements in an object.
function size(obj) {
  if (obj == null) return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
var partition = group(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true);

// Array Functions
// ---------------

// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}

// Returns everything but the first entry of the array. Especially useful on
// the arguments object. Passing an **n** will return the rest N values in the
// array.
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}


// Trim out all falsy values from an array.
function compact(array) {
  return filter(array, Boolean);
}

// Internal implementation of a recursive `flatten` function.
function _flatten(input, shallow, strict, output) {
  output = output || [];
  var idx = output.length;
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (isArray(value) || isArguments(value))) {
      // Flatten current level of array or arguments object.
      if (shallow) {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      } else {
        _flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}

// Flatten out an array, either recursively (by default), or just one level.
function flatten(array, shallow) {
  return _flatten(array, shallow, false);
}

// Return a version of the array that does not contain the specified value(s).
var without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!contains(result, value)) {
      result.push(value);
    }
  }
  return result;
}


// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
var union = restArguments(function(arrays) {
  return uniq(_flatten(arrays, true, true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
    if (contains(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
var difference = restArguments(function(array, rest) {
  rest = _flatten(rest, true, true);
  return filter(array, function(value){
    return !contains(rest, value);
  });
});

// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && max(array, getLength).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = pluck(array, index);
  }
  return result;
}

// Zip together multiple lists into a single array -- elements that share
// an index go together.
var zip = restArguments(unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of pairs.
function object(list, values) {
  var result = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}

// Generator function to create the findIndex and findLastIndex functions.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}

// Returns the first index on an array-like that passes a predicate test.
var findIndex = createPredicateIndexFinder(1);
var findLastIndex = createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}

// Generator function to create the indexOf and lastIndexOf functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
var indexOf = createIndexFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexFinder(-1, findLastIndex);

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(slice.call(array, i, i += count));
  }
  return result;
}

// Function (ahem) Functions
// ------------------

// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = baseCreate(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (isObject(result)) return result;
  return self;
}

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
var bind = restArguments(function(func, context, args) {
  if (!isFunction(func)) throw new TypeError('Bind must be called on a function');
  var bound = restArguments(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
});

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `partial.placeholder` for a custom placeholder argument.
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _;

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
var bindAll = restArguments(function(obj, _keys) {
  _keys = _flatten(_keys, false, false);
  var index = _keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = _keys[index];
    obj[key] = bind(obj[key], obj);
  }
});

// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!_has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
var delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
var defer = partial(delay, _, 1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = now();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return partial(wrapper, func);
}

// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}

// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

// Returns a function that will only be executed up to (but not including) the Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
var once = partial(before, 2);

// Object Functions
// ----------------

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

function collectNonEnumProps(obj, _keys) {
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction(constructor) && constructor.prototype || ObjProto;

  // Constructor is a special case.
  var prop = 'constructor';
  if (_has(obj, prop) && !contains(_keys, prop)) _keys.push(prop);

  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !contains(_keys, prop)) {
      _keys.push(prop);
    }
  }
}

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var _keys = [];
  for (var key in obj) if (_has(obj, key)) _keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
}

// Retrieve all the property names of an object.
function allKeys(obj) {
  if (!isObject(obj)) return [];
  var _keys = [];
  for (var key in obj) _keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, _keys);
  return _keys;
}

// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}

// Returns the results of applying the iteratee to each element of the object.
// In contrast to map it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var _keys = keys(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

// Convert an object into a list of `[key, value]` pairs.
// The opposite of object.
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}

// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}

// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction(obj[key])) names.push(key);
  }
  return names.sort();
}


// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          _keys = keysFunc(source),
          l = _keys.length;
      for (var i = 0; i < l; i++) {
        var key = _keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}

// Extend a given object with all the properties in passed-in object(s).
var extend = createAssigner(allKeys);

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
var extendOwn = createAssigner(keys);


// Returns the first key on an object that passes a predicate test.
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}

// Internal pick helper function to determine if `obj` has key `key`.
function keyInObj(value, key, obj) {
  return key in obj;
}

// Return a copy of the object only containing the whitelisted properties.
var pick = restArguments(function(obj, _keys) {
  var result = {}, iteratee = _keys[0];
  if (obj == null) return result;
  if (isFunction(iteratee)) {
    if (_keys.length > 1) iteratee = optimizeCb(iteratee, _keys[1]);
    _keys = allKeys(obj);
  } else {
    iteratee = keyInObj;
    _keys = _flatten(_keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = _keys.length; i < length; i++) {
    var key = _keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
});

// Return a copy of the object without the blacklisted properties.
var omit = restArguments(function(obj, _keys) {
  var iteratee = _keys[0], context;
  if (isFunction(iteratee)) {
    iteratee = negate(iteratee);
    if (_keys.length > 1) context = _keys[1];
  } else {
    _keys = map(_flatten(_keys, false, false), String);
    iteratee = function(value, key) {
      return !contains(_keys, key);
    };
  }
  return pick(obj, iteratee, context);
});

// Fill in a given object with default properties.
var defaults = createAssigner(allKeys, true);

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = baseCreate(prototype);
  if (props) extendOwn(result, props);
  return result;
}

// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!isObject(obj)) return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
}

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}

// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case '[object RegExp]':
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
                             isFunction(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = keys(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(_has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  if (isArrayLike(obj) && (isArray(obj) || isString(obj) || isArguments(obj))) return obj.length === 0;
  return keys(obj).length === 0;
}

// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

// Internal function for creating a toString-based type tester.
function tagTester(name) {
  return function(obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
}

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
var isArray = nativeIsArray || tagTester('Array');

// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
var isArguments = tagTester('Arguments');
var isFunction = tagTester('Function');
var isString = tagTester('String');
var isNumber = tagTester('Number');
var isDate = tagTester('Date');
var isRegExp = tagTester('RegExp');
var isError = tagTester('Error');
var isSymbol = tagTester('Symbol');
var isMap = tagTester('Map');
var isWeakMap = tagTester('WeakMap');
var isSet = tagTester('Set');
var isWeakSet = tagTester('WeakSet');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return _has(obj, 'callee');
    };
  }
}());

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = root.document && root.document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

// Is a given object a finite number?
function isFinite(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !_isNaN(parseFloat(obj));
}

// Is the given value `NaN`?
function isNaN(obj) {
  return isNumber(obj) && _isNaN(obj);
}

// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}

// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}

// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
function has(obj, path) {
  if (!isArray(path)) {
    return _has(obj, path);
  }
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (obj == null || !hasOwnProperty.call(obj, key)) {
      return false;
    }
    obj = obj[key];
  }
  return !!length;
}

// Utility Functions
// -----------------

// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}

// Predicate-generating functions. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}

function noop(){}

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
function property(path) {
  if (!isArray(path)) {
    return shallowProperty(path);
  }
  return function(obj) {
    return deepGet(obj, path);
  };
}

// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) {
    return function(){};
  }
  return function(path) {
    return !isArray(path) ? obj[path] : deepGet(obj, path);
  };
}

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = optimizeCb(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}

// Return a random integer between min and max (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// A (possibly faster) way to get the current timestamp as an integer.
var now = Date.now || function() {
  return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
var unescapeMap = invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + keys(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var escape = createEscaper(escapeMap);
var unescape = createEscaper(unescapeMap);

// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  if (!isArray(path)) path = [path];
  var length = path.length;
  if (!length) {
    return isFunction(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = isFunction(prop) ? prop.call(obj) : prop;
  }
  return obj;
}

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
var templateSettings = _.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};

// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function(match) {
  return '\\' + escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = defaults({}, settings, _.templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  // If a variable is not specified, place data values in local scope.
  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(settings.variable || 'obj', '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _);
  };

  // Provide the compiled source as a convenience for precompilation.
  var argument = settings.variable || 'obj';
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}

// Add a "chain" function. Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = _(obj);
  instance._chain = true;
  return instance;
}

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.

// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}

// Add your own custom functions to the Underscore object.
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}

// Add all mutator Array functions to the wrapper.
each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = ArrayProto[name];
  _.prototype[name] = function() {
    var obj = this._wrapped;
    method.apply(obj, arguments);
    if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
    return chainResult(this, obj);
  };
});

// Add all accessor Array functions to the wrapper.
each(['concat', 'join', 'slice'], function(name) {
  var method = ArrayProto[name];
  _.prototype[name] = function() {
    return chainResult(this, method.apply(this._wrapped, arguments));
  };
});

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/lib/parsons_converter.js":
/*!***********************************************!*\
  !*** ./resources/js/lib/parsons_converter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParsonsConverter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParsonsConverter = /*#__PURE__*/function () {
  function ParsonsConverter() {
    _classCallCheck(this, ParsonsConverter);
  }

  _createClass(ParsonsConverter, null, [{
    key: "buildParsonString",
    value: function buildParsonString(parsonObject) {
      var parsonString = "";
      parsonObject.forEach(function (parsonRule) {
        // console.log(parsonRule);
        parsonString += "".concat(' '.repeat(parsonRule["ident"])).concat(parsonRule["rule"]); // ${parsonRule["distractor"] ? " #distractor" : ""}\n`

        if (parsonRule.distractor) {
          parsonString += "  #distractor";
        }

        if (parsonRule.vitalElement) {
          parsonString += "  #vital";
        }

        if (parsonRule["static"]) {
          parsonString += "  #static";
        }

        parsonString += "\n";
      }); // console.log(parsonString);

      return parsonString;
    }
  }, {
    key: "convertParsonString",
    value: function convertParsonString(parsonString) {
      var resultingObject = [];
      parsonString.split("\n").forEach(function (row) {
        // console.log(row);
        if (row.length === 0) {
          return;
        }

        var distractor = row.search("#distractor") !== -1; // console.log(distractor);

        if (distractor) {
          row = row.split("#distractor")[0];
        }

        resultingObject.push({
          "rule": row.trim(),
          "ident": row.match(/^\s*/)[0].length,
          "distractor": distractor
        });
      }); // console.log(resultingObject);

      return resultingObject;
    }
  }]);

  return ParsonsConverter;
}();



/***/ }),

/***/ "./resources/js/parsons_lib/AbstractGrader.js":
/*!****************************************************!*\
  !*** ./resources/js/parsons_lib/AbstractGrader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractGrader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractGrader = /*#__PURE__*/function () {
  function AbstractGrader(parson) {
    _classCallCheck(this, AbstractGrader);

    this.parson = parson;
    this.pythonIndents = [];
    var spaces = "";

    for (var counter = 0; counter < 20; counter++) {
      this.pythonIndents[counter] = spaces;
      spaces += "  ";
    }
  }

  _createClass(AbstractGrader, [{
    key: "type",
    value: function type() {
      return "AbstractGrader";
    }
  }, {
    key: "grade",
    value: function grade(studentCode) {
      throw "Calling Abstract Method";
    } // Executes the given Python code and returns an object with two properties:
    //  mainmod: the result of Skulpt importMainWithBody call with the given code
    //  output: the output of the program
    // Note, that the Skulpt execution can throw an exception, which will not be handled
    // by this function, so the caller should take care of that.

  }, {
    key: "_python_exec",
    value: function _python_exec(code) {
      var _output = ""; // function for reading python imports with skulpt

      function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
      } // configure Skulpt


      Sk.execLimit = this.parson.options.exec_limit || 2500; // time limit for the code to run

      Sk.configure({
        output: function output(str) {
          _output += str;
        },
        python3: this.parson.options.python3 || false,
        read: builtinRead
      });
      return {
        mainMod: Sk.importMainWithBody("stdin", false, code, false),
        output: _output
      };
    }
  }, {
    key: "_variablesAfterExecution",
    // Executes the given code using Skulpt and returns an object with variable
    // values of the variables given in the variables array.
    // Possible errors will be in the _error property of the returned object.
    // Output of the code will be in _output property of the result.
    // Example: this._variablesAfterExecution("x=0\ny=2\nprint x", ["x", "y"])
    //    will return object {"x": 0, "y": 2, "_output": "0"}
    value: function _variablesAfterExecution(code, variables) {
      var output = "";
      var execResult;
      var mainMod;
      var result = {
        'variables': {}
      };
      var varName;

      try {
        execResult = this._python_exec(code);
      } catch (e) {
        return {
          "_output": output,
          "_error": "" + e
        };
      }

      mainMod = execResult.mainMod;

      for (var i = 0; i < variables.length; i++) {
        varName = variables[i];
        result.variables[varName] = mainMod.tp$getattr(varName);
      }

      result._output = execResult.output;
      return result;
    }
  }, {
    key: "stripLineNumberIfNeeded",
    // Fix or strip line numbers in the (error) message
    // Basically removes the number of lines in prependCode from the line number shown.
    value: function stripLineNumberIfNeeded(msg, prependCode, studentCode) {
      var lineNbrRegexp = /.*on line ([0-9]+).*/; // function that fixes the line numbers in student feedback

      var match = msg.match(lineNbrRegexp);

      if (match) {
        var lineNo = parseInt(match[1], 10),
            lowerLimit = prependCode ? prependCode.split('\n').length : 0,
            upperLimit = lowerLimit + studentCode.split('\n').length - 1; // if error in prepended code or tests, remove the line number

        if (lineNo <= lowerLimit || lineNo > upperLimit) {
          return msg.replace(' on line ' + lineNo, '');
        } else if (lowerLimit > 0) {
          // if error in student code, make sure the line number matches student lines
          return msg.replace(' on line ' + lineNo, ' on line ' + (lineNo - lowerLimit));
        }
      }

      return msg;
    }
  }, {
    key: "_codelinesAsString",
    //Return executable code in one string
    value: function _codelinesAsString() {
      var student_code = this.parson.getModifiedCode("#ul-" + this.parson.options.sortableId);
      var executableCode = "";
      var that = this;
      $.each(student_code, function (index, item) {
        // split codeblocks on br elements
        var lines = $("#" + item.id).html().split(/<br\s*\/?>/); // go through all the lines

        for (var i = 0; i < lines.length; i++) {
          // add indents and get the text for the line (to remove the syntax highlight html elements)
          executableCode += that.pythonIndents[item.indent] + $("<span>" + lines[i] + "</span>").text() + "\n";
        }
      });
      return executableCode;
    }
  }]);

  return AbstractGrader;
}();



/***/ }),

/***/ "./resources/js/parsons_lib/LanguageTranslationGrader.js":
/*!***************************************************************!*\
  !*** ./resources/js/parsons_lib/LanguageTranslationGrader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageTranslationGrader; });
/* harmony import */ var _AbstractGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractGrader */ "./resources/js/parsons_lib/AbstractGrader.js");
/* harmony import */ var _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitTestGrader */ "./resources/js/parsons_lib/UnitTestGrader.js");
/* harmony import */ var _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableCheckGrader */ "./resources/js/parsons_lib/VariableCheckGrader.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // Code "Translating" grader

var LanguageTranslationGrader = /*#__PURE__*/function (_AbstractGrader) {
  _inherits(LanguageTranslationGrader, _AbstractGrader);

  function LanguageTranslationGrader(parson) {
    var _this;

    _classCallCheck(this, LanguageTranslationGrader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LanguageTranslationGrader).call(this, parson));
    _this._languageBlocks = {}; // specify the blocks for the pseudo language as a simple example case

    _this._languageBlocks["pseudo"] = {
      open: {
        "^\s*IF.*THEN\s*$": "IF",
        "^\s*ELSE\s*$": "IF",
        // IF
        "^\s*WHILE.*DO\s*$": "WHILE",
        // WHILE
        "^\s*REPEAT.*TIMES\s*$": "REPEAT..TIMES",
        "^\s*REPEAT\s*$": "REPEAT",
        // REPEAT ... UNTIL
        "^\s*FOR.*DO\s*$": "FOR",
        "^\s*FOR.*TO.*\s*$": "FOR",
        "^\s*MODULE.*\\)\s*$": "MODULE",
        "^\s*MODULE.*RETURNS.*$": "MODULE",
        "^\s*DO\s*$": "DO..WHILE"
      },
      close: {
        "^\s*ELSE\s*$": "IF",
        "^\s*ENDIF\s*$": "IF",
        // ENDIF
        "^\s*ENDWHILE\s*$": "WHILE",
        "^\s*ENDREPEAT\s*$": "REPEAT..TIMES",
        "^\s*UNTIL.*\s*$": "REPEAT",
        "^\s*ENDFOR\s*$": "FOR",
        "^\s*ENDMODULE\s*$": "MODULE",
        "^\s*WHILE(?!.*DO)": "DO..WHILE"
      }
    };
    _this._languageBlocks["java"] = {
      open: {
        "^.*\{\s*$": "block"
      },
      close: {
        "^.*\}\s*$": "block"
      }
    };
    return _this;
  }

  _createClass(LanguageTranslationGrader, [{
    key: "type",
    value: function type() {
      return "LanguageTranslationGrader";
    }
  }, {
    key: "grade",
    value: function grade() {
      var studentCode = this.parson.normalizeIndents(this.parson.getModifiedCode("#ul-" + this.parson.options.sortableId)); // Check opening and closing blocks.
      // The block_open and block_close are expected to be maps with regexps as properties and
      // names of blocks as the property values. For example, a pseudocode IF..THEN..ELSE..ENDIF
      // blocks can be defined like this:
      //    open = {"^\s*IF.*THEN\s*$": "IF", "^\s*ELSE\s*$":"IF"};
      //    close = {"^s*ELSE\s*$": "IF", "^\s*ENDIF\s*$": "IF"};

      var open = this.parson.options.block_open;
      var close = this.parson.options.block_close;
      var blockErrors = [];
      var progLang = this.parson.options.programmingLang;

      if (progLang && this._languageBlocks[progLang]) {
        open = $.extend({}, open, this._languageBlocks[progLang].open);
        close = $.extend({}, close, this._languageBlocks[progLang].close);
      }

      if (open && close) {
        // check blocks only if block definitions are given
        var blocks = [];
        var prevIndent = 0; // keep track of previous indent inside blocks

        var minIndent = 0; // minimum indent needed inside newly opened blocks
        // go through all student code lines

        for (var i = 0; i < studentCode.length; i++) {
          var isClose = false; // was a new blocks opened on this line

          var isOpen = false; // was a block closed on this line

          var item = studentCode[i];
          var line = $("#" + item.id).text().trim(); // code of the line

          var topBlock = void 0;
          var bO = void 0; // Check if a proper indentation or the line was found in normalizeIndents
          // -1 will mean no matching indent was found

          if (item.indent < 0) {
            blockErrors.push(this.parson.translations.no_matching(i + 1));
            $("#" + item.id).addClass("incorrectIndent");
            break; // break on error
          } // Go through all block closing regexps and test if they match
          // Some lines can both close and open a block (such as else), so the
          // closing blocks need to be handled first


          for (var blockClose in close) {
            if (!close.hasOwnProperty(blockClose)) {
              continue;
            }

            if (new RegExp(blockClose).test(line)) {
              isClose = true;
              topBlock = blocks.pop();

              if (!topBlock) {
                blockErrors.push(this.parson.translations.no_matching_open(i + 1, close[blockClose]));
                $("#" + item.id).addClass("incorrectPosition");
              } else if (close[blockClose] !== topBlock.name) {
                // incorrect closing block
                blockErrors.push(this.parson.translations.block_close_mismatch(i + 1, close[blockClose], topBlock.line, topBlock.name));
                $("#" + item.id).addClass("incorrectPosition");
              } else if (studentCode[i].indent !== topBlock.indent) {
                // incorrect indent
                blockErrors.push(this.parson.translations.no_matching(i + 1));
                $("#" + item.id).addClass("incorrectIndent");
              }

              prevIndent = topBlock ? topBlock.indent : 0;
              minIndent = 0;
              break; // only one block can be closed on a single line
            }
          } // Go through all block opening regexps and test if they match


          for (var blockOpen in open) {
            if (!open.hasOwnProperty(blockOpen)) {
              continue;
            }

            if (new RegExp(blockOpen).test(line)) {
              isOpen = true;
              bO = {
                name: open[blockOpen],
                indent: studentCode[i].indent,
                line: i + 1,
                item: item
              };
              blocks.push(bO);
              prevIndent = 0;
              minIndent = bO.indent;
              break; // only one block can be opened on a single line
            }
          } // if not opening or closing a block, check block indentation


          if (!isClose && !isOpen && blocks.length > 0) {
            // indentation should match previous indent if inside block
            // and be greater than the indent of the block opening the block (minIndent)
            if (prevIndent && studentCode[i].indent !== prevIndent || studentCode[i].indent <= minIndent) {
              blockErrors.push(this.parson.translations.no_matching(i + 1));
              $("#" + item.id).addClass("incorrectIndent");
            }

            prevIndent = studentCode[i].indent;
          } // if we have errors, clear the blocks and exit from the loop


          if (blockErrors.length > 0) {
            blocks = [];
            break;
          }
        } // create errors for all blocks opened but not closed


        for (var _i = 0; _i < blocks.length; _i++) {
          blockErrors.push(this.parson.translations.no_matching_close(blocks[_i].line, blocks[_i].name));
          $("#" + blocks[_i].item.id).addClass("incorrectPosition");
        }
      } // if there were errors in the blocks, give feedback and don't execute the code


      if (blockErrors.length > 0) {
        var feedback = "<div class='testcase fail'>";
        var feedbackMessage = "";

        for (var _i2 = 0; _i2 < blockErrors.length; _i2++) {
          feedbackMessage += blockErrors[_i2] + "</br>";
        }

        feedback += this.parson.translations.unittest_error(feedbackMessage);
        feedback += "</div>";
        return {
          html: feedback,
          success: false
        };
      } // Replace codelines show with codelines to be executed


      var code = this._replaceCodelines(); // run unit tests or variable check grader


      if (this.parson.options.unittests) {
        return new _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__["default"](this.parson).grade(code);
      } else {
        return new _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__["default"](this.parson).grade(code);
      }
    }
  }, {
    key: "_replaceCodelines",
    // Replaces codelines in the student's solution with the codelines
    // specified in the executable_code option of the parsons_problems widget.
    // The executable_code option can be an array of lines or a string (in
    // which case it will be split on newline.
    // For each line in the model solution, there should be a matching line
    // in the executable_code.
    value: function _replaceCodelines() {
      var student_code = this.parson.normalizeIndents(this.parson.getModifiedCode("#ul-" + this.parson.options.sortableId));
      var executableCodeString = "";
      var executableCode = this.parson.options.executable_code;
      var that = this;

      if (typeof executableCode === "string") {
        executableCode = executableCode.split("\n");
      } // replace each line with in solution with the corresponding line in executable code


      var toggleRegexp = new RegExp("\\$\\$toggle(".concat(this.parson.options.toggleSeparator, ".*?)?\\$\\$"), "g");
      $.each(student_code, function (index, item) {
        var ind = parseInt(item.id.replace(that.parson.idPrefix, ''), 10); // Handle toggle elements. Expects the toggle areas in executable code to be marked
        // with $$toggle$$ and there to be as many toggles in executable code than in the
        // code shown to learner.

        var execLine = executableCode[ind];
        var toggles = execLine.match(toggleRegexp);

        if (toggles) {
          for (var i = 0; i < toggles.length; i++) {
            var opts = toggles[i].substring(10, toggles[i].length - 2).split(that.parson.options.toggleSeparator);

            if (opts.length >= 1 && opts[0] !== "$$") {
              // replace the toggle content with Python executable version as well
              execLine = execLine.replace(toggles[i], opts[item.selectedToggleIndex(i)]);
            } else {
              // use the same content for the toggle in Python
              execLine = execLine.replace(toggles[i], item.toggleValue(i));
            }
          }
        }

        var execLines = execLine.split(/<br\s*\/?>/);

        for (var _i3 = 0; _i3 < execLines.length; _i3++) {
          // add the modified codeLine to the executable code
          executableCodeString += that.pythonIndents[item.indent] + execLines[_i3] + "\n";
        }
      });
      return executableCodeString;
    }
  }]);

  return LanguageTranslationGrader;
}(_AbstractGrader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/parsons_lib/LineBasedGrader.js":
/*!*****************************************************!*\
  !*** ./resources/js/parsons_lib/LineBasedGrader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineBasedGrader; });
/* harmony import */ var _AbstractGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractGrader */ "./resources/js/parsons_lib/AbstractGrader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // The "original" grader for giving line based feedback.

var LineBasedGrader = /*#__PURE__*/function (_AbstractGrader) {
  _inherits(LineBasedGrader, _AbstractGrader);

  function LineBasedGrader(parson) {
    var _this;

    _classCallCheck(this, LineBasedGrader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineBasedGrader).call(this, parson));
    _this.type = "LineBasedGrader";
    return _this;
  }

  _createClass(LineBasedGrader, [{
    key: "type",
    value: function type() {
      return "LinedBasedGrader";
    }
  }, {
    key: "grade",
    value: function grade(elementId) {
      var shouldMarkIncorrect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var elemId = elementId || this.parson.options.sortableId;
      var studentCode;

      if (shouldMarkIncorrect) {
        studentCode = this.parson.normalizeIndents(this.parson.getModifiedCode("#ul-" + elemId));
      } else {
        studentCode = this.parson.getModifiedCode("#ul-" + elemId);
      }

      studentCode = studentCode.filter(function (item) {
        return item.code !== "";
      });
      var linesToCheck = Math.min(studentCode.length, this.parson.modelSolution.length);
      var errors = [];
      var logErrors = [];
      var incorrectLines = [];
      var studentCodeLineObjects = [];
      var wrongOrder = false;
      var that = this; // Find the line objects for the student's code

      for (var i = 0; i < studentCode.length; i++) {
        studentCodeLineObjects.push(this.parson.getLineById(studentCode[i].id));
      } // This maps codeLine strings to the index, at which starting from 0, we have last
      // found this codeLine. This is used to find the best indices for each
      // codeLine in the student's code for the LIS computation and, for example,
      // assigns appropriate indices for duplicate lines.


      var lastFoundCodeIndex = {};
      $.each(studentCodeLineObjects, function (index, lineObject) {
        // find the first matching line in the model solution
        // starting from where we have searched previously
        var i;

        if (!lineObject) {
          return;
        }

        for (i = typeof lastFoundCodeIndex[lineObject.code] !== 'undefined' ? lastFoundCodeIndex[lineObject.code] + 1 : 0; i < that.parson.modelSolution.length; i++) {
          if (that.parson.modelSolution[i].code === lineObject.code) {
            // found a line in the model solution that matches the student's line
            lastFoundCodeIndex[lineObject.code] = i;
            lineObject.lisIgnore = false; // This will be used in LIS computation

            lineObject.position = i;
            break;
          }
        }

        if (i === that.parson.modelSolution.length) {
          if (typeof lastFoundCodeIndex[lineObject.code] === 'undefined') {
            // Could not find the line in the model solution at all,
            // it must be a distractor
            // => add to feedback, log, and ignore in LIS computation
            wrongOrder = true;

            if (shouldMarkIncorrect) {
              lineObject.markIncorrectPosition();
            }

            incorrectLines.push(lineObject.orig);
            lineObject.lisIgnore = true;
          } else {
            // The line is part of the solution but there are now
            // too many instances of the same line in the student's code
            // => Let's just have their correct position to be the same
            // as the last one actually found in the solution.
            // LIS computation will handle such duplicates properly and
            // choose only one of the equivalent positions to the LIS and
            // extra duplicates are left in the inverse and highlighted as
            // errors.
            // TODO This method will not always give the most intuitive
            // highlights for lines to supposed to be moved when there are
            // several extra duplicates in the student's code.
            lineObject.lisIgnore = false;
            lineObject.position = lastFoundCodeIndex[lineObject.code];
          }
        }
      });
      var lisStudentCodeLineObjects = studentCodeLineObjects.filter(function (lineObject) {
        if (!lineObject) {
          return false;
        }

        return !lineObject.lisIgnore;
      });
      var inv = LIS.best_lise_inverse_indices(lisStudentCodeLineObjects.map(function (lineObject) {
        if (!lineObject) {
          return 0;
        }

        return lineObject.position;
      }));
      $.each(inv, function (_index, lineObjectIndex) {
        // Highlight the lines that could be moved to fix code as defined by the LIS computation
        if (shouldMarkIncorrect) {
          lisStudentCodeLineObjects[lineObjectIndex].markIncorrectPosition();
        }

        incorrectLines.push(lisStudentCodeLineObjects[lineObjectIndex].orig);
      });

      if (inv.length > 0 || incorrectLines.length > 0) {
        wrongOrder = true;
        logErrors.push({
          type: "incorrectPosition",
          lines: incorrectLines
        });
      }

      if (wrongOrder) {
        errors.push(this.parson.translations.order());
      } // Check the number of lines in student's code


      if (this.parson.modelSolution.length < studentCode.length) {
        if (shouldMarkIncorrect) {
          $("#ul-".concat(elemId)).addClass("incorrect");
        }

        errors.push(this.parson.translations.lines_too_many());
        logErrors.push({
          type: "tooManyLines",
          lines: studentCode.length
        });
      } else if (this.parson.modelSolution.length > studentCode.length) {
        if (shouldMarkIncorrect) {
          $("#ul-".concat(elemId)).addClass("incorrect");
        }

        errors.push(this.parson.translations.lines_missing());
        logErrors.push({
          type: "tooFewLines",
          lines: studentCode.length
        });
      } // Finally, check indent if no other errors


      if (!this.parson.options.first_error_only || errors.length === 0) {
        for (var _i = 0; _i < linesToCheck; _i++) {
          var codeLine = studentCode[_i];
          var modelLine = this.parson.modelSolution[_i];

          if (codeLine.indent !== modelLine.indent && (!this.parson.options.first_error_only || errors.length === 0)) {
            if (shouldMarkIncorrect) {
              codeLine.markIncorrectIndent();
            }

            errors.push(this.parson.translations.block_structure(_i + 1));
            logErrors.push({
              type: "incorrectIndent",
              line: _i + 1
            });
          }

          if (codeLine.code === modelLine.code && codeLine.indent === modelLine.indent && (!this.parson.options.first_error_only || errors.length === 0)) {
            codeLine.markCorrect();
          }
        }
      }

      return {
        errors: errors,
        log_errors: logErrors,
        success: errors.length === 0
      };
    }
  }]);

  return LineBasedGrader;
}(_AbstractGrader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/parsons_lib/ParsonsCodeLine.js":
/*!*****************************************************!*\
  !*** ./resources/js/parsons_lib/ParsonsCodeLine.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParsonsCodeLine; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParsonsCodeLine = /*#__PURE__*/function () {
  // Create a line object skeleton with only code and indentation from
  // a code string of an assignment definition string (see parseCode)
  function ParsonsCodeLine(codeString, widget) {
    _classCallCheck(this, ParsonsCodeLine);

    // regexp used for trimming
    var trimRegexp = /^\s*(.*?)\s*$/;
    this.widget = widget;
    this.code = "";
    this.indent = 0;
    this._toggles = [];
    this.distractor = false;
    this.vitalElement = false;
    this["static"] = false;

    if (codeString) {
      // Consecutive lines to be dragged as a single block of code have strings "\\n" to
      // represent newlines => replace them with actual new line characters "\n"
      this.code = codeString.replace(/#distractor\s*$/, "").replace(/#vital\s*$/, "").replace(/#static\s*$/, "").replace(trimRegexp, "$1").replace(/\\n/g, "\n");
      this.indent = codeString.length - codeString.replace(/^\s+/, "").length;
    }
  }

  _createClass(ParsonsCodeLine, [{
    key: "elem",
    value: function elem() {
      // the element will change on shuffle, so we should re-fetch it every time
      return $("#" + this.id);
    }
  }, {
    key: "markCorrect",
    value: function markCorrect() {
      this.elem().addClass(this.widget.FEEDBACK_STYLES.correctPosition);
    }
  }, {
    key: "markIncorrectPosition",
    value: function markIncorrectPosition() {
      this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectPosition);
    }
  }, {
    key: "markIncorrectIndent",
    value: function markIncorrectIndent() {
      this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectIndent);
    }
  }, {
    key: "_addToggles",
    value: function _addToggles() {
      var toggleRegexp = new RegExp("\\$\\$toggle(" + this.widget.options.toggleSeparator + ".*?)?\\$\\$", "g");
      var toggles = this.code.match(toggleRegexp);
      var that = this;
      this._toggles = [];

      if (toggles) {
        var html = this.code;

        for (var i = 0; i < toggles.length; i++) {
          var opts = toggles[i].substring(10, toggles[i].length - 2).split(this.widget.options.toggleSeparator);
          html = html.replace(toggles[i], "<span class='jsparson-toggle' data-jsp-options='" + JSON.stringify(opts).replace("<", "&lt;") + "'></span>");
        }

        this.elem().html(html);
        this.elem().find(".jsparson-toggle").each(function (index, item) {
          that._toggles.push(item);
        });
      }
    }
  }, {
    key: "toggleCount",
    // Returns the number of toggleable elements in this code block
    value: function toggleCount() {
      return this._toggles.length;
    }
  }, {
    key: "selectedToggleIndex",
    // Returns the index of the currently selected toggle option for the
    // toggle element at given index
    value: function selectedToggleIndex(index) {
      if (index < 0 || index >= this._toggles.length) {
        return -1;
      }

      var elem = this._toggles[index];
      var opts = $(elem).data("jsp-options");
      return opts.indexOf(elem.textContent);
    }
  }, {
    key: "toggleValue",
    // Returns the value of the toggleable element at the given index (0-based)
    value: function toggleValue(index) {
      if (index < 0 || index >= this._toggles.length) {
        return undefined;
      }

      return this._toggles[index].textContent;
    }
  }]);

  return ParsonsCodeLine;
}();



/***/ }),

/***/ "./resources/js/parsons_lib/ParsonsWidget.js":
/*!***************************************************!*\
  !*** ./resources/js/parsons_lib/ParsonsWidget.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParsonsWidget; });
/* harmony import */ var _Translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translations */ "./resources/js/parsons_lib/Translations.js");
/* harmony import */ var _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitTestGrader */ "./resources/js/parsons_lib/UnitTestGrader.js");
/* harmony import */ var _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableCheckGrader */ "./resources/js/parsons_lib/VariableCheckGrader.js");
/* harmony import */ var _LineBasedGrader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineBasedGrader */ "./resources/js/parsons_lib/LineBasedGrader.js");
/* harmony import */ var _TurtleGrader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TurtleGrader */ "./resources/js/parsons_lib/TurtleGrader.js");
/* harmony import */ var _LanguageTranslationGrader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LanguageTranslationGrader */ "./resources/js/parsons_lib/LanguageTranslationGrader.js");
/* harmony import */ var _ParsonsCodeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ParsonsCodeLine */ "./resources/js/parsons_lib/ParsonsCodeLine.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var ParsonsWidget = /*#__PURE__*/function () {
  function ParsonsWidget(options) {
    _classCallCheck(this, ParsonsWidget);

    // Contains line objects of the user-draggable code.
    // The order is not meaningful (unchanged from the initial state) but
    // indent property for each line object is updated as the user moves
    // code lines around. (see parseCode for line object description)
    this.modifiedLines = []; // contains line objects of distractors (see parseCode for line object description)

    this.extraLines = []; // contains line objects (see parseCode for line object description)

    this.modelSolution = []; //To collect statistics, feedback should not be based on this

    this.userActions = [];
    this.translations = new _Translations__WEBPACK_IMPORTED_MODULE_0__["default"]().translations; //State history for feedback purposes

    this.statePath = [];
    this.states = {};
    var defaults = {
      'incorrectSound': false,
      'x_indent': 50,
      'can_indent': true,
      'feedback_cb': false,
      'first_error_only': true,
      'max_wrong_lines': 10,
      'lang': 'en',
      'toggleSeparator': '::'
    };
    this.options = jQuery.extend({}, defaults, options);
    this.feedbackExists = false;
    this.idPrefix = this.options['sortableId'] + 'codeline';

    if (this.translations.hasOwnProperty(this.options.lang)) {
      this.translations = this.translations[this.options.lang];
    } else {
      this.translations = this.translations['en'];
    } // translate trash_label and solution_label


    if (!this.options.hasOwnProperty("trash_label")) {
      this.options.trash_label = this.translations.trash_label;
    }

    if (!this.options.hasOwnProperty("solution_label")) {
      this.options.solution_label = this.translations.solution_label;
    }

    this.FEEDBACK_STYLES = {
      'correctPosition': 'correctPosition',
      'incorrectPosition': 'incorrectPosition',
      'correctIndent': 'correctIndent',
      'incorrectIndent': 'incorrectIndent'
    }; // use grader passed as an option if defined and is a function

    if (this.options.grader && _.isFunction(this.options.grader)) {
      this.grader = new this.options.grader(this);
    } else {
      // initialize the grader
      if (typeof this.options["unittests"] !== "undefined") {
        /// unittests are specified
        this.grader = new _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      } else if (typeof this.options.vartests !== "undefined") {
        /// tests for variable values
        this.grader = new _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      } else {
        // "traditional" parson feedback
        this.grader = new _LineBasedGrader__WEBPACK_IMPORTED_MODULE_3__["default"](this);
      }
    }

    this.defaultToggleTypeHandlers = {
      "boolean": ["True", "False"],
      compop: ["<", ">", "<=", ">=", "==", "!="],
      mathop: ["+", "-", "*", "/"],
      boolop: ["and", "or"],
      range: function range($item) {
        var min = parseFloat($item.data("min") || "0"),
            max = parseFloat($item.data("max") || "10"),
            step = parseFloat($item.data("step") || "1"),
            opts = [],
            curr = min;

        while (curr <= max) {
          opts.push("" + curr);
          curr += step;
        }

        return opts;
      }
    };
  }

  _createClass(ParsonsWidget, [{
    key: "createGraders",
    value: function createGraders() {
      this.graders = {};
      this.graders.VariableCheckGrader = _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__["default"];
      this.graders.TurtleGrader = _TurtleGrader__WEBPACK_IMPORTED_MODULE_4__["default"];
      this.graders.UnitTestGrader = _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__["default"];
      this.graders.LanguageTranslationGrader = _LanguageTranslationGrader__WEBPACK_IMPORTED_MODULE_5__["default"];
      this.graders.LineBasedGrader = _LineBasedGrader__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "parseCode",
    ////Public methods
    // Parses an assignment definition given as a string and returns and
    // transforms this into an object defining the assignment with line objects.
    //
    // lines: A string that defines the solution to the assignment and also
    //   any possible distractors
    // max_distractors: The number of distractors allowed to be included with
    //   the lines required in the solution
    value: function parseCode(lines, maxDistractors) {
      var distractors = [];
      var indented = [];
      var widgetData = [];
      var lineObject;
      var errors = [];
      var that = this; // Create line objects out of each codeline and separate
      // lines belonging to the solution and distractor lines
      // Fields in line objects:
      //   code: a string of the code, may include newline characters and
      //     thus in fact represents a block of consecutive lines
      //   indent: indentation level, -1 for distractors
      //   distractor: boolean whether this is a distractor
      //   orig: the original index of the line in the assignment definition string,
      //     for distractors this is not meaningful but for lines belonging to the
      //     solution, this is their expected position

      $.each(lines, function (index, item) {
        lineObject = new _ParsonsCodeLine__WEBPACK_IMPORTED_MODULE_6__["default"](item, that);
        lineObject.orig = index;

        if (item.search(/#distractor\s*$/) >= 0) {
          // This line is a distractor
          lineObject.indent = -1;
          lineObject.distractor = true;

          if (lineObject.code.length > 0) {
            // The line is non-empty, not just whitespace
            distractors.push(lineObject);
          }
        } else {
          // This line is part of the solution
          // Initialize line object with code and indentation properties
          if (lineObject.code.length > 0) {
            // The line is non-empty, not just whitespace
            lineObject.distractor = false;
            indented.push(lineObject);
          }
        }

        if (item.search(/#vital\s*$/) >= 0) {
          lineObject.vitalElement = true;
        }

        if (item.search(/#static\s*$/) >= 0) {
          lineObject["static"] = true;
        }
      });
      var normalized = this.normalizeIndents(indented);
      $.each(normalized, function (index, item) {
        if (item.indent < 0) {
          // Indentation error
          errors.push(this.translations.no_matching(normalized.orig));
        }

        widgetData.push(item);
      }); // Remove extra distractors if there are more alternative distrators
      // than should be shown at a time

      var permutation = this.getRandomPermutation(distractors.length);
      var selectedDistractors = [];

      for (var i = 0; i < maxDistractors; i++) {
        selectedDistractors.push(distractors[permutation[i]]);
        widgetData.push(distractors[permutation[i]]);
      }

      return {
        // an array of line objects specifying  the solution
        solution: $.extend(true, [], normalized),
        // an array of line objects specifying the requested number
        // of distractors (not all possible alternatives)
        distractors: $.extend(true, [], selectedDistractors),
        // an array of line objects specifying the initial code arrangement
        // given to the user to use in constructing the solution
        widgetInitial: $.extend(true, [], widgetData),
        errors: errors
      };
    }
  }, {
    key: "init",
    value: function init(text) {
      // TODO: Error handling, parseCode may return errors in an array in property named errors.
      var initialStructures = this.parseCode(text.split("\n"), this.options.max_wrong_lines);
      this.modelSolution = initialStructures.solution;
      this.extraLines = initialStructures.distractors;
      this.modifiedLines = initialStructures.widgetInitial;
      var idPrefix = this.idPrefix; // Add ids to the line objects in the user-draggable lines

      $.each(this.modifiedLines, function (index, item) {
        item.id = idPrefix + index;
        item.indent = 0;
      });
    }
  }, {
    key: "getHash",
    value: function getHash(searchString) {
      var hash = [];
      var ids = $(searchString).sortable('toArray');
      var line;

      for (var i = 0; i < ids.length; i++) {
        if (!ids[i].includes("Empty")) {
          line = this.getLineById(ids[i]);
          hash.push(line.orig + "_" + line.indent);
        }
      } //prefix with something to handle empty output situations


      if (hash.length === 0) {
        return "-";
      } else {
        return hash.join("-");
      }
    }
  }, {
    key: "solutionHash",
    value: function solutionHash() {
      return this.getHash("#ul-" + this.options.sortableId);
    }
  }, {
    key: "trashHash",
    value: function trashHash() {
      return this.getHash("#ul-" + this.options.trashId);
    }
  }, {
    key: "whatWeDidPreviously",
    value: function whatWeDidPreviously() {
      var hash = this.solutionHash();
      var previously = this.states[hash];

      if (!previously) {
        return undefined;
      }

      var visits = _.filter(this.statePath, function (state) {
        return state === hash;
      }).length - 1;
      var stepsToLast = 0;
      var s;
      var outputStepTypes = ['removeOutput', 'addOutput', 'moveOutput'];

      for (var i = this.statePath.length - 2; i > 0; i--) {
        s = this.states[this.statePath[i]];

        if (s && outputStepTypes.indexOf(s.type) !== -1) {
          stepsToLast++;
        }

        if (hash === this.statePath[i]) {
          break;
        }
      }

      return $.extend(false, {
        'visits': visits,
        stepsToLast: stepsToLast
      }, previously);
    }
  }, {
    key: "_getToggleStates",

    /**
     * Returns states of the toggles for logging purposes
     */
    value: function _getToggleStates() {
      var context = $("#" + this.options.sortableId + ", #" + this.options.trashId);
      var toggles = $(".jsparson-toggle", context);
      var toggleStates = {};
      $("#" + this.options.sortableId + " .jsparson-toggle").each(function () {
        if (!toggleStates.output) {
          toggleStates.output = [];
        }

        toggleStates.output.push($(this).text());
      });

      if (this.options.trashId) {
        toggleStates.input = [];
        $("#" + this.options.trashId + " .jsparson-toggle").each(function () {
          toggleStates.input.push($(this).text());
        });
      }

      if (toggleStates.output && toggleStates.output.length > 0 || toggleStates.input && toggleStates.input.length > 0) {
        return toggleStates;
      } else {
        return undefined;
      }
    }
  }, {
    key: "addLogEntry",
    value: function addLogEntry(entry) {
      var state;
      var previousState;
      var logData = {
        time: new Date(),
        output: this.solutionHash(),
        type: "action"
      };

      if (this.options.trashId) {
        logData.input = this.trashHash();
      }

      if (entry.target) {
        entry.target = entry.target.replace(this.idPrefix, "");
      } // add toggle states to log data if there are toggles


      var toggles = this._getToggleStates();

      if (toggles) {
        logData.toggleStates = toggles;
      }

      state = logData.output;
      jQuery.extend(logData, entry);
      this.userActions.push(logData); //Updating the state history

      if (this.statePath.length > 0) {
        previousState = this.statePath[this.statePath.length - 1];
        this.states[previousState] = logData;
      } //Add new item to the state path only if new and previous states are not equal


      if (this.statePath[this.statePath.length - 1] !== state) {
        this.statePath.push(state);
      } // callback for reacting to actions


      if ($.isFunction(this.options.action_cb)) {
        this.options.action_cb.call(this, logData);
      }
    }
  }, {
    key: "updateIndent",

    /**
     * Update indentation of a line based on new coordinates
     * leftDiff horizontal difference from (before and after drag) in px
     ***/
    value: function updateIndent(leftDiff, id) {
      var codeLine = this.getLineById(id);
      var newIndent = this.options.can_indent ? codeLine.indent + Math.floor(leftDiff / this.options.x_indent) : 0;
      newIndent = Math.max(0, newIndent);
      codeLine.indent = newIndent;
      return newIndent;
    }
  }, {
    key: "getLineById",
    // Get a line object by the full id including id prefix
    // (see parseCode for description of line objects)
    value: function getLineById(id) {
      var index = -1;

      for (var i = 0; i < this.modifiedLines.length; i++) {
        if (this.modifiedLines[i].id === id) {
          index = i;
          break;
        }
      }

      return this.modifiedLines[index];
    }
  }, {
    key: "normalizeIndents",
    // Check and normalize code indentation.
    // Does not use the current object (this) to make changes to
    // the parameter.
    // Returns a new array of line objects whose indent fields' values
    // may be different from the argument. If indentation does not match,
    // i.e. code is malformed, value of indent may be -1.
    // For example, the first line may not be indented.
    value: function normalizeIndents(lines) {
      var normalized = [];
      var newLine;

      var matchIndent = function matchIndent(index) {
        //return line index from the previous lines with matching indentation
        for (var i = index - 1; i >= 0; i--) {
          if (lines[i].indent === lines[index].indent) {
            return normalized[i].indent;
          }
        }

        return -1;
      };

      for (var i = 0; i < lines.length; i++) {
        //create shallow copy from the line object
        newLine = jQuery.extend({}, lines[i]);
        var parsonCodeLineFunctions = Object.getOwnPropertyNames(Object.getPrototypeOf(lines[i]));

        for (var f in parsonCodeLineFunctions) {
          newLine[parsonCodeLineFunctions[f]] = lines[i][parsonCodeLineFunctions[f]];
        }

        if (i === 0) {
          newLine.indent = 0;

          if (lines[i].indent !== 0) {
            newLine.indent = -1;
          }
        } else if (lines[i].indent === lines[i - 1].indent) {
          newLine.indent = normalized[i - 1].indent;
        } else if (lines[i].indent > lines[i - 1].indent) {
          newLine.indent = normalized[i - 1].indent + 1;
        } else {
          // indentation can be -1 if no matching indentation exists, i.e. IndentationError in Python
          newLine.indent = matchIndent(i);
        }

        normalized[i] = newLine;
      }

      return normalized;
    }
  }, {
    key: "getModifiedCode",

    /**
     * Retrieve the code lines based on what is in the DOM
     *
     * TODO(petri) refactor to UI
     * */
    value: function getModifiedCode(searchString) {
      //ids of the the modified code
      var linesToReturn = [];
      var solutionIds = $(searchString).sortable('toArray');
      var item;
      console.log(solutionIds.length);

      for (var i = 0; i < solutionIds.length; i++) {
        if (!solutionIds[i].includes("Empty")) {
          item = this.getLineById(solutionIds[i]);
          linesToReturn.push($.extend(new _ParsonsCodeLine__WEBPACK_IMPORTED_MODULE_6__["default"](), item));
        } else {
          linesToReturn.push(new _ParsonsCodeLine__WEBPACK_IMPORTED_MODULE_6__["default"]());
        }
      }

      return linesToReturn;
    }
  }, {
    key: "hashToIDList",
    value: function hashToIDList(hash) {
      var lineValues;
      var h;

      if (hash === "-" || hash === "" || hash === null) {
        h = [];
      } else {
        h = hash.split("-");
      }

      var ids = [];

      for (var i = 0; i < h.length; i++) {
        lineValues = h[i].split("_");
        ids.push(this.modifiedLines[lineValues[0]].id);
      }

      return ids;
    }
  }, {
    key: "updateIndentsFromHash",
    value: function updateIndentsFromHash(hash) {
      var lineValues;
      var h;

      if (hash === "-" || hash === "" || hash === null) {
        h = [];
      } else {
        h = hash.split("-");
      }

      var ids = [];

      for (var i = 0; i < h.length; i++) {
        lineValues = h[i].split("_");
        this.modifiedLines[lineValues[0]].indent = Number(lineValues[1]);
        this.updateHTMLIndent(this.modifiedLines[lineValues[0]].id);
      }

      return ids;
    }
  }, {
    key: "displayError",

    /**
     * TODO(petri) refoctor to UI
     */
    value: function displayError(message) {
      if (this.options.incorrectSound && $.sound) {
        $.sound.play(this.options.incorrectSound);
      }

      alert(message);
    }
  }, {
    key: "colorFeedback",
    value: function colorFeedback(elemId) {
      return new _LineBasedGrader__WEBPACK_IMPORTED_MODULE_3__["default"](this).grade(elemId);
    }
  }, {
    key: "getFeedback",

    /**
     * @return
     * TODO(petri): Separate UI from here
     */
    value: function getFeedback() {
      this.feedbackExists = true;
      var fb = this.grader.grade();
      console.log(fb);

      if (this.options.feedback_cb) {
        this.options.feedback_cb(fb); //TODO(petri): what is needed?
      } // if answer is correct, mark it in the UI


      if (fb.success) {} //$("#ul-" + this.options.sortableId).addClass("correct");
      // log the feedback and return; based on the type of grader


      if ('html' in fb) {
        // unittest/vartests type feedback
        this.addLogEntry({
          type: "feedback",
          tests: fb.tests,
          success: fb.success
        });
        return {
          feedback: fb.html,
          success: fb.success
        };
      } else {
        this.addLogEntry({
          type: "feedback",
          errors: fb.log_errors,
          success: fb.success
        });
        return fb.errors;
      }
    }
  }, {
    key: "clearFeedback",
    value: function clearFeedback() {
      if (this.feedbackExists) {
        var li_elements = $("#ul-" + this.options.sortableId + " li");
        $.each(this.FEEDBACK_STYLES, function (index, value) {
          li_elements.removeClass(value);
        });
      }

      this.feedbackExists = false;
    }
  }, {
    key: "getRandomPermutation",
    value: function getRandomPermutation(n) {
      var permutation = [];

      for (var i = 0; i < n; i++) {
        permutation.push(i);
      }

      var swap1;
      var swap2;
      var tmp;

      for (var _i = 0; _i < n; _i++) {
        swap1 = Math.floor(Math.random() * n);
        swap2 = Math.floor(Math.random() * n);
        tmp = permutation[swap1];
        permutation[swap1] = permutation[swap2];
        permutation[swap2] = tmp;
      }

      return permutation;
    }
  }, {
    key: "shuffleLines",
    value: function shuffleLines() {
      var permutation = (this.options["permutation"] ? this.options["permutation"] : this.getRandomPermutation)(this.modifiedLines.length);
      var idList = [];

      for (var i in permutation) {
        if (permutation.hasOwnProperty(i)) {
          idList.push(this.modifiedLines[permutation[i]].id);
        }
      }

      if (this.options.trashId) {
        this.createHTMLFromLists([], idList);
      } else {
        this.createHTMLFromLists(idList, []);
      }

      this.addToggleableElements(); //TODO: Port this function

      this.checkStaticPieces();
    }
  }, {
    key: "createHTMLFromHashes",
    value: function createHTMLFromHashes(solutionHash, trashHash) {
      var solution = this.hashToIDList(solutionHash);
      var trash = this.hashToIDList(trashHash);
      this.createHTMLFromLists(solution, trash);
      this.updateIndentsFromHash(solutionHash);
    }
  }, {
    key: "updateHTMLIndent",
    value: function updateHTMLIndent(codeLineID) {
      var line = this.getLineById(codeLineID);
      $('#' + codeLineID).css("margin-left", this.options.x_indent * line.indent + "px");
    }
  }, {
    key: "codeLineToHTML",
    value: function codeLineToHTML(codeLine) {
      //return '<li id="' + codeLine.id + '" class="prettyprint lang-py">' + codeLine.code + '<\/li>';
      return "<li id=".concat(codeLine.id, "> <pre><code class=\"python\">").concat(codeLine.code, "</code></pre></li>");
    }
  }, {
    key: "emptyLineToHTML",
    value: function emptyLineToHTML(index) {
      return "<li id=sortableCodeLineEmpty".concat(index, " data-is-empty=\"true\"> <pre><code class=\"python\"></code></pre></li>");
    }
  }, {
    key: "codeLinesToHTML",
    value: function codeLinesToHTML(codeLineIDs, destinationID) {
      var lineHTML = [];

      for (var id in codeLineIDs) {
        var line = this.getLineById(codeLineIDs[id]);
        lineHTML.push(this.codeLineToHTML(line));
      }

      return '<ul id="ul-' + destinationID + '">' + lineHTML.join('') + '</ul>';
    }
  }, {
    key: "createHTMLFromLists",

    /** modifies the DOM by inserting exercise elements into it */
    value: function createHTMLFromLists(solutionIDs, trashIDs) {
      var html;

      if (this.options.trashId) {
        html = (this.options.trash_label ? '<p>' + this.options.trash_label + '</p>' : '') + this.codeLinesToHTML(trashIDs, this.options.trashId);
        $("#" + this.options.trashId).html(html);
        html = (this.options.solution_label ? '<p>' + this.options.solution_label + '</p>' : '') + this.codeLinesToHTML(solutionIDs, this.options.sortableId);
        $("#" + this.options.sortableId).html(html);
      } else {
        html = this.codeLinesToHTML(solutionIDs, this.options.sortableId);
        $("#" + this.options.sortableId).html(html);
      }

      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
      var that = this;
      var sortable = $("#ul-" + this.options.sortableId).sortable({
        start: function start() {
          that.clearFeedback();
        },
        stop: function stop(event, ui) {
          if ($(event.target)[0] != ui.item.parent()[0]) {
            return;
          }

          that.updateIndent(ui.position.left - ui.item.parent().position().left, ui.item[0].id);
          that.updateHTMLIndent(ui.item[0].id);
          that.addLogEntry({
            type: "moveOutput",
            target: ui.item[0].id
          }, true);
        },
        receive: function receive(event, ui) {
          var ind = that.updateIndent(ui.position.left - ui.item.parent().position().left, ui.item[0].id);
          that.updateHTMLIndent(ui.item[0].id);
          that.addLogEntry({
            type: "addOutput",
            target: ui.item[0].id
          }, true);
        },
        grid: that.options.can_indent ? [that.options.x_indent, 1] : false
      });
      sortable.addClass("output");

      if (this.options.trashId) {
        var trash = $("#ul-" + this.options.trashId).sortable({
          connectWith: sortable,
          start: function start() {
            that.clearFeedback();
          },
          receive: function receive(event, ui) {
            if (ui.item[0].id.includes("Empty")) {
              ui.item[0].remove();
            } else {
              that.getLineById(ui.item[0].id).indent = 0;
              that.updateHTMLIndent(ui.item[0].id);
              that.addLogEntry({
                type: "removeOutput",
                target: ui.item[0].id
              }, true);
            }
          },
          stop: function stop(event, ui) {
            if ($(event.target)[0] !== ui.item.parent()[0]) {
              // line moved to output and logged there
              return;
            }

            that.addLogEntry({
              type: "moveInput",
              target: ui.item[0].id
            }, true);
          }
        });
        sortable.sortable('option', 'connectWith', trash);
      } // Log the original codelines in the exercise in order to be able to
      // match the input/output hashes to the code later on. We need only a
      // few properties of the codeline objects


      var bindings = [];

      for (var i = 0; i < this.modifiedLines.length; i++) {
        var line = this.modifiedLines[i];
        bindings.push({
          code: line.code,
          distractor: line.distractor
        });
      }

      this.addLogEntry({
        type: 'init',
        time: new Date(),
        bindings: bindings
      });
    }
  }, {
    key: "checkStaticPieces",
    value: function checkStaticPieces() {
      var sortableList = $("#ul-sortable");
      this.modifiedLines.forEach(function (line, index) {
        if (line["static"]) {
          var lineElement = $("#".concat(line.id));
          lineElement.detach().appendTo(sortableList);
        }
      });
    }
  }, {
    key: "binDistractors",
    value: function binDistractors() {
      var _this = this;

      var extraLineIDs = [];
      this.extraLines.forEach(function (line) {
        return extraLineIDs.push(line.id);
      });
      var html = this.codeLinesToHTML(extraLineIDs, "removedDistractors");
      $("#removedDistractors").html(html);
      $("#ul-sortable").children().each(function (_, element) {
        if (_this.getLineById(element.id).distractor) {
          element.remove();
        }
      });
      $("#ul-sortableTrash").children().each(function (_, element) {
        if (_this.getLineById(element.id).distractor) {
          element.remove();
        }
      });
    }
  }, {
    key: "partlySolveExercise",
    value: function partlySolveExercise() {
      var _this2 = this;

      var sortableList = $("#ul-sortable");
      sortableList.children().each(function (_, element) {
        if (element.dataset.isEmpty) {
          element.remove();
        }
      });
      this.modifiedLines.forEach(function (line, index) {
        if (!line.distractor) {
          var lineElement = $("#".concat(line.id));

          if (line.vitalElement) {
            sortableList.append(_this2.emptyLineToHTML(index));
          } else {
            lineElement.detach().appendTo(sortableList);
          }
        }
      });
    }
  }, {
    key: "showCorrectness",
    value: function showCorrectness() {
      this.grader.grade(null, false);
    }
  }, {
    key: "addToggleableElements",
    value: function addToggleableElements() {
      for (var i = 0; i < this.modifiedLines.length; i++) {
        this.modifiedLines[i]._addToggles();
      } // toggleable elements are only enabled for unit tests


      if (!this.options.unittests && !this.options.vartests) {
        return;
      }

      var handlers = $.extend(this.defaultToggleTypeHandlers, this.options.toggleTypeHandlers);
      var context = $("#".concat(this.options.sortableId, ", #").concat(this.options.trashId));
      $(".jsparson-toggle", context).each(function (index, item) {
        var type = $(item).data("type");

        if (!type) {
          return;
        }

        var handler = handlers[type];
        var jspOptions;

        if ($.isFunction(handler)) {
          jspOptions = handler($(item));
        } else {
          jspOptions = handler;
        }

        if (jspOptions && $.isArray(jspOptions)) {
          $(item).attr("data-jsp-options", JSON.stringify(jspOptions));
        }
      });
      var that = this; // register a click handler for all the toggleable elements (and unregister existing)

      context.off("click", ".jsparson-toggle").on("click", ".jsparson-toggle", function () {
        var $this = $(this);
        var curVal = $this.text();
        var choices = $this.data("jsp-options");
        var newVal = choices[(choices.indexOf(curVal) + 1) % choices.length];
        var $parent = $this.parent("li"); // clear existing feedback

        that.clearFeedback(); // change the shown toggle element

        $this.text(newVal); // log the event

        that.addLogEntry({
          type: "toggle",
          oldvalue: curVal,
          newvalue: newVal,
          target: $parent[0].id,
          toggleindex: $parent.find(".jsparson-toggle").index($this)
        });
      });
    }
  }], [{
    key: "getStaticGraders",
    value: function getStaticGraders() {
      var graders = {};
      graders.VariableCheckGrader = _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_2__["default"];
      graders.TurtleGrader = _TurtleGrader__WEBPACK_IMPORTED_MODULE_4__["default"];
      graders.UnitTestGrader = _UnitTestGrader__WEBPACK_IMPORTED_MODULE_1__["default"];
      graders.LanguageTranslationGrader = _LanguageTranslationGrader__WEBPACK_IMPORTED_MODULE_5__["default"];
      graders.LineBasedGrader = _LineBasedGrader__WEBPACK_IMPORTED_MODULE_3__["default"];
      return graders;
    }
  }]);

  return ParsonsWidget;
}();



/***/ }),

/***/ "./resources/js/parsons_lib/Translations.js":
/*!**************************************************!*\
  !*** ./resources/js/parsons_lib/Translations.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translations; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translations = function Translations() {
  _classCallCheck(this, Translations);

  this.translations = {
    fi: {
      trash_label: 'Raahaa rivit ohjelmaasi tästä',
      solution_label: 'Muodosta ratkaisusi tähän',
      order: function order() {
        return "Ohjelma sisältää vääriä palasia tai palasten järjestys on väärä. Tämä on mahdollista korjata siirtämällä, poistamalla tai vaihtamalla korostettuja palasia.";
      },
      lines_missing: function lines_missing() {
        return "Ohjelmassasi on liian vähän palasia, jotta se toimisi oikein.";
      },
      lines_too_many: function lines_too_many() {
        return "Ohjelmassasi on liian monta palasta, jotta se toimisi oikein.";
      },
      no_matching: function no_matching(lineNro) {
        return "Korostettu palanen (" + lineNro + ") on sisennetty kieliopin vastaisesti.";
      },
      no_matching_open: function no_matching_open(lineNro, block) {
        return "Rivillä " + lineNro + " päätettävää " + block + " lohkoa ei ole aloitettu.";
      },
      no_matching_close: function no_matching_close(lineNro, block) {
        return block + " lohkoa riviltä " + lineNro + " ei ole päätetty.";
      },
      block_close_mismatch: function block_close_mismatch(closeLine, closeBlock, openLine, inBlock) {
        return "Ei voi päättää lohkoa " + closeBlock + " rivillä " + closeLine + " oltaessa vielä lohkossa " + inBlock + " riviltä " + openLine;
      },
      block_structure: function block_structure(lineNro) {
        return "Korostettu palanen (" + lineNro + ") on sisennetty väärään koodilohkoon.";
      },
      unittest_error: function unittest_error(errormsg) {
        return "<span class='msg'>Virhe ohjelman jäsentämisessä/suorituksessa</span><br/> <span class='errormsg'>" + errormsg + "</span>";
      },
      unittest_output_assertion: function unittest_output_assertion(expected, actual) {
        return "Odotettu tulostus: <span class='expected output'>" + expected + "</span>" + "Ohjelmasi tulostus: <span class='actual output'>" + actual + "</span>";
      },
      unittest_assertion: function unittest_assertion(expected, actual) {
        return "Odotettu arvo: <span class='expected'>" + expected + "</span><br>" + "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
      },
      variabletest_assertion: function variabletest_assertion(varname, expected, actual) {
        return "Muuttujan " + varname + " odotettu arvo: <span class='expected'>" + expected + "</span> " + "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
      }
    },
    en: {
      trash_label: 'Drag from here',
      solution_label: 'Construct your solution here',
      order: function order() {
        return "Code fragments in your program are wrong, or in wrong order. This can be fixed by moving, removing, or replacing highlighted fragments.";
      },
      lines_missing: function lines_missing() {
        return "Your program has too few code fragments.";
      },
      lines_too_many: function lines_too_many() {
        return "Your program has too many code fragments.";
      },
      no_matching: function no_matching(lineNro) {
        return "Based on language syntax, the highlighted fragment (" + lineNro + ") is not correctly indented.";
      },
      no_matching_open: function no_matching_open(lineNro, block) {
        return "The " + block + " ended on line " + lineNro + " never started.";
      },
      no_matching_close: function no_matching_close(lineNro, block) {
        return "Block " + block + " defined on line " + lineNro + " not ended properly";
      },
      block_close_mismatch: function block_close_mismatch(closeLine, closeBlock, openLine, inBlock) {
        return "Cannot end block " + closeBlock + " on line " + closeLine + " when still inside block " + inBlock + " started on line " + openLine;
      },
      block_structure: function block_structure(lineNro) {
        return "The highlighted fragment " + lineNro + " belongs to a wrong block (i.e. indentation).";
      },
      unittest_error: function unittest_error(errormsg) {
        return "<span class='msg'>Error in parsing/executing your program</span><br/> <span class='errormsg'>" + errormsg + "</span>";
      },
      unittest_output_assertion: function unittest_output_assertion(expected, actual) {
        return "Expected output: <span class='expected output'>" + expected + "</span>" + "Output of your program: <span class='actual output'>" + actual + "</span>";
      },
      unittest_assertion: function unittest_assertion(expected, actual) {
        return "Expected value: <span class='expected'>" + expected + "</span><br>" + "Actual value: <span class='actual'>" + actual + "</span>";
      },
      variabletest_assertion: function variabletest_assertion(varname, expected, actual) {
        return "Expected value of variable " + varname + ": <span class='expected'>" + expected + "</span><br>" + "Actual value: <span class='actual'>" + actual + "</span>";
      }
    }
  };
};



/***/ }),

/***/ "./resources/js/parsons_lib/TurtleGrader.js":
/*!**************************************************!*\
  !*** ./resources/js/parsons_lib/TurtleGrader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TurtleGrader; });
/* harmony import */ var _AbstractGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractGrader */ "./resources/js/parsons_lib/AbstractGrader.js");
/* harmony import */ var _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VariableCheckGrader */ "./resources/js/parsons_lib/VariableCheckGrader.js");
/* harmony import */ var _LanguageTranslationGrader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageTranslationGrader */ "./resources/js/parsons_lib/LanguageTranslationGrader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // A grader to be used for exercises which draw turtle graphics.
// Required options:
//  - turtleModelCode: The code constructing the model drawing. The turtle is initialized
//                    to modelTurtle variable, so your code should use that variable.
//
// Options that can be specified (that is, optional):
//  - turtlePenDown: a boolean specifying whether or not the pen should be put down
//                   initially for the student constructed code
//  - turtleModelCanvas: ID of the canvas DOM element where the model solution will be drawn.
//                  Defaults to modelCanvas.
//  - turtleStudentCanvas: ID of the canvas DOM element where student turtle will draw.
//                  Defaults to studentCanvas.
//
// Grading is based on comparing the commands executed by the model and student turtle.
// If the executable_code option is also specified, the code on each line of that option will
// be executed instead of the code in the student constructed lines. Note, that the student
// code should use the variable myTurtle for commands to control the turtle in order for the
// grading to work.

var TurtleGrader = /*#__PURE__*/function (_AbstractGrader) {
  _inherits(TurtleGrader, _AbstractGrader);

  function TurtleGrader(parson) {
    var _this;

    _classCallCheck(this, TurtleGrader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TurtleGrader).call(this, parson));
    _this.turtleLibrary = "print(turtle)\nfrom turtle import Turtle\n" + "class ParsonTurtle(Turtle):\n" + "  def __init__(self):\n" + "    self._turtle = Turtle()\n" + "    self._turtle.shape('turtle')\n" + "    self._commands = []\n" + "\n" + "  def forward(self, dist, log=True):\n" + "    self._turtle.forward(dist)\n" + "    if log:\n" + "      self._commands.append(\"fwd\" + str(dist))\n" + "  def fd(self, dist, log=True):\n" + "    return self.forward(dist, log=log)\n" + "\n" + "\n" + "  def backward(self, dist, log=True):\n" + "    self._turtle.backward(dist)\n" + "    if log:\n" + "      self._commands.append(\"bwd\" + str(dist))\n" + "  def back(self, dist, log=True):\n" + "    return self.backward(dist, log=log)\n" + "  def bk(self, dist, log=True):\n" + "    return self.backward(dist, log=log)\n" + "\n" + "  def left(self, angle, log=True):\n" + "    self._turtle.left(angle)\n" + "    if log:\n" + "      self._commands.append(\"lt\" + str(angle))\n" + "  def lt(self, angle, log=True):\n" + "    return self.left(angle, log=log)\n" + "\n" + "  def right(self, angle, log=True):\n" + "    self._turtle.right(angle)\n" + "    if log:\n" + "      self._commands.append(\"rt\" + str(angle))\n" + "  def rt(self, angle, log=True):\n" + "    return self.right(angle, log=log)\n" + "\n" + "  def goto(self, nx, ny, log=True):\n" + "    self._turtle.goto(nx, ny)\n" + "    if log:\n" + "      self._commands.append(\"gt\" + str(nx) + \"-\" + str(ny))\n" + "\n" + "  def setposition(self, nx, ny, log=True):\n" + "    self._turtle.setposition(nx, ny)\n" + "    if log:\n" + "      self._commands.append(\"setpos\" + str(nx) + \"-\" + str(ny))\n" + "  def setpos(self, nx, ny, log=True):\n" + "    return self.setposition(nx, ny, log=log)\n" + "\n" + "  def setx(self, nx, log=True):\n" + "    self._turtle.setx(nx)\n" + "    if log:\n" + "      self._commands.append(\"setx\" + str(nx))\n" + "\n" + "  def sety(self, ny, log=True):\n" + "    self._turtle.sety(ny)\n" + "    if log:\n" + "      self._commands.append(\"sety\" + str(ny))\n" + "\n" + "  def dot(self, size, color, log=True):\n" + "    self._turtle.dot(size, color)\n" + "    if log:\n" + "      self._commands.append(\"dot\" + str(size) + \"-\" + str(color))\n" + "\n" + "  def circle(self, radius, extent, log=True):\n" + "    self._turtle.circle(radius, extent)\n" + "    if log:\n" + "      self._commands.append(\"circle\" + str(radius) + \"-\" + str(extent))\n" + "\n" + "  def up(self, log=True):\n" + "    self._turtle.up()\n" + "    if log:\n" + "      self._commands.append(\"up\")\n" + "  def penup(self, log=True):\n" + "    return self.up(log=log)\n" + "  def pu(self, log=True):\n" + "    return self.up(log=log)\n" + "\n" + "  def down(self, log=True):\n" + "    self._turtle.down()\n" + "    if log:\n" + "      self._commands.append(\"down\")\n" + "  def pendown(self, log=True):\n" + "    return self.down(log=log)\n" + "  def pd(self, log=True):\n" + "    return self.down(log=log)\n" + "\n" + "  def speed(self, spd):\n" + "    self._turtle.speed(spd)\n" + "\n" + "  def _logColorChange(self, command, color, green, blue):\n" + "    if blue is not None:\n" + "      self._commands.append(\"%s(%d, %d, %d)\"%(command, color, green, blue))\n" + "    else:\n" + "      self._commands.append(\"%s(%s)\"%(command, color))\n" + "\n" + "  def pencolor(self, color, green=None, blue=None, log=True):\n" + "    if blue is not None:\n" + "      self._turtle.pencolor(color, green, blue)\n" + "    else:\n" + "      self._turtle.pencolor(color)\n" + "    if log:\n" + "      self._logColorChange(\"pcolor\", color, green, blue)\n" + "\n" + "  def color(self, color, green=None, blue=None, log=True):\n" + "    if blue is not None:\n" + "      self._turtle.color(color, green, blue)\n" + "    else:\n" + "      self._turtle.color(color)\n" + "    if log:\n" + "      self._logColorChange(\"color\", color, green, blue)\n" + "\n" + "  def fillcolor(self, color, green=None, blue=None, log=True):\n" + "    if blue is not None:\n" + "      self._turtle.fillcolor(color, green, blue)\n" + "    else:\n" + "      self._turtle.fillcolor(color)\n" + "    if log:\n" + "      self._logColorChange(\"fcolor\", color, green, blue)\n" + "\n" + "  def width(self, size, log=True):\n" + "    self._turtle.pensize(size)\n" + "    if log:\n" + "      self._commands.append(\"width%d\"%size)\n" + "  def pensize(self, size, log=True):\n" + "    return self.width(size, log=log)\n" + "\n" + "  def commands(self):\n" + "    return ':'.join(self._commands)"; // execute the model solution turtlet path to have the target "picture" visible in the
    // beginning

    var modelCommands = _this._executeTurtleModel(); // specify variable tests for the commands executed by the student turtlet and the model


    var penDown = typeof _this.parson.options.turtlePenDown === "boolean" ? _this.parson.options.turtlePenDown : true; // set the vartests in the parson options

    _this.parson.options["varTests"] = [{
      initcode: "import parsonturtle\nmyTurtle = parsonturtle.ParsonTurtle()\n" + "myTurtle.speed(0.3)\nmyTurtle.pensize(3, False)\n" + (penDown ? "" : "myTurtle.up()\n"),
      // set the state of the pen
      code: (_this.parson.options.turtleTestCode ? _this.parson.options.turtleTestCode : "") + "\ncommands = myTurtle.commands()",
      message: "",
      variables: {
        commands: modelCommands
      }
    }];
    return _this;
  }

  _createClass(TurtleGrader, [{
    key: "type",
    value: function type() {
      return "TurtleGrader";
    }
  }, {
    key: "_executeTurtleModel",
    value: function _executeTurtleModel() {
      var code = this.turtleLibrary + "\nmodelTurtle = parsonturtle.ParsonTurtle()\n" + "modelTurtle.color(160, 160, 160, False)\n" + this.parson.options.turtleModelCode + "\ncommands = modelTurtle.commands()\n";
      Sk.canvas = this.parson.options.turtleModelCanvas || "modelCanvas"; // console.log(code);

      var result = this._variablesAfterExecution(code, ["commands"]);

      console.log(result);

      if (!result.variables || !result.variables.commands || !result.variables.commands.v) {
        return "None";
      }

      return result.variables.commands.v;
    }
  }, {
    key: "grade",
    value: function grade() {
      // set the correct canvas where the turtle should draw
      Sk.canvas = this.parson.options.turtleStudentCanvas || "studentCanvas"; // Pass the grading on to either the LangTranslationGrader or VariableChecker

      if (this.parson.options.executable_code) {
        return new _LanguageTranslationGrader__WEBPACK_IMPORTED_MODULE_2__["default"](this.parson).grade();
      } else {
        return new _VariableCheckGrader__WEBPACK_IMPORTED_MODULE_1__["default"](this.parson).grade();
      }
    }
  }]);

  return TurtleGrader;
}(_AbstractGrader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/parsons_lib/UnitTestGrader.js":
/*!****************************************************!*\
  !*** ./resources/js/parsons_lib/UnitTestGrader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnitTestGrader; });
/* harmony import */ var _AbstractGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractGrader */ "./resources/js/parsons_lib/AbstractGrader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Grader that will execute student code and Skulpt unittests

var UnitTestGrader = /*#__PURE__*/function (_AbstractGrader) {
  _inherits(UnitTestGrader, _AbstractGrader);

  function UnitTestGrader(props) {
    var _this;

    _classCallCheck(this, UnitTestGrader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnitTestGrader).call(this, props));
    _this.unitTestLibrary = "__author__ = 'vkaravir'\n" + "\n" + "class unittest():\n" + "    \"\"\"\n" + "    A simple unittest class to be used with the js-parsons\n" + "    exercise framework: https://github.com/vkaravir/js-parsons/\n" + "    \"\"\"\n" + "    def __init__(self):\n" + "        self.tlist = []\n" + "        testNames = {}\n" + "        for name in dir(self):\n" + "            if name[:4] == 'test' and name not in testNames:\n" + "                self.tlist.append(getattr(self,name))\n" + "                testNames[name]=True\n" + "\n" + "    def setup(self):\n" + "        pass\n" + "\n" + "    def tearDown(self):\n" + "        pass\n" + "\n" + "    def main(self):\n" + "        self.result = []\n" + "        for func in self.tlist:\n" + "            try:\n" + "                self.setup()\n" + "                func()\n" + "                self.tearDown()\n" + "            except Exception as e:\n" + "                self.appendErrorResult(e)\n" + "\n" + "        # join the result array to return a JSON string\n" + "        return '[' + ', '.join(self.result) + ']';\n" + "\n" + "    def assertEqual(self, actual, expected, feedback=\"\"):\n" + "        res = actual==expected and type(actual)==type(expected)\n" + "        self.appendResult(res, actual, ' to be equal to ',expected, feedback)\n" + "\n" + "    def assertNotEqual(self, actual, expected, feedback=\"\"):\n" + "        res = actual != expected\n" + "        self.appendResult(res, actual, ' to not equal ',expected,feedback)\n" + "\n" + "    def assertTrue(self,x, feedback=\"\"):\n" + "        res = x\n" + "        self.appendResult(res, x, ' to be ',True,feedback)\n" + "\n" + "    def assertFalse(self,x, feedback=\"\"):\n" + "        res = not x\n" + "        self.appendResult(res, x, ' to be ',False,feedback)\n" + "\n" + "    def assertIs(self,a,b, feedback=\"\"):\n" + "        res = a is b\n" + "        self.appendResult(res, a, ' to be the same object as ',b,feedback)\n" + "\n" + "    def assertIsNot(self,a,b, feedback=\"\"):\n" + "        res = a is not b\n" + "        self.appendResult(res, a, ' to not be the same object as ',b,feedback)\n" + "\n" + "    def assertIsNone(self,x, feedback=\"\"):\n" + "        res = x is None\n" + "        self.appendResult(res, x, ' to be', None,feedback)\n" + "\n" + "    def assertIsNotNone(self,x, feedback=\"\"):\n" + "        res = x is not None\n" + "        self.appendResult(res, x, ' to not be ',None,feedback)\n" + "\n" + "    def assertIn(self,a,b, feedback=\"\"):\n" + "        res = a in b\n" + "        self.appendResult(res, a, ' to be in ',b,feedback)\n" + "\n" + "    def assertNotIn(self,a,b, feedback=\"\"):\n" + "        res = a not in b\n" + "        self.appendResult(res, a, ' to not be in ',b,feedback)\n" + "\n" + "    def assertIsInstance(self,a,b, feedback=\"\"):\n" + "        res = isinstance(a,b)\n" + "        self.appendResult(res, a, ' to be an instance of ',b,feedback)\n" + "\n" + "    def assertNotIsInstance(self,a,b, feedback=\"\"):\n" + "        res = not isinstance(a,b)\n" + "        self.appendResult(res, a, ' to not be an instance of ',b,feedback)\n" + "\n" + "    def assertAlmostEqual(self,a,b, feedback=\"\"):\n" + "        res = round(a-b,7) == 0\n" + "        self.appendResult(res, a, ' to equal ',b,feedback)\n" + "\n" + "    def assertNotAlmostEqual(self,a,b, feedback=\"\"):\n" + "        res = round(a-b,7) != 0\n" + "        self.appendResult(res, a, ' to not equal ',b,feedback)\n" + "\n" + "    def assertGreater(self,a,b, feedback=\"\"):\n" + "        res = a > b\n" + "        self.appendResult(res, a, ' to be greater than ',b,feedback)\n" + "\n" + "    def assertGreaterEqual(self,a,b, feedback=\"\"):\n" + "        res = a >= b\n" + "        self.appendResult(res, a, ' to be greater than or equal to ',b,feedback)\n" + "\n" + "    def assertLess(self,a,b, feedback=\"\"):\n" + "        res = a < b\n" + "        self.appendResult(res, a, ' to be less than ',b,feedback)\n" + "\n" + "    def assertLessEqual(self,a,b, feedback=\"\"):\n" + "        res = a <= b\n" + "        self.appendResult(res, a, ' to be less than or equal to ',b,feedback)\n" + "\n" + "    def appendErrorResult(self, error):\n" + "        # generate a JSON string for this error\n" + "        self.result.append('{\"status\":\"error\", \"_error\":\"%s\"}'%str(error))\n" + "\n" + "    def appendResult(self,res,actual,comp, expected,feedback):\n" + "        if res:\n" + "            status = \"pass\"\n" + "        else:\n" + "            status = \"fail\"\n" + "        # generate a JSON string for this result\n" + "        jsonstr = '{\"status\": \"%s\", \"expected\": \"%s\", \"actual\": \"%s\", \"test\":\"%s\", \"feedback\":\"%s\"}' \\\n" + "                            %(status, str(expected), str(actual), comp, feedback)\n" + "        self.result.append(jsonstr)\n";
    return _this;
  }

  _createClass(UnitTestGrader, [{
    key: "type",
    value: function type() {
      return "UnitTestGrader";
    } // do the grading

  }, {
    key: "grade",
    value: function grade(studentCodeTemp) {
      var success = true;
      var unitTests = this.parson.options.unittests;

      var studentCode = studentCodeTemp || this._codelinesAsString().trim();

      var feedbackHtml = ""; // HTML to be returned as feedback

      var result;
      var mainMod;
      var executableCode = "".concat(studentCode, "\n").concat(unitTests); // if there is code to add before student code, add it

      if (this.parson.options.unittest_code_prepend) {
        executableCode = "".concat(this.parson.options.unittest_code_prepend, "\n").concat(executableCode);
      }

      executableCode = "".concat(this.unitTestLibrary, "\n").concat(executableCode);

      try {
        mainMod = this._python_exec(executableCode).mainMod;
        result = JSON.parse(mainMod.tp$getattr("_test_result").v);
      } catch (e) {
        result = [{
          status: "error",
          _error: e.toString()
        }];
      } // go through the results and generate HTML feedback


      for (var i = 0, l = result.length; i < l; i++) {
        var res = result[i];
        feedbackHtml += "<div class=\"testcase ".concat(res.status, "'\">");

        if (res.status === "error") {
          // errors in execution
          feedbackHtml += this.parson.translations.unittest_error(this.stripLineNumberIfNeeded(res._error, this.parson.options.unittest_code_prepend, studentCode));
          success = false;
        } else {
          // passed or failed tests
          feedbackHtml += "<span class=\"msg\">".concat(this.stripLineNumberIfNeeded(res.feedback), "</span><br />");
          feedbackHtml += "Expected <span class=\"expected\">".concat(res.expected, "\n                    </span>").concat(res.test, "<span class=\"actual\">").concat(res.actual, "</span>");

          if (res.status === "fail") {
            success = false;
          }
        }

        feedbackHtml += '</div>';
      }

      return {
        html: feedbackHtml,
        tests: result,
        success: success
      };
    }
  }]);

  return UnitTestGrader;
}(_AbstractGrader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/parsons_lib/VariableCheckGrader.js":
/*!*********************************************************!*\
  !*** ./resources/js/parsons_lib/VariableCheckGrader.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariableCheckGrader; });
/* harmony import */ var _AbstractGrader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractGrader */ "./resources/js/parsons_lib/AbstractGrader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Grader that will execute the code and check variable values after that
// Expected and supported options:
//  - vartests (required): array of variable test objects
// Each variable test object can/must have the following properties:
//  - initcode: code that will be prepended before the learner solution code
//  - code: code that will be appended after the learner solution code
//  - message (required): a textual description of the test, shown to learner
// Properties specifying what is tested:
//  - variables: an object with properties for each variable name to
//                          be tested; the value of the property is the expected
//                          value
// or
//  - variable: a variable name to be tested
//  - expected: expected value of the variable after code execution

var VariableCheckGrader = /*#__PURE__*/function (_AbstractGrader) {
  _inherits(VariableCheckGrader, _AbstractGrader);

  function VariableCheckGrader() {
    _classCallCheck(this, VariableCheckGrader);

    return _possibleConstructorReturn(this, _getPrototypeOf(VariableCheckGrader).apply(this, arguments));
  }

  _createClass(VariableCheckGrader, [{
    key: "type",
    value: function type() {
      return "VariableCheckGrader";
    } // Formats a JavaScript variable to the corresponding Python value *and*
    // formats a Skulpt variable to the corresponding Python value

  }, {
    key: "formatVariableValue",
    value: function formatVariableValue(varValue) {
      var varType = _typeof(varValue);

      var returnValue = varValue;

      if (varType === "undefined" || varValue === null) {
        returnValue = "None";
      } else if (varType === "string") {
        // show strings in quotes
        returnValue = '"' + varValue + '"';
      } else if (varType === "boolean") {
        // Python booleans with capital first letter
        returnValue = varValue ? "True" : "False";
      } else if ($.isArray(varValue)) {
        // JavaScript arrays
        returnValue = '[' + varValue.join(', ') + ']';
      } else if (varType === "object" && varValue.tp$name === "number") {
        // Python numbers
        returnValue = varValue.v;
      } else if (varType === "object" && varValue.tp$name === "int") {
        // Also Python numbers?
        returnValue = varValue.v;
      } else if (varType === "object" && varValue.tp$name === "NoneType") {
        // None
        returnValue = "None";
      } else if (varType === "object" && varValue.tp$name === "bool") {
        // Python strings
        returnValue = varValue.v ? "True" : "False";
      } else if (varType === "object" && varValue.tp$name === "str") {
        // Python strings
        returnValue = '"' + varValue.v + '"';
      } else if (varType === "object" && varValue.tp$name === "list") {
        // Python lists
        returnValue = '[' + varValue.v.join(', ') + ']';
      }

      return returnValue;
    }
  }, {
    key: "grade",
    value: function grade(studentCodeTemp) {
      var that = this;
      var feedback = "";
      var logErrors = [];
      var allPassed = true;
      $.each(this.parson.options.vartests, function (index, testData) {
        var studentCode = studentCodeTemp || that._codelinesAsString();

        var executableCode = "".concat(testData.initcode || "", "\n").concat(studentCode, "\n").concat(testData.code || "");
        var variables;
        var expectedVals;

        if ('variables' in testData) {
          variables = _.keys(testData.variables);
          expectedVals = testData.variables;
        } else {
          variables = [testData.variable];
          expectedVals = {};
          expectedVals[testData.variable] = testData.expected;
        }

        var res = that._variablesAfterExecution(executableCode, variables);

        var testCaseFeedback = "";
        var success = true;
        var logEntry = {
          'code': testData.code,
          'msg': testData.message
        };
        var expectedValue;
        var actualValue;

        if ("_error" in res) {
          testCaseFeedback += that.parson.translations.unittest_error(that.stripLineNumberIfNeeded(res._error, testData.initcode, studentCode));
          success = false;
          logEntry.type = "error";
          logEntry.errormsg = res._error;
        } else {
          logEntry.type = "assertion";
          logEntry.variables = {};

          for (var j = 0; j < variables.length; j++) {
            var variable = variables[j];
            var variableSuccess = void 0;

            if (variable === "__output") {
              // checking output of the program
              expectedValue = expectedVals[variable];
              actualValue = res._output;
              variableSuccess = actualValue == expectedValue; // should we do a strict test??

              testCaseFeedback += "<div class='".concat(variableSuccess ? "pass" : "fail", "'>");
              testCaseFeedback += "".concat(that.parson.translations.unittest_output_assertion(expectedValue, actualValue), "</div>");
            } else {
              expectedValue = that.formatVariableValue(expectedVals[variable]);
              actualValue = that.formatVariableValue(res.variables[variable]);
              variableSuccess = actualValue == expectedValue; // should we do a strict test??

              testCaseFeedback += "<div class='".concat(variableSuccess ? "pass" : "fail", "'>");
              testCaseFeedback += "".concat(that.parson.translations.variabletest_assertion(variable, expectedValue, actualValue), "</div>");
            }

            logEntry.variables[variable] = {
              expected: expectedValue,
              actual: actualValue
            };

            if (!variableSuccess) {
              success = false;
            }
          }
        }

        allPassed = allPassed && success;
        logEntry.success = success;
        logErrors.push(logEntry);
        feedback += "<div class='testcase ".concat(success ? "pass" : "fail", "'>\n                        <span class='msg'>").concat(testData.message, "</span><br>").concat(testCaseFeedback, "\"</div>");
      });
      return {
        html: feedback,
        tests: logErrors,
        success: allPassed
      };
    }
  }]);

  return VariableCheckGrader;
}(_AbstractGrader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/parsons_problems/pseudo_code_page.js":
/*!***********************************************************!*\
  !*** ./resources/js/parsons_problems/pseudo_code_page.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsons_lib_ParsonsWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parsons_lib/ParsonsWidget */ "./resources/js/parsons_lib/ParsonsWidget.js");
/* harmony import */ var _lib_parsons_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/parsons_converter */ "./resources/js/lib/parsons_converter.js");


var initial = 'IF $$toggle::a::b$$ $$toggle::<::>::<>$$ b THEN\n  min := a\nELSE\n  min := b\nENDIF';
$(document).ready(function () {
  var parson = new _parsons_lib_ParsonsWidget__WEBPACK_IMPORTED_MODULE_0__["default"]({
    'sortableId': 'sortable',
    'trashId': 'sortableTrash',
    'max_wrong_lines': 1,
    'vartests': [{
      initcode: "min = None\na = 0\nb = 2",
      code: "",
      message: "Testing with a = 0 ja b = 2",
      variables: {
        min: 0
      }
    }, {
      initcode: "min = None\na = 7\nb = 4\n",
      code: "",
      message: "Testing with a = 7 ja b = 4",
      variables: {
        min: 4
      }
    }],
    'grader': _parsons_lib_ParsonsWidget__WEBPACK_IMPORTED_MODULE_0__["default"].getStaticGraders().LanguageTranslationGrader,
    'executable_code': "if $$toggle$$ $$toggle::<::>::!=$$ b:\n" + "min = a\n" + "else:\n" + "min = b\n  pass",
    'programmingLang': "pseudo"
  });
  var parsonObject = _lib_parsons_converter__WEBPACK_IMPORTED_MODULE_1__["default"].convertParsonString(initial);
  var parsonString = _lib_parsons_converter__WEBPACK_IMPORTED_MODULE_1__["default"].buildParsonString(parsonObject);
  parson.init(parsonString);
  parson.shuffleLines();
  $("#newInstanceLink").click(function (event) {
    event.preventDefault();
    parson.shuffleLines();
  });
  $("#feedbackLink").click(function (event) {
    event.preventDefault();
    var fb = parson.getFeedback();
    $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
  });
});

/***/ }),

/***/ 8:
/*!*****************************************************************!*\
  !*** multi ./resources/js/parsons_problems/pseudo_code_page.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aurel\Documents\GitHub\ParsonProject\resources\js\parsons_problems\pseudo_code_page.js */"./resources/js/parsons_problems/pseudo_code_page.js");


/***/ })

/******/ });