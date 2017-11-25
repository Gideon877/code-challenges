/*
The following function;
    find the shortest word (shortestWord) - the last one in the sentence.
*/

module.exports = function shortestWord(sentence) {
    console.log(sentence);
    var words = sentence.split(' ');
    var shortWord = [''];
    for (var i = 0; i < words.length; i++) {
        newWordCount = words[i];
        if (shortWord == '') {
            shortWord[0] = newWordCount;
        } else if (newWordCount.length <= shortWord[0].length) {
            newWordCount = words[i];
            shortWord[0] = newWordCount;
            // console.log('At index', i + " '" + words[i] + "'", 'is the current shortest word with', shortWord[0].length, 'letter(s).');
        }
    }
    return shortWord;
};

// console.log(shortestWord('Arrow functions like function expressions can be used to return an object literal expression'));
