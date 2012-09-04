/*!
 * affirm
 * https://github.com/clauswitt/affirm
 *
 * Copyright (c) 2012 Claus Witt
 * Licensed under the MIT license.
 */


var chainable = false;
var throwError = true;


function assert(bool, message) {
  message = message || 'Assert failed';
  if(!bool && throwError) throw new Error(message);
  if(chainable) return obj;
  return bool;
}


var obj = {
//Assert that two variables have equal value
  assertEquals: function(a, b, msg) {
    return assert((a == b), msg);
  },
//Assert that two variables are identical (references the same object)
  assertIdentical: function(a,b, msg) {
    return assert((a === b), msg);
  },
//Assert that a variable is  an instance of a given type
  assertInstanceOf: function(a, type, msg) {
    return assert((a instanceof type), msg);
  },
//Assert that a variable is a number (or a string that can be parsed to a number)
  assertIsNumber: function(a, msg) {
    return assert((!isNaN(a)), msg);
  },
//Assert that the number is above (or equal to) min
  assertNumberMinimum: function(a, min, msg) {
    return assert((this.assertIsNumber(a, msg) && (a>=min)), msg);
  },
// Assert that the number is below (or equal to) max 
  assertNumberMaximum: function(a, max, msg) {
    return assert((this.assertIsNumber(a, msg) && (a<=max)), msg);
  },
//Assert that number is with the range (both inclusive)
  assertNumberInRange: function(a, min, max, msg) {
    return assert((this.assertNumberMinimum(a, min, msg) && this.assertNumberMaximum(a, max, msg)), msg);
  },
//Assert that the value is an array
  assertIsArray: function(a, msg) {
    return this.assertInstanceOf(a, Array, msg);
  },
//Assert that the array length is exactly equal to length
  assertArrayLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length == length), msg);
  },
//Assert that the array length is less than or equal to length
  assertArrayMaxLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length <= length), msg);
  },
 //Assert that the array length is more than or equal to length
  assertArrayMinLength: function(a, length, msg) {
    return assert((this.assertIsArray(a, msg) && a.length >= length), msg);
  },
//Assert that the array length is within the range (both inclusive)
  assertArrayLengthInRange: function(a, min, max, msg) {
    return assert((this.assertArrayMinLength(a, min, msg)&&this.assertArrayMaxLength(a, max, msg)), msg);
  },
//Assert that the value is a string (and wether to allow strings that could be parsed as a number)

  assertIsString: function(a, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((typeof a == 'string' && (isNaN(a)||allowNumbers)), msg);
  },
//Assert that the string length is less than or equal to max

  assertStringMaxLength: function(a, length, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((this.assertIsString(a, allowNumbers) && a.length <= length), msg);
  },
//Assert that the string length is more than or equal to min

  assertStringMinLength: function(a, length, allowNumbers, msg) {
    allowNumbers = allowNumbers || true;
    return assert((this.assertIsString(a, allowNumbers) && a.length >= length), msg);
  },
//Assert that the string length is within the range

  assertStringLengthInRange: function(a, min, max, allowNumbers, msg) {
    return assert((this.assertStringMinLength(a, min, allowNumbers, msg)&&this.assertStringMaxLength(a, max, allowNumbers, msg)), msg);
  },
//Assert that the string string starts with the substring

  assertStringStartsWith: function(a, start, msg) {
    return assert((this.assertIsString(a, msg) && a.indexOf(start)===0), msg);
  },
//Assert that the string string ends with the substring

  assertStringEndsWith: function(a, end, msg) {
    return assert((this.assertIsString(a, msg) && a.indexOf(end, a.length - end.length) !== -1), msg);
  },
//Assert that the string string matches the string/regex supplied. This just checks wether the match is part of the string. 
//
// Use regex and ^$ pairs to check the complete string. 
  assertStringMatches: function(a, match, msg) {
    return assert((this.assertIsString(a, msg) && a.match(match)!==null), msg);
  },
// Assert that the object has a key

  assertObjectHasKey: function(a, key, msg) {
    return assert(a.hasOwnProperty(key), msg);
  }, 
//Run a series of assertions
  assertAll: function(value, assertionObject) {
    for(var name in assertionObject) {
      if (assertionObject.hasOwnProperty(name)) {
        args = [value];
        args = args.concat(assertionObject[name]);
        this[name].apply(this, args);
      }
    }
  },
//affirm will default to throw error on assertion failure. Set this to false to get a return value false instead.
  setThrowError: function(value) {
    throwError = (value===true);
  },
//affirm will default to a value, if chainable is set, it returns itself instead, allowing to chain assertions. Should not be combined with settings throwError to false (since you will get no result).
  setChainable: function(value) {
    chainable = (value===true);
  }
};


module.exports = obj;