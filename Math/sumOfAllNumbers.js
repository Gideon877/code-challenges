module.exports = function GetSum(x, y) {
    let sum = 0
    if (x == y) return x;
    if(x > y) {
        for (let i = y; i <= x; i++) {
            sum += i;
        }
    } 

    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
} 