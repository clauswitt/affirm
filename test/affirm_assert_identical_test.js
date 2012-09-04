var affirm = require('../lib/affirm.js');

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(2);
    
    var array1 = [];
    var array2 = []; 
    var array3 = array1;

    test.throws(
      function() {
        affirm.assertIdentical(array1,array2);
      }, 
      Error, 
      'two arrays are not equal'
    );

    test.doesNotThrow(
      function() {
        affirm.assertIdentical(array1,array3);
      }, 
      Error, 
      '1 and 3 references same array'
    );
    

    test.done();
  }
};
