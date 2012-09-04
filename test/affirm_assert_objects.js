var affirm = require('../lib/affirm.js');

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(3);
    
    var obj1 = {};
    var obj2 = {test: "string"};
    var obj3 = {hest: {test: "string"}};


    test.throws(
      function() {
        affirm.assertObjectHasKey(obj1,"test");
      }, 
      Error, 
      'obj1 does not have a test key'
    );

    test.doesNotThrow(
      function() {
        affirm.assertObjectHasKey(obj2,"test");
      }, 
      Error, 
      'obj2 does have a test key'
    );

    test.throws(
      function() {
        affirm.assertObjectHasKey(obj3,"test");
      }, 
      Error, 
      'obj3 does not have a test key, it is nested'
    );
    

    test.done();
  }
};
