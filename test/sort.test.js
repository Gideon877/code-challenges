const assert = require('assert');
const sortMe = require('../sort/main');

describe('sortMe function', function() {
    it('should return sorted array of numbers in ascending order', function() {
        assert.deepEqual(sortMe([7, 5, 2, 4, 3, 9, 10, 1]), [1, 2, 3, 4, 5, 7, 9, 10])
        assert.deepEqual(sortMe([7, 1, 0, 43, 6]), [0, 1, 6, 7, 43])
    });
});
