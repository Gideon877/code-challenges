const assert = require('assert');
const wordCount = require('../word crush/word count');

describe('Word and letters count functions', function() {
    it('should return number of words in a sentence', function() {
        assert.equal(wordCount('should return number of words in a sentence'), 8)
        assert.equal(wordCount('should return'), 2)
    });

})
