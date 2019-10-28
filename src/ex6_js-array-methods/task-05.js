function myMap(array, callback) {
  const result = [];
  array.forEach((item, index, array) => {
    result[index] = callback(item, index, array);
  });
  return result;
}

module.exports = myMap;