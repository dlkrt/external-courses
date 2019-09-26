const isSameElements = function (array) {
    return !array.some(item => item !== array[0]);
};

module.exports = isSameElements;