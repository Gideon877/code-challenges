const assert = require('assert');
const { wordCount, mostWordsEndWith} = require('../word-crush/word count');

describe('Word and letters count functions', function() {
    it('should return number of words in a sentence', function() {
        assert.equal(wordCount('should return number of words in a sentence'), 8)
        assert.equal(wordCount('should return'), 2)
    });

})



describe('MostWordsEndWith', () => {

    it('should return the ending letter and words', () => {
        let sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.';
        assert.deepEqual(mostWordsEndWith(sentence), { letter: 't', words: [ 'that', 'but', 'packet', 'that', 'racket', 'packet' ] })
    })
})


