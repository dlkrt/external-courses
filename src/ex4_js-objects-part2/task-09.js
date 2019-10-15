function addSubstrToStr(str, substr, index) {
  const words = str.split(' ');
  const resultWords = [];
  for (let i = 0; i < words.length; i++) {
    resultWords.push(words[i]);
    if (i === index) resultWords.push(...substr.split(' '));
  }
  return resultWords.join(' ');
}

module.exports = addSubstrToStr;