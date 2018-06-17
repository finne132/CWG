// pick a random word and export this as a module
const words = ['foo', 'bar', 'test', 'this'];
let word = Math.floor(Math.random() * words.length);
var randomWord = words[word];

exports.randomWord = randomWord;