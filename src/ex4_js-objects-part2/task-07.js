function trimWithDots(str, trimIndex) {
  return (str.length > trimIndex) ? str.substring(0, trimIndex - 1) + '…' : str;
}

module.exports = trimWithDots;