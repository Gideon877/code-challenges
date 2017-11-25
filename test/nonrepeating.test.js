const assert = require('assert');
const nonRepeating = require('../non-repeating/main');

describe('nonRepeating function', function() {
    it('it should return  the first non repeating character', function() {
        assert.equal(nonRepeating('abacabad'), 'c')

    })
    it("it should return '_' if there is non repeating character the first non repeating character", function() {
        assert.equal(nonRepeating('abacabaabacaba'), "'_'")
        assert.equal(nonRepeating('effhheehhaaff'), "'_'")

    })
});
