// s = "abacabaabacabac"

module.exports = function nonRepeating(letters){
    var map = {},
    results = "",
    arr = []
    for (var i = 0; i < letters.length; i++) {
        var eachLetter = letters[i]
        if (map[eachLetter] === undefined) {
            map[eachLetter] = 1
        } else if (map[eachLetter] !== undefined) {
            map[eachLetter] = map[eachLetter] + 1
        }
    }

    var len = Object.keys(map).length;

    for (var a in map) {
        if (map[a] <= 1) {
            arr.push(a)
        }
    }
    if (arr[0] !== undefined) {
        results = arr[0]
    } else {
        results = "'_'"
    }
    return results

}
