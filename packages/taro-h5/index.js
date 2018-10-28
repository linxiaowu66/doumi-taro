'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Nerv = _interopDefault(require('nervjs'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
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
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
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

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
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
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */


function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
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
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
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
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

function dynamicRecursive(component, param, data, stateName) {
  data = data || [];
  return param.map(function (paramItem) {
    var inData = paramItem.subscript ? data[paramItem.subscript] || [] : data;
    var res = {
      name: paramItem.name || '',
      path: paramItem.path || '',
      subscript: paramItem.subscript
    };
    res.components = [];

    if (res.name) {
      res.components = inData.map(function (d, index) {
        var res = {
          fn: "dy_".concat(stateName, "_").concat(paramItem.subscript, "_").concat(paramItem.name).concat(index),
          body: function (d) {
            return Object.assign({
              $name: "dy_".concat(stateName, "_").concat(paramItem.subscript, "_").concat(paramItem.name).concat(index)
            }, paramItem.args && paramItem.args.call(component, d, index));
          }(d)
        };

        if (paramItem.children && paramItem.children.length) {
          res.children = dynamicRecursive(component, paramItem.children, d, stateName);
        }

        return res;
      });
    } else if (paramItem.children && paramItem.children.length) {
      res.children = inData.map(function (d, index) {
        return dynamicRecursive(component, paramItem.children, d, stateName);
      });
    }

    return res;
  });
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN'
};
function getEnv() {
  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    return ENV_TYPE.WEAPP;
  }

  if (typeof window !== 'undefined') {
    return ENV_TYPE.WEB;
  }

  if (typeof global !== 'undefined' && global.ErrorUtils) {
    return ENV_TYPE.RN;
  }

  return 'Unknown environment';
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

/* eslint-disable camelcase */
var eventCenter = new Events();

(function (self) {

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
var enc = encodeURIComponent;

function serializeParams(params) {
  if (!params) {
    return '';
  }

  return Object.keys(params).map(function (item) {
    return item + '=' + enc(params[item]);
  }).join('&');
}

function isFunction$1(fn) {
  return typeof fn === 'function';
}

function getUrlQueryParamByName(url, name) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function updateQueryStringParamByName(url, name, value) {
  var re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i');
  var separator = url.indexOf('?') !== -1 ? '&' : '?';

  if (url.match(re)) {
    return url.replace(re, '$1' + name + '=' + value + '$2');
  }

  return url + separator + name + '=' + value;
}

var win$1 = typeof window !== 'undefined' ? window : global;
var localStorageName = 'localStorage';
var storage = win$1[localStorageName];
var store = {
  disabled: false,
  set: function set(key, val) {
    if (val === void 666) {
      return store.remove(key);
    }

    storage.setItem(key, store.serialize(val));
    return val;
  },
  get: function get(key, defaultVal) {
    var val = store.deserialize(storage.getItem(key));
    return val === undefined ? defaultVal : val;
  },
  remove: function remove(key) {
    storage.removeItem(key);
  },
  clear: function clear() {
    storage.clear();
  },
  has: function has(key) {
    return store.get(key) !== void 666;
  },
  forEach: function forEach(callback) {
    for (var i = 0; i < storage.length; i++) {
      var key = storage.key(i);
      callback(key, store.get(key));
    }
  },
  getAll: function getAll() {
    var ret = {};
    store.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  serialize: function serialize(value) {
    return JSON.stringify(value);
  },
  deserialize: function deserialize(value) {
    if (typeof value !== 'string') {
      return;
    }

    try {
      return JSON.parse(value);
    } catch (err) {
      return value || void 666;
    }
  }
};

try {
  var testKey = '__store__';
  store.set(testKey, testKey);

  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }

  store.remove(testKey);
} catch (err) {
  store.disabled = true;
}

store.enabled = !store.disabled;

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
};

var win = typeof window !== 'undefined' ? window : global;

var canUsePromise = function () {
  return 'Promise' in win && _typeof$1(isFunction$1(Promise));
}();

var noop = function noop() {};

var encodeC = encodeURIComponent;
var doc = win.document;
var head = doc ? doc.head || doc.getElementsByTagName('head')[0] : null;
var TIMEOUT_CONST = 2000;
var defaultConfig = {
  timeout: TIMEOUT_CONST,
  retryTimes: 2,
  backup: null,
  params: {},
  jsonp: 'callback',
  name: null,
  cache: false,
  useStore: false,
  storeCheck: null,
  storeSign: null,
  storeCheckKey: null,
  dataCheck: null,
  charset: 'UTF-8'
};
var timestamp = new Date().getTime();

function jsonp$1(url, opts, cb) {
  if (isFunction$1(url)) {
    cb = url;
    opts = {};
  } else if (url && (typeof url === 'undefined' ? 'undefined' : _typeof$1(url)) === 'object') {
    cb = opts;
    opts = url || {};
    url = opts.url;
  }

  if (isFunction$1(opts)) {
    cb = opts;
    opts = {};
  }

  if (!opts) {
    opts = {};
  }

  opts = objectAssign$1({}, defaultConfig, opts);
  url = url || opts.url;
  cb = cb || noop;

  if (!url || typeof url !== 'string') {
    cb(new Error('Param url is needed!'));

    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve, reject) {
        return reject(new Error('Param url is needed!'));
      });
    }

    return;
  }

  var urlWithParams = generateJsonpUrlWithParams(url, opts.params); // first get data from store

  var datafromStore = getDataFromStore({
    useStore: opts.useStore,
    storeKey: urlWithParams,
    storeCheck: opts.storeCheck,
    storeCheckKey: opts.storeCheckKey,
    storeSign: opts.storeSign,
    dataCheck: opts.dataCheck
  });

  if (datafromStore) {
    cb(null, datafromStore);

    if (!jsonp$1.promiseClose && canUsePromise) {
      return new Promise(function (resolve) {
        return resolve(datafromStore);
      });
    }

    return;
  }

  opts.originalUrl = urlWithParams;

  if (!jsonp$1.promiseClose && canUsePromise) {
    return new Promise(function (resolve, reject) {
      fetchData(urlWithParams, opts, function (err, data) {
        if (err) {
          cb(err);
          return reject(err);
        }

        cb(null, data);
        resolve(data);
      });
    });
  }

  fetchData(urlWithParams, opts, cb);
}

function generateJsonpUrlWithParams(url, params) {
  params = typeof params === 'string' ? params : serializeParams(params);
  url += (~url.indexOf('?') ? '&' : '?') + ('' + params);
  url = url.replace('?&', '?');
  return url;
}

