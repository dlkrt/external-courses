function addObjProp(prop, obj) {
  // eslint-disable-next-line no-param-reassign
  if (!obj.hasOwnProperty(prop)) obj[prop] = 'new'; // можно использовать функцию проверки на наличие свойства из task-03
  return obj;
}

module.exports = addObjProp;