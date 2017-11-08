s = "abacabaabacabac"

var map = {},
    results = "",
    arr = []
for (var i = 0; i < s.length; i++) {
    var letter = s[i]
    if (map[letter] === undefined) {
        map[letter] = 1
    } else if (map[letter] !== undefined) {
        map[letter] = map[letter] + 1
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

console.log(results)
