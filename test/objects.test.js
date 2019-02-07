const assert = require('assert');
const { mostProfitableDay, mostProfitableDepartment, data } = require('../objects/mostProfitable');
const mostWordsEndWith = require('../objects/mostWordsEndWith');


describe('mostProfitable', () => {

    describe('mostProfitableDepartment', () => {
        it('should return the most profitable department', () => {
            assert.deepEqual(mostProfitableDepartment(data), "outdoor");
        });

        it('should return empty string if give empty parameter', () => {
            assert.deepEqual(mostProfitableDepartment([]), "");
        });
    });

    describe('mostProfitableDay', () => {
        it('should return the most profitable day', () => {
            assert.deepEqual(mostProfitableDay(data), 'Thursday');
        });

        it('should return empty string if give empty parameter', () => {
            assert.deepEqual(mostProfitableDay([]), "");
        });
    });
})