function fetchData(url, opts, cb) {
  var originalUrl = opts.originalUrl;
  var charset = opts.charset;
  var jsonpUrlQueryParam = getUrlQueryParamByName(url, opts.jsonp);
  var funcId = (jsonpUrlQueryParam === '?' ? false : jsonpUrlQueryParam) || opts.name || '__jsonp' + timestamp++;
  var gotoBackupInfo = arguments[3] || null;

  if (jsonpUrlQueryParam) {
    if (jsonpUrlQueryParam === '?') {
      url = updateQueryStringParamByName(url, opts.jsonp, encodeC(funcId));
    }
  } else {
    url += (url.split('').pop() === '&' ? '' : '&') + (opts.jsonp + '=' + encodeC(funcId));
  }

  if (!opts.cache) {
    url += (url.split('').pop() === '&' ? '' : '&') + ('_=' + new Date().getTime());
  } // move prev callback into next when fetch parallel with same funcId


  clearTimeout(win['timer_' + funcId]);
  var prevFunc = win[funcId];

  win[funcId] = function (data) {
    prevFunc && prevFunc(data);
    cleanup(funcId);

    if (gotoBackupInfo) {
      data.__$$backupCall = gotoBackupInfo;
    }

    if (opts.dataCheck) {
      if (opts.dataCheck(data) !== false) {
        // write data to store
        setDataToStore({
          useStore: opts.useStore,
          storeKey: originalUrl,
          data: data
        });
        return cb(null, data);
      }

      if (fallback(originalUrl, opts, cb) === false) {
        cb(new Error('Data check error, and no fallback'));
      }
    } else {
      // write data to store
      setDataToStore({
        useStore: opts.useStore,
        storeKey: originalUrl,
        data: data
      });
      cb(null, data);
    }
  };

  var script = appendScriptTagToHead({
    url: url,
    charset: charset
  });
  var timeout = opts.timeout != null ? opts.timeout : TIMEOUT_CONST; // when timeout, will try to retry

  win['timer_' + funcId] = setTimeout(function () {
    cleanup(funcId); // no retryTimes left, go to backup

    if (typeof opts.retryTimes === 'number' && opts.retryTimes > 0) {
      opts.retryTimes--;
      return fetchData(originalUrl, opts, cb);
    }

    if (fallback(originalUrl, opts, cb) === false) {
      return cb(new Error('Timeout and no data return'));
    }
  }, timeout);

  function cleanup(funcId) {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }

    win[funcId] = noop;
    clearTimeout(win['timer_' + funcId]);
  }
}

function storeCheckFn(storeData, storeCheckKey, storeSign) {
  if (storeData && storeCheckKey && storeSign) {
    return storeData[storeCheckKey] && storeData[storeCheckKey] === storeSign;
  }

  return false;
}

function getDataFromStore(_ref) {
  var useStore = _ref.useStore,
      storeKey = _ref.storeKey,
      storeCheck = _ref.storeCheck,
      storeCheckKey = _ref.storeCheckKey,
      storeSign = _ref.storeSign,
      dataCheck = _ref.dataCheck;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    var storeData = store.get(storeKey);
    storeCheck = storeCheck || storeCheckFn;

    if (storeCheck(storeData, storeCheckKey, storeSign)) {
      if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
        return storeData;
      }
    }
  }

  return null;
}

function getDataFromStoreWithoutCheck(_ref2) {
  var useStore = _ref2.useStore,
      storeKey = _ref2.storeKey,
      dataCheck = _ref2.dataCheck;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    var storeData = store.get(storeKey);

    if (!dataCheck || storeData && dataCheck && dataCheck(storeData) !== false) {
      return storeData;
    }
  }

  return null;
}

function setDataToStore(_ref3) {
  var useStore = _ref3.useStore,
      storeKey = _ref3.storeKey,
      data = _ref3.data;
  useStore = useStore ? store.enabled : false;

  if (useStore) {
    store.set(storeKey, data);
  }
}

function fallback(url, opts, cb) {
  var backup = opts.backup;
  var backupWithParams = void 0;

  if (backup) {
    if (typeof backup === 'string') {
      delete opts.backup;
      backupWithParams = generateJsonpUrlWithParams(backup, opts.params);
      return fetchData(backupWithParams, opts, cb, {
        backup: backup
      });
    } else if (Array.isArray(backup)) {
      if (backup.length) {
        var backupUrl = backup.shift();
        backupWithParams = generateJsonpUrlWithParams(backupUrl, opts.params);
        return fetchData(backupWithParams, opts, cb, {
          backup: backupUrl
        });
      }
    }
  } // no backup to use, try to get data from store


  var dataFromStoreWithoutCheck = getDataFromStoreWithoutCheck({
    useStore: opts.useStore,
    storeKey: url,
    dataCheck: opts.dataCheck
  });

  if (dataFromStoreWithoutCheck) {
    cb(null, dataFromStoreWithoutCheck);
    return true;
  }

  return false;
}

function appendScriptTagToHead(_ref4) {
  var url = _ref4.url,
      charset = _ref4.charset;

  if (!doc) {
    return;
  }

  var script = doc.createElement('script');
  script.type = 'text/javascript';

  if (charset) {
    script.charset = charset;
  }

  script.src = url;
  head.appendChild(script);
  return script;
}

/**
 * WXML节点信息API
 * @return {Object} SelectorQuery 对象实例
 */
function queryBat(queue, cb) {
  var res = [];
  queue.forEach(function (item) {
    var selector = item.selector,
        single = item.single,
        fields = item.fields;
    var el = null;

    if (single) {
      el = document.querySelector(selector);
      res.push(filter(fields, el, selector));
    } else {
      el = Array.from(document.querySelectorAll(selector));
      res.push(el.map(function (dom) {
        return filter(fields, dom);
      }));
    }
  });
  cb(res);
}

function filter(fields, dom, selector) {
  if (!dom) return null;
  var id = fields.id,
      dataset = fields.dataset,
      rect = fields.rect,
      size = fields.size,
      scrollOffset = fields.scrollOffset,
      _fields$properties = fields.properties,
      properties = _fields$properties === void 0 ? [] : _fields$properties,
      _fields$computedStyle = fields.computedStyle,
      computedStyle = _fields$computedStyle === void 0 ? [] : _fields$computedStyle;

  var _dom$getBoundingClien = dom.getBoundingClientRect(),
      left = _dom$getBoundingClien.left,
      right = _dom$getBoundingClien.right,
      top = _dom$getBoundingClien.top,
      bottom = _dom$getBoundingClien.bottom,
      width = _dom$getBoundingClien.width,
      height = _dom$getBoundingClien.height;

  var isViewport = selector === 'html';
  var res = {};
  if (id) res.id = dom.id;
  if (dataset) res.dataset = Object.assign({}, dom.dataset);

  if (rect) {
    if (!isViewport) {
      res.left = left;
      res.right = right;
      res.top = top;
      res.bottom = bottom;
    } else {
      res.left = res.right = res.top = res.bottom = 0;
    }
  }

  if (size) {
    if (!isViewport) {
      res.width = width;
      res.height = height;
    } else {
      res.width = dom.clientWidth;
      res.height = dom.clientHeight;
    }
  }

  if (scrollOffset) {
    res.scrollLeft = dom.scrollLeft;
    res.scrollTop = dom.scrollTop;
  }

  if (properties.length) {
    properties.forEach(function (prop) {
      var attr = dom.getAttribute(prop);
      if (attr) res[prop] = attr;
    });
  }

  if (computedStyle.length) {
    var styles = window.getComputedStyle(dom);
    computedStyle.forEach(function (key) {
      var value = styles.getPropertyValue(key);
      if (value) res[key] = value;
    });
  }

  return res;
}

var Query =
/*#__PURE__*/
function () {
  function Query() {
    _classCallCheck(this, Query);

    this._defaultWebviewId = null;
    this._webviewId = null;
    this._queue = [];
    this._queueCb = [];
    this._component = null;
  }

  _createClass(Query, [{
    key: "in",
    value: function _in(component) {
      this._component = component;
      return this;
    }
  }, {
    key: "select",
    value: function select(selector) {
      // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
      if (typeof selector === 'string') selector = selector.replace('>>>', '>');
      return new NodesRef(selector, this, true);
    }
  }, {
    key: "selectAll",
    value: function selectAll(selector) {
      // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
      if (typeof selector === 'string') selector = selector.replace('>>>', '>');
      return new NodesRef(selector, this, false);
    }
  }, {
    key: "selectViewport",
    value: function selectViewport() {
      return new NodesRef('html', this, true);
    }
  }, {
    key: "exec",
    value: function exec(cb) {
      var _this = this;

      queryBat(this._queue, function (res) {
        var _queueCb = _this._queueCb;
        res.forEach(function (item, index) {
          typeof _queueCb[index] === 'function' && _queueCb[index].call(_this, item);
        });
        typeof cb === 'function' && cb.call(_this, res);
      });
    }
  }, {
    key: "_push",
    value: function _push(selector, component, single, fields) {
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      this._queue.push({
        component: component,
        selector: selector,
        single: single,
        fields: fields
      });

      this._queueCb.push(callback);
    }
  }]);

  return Query;
}();

