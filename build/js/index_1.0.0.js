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
// import Nav from './view/pages/Nav';
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_view_components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], { funcName: ['空中楼盘', 'VR看房', '房贷计算器', '专属服务'], name: "\u5F20\u7F8E\u73B2", profession: "\u7F6E\u4E1A\u987E\u95EE", tel: "138 9889 8743" })));
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
module.exports = {"component":"component_2BhVN","background":"background_XGouM","buildingImg":"buildingImg_1f6Rd","buildingInfo":"buildingInfo_bZHeH","tag":"tag_2rJRg","buildingPrice":"buildingPrice_1U0HY","priceImg":"priceImg_2O7Gs","buidlingT":"buidlingT_GEBqy","buildingN":"buildingN_3Mouz","buildingU":"buildingU_dcS2J","func":"func_3AGS1","icon1":"icon1_OS568","icon2":"icon2_ZwgxH","icon3":"icon3_p750-","icon4":"icon4_3hoaH","footer":"footer_2dXLA","contact":"contact_1qMou","people":"people_2c1Q2","peoImg":"peoImg_AhAzz","info":"info_38lSx","tel":"tel_3o5NL","profession":"profession_1qciU","qrcode":"qrcode_2UlDQ"};

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
/* harmony import */ var yuejia_component_ImgView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yuejia/component/ImgView */ "./node_modules/yuejia/component/ImgView/index.tsx");
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
        return _super.call(this, props, state) || this;
    }
    Contact.prototype.render = function () {
        var _a = this.props, funcName = _a.funcName, name = _a.name, profession = _a.profession, tel = _a.tel;
        console.log(funcName);
        console.log(name);
        console.log(profession);
        console.log(tel);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["component"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["background"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](yuejia_component_ImgView__WEBPACK_IMPORTED_MODULE_2__["default"], { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingImg"], completeView: "/src/assets/img/building.png" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingInfo"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "\u4FDD\u5229\u6C5F\u4E0A\u660E\u73E0"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["tag"] }, "\u9AD8\u7AEF\u4F4F\u5B85"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["tag"] }, "\u54C1\u724C\u623F\u4F01"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["tag"] }, "\u592E\u4F01\u7269\u4E1A"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["tag"] }, "\u666F\u89C2\u623F"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u697C\u76D8\u5730\u5740\uFF1A"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u91CD\u5E86\u5E02/\u4E5D\u9F99\u6CE2\u533A/\u4FDD\u5229\u6C5F\u4E0A\u660E\u73E0\u552E\u697C\u4E2D\u5FC3")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingPrice"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](yuejia_component_ImgView__WEBPACK_IMPORTED_MODULE_2__["default"], { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["priceImg"], completeView: "/src/assets/img/back.png" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buidlingT"] }, "\u5747\u4EF7"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingN"] }, "11111"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingU"] },
                            "\u4E07m",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sup", null, "2"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buidlingT"] }, "\u5360\u5730\u9762\u79EF"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingN"] }, "11111"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingU"] },
                            "\u4E07m",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sup", null, "2"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buidlingT"] }, "\u5EFA\u7B51\u9762\u79EF"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingN"] }, "11111"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["buildingU"] },
                            "\u4E07m",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sup", null, "2"))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["func"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["icon1"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { color: '#759dff' } }, "\u7A7A\u4E2D\u770B\u623F")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["icon2"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { color: '#fcad15' } }, "VR\u770B\u623F")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["icon3"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { color: '#74c665' } }, "\u623F\u8D37\u8BA1\u7B97\u5668")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["icon4"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { color: '#fe6f6f' } }, "\u4E13\u5C5E\u670D\u52A1")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["footer"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["contact"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["people"] },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: "/src/assets/img/peo.png", className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["peoImg"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["info"] },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, name),
                            "\u00A0",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["profession"] }, profession),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["tel"] }, tel)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u697C\u76D8\u4EF7\u683C\u4F18\u60E0\uFF0C\u8BF7\u8054\u7CFB\u6211\uFF01")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: _index_scss__WEBPACK_IMPORTED_MODULE_1__["qrcode"], src: "src/assets/img/qrcode.png" })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXM2L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lczYvc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtc3Vic2NyaXB0aW9uL2Nqcy9jcmVhdGUtc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtc3Vic2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2Nqcy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTmF2TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvTWVtb3J5Um91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbnktaW52YXJpYW50L2Rpc3QvdGlueS1pbnZhcmlhbnQuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXdhcm5pbmcvZGlzdC90aW55LXdhcm5pbmcuY2pzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zL2J1aWxkL3VybC1zZWFyY2gtcGFyYW1zLm5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9fYmFzZS9kYXRhdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL19iYXNlL3NlcnZpY2UvZmllbGRzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL2RhdGF0eXBlL29iQXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvZGF0YXR5cGUvb2JPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL3JlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9hcHAvd2VpeGluL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXBwL3dlaXhpbi9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL2ZhaWwuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL2xvYWRpbmcuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvYXNzZXRzL3N1Y2Nlc3Muc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0Zvcm0vc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9JY29uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvSWNvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvSW1nVmlldy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0ltZ1ZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L0lucHV0L3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvTW9kZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1BhZ2VTdGFjay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0F1dG9IZWlnaHQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9Db21wbGV0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0VtcHR5LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9TdGF0ZU1hY2hpbmUvRmFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVNYWNoaW5lL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1N0YXRlTWFjaGluZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvU3RhdGVWaWV3L0xvYWRpbmcvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL2NvbXBvbmVudC9TdGF0ZVZpZXcvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvVG9hc3QvVG9hc3QudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvY29tcG9uZW50L1RvYXN0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9jb21wb25lbnQvVG9hc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9nZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9wb3N0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYWNjb3VudC9yZWdpc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL21vZGVsL2FjY291bnQvcmVzZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L3NhdmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9tb2RlbC9hY2NvdW50L3NpZ25pbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL21vZGVsL2FjY291bnQvdmVyaWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYmVoYXZpb3IvcGFnZUxlYXZlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvbW9kZWwvYmVoYXZpb3Ivc2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9zdHlsZS9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS9zdHlsZS9taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3N0eWxlL3ZhcmlhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9nZXRJc1N1YnNjcmliZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL2dldFJvdXRlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvaGV4VG9TdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9oaXN0b3J5UmVwbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL2lzRW1wdHkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9pc0h0dHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9zZXREb2N1bWV0VGl0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy9zdHJpbmdUb0hleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveXVlamlhL3V0aWxzL3N2Z1Jvb3RQYXRoLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvdXJsc2VhcmNocGFyYW1zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95dWVqaWEvdXRpbHMvdmFsaWRhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3l1ZWppYS91dGlscy/lhYPntKDlnKjpobXpnaLkuK3lsYXkuK0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maWcvX3ZhcmlhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbGF1bmNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlldy9jb21wb25lbnRzL0NvbnRhY3QvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXcvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxzSzs7Ozs7Ozs7Ozs7QUNBQSwySzs7Ozs7Ozs7Ozs7QUNBQSxtQkFBTyxDQUFDLCtGQUFpQztBQUN6QyxtQkFBTyxDQUFDLDZGQUFnQztBQUN4QyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFFQUFvQjtBQUM1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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpT0FBaU87QUFDak87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb09BQW9PO0FBQ3BPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkVBQTZFOztBQUU3RSxzREFBc0QsdUJBQXVCOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDs7QUFFQTtBQUNBLGlPQUFpTztBQUNqTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvT0FBb087QUFDcE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcDZCYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQywrREFBa0I7QUFDN0M7Ozs7Ozs7Ozs7OztBQ05BLG1OOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxhQUFvQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNsREEsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLCtDQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNOQSxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYztBQUN0QyxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ05BLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTkEsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLCtDQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTkEsYUFBYSxtQkFBTyxDQUFDLG1EQUFXO0FBQ2hDLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzQkEsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsbUJBQW1CLG1CQUFPLENBQUMsNkRBQWdCOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqQkEsaUJBQWlCLG1CQUFPLENBQUMseURBQWM7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLHVEQUFhO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMsdURBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzlDQSxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsNkRBQWdCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNEQSxrQkFBa0IsbUJBQU8sQ0FBQyw2REFBZ0I7QUFDMUMsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNiQSxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNIQSxtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLHVEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaEJBLGFBQWEsbUJBQU8sQ0FBQyxtREFBVzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN0NBLGVBQWUsbUJBQU8sQ0FBQyx1REFBYTtBQUNwQyxVQUFVLG1CQUFPLENBQUMsNkNBQVE7QUFDMUIsY0FBYyxtQkFBTyxDQUFDLHFEQUFZO0FBQ2xDLFVBQVUsbUJBQU8sQ0FBQyw2Q0FBUTtBQUMxQixjQUFjLG1CQUFPLENBQUMscURBQVk7QUFDbEMsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLHVEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNaQSxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakJBLGNBQWMsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbEM7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTEEsK0RBQWlCLG1CQUFPLENBQUMsMkRBQWU7O0FBRXhDO0FBQ0Esa0JBQWtCLEtBQTBCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2RBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDekJBLHNCQUFzQixtQkFBTyxDQUFDLHFFQUFvQjtBQUNsRCxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDekJBLGlCQUFpQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hDQSx5REFBVyxtQkFBTyxDQUFDLCtDQUFTO0FBQzVCLGdCQUFnQixtQkFBTyxDQUFDLHVEQUFhOztBQUVyQztBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQ0EsZUFBZSxtQkFBTyxDQUFDLHVEQUFhO0FBQ3BDLGFBQWEsbUJBQU8sQ0FBQyxtREFBVztBQUNoQyxrQkFBa0IsbUJBQU8sQ0FBQywyREFBZTtBQUN6QyxjQUFjLG1CQUFPLENBQUMsbURBQVc7QUFDakMsa0JBQWtCLG1CQUFPLENBQUMsMkRBQWU7QUFDekMsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLDZEQUFnQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1RUEsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1QkEsdUJBQXVCLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3BELGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyx1REFBYTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqQkEsOEs7Ozs7Ozs7Ozs7O0FDQUEsK0s7Ozs7Ozs7Ozs7O0FDQUEsMks7Ozs7Ozs7Ozs7O0FDQUEsMEs7Ozs7Ozs7Ozs7OztBQ0FhOztBQUViOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxrREFBUzs7QUFFaEM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdEQUFTOztBQUVoQyxjQUFjLG1CQUFPLENBQUMsMkRBQVU7O0FBRWhDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzSUFBc0ksU0FBUyxzQkFBc0IsMEJBQTBCO0FBQy9MOztBQUVBO0FBQ0EsNERBQTRELHVEQUF1RDtBQUNuSDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDbEVhOztBQUViOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxrREFBUzs7QUFFaEM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdEQUFTOztBQUVoQyxjQUFjLG1CQUFPLENBQUMsMkRBQVU7O0FBRWhDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtSUFBbUksU0FBUyxzQkFBc0IsdUJBQXVCO0FBQ3pMOztBQUVBO0FBQ0EsNERBQTRELHVEQUF1RDtBQUNuSDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkI7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYjs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBVzs7QUFFcEM7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdEQUFTOztBQUVoQyxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7O0FBRWhGOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EseURBQXlELFVBQVUsdURBQXVEO0FBQzFIOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSx1Qjs7Ozs7Ozs7Ozs7O0FDcEhhOztBQUViOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLDhFQUEyQjs7QUFFdkQ7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHlDQUF5QywrRDs7Ozs7Ozs7Ozs7O0FDVjVCOztBQUViOztBQUVBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSxhQUFhLG1CQUFPLENBQUMseURBQVM7O0FBRTlCOztBQUVBLFlBQVksbUJBQU8sQ0FBQyx1REFBUTs7QUFFNUI7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7OztBQzFGYTs7QUFFYjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsa0VBQXFCOztBQUUzQzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsbUNBQW1DLCtEOzs7Ozs7Ozs7Ozs7QUNWdEI7O0FBRWI7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsc0VBQXVCOztBQUUvQzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YscUNBQXFDLCtEOzs7Ozs7Ozs7Ozs7QUNWeEI7O0FBRWI7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGdFQUFvQjs7QUFFekM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtDQUFrQywrRDs7Ozs7Ozs7Ozs7O0FDVnJCOztBQUViOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxrRUFBcUI7O0FBRTNDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixtQ0FBbUMsK0Q7Ozs7Ozs7Ozs7OztBQ1Z0Qjs7QUFFYjs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyw4RUFBMkI7O0FBRXZEOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix5Q0FBeUMsK0Q7Ozs7Ozs7Ozs7OztBQ1Y1Qjs7QUFFYjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsa0VBQXFCOztBQUUzQzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsbUNBQW1DLCtEOzs7Ozs7Ozs7Ozs7QUNWdEI7O0FBRWI7O0FBRUEsb0JBQW9CLG1CQUFPLENBQUMsOEVBQTJCOztBQUV2RDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YseUNBQXlDLCtEOzs7Ozs7Ozs7Ozs7QUNWNUI7O0FBRWI7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyx5RUFBaUI7O0FBRS9DOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLG1FQUFjOztBQUV6Qzs7QUFFQSxhQUFhLG1CQUFPLENBQUMsdURBQVE7O0FBRTdCOztBQUVBLHFCQUFxQixtQkFBTyxDQUFDLHVFQUFnQjs7QUFFN0M7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsNkRBQVc7O0FBRW5DOztBQUVBLGVBQWUsbUJBQU8sQ0FBQywyREFBVTs7QUFFakM7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsK0RBQVk7O0FBRXJDOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx5REFBUzs7QUFFL0I7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLDJEQUFVOztBQUVqQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyx1RUFBZ0I7O0FBRTdDOztBQUVBLGVBQWUsbUJBQU8sQ0FBQywyREFBVTs7QUFFakM7O0FBRUEscUJBQXFCLG1CQUFPLENBQUMsdUVBQWdCOztBQUU3Qzs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFdkM7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsbUVBQWM7O0FBRXpDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUM1RWE7O0FBRWI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsd0VBQXdCOztBQUVqRDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysc0NBQXNDLCtEOzs7Ozs7Ozs7Ozs7QUNWekI7O0FBRWI7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsMEVBQXlCOztBQUVuRDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsdUNBQXVDLCtEOzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGtEQUFTOztBQUVoQzs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsZ0RBQVM7O0FBRWhDLGNBQWMsbUJBQU8sQ0FBQyx1REFBVTs7QUFFaEM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFJQUFxSSxTQUFTLHNCQUFzQix5QkFBeUI7QUFDN0w7O0FBRUE7QUFDQSw0REFBNEQsdURBQXVEO0FBQ25IOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7QUNsRWE7O0FBRWI7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsd0RBQVc7O0FBRXBDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLHlCOzs7Ozs7Ozs7Ozs7QUN6RmE7O0FBRWI7O0FBRUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGtEQUFTOztBQUVoQzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBVzs7QUFFcEM7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdEQUFTOztBQUVoQyxvQkFBb0IsbUJBQU8sQ0FBQyxtRUFBZ0I7O0FBRTVDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDbElhOztBQUViOztBQUVBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGVBQWUsbUJBQU8sQ0FBQyxrREFBUzs7QUFFaEM7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsd0RBQVc7O0FBRXBDOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXJDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFhOztBQUV0Qzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0Qzs7QUFFNUM7O0FBRUE7O0FBRUE7O0FBRUEsK0NBQStDLGlFQUFpRTtBQUNoSDs7QUFFQTtBQUNBLG9KQUFvSjs7QUFFcEosaU1BQWlNOztBQUVqTSwyTEFBMkw7QUFDM0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7Ozs7QUM1SmE7O0FBRWI7O0FBRUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZUFBZSxtQkFBTyxDQUFDLGtEQUFTOztBQUVoQzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBVzs7QUFFcEM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7Ozs7Ozs7Ozs7OztBQ3RIYTs7QUFFYjs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxlQUFlLG1CQUFPLENBQUMsa0RBQVM7O0FBRWhDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHdEQUFXOztBQUVwQzs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsZ0RBQVM7O0FBRWhDLGNBQWMsbUJBQU8sQ0FBQyx1REFBVTs7QUFFaEM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4saURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUlBQXFJLFNBQVMsc0JBQXNCLHlCQUF5QjtBQUM3TDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRSxVQUFVLG1CQUFtQjtBQUNuRzs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7Ozs7OztBQ3hLYTs7QUFFYjs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSxlQUFlLG1CQUFPLENBQUMsa0RBQVM7O0FBRWhDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHdEQUFXOztBQUVwQzs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyw2REFBYTs7QUFFdEM7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2REFBNkQsaUVBQWlFO0FBQzlIO0FBQ0EsS0FBSzs7QUFFTCx3REFBd0QsMkNBQTJDO0FBQ25HOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7O0FBRUEsb0JBQW9CLG1CQUFPLENBQUMsOERBQWdCOztBQUU1Qzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7O0FBRXBFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7O0FBRUEsK0I7Ozs7Ozs7Ozs7OztBQzVDYTs7QUFFYjs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTVDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRTs7QUFFcEU7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSx3Q0FBd0MsbURBQW1EO0FBQzNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7O0FBRUEsNEI7Ozs7Ozs7Ozs7OztBQy9FYTs7QUFFYjs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZOztBQUVyQzs7QUFFQSw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBeUI7O0FBRTdEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxxREFBUzs7QUFFOUI7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkI7Ozs7Ozs7Ozs7O0FDcERBLHNLOzs7Ozs7Ozs7Ozs7QUNBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsTUFBTTtBQUMvQjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7QUN6RWE7O0FBRWIsbUJBQW1CLGFBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoQmE7O0FBRWIsbUJBQW1CLGFBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDckJBLHlNOzs7Ozs7Ozs7Ozs7QUNBYTs7QUFFYjs7QUFFQSxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7Ozs7Ozs7QUMxQ0EsMEs7Ozs7Ozs7Ozs7O0FDQUEsaUw7Ozs7Ozs7Ozs7O0FDQUEsaUw7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBdUM7QUFZdkMsYUFBYTtBQUNiO0lBQ0Usa0JBQVksT0FBaUI7UUFJN0IsMkJBQTJCO1FBQ25CLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUw3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBV0QsYUFBYTtJQUNILCtCQUFZLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSx3REFBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQix3REFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUlELHNCQUFXLDhCQUFRO1FBRm5CLHdCQUF3QjtRQUN4Qix1REFBdUQ7YUFDdkQ7WUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVTLDRCQUFTLEdBQW5CLFVBQW9CLEdBQVE7UUFDMUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUVELGFBQWE7SUFDTiw0QkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUR4QjtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUVPO0FBRVQ7QUF1QjFDO0lBQ0UsZ0JBQVksS0FBdUI7UUE2Qm5DLGNBQWM7UUFDTixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQTdCcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4REFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDMUIseURBQXlEO1FBQ3pELElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFNLFFBQVEsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLHVEQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBOEIsQ0FBQztTQUMzRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBcUJELHNCQUFXLHlCQUFLO1FBRGhCLFdBQVc7YUFDWDtZQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLDhEQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sT0FBTyxDQUFDO2lCQUNoQjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELGFBQWE7SUFDTiwwQkFBUyxHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxXQUFXO0lBQ0osMEJBQVMsR0FBaEI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDMUIsT0FBVSxJQUFJLENBQUMsU0FBUyxpQkFBSSxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ2hDLE9BQVUsSUFBSSxDQUFDLFNBQVMsbUNBQU8sQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kseUJBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMvQixlQUFlO1lBQ2YseURBQXlEO1lBQ3pELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtTQUNGO1FBQ0QsdUJBQXVCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBS0QsbUJBQW1CO0lBQ1osNEJBQVcsR0FBbEIsVUFBbUIsS0FBWTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7QUFFYyxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0l1QztBQUU3RDtJQUE2QiwyQkFBYTtJQUN4QyxpQkFBWSxLQUFxQztRQUFqRCxZQUNFLGtCQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBRzlCO1FBREMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztJQUNyRSxDQUFDO0lBSU0scUJBQUcsR0FBVixVQUFXLEtBQTZCO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLHFCQUFHLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLENBMUI0QixzREFBSSxHQTBCaEM7QUFFYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCMEM7QUFDdkI7QUFTMUMsZ0JBQWdCO0FBQ2hCO0lBQTBCLDRCQUFPO0lBQy9CLGtCQUFZLEtBQWU7UUFBM0IsWUFDRSxrQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBR3JCO1FBREMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDOztJQUNsQyxDQUFDO0lBSU0sc0JBQUcsR0FBVixVQUFXLEtBQWtCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLDhEQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEM7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sc0JBQUcsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0ExQnlCLHNEQUFJLEdBMEI3QjtBQUVjLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ3hCO0FBQUE7SUFBQTtRQUlFLFdBQVc7UUFDSixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLDBDQUEwQztRQUNuQyxlQUFVLEdBQVksS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFYixxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcUQ7QUFDbkM7QUFFRztBQUMzQyxJQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLHdEQUFnQixDQUFDLENBQUM7QUFpQzFDO0lBQ0UsaUJBQVksS0FBYTtRQWdCekIsc0JBQXNCO1FBQ2QsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUMvQixvQkFBb0I7UUFDVixVQUFLLEdBQVksS0FBSyxDQUFDO1FBV2pDLGNBQWM7UUFDUCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBU25DLFlBQVk7UUFDSSxVQUFLLEdBQW1CLElBQUksMERBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFlBQVk7UUFDSixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBMUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFpQ0QsbUJBQW1CO0lBQ1gsMEJBQVEsR0FBaEIsVUFBaUIsTUFBb0IsRUFBRSxRQUFvQztRQUN6RSxJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3BHLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUMzQixJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixPQUFPLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLDJCQUEyQjtZQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjtJQUNOLHdCQUFNLEdBQWhCLFVBQWlCLE1BQW9CO1FBQXJDLGlCQTZEQztRQTVEUywwQkFBTSxDQUFZO1FBRTFCLDBCQUEwQjtRQUMxQixJQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzlDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWxFLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzVDLElBQU0sYUFBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDckMsSUFBSSxhQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUNsQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRyxPQUFPLENBQUMsV0FBc0IsQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO2lCQUM3RTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUM3QyxJQUFNLE1BQUksR0FBUSxFQUFFLENBQUM7WUFFckIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO29CQUNyQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO3dCQUN0RCxNQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDaEM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUcsMENBQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFJLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUNyQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMvQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsNENBQUssWUFDSCxXQUFXLEVBQUUsSUFBSSw0Q0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFDLE1BQU07b0JBQ3hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDLENBQUMsRUFDRixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLE1BQU0sS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLFNBQVM7aUJBQzNILElBQ0UsTUFBTSxJQUNULElBQUksRUFBRSxlQUFlLElBQ3JCLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDZixPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxHQUFHLENBQUM7aUJBQ1g7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDSywyQkFBUyxHQUF6QixVQUFnQyxNQUE2Qjs7OztnQkFDbkQsSUFBSSxHQUFnQixNQUFNLEtBQXRCLEVBQUUsR0FBRyxHQUFXLE1BQU0sSUFBakIsRUFBRSxJQUFJLEdBQUssTUFBTSxLQUFYLENBQVk7Z0JBRW5DLGFBQWE7Z0JBQ2IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2pCLElBQUksRUFBRSxDQUFDO2lCQUNSO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDWDs7OztLQUNGO0lBRUQsYUFBYTtJQUNOLGdDQUFjLEdBQXJCLFVBQXNCLGFBQXFCO1FBQ3pDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLGdCQUFnQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQTVIRCx3Q0FBd0M7SUFDMUIseUJBQWlCLEdBQVksS0FBSyxDQUFDO0lBNEhuRCxjQUFDO0NBQUE7QUFFYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaE12QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBQXFEO0FBQ3JELHlDQUF5QztBQUNDO0FBQ0k7QUFDTjtBQUNoQyx3R0FBUSxDQUEwQjtBQXlDMUMsb0NBQW9DO0FBQ3BDLElBQU0sa0JBQWtCLEdBQUc7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUNFO1FBWVEsWUFBTyxHQUFhO1lBQzFCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQix3QkFBd0I7U0FDekIsQ0FBQztRQXZCQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBaUJPLDJCQUFVLEdBQWxCLFVBQW1CLEdBQXVCO1FBQ3hDLElBQU0sSUFBSSxHQUFHLDBEQUFPLENBQUMsV0FBVyxDQUFDO1FBQ2pDLElBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSw2REFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFbEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sc0JBQUssR0FBWixVQUFhLFFBQW9CO1FBQy9CLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELHdCQUF3QjtJQUNqQix1QkFBTSxHQUFiO1FBQ0UsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ1osdUJBQXlDLEVBQXZDLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSxnQkFBd0IsQ0FBQztZQUNoRCxJQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLElBQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDO1lBQ3BELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFNLElBQUksR0FBRyxrQkFBZ0IsTUFBTSxrQkFBYSxRQUFRLG1CQUFjLFNBQVMsYUFBUSxHQUFLLENBQUM7WUFDN0YsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ1IsS0FBSztnQkFDTCxLQUFLO2dCQUNMLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUixTQUFTO2dCQUNULFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxrQkFBa0I7SUFDWCx1Q0FBc0IsR0FBN0I7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1QsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtJQUNSLHVDQUFzQixHQUE3QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDVCxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDZixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUNmLGtDQUFpQixHQUF4QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDVCxJQUFNLFFBQVEsR0FDVCxrQkFBa0I7Z0JBQ3JCLDJCQUEyQjtnQkFDM0IseUJBQXlCO2dCQUN6QixtQkFBbUI7Y0FDcEIsQ0FBQztZQUNGLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNmLFFBQVE7YUFDVCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO0lBQ0osNkJBQVksR0FBbkIsVUFBb0IsR0FBVyxFQUFFLE9BQWU7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNULDJDQUEyQztZQUMzQyxJQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFekksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO0lBQ0osNEJBQVcsR0FBbEIsVUFBbUIsVUFBeUQ7UUFBNUUsaUJBVUM7UUFUQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDdEIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMvQixPQUFPLEVBQUUsVUFBQyxHQUFRO2dCQUNoQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsMkNBQTJDO2dCQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDSiw0QkFBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsVUFBeUQ7UUFBN0YsaUJBbUJDO1FBbEJDLHdEQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixPQUFPO1lBQ1Asa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixPQUFPLEVBQUUsVUFBQyxHQUFRO2dCQUNoQix3REFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNkLG9CQUFvQjtnQkFDcEIsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRTtvQkFDakMsY0FBYztvQkFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxVQUFDLFNBQVMsSUFBSyxpQkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztpQkFDbkY7cUJBQU07b0JBQ0wsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQztZQUNELEtBQUssRUFBRSxVQUFDLENBQVE7Z0JBQ2Qsd0RBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUixnQ0FBZSxHQUF0QixVQUF1QixPQUFlLEVBQUUsVUFBcUM7UUFDM0UsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNqQixPQUFPO1lBQ1AsT0FBTyxFQUFQLFVBQVEsR0FBUTtnQkFDZCxtQ0FBbUM7Z0JBQ25DLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO0lBQ0osd0JBQU8sR0FBZCxVQUFlLE1BQXNCO1FBQXJDLGlCQW1DQztRQWxDQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1QsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUUvQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtnQkFDM0UsSUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQzNDLElBQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDeEUsSUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNyRSxJQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksOENBQThDLENBQUM7Z0JBQzdILHFEQUFxRDtnQkFDckQsSUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDNUQsSUFBTSxPQUFPLEdBQUc7b0JBQ2QscUJBQXFCO29CQUNyQix1QkFBdUI7aUJBSXhCLENBQUM7Z0JBRUYsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN2QyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDTixLQUFLO3dCQUNMLElBQUk7d0JBQ0osSUFBSTt3QkFDSixNQUFNO3dCQUNOLE9BQU8sRUFBRSxRQUFRO3FCQUNsQixDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRWIscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ25RdEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyREFBMkQ7QUFDakYsc0JBQXNCLDJEQUEyRDtBQUNqRixzQkFBc0IsMkRBQTJEO0FBQ2pGLG1DQUFtQyw0Q0FBNEM7QUFDL0UsbUNBQW1DLDRDQUE0QztBQUMvRSxtQ0FBbUMsNENBQTRDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29COzs7Ozs7Ozs7Ozs7QUN2SHBCO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUVvQjtBQUNFO0FBVW5EO0lBQ0UsY0FBWSxPQUFnQjtRQVE1QixhQUFhO1FBQ0csV0FBTSxHQUF5QixJQUFJLDZEQUFPLEVBQUUsQ0FBQztRQUM3RCxjQUFjO1FBQ0UsWUFBTyxHQUFzQixJQUFJLDhEQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQVZqRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBU0Qsc0JBQVcsMEJBQVE7UUFEbkIsaUJBQWlCO2FBQ2pCO1lBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV4QixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO29CQUM5QixPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUVELDBIQUEwSDtJQUMxSCxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUVuQyxtREFBbUQ7SUFDbkQsb0NBQW9DO0lBRXBDLDhDQUE4QztJQUM5QywyQ0FBMkM7SUFDM0MsdUVBQXVFO0lBQ3ZFLGdGQUFnRjtJQUNoRiwyRUFBMkU7SUFDM0UsMkNBQTJDO0lBQzNDLDZJQUE2STtJQUM3SSxnQ0FBZ0M7SUFDaEMscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixRQUFRO0lBRVIsK0JBQStCO0lBQy9CLHdEQUF3RDtJQUN4RCx3QkFBd0I7SUFDeEIsaUVBQWlFO0lBQ2pFLGtGQUFrRjtJQUNsRixpREFBaUQ7SUFDakQsUUFBUTtJQUVSLGdDQUFnQztJQUNoQyw2RUFBNkU7SUFDN0Usa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsTUFBTTtJQUVOLGdDQUFnQztJQUNoQyxJQUFJO0lBQ0o7OztPQUdHO0lBQ0kseUJBQVUsR0FBakI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUM5Qiw4Q0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsT0FBTzthQUNSO1NBQ0Y7SUFDSCxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLE1BQWU7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUMxQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFYyxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7QUM5R3BCO0FBQ0Esa0JBQWtCLGdFOzs7Ozs7Ozs7Ozs7QUNBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUMvQiw0Q0FBNEM7QUFDNUMscURBQXFEO0FBQy9CO0FBU3RCLHlDQUF5QztBQUN6QyxJQUFNLElBQUksR0FBRyxVQUFDLEtBQVk7SUFDeEIsT0FBTyxDQUNMLDZEQUNFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBRXRCLDZEQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFJLENBQ3pCLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVhLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCcEIseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0MrQjtBQUNVO0FBQ3NEO0FBQ3ZEO0FBQ047QUFDOEM7QUFDM0M7QUFDZjtBQXFDdEIsSUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUM7QUFDekMsMkVBQTJFO0FBRTNFO0lBQXNCLDJCQUE2QjtJQUNqRCxpQkFBWSxLQUFZLEVBQUUsS0FBWTtRQUF0QyxZQUNFLGtCQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsU0FNcEI7UUFhTSxXQUFLLEdBQVU7WUFDcEIsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQztRQUtGLDBCQUEwQjtRQUNsQixhQUFPLEdBQXFCLElBQUksS0FBSyxFQUFFLENBQUM7UUF6QjlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsK0NBQWUsRUFBRSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM3QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN6QyxDQUFDO0lBc0JELHFCQUFxQjtJQUNyQixvSUFBb0k7SUFFN0gsdUNBQXFCLEdBQTVCLFVBQTZCLFNBQWdCLEVBQUUsU0FBZ0I7UUFDN0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQztRQUV6RCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU0sbUNBQWlCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sc0NBQW9CLEdBQTNCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRU0sb0NBQWtCLEdBQXpCLFVBQTBCLFNBQWdCO1FBQ3hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLFlBQVksRUFBRTtZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTyx3QkFBTSxHQUFkLFVBQWUsS0FBWSxFQUFFLEdBQXVCLEVBQUUsSUFBZTtRQUNuRSxJQUFNLElBQUksR0FBRyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUUsSUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLDZEQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVsRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxrQkFBa0I7SUFDViwyQkFBUyxHQUFqQjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUF5QixFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUN2RTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsbUJBQW1CO0lBQ1gsNEJBQVUsR0FBbEI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDbkU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHVCQUF1QjtJQUNmLDJCQUFTLEdBQWpCLFVBQWtCLEtBQVk7UUFDNUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUUvRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsTUFBTTthQUNkLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELCtCQUErQjtJQUN2Qiw0QkFBVSxHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRTtZQUM3RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxPQUFPLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBRSxVQUFVLEdBQUksY0FBeUIsQ0FBQztTQUNyRztRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLHlCQUFPLEdBQWYsVUFBZ0IsQ0FBbUM7UUFDakQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDbEMsSUFBTSxjQUFjLEdBQUcsa0RBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXJELElBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM5QyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBMEI7b0JBQ3ZELFVBQVUsRUFBRSwyRUFBYSxDQUFDLDZEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN2RCxZQUFZLEVBQUU7d0JBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztxQkFDckI7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxtREFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBRU0sd0JBQU0sR0FBYjtRQUNRLG1CQUFpSSxFQUEvSCxVQUFFLEVBQUUsOEJBQVksRUFBRSxjQUFJLEVBQUUsa0JBQU0sRUFBRSw0QkFBVyxFQUFFLDhCQUFZLEVBQUUsc0JBQVEsRUFBRSw4QkFBWSxFQUFFLHdCQUFTLEVBQUUsZ0JBQUssRUFBRSw0QkFBMEIsQ0FBQztRQUN4SSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUUvQixJQUFNLFFBQVEsR0FBRyxDQUNmLDZEQUNFLFNBQVMsRUFBRSx1Q0FBVSxDQUFJLFNBQVMsVUFBTyxFQUFLLFNBQVMsU0FBSSxJQUFJLFVBQU8sRUFBSyxTQUFTLGNBQVcsRUFBRSxTQUFTLENBQUMsRUFDM0csS0FBSyxlQUNBLEtBQUssSUFDUixTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNuRSxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLE1BQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNwRyxhQUFhLEVBQUUsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBRS9ELEVBQUUsRUFBRSxFQUFFLEVBQ04sT0FBTyxFQUFFLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDMUQsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQ2pCLENBQ0gsQ0FBQztRQUVGLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNwQixvREFBQyxxREFBWSxJQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsWUFBWSxFQUFFLFlBQVk7WUFFMUIsb0RBQUMscURBQVksQ0FBQyxRQUFRLFFBQUUsUUFBUSxDQUF5QjtZQUN6RCxvREFBQyxxREFBWSxDQUFDLElBQUk7Z0JBQ2hCLDZEQUNFLFNBQVMsRUFBRSx1Q0FBVSxDQUFJLFNBQVMsVUFBTyxFQUFLLFNBQVMsU0FBSSxJQUFJLFVBQU8sRUFBSyxTQUFTLFVBQU8sRUFBRSxTQUFTLENBQUMsRUFDdkcsS0FBSyxlQUNBLEtBQUssSUFDUixlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUUxRixPQUFPLEVBQUUsV0FBVyxHQUNwQixDQUNnQjtZQUNwQixvREFBQyxxREFBWSxDQUFDLE9BQU87Z0JBQ25CLDZEQUNFLFNBQVMsRUFBRSx1Q0FBVSxDQUFJLFNBQVMsVUFBTyxFQUFLLFNBQVMsU0FBSSxJQUFJLFVBQU8sRUFBSyxTQUFTLGFBQVUsRUFBRSxTQUFTLENBQUMsRUFDMUcsS0FBSyxlQUNBLEtBQUssSUFDUixlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUVuRyxDQUNtQixDQUNWLENBQ2hCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNmLENBQUM7SUF4S2Esb0JBQVksR0FBVTtRQUNsQyxJQUFJLEVBQUUsS0FBSztRQUNYLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGNBQWMsRUFBRSxJQUFJO0tBQ3JCLENBQUM7SUFFWSxtQkFBVyxHQUFXLEVBQUUsQ0FBQztJQWdLekMsY0FBQztDQUFBLENBbkxxQiwrQ0FBZSxHQW1McEM7QUFFYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JPd0M7QUFDWjtBQUVuRDtJQUFvQix5QkFBYztJQUNoQyxlQUFZLEtBQXdCO1FBQXBDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBR2I7UUFEQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksOERBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQ3hFLENBQUM7SUFJTSxxQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0FibUIsNERBQU0sR0FhekI7QUFFYyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJVO0FBQ1U7QUFDekMscURBQXFEO0FBQ2Y7QUFDSTtBQUNGO0FBc0J4QyxpQkFBaUI7QUFDakIsb0JBQW9CO0FBRXBCLGVBQWU7QUFDZixTQUFTLFdBQVcsQ0FBQyxJQUFZO0lBQy9CLHVFQUF1RTtJQUN2RSwwREFBMEQ7SUFDMUQseUNBQXlDO0lBQ3pDLHFEQUFxRDtJQUNyRCxtR0FBbUc7SUFDbkcsNkZBQTZGO0lBRTdGLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFFdkMsd0lBQXdJO0lBQ3hJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsVUFBVTtJQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMsR0FBVyxFQUFFLE9BQWdCO0lBQ3ZDLElBQUksNkRBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtTQUFNLElBQUksbURBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxHQUFHLEVBQUU7UUFDbkQsSUFBSSxPQUFPLEVBQUU7WUFDWCxtREFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLG1EQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLEdBQVcsRUFBRSxPQUFnQixFQUFFLFNBQW1CO0lBQzlELHdCQUF3QjtJQUN0QixJQUFJLFNBQVMsRUFBRTtRQUNiLHNEQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsQjtJQUNELGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDYixJQUFJO0FBQ04sQ0FBQztBQUVELElBQU0sU0FBUyxHQUFHLG1CQUFtQixDQUFDO0FBQ3RDO0lBQW1CLHdCQUFzQjtJQUN2QyxjQUFZLEtBQVk7UUFBeEIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FJYjtRQUZDLG9DQUFvQztRQUNwQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN6QyxDQUFDO0lBbUJELGVBQWU7SUFDRCxPQUFFLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxPQUFpQjtRQUM3QyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELGtCQUFrQjtJQUNKLFlBQU8sR0FBckIsVUFBc0IsR0FBVyxFQUFFLE9BQWlCO1FBQ2xELG1EQUFtRDtRQUNuRCxnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLGdEQUFnRDtRQUNoRCxzRUFBc0U7UUFDdEUsSUFBSTtRQUVKLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBRUQsY0FBYztJQUNBLFdBQU0sR0FBcEIsVUFBcUIsTUFBZTtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixtREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sc0JBQU8sR0FBZixVQUFnQixDQUFtQztRQUNqRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2QsbUJBQStDLEVBQTdDLFVBQUUsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsa0JBQXFCLENBQUM7UUFFdEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsYUFBRSxNQUFNLFVBQUUsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsYUFBRSxNQUFNLFVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDUSxtQkFBOEMsRUFBNUMsd0JBQVMsRUFBRSxzQkFBUSxFQUFFLHNCQUF1QixDQUFDO1FBQ3JELE9BQU8sQ0FDTCw2REFDRSxTQUFTLEVBQUUsdUNBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQzNDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxlQUNWLFFBQVEsSUFDbkIsUUFBUSxDQUFPLENBQ2xCLENBQUM7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0F4RWtCLCtDQUFlLEdBd0VqQztBQUVjLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKVztBQUMwQjtBQUNuQjtBQVN0QyxJQUFJLGlCQUEwQyxDQUFDO0FBQy9DLElBQUksWUFBWSxHQUFZLEtBQUssQ0FBQztBQUNsQyxJQUFJLEtBQUssR0FBdUIsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sWUFBWSxHQUFxQyw4RUFBa0IsQ0FBQztJQUN4RSxlQUFlLEVBQUUsVUFBQyxLQUFhO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELFNBQVMsRUFBRSxVQUFDLEtBQWEsRUFBRSxRQUFpQztRQUMxRCxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDN0IsT0FBTyxjQUFNLFdBQUksRUFBSixDQUFJLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILDhCQUE4QjtBQUU5QixJQUFJO0FBQ0osU0FBUyxXQUFXO0lBQ2xCLElBQUksWUFBWSxLQUFLLEtBQUssSUFBSSxpQkFBaUIsRUFBRTtRQUMvQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxtREFBTSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7UUFDOUIsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztLQUNuQjtTQUFNO1FBQ0wsS0FBSyxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVDO0FBQ0gsQ0FBQztBQUVEO0lBQW9CLHlCQUFzQjtJQUN4QyxlQUFZLEtBQVk7UUFBeEIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQWlCTSxXQUFLLEdBQVU7WUFDcEIsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDOztJQW5CRixDQUFDO0lBRUQsd0JBQXdCO0lBQ1YsY0FBUSxHQUF0QjtRQUNFLDREQUE0RDtRQUM1RCxJQUFJLG1EQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLG1EQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsV0FBVyxFQUFFLENBQUM7YUFDZjtTQUNGO0lBQ0gsQ0FBQztJQU1NLGlDQUFpQixHQUF4QjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYLEVBQUU7WUFDRCxXQUFXLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxzQkFBTSxHQUFiO1FBQUEsaUJBUUM7UUFQQyxPQUFPLENBQ0wsb0RBQUMsWUFBWSxJQUFDLE1BQU0sRUFBRSxFQUFFLElBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFDLEtBQWE7WUFDL0IsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQU0sV0FBSSxFQUFKLENBQUksQ0FDRCxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLENBekNtQiwrQ0FBZSxHQXlDbEM7QUFFTSxJQUFNLE9BQU8sR0FBRyxtREFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoQyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZVO0FBRWU7QUFFUjtBQUN0Qyx1RkFBdUY7QUFDL0I7QUFDRDtBQUMxQjtBQUM2QjtBQUNsQjtBQXFCeEMsNkJBQTZCO0FBQzdCLFNBQVMsUUFBUSxDQUFDLFNBQWdCO0lBQ2hDLG1EQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsT0FBTyxtREFBbUIsQ0FBQyxtREFBTSxDQUFDLFFBQTZCLEVBQUUsRUFBRSxHQUFHLEVBQUUsbURBQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3pILENBQUM7QUFFRCxnRUFBZ0U7QUFDaEUsd0hBQXdIO0FBRXhILGtCQUFrQjtBQUNsQiwrQ0FBK0M7QUFDL0MsTUFBTTtBQUVOLGtDQUFrQztBQUNsQyxJQUFJO0FBRUosY0FBYztBQUNQLFNBQVMsZ0JBQWdCLENBQUMsU0FBaUI7SUFDaEQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFFRCxtQkFBbUI7QUFDbkIsU0FBUyxlQUFlLENBQUMsU0FBZ0I7SUFDdkMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDeEMsSUFBTSxTQUFTLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUV2QyxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsdUJBQXVCO0FBQ3ZCLGdGQUFnRjtBQUNoRixnQkFBZ0I7QUFDaEIsb0RBQW9EO0FBRXBELDJDQUEyQztBQUMzQyw2REFBNkQ7QUFDN0QsUUFBUTtBQUVSLHNDQUFzQztBQUN0QyxNQUFNO0FBRU4saUJBQWlCO0FBQ2pCLElBQUk7QUFFRyxTQUFTLElBQUksQ0FBQyxTQUFnQjtJQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLFNBQWdCO0lBQzNCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEUsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUMxQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEI7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsbURBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsU0FBZ0I7SUFDOUIsSUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4Qyx3REFBd0Q7SUFFeEQsYUFBYTtJQUNiLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsU0FBUyxFQUFFO1FBQ2xELGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzlCO0lBRUQsNkJBQTZCO0lBQzdCLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDdEUsV0FBVyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyRDtJQUVELGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsSUFBSTtBQUNOLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxTQUFnQjtJQUM3QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM5QixPQUFPO0tBQ1I7SUFFRCxJQUFNLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLG1EQUFtRDtJQUVuRCxZQUFZO0lBQ1osSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUN4QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEIscUJBQXFCO1FBQ3JCLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDaEQsZ0JBQWdCO1FBQ2hCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3BDO0lBRUQsV0FBVyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRCxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLElBQUk7QUFDTixDQUFDO0FBRUQsK0JBQStCO0FBQy9CLDBFQUEwRTtBQUUxRSxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLE1BQU07QUFFTixtQkFBbUI7QUFDbkIsOENBQThDO0FBQzlDLHdCQUF3QjtBQUN4QiwrQ0FBK0M7QUFDL0MsNERBQTREO0FBQzVELDhDQUE4QztBQUM5QyxXQUFXO0FBRVgsMkJBQTJCO0FBQzNCLElBQUk7QUFFRyxTQUFTLFdBQVcsQ0FBQyxnQkFBc0MsRUFBRSxXQUFpQyxFQUFFLElBQXNCO0lBQzNILElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDNUYseUVBQVMsQ0FBQztZQUNSLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO1lBQ25DLElBQUk7WUFDSixHQUFHLEVBQUUsZ0JBQWdCLENBQUMsUUFBUTtZQUM5QixFQUFFLEVBQUUsV0FBVyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQzlCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDeEMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFNBQVM7U0FDdEMsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDO0FBRUQscURBQXFEO0FBQ3JELElBQUksZ0RBQUssQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO0lBQ25DLHFFQUFjLEVBQUUsQ0FBQztDQUNsQjtBQUVEO0lBQW9CLHlCQUEwQjtJQUM1QyxlQUFZLEtBQWdCO1FBQTVCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBR2I7UUFFTSxXQUFLLEdBQVU7WUFDcEIsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFjLENBQUMsQ0FBQztZQUN0QyxZQUFZLEVBQUcsS0FBSSxDQUFDLEtBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUTtTQUN0RCxDQUFDO1FBTkEsbURBQU0sQ0FBQyxPQUFPLEdBQUksS0FBZSxDQUFDLE9BQU8sQ0FBQzs7SUFDNUMsQ0FBQztJQVdNLHFDQUFxQixHQUE1QixVQUE2QixTQUFnQixFQUFFLFNBQWdCO1FBQzdELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFjLENBQUM7UUFDbEMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNqRSxDQUFDO0lBRWEsOEJBQXdCLEdBQXRDLFVBQXVDLFNBQWdCLEVBQUUsU0FBZ0I7UUFDdkUsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQzFELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBa0IsQ0FBQztRQUNqRCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFMUUsc0JBQXNCO1FBQ3RCLElBQUksV0FBVyxFQUFFO1lBQ2YsOENBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNmO1FBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNoQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDZixTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzVDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLHNFQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDeEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsbURBQU0sQ0FBQyxzQkFBc0IsR0FBRyxhQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFRLENBQUM7Z0JBQ3RFLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2YsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUN2QjtZQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMzQixTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLFlBQVksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVE7U0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBb0I7SUFDTix1QkFBaUIsR0FBL0I7UUFDRSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCx1Q0FBdUM7SUFDdkMsSUFBSTtJQUVHLHNCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFyRUQsaUJBQWlCO0lBQ0gsZUFBUyxHQUF3QyxFQUFFLENBQUM7SUFDbEUsb0JBQW9CO0lBQ04sb0JBQWMsR0FBYSxFQUFFLENBQUM7SUFtRTlDLFlBQUM7Q0FBQSxDQWpGbUIsK0NBQWUsR0FpRmxDO0FBRWMsa0lBQVUsQ0FBQyxLQUFZLENBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalF6QjtBQUN1QjtBQUNoQztBQU10QixJQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztBQUM5QztJQUF5Qiw4QkFBMEI7SUFBbkQ7UUFBQSxxRUFvQkM7UUFsQlMsYUFBTyxHQUFvQywrQ0FBZSxFQUFFLENBQUM7O0lBa0J2RSxDQUFDO0lBaEJRLHNDQUFpQixHQUF4QjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLHVEQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFDRSxPQUFPLENBQ0wsNkRBQ0UsU0FBUyxFQUFFLFNBQVMsRUFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBRWpCLDZEQUFLLFNBQVMsRUFBSyxTQUFTLFVBQU8sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQU8sQ0FDcEUsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQXBCd0IsbURBQW1CLEdBb0IzQztBQUVjLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQjFCO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFPdEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFZO0lBQzVCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDeEIsb0RBQUMsbURBQVUsUUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBYyxDQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFYSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZHhCO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFPdEMsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUFZO0lBQ3pCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDeEIsb0RBQUMsbURBQVUsUUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBYyxDQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFYSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZHJCO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFPdEMsSUFBTSxJQUFJLEdBQUcsVUFBQyxLQUFZO0lBQ3hCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDeEIsb0RBQUMsbURBQVUsUUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBYyxDQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFYSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RXO0FBQ3lDO0FBQ2xDO0FBT3RDLElBQU0sT0FBTyxHQUFHLFVBQUMsS0FBWTtJQUMzQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzVFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDaEMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ2xCLG9EQUFDLG1EQUFVLFFBQUUsUUFBUSxJQUFJLG9EQUFDLDBEQUFTLGVBQUssS0FBSyxFQUFJLENBQWMsQ0FDaEUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLG9EQUFDLDBEQUFTLGVBQUssS0FBSyxFQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBRWEsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7O0FDakJ2Qix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDL0IsbURBQW1EO0FBQ25CO0FBQ0U7QUFDUjtBQUNFO0FBd0I1QixlQUFlO0FBQ2YsU0FBUyxjQUFjLENBQUMsS0FBWTtJQUNsQyxJQUFJLE1BQU0sR0FBNkcsSUFBSSxDQUFDO0lBRTVILGdCQUFnQjtJQUNoQiw4Q0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSztRQUMzQyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDbkIsSUFBTSxZQUFZLEdBQUcsS0FBMEcsQ0FBQztZQUNoSSxJQUFNLElBQUksR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUNFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLGlEQUFRLENBQUM7Z0JBQ2pELENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLDhDQUFLLENBQUM7Z0JBQzNDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLDZDQUFJLENBQUM7Z0JBQ3pDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLGdEQUFPLENBQUMsRUFDL0M7Z0JBQ0EsTUFBTSxHQUFHLFlBQVksQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxpQ0FBaUM7SUFDakMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN4QyxNQUFNLEdBQUcsb0RBQUMsWUFBWSxDQUFDLE9BQU8sSUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBSSxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBWTtJQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEIsOENBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7UUFDM0MsSUFBTSxZQUFZLEdBQUcsS0FBNEQsQ0FBQztRQUNsRixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLGlEQUFRLEVBQUU7WUFDbEQsTUFBTSxHQUFHLFlBQVksQ0FBQztTQUN2QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFlBQVk7QUFDWjtJQUEyQixnQ0FBNkI7SUFDdEQsc0JBQVksS0FBWSxFQUFFLEtBQVk7UUFBdEMsWUFDRSxrQkFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQ3BCO1FBRU0sV0FBSyxHQUFVO1lBQ3BCLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMzQixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7O0lBTkYsQ0FBQztJQWlCYSxxQ0FBd0IsR0FBdEMsVUFBdUMsU0FBZ0IsRUFBRSxTQUFnQjtRQUN2RSxJQUNJLENBQUMsU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQzFFO1lBQ0EsT0FBTztnQkFDTCxNQUFNLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQztnQkFDakMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUMxQixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDO2FBQ3ZDLENBQUM7U0FDSDthQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQ3BGLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztnQkFDcEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO2dCQUMxQixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDO2FBQ3ZDLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUEvQkQsWUFBWTtJQUNFLHFCQUFRLEdBQW9CLGlEQUFRLENBQUM7SUFDbkQsWUFBWTtJQUNFLGlCQUFJLEdBQWdCLDZDQUFJLENBQUM7SUFDdkMsYUFBYTtJQUNDLG9CQUFPLEdBQW1CLGdEQUFPLENBQUM7SUFDaEQsY0FBYztJQUNBLGtCQUFLLEdBQWlCLDhDQUFLLENBQUM7SUF5QjVDLG1CQUFDO0NBQUEsQ0EzQzBCLCtDQUFlLEdBMkN6QztBQUVjLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQ2xINUI7QUFDQSxrQkFBa0IsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ1U7QUFDbkI7QUFRdEIsSUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsVUFBQyxLQUFZOztJQUMzQixPQUFPLENBQ0wsNkRBQUssU0FBUyxFQUFFLFNBQVM7UUFDdkIsNkRBQ0UsU0FBUyxFQUFFLHVDQUFVO2dCQUNuQixHQUFJLFNBQVMsV0FBUSxJQUFHLElBQUk7Z0JBQzVCLEdBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO29CQUMxQyxFQUNGLEtBQUssYUFDSCxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQzVCLGNBQWMsRUFBRSxLQUFLLENBQUMsZUFBZSxJQUFJLE1BQU0sRUFDL0MsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGVBQWUsSUFBSSxNQUFNLEVBQ2xELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxlQUFlLElBQUksTUFBTSxFQUNqRCxlQUFlLEVBQUUsS0FBSyxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQzVDLEtBQUssQ0FBQyxLQUFLO1lBR2hCLDZEQUFLLFNBQVMsRUFBSyxTQUFTLGlCQUFjLEdBQUksQ0FDMUMsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFYSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0o7QUFDdUI7QUFDbEQsSUFBTSxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUUsMERBQVcsR0FBRyxtQkFBTyxDQUFDLDBFQUEwQixDQUFDLENBQUMsRUFBRTtJQUM3RCxJQUFJLEVBQUUsMERBQVcsR0FBRyxtQkFBTyxDQUFDLG9FQUF1QixDQUFDLENBQUMsRUFBRTtJQUN2RCxPQUFPLEVBQUUsMERBQVcsR0FBRyxtQkFBTyxDQUFDLDBFQUEwQixDQUFDLENBQUMsRUFBRTtDQUM5RCxDQUFDO0FBT0YsSUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFDdkMsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUFpQjtJQUN0QixxQkFBSSxFQUFFLHlCQUFRLENBQVc7SUFFakMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1osNkRBQUssU0FBUyxFQUFLLFNBQVMsY0FBUyxTQUFTLGVBQVk7UUFDeEQsb0RBQUMsNkNBQUksSUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFJO1FBQzVCLDZEQUFLLFNBQVMsRUFBSyxTQUFTLGVBQVksSUFBRyxRQUFRLENBQU8sQ0FDdEQsQ0FDUCxDQUFDLENBQUMsQ0FBQyxDQUNGLDZEQUFLLFNBQVMsRUFBSyxTQUFTLFVBQU87UUFDakMsNkRBQUssU0FBUyxFQUFLLFNBQVMsZ0JBQWEsSUFBRyxRQUFRLENBQU8sQ0FDdkQsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRWEsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7O0FDL0JyQix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0MrQjtBQUNPO0FBQ0c7QUFDTztBQUMxQjtBQWF0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFFdkMsU0FBUyxZQUFZO0lBQ25CLElBQU0sSUFBSSxHQUFHLFdBQVMsR0FBSyxDQUFDO0lBQzVCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUVEO0lBQW9CLHlCQUEwQjtJQUM1QyxlQUFZLEtBQVk7UUFBeEIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQU9NLFdBQUssR0FBVTtZQUNwQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7UUF3QkYsZ0NBQWdDO1FBQ3hCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBbENuQyxDQUFDO0lBV2EsVUFBSSxHQUFsQixVQUFtQixPQUFlLEVBQUUsUUFBaUI7UUFDbkQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsZ0RBQWUsQ0FBQyxDQUNkLG9EQUFDLEtBQUssSUFBQyxRQUFRLEVBQUUsUUFBUSxJQUFHLE9BQU8sQ0FBUyxDQUM3QyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVhLGFBQU8sR0FBckIsVUFBc0IsT0FBZTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxnREFBZSxDQUFDLENBQ2Qsb0RBQUMsS0FBSyxJQUFDLFNBQVMsRUFBSyxTQUFTLGFBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksVUFBRSxPQUFPLENBQVMsQ0FDbEYsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFYSxXQUFLLEdBQW5CO1FBQ0UsSUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFLENBQUM7UUFDakMsZ0VBQStCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU9NLGlDQUFpQixHQUF4QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTSxvQ0FBb0IsR0FBM0I7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVPLHVCQUFPLEdBQWYsVUFBZ0IsS0FBYztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTywrQkFBZSxHQUF2QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTywrQkFBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQTBCLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQTRCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTSxzQkFBTSxHQUFiOztRQUNRLG1CQUFnQyxFQUE5QixjQUFJLEVBQUUsd0JBQXdCLENBQUM7UUFDdkMsT0FBTyxDQUNMLDZEQUNFLFNBQVMsRUFBRSx1Q0FBVSxDQUFDLFNBQVM7Z0JBQzdCLEdBQUMsU0FBUyxJQUFHLElBQUk7Z0JBQ2pCLEdBQUksU0FBUyxVQUFPLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUN0QyxHQUFJLFNBQVMsVUFBTyxJQUFHLElBQUk7Z0JBQzNCLEdBQUksU0FBUyxZQUFTLElBQUcsQ0FBQyxJQUFJO29CQUM5QjtZQUVGLG9EQUFDLDhDQUFTLGVBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBYSxDQUN4RCxDQUNQLENBQUM7SUFDSixDQUFDO0lBdEdhLGtCQUFZLEdBQVU7UUFDbEMsSUFBSSxFQUFFLFNBQVM7UUFDZixRQUFRLEVBQUUsQ0FBQztLQUNaLENBQUM7SUFvR0osWUFBQztDQUFBLENBNUdtQixtREFBbUIsR0E0R3RDO0FBRWMsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSThCO0FBQ3JCO0FBQ1k7QUFFMUM7SUFBa0IsdUJBQU87SUFDdkIsYUFBWSxPQUFnQixFQUFFLEtBQWE7UUFBM0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FHYjtRQUdTLFdBQUssR0FBWSxJQUFJLENBQUM7UUFKOUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFLRCxXQUFXO0lBQ0Usa0JBQUksR0FBakI7Ozs7Z0JBQ0UsaUJBQWlCO2dCQUNqQixJQUFJLDhDQUFPLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtvQkFDL0Isc0JBQU87aUJBQ1I7Z0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUM3QixXQUFXLEdBQUssT0FBTyxZQUFaLENBQWE7Z0JBQ2hDLHdDQUF3QztnQkFFeEMsb0JBQW9CO2dCQUNwQixxREFBcUQ7Z0JBQ3JELElBQUk7Z0JBRUosc0JBQXNCO2dCQUN0QixlQUFlO2dCQUNmLHVDQUF1QztnQkFFdkMsVUFBVTtnQkFDViwrQ0FBK0M7Z0JBQy9DLG9CQUFvQjtnQkFDcEIseUVBQXlFO2dCQUN6RSxNQUFNO2dCQUVOLHdDQUF3QztnQkFDeEMsb0RBQW9EO2dCQUVwRCw0QkFBNEI7Z0JBQzVCLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBQ3RCLHVCQUF1QjtnQkFDdkIsWUFBWTtnQkFDWixRQUFRO2dCQUVSLGtDQUFrQztnQkFDbEMsa0NBQWtDO2dCQUNsQyxhQUFhO2dCQUNiLDZDQUE2QztnQkFDN0MsTUFBTTtnQkFDTixXQUFXO2dCQUNULHlDQUF5QztnQkFDM0MsSUFBSTtnQkFDSixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O0tBQzNCO0lBRWEscUJBQU8sR0FBckIsVUFBc0IsV0FBbUIsRUFBRSxVQUFtQjs7OztnQkFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDVixNQUFNLEVBQUU7d0JBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNkLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRTs0QkFDSixXQUFXO3lCQUNaO3FCQUNGO2lCQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO29CQUNmLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7d0JBQy9CLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTs0QkFFbkIsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dDQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUMxQjs0QkFFRCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3ZDOzZCQUFNOzRCQUNMLElBQUksVUFBVSxFQUFFO2dDQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUM1Qzt5QkFDRjtxQkFDRjt5QkFBTTt3QkFDTCx3REFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQjtvQkFDRCxNQUFNLEdBQUcsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQzs7OztLQUNKO0lBQ0gsVUFBQztBQUFELENBQUMsQ0ExRmlCLG9EQUFPLEdBMEZ4QjtBQUVjLGtFQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GK0I7QUFDWjtBQUVQO0FBQ1U7QUFDSjtBQUNKO0FBQ0U7QUFDYztBQUNUO0FBQ0E7QUFDVztBQW9EbkQsSUFBTSxXQUFXLEdBQUcsQ0FBQyxpREFBZSxFQUFFLCtDQUFhLEVBQUUsOENBQVksRUFBRSw2Q0FBVyxFQUFFLDRDQUFVLEVBQUUscURBQW1CLENBQUMsQ0FBQztBQUVqSDtJQUNFLGlCQUFZLE9BQXdCLEVBQUUsT0FBZ0I7UUFBdEQsaUJBYUM7UUFnQkQsaUJBQWlCO1FBQ0QsU0FBSSxHQUF1QyxJQUFJLCtEQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQTdCbEcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXLEVBQUUsQ0FBQztZQUN2RyxJQUFNLFVBQVUsR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzNDLElBQU0sV0FBVyxHQUFJLE9BQWUsQ0FBQyxVQUFVLENBQW1CLENBQUM7WUFFbEUsS0FBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUF5QkQsb0NBQW9DO0lBQzVCLDJCQUFTLEdBQWpCLFVBQWtCLFFBQXFCLEVBQUUsUUFBaUI7UUFDeEQsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDM0MsUUFBUSxFQUFFLENBQUM7U0FDWjthQUFNLElBQUksUUFBUSxFQUFFO1lBQ25CLElBQUksNkRBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDcEIsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsdURBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7U0FDRjthQUFNO1lBQ0wsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUU3QixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ2pELGlDQUFTLENBQWE7Z0JBQzlCLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDaEUsSUFBTSxRQUFRLEdBQUcsa0VBQVcsQ0FBQyxtREFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRS9ELFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLGVBQWUsR0FBRyxhQUFhLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7YUFDbkU7U0FDRjtJQUNILENBQUM7SUFFTSx5QkFBTyxHQUFkLFVBQWUsSUFBb0I7UUFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFNLFFBQVEsZ0JBQ1QsSUFBSSxJQUNQLFdBQVcsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsR0FDNUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRWMsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpxRDtBQUVsQztBQUNNO0FBQ0U7QUFXbEQ7SUFBNEIsd0JBQU87SUFDakMsY0FBWSxPQUFnQixFQUFFLEtBQWE7UUFBM0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FHYjtRQUdNLFVBQUksR0FBUyxJQUFJLCtEQUFJLENBQUM7WUFDM0IsT0FBTyxFQUFFLEtBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxXQUFXO1FBQ0osU0FBRyxHQUFVLElBQUksZ0VBQUssQ0FBQztZQUM1QixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxNQUFNO1lBQ3pGLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZiw4RUFBOEU7WUFDOUUsSUFBSSxFQUFFLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBVCxDQUFTO1NBQ3RCLENBQUMsQ0FBQztRQUVILFVBQVU7UUFDSCxzQkFBZ0IsR0FBVSxJQUFJLGdFQUFLLENBQUM7WUFDekMsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsS0FBSztZQUNoQixRQUFRLEVBQUUsSUFBSTtZQUNkLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBVCxDQUFTO1NBQ3RCLENBQUMsQ0FBQztRQUVILFNBQVM7UUFDRixjQUFRLEdBQVUsSUFBSSxnRUFBSyxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLFFBQVEsRUFBRSxVQUFDLEtBQXlCO2dCQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFFM0MsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDN0Q7Z0JBRUQsT0FBTyxTQUFTLENBQUM7WUFDbkIsQ0FBQztZQUNELElBQUksRUFBRSxjQUFNLFlBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUztTQUN0QixDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ04sZ0JBQVUsR0FBVSxJQUFJLGdFQUFLLENBQUM7WUFDbkMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxvQkFBb0I7WUFDcEIsUUFBUSxFQUFFLFVBQUMsS0FBeUI7Z0JBQ2xDLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEtBQUssQ0FBQztnQkFFcEQsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxJQUFJLEVBQUUsY0FBTSxZQUFJLENBQUMsSUFBSSxFQUFULENBQVM7U0FDdEIsQ0FBQyxDQUFDO1FBakVELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztJQUN2QixDQUFDO0lBa0VELGVBQWU7SUFDUix3QkFBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7SUFDRSxtQkFBSSxHQUFqQixVQUFrQixNQUFlOzs7O2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNWLE1BQU0sRUFBRTt3QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2QsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7b0JBQ2YsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFFL0IsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMxQjt3QkFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFOzRCQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMzQjt3QkFFRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7cUJBQ2xCO3lCQUFNO3dCQUNMLHdEQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDN0I7Z0JBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztvQkFDWCxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JCO29CQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7d0JBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3RCO29CQUNELHdEQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuQixNQUFNLEdBQUcsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQzs7OztLQUNKO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FuSDJCLG9EQUFPLEdBbUhsQztBQUVjLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSWE7QUFFakM7SUFBdUIsNEJBQVc7SUFDaEMsa0JBQVksT0FBZ0IsRUFBRSxLQUFxQjtlQUNqRCxrQkFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQUpzQiw2Q0FBVyxHQUlqQztBQUVjLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUztBQUVqQztJQUFvQix5QkFBVztJQUM3QixlQUFZLE9BQWdCLEVBQUUsS0FBcUI7ZUFDakQsa0JBQU0sT0FBTyxFQUFFLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0FKbUIsNkNBQVcsR0FJOUI7QUFFYyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlk7QUFFakM7SUFBbUIsd0JBQVc7SUFDNUIsY0FBWSxPQUFnQixFQUFFLEtBQXFCO2VBQ2pELGtCQUFNLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLENBSmtCLDZDQUFXLEdBSTdCO0FBRWMsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JhO0FBRWpDO0lBQXFCLDBCQUFXO0lBQzlCLGdCQUFZLE9BQWdCLEVBQUUsS0FBcUI7ZUFDakQsa0JBQU0sT0FBTyxFQUFFLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQ0FKb0IsNkNBQVcsR0FJL0I7QUFFYyxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnNEO0FBRWxDO0FBTTFDO0lBQTJCLGdDQUFPO0lBQ2hDLHNCQUFZLE9BQWdCLEVBQUUsS0FBcUI7ZUFDakQsa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVc7SUFDRSwyQkFBSSxHQUFqQixVQUFrQixNQUFjOzs7O2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNWLE1BQU0sRUFBRTt3QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2QsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7b0JBQ2YsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDL0IsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMxQjt3QkFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFOzRCQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMzQjtxQkFDRjt5QkFBTTt3QkFDTCx3REFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQjtvQkFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO3dCQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN0QjtvQkFDRCx3REFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbkIsTUFBTSxHQUFHLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7Ozs7S0FDSjtJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQXJDMEIsb0RBQU8sR0FxQ2pDO0FBRWMsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQzlDNUI7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFnQmpDLElBQUksWUFBWSxHQUFXLE1BQU0sQ0FBQztBQUV6QyxjQUFjO0FBQ0MsU0FBUyxTQUFTLENBQUMsTUFBYztJQUN0Qyw4QkFBUSxFQUFFLGtCQUFJLEVBQUUsZ0JBQUcsRUFBRSxjQUFFLEVBQUUsMEJBQVEsRUFBRSw0QkFBUyxDQUFZO0lBQ2hFLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNyQixJQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRTlELFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDZixRQUFRO1FBQ1IsVUFBVTtRQUNWLFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSx1REFBSSxDQUFDLE1BQU07U0FDcEI7UUFDRCxXQUFXLEVBQUUsUUFBUTtRQUNyQixTQUFTO0tBQ1YsQ0FBQyxDQUFDO0lBRUgsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLHVEQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDaUNEO0FBQUE7QUFBTyxTQUFTLGFBQWEsQ0FBQyxNQUFjLEVBQUUsV0FBbUIsRUFBRSxLQUEyQjtJQUM1RixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFbEUsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQUksYUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFHLENBQUM7QUFDNUcsQ0FBQztBQUVELElBQU0sS0FBSyxHQUFHO0lBQ1osTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3BCLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3BCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLEVBQUU7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUNELFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUNELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN0QyxhQUFhLEVBQUUsRUFBRTtLQUNsQjtJQUNELGFBQWEsRUFBRTtRQUNiLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtDQUNGLENBQUM7QUFFYSxvRUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7QUM3STlCLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDdEMsSUFBTSxNQUFNLEdBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBRXpHLFNBQVMsZ0JBQWdCO0lBQ3ZCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxJQUFJLGFBQWEsRUFBRTtRQUNqQixPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFEO1NBQU07UUFDTCxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYTtJQUNwQixJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBRXpELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFFYztJQUNiLEtBQUssRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxNQUFNLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsU0FBUztJQUNULE1BQU07SUFDTixPQUFPLEVBQUUsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO0NBQ2pFLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ1c7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLGFBQW9CO0FBQ2hDO0FBQ0EsYUFBYSxPQUFtQjtBQUNoQyxlQUFlLFNBQXFCO0FBQ3BDLGdCQUFnQixTQUFzQjtBQUN0QyxpQkFBaUIsU0FBdUI7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUE2QztBQUU3QyxjQUFjO0FBQ0MsU0FBUyxjQUFjO0lBQ3BDLElBQU0sZUFBZSxHQUFHLElBQUksd0RBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLDJDQUEyQztJQUMzQyxJQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFLLGVBQWUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVqTCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQUE7QUFBZSxTQUFTLFFBQVE7SUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDMUgsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRW5JLE9BQU8sUUFBUSxJQUFJLE9BQU8sQ0FBQztBQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFlLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDN0MsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0MsR0FBRyxJQUFJLFNBQVMsQ0FBQztLQUNsQjtJQUVELE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNEO0FBQ007QUFFekIsU0FBUyxjQUFjLENBQUMsV0FBb0I7SUFDekQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFFbEMscUJBQXFCO0lBQ3JCLElBQUksV0FBVyxFQUFFO1FBQ2YsSUFBTSxTQUFPLEdBQUcsU0FBdUIsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFFLDREQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDLHlEQUF5QixFQUFFLENBQUM7UUFDdEgsU0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM5QjtTQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDaEI7OztVQUdFO1FBQ0YsSUFBTSxLQUFLLEdBQUcseURBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQU0sU0FBTyxHQUFHLFNBQXVCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBRSw0REFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQyx5REFBeUIsRUFBRSxDQUFDO1FBRXRILElBQUksS0FBSyxFQUFFO1lBQ1QsU0FBTyxDQUFDLE9BQU8sQ0FBQyw0REFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckM7S0FDRjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBLGNBQWM7QUFDQyxTQUFTLE9BQU8sQ0FBQyxLQUFVO0lBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDN0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBLG1CQUFtQjtBQUNKLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDeEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSEQ7QUFBQTtBQUFBO0FBQThCO0FBRWYsU0FBUyxlQUFlLENBQUMsS0FBYTtJQUNuRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsSUFBSSwrQ0FBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDM0IsSUFBTSxRQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxRQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFDdkMsUUFBTSxDQUFDLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztRQUN6RCxRQUFNLENBQUMsTUFBTSxHQUFHO1lBQ2QsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQU0sQ0FBQyxDQUFDO0tBQ25DO0lBRUQsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQWUsU0FBUyxXQUFXLENBQUMsR0FBVztJQUM3QyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixJQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEO0lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBLElBQU0sVUFBVSxHQUFHLFNBQXNCLENBQUM7QUFDMUMsSUFBTSxPQUFPLEdBQUcsT0FBbUIsQ0FBQztBQUNwQyxJQUFNLFdBQVcsR0FBRyxVQUFVLElBQUcsZ0JBQWMsT0FBTyxVQUFPLEVBQUM7QUFFOUQsZUFBZTtBQUNBLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFBQSxJQUFJLFlBQXVDLENBQUM7QUFDNUMsK0JBQStCO0FBQy9CLElBQUk7SUFDRixZQUFZLEdBQUcsZUFBZSxJQUFJLG1CQUFPLENBQUMsMkZBQW1CLENBQThCLENBQUM7Q0FDN0Y7QUFBQyxPQUFPLEdBQUcsRUFBRTtJQUNaLFlBQVksR0FBRyxtQkFBTyxDQUFDLDJGQUFtQixDQUE4QixDQUFDO0NBQzFFO0FBRUQsTUFBTSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFFdkIsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ1Y1QjtBQUFBLElBQU0sT0FBTyxHQUFHO0lBQ2QsU0FBUztJQUNULEtBQUssRUFBRSxvQ0FBb0M7SUFDM0MsU0FBUztJQUNULE1BQU0sRUFBRSxPQUFPO0lBQ2Ysb0JBQW9CO0lBQ3BCLElBQUksRUFBRSxnQ0FBZ0M7SUFDdEMsU0FBUztJQUNULElBQUksRUFBRSx5QkFBeUI7SUFDL0IsVUFBVTtJQUNWLEdBQUcsRUFBRSwyQ0FBMkM7SUFDaEQsVUFBVTtJQUNWLFFBQVEsRUFBRSx1Q0FBdUM7SUFDakQsU0FBUztJQUNULEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsU0FBUztJQUNULE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFLDRPQUE0TztJQUNwUCxlQUFlO0lBQ2YsS0FBSyxFQUFFLG9FQUFvRTtDQUM1RSxDQUFDO0FBRWE7SUFDYixTQUFTO0lBQ1QsK0NBQStDO0lBQy9DLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsSUFBSSxFQUFFLFVBQUMsS0FBYTtRQUNsQixJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxVQUFVO0lBQ1YsR0FBRyxFQUFFLFVBQUMsS0FBYTtRQUNqQixJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxhQUFhO0lBQ2IscURBQXFEO0lBQ3JELFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULE9BQU8sRUFBRSxVQUFDLEtBQWE7UUFDckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsV0FBVztJQUNYLE1BQU0sRUFBRSxVQUFDLEtBQWE7UUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBR0YsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pERjtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNpQjtBQUUvQyxTQUFTLGdCQUFnQixDQUFDLE9BQW9CO0lBQzVDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUIsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDMUcsQ0FBQztBQUVjLFNBQVMsa0JBQWtCLENBQUMsT0FBdUI7SUFDaEUsSUFBTSxjQUFjLEdBQUcsNERBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUVwQixJQUFJLGNBQWMsRUFBRTtRQUNsQixJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQXlCLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxLQUFvQixDQUFDLEVBQUU7Z0JBQ3hFLFdBQVcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25DO1NBQ0Y7S0FDRjtJQUVELE9BQU8sK0NBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQ3JDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7QUF1QnpELGdCQUFnQjtBQUNoQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzdCLGVBQWU7QUFDZixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzNCLGtCQUFrQjtBQUNsQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzdCLGFBQWE7QUFDYixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3JDLFdBQVc7QUFDWCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2xDLGFBQWE7QUFDYixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3ZDLGlCQUFpQjtBQUNqQixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdkIsZ0JBQWdCO0FBQ2hCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixnQkFBZ0I7QUFDaEIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLHlCQUF5QjtBQUN6QixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsV0FBVztBQUNYLElBQU0sY0FBYyxHQUFHLDJFQUFjLEVBQUUsQ0FBQztBQUN4QywwQkFBMEI7QUFDMUIsSUFBSSxTQUF3QixDQUFDO0FBQzdCLGdCQUFnQjtBQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBYztBQUNkLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUVqQixRQUFRLHVEQUFHLEVBQUU7SUFDWCxVQUFVO0lBQ1YsS0FBSyxZQUFZO1FBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNO0lBQ1IsV0FBVztJQUNYLEtBQUssWUFBWTtRQUNmLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBUyxHQUFHLGNBQU0sU0FBRSxFQUFGLENBQUUsQ0FBQztRQUNyQixNQUFNO0lBQ1IsVUFBVTtJQUNWO1FBQ0UsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixTQUFTLEdBQUcsY0FBTSxTQUFFLEVBQUYsQ0FBRSxDQUFDO1FBQ3JCLE1BQU07Q0FDVDtBQUVjO0lBQ2IsVUFBVTtJQUNWLEdBQUcsRUFBRTtRQUNILFVBQVU7UUFDVixXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87S0FDUjtJQUNELFlBQVk7SUFDWixPQUFPLEVBQUU7UUFDUCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixjQUFjO0tBQ2Y7SUFDRCxVQUFVO0lBQ1YsRUFBRSxFQUFFO1FBQ0YsTUFBTTtRQUNOLEtBQUs7UUFDTCxNQUFNO1FBQ04sVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO0tBQ1Y7SUFDRCxZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ1IsR0FBRyxFQUFFLFdBQVc7S0FDakI7Q0FDRixFQUFDOzs7Ozs7Ozs7Ozs7O0FDckdGO0FBQUE7QUFBQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ0g7QUFDbkMsZ0NBQWdDO0FBRWpCO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0NBRVQsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDZCO0FBQ1c7QUFDaEI7QUFDYTtBQUN2QyxzREFBc0Q7QUFDdEQsMkRBQTJEO0FBQ1o7QUFDSjtBQUMzQyxnREFBZ0Q7QUFDUDtBQUN6QywrQkFBK0I7QUFDRDtBQUNrQjtBQUNoRCxzREFBc0Q7QUFDdEQsc0NBQXNDO0FBRXRDLHlEQUFNLENBQUMsTUFBTSxHQUFHO0FBQ2QseURBQXlEO0NBQzFELENBQUM7QUFFRix5REFBTSxDQUFDLFFBQVEsR0FBRyxVQUFDLEtBQXdCLElBQUssUUFDOUMsb0RBQUMsdURBQU0sSUFBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFDN0IseURBQU0sQ0FBQyxNQUFNLENBQ1AsQ0FDVixFQUorQyxDQUkvQyxDQUFDO0FBRUY7SUFBa0IsdUJBQW9CO0lBQ3BDLGFBQVksS0FBVTtRQUF0QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQXdCYjtRQXRCQyw0Q0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsK0NBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNyRCxnRUFBTyxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2xELGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsaUNBQWlDO1FBQ2pDLDJCQUEyQjtRQUMzQixLQUFLO1FBQ0wsMERBQU8sQ0FBQyxXQUFXLEdBQUc7WUFDcEIsV0FBVyxFQUFFLCtDQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQzVDLFVBQVUsRUFBRSwrQ0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVTtTQUMzQyxDQUFDO1FBQ0YsMERBQU8sQ0FBQyxhQUFhLEdBQUc7WUFDdEIsV0FBVyxFQUFFLCtDQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQzVDLFVBQVUsRUFBRSwrQ0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVTtTQUMzQyxDQUFDO1FBQ0Ysd0RBQU0sQ0FBQyxPQUFPLEdBQUcsK0NBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOztRQUVwQyxTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLHFDQUFxQztRQUNyQyxJQUFJO0lBRU4sQ0FBQztJQUVNLG9CQUFNLEdBQWI7UUFDRSxPQUFPO1FBQ0wsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFDdkMscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsV0FBVztRQUNWO1lBQ0Usb0RBQUMsZ0VBQU8sSUFDUCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFDM0MsSUFBSSxFQUFDLG9CQUFLLEVBQ1YsVUFBVSxFQUFDLDBCQUFNLEVBQ2pCLEdBQUcsRUFBQyxlQUFlLEdBQ25CLENBQ0csQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLENBbERpQiwrQ0FBZSxHQWtEaEM7QUFFYyxrRUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7QUMvRW5CO0FBQ0Esa0JBQWtCLCtsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RhO0FBQ087QUFDUztBQVcvQztJQUFzQiwyQkFBNkI7SUFDakQsaUJBQVksS0FBWSxFQUFFLEtBQVk7ZUFDcEMsa0JBQU0sS0FBSyxFQUFFLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU0sd0JBQU0sR0FBYjtRQUNRLG1CQUFnRCxFQUE5QyxzQkFBUSxFQUFFLGNBQUksRUFBRSwwQkFBVSxFQUFFLFlBQWtCLENBQUM7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQ0wsNkRBQUssU0FBUyxFQUFFLHFEQUFlO1lBRTdCLDZEQUFLLFNBQVMsRUFBRSxzREFBZ0I7Z0JBQzlCLG9EQUFDLGdFQUFPLElBQ04sU0FBUyxFQUFFLHVEQUFpQixFQUM1QixZQUFZLEVBQUMsOEJBQThCLEdBQzNDO2dCQUNGLDZEQUFLLFNBQVMsRUFBRSx3REFBa0I7b0JBQ2hDLHVHQUFlO29CQUNmLDhEQUFNLFNBQVMsRUFBRSwrQ0FBUywrQkFBYTtvQkFDdkMsOERBQU0sU0FBUyxFQUFFLCtDQUFTLCtCQUFhO29CQUN2Qyw4REFBTSxTQUFTLEVBQUUsK0NBQVMsK0JBQWE7b0JBQ3ZDLDhEQUFNLFNBQVMsRUFBRSwrQ0FBUyx5QkFBWTtvQkFDdEM7d0JBQUcsbUdBQWtCO3dCQUFBLDZLQUFnQyxDQUFJLENBQ3JELENBQ0Y7WUFFTiw2REFBSyxTQUFTLEVBQUUseURBQW1CO2dCQUNqQyxvREFBQyxnRUFBTyxJQUNOLFNBQVMsRUFBRSxvREFBYyxFQUN6QixZQUFZLEVBQUMsMEJBQTBCLEdBQ3ZDO2dCQUNBO29CQUNFO3dCQUFJLDhEQUFNLFNBQVMsRUFBRSxxREFBZSxtQkFBVzt3QkFBQSwrREFBSzt3QkFDbEQsOERBQU0sU0FBUyxFQUFFLHFEQUFlLFlBQWM7d0JBQUEsOERBQU0sU0FBUyxFQUFFLHFEQUFlOzs0QkFBSSxxRUFBWSxDQUFPLENBQ2xHO29CQUNMO3dCQUFJLDhEQUFNLFNBQVMsRUFBRSxxREFBZSwrQkFBYTt3QkFBQSwrREFBSzt3QkFDcEQsOERBQU0sU0FBUyxFQUFFLHFEQUFlLFlBQWM7d0JBQUEsOERBQU0sU0FBUyxFQUFFLHFEQUFlOzs0QkFBSSxxRUFBWSxDQUFPLENBQ2xHO29CQUNMO3dCQUFJLDhEQUFNLFNBQVMsRUFBRSxxREFBZSwrQkFBYTt3QkFBQSwrREFBSzt3QkFDcEQsOERBQU0sU0FBUyxFQUFFLHFEQUFlLFlBQWM7d0JBQUEsOERBQU0sU0FBUyxFQUFFLHFEQUFlOzs0QkFBSSxxRUFBWSxDQUFPLENBQ2xHLENBQ0YsQ0FDSDtZQUVOLDZEQUFLLFNBQVMsRUFBRSxnREFBVTtnQkFDdEI7b0JBQ0U7d0JBQUksOERBQU0sU0FBUyxFQUFFLGlEQUFXLEdBQVM7d0JBQUEsK0RBQUs7d0JBQUEsOERBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQywrQkFBYSxDQUFLO29CQUMvRjt3QkFBSSw4REFBTSxTQUFTLEVBQUUsaURBQVcsR0FBUzt3QkFBQSwrREFBSzt3QkFBQSw4REFBTSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLHFCQUFhLENBQUs7b0JBQy9GO3dCQUFJLDhEQUFNLFNBQVMsRUFBRSxpREFBVyxHQUFTO3dCQUFBLCtEQUFLO3dCQUFBLDhEQUFNLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMscUNBQWMsQ0FBSztvQkFDaEc7d0JBQUksOERBQU0sU0FBUyxFQUFFLGlEQUFXLEdBQVM7d0JBQUEsK0RBQUs7d0JBQUEsOERBQU0sS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQywrQkFBYSxDQUFLLENBQzVGLENBQ0g7WUFHTiw2REFBSyxTQUFTLEVBQUUsa0RBQVk7Z0JBQzFCLDZEQUFLLFNBQVMsRUFBRSxtREFBYTtvQkFDM0IsNkRBQUssU0FBUyxFQUFFLGtEQUFZO3dCQUMxQiw2REFBSyxHQUFHLEVBQUMseUJBQXlCLEVBQ2hDLFNBQVMsRUFBRSxrREFBWSxHQUN2Qjt3QkFNRiw4REFBTSxTQUFTLEVBQUUsZ0RBQVU7NEJBQ3pCLG9FQUFTLElBQUksQ0FBVTs7NEJBQ3ZCLDhEQUFNLFNBQVMsRUFBRSxzREFBZ0IsSUFBRyxVQUFVLENBQVE7NEJBQUEsK0RBQUs7NEJBQzNELDhEQUFNLFNBQVMsRUFBRSwrQ0FBUyxJQUFHLEdBQUcsQ0FBUSxDQUNuQzt3QkFDUCwwSUFBbUIsQ0FDZjtvQkFFSiw2REFDRSxTQUFTLEVBQUUsa0RBQVksRUFDdkIsR0FBRyxFQUFDLDJCQUEyQixHQUMvQixDQUNBLENBQ0YsQ0FFRixDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQ0F0RnFCLCtDQUFlLEdBc0ZwQztBQUVjLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNyR3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBQWlEO0FBRWpCO0FBQ0U7QUFDRTtBQUNFO0FBQ2I7QUFDQTtBQUNJO0FBQ0U7QUFDTztBQUNKO0FBRWxDLGdEQUFlLENBQ2Isb0RBQUMscURBQUcsT0FBRyxFQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUM7Ozs7Ozs7Ozs7OztBQ2hCRiw2QyIsImZpbGUiOiIuL2pzL2luZGV4XzEuMC4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5L2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXCIpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU2V0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuNScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjVcbiAqIGNyZWF0ZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nV2l0aG91dFN0YWNrKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiA4KSB7XG4gICAgICAvLyBDaGVjayBiZWZvcmUgdGhlIGNvbmRpdGlvbiB0byBjYXRjaCB2aW9sYXRpb25zIGVhcmx5LlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3YXJuaW5nV2l0aG91dFN0YWNrKCkgY3VycmVudGx5IHN1cHBvcnRzIGF0IG1vc3QgOCBhcmd1bWVudHMuJyk7XG4gICAgfVxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICAgIH0pO1xuICAgICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7XG5cbiAgICAgIC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmVycm9yLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrJDEgPSB3YXJuaW5nV2l0aG91dFN0YWNrO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbihjb25maWcpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IGNvbmZpZy5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBfc3Vic2NyaWJlID0gY29uZmlnLnN1YnNjcmliZTtcblxuXG4gICEodHlwZW9mIGdldEN1cnJlbnRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdTdWJzY3JpcHRpb24gbXVzdCBzcGVjaWZ5IGEgZ2V0Q3VycmVudFZhbHVlIGZ1bmN0aW9uJykgOiB2b2lkIDA7XG4gICEodHlwZW9mIF9zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnU3Vic2NyaXB0aW9uIG11c3Qgc3BlY2lmeSBhIHN1YnNjcmliZSBmdW5jdGlvbicpIDogdm9pZCAwO1xuXG4gIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYnZhdWdobi9kNTY5MTc3ZDcwYjUwYjU4YmZmNjljM2M0YTUzNTNmM1xuICB2YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3Vic2NyaXB0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWJzY3JpcHRpb24pO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNvdXJjZTogX3RoaXMucHJvcHMuc291cmNlLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMuc291cmNlICE9IG51bGwgPyBnZXRDdXJyZW50VmFsdWUoX3RoaXMucHJvcHMuc291cmNlKSA6IHVuZGVmaW5lZFxuICAgICAgfSwgX3RoaXMuX2hhc1VubW91bnRlZCA9IGZhbHNlLCBfdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBTdWJzY3JpcHRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnNvdXJjZSAhPT0gcHJldlN0YXRlLnNvdXJjZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNvdXJjZTogbmV4dFByb3BzLnNvdXJjZSxcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnNvdXJjZSAhPSBudWxsID8gZ2V0Q3VycmVudFZhbHVlKG5leHRQcm9wcy5zb3VyY2UpIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH07XG5cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc291cmNlICE9PSBwcmV2U3RhdGUuc291cmNlKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuXG4gICAgICAvLyBUcmFjayBtb3VudGVkIHRvIGF2b2lkIGNhbGxpbmcgc2V0U3RhdGUgYWZ0ZXIgdW5tb3VudGluZ1xuICAgICAgLy8gRm9yIHNvdXJjZSBsaWtlIFByb21pc2VzIHRoYXQgY2FuJ3QgYmUgdW5zdWJzY3JpYmVkIGZyb20uXG4gICAgICB0aGlzLl9oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc291cmNlID0gdGhpcy5zdGF0ZS5zb3VyY2U7XG5cbiAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICB2YXIgX2NhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5faGFzVW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBza2lwIHRoZSB1bm5lY2Vzc2FyeSBzdGF0ZSB1cGRhdGUuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGJlbG9uZ3MgdG8gYW4gb2xkIG9yIHVuY29tbWl0dGVkIGRhdGEgc291cmNlLCBpZ25vcmUgaXQuXG4gICAgICAgICAgICBpZiAoc291cmNlICE9PSBzdGF0ZS5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSB1bnN1YnNjcmliZSBtZXRob2QgZm9yIGxhdGVyIChpbiBjYXNlIHRoZSBzdWJzY3JpYmFibGUgcHJvcCBjaGFuZ2VzKS5cbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gX3N1YnNjcmliZShzb3VyY2UsIF9jYWxsYmFjayk7XG4gICAgICAgICEodHlwZW9mIHVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSA/IGludmFyaWFudChmYWxzZSwgJ0Egc3Vic2NyaXB0aW9uIG11c3QgcmV0dXJuIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uLicpIDogdm9pZCAwO1xuXG4gICAgICAgIC8vIEl0J3Mgc2FmZSB0byBzdG9yZSB1bnN1YnNjcmliZSBvbiB0aGUgaW5zdGFuY2UgYmVjYXVzZVxuICAgICAgICAvLyBXZSBvbmx5IHJlYWQgb3Igd3JpdGUgdGhhdCBwcm9wZXJ0eSBkdXJpbmcgdGhlIFwiY29tbWl0XCIgcGhhc2UuXG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG5cbiAgICAgICAgLy8gRXh0ZXJuYWwgdmFsdWVzIGNvdWxkIGNoYW5nZSBiZXR3ZWVuIHJlbmRlciBhbmQgbW91bnQsXG4gICAgICAgIC8vIEluIHNvbWUgY2FzZXMgaXQgbWF5IGJlIGltcG9ydGFudCB0byBoYW5kbGUgdGhpcyBjYXNlLlxuICAgICAgICB2YXIgX3ZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKHRoaXMucHJvcHMuc291cmNlKTtcbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogX3ZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59XG5cbmV4cG9ydHMuY3JlYXRlU3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL2NyZWF0ZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvY3JlYXRlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIHJlc29sdmVQYXRobmFtZSA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZXNvbHZlLXBhdGhuYW1lJykpO1xudmFyIHZhbHVlRXF1YWwgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgndmFsdWUtZXF1YWwnKSk7XG52YXIgd2FybmluZyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd0aW55LXdhcm5pbmcnKSk7XG52YXIgaW52YXJpYW50ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3RpbnktaW52YXJpYW50JykpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59XG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbjtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSByZXNvbHZlUGF0aG5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiB2YWx1ZUVxdWFsKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICB3YXJuaW5nKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKTtcbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJyk7XG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cblxuZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBpbnZhcmlhbnQoZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IHZvaWQgMDtcbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSBzdXBwb3J0c0hpc3RvcnkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gIXN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IF9wcm9wcy5mb3JjZVJlZnJlc2gsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBfcHJvcHMkZm9yY2VSZWZyZXNoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmb3JjZVJlZnJlc2gsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHZvaWQgMCA/IGdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdmFyIF9yZWYgPSBoaXN0b3J5U3RhdGUgfHwge30sXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgcGF0aG5hbWUgPSBfd2luZG93JGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2ggPSBfd2luZG93JGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB3YXJuaW5nKCFiYXNlbmFtZSB8fCBoYXNCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpO1xuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9IHN0cmlwQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpKSByZXR1cm47XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICB2YXIgbmV4dEtleXMgPSBhbGxLZXlzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEgJiYgZGVsdGEgPT09IDEpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbnZhciBIYXNoQ2hhbmdlRXZlbnQkMSA9ICdoYXNoY2hhbmdlJztcbnZhciBIYXNoUGF0aENvZGVycyA9IHtcbiAgaGFzaGJhbmc6IHtcbiAgICBlbmNvZGVQYXRoOiBmdW5jdGlvbiBlbmNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aCA6ICchLycgKyBzdHJpcExlYWRpbmdTbGFzaChwYXRoKTtcbiAgICB9LFxuICAgIGRlY29kZVBhdGg6IGZ1bmN0aW9uIGRlY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG4gICAgfVxuICB9LFxuICBub3NsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogc3RyaXBMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoXG4gIH0sXG4gIHNsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaFxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaGFzaEluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBoYXNoSW5kZXggPT09IC0xID8gJycgOiBocmVmLnN1YnN0cmluZyhoYXNoSW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB2YXIgaGFzaEluZGV4ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpO1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBoYXNoSW5kZXggPj0gMCA/IGhhc2hJbmRleCA6IDApICsgJyMnICsgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBpbnZhcmlhbnQoZmFsc2UsICdIYXNoIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IHZvaWQgMDtcbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhbkdvV2l0aG91dFJlbG9hZCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGhhc2hUeXBlID0gX3Byb3BzLmhhc2hUeXBlLFxuICAgICAgaGFzaFR5cGUgPSBfcHJvcHMkaGFzaFR5cGUgPT09IHZvaWQgMCA/ICdzbGFzaCcgOiBfcHJvcHMkaGFzaFR5cGU7XG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG4gIHZhciBfSGFzaFBhdGhDb2RlcnMkaGFzaFQgPSBIYXNoUGF0aENvZGVyc1toYXNoVHlwZV0sXG4gICAgICBlbmNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmVuY29kZVBhdGgsXG4gICAgICBkZWNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmRlY29kZVBhdGg7XG5cbiAgZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBkZWNvZGVQYXRoKGdldEhhc2hQYXRoKCkpO1xuICAgIHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICB2YXIgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcblxuICAgIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGFsd2F5cyBoYXZlIGEgcHJvcGVybHktZW5jb2RlZCBoYXNoLlxuICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgaWYgKCFmb3JjZU5leHRQb3AgJiYgbG9jYXRpb25zQXJlRXF1YWwocHJldkxvY2F0aW9uLCBsb2NhdGlvbikpIHJldHVybjsgLy8gQSBoYXNoY2hhbmdlIGRvZXNuJ3QgYWx3YXlzID09IGxvY2F0aW9uIGNoYW5nZS5cblxuICAgICAgaWYgKGlnbm9yZVBhdGggPT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSByZXR1cm47IC8vIElnbm9yZSB0aGlzIGNoYW5nZTsgd2UgYWxyZWFkeSBzZXRTdGF0ZSBpbiBwdXNoL3JlcGxhY2UuXG5cbiAgICAgIGlnbm9yZVBhdGggPSBudWxsO1xuICAgICAgaGFuZGxlUG9wKGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBwYXRocyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBwYXRocyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKHRvTG9jYXRpb24pKTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGZyb21Mb2NhdGlvbikpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9IC8vIEVuc3VyZSB0aGUgaGFzaCBpcyBlbmNvZGVkIHByb3Blcmx5IGJlZm9yZSBkb2luZyBhbnl0aGluZyBlbHNlLlxuXG5cbiAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICB2YXIgYWxsUGF0aHMgPSBbY3JlYXRlUGF0aChpbml0aWFsTG9jYXRpb24pXTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gJyMnICsgZW5jb2RlUGF0aChiYXNlbmFtZSArIGNyZWF0ZVBhdGgobG9jYXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBQVVNILCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICBwdXNoSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICAgIHZhciBuZXh0UGF0aHMgPSBhbGxQYXRocy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuICAgICAgICBuZXh0UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgYWxsUGF0aHMgPSBuZXh0UGF0aHM7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGg7IGEgbmV3IGVudHJ5IHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrJyk7XG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUkVQTEFDRSwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsUGF0aHNbcHJldkluZGV4XSA9IHBhdGg7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHdhcm5pbmcoY2FuR29XaXRob3V0UmVsb2FkLCAnSGFzaCBoaXN0b3J5IGdvKG4pIGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEgJiYgZGVsdGEgPT09IDEpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIF9wcm9wcyRpbml0aWFsRW50cmllcyA9IF9wcm9wcy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxFbnRyaWVzID0gX3Byb3BzJGluaXRpYWxFbnRyaWVzID09PSB2b2lkIDAgPyBbJy8nXSA6IF9wcm9wcyRpbml0aWFsRW50cmllcyxcbiAgICAgIF9wcm9wcyRpbml0aWFsSW5kZXggPSBfcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH1cblxuICB2YXIgaW5kZXggPSBjbGFtcChpbml0aWFsSW5kZXgsIDAsIGluaXRpYWxFbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB2YXIgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyA/IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGNyZWF0ZUtleSgpKSA6IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBjcmVhdGVQYXRoO1xuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcHJldkluZGV4ID0gaGlzdG9yeS5pbmRleDtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuICAgICAgdmFyIG5leHRFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLnNsaWNlKDApO1xuXG4gICAgICBpZiAobmV4dEVudHJpZXMubGVuZ3RoID4gbmV4dEluZGV4KSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnNwbGljZShuZXh0SW5kZXgsIG5leHRFbnRyaWVzLmxlbmd0aCAtIG5leHRJbmRleCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEVudHJpZXMucHVzaChsb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgZW50cmllczogbmV4dEVudHJpZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIGhpc3RvcnkuZW50cmllc1toaXN0b3J5LmluZGV4XSA9IGxvY2F0aW9uO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgdmFyIGxvY2F0aW9uID0gaGlzdG9yeS5lbnRyaWVzW25leHRJbmRleF07XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNaW1pYyB0aGUgYmVoYXZpb3Igb2YgRE9NIGhpc3RvcmllcyBieVxuICAgICAgICAvLyBjYXVzaW5nIGEgcmVuZGVyIGFmdGVyIGEgY2FuY2VsbGVkIFBPUC5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5HbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGhpc3RvcnkuaW5kZXggKyBuO1xuICAgIHJldHVybiBuZXh0SW5kZXggPj0gMCAmJiBuZXh0SW5kZXggPCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBlbnRyaWVzLmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBlbnRyaWVzW2luZGV4XSxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY2FuR286IGNhbkdvLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZXhwb3J0cy5jcmVhdGVCcm93c2VySGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuZXhwb3J0cy5jcmVhdGVIYXNoSGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5O1xuZXhwb3J0cy5jcmVhdGVNZW1vcnlIaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeTtcbmV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbjtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBsb2NhdGlvbnNBcmVFcXVhbDtcbmV4cG9ydHMucGFyc2VQYXRoID0gcGFyc2VQYXRoO1xuZXhwb3J0cy5jcmVhdGVQYXRoID0gY3JlYXRlUGF0aDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9oaXN0b3J5Lm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9oaXN0b3J5LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzXCIpOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgb2JqZWN0LCBjb2xsZWN0aW9uLCBtYXAsIG9yIHNldC5cbiAqXG4gKiBPYmplY3RzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBubyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWRcbiAqIHByb3BlcnRpZXMuXG4gKlxuICogQXJyYXktbGlrZSB2YWx1ZXMgc3VjaCBhcyBgYXJndW1lbnRzYCBvYmplY3RzLCBhcnJheXMsIGJ1ZmZlcnMsIHN0cmluZ3MsIG9yXG4gKiBqUXVlcnktbGlrZSBjb2xsZWN0aW9ucyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgbGVuZ3RoYCBvZiBgMGAuXG4gKiBTaW1pbGFybHksIG1hcHMgYW5kIHNldHMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYHNpemVgIG9mIGAwYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRW1wdHkobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KHRydWUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSgxKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0VtcHR5KHsgJ2EnOiAxIH0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICAgIChpc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIGlzQnVmZmVyKHZhbHVlKSB8fCBpc1R5cGVkQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICByZXR1cm4gIXZhbHVlLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgaWYgKHRhZyA9PSBtYXBUYWcgfHwgdGFnID09IHNldFRhZykge1xuICAgIHJldHVybiAhdmFsdWUuc2l6ZTtcbiAgfVxuICBpZiAoaXNQcm90b3R5cGUodmFsdWUpKSB7XG4gICAgcmV0dXJuICFiYXNlS2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW1wdHk7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xudmFyIEJyb3dzZXJSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXJSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSAoMCwgX2hpc3RvcnkuY3JlYXRlQnJvd3Nlckhpc3RvcnkpKF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGJhc2VuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZm9yY2VSZWZyZXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGdldFVzZXJDb25maXJtYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAga2V5TGVuZ3RoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJyb3dzZXJSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cbnZhciBIYXNoUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gKDAsIF9oaXN0b3J5LmNyZWF0ZUhhc2hIaXN0b3J5KShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXIyLmRlZmF1bHQsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGdldFVzZXJDb25maXJtYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaGFzaFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoW1wiaGFzaGJhbmdcIiwgXCJub3NsYXNoXCIsIFwic2xhc2hcIl0pLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSGFzaFJvdXRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZShcImludmFyaWFudFwiKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgaXNNb2RpZmllZEV2ZW50ID0gZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn07XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbnZhciBMaW5rID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmIC8vIGlnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICAgIV90aGlzLnByb3BzLnRhcmdldCAmJiAvLyBsZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgaGlzdG9yeSA9IF90aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvO1xuXG5cbiAgICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHRvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIExpbmsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcmVwbGFjZSA9IF9wcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgaW5uZXJSZWYgPSBfcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1wicmVwbGFjZVwiLCBcInRvXCIsIFwiaW5uZXJSZWZcIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LnJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0byAhPT0gdW5kZWZpbmVkLCAnWW91IG11c3Qgc3BlY2lmeSB0aGUgXCJ0b1wiIHByb3BlcnR5Jyk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcblxuICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/ICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikodG8sIG51bGwsIG51bGwsIGhpc3RvcnkubG9jYXRpb24pIDogdG87XG5cbiAgICB2YXIgaHJlZiA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogaHJlZiwgcmVmOiBpbm5lclJlZiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0YXJnZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRvOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSlcbn07XG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVwbGFjZTogZmFsc2Vcbn07XG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBoaXN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICAgIHB1c2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVwbGFjZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBjcmVhdGVIcmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IExpbms7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfTWVtb3J5Um91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9NZW1vcnlSb3V0ZXJcIik7XG5cbnZhciBfTWVtb3J5Um91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbW9yeVJvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW1vcnlSb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUm91dGUgPSByZXF1aXJlKFwiLi9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZSk7XG5cbnZhciBfTGluayA9IHJlcXVpcmUoXCIuL0xpbmtcIik7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG52YXIgTmF2TGluayA9IGZ1bmN0aW9uIE5hdkxpbmsoX3JlZikge1xuICB2YXIgdG8gPSBfcmVmLnRvLFxuICAgICAgZXhhY3QgPSBfcmVmLmV4YWN0LFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgZ2V0SXNBY3RpdmUgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ0b1wiLCBcImV4YWN0XCIsIFwic3RyaWN0XCIsIFwibG9jYXRpb25cIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVTdHlsZVwiLCBcInN0eWxlXCIsIFwiaXNBY3RpdmVcIiwgXCJhcmlhLWN1cnJlbnRcIl0pO1xuXG4gIHZhciBwYXRoID0gKHR5cGVvZiB0byA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHRvKSkgPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvO1xuXG4gIC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZTIuZGVmYXVsdCwge1xuICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfcmVmMi5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaCA9IF9yZWYyLm1hdGNoO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShnZXRJc0FjdGl2ZSA/IGdldElzQWN0aXZlKG1hdGNoLCBsb2NhdGlvbikgOiBtYXRjaCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTGluazIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICB0bzogdG8sXG4gICAgICAgIGNsYXNzTmFtZTogaXNBY3RpdmUgPyBbY2xhc3NOYW1lLCBhY3RpdmVDbGFzc05hbWVdLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KS5qb2luKFwiIFwiKSA6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSkgOiBzdHlsZSxcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbFxuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHtcbiAgdG86IF9MaW5rMi5kZWZhdWx0LnByb3BUeXBlcy50byxcbiAgZXhhY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RyaWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxvY2F0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgYWN0aXZlQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGlzQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIFwiYXJpYS1jdXJyZW50XCI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoW1wicGFnZVwiLCBcInN0ZXBcIiwgXCJsb2NhdGlvblwiLCBcImRhdGVcIiwgXCJ0aW1lXCIsIFwidHJ1ZVwiXSlcbn07XG5cbk5hdkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gIFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZMaW5rOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb21wdCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUHJvbXB0XCIpO1xuXG52YXIgX1Byb21wdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9tcHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUHJvbXB0Mi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JlZGlyZWN0ID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9SZWRpcmVjdFwiKTtcblxudmFyIF9SZWRpcmVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SZWRpcmVjdDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Sb3V0ZSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUm91dGVcIik7XG5cbnZhciBfUm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUm91dGUyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Sb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfU3RhdGljUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9TdGF0aWNSb3V0ZXJcIik7XG5cbnZhciBfU3RhdGljUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpY1JvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TdGF0aWNSb3V0ZXIyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfU3dpdGNoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Td2l0Y2hcIik7XG5cbnZhciBfU3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N3aXRjaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Td2l0Y2gyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2VuZXJhdGVQYXRoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9nZW5lcmF0ZVBhdGhcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlUGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9nZW5lcmF0ZVBhdGgyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndpdGhSb3V0ZXIgPSBleHBvcnRzLm1hdGNoUGF0aCA9IGV4cG9ydHMuZ2VuZXJhdGVQYXRoID0gZXhwb3J0cy5Td2l0Y2ggPSBleHBvcnRzLlN0YXRpY1JvdXRlciA9IGV4cG9ydHMuUm91dGVyID0gZXhwb3J0cy5Sb3V0ZSA9IGV4cG9ydHMuUmVkaXJlY3QgPSBleHBvcnRzLlByb21wdCA9IGV4cG9ydHMuTmF2TGluayA9IGV4cG9ydHMuTWVtb3J5Um91dGVyID0gZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5IYXNoUm91dGVyID0gZXhwb3J0cy5Ccm93c2VyUm91dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX0Jyb3dzZXJSb3V0ZXIyID0gcmVxdWlyZShcIi4vQnJvd3NlclJvdXRlclwiKTtcblxudmFyIF9Ccm93c2VyUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jyb3dzZXJSb3V0ZXIyKTtcblxudmFyIF9IYXNoUm91dGVyMiA9IHJlcXVpcmUoXCIuL0hhc2hSb3V0ZXJcIik7XG5cbnZhciBfSGFzaFJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYXNoUm91dGVyMik7XG5cbnZhciBfTGluazIgPSByZXF1aXJlKFwiLi9MaW5rXCIpO1xuXG52YXIgX0xpbmszID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluazIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjIgPSByZXF1aXJlKFwiLi9NZW1vcnlSb3V0ZXJcIik7XG5cbnZhciBfTWVtb3J5Um91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbW9yeVJvdXRlcjIpO1xuXG52YXIgX05hdkxpbmsyID0gcmVxdWlyZShcIi4vTmF2TGlua1wiKTtcblxudmFyIF9OYXZMaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkxpbmsyKTtcblxudmFyIF9Qcm9tcHQyID0gcmVxdWlyZShcIi4vUHJvbXB0XCIpO1xuXG52YXIgX1Byb21wdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9tcHQyKTtcblxudmFyIF9SZWRpcmVjdDIgPSByZXF1aXJlKFwiLi9SZWRpcmVjdFwiKTtcblxudmFyIF9SZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdDIpO1xuXG52YXIgX1JvdXRlMiA9IHJlcXVpcmUoXCIuL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlMik7XG5cbnZhciBfUm91dGVyMiA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyMik7XG5cbnZhciBfU3RhdGljUm91dGVyMiA9IHJlcXVpcmUoXCIuL1N0YXRpY1JvdXRlclwiKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljUm91dGVyMik7XG5cbnZhciBfU3dpdGNoMiA9IHJlcXVpcmUoXCIuL1N3aXRjaFwiKTtcblxudmFyIF9Td2l0Y2gzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dpdGNoMik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMiA9IHJlcXVpcmUoXCIuL2dlbmVyYXRlUGF0aFwiKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVQYXRoMik7XG5cbnZhciBfbWF0Y2hQYXRoMiA9IHJlcXVpcmUoXCIuL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoMik7XG5cbnZhciBfd2l0aFJvdXRlcjIgPSByZXF1aXJlKFwiLi93aXRoUm91dGVyXCIpO1xuXG52YXIgX3dpdGhSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkJyb3dzZXJSb3V0ZXIgPSBfQnJvd3NlclJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuSGFzaFJvdXRlciA9IF9IYXNoUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5MaW5rID0gX0xpbmszLmRlZmF1bHQ7XG5leHBvcnRzLk1lbW9yeVJvdXRlciA9IF9NZW1vcnlSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLk5hdkxpbmsgPSBfTmF2TGluazMuZGVmYXVsdDtcbmV4cG9ydHMuUHJvbXB0ID0gX1Byb21wdDMuZGVmYXVsdDtcbmV4cG9ydHMuUmVkaXJlY3QgPSBfUmVkaXJlY3QzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRlID0gX1JvdXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZXIgPSBfUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5TdGF0aWNSb3V0ZXIgPSBfU3RhdGljUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5Td2l0Y2ggPSBfU3dpdGNoMy5kZWZhdWx0O1xuZXhwb3J0cy5nZW5lcmF0ZVBhdGggPSBfZ2VuZXJhdGVQYXRoMy5kZWZhdWx0O1xuZXhwb3J0cy5tYXRjaFBhdGggPSBfbWF0Y2hQYXRoMy5kZWZhdWx0O1xuZXhwb3J0cy53aXRoUm91dGVyID0gX3dpdGhSb3V0ZXIzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbWF0Y2hQYXRoID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9tYXRjaFBhdGhcIik7XG5cbnZhciBfbWF0Y2hQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoUGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9tYXRjaFBhdGgyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2l0aFJvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvd2l0aFJvdXRlclwiKTtcblxudmFyIF93aXRoUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfd2l0aFJvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgc3RvcmVzIGxvY2F0aW9uIGluIG1lbW9yeS5cbiAqL1xudmFyIE1lbW9yeVJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNZW1vcnlSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbW9yeVJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbW9yeVJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9ICgwLCBfaGlzdG9yeS5jcmVhdGVNZW1vcnlIaXN0b3J5KShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTWVtb3J5Um91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxNZW1vcnlSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBNZW1vcnlSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBNZW1vcnlSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBNZW1vcnlSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5NZW1vcnlSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsRW50cmllczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSxcbiAgaW5pdGlhbEluZGV4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBrZXlMZW5ndGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTWVtb3J5Um91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHByb21wdGluZyB0aGUgdXNlciBiZWZvcmUgbmF2aWdhdGluZyBhd2F5XG4gKiBmcm9tIGEgc2NyZWVuIHdpdGggYSBjb21wb25lbnQuXG4gKi9cbnZhciBQcm9tcHQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJvbXB0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQcm9tcHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb21wdCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFByb21wdC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy51bmJsb2NrKSB0aGlzLnVuYmxvY2soKTtcblxuICAgIHRoaXMudW5ibG9jayA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeS5ibG9jayhtZXNzYWdlKTtcbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLnVuYmxvY2spIHtcbiAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgICAgdGhpcy51bmJsb2NrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5yb3V0ZXIsIFwiWW91IHNob3VsZCBub3QgdXNlIDxQcm9tcHQ+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgIGlmICh0aGlzLnByb3BzLndoZW4pIHRoaXMuZW5hYmxlKHRoaXMucHJvcHMubWVzc2FnZSk7XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLndoZW4pIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy53aGVuIHx8IHRoaXMucHJvcHMubWVzc2FnZSAhPT0gbmV4dFByb3BzLm1lc3NhZ2UpIHRoaXMuZW5hYmxlKG5leHRQcm9wcy5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUHJvbXB0O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUHJvbXB0LnByb3BUeXBlcyA9IHtcbiAgd2hlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBtZXNzYWdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWRcbn07XG5Qcm9tcHQuZGVmYXVsdFByb3BzID0ge1xuICB3aGVuOiB0cnVlXG59O1xuUHJvbXB0LmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBoaXN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICAgIGJsb2NrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb21wdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZShcImludmFyaWFudFwiKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoID0gcmVxdWlyZShcIi4vZ2VuZXJhdGVQYXRoXCIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHVwZGF0aW5nIHRoZSBsb2NhdGlvbiBwcm9ncmFtbWF0aWNhbGx5XG4gKiB3aXRoIGEgY29tcG9uZW50LlxuICovXG52YXIgUmVkaXJlY3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVkaXJlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlZGlyZWN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWRpcmVjdCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5pc1N0YXRpYyA9IGZ1bmN0aW9uIGlzU3RhdGljKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyICYmIHRoaXMuY29udGV4dC5yb3V0ZXIuc3RhdGljQ29udGV4dDtcbiAgfTtcblxuICBSZWRpcmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmNvbnRleHQucm91dGVyLCBcIllvdSBzaG91bGQgbm90IHVzZSA8UmVkaXJlY3Q+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgIGlmICh0aGlzLmlzU3RhdGljKCkpIHRoaXMucGVyZm9ybSgpO1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5pc1N0YXRpYygpKSB0aGlzLnBlcmZvcm0oKTtcbiAgfTtcblxuICBSZWRpcmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBwcmV2VG8gPSAoMCwgX2hpc3RvcnkuY3JlYXRlTG9jYXRpb24pKHByZXZQcm9wcy50byk7XG4gICAgdmFyIG5leHRUbyA9ICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikodGhpcy5wcm9wcy50byk7XG5cbiAgICBpZiAoKDAsIF9oaXN0b3J5LmxvY2F0aW9uc0FyZUVxdWFsKShwcmV2VG8sIG5leHRUbykpIHtcbiAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsIFwiWW91IHRyaWVkIHRvIHJlZGlyZWN0IHRvIHRoZSBzYW1lIHJvdXRlIHlvdSdyZSBjdXJyZW50bHkgb246IFwiICsgKFwiXFxcIlwiICsgbmV4dFRvLnBhdGhuYW1lICsgbmV4dFRvLnNlYXJjaCArIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wZXJmb3JtKCk7XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmNvbXB1dGVUbyA9IGZ1bmN0aW9uIGNvbXB1dGVUbyhfcmVmKSB7XG4gICAgdmFyIGNvbXB1dGVkTWF0Y2ggPSBfcmVmLmNvbXB1dGVkTWF0Y2gsXG4gICAgICAgIHRvID0gX3JlZi50bztcblxuICAgIGlmIChjb21wdXRlZE1hdGNoKSB7XG4gICAgICBpZiAodHlwZW9mIHRvID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2dlbmVyYXRlUGF0aDIuZGVmYXVsdCkodG8sIGNvbXB1dGVkTWF0Y2gucGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdG8sIHtcbiAgICAgICAgICBwYXRobmFtZTogKDAsIF9nZW5lcmF0ZVBhdGgyLmRlZmF1bHQpKHRvLnBhdGhuYW1lLCBjb21wdXRlZE1hdGNoLnBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5wZXJmb3JtID0gZnVuY3Rpb24gcGVyZm9ybSgpIHtcbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcbiAgICB2YXIgcHVzaCA9IHRoaXMucHJvcHMucHVzaDtcblxuICAgIHZhciB0byA9IHRoaXMuY29tcHV0ZVRvKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgfVxuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUmVkaXJlY3QucHJvcFR5cGVzID0ge1xuICBjb21wdXRlZE1hdGNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gcHJpdmF0ZSwgZnJvbSA8U3dpdGNoPlxuICBwdXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGZyb206IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0bzogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLmlzUmVxdWlyZWRcbn07XG5SZWRpcmVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHB1c2g6IGZhbHNlXG59O1xuUmVkaXJlY3QuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgcHVzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RhdGljQ29udGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZGlyZWN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX21hdGNoUGF0aCA9IHJlcXVpcmUoXCIuL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgaXNFbXB0eUNoaWxkcmVuID0gZnVuY3Rpb24gaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xufTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBzaW5nbGUgcGF0aCBhbmQgcmVuZGVyaW5nLlxuICovXG5cbnZhciBSb3V0ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRjaDogX3RoaXMuY29tcHV0ZU1hdGNoKF90aGlzLnByb3BzLCBfdGhpcy5jb250ZXh0LnJvdXRlcilcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIFJvdXRlLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlcjogX2V4dGVuZHMoe30sIHRoaXMuY29udGV4dC5yb3V0ZXIsIHtcbiAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCB0aGlzLmNvbnRleHQucm91dGVyLnJvdXRlLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoOiB0aGlzLnN0YXRlLm1hdGNoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcHV0ZU1hdGNoID0gZnVuY3Rpb24gY29tcHV0ZU1hdGNoKF9yZWYsIHJvdXRlcikge1xuICAgIHZhciBjb21wdXRlZE1hdGNoID0gX3JlZi5jb21wdXRlZE1hdGNoLFxuICAgICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICAgIHBhdGggPSBfcmVmLnBhdGgsXG4gICAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICAgIHNlbnNpdGl2ZSA9IF9yZWYuc2Vuc2l0aXZlO1xuXG4gICAgaWYgKGNvbXB1dGVkTWF0Y2gpIHJldHVybiBjb21wdXRlZE1hdGNoOyAvLyA8U3dpdGNoPiBhbHJlYWR5IGNvbXB1dGVkIHRoZSBtYXRjaCBmb3IgdXNcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShyb3V0ZXIsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZT4gb3Igd2l0aFJvdXRlcigpIG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgIHZhciByb3V0ZSA9IHJvdXRlci5yb3V0ZTtcblxuICAgIHZhciBwYXRobmFtZSA9IChsb2NhdGlvbiB8fCByb3V0ZS5sb2NhdGlvbikucGF0aG5hbWU7XG5cbiAgICByZXR1cm4gKDAsIF9tYXRjaFBhdGgyLmRlZmF1bHQpKHBhdGhuYW1lLCB7IHBhdGg6IHBhdGgsIHN0cmljdDogc3RyaWN0LCBleGFjdDogZXhhY3QsIHNlbnNpdGl2ZTogc2Vuc2l0aXZlIH0sIHJvdXRlLm1hdGNoKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISh0aGlzLnByb3BzLmNvbXBvbmVudCAmJiB0aGlzLnByb3BzLnJlbmRlciksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgcmVuZGVyPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKHRoaXMucHJvcHMuY29tcG9uZW50ICYmIHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKSksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZFwiKTtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISh0aGlzLnByb3BzLnJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgcmVuZGVyPiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWRcIik7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEobmV4dFByb3BzLmxvY2F0aW9uICYmICF0aGlzLnByb3BzLmxvY2F0aW9uKSwgJzxSb3V0ZT4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBpbml0aWFsbHkgdXNlZCBubyBcImxvY2F0aW9uXCIgcHJvcCBhbmQgdGhlbiBwcm92aWRlZCBvbmUgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKTtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISghbmV4dFByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24pLCAnPFJvdXRlPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hdGNoOiB0aGlzLmNvbXB1dGVNYXRjaChuZXh0UHJvcHMsIG5leHRDb250ZXh0LnJvdXRlcilcbiAgICB9KTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMuc3RhdGUubWF0Y2g7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICByZW5kZXIgPSBfcHJvcHMucmVuZGVyO1xuICAgIHZhciBfY29udGV4dCRyb3V0ZXIgPSB0aGlzLmNvbnRleHQucm91dGVyLFxuICAgICAgICBoaXN0b3J5ID0gX2NvbnRleHQkcm91dGVyLmhpc3RvcnksXG4gICAgICAgIHJvdXRlID0gX2NvbnRleHQkcm91dGVyLnJvdXRlLFxuICAgICAgICBzdGF0aWNDb250ZXh0ID0gX2NvbnRleHQkcm91dGVyLnN0YXRpY0NvbnRleHQ7XG5cbiAgICB2YXIgbG9jYXRpb24gPSB0aGlzLnByb3BzLmxvY2F0aW9uIHx8IHJvdXRlLmxvY2F0aW9uO1xuICAgIHZhciBwcm9wcyA9IHsgbWF0Y2g6IG1hdGNoLCBsb2NhdGlvbjogbG9jYXRpb24sIGhpc3Rvcnk6IGhpc3RvcnksIHN0YXRpY0NvbnRleHQ6IHN0YXRpY0NvbnRleHQgfTtcblxuICAgIGlmIChjb21wb25lbnQpIHJldHVybiBtYXRjaCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogbnVsbDtcblxuICAgIGlmIChyZW5kZXIpIHJldHVybiBtYXRjaCA/IHJlbmRlcihwcm9wcykgOiBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY2hpbGRyZW4ocHJvcHMpO1xuXG4gICAgaWYgKGNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pKSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wdXRlZE1hdGNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gcHJpdmF0ZSwgZnJvbSA8U3dpdGNoPlxuICBwYXRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZXhhY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RyaWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNlbnNpdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgcmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVdKSxcbiAgbG9jYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuUm91dGUuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcm91dGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3RhdGljQ29udGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSlcbn07XG5Sb3V0ZS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZShcImludmFyaWFudFwiKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHV0dGluZyBoaXN0b3J5IG9uIGNvbnRleHQuXG4gKi9cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF0Y2g6IF90aGlzLmNvbXB1dGVNYXRjaChfdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgUm91dGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlcjogX2V4dGVuZHMoe30sIHRoaXMuY29udGV4dC5yb3V0ZXIsIHtcbiAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICByb3V0ZToge1xuICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2g6IHRoaXMuc3RhdGUubWF0Y2hcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9O1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY29tcHV0ZU1hdGNoID0gZnVuY3Rpb24gY29tcHV0ZU1hdGNoKHBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBpc0V4YWN0OiBwYXRobmFtZSA9PT0gXCIvXCJcbiAgICB9O1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBoaXN0b3J5ID0gX3Byb3BzLmhpc3Rvcnk7XG5cblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShjaGlsZHJlbiA9PSBudWxsIHx8IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEsIFwiQSA8Um91dGVyPiBtYXkgaGF2ZSBvbmx5IG9uZSBjaGlsZCBlbGVtZW50XCIpO1xuXG4gICAgLy8gRG8gdGhpcyBoZXJlIHNvIHdlIGNhbiBzZXRTdGF0ZSB3aGVuIGEgPFJlZGlyZWN0PiBjaGFuZ2VzIHRoZVxuICAgIC8vIGxvY2F0aW9uIGluIGNvbXBvbmVudFdpbGxNb3VudC4gVGhpcyBoYXBwZW5zIGUuZy4gd2hlbiBkb2luZ1xuICAgIC8vIHNlcnZlciByZW5kZXJpbmcgdXNpbmcgYSA8U3RhdGljUm91dGVyPi5cbiAgICB0aGlzLnVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgbWF0Y2g6IF90aGlzMi5jb21wdXRlTWF0Y2goaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSh0aGlzLnByb3BzLmhpc3RvcnkgPT09IG5leHRQcm9wcy5oaXN0b3J5LCBcIllvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT5cIik7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5saXN0ZW4oKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgaGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblJvdXRlci5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5Sb3V0ZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gXCIvXCIgPyBwYXRoIDogXCIvXCIgKyBwYXRoO1xufTtcblxudmFyIGFkZEJhc2VuYW1lID0gZnVuY3Rpb24gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGxvY2F0aW9uKSB7XG4gIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgcGF0aG5hbWU6IGFkZExlYWRpbmdTbGFzaChiYXNlbmFtZSkgKyBsb2NhdGlvbi5wYXRobmFtZVxuICB9KTtcbn07XG5cbnZhciBzdHJpcEJhc2VuYW1lID0gZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShiYXNlbmFtZSwgbG9jYXRpb24pIHtcbiAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIHZhciBiYXNlID0gYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKTtcblxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihiYXNlKSAhPT0gMCkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyKGJhc2UubGVuZ3RoKVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVVUkwgPSBmdW5jdGlvbiBjcmVhdGVVUkwobG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IGxvY2F0aW9uIDogKDAsIF9oaXN0b3J5LmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbn07XG5cbnZhciBzdGF0aWNIYW5kbGVyID0gZnVuY3Rpb24gc3RhdGljSGFuZGxlcihtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCBcIllvdSBjYW5ub3QgJXMgd2l0aCA8U3RhdGljUm91dGVyPlwiLCBtZXRob2ROYW1lKTtcbiAgfTtcbn07XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgdG9wLWxldmVsIEFQSSBmb3IgYSBcInN0YXRpY1wiIDxSb3V0ZXI+LCBzby1jYWxsZWQgYmVjYXVzZSBpdFxuICogY2FuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJbnN0ZWFkLCBpdCBqdXN0IHJlY29yZHNcbiAqIGxvY2F0aW9uIGNoYW5nZXMgaW4gYSBjb250ZXh0IG9iamVjdC4gVXNlZnVsIG1haW5seSBpbiB0ZXN0aW5nIGFuZFxuICogc2VydmVyLXJlbmRlcmluZyBzY2VuYXJpb3MuXG4gKi9cblxudmFyIFN0YXRpY1JvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdGF0aWNSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0YXRpY1JvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpY1JvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1NsYXNoKF90aGlzLnByb3BzLmJhc2VuYW1lICsgY3JlYXRlVVJMKHBhdGgpKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVQdXNoID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYXNlbmFtZSA9IF90aGlzJHByb3BzLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wcy5jb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmFjdGlvbiA9IFwiUFVTSFwiO1xuICAgICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCAoMCwgX2hpc3RvcnkuY3JlYXRlTG9jYXRpb24pKGxvY2F0aW9uKSk7XG4gICAgICBjb250ZXh0LnVybCA9IGNyZWF0ZVVSTChjb250ZXh0LmxvY2F0aW9uKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXBsYWNlID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wczIuYmFzZW5hbWUsXG4gICAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzMi5jb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmFjdGlvbiA9IFwiUkVQTEFDRVwiO1xuICAgICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCAoMCwgX2hpc3RvcnkuY3JlYXRlTG9jYXRpb24pKGxvY2F0aW9uKSk7XG4gICAgICBjb250ZXh0LnVybCA9IGNyZWF0ZVVSTChjb250ZXh0LmxvY2F0aW9uKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVMaXN0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbm9vcDtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlcjoge1xuICAgICAgICBzdGF0aWNDb250ZXh0OiB0aGlzLnByb3BzLmNvbnRleHRcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIFN0YXRpY1JvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8U3RhdGljUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgU3RhdGljUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGJhc2VuYW1lID0gX3Byb3BzLmJhc2VuYW1lLFxuICAgICAgICBjb250ZXh0ID0gX3Byb3BzLmNvbnRleHQsXG4gICAgICAgIGxvY2F0aW9uID0gX3Byb3BzLmxvY2F0aW9uLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcImJhc2VuYW1lXCIsIFwiY29udGV4dFwiLCBcImxvY2F0aW9uXCJdKTtcblxuICAgIHZhciBoaXN0b3J5ID0ge1xuICAgICAgY3JlYXRlSHJlZjogdGhpcy5jcmVhdGVIcmVmLFxuICAgICAgYWN0aW9uOiBcIlBPUFwiLFxuICAgICAgbG9jYXRpb246IHN0cmlwQmFzZW5hbWUoYmFzZW5hbWUsICgwLCBfaGlzdG9yeS5jcmVhdGVMb2NhdGlvbikobG9jYXRpb24pKSxcbiAgICAgIHB1c2g6IHRoaXMuaGFuZGxlUHVzaCxcbiAgICAgIHJlcGxhY2U6IHRoaXMuaGFuZGxlUmVwbGFjZSxcbiAgICAgIGdvOiBzdGF0aWNIYW5kbGVyKFwiZ29cIiksXG4gICAgICBnb0JhY2s6IHN0YXRpY0hhbmRsZXIoXCJnb0JhY2tcIiksXG4gICAgICBnb0ZvcndhcmQ6IHN0YXRpY0hhbmRsZXIoXCJnb0ZvcndhcmRcIiksXG4gICAgICBsaXN0ZW46IHRoaXMuaGFuZGxlTGlzdGVuLFxuICAgICAgYmxvY2s6IHRoaXMuaGFuZGxlQmxvY2tcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXIyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBoaXN0b3J5OiBoaXN0b3J5IH0pKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdGljUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuU3RhdGljUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pXG59O1xuU3RhdGljUm91dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFzZW5hbWU6IFwiXCIsXG4gIGxvY2F0aW9uOiBcIi9cIlxufTtcblN0YXRpY1JvdXRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gU3RhdGljUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX21hdGNoUGF0aCA9IHJlcXVpcmUoXCIuL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgdGhlIGZpcnN0IDxSb3V0ZT4gdGhhdCBtYXRjaGVzLlxuICovXG52YXIgU3dpdGNoID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN3aXRjaCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpdGNoKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2l0Y2gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBTd2l0Y2gucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LnJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFN3aXRjaD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuICB9O1xuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKG5leHRQcm9wcy5sb2NhdGlvbiAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCFuZXh0UHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG4gIH07XG5cbiAgU3dpdGNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5yb3V0ZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCByb3V0ZS5sb2NhdGlvbjtcblxuICAgIHZhciBtYXRjaCA9IHZvaWQgMCxcbiAgICAgICAgY2hpbGQgPSB2b2lkIDA7XG4gICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCAmJiBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JHByb3BzID0gZWxlbWVudC5wcm9wcyxcbiAgICAgICAgICAgIHBhdGhQcm9wID0gX2VsZW1lbnQkcHJvcHMucGF0aCxcbiAgICAgICAgICAgIGV4YWN0ID0gX2VsZW1lbnQkcHJvcHMuZXhhY3QsXG4gICAgICAgICAgICBzdHJpY3QgPSBfZWxlbWVudCRwcm9wcy5zdHJpY3QsXG4gICAgICAgICAgICBzZW5zaXRpdmUgPSBfZWxlbWVudCRwcm9wcy5zZW5zaXRpdmUsXG4gICAgICAgICAgICBmcm9tID0gX2VsZW1lbnQkcHJvcHMuZnJvbTtcblxuICAgICAgICB2YXIgcGF0aCA9IHBhdGhQcm9wIHx8IGZyb207XG5cbiAgICAgICAgY2hpbGQgPSBlbGVtZW50O1xuICAgICAgICBtYXRjaCA9ICgwLCBfbWF0Y2hQYXRoMi5kZWZhdWx0KShsb2NhdGlvbi5wYXRobmFtZSwgeyBwYXRoOiBwYXRoLCBleGFjdDogZXhhY3QsIHN0cmljdDogc3RyaWN0LCBzZW5zaXRpdmU6IHNlbnNpdGl2ZSB9LCByb3V0ZS5tYXRjaCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2ggPyBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGxvY2F0aW9uOiBsb2NhdGlvbiwgY29tcHV0ZWRNYXRjaDogbWF0Y2ggfSkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2g7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Td2l0Y2guY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIHJvdXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBsb2NhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBTd2l0Y2g7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcGF0aFRvUmVnZXhwID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpO1xuXG52YXIgX3BhdGhUb1JlZ2V4cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoVG9SZWdleHApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGF0dGVybkNhY2hlID0ge307XG52YXIgY2FjaGVMaW1pdCA9IDEwMDAwO1xudmFyIGNhY2hlQ291bnQgPSAwO1xuXG52YXIgY29tcGlsZUdlbmVyYXRvciA9IGZ1bmN0aW9uIGNvbXBpbGVHZW5lcmF0b3IocGF0dGVybikge1xuICB2YXIgY2FjaGVLZXkgPSBwYXR0ZXJuO1xuICB2YXIgY2FjaGUgPSBwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldIHx8IChwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldID0ge30pO1xuXG4gIGlmIChjYWNoZVtwYXR0ZXJuXSkgcmV0dXJuIGNhY2hlW3BhdHRlcm5dO1xuXG4gIHZhciBjb21waWxlZEdlbmVyYXRvciA9IF9wYXRoVG9SZWdleHAyLmRlZmF1bHQuY29tcGlsZShwYXR0ZXJuKTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBjYWNoZVtwYXR0ZXJuXSA9IGNvbXBpbGVkR2VuZXJhdG9yO1xuICAgIGNhY2hlQ291bnQrKztcbiAgfVxuXG4gIHJldHVybiBjb21waWxlZEdlbmVyYXRvcjtcbn07XG5cbi8qKlxuICogUHVibGljIEFQSSBmb3IgZ2VuZXJhdGluZyBhIFVSTCBwYXRobmFtZSBmcm9tIGEgcGF0dGVybiBhbmQgcGFyYW1ldGVycy5cbiAqL1xudmFyIGdlbmVyYXRlUGF0aCA9IGZ1bmN0aW9uIGdlbmVyYXRlUGF0aCgpIHtcbiAgdmFyIHBhdHRlcm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFwiL1wiO1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBpZiAocGF0dGVybiA9PT0gXCIvXCIpIHtcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuICB2YXIgZ2VuZXJhdG9yID0gY29tcGlsZUdlbmVyYXRvcihwYXR0ZXJuKTtcbiAgcmV0dXJuIGdlbmVyYXRvcihwYXJhbXMsIHsgcHJldHR5OiB0cnVlIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuZXJhdGVQYXRoOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3BhdGhUb1JlZ2V4cCA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTtcblxudmFyIF9wYXRoVG9SZWdleHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aFRvUmVnZXhwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHBhdHRlcm5DYWNoZSA9IHt9O1xudmFyIGNhY2hlTGltaXQgPSAxMDAwMDtcbnZhciBjYWNoZUNvdW50ID0gMDtcblxudmFyIGNvbXBpbGVQYXRoID0gZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0dGVybiwgb3B0aW9ucykge1xuICB2YXIgY2FjaGVLZXkgPSBcIlwiICsgb3B0aW9ucy5lbmQgKyBvcHRpb25zLnN0cmljdCArIG9wdGlvbnMuc2Vuc2l0aXZlO1xuICB2YXIgY2FjaGUgPSBwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldIHx8IChwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldID0ge30pO1xuXG4gIGlmIChjYWNoZVtwYXR0ZXJuXSkgcmV0dXJuIGNhY2hlW3BhdHRlcm5dO1xuXG4gIHZhciBrZXlzID0gW107XG4gIHZhciByZSA9ICgwLCBfcGF0aFRvUmVnZXhwMi5kZWZhdWx0KShwYXR0ZXJuLCBrZXlzLCBvcHRpb25zKTtcbiAgdmFyIGNvbXBpbGVkUGF0dGVybiA9IHsgcmU6IHJlLCBrZXlzOiBrZXlzIH07XG5cbiAgaWYgKGNhY2hlQ291bnQgPCBjYWNoZUxpbWl0KSB7XG4gICAgY2FjaGVbcGF0dGVybl0gPSBjb21waWxlZFBhdHRlcm47XG4gICAgY2FjaGVDb3VudCsrO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBpbGVkUGF0dGVybjtcbn07XG5cbi8qKlxuICogUHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBVUkwgcGF0aG5hbWUgdG8gYSBwYXRoIHBhdHRlcm4uXG4gKi9cbnZhciBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgocGF0aG5hbWUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgcGFyZW50ID0gYXJndW1lbnRzWzJdO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikgb3B0aW9ucyA9IHsgcGF0aDogb3B0aW9ucyB9O1xuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwYXRoID0gX29wdGlvbnMucGF0aCxcbiAgICAgIF9vcHRpb25zJGV4YWN0ID0gX29wdGlvbnMuZXhhY3QsXG4gICAgICBleGFjdCA9IF9vcHRpb25zJGV4YWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJGV4YWN0LFxuICAgICAgX29wdGlvbnMkc3RyaWN0ID0gX29wdGlvbnMuc3RyaWN0LFxuICAgICAgc3RyaWN0ID0gX29wdGlvbnMkc3RyaWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJHN0cmljdCxcbiAgICAgIF9vcHRpb25zJHNlbnNpdGl2ZSA9IF9vcHRpb25zLnNlbnNpdGl2ZSxcbiAgICAgIHNlbnNpdGl2ZSA9IF9vcHRpb25zJHNlbnNpdGl2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRzZW5zaXRpdmU7XG5cblxuICBpZiAocGF0aCA9PSBudWxsKSByZXR1cm4gcGFyZW50O1xuXG4gIHZhciBfY29tcGlsZVBhdGggPSBjb21waWxlUGF0aChwYXRoLCB7IGVuZDogZXhhY3QsIHN0cmljdDogc3RyaWN0LCBzZW5zaXRpdmU6IHNlbnNpdGl2ZSB9KSxcbiAgICAgIHJlID0gX2NvbXBpbGVQYXRoLnJlLFxuICAgICAga2V5cyA9IF9jb21waWxlUGF0aC5rZXlzO1xuXG4gIHZhciBtYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuXG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuXG4gIHZhciB1cmwgPSBtYXRjaFswXSxcbiAgICAgIHZhbHVlcyA9IG1hdGNoLnNsaWNlKDEpO1xuXG4gIHZhciBpc0V4YWN0ID0gcGF0aG5hbWUgPT09IHVybDtcblxuICBpZiAoZXhhY3QgJiYgIWlzRXhhY3QpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCwgLy8gdGhlIHBhdGggcGF0dGVybiB1c2VkIHRvIG1hdGNoXG4gICAgdXJsOiBwYXRoID09PSBcIi9cIiAmJiB1cmwgPT09IFwiXCIgPyBcIi9cIiA6IHVybCwgLy8gdGhlIG1hdGNoZWQgcG9ydGlvbiBvZiB0aGUgVVJMXG4gICAgaXNFeGFjdDogaXNFeGFjdCwgLy8gd2hldGhlciBvciBub3Qgd2UgbWF0Y2hlZCBleGFjdGx5XG4gICAgcGFyYW1zOiBrZXlzLnJlZHVjZShmdW5jdGlvbiAobWVtbywga2V5LCBpbmRleCkge1xuICAgICAgbWVtb1trZXkubmFtZV0gPSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwge30pXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYXRjaFBhdGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzID0gcmVxdWlyZShcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCIpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxudmFyIF9Sb3V0ZSA9IHJlcXVpcmUoXCIuL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEEgcHVibGljIGhpZ2hlci1vcmRlciBjb21wb25lbnQgdG8gYWNjZXNzIHRoZSBpbXBlcmF0aXZlIEFQSVxuICovXG52YXIgd2l0aFJvdXRlciA9IGZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9uZW50KSB7XG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50UmVmID0gcHJvcHMud3JhcHBlZENvbXBvbmVudFJlZixcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIndyYXBwZWRDb21wb25lbnRSZWZcIl0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZTIuZGVmYXVsdCwge1xuICAgICAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlbWFpbmluZ1Byb3BzLCByb3V0ZUNvbXBvbmVudFByb3BzLCB7XG4gICAgICAgICAgcmVmOiB3cmFwcGVkQ29tcG9uZW50UmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBDLmRpc3BsYXlOYW1lID0gXCJ3aXRoUm91dGVyKFwiICsgKENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSkgKyBcIilcIjtcbiAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICBDLnByb3BUeXBlcyA9IHtcbiAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfTtcblxuICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoQywgQ29tcG9uZW50KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICB2YXIgdG9QYXJ0cyA9IHRvICYmIHRvLnNwbGl0KCcvJykgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSBmcm9tICYmIGZyb20uc3BsaXQoJy8nKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcbiAgfWlmIChtdXN0RW5kQWJzICYmIGZyb21QYXJ0c1swXSAhPT0gJycgJiYgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSkpIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlc29sdmVQYXRobmFtZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG52YXIgcHJlZml4ID0gJ0ludmFyaWFudCBmYWlsZWQnO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXggKyBcIjogXCIgKyAobWVzc2FnZSB8fCAnJykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWMgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1Y1wiKSkoXCIuL25vZGVfbW9kdWxlcy91cmwtc2VhcmNoLXBhcmFtcy9idWlsZC91cmwtc2VhcmNoLXBhcmFtcy5ub2RlLmpzXCIpOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsdWVFcXVhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNDk0YTM0NTlhZDEzZmZhZDdiNWNcIikpKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcl80OTRhMzQ1OWFkMTNmZmFkN2I1YyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanNcIik7IiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vYXBwL3JlcXVlc3QnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vY29tcG9uZW50L01vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4gfCBEYXRlIHwgYW55W10gfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpIHwgTWFwPGFueSwgYW55PjtcclxuZXhwb3J0IHR5cGUgUmVhZE9ubHk8VD4gPSBUIGV4dGVuZHMgQmFzZVZhbHVlID8gVCA6IHtcclxuICByZWFkb25seSBbUCBpbiBrZXlvZiBUXTogUmVhZE9ubHk8VFtQXT47XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzPFZhbHVlPiB7XHJcbiAgcmVxdWVzdD86IFJlcXVlc3Q7XHJcbiAgZGVmYXVsdFZhbHVlPzogVmFsdWU7XHJcbn1cclxuXHJcbi8qKiDmlbDmja7nsbvlnovln7rnsbsgKi9cclxuYWJzdHJhY3QgY2xhc3MgRGF0YVR5cGU8VmFsdWU+IHtcclxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0PzogUmVxdWVzdCkge1xyXG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICB9XHJcblxyXG4gIC8qKiDmlbDmja7mm7TmlrDnmoRpZO+8jOeUqOS6juWIpOaWreaVsOaNruaYr+WQpuWPkeeUn+WPmOWMliAqL1xyXG4gIHByaXZhdGUgZGF0YUlkOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgbGFzdERhdGFJZDogbnVtYmVyID0gMDtcclxuICBwcm90ZWN0ZWQgcmVxdWVzdDogUmVxdWVzdCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHZhbHVlOiBhbnk7XHJcbiAgcHVibGljIGFic3RyYWN0IHNldCguLi5hcmc6IGFueVtdKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0KC4uLmFyZzogYW55W10pOiBhbnk7XHJcblxyXG4gIC8qKiDmm7TmlrDmlbDmja5pZCAqL1xyXG4gIHByb3RlY3RlZCB1cGRhdGVEYXRhSWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFJZCsrO1xyXG4gICAgaWYgKE1vZGVsLmRpc3BhdGNoKSB7XHJcbiAgICAgIE1vZGVsLmRpc3BhdGNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5pWw5o2u5piv5ZCm5pS55Y+Y77yM5Li6dHJ1ZeWImeaYr+aUueWPmCwgKi9cclxuICAvKiog54m55Yir5rOo5oSP77ya6L+Z5Liq5pa55rOV5pyJ5Ymv5L2c55So77yM6LCD55So5LiA5qyh5ZCO5bCG5LiA55u06L+U5ZueZmFsc2XvvIzpmaTpnZ7lho3mrKHosIPnlKh1cGRhdGVEYXRhSWQgKi9cclxuICBwdWJsaWMgZ2V0IGlzQ2hhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZGF0YUlkICE9PSB0aGlzLmxhc3REYXRhSWQpIHtcclxuICAgICAgdGhpcy5sYXN0RGF0YUlkID0gdGhpcy5kYXRhSWQ7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0cmluZ2lmeShrZXk6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGtleSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPluaVsOaNrmlkICovXHJcbiAgcHVibGljIGdldERhdGFJZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YUlkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVR5cGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuaW1wb3J0IEZvcm1TZXJ2aWNlIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Gb3JtL3NlcnZpY2UnO1xyXG5pbXBvcnQgT2JPYmplY3QgZnJvbSAnLi4vLi4vYXBwL2RhdGF0eXBlL29iT2JqZWN0JztcclxuaW1wb3J0IERhdGFUeXBlIGZyb20gJy4uLy4uL19iYXNlL2RhdGF0eXBlJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi4vLi4vdXRpbHMvaXNFbXB0eSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wczxWYWx1ZT4ge1xyXG4gIC8qKiDmj5DkuqTnmoRKU09OIEtleeWAvCAqL1xyXG4gIGZpZWxkS2V5OiBzdHJpbmc7XHJcbiAgLyoqIOWtl+auteaYvuekuueahOWQjeensCAqL1xyXG4gIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gIC8qKiDliJ3lp4vlgLwgKi9cclxuICBkZWZhdWx0VmFsdWU/OiBWYWx1ZTtcclxuICAvKiog6buY6K6k5o+Q56S65paH5a2X77yM5Lya6KaG55uW5YaF572u55qE5o+Q56S6ICovXHJcbiAgcHJvbXB0Pzogc3RyaW5nO1xyXG4gIC8qKiDojrflj5booajljZXmqKHlnosgKi9cclxuICBmb3JtPzogKCkgPT4gRm9ybVNlcnZpY2U7XHJcbiAgLyoqIOaYr+WQpuW/heWhqyAqL1xyXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAvKiog6Ieq5a6a5LmJ6aqM6K+B5Ye95pWw77yM5oiW6ICF5LuO5YaF572u5Ye95pWw5Lit6YCJ5oupICovXHJcbiAgdmFsaWRhdGU/OiAoKHZhbHVlOiBWYWx1ZSkgPT4gYm9vbGVhbikgfCBrZXlvZiB0eXBlb2YgdmFsaWRhdGU7XHJcbiAgLyoqIHZhbHVl5pS55Y+Y5LqL5Lu2ICovXHJcbiAgb25DaGFuZ2U/OiAodmFsdWU6IFZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9ICdlbXB0eScgfCAnZmFpbCcgfCAnY29tcGxldGUnO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgRmllbGRzPFZhbHVlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhc2VQcm9wczxWYWx1ZT4pIHtcclxuICAgIHRoaXMuZmllbGRLZXkgPSBwcm9wcy5maWVsZEtleTtcclxuICAgIHRoaXMuZmllbGROYW1lID0gcHJvcHMuZmllbGROYW1lO1xyXG4gICAgdGhpcy5yZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5wcm9tcHQgPSBuZXcgT2JPYmplY3QoeyBkZWZhdWx0VmFsdWU6IHByb3BzLnByb21wdCB8fCAnJ30pO1xyXG4gICAgdGhpcy5nZXRGb3JtID0gcHJvcHMuZm9ybTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItY29uZGl0aW9uYWwtZXhwcmVzc2lvblxyXG4gICAgaWYgKHR5cGVvZiBwcm9wcy52YWxpZGF0ZSAgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uID0gdmFsaWRhdGVbcHJvcHMudmFsaWRhdGVdIGFzICgodmFsdWU6IGFueSkgPT4gYm9vbGVhbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZlcmlmaWNhdGlvbiA9IHByb3BzLnZhbGlkYXRlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xyXG5cclxuICAgIHRoaXMuc2V0UHJvbXB0ID0gdGhpcy5zZXRQcm9tcHQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSA9IHRoaXMuY2hhbmdlVmFsdWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0UHJvbXB0ID0gdGhpcy5nZXRQcm9tcHQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiDooajljZXmqKHlnosgKi9cclxuICBwcm90ZWN0ZWQgZ2V0Rm9ybTogQmFzZVByb3BzPFJlYWRvbmx5PFZhbHVlPj5bJ2Zvcm0nXSB8IHVuZGVmaW5lZDtcclxuICAvKiog6aqM6K+B5Ye95pWw55qE5pa55rOV5ZCNICovXHJcbiAgcHJpdmF0ZSB2ZXJpZmljYXRpb246ICgodmFsdWU6IFZhbHVlKSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZDtcclxuICAvKiogdmFsdWXmlLnlj5jkuovku7YgKi9cclxuICBwcml2YXRlIG9uQ2hhbmdlOiAoKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOWtl+auteS4reaWh+WQjeensCAqL1xyXG4gIHByaXZhdGUgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgLyoqIOS4iuS4gOasoemqjOivgeeahOWAvCAqL1xyXG4gIHByaXZhdGUgbGFzdFZhbGlkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqIOWAvCAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSB2YWx1ZTogRGF0YVR5cGU8VmFsdWU+O1xyXG4gIC8qKiDnlKjkuo7opobnm5bpu5jorqTnmoRwcm9tcHQgKi9cclxuICBwcml2YXRlIHByb21wdDogT2JPYmplY3Q8c3RyaW5nPjtcclxuICAvKioganNvbiBrZXnlgLwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZmllbGRLZXk6IHN0cmluZztcclxuICAvKiog5piv5ZCm5b+F5aGrICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHJlcXVpcmVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDovpPlhaXnirbmgIEgKi9cclxuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IFN0YXRlIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZS5nZXQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xyXG4gICAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gJ2VtcHR5JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcclxuICAgICAgcmV0dXJuICdmYWlsJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnY29tcGxldGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9ruaPkOekuuaWh+WtlyAqL1xyXG4gIHB1YmxpYyBzZXRQcm9tcHQodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5nZXRQcm9tcHQoKSAhPT0gdGV4dCkge1xyXG4gICAgICB0aGlzLnByb21wdC5zZXQodGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5o+Q56S65paH5a2XICovXHJcbiAgcHVibGljIGdldFByb21wdCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvbXB0ID0gdGhpcy5wcm9tcHQuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHByb21wdCkge1xyXG4gICAgICByZXR1cm4gcHJvbXB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdlbXB0eScpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZE5hbWV95b+F5aGrYDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnZmFpbCcpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5maWVsZE5hbWV95qC85byP5LiN5q2j56GuYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi+k+WFpemqjOivgeWHveaVsFxyXG4gICAqIOS4unRydWXooajnpLrmnInplJnor6/vvIzkuLpmYWxzZeihqOekuuaXoOmUmeivr1xyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnZhbHVlLmlzQ2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZS5nZXQoKTtcclxuICAgICAgLy8g5Yik5pat5piv5ZCm5pyJ6Ieq5a6a5LmJ6aqM6K+B5Ye95pWwXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItY29uZGl0aW9uYWwtZXhwcmVzc2lvblxyXG4gICAgICBpZiAodmFsdWUgJiYgdGhpcy52ZXJpZmljYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubGFzdFZhbGlkYXRlID0gIXRoaXMudmVyaWZpY2F0aW9uKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxhc3RWYWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDliKTmlq3mnInmsqHmnInpqozor4Hlh73mlbDvvIzmsqHmnInnmoTor53lsLHkuI3pnIDopoHpqozor4FcclxuICAgIHJldHVybiB0aGlzLmxhc3RWYWxpZGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKiDmuIXnqbrmlbDmja7nirbmgIEgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgY2xlYXIoKTogdm9pZDtcclxuXHJcbiAgLyoqIOWvueWAvOaUueWPmOaXtuWBmuS4gOS6m+iBlOWKqOWkhOeQhiAqL1xyXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZSh2YWx1ZTogVmFsdWUpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkczsiLCJpbXBvcnQgQmFzZSwgeyBQcm9wcywgUmVhZE9ubHkgfSBmcm9tICcuLi8uLi9fYmFzZS9kYXRhdHlwZSc7XHJcblxyXG5jbGFzcyBPYkFycmF5PFZhbHVlPiBleHRlbmRzIEJhc2U8VmFsdWVbXT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzPzogUHJvcHM8QXJyYXk8UmVhZE9ubHk8VmFsdWU+Pj4pIHtcclxuICAgIHN1cGVyKHByb3BzICYmIHByb3BzLnJlcXVlc3QpO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSBwcm9wcyAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBbXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2YWx1ZTogQXJyYXk8UmVhZE9ubHk8VmFsdWU+PjtcclxuXHJcbiAgcHVibGljIHNldCh2YWx1ZTogQXJyYXk8UmVhZE9ubHk8VmFsdWU+Pik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLnJlcXVlc3QpIHtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3Quc3RhdGUuc2V0KCdjb21wbGV0ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdC5zdGF0ZS5zZXQoJ2VtcHR5Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZURhdGFJZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCgpOiBBcnJheTxSZWFkT25seTxWYWx1ZT4+IHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JBcnJheTsiLCJpbXBvcnQgUmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0JztcclxuaW1wb3J0IEJhc2UsIHsgUmVhZE9ubHksIEJhc2VWYWx1ZSB9IGZyb20gJy4uLy4uL19iYXNlL2RhdGF0eXBlJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnLi4vLi4vdXRpbHMvaXNFbXB0eSc7XHJcblxyXG5leHBvcnQgdHlwZSBWYWx1ZTxUPiA9IFQgZXh0ZW5kcyBCYXNlVmFsdWUgPyBUIDogVCB8IHVuZGVmaW5lZDtcclxuXHJcbmludGVyZmFjZSBQcm9wczxUPiB7XHJcbiAgcmVxdWVzdD86IFJlcXVlc3Q7XHJcbiAgZGVmYXVsdFZhbHVlOiBSZWFkT25seTxUPjtcclxufVxyXG5cclxuLyoqIOWvueixoeaIluWfuuacrOexu+Wei+aVsOaNriAqL1xyXG5jbGFzcyBPYk9iamVjdDxUPiBleHRlbmRzIEJhc2U8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xyXG4gICAgc3VwZXIocHJvcHMucmVxdWVzdCk7XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2YWx1ZTogUmVhZE9ubHk8VD47XHJcblxyXG4gIHB1YmxpYyBzZXQodmFsdWU6IFJlYWRPbmx5PFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMucmVxdWVzdCkge1xyXG4gICAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3Quc3RhdGUuc2V0KCdlbXB0eScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdC5zdGF0ZS5zZXQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZURhdGFJZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCgpOiBSZWFkT25seTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9iT2JqZWN0OyIsImltcG9ydCB5aiBmcm9tICcuLi90eXBpbmdzJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFJvdXRlID0gKHByb3BzOiB5ai5QYWdlUHJvcHM8YW55PikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG5jbGFzcyBHbG9iYWwge1xyXG4gIHB1YmxpYyBhcHBSb3V0ZSE6IEFwcFJvdXRlO1xyXG4gIHB1YmxpYyByb3V0ZXMhOiBKU1guRWxlbWVudFtdO1xyXG4gIHB1YmxpYyBoaXN0b3J5ITogSGlzdG9yeTtcclxuICAvKiog6aG16Z2iaWQgKi9cclxuICBwdWJsaWMgcGFnZUlkOiBudW1iZXIgPSAxO1xyXG4gIC8qKiByZXBhbGNl5YmN55qEY29tcG9uZW50ICovXHJcbiAgcHVibGljIHJlcGxhY2VCZWZvcmVDb21wb25lbnQhOiBQYWdlPHlqLlBhZ2VQcm9wczxhbnk+LCBhbnksIGFueT47XHJcbiAgLyoqIOaYr+WQpuWkhOS6jmlucHV0IGZvdWNz54q25oCB77yM55So5LqO5Yik5patZGlzcGF0Y2jmmK/lkKbopoHkvJjljJYgKi9cclxuICBwdWJsaWMgaW5wdXRGb3VjczogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBnbG9iYWwgPSBuZXcgR2xvYmFsKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7IiwiaW1wb3J0IHlqIGZyb20gJy4uL3R5cGluZ3MnO1xyXG5pbXBvcnQgYXhpb3MsIHsgQ2FuY2VsZXIsIEF4aW9zUmVzcG9uc2UsIEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICogYXMgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xyXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnLi4vY29tcG9uZW50L1N0YXRlTWFjaGluZSc7XHJcbmltcG9ydCBPYk9iamVjdCBmcm9tICcuL2RhdGF0eXBlL29iT2JqZWN0JztcclxuY29uc3QgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50IHtcclxuICAvKiog5oiQ5Yqf5ZCO55qE5Zue6LCDICovXHJcbiAgY2FsbGJhY2s/OiAocmVzcG9uc2U6IHlqLnJlc3BvbnNlLCAuLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxuICAvKiog5aSx6LSl5ZCO55qE5Zue6LCDICovXHJcbiAgZmFpbGJhY2s/OiAoZXJyOiBFcnJvcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEV2ZW50IHtcclxuICBhcGk/OiBzdHJpbmc7XHJcbiAgcmVxdWVzdERhdGE/OiAoKSA9PiBQYXJhbXM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uUGFyYW1zIHtcclxuICAvKiog6K+35rGC55qE5Y+C5pWw6YWN572uICovXHJcbiAgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWc7XHJcbiAgLyoqIOaYr+WQpumcgOimgeWBmnRyYW5zZm9ybVJlc3BvbnNl5aSE55CG77yM6buY6K6k5aSE55CGICovXHJcbiAgdHJhbnNmb3JtUmVzcG9uc2U/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVhZENhY2hlUGFyYW1zPERhdGE+IHtcclxuICBkYXRhOiBEYXRhO1xyXG4gIC8qKiDlkb3kuK3nvJPlrZggKi9cclxuICBoaXQ6IChkYXRhOiBEYXRhKSA9PiB2b2lkO1xyXG4gIC8qKiDmnKrlkb3kuK3nvJPlrZggICovXHJcbiAgbWlzczogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuYWJzdHJhY3QgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM/OiBQcm9wcykge1xyXG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XHJcblxyXG4gICAgaWYgKHByb3BzKSB7XHJcbiAgICAgIHRoaXMuX2FwaSA9IHByb3BzLmFwaTtcclxuICAgICAgdGhpcy5fY2FsbGJhY2sgPSBwcm9wcy5jYWxsYmFjaztcclxuICAgICAgdGhpcy5fZmFpbGJhY2sgPSBwcm9wcy5mYWlsYmFjaztcclxuICAgICAgdGhpcy5yZXF1ZXN0RGF0YSA9IHByb3BzLnJlcXVlc3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzcG9uc2UgPSB0aGlzLnJlc3BvbnNlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFjdGlvbiA9IHRoaXMuYWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiog5Y+R6YCB6K+35rGCICovXHJcbiAgcHVibGljIGFic3RyYWN0IHNlbmQoLi4uYXJnczogYW55W10pOiBQcm9taXNlPHZvaWQ+O1xyXG4gIC8qKiDor7fmsYLlj5HpgIHlpLHotKXlkI7nmoTph43mlrDor7fmsYLnmoTmrKHmlbAgKi9cclxuICBwcml2YXRlIGFnYWluQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgLyoqIOaYr+WQpuW8gOWQr+ivt+axguWksei0peWQjumHjeaWsOivt+axgiAqL1xyXG4gIHByb3RlY3RlZCBhZ2FpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiDpu5jorqTlj4LmlbDvvIznlKjkuo51cmzkuIrnmoRzZWFyY2ggKi9cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQYXJhbXM6IFBhcmFtcyB8IHVuZGVmaW5lZDtcclxuICAvKiog6buY6K6k5Y+C5pWw77yM55So5LqOcG9zdOivt+axgueahGRhdGEgKi9cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHREYXRhOiBQYXJhbXMgfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOivt+axguaIkOWKn+WQjueahOm7mOiupOWkhOeQhiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZTogeWoucmVzcG9uc2UpID0+IHlqLnJlc3BvbnNlO1xyXG4gIC8qKiBDb250ZW50LVR5cGXmmK/lkKborr7nva7kuLphcHBsaWNhdGlvbi9qc29uICovXHJcbiAgcHVibGljIHN0YXRpYyBpc0FwcGxpY2F0aW9uSnNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiDlj5bmtojor7fmsYIgKi9cclxuICBwdWJsaWMgY2FuY2VsOiBDYW5jZWxlciB8IHVuZGVmaW5lZDtcclxuICAvKiog5piv5ZCm5aSE5LqO6K+35rGC5LitICovXHJcbiAgcHVibGljIHJlcXVlc3Rpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiog5o6l5Y+j5Zyw5Z2AICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9hcGk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAvKiog5oiQ5Yqf5ZCO55qE5Zue6LCDICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jYWxsYmFjazogRXZlbnRbJ2NhbGxiYWNrJ10gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOWksei0peWQjueahOWbnuiwgyAqL1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBfZmFpbGJhY2s6IEV2ZW50WydmYWlsYmFjayddIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDlj5HpgIHor7fmsYLnmoTlj4LmlbAgKi9cclxuICBwdWJsaWMgcmVxdWVzdERhdGE6ICgoKSA9PiBQYXJhbXMpIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDor7fmsYLnmoTnirbmgIEgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdGU6IE9iT2JqZWN0PFR5cGU+ID0gbmV3IE9iT2JqZWN0KHsgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgLyoqIOS4iuS4gOS4quWPguaVsCAqL1xyXG4gIHByaXZhdGUgbGFzdFBhcmFtczogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKiDlr7nor7fmsYLov5Tlm57lkI7nmoTlk43lupTlgZrlpITnkIYgKi9cclxuICBwcml2YXRlIHJlc3BvbnNlKHBhcmFtczogQWN0aW9uUGFyYW1zLCByZXNwb25zZTogQXhpb3NSZXNwb25zZTx5ai5yZXNwb25zZT4pOiB5ai5yZXNwb25zZSB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1SZXNwb25zZSA9IHBhcmFtcy50cmFuc2Zvcm1SZXNwb25zZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBwYXJhbXMudHJhbnNmb3JtUmVzcG9uc2U7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIHRoaXMucmVxdWVzdGluZyA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBpZiAodHJhbnNmb3JtUmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gUmVxdWVzdC50cmFuc2Zvcm1SZXNwb25zZShkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5aaC5p6c6K+35rGC5aSx6LSl77yM5bCx5Y+R6LW36YeN5paw5Y+R6LW36K+35rGC77yM5qyh5pWw5pyA5aSa5Li6M+asoVxyXG4gICAgICBpZiAodGhpcy5hZ2FpbiAmJiB0aGlzLmFnYWluQ291bnQgPCAzKSB7XHJcbiAgICAgICAgdGhpcy5hZ2FpbkNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24ocGFyYW1zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldCgnZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5Y+R6YCB6K+35rGC55qE5bCB6KOF5Ye95pWwICovXHJcbiAgcHJvdGVjdGVkIGFjdGlvbihwYXJhbXM6IEFjdGlvblBhcmFtcyk6IFByb21pc2U8eWoucmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8g5YWI5Yik5pat5piv5ZCm5pyJ57yT5a2Y77yM5aaC5p6c5pyJ5bCx6K+757yT5a2Y77yM5ZCm5YiZ5Y+R6LW36K+35rGCXHJcbiAgICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSBjb25maWcubWV0aG9kICYmIGNvbmZpZy5tZXRob2QudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAoUmVxdWVzdC5kZWZhdWx0RGF0YSAmJiBtZXRob2QgPT09ICdwb3N0Jykge1xyXG4gICAgICBjb25zdCBkZWZhdWx0RGF0YSA9IFJlcXVlc3QuZGVmYXVsdERhdGE7XHJcbiAgICAgIE9iamVjdC5rZXlzKChkZWZhdWx0RGF0YSkpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGlmIChkZWZhdWx0RGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCAoUmVxdWVzdC5kZWZhdWx0RGF0YSBhcyBQYXJhbXMpW2tleV0gYXMgc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChSZXF1ZXN0LmRlZmF1bHRQYXJhbXMgJiYgbWV0aG9kID09PSAnZ2V0Jykge1xyXG4gICAgICBjb25zdCB0ZW1wOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgIGlmIChjb25maWcucGFyYW1zKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnLnBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZy5wYXJhbXNba2V5XTtcclxuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0ZW1wW2tleV0gPSBjb25maWcucGFyYW1zW2tleV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbmZpZy5wYXJhbXMgPSBhc3NpZ24oe30sIFJlcXVlc3QuZGVmYXVsdFBhcmFtcywgdGVtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKChjb25maWcuZGF0YSkpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnLmRhdGFba2V5XTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgIXVybFNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIGNvbmZpZy5kYXRhW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IGF4aW9zLkNhbmNlbFRva2VuKChjYW5jZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2FuY2VsID0gY2FuY2VsO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiBtZXRob2QgPT09ICdwb3N0JyAmJiBSZXF1ZXN0LmlzQXBwbGljYXRpb25Kc29uID09PSBmYWxzZSA/ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgZGF0YTogdXJsU2VhcmNoUGFyYW1zLFxyXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZShwYXJhbXMsIHJlc3BvbnNlKSk7XHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgIT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2V0KCdmYWlsJyk7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOS9v+eUqOe8k+WtmCAqL1xyXG4gIHByb3RlY3RlZCBhc3luYyByZWFkQ2FjaGU8RGF0YT4ocGFyYW1zOiBSZWFkQ2FjaGVQYXJhbXM8RGF0YT4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgaGl0LCBtaXNzIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8g5aaC5p6c5pWw5o2u5a2Y5Zyo5L2/55So57yT5a2YXHJcbiAgICBpZiAoaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICBtaXNzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoaXQoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5Y+C5pWw5piv5ZCm5pS55Y+YICovXHJcbiAgcHVibGljIGlzUGFyYW1zQ2hhbmdlKGN1cnJlbnRQYXJhbXM6IFBhcmFtcyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY3VycmVudFBhcmFtc1N0ciA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQYXJhbXMpO1xyXG4gICAgY29uc3QgaXNQYXJhbXNDaGFuZ2UgPSB0aGlzLmxhc3RQYXJhbXMgIT09IGN1cnJlbnRQYXJhbXNTdHI7XHJcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSBjdXJyZW50UGFyYW1zU3RyO1xyXG4gICAgcmV0dXJuIGlzUGFyYW1zQ2hhbmdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDsiLCIvLyBpbXBvcnQgc3RyaW5nVG9IZXggZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVG9IZXgnO1xyXG4vLyBpbXBvcnQgZ2xvYmFsIGZyb20gJy4uLy4uL2FwcC9nbG9iYWwnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50L1RvYXN0JztcclxuaW1wb3J0IEltZ1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50L0ltZ1ZpZXcnO1xyXG5pbXBvcnQgaXNIdHRwIGZyb20gJy4uLy4uL3V0aWxzL2lzSHR0cCc7XHJcbmNvbnN0IHsgaGV4X3NoYTEgfSA9IHJlcXVpcmUoJy4vc2hhMS5qcycpO1xyXG5cclxuaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gIHRpY2tldDogc3RyaW5nO1xyXG4gIGFwcElkOiBzdHJpbmc7XHJcbiAgc2hhcmVMaW5rPzogKCkgPT4gc3RyaW5nO1xyXG4gIHNoYXJlVGl0bGU/OiBzdHJpbmc7XHJcbiAgc2hhcmVEZXNjPzogc3RyaW5nO1xyXG4gIGRlYnVnPzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE9uU2hhcmVQYXJhbXMge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGRlc2M/OiBzdHJpbmc7XHJcbiAgaW1nSG9zdD86IHN0cmluZztcclxuICBpbWdVcmw/OiBzdHJpbmc7XHJcbiAgbGluaz86IHN0cmluZztcclxuICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmUge1xyXG4gIC8qKiDmoIfpopggKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKiog5o+P6L+wICovXHJcbiAgZGVzYz86IHN0cmluZztcclxuICAvKiog5bCB6Z2iICovXHJcbiAgY292ZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXMge1xyXG4gIGxvY2FsRGF0YTogc3RyaW5nO1xyXG4gIHNlcnZlcklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dFeHRlbmRzIGV4dGVuZHMgV2luZG93IHtcclxuICBfX3d4anNfaXNfd2t3ZWJ2aWV3OiBib29sZWFuO1xyXG59XHJcblxyXG5kZWNsYXJlIGNvbnN0IHd4OiBhbnk7XHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3dFeHRlbmRzO1xyXG5cclxuLy8gY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbmNvbnN0IGNvbnZlbnRpb25NZW51SXRlbSA9IFtcclxuICAnbWVudUl0ZW06c2hhcmU6cXEnLFxyXG4gICdtZW51SXRlbTpzaGFyZTp3ZWlib0FwcCcsXHJcbiAgJ21lbnVJdGVtOnNoYXJlOmZhY2Vib29rJyxcclxuICAnbWVudUl0ZW06c2hhcmU6UVpvbmUnLFxyXG4gICdtZW51SXRlbTplZGl0VGFnJyxcclxuICAnbWVudUl0ZW06ZGVsZXRlJyxcclxuICAnbWVudUl0ZW06Y29weVVybCcsXHJcbiAgJ21lbnVJdGVtOm9yaWdpblBhZ2UnLFxyXG4gICdtZW51SXRlbTpyZWFkTW9kZScsXHJcbiAgJ21lbnVJdGVtOm9wZW5XaXRoUVFCcm93c2VyJyxcclxuICAnbWVudUl0ZW06b3BlbldpdGhTYWZhcmknLFxyXG4gICdtZW51SXRlbTpzaGFyZTplbWFpbCcsXHJcbiAgJ21lbnVJdGVtOnNoYXJlOmJyYW5kJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlaVhpbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlQWxsTm9uQmFzZU1lbnVJdGVtID0gdGhpcy5oaWRlQWxsTm9uQmFzZU1lbnVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhpZGVDb252ZW50aW9uTWVudUl0ZW0gPSB0aGlzLmhpZGVDb252ZW50aW9uTWVudUl0ZW0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGlkZVNoYXJlTWVudUl0ZW0gPSB0aGlzLmhpZGVTaGFyZU1lbnVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnByZXZpZXdJbWFnZSA9IHRoaXMucHJldmlld0ltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNob29zZUltYWdlID0gdGhpcy5jaG9vc2VJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGxvYWRJbWFnZSA9IHRoaXMudXBsb2FkSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0TG9jYWxJbWdEYXRhID0gdGhpcy5nZXRMb2NhbEltZ0RhdGEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25TaGFyZSA9IHRoaXMub25TaGFyZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcGlMaXN0OiBzdHJpbmdbXSA9IFtcclxuICAgICdwcmV2aWV3SW1hZ2UnLFxyXG4gICAgJ2hpZGVNZW51SXRlbXMnLFxyXG4gICAgJ2Nob29zZUltYWdlJyxcclxuICAgICd1cGxvYWRJbWFnZScsXHJcbiAgICAnZ2V0TG9jYWxJbWdEYXRhJyxcclxuICAgICdvbk1lbnVTaGFyZVRpbWVsaW5lJyxcclxuICAgICdvbk1lbnVTaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICAgJ29uTWVudVNoYXJlV2VpYm8nLFxyXG4gICAgJ29uTWVudVNoYXJlUVpvbmUnLFxyXG4gICAgJ3Nob3dPcHRpb25NZW51JyxcclxuICAgICdoaWRlQWxsTm9uQmFzZU1lbnVJdGVtJ1xyXG4gIF07XHJcbiAgcHVibGljIHN0YXRpYyBvcHRpb25zOiBPcHRpb25zIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGdldEh0dHBVcmwoc3JjOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaG9zdCA9IEltZ1ZpZXcuZGVmYXVsdEhvc3Q7XHJcbiAgICBjb25zdCB1cmwgPSBzcmMgJiYgaXNIdHRwKHNyYykgPyBzcmMgOiBob3N0ICsgc3JjO1xyXG5cclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZHkoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmIChXZWlYaW4ub3B0aW9ucykge1xyXG4gICAgICB3eC5yZWFkeShjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5Yid5aeL5YyW6YWN572u77yM5a+55bqUd3guY29uZmlnICovXHJcbiAgcHVibGljIGNvbmZpZygpOiB2b2lkIHtcclxuICAgIGlmIChXZWlYaW4ub3B0aW9ucykge1xyXG4gICAgICBjb25zdCB7IHRpY2tldCwgZGVidWcsIGFwcElkIH0gPSBXZWlYaW4ub3B0aW9ucztcclxuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IG5vbmNlU3RyID0gJ2FrMG9zN2gxZG9qbjUxb2p2czVyOGxmd3NxM2RlYnN1JztcclxuICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcclxuICAgICAgY29uc3QgZGF0YSA9IGBqc2FwaV90aWNrZXQ9JHt0aWNrZXR9Jm5vbmNlc3RyPSR7bm9uY2VTdHJ9JnRpbWVzdGFtcD0ke3RpbWVzdGFtcH0mdXJsPSR7dXJsfWA7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGhleF9zaGExKGRhdGEpO1xyXG4gICAgICB3eC5jb25maWcoe1xyXG4gICAgICAgIGRlYnVnLFxyXG4gICAgICAgIGFwcElkLFxyXG4gICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICBub25jZVN0cixcclxuICAgICAgICBzaWduYXR1cmUsXHJcbiAgICAgICAganNBcGlMaXN0OiB0aGlzLmFwaUxpc3RcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6ZqQ6JeP5omA5pyJ6Z2e5Z+656GA5oyJ6ZKu5o6l5Y+jICovXHJcbiAgcHVibGljIGhpZGVBbGxOb25CYXNlTWVudUl0ZW0oKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlYWR5KCgpID0+IHtcclxuICAgICAgd3guaGlkZUFsbE5vbkJhc2VNZW51SXRlbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5bi46KeB6ZqQ6JeP6I+c5Y2V6YWN572uICovXHJcbiAgcHVibGljIGhpZGVDb252ZW50aW9uTWVudUl0ZW0oKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlYWR5KCgpID0+IHtcclxuICAgICAgd3guc2hvd09wdGlvbk1lbnUoKTtcclxuICAgICAgd3guaGlkZU1lbnVJdGVtcyh7XHJcbiAgICAgICAgbWVudUxpc3Q6IGNvbnZlbnRpb25NZW51SXRlbVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOWcqOW4uOingeiPnOWNlemFjee9ruWfuuehgOmakOiXj+aJgOacieWIhuS6qyAqL1xyXG4gIHB1YmxpYyBoaWRlU2hhcmVNZW51SXRlbSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtZW51TGlzdCA9IFtcclxuICAgICAgICAuLi5jb252ZW50aW9uTWVudUl0ZW0sXHJcbiAgICAgICAgJ21lbnVJdGVtOnNoYXJlOmFwcE1lc3NhZ2UnLFxyXG4gICAgICAgICdtZW51SXRlbTpzaGFyZTp0aW1lbGluZScsXHJcbiAgICAgICAgJ21lbnVJdGVtOmZhdm9yaXRlJyxcclxuICAgICAgXTtcclxuICAgICAgd3guc2hvd09wdGlvbk1lbnUoKTtcclxuICAgICAgd3guaGlkZU1lbnVJdGVtcyh7XHJcbiAgICAgICAgbWVudUxpc3RcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDpooTop4jlm77niYcgKi9cclxuICBwdWJsaWMgcHJldmlld0ltYWdlKHNyYzogc3RyaW5nLCBpbWdIb3N0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIGNvbnN0IHVybHMgPSAoc3JjLmluZGV4T2YoJ2h0dHAnKSA+PSAwIHx8IHNyYy5pbmRleE9mKCdodHRwcycpID49IDApID8gW3NyYy5yZXBsYWNlKCdzXycsICdsXycpXSA6IFsoaW1nSG9zdCArIHNyYykucmVwbGFjZSgnc18nLCAnbF8nKV07XHJcblxyXG4gICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgICBjdXJyZW50OiB1cmxzWzBdLFxyXG4gICAgICAgIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgICAgICB1cmxzXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5Zu+5YOP6YCJ5oupICovXHJcbiAgcHVibGljIGNob29zZUltYWdlKHNhdmVwaG90b3M6IChzZXJ2ZXJJZDogc3RyaW5nLCBsb2NhbERhdGE6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxyXG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSWRzID0gcmVzLmxvY2FsSWRzOyAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLBJROWIl+ihqO+8jGxvY2FsSWTlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgICB0aGlzLnVwbG9hZEltYWdlKGxvY2FsSWRzWzBdLCBzYXZlcGhvdG9zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog5LiK5Lyg5Zu+54mHICovXHJcbiAgcHVibGljIHVwbG9hZEltYWdlKGxvY2FsSWQ6IHN0cmluZywgc2F2ZXBob3RvczogKHNlcnZlcklkOiBzdHJpbmcsIGxvY2FsRGF0YTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBUb2FzdC5sb2FkaW5nKCfkuIrkvKDkuK0uLi4nKTtcclxuICAgIHd4LnVwbG9hZEltYWdlKHtcclxuICAgICAgbG9jYWxJZCwgLy8g6ZyA6KaB5LiK5Lyg55qE5Zu+54mH55qE5pys5ZywSUTvvIznlLFjaG9vc2VJbWFnZeaOpeWPo+iOt+W+l1xyXG4gICAgICBpc1Nob3dQcm9ncmVzc1RpcHM6IDAsIC8vIOm7mOiupOS4ujHvvIzmmL7npLrov5vluqbmj5DnpLpcclxuICAgICAgc3VjY2VzczogKHJlczogUmVzKSA9PiB7XHJcbiAgICAgICAgVG9hc3QuY2xvc2UoKTtcclxuICAgICAgICAvLyDlhbzlrrlJT1Mgd2t3ZWJ2aWV35qih5byPXHJcbiAgICAgICAgaWYgKHdpbmRvd1snX193eGpzX2lzX3drd2VidmlldyddKSB7XHJcbiAgICAgICAgICAvLyDov5Tlm57lm77niYfnmoTmnI3liqHlmajnq69JRFxyXG4gICAgICAgICAgdGhpcy5nZXRMb2NhbEltZ0RhdGEobG9jYWxJZCwgKGxvY2FsRGF0YSkgPT4gc2F2ZXBob3RvcyhyZXMuc2VydmVySWQsIGxvY2FsRGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzYXZlcGhvdG9zKHJlcy5zZXJ2ZXJJZCwgbG9jYWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGU6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgVG9hc3QuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W5pys5Zyw5Zu+54mH5o6l5Y+jICovXHJcbiAgcHVibGljIGdldExvY2FsSW1nRGF0YShsb2NhbElkOiBzdHJpbmcsIHNob3dwaG90b3M6IChsb2NhbElkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHd4LmdldExvY2FsSW1nRGF0YSh7XHJcbiAgICAgIGxvY2FsSWQsIC8vIOWbvueJh+eahGxvY2FsSURcclxuICAgICAgc3VjY2VzcyhyZXM6IFJlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGxvY2FsRGF0YeaYr+WbvueJh+eahGJhc2U2NOaVsOaNru+8jOWPr+S7peeUqGltZ+agh+etvuaYvuekulxyXG4gICAgICAgIHNob3dwaG90b3MocmVzLmxvY2FsRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOW+ruS/oeWIhuS6qyAqL1xyXG4gIHB1YmxpYyBvblNoYXJlKHBhcmFtcz86IE9uU2hhcmVQYXJhbXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gV2VpWGluLm9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNoYXJlTGluayAmJiBvcHRpb25zLnNoYXJlVGl0bGUgJiYgb3B0aW9ucy5zaGFyZURlc2MpIHtcclxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHBhcmFtcyAmJiBwYXJhbXMuY2FsbGJhY2s7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSAocGFyYW1zICYmIHBhcmFtcy50aXRsZSkgfHwgb3B0aW9ucyAmJiBvcHRpb25zLnNoYXJlVGl0bGU7XHJcbiAgICAgICAgY29uc3QgZGVzYyA9IChwYXJhbXMgJiYgcGFyYW1zLmRlc2MpIHx8IG9wdGlvbnMgJiYgb3B0aW9ucy5zaGFyZURlc2M7XHJcbiAgICAgICAgY29uc3QgaW1nVXJsID0gKHBhcmFtcyAmJiBwYXJhbXMuaW1nVXJsICYmIHRoaXMuZ2V0SHR0cFVybChwYXJhbXMuaW1nVXJsKSkgfHwgJ2h0dHBzOi8vd2FwLnl1ZWppYTEwMC5jbi9hc3NlcnQvaW1nL2xvZ28uanBnJztcclxuICAgICAgICAvLyBjb25zdCBwYXRobmFtZSA9IGdsb2JhbC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSAocGFyYW1zICYmIHBhcmFtcy5saW5rKSB8fCBvcHRpb25zLnNoYXJlTGluaygpO1xyXG4gICAgICAgIGNvbnN0IGFwaUxpc3QgPSBbXHJcbiAgICAgICAgICAnb25NZW51U2hhcmVUaW1lbGluZScsXHJcbiAgICAgICAgICAnb25NZW51U2hhcmVBcHBNZXNzYWdlJyxcclxuICAgICAgICAgIC8vICdvbk1lbnVTaGFyZVFRJyxcclxuICAgICAgICAgIC8vICdvbk1lbnVTaGFyZVdlaWJvJyxcclxuICAgICAgICAgIC8vICdvbk1lbnVTaGFyZVFab25lJ1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZUNvbnZlbnRpb25NZW51SXRlbSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGFwaSA9IGFwaUxpc3RbaV07XHJcbiAgICAgICAgICB3eFthcGldKHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2MsXHJcbiAgICAgICAgICAgIGxpbmssXHJcbiAgICAgICAgICAgIGltZ1VybCxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+W+ruS/oeWIhuS6q+Wksei0pe+8jOe8uuWksXNoYXJlTGlua+aIlnNoYXJlVGl0bGXmiJZzaGFyZURlc2PnmoTphY3nva4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB3ZWl4aW4gPSBuZXcgV2VpWGluKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWl4aW47IiwidmFyIGhleGNhc2UgPSAwO1xyXG52YXIgYjY0cGFkID0gXCJcIjtcclxudmFyIGNocnN6ID0gODtcclxuZnVuY3Rpb24gaGV4X3NoYTEocykgeyByZXR1cm4gYmluYjJoZXgoY29yZV9zaGExKHN0cjJiaW5iKHMpLCBzLmxlbmd0aCAqIGNocnN6KSk7IH1cclxuZnVuY3Rpb24gYjY0X3NoYTEocykgeyByZXR1cm4gYmluYjJiNjQoY29yZV9zaGExKHN0cjJiaW5iKHMpLCBzLmxlbmd0aCAqIGNocnN6KSk7IH1cclxuZnVuY3Rpb24gc3RyX3NoYTEocykgeyByZXR1cm4gYmluYjJzdHIoY29yZV9zaGExKHN0cjJiaW5iKHMpLCBzLmxlbmd0aCAqIGNocnN6KSk7IH1cclxuZnVuY3Rpb24gaGV4X2htYWNfc2hhMShrZXksIGRhdGEpIHsgcmV0dXJuIGJpbmIyaGV4KGNvcmVfaG1hY19zaGExKGtleSwgZGF0YSkpOyB9XHJcbmZ1bmN0aW9uIGI2NF9obWFjX3NoYTEoa2V5LCBkYXRhKSB7IHJldHVybiBiaW5iMmI2NChjb3JlX2htYWNfc2hhMShrZXksIGRhdGEpKTsgfVxyXG5mdW5jdGlvbiBzdHJfaG1hY19zaGExKGtleSwgZGF0YSkgeyByZXR1cm4gYmluYjJzdHIoY29yZV9obWFjX3NoYTEoa2V5LCBkYXRhKSk7IH1cclxuZnVuY3Rpb24gc2hhMV92bV90ZXN0KCkge1xyXG4gICAgcmV0dXJuIGhleF9zaGExKFwiYWJjXCIpID09IFwiYTk5OTNlMzY0NzA2ODE2YWJhM2UyNTcxNzg1MGMyNmM5Y2QwZDg5ZFwiO1xyXG59XHJcbmZ1bmN0aW9uIGNvcmVfc2hhMSh4LCBsZW4pIHtcclxuICAgIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbGVuICUgMzIpO1xyXG4gICAgeFsoKGxlbiArIDY0ID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xyXG4gICAgdmFyIHcgPSBBcnJheSg4MCk7XHJcbiAgICB2YXIgYSA9IDE3MzI1ODQxOTM7XHJcbiAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XHJcbiAgICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xyXG4gICAgdmFyIGQgPSAyNzE3MzM4Nzg7XHJcbiAgICB2YXIgZSA9IC0xMDA5NTg5Nzc2O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xyXG4gICAgICAgIHZhciBvbGRhID0gYTtcclxuICAgICAgICB2YXIgb2xkYiA9IGI7XHJcbiAgICAgICAgdmFyIG9sZGMgPSBjO1xyXG4gICAgICAgIHZhciBvbGRkID0gZDtcclxuICAgICAgICB2YXIgb2xkZSA9IGU7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4MDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChqIDwgMTYpXHJcbiAgICAgICAgICAgICAgICB3W2pdID0geFtpICsgal07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHdbal0gPSByb2wod1tqIC0gM10gXiB3W2ogLSA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0ID0gc2FmZV9hZGQoc2FmZV9hZGQocm9sKGEsIDUpLCBzaGExX2Z0KGosIGIsIGMsIGQpKSwgc2FmZV9hZGQoc2FmZV9hZGQoZSwgd1tqXSksIHNoYTFfa3QoaikpKTtcclxuICAgICAgICAgICAgZSA9IGQ7XHJcbiAgICAgICAgICAgIGQgPSBjO1xyXG4gICAgICAgICAgICBjID0gcm9sKGIsIDMwKTtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhID0gc2FmZV9hZGQoYSwgb2xkYSk7XHJcbiAgICAgICAgYiA9IHNhZmVfYWRkKGIsIG9sZGIpO1xyXG4gICAgICAgIGMgPSBzYWZlX2FkZChjLCBvbGRjKTtcclxuICAgICAgICBkID0gc2FmZV9hZGQoZCwgb2xkZCk7XHJcbiAgICAgICAgZSA9IHNhZmVfYWRkKGUsIG9sZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFycmF5KGEsIGIsIGMsIGQsIGUpO1xyXG59XHJcbmZ1bmN0aW9uIHNoYTFfZnQodCwgYiwgYywgZCkge1xyXG4gICAgaWYgKHQgPCAyMClcclxuICAgICAgICByZXR1cm4gKGIgJiBjKSB8ICgofmIpICYgZCk7XHJcbiAgICBpZiAodCA8IDQwKVxyXG4gICAgICAgIHJldHVybiBiIF4gYyBeIGQ7XHJcbiAgICBpZiAodCA8IDYwKVxyXG4gICAgICAgIHJldHVybiAoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCk7XHJcbiAgICByZXR1cm4gYiBeIGMgXiBkO1xyXG59XHJcbmZ1bmN0aW9uIHNoYTFfa3QodCkge1xyXG4gICAgcmV0dXJuICh0IDwgMjApID8gMTUxODUwMDI0OSA6ICh0IDwgNDApID8gMTg1OTc3NTM5MyA6XHJcbiAgICAgICAgKHQgPCA2MCkgPyAtMTg5NDAwNzU4OCA6IC04OTk0OTc1MTQ7XHJcbn1cclxuZnVuY3Rpb24gY29yZV9obWFjX3NoYTEoa2V5LCBkYXRhKSB7XHJcbiAgICB2YXIgYmtleSA9IHN0cjJiaW5iKGtleSk7XHJcbiAgICBpZiAoYmtleS5sZW5ndGggPiAxNilcclxuICAgICAgICBia2V5ID0gY29yZV9zaGExKGJrZXksIGtleS5sZW5ndGggKiBjaHJzeik7XHJcbiAgICB2YXIgaXBhZCA9IEFycmF5KDE2KSwgb3BhZCA9IEFycmF5KDE2KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgIGlwYWRbaV0gPSBia2V5W2ldIF4gMHgzNjM2MzYzNjtcclxuICAgICAgICBvcGFkW2ldID0gYmtleVtpXSBeIDB4NUM1QzVDNUM7XHJcbiAgICB9XHJcbiAgICB2YXIgaGFzaCA9IGNvcmVfc2hhMShpcGFkLmNvbmNhdChzdHIyYmluYihkYXRhKSksIDUxMiArIGRhdGEubGVuZ3RoICogY2hyc3opO1xyXG4gICAgcmV0dXJuIGNvcmVfc2hhMShvcGFkLmNvbmNhdChoYXNoKSwgNTEyICsgMTYwKTtcclxufVxyXG5mdW5jdGlvbiBzYWZlX2FkZCh4LCB5KSB7XHJcbiAgICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xyXG4gICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xyXG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XHJcbn1cclxuZnVuY3Rpb24gcm9sKG51bSwgY250KSB7XHJcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XHJcbn1cclxuZnVuY3Rpb24gc3RyMmJpbmIoc3RyKSB7XHJcbiAgICB2YXIgYmluID0gQXJyYXkoKTtcclxuICAgIHZhciBtYXNrID0gKDEgPDwgY2hyc3opIC0gMTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAqIGNocnN6OyBpICs9IGNocnN6KVxyXG4gICAgICAgIGJpbltpID4+IDVdIHw9IChzdHIuY2hhckNvZGVBdChpIC8gY2hyc3opICYgbWFzaykgPDwgKDMyIC0gY2hyc3ogLSBpICUgMzIpO1xyXG4gICAgcmV0dXJuIGJpbjtcclxufVxyXG5mdW5jdGlvbiBiaW5iMnN0cihiaW4pIHtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgdmFyIG1hc2sgPSAoMSA8PCBjaHJzeikgLSAxO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW4ubGVuZ3RoICogMzI7IGkgKz0gY2hyc3opXHJcbiAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGJpbltpID4+IDVdID4+PiAoMzIgLSBjaHJzeiAtIGkgJSAzMikpICYgbWFzayk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmZ1bmN0aW9uIGJpbmIyaGV4KGJpbmFycmF5KSB7XHJcbiAgICB2YXIgaGV4X3RhYiA9IGhleGNhc2UgPyBcIjAxMjM0NTY3ODlBQkNERUZcIiA6IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFycmF5Lmxlbmd0aCAqIDQ7IGkrKykge1xyXG4gICAgICAgIHN0ciArPSBoZXhfdGFiLmNoYXJBdCgoYmluYXJyYXlbaSA+PiAyXSA+PiAoKDMgLSBpICUgNCkgKiA4ICsgNCkpICYgMHhGKSArXHJcbiAgICAgICAgICAgIGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpID4+IDJdID4+ICgoMyAtIGkgJSA0KSAqIDgpKSAmIDB4Rik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcbmZ1bmN0aW9uIGJpbmIyYjY0KGJpbmFycmF5KSB7XHJcbiAgICB2YXIgdGFiID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJyYXkubGVuZ3RoICogNDsgaSArPSAzKSB7XHJcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoKChiaW5hcnJheVtpID4+IDJdID4+IDggKiAoMyAtIGkgJSA0KSkgJiAweEZGKSA8PCAxNilcclxuICAgICAgICAgICAgfCAoKChiaW5hcnJheVtpICsgMSA+PiAyXSA+PiA4ICogKDMgLSAoaSArIDEpICUgNCkpICYgMHhGRikgPDwgOClcclxuICAgICAgICAgICAgfCAoKGJpbmFycmF5W2kgKyAyID4+IDJdID4+IDggKiAoMyAtIChpICsgMikgJSA0KSkgJiAweEZGKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSAqIDggKyBqICogNiA+IGJpbmFycmF5Lmxlbmd0aCAqIDMyKVxyXG4gICAgICAgICAgICAgICAgc3RyICs9IGI2NHBhZDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RyICs9IHRhYi5jaGFyQXQoKHRyaXBsZXQgPj4gNiAqICgzIC0gaikpICYgMHgzRik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5leHBvcnQgeyBoZXhfc2hhMSB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIGlkOiBcImZhaWwtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDcyIDcyXCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvc3ZnL3Nwcml0ZV8xLjAuMC5zdmcjZmFpbC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIGlkOiBcImxvYWRpbmctdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAtMiA1OS43NSA2MC4yNVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL3N2Zy9zcHJpdGVfMS4wLjAuc3ZnI2xvYWRpbmctdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBpZDogXCJzdWNjZXNzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3MiA3MlwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL3N2Zy9zcHJpdGVfMS4wLjAuc3ZnI3N1Y2Nlc3MtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiaW1wb3J0IEZpZWxkcyBmcm9tICcuLi8uLi9fYmFzZS9zZXJ2aWNlL2ZpZWxkcyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9Ub2FzdCc7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IE9iQXJyYXkgZnJvbSAnLi4vLi4vYXBwL2RhdGF0eXBlL29iQXJyYXknO1xyXG5pbXBvcnQgT2JPYmplY3QgZnJvbSAnLi4vLi4vYXBwL2RhdGF0eXBlL29iT2JqZWN0JztcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICByZXF1ZXN0PzogUmVxdWVzdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbXMge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuY2xhc3MgRm9ybSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5yZXF1ZXN0ID0gb3B0aW9ucy5yZXF1ZXN0O1xyXG5cclxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiDmj5DkuqTnmoTor7fmsYIgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgcmVxdWVzdDogUmVxdWVzdCB8IHVuZGVmaW5lZDtcclxuICAvKiog6KaB5o+Q5Lqk55qE5a2X5q61ICovXHJcbiAgcHVibGljIHJlYWRvbmx5IGZpZWxkczogT2JBcnJheTxGaWVsZHM8YW55Pj4gPSBuZXcgT2JBcnJheSgpO1xyXG4gIC8qKiDooajljZXmmK/lkKblt7Lop6blj5EgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgdHJpZ2dlcjogT2JPYmplY3Q8Ym9vbGVhbj4gPSBuZXcgT2JPYmplY3QoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pO1xyXG4gIC8qKiDooajljZXmmK/lkKblnKjlj6/mj5DkuqTnirbmgIEgKi9cclxuICBwdWJsaWMgZ2V0IGNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZmlsZWRzID0gdGhpcy5maWVsZHMuZ2V0KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaWxlZCA9IGZpbGVkc1tpXTtcclxuXHJcbiAgICAgIGlmIChmaWxlZC5zdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQGFjdGlvbiBwdWJsaWMgdmFsaWRhdGUoZmllbGRLZXk6IHN0cmluZyB8IHVuZGVmaW5lZCwgc3VibWl0OiBib29sZWFuLCBjYWxsYmFjaz86IChmaWVsZDogRmllbGRzPGFueT4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAvLyAgIGxldCBpc0NvbXBsZXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAvLyAgIC8vIOaYr+WQpuinpuWPkeS6hmNhbGxiYWNrXHJcbiAgLy8gICBsZXQgaXNUcmlnZ2VyQ2FsbGJjYWsgPSBmYWxzZTtcclxuXHJcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIGNvbnN0IGZpbGVkID0gdGhpcy5maWVsZHNbaV07XHJcblxyXG4gIC8vICAgICAvLyDmjpLpmaRmaWxlZHPosIPnlKhnZXRGb3JtKCkudmFsaWRhdGXml7bvvIzlr7noh6rouqvnmoTpqozor4FcclxuICAvLyAgICAgLy8g5bm25LiU5Y+q6aqM6K+B6Z2e5q2j56Gu55qE77yMZ2V0RXJyb3IgIT09IGZhbHNl6KGo56S66Z2e5q2j56GuXHJcbiAgLy8gICAgIGlmIChmaWVsZEtleSAhPT0gZmlsZWQuZmllbGRLZXkgJiYgZmlsZWQuZ2V0RXJyb3IoKSAhPT0gZmFsc2UpIHtcclxuICAvLyAgICAgICAvLyBmaWxlZC5nZXRFcnJvcigpID09PSB1bmRlZmluZWTlkoxmaWxlZC5nZXRWYWx1ZSgpID09PSB1bmRlZmluZWTooajnpLrkuLrliJ3lp4vlgLzvvIxcclxuICAvLyAgICAgICAvLyDlvZNlcnJvcuWSjHZhbHVl6YO95piv5Yid5aeL5YC85LiU5b+F6YCJ5Li6dHJ1ZeaXtu+8jOWwseW/veeVpei/meS4qumqjOivge+8jOS4uueahOaYr+mYsuatouS4gOS4qmZpbGVk5pe26L6T5YWl5a6M5oiQ5pe25Lya5byV5Y+R5YW25LuW6L+Y5rKh6L6T5YWl55qEXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gIC8vICAgICAgIGNvbnN0IGlnbm9yZSA9IGZpbGVkLmdldEVycm9yKCkgPT09IHVuZGVmaW5lZCAmJiBmaWxlZC5nZXRWYWx1ZSgpID09PSB1bmRlZmluZWQgJiYgZmlsZWQuZ2V0UmVxdWlyZWQoKSA9PT0gdHJ1ZSAmJiBzdWJtaXQgPT09IGZhbHNlO1xyXG4gIC8vICAgICAgIGlmIChpZ25vcmUgPT09IGZhbHNlKSB7XHJcbiAgLy8gICAgICAgICB0aGlzLmZpZWxkc1tpXS52YWxpZGF0ZSgpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8g5pyJ5LiA5qyh6aqM6K+B5rKh6YCa6L+H77yM5pW05Liq6KGo5Y2V5bCx5bGe5LqO5pyq5a6M5oiQ54q25oCBXHJcbiAgLy8gICAgIC8vIOS4uuS6humYsuatomlzQ29tcGxldGXooqvlkI7pnaLpqozor4HpgJrov4fnmoTlgLzopobnm5bmjonvvIzmiYDku6Xku4XlnKjkuLp0cnVl77yI5Yid5aeL5YC877yJ5pe25omN5Y676aqM6K+BXHJcbiAgLy8gICAgIGlmIChpc0NvbXBsZXRlKSB7XHJcbiAgLy8gICAgICAgLy8g5Zug5Li65YmN6Z2i5a+5ZmlsZWQuZ2V0RXJyb3IoKeS4unVuZGVmaW5lZOi/m+ihjOi/h+WIpOaWre+8jOaJgOS7pei/memHjOS4jeS8muS4unVuZGVmaW5lZFxyXG4gIC8vICAgICAgIC8vIOWboOS4unRoaXMuZmllbGRzW2ldLnZhbGlkYXRlKCnosIPnlKjlkI7lj6/og73kvJrmlLnlj5hmaWxlZC5nZXRFcnJvcigp55qE5YC877yM5omA5Lul6KaB6YeN5paw6LCD55So5LiA5qyh77yM5LiN6IO95Y675YGa57yT5a2YXHJcbiAgLy8gICAgICAgaXNDb21wbGV0ZSA9IGZpbGVkLmdldEVycm9yKCkgPT09IGZhbHNlO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICAvLyBpc1RyaWdnZXJDYWxsYmNha+WPquiwg+eUqOS4gOasoVxyXG4gIC8vICAgICBpZiAoaXNUcmlnZ2VyQ2FsbGJjYWsgPT09IGZhbHNlICYmIGNhbGxiYWNrICYmIGlzQ29tcGxldGUgPT09IGZhbHNlKSB7XHJcbiAgLy8gICAgICAgY2FsbGJhY2sodGhpcy5maWVsZHNbaV0pO1xyXG4gIC8vICAgICAgIGlzVHJpZ2dlckNhbGxiY2FrID0gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIHRoaXMuY29tcGxldGUgPSBpc0NvbXBsZXRlO1xyXG4gIC8vIH1cclxuICAvKipcclxuICAgKiDmmL7npLrlrZfmrrXnmoTplJnor6/mj5DnpLpcclxuICAgKiDlkIzml7blj6rop6blj5HkuIDkuKpUb2FzdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93UHJvbXB0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZmlsZWRzID0gdGhpcy5maWVsZHMuZ2V0KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmaWxlZCA9IGZpbGVkc1tpXTtcclxuXHJcbiAgICAgIGlmIChmaWxlZC5zdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIFRvYXN0LnNob3coZmlsZWQuZ2V0UHJvbXB0KCkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdChwYXJhbXM/OiBQYXJhbXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlcXVlc3QgJiYgdGhpcy5yZXF1ZXN0LnN0YXRlLmdldCgpICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIuc2V0KGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3Quc3RhdGUuc2V0KCdsb2FkaW5nJyk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnNlbmQocGFyYW1zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ3N1Ym1pdOe8uuWwkXJlcXVlc3TlsZ7mgKfvvIzkuI3og73lj5HpgIHor7fmsYInKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmlnZ2VyLnNldCh0cnVlKTtcclxuICAgICAgdGhpcy5zaG93UHJvbXB0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNpcmxlLWFuaW1cIjpcImNpcmxlLWFuaW1fZWlPMkhcIixcImNpcmxlQW5pbVwiOlwiY2lybGUtYW5pbV9laU8ySFwifTsiLCJpbXBvcnQgeWogZnJvbSAnLi4vLi4vdHlwaW5ncy9pbmRleCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gaW1wb3J0IHN2Z1Jvb3RQYXRoIGZyb20gJy4uLy4uL3V0aWxzL3N2Z1Jvb3RQYXRoJztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG4vLyBjb25zdCBsb2FkaW5nU3ZnID0gc3ZnUm9vdFBhdGggKyByZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9hZGluZy5zdmcnKS5pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyB5ai5Db21wb25lbnRQcm9wcyAge1xyXG4gIG9uQ2xpY2s/OiB5ai5PbkNsaWNrPFNWR0VsZW1lbnQ+O1xyXG4gIC8qKiDlm77moIfpk77mjqXlnLDlnYAgKi9cclxuICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuLy8gY29uc3QgcHJlZml4Q2xzID0gJ3lqLWNvbXBvbmVudC1pY29uJztcclxuY29uc3QgSWNvbiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8dXNlIHhsaW5rSHJlZj17cHJvcHMuc3JjfSAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeWogZnJvbSAnLi4vLi4vdHlwaW5ncyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFN0YXRlTWFjaGluZSwgeyBCYXNlUHJvcHMgYXMgU3RhdGVCYXNlUHJvcHMsIFR5cGUgYXMgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lJztcclxuaW1wb3J0IGlzSHR0cCBmcm9tICcuLi8uLi91dGlscy9pc0h0dHAnO1xyXG5pbXBvcnQgd3ggZnJvbSAnLi4vLi4vYXBwL3dlaXhpbic7XHJcbmltcG9ydCBzaGVldCwgeyBnZXRBY3Rpb25OYW1lLCBEZXRhaWxQYXJhbXMgfSBmcm9tICcuLi8uLi9tb2RlbC9iZWhhdmlvci9zaGVldCc7XHJcbmltcG9ydCBQYWdlU3RhY2sgZnJvbSAnLi4vUGFnZVN0YWNrJztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlUHJvcHMge1xyXG4gIC8qKiBkaXbmqKHlvI/kuI3kvJroh6rliqjorr7nva7pq5jluqbvvIxpbWfmqKHlvI/kvJrmoLnmja7lrr3luqborr7nva7pq5jluqYgKi9cclxuICBtb2RlPzogJ2RpdicgfCAnaW1nJztcclxuICAvKiog5piv5ZCm6KaB5re75Yqg5YaF6Zi05b2xICovXHJcbiAgc2hhZG93PzogYm9vbGVhbjtcclxuICAvKiog5Li75py65Zyw5Z2AICovXHJcbiAgaG9zdD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU3RhdGVCYXNlUHJvcHMsIHlqLkNvbXBvbmVudFByb3BzLCBCYXNlUHJvcHMsIHlqLkNvbXBvbmVudEJlaGF2aW9yIHtcclxuICAvKiog5q2j5bi454q25oCB5oOz5bGV56S655qE5Zu+54mH77yM5Y2zaW1n5qCH562+55qEc3Jj5bGe5oCnICovXHJcbiAgY29tcGxldGVWaWV3OiBzdHJpbmc7XHJcbiAgLyoqIOWKoOi9veWksei0peeahOinhuWbviAqL1xyXG4gIGZhaWxWaWV3Pzogc3RyaW5nO1xyXG4gIC8qKiDliqDovb3kuK3nmoTop4blm74gKi9cclxuICBsb2FkaW5nVmlldz86IHN0cmluZztcclxuICAvKiog5piv5ZCm5ZCv55So54q25oCB5py6ICovXHJcbiAgc3RhdGVNYWNoaW5lPzogYm9vbGVhbjtcclxuICAvKiog54K55Ye75LqL5Lu2ICovXHJcbiAgb25DbGljaz86IHlqLk9uQ2xpY2s8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIC8qKiDlm77niYfliqDovb3lpLHotKXml7blgJnnmoTngrnlh7vkuovku7YgKi9cclxuICBvbkZhaWxDbGljaz86IHlqLk9uQ2xpY2s8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIC8qKiDlm77niYfliqDovb3lrozmiJDmiJblpLHotKUgKi9cclxuICBvbkxvYWQ/OiAoZWxlbVJlZjogSFRNTERpdkVsZW1lbnQsIHN0YXRlOiAnY29tcGxldGUnIHwgJ2ZhaWwnKSA9PiB2b2lkO1xyXG4gIC8qKiDlrrnlmajnmoTlrr3luqYgKi9cclxuICBjb250YWluZXJXaWR0aD86IG51bWJlciB8ICd2dyc7XHJcbiAgLyoqIOaYr+WQpuWPr+S7peeCueWHu+mihOiniOWkp+Wbvu+8jOaciW9uQ2xpY2vml7bkuI3kvJrop6blj5EgKi9cclxuICBwcmV2aWV3SW1hZ2U/OiBib29sZWFuO1xyXG4gIGltZ0lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHN0YXRlOiBTdGF0ZVR5cGU7XHJcbn1cclxuXHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtaW1ndmlldyc7XHJcbi8vIGNvbnN0IHRocm90dGxlOiBfLkxvRGFzaFN0YXRpY1sndGhyb3R0bGUnXSA9IHJlcXVpcmUoJ2xvZGFzaC90aHJvdHRsZScpO1xyXG5cclxuY2xhc3MgSW1nVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xyXG4gICAgc3VwZXIocHJvcHMsIHN0YXRlKTtcclxuXHJcbiAgICB0aGlzLmVsZW1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMub25JbWdMb2FkID0gdGhpcy5vbkltZ0xvYWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25JbWdFcnJvciA9IHRoaXMub25JbWdFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogUHJvcHMgPSB7XHJcbiAgICBtb2RlOiAnZGl2JyxcclxuICAgIGNvbXBsZXRlVmlldzogJycsXHJcbiAgICBmYWlsVmlldzogdW5kZWZpbmVkLFxyXG4gICAgbG9hZGluZ1ZpZXc6IHVuZGVmaW5lZCxcclxuICAgIHN0YXRlTWFjaGluZTogdHJ1ZSxcclxuICAgIGNvbnRhaW5lcldpZHRoOiAndncnXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0SG9zdDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSB7XHJcbiAgICBzdGF0ZTogJ2xvYWRpbmcnXHJcbiAgfTtcclxuXHJcbiAgLyoqIOe7hOS7tuaYr+WQpuW3sue7j+iiq+WNuOi9vSAqL1xyXG4gIHByaXZhdGUgaXNVbm1vdW50OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgZWxlbVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICAvKiog55So5LqO5Yqg6L295Zu+54mH77yM5pS55Y+YSW1nVmlld+eahOeKtuaAgSAqL1xyXG4gIHByaXZhdGUgaW1nRWxlbTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gIC8qKiDpmZDliLZzZXRJbWdTcmPnmoTpopHnjocgKi9cclxuICAvLyBwcml2YXRlIHRocm90dGxlZDogKChwcm9wczogUHJvcHMpID0+IHZvaWQpICYgXy5DYW5jZWxhYmxlID0gdGhyb3R0bGUoKHByb3BzKSA9PiB0aGlzLnNldEltZ1NyYyhwcm9wcyksIDMwMCwgeyBsZWFkaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFByb3BzLCBuZXh0U3RhdGU6IFN0YXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzdGF0ZUNoYW5nZSA9IHRoaXMuc3RhdGUuc3RhdGUgIT09IG5leHRTdGF0ZS5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gc3RhdGVDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmltZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25JbWdMb2FkKTtcclxuICAgIHRoaXMuaW1nRWxlbS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25JbWdFcnJvcik7XHJcbiAgICB0aGlzLnNldEltZ1NyYyh0aGlzLnByb3BzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNVbm1vdW50ID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5pbWdFbGVtKSB7XHJcbiAgICAgIHRoaXMuaW1nRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5vbkltZ0xvYWQpO1xyXG4gICAgICB0aGlzLmltZ0VsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uSW1nRXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wbGV0ZVZpZXcgIT09IHByZXZQcm9wcy5jb21wbGV0ZVZpZXcpIHtcclxuICAgICAgdGhpcy5zZXRJbWdTcmModGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNyYyhwcm9wczogUHJvcHMsIHNyYzogc3RyaW5nIHwgdW5kZWZpbmVkLCB0eXBlOiBTdGF0ZVR5cGUpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaG9zdCA9IHR5cGUgPT09ICdjb21wbGV0ZScgPyAocHJvcHMuaG9zdCB8fCBJbWdWaWV3LmRlZmF1bHRIb3N0KSA6ICcnO1xyXG4gICAgY29uc3QgdXJsID0gc3JjICYmIGlzSHR0cChzcmMpID8gc3JjIDogaG9zdCArIHNyYztcclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqIOWbvueJh+eahG9ubG9hZOS6i+S7tiAqL1xyXG4gIHByaXZhdGUgb25JbWdMb2FkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzVW5tb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdGU6ICdjb21wbGV0ZScgfSwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWQodGhpcy5lbGVtUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQsICdjb21wbGV0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5Zu+54mH55qEb25lcnJvcuS6i+S7tiAqL1xyXG4gIHByaXZhdGUgb25JbWdFcnJvcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1VubW91bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXRlOiAnZmFpbCcgfSwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWQodGhpcy5lbGVtUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQsICdmYWlsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDorr7nva50aGlzLmltZ+eahHNyY+WxnuaApyAqL1xyXG4gIHByaXZhdGUgc2V0SW1nU3JjKHByb3BzOiBQcm9wcyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3JjID0gdGhpcy5nZXRTcmMocHJvcHMsIHByb3BzLmNvbXBsZXRlVmlldywgJ2NvbXBsZXRlJyk7XHJcblxyXG4gICAgaWYgKHNyYyAmJiB0aGlzLmltZ0VsZW0pIHtcclxuICAgICAgdGhpcy5pbWdFbGVtLnNyYyA9IHNyYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN0YXRlOiAnZmFpbCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6K6h566X5Zu+54mH6auY5bqm77yM5ZyobW9kZT0naW1nJ+eahOaDheWGteS4i+S9v+eUqCAqL1xyXG4gIHByaXZhdGUgY2FsY0hlaWdodCgpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaW1nRWxlbSAmJiB0aGlzLmltZ0VsZW0ud2lkdGgpIHtcclxuICAgICAgY29uc3QgcHJvcG9ydGlvbiA9IHRoaXMuaW1nRWxlbS5oZWlnaHQgLyB0aGlzLmltZ0VsZW0ud2lkdGggO1xyXG4gICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMucHJvcHMuY29udGFpbmVyV2lkdGg7XHJcbiAgICAgIHJldHVybiBjb250YWluZXJXaWR0aCA9PT0gJ3Z3JyA/IHByb3BvcnRpb24gKiAxMDAgKyAndncnIDogIHByb3BvcnRpb24gKiAoY29udGFpbmVyV2lkdGggYXMgbnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucHJldmlld0ltYWdlKSB7XHJcbiAgICAgIGNvbnN0IHN0YWNrQ29tcG9uZW50ID0gUGFnZVN0YWNrLmdldFN0YWNrQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICBpZiAoc3RhY2tDb21wb25lbnQgJiYgdGhpcy5wcm9wcy5jb21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgc3RhY2tDb21wb25lbnQuYmVoYXZpb3IudHJpZ2dlcjxEZXRhaWxQYXJhbXNbJ0ltZ1ZpZXcnXT4oe1xyXG4gICAgICAgICAgYWN0aW9uTmFtZTogZ2V0QWN0aW9uTmFtZShzaGVldC5JbWdWaWV3LCAwLCB0aGlzLnByb3BzKSxcclxuICAgICAgICAgIGRldGFpbGVkRGF0YToge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pbWdJZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3eC5wcmV2aWV3SW1hZ2UodGhpcy5wcm9wcy5jb21wbGV0ZVZpZXcsIEltZ1ZpZXcuZGVmYXVsdEhvc3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICBjb25zdCB7IGlkLCBsb2FkaW5nU3R5bGUsIG1vZGUsIHNoYWRvdywgbG9hZGluZ1ZpZXcsIGNvbXBsZXRlVmlldywgZmFpbFZpZXcsIHN0YXRlTWFjaGluZSwgY2xhc3NOYW1lLCBzdHlsZSwgb25GYWlsQ2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGUgPSAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1pdGVtYCwgYCR7cHJlZml4Q2xzfS0ke21vZGV9LW1vZGVgLCBgJHtwcmVmaXhDbHN9LWNvbXBsZXRlYCwgY2xhc3NOYW1lKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvdyA/ICcwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuOSkgaW5zZXQnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjb21wbGV0ZVZpZXcgPyBgdXJsKCR7dGhpcy5nZXRTcmModGhpcy5wcm9wcywgY29tcGxldGVWaWV3LCAnY29tcGxldGUnKX0pYCA6ICdub25lJyxcclxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IG1vZGUgPT09ICdpbWcnID8gdGhpcy5jYWxjSGVpZ2h0KCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgb25DbGljaz17c3RhdGUgPT09ICdjb21wbGV0ZScgPyB0aGlzLm9uQ2xpY2sgOiBvbkZhaWxDbGlja31cclxuICAgICAgICByZWY9e3RoaXMuZWxlbVJlZn1cclxuICAgICAgLz5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlTWFjaGluZSA/IChcclxuICAgICAgPFN0YXRlTWFjaGluZVxyXG4gICAgICAgIHN0YXRlPXt0aGlzLnN0YXRlLnN0YXRlfVxyXG4gICAgICAgIGxvYWRpbmdTdHlsZT17bG9hZGluZ1N0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0YXRlTWFjaGluZS5Db21wbGV0ZT57Y29tcGxldGV9PC9TdGF0ZU1hY2hpbmUuQ29tcGxldGU+XHJcbiAgICAgICAgPFN0YXRlTWFjaGluZS5GYWlsPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1pdGVtYCwgYCR7cHJlZml4Q2xzfS0ke21vZGV9LW1vZGVgLCBgJHtwcmVmaXhDbHN9LWZhaWxgLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogZmFpbFZpZXcgPyBgdXJsKCR7dGhpcy5nZXRTcmModGhpcy5wcm9wcywgZmFpbFZpZXcsICdmYWlsJyl9KWAgOiAnbm9uZSdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17b25GYWlsQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3RhdGVNYWNoaW5lLkZhaWw+XHJcbiAgICAgICAgPFN0YXRlTWFjaGluZS5Mb2FkaW5nPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1pdGVtYCwgYCR7cHJlZml4Q2xzfS0ke21vZGV9LW1vZGVgLCBgJHtwcmVmaXhDbHN9LWxvYWRpbmdgLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbG9hZGluZ1ZpZXcgPyBgdXJsKCR7dGhpcy5nZXRTcmModGhpcy5wcm9wcywgbG9hZGluZ1ZpZXcsICdsb2FkaW5nJyl9KWAgOiAnbm9uZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3RhdGVNYWNoaW5lLkxvYWRpbmc+XHJcbiAgICAgIDwvU3RhdGVNYWNoaW5lPlxyXG4gICAgKSA6IGNvbXBsZXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nVmlldzsiLCJpbXBvcnQgRmllbGRzLCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL19iYXNlL3NlcnZpY2UvZmllbGRzJztcclxuaW1wb3J0IE9iT2JqZWN0IGZyb20gJy4uLy4uL2FwcC9kYXRhdHlwZS9vYk9iamVjdCc7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIEZpZWxkczxzdHJpbmc+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BzPHN0cmluZz4pIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gbmV3IE9iT2JqZWN0KHsgZGVmYXVsdFZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWUgfHwgJycgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsdWU6IE9iT2JqZWN0PHN0cmluZz47XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUuc2V0KCcnKTtcclxuICAgIHRoaXMuc2V0UHJvbXB0KCcnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCB5aiBmcm9tICcuLi8uLi90eXBpbmdzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBpbXBvcnQgc3RyaW5nVG9IZXggZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVG9IZXgnO1xyXG5pbXBvcnQgZ2xvYmFsIGZyb20gJy4uLy4uL2FwcC9nbG9iYWwnO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi8uLi9tb2RlbC9hY2NvdW50JztcclxuaW1wb3J0IGlzSHR0cCBmcm9tICcuLi8uLi91dGlscy9pc0h0dHAnO1xyXG4vLyBpbXBvcnQgaXNQYXNzaXZlU3VwcG9ydGVkIGZyb20gJy4uLy4uL3V0aWxzL2lzUGFzc2l2ZVN1cHBvcnRlZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgeWouQ29tcG9uZW50UHJvcHMge1xyXG4gIC8qKiDliY3lvoDnmoTpobXpnaIgKi9cclxuICB0bzogc3RyaW5nO1xyXG4gIC8qKiDmmK/lkKbopoHmnYPpmZDorqTor4EgKi9cclxuICBsb2dpbkF1dGg/OiBib29sZWFuO1xyXG4gIC8qKiDooqvngrnlh7vnmoTmjInpkq7lkI3np7AgKi9cclxuICBidXR0b24/OiBzdHJpbmc7XHJcbiAgLyoqIOaYr+WQpuabv+aNouW9k+WJjei3r+eUsSAqL1xyXG4gIHJlcGxhY2U/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgLyoqIOaYr+WQpuimgeadg+mZkOiupOivgSAqL1xyXG4gIGxvZ2luQXV0aD86IGJvb2xlYW47XHJcbiAgLyoqIOiiq+eCueWHu+eahOaMiemSruWQjeensCAqL1xyXG4gIGJ1dHRvbj86IHN0cmluZztcclxufVxyXG5cclxuLyoqIOeCueWHu+mUge+8jOmYsuatouWkmuasoeeCueWHuyAqL1xyXG4vLyBsZXQgbG9jayA9IGZhbHNlO1xyXG5cclxuLyoqIOi3s+i9rOWIsOesrOS4ieaWuemTvuaOpSAqL1xyXG5mdW5jdGlvbiB0b1RoaXJkTGluayhocmVmOiBzdHJpbmcpOiB2b2lkIHtcclxuICAvLyBjb25zdCB1cmxzZWFyY2hwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIC8vIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICAvLyBjb25zdCBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gIC8vIGNvbnN0IGxvY2F0aW9ucGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgLy8gLy8gY29uc3QgZW5jb2RlUGF0aG5hbWUgPSBwYXRobmFtZS5pbmRleE9mKCclMicpID49IDAgPyBwYXRobmFtZSA6IGVuY29kZVVSSUNvbXBvbmVudChwYXRobmFtZSk7XHJcbiAgLy8gY29uc3Qgcm91dGUgPSBwYXRobmFtZS5zdWJzdHIoMCwgMikgPT09ICgnMmYnIHx8ICcyRicpID8gcGF0aG5hbWUgOiBzdHJpbmdUb0hleChwYXRobmFtZSk7XHJcblxyXG4gIC8vIC8vIOiuvue9ruW9k+WJjeeahOe8lueggeWQjueahOi3r+eUsXNlYXJjaFxyXG4gIC8vIHVybHNlYXJjaHBhcmFtcy5zZXQoJ3JvdXRlJywgcm91dGUpO1xyXG5cclxuICAvLyBjb25zdCBuZXdVcmwgPSBvcmlnaW4gKyBsb2NhdGlvbnBhdGhuYW1lICsgJz8nICsgdXJsc2VhcmNocGFyYW1zLnRvU3RyaW5nKCkucmVwbGFjZSgvJTNGL2csICcnKS5yZXBsYWNlKC8lM2YvZywgJycpICsgJyMnICsgcGF0aG5hbWU7XHJcbiAgLy8gLy8g5pu/5o2i5b2T5YmN55qE6Lev55SxXHJcbiAgLy8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcclxuICAvLyDot7PovazliLDnm67moIflnLDlnYBcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvKHVybDogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgaWYgKGlzSHR0cCh1cmwpKSB7XHJcbiAgICB0b1RoaXJkTGluayh1cmwpO1xyXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUgIT09IHVybCkge1xyXG4gICAgaWYgKHJlcGxhY2UpIHtcclxuICAgICAgZ2xvYmFsLmhpc3RvcnkucmVwbGFjZSh1cmwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2xvYmFsLmhpc3RvcnkucHVzaCh1cmwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGluayh1cmw6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbiwgbG9naW5BdXRoPzogYm9vbGVhbik6IHZvaWQge1xyXG4gIC8vIGlmIChsb2NrID09PSBmYWxzZSkge1xyXG4gICAgaWYgKGxvZ2luQXV0aCkge1xyXG4gICAgICBBY2NvdW50LmxvZ2luQXV0aCgoKSA9PiB7XHJcbiAgICAgICAgZ28odXJsLCByZXBsYWNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnbyh1cmwsIHJlcGxhY2UpO1xyXG4gICAgfVxyXG4gICAgLy8gbG9jayA9IHRydWU7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgbG9jayA9IGZhbHNlO1xyXG4gICAgLy8gfSwgMzIwKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtbGluayc7XHJcbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAvLyB0aGlzLmVsZW1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBlbGVtUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgLy8gICBpZiAodGhpcy5lbGVtUmVmLmN1cnJlbnQpIHtcclxuICAvLyAgICAgdGhpcy5lbGVtUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljaywgaXNQYXNzaXZlU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XHJcbiAgLy8gICBpZiAodGhpcy5lbGVtUmVmLmN1cnJlbnQpIHtcclxuICAvLyAgICAgdGhpcy5lbGVtUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGljayk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvKiog6KKr54K55Ye755qE5oyJ6ZKu5ZCN56ew77yM55So5LqO5Yy65YiG6KGM5Li6ICovXHJcbiAgcHVibGljIHN0YXRpYyBidXR0b246IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIHB1c2jkuIDkuKrot6/nlLEgKi9cclxuICBwdWJsaWMgc3RhdGljIGdvKHVybDogc3RyaW5nLCBvcHRpb25zPzogT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgbGluayh1cmwsIGZhbHNlLCBvcHRpb25zICYmIG9wdGlvbnMubG9naW5BdXRoKTtcclxuICAgIExpbmsuYnV0dG9uID0gb3B0aW9ucyAmJiBvcHRpb25zLmJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKiByZXBsYWNl5LiA5Liq6Lev55SxICovXHJcbiAgcHVibGljIHN0YXRpYyByZXBsYWNlKHVybDogc3RyaW5nLCBvcHRpb25zPzogT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgLy8gY29uc3Qgcm91dGUgPSBzd2l0Y2hSb3V0ZXIoZ2xvYmFsLl9yb3V0ZXMsIHVybCk7XHJcbiAgICAvLyBpZiAoIXJvdXRlKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ+i3r+eUsemUmeivrycpO1xyXG4gICAgLy8gfSBlbHNlIGlmICghcm91dGUucHJvcHMuY29tcG9uZW50LnBhZ2VOYW1lKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUud2Fybihyb3V0ZS5wcm9wcy5jb21wb25lbnQuZGlzcGxheU5hbWUsICdwYWdlTmFtZXPlsZ7mgKfkuLrnqbonKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBsaW5rKHVybCwgdHJ1ZSwgb3B0aW9ucyAmJiBvcHRpb25zLmxvZ2luQXV0aCk7XHJcbiAgICBMaW5rLmJ1dHRvbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5idXR0b247XHJcbiAgfVxyXG5cclxuICAvKiogcG9w5LiA5Liq6Lev55SxICovXHJcbiAgcHVibGljIHN0YXRpYyBnb0JhY2soYnV0dG9uPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBMaW5rLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgIGdsb2JhbC5oaXN0b3J5LmdvQmFjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgeyB0bywgbG9naW5BdXRoLCByZXBsYWNlLCBidXR0b24gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKHJlcGxhY2UpIHtcclxuICAgICAgTGluay5yZXBsYWNlKHRvLCB7IGxvZ2luQXV0aCwgYnV0dG9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTGluay5nbyh0bywgeyBsb2dpbkF1dGgsIGJ1dHRvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBkYXRhdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICBkYXRhLXR5cGU9e2RhdGF0eXBlfVxyXG4gICAgICA+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICdjcmVhdGUtc3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi8uLi9hcHAvZ2xvYmFsJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IChtb2RlbDogYW55KSA9PiBhbnk7XHJcbn1cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBsb2FkOiBib29sZWFuO1xyXG59XHJcblxyXG5sZXQgc3Vic2NyaWJlQ2FsbGJhY2s6IChtb2RlbDogb2JqZWN0KSA9PiB2b2lkO1xyXG5sZXQgZGlzcGF0Y2hMb2NrOiBib29sZWFuID0gZmFsc2U7XHJcbmxldCByYWZJZDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTtcclxuY29uc3QgU3Vic2NyaXB0aW9uOiBSZWFjdC5Db21wb25lbnRGYWN0b3J5PGFueSwgYW55PiA9IGNyZWF0ZVN1YnNjcmlwdGlvbih7XHJcbiAgZ2V0Q3VycmVudFZhbHVlOiAobW9kZWw6IG9iamVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH0sXHJcbiAgc3Vic2NyaWJlOiAobW9kZWw6IG9iamVjdCwgY2FsbGJhY2s6IChtb2RlbDogb2JqZWN0KSA9PiB2b2lkKSA9PiB7XHJcbiAgICBzdWJzY3JpYmVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgcmV0dXJuICgpID0+IG51bGw7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGZ1bmN0aW9uIGRpc3BhdGNoKCk6IHZvaWQge1xyXG5cclxuLy8gfVxyXG5mdW5jdGlvbiByYWZEaXNwYXRjaCgpOiB2b2lkIHtcclxuICBpZiAoZGlzcGF0Y2hMb2NrID09PSBmYWxzZSAmJiBzdWJzY3JpYmVDYWxsYmFjaykge1xyXG4gICAgc3Vic2NyaWJlQ2FsbGJhY2soe30pO1xyXG4gICAgZGlzcGF0Y2hMb2NrID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChnbG9iYWwuaW5wdXRGb3VjcyAmJiByYWZJZCkge1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xyXG4gICAgcmFmSWQgPSB1bmRlZmluZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkRpc3BhdGNoKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1vZGVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICAvKiog5bm/5pKt77yM5bCG5pWw5o2u55qE5pu05paw5LuO5LiK6Iez5LiL5Lyg5pKt5Ye65Y67ICovXHJcbiAgcHVibGljIHN0YXRpYyBkaXNwYXRjaCgpOiB2b2lkIHtcclxuICAgIC8vIOWIpOaWreaYr+WQpuaYr+S7jui+k+WFpeahhuinpuWPkeeahO+8jOWmguaenOaYr+WwseS4jeWKoHNldFRpbWVvdXTvvIzlm6DkuLrovpPlhaXmoYbliqBzZXRUaW1lb3V05Zyo6L6T5YWl5Lit5paH5pe25Lya5pyJQlVHXHJcbiAgICBpZiAoZ2xvYmFsLmlucHV0Rm91Y3MpIHtcclxuICAgICAgc3Vic2NyaWJlQ2FsbGJhY2soe30pO1xyXG4gICAgICBnbG9iYWwuaW5wdXRGb3VjcyA9IGZhbHNlO1xyXG4gICAgICBkaXNwYXRjaExvY2sgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2hMb2NrID0gZmFsc2U7XHJcbiAgICAgIGlmIChyYWZJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmFmRGlzcGF0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIGxvYWQ6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWQ6IHRydWVcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgcmFmRGlzcGF0Y2goKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3Vic2NyaXB0aW9uIHNvdXJjZT17e319PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWQgPyAodmFsdWU6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odmFsdWUpO1xyXG4gICAgICAgIH0gOiAoKSA9PiBudWxsfVxyXG4gICAgICA8L1N1YnNjcmlwdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiLCJpbXBvcnQgeWogZnJvbSAnLi4vLi4vdHlwaW5ncyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2FwcC9wYWdlJztcclxuaW1wb3J0IGdsb2JhbCBmcm9tICcuLi8uLi9hcHAvZ2xvYmFsJztcclxuLy8gaW1wb3J0IHN3aXRjaFJvdXRlciwgeyBQcm9wcyBhcyBTd2l0Y2hSb3V0ZXJQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3N3aXRjaFJvdXRlcic7XHJcbmltcG9ydCBoaXN0b3J5UmVwbGFjZSBmcm9tICcuLi8uLi91dGlscy9oaXN0b3J5UmVwbGFjZSc7XHJcbmltcG9ydCBwYWdlTGVhdmUgZnJvbSAnLi4vLi4vbW9kZWwvYmVoYXZpb3IvcGFnZUxlYXZlJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4uL1RvYXN0JztcclxuaW1wb3J0IHNldERvY3VtZXRUaXRsZSBmcm9tICcuLi8uLi91dGlscy9zZXREb2N1bWV0VGl0bGUnO1xyXG5pbXBvcnQgeyBvdGhlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudic7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbnR5cGUgUGFnZVR5cGUgPSBQYWdlPHlqLlBhZ2VQcm9wczxhbnk+LCBhbnksIGFueT47XHJcblxyXG5pbnRlcmZhY2UgQmFzZVByb3BzIHtcclxuICAvKiog6Lev55Sx5pS55Y+Y5pe26Kem5Y+RICovXHJcbiAgb25Sb3V0ZUNoYW5nZT86IChwYXRobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vLyB3aXRoUm91dGVy5o+Q5L6b5LqGcmVhY3Qtcm91dGVy55qEcG9ycHNcclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJhc2VQcm9wcywgeWouUGFnZVByb3BzPGFueT4ge1xyXG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgLyoqIOW9k+WJjeWMuemFjeeahOi3r+eUsSAqL1xyXG4gIHJvdXRlOiBKU1guRWxlbWVudFtdO1xyXG4gIGxhc3RQYXRobmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyDlr7lyb3V0ZeS4rei/lOWbnueahHBhZ2UgZWxlbWVudOaJi+WKqOWIm+W7ulxyXG5mdW5jdGlvbiBnZXRSb3V0ZShuZXh0UHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGdsb2JhbC5wYWdlSWQrKztcclxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChnbG9iYWwuYXBwUm91dGUgYXMgKCkgPT4gSlNYLkVsZW1lbnQsIHsga2V5OiBnbG9iYWwucGFnZUlkLCBsb2NhdGlvbjogbmV4dFByb3BzLmxvY2F0aW9uIH0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRQYWdlU3RhY2tJbkFwcFJvdXRlKG5leHRQcm9wczogUHJvcHMpOiBQYWdlVHlwZSB7XHJcbi8vICAgY29uc3Qgcm91dGUgPSBzd2l0Y2hSb3V0ZXIobmV4dFByb3BzLnJvdXRlcywgbmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ8U3dpdGNoUm91dGVyUHJvcHM+O1xyXG5cclxuLy8gICBpZiAoIXJvdXRlKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCfot6/nlLHop6PmnpDlpLHotKXvvIzor7fmo4Dmn6Xot6/nlLHmmKDlsITmiJZ1cmzmmK/lkKbmraPnoa4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiByb3V0ZS5wcm9wcy5jb21wb25lbnQ7XHJcbi8vIH1cclxuXHJcbi8vIOiOt+WPluS4iuS4gOS4qumhtemdoueahOexu+WjsOaYjlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldlBhZ2VDbGFzcyhwcmV2Q291bnQ6IG51bWJlcik6IFBhZ2VUeXBlIHwgdW5kZWZpbmVkIHtcclxuICByZXR1cm4gU3RhY2suY29tcG9uZW50W1N0YWNrLmNvbXBvbmVudC5sZW5ndGggLSBwcmV2Q291bnRdO1xyXG59XHJcblxyXG4vKiog5piv5ZCm5pivcmVwbGFjZeWKqOS9nCAqL1xyXG5mdW5jdGlvbiBpc1JlcGxhY2VBY3Rpb24obmV4dFByb3BzOiBQcm9wcyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGFjdGlvbiA9IG5leHRQcm9wcy5oaXN0b3J5LmFjdGlvbjtcclxuICBjb25zdCBpc1JlcGxhY2UgPSBhY3Rpb24gPT09ICdSRVBMQUNFJztcclxuXHJcbiAgcmV0dXJuIGlzUmVwbGFjZTtcclxufVxyXG5cclxuLyoqIOiOt+WPlumhtemdoueahHBhZ2VSZWbpnZnmgIHlsZ7mgKcgKi9cclxuLy8gZnVuY3Rpb24gZ2V0UGFnZVJvb3RFbGVtUmVmKHBhZ2U6IFBhZ2VUeXBlIHwgdW5kZWZpbmVkKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuLy8gICBpZiAocGFnZSkge1xyXG4vLyAgICAgY29uc3QgcGFnZVJvb3RFbGVtUmVmID0gcGFnZS5wYWdlUm9vdEVsZW1SZWY7XHJcblxyXG4vLyAgICAgaWYgKHBhZ2VSb290RWxlbVJlZiA9PT0gdW5kZWZpbmVkKSB7XHJcbi8vICAgICAgIGNvbnNvbGUud2Fybign6aG16Z2i57uE5Lu25LitcGFnZVJlZuS4jeWtmOWcqO+8jOivt+ajgOafpXNldFBhZ2VSZWbmmK/lkKbmraPnoa7osIPnlKgnKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gcGFnZVJvb3RFbGVtUmVmLmN1cnJlbnQ7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gbnVsbDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2gobmV4dFByb3BzOiBQcm9wcyk6IHZvaWQge1xyXG4gIG9uUHVzaChuZXh0UHJvcHMpO1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wKG5leHRQcm9wczogUHJvcHMpOiB2b2lkIHtcclxuICBjb25zdCB0b3AgPSBTdGFjay5zY3JvbGxMb2NhdGlvbltTdGFjay5zY3JvbGxMb2NhdGlvbi5sZW5ndGggLSAxXTtcclxuXHJcbiAgaWYgKFN0YWNrLmNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgIG9uUG9wKG5leHRQcm9wcyk7XHJcbiAgfVxyXG5cclxuICBTdGFjay5jb21wb25lbnQucG9wKCk7XHJcbiAgU3RhY2suc2Nyb2xsTG9jYXRpb24ucG9wKCk7XHJcbiAgZ2xvYmFsLnBhZ2VJZC0tO1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblB1c2gobmV4dFByb3BzOiBQcm9wcyk6IHZvaWQge1xyXG4gIGNvbnN0IGN1cnJlbnRDb21wb25lbnQgPSBnZXRQcmV2UGFnZUNsYXNzKDIpO1xyXG4gIGNvbnN0IHRvQ29tcG9uZW50ID0gZ2V0UHJldlBhZ2VDbGFzcygxKTtcclxuICAvLyBjb25zdCBwYWdlUmVmID0gZ2V0UGFnZVJvb3RFbGVtUmVmKGN1cnJlbnRDb21wb25lbnQpO1xyXG5cclxuICAvLyDkuIrkuIDkuKrpobXpnaLnmoTnprvlvIDkuovku7ZcclxuICBpZiAoY3VycmVudENvbXBvbmVudCAmJiBjdXJyZW50Q29tcG9uZW50LnBhZ2VMZWF2ZSkge1xyXG4gICAgY3VycmVudENvbXBvbmVudC5wYWdlTGVhdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIOaOkumZpOesrOS4gOasoeWIneWni+WMluaXtuiwg+eUqO+8jOi/meS4quaWueazleW6lOivpeWcqOemu+W8gOmhtemdouaXtuiwg+eUqFxyXG4gIGlmIChTdGFjay5jb21wb25lbnQubGVuZ3RoID4gMSAmJiBpc1JlcGxhY2VBY3Rpb24obmV4dFByb3BzKSA9PT0gZmFsc2UpIHtcclxuICAgIG9uUGFnZUxlYXZlKGN1cnJlbnRDb21wb25lbnQsIHRvQ29tcG9uZW50LCAnZW50ZXInKTtcclxuICB9XHJcblxyXG4gIC8vIGlmIChwYWdlUmVmKSB7XHJcbiAgLy8gICBwYWdlUmVmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblBvcChuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XHJcbiAgaWYgKGlzUmVwbGFjZUFjdGlvbihuZXh0UHJvcHMpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gZ2V0UHJldlBhZ2VDbGFzcygxKTtcclxuICBjb25zdCB0b0NvbXBvbmVudCA9IGdldFByZXZQYWdlQ2xhc3MoMik7XHJcbiAgLy8gY29uc3QgcGFnZVJlZiA9IGdldFBhZ2VSb290RWxlbVJlZih0b0NvbXBvbmVudCk7XHJcblxyXG4gIC8vIOebruagh+mhtemdoueahOi/m+WFpeS6i+S7tlxyXG4gIGlmICh0b0NvbXBvbmVudCAmJiB0b0NvbXBvbmVudC5wYWdlRW50ZXIpIHtcclxuICAgIHRvQ29tcG9uZW50LnBhZ2VFbnRlcigpO1xyXG4gICAgLy8g5ZCO6YCA5Zue6aG16Z2i5pe277yM6K6paGFzU2VuZOWIneWni+WMllxyXG4gICAgdG9Db21wb25lbnQuYmVoYXZpb3IucG9zdEFjdGlvbi5oYXNTZW5kID0gZmFsc2U7XHJcbiAgICAvLyDlkI7pgIDlm57pobXpnaLml7bvvIzph43nva7ov5vlhaXml7bpl7RcclxuICAgIHRvQ29tcG9uZW50LmVudHJ5dGltZSA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VMZWF2ZShjdXJyZW50Q29tcG9uZW50LCB0b0NvbXBvbmVudCwgJ2V4aXQnKTtcclxuICAvLyBpZiAocGFnZVJlZikge1xyXG4gIC8vICAgcGFnZVJlZi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIG9uUmVwbGFjZSgpOiB2b2lkIHtcclxuLy8gICBjb25zdCBjdXJyZW50Q29tcG9uZW50ID0gU3RhY2suY29tcG9uZW50W1N0YWNrLmNvbXBvbmVudC5sZW5ndGggLSAxXTtcclxuXHJcbi8vICAgaWYgKGN1cnJlbnRDb21wb25lbnQucGFnZUxlYXZlKSB7XHJcbi8vICAgICBjdXJyZW50Q29tcG9uZW50LnBhZ2VMZWF2ZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gcGFnZUxlYXZlKHtcclxuLy8gICAvLyAgIGJlaGF2aW9yOiBjdXJyZW50Q29tcG9uZW50LmJlaGF2aW9yLFxyXG4vLyAgIC8vICAgdHlwZTogJ2VudGVyJyxcclxuLy8gICAvLyAgIG5vdzogY3VycmVudENvbXBvbmVudC5wYWdlTmFtZSB8fCAnJyxcclxuLy8gICAvLyAgIHRvOiByb3V0ZSAmJiByb3V0ZS5wcm9wcy5jb21wb25lbnQucGFnZU5hbWUgfHwgJycsXHJcbi8vICAgLy8gICBzdGF5dGltZTogY3VycmVudENvbXBvbmVudC5fc3RheXRpbWVcclxuLy8gICAvLyB9KTtcclxuXHJcbi8vICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTGVhdmUoY3VycmVudENvbXBvbmVudDogUGFnZVR5cGUgfCB1bmRlZmluZWQsIHRvQ29tcG9uZW50OiBQYWdlVHlwZSB8IHVuZGVmaW5lZCwgdHlwZTogJ2VudGVyJyB8ICdleGl0Jyk6IHZvaWQge1xyXG4gIGlmICgoY3VycmVudENvbXBvbmVudCAmJiBjdXJyZW50Q29tcG9uZW50LnBhZ2VOYW1lKSAmJiAodG9Db21wb25lbnQgJiYgdG9Db21wb25lbnQucGFnZU5hbWUpKSB7XHJcbiAgICBwYWdlTGVhdmUoe1xyXG4gICAgICBiZWhhdmlvcjogY3VycmVudENvbXBvbmVudC5iZWhhdmlvcixcclxuICAgICAgdHlwZSxcclxuICAgICAgbm93OiBjdXJyZW50Q29tcG9uZW50LnBhZ2VOYW1lLFxyXG4gICAgICB0bzogdG9Db21wb25lbnQucGFnZU5hbWUgfHwgJycsXHJcbiAgICAgIHN0YXl0aW1lOiBjdXJyZW50Q29tcG9uZW50LmdldFN0YXl0aW1lKCksXHJcbiAgICAgIGVudHJ5dGltZTogY3VycmVudENvbXBvbmVudC5lbnRyeXRpbWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8g55So5LqO56ys5LiA5qyh6L+b5YWl5pe25bCGcm91dGXnmoTlj4LmlbDlupTnlKjliLByZWFjdC1yb3V0ZXLkuIrvvIznroDljZXmnaXor7TlsLHmmK/ovr7liLDkuobkuIDkuKrot7PovaznmoTmlYjmnpxcclxuaWYgKG90aGVyLmhpc3RvcnlNb2RlICE9PSAnYnJvd3NlcicpIHtcclxuICBoaXN0b3J5UmVwbGFjZSgpO1xyXG59XHJcblxyXG5jbGFzcyBTdGFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxCYXNlUHJvcHM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzZVByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgZ2xvYmFsLmhpc3RvcnkgPSAocHJvcHMgYXMgUHJvcHMpLmhpc3Rvcnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xyXG4gICAgcm91dGU6IFtnZXRSb3V0ZSh0aGlzLnByb3BzIGFzIFByb3BzKV0sXHJcbiAgICBsYXN0UGF0aG5hbWU6ICh0aGlzLnByb3BzIGFzIFByb3BzKS5sb2NhdGlvbi5wYXRobmFtZVxyXG4gIH07XHJcbiAgLyoqIOmhueebruS4reeahFBhZ2Xnu4Tku7YgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvbXBvbmVudDogUGFnZTx5ai5QYWdlUHJvcHM8YW55PiwgYW55LCBhbnk+W10gPSBbXTtcclxuICAvKiog56a75byA6aG16Z2i5pe26K6w5b2V55qE5rua5Yqo5p2h5L2N572uICovXHJcbiAgcHVibGljIHN0YXRpYyBzY3JvbGxMb2NhdGlvbjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFByb3BzLCBuZXh0U3RhdGU6IFN0YXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMgYXMgUHJvcHM7XHJcbiAgICByZXR1cm4gbmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpOiBTdGF0ZSB8IG51bGwge1xyXG4gICAgaWYgKG5leHRQcm9wcy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcHJldlN0YXRlLmxhc3RQYXRobmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRIaXN0b3J5ID0gbmV4dFByb3BzLmhpc3RvcnkgYXMgSGlzdG9yeTtcclxuICAgIGNvbnN0IGxvYWRpbmdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlqLWNvbXBvbmVudC10b2FzdC1sb2FkaW5nJyk7XHJcblxyXG4gICAgLy8g6Ziy5q2iVG9hc3QubG9hZGluZ+WNoeatu+mhtemdolxyXG4gICAgaWYgKGxvYWRpbmdFbGVtKSB7XHJcbiAgICAgIFRvYXN0LmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRIaXN0b3J5LmFjdGlvbiA9PT0gJ1BPUCcpIHtcclxuICAgICAgcG9wKG5leHRQcm9wcyk7XHJcbiAgICAgIHByZXZTdGF0ZS5yb3V0ZS5wb3AoKTtcclxuICAgICAgY29uc3QgY29tcG9uZW50ID0gU3RhY2suZ2V0U3RhY2tDb21wb25lbnQoKTtcclxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFnZU5hbWUpIHtcclxuICAgICAgICBzZXREb2N1bWV0VGl0bGUoY29tcG9uZW50LnBhZ2VOYW1lKTtcclxuICAgICAgICBjb21wb25lbnQucGFnZUFjdGl2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmV4dEhpc3RvcnkuYWN0aW9uID09PSAnUkVQTEFDRScpIHtcclxuICAgICAgICBnbG9iYWwucmVwbGFjZUJlZm9yZUNvbXBvbmVudCA9IHsuLi5TdGFjay5nZXRTdGFja0NvbXBvbmVudCgpfSBhcyBhbnk7XHJcbiAgICAgICAgLy8gb25SZXBsYWNlKCk7XHJcbiAgICAgICAgLy8gcG9w5b2T5YmN6L+Z5Liq6aG16Z2iXHJcbiAgICAgICAgcG9wKG5leHRQcm9wcyk7XHJcbiAgICAgICAgcHJldlN0YXRlLnJvdXRlLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBTdGFjay5zY3JvbGxMb2NhdGlvbi5wdXNoKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgcHJldlN0YXRlLnJvdXRlLnB1c2goZ2V0Um91dGUobmV4dFByb3BzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZTdGF0ZS5yb3V0ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgU3RhY2suc2Nyb2xsTG9jYXRpb24ucHVzaCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgIHByZXZTdGF0ZS5yb3V0ZS5wdXNoKGdldFJvdXRlKG5leHRQcm9wcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0UHJvcHMub25Sb3V0ZUNoYW5nZSkge1xyXG4gICAgICBuZXh0UHJvcHMub25Sb3V0ZUNoYW5nZShuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvdXRlOiBwcmV2U3RhdGUucm91dGUsXHJcbiAgICAgIGxhc3RQYXRobmFtZTogbmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIOS7jnN0YWNr5Lit6I635Y+W5b2T5YmN6aG16Z2iICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRTdGFja0NvbXBvbmVudCgpOiBQYWdlVHlwZSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gU3RhY2suY29tcG9uZW50W1N0YWNrLmNvbXBvbmVudC5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcyk6IHZvaWQge1xyXG4gIC8vICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzIGFzIFByb3BzO1xyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudFtdIHwgSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucm91dGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFN0YWNrIGFzIGFueSkgYXMgdHlwZW9mIFN0YWNrO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBlbGVtZW50Q2VudGVPblBhZ2UgZnJvbSAnLi4vLi4vdXRpbHMv5YWD57Sg5Zyo6aG16Z2i5Lit5bGF5LitJztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSAneWotY29tcG9uZW50LXN0YXRlbWFjaGluZSc7XHJcbmNsYXNzIEF1dG9IZWlnaHQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcblxyXG4gIHByaXZhdGUgZWxlbVJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtUmVmLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtUmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gKGVsZW1lbnRDZW50ZU9uUGFnZSh0aGlzLmVsZW1SZWYuY3VycmVudCkgfHwgMCkgKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17cHJlZml4Q2xzfVxyXG4gICAgICAgIHJlZj17dGhpcy5lbGVtUmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tYm9keWB9Pnt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGx9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9IZWlnaHQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b0hlaWdodCBmcm9tICcuL0F1dG9IZWlnaHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogYW55O1xyXG4gIGF1dG9IZWlnaHQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDb21wbGV0ZSA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICByZXR1cm4gcHJvcHMuYXV0b0hlaWdodCA/IChcclxuICAgIDxBdXRvSGVpZ2h0Pntwcm9wcy5jaGlsZHJlbiB8fCBudWxsfTwvQXV0b0hlaWdodD5cclxuICApIDogcHJvcHMuY2hpbGRyZW4gfHwgbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRlOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dG9IZWlnaHQgZnJvbSAnLi9BdXRvSGVpZ2h0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IGFueTtcclxuICBhdXRvSGVpZ2h0PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgRW1wdHkgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHByb3BzLmF1dG9IZWlnaHQgPyAoXHJcbiAgICA8QXV0b0hlaWdodD57cHJvcHMuY2hpbGRyZW4gfHwgbnVsbH08L0F1dG9IZWlnaHQ+XHJcbiAgKSA6IHByb3BzLmNoaWxkcmVuIHx8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXB0eTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvSGVpZ2h0IGZyb20gJy4vQXV0b0hlaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBhbnk7XHJcbiAgYXV0b0hlaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEZhaWwgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHByb3BzLmF1dG9IZWlnaHQgPyAoXHJcbiAgICA8QXV0b0hlaWdodD57cHJvcHMuY2hpbGRyZW4gfHwgbnVsbH08L0F1dG9IZWlnaHQ+XHJcbiAgKSA6IHByb3BzLmNoaWxkcmVuIHx8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWlsOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRpbmdBbSwgeyBQcm9wcyBhcyBMb2FkaW5nUHJvcHMgfSBmcm9tICcuLi9TdGF0ZVZpZXcvTG9hZGluZyc7XHJcbmltcG9ydCBBdXRvSGVpZ2h0IGZyb20gJy4vQXV0b0hlaWdodCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBMb2FkaW5nUHJvcHMge1xyXG4gIGF1dG9IZWlnaHQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGF1dG9IZWlnaHQgPSBwcm9wcy5hdXRvSGVpZ2h0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogcHJvcHMuYXV0b0hlaWdodDtcclxuICBjb25zdCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xyXG4gIHJldHVybiBhdXRvSGVpZ2h0ID8gKFxyXG4gICAgPEF1dG9IZWlnaHQ+e2NoaWxkcmVuIHx8IDxMb2FkaW5nQW0gey4uLnByb3BzfSAvPn08L0F1dG9IZWlnaHQ+XHJcbiAgKSA6IGNoaWxkcmVuIHx8IDxMb2FkaW5nQW0gey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IFJlYWRPbmx5IH0gZnJvbSAnLi4vLi4vX2Jhc2UvZGF0YXR5cGUnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xyXG5pbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9Db21wbGV0ZSc7XHJcbmltcG9ydCBGYWlsIGZyb20gJy4vRmFpbCc7XHJcbmltcG9ydCBFbXB0eSBmcm9tICcuL0VtcHR5JztcclxuXHJcbi8qKiDnirbmgIHnsbvlnosgKi9cclxuZXhwb3J0IHR5cGUgVHlwZSA9ICdjb21wbGV0ZScgfCAnZW1wdHknIHwgJ2ZhaWwnICB8ICdsb2FkaW5nJyB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BzIHtcclxuICAvKiog5Yqg6L296KeG5Zu+55qE5qC35byPICovXHJcbiAgbG9hZGluZ1N0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICAvKiog5b2T5YmN55qE54q25oCB57G75Z6LICovXHJcbiAgc3RhdGU6IFR5cGU7XHJcbiAgY2hpbGRyZW4/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgLyoqIOa4suafk+eahOeKtuaAgeinhuWbviAqL1xyXG4gIHJlbmRlcjogSlNYLkVsZW1lbnQgfCBudWxsO1xyXG4gIGxhc3RTdGF0ZTogVHlwZTtcclxuICAvKiog6KKr5riy5p+T55qE5qyh5pWw77yM55So5LqO5Yik5pat56ys5LiA5qyh55qE5riy5p+T54q25oCBICovXHJcbiAgcmVuZGVyQ291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuLyoqIOiOt+WPlueKtuaAgea4suafk+inhuWbviAqL1xyXG5mdW5jdGlvbiBnZXRTdGF0ZVJlbmRlcihwcm9wczogUHJvcHMpOiBTdGF0ZVsncmVuZGVyJ10ge1xyXG4gIGxldCByZW5kZXI6IFJlYWN0LlJlYWN0RWxlbWVudDxIVE1MRGl2RWxlbWVudCwgdHlwZW9mIENvbXBsZXRlIHwgdHlwZW9mIEVtcHR5IHwgdHlwZW9mIExvYWRpbmcgfCB0eXBlb2YgRmFpbD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLy8g5qC55o2u5b2T5YmN54q25oCB6LWL5LqI5a+55bqU55qE6KeG5Zu+XHJcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICBpZiAocmVuZGVyID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IGNoaWxkIGFzIFJlYWN0LlJlYWN0RWxlbWVudDxIVE1MRGl2RWxlbWVudCwgdHlwZW9mIENvbXBsZXRlIHwgdHlwZW9mIEVtcHR5IHwgdHlwZW9mIExvYWRpbmcgfCB0eXBlb2YgRmFpbD47XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBjaGlsZEVsZW1lbnQgJiYgY2hpbGRFbGVtZW50LnR5cGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAocHJvcHMuc3RhdGUgPT09ICdjb21wbGV0ZScgJiYgdHlwZSA9PT0gQ29tcGxldGUpIHx8XHJcbiAgICAgICAgKHByb3BzLnN0YXRlID09PSAnZW1wdHknICYmIHR5cGUgPT09IEVtcHR5KSB8fFxyXG4gICAgICAgIChwcm9wcy5zdGF0ZSA9PT0gJ2ZhaWwnICYmIHR5cGUgPT09IEZhaWwpIHx8XHJcbiAgICAgICAgKHByb3BzLnN0YXRlID09PSAnbG9hZGluZycgJiYgdHlwZSA9PT0gTG9hZGluZylcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVuZGVyID0gY2hpbGRFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIOWmguaenGNoaWxkcmVu6YeM5rKh5pyJ5aOw5piOTG9hZGluZ+inhuWbvuWwseS9v+eUqOm7mOiupOeahFxyXG4gIGlmICghcmVuZGVyICYmIHByb3BzLnN0YXRlID09PSAnbG9hZGluZycpIHtcclxuICAgIHJlbmRlciA9IDxTdGF0ZU1hY2hpbmUuTG9hZGluZyBzdHlsZT17cHJvcHMubG9hZGluZ1N0eWxlfSAvPjtcclxuICB9XHJcbiAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcGxldGVSZW5kZXIocHJvcHM6IFByb3BzKTogU3RhdGVbJ3JlbmRlciddIHwgbnVsbCB7XHJcbiAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSBjaGlsZCBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ8SFRNTERpdkVsZW1lbnQsIHR5cGVvZiBDb21wbGV0ZT47XHJcbiAgICBpZiAoY2hpbGRFbGVtZW50ICYmIGNoaWxkRWxlbWVudC50eXBlID09PSBDb21wbGV0ZSkge1xyXG4gICAgICByZW5kZXIgPSBjaGlsZEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbi8qKiDmnInpmZDnirbmgIHmnLogKi9cclxuY2xhc3MgU3RhdGVNYWNoaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XHJcbiAgICBzdXBlcihwcm9wcywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHJlbmRlcjogbnVsbCxcclxuICAgIGxhc3RTdGF0ZTogdGhpcy5wcm9wcy5zdGF0ZSxcclxuICAgIHJlbmRlckNvdW50OiAwXHJcbiAgfTtcclxuXHJcbiAgLyoqIOaIkOWKn+eahOinhuWbviAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgQ29tcGxldGU6IHR5cGVvZiBDb21wbGV0ZSA9IENvbXBsZXRlO1xyXG4gIC8qKiDlpLHotKXnmoTop4blm74gKi9cclxuICBwdWJsaWMgc3RhdGljIEZhaWw6IHR5cGVvZiBGYWlsID0gRmFpbDtcclxuICAvKiog5Yqg6L295Lit55qE6KeG5Zu+ICovXHJcbiAgcHVibGljIHN0YXRpYyBMb2FkaW5nOiB0eXBlb2YgTG9hZGluZyA9IExvYWRpbmc7XHJcbiAgLyoqIOaVsOaNruS4uuepuueahOinhuWbviAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgRW1wdHk6IHR5cGVvZiBFbXB0eSA9IEVtcHR5O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHM6IFByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKTogU3RhdGUgfCBudWxsIHtcclxuICAgIGlmIChcclxuICAgICAgICAocHJldlN0YXRlLmxhc3RTdGF0ZSAhPT0gbmV4dFByb3BzLnN0YXRlKSB8fFxyXG4gICAgICAgIChwcmV2U3RhdGUucmVuZGVyQ291bnQgPT09IDAgJiYgcHJldlN0YXRlLmxhc3RTdGF0ZSA9PT0gbmV4dFByb3BzLnN0YXRlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyOiBnZXRTdGF0ZVJlbmRlcihuZXh0UHJvcHMpLFxyXG4gICAgICAgIGxhc3RTdGF0ZTogbmV4dFByb3BzLnN0YXRlLFxyXG4gICAgICAgIHJlbmRlckNvdW50OiBwcmV2U3RhdGUucmVuZGVyQ291bnQgKyAxXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZS5sYXN0U3RhdGUgPT09IG5leHRQcm9wcy5zdGF0ZSAmJiBuZXh0UHJvcHMuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZW5kZXI6IGdldENvbXBsZXRlUmVuZGVyKG5leHRQcm9wcyksXHJcbiAgICAgICAgbGFzdFN0YXRlOiBuZXh0UHJvcHMuc3RhdGUsXHJcbiAgICAgICAgcmVuZGVyQ291bnQ6IHByZXZTdGF0ZS5yZW5kZXJDb3VudCArIDFcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucmVuZGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGVNYWNoaW5lOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNpcmxlXCI6XCJjaXJsZV8yc3dGUlwifTsiLCJpbXBvcnQgeWogZnJvbSAnLi4vLi4vLi4vdHlwaW5ncyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIHlqLkNvbXBvbmVudFByb3BzICB7XHJcbiAgc2l6ZT86IG51bWJlcjtcclxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcbiAgYWN0aXZlQ29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHByZWZpeENscyA9ICd5ai1jb21wb25lbnQtbG9hZGluZyc7XHJcbmNvbnN0IExvYWRpbmcgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcmVmaXhDbHN9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LWNpcmxlYF06IHRydWUsXHJcbiAgICAgICAgICBbcHJvcHMuY2xhc3NOYW1lIHx8ICcnXTogISFwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICB9KX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IHByb3BzLnNpemUgfHwgNixcclxuICAgICAgICAgIGJvcmRlclRvcENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNjY2MnLFxyXG4gICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCAnI2NjYycsXHJcbiAgICAgICAgICBib3JkZXJSaWdodENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNjY2MnLFxyXG4gICAgICAgICAgYm9yZGVyTGVmdENvbG9yOiBwcm9wcy5hY3RpdmVDb2xvciB8fCAnIzEwOGVlOScsXHJcbiAgICAgICAgICAuLi5wcm9wcy5zdHlsZVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1wbGFjZWhvbGRlcmB9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiaW1wb3J0IF95aiBmcm9tICcuLi8uLi90eXBpbmdzL2luZGV4JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcclxuaW1wb3J0IHN2Z1Jvb3RQYXRoIGZyb20gJy4uLy4uL3V0aWxzL3N2Z1Jvb3RQYXRoJztcclxuY29uc3Qgc3ZnRmlsZSA9IHtcclxuICBzdWNjZXNzOiBzdmdSb290UGF0aCArIHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9zdWNjZXNzLnN2ZycpLmlkLFxyXG4gIGZhaWw6IHN2Z1Jvb3RQYXRoICsgcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ZhaWwuc3ZnJykuaWQsXHJcbiAgbG9hZGluZzogc3ZnUm9vdFBhdGggKyByZXF1aXJlKCcuLi8uLi9hc3NldHMvbG9hZGluZy5zdmcnKS5pZFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFByb3BzIGV4dGVuZHMgX3lqLkNvbXBvbmVudFByb3BzIHtcclxuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2ZhaWwnIHwgJ2xvYWRpbmcnO1xyXG4gIGNoaWxkcmVuPzogYW55O1xyXG59XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSAneWotY29tcG9uZW50LXRvYXN0JztcclxuY29uc3QgVG9hc3QgPSAocHJvcHM6IFRvYXN0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IHR5cGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIHR5cGUgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS10ZXh0ICR7cHJlZml4Q2xzfS10ZXh0LWljb25gfT5cclxuICAgICAgPEljb24gc3JjPXtzdmdGaWxlW3R5cGVdfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS10ZXh0LWluZm9gfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tdGV4dGB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS10ZXh0LWxhYmVsYH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFRvYXN0UHVyZSwgeyBUb2FzdFByb3BzIH0gZnJvbSAnLi9Ub2FzdCc7XHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRvYXN0UHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBkdXJhdGlvbj86IG51bWJlcjtcclxuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBtYXNrPzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBmYWRlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5jb25zdCBwcmVmaXhDbHMgPSAneWotY29tcG9uZW50LXRvYXN0JztcclxuXHJcbmZ1bmN0aW9uIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3QgdXVpZCA9IGB0b2FzdF8ke25vd31gO1xyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1dWlkKTtcclxuXHJcbiAgaWYgKCFjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB1dWlkKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogUHJvcHMgPSB7XHJcbiAgICB0eXBlOiB1bmRlZmluZWQsXHJcbiAgICBkdXJhdGlvbjogM1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSB7XHJcbiAgICBmYWRlOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2hvdyhjb250ZW50OiBzdHJpbmcsIGR1cmF0aW9uPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBUb2FzdC5jbG9zZSgpO1xyXG4gICAgUmVhY3REb20ucmVuZGVyKChcclxuICAgICAgPFRvYXN0IGR1cmF0aW9uPXtkdXJhdGlvbn0+e2NvbnRlbnR9PC9Ub2FzdD5cclxuICAgICksIGdldENvbnRhaW5lcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbG9hZGluZyhjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIFRvYXN0LmNsb3NlKCk7XHJcbiAgICBSZWFjdERvbS5yZW5kZXIoKFxyXG4gICAgICA8VG9hc3QgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWxvYWRpbmdgfSBkdXJhdGlvbj17MTAwMDB9IG1hc2s+e2NvbnRlbnR9PC9Ub2FzdD5cclxuICAgICksIGdldENvbnRhaW5lcigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcclxuICAgIFJlYWN0RG9tLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VUaW1lcjogbnVtYmVyIHwgTm9kZUpTLlRpbWVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHVubW91bnRUaW1lcjogbnVtYmVyIHwgTm9kZUpTLlRpbWVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAvKiog5piv5ZCm5omn6KGM5LqGY29tcG9uZW50V2lsbFVubW91bnQgKi9cclxuICBwcml2YXRlIGlzVW5tb3VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1VubW91bnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RmFkZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzVW5tb3VudCA9IHRydWU7XHJcbiAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNVbm1vdW50ID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNldEZhZGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLnVubW91bnRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBUb2FzdC5jbG9zZSgpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGYWRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1VubW91bnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZhZGU6IHN0YXRlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydENsb3NlVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0sIHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwIC0gMzAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJDbG9zZVRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xvc2VUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyIGFzIE5vZGVKUy5UaW1lcik7XHJcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudW5tb3VudFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnVubW91bnRUaW1lciBhcyBOb2RlSlMuVGltZXIpO1xyXG4gICAgICB0aGlzLnVubW91bnRUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIGNvbnN0IHsgbWFzaywgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIHtcclxuICAgICAgICAgIFtwcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3ByZWZpeENsc30tZmFkZWBdOiB0aGlzLnN0YXRlLmZhZGUsXHJcbiAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1tYXNrYF06IG1hc2ssXHJcbiAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1ub21hc2tgXTogIW1hc2ssXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9hc3RQdXJlIHsuLi50aGlzLnByb3BzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1RvYXN0UHVyZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7IiwiaW1wb3J0IFJlcXVlc3QsIHsgUHJvcHMgfSBmcm9tICcuLi8uLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50L1RvYXN0JztcclxuXHJcbmNsYXNzIEdldCBleHRlbmRzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNlcnZpY2UsIHByb3BzPzogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlOiBTZXJ2aWNlO1xyXG4gIHByb3RlY3RlZCBhZ2FpbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiDlj5HpgIHor7fmsYIgKi9cclxuICBwdWJsaWMgYXN5bmMgc2VuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8vIOW/hemhu+aYr+eZu+W9leeKtuaAgeS4i+aJjeS8muWPkemAgeivt+axglxyXG4gICAgaWYgKFNlcnZpY2UubG9naW5TdGF0ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc2VydmljZS5vcHRpb25zO1xyXG4gICAgY29uc3QgeyB1c2VyQ2FjaGVJZCB9ID0gb3B0aW9ucztcclxuICAgIC8vIGxldCBzdG9yZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAvLyBpZiAoc3RvcmFnZUtleSkge1xyXG4gICAgLy8gICBzdG9yZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAvLyDnvJPlrZjlrZjlnKjlsLHljrvor7vnvJPlrZjvvIzlkKbliJnph43mlrDor7fmsYJcclxuICAgIC8vIGlmIChzdG9yZSkge1xyXG4gICAgLy8gICBsZXQgZGF0YTogU3RvcmFnZURhdGEgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gICB0cnkge1xyXG4gICAgLy8gICAgIGRhdGEgPSBKU09OLnBhcnNlKHN0b3JlKSBhcyBTdG9yYWdlRGF0YTtcclxuICAgIC8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignYWNjb3VudC0+Z2V0LT5zZW5k5aSx6LSl77yMSlNPTi5wYXJzZemUmeivr++8jOivt+ajgOafpee7k+aehOaYr+WQpuato+ehricsIGVycik7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC8vIOWIpOaWrXVzZXJDYWNoZUlk5piv5ZCm55u45ZCM77yM5aaC5p6c5LiN5ZCM55So5oi35L+h5oGv5pyJ5Y+v6IO95Lya5pu05pawXHJcbiAgICAvLyAgIGlmIChkYXRhICYmIGRhdGEudXNlckNhY2hlSWQgPT09IHVzZXJDYWNoZUlkKSB7XHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgLy8gICAgICAgdGhpcy5fY2FsbGJhY2soe1xyXG4gICAgLy8gICAgICAgICByZXRDb2RlOiAnMDAwMCcsXHJcbiAgICAvLyAgICAgICAgIHJldE1zZzogJycsXHJcbiAgICAvLyAgICAgICAgIHJlc3VsdDogZGF0YVxyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICB0aGlzLnNlcnZpY2Uuc2V0RGF0YShkYXRhKTtcclxuICAgIC8vICAgICB0aGlzLnN0YXRlLnNldCgnY29tcGxldGUnKTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICB0aGlzLnJlcXVlc3QodXNlckNhY2hlSWQsIHN0b3JhZ2VLZXkpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLnJlcXVlc3QodXNlckNhY2hlSWQsIHN0b3JhZ2VLZXkpO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5yZXF1ZXN0KHVzZXJDYWNoZUlkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcmVxdWVzdCh1c2VyQ2FjaGVJZDogc3RyaW5nLCBzdG9yYWdlS2V5Pzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmFjdGlvbih7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHVybDogdGhpcy5fYXBpLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJDYWNoZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UucmV0Q29kZSA9PT0gJzAwMDAnKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldERhdGEocmVzcG9uc2UucmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHN0b3JhZ2VLZXkpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBUb2FzdC5zaG93KHJlc3BvbnNlLnJldE1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2ZhaWxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmFpbGJhY2soZXJyKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldDtcclxuIiwiaW1wb3J0IHsgUHJvcHMgYXMgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi8uLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBzdHJpbmdUb0hleCBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdUb0hleCc7XHJcbmltcG9ydCBnbG9iYWwgZnJvbSAnLi4vLi4vYXBwL2dsb2JhbCc7XHJcbmltcG9ydCB7IFByb3BzIGFzIFBvc3RQcm9wcyB9IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCBnZXRSZXF1ZXN0IGZyb20gJy4vZ2V0JztcclxuaW1wb3J0IHJlZ2lzdGVyUmVxdWVzdCBmcm9tICcuL3JlZ2lzdGVyJztcclxuaW1wb3J0IHNpZ25pblJlcXVlc3QgZnJvbSAnLi9zaWduaW4nO1xyXG5pbXBvcnQgc2F2ZVJlcXVlc3QgZnJvbSAnLi9zYXZlJztcclxuaW1wb3J0IHJlc2V0UmVxdWVzdCBmcm9tICcuL3Jlc2V0JztcclxuaW1wb3J0IHZlcmlmaWNhdGlvblJlcXVlc3QgZnJvbSAnLi92ZXJpZmljYXRpb24nO1xyXG5pbXBvcnQgaXNIdHRwIGZyb20gJy4uLy4uL3V0aWxzL2lzSHR0cCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudC9MaW5rJztcclxuaW1wb3J0IE9iT2JqZWN0IGZyb20gJy4uLy4uL2FwcC9kYXRhdHlwZS9vYk9iamVjdCc7XHJcbmltcG9ydCB7IFJlYWRPbmx5IH0gZnJvbSAnLi4vLi4vX2Jhc2UvZGF0YXR5cGUnO1xyXG5cclxudHlwZSBSZXF1ZXN0VHlwZSA9ICdyZWdpc3RlcicgfCAnc2lnbmluJyB8ICdyZXNldCcgfCAnc2F2ZSc7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgLyoqIOeUqOaIt+e8k+WtmGlkICovXHJcbiAgcmVhZG9ubHkgdXNlckNhY2hlSWQ6IHN0cmluZztcclxuICAvKiogbG9jYWxTdG9yYWdl5Lit6K6+572u55qEa2V577yM55So5LqO5a2Y5YKo55So5oi35L+h5oGv77yM5aaC5p6c5bqU55So5pyJ5L+u5pS555So5oi35L+h5oGv55qE5Yqf6IO95bu66K6u5LiN6YWN572u6K+l6aG5ICovXHJcbiAgcmVhZG9ubHkgc3RvcmFnZUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDnmbvlvZXpobXpnaLnmoTln5/lkI0gKi9cclxuICByZWFkb25seSBsb2dpbkhvc3Q/OiBzdHJpbmc7XHJcbiAgLyoqIOeZu+W9leaIkOWKn+WQjueahOWbnuiwg+mhtemdoiAqL1xyXG4gIHJlYWRvbmx5IGxvZ2luQ2FsbEJhY2s/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgLyoqIOeZu+W9leeKtuaAgSAqL1xyXG4gIGxvZ2luU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgLyoqIOWFs+azqOeKtuaAgSAqL1xyXG4gIHN1YnNjcmliZVN0YXRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3Qge1xyXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga/nmoTliqjkvZzphY3nva4gKi9cclxuICBnZXRSZXF1ZXN0PzogUmVxdWVzdE9wdGlvbnM7XHJcbiAgLyoqIOeUqOaIt+WPkemAgemqjOivgeeggeeahOWKqOS9nOmFjee9riAgKi9cclxuICB2ZXJpZmljYXRpb25SZXF1ZXN0PzogUG9zdFByb3BzO1xyXG4gIC8qKiDms6jlhoznmoTor7fmsYIgKi9cclxuICByZWdpc3RlclJlcXVlc3Q/OiBQb3N0UHJvcHM7XHJcbiAgLyoqIOeZu+W9leeahOivt+axgiAqL1xyXG4gIHNpZ25pblJlcXVlc3Q/OiBQb3N0UHJvcHM7XHJcbiAgLyoqIOmHjee9ruWvhueggeeahOivt+axgiAqL1xyXG4gIHJlc2V0UmVxdWVzdD86IFBvc3RQcm9wcztcclxuICAvKiog5L+d5a2Y5Liq5Lq65L+h5oGv55qE6K+35rGCICovXHJcbiAgc2F2ZVJlcXVlc3Q/OiBSZXF1ZXN0T3B0aW9ucztcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBFeHRlbmRzUmVxdWVzdFByb3BzIGV4dGVuZHMgUmVxdWVzdE9wdGlvbnMge1xyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGEge1xyXG4gIC8qKiDlvq7kv6HnmoRvcGVuSWQgKi9cclxuICBvcGVuSWQ6IHN0cmluZztcclxuICAvKiog57O757uf55qEbWVtZWJlcklkICovXHJcbiAgbWVtYmVySWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlRGF0YSBleHRlbmRzIERhdGEge1xyXG4gIHVzZXJDYWNoZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHBvc3RSZXF1ZXN0ID0gW3JlZ2lzdGVyUmVxdWVzdCwgc2lnbmluUmVxdWVzdCwgcmVzZXRSZXF1ZXN0LCBzYXZlUmVxdWVzdCwgZ2V0UmVxdWVzdCwgdmVyaWZpY2F0aW9uUmVxdWVzdF07XHJcblxyXG5jbGFzcyBBY2NvdW50IHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zICYgU3RhdGUsIHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICAgIChbJ3JlZ2lzdGVyJywgJ3NpZ25pbicsICdyZXNldCcsICdzYXZlJywgJ2dldCcsICd2ZXJpZmljYXRpb24nXSBhcyBSZXF1ZXN0VHlwZVtdKS5mb3JFYWNoKChyZXF1ZXN0TmFtZSwgaSkgPT4ge1xyXG4gICAgICBjb25zdCByZXFpZXN0S2V5ID0gcmVxdWVzdE5hbWUgKyAnUmVxdWVzdCc7XHJcbiAgICAgIGNvbnN0IHByb3BSZXF1ZXN0ID0gKHJlcXVlc3QgYXMgYW55KVtyZXFpZXN0S2V5XSBhcyBSZXF1ZXN0T3B0aW9ucztcclxuXHJcbiAgICAgICh0aGlzIGFzIGFueSlbcmVxaWVzdEtleV0gPSBuZXcgKHBvc3RSZXF1ZXN0W2ldKSh0aGlzLCBwcm9wUmVxdWVzdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5sb2dpbkF1dGggPSB0aGlzLmxvZ2luQXV0aC5iaW5kKHRoaXMpO1xyXG4gICAgQWNjb3VudC5sb2dpblN0YXRlID0gb3B0aW9ucy5sb2dpblN0YXRlO1xyXG4gICAgQWNjb3VudC5zdWJzY3JpYmVTdGF0ZSA9IG9wdGlvbnMuc3Vic2NyaWJlU3RhdGU7XHJcbiAgICBBY2NvdW50LmxvZ2luQXV0aCA9IHRoaXMubG9naW5BdXRoO1xyXG4gIH1cclxuXHJcbiAgLyoqIOmFjee9ruWPguaVsCAqL1xyXG4gIHB1YmxpYyBvcHRpb25zOiBPcHRpb25zO1xyXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga/nmoTliqjkvZwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZ2V0UmVxdWVzdCE6IGdldFJlcXVlc3Q7XHJcbiAgLyoqIOazqOWGjOeahOWKqOS9nCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSByZWdpc3RlclJlcXVlc3QhOiByZWdpc3RlclJlcXVlc3Q7XHJcbiAgLyoqIOeZu+W9leWKqOS9nCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzaWduaW5SZXF1ZXN0ITogc2lnbmluUmVxdWVzdDtcclxuICAvKiog6YeN572u5Yqo5L2cICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHJlc2V0UmVxdWVzdCE6IHJlc2V0UmVxdWVzdDtcclxuICAvKiog5L+d5a2Y55So5oi35L+h5oGv5Yqo5L2cICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHNhdmVSZXF1ZXN0ITogc2F2ZVJlcXVlc3Q7XHJcbiAgLyoqIOWPkemAgemqjOivgeeggeWKqOS9nCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB2ZXJpZmljYXRpb25SZXF1ZXN0ITogdmVyaWZpY2F0aW9uUmVxdWVzdDtcclxuICAvKiog5LuO5o6l5Y+j6I635Y+W5Yiw55So5oi35pWw5o2uICovXHJcbiAgcHVibGljIHJlYWRvbmx5IGRhdGE6IE9iT2JqZWN0PChEYXRhICYgYW55KSB8IHVuZGVmaW5lZD4gPSBuZXcgT2JPYmplY3QoeyBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCB9KTtcclxuICAvKiog55m75b2V54q25oCBICovXHJcbiAgcHVibGljIHN0YXRpYyBsb2dpblN0YXRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDlhbPms6jnirbmgIEgKi9cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZVN0YXRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIC8qKiDnmbvlvZXorqTor4EsIOW3sueZu+W9leiwg+eUqGNhbGxiYWNr77yM5ZCm5YiZ5bCx6Lez55m75b2V6aG1ICovXHJcbiAgcHVibGljIHN0YXRpYyBsb2dpbkF1dGg6IChjYWxsYmFjaz86ICgpID0+IHZvaWQsIGxvZ2luVXJsPzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAvKiog55m75b2V6K6k6K+BLCDlt7LnmbvlvZXosIPnlKhjYWxsYmFja++8jOWQpuWImeWwsei3s+WFrOWFseeZu+W9lemhtSAqL1xyXG4gIHByaXZhdGUgbG9naW5BdXRoKGNhbGxiYWNrPzogKCkgPT4gdm9pZCwgbG9naW5Vcmw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChBY2NvdW50LmxvZ2luU3RhdGUgPT09IHRydWUgJiYgY2FsbGJhY2spIHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobG9naW5VcmwpIHtcclxuICAgICAgaWYgKGlzSHR0cChsb2dpblVybCkpIHtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9naW5Vcmw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTGluay5nbyhsb2dpblVybCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxvZ2luSG9zdCAmJiBvcHRpb25zLmxvZ2luQ2FsbEJhY2spIHtcclxuICAgICAgICBjb25zdCB7IGxvZ2luSG9zdCB9ID0gb3B0aW9ucztcclxuICAgICAgICBjb25zdCBsb2dpbkNhbGxCYWNrID0gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMubG9naW5DYWxsQmFjayk7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBzdHJpbmdUb0hleChnbG9iYWwuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2dpbkhvc3QgKyAnJmNhbGxCYWNrVXJsPScgKyBsb2dpbkNhbGxCYWNrICsgJyZyb3V0ZT0nICsgcGF0aG5hbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign55m75b2V6K6k6K+B5aSx6LSl77yM57y65bCRQWNjb3VudC5sb2dpbkhvc3TmiJZBY2NvdW50LmxvZ2luQ2FsbEJhY2snKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGEoZGF0YTogUmVhZE9ubHk8RGF0YT4pOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBBY2NvdW50LmxvZ2luU3RhdGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHN2YWVEYXRhID0ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICB1c2VyQ2FjaGVJZDogb3B0aW9ucyAmJiBvcHRpb25zLnVzZXJDYWNoZUlkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGF0YS5zZXQoZGF0YSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zdG9yYWdlS2V5KSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShvcHRpb25zLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN2YWVEYXRhKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0UmVxdWVzdCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0FjY291bnQuc3RvcmFnZUtleeayoeacieiuvue9ru+8jOaVsOaNruS4jeiDveWtmOWCqOWcqGxvY2FsU3RvcmFnZeS4rScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiLCJpbXBvcnQgUmVxdWVzdCwgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucywgRXZlbnQgfSBmcm9tICcuLi8uLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50L1RvYXN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50L0Zvcm0vc2VydmljZSc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnQvSW5wdXQvc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyBleHRlbmRzIEV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIFJlcXVlc3RPcHRpb25zIHtcclxuICBmaWVsZE5hbWU/OiB7XHJcbiAgICB0ZWw/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuYWJzdHJhY3QgY2xhc3MgUG9zdCBleHRlbmRzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNlcnZpY2UsIHByb3BzPzogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBwcm9wcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uczogUHJvcHMgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGZvcm06IEZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICByZXF1ZXN0OiB0aGlzXHJcbiAgfSk7XHJcblxyXG4gIC8qKiDms6jlhozotKblj7cgKi9cclxuICBwdWJsaWMgdGVsOiBJbnB1dCA9IG5ldyBJbnB1dCh7XHJcbiAgICBmaWVsZEtleTogJ3RlbCcsXHJcbiAgICBmaWVsZE5hbWU6IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZmllbGROYW1lICYmIHRoaXMub3B0aW9ucy5maWVsZE5hbWUudGVsIHx8ICfms6jlhozotKblj7cnLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB2YWxpZGF0ZTogJ3RlbCcsXHJcbiAgICAvLyBvbkNoYW5nZTogdGhpcy52ZXJpZmljYXRpb25SZXF1ZXN0ICYmIHRoaXMudmVyaWZpY2F0aW9uUmVxdWVzdC5zZXRDb21wZWx0ZSxcclxuICAgIGZvcm06ICgpID0+IHRoaXMuZm9ybVxyXG4gIH0pO1xyXG5cclxuICAvKiog6aqM6K+B56CBICovXHJcbiAgcHVibGljIHZlcmlmaWNhdGlvbkNvZGU6IElucHV0ID0gbmV3IElucHV0KHtcclxuICAgIGZpZWxkS2V5OiAndmVyaWZpY2F0aW9uQ29kZScsXHJcbiAgICBmaWVsZE5hbWU6ICfpqozor4HnoIEnLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAvLyBtYXhMZW5ndGg6IDQsXHJcbiAgICAvLyB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICB2YWxpZGF0ZTogJ2ludGVnZXInLFxyXG4gICAgZm9ybTogKCkgPT4gdGhpcy5mb3JtXHJcbiAgfSk7XHJcblxyXG4gIC8qKiDlr4bnoIEgKi9cclxuICBwdWJsaWMgcGFzc3dvcmQ6IElucHV0ID0gbmV3IElucHV0KHtcclxuICAgIGZpZWxkS2V5OiAncGFzc3dvcmQnLFxyXG4gICAgZmllbGROYW1lOiAn5a+G56CBJyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgLy8gdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgIC8vIG1heExlbmd0aDogMTgsXHJcbiAgICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/IVswLTldKyQpKD8hW2EtekEtWl0rJClbMC05QS1aYS16XXs4LDE2fSQvKTtcclxuICAgICAgY29uc3QgaXNPcmRlcmx5ID0gcmVnZXhwLnRlc3QodmFsdWUgfHwgJycpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLnNldFByb21wdChpc09yZGVybHkgPyAnJyA6ICflr4bnoIHmoLzlvI/kuLo4LTE25L2N5pWw5a2X5Yqg5a2X5q+NJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpc09yZGVybHk7XHJcbiAgICB9LFxyXG4gICAgZm9ybTogKCkgPT4gdGhpcy5mb3JtXHJcbiAgfSk7XHJcblxyXG4gIC8qKiDlho3mrKHovpPlhaXlr4bnoIEgKi9cclxuICBwdWJsaWMgcmVwYXNzd29yZDogSW5wdXQgPSBuZXcgSW5wdXQoe1xyXG4gICAgZmllbGRLZXk6ICdwYXNzd29yZCcsXHJcbiAgICBmaWVsZE5hbWU6ICflho3mrKHovpPlhaXlr4bnoIEnLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAvLyB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgdmFsaWRhdGU6ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzRXF1YWwgPSB0aGlzLnBhc3N3b3JkLnZhbHVlLmdldCgpID09PSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJlcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLnJlcGFzc3dvcmQuc2V0UHJvbXB0KGlzRXF1YWwgPyAnJyA6ICfkuKTmrKHlr4bnoIHovpPlhaXkuI3kuIDoh7QnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGlzRXF1YWw7XHJcbiAgICB9LFxyXG4gICAgZm9ybTogKCkgPT4gdGhpcy5mb3JtXHJcbiAgfSk7XHJcblxyXG4gIC8qKiDmuIXnqbrln7rnoYDlrZfmrrXnmoTlgLwgKi9cclxuICBwdWJsaWMgYmFzZUNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZWwuY2xlYXIoKTtcclxuICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZS5jbGVhcigpO1xyXG4gICAgdGhpcy5wYXNzd29yZC5jbGVhcigpO1xyXG4gICAgdGhpcy5yZXBhc3N3b3JkLmNsZWFyKCk7XHJcbiAgICB0aGlzLmZvcm0udHJpZ2dlci5zZXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOWPkemAgeivt+axgiAqL1xyXG4gIHB1YmxpYyBhc3luYyBzZW5kKHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5hY3Rpb24oe1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICB1cmw6IHRoaXMuX2FwaSxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnJldENvZGUgPT09ICcwMDAwJykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBwYXJhbXMuY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYXNlQ2xlYXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBUb2FzdC5zaG93KHJlc3BvbnNlLnJldE1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2ZhaWxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmFpbGJhY2soZXJyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuZmFpbGJhY2spIHtcclxuICAgICAgICBwYXJhbXMuZmFpbGJhY2soZXJyKTtcclxuICAgICAgfVxyXG4gICAgICBUb2FzdC5zaG93KCfnvZHnu5znuYHlv5knKTtcclxuICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJpbXBvcnQgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQb3N0UmVxdWVzdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBQb3N0UmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3Ioc2VydmljZTogU2VydmljZSwgcHJvcHM6IFJlcXVlc3RPcHRpb25zKSB7XHJcbiAgICBzdXBlcihzZXJ2aWNlLCBwcm9wcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiLCJpbXBvcnQgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQb3N0UmVxdWVzdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY2xhc3MgUmVzZXQgZXh0ZW5kcyBQb3N0UmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3Ioc2VydmljZTogU2VydmljZSwgcHJvcHM6IFJlcXVlc3RPcHRpb25zKSB7XHJcbiAgICBzdXBlcihzZXJ2aWNlLCBwcm9wcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNldDsiLCJpbXBvcnQgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2FwcC9yZXF1ZXN0JztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQb3N0UmVxdWVzdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY2xhc3MgU2F2ZSBleHRlbmRzIFBvc3RSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBTZXJ2aWNlLCBwcm9wczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHNlcnZpY2UsIHByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhdmU7IiwiaW1wb3J0IHsgUHJvcHMgYXMgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi8uLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgUG9zdFJlcXVlc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNsYXNzIFNpZ25pbiBleHRlbmRzIFBvc3RSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBTZXJ2aWNlLCBwcm9wczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHNlcnZpY2UsIHByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbjsiLCJpbXBvcnQgUmVxdWVzdCwgeyBQcm9wcyBhcyBSZXF1ZXN0T3B0aW9ucywgRXZlbnQgfSBmcm9tICcuLi8uLi9hcHAvcmVxdWVzdCc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50L1RvYXN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIGV4dGVuZHMgRXZlbnQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuY2xhc3MgVmVyaWZpY2F0aW9uIGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3Ioc2VydmljZTogU2VydmljZSwgcHJvcHM6IFJlcXVlc3RPcHRpb25zKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICAvKiog5Y+R6YCB6K+35rGCICovXHJcbiAgcHVibGljIGFzeW5jIHNlbmQocGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuYWN0aW9uKHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9hcGksXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXRDb2RlID09PSAnMDAwMCcpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcclxuICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBwYXJhbXMuY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBUb2FzdC5zaG93KHJlc3BvbnNlLnJldE1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2ZhaWxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmFpbGJhY2soZXJyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuZmFpbGJhY2spIHtcclxuICAgICAgICBwYXJhbXMuZmFpbGJhY2soZXJyKTtcclxuICAgICAgfVxyXG4gICAgICBUb2FzdC5zaG93KCfnvZHnu5znuYHlv5knKTtcclxuICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb247XHJcbiIsImltcG9ydCBCZWhhdmlvciBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIFBhcmFtcyB7XHJcbiAgYmVoYXZpb3I6IEJlaGF2aW9yO1xyXG4gIC8qKiDot6/nlLHliqjkvZznsbvlnosgKi9cclxuICB0eXBlOiAnZW50ZXInIHwgJ2V4aXQnO1xyXG4gIC8qKiDlvZPliY3pobXpnaIgKi9cclxuICBub3c6IHN0cmluZztcclxuICAvKiog5YmN5b6A55qE6aG16Z2iICovXHJcbiAgdG86IHN0cmluZztcclxuICAvKiog5YGc55WZ5pe26Ze0ICovXHJcbiAgc3RheXRpbWU6IG51bWJlcjtcclxuICAvKiog6aG16Z2i6L+b5YWl5pe26Ze0ICovXHJcbiAgZW50cnl0aW1lOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcHJldlBhZ2VOYW1lOiBzdHJpbmcgPSAn5aSW6YOo5YWl5Y+jJztcclxuXHJcbi8qKiDpobXpnaLnprvlvIDnmoTooYzkuLogKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxlYXZlKHBhcmFtczogUGFyYW1zKTogdm9pZCB7XHJcbiAgY29uc3QgeyBiZWhhdmlvciwgdHlwZSwgbm93LCB0bywgc3RheXRpbWUsIGVudHJ5dGltZSB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IHBhZ2VOYW1lID0gbm93O1xyXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSB0eXBlID09PSAnZW50ZXInID8gJ+i/m+WFpS0nICsgdG8gOiAn5ZCO6YCALScgKyB0bztcclxuXHJcbiAgYmVoYXZpb3IudHJpZ2dlcih7XHJcbiAgICBwYWdlTmFtZSxcclxuICAgIGFjdGlvbk5hbWUsXHJcbiAgICBkZXRhaWxlZERhdGE6IHtcclxuICAgICAgZnJvbTogcHJldlBhZ2VOYW1lLFxyXG4gICAgICBidXR0b246IExpbmsuYnV0dG9uXHJcbiAgICB9LFxyXG4gICAgc3RvcFNlY29uZHM6IHN0YXl0aW1lLFxyXG4gICAgZW50cnl0aW1lXHJcbiAgfSk7XHJcblxyXG4gIHByZXZQYWdlTmFtZSA9IG5vdztcclxuICBiZWhhdmlvci5wb3N0QWN0aW9uLnNlbmQoKTtcclxuICBMaW5rLmJ1dHRvbiA9IHVuZGVmaW5lZDtcclxufSIsImltcG9ydCB5aiBmcm9tICcuLi8uLi90eXBpbmdzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV0YWlsUGFyYW1zIHtcclxuICBCYW5uZXI6IHtcclxuICAgIC8qKiDlm77niYfnmoRpZCAqL1xyXG4gICAgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICB9O1xyXG4gIENhbGVuZGFyOiB7XHJcbiAgICAvKiog6YCJ5oup55qE5pel5pyfICovXHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgfTtcclxuICBGaWx0ZXI6IHtcclxuICAgIC8qKiDlgLwgKi9cclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICAvKiog5paH5pysICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgfTtcclxuICBJbWdWaWV3OiB7XHJcbiAgICAvKiog5Zu+54mH55qEaWQgKi9cclxuICAgIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgfTtcclxuICBMb2NhdGlvbjoge1xyXG4gICAgLyoqIOWumuS9jeWIsOeahOecgSAqL1xyXG4gICAgcHJvdmluY2U6IHN0cmluZztcclxuICAgIC8qKiDlrprkvY3liLDnmoTln47luIIgKi9cclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIC8qKiDlrprkvY3liLDnmoTlnLDljLogKi9cclxuICAgIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgICAvKiog57uP5bqmICovXHJcbiAgICBsbmc6IG51bWJlcjtcclxuICAgIC8qKiDnuqzluqYgKi9cclxuICAgIGxhdDogbnVtYmVyO1xyXG4gIH07XHJcbiAgU2VhcmNoOiB7XHJcbiAgICAvKiog5pCc57Si5YaF5a6555qE5YWz6ZSu5a2XICovXHJcbiAgICBrZXl3b3JkOiBzdHJpbmc7XHJcbiAgfTtcclxuICBUYWI6IHtcclxuICAgIC8qKiDooqvngrnlh7vnmoTlkI3np7AgKi9cclxuICAgIG5hbWU6IHN0cmluZztcclxuICB9O1xyXG4gIFRlbDoge1xyXG4gICAgLyoqIOaLqOaJk+eahOeUteivnSAqL1xyXG4gICAgdGVsOiBzdHJpbmc7XHJcbiAgfTtcclxuICBNYXBOYXZpZ2F0aW9uOiB7XHJcbiAgICAvKiog5a+86Iiq6KaB5Y6755qE55uu55qE5ZywICovXHJcbiAgICBkZXN0aW5hdGlvbjogc3RyaW5nO1xyXG4gIH07XHJcbiAgTWFwTWFya2VyQmVoYXZpb3I6IHtcclxuICAgIC8qKiDnu4/luqYgKi9cclxuICAgIGxuZzogbnVtYmVyO1xyXG4gICAgLyoqIOe6rOW6piAqL1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgfTtcclxuICBWaWRlbzoge1xyXG4gICAgLyoqIOinhumikeeahGlkICovXHJcbiAgICBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcHRpb24ge1xyXG4gIC8qKiDliqjkvZzvvIzkuIDkuKrliqjor40gKi9cclxuICBhY3Rpb246IHN0cmluZ1tdO1xyXG4gIC8qKiDnu4Tku7blkI3np7DvvIznlKjkuo7ot5/liqjkvZznu4TlkIggKi9cclxuICBjb21wb25lbnROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaGVldCB7XHJcbiAgW2tleTogc3RyaW5nXTogT3B0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uTmFtZShvcHRpb246IE9wdGlvbiwgYWN0aW9uSW5kZXg6IG51bWJlciwgcHJvcHM6IHlqLkNvbXBvbmVudEJlaGF2aW9yKTogc3RyaW5nIHtcclxuICBjb25zdCBjb21wb25lbnROYW1lID0gcHJvcHMuY29tcG9uZW50TmFtZSB8fCBvcHRpb24uY29tcG9uZW50TmFtZTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudE5hbWUgPyBgJHtvcHRpb24uYWN0aW9uW2FjdGlvbkluZGV4XX0tJHtjb21wb25lbnROYW1lfWAgOiBgJHtvcHRpb24uYWN0aW9uW2FjdGlvbkluZGV4XX1gO1xyXG59XHJcblxyXG5jb25zdCBzaGVldCA9IHtcclxuICBCdXR0b246IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfmjInpkq4nXHJcbiAgfSxcclxuICBCYW5uZXI6IHtcclxuICAgIGFjdGlvbjogWyfmu5HliqgnLCAn54K55Ye7J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn6L2u5pKt5Zu+J1xyXG4gIH0sXHJcbiAgQ2FsZW5kYXI6IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfml6XljoYnXHJcbiAgfSxcclxuICBDb2xsZWN0aW9uOiB7XHJcbiAgICBhY3Rpb246IFsn5re75YqgJywgJ+WPlua2iCddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+aUtuiXjydcclxuICB9LFxyXG4gIEZpbHRlcjoge1xyXG4gICAgYWN0aW9uOiBbJ+etm+mAiSddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJydcclxuICB9LFxyXG4gIEltZ1ZpZXc6IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICflm77niYcnXHJcbiAgfSxcclxuICBMb2NhdGlvbjoge1xyXG4gICAgYWN0aW9uOiBbJ+WumuS9jSddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+S9jee9ridcclxuICB9LFxyXG4gIFNlYXJjaDoge1xyXG4gICAgYWN0aW9uOiBbJ+aQnOe0oiddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+aQnOe0oidcclxuICB9LFxyXG4gIFBvcHVwOiB7XHJcbiAgICBhY3Rpb246IFsn54K55Ye7J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5by55Ye65bGCJ1xyXG4gIH0sXHJcbiAgVGFiOiB7XHJcbiAgICBhY3Rpb246IFsn54K55Ye7J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn6YCJ6aG55Y2hJ1xyXG4gIH0sXHJcbiAgVGVsOiB7XHJcbiAgICBhY3Rpb246IFsn5ouo5omTJ10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn55S16K+dJ1xyXG4gIH0sXHJcbiAgTWFwQ29udHJvbDoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuy3nvKnlsI8nLCAn54K55Ye7LeaUvuWkpycsICfngrnlh7st5Zue5Yiw5Lit5b+D54K5J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAnJ1xyXG4gIH0sXHJcbiAgTWFwTmF2aWdhdGlvbjoge1xyXG4gICAgYWN0aW9uOiBbJ+eCueWHuyddLFxyXG4gICAgY29tcG9uZW50TmFtZTogJ+WvvOiIqidcclxuICB9LFxyXG4gIE1hcE1hcmtlckJlaGF2aW9yOiB7XHJcbiAgICBhY3Rpb246IFsn54K55Ye7J10sXHJcbiAgICBjb21wb25lbnROYW1lOiAn5qCH5rOoJ1xyXG4gIH0sXHJcbiAgVmlkZW86IHtcclxuICAgIGFjdGlvbjogWyfngrnlh7snXSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICfop4bpopEnXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hlZXQgYXMgU2hlZXQ7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuY29uc3Qgc3lzdGVtOiAnYW5kcm9pZCcgfCAnaW9zJyA9ICEhdXNlckFnZW50Lm1hdGNoKC9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvKSA/ICdpb3MnIDogJ2FuZHJvaWQnO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q2hyb21lVmVyc2lvbigpOiBudW1iZXIge1xyXG4gIGNvbnN0IGFyciA9IHVzZXJBZ2VudC5zcGxpdCgnICcpO1xyXG4gIGxldCBjaHJvbWVWZXJzaW9uID0gJyc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoL2Nocm9tZS9pLnRlc3QoYXJyW2ldKSkge1xyXG4gICAgICBjaHJvbWVWZXJzaW9uID0gYXJyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNocm9tZVZlcnNpb24pIHtcclxuICAgIHJldHVybiBOdW1iZXIoY2hyb21lVmVyc2lvbi5zcGxpdCgnLycpWzFdLnNwbGl0KCcuJylbMF0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElvc1ZlcnNpb24oKTogbnVtYmVyIHtcclxuICBjb25zdCBzdHIgPSB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCB2ZXIgPSBzdHIubWF0Y2goL2NwdSBpcGhvbmUgb3MgKC4qPykgbGlrZSBtYWMgb3MvKTtcclxuXHJcbiAgcmV0dXJuIHZlciA/IE51bWJlcih2ZXJbMV0ucmVwbGFjZSgvXy9nLCAnLicpKSA6IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogMCxcclxuICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiAwLFxyXG4gIHVzZXJBZ2VudCxcclxuICBzeXN0ZW0sXHJcbiAgdmVyc2lvbjogc3lzdGVtID09PSAnaW9zJyA/IGdldElvc1ZlcnNpb24oKSA6IGdldENocm9tZVZlcnNpb24oKVxyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xyXG5leHBvcnRzLm90aGVyID0ge1xyXG4gICAgdmVyc2lvbjogcHJvY2Vzcy5lbnYudmVyc2lvbixcclxuICAgIG91dHB1dERpcjogcHJvY2Vzcy5lbnYub3V0cHV0RGlyLFxyXG4gICAgcHVibGljUGF0aDogcHJvY2Vzcy5lbnYucHVibGljUGF0aCxcclxuICAgIGhpc3RvcnlNb2RlOiBwcm9jZXNzLmVudi5oaXN0b3J5TW9kZVxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBlbnY7XHJcbiIsImltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi91cmxzZWFyY2hwYXJhbXMnO1xyXG5cclxuLyoqIOiOt+WPluaYr+WQpuW3suWFs+azqCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJc1N1YnNjcmliZSgpOiBib29sZWFuIHtcclxuICBjb25zdCB1cmxzZWFyY2hwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICBjb25zdCBpc1N1YnNjcmliZSA9IHVybHNlYXJjaHBhcmFtcy5nZXQoJ2lzU3Vic2NyaWJlJykgfHwgIHVybHNlYXJjaHBhcmFtcy5nZXQoJz9pc1N1YnNjcmliZScpIHx8IHVybHNlYXJjaHBhcmFtcy5nZXQoJyUzRmlzU3Vic2NyaWJlJykgfHwgdXJsc2VhcmNocGFyYW1zLmdldCgnJTNmaXNTdWJzY3JpYmUnKTtcclxuXHJcbiAgcmV0dXJuIGlzU3Vic2NyaWJlID8gKGlzU3Vic2NyaWJlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XHJcbn0iLCJpbnRlcmZhY2UgRXh0ZW5kc1dpbm9kdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgcm91dGU6IHN0cmluZztcclxuICBmb3J3YXJkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBFeHRlbmRzV2lub2R3O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um91dGUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgY29uc3QgdXJscCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3Qgcm91dGVLZXkgPSB1cmxwLmdldCgncm91dGUnKSB8fCAgdXJscC5nZXQoJz9yb3V0ZScpIHx8IHVybHAuZ2V0KCclM0Zyb3V0ZScpIHx8IHVybHAuZ2V0KCclM2Zyb3V0ZScpIHx8IHdpbmRvdy5yb3V0ZTtcclxuICBjb25zdCBmb3J3YXJkID0gdXJscC5nZXQoJ2ZvcndhcmQnKSB8fCAgdXJscC5nZXQoJz9mb3J3YXJkJykgfHwgdXJscC5nZXQoJyUzRmZvcndhcmQnKSB8fCB1cmxwLmdldCgnJTNmZm9yd2FyZCcpIHx8IHdpbmRvdy5mb3J3YXJkO1xyXG5cclxuICByZXR1cm4gcm91dGVLZXkgfHwgZm9yd2FyZDtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhleFRvU3RyaW5nKGhleDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBhcnIgPSBoZXguc3BsaXQoJycpO1xyXG4gIGxldCBvdXQgPSAnJztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC8gMjsgaSsrKSB7XHJcbiAgICBjb25zdCB0bXAgPSBwYXJzZUludCgnMHgnICsgYXJyW2kgKiAyXSArIGFycltpICogMiArIDFdLCAxNik7XHJcbiAgICBjb25zdCBjaGFyVmFsdWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRtcCk7XHJcblxyXG4gICAgb3V0ICs9IGNoYXJWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQob3V0KTtcclxufSIsImltcG9ydCAqIGFzIEhpc3RvcnkgZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCBnZXRSb3V0ZSBmcm9tICcuL2dldFJvdXRlJztcclxuaW1wb3J0IGhleFRvU3RyaW5nIGZyb20gJy4vaGV4VG9TdHJpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlzdG9yeVJlcGxhY2UoY3VzdG9tUm91dGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblxyXG4gIC8vIOWmguaenOacieiHquWumuS5iei3r+eUse+8jOS8mOWFiOi3s+i9rOiHquWumuS5iei3r+eUsVxyXG4gIGlmIChjdXN0b21Sb3V0ZSkge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHByb2Nlc3MuZW52Lmhpc3RvcnlNb2RlID09PSAnYnJvd3NlcicgPyAgSGlzdG9yeS5jcmVhdGVCcm93c2VySGlzdG9yeSgpIDogSGlzdG9yeS5jcmVhdGVIYXNoSGlzdG9yeSgpO1xyXG4gICAgaGlzdG9yeS5yZXBsYWNlKGN1c3RvbVJvdXRlKTtcclxuICB9IGVsc2UgaWYgKCFoYXNoKSB7XHJcbiAgICAvKlxyXG4gICAgKiDlpoLmnpxoYWhz5LiN5a2Y5Zyo5bCx5Luj6KGo5piv5LuO5YiG5Lqr6ZO+5o6l6L+b5p2l55qE5oiW5piv5LuO5YWl5Y+j6L+b5YWl5Yiw6aaW6aG1XHJcbiAgICAqIOWmguaenOaYr+S7juWIhuS6q+i/m+adpeeahO+8jOesrOS4gOasoeS8muS7jnJvdXRl5Y+C5pWw6L+b5YWl6Lez6L2s77yM5ZCO6Z2i5YaN5Yi35paw5bCx5LiN5Lya5YaN6K+75Y+Wcm91dGXlj4LmlbDvvIzlj6/ku6XpmLLmraLliLfmlrDlkI7lm57liLDliIbkuqvov5vmnaXnmoTpobXpnaJcclxuICAgICovXHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFJvdXRlKCk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gcHJvY2Vzcy5lbnYuaGlzdG9yeU1vZGUgPT09ICdicm93c2VyJyA/ICBIaXN0b3J5LmNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBIaXN0b3J5LmNyZWF0ZUhhc2hIaXN0b3J5KCk7XHJcblxyXG4gICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgIGhpc3RvcnkucmVwbGFjZShoZXhUb1N0cmluZyhyb3V0ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8qKiDnroDljZXnmoTliKTmlq3pnZ7nqbogKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJycpO1xyXG4gIH1cclxufSIsIi8qKiB1cmzmmK/lkKbmmK9odHRw5Y2P6K6uICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzSHR0cCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB1cmwuaW5kZXhPZignaHR0cDovLycpICA+PSAwIHx8IHVybC5pbmRleE9mKCdodHRwczovLycpID49IDAgfHwgdXJsLmluZGV4T2YoJy4vJykgPj0gMCB8fCB1cmwuaW5kZXhPZignLi4vJykgPj0gMDtcclxufSIsImltcG9ydCBkZXZpY2UgZnJvbSAnLi9kZXZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RG9jdW1ldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICBpZiAoIXRpdGxlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ+agh+mimOS4uuepuu+8jOivt+iuvue9rlBhZ2UucGFnZU5hbWUnKTtcclxuICB9XHJcblxyXG4gIGlmIChkZXZpY2Uuc3lzdGVtID09PSAnaW9zJykge1xyXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnJhbWUuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OiBub25lJztcclxuICAgIGlmcmFtZS5zcmMgPSAnaHR0cHM6Ly93YXAueXVlamlhMTAwLmNuL2NoYW5nZVRpdGxlLmh0bWwnO1xyXG4gICAgaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5nVG9IZXgoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG4gIGNvbnN0IGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZS5sZW5ndGg7IGkrKykge1xyXG4gIOOAgGFycltpXSA9IChlbmNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcnIuam9pbignJyk7XHJcbn0iLCJjb25zdCBwdWJsaWNQYXRoID0gcHJvY2Vzcy5lbnYucHVibGljUGF0aDtcclxuY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52LnZlcnNpb247XHJcbmNvbnN0IHN2Z1Jvb3RQYXRoID0gcHVibGljUGF0aCArIGBzdmcvc3ByaXRlXyR7dmVyc2lvbn0uc3ZnI2A7XHJcblxyXG4vKiogc3Zn5paH5Lu25qC56Lev5b6EICovXHJcbmV4cG9ydCBkZWZhdWx0IHN2Z1Jvb3RQYXRoOyIsImxldCBTZWFyY2hQYXJhbXM6IFdpbmRvd1snVVJMU2VhcmNoUGFyYW1zJ107XHJcbi8vIElPU+S4iuebtOaOpeS9v+eUqFVSTFNlYXJjaFBhcmFtc+WPr+iDveS8muWHuumUmVxyXG50cnkge1xyXG4gIFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcyB8fCByZXF1aXJlKCd1cmwtc2VhcmNoLXBhcmFtcycpIGFzIFdpbmRvd1snVVJMU2VhcmNoUGFyYW1zJ107XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gIFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ3VybC1zZWFyY2gtcGFyYW1zJykgYXMgV2luZG93WydVUkxTZWFyY2hQYXJhbXMnXTtcclxufVxyXG5cclxud2luZG93LlVSTFNlYXJjaFBhcmFtcyA9IFNlYXJjaFBhcmFtcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhcmFtczsiLCJjb25zdCBwYXR0ZXJuID0ge1xyXG4gIC8qKiDnqbrmoLwgKi9cclxuICBzcGFjZTogL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFxyXG4gIC8qKiDmlbDlrZcgKi9cclxuICBudW1iZXI6IC9eXFxkKyQvLFxyXG4gIC8qKiDlpKflhpnvvIzlsI/lhpnvvIzmlbDlrZflj4rnibnmrorlrZfnrKYgKi9cclxuICBjaGFyOiAvKCg/PVtcXHgyMS1cXHg3ZV0rKVteQS1aYS16MC05XSkvLFxyXG4gIC8qKiDlp5PlkI0gKi9cclxuICBuYW1lOiAvXltcXHU0ZTAwLVxcdTlmYTVdezEsMjB9JC8sXHJcbiAgLyoqIOaJi+acuuWPtyAqL1xyXG4gIHRlbDogL14oMVxcZHsyfXw4NTJ8ODUzfDgzMilcXGR7OH0kfF44ODZcXGR7OSwxMH0kLyxcclxuICAvKiog5bqn5py65Y+3ICovXHJcbiAgbGFuZGxpbmU6IC9eKCgwXFxkezIsM30pLSkoXFxkezcsOH0pKC0oXFxkezEsM30pKT8kLyxcclxuICAvKiog6YeR6aKdICovXHJcbiAgcHJpY2U6IC9eWzAtOV0rKC5bMC05XXsxLDJ9KT8kLyxcclxuICAvKiog5q2j5pWwICovXHJcbiAgaW50ZWdlcjogL14oLXxcXCspP1xcZCskLyxcclxuICAvKiog6Lqr5Lu96K+B5Y+3ICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gIGlkY2FyZDogL14oKDFbMS01XSl8KDJbMS0zXSl8KDNbMS03XSl8KDRbMS02XSl8KDVbMC00XSl8KDZbMS01XSl8NzF8KDhbMTJdKXw5MSlcXGR7NH0oKDE5XFxkezJ9KDBbMTMtOV18MVswMTJdKSgwWzEtOV18WzEyXVxcZHwzMCkpfCgxOVxcZHsyfSgwWzEzNTc4XXwxWzAyXSkzMSl8KDE5XFxkezJ9MDIoMFsxLTldfDFcXGR8MlswLThdKSl8KDE5KFsxMzU3OV1bMjZdfFsyNDY4XVswNDhdfDBbNDhdKTAyMjkpKVxcZHszfShcXGR8WHx4KT8kLyxcclxuICAvLyAvKiogZW1vamkgKi9cclxuICBlbW9qaTogL1xcdWQ4M2NbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNkW1xcdWRjMDAtXFx1ZGU0Zl18XFx1ZDgzZFtcXHVkZTgwLVxcdWRlZmZdL2dcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKiog56m65qC8ICovXHJcbiAgLy8gc3BhY2U6IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcclxuICAvLyAvKiog5pWw5a2XICovXHJcbiAgLy8gbnVtYmVyOiAvXlxcZCskLyxcclxuICAvLyAvKiog5aSn5YaZ77yM5bCP5YaZ77yM5pWw5a2X5Y+K54m55q6K5a2X56ymICovXHJcbiAgLy8gY2hhcjogLygoPz1bXFx4MjEtXFx4N2VdKylbXkEtWmEtejAtOV0pLyxcclxuICAvKiog5aeT5ZCNICovXHJcbiAgbmFtZTogKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybi5uYW1lKTtcclxuICAgIHJldHVybiByZWdleHAudGVzdCh2YWx1ZSk7XHJcbiAgfSxcclxuICAvKiog5omL5py65Y+3ICovXHJcbiAgdGVsOiAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnRlbCk7XHJcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG4gIH0sXHJcbiAgLy8gLyoqIOW6p+acuuWPtyAqL1xyXG4gIC8vIGxhbmRsaW5lOiAvXigoMFxcZHsyLDN9KS0pKFxcZHs3LDh9KSgtKFxcZHsxLDN9KSk/JC8sXHJcbiAgLy8gLyoqIOmHkeminSAqL1xyXG4gIC8vIHByaWNlOiAvXlswLTldKyguWzAtOV17MSwyfSk/JC8sXHJcbiAgLyoqIOato+aVsCAqL1xyXG4gIGludGVnZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4uaW50ZWdlcik7XHJcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xyXG4gIH0sXHJcbiAgLyoqIOi6q+S7veivgeWPtyAqL1xyXG4gIGlkY2FyZDogKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybi5pZGNhcmQpO1xyXG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHZhbHVlKTtcclxuICB9LFxyXG4gIC8vIC8qKiBlbW9qaSAqL1xyXG4gIC8vIGVtb2ppOiAvXFx1ZDgzY1tcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2RbXFx1ZGMwMC1cXHVkZTRmXXxcXHVkODNkW1xcdWRlODAtXFx1ZGVmZl0vZ1xyXG59OyIsImltcG9ydCBkZXZpY2UgZnJvbSAnLi9kZXZpY2UnO1xyXG5pbXBvcnQgUGFnZVN0YWNrIGZyb20gJy4uL2NvbXBvbmVudC9QYWdlU3RhY2snO1xyXG5cclxuZnVuY3Rpb24gZWxlbWVudElzVmlzaWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gIHJldHVybiB0b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodCA+IHdpbmRvdy5wYWdlWU9mZnNldCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiB0b3A7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRDZW50ZU9uUGFnZShlbGVtZW50OiBIVE1MRGl2RWxlbWVudCk6IG51bWJlciB7XHJcbiAgY29uc3Qgc3RhY2tDb21wb25lbnQgPSBQYWdlU3RhY2suZ2V0U3RhY2tDb21wb25lbnQoKTtcclxuICBsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG5cclxuICBpZiAoc3RhY2tDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBzdGFja0NvbXBvbmVudC5wYWdlRWxlbVJlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gcm9vdC5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gZWxlbWVudCAmJiBlbGVtZW50SXNWaXNpYmxlKGNoaWxkIGFzIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRvdGFsSGVpZ2h0ICs9IGNoaWxkLnNjcm9sbEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZS5oZWlnaHQgLSB0b3RhbEhlaWdodDtcclxufSIsImltcG9ydCBlbnYgZnJvbSAneXVlamlhL3V0aWxzL2Vudic7XHJcbmltcG9ydCBnZXRJc1N1YnNjcmliZSBmcm9tICd5dWVqaWEvdXRpbHMvZ2V0SXNTdWJzY3JpYmUnO1xyXG5cclxuLy8g5ZCO56uv5Zyo6aG16Z2i5LiK5rOo5YWl55qE5Y+Y6YePXHJcbmludGVyZmFjZSBFeHRlbmRXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIC8qKiDmmK/lkKbnmbvlvZUgKi9cclxuICBpc0xvZ2luOiBib29sZWFuO1xyXG4gIC8qKiDlvq7kv6HphY3nva5pZCAqL1xyXG4gIHd4Q29uZmlnSWQ6IHN0cmluZztcclxuICAvKiog55m75b2V6aG16Z2i55qEdXJsICovXHJcbiAgbG9naW5VUkw6IHN0cmluZztcclxuICAvKiog55m75b2V6aG16Z2i55qE5Zue6LCDICovXHJcbiAgbG9naW5DYWxsQmFjazogc3RyaW5nO1xyXG4gIC8qKiDnlKjmiLfnvJPlrZhpZCAqL1xyXG4gIHVzZXJDYWNoZUlkOiBzdHJpbmc7XHJcbiAgLyoqIOW+ruS/oeeahGFwcGlkICovXHJcbiAgYXBwSWQ6IHN0cmluZztcclxuICAvKiog5b6u5L+h55qEdGlja2V0ICovXHJcbiAgdGlja2V0OiBzdHJpbmc7XHJcbiAgLyoqIOW+ruS/oeeUqOaIt+eahG9wZW5JZCAqL1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG59XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogRXh0ZW5kV2luZG93O1xyXG4vKiog5b6u5L+h55qEdGlja2V0ICovXHJcbmNvbnN0IHRpY2tldCA9IHdpbmRvdy50aWNrZXQ7XHJcbi8qKiDlvq7kv6HnmoRhcHBpZCAqL1xyXG5jb25zdCBhcHBJZCA9IHdpbmRvdy5hcHBJZDtcclxuLyoqIOW+ruS/oeeUqOaIt+eahG9wZW5JZCAqL1xyXG5jb25zdCBvcGVuSWQgPSB3aW5kb3cub3BlbklkO1xyXG4vKiog5b6u5L+h6YWN572uaWQgKi9cclxuY29uc3Qgd3hDb25maWdJZCA9IHdpbmRvdy53eENvbmZpZ0lkO1xyXG4vKiog55m75b2V54q25oCBICovXHJcbmNvbnN0IGxvZ2luU3RhdGUgPSB3aW5kb3cuaXNMb2dpbjtcclxuLyoqIOeUqOaIt+e8k+WtmGlkICovXHJcbmNvbnN0IHVzZXJDYWNoZUlkID0gd2luZG93LnVzZXJDYWNoZUlkO1xyXG4vKiog6KGM5Li66K6w5b2V5Y+R6YCB55qEYXBpICovXHJcbmNvbnN0IGJlaGF2aW9yQXBpID0gJyc7XHJcbi8qKiDlvq7kv6HliIbkuqvnmoTpu5jorqTmoIfpopggKi9cclxuY29uc3Qgc2hhcmVUaXRsZSA9ICcnO1xyXG4vKiog5b6u5L+h5YiG5Lqr55qE6buY6K6k5o+P6L+wICovXHJcbmNvbnN0IHNoYXJlRGVzYyA9ICcnO1xyXG4vKiog55So5oi35L+h5oGv5Zyoc3RvcmFnZeWCqOWtmOeahGtleSAqL1xyXG5jb25zdCBzdG9yYWdlS2V5ID0gJyc7XHJcbi8qKiDlhbPms6jnirbmgIEgKi9cclxuY29uc3Qgc3Vic2NyaWJlU3RhdGUgPSBnZXRJc1N1YnNjcmliZSgpO1xyXG4vKiog5YiG5Lqr6ZO+5o6l55qE5YmN57yA77yM55So5LqO5ou85o6l5b2T5YmN6aG16Z2i55qE6Lev55SxICovXHJcbmxldCBzaGFyZUxpbmshOiAoKSA9PiBzdHJpbmc7XHJcbi8qKiDnvZHnu5zor7fmsYLnmoTlnLDlnYDliY3nvIAgKi9cclxubGV0IGJhc2VVUkwgPSAnJztcclxuLyoqIOWbvueJh+WcsOWdgOeahOWJjee8gCAqL1xyXG5sZXQgaW1nSG9zdCA9ICcnO1xyXG5cclxuc3dpdGNoIChlbnYpIHtcclxuICAvLyDnlJ/kuqfnjq/looPnmoTphY3nva5cclxuICBjYXNlICdwcm9kdWN0aW9uJzpcclxuICAgIGJhc2VVUkwgPSAnJztcclxuICAgIGltZ0hvc3QgPSAnJztcclxuICAgIGJyZWFrO1xyXG4gIC8vIOmihOWPkeW4g+eOr+Wig+eahOmFjee9rlxyXG4gIGNhc2UgJ3ByZXJlbGVhc2UnOlxyXG4gICAgYmFzZVVSTCA9ICcnO1xyXG4gICAgaW1nSG9zdCA9ICcnO1xyXG4gICAgc2hhcmVMaW5rID0gKCkgPT4gJyc7XHJcbiAgICBicmVhaztcclxuICAvLyDlvIDlj5Hnjq/looPnmoTphY3nva5cclxuICBkZWZhdWx0OlxyXG4gICAgYmFzZVVSTCA9ICcnO1xyXG4gICAgaW1nSG9zdCA9ICcnO1xyXG4gICAgc2hhcmVMaW5rID0gKCkgPT4gJyc7XHJcbiAgICBicmVhaztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIOW6lOeUqOmcgOimgeeahOWPmOmHj1xyXG4gIGFwcDoge1xyXG4gICAgd3hDb25maWdJZCxcclxuICAgIHVzZXJDYWNoZUlkLFxyXG4gICAgaW1nSG9zdCxcclxuICAgIGJhc2VVUkwsXHJcbiAgfSxcclxuICAvLyDluJDmiLfns7vnu5/pnIDopoHnmoTlj5jph49cclxuICBhY2NvdW50OiB7XHJcbiAgICB1c2VyQ2FjaGVJZCxcclxuICAgIHN0b3JhZ2VLZXksXHJcbiAgICBsb2dpblN0YXRlLFxyXG4gICAgc3Vic2NyaWJlU3RhdGUsXHJcbiAgfSxcclxuICAvLyDlvq7kv6HpnIDopoHnmoTlj5jph49cclxuICB3eDoge1xyXG4gICAgb3BlbklkLFxyXG4gICAgYXBwSWQsXHJcbiAgICB0aWNrZXQsXHJcbiAgICBzaGFyZVRpdGxlLFxyXG4gICAgc2hhcmVEZXNjLFxyXG4gICAgc2hhcmVMaW5rLFxyXG4gIH0sXHJcbiAgLy8g6KGM5Li657uf6K6h6ZyA6KaB55qE5Y+Y6YePXHJcbiAgYmVoYXZpb3I6IHtcclxuICAgIGFwaTogYmVoYXZpb3JBcGksXHJcbiAgfVxyXG59OyIsIi8vIGltcG9ydCBpbWdGaWxlcyBmcm9tICcuL19pbWdGaWxlcyc7XHJcbi8vIGltcG9ydCBzdmdGaWxlcyBmcm9tICcuL19zdmdGaWxlcyc7XHJcbmltcG9ydCB2YXJpYWJsZSBmcm9tICcuL192YXJpYWJsZSc7XHJcbi8vIGltcG9ydCBzdHlsZSBmcm9tICcuL19zdHlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gaW1nRmlsZXMsXHJcbiAgLy8gc3ZnRmlsZXMsXHJcbiAgdmFyaWFibGUsXHJcbiAgLy8gc3R5bGVcclxufTsiLCJpbXBvcnQgeWogZnJvbSAneXVlamlhL3R5cGluZ3MnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZ2xvYmFsIGZyb20gJ3l1ZWppYS9hcHAvZ2xvYmFsJztcclxuLy8gaW1wb3J0IFBhZ2VTdGFjayBmcm9tICd5dWVqaWEvY29tcG9uZW50L1BhZ2VTdGFjayc7XHJcbi8vIGltcG9ydCBNb2RlbCwgeyBDb250ZXh0IH0gZnJvbSAneXVlamlhL2NvbXBvbmVudC9Nb2RlbCc7XHJcbmltcG9ydCBJbWdWaWV3IGZyb20gJ3l1ZWppYS9jb21wb25lbnQvSW1nVmlldyc7XHJcbmltcG9ydCB7IFdlaVhpbiB9IGZyb20gJ3l1ZWppYS9hcHAvd2VpeGluJztcclxuLy8gaW1wb3J0IEJlaGF2aW9yIGZyb20gJ3l1ZWppYS9tb2RlbC9iZWhhdmlvcic7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3l1ZWppYS9hcHAvcmVxdWVzdCc7XHJcbi8vIGltcG9ydCBtb2RlbCBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vdmlldy9jb21wb25lbnRzL0NvbnRhY3QnO1xyXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ3l1ZWppYS9jb21wb25lbnQvUG9wdXAvQnV0dG9uJztcclxuLy8gaW1wb3J0IE5hdiBmcm9tICcuL3ZpZXcvcGFnZXMvTmF2JztcclxuXHJcbmdsb2JhbC5yb3V0ZXMgPSBbXHJcbiAgLy8gPFJvdXRlIGV4YWN0IGtleT1cIumhtemdouWQjeensFwiIHBhdGg9XCLot6/nlLFcIiBjb21wb25lbnQ9e0hvbWV9IC8+LFxyXG5dO1xyXG5cclxuZ2xvYmFsLmFwcFJvdXRlID0gKHByb3BzOiB5ai5QYWdlUHJvcHM8YW55PikgPT4gKFxyXG4gIDxTd2l0Y2ggbG9jYXRpb249e3Byb3BzLmxvY2F0aW9ufT5cclxuICAgIHtnbG9iYWwucm91dGVzfVxyXG4gIDwvU3dpdGNoPlxyXG4pO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLnZhcmlhYmxlLmFwcC5iYXNlVVJMO1xyXG4gICAgSW1nVmlldy5kZWZhdWx0SG9zdCA9IGNvbmZpZy52YXJpYWJsZS5hcHAuaW1nSG9zdDtcclxuICAgIC8vIOihjOS4uuiusOW9lemcgOimgeW4kOaIt+ezu+e7n+eahOaVsOaNruaooeWei1xyXG4gICAgLy8gQmVoYXZpb3Iub3B0aW9ucyA9IHtcclxuICAgIC8vICAgLi4uY29uZmlnLnZhcmlhYmxlLmJlaGF2aW9yLFxyXG4gICAgLy8gICBhY2NvdW50OiBtb2RlbC5hY2NvdW50XHJcbiAgICAvLyB9O1xyXG4gICAgUmVxdWVzdC5kZWZhdWx0RGF0YSA9IHtcclxuICAgICAgdXNlckNhY2hlSWQ6IGNvbmZpZy52YXJpYWJsZS5hcHAudXNlckNhY2hlSWQsXHJcbiAgICAgIHd4Q29uZmlnSWQ6IGNvbmZpZy52YXJpYWJsZS5hcHAud3hDb25maWdJZFxyXG4gICAgfTtcclxuICAgIFJlcXVlc3QuZGVmYXVsdFBhcmFtcyA9IHtcclxuICAgICAgdXNlckNhY2hlSWQ6IGNvbmZpZy52YXJpYWJsZS5hcHAudXNlckNhY2hlSWQsXHJcbiAgICAgIHd4Q29uZmlnSWQ6IGNvbmZpZy52YXJpYWJsZS5hcHAud3hDb25maWdJZFxyXG4gICAgfTtcclxuICAgIFdlaVhpbi5vcHRpb25zID0gY29uZmlnLnZhcmlhYmxlLnd4O1xyXG5cclxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgLy8gaWYgKG1vZGVsLmFjY291bnQuZ2V0UmVxdWVzdCkge1xyXG4gICAgLy8gICBtb2RlbC5hY2NvdW50LmdldFJlcXVlc3Quc2VuZCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPE1vZGVsPlxyXG4gICAgICAvLyAgIHsodmFsdWUpID0+IChcclxuICAgICAgLy8gICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIC8vICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAvLyAgICAgICAgIDxQYWdlU3RhY2sgLz5cclxuICAgICAgLy8gICAgICAgICA8TmF2IC8+XHJcbiAgICAgIC8vICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgLy8gICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgLy8gICApfVxyXG4gICAgICAvLyA8L01vZGVsPlxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgPENvbnRhY3RcclxuICAgICAgICAgIGZ1bmNOYW1lPXtbJ+epuuS4realvOebmCcsICdWUueci+aIvycsICfmiL/otLforqHnrpflmagnLCAn5LiT5bGe5pyN5YqhJ119XHJcbiAgICAgICAgICBuYW1lPVwi5byg576O546yXCJcclxuICAgICAgICAgIHByb2Zlc3Npb249XCLnva7kuJrpob7pl65cIlxyXG4gICAgICAgICAgdGVsPVwiMTM4IDk4ODkgODc0M1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29tcG9uZW50XCI6XCJjb21wb25lbnRfMkJoVk5cIixcImJhY2tncm91bmRcIjpcImJhY2tncm91bmRfWEdvdU1cIixcImJ1aWxkaW5nSW1nXCI6XCJidWlsZGluZ0ltZ18xZjZSZFwiLFwiYnVpbGRpbmdJbmZvXCI6XCJidWlsZGluZ0luZm9fYlpIZUhcIixcInRhZ1wiOlwidGFnXzJySlJnXCIsXCJidWlsZGluZ1ByaWNlXCI6XCJidWlsZGluZ1ByaWNlXzFVMEhZXCIsXCJwcmljZUltZ1wiOlwicHJpY2VJbWdfMk83R3NcIixcImJ1aWRsaW5nVFwiOlwiYnVpZGxpbmdUX0dFQnF5XCIsXCJidWlsZGluZ05cIjpcImJ1aWxkaW5nTl8zTW91elwiLFwiYnVpbGRpbmdVXCI6XCJidWlsZGluZ1VfZGNTMkpcIixcImZ1bmNcIjpcImZ1bmNfM0FHUzFcIixcImljb24xXCI6XCJpY29uMV9PUzU2OFwiLFwiaWNvbjJcIjpcImljb24yX1p3Z3hIXCIsXCJpY29uM1wiOlwiaWNvbjNfcDc1MC1cIixcImljb240XCI6XCJpY29uNF8zaG9hSFwiLFwiZm9vdGVyXCI6XCJmb290ZXJfMmRYTEFcIixcImNvbnRhY3RcIjpcImNvbnRhY3RfMXFNb3VcIixcInBlb3BsZVwiOlwicGVvcGxlXzJjMVEyXCIsXCJwZW9JbWdcIjpcInBlb0ltZ19BaEF6elwiLFwiaW5mb1wiOlwiaW5mb18zOGxTeFwiLFwidGVsXCI6XCJ0ZWxfM281TkxcIixcInByb2Zlc3Npb25cIjpcInByb2Zlc3Npb25fMXFjaVVcIixcInFyY29kZVwiOlwicXJjb2RlXzJVbERRXCJ9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9pbmRleC5zY3NzJztcclxuaW1wb3J0IEltZ1ZpZXcgZnJvbSAneXVlamlhL2NvbXBvbmVudC9JbWdWaWV3JztcclxuLy8gaW1wb3J0IEljb25UZXh0IGZyb20gJ3l1ZWppYS9fYmFzZS92aWV3L0ljb25UZXh0JztcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBmdW5jTmFtZTogc3RyaW5nW107XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByb2Zlc3Npb246IHN0cmluZztcclxuICB0ZWw6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XHJcbiAgICBzdXBlcihwcm9wcywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICBjb25zdCB7IGZ1bmNOYW1lLCBuYW1lLCBwcm9mZXNzaW9uLCB0ZWwgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhmdW5jTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2Zlc3Npb24pO1xyXG4gICAgY29uc29sZS5sb2codGVsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb21wb25lbnR9PlxyXG4gICAgICB7Lyog6L+Z5piv5aS06YOo6YOo5YiG55qEICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYWNrZ3JvdW5kfT5cclxuICAgICAgICAgIDxJbWdWaWV3XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnVpbGRpbmdJbWd9XHJcbiAgICAgICAgICAgIGNvbXBsZXRlVmlldz1cIi9zcmMvYXNzZXRzL2ltZy9idWlsZGluZy5wbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idWlsZGluZ0luZm99PlxyXG4gICAgICAgICAgICA8aDE+5L+d5Yip5rGf5LiK5piO54+gPC9oMT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS50YWd9PumrmOerr+S9j+WuhTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS50YWd9PuWTgeeJjOaIv+S8gTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS50YWd9PuWkruS8geeJqeS4mjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS50YWd9PuaZr+inguaIvzwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+PHNwYW4+5qW855uY5Zyw5Z2A77yaPC9zcGFuPjxzcGFuPumHjeW6huW4gi/kuZ3pvpnms6LljLov5L+d5Yip5rGf5LiK5piO54+g5ZSu5qW85Lit5b+DPC9zcGFuPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnVpbGRpbmdQcmljZX0+XHJcbiAgICAgICAgICA8SW1nVmlld1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnByaWNlSW1nfVxyXG4gICAgICAgICAgICBjb21wbGV0ZVZpZXc9XCIvc3JjL2Fzc2V0cy9pbWcvYmFjay5wbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgIDxkdD48c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJ1aWRsaW5nVH0+5Z2H5Lu3PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJ1aWxkaW5nTn0+MTExMTE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5idWlsZGluZ1V9PuS4h208c3VwPjI8L3N1cD48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICA8ZHQ+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5idWlkbGluZ1R9PuWNoOWcsOmdouenrzwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5idWlsZGluZ059PjExMTExPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYnVpbGRpbmdVfT7kuIdtPHN1cD4yPC9zdXA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgPGR0PjxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYnVpZGxpbmdUfT7lu7rnrZHpnaLnp688L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYnVpbGRpbmdOfT4xMTExMTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJ1aWxkaW5nVX0+5LiHbTxzdXA+Mjwvc3VwPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZnVuY30+XHJcbiAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICA8ZHQ+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5pY29uMX0+PC9zcGFuPjxici8+PHNwYW4gc3R5bGU9e3tjb2xvcjogJyM3NTlkZmYnfX0+56m65Lit55yL5oi/PC9zcGFuPjwvZHQ+XHJcbiAgICAgICAgICAgICAgPGR0PjxzcGFuIGNsYXNzTmFtZT17c3R5bGUuaWNvbjJ9Pjwvc3Bhbj48YnIvPjxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjZmNhZDE1J319PlZS55yL5oi/PC9zcGFuPjwvZHQ+XHJcbiAgICAgICAgICAgICAgPGR0PjxzcGFuIGNsYXNzTmFtZT17c3R5bGUuaWNvbjN9Pjwvc3Bhbj48YnIvPjxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjNzRjNjY1J319PuaIv+i0t+iuoeeul+WZqDwvc3Bhbj48L2R0PlxyXG4gICAgICAgICAgICAgIDxkdD48c3BhbiBjbGFzc05hbWU9e3N0eWxlLmljb240fT48L3NwYW4+PGJyLz48c3BhbiBzdHlsZT17e2NvbG9yOiAnI2ZlNmY2Zid9fT7kuJPlsZ7mnI3liqE8L3NwYW4+PC9kdD5cclxuICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIOiBlOezu+S6uiovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mb290ZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGVvcGxlfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zcmMvYXNzZXRzL2ltZy9wZW8ucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUucGVvSW1nfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxJY29uVGV4dFxyXG4gICAgICAgICAgICAgICAgaWNvbj1cIi9zcmMvYXNzZXRzL2ltZy9wZW8ucG5nXCJcclxuICAgICAgICAgICAgICAgIGljb25DbHM9e3N0eWxlLnBlb0ltZ31cclxuICAgICAgICAgICAgICAgIHRleHQ9XCJoZWxsbyB3b3JsZFwiXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e25hbWV9PC9zdHJvbmc+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnByb2Zlc3Npb259Pntwcm9mZXNzaW9ufTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS50ZWx9Pnt0ZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cD7mpbznm5jku7fmoLzkvJjmg6DvvIzor7fogZTns7vmiJHvvIE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnFyY29kZX1cclxuICAgICAgICAgICAgICAgIHNyYz1cInNyYy9hc3NldHMvaW1nL3FyY29kZS5wbmdcIiBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAneXVlamlhL3N0eWxlL2Jhc2Uuc2Nzcyc7XHJcbmltcG9ydCAneXVlamlhL3N0eWxlL21peGlucy5zY3NzJztcclxuaW1wb3J0ICd5dWVqaWEvc3R5bGUvdmFyaWFibGUuc2Nzcyc7XHJcbmltcG9ydCAneXVlamlhL3V0aWxzL3VybHNlYXJjaHBhcmFtcyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3Byb21pc2UnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL2xhdW5jaGVyJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFJvb3QnKVxyXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gdmVuZG9yXzQ5NGEzNDU5YWQxM2ZmYWQ3YjVjOyJdLCJzb3VyY2VSb290IjoiIn0=