function deepCopyObj(obj) {
  const newObj = {};
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    if (Array.isArray(obj[key])) newObj[key] = obj[key].slice();
    else if (typeof obj[key] === 'object') newObj[key] = deepCopyObj(obj[key]);
    else newObj[key] = obj[key];
  }
  return newObj;
}

module.exports = deepCopyObj;