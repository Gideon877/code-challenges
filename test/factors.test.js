const assert = require('assert');
const firstFactorial = require('../factors/FirstFactorial');

describe('FirstFactorial function', function(){
     it('take the number parameter being passed and return the factorial of it', function(){
         assert.deepEqual(firstFactorial(1), 1);
         assert.deepEqual(firstFactorial(2), 2);
         assert.deepEqual(firstFactorial(3), 6);
         assert.deepEqual(firstFactorial(4), 24);
         assert.deepEqual(firstFactorial(5), 120);
         assert.deepEqual(firstFactorial(6), 720);
         assert.deepEqual(firstFactorial(7), 5040);
         assert.deepEqual(firstFactorial(8), 40320);
       });
 });
