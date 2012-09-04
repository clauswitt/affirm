var affirm = require('../lib/affirm.js');

/*
assertIsArray: function(a, msg) 
assertArrayLength: function(a, length, msg) 
assertArrayMaxLength: function(a, length, msg) 
assertArrayMinLength: function(a, length, msg)
assertArrayLengthInRange: function(a, min, max, msg)
*/

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(10);
    
    var array1 = [];
    var array2 = [1,2,3,4]; 
    var array3 = [1,2,3,4,5,6];
    var string = "";

    test.throws(
      function() {
        affirm.assertIsArray(string);
      }, 
      Error, 
      'a string is not an array'
    );

    test.doesNotThrow(
      function() {
        affirm.assertIsArray(array1);
      }, 
      Error, 
      'An array is an array'
    );

    test.throws(
      function() {
        affirm.assertArrayLength(array2, 100);
      }, 
      Error, 
      'array does not have 100 elements'
    );

    test.doesNotThrow(
      function() {
        affirm.assertArrayLength(array2, 4);
      }, 
      Error, 
      'array has four elements'
    );


    test.throws(
      function() {
        affirm.assertArrayMaxLength(array3, 2);
      }, 
      Error, 
      'array has more than 2 elements'
    );

    test.doesNotThrow(
      function() {
        affirm.assertArrayMaxLength(array3, 100);
      }, 
      Error, 
      'array has less than 100 elements'
    );
    
    test.throws(
      function() {
        affirm.assertArrayMinLength(array3, 10);
      }, 
      Error, 
      'array has less than 10 elements'
    );

    test.doesNotThrow(
      function() {
        affirm.assertArrayMinLength(array3, 2);
      }, 
      Error, 
      'array has more than 2 elements'
    );

    test.throws(
      function() {
        affirm.assertArrayLengthInRange(array3, 1, 3);
      }, 
      Error, 
      'count of array elements does not fit into the 1-3 range'
    );

    test.doesNotThrow(
      function() {
        affirm.assertArrayLengthInRange(array3, 2, 10);
      }, 
      Error, 
      'count of array elements fits into the 2-10 range'
    );

    


    test.done();
  }
};
