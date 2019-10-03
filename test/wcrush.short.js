const assert = require('assert');
const shortestWord = require('../word-crush/shortest word');

describe('shortestWord function', function() {
    it('return the last short word in a sentence', function() {
        assert.equal(shortestWord('return the last short word in a sentence'), 'a')
        assert.equal(shortestWord('John is not Johnny ok'), 'ok')
    })
})
