const assert = require('assert');
const longestWord = require('../word-crush/longest word');

describe('longestWord function',function(){
    it('should find the longest word in the sentence', function(){
        assert.equal(longestWord('function can be used to return an object'), 'function');
        assert.equal(longestWord('function and sentence are both long'), 'sentence');
    })
})
