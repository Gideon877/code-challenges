const assert = require('assert');
const openOrSenior = require('../Categorize New Member/index');

describe('openOrSenior function', function() {

    it('should return list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.', function() {
        assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);
        assert.deepEqual(openOrSenior([]),[]);
        assert.deepEqual(openOrSenior([[55, 10], [0, 0], [54, 9], [75, 11], [21, 21], [90, 9], [1, 1], [60, 12], [90, 7], [90, 8]]),['Senior', 'Open', 'Open', 'Senior','Open', 'Senior','Open', 'Senior','Open', 'Senior' ]);


    });

})
