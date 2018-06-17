
// require all other files
var game = require('./game');
var wordCons = require('./word');
var letterCons = require('./letter');
var inquirer = require('inquirer');
var randomWord = game.randomWord;
var letterGuessed;
// get a new random word
var myWord = new wordCons.wordCons(game.randomWord);


//set maxGuesse to 10
var maxGuesses = 10;

function runGame(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('The game is over! You have run out of guesses!');
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
			var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
			return regEx.test(str);
				}
		}]).then(function(letterInput){ 
				var letter = letterInput.letter; 
				myWord.findLetter(letter);
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return;
					}
				console.log('\nThere are ' + (maxGuesses - myWord.guessesMade.length) + ' guesses remaining')
                console.log('');
                // run again (recursion)
				runGame(); 
				}
  );
}

runGame(); //Start Game

exports.letter;