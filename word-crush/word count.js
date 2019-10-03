//The following function finds the sum of all the word lengths, in a sentence. (wordLengths)

function wordLengths(sentence) {
    var sum = sentence.replace(/\s/g, "");
    return sum.length;
};


//The following function finds the sum of each the word in a sentence. (wordCount)

function wordCount(sentence) {
    var words = sentence.split(' ');
    return words.length
}

function mostWordsEndWith(sentence) {
    var arr = sentence.split(' ')
    var endingLet = {};
    var endingWord = {};
    var letter = '';
    var words = []

    arr.forEach(element => {
        if (endingWord[element.substring(element.length - 1)] === undefined && endingLet[element] == undefined) {
            endingWord[element.substring(element.length - 1)] = 1;
            endingLet[element] = 1;
        } else {
            endingWord[element.substring(element.length - 1)] += 1;
            endingLet[element] += 1;
        }
    });

    for (var name in endingWord) {
        if (letter !== '' && endingWord[name] > endingWord[letter]) {
            letter = name;
        } else if (letter === '') {
            letter = name;
        }
    }

    arr.forEach(element => {
        if (element.endsWith(letter)) {
            words.push(element);
        }
    });

    return {
        letter,
        words
    }
}


module.exports = {
    mostWordsEndWith,
    wordCount
}