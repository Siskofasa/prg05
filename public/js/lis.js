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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/lib/lis.js":
/*!*********************************!*\
  !*** ./resources/js/lib/lis.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LIS; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* FEEDBACK:
 - peräkkäiset rivit yhdistetään blokeiksi
 - etsitään LIS jossa eniten peräkkäisiä rivejä
 - värjätään LIS:n inverse punaiseksi, blokeista ehkä vain tausta
 - sisennyspalaute kuten nykyisin alusta asti oikealla paikalla olevista riveistä (värjätäänkö vihreiksi?)
*/
// Takes an iterable sequence and returns the decks given by
// patience sorting as a list of lists
// http://wordaligned.org/articles/patience-sort
// http://en.wikipedia.org/wiki/Longest_increasing_subsequence
var LIS = /*#__PURE__*/function () {
  function LIS() {
    _classCallCheck(this, LIS);
  }

  _createClass(LIS, [{
    key: "patience_sort",
    value: function patience_sort(list) {
      var arr = _.toArray(list);

      var decks = [[arr[0]]];
      var deckPos = 0;

      for (var i = 1; i < arr.length; i++) {
        var x = arr[i];
        var currDeck = decks[deckPos];

        if (x < _.last(currDeck)) {
          // append to the last created deck
          currDeck.push(x);
        } else {
          // create a new deck
          decks.push([x]);
          deckPos++;
        }
      }

      return decks;
    } // Takes an iterable sequence of iterables that represent decks
    // that are the result of patience sorting a sequence

  }, {
    key: "find_lises",
    value: function find_lises(decks) {
      decks = _.toArray(decks);

      if (decks.length < 1) {
        return decks;
      }

      var lises = [],
          new_lises,
          deck,
          partial_lis,
          new_partial_lis,
          x,
          i,
          j,
          k;

      for (i = 0; i < decks.length; i++) {
        new_lises = [];
        deck = decks[i];

        for (j = 0; j < lises.length; j++) {
          partial_lis = lises[j];

          for (k = 0; k < deck.length; k++) {
            x = deck[k];

            if (x > _.last(partial_lis)) {
              new_partial_lis = partial_lis.slice(0); // dummy copy

              new_partial_lis.push(x);
              new_lises.push(new_partial_lis);
            }
          }

          new_lises.push(partial_lis);
        }

        for (k = 0; k < deck.length; k++) {
          new_lises.push([deck[k]]);
        }

        lises = new_lises;
      }

      var lis_length = 0;

      for (i = lises.length; i--;) {
        lis_length = Math.max(lis_length, lises[i].length);
      }

      lises = _.select(lises, function (item) {
        return item.length >= lis_length;
      });
      return lises;
    }
  }, {
    key: "best_lise",
    value: function best_lise(lises) {
      var lis_scores = _.map(lises, function (item, index) {
        if (item.length <= 1) {
          return {
            score: 0,
            index: index
          };
        }

        var score = 0;

        for (var i = 1; i < item.length; i++) {
          if (item[i - 1] === item[i] - 1) {
            score++;
          }
        }

        return {
          score: score,
          index: index
        };
      });

      var best = _.max(lis_scores, function (item) {
        return item.score;
      });

      return lises[best.index];
    }
  }, {
    key: "best_lise_inverse",
    value: function best_lise_inverse(list) {
      var decks = this.patience_sort(_.toArray(list)),
          lises = this.find_lises(decks),
          best = this.best_lise(lises);
      return _.difference(list, best);
    }
  }, {
    key: "best_lise_inverse_indices",
    value: function best_lise_inverse_indices(input) {
      var decks = this.patience_sort(_.toArray(input)),
          lises = this.find_lises(decks),
          best = this.best_lise(lises),
          inverse_indices = [];
      var j = 0;

      for (var i = 0; i < best.length; i++) {
        for (; j < input.length; j++) {
          if (input[j] === best[i]) {
            j++;
            break;
          } else {
            inverse_indices.push(j);
          }
        }
      }

      for (; j < input.length; j++) {
        inverse_indices.push(j);
      }

      return inverse_indices;
    }
  }]);

  return LIS;
}();



/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/lib/lis.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aurel\Documents\GitHub\ParsonProject\resources\js\lib\lis.js */"./resources/js/lib/lis.js");


/***/ })

/******/ });