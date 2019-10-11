function myReduce(array, callback, initial) {
  const newArray = array.slice();
  let previousValue = initial || newArray.shift();
  newArray.forEach((item, i, array) => {
    previousValue = callback(previousValue, item, i, array);
  });
  return previousValue;
}


module.exports = myReduce;