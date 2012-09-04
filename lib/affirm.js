/*
 * affirm
 * https://github.com/clauswitt/affirm
 *
 * Copyright (c) 2012 Claus Witt
 * Licensed under the MIT license.
 */

function assert(bool, message) {
  message = message || 'Assert failed';
  if(!bool) throw new Error(message);
  return bool;
}

module.exports = {
  assertEquals: function(a, b, msg) {
    return assert((a == b), msg);
  },
  assertIdentical: function(a,b, msg) {
    return assert((a === b), msg);
  },
  assertInstanceOf: function(a, type, msg) {
    return assert((a instanceof type), msg);
  },
  assertIsNumber: function(a, msg) {
    return assert((!isNaN(a)), msg);
  },
  assertNumberMinimum: function(a, min, msg) {
    return assert((this.assertIsNumber(a, msg) && (a>=min)), msg);
  },
  assertNumberMaximum: function(a, max, msg) {
    return assert((this.assertIsNumber(a, msg) && (a<=max)), msg);
  },
  assertNumberInRange: function(a, min, max, msg) {
    return assert((this.assertNumberMinimum(a, min, msg) && this.assertNumberMaximum(a, max, msg)), msg);
  },
  assertIsArray: function(a, msg) {
    return this.assertInstanceOf(a, Array, msg);
  },
  assertArrayLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length == length), msg);
  },
  assertArrayMaxLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length <= length), msg);
  },
  assertArrayMinLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length >= length), msg);
  },
  assertArrayLengthInRange: function(a, min, max, msg) {
    return assert((this.assertArrayMinLength(a, min, msg)&&this.assertArrayMaxLength(a, max, msg)), msg);
  },
  assertIsString: function(a, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((typeof a == 'string' && (isNaN(a)||allowNumbers)), msg);
  },
  assertStringMaxLength: function(a, length, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((this.assertIsString(a, allowNumbers) && a.length <= length), msg);
  },
  assertStringMinLength: function(a, length, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((this.assertIsString(a, allowNumbers) && a.length >= length), msg);
  },
  assertStringLengthInRange: function(a, min, max, allowNumbers, msg) {
    return assert((this.assertStringMinLength(a, min, allowNumbers, msg)&&this.assertStringMaxLength(a, max, allowNumbers, msg)), msg);
  },
  assertStringStartsWith: function(a, start, msg) {
    return assert((this.assertIsString(a, msg) && a.indexOf(start)===0), msg);
  },
  assertStringEndsWith: function(a, end, msg) {
    return assert((this.assertIsString(a, msg) && a.indexOf(end, a.length - end.length) !== -1), msg);
  },
  assertStringMatches: function(a, match, msg) {
    return assert((this.assertIsString(a, msg) && a.match(match)!==null), msg);
  },
  assertObjectHasKey: function(a, key, msg) {
    return assert(a.hasOwnProperty(key), msg);
  }
};