var NodesRef =
/*#__PURE__*/
function () {
  function NodesRef(selector, querySelectorQuery, single) {
    _classCallCheck(this, NodesRef);

    this._component = querySelectorQuery._component;
    this._selector = selector;
    this._selectorQuery = querySelectorQuery;
    this._single = single;
  }

  _createClass(NodesRef, [{
    key: "boundingClientRect",
    value: function boundingClientRect(cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;

      _selectorQuery._push(_selector, _component, _single, {
        id: !0,
        dataset: !0,
        rect: !0,
        size: !0
      }, cb);

      return _selectorQuery;
    }
  }, {
    key: "scrollOffset",
    value: function scrollOffset(cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;

      _selectorQuery._push(_selector, _component, _single, {
        id: !0,
        dataset: !0,
        scrollOffset: !0
      }, cb);

      return _selectorQuery;
    }
  }, {
    key: "fields",
    value: function fields(_fields, cb) {
      var _selector = this._selector,
          _component = this._component,
          _single = this._single,
          _selectorQuery = this._selectorQuery;
      var id = _fields.id,
          dataset = _fields.dataset,
          rect = _fields.rect,
          size = _fields.size,
          scrollOffset = _fields.scrollOffset,
          _fields$properties2 = _fields.properties,
          properties = _fields$properties2 === void 0 ? [] : _fields$properties2,
          _fields$computedStyle2 = _fields.computedStyle,
          computedStyle = _fields$computedStyle2 === void 0 ? [] : _fields$computedStyle2;

      _selectorQuery._push(_selector, _component, _single, {
        id: id,
        dataset: dataset,
        rect: rect,
        size: size,
        scrollOffset: scrollOffset,
        properties: properties,
        computedStyle: computedStyle
      }, cb);

      return _selectorQuery;
    }
  }]);

  return NodesRef;
}();

function createSelectorQuery() {
  return new Query();
}

function shouleBeObject(target) {
  if (target && _typeof(target) === 'object') return {
    res: true
  };
  return {
    res: false,
    msg: getParameterError({
      correct: 'Object',
      wrong: target
    })
  };
}

function getParameterError(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      para = _ref.para,
      correct = _ref.correct,
      wrong = _ref.wrong;
  var parameter = para ? "parameter.".concat(para) : 'parameter';
  var errorType = upperCaseFirstLetter(wrong === null ? 'Null' : _typeof(wrong));
  return "".concat(name, ":fail parameter error: ").concat(parameter, " should be ").concat(correct, " instead of ").concat(errorType);
}

function upperCaseFirstLetter(string) {
  if (typeof string !== 'string') return string;
  string = string.replace(/^./, function (match) {
    return match.toUpperCase();
  });
  return string;
}

function inlineStyle(style) {
  var res = '';

  for (var attr in style) {
    res += "".concat(attr, ": ").concat(style[attr], ";");
  }

  // 解决兼容问题，替换includes方法
  // if (res.includes('display: flex;')) res += 'display: -webkit-box;display: -webkit-flex;';
  if (res.indexOf('display: flex;') >= 0) res += 'display: -webkit-box;display: -webkit-flex;';
  return res;
}

function errorHandler(fail, complete) {
  return function (res) {
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  };
}

function setStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "setStorage".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var key = options.key,
      data = options.data,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'setStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'setStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  setStorageSync(key, data);
  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

function setStorageSync(key) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'setStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  var type = _typeof(data);

  var obj = {};

  if (type === 'symbol') {
    obj = {
      data: ''
    };
  } else {
    obj = {
      data: data
    };
  }

  localStorage.setItem(key, JSON.stringify(obj));
}

function getStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res2 = {
      errMsg: "getStorage".concat(isObject.msg)
    };
    console.error(_res2.errMsg);
    return Promise.reject(_res2);
  }

  var key = options.key,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'getStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'getStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  var _getItem = getItem(key),
      result = _getItem.result,
      data = _getItem.data;

  if (result) {
    res.data = data;
  } else {
    res.errMsg = 'getStorage:fail data not found';
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  typeof success === 'function' && success(res);
  typeof complete === 'function' && complete(res);
  return Promise.resolve(res);
}

function getStorageSync(key) {
  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'getStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  var res = getItem(key);
  if (res.result) return res.data;
  return '';
}

function getItem(key) {
  var item;

  try {
    item = JSON.parse(localStorage.getItem(key));
  } catch (e) {} // 只返回使用 Taro.setStorage API 存储的数据


  if (item && _typeof(item) === 'object' && item.hasOwnProperty('data')) {
    return {
      result: true,
      data: item.data
    };
  } else {
    return {
      result: false
    };
  }
}

function getStorageInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = options.success,
      complete = options.complete;
  var res = {
    errMsg: 'getStorageInfo:ok'
  };
  var info = getStorageInfoSync();
  Object.assign(res, info);
  success && success(res);
  complete && complete(res);
  return Promise.resolve(res);
}

function getStorageInfoSync() {
  var res = {};
  res.keys = Object.keys(localStorage);
  res.limitSize = null;
  res.currentSize = null;
  return res;
}

function removeStorage(options) {
  // options must be an Object
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res3 = {
      errMsg: "removeStorage".concat(isObject.msg)
    };
    console.error(_res3.errMsg);
    return Promise.reject(_res3);
  }

  var key = options.key,
      success = options.success,
      fail = options.fail,
      complete = options.complete;
  var res = {
    errMsg: 'removeStorage:ok'
  };

  if (typeof key !== 'string') {
    res.errMsg = getParameterError({
      name: 'removeStorage',
      para: 'key',
      correct: 'String',
      wrong: key
    });
    console.error(res.errMsg);
    typeof fail === 'function' && fail(res);
    typeof complete === 'function' && complete(res);
    return Promise.reject(res);
  }

  removeStorageSync(key);
  success && success(res);
  complete && complete(res);
  return Promise.resolve(res);
}

function removeStorageSync(key) {
  if (typeof key !== 'string') {
    console.error(getParameterError({
      name: 'removeStorage',
      correct: 'String',
      wrong: key
    }));
    return;
  }

  localStorage.removeItem(key);
}

function clearStorage() {
  localStorage.clear();
}

var storage$1 = /*#__PURE__*/Object.freeze({
  setStorage: setStorage,
  setStorageSync: setStorageSync,
  getStorage: getStorage,
  getStorageSync: getStorageSync,
  getStorageInfo: getStorageInfo,
  getStorageInfoSync: getStorageInfoSync,
  removeStorage: removeStorage,
  removeStorageSync: removeStorageSync,
  clearStorage: clearStorage,
  clearStorageSync: clearStorage
});

