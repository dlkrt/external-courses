function toCamelCase(str) {
  const words = str.split(' ');
  words[0] = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
  }
  return words.join('');
}

module.exports = toCamelCase;