function searchPropInProto(prop, obj) {
  return (obj.__proto__.hasOwnProperty(prop)) ? obj.__proto__[prop] : undefined;
}

module.exports = searchPropInProto;