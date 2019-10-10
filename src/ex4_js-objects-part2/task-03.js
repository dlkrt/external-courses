function trimStr(str) {
  let resultStr = (str[0] === ' ') ? str.substring(1) : str;
  if (resultStr[resultStr.length-1] === ' ') {
    resultStr = resultStr.substring(0,resultStr.length-1);
  }
  return resultStr;
}

module.exports = trimStr;