const assert = require('assert');
const rotateImage = require('../Rotate Image/main');

describe('rotateImage function', function() {

    it('should return array rotated 90 degree clockwise', function() {
        assert.deepEqual(rotateImage([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]), [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]);


    });

})
