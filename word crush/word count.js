//The following function finds the sum of all the word lengths, in a sentence. (wordLengths)

function wordLengths(sentence){
  var sum = sentence.replace(/\s/g, "");
  return sum.length;
};

// console.log(wordLengths('The following function finds the sum of all the word lengths, in a sentence'));

//The following function finds the sum of each the word in a sentence. (wordCount)

function wordCount(sentence){
    var words = sentence.split(' ');
    return words.length
}
// console.log(wordCount('The following function finds the sum of all the word lengths, in a sentence'));
