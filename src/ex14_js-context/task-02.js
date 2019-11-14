function Hangman(word) {
  let mask = word.split('').map((letter) => '_').join(''),
  wrongLetters = [],
  mistakes = 6;

  this.guess = (letter) => {
    if (word.indexOf(letter) !== -1 && mask.indexOf(letter) === -1) {
      mask = mask.split('').map((maskLetter, i) => {
        if (word[i] === letter) return letter;
        return maskLetter;
      }).join('');
      console.log(mask + ((mask === word) ? ' | You won!' : ''));
      if (mask === word) {
        return this.startAgain(word);
      }
    } else {
      wrongLetters.push(letter);
      mistakes--;
      if (mistakes < 0) {
        console.log(`${word} | You lose!`);
      } else console.log(`wrong letter, errors left ${mistakes} | ${wrongLetters.join(',')}`);
    }
    return this;
  };

  this.getGuessedString = function () {
    return mask;
  };

  this.getErrorsLeft = function () {
    return mistakes;
  };

  this.getWrongSymbols = function () {
    return wrongLetters;
  };

  this.getStatus = function () {
    return `${mask} | errors left ${mistakes}`;
  };

  this.startAgain = function (newWord) {
      mask = newWord.split('').map((letter) => '_').join('');
      wrongLetters = [];
      mistakes = 6;
      return this;
  };
}

const hangman = new Hangman('webpurple');
module.exports = hangman;