var Toast =
/*#__PURE__*/
function () {
  function Toast() {
    _classCallCheck(this, Toast);

    var noop = function noop() {};

    this.options = {
      title: '',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: noop,
      fail: noop,
      complete: noop
    };
  }

  _createClass(Toast, [{
    key: "getstyle",
    value: function getstyle(name) {
      return {
        maskStyle: {
          'position': 'fixed',
          'z-index': '1000',
          'top': '0',
          'right': '0',
          'left': '0',
          'bottom': '0'
        },
        toastStyle: {
          'z-index': '5000',
          'box-sizing': 'border-box',
          'display': 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          '-webkit-justify-content': 'center',
          'position': 'fixed',
          'top': '50%',
          'left': '50%',
          'min-width': '120px',
          'max-width': '200px',
          'min-height': '120px',
          'padding': '15px',
          'transform': 'translate(-50%, -50%)',
          'border-radius': '5px',
          'text-align': 'center',
          'line-height': '1.6',
          'color': '#FFFFFF',
          'background': 'rgba(17, 17, 17, 0.7)'
        },
        successStyle: {
          'margin': '0',
          'vertical-align': 'middle',
          'font-family': 'taro',
          '-webkit-font-smoothing': 'antialiased',
          'color': '#FFFFFF',
          'font-size': '55px',
          'line-height': '1'
        },
        loadingStyle: {
          'margin': '6px auto',
          'width': '38px',
          'height': '38px',
          '-webkit-animation': 'taroLoading 1s steps(12, end) infinite',
          'animation': 'taroLoading 1s steps(12, end) infinite',
          'background': 'transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat',
          'background-size': '100%'
        },
        imageStyle: {
          'margin': '6px auto',
          'width': '40px',
          'height': '40px',
          'background': 'transparent no-repeat',
          'background-size': '100%'
        },
        textStyle: {
          'margin': '0',
          'font-size': '16px'
        }
      };
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // style
      var _getstyle = this.getstyle(),
          maskStyle = _getstyle.maskStyle,
          toastStyle = _getstyle.toastStyle,
          successStyle = _getstyle.successStyle,
          loadingStyle = _getstyle.loadingStyle,
          imageStyle = _getstyle.imageStyle,
          textStyle = _getstyle.textStyle; // configuration


      Object.assign(this.options, options);
      var config = this.options; // wrapper

      this.el = document.createElement('div');
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.1s linear'; // mask

      this.mask = document.createElement('div');
      this.mask.setAttribute('style', inlineStyle(maskStyle));
      this.mask.style.display = config.mask ? 'block' : 'none'; // icon

      this.icon = document.createElement('p');

      if (config.image) {
        this.icon.setAttribute('style', inlineStyle(Object.assign({}, imageStyle, {
          'background-image': "url(".concat(config.image, ")")
        })));
      } else {
        var iconStyle = config.icon === 'loading' ? loadingStyle : successStyle;
        if (config.icon === 'none') Object.assign(iconStyle, {
          'display': 'none'
        });
        this.icon.setAttribute('style', inlineStyle(iconStyle));
        if (config.icon !== 'loading') this.icon.textContent = '';
      } // toast


      this.toast = document.createElement('div');

      if (config.icon === 'none') {
        Object.assign(toastStyle, {
          'min-height': '0',
          'padding': '10px 15px'
        });
      }

      this.toast.setAttribute('style', inlineStyle(toastStyle)); // title
      // 解决兼容问题，添加样式，外部使用可覆盖
      this.toast.className='taro-toast'

      this.title = document.createElement('p');
      this.title.setAttribute('style', inlineStyle(textStyle));
      this.title.textContent = config.title; // result

      this.toast.appendChild(this.icon);
      this.toast.appendChild(this.title);
      this.el.appendChild(this.mask);
      this.el.appendChild(this.toast); // show immediately

      document.body.appendChild(this.el);
      setTimeout(function () {
        _this.el.style.opacity = '1';
      }, 0);
      this.type = config._type; // disappear after duration

      config.duration >= 0 && this.hide(config.duration, this.type);
      var errMsg = this.type === 'loading' ? 'showLoading:ok' : 'showToast:ok';
      config.success && config.success({
        errMsg: errMsg
      });
      config.complete && config.complete({
        errMsg: errMsg
      });
      return Promise.resolve({
        errMsg: errMsg
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = this.options; // title

      if (config.title !== options.title) this.title.textContent = options.title; // mask

      if (config.mask !== options.mask) this.mask.style.display = options.mask ? 'block' : 'none'; // image

      var _getstyle2 = this.getstyle(),
          toastStyle = _getstyle2.toastStyle,
          successStyle = _getstyle2.successStyle,
          loadingStyle = _getstyle2.loadingStyle,
          imageStyle = _getstyle2.imageStyle;

      if (config.image !== options.image) {
        if (options.image) {
          this.icon.setAttribute('style', inlineStyle(Object.assign({}, imageStyle, {
            'background-image': "url(".concat(options.image, ")")
          })));
          this.icon.textContent = '';
        } else {
          var iconStyle = options.icon === 'loading' ? loadingStyle : successStyle;
          if (options.icon === 'none') Object.assign(iconStyle, {
            'display': 'none'
          });
          this.icon.setAttribute('style', inlineStyle(iconStyle));
          this.icon.textContent = options.icon === 'loading' ? '' : '';
        }
      } else {
        if (!options.image && config.icon !== options.icon) {
          var _iconStyle = options.icon === 'loading' ? loadingStyle : successStyle;

          if (options.icon === 'none') Object.assign(_iconStyle, {
            'display': 'none'
          });
          this.icon.setAttribute('style', inlineStyle(_iconStyle));
          this.icon.textContent = options.icon === 'loading' ? '' : '';
        }
      } // toast


      if (options.icon === 'none') {
        Object.assign(toastStyle, {
          'min-height': '0',
          'padding': '10px 15px'
        });
      }

      this.toast.setAttribute('style', inlineStyle(toastStyle));
      Object.assign(config, options); // show

      this.el.style.display = 'block';
      setTimeout(function () {
        _this2.el.style.opacity = '1';
      }, 0);
      this.type = config._type; // disappear after duration

      config.duration >= 0 && this.hide(config.duration, this.type);
      var errMsg = this.type === 'loading' ? 'showLoading:ok' : 'showToast:ok';
      config.success && config.success({
        errMsg: errMsg
      });
      config.complete && config.complete({
        errMsg: errMsg
      });
      return Promise.resolve({
        errMsg: errMsg
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var type = arguments.length > 1 ? arguments[1] : undefined;
      if (this.type !== type) return;
      if (this.hideTimer) clearTimeout(this.hideTimer);
      this.hideTimer = setTimeout(function () {
        _this3.el.style.opacity = '0';
        setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 100);
      }, duration);
    }
  }]);

  return Toast;
}();

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);

    var noop = function noop() {};

    this.options = {
      title: '',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: noop,
      fail: noop,
      complete: noop
    };
  }

  _createClass(Modal, [{
    key: "getstyle",
    value: function getstyle(name) {
      return {
        maskStyle: {
          'position': 'fixed',
          'z-index': '1000',
          'top': '0',
          'right': '0',
          'left': '0',
          'bottom': '0',
          'background': 'rgba(0,0,0,0.6)'
        },
        modalStyle: {
          'z-index': '4999',
          'position': 'fixed',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)',
          'width': '80%',
          'max-width': '300px',
          'border-radius': '3px',
          'text-align': 'center',
          'line-height': '1.6',
          'overflow': 'hidden',
          'background': '#FFFFFF'
        },
        titleStyle: {
          'padding': '20px 24px 9px',
          'font-size': '18px'
        },
        textStyle: {
          'padding': '0 24px 12px',
          'min-height': '40px',
          'font-size': '15px',
          'line-height': '1.3',
          'color': '#808080'
        },
        footStyle: {
          'position': 'relative',
          'line-height': '48px',
          'font-size': '18px',
          'display': 'flex'
        },
        btnStyle: {
          'position': 'relative',
          '-webkit-box-flex': '1',
          '-webkit-flex': '1',
          'flex': '1'
        }
      };
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // style
      var _getstyle = this.getstyle(),
          maskStyle = _getstyle.maskStyle,
          modalStyle = _getstyle.modalStyle,
          titleStyle = _getstyle.titleStyle,
          textStyle = _getstyle.textStyle,
          footStyle = _getstyle.footStyle,
          btnStyle = _getstyle.btnStyle; // configuration


      Object.assign(this.options, options);
      var config = this.options; // wrapper

      this.el = document.createElement('div');
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.2s linear'; // mask

      var mask = document.createElement('div');
      mask.setAttribute('style', inlineStyle(maskStyle)); // modal

      var modal = document.createElement('div');
      modal.setAttribute('style', inlineStyle(modalStyle)); // title
      // 解决兼容问题，添加样式，外部使用可覆盖
      modal.className = 'taro-modal'

      var titleCSS = config.title ? titleStyle : Object.assign({}, titleStyle, {
        display: 'none'
      });
      this.title = document.createElement('div');
      this.title.setAttribute('style', inlineStyle(titleCSS));
      this.title.textContent = config.title; // text

      var textCSS = config.title ? textStyle : Object.assign({}, textStyle, {
        padding: '40px 20px 26px',
        color: '#353535'
      });
      this.text = document.createElement('div');
      this.text.setAttribute('style', inlineStyle(textCSS));
      this.text.textContent = config.content; // foot

      var foot = document.createElement('div');
      foot.className = 'taro-modal__foot';
      foot.setAttribute('style', inlineStyle(footStyle)); // cancel button

      var cancelCSS = Object.assign({}, btnStyle, {
        color: config.cancelColor,
        display: config.showCancel ? 'block' : 'none'
      });
      this.cancel = document.createElement('div');
      this.cancel.className = 'taro-model__btn';
      this.cancel.setAttribute('style', inlineStyle(cancelCSS));
      this.cancel.textContent = config.cancelText;

      this.cancel.onclick = function () {
        _this.hide();

        var res = _this.getRes('cancel');

        config.success(res);
        config.complete(res);

        _this.resolveHandler(res);
      }; // confirm button


      this.confirm = document.createElement('div');
      this.confirm.className = 'taro-model__btn';
      this.confirm.setAttribute('style', inlineStyle(btnStyle));
      this.confirm.style.color = config.confirmColor;
      this.confirm.textContent = config.confirmText;

      this.confirm.onclick = function () {
        _this.hide();

        var res = _this.getRes('confirm');

        config.success(res);
        config.complete(res);

        _this.resolveHandler(res);
      }; // result


      foot.appendChild(this.cancel);
      foot.appendChild(this.confirm);
      modal.appendChild(this.title);
      modal.appendChild(this.text);
      modal.appendChild(foot);
      this.el.appendChild(mask);
      this.el.appendChild(modal); // show immediately

      document.body.appendChild(this.el);
      setTimeout(function () {
        _this.el.style.opacity = '1';
      }, 0);
      return new Promise(function (resolve) {
        return _this.resolveHandler = resolve;
      });
    }
  }, {
    key: "getRes",
    value: function getRes(type) {
      var res = {
        errMsg: 'showModal:ok',
        cancel: false,
        confirm: false
      };
      res[type] = true;
      return res;
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = this.options; // title & text

      var _getstyle2 = this.getstyle(),
          textStyle = _getstyle2.textStyle;

      if (config.title !== options.title) {
        this.title.textContent = options.title;

        if (!options.title) {
          // block => none
          this.title.style.display = 'none';
          var textCSS = Object.assign({}, textStyle, {
            padding: '40px 20px 26px',
            color: '#353535'
          });
          this.text.setAttribute('style', inlineStyle(textCSS));
        } else if (!config.title) {
          // none => block
          this.title.style.display = 'block';
          this.text.setAttribute('style', inlineStyle(textStyle));
        }
      }

      if (config.content !== options.content) this.text.textContent = options.content; // showCancel

      if (config.showCancel !== options.showCancel) this.cancel.style.display = options.showCancel ? 'block' : 'none'; // cancelText

      if (config.cancelText !== options.cancelText) this.cancel.textContent = options.cancelText; // cancelColor

      if (config.cancelColor !== options.cancelColor) this.cancel.style.color = options.cancelColor; // confirmText

      if (config.confirmText !== options.confirmText) this.confirm.textContent = options.confirmText; // confirmColor

      if (config.confirmColor !== options.confirmColor) this.confirm.style.color = options.confirmColor;
      Object.assign(config, options); // cbs

      this.cancel.onclick = function () {
        _this2.hide();

        var res = _this2.getRes('cancel');

        config.success(res);
        config.complete(res);

        _this2.resolveHandler(res);
      };

      this.confirm.onclick = function () {
        _this2.hide();

        var res = _this2.getRes('confirm');

        config.success(res);
        config.complete(res);

        _this2.resolveHandler(res);
      }; // show


      this.el.style.display = 'block';
      setTimeout(function () {
        _this2.el.style.opacity = '1';
      }, 0);
      return new Promise(function (resolve) {
        return _this2.resolveHandler = resolve;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      setTimeout(function () {
        _this3.el.style.opacity = '0';
        setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 200);
      }, 0);
    }
  }]);

  return Modal;
}();

