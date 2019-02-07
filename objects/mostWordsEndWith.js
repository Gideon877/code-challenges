var mostWordsEndWith = function(sentence){
	var words = sentence.split(' ')
	var endingLet = {};
	
	for (var i=0; i<words.length; i++){
		var currentWord = words[i];
        var currentLetter = currentWord[currentWord.length-1];
   
		if (endingLet[currentLetter] === undefined){
			endingLet[currentLetter] = 0;
		}
		
		endingLet[currentLetter] = endingLet[currentLetter] + 1;
	}

    var biggest = '';
	for (var name in endingLet) {
	    if(biggest !== '' && endingLet[name] > endingLet[biggest]) {
	        biggest = name;
	    } else if (biggest === '') {
	        biggest = name;
	    }
    }
	return biggest;	
}

console.log(mostWordsEndWith('Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'))


module.exports = { mostWordsEndWith };