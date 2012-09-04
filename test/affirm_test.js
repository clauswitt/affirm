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
    test.expect(4);
    // tests here
    test.equal(affirm.assertEquals(1,2), false, 'one does not equal two');
    test.equal(affirm.assertEquals(2,2), true, 'two does equal two');

    var array1 = [1, 2];
    var array2 = [1, 2];
    var array3 = array1;
    test.equal(affirm.assertIdentical(array1, array2), false, 'Not identical');
    test.equal(affirm.assertIdentical(array1, array3), true, 'Identical');
    test.done();
  }
};
