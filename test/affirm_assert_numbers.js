var affirm = require('../lib/affirm.js');

/*
assertIsNumber: function(a, msg)
assertNumberMinimum: function(a, min, msg)
assertNumberMaximum: function(a, max, msg)
assertNumberInRange: function(a, min, max, msg)
*/

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(13);
    
    test.throws(
      function() {
        affirm.assertIsNumber("test");
      }, 
      Error, 
      'a string is not a number'
    );

    test.doesNotThrow(
      function() {
        affirm.assertIsNumber(10);
      }, 
      Error, 
      '10 is a number'
    );
    
    test.doesNotThrow(
      function() {
        affirm.assertIsNumber("19");
      }, 
      Error, 
      'The string nineteen is also a number'
    );
    
    test.throws(
      function() {
        affirm.assertNumberMinimum(10, 20);
      }, 
      Error, 
      '10 is not above (or equal to) 20'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberMinimum(20, 10);
      }, 
      Error, 
      '20 is above 10'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberMinimum(10, 10);
      }, 
      Error, 
      '10 is above - or rather equal to - 10'
    );

    test.throws(
      function() {
        affirm.assertNumberMaximum(20, 10);
      }, 
      Error, 
      '20 is not below (or equal to) 10'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberMaximum(10, 20);
      }, 
      Error, 
      '10 is below 20'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberMaximum(10, 10);
      }, 
      Error, 
      '10 is below - or rather equal to - 10'
    );


    test.throws(
      function() {
        affirm.assertNumberInRange(20, 10, 19);
      }, 
      Error, 
      '20 is not in the 10-19 range'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberInRange(10, 0, 100);
      }, 
      Error, 
      '10 is in the 0-100 range'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberInRange(5, 1, 5);
      }, 
      Error, 
      '5 is in the 1-5 range'
    );

    test.doesNotThrow(
      function() {
        affirm.assertNumberInRange(1, 1, 5);
      }, 
      Error, 
      '1 is in the 1-5 range'
    );    

    test.done();
  }
};
