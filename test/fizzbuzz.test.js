const assert = require('assert');
const fizzBuzz = require('../fizz buzz/main');

describe('fizzBuzz function', function() {
    it('should return fizz when the number is divisiable by 3', function() {
        assert.deepEqual(fizzBuzz(1), 1);
        assert.deepEqual(fizzBuzz(3), 'fizz');
        assert.deepEqual(fizzBuzz(21), 'fizz');
        assert.deepEqual(fizzBuzz(9), 'fizz');

    });
    it('should return buzz when the number is divisiable by 5', function() {
        assert.deepEqual(fizzBuzz(4), 4);
        assert.deepEqual(fizzBuzz(5), 'buzz');
        assert.deepEqual(fizzBuzz(20), 'buzz');

    });
    it('should return Fizz-Buzz when the number is divisiable by 3 and 5', function() {
        assert.deepEqual(fizzBuzz(15), 'fizz-buzz');
        assert.deepEqual(fizzBuzz(11), 11);
        assert.deepEqual(fizzBuzz(60), 'fizz-buzz');

    });
})
