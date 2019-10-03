const assert = require('assert');
const {sortMe, getCommonElement} = require('../sort/main');

describe('sortMe function', () => {
    it('should return sorted array of numbers in ascending order', () => {
        assert.deepEqual(sortMe([7, 5, 2, 4, 3, 9, 10, 1]), [1, 2, 3, 4, 5, 7, 9, 10])
        assert.deepEqual(sortMe([7, 1, 0, 43, 6]), [0, 1, 6, 7, 43])
    });
});

describe('common element function', () => {
    it('should return common array of numbers in', () => {
        assert.deepEqual(getCommonElement([5, 2, 4, 3, 1], [2,4,6,8,10]), [2,4])
        assert.deepEqual(getCommonElement([2,3,4,5,6,7,8,10], [3,6,9,12,15]), [3,6])
    });
    it('should return empty array', () => {
        assert.deepEqual(getCommonElement([1,3,6], ""), [])
        assert.deepEqual(getCommonElement("", ""), [])
        assert.deepEqual(getCommonElement([], []), [])
        assert.deepEqual(getCommonElement(), [])
    });
});