var ActionSheet =
/*#__PURE__*/
function () {
  function ActionSheet() {
    _classCallCheck(this, ActionSheet);

    var noop = function noop() {};

    this.options = {
      itemList: [],
      itemColor: '#000000',
      success: noop,
      fail: noop,
      complete: noop
    };
  }

  _createClass(ActionSheet, [{
    key: "getstyle",
    value: function getstyle(name) {
      return {
        maskStyle: {
          'position': 'fixed',
          'z-index': '1000',
          'top': '0',
          'right': '0',
          'left': '0',
          'bottom': '0',
          'background': 'rgba(0,0,0,0.6)'
        },
        actionSheetStyle: {
          'z-index': '4999',
          'position': 'fixed',
          'left': '0',
          'bottom': '0',
          '-webkit-transform': 'translate(0, 100%)',
          'transform': 'translate(0, 100%)',
          'width': '100%',
          'line-height': '1.6',
          'background': '#EFEFF4',
          '-webkit-transition': '-webkit-transform .3s',
          'transition': 'transform .3s'
        },
        menuStyle: {
          'background-color': '#FCFCFD'
        },
        cellStyle: {
          'position': 'relative',
          'padding': '10px 0',
          'text-align': 'center',
          'font-size': '18px'
        },
        cancelStyle: {
          'margin-top': '6px',
          'padding': '10px 0',
          'text-align': 'center',
          'font-size': '18px',
          'color': '#000000',
          'background-color': '#FCFCFD'
        }
      };
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // style
      var _getstyle = this.getstyle(),
          maskStyle = _getstyle.maskStyle,
          actionSheetStyle = _getstyle.actionSheetStyle,
          menuStyle = _getstyle.menuStyle,
          cellStyle = _getstyle.cellStyle,
          cancelStyle = _getstyle.cancelStyle; // configuration


      Object.assign(this.options, options);
      var config = this.options; // wrapper

      this.el = document.createElement('div');
      this.el.style.opacity = '0';
      this.el.style.transition = 'opacity 0.2s linear'; // mask

      var mask = document.createElement('div');
      mask.setAttribute('style', inlineStyle(maskStyle)); // actionSheet

      this.actionSheet = document.createElement('div');
      this.actionSheet.setAttribute('style', inlineStyle(actionSheetStyle)); // menu

      this.menu = document.createElement('div');
      this.menu.setAttribute('style', inlineStyle(Object.assign({}, menuStyle, {
        color: config.itemColor
      }))); // cells

      this.cells = options.itemList.map(function (item, index) {
        var cell = document.createElement('div');
        cell.className = 'taro-actionsheet__cell';
        cell.setAttribute('style', inlineStyle(cellStyle));
        cell.textContent = item;
        cell.dataset.tapIndex = index;

        cell.onclick = function (e) {
          return _this.onCellClick(e);
        };

        return cell;
      }); // cancel

      this.cancel = document.createElement('div');
      this.cancel.setAttribute('style', inlineStyle(cancelStyle));
      this.cancel.textContent = '取消'; // result

      this.cells.forEach(function (item) {
        return _this.menu.appendChild(item);
      });
      this.actionSheet.appendChild(this.menu);
      this.actionSheet.appendChild(this.cancel);
      this.el.appendChild(mask);
      this.el.appendChild(this.actionSheet); // callbacks

      var cb = function cb() {
        _this.hide();

        var res = {
          errMsg: 'showActionSheet:fail cancel'
        };
        config.fail(res);
        config.complete(res);

        _this.rejectHandler(res);
      };

      mask.onclick = cb;
      this.cancel.onclick = cb; // show immediately

      document.body.appendChild(this.el);
      setTimeout(function () {
        _this.el.style.opacity = '1';
        _this.actionSheet.style.transform = 'translate(0, 0)';
      }, 0);
      return new Promise(function (resolve, reject) {
        _this.resolveHandler = resolve;
        _this.rejectHandler = reject;
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = this.options; // itemColor

      if (config.itemColor !== options.itemColor) this.menu.style.color = options.itemColor;
      Object.assign(config, options); // cells

      var _getstyle2 = this.getstyle(),
          cellStyle = _getstyle2.cellStyle;

      options.itemList.forEach(function (item, index) {
        if (_this2.cells[index]) {
          if (_this2.cells[index].textContent === item) {// content no change
          } else {
            // assign new content
            _this2.cells[index].textContent = item;
          }
        } else {
          // create new cell
          var cell = document.createElement('div');
          cell.className = 'taro-actionsheet__cell';
          cell.setAttribute('style', inlineStyle(cellStyle));
          cell.textContent = item;
          cell.dataset.tapIndex = index;

          cell.onclick = function (e) {
            return _this2.onCellClick(e);
          };

          _this2.cells.push(cell);

          _this2.menu.appendChild(cell);
        }
      });
      var cellsLen = this.cells.length;
      var itemListLen = options.itemList.length;

      if (cellsLen > itemListLen) {
        for (var i = itemListLen; i < cellsLen; i++) {
          this.menu.removeChild(this.cells[i]);
        }

        this.cells.splice(itemListLen, cellsLen - itemListLen);
      } // show


      this.el.style.display = 'block';
      setTimeout(function () {
        _this2.el.style.opacity = '1';
        _this2.actionSheet.style.transform = 'translate(0, 0)';
      }, 0);
      return new Promise(function (resolve, reject) {
        _this2.resolveHandler = resolve;
        _this2.rejectHandler = reject;
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(e) {
      this.hide();
      var res = {
        errMsg: 'showActionSheet:ok',
        tapIndex: +e.currentTarget.dataset.tapIndex
      };
      this.options.success(res);
      this.options.complete(res);
      this.resolveHandler(res);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      setTimeout(function () {
        _this3.el.style.opacity = '0';
        _this3.actionSheet.style.transform = 'translate(0, 100%)';
        setTimeout(function () {
          _this3.el.style.display = 'none';
        }, 200);
      }, 0);
    }
  }]);

  return ActionSheet;
}();

var status = 'default'; // inject necessary style

function init(doc) {
  if (status === 'ready') return;
  var taroStyle = doc.createElement('style');
  taroStyle.textContent = '@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJWs0t/AAABfAAAAFZjbWFwqVgGvgAAAeAAAAGGZ2x5Zph7qG0AAANwAAAAdGhlYWQRFoGhAAAA4AAAADZoaGVhCCsD7AAAALwAAAAkaG10eAg0AAAAAAHUAAAADGxvY2EADAA6AAADaAAAAAhtYXhwAQ4AJAAAARgAAAAgbmFtZYrphEEAAAPkAAACVXBvc3S3shtSAAAGPAAAADUAAQAAA+gAAABaA+gAAAAAA+gAAQAAAAAAAAAAAAAAAAAAAAMAAQAAAAEAAADih+FfDzz1AAsD6AAAAADXB57LAAAAANcHnssAAP/sA+gDOgAAAAgAAgAAAAAAAAABAAAAAwAYAAEAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQK8AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjqCAPoAAAAWgPoABQAAAABAAAAAAAAA+gAAABkAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAV4AAQAAAAAAWAADAAEAAAAsAAMACgAAAV4ABAAsAAAABgAEAAEAAgB46gj//wAAAHjqCP//AAAAAAABAAYABgAAAAEAAgAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAKAAAAAAAAAACAAAAeAAAAHgAAAABAADqCAAA6ggAAAACAAAAAAAAAAwAOgABAAD/7AAyABQAAgAANzMVFB4UKAAAAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAAAEgDeAAEAAAAAAAAAHQAAAAEAAAAAAAEABAAdAAEAAAAAAAIABwAhAAEAAAAAAAMABAAoAAEAAAAAAAQABAAsAAEAAAAAAAUACwAwAAEAAAAAAAYABAA7AAEAAAAAAAoAKwA/AAEAAAAAAAsAEwBqAAMAAQQJAAAAOgB9AAMAAQQJAAEACAC3AAMAAQQJAAIADgC/AAMAAQQJAAMACADNAAMAAQQJAAQACADVAAMAAQQJAAUAFgDdAAMAAQQJAAYACADzAAMAAQQJAAoAVgD7AAMAAQQJAAsAJgFRCiAgQ3JlYXRlZCBieSBmb250LWNhcnJpZXIKICB3ZXVpUmVndWxhcndldWl3ZXVpVmVyc2lvbiAxLjB3ZXVpR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgAgACAAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGYAbwBuAHQALQBjAGEAcgByAGkAZQByAAoAIAAgAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAABeAd1bmlFQTA4AAAAAAA=") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}';
  doc.querySelector('head').appendChild(taroStyle);
  status = 'ready';
}

var toast = new Toast();
var modal = new Modal();
var actionSheet = new ActionSheet();

function showToast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    icon: 'success',
    image: '',
    duration: 1500,
    mask: false
  };
  options = Object.assign({}, _default, options);
  options._type = 'toast'; // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showToast',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  if (typeof options.duration !== 'number') {
    return handler({
      errMsg: getParameterError({
        name: 'showToast',
        para: 'duration',
        correct: 'Number',
        wrong: options.duration
      })
    });
  }

  if (options.image && typeof options.image !== 'string') options.image = '';
  options.mask = !!options.mask;
  if (!toast.el) return toast.create(options);
  return toast.show(options);
}

function hideToast() {
  if (!toast.el) return;
  toast.hide(0, 'toast');
}

function showLoading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    mask: false
  };
  var config = {
    icon: 'loading',
    image: '',
    duration: -1
  };
  options = Object.assign({}, _default, options, config);
  options._type = 'loading'; // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showLoading',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  options.mask = !!options.mask;
  if (!toast.el) return toast.create(options);
  return toast.show(options);
}

