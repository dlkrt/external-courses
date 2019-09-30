function isSameElements(array) {
    for (let i=1; i<array.length; i++) {
        if (array[i] !== array[0]) return false;
    }
    return true;
}

module.exports = isSameElements;