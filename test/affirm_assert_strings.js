var affirm = require('../lib/affirm.js');

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(16);
    
    var array1 = [];
   
    var string1 = 'this is a string';
    var string2 = 'this is another string';

    var match1 = ' is ';
    var match2 = /^[A-Z]/;
    var match3 = /^[a-zA-Z\s]+$/;
    var match4 = 'shiznit';


    test.throws(
      function() {
        affirm.assertIsString(array1);
      }, 
      Error, 
      'an array is not a string'
    );

    test.doesNotThrow(
      function() {
        affirm.assertIsString(string1);
      }, 
      Error, 
      'a string is a string'
    );

    test.throws(
      function() {
        affirm.assertStringMaxLength(string1, 2);
      }, 
      Error, 
      'string is too long'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringMaxLength(string1, 100);
      }, 
      Error, 
      'string length is within max'
    );

    test.throws(
      function() {
        affirm.assertStringMinLength(string1, 100);
      }, 
      Error, 
      'string is too short'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringMinLength(string1, 2);
      }, 
      Error, 
      'string length is within min'
    );

    test.throws(
      function() {
        affirm.assertStringLengthInRange(string1, 4, 6);
      }, 
      Error, 
      'string is not within range'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringLengthInRange(string1, 2, 100);
      }, 
      Error, 
      'string length is within range'
    );


    test.throws(
      function() {
        affirm.assertStringStartsWith(string1, 'that');
      }, 
      Error, 
      'string does not start with that'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringStartsWith(string1, 'this');
      }, 
      Error, 
      'string starts with this'
    );
    

    test.throws(
      function() {
        affirm.assertStringEndsWith(string1, 'strong');
      }, 
      Error, 
      'string does not end with strong'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringEndsWith(string1, 'string');
      }, 
      Error, 
      'string ends with string'
    );

    test.throws(
      function() {
        affirm.assertStringMatches(string1, match2);
      }, 
      Error, 
      'string does not match'
    );

    test.throws(
      function() {
        affirm.assertStringMatches(string1, match4);
      }, 
      Error, 
      'string does not match'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringMatches(string1, match1);
      }, 
      Error, 
      'string matches'
    );

    test.doesNotThrow(
      function() {
        affirm.assertStringMatches(string1, match3);
      }, 
      Error, 
      'string matches'
    );
    
    
    test.done();
  }
};
