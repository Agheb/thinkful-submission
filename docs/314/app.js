function wordSplit(words){
// removes any punctuation marks and converts all words to lower case

	return words.toLowerCase().match(/\b[^\s]+\b/g);
}

function totalWC(words){
// Total word count of the submitted text
    return wordSplit(words).length;
}

function uniqueWC(words){
// Unique word count of the submitted text
	 newSet = new Set(wordSplit(words));
	return newSet.size;
}

function averageWC(words){
// Average word length in characters of the submitted tex
	var totalSum = wordSplit(words).map((a) => a.length).reduce( (a,b) => a + b);
	
	return totalSum /(wordSplit(words).length);

}

function averageSL(words){
//Average sentence length in characters of the submitted text.	
	var numSentences = words.match(/[.!?]+/g) ? words.match(/[.!?]+/g).length : 1; // if no sentence return 1
  	var wordCount = wordSplit(words).length;
	return wordCount / numSentences ;

}


function watchFormSubmission() {
  $('.js-textform').submit(function(event) {
    event.preventDefault();
    // get the text the user submitted
    var text = $(this).find('#user-text').val()
    var textreport = $('.text-report');
    textreport.find('.js-wc').text(totalWC(text));
    textreport.find('.js-uwc').text(uniqueWC(text));
    textreport.find('.js-awl').text(averageWC(text));
    textreport.find('.js-asl').text(averageSL(text));
    $('dl').removeClass('hidden');
  });
}

$(function() {
  watchFormSubmission();
});