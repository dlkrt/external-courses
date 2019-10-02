function hasObjProp(prop, obj) {
  for (let key in obj) if (key === prop) return true;
  return false;
}

module.exports = hasObjProp;