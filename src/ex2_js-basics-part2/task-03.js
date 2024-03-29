const checkWhatInArray = function (array) {
    let evenNumbers = 0, // четные числа
        oddNumbers = 0, // нечетные
        zeroNumbers = 0; // нули
    array.forEach(item => {
      if (typeof item !== 'number') return;
      if (item === 0) {
          ++zeroNumbers;
          return;
      }
      if (item % 2 === 0) ++evenNumbers;
      else ++oddNumbers;
  });

    return [evenNumbers,oddNumbers,zeroNumbers];
};

module.exports = checkWhatInArray;