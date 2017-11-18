function FirstFactorial(number) {
    var count = 0;
    var array = []
    for (var index = 1; index <= number; index++) {
        array.push(index);
    }

    for (let i = 1; i <= array.length; i++) {
        // body...
        newNumber = array[i - 1];

        if (count === 0) {
            count = i;
        } else if (count !== 0) {
            count = newNumber * count;
        }
    }
    return count;
}
// console.log(FirstFactorial(8))
