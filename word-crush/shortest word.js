/*
The following function;
    find the shortest word (shortestWord) - the last one in the sentence.
*/

module.exports = function shortestWord(sentence) {
    var words = sentence.split(' ');
    var shortWord = [''];
    for (var i = 0; i < words.length; i++) {
        newWordCount = words[i];
        if (shortWord == '') {
            shortWord[0] = newWordCount;
        } else if (newWordCount.length <= shortWord[0].length) {
            newWordCount = words[i];
            shortWord[0] = newWordCount;
        }
    }
    return shortWord;
};