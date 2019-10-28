function mySlice(array, begin = 0, end = array.length) {
  const startIndex = (begin < 0) ? array.length + begin : begin,
    endIndex = (end < 0) ? array.length + end : end;
  return array.filter((item, index) => (index >= startIndex && index < endIndex)); // .filter можно заменить на функцию из task-04
}

module.exports = mySlice;