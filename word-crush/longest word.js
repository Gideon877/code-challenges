/*
The following function;
    Find the longest word (longestWord) - the last one in the sentence.
*/
const longestWord = (sentence) => {
    var words = sentence.split(' '); // Fisrt i remove the spaces in between
    var longWord = ['']; // Create an empty list that will store the current longest word
    for (var i = 0; i < words.length; i++) {
        newWordCount = words[i];
        // The 'if' statement checks if the current word's length is greater than the previous one.
        if (newWordCount.length >= longWord[0].length) {
            longWord[0] = newWordCount; // store every longest word each time in index '0'
        }
    }
    return longWord;
};

module.exports =  { longestWord }
