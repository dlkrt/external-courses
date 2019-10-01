const getMaxInArray = function(array) {
  let max = Number.MIN_VALUE;
  array.forEach(item => {
      if (typeof item === 'number' && item > max) max = item;
  });
  return max;
};

module.exports = getMaxInArray;