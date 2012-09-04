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
