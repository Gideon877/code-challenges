module.exports = function openOrSenior(data) {
    var results = [];
    data.forEach(function(element) {
        var age = element[0],
            handicap = element[1];
        if (age >= 55 && handicap > 7) {
        results.push("Senior");
        } else {
        results.push("Open");
        }
    });
    return results;
}
