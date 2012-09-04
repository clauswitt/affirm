var affirm = require('../lib/affirm.js');

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(2);
    
    var array1 = [];
    var string1 = "tester";
    
    
    var assertions = {
      assertIsString: [], 
      assertStringMinLength: [2],
      assertStringMaxLength: [10], 
      assertStringMatches: [/^[e-t]+$/]
    };

    test.throws(
      function() {
        affirm.assertAll(array1, assertions);
      }, 
      Error, 
      'array does not pass assertions'
    );

    test.doesNotThrow(
      function() {
        affirm.assertAll(string1, assertions);
      }, 
      Error, 
      'string passes assertions'
    );
    

    test.done();
  }
};
