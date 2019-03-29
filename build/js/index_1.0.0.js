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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../node_modules/axios/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!****************************************************************************************************!*\
  !*** delegated ../node_modules/classnames/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/classnames/index.js");

/***/ }),

/***/ "./node_modules/core-js/es6/map.js":
/*!*****************************************!*\
  !*** ./node_modules/core-js/es6/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/es6/promise.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/promise.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/es6/set.js":
/*!*****************************************!*\
  !*** ./node_modules/core-js/es6/set.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/create-subscription/cjs/create-subscription.development.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/create-subscription/cjs/create-subscription.development.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.5
 * create-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createSubscription(config) {
  var getCurrentValue = config.getCurrentValue,
      _subscribe = config.subscribe;


  !(typeof getCurrentValue === 'function') ? warningWithoutStack$1(false, 'Subscription must specify a getCurrentValue function') : void 0;
  !(typeof _subscribe === 'function') ? warningWithoutStack$1(false, 'Subscription must specify a subscribe function') : void 0;

  // Reference: https://gist.github.com/bvaughn/d569177d70b50b58bff69c3c4a5353f3
  var Subscription = function (_React$Component) {
    _inherits(Subscription, _React$Component);

    function Subscription() {
      var _temp, _this, _ret;

      _classCallCheck(this, Subscription);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        source: _this.props.source,
        value: _this.props.source != null ? getCurrentValue(_this.props.source) : undefined
      }, _this._hasUnmounted = false, _this._unsubscribe = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Subscription.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.source !== prevState.source) {
        return {
          source: nextProps.source,
          value: nextProps.source != null ? getCurrentValue(nextProps.source) : undefined
        };
      }

      return null;
    };

    Subscription.prototype.componentDidMount = function componentDidMount() {
      this.subscribe();
    };

    Subscription.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.state.source !== prevState.source) {
        this.unsubscribe();
        this.subscribe();
      }
    };

    Subscription.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribe();

      // Track mounted to avoid calling setState after unmounting
      // For source like Promises that can't be unsubscribed from.
      this._hasUnmounted = true;
    };

    Subscription.prototype.render = function render() {
      return this.props.children(this.state.value);
    };

    Subscription.prototype.subscribe = function subscribe() {
      var _this2 = this;

      var source = this.state.source;

      if (source != null) {
        var _callback = function (value) {
          if (_this2._hasUnmounted) {
            return;
          }

          _this2.setState(function (state) {
            // If the value is the same, skip the unnecessary state update.
            if (value === state.value) {
              return null;
            }

            // If this event belongs to an old or uncommitted data source, ignore it.
            if (source !== state.source) {
              return null;
            }

            return { value: value };
          });
        };

        // Store the unsubscribe method for later (in case the subscribable prop changes).
        var unsubscribe = _subscribe(source, _callback);
        !(typeof unsubscribe === 'function') ? invariant(false, 'A subscription must return an unsubscribe function.') : void 0;

        // It's safe to store unsubscribe on the instance because
        // We only read or write that property during the "commit" phase.
        this._unsubscribe = unsubscribe;

        // External values could change between render and mount,
        // In some cases it may be important to handle this case.
        var _value = getCurrentValue(this.props.source);
        if (_value !== this.state.value) {
          this.setState({ value: _value });
        }
      }
    };

    Subscription.prototype.unsubscribe = function unsubscribe() {
      if (typeof this._unsubscribe === 'function') {
        this._unsubscribe();
      }
      this._unsubscribe = null;
    };

    return Subscription;
  }(React.Component);

  return Subscription;
}

exports.createSubscription = createSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/create-subscription/index.js":
/*!***************************************************!*\
  !*** ./node_modules/create-subscription/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/create-subscription.development.js */ "./node_modules/create-subscription/cjs/create-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/history/cjs/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/cjs/history.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var resolvePathname = _interopDefault(__webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/cjs/index.js"));
var valueEqual = _interopDefault(__webpack_require__(/*! value-equal */ "./node_modules/value-equal/cjs/index.js"));
var warning = _interopDefault(__webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.cjs.js"));
var invariant = _interopDefault(__webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    warning(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    warning(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  }

  function replace(path, state) {
    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;


/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/history.js */ "./node_modules/history/cjs/history.js");
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!********************************************************************************************************************************************!*\
  !*** delegated ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*******************************************************************************************************!*\
  !*** delegated ../node_modules/object-assign/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!********************************************************************************************************!*\
  !*** delegated ../node_modules/path-to-regexp/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/path-to-regexp/index.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!****************************************************************************************************!*\
  !*** delegated ../node_modules/prop-types/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ../node_modules/react-dom/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-router-dom/BrowserRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/BrowserRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/HashRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/HashRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router-dom/Link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/MemoryRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/MemoryRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MemoryRouter = __webpack_require__(/*! react-router/MemoryRouter */ "./node_modules/react-router/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/NavLink.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/NavLink.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/Prompt.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Prompt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Prompt = __webpack_require__(/*! react-router/Prompt */ "./node_modules/react-router/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Redirect.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/Redirect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Redirect = __webpack_require__(/*! react-router/Redirect */ "./node_modules/react-router/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Route.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/Route.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(/*! react-router/Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Router = __webpack_require__(/*! react-router/Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/StaticRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/StaticRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(/*! react-router/StaticRouter */ "./node_modules/react-router/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Switch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(/*! react-router/Switch */ "./node_modules/react-router/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/generatePath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/generatePath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generatePath = __webpack_require__(/*! react-router/generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/matchPath.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/matchPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(/*! react-router/matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/withRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/withRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withRouter = __webpack_require__(/*! react-router/withRouter */ "./node_modules/react-router/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router/MemoryRouter.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/MemoryRouter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that stores location in memory.
 */
var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createMemoryHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(_react2.default.Component);

MemoryRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = MemoryRouter;

/***/ }),

/***/ "./node_modules/react-router/Prompt.js":
/*!*********************************************!*\
  !*** ./node_modules/react-router/Prompt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */
var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(_react2.default.Component);

Prompt.propTypes = {
  when: _propTypes2.default.bool,
  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      block: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Prompt;

/***/ }),

/***/ "./node_modules/react-router/Redirect.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/Redirect.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _generatePath = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for updating the location programmatically
 * with a component.
 */
var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = (0, _history.createLocation)(prevProps.to);
    var nextTo = (0, _history.createLocation)(this.props.to);

    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
      (0, _warning2.default)(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return (0, _generatePath2.default)(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: (0, _generatePath2.default)(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  push: _propTypes2.default.bool,
  from: _propTypes2.default.string,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired,
    staticContext: _propTypes2.default.object
  }).isRequired
};
exports.default = Redirect;

/***/ }),

/***/ "./node_modules/react-router/Route.js":
/*!********************************************!*\
  !*** ./node_modules/react-router/Route.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? _react2.default.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return _react2.default.Children.only(children);

    return null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Route;

/***/ }),

/***/ "./node_modules/react-router/Router.js":
/*!*********************************************!*\
  !*** ./node_modules/react-router/Router.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for putting history on context.
 */
var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Router;

/***/ }),

/***/ "./node_modules/react-router/StaticRouter.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/StaticRouter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : (0, _history.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, (0, _history.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = StaticRouter;

/***/ }),

/***/ "./node_modules/react-router/Switch.js":
/*!*********************************************!*\
  !*** ./node_modules/react-router/Switch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (match == null && _react2.default.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};
exports.default = Switch;

/***/ }),

/***/ "./node_modules/react-router/generatePath.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/generatePath.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = _pathToRegexp2.default.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

exports.default = generatePath;

/***/ }),

/***/ "./node_modules/react-router/matchPath.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/matchPath.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),

/***/ "./node_modules/react-router/withRouter.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router/withRouter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return _react2.default.createElement(_Route2.default, {
      children: function children(routeComponentProps) {
        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  return (0, _hoistNonReactStatics2.default)(C, Component);
};

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/resolve-pathname/cjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/resolve-pathname/cjs/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.cjs.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.cjs.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

module.exports = invariant;


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/*!**********************************************************************************************************************************!*\
  !*** delegated ../node_modules/url-search-params/build/url-search-params.node.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/url-search-params/build/url-search-params.node.js");

/***/ }),

/***/ "./node_modules/value-equal/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/value-equal/cjs/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

exports.default = valueEqual;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!***************************************************************************************************!*\
  !*** delegated ../node_modules/warning/warning.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/warning/warning.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/webpack/buildin/global.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/webpack/buildin/module.js from dll-reference vendor_494a3459ad13ffad7b5c ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_494a3459ad13ffad7b5c */ "dll-reference vendor_494a3459ad13ffad7b5c"))("./node_modules/webpack/buildin/module.js");

/***/ }),

/***/ "./node_modules/yuejia/_base/datatype.ts":
/*!***********************************************!*\
  !*** ./node_modules/yuejia/_base/datatype.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Model */ "./node_modules/yuejia/component/Model/index.tsx");

/** 数据类型基类 */
var DataType = /** @class */ (function () {
    function DataType(request) {
        /** 数据更新的id，用于判断数据是否发生变化 */
        this.dataId = 0;
        this.lastDataId = 0;
        this.request = request;
    }
    /** 更新数据id */
    DataType.prototype.updateDataId = function () {
        this.dataId++;
        if (_component_Model__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch) {
            _component_Model__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch();
        }
    };
    Object.defineProperty(DataType.prototype, "isChange", {
        /** 数据是否改变，为true则是改变, */
        /** 特别注意：这个方法有副作用，调用一次后将一直返回false，除非再次调用updateDataId */
        get: function () {
            if (this.dataId !== this.lastDataId) {
                this.lastDataId = this.dataId;
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    DataType.prototype.stringify = function (key) {
        if (typeof key === 'object') {
            return JSON.stringify(key);
        }
        else {
            return key;
        }
    };
    /** 获取数据id */
    DataType.prototype.getDataId = function () {
        return this.dataId;
    };
    return DataType;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataType);


/***/ }),

/***/ "./node_modules/yuejia/_base/service/fields.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/_base/service/fields.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/validate */ "./node_modules/yuejia/utils/validate.ts");
/* harmony import */ var _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/datatype/obObject */ "./node_modules/yuejia/app/datatype/obObject.ts");
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/isEmpty */ "./node_modules/yuejia/utils/isEmpty.ts");



var Fields = /** @class */ (function () {
    function Fields(props) {
        /** 上一次验证的值 */
        this.lastValidate = false;
        this.fieldKey = props.fieldKey;
        this.fieldName = props.fieldName;
        this.required = props.required || false;
        this.prompt = new _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_1__["default"]({ defaultValue: props.prompt || '' });
        this.getForm = props.form;
        // tslint:disable-next-line:prefer-conditional-expression
        if (typeof props.validate === 'string') {
            this.verification = _utils_validate__WEBPACK_IMPORTED_MODULE_0__["default"][props.validate];
        }
        else {
            this.verification = props.validate;
        }
        this.onChange = props.onChange;
        this.setPrompt = this.setPrompt.bind(this);
        this.validate = this.validate.bind(this);
        this.clear = this.clear.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.getPrompt = this.getPrompt.bind(this);
    }
    Object.defineProperty(Fields.prototype, "state", {
        /** 输入状态 */
        get: function () {
            var value = this.value.get();
            if (this.required) {
                if (Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
                    return 'empty';
                }
            }
            if (this.validate()) {
                return 'fail';
            }
            else {
                return 'complete';
            }
        },
        enumerable: true,
        configurable: true
    });
    /** 设置提示文字 */
    Fields.prototype.setPrompt = function (text) {
        if (this.getPrompt() !== text) {
            this.prompt.set(text);
        }
    };
    /** 提示文字 */
    Fields.prototype.getPrompt = function () {
        var prompt = this.prompt.get();
        if (prompt) {
            return prompt;
        }
        else {
            if (this.state === 'empty') {
                return this.fieldName + "\u5FC5\u586B";
            }
            else if (this.state === 'fail') {
                return this.fieldName + "\u683C\u5F0F\u4E0D\u6B63\u786E";
            }
            else {
                return '';
            }
        }
    };
    /**
     * 输入验证函数
     * 为true表示有错误，为false表示无错误
     */
    Fields.prototype.validate = function () {
        if (this.value.isChange) {
            var value = this.value.get();
            // 判断是否有自定义验证函数
            // tslint:disable-next-line:prefer-conditional-expression
            if (value && this.verification !== undefined) {
                this.lastValidate = !this.verification(value);
            }
            else {
                this.lastValidate = false;
            }
        }
        // 判断有没有验证函数，没有的话就不需要验证
        return this.lastValidate;
    };
    /** 对值改变时做一些联动处理 */
    Fields.prototype.changeValue = function (value) {
        this.value.set(value);
        this.validate();
        if (this.onChange) {
            this.onChange(value);
        }
    };
    return Fields;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fields);


/***/ }),

/***/ "./node_modules/yuejia/app/datatype/obArray.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/app/datatype/obArray.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_datatype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_base/datatype */ "./node_modules/yuejia/_base/datatype.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ObArray = /** @class */ (function (_super) {
    __extends(ObArray, _super);
    function ObArray(props) {
        var _this = _super.call(this, props && props.request) || this;
        _this.value = props && props.defaultValue ? props.defaultValue : [];
        return _this;
    }
    ObArray.prototype.set = function (value) {
        this.value = value;
        if (this.request) {
            if (value.length > 0) {
                this.request.state.set('complete');
            }
            else {
                this.request.state.set('empty');
            }
        }
        this.updateDataId();
    };
    ObArray.prototype.get = function () {
        return this.value;
    };
    return ObArray;
}(_base_datatype__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ObArray);


/***/ }),

/***/ "./node_modules/yuejia/app/datatype/obObject.ts":
/*!******************************************************!*\
  !*** ./node_modules/yuejia/app/datatype/obObject.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_datatype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_base/datatype */ "./node_modules/yuejia/_base/datatype.ts");
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isEmpty */ "./node_modules/yuejia/utils/isEmpty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/** 对象或基本类型数据 */
var ObObject = /** @class */ (function (_super) {
    __extends(ObObject, _super);
    function ObObject(props) {
        var _this = _super.call(this, props.request) || this;
        _this.value = props.defaultValue;
        return _this;
    }
    ObObject.prototype.set = function (value) {
        this.value = value;
        if (this.request) {
            if (Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
                this.request.state.set('empty');
            }
            else {
                this.request.state.set('complete');
            }
        }
        this.updateDataId();
    };
    ObObject.prototype.get = function () {
        return this.value;
    };
    return ObObject;
}(_base_datatype__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ObObject);


/***/ }),

/***/ "./node_modules/yuejia/app/global.ts":
/*!*******************************************!*\
  !*** ./node_modules/yuejia/app/global.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Global = /** @class */ (function () {
    function Global() {
        /** 页面id */
        this.pageId = 1;
        /** 是否处于input foucs状态，用于判断dispatch是否要优化 */
        this.inputFoucs = false;
    }
    return Global;
}());
var global = new Global();
/* harmony default export */ __webpack_exports__["default"] = (global);


/***/ }),

/***/ "./node_modules/yuejia/app/request.ts":
/*!********************************************!*\
  !*** ./node_modules/yuejia/app/request.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datatype_obObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatype/obObject */ "./node_modules/yuejia/app/datatype/obObject.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
var Request = /** @class */ (function () {
    function Request(props) {
        /** 请求发送失败后的重新请求的次数 */
        this.againCount = 0;
        /** 是否开启请求失败后重新请求 */
        this.again = false;
        /** 是否处于请求中 */
        this.requesting = false;
        /** 请求的状态 */
        this.state = new _datatype_obObject__WEBPACK_IMPORTED_MODULE_2__["default"]({ defaultValue: undefined });
        /** 上一个参数 */
        this.lastParams = '';
        this.send = this.send.bind(this);
        if (props) {
            this._api = props.api;
            this._callback = props.callback;
            this._failback = props.failback;
            this.requestData = props.requestData;
        }
        this.response = this.response.bind(this);
        this.action = this.action.bind(this);
    }
    /** 对请求返回后的响应做处理 */
    Request.prototype.response = function (params, response) {
        var transformResponse = params.transformResponse === undefined ? false : params.transformResponse;
        var data = response.data;
        this.requesting = false;
        if (response.status === 200) {
            if (transformResponse) {
                return Request.transformResponse(data);
            }
            else {
                return data;
            }
        }
        else {
            // 如果请求失败，就发起重新发起请求，次数最多为3次
            if (this.again && this.againCount < 3) {
                this.againCount++;
                this.action(params);
            }
            else {
                this.state.set('fail');
            }
        }
    };
    /** 发送请求的封装函数 */
    Request.prototype.action = function (params) {
        var _this = this;
        var config = params.config;
        // 先判断是否有缓存，如果有就读缓存，否则发起请求
        var urlSearchParams = new URLSearchParams();
        var method = config.method && config.method.toLocaleLowerCase();
        if (Request.defaultData && method === 'post') {
            var defaultData_1 = Request.defaultData;
            Object.keys((defaultData_1)).forEach(function (key) {
                if (defaultData_1[key] !== undefined) {
                    urlSearchParams.append(key, Request.defaultData[key]);
                }
            });
        }
        if (Request.defaultParams && method === 'get') {
            var temp_1 = {};
            if (config.params) {
                Object.keys(config.params).forEach(function (key) {
                    var value = config.params[key];
                    if (value !== undefined && typeof value !== 'function') {
                        temp_1[key] = config.params[key];
                    }
                });
            }
            config.params = object_assign__WEBPACK_IMPORTED_MODULE_1__({}, Request.defaultParams, temp_1);
        }
        if (config.data) {
            Object.keys((config.data)).forEach(function (key) {
                var value = config.data[key];
                if (value !== undefined && typeof value !== 'function' && !urlSearchParams.has(key)) {
                    urlSearchParams.append(key, config.data[key]);
                }
            });
        }
        this.requesting = true;
        return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_0___default()(__assign({ cancelToken: new axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken(function (cancel) {
                    _this.cancel = cancel;
                }), headers: {
                    'Content-Type': method === 'post' && Request.isApplicationJson === false ? 'application/x-www-form-urlencoded' : undefined
                } }, config, { data: urlSearchParams })).then(function (response) {
                resolve(_this.response(params, response));
            }).catch(function (err) {
                if (err.message !== 'cancel') {
                    reject(err);
                    _this.state.set('fail');
                    throw err;
                }
            });
        });
    };
    /** 使用缓存 */
    Request.prototype.readCache = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, hit, miss;
            return __generator(this, function (_a) {
                data = params.data, hit = params.hit, miss = params.miss;
                // 如果数据存在使用缓存
                if (isEmpty(data)) {
                    miss();
                }
                else {
                    hit(data);
                }
                return [2 /*return*/];
            });
        });
    };
    /** 参数是否改变 */
    Request.prototype.isParamsChange = function (currentParams) {
        var currentParamsStr = JSON.stringify(currentParams);
        var isParamsChange = this.lastParams !== currentParamsStr;
        this.lastParams = currentParamsStr;
        return isParamsChange;
    };
    /** Content-Type是否设置为application/json */
    Request.isApplicationJson = false;
    return Request;
}());
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./node_modules/yuejia/app/weixin/index.ts":
/*!*************************************************!*\
  !*** ./node_modules/yuejia/app/weixin/index.ts ***!
  \*************************************************/
/*! exports provided: WeiXin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeiXin", function() { return WeiXin; });
/* harmony import */ var _component_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
/* harmony import */ var _component_ImgView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/ImgView */ "./node_modules/yuejia/component/ImgView/index.tsx");
/* harmony import */ var _utils_isHttp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/isHttp */ "./node_modules/yuejia/utils/isHttp.ts");
// import stringToHex from '../../utils/stringToHex';
// import global from '../../app/global';



var hex_sha1 = __webpack_require__(/*! ./sha1.js */ "./node_modules/yuejia/app/weixin/sha1.js").hex_sha1;
// const env = process.env.NODE_ENV;
var conventionMenuItem = [
    'menuItem:share:qq',
    'menuItem:share:weiboApp',
    'menuItem:share:facebook',
    'menuItem:share:QZone',
    'menuItem:editTag',
    'menuItem:delete',
    'menuItem:copyUrl',
    'menuItem:originPage',
    'menuItem:readMode',
    'menuItem:openWithQQBrowser',
    'menuItem:openWithSafari',
    'menuItem:share:email',
    'menuItem:share:brand'
];
var WeiXin = /** @class */ (function () {
    function WeiXin() {
        this.apiList = [
            'previewImage',
            'hideMenuItems',
            'chooseImage',
            'uploadImage',
            'getLocalImgData',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'showOptionMenu',
            'hideAllNonBaseMenuItem'
        ];
        this.ready = this.ready.bind(this);
        this.hideAllNonBaseMenuItem = this.hideAllNonBaseMenuItem.bind(this);
        this.hideConventionMenuItem = this.hideConventionMenuItem.bind(this);
        this.hideShareMenuItem = this.hideShareMenuItem.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.getLocalImgData = this.getLocalImgData.bind(this);
        this.onShare = this.onShare.bind(this);
    }
    WeiXin.prototype.getHttpUrl = function (src) {
        var host = _component_ImgView__WEBPACK_IMPORTED_MODULE_1__["default"].defaultHost;
        var url = src && Object(_utils_isHttp__WEBPACK_IMPORTED_MODULE_2__["default"])(src) ? src : host + src;
        return url;
    };
    WeiXin.prototype.ready = function (callback) {
        if (WeiXin.options) {
            wx.ready(callback);
        }
    };
    /** 初始化配置，对应wx.config */
    WeiXin.prototype.config = function () {
        if (WeiXin.options) {
            var _a = WeiXin.options, ticket = _a.ticket, debug = _a.debug, appId = _a.appId;
            var timestamp = new Date().getTime();
            var nonceStr = 'ak0os7h1dojn51ojvs5r8lfwsq3debsu';
            var url = window.location.href.split('#')[0];
            var data = "jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url;
            var signature = hex_sha1(data);
            wx.config({
                debug: debug,
                appId: appId,
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: signature,
                jsApiList: this.apiList
            });
        }
    };
    /** 隐藏所有非基础按钮接口 */
    WeiXin.prototype.hideAllNonBaseMenuItem = function () {
        this.ready(function () {
            wx.hideAllNonBaseMenuItem();
        });
    };
    /** 常见隐藏菜单配置 */
    WeiXin.prototype.hideConventionMenuItem = function () {
        this.ready(function () {
            wx.showOptionMenu();
            wx.hideMenuItems({
                menuList: conventionMenuItem
            });
        });
    };
    /** 在常见菜单配置基础隐藏所有分享 */
    WeiXin.prototype.hideShareMenuItem = function () {
        this.ready(function () {
            var menuList = conventionMenuItem.concat([
                'menuItem:share:appMessage',
                'menuItem:share:timeline',
                'menuItem:favorite',
            ]);
            wx.showOptionMenu();
            wx.hideMenuItems({
                menuList: menuList
            });
        });
    };
    /** 预览图片 */
    WeiXin.prototype.previewImage = function (src, imgHost) {
        this.ready(function () {
            // tslint:disable-next-line:max-line-length
            var urls = (src.indexOf('http') >= 0 || src.indexOf('https') >= 0) ? [src.replace('s_', 'l_')] : [(imgHost + src).replace('s_', 'l_')];
            wx.previewImage({
                // 当前显示图片的http链接
                current: urls[0],
                // 需要预览的图片http链接列表
                urls: urls
            });
        });
    };
    /** 图像选择 */
    WeiXin.prototype.chooseImage = function (savephotos) {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                _this.uploadImage(localIds[0], savephotos);
            }
        });
    };
    /** 上传图片 */
    WeiXin.prototype.uploadImage = function (localId, savephotos) {
        var _this = this;
        _component_Toast__WEBPACK_IMPORTED_MODULE_0__["default"].loading('上传中...');
        wx.uploadImage({
            localId: localId,
            isShowProgressTips: 0,
            success: function (res) {
                _component_Toast__WEBPACK_IMPORTED_MODULE_0__["default"].close();
                // 兼容IOS wkwebview模式
                if (window['__wxjs_is_wkwebview']) {
                    // 返回图片的服务器端ID
                    _this.getLocalImgData(localId, function (localData) { return savephotos(res.serverId, localData); });
                }
                else {
                    savephotos(res.serverId, localId);
                }
            },
            error: function (e) {
                _component_Toast__WEBPACK_IMPORTED_MODULE_0__["default"].close();
            }
        });
    };
    /** 获取本地图片接口 */
    WeiXin.prototype.getLocalImgData = function (localId, showphotos) {
        wx.getLocalImgData({
            localId: localId,
            success: function (res) {
                // localData是图片的base64数据，可以用img标签显示
                showphotos(res.localData);
            }
        });
    };
    /** 微信分享 */
    WeiXin.prototype.onShare = function (params) {
        var _this = this;
        this.ready(function () {
            var options = WeiXin.options;
            if (options && options.shareLink && options.shareTitle && options.shareDesc) {
                var callback = params && params.callback;
                var title = (params && params.title) || options && options.shareTitle;
                var desc = (params && params.desc) || options && options.shareDesc;
                var imgUrl = (params && params.imgUrl && _this.getHttpUrl(params.imgUrl)) || 'https://wap.yuejia100.cn/assert/img/logo.jpg';
                // const pathname = global.history.location.pathname;
                var link = (params && params.link) || options.shareLink();
                var apiList = [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                ];
                _this.hideConventionMenuItem();
                for (var i = 0; i < apiList.length; i++) {
                    var api = apiList[i];
                    wx[api]({
                        title: title,
                        desc: desc,
                        link: link,
                        imgUrl: imgUrl,
                        success: callback
                    });
                }
            }
            else {
                throw new Error('微信分享失败，缺失shareLink或shareTitle或shareDesc的配置');
            }
        });
    };
    return WeiXin;
}());

var weixin = new WeiXin();
/* harmony default export */ __webpack_exports__["default"] = (weixin);


/***/ }),

/***/ "./node_modules/yuejia/app/weixin/sha1.js":
/*!************************************************!*\
  !*** ./node_modules/yuejia/app/weixin/sha1.js ***!
  \************************************************/
/*! exports provided: hex_sha1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex_sha1", function() { return hex_sha1; });
var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function hex_sha1(s) { return binb2hex(core_sha1(str2binb(s), s.length * chrsz)); }
function b64_sha1(s) { return binb2b64(core_sha1(str2binb(s), s.length * chrsz)); }
function str_sha1(s) { return binb2str(core_sha1(str2binb(s), s.length * chrsz)); }
function hex_hmac_sha1(key, data) { return binb2hex(core_hmac_sha1(key, data)); }
function b64_hmac_sha1(key, data) { return binb2b64(core_hmac_sha1(key, data)); }
function str_hmac_sha1(key, data) { return binb2str(core_hmac_sha1(key, data)); }
function sha1_vm_test() {
    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
function core_sha1(x, len) {
    x[len >> 5] |= 0x80 << (24 - len % 32);
    x[((len + 64 >> 9) << 4) + 15] = len;
    var w = Array(80);
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    var e = -1009589776;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for (var j = 0; j < 80; j++) {
            if (j < 16)
                w[j] = x[i + j];
            else
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}
function sha1_ft(t, b, c, d) {
    if (t < 20)
        return (b & c) | ((~b) & d);
    if (t < 40)
        return b ^ c ^ d;
    if (t < 60)
        return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
}
function sha1_kt(t) {
    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
        (t < 60) ? -1894007588 : -899497514;
}
function core_hmac_sha1(key, data) {
    var bkey = str2binb(key);
    if (bkey.length > 16)
        bkey = core_sha1(bkey, key.length * chrsz);
    var ipad = Array(16), opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
    return core_sha1(opad.concat(hash), 512 + 160);
}
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function str2binb(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i % 32);
    return bin;
}
function binb2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (32 - chrsz - i % 32)) & mask);
    return str;
}
function binb2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
            hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}
function binb2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16)
            | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8)
            | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32)
                str += b64pad;
            else
                str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    }
    return str;
}



/***/ }),

/***/ "./node_modules/yuejia/assets/fail.svg":
/*!*********************************************!*\
  !*** ./node_modules/yuejia/assets/fail.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
      id: "fail-usage",
      viewBox: "0 0 72 72",
      url: __webpack_require__.p + "/svg/sprite_1.0.0.svg#fail-usage",
      toString: function () {
        return this.url;
      }
    }

/***/ }),

/***/ "./node_modules/yuejia/assets/loading.svg":
/*!************************************************!*\
  !*** ./node_modules/yuejia/assets/loading.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
      id: "loading-usage",
      viewBox: "0 -2 59.75 60.25",
      url: __webpack_require__.p + "/svg/sprite_1.0.0.svg#loading-usage",
      toString: function () {
        return this.url;
      }
    }

/***/ }),

/***/ "./node_modules/yuejia/assets/success.svg":
/*!************************************************!*\
  !*** ./node_modules/yuejia/assets/success.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
      id: "success-usage",
      viewBox: "0 0 72 72",
      url: __webpack_require__.p + "/svg/sprite_1.0.0.svg#success-usage",
      toString: function () {
        return this.url;
      }
    }

/***/ }),

/***/ "./node_modules/yuejia/component/Form/service.ts":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/component/Form/service.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
/* harmony import */ var _app_datatype_obArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/datatype/obArray */ "./node_modules/yuejia/app/datatype/obArray.ts");
/* harmony import */ var _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/datatype/obObject */ "./node_modules/yuejia/app/datatype/obObject.ts");



var Form = /** @class */ (function () {
    function Form(options) {
        /** 要提交的字段 */
        this.fields = new _app_datatype_obArray__WEBPACK_IMPORTED_MODULE_1__["default"]();
        /** 表单是否已触发 */
        this.trigger = new _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_2__["default"]({ defaultValue: false });
        this.request = options.request;
        this.submit = this.submit.bind(this);
    }
    Object.defineProperty(Form.prototype, "complete", {
        /** 表单是否在可提交状态 */
        get: function () {
            var fileds = this.fields.get();
            for (var i = 0; i < fileds.length; i++) {
                var filed = fileds[i];
                if (filed.state !== 'complete') {
                    return false;
                }
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    // @action public validate(fieldKey: string | undefined, submit: boolean, callback?: (field: Fields<any>) => void): void {
    //   let isComplete: boolean = true;
    //   // 是否触发了callback
    //   let isTriggerCallbcak = false;
    //   for (let i = 0; i < this.fields.length; i++) {
    //     const filed = this.fields[i];
    //     // 排除fileds调用getForm().validate时，对自身的验证
    //     // 并且只验证非正确的，getError !== false表示非正确
    //     if (fieldKey !== filed.fieldKey && filed.getError() !== false) {
    //       // filed.getError() === undefined和filed.getValue() === undefined表示为初始值，
    //       // 当error和value都是初始值且必选为true时，就忽略这个验证，为的是防止一个filed时输入完成时会引发其他还没输入的
    // tslint:disable-next-line:max-line-length
    //       const ignore = filed.getError() === undefined && filed.getValue() === undefined && filed.getRequired() === true && submit === false;
    //       if (ignore === false) {
    //         this.fields[i].validate();
    //       }
    //     }
    //     // 有一次验证没通过，整个表单就属于未完成状态
    //     // 为了防止isComplete被后面验证通过的值覆盖掉，所以仅在为true（初始值）时才去验证
    //     if (isComplete) {
    //       // 因为前面对filed.getError()为undefined进行过判断，所以这里不会为undefined
    //       // 因为this.fields[i].validate()调用后可能会改变filed.getError()的值，所以要重新调用一次，不能去做缓存
    //       isComplete = filed.getError() === false;
    //     }
    //     // isTriggerCallbcak只调用一次
    //     if (isTriggerCallbcak === false && callback && isComplete === false) {
    //       callback(this.fields[i]);
    //       isTriggerCallbcak = true;
    //     }
    //   }
    //   this.complete = isComplete;
    // }
    /**
     * 显示字段的错误提示
     * 同时只触发一个Toast
     */
    Form.prototype.showPrompt = function () {
        var fileds = this.fields.get();
        for (var i = 0; i < fileds.length; i++) {
            var filed = fileds[i];
            if (filed.state !== 'complete') {
                _Toast__WEBPACK_IMPORTED_MODULE_0__["default"].show(filed.getPrompt());
                return;
            }
        }
    };
    Form.prototype.submit = function (params) {
        if (this.complete) {
            if (this.request && this.request.state.get() !== 'loading') {
                this.trigger.set(false);
                this.request.state.set('loading');
                this.request.send(params);
            }
            else {
                console.warn('submit缺少request属性，不能发送请求');
            }
        }
        else {
            this.trigger.set(true);
            this.showPrompt();
        }
    };
    return Form;
}());
/* harmony default export */ __webpack_exports__["default"] = (Form);


/***/ }),

/***/ "./node_modules/yuejia/component/Icon/index.scss":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/component/Icon/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cirle-anim":"cirle-anim_eiO2H","cirleAnim":"cirle-anim_eiO2H"};

/***/ }),

/***/ "./node_modules/yuejia/component/Icon/index.tsx":
/*!******************************************************!*\
  !*** ./node_modules/yuejia/component/Icon/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./node_modules/yuejia/component/Icon/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);

// import * as classNames from 'classnames';
// import svgRootPath from '../../utils/svgRootPath';

// const prefixCls = 'yj-component-icon';
var Icon = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: props.className, style: props.style, onClick: props.onClick },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", { xlinkHref: props.src })));
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./node_modules/yuejia/component/ImgView/index.scss":
/*!**********************************************************!*\
  !*** ./node_modules/yuejia/component/ImgView/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/component/ImgView/index.tsx":
/*!*********************************************************!*\
  !*** ./node_modules/yuejia/component/ImgView/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StateMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StateMachine */ "./node_modules/yuejia/component/StateMachine/index.tsx");
/* harmony import */ var _utils_isHttp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isHttp */ "./node_modules/yuejia/utils/isHttp.ts");
/* harmony import */ var _app_weixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/weixin */ "./node_modules/yuejia/app/weixin/index.ts");
/* harmony import */ var _model_behavior_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/behavior/sheet */ "./node_modules/yuejia/model/behavior/sheet.ts");
/* harmony import */ var _PageStack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PageStack */ "./node_modules/yuejia/component/PageStack/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./node_modules/yuejia/component/ImgView/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var prefixCls = 'yj-component-imgview';
// const throttle: _.LoDashStatic['throttle'] = require('lodash/throttle');
var ImgView = /** @class */ (function (_super) {
    __extends(ImgView, _super);
    function ImgView(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {
            state: 'loading'
        };
        /** 用于加载图片，改变ImgView的状态 */
        _this.imgElem = new Image();
        _this.elemRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.onImgLoad = _this.onImgLoad.bind(_this);
        _this.onImgError = _this.onImgError.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    /** 限制setImgSrc的频率 */
    // private throttled: ((props: Props) => void) & _.Cancelable = throttle((props) => this.setImgSrc(props), 300, { leading: false });
    ImgView.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var stateChange = this.state.state !== nextState.state;
        return stateChange;
    };
    ImgView.prototype.componentDidMount = function () {
        this.imgElem.addEventListener('load', this.onImgLoad);
        this.imgElem.addEventListener('error', this.onImgError);
        this.setImgSrc(this.props);
    };
    ImgView.prototype.componentWillUnmount = function () {
        this.isUnmount = true;
        if (this.imgElem) {
            this.imgElem.removeEventListener('load', this.onImgLoad);
            this.imgElem.removeEventListener('error', this.onImgError);
        }
    };
    ImgView.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.completeView !== prevProps.completeView) {
            this.setImgSrc(this.props);
        }
    };
    ImgView.prototype.getSrc = function (props, src, type) {
        var host = type === 'complete' ? (props.host || ImgView.defaultHost) : '';
        var url = src && Object(_utils_isHttp__WEBPACK_IMPORTED_MODULE_3__["default"])(src) ? src : host + src;
        return url;
    };
    /** 图片的onload事件 */
    ImgView.prototype.onImgLoad = function () {
        var _this = this;
        if (!this.isUnmount) {
            this.setState({ state: 'complete' }, function () {
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.elemRef.current, 'complete');
                }
            });
        }
    };
    /** 图片的onerror事件 */
    ImgView.prototype.onImgError = function () {
        var _this = this;
        if (!this.isUnmount) {
            this.setState({ state: 'fail' }, function () {
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.elemRef.current, 'fail');
                }
            });
        }
    };
    /** 设置this.img的src属性 */
    ImgView.prototype.setImgSrc = function (props) {
        var src = this.getSrc(props, props.completeView, 'complete');
        if (src && this.imgElem) {
            this.imgElem.src = src;
        }
        else {
            this.setState({
                state: 'fail'
            });
        }
    };
    /** 计算图片高度，在mode='img'的情况下使用 */
    ImgView.prototype.calcHeight = function () {
        if (this.imgElem && this.imgElem.width) {
            var proportion = this.imgElem.height / this.imgElem.width;
            var containerWidth = this.props.containerWidth;
            return containerWidth === 'vw' ? proportion * 100 + 'vw' : proportion * containerWidth;
        }
        return 0;
    };
    ImgView.prototype.onClick = function (e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
        else if (this.props.previewImage) {
            var stackComponent = _PageStack__WEBPACK_IMPORTED_MODULE_6__["default"].getStackComponent();
            if (stackComponent && this.props.componentName) {
                stackComponent.behavior.trigger({
                    actionName: Object(_model_behavior_sheet__WEBPACK_IMPORTED_MODULE_5__["getActionName"])(_model_behavior_sheet__WEBPACK_IMPORTED_MODULE_5__["default"].ImgView, 0, this.props),
                    detailedData: {
                        id: this.props.imgId
                    }
                });
            }
            _app_weixin__WEBPACK_IMPORTED_MODULE_4__["default"].previewImage(this.props.completeView, ImgView.defaultHost);
        }
    };
    ImgView.prototype.render = function () {
        var _a = this.props, id = _a.id, loadingStyle = _a.loadingStyle, mode = _a.mode, shadow = _a.shadow, loadingView = _a.loadingView, completeView = _a.completeView, failView = _a.failView, stateMachine = _a.stateMachine, className = _a.className, style = _a.style, onFailClick = _a.onFailClick;
        var state = this.state.state;
        var complete = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(prefixCls + "-item", prefixCls + "-" + mode + "-mode", prefixCls + "-complete", className), style: __assign({}, style, { boxShadow: shadow ? '0 0 30px rgba(0, 0, 0, 0.9) inset' : undefined, backgroundImage: completeView ? "url(" + this.getSrc(this.props, completeView, 'complete') + ")" : 'none', paddingBottom: mode === 'img' ? this.calcHeight() : undefined }), id: id, onClick: state === 'complete' ? this.onClick : onFailClick, ref: this.elemRef }));
        return stateMachine ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateMachine__WEBPACK_IMPORTED_MODULE_2__["default"], { state: this.state.state, loadingStyle: loadingStyle },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateMachine__WEBPACK_IMPORTED_MODULE_2__["default"].Complete, null, complete),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateMachine__WEBPACK_IMPORTED_MODULE_2__["default"].Fail, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(prefixCls + "-item", prefixCls + "-" + mode + "-mode", prefixCls + "-fail", className), style: __assign({}, style, { backgroundImage: failView ? "url(" + this.getSrc(this.props, failView, 'fail') + ")" : 'none' }), onClick: onFailClick })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateMachine__WEBPACK_IMPORTED_MODULE_2__["default"].Loading, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(prefixCls + "-item", prefixCls + "-" + mode + "-mode", prefixCls + "-loading", className), style: __assign({}, style, { backgroundImage: loadingView ? "url(" + this.getSrc(this.props, loadingView, 'loading') + ")" : 'none' }) })))) : complete;
    };
    ImgView.defaultProps = {
        mode: 'div',
        completeView: '',
        failView: undefined,
        loadingView: undefined,
        stateMachine: true,
        containerWidth: 'vw'
    };
    ImgView.defaultHost = '';
    return ImgView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImgView);


/***/ }),

/***/ "./node_modules/yuejia/component/Input/service.ts":
/*!********************************************************!*\
  !*** ./node_modules/yuejia/component/Input/service.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_service_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_base/service/fields */ "./node_modules/yuejia/_base/service/fields.ts");
/* harmony import */ var _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/datatype/obObject */ "./node_modules/yuejia/app/datatype/obObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.value = new _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_1__["default"]({ defaultValue: props.defaultValue || '' });
        return _this;
    }
    Input.prototype.clear = function () {
        this.value.set('');
        this.setPrompt('');
    };
    return Input;
}(_base_service_fields__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),

/***/ "./node_modules/yuejia/component/Link/index.tsx":
/*!******************************************************!*\
  !*** ./node_modules/yuejia/component/Link/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/global */ "./node_modules/yuejia/app/global.ts");
/* harmony import */ var _model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/account */ "./node_modules/yuejia/model/account/index.ts");
/* harmony import */ var _utils_isHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/isHttp */ "./node_modules/yuejia/utils/isHttp.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// import stringToHex from '../../utils/stringToHex';



/** 点击锁，防止多次点击 */
// let lock = false;
/** 跳转到第三方链接 */
function toThirdLink(href) {
    // const urlsearchparams = new URLSearchParams(window.location.search);
    // const pathname = window.location.hash.replace('#', '');
    // const origin = window.location.origin;
    // const locationpathname = window.location.pathname;
    // // const encodePathname = pathname.indexOf('%2') >= 0 ? pathname : encodeURIComponent(pathname);
    // const route = pathname.substr(0, 2) === ('2f' || '2F') ? pathname : stringToHex(pathname);
    // // 设置当前的编码后的路由search
    // urlsearchparams.set('route', route);
    // const newUrl = origin + locationpathname + '?' + urlsearchparams.toString().replace(/%3F/g, '').replace(/%3f/g, '') + '#' + pathname;
    // // 替换当前的路由
    // window.history.replaceState({}, document.title, newUrl);
    // 跳转到目标地址
    window.location.href = href;
}
function go(url, replace) {
    if (Object(_utils_isHttp__WEBPACK_IMPORTED_MODULE_4__["default"])(url)) {
        toThirdLink(url);
    }
    else if (_app_global__WEBPACK_IMPORTED_MODULE_2__["default"].history.location.pathname !== url) {
        if (replace) {
            _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].history.replace(url);
        }
        else {
            _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].history.push(url);
        }
    }
}
function link(url, replace, loginAuth) {
    // if (lock === false) {
    if (loginAuth) {
        _model_account__WEBPACK_IMPORTED_MODULE_3__["default"].loginAuth(function () {
            go(url, replace);
        });
    }
    else {
        go(url, replace);
    }
    // lock = true;
    // setTimeout(() => {
    //   lock = false;
    // }, 320);
    // }
}
var prefixCls = 'yj-component-link';
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        // this.elemRef = React.createRef();
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    /** push一个路由 */
    Link.go = function (url, options) {
        link(url, false, options && options.loginAuth);
        Link.button = options && options.button;
    };
    /** replace一个路由 */
    Link.replace = function (url, options) {
        // const route = switchRouter(global._routes, url);
        // if (!route) {
        //   console.error('路由错误');
        // } else if (!route.props.component.pageName) {
        //   console.warn(route.props.component.displayName, 'pageNames属性为空');
        // }
        link(url, true, options && options.loginAuth);
        Link.button = options && options.button;
    };
    /** pop一个路由 */
    Link.goBack = function (button) {
        Link.button = button;
        _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].history.goBack();
    };
    Link.prototype.onClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var _a = this.props, to = _a.to, loginAuth = _a.loginAuth, replace = _a.replace, button = _a.button;
        if (replace) {
            Link.replace(to, { loginAuth: loginAuth, button: button });
        }
        else {
            Link.go(to, { loginAuth: loginAuth, button: button });
        }
    };
    Link.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, datatype = _a.datatype;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(prefixCls, className), onClick: this.onClick, "data-type": datatype }, children));
    };
    return Link;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Link);


/***/ }),

/***/ "./node_modules/yuejia/component/Model/index.tsx":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/component/Model/index.tsx ***!
  \*******************************************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var create_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-subscription */ "./node_modules/create-subscription/index.js");
/* harmony import */ var create_subscription__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(create_subscription__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/global */ "./node_modules/yuejia/app/global.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var subscribeCallback;
var dispatchLock = false;
var rafId = 1;
var Subscription = Object(create_subscription__WEBPACK_IMPORTED_MODULE_1__["createSubscription"])({
    getCurrentValue: function (model) {
        return model;
    },
    subscribe: function (model, callback) {
        subscribeCallback = callback;
        return function () { return null; };
    }
});
// function dispatch(): void {
// }
function rafDispatch() {
    if (dispatchLock === false && subscribeCallback) {
        subscribeCallback({});
        dispatchLock = true;
    }
    if (_app_global__WEBPACK_IMPORTED_MODULE_2__["default"].inputFoucs && rafId) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
    }
    else {
        rafId = requestAnimationFrame(rafDispatch);
    }
}
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            load: false
        };
        return _this;
    }
    /** 广播，将数据的更新从上至下传播出去 */
    Model.dispatch = function () {
        // 判断是否是从输入框触发的，如果是就不加setTimeout，因为输入框加setTimeout在输入中文时会有BUG
        if (_app_global__WEBPACK_IMPORTED_MODULE_2__["default"].inputFoucs) {
            subscribeCallback({});
            _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].inputFoucs = false;
            dispatchLock = true;
        }
        else {
            dispatchLock = false;
            if (rafId === undefined) {
                rafDispatch();
            }
        }
    };
    Model.prototype.componentDidMount = function () {
        this.setState({
            load: true
        }, function () {
            rafDispatch();
        });
    };
    Model.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Subscription, { source: {} }, this.state.load ? function (value) {
            return _this.props.children(value);
        } : function () { return null; }));
    };
    return Model;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var Context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
/* harmony default export */ __webpack_exports__["default"] = (Model);


/***/ }),

/***/ "./node_modules/yuejia/component/PageStack/index.tsx":
/*!***********************************************************!*\
  !*** ./node_modules/yuejia/component/PageStack/index.tsx ***!
  \***********************************************************/
/*! exports provided: getPrevPageClass, push, onPageLeave, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevPageClass", function() { return getPrevPageClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageLeave", function() { return onPageLeave; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/global */ "./node_modules/yuejia/app/global.ts");
/* harmony import */ var _utils_historyReplace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/historyReplace */ "./node_modules/yuejia/utils/historyReplace.ts");
/* harmony import */ var _model_behavior_pageLeave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/behavior/pageLeave */ "./node_modules/yuejia/model/behavior/pageLeave.ts");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
/* harmony import */ var _utils_setDocumetTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/setDocumetTitle */ "./node_modules/yuejia/utils/setDocumetTitle.ts");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/env */ "./node_modules/yuejia/utils/env.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_env__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// import switchRouter, { Props as SwitchRouterProps } from '../../utils/switchRouter';





// 对route中返回的page element手动创建
function getRoute(nextProps) {
    _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].pageId++;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_global__WEBPACK_IMPORTED_MODULE_2__["default"].appRoute, { key: _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].pageId, location: nextProps.location });
}
// function getPageStackInAppRoute(nextProps: Props): PageType {
//   const route = switchRouter(nextProps.routes, nextProps.location.pathname) as React.ReactElement<SwitchRouterProps>;
//   if (!route) {
//     console.error('路由解析失败，请检查路由映射或url是否正确');
//   }
//   return route.props.component;
// }
// 获取上一个页面的类声明
function getPrevPageClass(prevCount) {
    return Stack.component[Stack.component.length - prevCount];
}
/** 是否是replace动作 */
function isReplaceAction(nextProps) {
    var action = nextProps.history.action;
    var isReplace = action === 'REPLACE';
    return isReplace;
}
/** 获取页面的pageRef静态属性 */
// function getPageRootElemRef(page: PageType | undefined): HTMLElement | null {
//   if (page) {
//     const pageRootElemRef = page.pageRootElemRef;
//     if (pageRootElemRef === undefined) {
//       console.warn('页面组件中pageRef不存在，请检查setPageRef是否正确调用');
//     }
//     return pageRootElemRef.current;
//   }
//   return null;
// }
function push(nextProps) {
    onPush(nextProps);
    window.scrollTo(0, 0);
}
function pop(nextProps) {
    var top = Stack.scrollLocation[Stack.scrollLocation.length - 1];
    if (Stack.component.length) {
        onPop(nextProps);
    }
    Stack.component.pop();
    Stack.scrollLocation.pop();
    _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].pageId--;
    window.scrollTo(0, top);
}
function onPush(nextProps) {
    var currentComponent = getPrevPageClass(2);
    var toComponent = getPrevPageClass(1);
    // const pageRef = getPageRootElemRef(currentComponent);
    // 上一个页面的离开事件
    if (currentComponent && currentComponent.pageLeave) {
        currentComponent.pageLeave();
    }
    // 排除第一次初始化时调用，这个方法应该在离开页面时调用
    if (Stack.component.length > 1 && isReplaceAction(nextProps) === false) {
        onPageLeave(currentComponent, toComponent, 'enter');
    }
    // if (pageRef) {
    //   pageRef.style.display = 'none';
    // }
}
function onPop(nextProps) {
    if (isReplaceAction(nextProps)) {
        return;
    }
    var currentComponent = getPrevPageClass(1);
    var toComponent = getPrevPageClass(2);
    // const pageRef = getPageRootElemRef(toComponent);
    // 目标页面的进入事件
    if (toComponent && toComponent.pageEnter) {
        toComponent.pageEnter();
        // 后退回页面时，让hasSend初始化
        toComponent.behavior.postAction.hasSend = false;
        // 后退回页面时，重置进入时间
        toComponent.entrytime = Date.now();
    }
    onPageLeave(currentComponent, toComponent, 'exit');
    // if (pageRef) {
    //   pageRef.style.display = 'block';
    // }
}
// function onReplace(): void {
//   const currentComponent = Stack.component[Stack.component.length - 1];
//   if (currentComponent.pageLeave) {
//     currentComponent.pageLeave();
//   }
//   // pageLeave({
//   //   behavior: currentComponent.behavior,
//   //   type: 'enter',
//   //   now: currentComponent.pageName || '',
//   //   to: route && route.props.component.pageName || '',
//   //   staytime: currentComponent._staytime
//   // });
//   window.scrollTo(0, 0);
// }
function onPageLeave(currentComponent, toComponent, type) {
    if ((currentComponent && currentComponent.pageName) && (toComponent && toComponent.pageName)) {
        Object(_model_behavior_pageLeave__WEBPACK_IMPORTED_MODULE_4__["default"])({
            behavior: currentComponent.behavior,
            type: type,
            now: currentComponent.pageName,
            to: toComponent.pageName || '',
            staytime: currentComponent.getStaytime(),
            entrytime: currentComponent.entrytime
        });
    }
}
// 用于第一次进入时将route的参数应用到react-router上，简单来说就是达到了一个跳转的效果
if (_utils_env__WEBPACK_IMPORTED_MODULE_7__["other"].historyMode !== 'browser') {
    Object(_utils_historyReplace__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            route: [getRoute(_this.props)],
            lastPathname: _this.props.location.pathname
        };
        _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].history = props.history;
        return _this;
    }
    Stack.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var props = this.props;
        return nextProps.location.pathname !== props.location.pathname;
    };
    Stack.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.location.pathname === prevState.lastPathname) {
            return null;
        }
        var nextHistory = nextProps.history;
        var loadingElem = document.querySelector('.yj-component-toast-loading');
        // 防止Toast.loading卡死页面
        if (loadingElem) {
            _Toast__WEBPACK_IMPORTED_MODULE_5__["default"].close();
        }
        if (nextHistory.action === 'POP') {
            pop(nextProps);
            prevState.route.pop();
            var component = Stack.getStackComponent();
            if (component && component.pageName) {
                Object(_utils_setDocumetTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(component.pageName);
                component.pageActive();
            }
        }
        else {
            if (nextHistory.action === 'REPLACE') {
                _app_global__WEBPACK_IMPORTED_MODULE_2__["default"].replaceBeforeComponent = __assign({}, Stack.getStackComponent());
                // onReplace();
                // pop当前这个页面
                pop(nextProps);
                prevState.route.pop();
            }
            Stack.scrollLocation.push(window.scrollY);
            prevState.route.push(getRoute(nextProps));
        }
        if (prevState.route.length === 0) {
            Stack.scrollLocation.push(window.scrollY);
            prevState.route.push(getRoute(nextProps));
        }
        if (nextProps.onRouteChange) {
            nextProps.onRouteChange(nextProps.location.pathname);
        }
        return {
            route: prevState.route,
            lastPathname: nextProps.location.pathname
        };
    };
    /** 从stack中获取当前页面 */
    Stack.getStackComponent = function () {
        return Stack.component[Stack.component.length - 1];
    };
    // public componentDidUpdate(prevProps: Props): void {
    //   const props = this.props as Props;
    // }
    Stack.prototype.render = function () {
        return this.state.route;
    };
    /** 项目中的Page组件 */
    Stack.component = [];
    /** 离开页面时记录的滚动条位置 */
    Stack.scrollLocation = [];
    return Stack;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Stack));


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/AutoHeight.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/AutoHeight.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/元素在页面中居中 */ "./node_modules/yuejia/utils/元素在页面中居中.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./node_modules/yuejia/component/StateMachine/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var prefixCls = 'yj-component-statemachine';
var AutoHeight = /** @class */ (function (_super) {
    __extends(AutoHeight, _super);
    function AutoHeight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elemRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        return _this;
    }
    AutoHeight.prototype.componentDidMount = function () {
        if (this.elemRef.current) {
            this.elemRef.current.style.height = (Object(_utils___WEBPACK_IMPORTED_MODULE_1__["default"])(this.elemRef.current) || 0) + 'px';
        }
    };
    AutoHeight.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls, ref: this.elemRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-body" }, this.props.children || null)));
    };
    return AutoHeight;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (AutoHeight);


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/Complete.tsx":
/*!*****************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/Complete.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AutoHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoHeight */ "./node_modules/yuejia/component/StateMachine/AutoHeight.tsx");


var Complete = function (props) {
    return props.autoHeight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AutoHeight__WEBPACK_IMPORTED_MODULE_1__["default"], null, props.children || null)) : props.children || null;
};
/* harmony default export */ __webpack_exports__["default"] = (Complete);


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/Empty.tsx":
/*!**************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/Empty.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AutoHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoHeight */ "./node_modules/yuejia/component/StateMachine/AutoHeight.tsx");


var Empty = function (props) {
    return props.autoHeight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AutoHeight__WEBPACK_IMPORTED_MODULE_1__["default"], null, props.children || null)) : props.children || null;
};
/* harmony default export */ __webpack_exports__["default"] = (Empty);


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/Fail.tsx":
/*!*************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/Fail.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AutoHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoHeight */ "./node_modules/yuejia/component/StateMachine/AutoHeight.tsx");


var Fail = function (props) {
    return props.autoHeight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AutoHeight__WEBPACK_IMPORTED_MODULE_1__["default"], null, props.children || null)) : props.children || null;
};
/* harmony default export */ __webpack_exports__["default"] = (Fail);


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/Loading.tsx":
/*!****************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/Loading.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateView_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StateView/Loading */ "./node_modules/yuejia/component/StateView/Loading/index.tsx");
/* harmony import */ var _AutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoHeight */ "./node_modules/yuejia/component/StateMachine/AutoHeight.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var Loading = function (props) {
    var autoHeight = props.autoHeight === undefined ? true : props.autoHeight;
    var children = props.children;
    return autoHeight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"], null, children || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateView_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, props)))) : children || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StateView_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);


/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/index.scss":
/*!***************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/component/StateMachine/index.tsx":
/*!**************************************************************!*\
  !*** ./node_modules/yuejia/component/StateMachine/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./node_modules/yuejia/component/StateMachine/Loading.tsx");
/* harmony import */ var _Complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Complete */ "./node_modules/yuejia/component/StateMachine/Complete.tsx");
/* harmony import */ var _Fail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fail */ "./node_modules/yuejia/component/StateMachine/Fail.tsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Empty */ "./node_modules/yuejia/component/StateMachine/Empty.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// import { ReadOnly } from '../../_base/datatype';




/** 获取状态渲染视图 */
function getStateRender(props) {
    var render = null;
    // 根据当前状态赋予对应的视图
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(props.children, function (child) {
        if (render === null) {
            var childElement = child;
            var type = childElement && childElement.type;
            if ((props.state === 'complete' && type === _Complete__WEBPACK_IMPORTED_MODULE_2__["default"]) ||
                (props.state === 'empty' && type === _Empty__WEBPACK_IMPORTED_MODULE_4__["default"]) ||
                (props.state === 'fail' && type === _Fail__WEBPACK_IMPORTED_MODULE_3__["default"]) ||
                (props.state === 'loading' && type === _Loading__WEBPACK_IMPORTED_MODULE_1__["default"])) {
                render = childElement;
            }
        }
    });
    // 如果children里没有声明Loading视图就使用默认的
    if (!render && props.state === 'loading') {
        render = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StateMachine.Loading, { style: props.loadingStyle });
    }
    return render;
}
function getCompleteRender(props) {
    var render = null;
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(props.children, function (child) {
        var childElement = child;
        if (childElement && childElement.type === _Complete__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            render = childElement;
        }
    });
    return render;
}
/** 有限状态机 */
var StateMachine = /** @class */ (function (_super) {
    __extends(StateMachine, _super);
    function StateMachine(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {
            render: null,
            lastState: _this.props.state,
            renderCount: 0
        };
        return _this;
    }
    StateMachine.getDerivedStateFromProps = function (nextProps, prevState) {
        if ((prevState.lastState !== nextProps.state) ||
            (prevState.renderCount === 0 && prevState.lastState === nextProps.state)) {
            return {
                render: getStateRender(nextProps),
                lastState: nextProps.state,
                renderCount: prevState.renderCount + 1
            };
        }
        else if (prevState.lastState === nextProps.state && nextProps.state === 'complete') {
            return {
                render: getCompleteRender(nextProps),
                lastState: nextProps.state,
                renderCount: prevState.renderCount + 1
            };
        }
        return null;
    };
    StateMachine.prototype.render = function () {
        return this.state.render;
    };
    /** 成功的视图 */
    StateMachine.Complete = _Complete__WEBPACK_IMPORTED_MODULE_2__["default"];
    /** 失败的视图 */
    StateMachine.Fail = _Fail__WEBPACK_IMPORTED_MODULE_3__["default"];
    /** 加载中的视图 */
    StateMachine.Loading = _Loading__WEBPACK_IMPORTED_MODULE_1__["default"];
    /** 数据为空的视图 */
    StateMachine.Empty = _Empty__WEBPACK_IMPORTED_MODULE_4__["default"];
    return StateMachine;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (StateMachine);


/***/ }),

/***/ "./node_modules/yuejia/component/StateView/Loading/index.scss":
/*!********************************************************************!*\
  !*** ./node_modules/yuejia/component/StateView/Loading/index.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cirle":"cirle_2swFR"};

/***/ }),

/***/ "./node_modules/yuejia/component/StateView/Loading/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/yuejia/component/StateView/Loading/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./node_modules/yuejia/component/StateView/Loading/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var prefixCls = 'yj-component-loading';
var Loading = function (props) {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__((_a = {},
                _a[prefixCls + "-cirle"] = true,
                _a[props.className || ''] = !!props.className,
                _a)), style: __assign({ borderWidth: props.size || 6, borderTopColor: props.backgroundColor || '#ccc', borderBottomColor: props.backgroundColor || '#ccc', borderRightColor: props.backgroundColor || '#ccc', borderLeftColor: props.activeColor || '#108ee9' }, props.style) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-placeholder" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);


/***/ }),

/***/ "./node_modules/yuejia/component/Toast/Toast.tsx":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/component/Toast/Toast.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./node_modules/yuejia/component/Icon/index.tsx");
/* harmony import */ var _utils_svgRootPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/svgRootPath */ "./node_modules/yuejia/utils/svgRootPath.ts");



var svgFile = {
    success: _utils_svgRootPath__WEBPACK_IMPORTED_MODULE_2__["default"] + __webpack_require__(/*! ../../assets/success.svg */ "./node_modules/yuejia/assets/success.svg").id,
    fail: _utils_svgRootPath__WEBPACK_IMPORTED_MODULE_2__["default"] + __webpack_require__(/*! ../../assets/fail.svg */ "./node_modules/yuejia/assets/fail.svg").id,
    loading: _utils_svgRootPath__WEBPACK_IMPORTED_MODULE_2__["default"] + __webpack_require__(/*! ../../assets/loading.svg */ "./node_modules/yuejia/assets/loading.svg").id
};
var prefixCls = 'yj-component-toast';
var Toast = function (props) {
    var type = props.type, children = props.children;
    return type ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-text " + prefixCls + "-text-icon" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], { src: svgFile[type] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-text-info" }, children))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-text" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: prefixCls + "-text-label" }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Toast);


/***/ }),

/***/ "./node_modules/yuejia/component/Toast/index.scss":
/*!********************************************************!*\
  !*** ./node_modules/yuejia/component/Toast/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/component/Toast/index.tsx":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/component/Toast/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ "./node_modules/yuejia/component/Toast/Toast.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./node_modules/yuejia/component/Toast/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var now = Date.now();
var prefixCls = 'yj-component-toast';
function getContainer() {
    var uuid = "toast_" + now;
    var container = document.getElementById(uuid);
    if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', uuid);
        document.body.appendChild(container);
    }
    return container;
}
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fade: false
        };
        /** 是否执行了componentWillUnmount */
        _this.isUnmount = false;
        return _this;
    }
    Toast.show = function (content, duration) {
        Toast.close();
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]((react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Toast, { duration: duration }, content)), getContainer());
    };
    Toast.loading = function (content) {
        Toast.close();
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]((react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Toast, { className: prefixCls + "-loading", duration: 10000, mask: true }, content)), getContainer());
    };
    Toast.close = function () {
        var container = getContainer();
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](container);
        document.body.removeChild(container);
    };
    Toast.prototype.componentDidMount = function () {
        var _this = this;
        if (this.isUnmount === false) {
            this.startCloseTimer();
            setTimeout(function () {
                _this.setFade(true);
            });
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.isUnmount = true;
        this.clearCloseTimer();
    };
    Toast.prototype.close = function () {
        var _this = this;
        if (this.isUnmount === false) {
            this.setFade(false);
            this.unmountTimer = setTimeout(function () {
                if (_this.props.onClose) {
                    _this.props.onClose();
                }
                Toast.close();
            }, 300);
        }
    };
    Toast.prototype.setFade = function (state) {
        if (this.isUnmount === false) {
            this.setState({
                fade: state
            });
        }
    };
    Toast.prototype.startCloseTimer = function () {
        var _this = this;
        if (this.props.duration) {
            this.closeTimer = setTimeout(function () {
                _this.close();
            }, this.props.duration * 1000 - 300);
        }
    };
    Toast.prototype.clearCloseTimer = function () {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
        if (this.unmountTimer) {
            clearTimeout(this.unmountTimer);
            this.unmountTimer = null;
        }
    };
    Toast.prototype.render = function () {
        var _a;
        var _b = this.props, mask = _b.mask, className = _b.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, (_a = {},
                _a[prefixCls] = true,
                _a[prefixCls + "-fade"] = this.state.fade,
                _a[prefixCls + "-mask"] = mask,
                _a[prefixCls + "-nomask"] = !mask,
                _a)) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Toast__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, this.props), this.props.children)));
    };
    Toast.defaultProps = {
        type: undefined,
        duration: 3
    };
    return Toast;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Toast);


/***/ }),

/***/ "./node_modules/yuejia/model/account/get.ts":
/*!**************************************************!*\
  !*** ./node_modules/yuejia/model/account/get.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/request */ "./node_modules/yuejia/app/request.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/yuejia/model/account/index.ts");
/* harmony import */ var _component_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Get = /** @class */ (function (_super) {
    __extends(Get, _super);
    function Get(service, props) {
        var _this = _super.call(this, props) || this;
        _this.again = true;
        _this.service = service;
        return _this;
    }
    /** 发送请求 */
    Get.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, userCacheId;
            return __generator(this, function (_a) {
                // 必须是登录状态下才会发送请求
                if (_index__WEBPACK_IMPORTED_MODULE_1__["default"].loginState !== true) {
                    return [2 /*return*/];
                }
                options = this.service.options;
                userCacheId = options.userCacheId;
                // let store: string | undefined | null;
                // if (storageKey) {
                //   store = window.localStorage.getItem(storageKey);
                // }
                // // 缓存存在就去读缓存，否则重新请求
                // if (store) {
                //   let data: StorageData | undefined;
                //   try {
                //     data = JSON.parse(store) as StorageData;
                //   } catch (err) {
                //     console.error('account->get->send失败，JSON.parse错误，请检查结构是否正确', err);
                //   }
                //   // 判断userCacheId是否相同，如果不同用户信息有可能会更新
                //   if (data && data.userCacheId === userCacheId) {
                //     if (this._callback) {
                //       this._callback({
                //         retCode: '0000',
                //         retMsg: '',
                //         result: data
                //       });
                //     }
                //     this.service.setData(data);
                //     this.state.set('complete');
                //   } else {
                //     this.request(userCacheId, storageKey);
                //   }
                // } else {
                // this.request(userCacheId, storageKey);
                // }
                this.request(userCacheId);
                return [2 /*return*/];
            });
        });
    };
    Get.prototype.request = function (userCacheId, storageKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.action({
                    config: {
                        url: this._api,
                        method: 'post',
                        data: {
                            userCacheId: userCacheId
                        }
                    }
                }).then(function (response) {
                    if (response.retCode === '0000') {
                        if (response.result) {
                            if (_this._callback) {
                                _this._callback(response);
                            }
                            _this.service.setData(response.result);
                        }
                        else {
                            if (storageKey) {
                                window.localStorage.removeItem(storageKey);
                            }
                        }
                    }
                    else {
                        _component_Toast__WEBPACK_IMPORTED_MODULE_2__["default"].show(response.retMsg);
                    }
                }).catch(function (err) {
                    if (_this._failback) {
                        _this._failback(err);
                    }
                    throw err;
                });
                return [2 /*return*/];
            });
        });
    };
    return Get;
}(_app_request__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Get);


/***/ }),

/***/ "./node_modules/yuejia/model/account/index.ts":
/*!****************************************************!*\
  !*** ./node_modules/yuejia/model/account/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_stringToHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringToHex */ "./node_modules/yuejia/utils/stringToHex.ts");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/global */ "./node_modules/yuejia/app/global.ts");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "./node_modules/yuejia/model/account/get.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./node_modules/yuejia/model/account/register.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./node_modules/yuejia/model/account/signin.ts");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./node_modules/yuejia/model/account/save.ts");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset */ "./node_modules/yuejia/model/account/reset.ts");
/* harmony import */ var _verification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification */ "./node_modules/yuejia/model/account/verification.ts");
/* harmony import */ var _utils_isHttp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/isHttp */ "./node_modules/yuejia/utils/isHttp.ts");
/* harmony import */ var _component_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/Link */ "./node_modules/yuejia/component/Link/index.tsx");
/* harmony import */ var _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/datatype/obObject */ "./node_modules/yuejia/app/datatype/obObject.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};











var postRequest = [_register__WEBPACK_IMPORTED_MODULE_3__["default"], _signin__WEBPACK_IMPORTED_MODULE_4__["default"], _reset__WEBPACK_IMPORTED_MODULE_6__["default"], _save__WEBPACK_IMPORTED_MODULE_5__["default"], _get__WEBPACK_IMPORTED_MODULE_2__["default"], _verification__WEBPACK_IMPORTED_MODULE_7__["default"]];
var Account = /** @class */ (function () {
    function Account(options, request) {
        var _this = this;
        /** 从接口获取到用户数据 */
        this.data = new _app_datatype_obObject__WEBPACK_IMPORTED_MODULE_10__["default"]({ defaultValue: undefined });
        ['register', 'signin', 'reset', 'save', 'get', 'verification'].forEach(function (requestName, i) {
            var reqiestKey = requestName + 'Request';
            var propRequest = request[reqiestKey];
            _this[reqiestKey] = new (postRequest[i])(_this, propRequest);
        });
        this.options = options;
        this.loginAuth = this.loginAuth.bind(this);
        Account.loginState = options.loginState;
        Account.subscribeState = options.subscribeState;
        Account.loginAuth = this.loginAuth;
    }
    /** 登录认证, 已登录调用callback，否则就跳公共登录页 */
    Account.prototype.loginAuth = function (callback, loginUrl) {
        if (Account.loginState === true && callback) {
            callback();
        }
        else if (loginUrl) {
            if (Object(_utils_isHttp__WEBPACK_IMPORTED_MODULE_8__["default"])(loginUrl)) {
                location.href = loginUrl;
            }
            else {
                _component_Link__WEBPACK_IMPORTED_MODULE_9__["default"].go(loginUrl);
            }
        }
        else {
            var options = this.options;
            if (options && options.loginHost && options.loginCallBack) {
                var loginHost = options.loginHost;
                var loginCallBack = encodeURIComponent(options.loginCallBack);
                var pathname = Object(_utils_stringToHex__WEBPACK_IMPORTED_MODULE_0__["default"])(_app_global__WEBPACK_IMPORTED_MODULE_1__["default"].history.location.pathname);
                location.href = loginHost + '&callBackUrl=' + loginCallBack + '&route=' + pathname;
            }
            else {
                console.error('登录认证失败，缺少Account.loginHost或Account.loginCallBack');
            }
        }
    };
    Account.prototype.setData = function (data) {
        var options = this.options;
        Account.loginState = true;
        var svaeData = __assign({}, data, { userCacheId: options && options.userCacheId });
        this.data.set(data);
        if (options && options.storageKey) {
            window.localStorage.setItem(options.storageKey, JSON.stringify(svaeData));
        }
        else if (this.getRequest) {
            console.warn('Account.storageKey没有设置，数据不能存储在localStorage中');
        }
    };
    return Account;
}());
/* harmony default export */ __webpack_exports__["default"] = (Account);


/***/ }),

/***/ "./node_modules/yuejia/model/account/post.ts":
/*!***************************************************!*\
  !*** ./node_modules/yuejia/model/account/post.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/request */ "./node_modules/yuejia/app/request.ts");
/* harmony import */ var _component_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
/* harmony import */ var _component_Form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Form/service */ "./node_modules/yuejia/component/Form/service.ts");
/* harmony import */ var _component_Input_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Input/service */ "./node_modules/yuejia/component/Input/service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(service, props) {
        var _this = _super.call(this, props) || this;
        _this.form = new _component_Form_service__WEBPACK_IMPORTED_MODULE_2__["default"]({
            request: _this
        });
        /** 注册账号 */
        _this.tel = new _component_Input_service__WEBPACK_IMPORTED_MODULE_3__["default"]({
            fieldKey: 'tel',
            fieldName: _this.options && _this.options.fieldName && _this.options.fieldName.tel || '注册账号',
            required: true,
            validate: 'tel',
            // onChange: this.verificationRequest && this.verificationRequest.setCompelte,
            form: function () { return _this.form; }
        });
        /** 验证码 */
        _this.verificationCode = new _component_Input_service__WEBPACK_IMPORTED_MODULE_3__["default"]({
            fieldKey: 'verificationCode',
            fieldName: '验证码',
            required: true,
            // maxLength: 4,
            // type: 'integer',
            validate: 'integer',
            form: function () { return _this.form; }
        });
        /** 密码 */
        _this.password = new _component_Input_service__WEBPACK_IMPORTED_MODULE_3__["default"]({
            fieldKey: 'password',
            fieldName: '密码',
            required: true,
            // type: 'password',
            // maxLength: 18,
            validate: function (value) {
                var regexp = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/);
                var isOrderly = regexp.test(value || '');
                if (_this.password) {
                    _this.password.setPrompt(isOrderly ? '' : '密码格式为8-16位数字加字母');
                }
                return isOrderly;
            },
            form: function () { return _this.form; }
        });
        /** 再次输入密码 */
        _this.repassword = new _component_Input_service__WEBPACK_IMPORTED_MODULE_3__["default"]({
            fieldKey: 'password',
            fieldName: '再次输入密码',
            required: true,
            // type: 'password',
            validate: function (value) {
                var isEqual = _this.password.value.get() === value;
                if (_this.repassword) {
                    _this.repassword.setPrompt(isEqual ? '' : '两次密码输入不一致');
                }
                return isEqual;
            },
            form: function () { return _this.form; }
        });
        _this.options = props;
        return _this;
    }
    /** 清空基础字段的值 */
    Post.prototype.baseClear = function () {
        this.tel.clear();
        this.verificationCode.clear();
        this.password.clear();
        this.repassword.clear();
        this.form.trigger.set(false);
    };
    /** 发送请求 */
    Post.prototype.send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.action({
                    config: {
                        url: this._api,
                        method: 'post',
                        data: params
                    }
                }).then(function (response) {
                    if (response.retCode === '0000') {
                        if (_this._callback) {
                            _this._callback(response);
                        }
                        if (params && params.callback) {
                            params.callback(response);
                        }
                        _this.baseClear();
                    }
                    else {
                        _component_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].show(response.retMsg);
                    }
                }).catch(function (err) {
                    if (_this._failback) {
                        _this._failback(err);
                    }
                    if (params && params.failback) {
                        params.failback(err);
                    }
                    _component_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].show('网络繁忙');
                    throw err;
                });
                return [2 /*return*/];
            });
        });
    };
    return Post;
}(_app_request__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Post);


/***/ }),

/***/ "./node_modules/yuejia/model/account/register.ts":
/*!*******************************************************!*\
  !*** ./node_modules/yuejia/model/account/register.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./node_modules/yuejia/model/account/post.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register(service, props) {
        return _super.call(this, service, props) || this;
    }
    return Register;
}(_post__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Register);


/***/ }),

/***/ "./node_modules/yuejia/model/account/reset.ts":
/*!****************************************************!*\
  !*** ./node_modules/yuejia/model/account/reset.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./node_modules/yuejia/model/account/post.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Reset = /** @class */ (function (_super) {
    __extends(Reset, _super);
    function Reset(service, props) {
        return _super.call(this, service, props) || this;
    }
    return Reset;
}(_post__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Reset);


/***/ }),

/***/ "./node_modules/yuejia/model/account/save.ts":
/*!***************************************************!*\
  !*** ./node_modules/yuejia/model/account/save.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./node_modules/yuejia/model/account/post.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Save = /** @class */ (function (_super) {
    __extends(Save, _super);
    function Save(service, props) {
        return _super.call(this, service, props) || this;
    }
    return Save;
}(_post__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Save);


/***/ }),

/***/ "./node_modules/yuejia/model/account/signin.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/model/account/signin.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./node_modules/yuejia/model/account/post.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Signin = /** @class */ (function (_super) {
    __extends(Signin, _super);
    function Signin(service, props) {
        return _super.call(this, service, props) || this;
    }
    return Signin;
}(_post__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Signin);


/***/ }),

/***/ "./node_modules/yuejia/model/account/verification.ts":
/*!***********************************************************!*\
  !*** ./node_modules/yuejia/model/account/verification.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/request */ "./node_modules/yuejia/app/request.ts");
/* harmony import */ var _component_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Toast */ "./node_modules/yuejia/component/Toast/index.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Verification = /** @class */ (function (_super) {
    __extends(Verification, _super);
    function Verification(service, props) {
        return _super.call(this, props) || this;
    }
    /** 发送请求 */
    Verification.prototype.send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.action({
                    config: {
                        url: this._api,
                        method: 'post',
                        data: params
                    }
                }).then(function (response) {
                    if (response.retCode === '0000') {
                        if (_this._callback) {
                            _this._callback(response);
                        }
                        if (params && params.callback) {
                            params.callback(response);
                        }
                    }
                    else {
                        _component_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].show(response.retMsg);
                    }
                }).catch(function (err) {
                    if (_this._failback) {
                        _this._failback(err);
                    }
                    if (params && params.failback) {
                        params.failback(err);
                    }
                    _component_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].show('网络繁忙');
                    throw err;
                });
                return [2 /*return*/];
            });
        });
    };
    return Verification;
}(_app_request__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Verification);


/***/ }),

/***/ "./node_modules/yuejia/model/behavior/pageLeave.ts":
/*!*********************************************************!*\
  !*** ./node_modules/yuejia/model/behavior/pageLeave.ts ***!
  \*********************************************************/
/*! exports provided: prevPageName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevPageName", function() { return prevPageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageLeave; });
/* harmony import */ var _component_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Link */ "./node_modules/yuejia/component/Link/index.tsx");

var prevPageName = '外部入口';
/** 页面离开的行为 */
function pageLeave(params) {
    var behavior = params.behavior, type = params.type, now = params.now, to = params.to, staytime = params.staytime, entrytime = params.entrytime;
    var pageName = now;
    var actionName = type === 'enter' ? '进入-' + to : '后退-' + to;
    behavior.trigger({
        pageName: pageName,
        actionName: actionName,
        detailedData: {
            from: prevPageName,
            button: _component_Link__WEBPACK_IMPORTED_MODULE_0__["default"].button
        },
        stopSeconds: staytime,
        entrytime: entrytime
    });
    prevPageName = now;
    behavior.postAction.send();
    _component_Link__WEBPACK_IMPORTED_MODULE_0__["default"].button = undefined;
}


/***/ }),

/***/ "./node_modules/yuejia/model/behavior/sheet.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/model/behavior/sheet.ts ***!
  \*****************************************************/
/*! exports provided: getActionName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionName", function() { return getActionName; });
function getActionName(option, actionIndex, props) {
    var componentName = props.componentName || option.componentName;
    return componentName ? option.action[actionIndex] + "-" + componentName : "" + option.action[actionIndex];
}
var sheet = {
    Button: {
        action: ['点击'],
        componentName: '按钮'
    },
    Banner: {
        action: ['滑动', '点击'],
        componentName: '轮播图'
    },
    Calendar: {
        action: ['点击'],
        componentName: '日历'
    },
    Collection: {
        action: ['添加', '取消'],
        componentName: '收藏'
    },
    Filter: {
        action: ['筛选'],
        componentName: ''
    },
    ImgView: {
        action: ['点击'],
        componentName: '图片'
    },
    Location: {
        action: ['定位'],
        componentName: '位置'
    },
    Search: {
        action: ['搜索'],
        componentName: '搜索'
    },
    Popup: {
        action: ['点击'],
        componentName: '弹出层'
    },
    Tab: {
        action: ['点击'],
        componentName: '选项卡'
    },
    Tel: {
        action: ['拨打'],
        componentName: '电话'
    },
    MapControl: {
        action: ['点击-缩小', '点击-放大', '点击-回到中心点'],
        componentName: ''
    },
    MapNavigation: {
        action: ['点击'],
        componentName: '导航'
    },
    MapMarkerBehavior: {
        action: ['点击'],
        componentName: '标注'
    },
    Video: {
        action: ['点击'],
        componentName: '视频'
    }
};
/* harmony default export */ __webpack_exports__["default"] = (sheet);


/***/ }),

/***/ "./node_modules/yuejia/style/base.scss":
/*!*********************************************!*\
  !*** ./node_modules/yuejia/style/base.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/style/mixins.scss":
/*!***********************************************!*\
  !*** ./node_modules/yuejia/style/mixins.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/style/variable.scss":
/*!*************************************************!*\
  !*** ./node_modules/yuejia/style/variable.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/yuejia/utils/device.ts":
/*!*********************************************!*\
  !*** ./node_modules/yuejia/utils/device.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var userAgent = navigator.userAgent;
var system = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'ios' : 'android';
function getChromeVersion() {
    var arr = userAgent.split(' ');
    var chromeVersion = '';
    for (var i = 0; i < arr.length; i++) {
        if (/chrome/i.test(arr[i])) {
            chromeVersion = arr[i];
        }
    }
    if (chromeVersion) {
        return Number(chromeVersion.split('/')[1].split('.')[0]);
    }
    else {
        return 0;
    }
}
function getIosVersion() {
    var str = userAgent.toLowerCase();
    var ver = str.match(/cpu iphone os (.*?) like mac os/);
    return ver ? Number(ver[1].replace(/_/g, '.')) : 0;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    width: document.documentElement ? document.documentElement.clientWidth : 0,
    height: document.documentElement ? document.documentElement.clientHeight : 0,
    userAgent: userAgent,
    system: system,
    version: system === 'ios' ? getIosVersion() : getChromeVersion()
});


/***/ }),

/***/ "./node_modules/yuejia/utils/env.js":
/*!******************************************!*\
  !*** ./node_modules/yuejia/utils/env.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const env = "development";
exports.other = {
    version: "1.0.0",
    outputDir: "./build",
    publicPath: "/build/",
    historyMode: undefined
};
exports.default = env;


/***/ }),

/***/ "./node_modules/yuejia/utils/getIsSubscribe.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/utils/getIsSubscribe.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIsSubscribe; });
/* harmony import */ var _urlsearchparams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlsearchparams */ "./node_modules/yuejia/utils/urlsearchparams.ts");

/** 获取是否已关注 */
function getIsSubscribe() {
    var urlsearchparams = new _urlsearchparams__WEBPACK_IMPORTED_MODULE_0__["default"](window.location.search);
    // tslint:disable-next-line:max-line-length
    var isSubscribe = urlsearchparams.get('isSubscribe') || urlsearchparams.get('?isSubscribe') || urlsearchparams.get('%3FisSubscribe') || urlsearchparams.get('%3fisSubscribe');
    return isSubscribe ? (isSubscribe === 'true' ? true : false) : false;
}


/***/ }),

/***/ "./node_modules/yuejia/utils/getRoute.ts":
/*!***********************************************!*\
  !*** ./node_modules/yuejia/utils/getRoute.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRoute; });
function getRoute() {
    var urlp = new URLSearchParams(window.location.search);
    var routeKey = urlp.get('route') || urlp.get('?route') || urlp.get('%3Froute') || urlp.get('%3froute') || window.route;
    var forward = urlp.get('forward') || urlp.get('?forward') || urlp.get('%3Fforward') || urlp.get('%3fforward') || window.forward;
    return routeKey || forward;
}


/***/ }),

/***/ "./node_modules/yuejia/utils/hexToString.ts":
/*!**************************************************!*\
  !*** ./node_modules/yuejia/utils/hexToString.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hexToString; });
function hexToString(hex) {
    var arr = hex.split('');
    var out = '';
    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = parseInt('0x' + arr[i * 2] + arr[i * 2 + 1], 16);
        var charValue = String.fromCharCode(tmp);
        out += charValue;
    }
    return decodeURIComponent(out);
}


/***/ }),

/***/ "./node_modules/yuejia/utils/historyReplace.ts":
/*!*****************************************************!*\
  !*** ./node_modules/yuejia/utils/historyReplace.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return historyReplace; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRoute */ "./node_modules/yuejia/utils/getRoute.ts");
/* harmony import */ var _hexToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexToString */ "./node_modules/yuejia/utils/hexToString.ts");



function historyReplace(customRoute) {
    var hash = window.location.hash;
    // 如果有自定义路由，优先跳转自定义路由
    if (customRoute) {
        var history_1 = undefined === 'browser' ? history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"]() : history__WEBPACK_IMPORTED_MODULE_0__["createHashHistory"]();
        history_1.replace(customRoute);
    }
    else if (!hash) {
        /*
        * 如果hahs不存在就代表是从分享链接进来的或是从入口进入到首页
        * 如果是从分享进来的，第一次会从route参数进入跳转，后面再刷新就不会再读取route参数，可以防止刷新后回到分享进来的页面
        */
        var route = Object(_getRoute__WEBPACK_IMPORTED_MODULE_1__["default"])();
        var history_2 = undefined === 'browser' ? history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"]() : history__WEBPACK_IMPORTED_MODULE_0__["createHashHistory"]();
        if (route) {
            history_2.replace(Object(_hexToString__WEBPACK_IMPORTED_MODULE_2__["default"])(route));
        }
    }
}


/***/ }),

/***/ "./node_modules/yuejia/utils/isEmpty.ts":
/*!**********************************************!*\
  !*** ./node_modules/yuejia/utils/isEmpty.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/** 简单的判断非空 */
function isEmpty(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    else {
        return value === undefined || value === null || (typeof value === 'string' && value === '');
    }
}


/***/ }),

/***/ "./node_modules/yuejia/utils/isHttp.ts":
/*!*********************************************!*\
  !*** ./node_modules/yuejia/utils/isHttp.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isHttp; });
/** url是否是http协议 */
function isHttp(url) {
    return url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0 || url.indexOf('./') >= 0 || url.indexOf('../') >= 0;
}


/***/ }),

/***/ "./node_modules/yuejia/utils/setDocumetTitle.ts":
/*!******************************************************!*\
  !*** ./node_modules/yuejia/utils/setDocumetTitle.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setDocumetTitle; });
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device */ "./node_modules/yuejia/utils/device.ts");

function setDocumetTitle(title) {
    if (!title) {
        console.warn('标题为空，请设置Page.pageName');
    }
    if (_device__WEBPACK_IMPORTED_MODULE_0__["default"].system === 'ios') {
        var iframe_1 = document.createElement('iframe');
        iframe_1.style.cssText = 'display: none';
        iframe_1.src = 'https://wap.yuejia100.cn/changeTitle.html';
        iframe_1.onload = function () {
            setTimeout(function () {
                document.body.removeChild(iframe_1);
            }, 100);
        };
        document.body.appendChild(iframe_1);
    }
    document.title = title;
}


/***/ }),

/***/ "./node_modules/yuejia/utils/stringToHex.ts":
/*!**************************************************!*\
  !*** ./node_modules/yuejia/utils/stringToHex.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stringToHex; });
function stringToHex(str) {
    var arr = [];
    var encode = encodeURIComponent(str);
    for (var i = 0; i < encode.length; i++) {
        arr[i] = (encode.charCodeAt(i).toString(16)).slice(-4);
    }
    return arr.join('');
}


/***/ }),

/***/ "./node_modules/yuejia/utils/svgRootPath.ts":
/*!**************************************************!*\
  !*** ./node_modules/yuejia/utils/svgRootPath.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var publicPath = "/build/";
var version = "1.0.0";
var svgRootPath = publicPath + ("svg/sprite_" + version + ".svg#");
/** svg文件根路径 */
/* harmony default export */ __webpack_exports__["default"] = (svgRootPath);


/***/ }),

/***/ "./node_modules/yuejia/utils/urlsearchparams.ts":
/*!******************************************************!*\
  !*** ./node_modules/yuejia/utils/urlsearchparams.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SearchParams;
// IOS上直接使用URLSearchParams可能会出错
try {
    SearchParams = URLSearchParams || __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
}
catch (err) {
    SearchParams = __webpack_require__(/*! url-search-params */ "./node_modules/url-search-params/build/url-search-params.node.js");
}
window.URLSearchParams = SearchParams;
/* harmony default export */ __webpack_exports__["default"] = (SearchParams);


/***/ }),

/***/ "./node_modules/yuejia/utils/validate.ts":
/*!***********************************************!*\
  !*** ./node_modules/yuejia/utils/validate.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pattern = {
    /** 空格 */
    space: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    /** 数字 */
    number: /^\d+$/,
    /** 大写，小写，数字及特殊字符 */
    char: /((?=[\x21-\x7e]+)[^A-Za-z0-9])/,
    /** 姓名 */
    name: /^[\u4e00-\u9fa5]{1,20}$/,
    /** 手机号 */
    tel: /^(1\d{2}|852|853|832)\d{8}$|^886\d{9,10}$/,
    /** 座机号 */
    landline: /^((0\d{2,3})-)(\d{7,8})(-(\d{1,3}))?$/,
    /** 金额 */
    price: /^[0-9]+(.[0-9]{1,2})?$/,
    /** 正数 */
    integer: /^(-|\+)?\d+$/,
    /** 身份证号 */
    // tslint:disable-next-line:max-line-length
    idcard: /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/,
    // /** emoji */
    emoji: /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g
};
/* harmony default export */ __webpack_exports__["default"] = ({
    /** 空格 */
    // space: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    // /** 数字 */
    // number: /^\d+$/,
    // /** 大写，小写，数字及特殊字符 */
    // char: /((?=[\x21-\x7e]+)[^A-Za-z0-9])/,
    /** 姓名 */
    name: function (value) {
        var regexp = new RegExp(pattern.name);
        return regexp.test(value);
    },
    /** 手机号 */
    tel: function (value) {
        var regexp = new RegExp(pattern.tel);
        return regexp.test(value);
    },
    // /** 座机号 */
    // landline: /^((0\d{2,3})-)(\d{7,8})(-(\d{1,3}))?$/,
    // /** 金额 */
    // price: /^[0-9]+(.[0-9]{1,2})?$/,
    /** 正数 */
    integer: function (value) {
        var regexp = new RegExp(pattern.integer);
        return regexp.test(value);
    },
    /** 身份证号 */
    idcard: function (value) {
        var regexp = new RegExp(pattern.idcard);
        return regexp.test(value);
    },
});


/***/ }),

/***/ "./node_modules/yuejia/utils/元素在页面中居中.ts":
/*!***********************************************!*\
  !*** ./node_modules/yuejia/utils/元素在页面中居中.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return elementCenteOnPage; });
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device */ "./node_modules/yuejia/utils/device.ts");
/* harmony import */ var _component_PageStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/PageStack */ "./node_modules/yuejia/component/PageStack/index.tsx");


function elementIsVisible(element) {
    var top = element.offsetTop;
    return top + element.clientHeight > window.pageYOffset && window.pageYOffset + window.innerHeight > top;
}
function elementCenteOnPage(element) {
    var stackComponent = _component_PageStack__WEBPACK_IMPORTED_MODULE_1__["default"].getStackComponent();
    var totalHeight = 0;
    if (stackComponent) {
        var root = stackComponent.pageElemRef.current;
        for (var i = 0; i < root.children.length; i++) {
            var child = root.children[i];
            if (child && child !== element && elementIsVisible(child)) {
                totalHeight += child.scrollHeight;
            }
        }
    }
    return _device__WEBPACK_IMPORTED_MODULE_0__["default"].height - totalHeight;
}


/***/ }),

/***/ "./src/app/config/_variable.ts":
/*!*************************************!*\
  !*** ./src/app/config/_variable.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yuejia_utils_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yuejia/utils/env */ "./node_modules/yuejia/utils/env.js");
/* harmony import */ var yuejia_utils_env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yuejia_utils_env__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yuejia_utils_getIsSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yuejia/utils/getIsSubscribe */ "./node_modules/yuejia/utils/getIsSubscribe.ts");


/** 微信的ticket */
var ticket = window.ticket;
/** 微信的appid */
var appId = window.appId;
/** 微信用户的openId */
var openId = window.openId;
/** 微信配置id */
var wxConfigId = window.wxConfigId;
/** 登录状态 */
var loginState = window.isLogin;
/** 用户缓存id */
var userCacheId = window.userCacheId;
/** 行为记录发送的api */
var behaviorApi = '';
/** 微信分享的默认标题 */
var shareTitle = '';
/** 微信分享的默认描述 */
var shareDesc = '';
/** 用户信息在storage储存的key */
var storageKey = '';
/** 关注状态 */
var subscribeState = Object(yuejia_utils_getIsSubscribe__WEBPACK_IMPORTED_MODULE_1__["default"])();
/** 分享链接的前缀，用于拼接当前页面的路由 */
var shareLink;
/** 网络请求的地址前缀 */
var baseURL = '';
/** 图片地址的前缀 */
var imgHost = '';
switch (yuejia_utils_env__WEBPACK_IMPORTED_MODULE_0___default.a) {
    // 生产环境的配置
    case 'production':
        baseURL = '';
        imgHost = '';
        break;
    // 预发布环境的配置
    case 'prerelease':
        baseURL = '';
        imgHost = '';
        shareLink = function () { return ''; };
        break;
    // 开发环境的配置
    default:
        baseURL = '';
        imgHost = '';
        shareLink = function () { return ''; };
        break;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    // 应用需要的变量
    app: {
        wxConfigId: wxConfigId,
        userCacheId: userCacheId,
        imgHost: imgHost,
        baseURL: baseURL,
    },
    // 帐户系统需要的变量
    account: {
        userCacheId: userCacheId,
        storageKey: storageKey,
        loginState: loginState,
        subscribeState: subscribeState,
    },
    // 微信需要的变量
    wx: {
        openId: openId,
        appId: appId,
        ticket: ticket,
        shareTitle: shareTitle,
        shareDesc: shareDesc,
        shareLink: shareLink,
    },
    // 行为统计需要的变量
    behavior: {
        api: behaviorApi,
    }
});


/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_variable */ "./src/app/config/_variable.ts");
// import imgFiles from './_imgFiles';
// import svgFiles from './_svgFiles';

// import style from './_style';
/* harmony default export */ __webpack_exports__["default"] = ({
    // imgFiles,
    // svgFiles,
    variable: _variable__WEBPACK_IMPORTED_MODULE_0__["default"],
});


/***/ }),

/***/ "./src/app/launcher.tsx":
/*!******************************!*\
  !*** ./src/app/launcher.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yuejia_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yuejia/app/global */ "./node_modules/yuejia/app/global.ts");
/* harmony import */ var yuejia_component_ImgView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yuejia/component/ImgView */ "./node_modules/yuejia/component/ImgView/index.tsx");
/* harmony import */ var yuejia_app_weixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yuejia/app/weixin */ "./node_modules/yuejia/app/weixin/index.ts");
/* harmony import */ var yuejia_app_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yuejia/app/request */ "./node_modules/yuejia/app/request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/app/config/index.ts");
/* harmony import */ var _view_components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/components/Contact */ "./src/app/view/components/Contact/index.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




// import PageStack from 'yuejia/component/PageStack';
// import Model, { Context } from 'yuejia/component/Model';


// import Behavior from 'yuejia/model/behavior';

// import model from './model';


// import Button from 'yuejia/component/Popup/Button';
// import Home from './view/pages/Home/index';
yuejia_app_global__WEBPACK_IMPORTED_MODULE_3__["default"].routes = [
// <Route exact key="页面名称" path="路由" component={Home} />,
];
yuejia_app_global__WEBPACK_IMPORTED_MODULE_3__["default"].appRoute = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], { location: props.location }, yuejia_app_global__WEBPACK_IMPORTED_MODULE_3__["default"].routes)); };
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.baseURL;
        yuejia_component_ImgView__WEBPACK_IMPORTED_MODULE_4__["default"].defaultHost = _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.imgHost;
        // 行为记录需要帐户系统的数据模型
        // Behavior.options = {
        //   ...config.variable.behavior,
        //   account: model.account
        // };
        yuejia_app_request__WEBPACK_IMPORTED_MODULE_6__["default"].defaultData = {
            userCacheId: _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.userCacheId,
            wxConfigId: _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.wxConfigId
        };
        yuejia_app_request__WEBPACK_IMPORTED_MODULE_6__["default"].defaultParams = {
            userCacheId: _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.userCacheId,
            wxConfigId: _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.app.wxConfigId
        };
        yuejia_app_weixin__WEBPACK_IMPORTED_MODULE_5__["WeiXin"].options = _config__WEBPACK_IMPORTED_MODULE_7__["default"].variable.wx;
        return _this;
        // 获取用户信息
        // if (model.account.getRequest) {
        //   model.account.getRequest.send();
        // }
    }
    App.prototype.render = function () {
        return (
        // <Model>
        //   {(value) => (
        //     <Context.Provider value={value}>
        //       <HashRouter>
        //         <PageStack />
        //         <Nav />
        //       </HashRouter>
        //     </Context.Provider>
        //   )}
        // </Model>
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_view_components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/app/view/components/Contact/index.scss":
/*!****************************************************!*\
  !*** ./src/app/view/components/Contact/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"component":"component_2BhVN"};

/***/ }),

/***/ "./src/app/view/components/Contact/index.tsx":
/*!***************************************************!*\
  !*** ./src/app/view/components/Contact/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/app/view/components/Contact/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(props, state) {
        var _this = _super.call(this, props, state) || this;
        state = {
            funcName: ['空中楼盘', 'VR看房', '房贷计算器', '专属服务'],
            name: '张美玲',
            profession: '置业顾问',
            tel: '138 9889 8743'
        };
        return _this;
    }
    Contact.prototype.render = function () {
        // const { funcName, name, profession, tel } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["component"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "func" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    "this.state.funcName.map((item, index) => (",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, "this is a text "),
                    ") )")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "contact" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "info" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "", alt: "" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, this.state.name),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "this.state.profession")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "\u697C\u76D8\u4EF7\u683C\u4F18\u60E0\uFF0C\u8BF7\u8054\u7CFB\u6211"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "qrcode" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "", alt: "" })))));
    };
    return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Contact);


/***/ }),

/***/ "./src/entry/index.tsx":
/*!*****************************!*\
  !*** ./src/entry/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yuejia_style_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yuejia/style/base.scss */ "./node_modules/yuejia/style/base.scss");
/* harmony import */ var yuejia_style_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yuejia_style_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yuejia_style_mixins_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yuejia/style/mixins.scss */ "./node_modules/yuejia/style/mixins.scss");
/* harmony import */ var yuejia_style_mixins_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yuejia_style_mixins_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yuejia_style_variable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yuejia/style/variable.scss */ "./node_modules/yuejia/style/variable.scss");
/* harmony import */ var yuejia_style_variable_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yuejia_style_variable_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yuejia_utils_urlsearchparams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yuejia/utils/urlsearchparams */ "./node_modules/yuejia/utils/urlsearchparams.ts");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/promise */ "./node_modules/core-js/es6/promise.js");
/* harmony import */ var core_js_es6_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_launcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/launcher */ "./src/app/launcher.tsx");
/// <reference path="../../typings/index.d.ts" />










react_dom__WEBPACK_IMPORTED_MODULE_8__["render"](react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_app_launcher__WEBPACK_IMPORTED_MODULE_9__["default"], null), document.getElementById('reactRoot'));


/***/ }),

/***/ "dll-reference vendor_494a3459ad13ffad7b5c":
/*!**********************************************!*\
  !*** external "vendor_494a3459ad13ffad7b5c" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_494a3459ad13ffad7b5c;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtc3Vic2NyaXB0aW9uL2Nqcy9jcmVhdGUtc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtc3Vic2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2Nqcy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTmF2TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvTWVtb3J5Um91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbnktaW52YXJpYW50L2Rpc3QvdGlueS1pbnZhcmlhbnQuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXdhcm5pbmcvZGlzdC90aW55LXdhcm5pbmcuY2pzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zL2J1aWxkL3VybC1zZWFyY2gtcGFyYW1zLm5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9fYmFzZS9kYXRhdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL19iYXNlL3NlcnZpY2UvZmllbGRzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL2RhdGF0eXBlL29iQXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvZGF0YXR5cGUvb2JPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvd2VpeGluL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL3dlaXhpbi9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL2ZhaWwuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL2xvYWRpbmcuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL3N1Y2Nlc3Muc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0Zvcm0vc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9JY29uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvSWNvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvSW1nVmlldy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0ltZ1ZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0lucHV0L3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvTW9kZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1BhZ2VTdGFjay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0F1dG9IZWlnaHQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9Db21wbGV0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0VtcHR5LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9TdGF0ZU1hY2hpbmUvRmFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVWaWV3L0xvYWRpbmcvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9TdGF0ZVZpZXcvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvVG9hc3QvVG9hc3QudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1RvYXN0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvVG9hc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9nZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9wb3N0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9yZWdpc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL21vZGVsL2FjY291bnQvcmVzZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L3NhdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L3NpZ25pbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL21vZGVsL2FjY291bnQvdmVyaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYmVoYXZpb3IvcGFnZUxlYXZlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYmVoYXZpb3Ivc2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9zdHlsZS9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9zdHlsZS9taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3N0eWxlL3ZhcmlhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9nZXRJc1N1YnNjcmliZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL2dldFJvdXRlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvaGV4VG9TdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9oaXN0b3J5UmVwbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL2lzRW1wdHkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9pc0h0dHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9zZXREb2N1bWV0VGl0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9zdHJpbmdUb0hleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL3N2Z1Jvb3RQYXRoLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvdXJsc2VhcmNocGFyYW1zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvdmFsaWRhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy/lhYPntKDlnKjpobXpnaLkuK3lsYXkuK0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maWcvX3ZhcmlhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF1bmNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlldy9jb21wb25lbnRzL0NvbnRhY3QvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXcvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxzSzs7Ozs7Ozs7Ozs7QUNBQSwySzs7Ozs7Ozs7Ozs7QUNBQSxtQkFBTyxDQUFDLCtGQUFpQztBQUN6QyxtQkFBTyxDQUFDLDZGQUFnQztBQUN4QyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFFQUFvQjtBQUM1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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpT0FBaU87QUFDak87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb09BQW9PO0FBQ3BPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkVBQTZFOztBQUU3RSxzREFBc0QsdUJBQXVCOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDs7QUFFQTtBQUNBLGlPQUFpTztBQUNqTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvT0FBb087QUFDcE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FB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QUNKLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQTFDcUIsK0NBQWUsR0EwQ3BDO0FBRWMsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFBaUQ7QUFFakI7QUFDRTtBQUNFO0FBQ0U7QUFDYjtBQUNBO0FBQ0k7QUFDRTtBQUNPO0FBQ0o7QUFFbEMsZ0RBQWUsQ0FDYixvREFBQyxxREFBRyxPQUFHLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEJGLDZDIiwiZmlsZSI6Ii4vanMvaW5kZXhfMS4wLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcIik7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi41JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNFVCA9ICdTZXQnO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShTRVQsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIFNFVCksIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNVxuICogY3JlYXRlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKGNvbmZpZykge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gY29uZmlnLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIF9zdWJzY3JpYmUgPSBjb25maWcuc3Vic2NyaWJlO1xuXG5cbiAgISh0eXBlb2YgZ2V0Q3VycmVudFZhbHVlID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1N1YnNjcmlwdGlvbiBtdXN0IHNwZWNpZnkgYSBnZXRDdXJyZW50VmFsdWUgZnVuY3Rpb24nKSA6IHZvaWQgMDtcbiAgISh0eXBlb2YgX3N1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdTdWJzY3JpcHRpb24gbXVzdCBzcGVjaWZ5IGEgc3Vic2NyaWJlIGZ1bmN0aW9uJykgOiB2b2lkIDA7XG5cbiAgLy8gUmVmZXJlbmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9idmF1Z2huL2Q1NjkxNzdkNzBiNTBiNThiZmY2OWMzYzRhNTM1M2YzXG4gIHZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdWJzY3JpcHRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKCkge1xuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1YnNjcmlwdGlvbik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc291cmNlOiBfdGhpcy5wcm9wcy5zb3VyY2UsXG4gICAgICAgIHZhbHVlOiBfdGhpcy5wcm9wcy5zb3VyY2UgIT0gbnVsbCA/IGdldEN1cnJlbnRWYWx1ZShfdGhpcy5wcm9wcy5zb3VyY2UpIDogdW5kZWZpbmVkXG4gICAgICB9LCBfdGhpcy5faGFzVW5tb3VudGVkID0gZmFsc2UsIF90aGlzLl91bnN1YnNjcmliZSA9IG51bGwsIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIFN1YnNjcmlwdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc291cmNlICE9PSBwcmV2U3RhdGUuc291cmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc291cmNlOiBuZXh0UHJvcHMuc291cmNlLFxuICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMuc291cmNlICE9IG51bGwgPyBnZXRDdXJyZW50VmFsdWUobmV4dFByb3BzLnNvdXJjZSkgOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zb3VyY2UgIT09IHByZXZTdGF0ZS5zb3VyY2UpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIC8vIFRyYWNrIG1vdW50ZWQgdG8gYXZvaWQgY2FsbGluZyBzZXRTdGF0ZSBhZnRlciB1bm1vdW50aW5nXG4gICAgICAvLyBGb3Igc291cmNlIGxpa2UgUHJvbWlzZXMgdGhhdCBjYW4ndCBiZSB1bnN1YnNjcmliZWQgZnJvbS5cbiAgICAgIHRoaXMuX2hhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnN0YXRlLnNvdXJjZTtcblxuICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBfY2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLl9oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIHNraXAgdGhlIHVubmVjZXNzYXJ5IHN0YXRlIHVwZGF0ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgZXZlbnQgYmVsb25ncyB0byBhbiBvbGQgb3IgdW5jb21taXR0ZWQgZGF0YSBzb3VyY2UsIGlnbm9yZSBpdC5cbiAgICAgICAgICAgIGlmIChzb3VyY2UgIT09IHN0YXRlLnNvdXJjZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHVuc3Vic2NyaWJlIG1ldGhvZCBmb3IgbGF0ZXIgKGluIGNhc2UgdGhlIHN1YnNjcmliYWJsZSBwcm9wIGNoYW5nZXMpLlxuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBfc3Vic2NyaWJlKHNvdXJjZSwgX2NhbGxiYWNrKTtcbiAgICAgICAgISh0eXBlb2YgdW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpID8gaW52YXJpYW50KGZhbHNlLCAnQSBzdWJzY3JpcHRpb24gbXVzdCByZXR1cm4gYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24uJykgOiB2b2lkIDA7XG5cbiAgICAgICAgLy8gSXQncyBzYWZlIHRvIHN0b3JlIHVuc3Vic2NyaWJlIG9uIHRoZSBpbnN0YW5jZSBiZWNhdXNlXG4gICAgICAgIC8vIFdlIG9ubHkgcmVhZCBvciB3cml0ZSB0aGF0IHByb3BlcnR5IGR1cmluZyB0aGUgXCJjb21taXRcIiBwaGFzZS5cbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcblxuICAgICAgICAvLyBFeHRlcm5hbCB2YWx1ZXMgY291bGQgY2hhbmdlIGJldHdlZW4gcmVuZGVyIGFuZCBtb3VudCxcbiAgICAgICAgLy8gSW4gc29tZSBjYXNlcyBpdCBtYXkgYmUgaW1wb3J0YW50IHRvIGhhbmRsZSB0aGlzIGNhc2UuXG4gICAgICAgIHZhciBfdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUodGhpcy5wcm9wcy5zb3VyY2UpO1xuICAgICAgICBpZiAoX3ZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBfdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl91bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn1cblxuZXhwb3J0cy5jcmVhdGVTdWJzY3JpcHRpb24gPSBjcmVhdGVTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvY3JlYXRlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9jcmVhdGUtc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgcmVzb2x2ZVBhdGhuYW1lID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKSk7XG52YXIgdmFsdWVFcXVhbCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd2YWx1ZS1lcXVhbCcpKTtcbnZhciB3YXJuaW5nID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3Rpbnktd2FybmluZycpKTtcbnZhciBpbnZhcmlhbnQgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgndGlueS1pbnZhcmlhbnQnKSk7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59XG5mdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHByZWZpeCArICcoXFxcXC98XFxcXD98I3wkKScsICdpJykudGVzdChwYXRoKTtcbn1cbmZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG5cbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcblxuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gIHZhciBwYXRoID0gcGF0aG5hbWUgfHwgJy8nO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IHJlc29sdmVQYXRobmFtZShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgYS5rZXkgPT09IGIua2V5ICYmIHZhbHVlRXF1YWwoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBzZXRQcm9tcHQobmV4dFByb21wdCkge1xuICAgIHdhcm5pbmcocHJvbXB0ID09IG51bGwsICdBIGhpc3Rvcnkgc3VwcG9ydHMgb25seSBvbmUgcHJvbXB0IGF0IGEgdGltZScpO1xuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGZyb20gYSB0cmFuc2l0aW9uIGhvb2sgdG8gY2FuY2VsIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICBjYWxsYmFjayhyZXN1bHQgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQcm9tcHQ6IHNldFByb21wdCxcbiAgICBjb25maXJtVHJhbnNpdGlvblRvOiBjb25maXJtVHJhbnNpdGlvblRvLFxuICAgIGFwcGVuZExpc3RlbmVyOiBhcHBlbmRMaXN0ZW5lcixcbiAgICBub3RpZnlMaXN0ZW5lcnM6IG5vdGlmeUxpc3RlbmVyc1xuICB9O1xufVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGdldENvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJyb3dzZXIgZmlyZXMgcG9wc3RhdGUgb24gaGFzaCBjaGFuZ2UuXG4gKiBJRTEwIGFuZCBJRTExIGRvIG5vdC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID09PSAtMTtcbn1cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xuXG5mdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDcmlPUycpID09PSAtMTtcbn1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFIDExIHNvbWV0aW1lcyB0aHJvd3Mgd2hlbiBhY2Nlc3Npbmcgd2luZG93Lmhpc3Rvcnkuc3RhdGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvaGlzdG9yeS9wdWxsLzI4OVxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpbmNsdWRpbmdcbiAqIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50LlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgIWNhblVzZURPTSA/IGludmFyaWFudChmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpO1xuICB2YXIgX3Byb3BzID0gcHJvcHMsXG4gICAgICBfcHJvcHMkZm9yY2VSZWZyZXNoID0gX3Byb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IF9wcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB2b2lkIDAgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkpIHJldHVybjtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247IC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxudmFyIEhhc2hDaGFuZ2VFdmVudCQxID0gJ2hhc2hjaGFuZ2UnO1xudmFyIEhhc2hQYXRoQ29kZXJzID0ge1xuICBoYXNoYmFuZzoge1xuICAgIGVuY29kZVBhdGg6IGZ1bmN0aW9uIGVuY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoIDogJyEvJyArIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpO1xuICAgIH0sXG4gICAgZGVjb2RlUGF0aDogZnVuY3Rpb24gZGVjb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbiAgICB9XG4gIH0sXG4gIG5vc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBzdHJpcExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBoYXNoSW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHZhciBoYXNoSW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJyk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGhhc2hJbmRleCA+PSAwID8gaGFzaEluZGV4IDogMCkgKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgIWNhblVzZURPTSA/IGludmFyaWFudChmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBfcHJvcHMuaGFzaFR5cGUsXG4gICAgICBoYXNoVHlwZSA9IF9wcm9wcyRoYXNoVHlwZSA9PT0gdm9pZCAwID8gJ3NsYXNoJyA6IF9wcm9wcyRoYXNoVHlwZTtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcbiAgdmFyIF9IYXNoUGF0aENvZGVycyRoYXNoVCA9IEhhc2hQYXRoQ29kZXJzW2hhc2hUeXBlXSxcbiAgICAgIGVuY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZW5jb2RlUGF0aCxcbiAgICAgIGRlY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZGVjb2RlUGF0aDtcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG4gICAgd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKTtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICBpZiAoIWZvcmNlTmV4dFBvcCAmJiBsb2NhdGlvbnNBcmVFcXVhbChwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gY3JlYXRlUGF0aChsb2NhdGlvbikpIHJldHVybjsgLy8gSWdub3JlIHRoaXMgY2hhbmdlOyB3ZSBhbHJlYWR5IHNldFN0YXRlIGluIHB1c2gvcmVwbGFjZS5cblxuICAgICAgaWdub3JlUGF0aCA9IG51bGw7XG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgodG9Mb2NhdGlvbikpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgoZnJvbUxvY2F0aW9uKSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH0gLy8gRW5zdXJlIHRoZSBoYXNoIGlzIGVuY29kZWQgcHJvcGVybHkgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXG5cblxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gIHZhciBhbGxQYXRocyA9IFtjcmVhdGVQYXRoKGluaXRpYWxMb2NhdGlvbildOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFBVU0gsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHB1c2hIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgICAgdmFyIG5leHRQYXRocyA9IGFsbFBhdGhzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdIYXNoIGhpc3RvcnkgY2Fubm90IFBVU0ggdGhlIHNhbWUgcGF0aDsgYSBuZXcgZW50cnkgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2snKTtcbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgd2FybmluZyhjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobiwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCBzdG9yZXMgbG9jYXRpb25zIGluIG1lbW9yeS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gX3Byb3BzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPT09IHZvaWQgMCA/IFsnLyddIDogX3Byb3BzJGluaXRpYWxFbnRyaWVzLFxuICAgICAgX3Byb3BzJGluaXRpYWxJbmRleCA9IF9wcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICBpbml0aWFsSW5kZXggPSBfcHJvcHMkaW5pdGlhbEluZGV4ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGluaXRpYWxJbmRleCxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgY3JlYXRlS2V5KCkpIDogY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgZW50cnkua2V5IHx8IGNyZWF0ZUtleSgpKTtcbiAgfSk7IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGNyZWF0ZVBhdGg7XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG4gICAgICB2YXIgbmV4dEVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMuc2xpY2UoMCk7XG5cbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdID0gbG9jYXRpb247XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBjbGFtcChoaXN0b3J5LmluZGV4ICsgbiwgMCwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aCAtIDEpO1xuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaW5kZXg6IG5leHRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1pbWljIHRoZSBiZWhhdmlvciBvZiBET00gaGlzdG9yaWVzIGJ5XG4gICAgICAgIC8vIGNhdXNpbmcgYSByZW5kZXIgYWZ0ZXIgYSBjYW5jZWxsZWQgUE9QLlxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGVudHJpZXMubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGVudHJpZXNbaW5kZXhdLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjYW5HbzogY2FuR28sXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnRzLmNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5leHBvcnRzLmNyZWF0ZUhhc2hIaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3Rvcnk7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5O1xuZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGxvY2F0aW9uc0FyZUVxdWFsO1xuZXhwb3J0cy5wYXJzZVBhdGggPSBwYXJzZVBhdGg7XG5leHBvcnRzLmNyZWF0ZVBhdGggPSBjcmVhdGVQYXRoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL2hpc3RvcnkubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL2hpc3RvcnkuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanNcIik7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBvYmplY3QsIGNvbGxlY3Rpb24sIG1hcCwgb3Igc2V0LlxuICpcbiAqIE9iamVjdHMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIG5vIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZFxuICogcHJvcGVydGllcy5cbiAqXG4gKiBBcnJheS1saWtlIHZhbHVlcyBzdWNoIGFzIGBhcmd1bWVudHNgIG9iamVjdHMsIGFycmF5cywgYnVmZmVycywgc3RyaW5ncywgb3JcbiAqIGpRdWVyeS1saWtlIGNvbGxlY3Rpb25zIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBsZW5ndGhgIG9mIGAwYC5cbiAqIFNpbWlsYXJseSwgbWFwcyBhbmQgc2V0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgc2l6ZWAgb2YgYDBgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGVtcHR5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNFbXB0eShudWxsKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkodHJ1ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KDEpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eShbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzRW1wdHkoeyAnYSc6IDEgfSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgICAgKGlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUuc3BsaWNlID09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgaXNCdWZmZXIodmFsdWUpIHx8IGlzVHlwZWRBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgIHJldHVybiAhdmFsdWUubGVuZ3RoO1xuICB9XG4gIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpO1xuICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5zaXplO1xuICB9XG4gIGlmIChpc1Byb3RvdHlwZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gIWJhc2VLZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbXB0eTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG52YXIgQnJvd3NlclJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3NlclJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9ICgwLCBfaGlzdG9yeS5jcmVhdGVCcm93c2VySGlzdG9yeSkoX3RoaXMucHJvcHMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEJyb3dzZXJSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyMi5kZWZhdWx0LCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Ccm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBmb3JjZVJlZnJlc2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBrZXlMZW5ndGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQnJvd3NlclJvdXRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xudmFyIEhhc2hSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSAoMCwgX2hpc3RvcnkuY3JlYXRlSGFzaEhpc3RvcnkpKF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuSGFzaFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGJhc2VuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBoYXNoVHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSksXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBIYXNoUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBpc01vZGlmaWVkRXZlbnQgPSBmdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICBldmVudC5idXR0b24gPT09IDAgJiYgLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgICAhX3RoaXMucHJvcHMudGFyZ2V0ICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICAgKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHZhciBoaXN0b3J5ID0gX3RoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG87XG5cblxuICAgICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UodG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2godG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICByZXBsYWNlID0gX3Byb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBpbm5lclJlZiA9IF9wcm9wcy5pbm5lclJlZixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJyZXBsYWNlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmNvbnRleHQucm91dGVyLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRvICE9PSB1bmRlZmluZWQsICdZb3UgbXVzdCBzcGVjaWZ5IHRoZSBcInRvXCIgcHJvcGVydHknKTtcblxuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gKDAsIF9oaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKSh0bywgbnVsbCwgbnVsbCwgaGlzdG9yeS5sb2NhdGlvbikgOiB0bztcblxuICAgIHZhciBocmVmID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOiBocmVmLCByZWY6IGlubmVyUmVmIH0pKTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRhcmdldDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHJlcGxhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdG86IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKVxufTtcbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICByZXBsYWNlOiBmYWxzZVxufTtcbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgcHVzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGNyZWF0ZUhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGluazsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9NZW1vcnlSb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlclwiKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVtb3J5Um91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01lbW9yeVJvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Sb3V0ZSA9IHJlcXVpcmUoXCIuL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlKTtcblxudmFyIF9MaW5rID0gcmVxdWlyZShcIi4vTGlua1wiKTtcblxudmFyIF9MaW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbnZhciBOYXZMaW5rID0gZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciB0byA9IF9yZWYudG8sXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBnZXRJc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInRvXCIsIFwiZXhhY3RcIiwgXCJzdHJpY3RcIiwgXCJsb2NhdGlvblwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwic3R5bGVcIiwgXCJpc0FjdGl2ZVwiLCBcImFyaWEtY3VycmVudFwiXSk7XG5cbiAgdmFyIHBhdGggPSAodHlwZW9mIHRvID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodG8pKSA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87XG5cbiAgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlMi5kZWZhdWx0LCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGdldElzQWN0aXZlID8gZ2V0SXNBY3RpdmUobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9MaW5rMi5kZWZhdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgIHRvOiB0byxcbiAgICAgICAgY2xhc3NOYW1lOiBpc0FjdGl2ZSA/IFtjbGFzc05hbWUsIGFjdGl2ZUNsYXNzTmFtZV0uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pLmpvaW4oXCIgXCIpIDogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlLFxuICAgICAgICBcImFyaWEtY3VycmVudFwiOiBpc0FjdGl2ZSAmJiBhcmlhQ3VycmVudCB8fCBudWxsXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn07XG5cbk5hdkxpbmsucHJvcFR5cGVzID0ge1xuICB0bzogX0xpbmsyLmRlZmF1bHQucHJvcFR5cGVzLnRvLFxuICBleGFjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHJpY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbG9jYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgaXNBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgXCJhcmlhLWN1cnJlbnRcIjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKVxufTtcblxuTmF2TGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgXCJhcmlhLWN1cnJlbnRcIjogXCJwYWdlXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdkxpbms7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvbXB0ID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Qcm9tcHRcIik7XG5cbnZhciBfUHJvbXB0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb21wdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Qcm9tcHQyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUmVkaXJlY3QgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JlZGlyZWN0XCIpO1xuXG52YXIgX1JlZGlyZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JlZGlyZWN0Mi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JvdXRlID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Sb3V0ZTIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9TdGF0aWNSb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlclwiKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N0YXRpY1JvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Td2l0Y2ggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1N3aXRjaFwiKTtcblxudmFyIF9Td2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dpdGNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N3aXRjaDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZW5lcmF0ZVBhdGggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aFwiKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2dlbmVyYXRlUGF0aDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMud2l0aFJvdXRlciA9IGV4cG9ydHMubWF0Y2hQYXRoID0gZXhwb3J0cy5nZW5lcmF0ZVBhdGggPSBleHBvcnRzLlN3aXRjaCA9IGV4cG9ydHMuU3RhdGljUm91dGVyID0gZXhwb3J0cy5Sb3V0ZXIgPSBleHBvcnRzLlJvdXRlID0gZXhwb3J0cy5SZWRpcmVjdCA9IGV4cG9ydHMuUHJvbXB0ID0gZXhwb3J0cy5OYXZMaW5rID0gZXhwb3J0cy5NZW1vcnlSb3V0ZXIgPSBleHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSBleHBvcnRzLkJyb3dzZXJSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfQnJvd3NlclJvdXRlcjIgPSByZXF1aXJlKFwiLi9Ccm93c2VyUm91dGVyXCIpO1xuXG52YXIgX0Jyb3dzZXJSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJvd3NlclJvdXRlcjIpO1xuXG52YXIgX0hhc2hSb3V0ZXIyID0gcmVxdWlyZShcIi4vSGFzaFJvdXRlclwiKTtcblxudmFyIF9IYXNoUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhc2hSb3V0ZXIyKTtcblxudmFyIF9MaW5rMiA9IHJlcXVpcmUoXCIuL0xpbmtcIik7XG5cbnZhciBfTGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rMik7XG5cbnZhciBfTWVtb3J5Um91dGVyMiA9IHJlcXVpcmUoXCIuL01lbW9yeVJvdXRlclwiKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVtb3J5Um91dGVyMik7XG5cbnZhciBfTmF2TGluazIgPSByZXF1aXJlKFwiLi9OYXZMaW5rXCIpO1xuXG52YXIgX05hdkxpbmszID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2TGluazIpO1xuXG52YXIgX1Byb21wdDIgPSByZXF1aXJlKFwiLi9Qcm9tcHRcIik7XG5cbnZhciBfUHJvbXB0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb21wdDIpO1xuXG52YXIgX1JlZGlyZWN0MiA9IHJlcXVpcmUoXCIuL1JlZGlyZWN0XCIpO1xuXG52YXIgX1JlZGlyZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0Mik7XG5cbnZhciBfUm91dGUyID0gcmVxdWlyZShcIi4vUm91dGVcIik7XG5cbnZhciBfUm91dGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUyKTtcblxudmFyIF9Sb3V0ZXIyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIyID0gcmVxdWlyZShcIi4vU3RhdGljUm91dGVyXCIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWNSb3V0ZXIyKTtcblxudmFyIF9Td2l0Y2gyID0gcmVxdWlyZShcIi4vU3dpdGNoXCIpO1xuXG52YXIgX1N3aXRjaDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2l0Y2gyKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgyID0gcmVxdWlyZShcIi4vZ2VuZXJhdGVQYXRoXCIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVBhdGgyKTtcblxudmFyIF9tYXRjaFBhdGgyID0gcmVxdWlyZShcIi4vbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgyKTtcblxudmFyIF93aXRoUm91dGVyMiA9IHJlcXVpcmUoXCIuL3dpdGhSb3V0ZXJcIik7XG5cbnZhciBfd2l0aFJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUm91dGVyMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQnJvd3NlclJvdXRlciA9IF9Ccm93c2VyUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5IYXNoUm91dGVyID0gX0hhc2hSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLkxpbmsgPSBfTGluazMuZGVmYXVsdDtcbmV4cG9ydHMuTWVtb3J5Um91dGVyID0gX01lbW9yeVJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuTmF2TGluayA9IF9OYXZMaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy5Qcm9tcHQgPSBfUHJvbXB0My5kZWZhdWx0O1xuZXhwb3J0cy5SZWRpcmVjdCA9IF9SZWRpcmVjdDMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGUgPSBfUm91dGUzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRlciA9IF9Sb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLlN0YXRpY1JvdXRlciA9IF9TdGF0aWNSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLlN3aXRjaCA9IF9Td2l0Y2gzLmRlZmF1bHQ7XG5leHBvcnRzLmdlbmVyYXRlUGF0aCA9IF9nZW5lcmF0ZVBhdGgzLmRlZmF1bHQ7XG5leHBvcnRzLm1hdGNoUGF0aCA9IF9tYXRjaFBhdGgzLmRlZmF1bHQ7XG5leHBvcnRzLndpdGhSb3V0ZXIgPSBfd2l0aFJvdXRlcjMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9tYXRjaFBhdGggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX21hdGNoUGF0aDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93aXRoUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci93aXRoUm91dGVyXCIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF93aXRoUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG52YXIgTWVtb3J5Um91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbW9yeVJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVtb3J5Um91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVtb3J5Um91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gKDAsIF9oaXN0b3J5LmNyZWF0ZU1lbW9yeUhpc3RvcnkpKF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBNZW1vcnlSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPE1lbW9yeVJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IE1lbW9yeVJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIE1lbW9yeVJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyMi5kZWZhdWx0LCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbW9yeVJvdXRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbk1lbW9yeVJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxFbnRyaWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICBpbml0aWFsSW5kZXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGtleUxlbmd0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNZW1vcnlSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHJvbXB0aW5nIHRoZSB1c2VyIGJlZm9yZSBuYXZpZ2F0aW5nIGF3YXlcbiAqIGZyb20gYSBzY3JlZW4gd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xudmFyIFByb21wdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm9tcHQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFByb21wdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvbXB0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnVuYmxvY2spIHRoaXMudW5ibG9jaygpO1xuXG4gICAgdGhpcy51bmJsb2NrID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5LmJsb2NrKG1lc3NhZ2UpO1xuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKHRoaXMudW5ibG9jaykge1xuICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICB0aGlzLnVuYmxvY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LnJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFByb21wdD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMud2hlbikgdGhpcy5lbmFibGUodGhpcy5wcm9wcy5tZXNzYWdlKTtcbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMud2hlbikge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndoZW4gfHwgdGhpcy5wcm9wcy5tZXNzYWdlICE9PSBuZXh0UHJvcHMubWVzc2FnZSkgdGhpcy5lbmFibGUobmV4dFByb3BzLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBQcm9tcHQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Qcm9tcHQucHJvcFR5cGVzID0ge1xuICB3aGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG1lc3NhZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSkuaXNSZXF1aXJlZFxufTtcblByb21wdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHdoZW46IHRydWVcbn07XG5Qcm9tcHQuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgYmxvY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUHJvbXB0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9nZW5lcmF0ZVBhdGggPSByZXF1aXJlKFwiLi9nZW5lcmF0ZVBhdGhcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlUGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgdXBkYXRpbmcgdGhlIGxvY2F0aW9uIHByb2dyYW1tYXRpY2FsbHlcbiAqIHdpdGggYSBjb21wb25lbnQuXG4gKi9cbnZhciBSZWRpcmVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWRpcmVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmlzU3RhdGljID0gZnVuY3Rpb24gaXNTdGF0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIgJiYgdGhpcy5jb250ZXh0LnJvdXRlci5zdGF0aWNDb250ZXh0O1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5yb3V0ZXIsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSZWRpcmVjdD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgaWYgKHRoaXMuaXNTdGF0aWMoKSkgdGhpcy5wZXJmb3JtKCk7XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3RhdGljKCkpIHRoaXMucGVyZm9ybSgpO1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIHByZXZUbyA9ICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikocHJldlByb3BzLnRvKTtcbiAgICB2YXIgbmV4dFRvID0gKDAsIF9oaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKSh0aGlzLnByb3BzLnRvKTtcblxuICAgIGlmICgoMCwgX2hpc3RvcnkubG9jYXRpb25zQXJlRXF1YWwpKHByZXZUbywgbmV4dFRvKSkge1xuICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgXCJZb3UgdHJpZWQgdG8gcmVkaXJlY3QgdG8gdGhlIHNhbWUgcm91dGUgeW91J3JlIGN1cnJlbnRseSBvbjogXCIgKyAoXCJcXFwiXCIgKyBuZXh0VG8ucGF0aG5hbWUgKyBuZXh0VG8uc2VhcmNoICsgXCJcXFwiXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBlcmZvcm0oKTtcbiAgfTtcblxuICBSZWRpcmVjdC5wcm90b3R5cGUuY29tcHV0ZVRvID0gZnVuY3Rpb24gY29tcHV0ZVRvKF9yZWYpIHtcbiAgICB2YXIgY29tcHV0ZWRNYXRjaCA9IF9yZWYuY29tcHV0ZWRNYXRjaCxcbiAgICAgICAgdG8gPSBfcmVmLnRvO1xuXG4gICAgaWYgKGNvbXB1dGVkTWF0Y2gpIHtcbiAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfZ2VuZXJhdGVQYXRoMi5kZWZhdWx0KSh0bywgY29tcHV0ZWRNYXRjaC5wYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0bywge1xuICAgICAgICAgIHBhdGhuYW1lOiAoMCwgX2dlbmVyYXRlUGF0aDIuZGVmYXVsdCkodG8ucGF0aG5hbWUsIGNvbXB1dGVkTWF0Y2gucGFyYW1zKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLnBlcmZvcm0gPSBmdW5jdGlvbiBwZXJmb3JtKCkge1xuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuICAgIHZhciBwdXNoID0gdGhpcy5wcm9wcy5wdXNoO1xuXG4gICAgdmFyIHRvID0gdGhpcy5jb21wdXRlVG8odGhpcy5wcm9wcyk7XG5cbiAgICBpZiAocHVzaCkge1xuICAgICAgaGlzdG9yeS5wdXNoKHRvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlKHRvKTtcbiAgICB9XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUmVkaXJlY3Q7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIGNvbXB1dGVkTWF0Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBwcml2YXRlLCBmcm9tIDxTd2l0Y2g+XG4gIHB1c2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZnJvbTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSkuaXNSZXF1aXJlZFxufTtcblJlZGlyZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHVzaDogZmFsc2Vcbn07XG5SZWRpcmVjdC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgaGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgICBwdXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlcGxhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVkaXJlY3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZShcImludmFyaWFudFwiKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfbWF0Y2hQYXRoID0gcmVxdWlyZShcIi4vbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBpc0VtcHR5Q2hpbGRyZW4gPSBmdW5jdGlvbiBpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59O1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBtYXRjaGluZyBhIHNpbmdsZSBwYXRoIGFuZCByZW5kZXJpbmcuXG4gKi9cblxudmFyIFJvdXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hdGNoOiBfdGhpcy5jb21wdXRlTWF0Y2goX3RoaXMucHJvcHMsIF90aGlzLmNvbnRleHQucm91dGVyKVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgUm91dGUucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVyOiBfZXh0ZW5kcyh7fSwgdGhpcy5jb250ZXh0LnJvdXRlciwge1xuICAgICAgICByb3V0ZToge1xuICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9uIHx8IHRoaXMuY29udGV4dC5yb3V0ZXIucm91dGUubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2g6IHRoaXMuc3RhdGUubWF0Y2hcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wdXRlTWF0Y2ggPSBmdW5jdGlvbiBjb21wdXRlTWF0Y2goX3JlZiwgcm91dGVyKSB7XG4gICAgdmFyIGNvbXB1dGVkTWF0Y2ggPSBfcmVmLmNvbXB1dGVkTWF0Y2gsXG4gICAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgcGF0aCA9IF9yZWYucGF0aCxcbiAgICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgICAgc2Vuc2l0aXZlID0gX3JlZi5zZW5zaXRpdmU7XG5cbiAgICBpZiAoY29tcHV0ZWRNYXRjaCkgcmV0dXJuIGNvbXB1dGVkTWF0Y2g7IC8vIDxTd2l0Y2g+IGFscmVhZHkgY29tcHV0ZWQgdGhlIG1hdGNoIGZvciB1c1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlPiBvciB3aXRoUm91dGVyKCkgb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgdmFyIHJvdXRlID0gcm91dGVyLnJvdXRlO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gKGxvY2F0aW9uIHx8IHJvdXRlLmxvY2F0aW9uKS5wYXRobmFtZTtcblxuICAgIHJldHVybiAoMCwgX21hdGNoUGF0aDIuZGVmYXVsdCkocGF0aG5hbWUsIHsgcGF0aDogcGF0aCwgc3RyaWN0OiBzdHJpY3QsIGV4YWN0OiBleGFjdCwgc2Vuc2l0aXZlOiBzZW5zaXRpdmUgfSwgcm91dGUubWF0Y2gpO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKHRoaXMucHJvcHMuY29tcG9uZW50ICYmIHRoaXMucHJvcHMucmVuZGVyKSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSByZW5kZXI+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgcmVuZGVyPiB3aWxsIGJlIGlnbm9yZWRcIik7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEodGhpcy5wcm9wcy5jb21wb25lbnQgJiYgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pKSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgcm91dGU7IDxSb3V0ZSBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkXCIpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKHRoaXMucHJvcHMucmVuZGVyICYmIHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKSksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSByZW5kZXI+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZFwiKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0Q29udGV4dCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIShuZXh0UHJvcHMubG9jYXRpb24gJiYgIXRoaXMucHJvcHMubG9jYXRpb24pLCAnPFJvdXRlPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCFuZXh0UHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWF0Y2g6IHRoaXMuY29tcHV0ZU1hdGNoKG5leHRQcm9wcywgbmV4dENvbnRleHQucm91dGVyKVxuICAgIH0pO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIG1hdGNoID0gdGhpcy5zdGF0ZS5tYXRjaDtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIHJlbmRlciA9IF9wcm9wcy5yZW5kZXI7XG4gICAgdmFyIF9jb250ZXh0JHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXIsXG4gICAgICAgIGhpc3RvcnkgPSBfY29udGV4dCRyb3V0ZXIuaGlzdG9yeSxcbiAgICAgICAgcm91dGUgPSBfY29udGV4dCRyb3V0ZXIucm91dGUsXG4gICAgICAgIHN0YXRpY0NvbnRleHQgPSBfY29udGV4dCRyb3V0ZXIuc3RhdGljQ29udGV4dDtcblxuICAgIHZhciBsb2NhdGlvbiA9IHRoaXMucHJvcHMubG9jYXRpb24gfHwgcm91dGUubG9jYXRpb247XG4gICAgdmFyIHByb3BzID0geyBtYXRjaDogbWF0Y2gsIGxvY2F0aW9uOiBsb2NhdGlvbiwgaGlzdG9yeTogaGlzdG9yeSwgc3RhdGljQ29udGV4dDogc3RhdGljQ29udGV4dCB9O1xuXG4gICAgaWYgKGNvbXBvbmVudCkgcmV0dXJuIG1hdGNoID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcykgOiBudWxsO1xuXG4gICAgaWYgKHJlbmRlcikgcmV0dXJuIG1hdGNoID8gcmVuZGVyKHByb3BzKSA6IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjaGlsZHJlbihwcm9wcyk7XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikpIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUm91dGU7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Sb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXB1dGVkTWF0Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBwcml2YXRlLCBmcm9tIDxTd2l0Y2g+XG4gIHBhdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBleGFjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHJpY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2Vuc2l0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICByZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuICBsb2NhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5Sb3V0ZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgaGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KVxufTtcblJvdXRlLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBwdXR0aW5nIGhpc3Rvcnkgb24gY29udGV4dC5cbiAqL1xudmFyIFJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRjaDogX3RoaXMuY29tcHV0ZU1hdGNoKF90aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBSb3V0ZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVyOiBfZXh0ZW5kcyh7fSwgdGhpcy5jb250ZXh0LnJvdXRlciwge1xuICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgbG9jYXRpb246IHRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaDogdGhpcy5zdGF0ZS5tYXRjaFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH07XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wdXRlTWF0Y2ggPSBmdW5jdGlvbiBjb21wdXRlTWF0Y2gocGF0aG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGlzRXhhY3Q6IHBhdGhuYW1lID09PSBcIi9cIlxuICAgIH07XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGhpc3RvcnkgPSBfcHJvcHMuaGlzdG9yeTtcblxuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGNoaWxkcmVuID09IG51bGwgfHwgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSwgXCJBIDxSb3V0ZXI+IG1heSBoYXZlIG9ubHkgb25lIGNoaWxkIGVsZW1lbnRcIik7XG5cbiAgICAvLyBEbyB0aGlzIGhlcmUgc28gd2UgY2FuIHNldFN0YXRlIHdoZW4gYSA8UmVkaXJlY3Q+IGNoYW5nZXMgdGhlXG4gICAgLy8gbG9jYXRpb24gaW4gY29tcG9uZW50V2lsbE1vdW50LiBUaGlzIGhhcHBlbnMgZS5nLiB3aGVuIGRvaW5nXG4gICAgLy8gc2VydmVyIHJlbmRlcmluZyB1c2luZyBhIDxTdGF0aWNSb3V0ZXI+LlxuICAgIHRoaXMudW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICBtYXRjaDogX3RoaXMyLmNvbXB1dGVNYXRjaChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHRoaXMucHJvcHMuaGlzdG9yeSA9PT0gbmV4dFByb3BzLmhpc3RvcnksIFwiWW91IGNhbm5vdCBjaGFuZ2UgPFJvdXRlciBoaXN0b3J5PlwiKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bmxpc3RlbigpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gPyBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Sb3V0ZXIucHJvcFR5cGVzID0ge1xuICBoaXN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuUm91dGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblJvdXRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XG59O1xuXG52YXIgYWRkQmFzZW5hbWUgPSBmdW5jdGlvbiBhZGRCYXNlbmFtZShiYXNlbmFtZSwgbG9jYXRpb24pIHtcbiAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKSArIGxvY2F0aW9uLnBhdGhuYW1lXG4gIH0pO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG5cbiAgdmFyIGJhc2UgPSBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGJhc2UpICE9PSAwKSByZXR1cm4gbG9jYXRpb247XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoYmFzZS5sZW5ndGgpXG4gIH0pO1xufTtcblxudmFyIGNyZWF0ZVVSTCA9IGZ1bmN0aW9uIGNyZWF0ZVVSTChsb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGxvY2F0aW9uID09PSBcInN0cmluZ1wiID8gbG9jYXRpb24gOiAoMCwgX2hpc3RvcnkuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xufTtcblxudmFyIHN0YXRpY0hhbmRsZXIgPSBmdW5jdGlvbiBzdGF0aWNIYW5kbGVyKG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsIFwiWW91IGNhbm5vdCAlcyB3aXRoIDxTdGF0aWNSb3V0ZXI+XCIsIG1ldGhvZE5hbWUpO1xuICB9O1xufTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbi8qKlxuICogVGhlIHB1YmxpYyB0b3AtbGV2ZWwgQVBJIGZvciBhIFwic3RhdGljXCIgPFJvdXRlcj4sIHNvLWNhbGxlZCBiZWNhdXNlIGl0XG4gKiBjYW4ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGN1cnJlbnQgbG9jYXRpb24uIEluc3RlYWQsIGl0IGp1c3QgcmVjb3Jkc1xuICogbG9jYXRpb24gY2hhbmdlcyBpbiBhIGNvbnRleHQgb2JqZWN0LiBVc2VmdWwgbWFpbmx5IGluIHRlc3RpbmcgYW5kXG4gKiBzZXJ2ZXItcmVuZGVyaW5nIHNjZW5hcmlvcy5cbiAqL1xuXG52YXIgU3RhdGljUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0YXRpY1JvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3RhdGljUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jcmVhdGVIcmVmID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nU2xhc2goX3RoaXMucHJvcHMuYmFzZW5hbWUgKyBjcmVhdGVVUkwocGF0aCkpO1xuICAgIH0sIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzLmNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuYWN0aW9uID0gXCJQVVNIXCI7XG4gICAgICBjb250ZXh0LmxvY2F0aW9uID0gYWRkQmFzZW5hbWUoYmFzZW5hbWUsICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikobG9jYXRpb24pKTtcbiAgICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICAgIH0sIF90aGlzLmhhbmRsZVJlcGxhY2UgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYXNlbmFtZSA9IF90aGlzJHByb3BzMi5iYXNlbmFtZSxcbiAgICAgICAgICBjb250ZXh0ID0gX3RoaXMkcHJvcHMyLmNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuYWN0aW9uID0gXCJSRVBMQUNFXCI7XG4gICAgICBjb250ZXh0LmxvY2F0aW9uID0gYWRkQmFzZW5hbWUoYmFzZW5hbWUsICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikobG9jYXRpb24pKTtcbiAgICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICAgIH0sIF90aGlzLmhhbmRsZUxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBTdGF0aWNSb3V0ZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVyOiB7XG4gICAgICAgIHN0YXRpY0NvbnRleHQ6IHRoaXMucHJvcHMuY29udGV4dFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxTdGF0aWNSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBTdGF0aWNSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYmFzZW5hbWUgPSBfcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgIGNvbnRleHQgPSBfcHJvcHMuY29udGV4dCxcbiAgICAgICAgbG9jYXRpb24gPSBfcHJvcHMubG9jYXRpb24sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1wiYmFzZW5hbWVcIiwgXCJjb250ZXh0XCIsIFwibG9jYXRpb25cIl0pO1xuXG4gICAgdmFyIGhpc3RvcnkgPSB7XG4gICAgICBjcmVhdGVIcmVmOiB0aGlzLmNyZWF0ZUhyZWYsXG4gICAgICBhY3Rpb246IFwiUE9QXCIsXG4gICAgICBsb2NhdGlvbjogc3RyaXBCYXNlbmFtZShiYXNlbmFtZSwgKDAsIF9oaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKShsb2NhdGlvbikpLFxuICAgICAgcHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgcmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgZ286IHN0YXRpY0hhbmRsZXIoXCJnb1wiKSxcbiAgICAgIGdvQmFjazogc3RhdGljSGFuZGxlcihcImdvQmFja1wiKSxcbiAgICAgIGdvRm9yd2FyZDogc3RhdGljSGFuZGxlcihcImdvRm9yd2FyZFwiKSxcbiAgICAgIGxpc3RlbjogdGhpcy5oYW5kbGVMaXN0ZW4sXG4gICAgICBibG9jazogdGhpcy5oYW5kbGVCbG9ja1xuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7IGhpc3Rvcnk6IGhpc3RvcnkgfSkpO1xuICB9O1xuXG4gIHJldHVybiBTdGF0aWNSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5TdGF0aWNSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSlcbn07XG5TdGF0aWNSb3V0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBiYXNlbmFtZTogXCJcIixcbiAgbG9jYXRpb246IFwiL1wiXG59O1xuU3RhdGljUm91dGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTdGF0aWNSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbWF0Y2hQYXRoID0gcmVxdWlyZShcIi4vbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyB0aGUgZmlyc3QgPFJvdXRlPiB0aGF0IG1hdGNoZXMuXG4gKi9cbnZhciBTd2l0Y2ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3dpdGNoLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXRjaCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmNvbnRleHQucm91dGVyLCBcIllvdSBzaG91bGQgbm90IHVzZSA8U3dpdGNoPiBvdXRzaWRlIGEgPFJvdXRlcj5cIik7XG4gIH07XG5cbiAgU3dpdGNoLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEobmV4dFByb3BzLmxvY2F0aW9uICYmICF0aGlzLnByb3BzLmxvY2F0aW9uKSwgJzxTd2l0Y2g+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoIW5leHRQcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uKSwgJzxTd2l0Y2g+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKTtcbiAgfTtcblxuICBTd2l0Y2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcm91dGUgPSB0aGlzLmNvbnRleHQucm91dGVyLnJvdXRlO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgbG9jYXRpb24gPSB0aGlzLnByb3BzLmxvY2F0aW9uIHx8IHJvdXRlLmxvY2F0aW9uO1xuXG4gICAgdmFyIG1hdGNoID0gdm9pZCAwLFxuICAgICAgICBjaGlsZCA9IHZvaWQgMDtcbiAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmIChtYXRjaCA9PSBudWxsICYmIF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICB2YXIgX2VsZW1lbnQkcHJvcHMgPSBlbGVtZW50LnByb3BzLFxuICAgICAgICAgICAgcGF0aFByb3AgPSBfZWxlbWVudCRwcm9wcy5wYXRoLFxuICAgICAgICAgICAgZXhhY3QgPSBfZWxlbWVudCRwcm9wcy5leGFjdCxcbiAgICAgICAgICAgIHN0cmljdCA9IF9lbGVtZW50JHByb3BzLnN0cmljdCxcbiAgICAgICAgICAgIHNlbnNpdGl2ZSA9IF9lbGVtZW50JHByb3BzLnNlbnNpdGl2ZSxcbiAgICAgICAgICAgIGZyb20gPSBfZWxlbWVudCRwcm9wcy5mcm9tO1xuXG4gICAgICAgIHZhciBwYXRoID0gcGF0aFByb3AgfHwgZnJvbTtcblxuICAgICAgICBjaGlsZCA9IGVsZW1lbnQ7XG4gICAgICAgIG1hdGNoID0gKDAsIF9tYXRjaFBhdGgyLmRlZmF1bHQpKGxvY2F0aW9uLnBhdGhuYW1lLCB7IHBhdGg6IHBhdGgsIGV4YWN0OiBleGFjdCwgc3RyaWN0OiBzdHJpY3QsIHNlbnNpdGl2ZTogc2Vuc2l0aXZlIH0sIHJvdXRlLm1hdGNoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaCA/IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgbG9jYXRpb246IGxvY2F0aW9uLCBjb21wdXRlZE1hdGNoOiBtYXRjaCB9KSA6IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXRjaDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblN3aXRjaC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgcm91dGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGxvY2F0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFN3aXRjaDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wYXRoVG9SZWdleHAgPSByZXF1aXJlKFwicGF0aC10by1yZWdleHBcIik7XG5cbnZhciBfcGF0aFRvUmVnZXhwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhUb1JlZ2V4cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwYXR0ZXJuQ2FjaGUgPSB7fTtcbnZhciBjYWNoZUxpbWl0ID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCA9IDA7XG5cbnZhciBjb21waWxlR2VuZXJhdG9yID0gZnVuY3Rpb24gY29tcGlsZUdlbmVyYXRvcihwYXR0ZXJuKSB7XG4gIHZhciBjYWNoZUtleSA9IHBhdHRlcm47XG4gIHZhciBjYWNoZSA9IHBhdHRlcm5DYWNoZVtjYWNoZUtleV0gfHwgKHBhdHRlcm5DYWNoZVtjYWNoZUtleV0gPSB7fSk7XG5cbiAgaWYgKGNhY2hlW3BhdHRlcm5dKSByZXR1cm4gY2FjaGVbcGF0dGVybl07XG5cbiAgdmFyIGNvbXBpbGVkR2VuZXJhdG9yID0gX3BhdGhUb1JlZ2V4cDIuZGVmYXVsdC5jb21waWxlKHBhdHRlcm4pO1xuXG4gIGlmIChjYWNoZUNvdW50IDwgY2FjaGVMaW1pdCkge1xuICAgIGNhY2hlW3BhdHRlcm5dID0gY29tcGlsZWRHZW5lcmF0b3I7XG4gICAgY2FjaGVDb3VudCsrO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBpbGVkR2VuZXJhdG9yO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBnZW5lcmF0aW5nIGEgVVJMIHBhdGhuYW1lIGZyb20gYSBwYXR0ZXJuIGFuZCBwYXJhbWV0ZXJzLlxuICovXG52YXIgZ2VuZXJhdGVQYXRoID0gZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKCkge1xuICB2YXIgcGF0dGVybiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCIvXCI7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIGlmIChwYXR0ZXJuID09PSBcIi9cIikge1xuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG4gIHZhciBnZW5lcmF0b3IgPSBjb21waWxlR2VuZXJhdG9yKHBhdHRlcm4pO1xuICByZXR1cm4gZ2VuZXJhdG9yKHBhcmFtcywgeyBwcmV0dHk6IHRydWUgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZW5lcmF0ZVBhdGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcGF0aFRvUmVnZXhwID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpO1xuXG52YXIgX3BhdGhUb1JlZ2V4cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoVG9SZWdleHApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGF0dGVybkNhY2hlID0ge307XG52YXIgY2FjaGVMaW1pdCA9IDEwMDAwO1xudmFyIGNhY2hlQ291bnQgPSAwO1xuXG52YXIgY29tcGlsZVBhdGggPSBmdW5jdGlvbiBjb21waWxlUGF0aChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZUtleSA9IFwiXCIgKyBvcHRpb25zLmVuZCArIG9wdGlvbnMuc3RyaWN0ICsgb3B0aW9ucy5zZW5zaXRpdmU7XG4gIHZhciBjYWNoZSA9IHBhdHRlcm5DYWNoZVtjYWNoZUtleV0gfHwgKHBhdHRlcm5DYWNoZVtjYWNoZUtleV0gPSB7fSk7XG5cbiAgaWYgKGNhY2hlW3BhdHRlcm5dKSByZXR1cm4gY2FjaGVbcGF0dGVybl07XG5cbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIHJlID0gKDAsIF9wYXRoVG9SZWdleHAyLmRlZmF1bHQpKHBhdHRlcm4sIGtleXMsIG9wdGlvbnMpO1xuICB2YXIgY29tcGlsZWRQYXR0ZXJuID0geyByZTogcmUsIGtleXM6IGtleXMgfTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBjYWNoZVtwYXR0ZXJuXSA9IGNvbXBpbGVkUGF0dGVybjtcbiAgICBjYWNoZUNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gY29tcGlsZWRQYXR0ZXJuO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBtYXRjaGluZyBhIFVSTCBwYXRobmFtZSB0byBhIHBhdGggcGF0dGVybi5cbiAqL1xudmFyIG1hdGNoUGF0aCA9IGZ1bmN0aW9uIG1hdGNoUGF0aChwYXRobmFtZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBwYXJlbnQgPSBhcmd1bWVudHNbMl07XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSBvcHRpb25zID0geyBwYXRoOiBvcHRpb25zIH07XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBhdGggPSBfb3B0aW9ucy5wYXRoLFxuICAgICAgX29wdGlvbnMkZXhhY3QgPSBfb3B0aW9ucy5leGFjdCxcbiAgICAgIGV4YWN0ID0gX29wdGlvbnMkZXhhY3QgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX29wdGlvbnMkZXhhY3QsXG4gICAgICBfb3B0aW9ucyRzdHJpY3QgPSBfb3B0aW9ucy5zdHJpY3QsXG4gICAgICBzdHJpY3QgPSBfb3B0aW9ucyRzdHJpY3QgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX29wdGlvbnMkc3RyaWN0LFxuICAgICAgX29wdGlvbnMkc2Vuc2l0aXZlID0gX29wdGlvbnMuc2Vuc2l0aXZlLFxuICAgICAgc2Vuc2l0aXZlID0gX29wdGlvbnMkc2Vuc2l0aXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJHNlbnNpdGl2ZTtcblxuXG4gIGlmIChwYXRoID09IG51bGwpIHJldHVybiBwYXJlbnQ7XG5cbiAgdmFyIF9jb21waWxlUGF0aCA9IGNvbXBpbGVQYXRoKHBhdGgsIHsgZW5kOiBleGFjdCwgc3RyaWN0OiBzdHJpY3QsIHNlbnNpdGl2ZTogc2Vuc2l0aXZlIH0pLFxuICAgICAgcmUgPSBfY29tcGlsZVBhdGgucmUsXG4gICAgICBrZXlzID0gX2NvbXBpbGVQYXRoLmtleXM7XG5cbiAgdmFyIG1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG5cbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHVybCA9IG1hdGNoWzBdLFxuICAgICAgdmFsdWVzID0gbWF0Y2guc2xpY2UoMSk7XG5cbiAgdmFyIGlzRXhhY3QgPSBwYXRobmFtZSA9PT0gdXJsO1xuXG4gIGlmIChleGFjdCAmJiAhaXNFeGFjdCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLCAvLyB0aGUgcGF0aCBwYXR0ZXJuIHVzZWQgdG8gbWF0Y2hcbiAgICB1cmw6IHBhdGggPT09IFwiL1wiICYmIHVybCA9PT0gXCJcIiA/IFwiL1wiIDogdXJsLCAvLyB0aGUgbWF0Y2hlZCBwb3J0aW9uIG9mIHRoZSBVUkxcbiAgICBpc0V4YWN0OiBpc0V4YWN0LCAvLyB3aGV0aGVyIG9yIG5vdCB3ZSBtYXRjaGVkIGV4YWN0bHlcbiAgICBwYXJhbXM6IGtleXMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBrZXksIGluZGV4KSB7XG4gICAgICBtZW1vW2tleS5uYW1lXSA9IHZhbHVlc1tpbmRleF07XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9LCB7fSlcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoUGF0aDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIik7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX1JvdXRlID0gcmVxdWlyZShcIi4vUm91dGVcIik7XG5cbnZhciBfUm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogQSBwdWJsaWMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0byBhY2Nlc3MgdGhlIGltcGVyYXRpdmUgQVBJXG4gKi9cbnZhciB3aXRoUm91dGVyID0gZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb25lbnQpIHtcbiAgdmFyIEMgPSBmdW5jdGlvbiBDKHByb3BzKSB7XG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnRSZWYgPSBwcm9wcy53cmFwcGVkQ29tcG9uZW50UmVmLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wid3JhcHBlZENvbXBvbmVudFJlZlwiXSk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlMi5kZWZhdWx0LCB7XG4gICAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocm91dGVDb21wb25lbnRQcm9wcykge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVtYWluaW5nUHJvcHMsIHJvdXRlQ29tcG9uZW50UHJvcHMsIHtcbiAgICAgICAgICByZWY6IHdyYXBwZWRDb21wb25lbnRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIEMuZGlzcGxheU5hbWUgPSBcIndpdGhSb3V0ZXIoXCIgKyAoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuICBDLldyYXBwZWRDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gIEMucHJvcFR5cGVzID0ge1xuICAgIHdyYXBwZWRDb21wb25lbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9O1xuXG4gIHJldHVybiAoMCwgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMi5kZWZhdWx0KShDLCBDb21wb25lbnQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZVBhdGhuYW1lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8ICcnKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFpc1Byb2R1Y3Rpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSBcIldhcm5pbmc6IFwiICsgbWVzc2FnZTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhyb3cgRXJyb3IodGV4dCk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zL2J1aWxkL3VybC1zZWFyY2gtcGFyYW1zLm5vZGUuanNcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB2YWx1ZUVxdWFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1wiKTsiLCJpbXBvcnQgUmVxdWVzdCBmcm9tICcuLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9jb21wb25lbnQvTW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZVZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB8IERhdGUgfCBhbnlbXSB8ICgoLi4uYXJnczogYW55W10pID0+IGFueSkgfCBNYXA8YW55LCBhbnk+O1xyXG5leHBvcnQgdHlwZSBSZWFkT25seTxUPiA9IFQgZXh0ZW5kcyBCYXNlVmFsdWUgPyBUIDoge1xyXG4gIHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBSZWFkT25seTxUW1BdPjtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHM8VmFsdWU+IHtcclxuICByZXF1ZXN0PzogUmVxdWVzdDtcclxuICBkZWZhdWx0VmFsdWU/OiBWYWx1ZTtcclxufVxyXG5cclxuLyoqIOaVsOaNruexu+Wei+WfuuexuyAqL1xyXG5hYnN0cmFjdCBjbGFzcyBEYXRhVHlwZTxWYWx1ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q/OiBSZXF1ZXN0KSB7XHJcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIOaVsOaNruabtOaWsOeahGlk77yM55So5LqO5Yik5pat5pWw5o2u5piv5ZCm5Y+R55Sf5Y+Y5YyWICovXHJcbiAgcHJpdmF0ZSBkYXRhSWQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsYXN0RGF0YUlkOiBudW1iZXIgPSAwO1xyXG4gIHByb3RlY3RlZCByZXF1ZXN0OiBSZXF1ZXN0IHwgdW5kZWZpbmVkO1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdmFsdWU6IGFueTtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0KC4uLmFyZzogYW55W10pOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXQoLi4uYXJnOiBhbnlbXSk6IGFueTtcclxuXHJcbiAgLyoqIOabtOaWsOaVsOaNrmlkICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZURhdGFJZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YUlkKys7XHJcbiAgICBpZiAoTW9kZWwuZGlzcGF0Y2gpIHtcclxuICAgICAgTW9kZWwuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDmlbDmja7mmK/lkKbmlLnlj5jvvIzkuLp0cnVl5YiZ5piv5pS55Y+YLCAqL1xyXG4gIC8qKiDnibnliKvms6jmhI/vvJrov5nkuKrmlrnms5XmnInlia/kvZznlKjvvIzosIPnlKjkuIDmrKHlkI7lsIbkuIDnm7Tov5Tlm55mYWxzZe+8jOmZpOmdnuWGjeasoeiwg+eUqHVwZGF0ZURhdGFJZCAqL1xyXG4gIHB1YmxpYyBnZXQgaXNDaGFuZ2UoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5kYXRhSWQgIT09IHRoaXMubGFzdERhdGFJZCkge1xyXG4gICAgICB0aGlzLmxhc3REYXRhSWQgPSB0aGlzLmRhdGFJZDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3RyaW5naWZ5KGtleTogYW55KTogYW55IHtcclxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoa2V5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W5pWw5o2uaWQgKi9cclxuICBwdWJsaWMgZ2V0RGF0YUlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhVHlwZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGUnO1xyXG5pbXBvcnQgRm9ybVNlcnZpY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Zvcm0vc2VydmljZSc7XHJcbmltcG9ydCBPYk9iamVjdCBmcm9tICcuLi8uLi9hcHAvZGF0YXR5cGUvb2JPYmplY3QnO1xyXG5pbXBvcnQgRGF0YVR5cGUgZnJvbSAnLi4vLi4vX2Jhc2UvZGF0YXR5cGUnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuLi8uLi91dGlscy9pc0VtcHR5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BzPFZhbHVlPiB7XHJcbiAgLyoqIOaPkOS6pOeahEpTT04gS2V55YC8ICovXHJcbiAgZmllbGRLZXk6IHN0cmluZztcclxuICAvKiog5a2X5q615pi+56S655qE5ZCN56ewICovXHJcbiAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgLyoqIOWIneWni+WAvCAqL1xyXG4gIGRlZmF1bHRWYWx1ZT86IFZhbHVlO1xyXG4gIC8qKiDpu5jorqTmj5DnpLrmloflrZfvvIzkvJropobnm5blhoXnva7nmoTmj5DnpLogKi9cclxuICBwcm9tcHQ/OiBzdHJpbmc7XHJcbiAgLyoqIOiOt+WPluihqOWNleaooeWeiyAqL1xyXG4gIGZvcm0/OiAoKSA9PiBGb3JtU2VydmljZTtcclxuICAvKiog5piv5ZCm5b+F5aGrICovXHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIC8qKiDoh6rlrprkuYnpqozor4Hlh73mlbDvvIzmiJbogIXku47lhoXnva7lh73mlbDkuK3pgInmi6kgKi9cclxuICB2YWxpZGF0ZT86ICgodmFsdWU6IFZhbHVlKSA9PiBib29sZWFuKSB8IGtleW9mIHR5cGVvZiB2YWxpZGF0ZTtcclxuICAvKiogdmFsdWXmlLnlj5jkuovku7YgKi9cclxuICBvbkNoYW5nZT86ICh2YWx1ZTogVmFsdWUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlID0gJ2VtcHR5JyB8ICdmYWlsJyB8ICdjb21wbGV0ZSc7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBGaWVsZHM8VmFsdWU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BzPFZhbHVlPikge1xyXG4gICAgdGhpcy5maWVsZEtleSA9IHByb3BzLmZpZWxkS2V5O1xyXG4gICAgdGhpcy5maWVsZE5hbWUgPSBwcm9wcy5maWVsZE5hbWU7XHJcbiAgICB0aGlzLnJlcXVpcmVkID0gcHJvcHMucmVxdWlyZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLnByb21wdCA9IG5ldyBPYk9iamVjdCh7IGRlZmF1bHRWYWx1ZTogcHJvcHMucHJvbXB0IHx8ICcnfSk7XHJcbiAgICB0aGlzLmdldEZvcm0gPSBwcm9wcy5mb3JtO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25kaXRpb25hbC1leHByZXNzaW9uXHJcbiAgICBpZiAodHlwZW9mIHByb3BzLnZhbGlkYXRlICA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy52ZXJpZmljYXRpb24gPSB2YWxpZGF0ZVtwcm9wcy52YWxpZGF0ZV0gYXMgKCh2YWx1ZTogYW55KSA9PiBib29sZWFuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uID0gcHJvcHMudmFsaWRhdGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2U7XHJcblxyXG4gICAgdGhpcy5zZXRQcm9tcHQgPSB0aGlzLnNldFByb21wdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xlYXIgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlID0gdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRQcm9tcHQgPSB0aGlzLmdldFByb21wdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOihqOWNleaooeWeiyAqL1xyXG4gIHByb3RlY3RlZCBnZXRGb3JtOiBCYXNlUHJvcHM8UmVhZG9ubHk8VmFsdWU+PlsnZm9ybSddIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDpqozor4Hlh73mlbDnmoTmlrnms5XlkI0gKi9cclxuICBwcml2YXRlIHZlcmlmaWNhdGlvbjogKCh2YWx1ZTogVmFsdWUpID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiB2YWx1ZeaUueWPmOS6i+S7tiAqL1xyXG4gIHByaXZhdGUgb25DaGFuZ2U6ICgodmFsdWU6IFZhbHVlKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuICAvKiog5a2X5q615Lit5paH5ZCN56ewICovXHJcbiAgcHJpdmF0ZSBmaWVsZE5hbWU6IHN0cmluZztcclxuICAvKiog5LiK5LiA5qyh6aqM6K+B55qE5YC8ICovXHJcbiAgcHJpdmF0ZSBsYXN0VmFsaWRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiog5YC8ICovXHJcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHZhbHVlOiBEYXRhVHlwZTxWYWx1ZT47XHJcbiAgLyoqIOeUqOS6juimhueblum7mOiupOeahHByb21wdCAqL1xyXG4gIHByaXZhdGUgcHJvbXB0OiBPYk9iamVjdDxzdHJpbmc+O1xyXG4gIC8qKiBqc29uIGtleeWAvCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBmaWVsZEtleTogc3RyaW5nO1xyXG4gIC8qKiDmmK/lkKblv4XloasgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgcmVxdWlyZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOi+k+WFpeeKtuaAgSAqL1xyXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogU3RhdGUge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlLmdldCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGlmIChpc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAnZW1wdHknO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xyXG4gICAgICByZXR1cm4gJ2ZhaWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdjb21wbGV0ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u5o+Q56S65paH5a2XICovXHJcbiAgcHVibGljIHNldFByb21wdCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdldFByb21wdCgpICE9PSB0ZXh0KSB7XHJcbiAgICAgIHRoaXMucHJvbXB0LnNldCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDmj5DnpLrmloflrZcgKi9cclxuICBwdWJsaWMgZ2V0UHJvbXB0KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBwcm9tcHQgPSB0aGlzLnByb21wdC5nZXQoKTtcclxuXHJcbiAgICBpZiAocHJvbXB0KSB7XHJcbiAgICAgIHJldHVybiBwcm9tcHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2VtcHR5Jykge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkTmFtZX3lv4XloatgO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdmYWlsJykge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkTmFtZX3moLzlvI/kuI3mraPnoa5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L6T5YWl6aqM6K+B5Ye95pWwXHJcbiAgICog5Li6dHJ1ZeihqOekuuaciemUmeivr++8jOS4umZhbHNl6KGo56S65peg6ZSZ6K+vXHJcbiAgICovXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMudmFsdWUuaXNDaGFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlLmdldCgpO1xyXG4gICAgICAvLyDliKTmlq3mmK/lkKbmnInoh6rlrprkuYnpqozor4Hlh73mlbBcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25kaXRpb25hbC1leHByZXNzaW9uXHJcbiAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLnZlcmlmaWNhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VmFsaWRhdGUgPSAhdGhpcy52ZXJpZmljYXRpb24odmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGFzdFZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWIpOaWreacieayoeaciemqjOivgeWHveaVsO+8jOayoeacieeahOivneWwseS4jemcgOimgemqjOivgVxyXG4gICAgcmV0dXJuIHRoaXMubGFzdFZhbGlkYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOa4heepuuaVsOaNrueKtuaAgSAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBjbGVhcigpOiB2b2lkO1xyXG5cclxuICAvKiog5a+55YC85pS55Y+Y5pe25YGa5LiA5Lqb6IGU5Yqo5aSE55CGICovXHJcbiAgcHVibGljIGNoYW5nZVZhbHVlKHZhbHVlOiBWYWx1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZS5zZXQodmFsdWUpO1xyXG4gICAgdGhpcy52YWxpZGF0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRzOyIsImltcG9ydCBCYXNlLCB7IFByb3BzLCBSZWFkT25seSB9IGZyb20gJy4uLy4uL19iYXNlL2RhdGF0eXBlJztcclxuXHJcbmNsYXNzIE9iQXJyYXk8VmFsdWU+IGV4dGVuZHMgQmFzZTxWYWx1ZVtdPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM/OiBQcm9wczxBcnJheTxSZWFkT25seTxWYWx1ZT4+Pikge1xyXG4gICAgc3VwZXIocHJvcHMgJiYgcHJvcHMucmVxdWVzdCk7XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHByb3BzICYmIHByb3BzLmRlZmF1bHRWYWx1ZSA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbHVlOiBBcnJheTxSZWFkT25seTxWYWx1ZT4+O1xyXG5cclxuICBwdWJsaWMgc2V0KHZhbHVlOiBBcnJheTxSZWFkT25seTxWYWx1ZT4+KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMucmVxdWVzdCkge1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdC5zdGF0ZS5zZXQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnN0YXRlLnNldCgnZW1wdHknKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlRGF0YUlkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KCk6IEFycmF5PFJlYWRPbmx5PFZhbHVlPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYkFycmF5OyIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4uL3JlcXVlc3QnO1xyXG5pbXBvcnQgQmFzZSwgeyBSZWFkT25seSwgQmFzZVZhbHVlIH0gZnJvbSAnLi4vLi4vX2Jhc2UvZGF0YXR5cGUnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICcuLi8uLi91dGlscy9pc0VtcHR5JztcclxuXHJcbmV4cG9ydCB0eXBlIFZhbHVlPFQ+ID0gVCBleHRlbmRzIEJhc2VWYWx1ZSA/IFQgOiBUIHwgdW5kZWZpbmVkO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzPFQ+IHtcclxuICByZXF1ZXN0PzogUmVxdWVzdDtcclxuICBkZWZhdWx0VmFsdWU6IFJlYWRPbmx5PFQ+O1xyXG59XHJcblxyXG4vKiog5a+56LGh5oiW5Z+65pys57G75Z6L5pWw5o2uICovXHJcbmNsYXNzIE9iT2JqZWN0PFQ+IGV4dGVuZHMgQmFzZTxUPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzPFQ+KSB7XHJcbiAgICBzdXBlcihwcm9wcy5yZXF1ZXN0KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbHVlOiBSZWFkT25seTxUPjtcclxuXHJcbiAgcHVibGljIHNldCh2YWx1ZTogUmVhZE9ubHk8VD4pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XHJcbiAgICAgIGlmIChpc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdC5zdGF0ZS5zZXQoJ2VtcHR5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnN0YXRlLnNldCgnY29tcGxldGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlRGF0YUlkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KCk6IFJlYWRPbmx5PFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JPYmplY3Q7IiwiaW1wb3J0IHlqIGZyb20gJy4uL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XHJcbi8vIGltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwUm91dGUgPSAocHJvcHM6IHlqLlBhZ2VQcm9wczxhbnk+KSA9PiBKU1guRWxlbWVudDtcclxuXHJcbmNsYXNzIEdsb2JhbCB7XHJcbiAgcHVibGljIGFwcFJvdXRlITogQXBwUm91dGU7XHJcbiAgcHVibGljIHJvdXRlcyE6IEpTWC5FbGVtZW50W107XHJcbiAgcHVibGljIGhpc3RvcnkhOiBIaXN0b3J5O1xyXG4gIC8qKiDpobXpnaJpZCAqL1xyXG4gIHB1YmxpYyBwYWdlSWQ6IG51bWJlciA9IDE7XHJcbiAgLyoqIHJlcGFsY2XliY3nmoRjb21wb25lbnQgKi9cclxuICBwdWJsaWMgcmVwbGFjZUJlZm9yZUNvbXBvbmVudCE6IFBhZ2U8eWouUGFnZVByb3BzPGFueT4sIGFueSwgYW55PjtcclxuICAvKiog5piv5ZCm5aSE5LqOaW5wdXQgZm91Y3PnirbmgIHvvIznlKjkuo7liKTmlq1kaXNwYXRjaOaYr+WQpuimgeS8mOWMliAqL1xyXG4gIHB1YmxpYyBpbnB1dEZvdWNzOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IGdsb2JhbCA9IG5ldyBHbG9iYWwoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdsb2JhbDsiLCJpbXBvcnQgeWogZnJvbSAnLi4vdHlwaW5ncyc7XHJcbmltcG9ydCBheGlvcywgeyBDYW5jZWxlciwgQXhpb3NSZXNwb25zZSwgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgKiBhcyBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICcuLi9jb21wb25lbnQvU3RhdGVNYWNoaW5lJztcclxuaW1wb3J0IE9iT2JqZWN0IGZyb20gJy4vZGF0YXR5cGUvb2JPYmplY3QnO1xyXG5jb25zdCBpc0VtcHR5ID0gcmVxdWlyZSgnbG9kYXNoL2lzRW1wdHknKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gIC8qKiDmiJDlip/lkI7nmoTlm57osIMgKi9cclxuICBjYWxsYmFjaz86IChyZXNwb25zZTogeWoucmVzcG9uc2UsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG4gIC8qKiDlpLHotKXlkI7nmoTlm57osIMgKi9cclxuICBmYWlsYmFjaz86IChlcnI6IEVycm9yKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRXZlbnQge1xyXG4gIGFwaT86IHN0cmluZztcclxuICByZXF1ZXN0RGF0YT86ICgpID0+IFBhcmFtcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25QYXJhbXMge1xyXG4gIC8qKiDor7fmsYLnmoTlj4LmlbDphY3nva4gKi9cclxuICBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZztcclxuICAvKiog5piv5ZCm6ZyA6KaB5YGadHJhbnNmb3JtUmVzcG9uc2XlpITnkIbvvIzpu5jorqTlpITnkIYgKi9cclxuICB0cmFuc2Zvcm1SZXNwb25zZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZWFkQ2FjaGVQYXJhbXM8RGF0YT4ge1xyXG4gIGRhdGE6IERhdGE7XHJcbiAgLyoqIOWRveS4ree8k+WtmCAqL1xyXG4gIGhpdDogKGRhdGE6IERhdGEpID0+IHZvaWQ7XHJcbiAgLyoqIOacquWRveS4ree8k+WtmCAgKi9cclxuICBtaXNzOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcz86IFByb3BzKSB7XHJcbiAgICB0aGlzLnNlbmQgPSB0aGlzLnNlbmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICBpZiAocHJvcHMpIHtcclxuICAgICAgdGhpcy5fYXBpID0gcHJvcHMuYXBpO1xyXG4gICAgICB0aGlzLl9jYWxsYmFjayA9IHByb3BzLmNhbGxiYWNrO1xyXG4gICAgICB0aGlzLl9mYWlsYmFjayA9IHByb3BzLmZhaWxiYWNrO1xyXG4gICAgICB0aGlzLnJlcXVlc3REYXRhID0gcHJvcHMucmVxdWVzdERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXNwb25zZSA9IHRoaXMucmVzcG9uc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYWN0aW9uID0gdGhpcy5hY3Rpb24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiDlj5HpgIHor7fmsYIgKi9cclxuICBwdWJsaWMgYWJzdHJhY3Qgc2VuZCguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8dm9pZD47XHJcbiAgLyoqIOivt+axguWPkemAgeWksei0peWQjueahOmHjeaWsOivt+axgueahOasoeaVsCAqL1xyXG4gIHByaXZhdGUgYWdhaW5Db3VudDogbnVtYmVyID0gMDtcclxuICAvKiog5piv5ZCm5byA5ZCv6K+35rGC5aSx6LSl5ZCO6YeN5paw6K+35rGCICovXHJcbiAgcHJvdGVjdGVkIGFnYWluOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqIOm7mOiupOWPguaVsO+8jOeUqOS6jnVybOS4iueahHNlYXJjaCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFBhcmFtczogUGFyYW1zIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDpu5jorqTlj4LmlbDvvIznlKjkuo5wb3N06K+35rGC55qEZGF0YSAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdERhdGE6IFBhcmFtcyB8IHVuZGVmaW5lZDtcclxuICAvKiog6K+35rGC5oiQ5Yqf5ZCO55qE6buY6K6k5aSE55CGICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiB5ai5yZXNwb25zZSkgPT4geWoucmVzcG9uc2U7XHJcbiAgLyoqIENvbnRlbnQtVHlwZeaYr+WQpuiuvue9ruS4umFwcGxpY2F0aW9uL2pzb24gKi9cclxuICBwdWJsaWMgc3RhdGljIGlzQXBwbGljYXRpb25Kc29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqIOWPlua2iOivt+axgiAqL1xyXG4gIHB1YmxpYyBjYW5jZWw6IENhbmNlbGVyIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDmmK/lkKblpITkuo7or7fmsYLkuK0gKi9cclxuICBwdWJsaWMgcmVxdWVzdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiDmjqXlj6PlnLDlnYAgKi9cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2FwaTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDmiJDlip/lkI7nmoTlm57osIMgKi9cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NhbGxiYWNrOiBFdmVudFsnY2FsbGJhY2snXSB8IHVuZGVmaW5lZDtcclxuICAvKiog5aSx6LSl5ZCO55qE5Zue6LCDICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9mYWlsYmFjazogRXZlbnRbJ2ZhaWxiYWNrJ10gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOWPkemAgeivt+axgueahOWPguaVsCAqL1xyXG4gIHB1YmxpYyByZXF1ZXN0RGF0YTogKCgpID0+IFBhcmFtcykgfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOivt+axgueahOeKtuaAgSAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzdGF0ZTogT2JPYmplY3Q8VHlwZT4gPSBuZXcgT2JPYmplY3QoeyBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCB9KTtcclxuICAvKiog5LiK5LiA5Liq5Y+C5pWwICovXHJcbiAgcHJpdmF0ZSBsYXN0UGFyYW1zOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqIOWvueivt+axgui/lOWbnuWQjueahOWTjeW6lOWBmuWkhOeQhiAqL1xyXG4gIHByaXZhdGUgcmVzcG9uc2UocGFyYW1zOiBBY3Rpb25QYXJhbXMsIHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPHlqLnJlc3BvbnNlPik6IHlqLnJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybVJlc3BvbnNlID0gcGFyYW1zLnRyYW5zZm9ybVJlc3BvbnNlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHBhcmFtcy50cmFuc2Zvcm1SZXNwb25zZTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGlmICh0cmFuc2Zvcm1SZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiBSZXF1ZXN0LnRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlpoLmnpzor7fmsYLlpLHotKXvvIzlsLHlj5Hotbfph43mlrDlj5Hotbfor7fmsYLvvIzmrKHmlbDmnIDlpJrkuLoz5qyhXHJcbiAgICAgIGlmICh0aGlzLmFnYWluICYmIHRoaXMuYWdhaW5Db3VudCA8IDMpIHtcclxuICAgICAgICB0aGlzLmFnYWluQ291bnQrKztcclxuICAgICAgICB0aGlzLmFjdGlvbihwYXJhbXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0KCdmYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDlj5HpgIHor7fmsYLnmoTlsIHoo4Xlh73mlbAgKi9cclxuICBwcm90ZWN0ZWQgYWN0aW9uKHBhcmFtczogQWN0aW9uUGFyYW1zKTogUHJvbWlzZTx5ai5yZXNwb25zZT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyDlhYjliKTmlq3mmK/lkKbmnInnvJPlrZjvvIzlpoLmnpzmnInlsLHor7vnvJPlrZjvvIzlkKbliJnlj5Hotbfor7fmsYJcclxuICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9IGNvbmZpZy5tZXRob2QgJiYgY29uZmlnLm1ldGhvZC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChSZXF1ZXN0LmRlZmF1bHREYXRhICYmIG1ldGhvZCA9PT0gJ3Bvc3QnKSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRhID0gUmVxdWVzdC5kZWZhdWx0RGF0YTtcclxuICAgICAgT2JqZWN0LmtleXMoKGRlZmF1bHREYXRhKSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHREYXRhW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIChSZXF1ZXN0LmRlZmF1bHREYXRhIGFzIFBhcmFtcylba2V5XSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFJlcXVlc3QuZGVmYXVsdFBhcmFtcyAmJiBtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgIGNvbnN0IHRlbXA6IGFueSA9IHt9O1xyXG5cclxuICAgICAgaWYgKGNvbmZpZy5wYXJhbXMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcucGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnLnBhcmFtc1trZXldO1xyXG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRlbXBba2V5XSA9IGNvbmZpZy5wYXJhbXNba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uZmlnLnBhcmFtcyA9IGFzc2lnbih7fSwgUmVxdWVzdC5kZWZhdWx0UGFyYW1zLCB0ZW1wKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgT2JqZWN0LmtleXMoKGNvbmZpZy5kYXRhKSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb25maWcuZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiAhdXJsU2VhcmNoUGFyYW1zLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgY29uZmlnLmRhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlcXVlc3RpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgYXhpb3MuQ2FuY2VsVG9rZW4oKGNhbmNlbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jYW5jZWwgPSBjYW5jZWw7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IG1ldGhvZCA9PT0gJ3Bvc3QnICYmIFJlcXVlc3QuaXNBcHBsaWNhdGlvbkpzb24gPT09IGZhbHNlID8gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgOiB1bmRlZmluZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBkYXRhOiB1cmxTZWFyY2hQYXJhbXMsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKHBhcmFtcywgcmVzcG9uc2UpKTtcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIubWVzc2FnZSAhPT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXQoJ2ZhaWwnKTtcclxuICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5L2/55So57yT5a2YICovXHJcbiAgcHJvdGVjdGVkIGFzeW5jIHJlYWRDYWNoZTxEYXRhPihwYXJhbXM6IFJlYWRDYWNoZVBhcmFtczxEYXRhPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBoaXQsIG1pc3MgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyDlpoLmnpzmlbDmja7lrZjlnKjkvb/nlKjnvJPlrZhcclxuICAgIGlmIChpc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgIG1pc3MoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhpdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDlj4LmlbDmmK/lkKbmlLnlj5ggKi9cclxuICBwdWJsaWMgaXNQYXJhbXNDaGFuZ2UoY3VycmVudFBhcmFtczogUGFyYW1zKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjdXJyZW50UGFyYW1zU3RyID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFBhcmFtcyk7XHJcbiAgICBjb25zdCBpc1BhcmFtc0NoYW5nZSA9IHRoaXMubGFzdFBhcmFtcyAhPT0gY3VycmVudFBhcmFtc1N0cjtcclxuICAgIHRoaXMubGFzdFBhcmFtcyA9IGN1cnJlbnRQYXJhbXNTdHI7XHJcbiAgICByZXR1cm4gaXNQYXJhbXNDaGFuZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0OyIsIi8vIGltcG9ydCBzdHJpbmdUb0hleCBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdUb0hleCc7XHJcbi8vIGltcG9ydCBnbG9iYWwgZnJvbSAnLi4vLi4vYXBwL2dsb2JhbCc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi9jb21wb25lbnQvVG9hc3QnO1xyXG5pbXBvcnQgSW1nVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnQvSW1nVmlldyc7XHJcbmltcG9ydCBpc0h0dHAgZnJvbSAnLi4vLi4vdXRpbHMvaXNIdHRwJztcclxuY29uc3QgeyBoZXhfc2hhMSB9ID0gcmVxdWlyZSgnLi9zaGExLmpzJyk7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgdGlja2V0OiBzdHJpbmc7XHJcbiAgYXBwSWQ6IHN0cmluZztcclxuICBzaGFyZUxpbms/OiAoKSA9PiBzdHJpbmc7XHJcbiAgc2hhcmVUaXRsZT86IHN0cmluZztcclxuICBzaGFyZURlc2M/OiBzdHJpbmc7XHJcbiAgZGVidWc/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgT25TaGFyZVBhcmFtcyB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZGVzYz86IHN0cmluZztcclxuICBpbWdIb3N0Pzogc3RyaW5nO1xyXG4gIGltZ1VybD86IHN0cmluZztcclxuICBsaW5rPzogc3RyaW5nO1xyXG4gIGNhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGFyZSB7XHJcbiAgLyoqIOagh+mimCAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKiDmj4/ov7AgKi9cclxuICBkZXNjPzogc3RyaW5nO1xyXG4gIC8qKiDlsIHpnaIgKi9cclxuICBjb3Zlcj86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcyB7XHJcbiAgbG9jYWxEYXRhOiBzdHJpbmc7XHJcbiAgc2VydmVySWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpbmRvd0V4dGVuZHMgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIF9fd3hqc19pc193a3dlYnZpZXc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmRlY2xhcmUgY29uc3Qgd3g6IGFueTtcclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvd0V4dGVuZHM7XHJcblxyXG4vLyBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcclxuY29uc3QgY29udmVudGlvbk1lbnVJdGVtID0gW1xyXG4gICdtZW51SXRlbTpzaGFyZTpxcScsXHJcbiAgJ21lbnVJdGVtOnNoYXJlOndlaWJvQXBwJyxcclxuICAnbWVudUl0ZW06c2hhcmU6ZmFjZWJvb2snLFxyXG4gICdtZW51SXRlbTpzaGFyZTpRWm9uZScsXHJcbiAgJ21lbnVJdGVtOmVkaXRUYWcnLFxyXG4gICdtZW51SXRlbTpkZWxldGUnLFxyXG4gICdtZW51SXRlbTpjb3B5VXJsJyxcclxuICAnbWVudUl0ZW06b3JpZ2luUGFnZScsXHJcbiAgJ21lbnVJdGVtOnJlYWRNb2RlJyxcclxuICAnbWVudUl0ZW06b3BlbldpdGhRUUJyb3dzZXInLFxyXG4gICdtZW51SXRlbTpvcGVuV2l0aFNhZmFyaScsXHJcbiAgJ21lbnVJdGVtOnNoYXJlOmVtYWlsJyxcclxuICAnbWVudUl0ZW06c2hhcmU6YnJhbmQnXHJcbl07XHJcblxyXG5leHBvcnQgY2xhc3MgV2VpWGluIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhpZGVBbGxOb25CYXNlTWVudUl0ZW0gPSB0aGlzLmhpZGVBbGxOb25CYXNlTWVudUl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGlkZUNvbnZlbnRpb25NZW51SXRlbSA9IHRoaXMuaGlkZUNvbnZlbnRpb25NZW51SXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlU2hhcmVNZW51SXRlbSA9IHRoaXMuaGlkZVNoYXJlTWVudUl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMucHJldmlld0ltYWdlID0gdGhpcy5wcmV2aWV3SW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hvb3NlSW1hZ2UgPSB0aGlzLmNob29zZUltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwbG9hZEltYWdlID0gdGhpcy51cGxvYWRJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRMb2NhbEltZ0RhdGEgPSB0aGlzLmdldExvY2FsSW1nRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblNoYXJlID0gdGhpcy5vblNoYXJlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwaUxpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICAgJ3ByZXZpZXdJbWFnZScsXHJcbiAgICAnaGlkZU1lbnVJdGVtcycsXHJcbiAgICAnY2hvb3NlSW1hZ2UnLFxyXG4gICAgJ3VwbG9hZEltYWdlJyxcclxuICAgICdnZXRMb2NhbEltZ0RhdGEnLFxyXG4gICAgJ29uTWVudVNoYXJlVGltZWxpbmUnLFxyXG4gICAgJ29uTWVudVNoYXJlQXBwTWVzc2FnZScsXHJcbiAgICAnb25NZW51U2hhcmVXZWlibycsXHJcbiAgICAnb25NZW51U2hhcmVRWm9uZScsXHJcbiAgICAnc2hvd09wdGlvbk1lbnUnLFxyXG4gICAgJ2hpZGVBbGxOb25CYXNlTWVudUl0ZW0nXHJcbiAgXTtcclxuICBwdWJsaWMgc3RhdGljIG9wdGlvbnM6IE9wdGlvbnMgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgZ2V0SHR0cFVybChzcmM6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBob3N0ID0gSW1nVmlldy5kZWZhdWx0SG9zdDtcclxuICAgIGNvbnN0IHVybCA9IHNyYyAmJiBpc0h0dHAoc3JjKSA/IHNyYyA6IGhvc3QgKyBzcmM7XHJcblxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkeShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKFdlaVhpbi5vcHRpb25zKSB7XHJcbiAgICAgIHd4LnJlYWR5KGNhbGxiYWNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDliJ3lp4vljJbphY3nva7vvIzlr7nlupR3eC5jb25maWcgKi9cclxuICBwdWJsaWMgY29uZmlnKCk6IHZvaWQge1xyXG4gICAgaWYgKFdlaVhpbi5vcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHsgdGlja2V0LCBkZWJ1ZywgYXBwSWQgfSA9IFdlaVhpbi5vcHRpb25zO1xyXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgY29uc3Qgbm9uY2VTdHIgPSAnYWswb3M3aDFkb2puNTFvanZzNXI4bGZ3c3EzZGVic3UnO1xyXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gICAgICBjb25zdCBkYXRhID0gYGpzYXBpX3RpY2tldD0ke3RpY2tldH0mbm9uY2VzdHI9JHtub25jZVN0cn0mdGltZXN0YW1wPSR7dGltZXN0YW1wfSZ1cmw9JHt1cmx9YDtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gaGV4X3NoYTEoZGF0YSk7XHJcbiAgICAgIHd4LmNvbmZpZyh7XHJcbiAgICAgICAgZGVidWcsXHJcbiAgICAgICAgYXBwSWQsXHJcbiAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgIG5vbmNlU3RyLFxyXG4gICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgICBqc0FwaUxpc3Q6IHRoaXMuYXBpTGlzdFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDpmpDol4/miYDmnInpnZ7ln7rnoYDmjInpkq7mjqXlj6MgKi9cclxuICBwdWJsaWMgaGlkZUFsbE5vbkJhc2VNZW51SXRlbSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICB3eC5oaWRlQWxsTm9uQmFzZU1lbnVJdGVtKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDluLjop4HpmpDol4/oj5zljZXphY3nva4gKi9cclxuICBwdWJsaWMgaGlkZUNvbnZlbnRpb25NZW51SXRlbSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICB3eC5zaG93T3B0aW9uTWVudSgpO1xyXG4gICAgICB3eC5oaWRlTWVudUl0ZW1zKHtcclxuICAgICAgICBtZW51TGlzdDogY29udmVudGlvbk1lbnVJdGVtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5Zyo5bi46KeB6I+c5Y2V6YWN572u5Z+656GA6ZqQ6JeP5omA5pyJ5YiG5LqrICovXHJcbiAgcHVibGljIGhpZGVTaGFyZU1lbnVJdGVtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lbnVMaXN0ID0gW1xyXG4gICAgICAgIC4uLmNvbnZlbnRpb25NZW51SXRlbSxcclxuICAgICAgICAnbWVudUl0ZW06c2hhcmU6YXBwTWVzc2FnZScsXHJcbiAgICAgICAgJ21lbnVJdGVtOnNoYXJlOnRpbWVsaW5lJyxcclxuICAgICAgICAnbWVudUl0ZW06ZmF2b3JpdGUnLFxyXG4gICAgICBdO1xyXG4gICAgICB3eC5zaG93T3B0aW9uTWVudSgpO1xyXG4gICAgICB3eC5oaWRlTWVudUl0ZW1zKHtcclxuICAgICAgICBtZW51TGlzdFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOmihOiniOWbvueJhyAqL1xyXG4gIHB1YmxpYyBwcmV2aWV3SW1hZ2Uoc3JjOiBzdHJpbmcsIGltZ0hvc3Q6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgY29uc3QgdXJscyA9IChzcmMuaW5kZXhPZignaHR0cCcpID49IDAgfHwgc3JjLmluZGV4T2YoJ2h0dHBzJykgPj0gMCkgPyBbc3JjLnJlcGxhY2UoJ3NfJywgJ2xfJyldIDogWyhpbWdIb3N0ICsgc3JjKS5yZXBsYWNlKCdzXycsICdsXycpXTtcclxuXHJcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgIGN1cnJlbnQ6IHVybHNbMF0sXHJcbiAgICAgICAgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICAgIHVybHNcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDlm77lg4/pgInmi6kgKi9cclxuICBwdWJsaWMgY2hvb3NlSW1hZ2Uoc2F2ZXBob3RvczogKHNlcnZlcklkOiBzdHJpbmcsIGxvY2FsRGF0YTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XHJcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxJZHMgPSByZXMubG9jYWxJZHM7IC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsElE5YiX6KGo77yMbG9jYWxJZOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG4gICAgICAgIHRoaXMudXBsb2FkSW1hZ2UobG9jYWxJZHNbMF0sIHNhdmVwaG90b3MpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDkuIrkvKDlm77niYcgKi9cclxuICBwdWJsaWMgdXBsb2FkSW1hZ2UobG9jYWxJZDogc3RyaW5nLCBzYXZlcGhvdG9zOiAoc2VydmVySWQ6IHN0cmluZywgbG9jYWxEYXRhOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIFRvYXN0LmxvYWRpbmcoJ+S4iuS8oOS4rS4uLicpO1xyXG4gICAgd3gudXBsb2FkSW1hZ2Uoe1xyXG4gICAgICBsb2NhbElkLCAvLyDpnIDopoHkuIrkvKDnmoTlm77niYfnmoTmnKzlnLBJRO+8jOeUsWNob29zZUltYWdl5o6l5Y+j6I635b6XXHJcbiAgICAgIGlzU2hvd1Byb2dyZXNzVGlwczogMCwgLy8g6buY6K6k5Li6Me+8jOaYvuekuui/m+W6puaPkOekulxyXG4gICAgICBzdWNjZXNzOiAocmVzOiBSZXMpID0+IHtcclxuICAgICAgICBUb2FzdC5jbG9zZSgpO1xyXG4gICAgICAgIC8vIOWFvOWuuUlPUyB3a3dlYnZpZXfmqKHlvI9cclxuICAgICAgICBpZiAod2luZG93WydfX3d4anNfaXNfd2t3ZWJ2aWV3J10pIHtcclxuICAgICAgICAgIC8vIOi/lOWbnuWbvueJh+eahOacjeWKoeWZqOerr0lEXHJcbiAgICAgICAgICB0aGlzLmdldExvY2FsSW1nRGF0YShsb2NhbElkLCAobG9jYWxEYXRhKSA9PiBzYXZlcGhvdG9zKHJlcy5zZXJ2ZXJJZCwgbG9jYWxEYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNhdmVwaG90b3MocmVzLnNlcnZlcklkLCBsb2NhbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZTogRXJyb3IpID0+IHtcclxuICAgICAgICBUb2FzdC5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDojrflj5bmnKzlnLDlm77niYfmjqXlj6MgKi9cclxuICBwdWJsaWMgZ2V0TG9jYWxJbWdEYXRhKGxvY2FsSWQ6IHN0cmluZywgc2hvd3Bob3RvczogKGxvY2FsSWQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgd3guZ2V0TG9jYWxJbWdEYXRhKHtcclxuICAgICAgbG9jYWxJZCwgLy8g5Zu+54mH55qEbG9jYWxJRFxyXG4gICAgICBzdWNjZXNzKHJlczogUmVzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbG9jYWxEYXRh5piv5Zu+54mH55qEYmFzZTY05pWw5o2u77yM5Y+v5Lul55SoaW1n5qCH562+5pi+56S6XHJcbiAgICAgICAgc2hvd3Bob3RvcyhyZXMubG9jYWxEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5b6u5L+h5YiG5LqrICovXHJcbiAgcHVibGljIG9uU2hhcmUocGFyYW1zPzogT25TaGFyZVBhcmFtcyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBXZWlYaW4ub3B0aW9ucztcclxuXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2hhcmVMaW5rICYmIG9wdGlvbnMuc2hhcmVUaXRsZSAmJiBvcHRpb25zLnNoYXJlRGVzYykge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcGFyYW1zICYmIHBhcmFtcy5jYWxsYmFjaztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IChwYXJhbXMgJiYgcGFyYW1zLnRpdGxlKSB8fCBvcHRpb25zICYmIG9wdGlvbnMuc2hhcmVUaXRsZTtcclxuICAgICAgICBjb25zdCBkZXNjID0gKHBhcmFtcyAmJiBwYXJhbXMuZGVzYykgfHwgb3B0aW9ucyAmJiBvcHRpb25zLnNoYXJlRGVzYztcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSAocGFyYW1zICYmIHBhcmFtcy5pbWdVcmwgJiYgdGhpcy5nZXRIdHRwVXJsKHBhcmFtcy5pbWdVcmwpKSB8fCAnaHR0cHM6Ly93YXAueXVlamlhMTAwLmNuL2Fzc2VydC9pbWcvbG9nby5qcGcnO1xyXG4gICAgICAgIC8vIGNvbnN0IHBhdGhuYW1lID0gZ2xvYmFsLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgbGluayA9IChwYXJhbXMgJiYgcGFyYW1zLmxpbmspIHx8IG9wdGlvbnMuc2hhcmVMaW5rKCk7XHJcbiAgICAgICAgY29uc3QgYXBpTGlzdCA9IFtcclxuICAgICAgICAgICdvbk1lbnVTaGFyZVRpbWVsaW5lJyxcclxuICAgICAgICAgICdvbk1lbnVTaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICAgICAgICAgLy8gJ29uTWVudVNoYXJlUVEnLFxyXG4gICAgICAgICAgLy8gJ29uTWVudVNoYXJlV2VpYm8nLFxyXG4gICAgICAgICAgLy8gJ29uTWVudVNoYXJlUVpvbmUnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlQ29udmVudGlvbk1lbnVJdGVtKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBpTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgYXBpID0gYXBpTGlzdFtpXTtcclxuICAgICAgICAgIHd4W2FwaV0oe1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZGVzYyxcclxuICAgICAgICAgICAgbGluayxcclxuICAgICAgICAgICAgaW1nVXJsLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBjYWxsYmFja1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign5b6u5L+h5YiG5Lqr5aSx6LSl77yM57y65aSxc2hhcmVMaW5r5oiWc2hhcmVUaXRsZeaIlnNoYXJlRGVzY+eahOmFjee9ricpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdlaXhpbiA9IG5ldyBXZWlYaW4oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlaXhpbjsiLCJ2YXIgaGV4Y2FzZSA9IDA7XHJcbnZhciBiNjRwYWQgPSBcIlwiO1xyXG52YXIgY2hyc3ogPSA4O1xyXG5mdW5jdGlvbiBoZXhfc2hhMShzKSB7IHJldHVybiBiaW5iMmhleChjb3JlX3NoYTEoc3RyMmJpbmIocyksIHMubGVuZ3RoICogY2hyc3opKTsgfVxyXG5mdW5jdGlvbiBiNjRfc2hhMShzKSB7IHJldHVybiBiaW5iMmI2NChjb3JlX3NoYTEoc3RyMmJpbmIocyksIHMubGVuZ3RoICogY2hyc3opKTsgfVxyXG5mdW5jdGlvbiBzdHJfc2hhMShzKSB7IHJldHVybiBiaW5iMnN0cihjb3JlX3NoYTEoc3RyMmJpbmIocyksIHMubGVuZ3RoICogY2hyc3opKTsgfVxyXG5mdW5jdGlvbiBoZXhfaG1hY19zaGExKGtleSwgZGF0YSkgeyByZXR1cm4gYmluYjJoZXgoY29yZV9obWFjX3NoYTEoa2V5LCBkYXRhKSk7IH1cclxuZnVuY3Rpb24gYjY0X2htYWNfc2hhMShrZXksIGRhdGEpIHsgcmV0dXJuIGJpbmIyYjY0KGNvcmVfaG1hY19zaGExKGtleSwgZGF0YSkpOyB9XHJcbmZ1bmN0aW9uIHN0cl9obWFjX3NoYTEoa2V5LCBkYXRhKSB7IHJldHVybiBiaW5iMnN0cihjb3JlX2htYWNfc2hhMShrZXksIGRhdGEpKTsgfVxyXG5mdW5jdGlvbiBzaGExX3ZtX3Rlc3QoKSB7XHJcbiAgICByZXR1cm4gaGV4X3NoYTEoXCJhYmNcIikgPT0gXCJhOTk5M2UzNjQ3MDY4MTZhYmEzZTI1NzE3ODUwYzI2YzljZDBkODlkXCI7XHJcbn1cclxuZnVuY3Rpb24gY29yZV9zaGExKHgsIGxlbikge1xyXG4gICAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XHJcbiAgICB4WygobGVuICsgNjQgPj4gOSkgPDwgNCkgKyAxNV0gPSBsZW47XHJcbiAgICB2YXIgdyA9IEFycmF5KDgwKTtcclxuICAgIHZhciBhID0gMTczMjU4NDE5MztcclxuICAgIHZhciBiID0gLTI3MTczMzg3OTtcclxuICAgIHZhciBjID0gLTE3MzI1ODQxOTQ7XHJcbiAgICB2YXIgZCA9IDI3MTczMzg3ODtcclxuICAgIHZhciBlID0gLTEwMDk1ODk3NzY7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XHJcbiAgICAgICAgdmFyIG9sZGEgPSBhO1xyXG4gICAgICAgIHZhciBvbGRiID0gYjtcclxuICAgICAgICB2YXIgb2xkYyA9IGM7XHJcbiAgICAgICAgdmFyIG9sZGQgPSBkO1xyXG4gICAgICAgIHZhciBvbGRlID0gZTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDgwOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGogPCAxNilcclxuICAgICAgICAgICAgICAgIHdbal0gPSB4W2kgKyBqXTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgd1tqXSA9IHJvbCh3W2ogLSAzXSBeIHdbaiAtIDhdIF4gd1tqIC0gMTRdIF4gd1tqIC0gMTZdLCAxKTtcclxuICAgICAgICAgICAgdmFyIHQgPSBzYWZlX2FkZChzYWZlX2FkZChyb2woYSwgNSksIHNoYTFfZnQoaiwgYiwgYywgZCkpLCBzYWZlX2FkZChzYWZlX2FkZChlLCB3W2pdKSwgc2hhMV9rdChqKSkpO1xyXG4gICAgICAgICAgICBlID0gZDtcclxuICAgICAgICAgICAgZCA9IGM7XHJcbiAgICAgICAgICAgIGMgPSByb2woYiwgMzApO1xyXG4gICAgICAgICAgICBiID0gYTtcclxuICAgICAgICAgICAgYSA9IHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEgPSBzYWZlX2FkZChhLCBvbGRhKTtcclxuICAgICAgICBiID0gc2FmZV9hZGQoYiwgb2xkYik7XHJcbiAgICAgICAgYyA9IHNhZmVfYWRkKGMsIG9sZGMpO1xyXG4gICAgICAgIGQgPSBzYWZlX2FkZChkLCBvbGRkKTtcclxuICAgICAgICBlID0gc2FmZV9hZGQoZSwgb2xkZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkoYSwgYiwgYywgZCwgZSk7XHJcbn1cclxuZnVuY3Rpb24gc2hhMV9mdCh0LCBiLCBjLCBkKSB7XHJcbiAgICBpZiAodCA8IDIwKVxyXG4gICAgICAgIHJldHVybiAoYiAmIGMpIHwgKCh+YikgJiBkKTtcclxuICAgIGlmICh0IDwgNDApXHJcbiAgICAgICAgcmV0dXJuIGIgXiBjIF4gZDtcclxuICAgIGlmICh0IDwgNjApXHJcbiAgICAgICAgcmV0dXJuIChiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKTtcclxuICAgIHJldHVybiBiIF4gYyBeIGQ7XHJcbn1cclxuZnVuY3Rpb24gc2hhMV9rdCh0KSB7XHJcbiAgICByZXR1cm4gKHQgPCAyMCkgPyAxNTE4NTAwMjQ5IDogKHQgPCA0MCkgPyAxODU5Nzc1MzkzIDpcclxuICAgICAgICAodCA8IDYwKSA/IC0xODk0MDA3NTg4IDogLTg5OTQ5NzUxNDtcclxufVxyXG5mdW5jdGlvbiBjb3JlX2htYWNfc2hhMShrZXksIGRhdGEpIHtcclxuICAgIHZhciBia2V5ID0gc3RyMmJpbmIoa2V5KTtcclxuICAgIGlmIChia2V5Lmxlbmd0aCA+IDE2KVxyXG4gICAgICAgIGJrZXkgPSBjb3JlX3NoYTEoYmtleSwga2V5Lmxlbmd0aCAqIGNocnN6KTtcclxuICAgIHZhciBpcGFkID0gQXJyYXkoMTYpLCBvcGFkID0gQXJyYXkoMTYpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgaXBhZFtpXSA9IGJrZXlbaV0gXiAweDM2MzYzNjM2O1xyXG4gICAgICAgIG9wYWRbaV0gPSBia2V5W2ldIF4gMHg1QzVDNUM1QztcclxuICAgIH1cclxuICAgIHZhciBoYXNoID0gY29yZV9zaGExKGlwYWQuY29uY2F0KHN0cjJiaW5iKGRhdGEpKSwgNTEyICsgZGF0YS5sZW5ndGggKiBjaHJzeik7XHJcbiAgICByZXR1cm4gY29yZV9zaGExKG9wYWQuY29uY2F0KGhhc2gpLCA1MTIgKyAxNjApO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVfYWRkKHgsIHkpIHtcclxuICAgIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XHJcbiAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XHJcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcclxufVxyXG5mdW5jdGlvbiByb2wobnVtLCBjbnQpIHtcclxuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcclxufVxyXG5mdW5jdGlvbiBzdHIyYmluYihzdHIpIHtcclxuICAgIHZhciBiaW4gPSBBcnJheSgpO1xyXG4gICAgdmFyIG1hc2sgPSAoMSA8PCBjaHJzeikgLSAxO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoICogY2hyc3o7IGkgKz0gY2hyc3opXHJcbiAgICAgICAgYmluW2kgPj4gNV0gfD0gKHN0ci5jaGFyQ29kZUF0KGkgLyBjaHJzeikgJiBtYXNrKSA8PCAoMzIgLSBjaHJzeiAtIGkgJSAzMik7XHJcbiAgICByZXR1cm4gYmluO1xyXG59XHJcbmZ1bmN0aW9uIGJpbmIyc3RyKGJpbikge1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICB2YXIgbWFzayA9ICgxIDw8IGNocnN6KSAtIDE7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbi5sZW5ndGggKiAzMjsgaSArPSBjaHJzeilcclxuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYmluW2kgPj4gNV0gPj4+ICgzMiAtIGNocnN6IC0gaSAlIDMyKSkgJiBtYXNrKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZnVuY3Rpb24gYmluYjJoZXgoYmluYXJyYXkpIHtcclxuICAgIHZhciBoZXhfdGFiID0gaGV4Y2FzZSA/IFwiMDEyMzQ1Njc4OUFCQ0RFRlwiIDogXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJyYXkubGVuZ3RoICogNDsgaSsrKSB7XHJcbiAgICAgICAgc3RyICs9IGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpID4+IDJdID4+ICgoMyAtIGkgJSA0KSAqIDggKyA0KSkgJiAweEYpICtcclxuICAgICAgICAgICAgaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2kgPj4gMl0gPj4gKCgzIC0gaSAlIDQpICogOCkpICYgMHhGKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuZnVuY3Rpb24gYmluYjJiNjQoYmluYXJyYXkpIHtcclxuICAgIHZhciB0YWIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpICs9IDMpIHtcclxuICAgICAgICB2YXIgdHJpcGxldCA9ICgoKGJpbmFycmF5W2kgPj4gMl0gPj4gOCAqICgzIC0gaSAlIDQpKSAmIDB4RkYpIDw8IDE2KVxyXG4gICAgICAgICAgICB8ICgoKGJpbmFycmF5W2kgKyAxID4+IDJdID4+IDggKiAoMyAtIChpICsgMSkgJSA0KSkgJiAweEZGKSA8PCA4KVxyXG4gICAgICAgICAgICB8ICgoYmluYXJyYXlbaSArIDIgPj4gMl0gPj4gOCAqICgzIC0gKGkgKyAyKSAlIDQpKSAmIDB4RkYpO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICogOCArIGogKiA2ID4gYmluYXJyYXkubGVuZ3RoICogMzIpXHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYjY0cGFkO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gdGFiLmNoYXJBdCgodHJpcGxldCA+PiA2ICogKDMgLSBqKSkgJiAweDNGKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmV4cG9ydCB7IGhleF9zaGExIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgaWQ6IFwiZmFpbC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNzIgNzJcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9zdmcvc3ByaXRlXzEuMC4wLnN2ZyNmYWlsLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgaWQ6IFwibG9hZGluZy11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIC0yIDU5Ljc1IDYwLjI1XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvc3ZnL3Nwcml0ZV8xLjAuMC5zdmcjbG9hZGluZy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIGlkOiBcInN1Y2Nlc3MtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDcyIDcyXCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvc3ZnL3Nwcml0ZV8xLjAuMC5zdmcjc3VjY2Vzcy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJpbXBvcnQgRmllbGRzIGZyb20gJy4uLy4uL19iYXNlL3NlcnZpY2UvZmllbGRzJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uL1RvYXN0JztcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vYXBwL3JlcXVlc3QnO1xyXG5pbXBvcnQgT2JBcnJheSBmcm9tICcuLi8uLi9hcHAvZGF0YXR5cGUvb2JBcnJheSc7XHJcbmltcG9ydCBPYk9iamVjdCBmcm9tICcuLi8uLi9hcHAvZGF0YXR5cGUvb2JPYmplY3QnO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gIHJlcXVlc3Q/OiBSZXF1ZXN0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jbGFzcyBGb3JtIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICB0aGlzLnJlcXVlc3QgPSBvcHRpb25zLnJlcXVlc3Q7XHJcblxyXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOaPkOS6pOeahOivt+axgiAqL1xyXG4gIHB1YmxpYyByZWFkb25seSByZXF1ZXN0OiBSZXF1ZXN0IHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDopoHmj5DkuqTnmoTlrZfmrrUgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZmllbGRzOiBPYkFycmF5PEZpZWxkczxhbnk+PiA9IG5ldyBPYkFycmF5KCk7XHJcbiAgLyoqIOihqOWNleaYr+WQpuW3suinpuWPkSAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB0cmlnZ2VyOiBPYk9iamVjdDxib29sZWFuPiA9IG5ldyBPYk9iamVjdCh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSk7XHJcbiAgLyoqIOihqOWNleaYr+WQpuWcqOWPr+aPkOS6pOeKtuaAgSAqL1xyXG4gIHB1YmxpYyBnZXQgY29tcGxldGUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBmaWxlZHMgPSB0aGlzLmZpZWxkcy5nZXQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVkID0gZmlsZWRzW2ldO1xyXG5cclxuICAgICAgaWYgKGZpbGVkLnN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBAYWN0aW9uIHB1YmxpYyB2YWxpZGF0ZShmaWVsZEtleTogc3RyaW5nIHwgdW5kZWZpbmVkLCBzdWJtaXQ6IGJvb2xlYW4sIGNhbGxiYWNrPzogKGZpZWxkOiBGaWVsZHM8YW55PikgPT4gdm9pZCk6IHZvaWQge1xyXG4gIC8vICAgbGV0IGlzQ29tcGxldGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vICAgLy8g5piv5ZCm6Kem5Y+R5LqGY2FsbGJhY2tcclxuICAvLyAgIGxldCBpc1RyaWdnZXJDYWxsYmNhayA9IGZhbHNlO1xyXG5cclxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgY29uc3QgZmlsZWQgPSB0aGlzLmZpZWxkc1tpXTtcclxuXHJcbiAgLy8gICAgIC8vIOaOkumZpGZpbGVkc+iwg+eUqGdldEZvcm0oKS52YWxpZGF0ZeaXtu+8jOWvueiHqui6q+eahOmqjOivgVxyXG4gIC8vICAgICAvLyDlubbkuJTlj6rpqozor4HpnZ7mraPnoa7nmoTvvIxnZXRFcnJvciAhPT0gZmFsc2XooajnpLrpnZ7mraPnoa5cclxuICAvLyAgICAgaWYgKGZpZWxkS2V5ICE9PSBmaWxlZC5maWVsZEtleSAmJiBmaWxlZC5nZXRFcnJvcigpICE9PSBmYWxzZSkge1xyXG4gIC8vICAgICAgIC8vIGZpbGVkLmdldEVycm9yKCkgPT09IHVuZGVmaW5lZOWSjGZpbGVkLmdldFZhbHVlKCkgPT09IHVuZGVmaW5lZOihqOekuuS4uuWIneWni+WAvO+8jFxyXG4gIC8vICAgICAgIC8vIOW9k2Vycm9y5ZKMdmFsdWXpg73mmK/liJ3lp4vlgLzkuJTlv4XpgInkuLp0cnVl5pe277yM5bCx5b+955Wl6L+Z5Liq6aqM6K+B77yM5Li655qE5piv6Ziy5q2i5LiA5LiqZmlsZWTml7bovpPlhaXlrozmiJDml7bkvJrlvJXlj5Hlhbbku5bov5jmsqHovpPlhaXnmoRcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgLy8gICAgICAgY29uc3QgaWdub3JlID0gZmlsZWQuZ2V0RXJyb3IoKSA9PT0gdW5kZWZpbmVkICYmIGZpbGVkLmdldFZhbHVlKCkgPT09IHVuZGVmaW5lZCAmJiBmaWxlZC5nZXRSZXF1aXJlZCgpID09PSB0cnVlICYmIHN1Ym1pdCA9PT0gZmFsc2U7XHJcbiAgLy8gICAgICAgaWYgKGlnbm9yZSA9PT0gZmFsc2UpIHtcclxuICAvLyAgICAgICAgIHRoaXMuZmllbGRzW2ldLnZhbGlkYXRlKCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICAvLyDmnInkuIDmrKHpqozor4HmsqHpgJrov4fvvIzmlbTkuKrooajljZXlsLHlsZ7kuo7mnKrlrozmiJDnirbmgIFcclxuICAvLyAgICAgLy8g5Li65LqG6Ziy5q2iaXNDb21wbGV0Zeiiq+WQjumdoumqjOivgemAmui/h+eahOWAvOimhuebluaOie+8jOaJgOS7peS7heWcqOS4unRydWXvvIjliJ3lp4vlgLzvvInml7bmiY3ljrvpqozor4FcclxuICAvLyAgICAgaWYgKGlzQ29tcGxldGUpIHtcclxuICAvLyAgICAgICAvLyDlm6DkuLrliY3pnaLlr7lmaWxlZC5nZXRFcnJvcigp5Li6dW5kZWZpbmVk6L+b6KGM6L+H5Yik5pat77yM5omA5Lul6L+Z6YeM5LiN5Lya5Li6dW5kZWZpbmVkXHJcbiAgLy8gICAgICAgLy8g5Zug5Li6dGhpcy5maWVsZHNbaV0udmFsaWRhdGUoKeiwg+eUqOWQjuWPr+iDveS8muaUueWPmGZpbGVkLmdldEVycm9yKCnnmoTlgLzvvIzmiYDku6XopoHph43mlrDosIPnlKjkuIDmrKHvvIzkuI3og73ljrvlgZrnvJPlrZhcclxuICAvLyAgICAgICBpc0NvbXBsZXRlID0gZmlsZWQuZ2V0RXJyb3IoKSA9PT0gZmFsc2U7XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIC8vIGlzVHJpZ2dlckNhbGxiY2Fr5Y+q6LCD55So5LiA5qyhXHJcbiAgLy8gICAgIGlmIChpc1RyaWdnZXJDYWxsYmNhayA9PT0gZmFsc2UgJiYgY2FsbGJhY2sgJiYgaXNDb21wbGV0ZSA9PT0gZmFsc2UpIHtcclxuICAvLyAgICAgICBjYWxsYmFjayh0aGlzLmZpZWxkc1tpXSk7XHJcbiAgLy8gICAgICAgaXNUcmlnZ2VyQ2FsbGJjYWsgPSB0cnVlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgdGhpcy5jb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgLy8gfVxyXG4gIC8qKlxyXG4gICAqIOaYvuekuuWtl+auteeahOmUmeivr+aPkOekulxyXG4gICAqIOWQjOaXtuWPquinpuWPkeS4gOS4qlRvYXN0XHJcbiAgICovXHJcbiAgcHVibGljIHNob3dQcm9tcHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWxlZHMgPSB0aGlzLmZpZWxkcy5nZXQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVkID0gZmlsZWRzW2ldO1xyXG5cclxuICAgICAgaWYgKGZpbGVkLnN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgVG9hc3Quc2hvdyhmaWxlZC5nZXRQcm9tcHQoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0KHBhcmFtcz86IFBhcmFtcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcGxldGUpIHtcclxuICAgICAgaWYgKHRoaXMucmVxdWVzdCAmJiB0aGlzLnJlcXVlc3Quc3RhdGUuZ2V0KCkgIT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5zZXQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdC5zdGF0ZS5zZXQoJ2xvYWRpbmcnKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3Quc2VuZChwYXJhbXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybignc3VibWl057y65bCRcmVxdWVzdOWxnuaAp++8jOS4jeiDveWPkemAgeivt+axgicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyaWdnZXIuc2V0KHRydWUpO1xyXG4gICAgICB0aGlzLnNob3dQcm9tcHQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY2lybGUtYW5pbVwiOlwiY2lybGUtYW5pbV9laU8ySFwiLFwiY2lybGVBbmltXCI6XCJjaXJsZS1hbmltX2VpTzJIXCJ9OyIsImltcG9ydCB5aiBmcm9tICcuLi8uLi90eXBpbmdzL2luZGV4JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBpbXBvcnQgc3ZnUm9vdFBhdGggZnJvbSAnLi4vLi4vdXRpbHMvc3ZnUm9vdFBhdGgnO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbi8vIGNvbnN0IGxvYWRpbmdTdmcgPSBzdmdSb290UGF0aCArIHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2FkaW5nLnN2ZycpLmlkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIHlqLkNvbXBvbmVudFByb3BzICB7XHJcbiAgb25DbGljaz86IHlqLk9uQ2xpY2s8U1ZHRWxlbWVudD47XHJcbiAgLyoqIOWbvuagh+mTvuaOpeWcsOWdgCAqL1xyXG4gIHNyYzogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBjb25zdCBwcmVmaXhDbHMgPSAneWotY29tcG9uZW50LWljb24nO1xyXG5jb25zdCBJY29uID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDx1c2UgeGxpbmtIcmVmPXtwcm9wcy5zcmN9IC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB5aiBmcm9tICcuLi8uLi90eXBpbmdzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgU3RhdGVNYWNoaW5lLCB7IEJhc2VQcm9wcyBhcyBTdGF0ZUJhc2VQcm9wcywgVHlwZSBhcyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUnO1xyXG5pbXBvcnQgaXNIdHRwIGZyb20gJy4uLy4uL3V0aWxzL2lzSHR0cCc7XHJcbmltcG9ydCB3eCBmcm9tICcuLi8uLi9hcHAvd2VpeGluJztcclxuaW1wb3J0IHNoZWV0LCB7IGdldEFjdGlvbk5hbWUsIERldGFpbFBhcmFtcyB9IGZyb20gJy4uLy4uL21vZGVsL2JlaGF2aW9yL3NoZWV0JztcclxuaW1wb3J0IFBhZ2VTdGFjayBmcm9tICcuLi9QYWdlU3RhY2snO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wcyB7XHJcbiAgLyoqIGRpduaooeW8j+S4jeS8muiHquWKqOiuvue9rumrmOW6pu+8jGltZ+aooeW8j+S8muagueaNruWuveW6puiuvue9rumrmOW6piAqL1xyXG4gIG1vZGU/OiAnZGl2JyB8ICdpbWcnO1xyXG4gIC8qKiDmmK/lkKbopoHmt7vliqDlhoXpmLTlvbEgKi9cclxuICBzaGFkb3c/OiBib29sZWFuO1xyXG4gIC8qKiDkuLvmnLrlnLDlnYAgKi9cclxuICBob3N0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTdGF0ZUJhc2VQcm9wcywgeWouQ29tcG9uZW50UHJvcHMsIEJhc2VQcm9wcywgeWouQ29tcG9uZW50QmVoYXZpb3Ige1xyXG4gIC8qKiDmraPluLjnirbmgIHmg7PlsZXnpLrnmoTlm77niYfvvIzljbNpbWfmoIfnrb7nmoRzcmPlsZ7mgKcgKi9cclxuICBjb21wbGV0ZVZpZXc6IHN0cmluZztcclxuICAvKiog5Yqg6L295aSx6LSl55qE6KeG5Zu+ICovXHJcbiAgZmFpbFZpZXc/OiBzdHJpbmc7XHJcbiAgLyoqIOWKoOi9veS4reeahOinhuWbviAqL1xyXG4gIGxvYWRpbmdWaWV3Pzogc3RyaW5nO1xyXG4gIC8qKiDmmK/lkKblkK/nlKjnirbmgIHmnLogKi9cclxuICBzdGF0ZU1hY2hpbmU/OiBib29sZWFuO1xyXG4gIC8qKiDngrnlh7vkuovku7YgKi9cclxuICBvbkNsaWNrPzogeWouT25DbGljazxIVE1MRGl2RWxlbWVudD47XHJcbiAgLyoqIOWbvueJh+WKoOi9veWksei0peaXtuWAmeeahOeCueWHu+S6i+S7tiAqL1xyXG4gIG9uRmFpbENsaWNrPzogeWouT25DbGljazxIVE1MRGl2RWxlbWVudD47XHJcbiAgLyoqIOWbvueJh+WKoOi9veWujOaIkOaIluWksei0pSAqL1xyXG4gIG9uTG9hZD86IChlbGVtUmVmOiBIVE1MRGl2RWxlbWVudCwgc3RhdGU6ICdjb21wbGV0ZScgfCAnZmFpbCcpID0+IHZvaWQ7XHJcbiAgLyoqIOWuueWZqOeahOWuveW6piAqL1xyXG4gIGNvbnRhaW5lcldpZHRoPzogbnVtYmVyIHwgJ3Z3JztcclxuICAvKiog5piv5ZCm5Y+v5Lul54K55Ye76aKE6KeI5aSn5Zu+77yM5pyJb25DbGlja+aXtuS4jeS8muinpuWPkSAqL1xyXG4gIHByZXZpZXdJbWFnZT86IGJvb2xlYW47XHJcbiAgaW1nSWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3RhdGU6IFN0YXRlVHlwZTtcclxufVxyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gJ3lqLWNvbXBvbmVudC1pbWd2aWV3JztcclxuLy8gY29uc3QgdGhyb3R0bGU6IF8uTG9EYXNoU3RhdGljWyd0aHJvdHRsZSddID0gcmVxdWlyZSgnbG9kYXNoL3Rocm90dGxlJyk7XHJcblxyXG5jbGFzcyBJbWdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XHJcbiAgICBzdXBlcihwcm9wcywgc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuZWxlbVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5vbkltZ0xvYWQgPSB0aGlzLm9uSW1nTG9hZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkltZ0Vycm9yID0gdGhpcy5vbkltZ0Vycm9yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBQcm9wcyA9IHtcclxuICAgIG1vZGU6ICdkaXYnLFxyXG4gICAgY29tcGxldGVWaWV3OiAnJyxcclxuICAgIGZhaWxWaWV3OiB1bmRlZmluZWQsXHJcbiAgICBsb2FkaW5nVmlldzogdW5kZWZpbmVkLFxyXG4gICAgc3RhdGVNYWNoaW5lOiB0cnVlLFxyXG4gICAgY29udGFpbmVyV2lkdGg6ICd2dydcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRIb3N0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHN0YXRlOiAnbG9hZGluZydcclxuICB9O1xyXG5cclxuICAvKiog57uE5Lu25piv5ZCm5bey57uP6KKr5Y246L29ICovXHJcbiAgcHJpdmF0ZSBpc1VubW91bnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBlbGVtUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIC8qKiDnlKjkuo7liqDovb3lm77niYfvvIzmlLnlj5hJbWdWaWV355qE54q25oCBICovXHJcbiAgcHJpdmF0ZSBpbWdFbGVtOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgLyoqIOmZkOWItnNldEltZ1NyY+eahOmikeeOhyAqL1xyXG4gIC8vIHByaXZhdGUgdGhyb3R0bGVkOiAoKHByb3BzOiBQcm9wcykgPT4gdm9pZCkgJiBfLkNhbmNlbGFibGUgPSB0aHJvdHRsZSgocHJvcHMpID0+IHRoaXMuc2V0SW1nU3JjKHByb3BzKSwgMzAwLCB7IGxlYWRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogUHJvcHMsIG5leHRTdGF0ZTogU3RhdGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHN0YXRlQ2hhbmdlID0gdGhpcy5zdGF0ZS5zdGF0ZSAhPT0gbmV4dFN0YXRlLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiBzdGF0ZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW1nRWxlbS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5vbkltZ0xvYWQpO1xyXG4gICAgdGhpcy5pbWdFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkltZ0Vycm9yKTtcclxuICAgIHRoaXMuc2V0SW1nU3JjKHRoaXMucHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1VubW91bnQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmltZ0VsZW0pIHtcclxuICAgICAgdGhpcy5pbWdFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLm9uSW1nTG9hZCk7XHJcbiAgICAgIHRoaXMuaW1nRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25JbWdFcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmNvbXBsZXRlVmlldyAhPT0gcHJldlByb3BzLmNvbXBsZXRlVmlldykge1xyXG4gICAgICB0aGlzLnNldEltZ1NyYyh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3JjKHByb3BzOiBQcm9wcywgc3JjOiBzdHJpbmcgfCB1bmRlZmluZWQsIHR5cGU6IFN0YXRlVHlwZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBob3N0ID0gdHlwZSA9PT0gJ2NvbXBsZXRlJyA/IChwcm9wcy5ob3N0IHx8IEltZ1ZpZXcuZGVmYXVsdEhvc3QpIDogJyc7XHJcbiAgICBjb25zdCB1cmwgPSBzcmMgJiYgaXNIdHRwKHNyYykgPyBzcmMgOiBob3N0ICsgc3JjO1xyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICAvKiog5Zu+54mH55qEb25sb2Fk5LqL5Lu2ICovXHJcbiAgcHJpdmF0ZSBvbkltZ0xvYWQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNVbm1vdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0ZTogJ2NvbXBsZXRlJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Mb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uTG9hZCh0aGlzLmVsZW1SZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCwgJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDlm77niYfnmoRvbmVycm9y5LqL5Lu2ICovXHJcbiAgcHJpdmF0ZSBvbkltZ0Vycm9yKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzVW5tb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdGU6ICdmYWlsJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Mb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uTG9hZCh0aGlzLmVsZW1SZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCwgJ2ZhaWwnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9rnRoaXMuaW1n55qEc3Jj5bGe5oCnICovXHJcbiAgcHJpdmF0ZSBzZXRJbWdTcmMocHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgICBjb25zdCBzcmMgPSB0aGlzLmdldFNyYyhwcm9wcywgcHJvcHMuY29tcGxldGVWaWV3LCAnY29tcGxldGUnKTtcclxuXHJcbiAgICBpZiAoc3JjICYmIHRoaXMuaW1nRWxlbSkge1xyXG4gICAgICB0aGlzLmltZ0VsZW0uc3JjID0gc3JjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3RhdGU6ICdmYWlsJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDorqHnrpflm77niYfpq5jluqbvvIzlnKhtb2RlPSdpbWcn55qE5oOF5Ya15LiL5L2/55SoICovXHJcbiAgcHJpdmF0ZSBjYWxjSGVpZ2h0KCk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pbWdFbGVtICYmIHRoaXMuaW1nRWxlbS53aWR0aCkge1xyXG4gICAgICBjb25zdCBwcm9wb3J0aW9uID0gdGhpcy5pbWdFbGVtLmhlaWdodCAvIHRoaXMuaW1nRWxlbS53aWR0aCA7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5wcm9wcy5jb250YWluZXJXaWR0aDtcclxuICAgICAgcmV0dXJuIGNvbnRhaW5lcldpZHRoID09PSAndncnID8gcHJvcG9ydGlvbiAqIDEwMCArICd2dycgOiAgcHJvcG9ydGlvbiAqIChjb250YWluZXJXaWR0aCBhcyBudW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5wcmV2aWV3SW1hZ2UpIHtcclxuICAgICAgY29uc3Qgc3RhY2tDb21wb25lbnQgPSBQYWdlU3RhY2suZ2V0U3RhY2tDb21wb25lbnQoKTtcclxuXHJcbiAgICAgIGlmIChzdGFja0NvbXBvbmVudCAmJiB0aGlzLnByb3BzLmNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgICBzdGFja0NvbXBvbmVudC5iZWhhdmlvci50cmlnZ2VyPERldGFpbFBhcmFtc1snSW1nVmlldyddPih7XHJcbiAgICAgICAgICBhY3Rpb25OYW1lOiBnZXRBY3Rpb25OYW1lKHNoZWV0LkltZ1ZpZXcsIDAsIHRoaXMucHJvcHMpLFxyXG4gICAgICAgICAgZGV0YWlsZWREYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmltZ0lkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh0aGlzLnByb3BzLmNvbXBsZXRlVmlldywgSW1nVmlldy5kZWZhdWx0SG9zdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIGNvbnN0IHsgaWQsIGxvYWRpbmdTdHlsZSwgbW9kZSwgc2hhZG93LCBsb2FkaW5nVmlldywgY29tcGxldGVWaWV3LCBmYWlsVmlldywgc3RhdGVNYWNoaW5lLCBjbGFzc05hbWUsIHN0eWxlLCBvbkZhaWxDbGljayB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZS5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZSA9IChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWl0ZW1gLCBgJHtwcmVmaXhDbHN9LSR7bW9kZX0tbW9kZWAsIGAke3ByZWZpeENsc30tY29tcGxldGVgLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93ID8gJzAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC45KSBpbnNldCcgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbXBsZXRlVmlldyA/IGB1cmwoJHt0aGlzLmdldFNyYyh0aGlzLnByb3BzLCBjb21wbGV0ZVZpZXcsICdjb21wbGV0ZScpfSlgIDogJ25vbmUnLFxyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogbW9kZSA9PT0gJ2ltZycgPyB0aGlzLmNhbGNIZWlnaHQoKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBvbkNsaWNrPXtzdGF0ZSA9PT0gJ2NvbXBsZXRlJyA/IHRoaXMub25DbGljayA6IG9uRmFpbENsaWNrfVxyXG4gICAgICAgIHJlZj17dGhpcy5lbGVtUmVmfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gc3RhdGVNYWNoaW5lID8gKFxyXG4gICAgICA8U3RhdGVNYWNoaW5lXHJcbiAgICAgICAgc3RhdGU9e3RoaXMuc3RhdGUuc3RhdGV9XHJcbiAgICAgICAgbG9hZGluZ1N0eWxlPXtsb2FkaW5nU3R5bGV9XHJcbiAgICAgID5cclxuICAgICAgICA8U3RhdGVNYWNoaW5lLkNvbXBsZXRlPntjb21wbGV0ZX08L1N0YXRlTWFjaGluZS5Db21wbGV0ZT5cclxuICAgICAgICA8U3RhdGVNYWNoaW5lLkZhaWw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWl0ZW1gLCBgJHtwcmVmaXhDbHN9LSR7bW9kZX0tbW9kZWAsIGAke3ByZWZpeENsc30tZmFpbGAsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBmYWlsVmlldyA/IGB1cmwoJHt0aGlzLmdldFNyYyh0aGlzLnByb3BzLCBmYWlsVmlldywgJ2ZhaWwnKX0pYCA6ICdub25lJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkZhaWxDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TdGF0ZU1hY2hpbmUuRmFpbD5cclxuICAgICAgICA8U3RhdGVNYWNoaW5lLkxvYWRpbmc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWl0ZW1gLCBgJHtwcmVmaXhDbHN9LSR7bW9kZX0tbW9kZWAsIGAke3ByZWZpeENsc30tbG9hZGluZ2AsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsb2FkaW5nVmlldyA/IGB1cmwoJHt0aGlzLmdldFNyYyh0aGlzLnByb3BzLCBsb2FkaW5nVmlldywgJ2xvYWRpbmcnKX0pYCA6ICdub25lJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TdGF0ZU1hY2hpbmUuTG9hZGluZz5cclxuICAgICAgPC9TdGF0ZU1hY2hpbmU+XHJcbiAgICApIDogY29tcGxldGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWdWaWV3OyIsImltcG9ydCBGaWVsZHMsIHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vX2Jhc2Uvc2VydmljZS9maWVsZHMnO1xyXG5pbXBvcnQgT2JPYmplY3QgZnJvbSAnLi4vLi4vYXBwL2RhdGF0eXBlL29iT2JqZWN0JztcclxuXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgRmllbGRzPHN0cmluZz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcHM8c3RyaW5nPikge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSBuZXcgT2JPYmplY3QoeyBkZWZhdWx0VmFsdWU6IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCAnJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWx1ZTogT2JPYmplY3Q8c3RyaW5nPjtcclxuXHJcbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZS5zZXQoJycpO1xyXG4gICAgdGhpcy5zZXRQcm9tcHQoJycpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwiaW1wb3J0IHlqIGZyb20gJy4uLy4uL3R5cGluZ3MnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIGltcG9ydCBzdHJpbmdUb0hleCBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdUb0hleCc7XHJcbmltcG9ydCBnbG9iYWwgZnJvbSAnLi4vLi4vYXBwL2dsb2JhbCc7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uLy4uL21vZGVsL2FjY291bnQnO1xyXG5pbXBvcnQgaXNIdHRwIGZyb20gJy4uLy4uL3V0aWxzL2lzSHR0cCc7XHJcbi8vIGltcG9ydCBpc1Bhc3NpdmVTdXBwb3J0ZWQgZnJvbSAnLi4vLi4vdXRpbHMvaXNQYXNzaXZlU3VwcG9ydGVkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyB5ai5Db21wb25lbnRQcm9wcyB7XHJcbiAgLyoqIOWJjeW+gOeahOmhtemdoiAqL1xyXG4gIHRvOiBzdHJpbmc7XHJcbiAgLyoqIOaYr+WQpuimgeadg+mZkOiupOivgSAqL1xyXG4gIGxvZ2luQXV0aD86IGJvb2xlYW47XHJcbiAgLyoqIOiiq+eCueWHu+eahOaMiemSruWQjeensCAqL1xyXG4gIGJ1dHRvbj86IHN0cmluZztcclxuICAvKiog5piv5ZCm5pu/5o2i5b2T5YmN6Lev55SxICovXHJcbiAgcmVwbGFjZT86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAvKiog5piv5ZCm6KaB5p2D6ZmQ6K6k6K+BICovXHJcbiAgbG9naW5BdXRoPzogYm9vbGVhbjtcclxuICAvKiog6KKr54K55Ye755qE5oyJ6ZKu5ZCN56ewICovXHJcbiAgYnV0dG9uPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiog54K55Ye76ZSB77yM6Ziy5q2i5aSa5qyh54K55Ye7ICovXHJcbi8vIGxldCBsb2NrID0gZmFsc2U7XHJcblxyXG4vKiog6Lez6L2s5Yiw56ys5LiJ5pa56ZO+5o6lICovXHJcbmZ1bmN0aW9uIHRvVGhpcmRMaW5rKGhyZWY6IHN0cmluZyk6IHZvaWQge1xyXG4gIC8vIGNvbnN0IHVybHNlYXJjaHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgLy8gY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gIC8vIGNvbnN0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgLy8gY29uc3QgbG9jYXRpb25wYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAvLyAvLyBjb25zdCBlbmNvZGVQYXRobmFtZSA9IHBhdGhuYW1lLmluZGV4T2YoJyUyJykgPj0gMCA/IHBhdGhuYW1lIDogZW5jb2RlVVJJQ29tcG9uZW50KHBhdGhuYW1lKTtcclxuICAvLyBjb25zdCByb3V0ZSA9IHBhdGhuYW1lLnN1YnN0cigwLCAyKSA9PT0gKCcyZicgfHwgJzJGJykgPyBwYXRobmFtZSA6IHN0cmluZ1RvSGV4KHBhdGhuYW1lKTtcclxuXHJcbiAgLy8gLy8g6K6+572u5b2T5YmN55qE57yW56CB5ZCO55qE6Lev55Sxc2VhcmNoXHJcbiAgLy8gdXJsc2VhcmNocGFyYW1zLnNldCgncm91dGUnLCByb3V0ZSk7XHJcblxyXG4gIC8vIGNvbnN0IG5ld1VybCA9IG9yaWdpbiArIGxvY2F0aW9ucGF0aG5hbWUgKyAnPycgKyB1cmxzZWFyY2hwYXJhbXMudG9TdHJpbmcoKS5yZXBsYWNlKC8lM0YvZywgJycpLnJlcGxhY2UoLyUzZi9nLCAnJykgKyAnIycgKyBwYXRobmFtZTtcclxuICAvLyAvLyDmm7/mjaLlvZPliY3nmoTot6/nlLFcclxuICAvLyB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBuZXdVcmwpO1xyXG4gIC8vIOi3s+i9rOWIsOebruagh+WcsOWdgFxyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ28odXJsOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICBpZiAoaXNIdHRwKHVybCkpIHtcclxuICAgIHRvVGhpcmRMaW5rKHVybCk7XHJcbiAgfSBlbHNlIGlmIChnbG9iYWwuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSAhPT0gdXJsKSB7XHJcbiAgICBpZiAocmVwbGFjZSkge1xyXG4gICAgICBnbG9iYWwuaGlzdG9yeS5yZXBsYWNlKHVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnbG9iYWwuaGlzdG9yeS5wdXNoKHVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaW5rKHVybDogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuLCBsb2dpbkF1dGg/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgLy8gaWYgKGxvY2sgPT09IGZhbHNlKSB7XHJcbiAgICBpZiAobG9naW5BdXRoKSB7XHJcbiAgICAgIEFjY291bnQubG9naW5BdXRoKCgpID0+IHtcclxuICAgICAgICBnbyh1cmwsIHJlcGxhY2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdvKHVybCwgcmVwbGFjZSk7XHJcbiAgICB9XHJcbiAgICAvLyBsb2NrID0gdHJ1ZTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICBsb2NrID0gZmFsc2U7XHJcbiAgICAvLyB9LCAzMjApO1xyXG4gIC8vIH1cclxufVxyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gJ3lqLWNvbXBvbmVudC1saW5rJztcclxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIC8vIHRoaXMuZWxlbVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGVsZW1SZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAvLyAgIGlmICh0aGlzLmVsZW1SZWYuY3VycmVudCkge1xyXG4gIC8vICAgICB0aGlzLmVsZW1SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrLCBpc1Bhc3NpdmVTdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcclxuICAvLyAgIGlmICh0aGlzLmVsZW1SZWYuY3VycmVudCkge1xyXG4gIC8vICAgICB0aGlzLmVsZW1SZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8qKiDooqvngrnlh7vnmoTmjInpkq7lkI3np7DvvIznlKjkuo7ljLrliIbooYzkuLogKi9cclxuICBwdWJsaWMgc3RhdGljIGJ1dHRvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiogcHVzaOS4gOS4qui3r+eUsSAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ28odXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBPcHRpb25zKTogdm9pZCB7XHJcbiAgICBsaW5rKHVybCwgZmFsc2UsIG9wdGlvbnMgJiYgb3B0aW9ucy5sb2dpbkF1dGgpO1xyXG4gICAgTGluay5idXR0b24gPSBvcHRpb25zICYmIG9wdGlvbnMuYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqIHJlcGxhY2XkuIDkuKrot6/nlLEgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlcGxhY2UodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBPcHRpb25zKTogdm9pZCB7XHJcbiAgICAvLyBjb25zdCByb3V0ZSA9IHN3aXRjaFJvdXRlcihnbG9iYWwuX3JvdXRlcywgdXJsKTtcclxuICAgIC8vIGlmICghcm91dGUpIHtcclxuICAgIC8vICAgY29uc29sZS5lcnJvcign6Lev55Sx6ZSZ6K+vJyk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKCFyb3V0ZS5wcm9wcy5jb21wb25lbnQucGFnZU5hbWUpIHtcclxuICAgIC8vICAgY29uc29sZS53YXJuKHJvdXRlLnByb3BzLmNvbXBvbmVudC5kaXNwbGF5TmFtZSwgJ3BhZ2VOYW1lc+WxnuaAp+S4uuepuicpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGxpbmsodXJsLCB0cnVlLCBvcHRpb25zICYmIG9wdGlvbnMubG9naW5BdXRoKTtcclxuICAgIExpbmsuYnV0dG9uID0gb3B0aW9ucyAmJiBvcHRpb25zLmJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKiBwb3DkuIDkuKrot6/nlLEgKi9cclxuICBwdWJsaWMgc3RhdGljIGdvQmFjayhidXR0b24/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIExpbmsuYnV0dG9uID0gYnV0dG9uO1xyXG4gICAgZ2xvYmFsLmhpc3RvcnkuZ29CYWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCB7IHRvLCBsb2dpbkF1dGgsIHJlcGxhY2UsIGJ1dHRvbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAocmVwbGFjZSkge1xyXG4gICAgICBMaW5rLnJlcGxhY2UodG8sIHsgbG9naW5BdXRoLCBidXR0b24gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBMaW5rLmdvKHRvLCB7IGxvZ2luQXV0aCwgYnV0dG9uIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGRhdGF0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgIGRhdGEtdHlwZT17ZGF0YXR5cGV9XHJcbiAgICAgID57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluazsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN1YnNjcmlwdGlvbiB9IGZyb20gJ2NyZWF0ZS1zdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4uLy4uL2FwcC9nbG9iYWwnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogKG1vZGVsOiBhbnkpID0+IGFueTtcclxufVxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGxvYWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmxldCBzdWJzY3JpYmVDYWxsYmFjazogKG1vZGVsOiBvYmplY3QpID0+IHZvaWQ7XHJcbmxldCBkaXNwYXRjaExvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxubGV0IHJhZklkOiBudW1iZXIgfCB1bmRlZmluZWQgPSAxO1xyXG5jb25zdCBTdWJzY3JpcHRpb246IFJlYWN0LkNvbXBvbmVudEZhY3Rvcnk8YW55LCBhbnk+ID0gY3JlYXRlU3Vic2NyaXB0aW9uKHtcclxuICBnZXRDdXJyZW50VmFsdWU6IChtb2RlbDogb2JqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfSxcclxuICBzdWJzY3JpYmU6IChtb2RlbDogb2JqZWN0LCBjYWxsYmFjazogKG1vZGVsOiBvYmplY3QpID0+IHZvaWQpID0+IHtcclxuICAgIHN1YnNjcmliZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gZnVuY3Rpb24gZGlzcGF0Y2goKTogdm9pZCB7XHJcblxyXG4vLyB9XHJcbmZ1bmN0aW9uIHJhZkRpc3BhdGNoKCk6IHZvaWQge1xyXG4gIGlmIChkaXNwYXRjaExvY2sgPT09IGZhbHNlICYmIHN1YnNjcmliZUNhbGxiYWNrKSB7XHJcbiAgICBzdWJzY3JpYmVDYWxsYmFjayh7fSk7XHJcbiAgICBkaXNwYXRjaExvY2sgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdsb2JhbC5pbnB1dEZvdWNzICYmIHJhZklkKSB7XHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XHJcbiAgICByYWZJZCA9IHVuZGVmaW5lZDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmRGlzcGF0Y2gpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8qKiDlub/mkq3vvIzlsIbmlbDmja7nmoTmm7TmlrDku47kuIroh7PkuIvkvKDmkq3lh7rljrsgKi9cclxuICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoKCk6IHZvaWQge1xyXG4gICAgLy8g5Yik5pat5piv5ZCm5piv5LuO6L6T5YWl5qGG6Kem5Y+R55qE77yM5aaC5p6c5piv5bCx5LiN5Yqgc2V0VGltZW91dO+8jOWboOS4uui+k+WFpeahhuWKoHNldFRpbWVvdXTlnKjovpPlhaXkuK3mlofml7bkvJrmnIlCVUdcclxuICAgIGlmIChnbG9iYWwuaW5wdXRGb3Vjcykge1xyXG4gICAgICBzdWJzY3JpYmVDYWxsYmFjayh7fSk7XHJcbiAgICAgIGdsb2JhbC5pbnB1dEZvdWNzID0gZmFsc2U7XHJcbiAgICAgIGRpc3BhdGNoTG9jayA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaExvY2sgPSBmYWxzZTtcclxuICAgICAgaWYgKHJhZklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByYWZEaXNwYXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xyXG4gICAgbG9hZDogZmFsc2VcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZDogdHJ1ZVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICByYWZEaXNwYXRjaCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdWJzY3JpcHRpb24gc291cmNlPXt7fX0+XHJcbiAgICAgICAge3RoaXMuc3RhdGUubG9hZCA/ICh2YWx1ZTogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih2YWx1ZSk7XHJcbiAgICAgICAgfSA6ICgpID0+IG51bGx9XHJcbiAgICAgIDwvU3Vic2NyaXB0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsOyIsImltcG9ydCB5aiBmcm9tICcuLi8uLi90eXBpbmdzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vYXBwL3BhZ2UnO1xyXG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4uLy4uL2FwcC9nbG9iYWwnO1xyXG4vLyBpbXBvcnQgc3dpdGNoUm91dGVyLCB7IFByb3BzIGFzIFN3aXRjaFJvdXRlclByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3dpdGNoUm91dGVyJztcclxuaW1wb3J0IGhpc3RvcnlSZXBsYWNlIGZyb20gJy4uLy4uL3V0aWxzL2hpc3RvcnlSZXBsYWNlJztcclxuaW1wb3J0IHBhZ2VMZWF2ZSBmcm9tICcuLi8uLi9tb2RlbC9iZWhhdmlvci9wYWdlTGVhdmUnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vVG9hc3QnO1xyXG5pbXBvcnQgc2V0RG9jdW1ldFRpdGxlIGZyb20gJy4uLy4uL3V0aWxzL3NldERvY3VtZXRUaXRsZSc7XHJcbmltcG9ydCB7IG90aGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52JztcclxuLy8gaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxudHlwZSBQYWdlVHlwZSA9IFBhZ2U8eWouUGFnZVByb3BzPGFueT4sIGFueSwgYW55PjtcclxuXHJcbmludGVyZmFjZSBCYXNlUHJvcHMge1xyXG4gIC8qKiDot6/nlLHmlLnlj5jml7bop6blj5EgKi9cclxuICBvblJvdXRlQ2hhbmdlPzogKHBhdGhuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8vIHdpdGhSb3V0ZXLmj5DkvpvkuoZyZWFjdC1yb3V0ZXLnmoRwb3Jwc1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQmFzZVByb3BzLCB5ai5QYWdlUHJvcHM8YW55PiB7XHJcbiAgaGlzdG9yeTogSGlzdG9yeTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAvKiog5b2T5YmN5Yy56YWN55qE6Lev55SxICovXHJcbiAgcm91dGU6IEpTWC5FbGVtZW50W107XHJcbiAgbGFzdFBhdGhuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIOWvuXJvdXRl5Lit6L+U5Zue55qEcGFnZSBlbGVtZW505omL5Yqo5Yib5bu6XHJcbmZ1bmN0aW9uIGdldFJvdXRlKG5leHRQcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgZ2xvYmFsLnBhZ2VJZCsrO1xyXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGdsb2JhbC5hcHBSb3V0ZSBhcyAoKSA9PiBKU1guRWxlbWVudCwgeyBrZXk6IGdsb2JhbC5wYWdlSWQsIGxvY2F0aW9uOiBuZXh0UHJvcHMubG9jYXRpb24gfSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFBhZ2VTdGFja0luQXBwUm91dGUobmV4dFByb3BzOiBQcm9wcyk6IFBhZ2VUeXBlIHtcclxuLy8gICBjb25zdCByb3V0ZSA9IHN3aXRjaFJvdXRlcihuZXh0UHJvcHMucm91dGVzLCBuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIGFzIFJlYWN0LlJlYWN0RWxlbWVudDxTd2l0Y2hSb3V0ZXJQcm9wcz47XHJcblxyXG4vLyAgIGlmICghcm91dGUpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ+i3r+eUseino+aekOWksei0pe+8jOivt+ajgOafpei3r+eUseaYoOWwhOaIlnVybOaYr+WQpuato+ehricpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHJvdXRlLnByb3BzLmNvbXBvbmVudDtcclxuLy8gfVxyXG5cclxuLy8g6I635Y+W5LiK5LiA5Liq6aG16Z2i55qE57G75aOw5piOXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2UGFnZUNsYXNzKHByZXZDb3VudDogbnVtYmVyKTogUGFnZVR5cGUgfCB1bmRlZmluZWQge1xyXG4gIHJldHVybiBTdGFjay5jb21wb25lbnRbU3RhY2suY29tcG9uZW50Lmxlbmd0aCAtIHByZXZDb3VudF07XHJcbn1cclxuXHJcbi8qKiDmmK/lkKbmmK9yZXBsYWNl5Yqo5L2cICovXHJcbmZ1bmN0aW9uIGlzUmVwbGFjZUFjdGlvbihuZXh0UHJvcHM6IFByb3BzKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgYWN0aW9uID0gbmV4dFByb3BzLmhpc3RvcnkuYWN0aW9uO1xyXG4gIGNvbnN0IGlzUmVwbGFjZSA9IGFjdGlvbiA9PT0gJ1JFUExBQ0UnO1xyXG5cclxuICByZXR1cm4gaXNSZXBsYWNlO1xyXG59XHJcblxyXG4vKiog6I635Y+W6aG16Z2i55qEcGFnZVJlZumdmeaAgeWxnuaApyAqL1xyXG4vLyBmdW5jdGlvbiBnZXRQYWdlUm9vdEVsZW1SZWYocGFnZTogUGFnZVR5cGUgfCB1bmRlZmluZWQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4vLyAgIGlmIChwYWdlKSB7XHJcbi8vICAgICBjb25zdCBwYWdlUm9vdEVsZW1SZWYgPSBwYWdlLnBhZ2VSb290RWxlbVJlZjtcclxuXHJcbi8vICAgICBpZiAocGFnZVJvb3RFbGVtUmVmID09PSB1bmRlZmluZWQpIHtcclxuLy8gICAgICAgY29uc29sZS53YXJuKCfpobXpnaLnu4Tku7bkuK1wYWdlUmVm5LiN5a2Y5Zyo77yM6K+35qOA5p+lc2V0UGFnZVJlZuaYr+WQpuato+ehruiwg+eUqCcpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBwYWdlUm9vdEVsZW1SZWYuY3VycmVudDtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBudWxsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHVzaChuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgb25QdXNoKG5leHRQcm9wcyk7XHJcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3AobmV4dFByb3BzOiBQcm9wcyk6IHZvaWQge1xyXG4gIGNvbnN0IHRvcCA9IFN0YWNrLnNjcm9sbExvY2F0aW9uW1N0YWNrLnNjcm9sbExvY2F0aW9uLmxlbmd0aCAtIDFdO1xyXG5cclxuICBpZiAoU3RhY2suY29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgb25Qb3AobmV4dFByb3BzKTtcclxuICB9XHJcblxyXG4gIFN0YWNrLmNvbXBvbmVudC5wb3AoKTtcclxuICBTdGFjay5zY3JvbGxMb2NhdGlvbi5wb3AoKTtcclxuICBnbG9iYWwucGFnZUlkLS07XHJcbiAgd2luZG93LnNjcm9sbFRvKDAsIHRvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUHVzaChuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgY29uc3QgY3VycmVudENvbXBvbmVudCA9IGdldFByZXZQYWdlQ2xhc3MoMik7XHJcbiAgY29uc3QgdG9Db21wb25lbnQgPSBnZXRQcmV2UGFnZUNsYXNzKDEpO1xyXG4gIC8vIGNvbnN0IHBhZ2VSZWYgPSBnZXRQYWdlUm9vdEVsZW1SZWYoY3VycmVudENvbXBvbmVudCk7XHJcblxyXG4gIC8vIOS4iuS4gOS4qumhtemdoueahOemu+W8gOS6i+S7tlxyXG4gIGlmIChjdXJyZW50Q29tcG9uZW50ICYmIGN1cnJlbnRDb21wb25lbnQucGFnZUxlYXZlKSB7XHJcbiAgICBjdXJyZW50Q29tcG9uZW50LnBhZ2VMZWF2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g5o6S6Zmk56ys5LiA5qyh5Yid5aeL5YyW5pe26LCD55So77yM6L+Z5Liq5pa55rOV5bqU6K+l5Zyo56a75byA6aG16Z2i5pe26LCD55SoXHJcbiAgaWYgKFN0YWNrLmNvbXBvbmVudC5sZW5ndGggPiAxICYmIGlzUmVwbGFjZUFjdGlvbihuZXh0UHJvcHMpID09PSBmYWxzZSkge1xyXG4gICAgb25QYWdlTGVhdmUoY3VycmVudENvbXBvbmVudCwgdG9Db21wb25lbnQsICdlbnRlcicpO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgKHBhZ2VSZWYpIHtcclxuICAvLyAgIHBhZ2VSZWYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAvLyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUG9wKG5leHRQcm9wczogUHJvcHMpOiB2b2lkIHtcclxuICBpZiAoaXNSZXBsYWNlQWN0aW9uKG5leHRQcm9wcykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSBnZXRQcmV2UGFnZUNsYXNzKDEpO1xyXG4gIGNvbnN0IHRvQ29tcG9uZW50ID0gZ2V0UHJldlBhZ2VDbGFzcygyKTtcclxuICAvLyBjb25zdCBwYWdlUmVmID0gZ2V0UGFnZVJvb3RFbGVtUmVmKHRvQ29tcG9uZW50KTtcclxuXHJcbiAgLy8g55uu5qCH6aG16Z2i55qE6L+b5YWl5LqL5Lu2XHJcbiAgaWYgKHRvQ29tcG9uZW50ICYmIHRvQ29tcG9uZW50LnBhZ2VFbnRlcikge1xyXG4gICAgdG9Db21wb25lbnQucGFnZUVudGVyKCk7XHJcbiAgICAvLyDlkI7pgIDlm57pobXpnaLml7bvvIzorqloYXNTZW5k5Yid5aeL5YyWXHJcbiAgICB0b0NvbXBvbmVudC5iZWhhdmlvci5wb3N0QWN0aW9uLmhhc1NlbmQgPSBmYWxzZTtcclxuICAgIC8vIOWQjumAgOWbnumhtemdouaXtu+8jOmHjee9rui/m+WFpeaXtumXtFxyXG4gICAgdG9Db21wb25lbnQuZW50cnl0aW1lID0gRGF0ZS5ub3coKTtcclxuICB9XHJcblxyXG4gIG9uUGFnZUxlYXZlKGN1cnJlbnRDb21wb25lbnQsIHRvQ29tcG9uZW50LCAnZXhpdCcpO1xyXG4gIC8vIGlmIChwYWdlUmVmKSB7XHJcbiAgLy8gICBwYWdlUmVmLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gb25SZXBsYWNlKCk6IHZvaWQge1xyXG4vLyAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSBTdGFjay5jb21wb25lbnRbU3RhY2suY29tcG9uZW50Lmxlbmd0aCAtIDFdO1xyXG5cclxuLy8gICBpZiAoY3VycmVudENvbXBvbmVudC5wYWdlTGVhdmUpIHtcclxuLy8gICAgIGN1cnJlbnRDb21wb25lbnQucGFnZUxlYXZlKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBwYWdlTGVhdmUoe1xyXG4vLyAgIC8vICAgYmVoYXZpb3I6IGN1cnJlbnRDb21wb25lbnQuYmVoYXZpb3IsXHJcbi8vICAgLy8gICB0eXBlOiAnZW50ZXInLFxyXG4vLyAgIC8vICAgbm93OiBjdXJyZW50Q29tcG9uZW50LnBhZ2VOYW1lIHx8ICcnLFxyXG4vLyAgIC8vICAgdG86IHJvdXRlICYmIHJvdXRlLnByb3BzLmNvbXBvbmVudC5wYWdlTmFtZSB8fCAnJyxcclxuLy8gICAvLyAgIHN0YXl0aW1lOiBjdXJyZW50Q29tcG9uZW50Ll9zdGF5dGltZVxyXG4vLyAgIC8vIH0pO1xyXG5cclxuLy8gICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblBhZ2VMZWF2ZShjdXJyZW50Q29tcG9uZW50OiBQYWdlVHlwZSB8IHVuZGVmaW5lZCwgdG9Db21wb25lbnQ6IFBhZ2VUeXBlIHwgdW5kZWZpbmVkLCB0eXBlOiAnZW50ZXInIHwgJ2V4aXQnKTogdm9pZCB7XHJcbiAgaWYgKChjdXJyZW50Q29tcG9uZW50ICYmIGN1cnJlbnRDb21wb25lbnQucGFnZU5hbWUpICYmICh0b0NvbXBvbmVudCAmJiB0b0NvbXBvbmVudC5wYWdlTmFtZSkpIHtcclxuICAgIHBhZ2VMZWF2ZSh7XHJcbiAgICAgIGJlaGF2aW9yOiBjdXJyZW50Q29tcG9uZW50LmJlaGF2aW9yLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBub3c6IGN1cnJlbnRDb21wb25lbnQucGFnZU5hbWUsXHJcbiAgICAgIHRvOiB0b0NvbXBvbmVudC5wYWdlTmFtZSB8fCAnJyxcclxuICAgICAgc3RheXRpbWU6IGN1cnJlbnRDb21wb25lbnQuZ2V0U3RheXRpbWUoKSxcclxuICAgICAgZW50cnl0aW1lOiBjdXJyZW50Q29tcG9uZW50LmVudHJ5dGltZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDnlKjkuo7nrKzkuIDmrKHov5vlhaXml7blsIZyb3V0ZeeahOWPguaVsOW6lOeUqOWIsHJlYWN0LXJvdXRlcuS4iu+8jOeugOWNleadpeivtOWwseaYr+i+vuWIsOS6huS4gOS4qui3s+i9rOeahOaViOaenFxyXG5pZiAob3RoZXIuaGlzdG9yeU1vZGUgIT09ICdicm93c2VyJykge1xyXG4gIGhpc3RvcnlSZXBsYWNlKCk7XHJcbn1cclxuXHJcbmNsYXNzIFN0YWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEJhc2VQcm9wcz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNlUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBnbG9iYWwuaGlzdG9yeSA9IChwcm9wcyBhcyBQcm9wcykuaGlzdG9yeTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSB7XHJcbiAgICByb3V0ZTogW2dldFJvdXRlKHRoaXMucHJvcHMgYXMgUHJvcHMpXSxcclxuICAgIGxhc3RQYXRobmFtZTogKHRoaXMucHJvcHMgYXMgUHJvcHMpLmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgfTtcclxuICAvKiog6aG555uu5Lit55qEUGFnZee7hOS7tiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY29tcG9uZW50OiBQYWdlPHlqLlBhZ2VQcm9wczxhbnk+LCBhbnksIGFueT5bXSA9IFtdO1xyXG4gIC8qKiDnprvlvIDpobXpnaLml7borrDlvZXnmoTmu5rliqjmnaHkvY3nva4gKi9cclxuICBwdWJsaWMgc3RhdGljIHNjcm9sbExvY2F0aW9uOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogUHJvcHMsIG5leHRTdGF0ZTogU3RhdGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcyBhcyBQcm9wcztcclxuICAgIHJldHVybiBuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWUgIT09IHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSk6IFN0YXRlIHwgbnVsbCB7XHJcbiAgICBpZiAobmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lID09PSBwcmV2U3RhdGUubGFzdFBhdGhuYW1lKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV4dEhpc3RvcnkgPSBuZXh0UHJvcHMuaGlzdG9yeSBhcyBIaXN0b3J5O1xyXG4gICAgY29uc3QgbG9hZGluZ0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWotY29tcG9uZW50LXRvYXN0LWxvYWRpbmcnKTtcclxuXHJcbiAgICAvLyDpmLLmraJUb2FzdC5sb2FkaW5n5Y2h5q276aG16Z2iXHJcbiAgICBpZiAobG9hZGluZ0VsZW0pIHtcclxuICAgICAgVG9hc3QuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV4dEhpc3RvcnkuYWN0aW9uID09PSAnUE9QJykge1xyXG4gICAgICBwb3AobmV4dFByb3BzKTtcclxuICAgICAgcHJldlN0YXRlLnJvdXRlLnBvcCgpO1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSBTdGFjay5nZXRTdGFja0NvbXBvbmVudCgpO1xyXG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYWdlTmFtZSkge1xyXG4gICAgICAgIHNldERvY3VtZXRUaXRsZShjb21wb25lbnQucGFnZU5hbWUpO1xyXG4gICAgICAgIGNvbXBvbmVudC5wYWdlQWN0aXZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChuZXh0SGlzdG9yeS5hY3Rpb24gPT09ICdSRVBMQUNFJykge1xyXG4gICAgICAgIGdsb2JhbC5yZXBsYWNlQmVmb3JlQ29tcG9uZW50ID0gey4uLlN0YWNrLmdldFN0YWNrQ29tcG9uZW50KCl9IGFzIGFueTtcclxuICAgICAgICAvLyBvblJlcGxhY2UoKTtcclxuICAgICAgICAvLyBwb3DlvZPliY3ov5nkuKrpobXpnaJcclxuICAgICAgICBwb3AobmV4dFByb3BzKTtcclxuICAgICAgICBwcmV2U3RhdGUucm91dGUucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFN0YWNrLnNjcm9sbExvY2F0aW9uLnB1c2god2luZG93LnNjcm9sbFkpO1xyXG4gICAgICBwcmV2U3RhdGUucm91dGUucHVzaChnZXRSb3V0ZShuZXh0UHJvcHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldlN0YXRlLnJvdXRlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBTdGFjay5zY3JvbGxMb2NhdGlvbi5wdXNoKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgcHJldlN0YXRlLnJvdXRlLnB1c2goZ2V0Um91dGUobmV4dFByb3BzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRQcm9wcy5vblJvdXRlQ2hhbmdlKSB7XHJcbiAgICAgIG5leHRQcm9wcy5vblJvdXRlQ2hhbmdlKG5leHRQcm9wcy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcm91dGU6IHByZXZTdGF0ZS5yb3V0ZSxcclxuICAgICAgbGFzdFBhdGhuYW1lOiBuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKiog5LuOc3RhY2vkuK3ojrflj5blvZPliY3pobXpnaIgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldFN0YWNrQ29tcG9uZW50KCk6IFBhZ2VUeXBlIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiBTdGFjay5jb21wb25lbnRbU3RhY2suY29tcG9uZW50Lmxlbmd0aCAtIDFdO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgLy8gICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMgYXMgUHJvcHM7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50W10gfCBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5yb3V0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU3RhY2sgYXMgYW55KSBhcyB0eXBlb2YgU3RhY2s7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGVsZW1lbnRDZW50ZU9uUGFnZSBmcm9tICcuLi8uLi91dGlscy/lhYPntKDlnKjpobXpnaLkuK3lsYXkuK0nO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtc3RhdGVtYWNoaW5lJztcclxuY2xhc3MgQXV0b0hlaWdodCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuXHJcbiAgcHJpdmF0ZSBlbGVtUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1SZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLmVsZW1SZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSAoZWxlbWVudENlbnRlT25QYWdlKHRoaXMuZWxlbVJlZi5jdXJyZW50KSB8fCAwKSArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtwcmVmaXhDbHN9XHJcbiAgICAgICAgcmVmPXt0aGlzLmVsZW1SZWZ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1ib2R5YH0+e3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgbnVsbH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0hlaWdodDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvSGVpZ2h0IGZyb20gJy4vQXV0b0hlaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBhbnk7XHJcbiAgYXV0b0hlaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbXBsZXRlID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiBwcm9wcy5hdXRvSGVpZ2h0ID8gKFxyXG4gICAgPEF1dG9IZWlnaHQ+e3Byb3BzLmNoaWxkcmVuIHx8IG51bGx9PC9BdXRvSGVpZ2h0PlxyXG4gICkgOiBwcm9wcy5jaGlsZHJlbiB8fCBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGU7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b0hlaWdodCBmcm9tICcuL0F1dG9IZWlnaHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogYW55O1xyXG4gIGF1dG9IZWlnaHQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBFbXB0eSA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gcHJvcHMuYXV0b0hlaWdodCA/IChcclxuICAgIDxBdXRvSGVpZ2h0Pntwcm9wcy5jaGlsZHJlbiB8fCBudWxsfTwvQXV0b0hlaWdodD5cclxuICApIDogcHJvcHMuY2hpbGRyZW4gfHwgbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dG9IZWlnaHQgZnJvbSAnLi9BdXRvSGVpZ2h0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IGFueTtcclxuICBhdXRvSGVpZ2h0PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgRmFpbCA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gcHJvcHMuYXV0b0hlaWdodCA/IChcclxuICAgIDxBdXRvSGVpZ2h0Pntwcm9wcy5jaGlsZHJlbiB8fCBudWxsfTwvQXV0b0hlaWdodD5cclxuICApIDogcHJvcHMuY2hpbGRyZW4gfHwgbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhaWw7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9hZGluZ0FtLCB7IFByb3BzIGFzIExvYWRpbmdQcm9wcyB9IGZyb20gJy4uL1N0YXRlVmlldy9Mb2FkaW5nJztcclxuaW1wb3J0IEF1dG9IZWlnaHQgZnJvbSAnLi9BdXRvSGVpZ2h0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIExvYWRpbmdQcm9wcyB7XHJcbiAgYXV0b0hlaWdodD86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IExvYWRpbmcgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXV0b0hlaWdodCA9IHByb3BzLmF1dG9IZWlnaHQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBwcm9wcy5hdXRvSGVpZ2h0O1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XHJcbiAgcmV0dXJuIGF1dG9IZWlnaHQgPyAoXHJcbiAgICA8QXV0b0hlaWdodD57Y2hpbGRyZW4gfHwgPExvYWRpbmdBbSB7Li4ucHJvcHN9IC8+fTwvQXV0b0hlaWdodD5cclxuICApIDogY2hpbGRyZW4gfHwgPExvYWRpbmdBbSB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgUmVhZE9ubHkgfSBmcm9tICcuLi8uLi9fYmFzZS9kYXRhdHlwZSc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XHJcbmltcG9ydCBDb21wbGV0ZSBmcm9tICcuL0NvbXBsZXRlJztcclxuaW1wb3J0IEZhaWwgZnJvbSAnLi9GYWlsJztcclxuaW1wb3J0IEVtcHR5IGZyb20gJy4vRW1wdHknO1xyXG5cclxuLyoqIOeKtuaAgeexu+WeiyAqL1xyXG5leHBvcnQgdHlwZSBUeXBlID0gJ2NvbXBsZXRlJyB8ICdlbXB0eScgfCAnZmFpbCcgIHwgJ2xvYWRpbmcnIHwgdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlUHJvcHMge1xyXG4gIC8qKiDliqDovb3op4blm77nmoTmoLflvI8gKi9cclxuICBsb2FkaW5nU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIC8qKiDlvZPliY3nmoTnirbmgIHnsbvlnosgKi9cclxuICBzdGF0ZTogVHlwZTtcclxuICBjaGlsZHJlbj86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAvKiog5riy5p+T55qE54q25oCB6KeG5Zu+ICovXHJcbiAgcmVuZGVyOiBKU1guRWxlbWVudCB8IG51bGw7XHJcbiAgbGFzdFN0YXRlOiBUeXBlO1xyXG4gIC8qKiDooqvmuLLmn5PnmoTmrKHmlbDvvIznlKjkuo7liKTmlq3nrKzkuIDmrKHnmoTmuLLmn5PnirbmgIEgKi9cclxuICByZW5kZXJDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG4vKiog6I635Y+W54q25oCB5riy5p+T6KeG5Zu+ICovXHJcbmZ1bmN0aW9uIGdldFN0YXRlUmVuZGVyKHByb3BzOiBQcm9wcyk6IFN0YXRlWydyZW5kZXInXSB7XHJcbiAgbGV0IHJlbmRlcjogUmVhY3QuUmVhY3RFbGVtZW50PEhUTUxEaXZFbGVtZW50LCB0eXBlb2YgQ29tcGxldGUgfCB0eXBlb2YgRW1wdHkgfCB0eXBlb2YgTG9hZGluZyB8IHR5cGVvZiBGYWlsPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvLyDmoLnmja7lvZPliY3nirbmgIHotYvkuojlr7nlupTnmoTop4blm75cclxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgIGlmIChyZW5kZXIgPT09IG51bGwpIHtcclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50ID0gY2hpbGQgYXMgUmVhY3QuUmVhY3RFbGVtZW50PEhUTUxEaXZFbGVtZW50LCB0eXBlb2YgQ29tcGxldGUgfCB0eXBlb2YgRW1wdHkgfCB0eXBlb2YgTG9hZGluZyB8IHR5cGVvZiBGYWlsPjtcclxuICAgICAgY29uc3QgdHlwZSA9IGNoaWxkRWxlbWVudCAmJiBjaGlsZEVsZW1lbnQudHlwZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChwcm9wcy5zdGF0ZSA9PT0gJ2NvbXBsZXRlJyAmJiB0eXBlID09PSBDb21wbGV0ZSkgfHxcclxuICAgICAgICAocHJvcHMuc3RhdGUgPT09ICdlbXB0eScgJiYgdHlwZSA9PT0gRW1wdHkpIHx8XHJcbiAgICAgICAgKHByb3BzLnN0YXRlID09PSAnZmFpbCcgJiYgdHlwZSA9PT0gRmFpbCkgfHxcclxuICAgICAgICAocHJvcHMuc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0eXBlID09PSBMb2FkaW5nKVxyXG4gICAgICApIHtcclxuICAgICAgICByZW5kZXIgPSBjaGlsZEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8g5aaC5p6cY2hpbGRyZW7ph4zmsqHmnInlo7DmmI5Mb2FkaW5n6KeG5Zu+5bCx5L2/55So6buY6K6k55qEXHJcbiAgaWYgKCFyZW5kZXIgJiYgcHJvcHMuc3RhdGUgPT09ICdsb2FkaW5nJykge1xyXG4gICAgcmVuZGVyID0gPFN0YXRlTWFjaGluZS5Mb2FkaW5nIHN0eWxlPXtwcm9wcy5sb2FkaW5nU3R5bGV9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wbGV0ZVJlbmRlcihwcm9wczogUHJvcHMpOiBTdGF0ZVsncmVuZGVyJ10gfCBudWxsIHtcclxuICBsZXQgcmVuZGVyID0gbnVsbDtcclxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IGNoaWxkIGFzIFJlYWN0LlJlYWN0RWxlbWVudDxIVE1MRGl2RWxlbWVudCwgdHlwZW9mIENvbXBsZXRlPjtcclxuICAgIGlmIChjaGlsZEVsZW1lbnQgJiYgY2hpbGRFbGVtZW50LnR5cGUgPT09IENvbXBsZXRlKSB7XHJcbiAgICAgIHJlbmRlciA9IGNoaWxkRWxlbWVudDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuLyoqIOaciemZkOeKtuaAgeacuiAqL1xyXG5jbGFzcyBTdGF0ZU1hY2hpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcclxuICAgIHN1cGVyKHByb3BzLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xyXG4gICAgcmVuZGVyOiBudWxsLFxyXG4gICAgbGFzdFN0YXRlOiB0aGlzLnByb3BzLnN0YXRlLFxyXG4gICAgcmVuZGVyQ291bnQ6IDBcclxuICB9O1xyXG5cclxuICAvKiog5oiQ5Yqf55qE6KeG5Zu+ICovXHJcbiAgcHVibGljIHN0YXRpYyBDb21wbGV0ZTogdHlwZW9mIENvbXBsZXRlID0gQ29tcGxldGU7XHJcbiAgLyoqIOWksei0peeahOinhuWbviAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgRmFpbDogdHlwZW9mIEZhaWwgPSBGYWlsO1xyXG4gIC8qKiDliqDovb3kuK3nmoTop4blm74gKi9cclxuICBwdWJsaWMgc3RhdGljIExvYWRpbmc6IHR5cGVvZiBMb2FkaW5nID0gTG9hZGluZztcclxuICAvKiog5pWw5o2u5Li656m655qE6KeG5Zu+ICovXHJcbiAgcHVibGljIHN0YXRpYyBFbXB0eTogdHlwZW9mIEVtcHR5ID0gRW1wdHk7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpOiBTdGF0ZSB8IG51bGwge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIChwcmV2U3RhdGUubGFzdFN0YXRlICE9PSBuZXh0UHJvcHMuc3RhdGUpIHx8XHJcbiAgICAgICAgKHByZXZTdGF0ZS5yZW5kZXJDb3VudCA9PT0gMCAmJiBwcmV2U3RhdGUubGFzdFN0YXRlID09PSBuZXh0UHJvcHMuc3RhdGUpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZW5kZXI6IGdldFN0YXRlUmVuZGVyKG5leHRQcm9wcyksXHJcbiAgICAgICAgbGFzdFN0YXRlOiBuZXh0UHJvcHMuc3RhdGUsXHJcbiAgICAgICAgcmVuZGVyQ291bnQ6IHByZXZTdGF0ZS5yZW5kZXJDb3VudCArIDFcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAocHJldlN0YXRlLmxhc3RTdGF0ZSA9PT0gbmV4dFByb3BzLnN0YXRlICYmIG5leHRQcm9wcy5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlcjogZ2V0Q29tcGxldGVSZW5kZXIobmV4dFByb3BzKSxcclxuICAgICAgICBsYXN0U3RhdGU6IG5leHRQcm9wcy5zdGF0ZSxcclxuICAgICAgICByZW5kZXJDb3VudDogcHJldlN0YXRlLnJlbmRlckNvdW50ICsgMVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZW5kZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZU1hY2hpbmU7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY2lybGVcIjpcImNpcmxlXzJzd0ZSXCJ9OyIsImltcG9ydCB5aiBmcm9tICcuLi8uLi8uLi90eXBpbmdzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgeWouQ29tcG9uZW50UHJvcHMgIHtcclxuICBzaXplPzogbnVtYmVyO1xyXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICBhY3RpdmVDb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gJ3lqLWNvbXBvbmVudC1sb2FkaW5nJztcclxuY29uc3QgTG9hZGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3ByZWZpeENsc30+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgW2Ake3ByZWZpeENsc30tY2lybGVgXTogdHJ1ZSxcclxuICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWUgfHwgJyddOiAhIXByb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogcHJvcHMuc2l6ZSB8fCA2LFxyXG4gICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCAnI2NjYycsXHJcbiAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8ICcjY2NjJyxcclxuICAgICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCAnI2NjYycsXHJcbiAgICAgICAgICBib3JkZXJMZWZ0Q29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8ICcjMTA4ZWU5JyxcclxuICAgICAgICAgIC4uLnByb3BzLnN0eWxlXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXBsYWNlaG9sZGVyYH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiLCJpbXBvcnQgX3lqIGZyb20gJy4uLy4uL3R5cGluZ3MvaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xyXG5pbXBvcnQgc3ZnUm9vdFBhdGggZnJvbSAnLi4vLi4vdXRpbHMvc3ZnUm9vdFBhdGgnO1xyXG5jb25zdCBzdmdGaWxlID0ge1xyXG4gIHN1Y2Nlc3M6IHN2Z1Jvb3RQYXRoICsgcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3N1Y2Nlc3Muc3ZnJykuaWQsXHJcbiAgZmFpbDogc3ZnUm9vdFBhdGggKyByZXF1aXJlKCcuLi8uLi9hc3NldHMvZmFpbC5zdmcnKS5pZCxcclxuICBsb2FkaW5nOiBzdmdSb290UGF0aCArIHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9sb2FkaW5nLnN2ZycpLmlkXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0UHJvcHMgZXh0ZW5kcyBfeWouQ29tcG9uZW50UHJvcHMge1xyXG4gIHR5cGU/OiAnc3VjY2VzcycgfCAnZmFpbCcgfCAnbG9hZGluZyc7XHJcbiAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtdG9hc3QnO1xyXG5jb25zdCBUb2FzdCA9IChwcm9wczogVG9hc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gdHlwZSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRleHQgJHtwcmVmaXhDbHN9LXRleHQtaWNvbmB9PlxyXG4gICAgICA8SWNvbiBzcmM9e3N2Z0ZpbGVbdHlwZV19IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRleHQtaW5mb2B9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS10ZXh0YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRleHQtbGFiZWxgfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgVG9hc3RQdXJlLCB7IFRvYXN0UHJvcHMgfSBmcm9tICcuL1RvYXN0JztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVG9hc3RQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIG1hc2s/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGZhZGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtdG9hc3QnO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcclxuICBjb25zdCB1dWlkID0gYHRvYXN0XyR7bm93fWA7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHV1aWQpO1xyXG5cclxuICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHV1aWQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5jbGFzcyBUb2FzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBQcm9wcyA9IHtcclxuICAgIHR5cGU6IHVuZGVmaW5lZCxcclxuICAgIGR1cmF0aW9uOiAzXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIGZhZGU6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzaG93KGNvbnRlbnQ6IHN0cmluZywgZHVyYXRpb24/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFRvYXN0LmNsb3NlKCk7XHJcbiAgICBSZWFjdERvbS5yZW5kZXIoKFxyXG4gICAgICA8VG9hc3QgZHVyYXRpb249e2R1cmF0aW9ufT57Y29udGVudH08L1RvYXN0PlxyXG4gICAgKSwgZ2V0Q29udGFpbmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgVG9hc3QuY2xvc2UoKTtcclxuICAgIFJlYWN0RG9tLnJlbmRlcigoXHJcbiAgICAgIDxUb2FzdCBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tbG9hZGluZ2B9IGR1cmF0aW9uPXsxMDAwMH0gbWFzaz57Y29udGVudH08L1RvYXN0PlxyXG4gICAgKSwgZ2V0Q29udGFpbmVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjbG9zZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xyXG4gICAgUmVhY3REb20udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVRpbWVyOiBudW1iZXIgfCBOb2RlSlMuVGltZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgdW5tb3VudFRpbWVyOiBudW1iZXIgfCBOb2RlSlMuVGltZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDmmK/lkKbmiafooYzkuoZjb21wb25lbnRXaWxsVW5tb3VudCAqL1xyXG4gIHByaXZhdGUgaXNVbm1vdW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzVW5tb3VudCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGYWRlKHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNVbm1vdW50ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1VubW91bnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2V0RmFkZShmYWxzZSk7XHJcbiAgICAgIHRoaXMudW5tb3VudFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRvYXN0LmNsb3NlKCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZhZGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzVW5tb3VudCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZmFkZTogc3RhdGVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0Q2xvc2VUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDAgLSAzMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckNsb3NlVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbG9zZVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIgYXMgTm9kZUpTLlRpbWVyKTtcclxuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy51bm1vdW50VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudW5tb3VudFRpbWVyIGFzIE5vZGVKUy5UaW1lcik7XHJcbiAgICAgIHRoaXMudW5tb3VudFRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgY29uc3QgeyBtYXNrLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwge1xyXG4gICAgICAgICAgW3ByZWZpeENsc106IHRydWUsXHJcbiAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1mYWRlYF06IHRoaXMuc3RhdGUuZmFkZSxcclxuICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LW1hc2tgXTogbWFzayxcclxuICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LW5vbWFza2BdOiAhbWFzayxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb2FzdFB1cmUgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVG9hc3RQdXJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdDsiLCJpbXBvcnQgUmVxdWVzdCwgeyBQcm9wcyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi9jb21wb25lbnQvVG9hc3QnO1xyXG5cclxuY2xhc3MgR2V0IGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3Ioc2VydmljZTogU2VydmljZSwgcHJvcHM/OiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlcnZpY2U6IFNlcnZpY2U7XHJcbiAgcHJvdGVjdGVkIGFnYWluOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIOWPkemAgeivt+axgiAqL1xyXG4gIHB1YmxpYyBhc3luYyBzZW5kKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8g5b+F6aG75piv55m75b2V54q25oCB5LiL5omN5Lya5Y+R6YCB6K+35rGCXHJcbiAgICBpZiAoU2VydmljZS5sb2dpblN0YXRlICE9PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zZXJ2aWNlLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IHVzZXJDYWNoZUlkIH0gPSBvcHRpb25zO1xyXG4gICAgLy8gbGV0IHN0b3JlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgIC8vIGlmIChzdG9yYWdlS2V5KSB7XHJcbiAgICAvLyAgIHN0b3JlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC8vIOe8k+WtmOWtmOWcqOWwseWOu+ivu+e8k+WtmO+8jOWQpuWImemHjeaWsOivt+axglxyXG4gICAgLy8gaWYgKHN0b3JlKSB7XHJcbiAgICAvLyAgIGxldCBkYXRhOiBTdG9yYWdlRGF0YSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyAgIHRyeSB7XHJcbiAgICAvLyAgICAgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmUpIGFzIFN0b3JhZ2VEYXRhO1xyXG4gICAgLy8gICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKCdhY2NvdW50LT5nZXQtPnNlbmTlpLHotKXvvIxKU09OLnBhcnNl6ZSZ6K+v77yM6K+35qOA5p+l57uT5p6E5piv5ZCm5q2j56GuJywgZXJyKTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgLy8g5Yik5patdXNlckNhY2hlSWTmmK/lkKbnm7jlkIzvvIzlpoLmnpzkuI3lkIznlKjmiLfkv6Hmga/mnInlj6/og73kvJrmm7TmlrBcclxuICAgIC8vICAgaWYgKGRhdGEgJiYgZGF0YS51c2VyQ2FjaGVJZCA9PT0gdXNlckNhY2hlSWQpIHtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLl9jYWxsYmFjayh7XHJcbiAgICAvLyAgICAgICAgIHJldENvZGU6ICcwMDAwJyxcclxuICAgIC8vICAgICAgICAgcmV0TXNnOiAnJyxcclxuICAgIC8vICAgICAgICAgcmVzdWx0OiBkYXRhXHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHRoaXMuc2VydmljZS5zZXREYXRhKGRhdGEpO1xyXG4gICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0KCdjb21wbGV0ZScpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIHRoaXMucmVxdWVzdCh1c2VyQ2FjaGVJZCwgc3RvcmFnZUtleSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoaXMucmVxdWVzdCh1c2VyQ2FjaGVJZCwgc3RvcmFnZUtleSk7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnJlcXVlc3QodXNlckNhY2hlSWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0KHVzZXJDYWNoZUlkOiBzdHJpbmcsIHN0b3JhZ2VLZXk/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuYWN0aW9uKHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9hcGksXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlckNhY2hlSWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXRDb2RlID09PSAnMDAwMCcpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0RGF0YShyZXNwb25zZS5yZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoc3RvcmFnZUtleSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFRvYXN0LnNob3cocmVzcG9uc2UucmV0TXNnKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZmFpbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9mYWlsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IGVycjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0O1xyXG4iLCJpbXBvcnQgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IHN0cmluZ1RvSGV4IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1RvSGV4JztcclxuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi8uLi9hcHAvZ2xvYmFsJztcclxuaW1wb3J0IHsgUHJvcHMgYXMgUG9zdFByb3BzIH0gZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IGdldFJlcXVlc3QgZnJvbSAnLi9nZXQnO1xyXG5pbXBvcnQgcmVnaXN0ZXJSZXF1ZXN0IGZyb20gJy4vcmVnaXN0ZXInO1xyXG5pbXBvcnQgc2lnbmluUmVxdWVzdCBmcm9tICcuL3NpZ25pbic7XHJcbmltcG9ydCBzYXZlUmVxdWVzdCBmcm9tICcuL3NhdmUnO1xyXG5pbXBvcnQgcmVzZXRSZXF1ZXN0IGZyb20gJy4vcmVzZXQnO1xyXG5pbXBvcnQgdmVyaWZpY2F0aW9uUmVxdWVzdCBmcm9tICcuL3ZlcmlmaWNhdGlvbic7XHJcbmltcG9ydCBpc0h0dHAgZnJvbSAnLi4vLi4vdXRpbHMvaXNIdHRwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xpbmsnO1xyXG5pbXBvcnQgT2JPYmplY3QgZnJvbSAnLi4vLi4vYXBwL2RhdGF0eXBlL29iT2JqZWN0JztcclxuaW1wb3J0IHsgUmVhZE9ubHkgfSBmcm9tICcuLi8uLi9fYmFzZS9kYXRhdHlwZSc7XHJcblxyXG50eXBlIFJlcXVlc3RUeXBlID0gJ3JlZ2lzdGVyJyB8ICdzaWduaW4nIHwgJ3Jlc2V0JyB8ICdzYXZlJztcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICAvKiog55So5oi357yT5a2YaWQgKi9cclxuICByZWFkb25seSB1c2VyQ2FjaGVJZDogc3RyaW5nO1xyXG4gIC8qKiBsb2NhbFN0b3JhZ2XkuK3orr7nva7nmoRrZXnvvIznlKjkuo7lrZjlgqjnlKjmiLfkv6Hmga/vvIzlpoLmnpzlupTnlKjmnInkv67mlLnnlKjmiLfkv6Hmga/nmoTlip/og73lu7rorq7kuI3phY3nva7or6XpobkgKi9cclxuICByZWFkb25seSBzdG9yYWdlS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOeZu+W9lemhtemdoueahOWfn+WQjSAqL1xyXG4gIHJlYWRvbmx5IGxvZ2luSG9zdD86IHN0cmluZztcclxuICAvKiog55m75b2V5oiQ5Yqf5ZCO55qE5Zue6LCD6aG16Z2iICovXHJcbiAgcmVhZG9ubHkgbG9naW5DYWxsQmFjaz86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAvKiog55m75b2V54q25oCBICovXHJcbiAgbG9naW5TdGF0ZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAvKiog5YWz5rOo54q25oCBICovXHJcbiAgc3Vic2NyaWJlU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdCB7XHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBr+eahOWKqOS9nOmFjee9riAqL1xyXG4gIGdldFJlcXVlc3Q/OiBSZXF1ZXN0T3B0aW9ucztcclxuICAvKiog55So5oi35Y+R6YCB6aqM6K+B56CB55qE5Yqo5L2c6YWN572uICAqL1xyXG4gIHZlcmlmaWNhdGlvblJlcXVlc3Q/OiBQb3N0UHJvcHM7XHJcbiAgLyoqIOazqOWGjOeahOivt+axgiAqL1xyXG4gIHJlZ2lzdGVyUmVxdWVzdD86IFBvc3RQcm9wcztcclxuICAvKiog55m75b2V55qE6K+35rGCICovXHJcbiAgc2lnbmluUmVxdWVzdD86IFBvc3RQcm9wcztcclxuICAvKiog6YeN572u5a+G56CB55qE6K+35rGCICovXHJcbiAgcmVzZXRSZXF1ZXN0PzogUG9zdFByb3BzO1xyXG4gIC8qKiDkv53lrZjkuKrkurrkv6Hmga/nmoTor7fmsYIgKi9cclxuICBzYXZlUmVxdWVzdD86IFJlcXVlc3RPcHRpb25zO1xyXG59XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIEV4dGVuZHNSZXF1ZXN0UHJvcHMgZXh0ZW5kcyBSZXF1ZXN0T3B0aW9ucyB7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSB7XHJcbiAgLyoqIOW+ruS/oeeahG9wZW5JZCAqL1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG4gIC8qKiDns7vnu5/nmoRtZW1lYmVySWQgKi9cclxuICBtZW1iZXJJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VEYXRhIGV4dGVuZHMgRGF0YSB7XHJcbiAgdXNlckNhY2hlSWQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcG9zdFJlcXVlc3QgPSBbcmVnaXN0ZXJSZXF1ZXN0LCBzaWduaW5SZXF1ZXN0LCByZXNldFJlcXVlc3QsIHNhdmVSZXF1ZXN0LCBnZXRSZXF1ZXN0LCB2ZXJpZmljYXRpb25SZXF1ZXN0XTtcclxuXHJcbmNsYXNzIEFjY291bnQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMgJiBTdGF0ZSwgcmVxdWVzdDogUmVxdWVzdCkge1xyXG4gICAgKFsncmVnaXN0ZXInLCAnc2lnbmluJywgJ3Jlc2V0JywgJ3NhdmUnLCAnZ2V0JywgJ3ZlcmlmaWNhdGlvbiddIGFzIFJlcXVlc3RUeXBlW10pLmZvckVhY2goKHJlcXVlc3ROYW1lLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcWllc3RLZXkgPSByZXF1ZXN0TmFtZSArICdSZXF1ZXN0JztcclxuICAgICAgY29uc3QgcHJvcFJlcXVlc3QgPSAocmVxdWVzdCBhcyBhbnkpW3JlcWllc3RLZXldIGFzIFJlcXVlc3RPcHRpb25zO1xyXG5cclxuICAgICAgKHRoaXMgYXMgYW55KVtyZXFpZXN0S2V5XSA9IG5ldyAocG9zdFJlcXVlc3RbaV0pKHRoaXMsIHByb3BSZXF1ZXN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmxvZ2luQXV0aCA9IHRoaXMubG9naW5BdXRoLmJpbmQodGhpcyk7XHJcbiAgICBBY2NvdW50LmxvZ2luU3RhdGUgPSBvcHRpb25zLmxvZ2luU3RhdGU7XHJcbiAgICBBY2NvdW50LnN1YnNjcmliZVN0YXRlID0gb3B0aW9ucy5zdWJzY3JpYmVTdGF0ZTtcclxuICAgIEFjY291bnQubG9naW5BdXRoID0gdGhpcy5sb2dpbkF1dGg7XHJcbiAgfVxyXG5cclxuICAvKiog6YWN572u5Y+C5pWwICovXHJcbiAgcHVibGljIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBr+eahOWKqOS9nCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBnZXRSZXF1ZXN0ITogZ2V0UmVxdWVzdDtcclxuICAvKiog5rOo5YaM55qE5Yqo5L2cICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHJlZ2lzdGVyUmVxdWVzdCE6IHJlZ2lzdGVyUmVxdWVzdDtcclxuICAvKiog55m75b2V5Yqo5L2cICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHNpZ25pblJlcXVlc3QhOiBzaWduaW5SZXF1ZXN0O1xyXG4gIC8qKiDph43nva7liqjkvZwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgcmVzZXRSZXF1ZXN0ITogcmVzZXRSZXF1ZXN0O1xyXG4gIC8qKiDkv53lrZjnlKjmiLfkv6Hmga/liqjkvZwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgc2F2ZVJlcXVlc3QhOiBzYXZlUmVxdWVzdDtcclxuICAvKiog5Y+R6YCB6aqM6K+B56CB5Yqo5L2cICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHZlcmlmaWNhdGlvblJlcXVlc3QhOiB2ZXJpZmljYXRpb25SZXF1ZXN0O1xyXG4gIC8qKiDku47mjqXlj6Pojrflj5bliLDnlKjmiLfmlbDmja4gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogT2JPYmplY3Q8KERhdGEgJiBhbnkpIHwgdW5kZWZpbmVkPiA9IG5ldyBPYk9iamVjdCh7IGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkIH0pO1xyXG4gIC8qKiDnmbvlvZXnirbmgIEgKi9cclxuICBwdWJsaWMgc3RhdGljIGxvZ2luU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOWFs+azqOeKtuaAgSAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOeZu+W9leiupOivgSwg5bey55m75b2V6LCD55SoY2FsbGJhY2vvvIzlkKbliJnlsLHot7PnmbvlvZXpobUgKi9cclxuICBwdWJsaWMgc3RhdGljIGxvZ2luQXV0aDogKGNhbGxiYWNrPzogKCkgPT4gdm9pZCwgbG9naW5Vcmw/OiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4gIC8qKiDnmbvlvZXorqTor4EsIOW3sueZu+W9leiwg+eUqGNhbGxiYWNr77yM5ZCm5YiZ5bCx6Lez5YWs5YWx55m75b2V6aG1ICovXHJcbiAgcHJpdmF0ZSBsb2dpbkF1dGgoY2FsbGJhY2s/OiAoKSA9PiB2b2lkLCBsb2dpblVybD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKEFjY291bnQubG9naW5TdGF0ZSA9PT0gdHJ1ZSAmJiBjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChsb2dpblVybCkge1xyXG4gICAgICBpZiAoaXNIdHRwKGxvZ2luVXJsKSkge1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2dpblVybDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBMaW5rLmdvKGxvZ2luVXJsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubG9naW5Ib3N0ICYmIG9wdGlvbnMubG9naW5DYWxsQmFjaykge1xyXG4gICAgICAgIGNvbnN0IHsgbG9naW5Ib3N0IH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQ2FsbEJhY2sgPSBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5sb2dpbkNhbGxCYWNrKTtcclxuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHN0cmluZ1RvSGV4KGdsb2JhbC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvZ2luSG9zdCArICcmY2FsbEJhY2tVcmw9JyArIGxvZ2luQ2FsbEJhY2sgKyAnJnJvdXRlPScgKyBwYXRobmFtZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfnmbvlvZXorqTor4HlpLHotKXvvIznvLrlsJFBY2NvdW50LmxvZ2luSG9zdOaIlkFjY291bnQubG9naW5DYWxsQmFjaycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBSZWFkT25seTxEYXRhPik6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuICAgIEFjY291bnQubG9naW5TdGF0ZSA9IHRydWU7XHJcblxyXG4gICAgY29uc3Qgc3ZhZURhdGEgPSB7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIHVzZXJDYWNoZUlkOiBvcHRpb25zICYmIG9wdGlvbnMudXNlckNhY2hlSWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kYXRhLnNldChkYXRhKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnN0b3JhZ2VLZXkpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3ZhZURhdGEpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRSZXF1ZXN0KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignQWNjb3VudC5zdG9yYWdlS2V55rKh5pyJ6K6+572u77yM5pWw5o2u5LiN6IO95a2Y5YKo5ZyobG9jYWxTdG9yYWdl5LitJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyIsImltcG9ydCBSZXF1ZXN0LCB7IFByb3BzIGFzIFJlcXVlc3RPcHRpb25zLCBFdmVudCB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi9jb21wb25lbnQvVG9hc3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnQvRm9ybS9zZXJ2aWNlJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9JbnB1dC9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIGV4dGVuZHMgRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUmVxdWVzdE9wdGlvbnMge1xyXG4gIGZpZWxkTmFtZT86IHtcclxuICAgIHRlbD86IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBQb3N0IGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3Ioc2VydmljZTogU2VydmljZSwgcHJvcHM/OiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHByb3BzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBQcm9wcyB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgZm9ybTogRm9ybSA9IG5ldyBGb3JtKHtcclxuICAgIHJlcXVlc3Q6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgLyoqIOazqOWGjOi0puWPtyAqL1xyXG4gIHB1YmxpYyB0ZWw6IElucHV0ID0gbmV3IElucHV0KHtcclxuICAgIGZpZWxkS2V5OiAndGVsJyxcclxuICAgIGZpZWxkTmFtZTogdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5maWVsZE5hbWUgJiYgdGhpcy5vcHRpb25zLmZpZWxkTmFtZS50ZWwgfHwgJ+azqOWGjOi0puWPtycsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHZhbGlkYXRlOiAndGVsJyxcclxuICAgIC8vIG9uQ2hhbmdlOiB0aGlzLnZlcmlmaWNhdGlvblJlcXVlc3QgJiYgdGhpcy52ZXJpZmljYXRpb25SZXF1ZXN0LnNldENvbXBlbHRlLFxyXG4gICAgZm9ybTogKCkgPT4gdGhpcy5mb3JtXHJcbiAgfSk7XHJcblxyXG4gIC8qKiDpqozor4HnoIEgKi9cclxuICBwdWJsaWMgdmVyaWZpY2F0aW9uQ29kZTogSW5wdXQgPSBuZXcgSW5wdXQoe1xyXG4gICAgZmllbGRLZXk6ICd2ZXJpZmljYXRpb25Db2RlJyxcclxuICAgIGZpZWxkTmFtZTogJ+mqjOivgeeggScsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIC8vIG1heExlbmd0aDogNCxcclxuICAgIC8vIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgIHZhbGlkYXRlOiAnaW50ZWdlcicsXHJcbiAgICBmb3JtOiAoKSA9PiB0aGlzLmZvcm1cclxuICB9KTtcclxuXHJcbiAgLyoqIOWvhueggSAqL1xyXG4gIHB1YmxpYyBwYXNzd29yZDogSW5wdXQgPSBuZXcgSW5wdXQoe1xyXG4gICAgZmllbGRLZXk6ICdwYXNzd29yZCcsXHJcbiAgICBmaWVsZE5hbWU6ICflr4bnoIEnLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAvLyB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgLy8gbWF4TGVuZ3RoOiAxOCxcclxuICAgIHZhbGlkYXRlOiAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD8hWzAtOV0rJCkoPyFbYS16QS1aXSskKVswLTlBLVphLXpdezgsMTZ9JC8pO1xyXG4gICAgICBjb25zdCBpc09yZGVybHkgPSByZWdleHAudGVzdCh2YWx1ZSB8fCAnJyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQuc2V0UHJvbXB0KGlzT3JkZXJseSA/ICcnIDogJ+WvhueggeagvOW8j+S4ujgtMTbkvY3mlbDlrZfliqDlrZfmr40nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGlzT3JkZXJseTtcclxuICAgIH0sXHJcbiAgICBmb3JtOiAoKSA9PiB0aGlzLmZvcm1cclxuICB9KTtcclxuXHJcbiAgLyoqIOWGjeasoei+k+WFpeWvhueggSAqL1xyXG4gIHB1YmxpYyByZXBhc3N3b3JkOiBJbnB1dCA9IG5ldyBJbnB1dCh7XHJcbiAgICBmaWVsZEtleTogJ3Bhc3N3b3JkJyxcclxuICAgIGZpZWxkTmFtZTogJ+WGjeasoei+k+WFpeWvhueggScsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIC8vIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICAgICAgY29uc3QgaXNFcXVhbCA9IHRoaXMucGFzc3dvcmQudmFsdWUuZ2V0KCkgPT09IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmVwYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMucmVwYXNzd29yZC5zZXRQcm9tcHQoaXNFcXVhbCA/ICcnIDogJ+S4pOasoeWvhueggei+k+WFpeS4jeS4gOiHtCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXNFcXVhbDtcclxuICAgIH0sXHJcbiAgICBmb3JtOiAoKSA9PiB0aGlzLmZvcm1cclxuICB9KTtcclxuXHJcbiAgLyoqIOa4heepuuWfuuehgOWtl+auteeahOWAvCAqL1xyXG4gIHB1YmxpYyBiYXNlQ2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRlbC5jbGVhcigpO1xyXG4gICAgdGhpcy52ZXJpZmljYXRpb25Db2RlLmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlcGFzc3dvcmQuY2xlYXIoKTtcclxuICAgIHRoaXMuZm9ybS50cmlnZ2VyLnNldChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiog5Y+R6YCB6K+35rGCICovXHJcbiAgcHVibGljIGFzeW5jIHNlbmQocGFyYW1zPzogUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmFjdGlvbih7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHVybDogdGhpcy5fYXBpLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtc1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmV0Q29kZSA9PT0gJzAwMDAnKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuY2FsbGJhY2spIHtcclxuICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhc2VDbGVhcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFRvYXN0LnNob3cocmVzcG9uc2UucmV0TXNnKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZmFpbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9mYWlsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5mYWlsYmFjaykge1xyXG4gICAgICAgIHBhcmFtcy5mYWlsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIFRvYXN0LnNob3coJ+e9kee7nOe5geW/mScpO1xyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiIsImltcG9ydCB7IFByb3BzIGFzIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vYXBwL3JlcXVlc3QnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IFBvc3RSZXF1ZXN0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFBvc3RSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBTZXJ2aWNlLCBwcm9wczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHNlcnZpY2UsIHByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyIsImltcG9ydCB7IFByb3BzIGFzIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vYXBwL3JlcXVlc3QnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IFBvc3RSZXF1ZXN0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jbGFzcyBSZXNldCBleHRlbmRzIFBvc3RSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBTZXJ2aWNlLCBwcm9wczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHNlcnZpY2UsIHByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2V0OyIsImltcG9ydCB7IFByb3BzIGFzIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vLi4vYXBwL3JlcXVlc3QnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IFBvc3RSZXF1ZXN0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jbGFzcyBTYXZlIGV4dGVuZHMgUG9zdFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNlcnZpY2UsIHByb3BzOiBSZXF1ZXN0T3B0aW9ucykge1xyXG4gICAgc3VwZXIoc2VydmljZSwgcHJvcHMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2F2ZTsiLCJpbXBvcnQgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQb3N0UmVxdWVzdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY2xhc3MgU2lnbmluIGV4dGVuZHMgUG9zdFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNlcnZpY2UsIHByb3BzOiBSZXF1ZXN0T3B0aW9ucykge1xyXG4gICAgc3VwZXIoc2VydmljZSwgcHJvcHMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluOyIsImltcG9ydCBSZXF1ZXN0LCB7IFByb3BzIGFzIFJlcXVlc3RPcHRpb25zLCBFdmVudCB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi8uLi9jb21wb25lbnQvVG9hc3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbXMgZXh0ZW5kcyBFdmVudCB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jbGFzcyBWZXJpZmljYXRpb24gZXh0ZW5kcyBSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBTZXJ2aWNlLCBwcm9wczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8qKiDlj5HpgIHor7fmsYIgKi9cclxuICBwdWJsaWMgYXN5bmMgc2VuZChwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5hY3Rpb24oe1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICB1cmw6IHRoaXMuX2FwaSxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJldENvZGUgPT09ICcwMDAwJykge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuY2FsbGJhY2spIHtcclxuICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFRvYXN0LnNob3cocmVzcG9uc2UucmV0TXNnKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZmFpbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9mYWlsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5mYWlsYmFjaykge1xyXG4gICAgICAgIHBhcmFtcy5mYWlsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIFRvYXN0LnNob3coJ+e9kee7nOe5geW/mScpO1xyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcmlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9jb21wb25lbnQvTGluayc7XHJcblxyXG5pbnRlcmZhY2UgUGFyYW1zIHtcclxuICBiZWhhdmlvcjogQmVoYXZpb3I7XHJcbiAgLyoqIOi3r+eUseWKqOS9nOexu+WeiyAqL1xyXG4gIHR5cGU6ICdlbnRlcicgfCAnZXhpdCc7XHJcbiAgLyoqIOW9k+WJjemhtemdoiAqL1xyXG4gIG5vdzogc3RyaW5nO1xyXG4gIC8qKiDliY3lvoDnmoTpobXpnaIgKi9cclxuICB0bzogc3RyaW5nO1xyXG4gIC8qKiDlgZznlZnml7bpl7QgKi9cclxuICBzdGF5dGltZTogbnVtYmVyO1xyXG4gIC8qKiDpobXpnaLov5vlhaXml7bpl7QgKi9cclxuICBlbnRyeXRpbWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGxldCBwcmV2UGFnZU5hbWU6IHN0cmluZyA9ICflpJbpg6jlhaXlj6MnO1xyXG5cclxuLyoqIOmhtemdouemu+W8gOeahOihjOS4uiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTGVhdmUocGFyYW1zOiBQYXJhbXMpOiB2b2lkIHtcclxuICBjb25zdCB7IGJlaGF2aW9yLCB0eXBlLCBub3csIHRvLCBzdGF5dGltZSwgZW50cnl0aW1lIH0gPSBwYXJhbXM7XHJcbiAgY29uc3QgcGFnZU5hbWUgPSBub3c7XHJcbiAgY29uc3QgYWN0aW9uTmFtZSA9IHR5cGUgPT09ICdlbnRlcicgPyAn6L+b5YWlLScgKyB0byA6ICflkI7pgIAtJyArIHRvO1xyXG5cclxuICBiZWhhdmlvci50cmlnZ2VyKHtcclxuICAgIHBhZ2VOYW1lLFxyXG4gICAgYWN0aW9uTmFtZSxcclxuICAgIGRldGFpbGVkRGF0YToge1xyXG4gICAgICBmcm9tOiBwcmV2UGFnZU5hbWUsXHJcbiAgICAgIGJ1dHRvbjogTGluay5idXR0b25cclxuICAgIH0sXHJcbiAgICBzdG9wU2Vjb25kczogc3RheXRpbWUsXHJcbiAgICBlbnRyeXRpbWVcclxuICB9KTtcclxuXHJcbiAgcHJldlBhZ2VOYW1lID0gbm93O1xyXG4gIGJlaGF2aW9yLnBvc3RBY3Rpb24uc2VuZCgpO1xyXG4gIExpbmsuYnV0dG9uID0gdW5kZWZpbmVkO1xyXG59IiwiaW1wb3J0IHlqIGZyb20gJy4uLy4uL3R5cGluZ3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXRhaWxQYXJhbXMge1xyXG4gIEJhbm5lcjoge1xyXG4gICAgLyoqIOWbvueJh+eahGlkICovXHJcbiAgICBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIH07XHJcbiAgQ2FsZW5kYXI6IHtcclxuICAgIC8qKiDpgInmi6nnmoTml6XmnJ8gKi9cclxuICAgIGRhdGU6IHN0cmluZztcclxuICB9O1xyXG4gIEZpbHRlcjoge1xyXG4gICAgLyoqIOWAvCAqL1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIC8qKiDmlofmnKwgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICB9O1xyXG4gIEltZ1ZpZXc6IHtcclxuICAgIC8qKiDlm77niYfnmoRpZCAqL1xyXG4gICAgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICB9O1xyXG4gIExvY2F0aW9uOiB7XHJcbiAgICAvKiog5a6a5L2N5Yiw55qE55yBICovXHJcbiAgICBwcm92aW5jZTogc3RyaW5nO1xyXG4gICAgLyoqIOWumuS9jeWIsOeahOWfjuW4giAqL1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgLyoqIOWumuS9jeWIsOeahOWcsOWMuiAqL1xyXG4gICAgZGlzdHJpY3Q6IHN0cmluZztcclxuICAgIC8qKiDnu4/luqYgKi9cclxuICAgIGxuZzogbnVtYmVyO1xyXG4gICAgLyoqIOe6rOW6piAqL1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgfTtcclxuICBTZWFyY2g6IHtcclxuICAgIC8qKiDmkJzntKLlhoXlrrnnmoTlhbPplK7lrZcgKi9cclxuICAgIGtleXdvcmQ6IHN0cmluZztcclxuICB9O1xyXG4gIFRhYjoge1xyXG4gICAgLyoqIOiiq+eCueWHu+eahOWQjeensCAqL1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgVGVsOiB7XHJcbiAgICAvKiog5ouo5omT55qE55S16K+dICovXHJcbiAgICB0ZWw6IHN0cmluZztcclxuICB9O1xyXG4gIE1hcE5hdmlnYXRpb246IHtcclxuICAgIC8qKiDlr7zoiKropoHljrvnmoTnm67nmoTlnLAgKi9cclxuICAgIGRlc3RpbmF0aW9uOiBzdHJpbmc7XHJcbiAgfTtcclxuICBNYXBNYXJrZXJCZWhhdmlvcjoge1xyXG4gICAgLyoqIOe7j+W6piAqL1xyXG4gICAgbG5nOiBudW1iZXI7XHJcbiAgICAvKiog57qs5bqmICovXHJcbiAgICBsYXQ6IG51bWJlcjtcclxuICB9O1xyXG4gIFZpZGVvOiB7XHJcbiAgICAvKiog6KeG6aKR55qEaWQgKi9cclxuICAgIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgLyoqIOWKqOS9nO+8jOS4gOS4quWKqOivjSAqL1xyXG4gIGFjdGlvbjogc3RyaW5nW107XHJcbiAgLyoqIOe7hOS7tuWQjeensO+8jOeUqOS6jui3n+WKqOS9nOe7hOWQiCAqL1xyXG4gIGNvbXBvbmVudE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNoZWV0IHtcclxuICBba2V5OiBzdHJpbmddOiBPcHRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25OYW1lKG9wdGlvbjogT3B0aW9uLCBhY3Rpb25JbmRleDogbnVtYmVyLCBwcm9wczogeWouQ29tcG9uZW50QmVoYXZpb3IpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBwcm9wcy5jb21wb25lbnROYW1lIHx8IG9wdGlvbi5jb21wb25lbnROYW1lO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50TmFtZSA/IGAke29wdGlvbi5hY3Rpb25bYWN0aW9uSW5kZXhdfS0ke2NvbXBvbmVudE5hbWV9YCA6IGAke29wdGlvbi5hY3Rpb25bYWN0aW9uSW5kZXhdfWA7XHJcbn1cclxuXHJcbmNvbnN0IHNoZWV0ID0ge1xyXG4gIEJ1dHRvbjoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuyddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+aMiemSridcclxuICB9LFxyXG4gIEJhbm5lcjoge1xyXG4gICAgYWN0aW9uOiBbJ+a7keWKqCcsICfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfova7mkq3lm74nXHJcbiAgfSxcclxuICBDYWxlbmRhcjoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuyddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+aXpeWOhidcclxuICB9LFxyXG4gIENvbGxlY3Rpb246IHtcclxuICAgIGFjdGlvbjogWyfmt7vliqAnLCAn5Y+W5raIJ10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5pS26JePJ1xyXG4gIH0sXHJcbiAgRmlsdGVyOiB7XHJcbiAgICBhY3Rpb246IFsn562b6YCJJ10sXHJcbiAgICBjb21wb25lbnROYW1lOiAnJ1xyXG4gIH0sXHJcbiAgSW1nVmlldzoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuyddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+WbvueJhydcclxuICB9LFxyXG4gIExvY2F0aW9uOiB7XHJcbiAgICBhY3Rpb246IFsn5a6a5L2NJ10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5L2N572uJ1xyXG4gIH0sXHJcbiAgU2VhcmNoOiB7XHJcbiAgICBhY3Rpb246IFsn5pCc57SiJ10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5pCc57SiJ1xyXG4gIH0sXHJcbiAgUG9wdXA6IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICflvLnlh7rlsYInXHJcbiAgfSxcclxuICBUYWI6IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfpgInpobnljaEnXHJcbiAgfSxcclxuICBUZWw6IHtcclxuICAgIGFjdGlvbjogWyfmi6jmiZMnXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfnlLXor50nXHJcbiAgfSxcclxuICBNYXBDb250cm9sOiB7XHJcbiAgICBhY3Rpb246IFsn54K55Ye7Lee8qeWwjycsICfngrnlh7st5pS+5aSnJywgJ+eCueWHuy3lm57liLDkuK3lv4PngrknXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICcnXHJcbiAgfSxcclxuICBNYXBOYXZpZ2F0aW9uOiB7XHJcbiAgICBhY3Rpb246IFsn54K55Ye7J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5a+86IiqJ1xyXG4gIH0sXHJcbiAgTWFwTWFya2VyQmVoYXZpb3I6IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfmoIfms6gnXHJcbiAgfSxcclxuICBWaWRlbzoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuyddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+inhumikSdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGVldCBhcyBTaGVldDsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5jb25zdCBzeXN0ZW06ICdhbmRyb2lkJyB8ICdpb3MnID0gISF1c2VyQWdlbnQubWF0Y2goL1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8pID8gJ2lvcycgOiAnYW5kcm9pZCc7XHJcblxyXG5mdW5jdGlvbiBnZXRDaHJvbWVWZXJzaW9uKCk6IG51bWJlciB7XHJcbiAgY29uc3QgYXJyID0gdXNlckFnZW50LnNwbGl0KCcgJyk7XHJcbiAgbGV0IGNocm9tZVZlcnNpb24gPSAnJztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICgvY2hyb21lL2kudGVzdChhcnJbaV0pKSB7XHJcbiAgICAgIGNocm9tZVZlcnNpb24gPSBhcnJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY2hyb21lVmVyc2lvbikge1xyXG4gICAgcmV0dXJuIE51bWJlcihjaHJvbWVWZXJzaW9uLnNwbGl0KCcvJylbMV0uc3BsaXQoJy4nKVswXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW9zVmVyc2lvbigpOiBudW1iZXIge1xyXG4gIGNvbnN0IHN0ciA9IHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IHZlciA9IHN0ci5tYXRjaCgvY3B1IGlwaG9uZSBvcyAoLio/KSBsaWtlIG1hYyBvcy8pO1xyXG5cclxuICByZXR1cm4gdmVyID8gTnVtYmVyKHZlclsxXS5yZXBsYWNlKC9fL2csICcuJykpIDogMDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiAwLFxyXG4gIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IDAsXHJcbiAgdXNlckFnZW50LFxyXG4gIHN5c3RlbSxcclxuICB2ZXJzaW9uOiBzeXN0ZW0gPT09ICdpb3MnID8gZ2V0SW9zVmVyc2lvbigpIDogZ2V0Q2hyb21lVmVyc2lvbigpXHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbmV4cG9ydHMub3RoZXIgPSB7XHJcbiAgICB2ZXJzaW9uOiBwcm9jZXNzLmVudi52ZXJzaW9uLFxyXG4gICAgb3V0cHV0RGlyOiBwcm9jZXNzLmVudi5vdXRwdXREaXIsXHJcbiAgICBwdWJsaWNQYXRoOiBwcm9jZXNzLmVudi5wdWJsaWNQYXRoLFxyXG4gICAgaGlzdG9yeU1vZGU6IHByb2Nlc3MuZW52Lmhpc3RvcnlNb2RlXHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGVudjtcclxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuL3VybHNlYXJjaHBhcmFtcyc7XHJcblxyXG4vKiog6I635Y+W5piv5ZCm5bey5YWz5rOoICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldElzU3Vic2NyaWJlKCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHVybHNlYXJjaHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gIGNvbnN0IGlzU3Vic2NyaWJlID0gdXJsc2VhcmNocGFyYW1zLmdldCgnaXNTdWJzY3JpYmUnKSB8fCAgdXJsc2VhcmNocGFyYW1zLmdldCgnP2lzU3Vic2NyaWJlJykgfHwgdXJsc2VhcmNocGFyYW1zLmdldCgnJTNGaXNTdWJzY3JpYmUnKSB8fCB1cmxzZWFyY2hwYXJhbXMuZ2V0KCclM2Zpc1N1YnNjcmliZScpO1xyXG5cclxuICByZXR1cm4gaXNTdWJzY3JpYmUgPyAoaXNTdWJzY3JpYmUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSkgOiBmYWxzZTtcclxufSIsImludGVyZmFjZSBFeHRlbmRzV2lub2R3IGV4dGVuZHMgV2luZG93IHtcclxuICByb3V0ZTogc3RyaW5nO1xyXG4gIGZvcndhcmQ6IHN0cmluZztcclxufVxyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IEV4dGVuZHNXaW5vZHc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb3V0ZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICBjb25zdCB1cmxwID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCByb3V0ZUtleSA9IHVybHAuZ2V0KCdyb3V0ZScpIHx8ICB1cmxwLmdldCgnP3JvdXRlJykgfHwgdXJscC5nZXQoJyUzRnJvdXRlJykgfHwgdXJscC5nZXQoJyUzZnJvdXRlJykgfHwgd2luZG93LnJvdXRlO1xyXG4gIGNvbnN0IGZvcndhcmQgPSB1cmxwLmdldCgnZm9yd2FyZCcpIHx8ICB1cmxwLmdldCgnP2ZvcndhcmQnKSB8fCB1cmxwLmdldCgnJTNGZm9yd2FyZCcpIHx8IHVybHAuZ2V0KCclM2Zmb3J3YXJkJykgfHwgd2luZG93LmZvcndhcmQ7XHJcblxyXG4gIHJldHVybiByb3V0ZUtleSB8fCBmb3J3YXJkO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGV4VG9TdHJpbmcoaGV4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGFyciA9IGhleC5zcGxpdCgnJyk7XHJcbiAgbGV0IG91dCA9ICcnO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLyAyOyBpKyspIHtcclxuICAgIGNvbnN0IHRtcCA9IHBhcnNlSW50KCcweCcgKyBhcnJbaSAqIDJdICsgYXJyW2kgKiAyICsgMV0sIDE2KTtcclxuICAgIGNvbnN0IGNoYXJWYWx1ZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodG1wKTtcclxuXHJcbiAgICBvdXQgKz0gY2hhclZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChvdXQpO1xyXG59IiwiaW1wb3J0ICogYXMgSGlzdG9yeSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IGdldFJvdXRlIGZyb20gJy4vZ2V0Um91dGUnO1xyXG5pbXBvcnQgaGV4VG9TdHJpbmcgZnJvbSAnLi9oZXhUb1N0cmluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaXN0b3J5UmVwbGFjZShjdXN0b21Sb3V0ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHJcbiAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ6Lev55Sx77yM5LyY5YWI6Lez6L2s6Ieq5a6a5LmJ6Lev55SxXHJcbiAgaWYgKGN1c3RvbVJvdXRlKSB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gcHJvY2Vzcy5lbnYuaGlzdG9yeU1vZGUgPT09ICdicm93c2VyJyA/ICBIaXN0b3J5LmNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBIaXN0b3J5LmNyZWF0ZUhhc2hIaXN0b3J5KCk7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2UoY3VzdG9tUm91dGUpO1xyXG4gIH0gZWxzZSBpZiAoIWhhc2gpIHtcclxuICAgIC8qXHJcbiAgICAqIOWmguaenGhhaHPkuI3lrZjlnKjlsLHku6PooajmmK/ku47liIbkuqvpk77mjqXov5vmnaXnmoTmiJbmmK/ku47lhaXlj6Pov5vlhaXliLDpppbpobVcclxuICAgICog5aaC5p6c5piv5LuO5YiG5Lqr6L+b5p2l55qE77yM56ys5LiA5qyh5Lya5LuOcm91dGXlj4LmlbDov5vlhaXot7PovazvvIzlkI7pnaLlho3liLfmlrDlsLHkuI3kvJrlho3or7vlj5Zyb3V0ZeWPguaVsO+8jOWPr+S7pemYsuatouWIt+aWsOWQjuWbnuWIsOWIhuS6q+i/m+adpeeahOmhtemdolxyXG4gICAgKi9cclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0Um91dGUoKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBwcm9jZXNzLmVudi5oaXN0b3J5TW9kZSA9PT0gJ2Jyb3dzZXInID8gIEhpc3RvcnkuY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSA6IEhpc3RvcnkuY3JlYXRlSGFzaEhpc3RvcnkoKTtcclxuXHJcbiAgICBpZiAocm91dGUpIHtcclxuICAgICAgaGlzdG9yeS5yZXBsYWNlKGhleFRvU3RyaW5nKHJvdXRlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLyoqIOeugOWNleeahOWIpOaWremdnuepuiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSAnJyk7XHJcbiAgfVxyXG59IiwiLyoqIHVybOaYr+WQpuaYr2h0dHDljY/orq4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNIdHRwKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHVybC5pbmRleE9mKCdodHRwOi8vJykgID49IDAgfHwgdXJsLmluZGV4T2YoJ2h0dHBzOi8vJykgPj0gMCB8fCB1cmwuaW5kZXhPZignLi8nKSA+PSAwIHx8IHVybC5pbmRleE9mKCcuLi8nKSA+PSAwO1xyXG59IiwiaW1wb3J0IGRldmljZSBmcm9tICcuL2RldmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXREb2N1bWV0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gIGlmICghdGl0bGUpIHtcclxuICAgIGNvbnNvbGUud2Fybign5qCH6aKY5Li656m677yM6K+36K6+572uUGFnZS5wYWdlTmFtZScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRldmljZS5zeXN0ZW0gPT09ICdpb3MnKSB7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGlmcmFtZS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG4gICAgaWZyYW1lLnNyYyA9ICdodHRwczovL3dhcC55dWVqaWExMDAuY24vY2hhbmdlVGl0bGUuaHRtbCc7XHJcbiAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdUb0hleChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgYXJyID0gW107XHJcbiAgY29uc3QgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAg44CAYXJyW2ldID0gKGVuY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFyci5qb2luKCcnKTtcclxufSIsImNvbnN0IHB1YmxpY1BhdGggPSBwcm9jZXNzLmVudi5wdWJsaWNQYXRoO1xyXG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYudmVyc2lvbjtcclxuY29uc3Qgc3ZnUm9vdFBhdGggPSBwdWJsaWNQYXRoICsgYHN2Zy9zcHJpdGVfJHt2ZXJzaW9ufS5zdmcjYDtcclxuXHJcbi8qKiBzdmfmlofku7bmoLnot6/lvoQgKi9cclxuZXhwb3J0IGRlZmF1bHQgc3ZnUm9vdFBhdGg7IiwibGV0IFNlYXJjaFBhcmFtczogV2luZG93WydVUkxTZWFyY2hQYXJhbXMnXTtcclxuLy8gSU9T5LiK55u05o6l5L2/55SoVVJMU2VhcmNoUGFyYW1z5Y+v6IO95Lya5Ye66ZSZXHJcbnRyeSB7XHJcbiAgU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zIHx8IHJlcXVpcmUoJ3VybC1zZWFyY2gtcGFyYW1zJykgYXMgV2luZG93WydVUkxTZWFyY2hQYXJhbXMnXTtcclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMnKSBhcyBXaW5kb3dbJ1VSTFNlYXJjaFBhcmFtcyddO1xyXG59XHJcblxyXG53aW5kb3cuVVJMU2VhcmNoUGFyYW1zID0gU2VhcmNoUGFyYW1zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFyYW1zOyIsImNvbnN0IHBhdHRlcm4gPSB7XHJcbiAgLyoqIOepuuagvCAqL1xyXG4gIHNwYWNlOiAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXHJcbiAgLyoqIOaVsOWtlyAqL1xyXG4gIG51bWJlcjogL15cXGQrJC8sXHJcbiAgLyoqIOWkp+WGme+8jOWwj+WGme+8jOaVsOWtl+WPiueJueauiuWtl+espiAqL1xyXG4gIGNoYXI6IC8oKD89W1xceDIxLVxceDdlXSspW15BLVphLXowLTldKS8sXHJcbiAgLyoqIOWnk+WQjSAqL1xyXG4gIG5hbWU6IC9eW1xcdTRlMDAtXFx1OWZhNV17MSwyMH0kLyxcclxuICAvKiog5omL5py65Y+3ICovXHJcbiAgdGVsOiAvXigxXFxkezJ9fDg1Mnw4NTN8ODMyKVxcZHs4fSR8Xjg4NlxcZHs5LDEwfSQvLFxyXG4gIC8qKiDluqfmnLrlj7cgKi9cclxuICBsYW5kbGluZTogL14oKDBcXGR7MiwzfSktKShcXGR7Nyw4fSkoLShcXGR7MSwzfSkpPyQvLFxyXG4gIC8qKiDph5Hpop0gKi9cclxuICBwcmljZTogL15bMC05XSsoLlswLTldezEsMn0pPyQvLFxyXG4gIC8qKiDmraPmlbAgKi9cclxuICBpbnRlZ2VyOiAvXigtfFxcKyk/XFxkKyQvLFxyXG4gIC8qKiDouqvku73or4Hlj7cgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgaWRjYXJkOiAvXigoMVsxLTVdKXwoMlsxLTNdKXwoM1sxLTddKXwoNFsxLTZdKXwoNVswLTRdKXwoNlsxLTVdKXw3MXwoOFsxMl0pfDkxKVxcZHs0fSgoMTlcXGR7Mn0oMFsxMy05XXwxWzAxMl0pKDBbMS05XXxbMTJdXFxkfDMwKSl8KDE5XFxkezJ9KDBbMTM1NzhdfDFbMDJdKTMxKXwoMTlcXGR7Mn0wMigwWzEtOV18MVxcZHwyWzAtOF0pKXwoMTkoWzEzNTc5XVsyNl18WzI0NjhdWzA0OF18MFs0OF0pMDIyOSkpXFxkezN9KFxcZHxYfHgpPyQvLFxyXG4gIC8vIC8qKiBlbW9qaSAqL1xyXG4gIGVtb2ppOiAvXFx1ZDgzY1tcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2RbXFx1ZGMwMC1cXHVkZTRmXXxcXHVkODNkW1xcdWRlODAtXFx1ZGVmZl0vZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKiDnqbrmoLwgKi9cclxuICAvLyBzcGFjZTogL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFxyXG4gIC8vIC8qKiDmlbDlrZcgKi9cclxuICAvLyBudW1iZXI6IC9eXFxkKyQvLFxyXG4gIC8vIC8qKiDlpKflhpnvvIzlsI/lhpnvvIzmlbDlrZflj4rnibnmrorlrZfnrKYgKi9cclxuICAvLyBjaGFyOiAvKCg/PVtcXHgyMS1cXHg3ZV0rKVteQS1aYS16MC05XSkvLFxyXG4gIC8qKiDlp5PlkI0gKi9cclxuICBuYW1lOiAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLm5hbWUpO1xyXG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuICB9LFxyXG4gIC8qKiDmiYvmnLrlj7cgKi9cclxuICB0ZWw6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4udGVsKTtcclxuICAgIHJldHVybiByZWdleHAudGVzdCh2YWx1ZSk7XHJcbiAgfSxcclxuICAvLyAvKiog5bqn5py65Y+3ICovXHJcbiAgLy8gbGFuZGxpbmU6IC9eKCgwXFxkezIsM30pLSkoXFxkezcsOH0pKC0oXFxkezEsM30pKT8kLyxcclxuICAvLyAvKiog6YeR6aKdICovXHJcbiAgLy8gcHJpY2U6IC9eWzAtOV0rKC5bMC05XXsxLDJ9KT8kLyxcclxuICAvKiog5q2j5pWwICovXHJcbiAgaW50ZWdlcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybi5pbnRlZ2VyKTtcclxuICAgIHJldHVybiByZWdleHAudGVzdCh2YWx1ZSk7XHJcbiAgfSxcclxuICAvKiog6Lqr5Lu96K+B5Y+3ICovXHJcbiAgaWRjYXJkOiAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLmlkY2FyZCk7XHJcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG4gIH0sXHJcbiAgLy8gLyoqIGVtb2ppICovXHJcbiAgLy8gZW1vamk6IC9cXHVkODNjW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzZFtcXHVkYzAwLVxcdWRlNGZdfFxcdWQ4M2RbXFx1ZGU4MC1cXHVkZWZmXS9nXHJcbn07IiwiaW1wb3J0IGRldmljZSBmcm9tICcuL2RldmljZSc7XHJcbmltcG9ydCBQYWdlU3RhY2sgZnJvbSAnLi4vY29tcG9uZW50L1BhZ2VTdGFjayc7XHJcblxyXG5mdW5jdGlvbiBlbGVtZW50SXNWaXNpYmxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgcmV0dXJuIHRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gd2luZG93LnBhZ2VZT2Zmc2V0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCA+IHRvcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxlbWVudENlbnRlT25QYWdlKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KTogbnVtYmVyIHtcclxuICBjb25zdCBzdGFja0NvbXBvbmVudCA9IFBhZ2VTdGFjay5nZXRTdGFja0NvbXBvbmVudCgpO1xyXG4gIGxldCB0b3RhbEhlaWdodCA9IDA7XHJcblxyXG4gIGlmIChzdGFja0NvbXBvbmVudCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IHN0YWNrQ29tcG9uZW50LnBhZ2VFbGVtUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSByb290LmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkICE9PSBlbGVtZW50ICYmIGVsZW1lbnRJc1Zpc2libGUoY2hpbGQgYXMgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdG90YWxIZWlnaHQgKz0gY2hpbGQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGV2aWNlLmhlaWdodCAtIHRvdGFsSGVpZ2h0O1xyXG59IiwiaW1wb3J0IGVudiBmcm9tICd5dWVqaWEvdXRpbHMvZW52JztcclxuaW1wb3J0IGdldElzU3Vic2NyaWJlIGZyb20gJ3l1ZWppYS91dGlscy9nZXRJc1N1YnNjcmliZSc7XHJcblxyXG4vLyDlkI7nq6/lnKjpobXpnaLkuIrms6jlhaXnmoTlj5jph49cclxuaW50ZXJmYWNlIEV4dGVuZFdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgLyoqIOaYr+WQpueZu+W9lSAqL1xyXG4gIGlzTG9naW46IGJvb2xlYW47XHJcbiAgLyoqIOW+ruS/oemFjee9rmlkICovXHJcbiAgd3hDb25maWdJZDogc3RyaW5nO1xyXG4gIC8qKiDnmbvlvZXpobXpnaLnmoR1cmwgKi9cclxuICBsb2dpblVSTDogc3RyaW5nO1xyXG4gIC8qKiDnmbvlvZXpobXpnaLnmoTlm57osIMgKi9cclxuICBsb2dpbkNhbGxCYWNrOiBzdHJpbmc7XHJcbiAgLyoqIOeUqOaIt+e8k+WtmGlkICovXHJcbiAgdXNlckNhY2hlSWQ6IHN0cmluZztcclxuICAvKiog5b6u5L+h55qEYXBwaWQgKi9cclxuICBhcHBJZDogc3RyaW5nO1xyXG4gIC8qKiDlvq7kv6HnmoR0aWNrZXQgKi9cclxuICB0aWNrZXQ6IHN0cmluZztcclxuICAvKiog5b6u5L+h55So5oi355qEb3BlbklkICovXHJcbiAgb3BlbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBFeHRlbmRXaW5kb3c7XHJcbi8qKiDlvq7kv6HnmoR0aWNrZXQgKi9cclxuY29uc3QgdGlja2V0ID0gd2luZG93LnRpY2tldDtcclxuLyoqIOW+ruS/oeeahGFwcGlkICovXHJcbmNvbnN0IGFwcElkID0gd2luZG93LmFwcElkO1xyXG4vKiog5b6u5L+h55So5oi355qEb3BlbklkICovXHJcbmNvbnN0IG9wZW5JZCA9IHdpbmRvdy5vcGVuSWQ7XHJcbi8qKiDlvq7kv6HphY3nva5pZCAqL1xyXG5jb25zdCB3eENvbmZpZ0lkID0gd2luZG93Lnd4Q29uZmlnSWQ7XHJcbi8qKiDnmbvlvZXnirbmgIEgKi9cclxuY29uc3QgbG9naW5TdGF0ZSA9IHdpbmRvdy5pc0xvZ2luO1xyXG4vKiog55So5oi357yT5a2YaWQgKi9cclxuY29uc3QgdXNlckNhY2hlSWQgPSB3aW5kb3cudXNlckNhY2hlSWQ7XHJcbi8qKiDooYzkuLrorrDlvZXlj5HpgIHnmoRhcGkgKi9cclxuY29uc3QgYmVoYXZpb3JBcGkgPSAnJztcclxuLyoqIOW+ruS/oeWIhuS6q+eahOm7mOiupOagh+mimCAqL1xyXG5jb25zdCBzaGFyZVRpdGxlID0gJyc7XHJcbi8qKiDlvq7kv6HliIbkuqvnmoTpu5jorqTmj4/ov7AgKi9cclxuY29uc3Qgc2hhcmVEZXNjID0gJyc7XHJcbi8qKiDnlKjmiLfkv6Hmga/lnKhzdG9yYWdl5YKo5a2Y55qEa2V5ICovXHJcbmNvbnN0IHN0b3JhZ2VLZXkgPSAnJztcclxuLyoqIOWFs+azqOeKtuaAgSAqL1xyXG5jb25zdCBzdWJzY3JpYmVTdGF0ZSA9IGdldElzU3Vic2NyaWJlKCk7XHJcbi8qKiDliIbkuqvpk77mjqXnmoTliY3nvIDvvIznlKjkuo7mi7zmjqXlvZPliY3pobXpnaLnmoTot6/nlLEgKi9cclxubGV0IHNoYXJlTGluayE6ICgpID0+IHN0cmluZztcclxuLyoqIOe9kee7nOivt+axgueahOWcsOWdgOWJjee8gCAqL1xyXG5sZXQgYmFzZVVSTCA9ICcnO1xyXG4vKiog5Zu+54mH5Zyw5Z2A55qE5YmN57yAICovXHJcbmxldCBpbWdIb3N0ID0gJyc7XHJcblxyXG5zd2l0Y2ggKGVudikge1xyXG4gIC8vIOeUn+S6p+eOr+Wig+eahOmFjee9rlxyXG4gIGNhc2UgJ3Byb2R1Y3Rpb24nOlxyXG4gICAgYmFzZVVSTCA9ICcnO1xyXG4gICAgaW1nSG9zdCA9ICcnO1xyXG4gICAgYnJlYWs7XHJcbiAgLy8g6aKE5Y+R5biD546v5aKD55qE6YWN572uXHJcbiAgY2FzZSAncHJlcmVsZWFzZSc6XHJcbiAgICBiYXNlVVJMID0gJyc7XHJcbiAgICBpbWdIb3N0ID0gJyc7XHJcbiAgICBzaGFyZUxpbmsgPSAoKSA9PiAnJztcclxuICAgIGJyZWFrO1xyXG4gIC8vIOW8gOWPkeeOr+Wig+eahOmFjee9rlxyXG4gIGRlZmF1bHQ6XHJcbiAgICBiYXNlVVJMID0gJyc7XHJcbiAgICBpbWdIb3N0ID0gJyc7XHJcbiAgICBzaGFyZUxpbmsgPSAoKSA9PiAnJztcclxuICAgIGJyZWFrO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8g5bqU55So6ZyA6KaB55qE5Y+Y6YePXHJcbiAgYXBwOiB7XHJcbiAgICB3eENvbmZpZ0lkLFxyXG4gICAgdXNlckNhY2hlSWQsXHJcbiAgICBpbWdIb3N0LFxyXG4gICAgYmFzZVVSTCxcclxuICB9LFxyXG4gIC8vIOW4kOaIt+ezu+e7n+mcgOimgeeahOWPmOmHj1xyXG4gIGFjY291bnQ6IHtcclxuICAgIHVzZXJDYWNoZUlkLFxyXG4gICAgc3RvcmFnZUtleSxcclxuICAgIGxvZ2luU3RhdGUsXHJcbiAgICBzdWJzY3JpYmVTdGF0ZSxcclxuICB9LFxyXG4gIC8vIOW+ruS/oemcgOimgeeahOWPmOmHj1xyXG4gIHd4OiB7XHJcbiAgICBvcGVuSWQsXHJcbiAgICBhcHBJZCxcclxuICAgIHRpY2tldCxcclxuICAgIHNoYXJlVGl0bGUsXHJcbiAgICBzaGFyZURlc2MsXHJcbiAgICBzaGFyZUxpbmssXHJcbiAgfSxcclxuICAvLyDooYzkuLrnu5/orqHpnIDopoHnmoTlj5jph49cclxuICBiZWhhdmlvcjoge1xyXG4gICAgYXBpOiBiZWhhdmlvckFwaSxcclxuICB9XHJcbn07IiwiLy8gaW1wb3J0IGltZ0ZpbGVzIGZyb20gJy4vX2ltZ0ZpbGVzJztcclxuLy8gaW1wb3J0IHN2Z0ZpbGVzIGZyb20gJy4vX3N2Z0ZpbGVzJztcclxuaW1wb3J0IHZhcmlhYmxlIGZyb20gJy4vX3ZhcmlhYmxlJztcclxuLy8gaW1wb3J0IHN0eWxlIGZyb20gJy4vX3N0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBpbWdGaWxlcyxcclxuICAvLyBzdmdGaWxlcyxcclxuICB2YXJpYWJsZSxcclxuICAvLyBzdHlsZVxyXG59OyIsImltcG9ydCB5aiBmcm9tICd5dWVqaWEvdHlwaW5ncyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBnbG9iYWwgZnJvbSAneXVlamlhL2FwcC9nbG9iYWwnO1xyXG4vLyBpbXBvcnQgUGFnZVN0YWNrIGZyb20gJ3l1ZWppYS9jb21wb25lbnQvUGFnZVN0YWNrJztcclxuLy8gaW1wb3J0IE1vZGVsLCB7IENvbnRleHQgfSBmcm9tICd5dWVqaWEvY29tcG9uZW50L01vZGVsJztcclxuaW1wb3J0IEltZ1ZpZXcgZnJvbSAneXVlamlhL2NvbXBvbmVudC9JbWdWaWV3JztcclxuaW1wb3J0IHsgV2VpWGluIH0gZnJvbSAneXVlamlhL2FwcC93ZWl4aW4nO1xyXG4vLyBpbXBvcnQgQmVoYXZpb3IgZnJvbSAneXVlamlhL21vZGVsL2JlaGF2aW9yJztcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAneXVlamlhL2FwcC9yZXF1ZXN0JztcclxuLy8gaW1wb3J0IG1vZGVsIGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi92aWV3L2NvbXBvbmVudHMvQ29udGFjdCc7XHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAneXVlamlhL2NvbXBvbmVudC9Qb3B1cC9CdXR0b24nO1xyXG4vLyBpbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXcvcGFnZXMvSG9tZS9pbmRleCc7XHJcblxyXG5nbG9iYWwucm91dGVzID0gW1xyXG4gIC8vIDxSb3V0ZSBleGFjdCBrZXk9XCLpobXpnaLlkI3np7BcIiBwYXRoPVwi6Lev55SxXCIgY29tcG9uZW50PXtIb21lfSAvPixcclxuXTtcclxuXHJcbmdsb2JhbC5hcHBSb3V0ZSA9IChwcm9wczogeWouUGFnZVByb3BzPGFueT4pID0+IChcclxuICA8U3dpdGNoIGxvY2F0aW9uPXtwcm9wcy5sb2NhdGlvbn0+XHJcbiAgICB7Z2xvYmFsLnJvdXRlc31cclxuICA8L1N3aXRjaD5cclxuKTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnk+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy52YXJpYWJsZS5hcHAuYmFzZVVSTDtcclxuICAgIEltZ1ZpZXcuZGVmYXVsdEhvc3QgPSBjb25maWcudmFyaWFibGUuYXBwLmltZ0hvc3Q7XHJcbiAgICAvLyDooYzkuLrorrDlvZXpnIDopoHluJDmiLfns7vnu5/nmoTmlbDmja7mqKHlnotcclxuICAgIC8vIEJlaGF2aW9yLm9wdGlvbnMgPSB7XHJcbiAgICAvLyAgIC4uLmNvbmZpZy52YXJpYWJsZS5iZWhhdmlvcixcclxuICAgIC8vICAgYWNjb3VudDogbW9kZWwuYWNjb3VudFxyXG4gICAgLy8gfTtcclxuICAgIFJlcXVlc3QuZGVmYXVsdERhdGEgPSB7XHJcbiAgICAgIHVzZXJDYWNoZUlkOiBjb25maWcudmFyaWFibGUuYXBwLnVzZXJDYWNoZUlkLFxyXG4gICAgICB3eENvbmZpZ0lkOiBjb25maWcudmFyaWFibGUuYXBwLnd4Q29uZmlnSWRcclxuICAgIH07XHJcbiAgICBSZXF1ZXN0LmRlZmF1bHRQYXJhbXMgPSB7XHJcbiAgICAgIHVzZXJDYWNoZUlkOiBjb25maWcudmFyaWFibGUuYXBwLnVzZXJDYWNoZUlkLFxyXG4gICAgICB3eENvbmZpZ0lkOiBjb25maWcudmFyaWFibGUuYXBwLnd4Q29uZmlnSWRcclxuICAgIH07XHJcbiAgICBXZWlYaW4ub3B0aW9ucyA9IGNvbmZpZy52YXJpYWJsZS53eDtcclxuXHJcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgIC8vIGlmIChtb2RlbC5hY2NvdW50LmdldFJlcXVlc3QpIHtcclxuICAgIC8vICAgbW9kZWwuYWNjb3VudC5nZXRSZXF1ZXN0LnNlbmQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDxNb2RlbD5cclxuICAgICAgLy8gICB7KHZhbHVlKSA9PiAoXHJcbiAgICAgIC8vICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAvLyAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgLy8gICAgICAgICA8UGFnZVN0YWNrIC8+XHJcbiAgICAgIC8vICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAvLyAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgIC8vICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIC8vICAgKX1cclxuICAgICAgLy8gPC9Nb2RlbD5cclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxDb250YWN0Lz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjb21wb25lbnRcIjpcImNvbXBvbmVudF8yQmhWTlwifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuL2luZGV4LnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xufVxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZnVuY05hbWU6IHN0cmluZ1tdO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb2Zlc3Npb246IHN0cmluZztcbiAgdGVsOiBzdHJpbmc7XG59XG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgc3VwZXIocHJvcHMsIHN0YXRlKTtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGZ1bmNOYW1lOiBbJ+epuuS4realvOebmCcsICdWUueci+aIvycsICfmiL/otLforqHnrpflmagnLCAn5LiT5bGe5pyN5YqhJ10sXG4gICAgICBuYW1lOiAn5byg576O546yJyxcbiAgICAgIHByb2Zlc3Npb246ICfnva7kuJrpob7pl64nLFxuICAgICAgdGVsOiAnMTM4IDk4ODkgODc0MydcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgLy8gY29uc3QgeyBmdW5jTmFtZSwgbmFtZSwgcHJvZmVzc2lvbiwgdGVsIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29tcG9uZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jXCI+XG4gICAgICAgICAgPGRsPlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mdW5jTmFtZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGR0PjxpLz48L2R0PlxuICAgICAgICAgICAgICAgIDxkZD50aGlzIGlzIGEgdGV4dCA8L2RkPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgPC9kbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZHQ+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMuc3RhdGUubmFtZX08L3N0cm9uZz48c3Bhbj50aGlzLnN0YXRlLnByb2Zlc3Npb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kdD5cbiAgICAgICAgICAgICAgICA8ZHQ+5qW855uY5Lu35qC85LyY5oOg77yM6K+36IGU57O75oiRPC9kdD5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInFyY29kZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAneXVlamlhL3N0eWxlL2Jhc2Uuc2Nzcyc7XHJcbmltcG9ydCAneXVlamlhL3N0eWxlL21peGlucy5zY3NzJztcclxuaW1wb3J0ICd5dWVqaWEvc3R5bGUvdmFyaWFibGUuc2Nzcyc7XHJcbmltcG9ydCAneXVlamlhL3V0aWxzL3VybHNlYXJjaHBhcmFtcyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3Byb21pc2UnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL2xhdW5jaGVyJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFJvb3QnKVxyXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjOyJdLCJzb3VyY2VSb290IjoiIn0=