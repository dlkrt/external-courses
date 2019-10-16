function reverseStr(str) {
  let resultStr = '';
  for (let i = str.length - 1; i >= 0; i--) resultStr += str[i];
  return resultStr;
}

module.exports = reverseStr;