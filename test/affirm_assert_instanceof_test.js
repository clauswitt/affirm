var affirm = require('../lib/affirm.js');

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
