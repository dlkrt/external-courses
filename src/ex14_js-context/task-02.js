function Hangman(word) {
  this.mask = word.split('').map((letter) => '_').join('');
  this.wrongLetters = [];
  this.mistakes = 6;
  this.word = word;
}

Hangman.prototype.guess = function (letter) {
  if (this.word.indexOf(letter) !== -1 && !this.mask.includes(letter)) {
    this.mask = this.mask.split('').map((maskLetter, i) => {
      if (this.word[i] === letter) return letter;
      return maskLetter;
    }).join('');
    console.log(this.mask + ((this.mask === this.word) ? ' | You won!' : ''));
    if (this.mask === this.word) {
      return this.startAgain(this.word);
    }
  } else {
    this.wrongLetters.push(letter);
    this.mistakes--;
    if (this.mistakes < 0) {
      console.log(`${this.word} | You lose!`);
    } else {
      console.log(`wrong letter, errors left ${this.mistakes} | ${this.wrongLetters.join(',')}`);
    }
  }
  return this;
};

Hangman.prototype.getGuessedString = function () {
  return this.mask;
};

Hangman.prototype.getErrorsLeft = function () {
  return this.mistakes;
};

Hangman.prototype.getWrongSymbols = function () {
  return this.wrongLetters;
};

Hangman.prototype.getStatus = function () {
  return `${this.mask} | errors left ${this.mistakes}`;
};

Hangman.prototype.startAgain = function (newWord) {
  this.mask = newWord.split('').map((letter) => '_').join('');
  this.wrongLetters = [];
  this.mistakes = 6;
  return this;
};


const hangman = new Hangman('webpurple');
module.exports = hangman;