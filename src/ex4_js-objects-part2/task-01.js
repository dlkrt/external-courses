function searchPropInProto(prop, obj) {
  return Object.getPrototypeOf(obj)[prop];
}

module.exports = searchPropInProto;