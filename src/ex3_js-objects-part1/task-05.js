function createCopyObject(obj) {
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) newObj[key] = obj[key]; // ESLint не пропускает без hasOwnProperty
  }
  return newObj;
}

module.exports = createCopyObject;