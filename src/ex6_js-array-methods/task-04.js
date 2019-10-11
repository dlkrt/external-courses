function myFilter(array, callback) {
  const result = [];
  array.forEach((item, i, array) => {
    if (callback(item, i, array)) result.push(item);
  });
  return result;
}

module.exports = myFilter;