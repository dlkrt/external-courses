function trimStr(str) {
  let resultStr = (str[0] === ' ') ? str.substring(1) : str;
  resultStr = (resultStr[resultStr.length-1] === ' ') ? resultStr.substring(0,resultStr.length-1) : resultStr;
  return resultStr;
}

module.exports = trimStr;