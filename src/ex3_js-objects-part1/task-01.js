function createObject() {
  const obj = {
    string: 'string',
    number: 123,
    boolean: true
  };
  delete obj.boolean;
  return obj;
}

module.exports = createObject;