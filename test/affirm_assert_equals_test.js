var affirm = require('../lib/affirm.js');

exports['affirm'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(2);
    
    test.throws(
      function() {
        affirm.assertEquals(1,2);
      }, 
      Error, 
      'one does not equal two'
    );

    test.doesNotThrow(
      function() {
        affirm.assertEquals(2,2);
      }, 
      Error, 
      '2 equals two'
    );
    

    test.done();
  }
};