function hideLoading() {
  if (!toast.el) return;
  toast.hide(0, 'loading');
}

function showModal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    title: '',
    content: '',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#000000',
    confirmText: '确定',
    confirmColor: '#3CC51F'
  };
  options = Object.assign({}, _default, options); // verify options

  var handler = errorHandler(options.fail, options.complete);

  if (typeof options.title !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'title',
        correct: 'String',
        wrong: options.title
      })
    });
  }

  if (typeof options.content !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'content',
        correct: 'String',
        wrong: options.content
      })
    });
  }

  if (typeof options.cancelText !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'cancelText',
        correct: 'String',
        wrong: options.cancelText
      })
    });
  }

  if (options.cancelText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
    return handler({
      errMsg: 'showModal:fail cancelText length should not larger then 4 Chinese characters'
    });
  }

  if (typeof options.confirmText !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'confirmText',
        correct: 'String',
        wrong: options.confirmText
      })
    });
  }

  if (options.confirmText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
    return handler({
      errMsg: 'showModal:fail confirmText length should not larger then 4 Chinese characters'
    });
  }

  if (typeof options.cancelColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'cancelColor',
        correct: 'String',
        wrong: options.cancelColor
      })
    });
  }

  if (typeof options.confirmColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showModal',
        para: 'confirmColor',
        correct: 'String',
        wrong: options.confirmColor
      })
    });
  }

  options.showCancel = !!options.showCancel;
  if (!modal.el) return modal.create(options);
  return modal.show(options);
}

