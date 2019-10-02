function addSubstrToStr(str, substr, index) {
  const words = str.split(' ');
  let resultStr = '';
  for (let i = 0; i < words.length; i++) {
    resultStr += words[i] + ' ';
    if (i === index) resultStr += substr + ' ';
  }
  return resultStr.trimRight();
}

module.exports = addSubstrToStr;