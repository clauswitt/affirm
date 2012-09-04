var affirm = require('../lib/affirm.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(5);
    
    var array = [];
    var object = {};



    test.throws(
      function() {
        affirm.assertInstanceOf(object,Array);
      }, 
      Error, 
      'an object is not an array'
    );

    test.throws(
      function() {
        affirm.assertInstanceOf("a string",String);
      }, 
      Error, 
      'A string literal is not a string object - for some reason.'
    );

     test.doesNotThrow(
      function() {
        affirm.assertInstanceOf(object,Object);
      }, 
      Error, 
      'An object is an Object'
    );

      test.doesNotThrow(
      function() {
        affirm.assertInstanceOf(array,Array);
      }, 
      Error, 
      'An array is an array'
    );

    test.doesNotThrow(
      function() {
        affirm.assertInstanceOf(array,Object);
      }, 
      Error, 
      'An array is also an Object'
    );


    

    test.done();
  }
};
