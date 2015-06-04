
var challenges = (function(){
	// from page http://coderbyte.com/CodingArea/Challenges/, get list of challenges with dificulty level
	// return them with index of difficulty
	// sort them by website difficulty order, then by challenge website order

	var result = {};
	$('.challenge_button_month_C,.challenge_button_month_NC').each(function(i){
		// come back to title and get it
		var difficult = $(this).closest('.January_Challenges').siblings('.diffLevel').text().trim();
		// get the text and remove Completed status
		var levelNane = $('p', this).text().replace(/(Not )?Completed/, '').trim();
		if(difficult == '' || levelNane == '') {
			alert('Format seem changed');
		}

		if(typeof result[difficult] == 'undefined') {
			result[difficult] = [];
		}
		result[difficult].push({name: levelNane, difficult: difficult, number: result[difficult].length + 1});
	});
	return result;
})();


(function (challenges) {
	// print in colsole a bat script content for generate all directory for all challenges

	// normalize directory helper
	var n = function(string) {
		return string.replace(' ','_');
	}

	// zerofill with 2 chars
	var zerofill = function(number) {
		return ('00'+number).slice(-2);
	}

	for(var difficult in challenges) {
		console.log('mkdir "'+n(difficult)+'"');
		for(var i in challenges[difficult]) {
			var challenge = challenges[difficult][i];
			console.log('mkdir "'+n(difficult)+'/'+zerofill(challenge['number'])+'-'+n(challenge['name'])+'"');
		}
	}
})(challenges);


(function(){
	// from page http://coderbyte.com/CodingArea/Editor.php?ct={challengeName}&lan=JavaScript
	// print in colsole a readme.md content file for the correct challenge

	console.log('# '+$('#javascript_challenge .js_title').text().trim());
	console.log('');
	console.log('## Question');
	console.log($('#real_question').html().trim().replace(/<br>/g, "\n"));
})();