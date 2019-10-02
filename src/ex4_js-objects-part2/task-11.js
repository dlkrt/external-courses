function toCountChars(str) {
  const characters = {};
  for (let i=0; i<str.length; i++) {
    if (str[i] in characters) ++characters[str[i]];
    else characters[str[i]] = 1;
  }

  for (let key in characters) {
    if (characters.hasOwnProperty(key)) console.log(characters[key]);
  }
}

module.exports = toCountChars;