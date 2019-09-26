const checkStringOrNumber = function(value) {
    return (typeof value === 'string') || (typeof value === 'number') ? typeof value : undefined;
};

module.exports = checkStringOrNumber;