function showActionSheet() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  init(document);
  var _default = {
    itemColor: '#000000'
  };
  options = Object.assign({}, _default, options); // verify options

  var handler = errorHandler(options.fail, options.complete); // list item String

  if (!Array.isArray(options.itemList)) {
    return handler({
      errMsg: getParameterError({
        name: 'showActionSheet',
        para: 'itemList',
        correct: 'Array',
        wrong: options.itemList
      })
    });
  }

  if (options.itemList.length < 1) {
    return handler({
      errMsg: 'showActionSheet:fail parameter error: parameter.itemList should have at least 1 item'
    });
  }

  if (options.itemList.length > 6) {
    return handler({
      errMsg: 'showActionSheet:fail parameter error: parameter.itemList should not be large than 6'
    });
  }

  for (var i = 0; i < options.itemList.length; i++) {
    if (typeof options.itemList[i] !== 'string') {
      return handler({
        errMsg: getParameterError({
          name: 'showActionSheet',
          para: "itemList[".concat(i, "]"),
          correct: 'String',
          wrong: options.itemList[i]
        })
      });
    }
  }

  if (typeof options.itemColor !== 'string') {
    return handler({
      errMsg: getParameterError({
        name: 'showActionSheet',
        para: 'itemColor',
        correct: 'String',
        wrong: options.itemColor
      })
    });
  }

  if (!actionSheet.el) return actionSheet.create(options);
  return actionSheet.show(options);
}

var interactive = /*#__PURE__*/Object.freeze({
  showToast: showToast,
  hideToast: hideToast,
  showLoading: showLoading,
  hideLoading: hideLoading,
  showModal: showModal,
  showActionSheet: showActionSheet
});

var SocketTask =
/*#__PURE__*/
function () {
  function SocketTask(url, protocols) {
    _classCallCheck(this, SocketTask);

    if (protocols && protocols.length) {
      this.ws = new WebSocket(url, protocols);
    } else {
      this.ws = new WebSocket(url);
    }

    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSING = 2;
    this.CLOSED = 3;
  }

  _createClass(SocketTask, [{
    key: "send",
    value: function send() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (_typeof(obj) !== 'object' || !obj) obj = {};
      var _obj = obj,
          _obj$data = _obj.data,
          data = _obj$data === void 0 ? '' : _obj$data,
          success = _obj.success,
          fail = _obj.fail,
          complete = _obj.complete;

      if (this.readyState !== 1) {
        var _res = {
          errMsg: 'SocketTask.send:fail SocketTask.readState is not OPEN'
        };
        console.error(_res.errMsg);
        typeof fail === 'function' && fail(_res);
        typeof complete === 'function' && complete(_res);
        return Promise.reject(_res);
      }

      this.ws.send(data);
      var res = {
        errMsg: 'sendSocketMessage:ok'
      };
      typeof success === 'function' && success(res);
      typeof complete === 'function' && complete(res);
      return Promise.resolve(res);
    }
  }, {
    key: "close",
    value: function close() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (_typeof(obj) !== 'object' || !obj) obj = {};
      var _obj2 = obj,
          _obj2$code = _obj2.code,
          code = _obj2$code === void 0 ? 1000 : _obj2$code,
          _obj2$reason = _obj2.reason,
          reason = _obj2$reason === void 0 ? 'server complete,close' : _obj2$reason,
          success = _obj2.success,
          complete = _obj2.complete;
      this.closeDetail = {
        code: code,
        reason: reason // 主动断开时需要重置链接数

      };
      this._destroyWhenClose && this._destroyWhenClose();
      this.ws.close();
      var res = {
        errMsg: 'closeSocket:ok'
      };
      typeof success === 'function' && success(res);
      typeof complete === 'function' && complete(res);
      return Promise.resolve(res);
    }
  }, {
    key: "onOpen",
    value: function onOpen(func) {
      this.ws.onopen = func;
    }
  }, {
    key: "onMessage",
    value: function onMessage(func) {
      this.ws.onmessage = func;
    }
  }, {
    key: "onClose",
    value: function onClose(func) {
      var _this = this;

      this.ws.onclose = function () {
        // 若服务器方断掉也需要重置链接数
        _this._destroyWhenClose && _this._destroyWhenClose();
        func(_this.closeDetail || {
          code: 1006,
          reason: 'abnormal closure'
        });
      };
    }
  }, {
    key: "onError",
    value: function onError(func) {
      this.ws.onerror = func;
    }
  }, {
    key: "readyState",
    get: function get() {
      return this.ws.readyState;
    }
  }]);

  return SocketTask;
}();

var socketTasks = [];
var socketsCounter = 1;

function connectSocket(options) {
  var name = 'connectSocket';
  return new Promise(function (resolve, reject) {
    // options must be an Object
    var isObject = shouleBeObject(options);

    if (!isObject.res) {
      var _res = {
        errMsg: "".concat(name).concat(isObject.msg)
      };
      console.error(_res.errMsg);
      return reject(_res);
    }

    var url = options.url,
        protocols = options.protocols,
        success = options.success,
        fail = options.fail,
        complete = options.complete;
    var res = {
      errMsg: 'connectSocket:ok' // options.url must be String

    };

    if (typeof url !== 'string') {
      res.errMsg = getParameterError({
        name: name,
        para: 'url',
        correct: 'String',
        wrong: url
      });
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    } // options.url must be invalid


    if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
      res.errMsg = "request:fail invalid url \"".concat(url, "\"");
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    } // protocols must be array


    var _protocols = Array.isArray(protocols) ? protocols : null; // 2 connection at most


    if (socketTasks.length > 1) {
      res.errMsg = '同时最多发起 2 个 socket 请求，更多请参考文档。';
      console.error(res.errMsg);
      typeof fail === 'function' && fail(res);
      typeof complete === 'function' && complete(res);
      return reject(res);
    }

    var task = new SocketTask(url, _protocols);

    task._destroyWhenClose = function () {
      var _this = this;

      socketTasks = socketTasks.filter(function (socketTask) {
        return socketTask !== _this;
      });
    };

    socketTasks.push(task);
    res.socketTaskId = socketsCounter++;
    typeof success === 'function' && success(res);
    typeof complete === 'function' && complete(res);
    return resolve(task);
  });
}

function onSocketOpen() {
  console.warn('Deprecated.Please use socketTask.onOpen instead.');
}

function onSocketError() {
  console.warn('Deprecated.Please use socketTask.onError instead.');
}

function sendSocketMessage() {
  console.warn('Deprecated.Please use socketTask.send instead.');
}

function onSocketMessage() {
  console.warn('Deprecated.Please use socketTask.onMessage instead.');
}

function closeSocket() {
  console.warn('Deprecated.Please use socketTask.close instead.');
}

function onSocketClose() {
  console.warn('Deprecated.Please use socketTask.onClose instead.');
}

