const _ = require('lodash')

const sortMe = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        for (var a = i + 1; a < arr.length; a++) {
            if (arr[i] > arr[a]) {
                var newA = arr[a];
                arr[a] = arr[i];
                arr[i] = newA;
            }
        }
    }
    return arr;
}

const getCommonElement = (Array1, Array2) => {
    if (_.isEmpty(Array1) || _.isEmpty(Array2)) return [];
    return Array1.filter((number1) => Array2.includes(number1))
}

module.exports = {
    sortMe,
    getCommonElement
}