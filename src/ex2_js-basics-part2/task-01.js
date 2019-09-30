function checkStringOrNumber(value) {
    if (!isNaN(value) && (typeof value === 'string' || typeof value === 'number')) return typeof value;
    return undefined;
}

module.exports = checkStringOrNumber;