var webSocket = {
  connectSocket: connectSocket,
  onSocketOpen: onSocketOpen,
  onSocketError: onSocketError,
  sendSocketMessage: sendSocketMessage,
  onSocketMessage: onSocketMessage,
  closeSocket: closeSocket,
  onSocketClose: onSocketClose
};

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var url = options.url;
  var params = {};
  var res = {};

  if (options.jsonp) {
    params.params = options.data;
    params.cache = options.cache;

    if (typeof options.jsonp === 'string') {
      params.name = options.jsonp;
    }

    return jsonp$1(url, params).then(function (data) {
      res.statusCode = 200;
      res.data = data;
      return res;
    });
  }

  params.body = options.data;
  params.headers = options.header;
  params.method = options.method || 'GET';
  params.mode = options.mode;
  params.credentials = options.credentials;
  params.cache = options.cache;
  return fetch(url, params).then(function (response) {
    res.statusCode = response.status;
    res.header = response.headers;

    if (options.responseType === 'arraybuffer') {
      return response.arrayBuffer();
    }

    if (options.dataType === 'json' || typeof options.dataType === 'undefined') {
      return response.json();
    }

    if (options.responseType === 'text') {
      return response.text();
    }

    return Promise.resolve(null);
  }).then(function (data) {
    res.data = data;
    return res;
  });
}

function processApis(taro) {
  var onAndSyncApis = {
    onSocketOpen: true,
    onSocketError: true,
    onSocketMessage: true,
    onSocketClose: true,
    onBackgroundAudioPlay: true,
    onBackgroundAudioPause: true,
    onBackgroundAudioStop: true,
    onNetworkStatusChange: true,
    onAccelerometerChange: true,
    onCompassChange: true,
    onBluetoothAdapterStateChange: true,
    onBluetoothDeviceFound: true,
    onBLEConnectionStateChange: true,
    onBLECharacteristicValueChange: true,
    onBeaconUpdate: true,
    onBeaconServiceChange: true,
    onUserCaptureScreen: true,
    onHCEMessage: true,
    onGetWifiList: true,
    onWifiConnected: true,
    setStorageSync: true,
    getStorageSync: true,
    getStorageInfoSync: true,
    removeStorageSync: true,
    clearStorageSync: true,
    getSystemInfoSync: true,
    getExtConfigSync: true
  };
  var noPromiseApis = {
    // 媒体
    stopRecord: true,
    getRecorderManager: true,
    pauseVoice: true,
    stopVoice: true,
    pauseBackgroundAudio: true,
    stopBackgroundAudio: true,
    getBackgroundAudioManager: true,
    createAudioContext: true,
    createInnerAudioContext: true,
    createVideoContext: true,
    createCameraContext: true,
    navigateBack: true,
    // 位置
    createMapContext: true,
    // 设备
    canIUse: true,
    startAccelerometer: true,
    stopAccelerometer: true,
    startCompass: true,
    stopCompass: true,
    // 界面
    hideToast: true,
    hideLoading: true,
    showNavigationBarLoading: true,
    hideNavigationBarLoading: true,
    createAnimation: true,
    pageScrollTo: true,
    createSelectorQuery: true,
    createCanvasContext: true,
    createContext: true,
    drawCanvas: true,
    hideKeyboard: true,
    stopPullDownRefresh: true,
    // 拓展接口
    arrayBufferToBase64: true,
    base64ToArrayBuffer: true,
    getUpdateManager: true,
    createWorker: true
  };
  var otherApis = {
    // 网络
    uploadFile: true,
    downloadFile: true,
    connectSocket: true,
    sendSocketMessage: true,
    closeSocket: true,
    // 媒体
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    startRecord: true,
    playVoice: true,
    getBackgroundAudioPlayerState: true,
    playBackgroundAudio: true,
    seekBackgroundAudio: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    // 文件
    saveFile: true,
    getFileInfo: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    // 数据缓存
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    // 导航
    navigateTo: true,
    redirectTo: true,
    switchTab: true,
    reLaunch: true,
    // 位置
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    // 设备
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setClipboardData: true,
    getClipboardData: true,
    openBluetoothAdapter: true,
    closeBluetoothAdapter: true,
    getBluetoothAdapterState: true,
    startBluetoothDevicesDiscovery: true,
    stopBluetoothDevicesDiscovery: true,
    getBluetoothDevices: true,
    getConnectedBluetoothDevices: true,
    createBLEConnection: true,
    closeBLEConnection: true,
    getBLEDeviceServices: true,
    getBLEDeviceCharacteristics: true,
    readBLECharacteristicValue: true,
    writeBLECharacteristicValue: true,
    notifyBLECharacteristicValueChange: true,
    startBeaconDiscovery: true,
    stopBeaconDiscovery: true,
    getBeacons: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    getHCEState: true,
    startHCE: true,
    stopHCE: true,
    sendHCEMessage: true,
    startWifi: true,
    stopWifi: true,
    connectWifi: true,
    getWifiList: true,
    setWifiList: true,
    getConnectedWifi: true,
    // 界面
    showToast: true,
    showLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    setTabBarBadge: true,
    removeTabBarBadge: true,
    showTabBarRedDot: true,
    hideTabBarRedDot: true,
    setTabBarStyle: true,
    setTabBarItem: true,
    showTabBar: true,
    hideTabBar: true,
    setTopBarText: true,
    startPullDownRefresh: true,
    // 第三方平台
    getExtConfig: true,
    // 开放接口
    login: true,
    authorize: true,
    getUserInfo: true,
    requestPayment: true,
    showShareMenu: true,
    hideShareMenu: true,
    updateShareMenu: true,
    getShareInfo: true,
    chooseAddress: true,
    addCard: true,
    openCard: true,
    openSetting: true,
    getSetting: true,
    getWeRunData: true,
    navigateToMiniProgram: true,
    navigateBackMiniProgram: true,
    chooseInvoiceTitle: true,
    checkIsSupportSoterAuthentication: true,
    startSoterAuthentication: true,
    checkIsSoterEnrolledInDevice: true //

  };
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  Object.keys(weApis).forEach(function (key) {
    taro[key] = function () {
      console.log("\u6682\u65F6\u4E0D\u652F\u6301 ".concat(key));
    };
  });
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = request;
  taro.createSelectorQuery = createSelectorQuery;
  Object.assign(taro, storage$1, interactive, webSocket);
}

var Component$1 =
/*#__PURE__*/
function (_Nerv$Component) {
  _inherits(Component, _Nerv$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "$app",
    get: function get() {
      if (!this.vnode) return {};
      if (!this._$app) this._$app = getApp(this);
      return this._$app;
    },
    set: function set(app) {
      console.warn('Please try not to set $app.');
    }
  }]);

  return Component;
}(Nerv.Component);
/**
 * 往上遍历直到找到根节点
 * @param  {Nerv Component} component 当前的组件实例
 * @return {Nerv Component}           根节点实例
 */


function getApp(component) {
  var vnode = component.vnode;
  if (!vnode) return {};
  if (vnode._owner) return getApp(vnode._owner);
  return component;
}

/* eslint-disable camelcase */
var index$1 = {
  initNativeApi: initNativeApi,
  Component: Component$1,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Events: Events,
  eventCenter: eventCenter,
  render: render,
  internal_safe_get: get,
  internal_safe_set: set,
  internal_dynamic_recursive: dynamicRecursive
};

exports.initNativeApi = initNativeApi;
exports.Component = Component$1;
exports.getEnv = getEnv;
exports.ENV_TYPE = ENV_TYPE;
exports.Events = Events;
exports.eventCenter = eventCenter;
exports.render = render;
exports.internal_safe_get = get;
exports.internal_safe_set = set;
exports.internal_dynamic_recursive = dynamicRecursive;
exports.default = index$1;
//# sourceMappingURL=index.js.map
