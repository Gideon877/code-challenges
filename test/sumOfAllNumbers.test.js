const assert = require('assert');
const GetSum = require('../Math/sumOfAllNumbers');

describe('GetSum function', function() {
    it('should return the sum of all the numbers between including them too and return it.', function() {
        GetSum()
        assert.deepEqual(GetSum(5, -1), 14)
        assert.deepEqual(GetSum(-1, 2), 2);
    });
});
