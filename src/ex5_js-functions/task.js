const calc = (function () {
  let current = 0;

  function add(value) {
    if (!isNaN(value) && typeof value === "number") current += value;
    return add;
  }

  function subtract(value) {
    if (!isNaN(value) && typeof value === "number") current -= value;
    return subtract;
  }

  function divide(value) {
    if (!isNaN(value) && typeof value === "number") current /= value;
    return divide;
  }

  function multiply(value) {
    if (!isNaN(value) && typeof value === "number") current *= value;
    return multiply;
  }

  function getResult() {
    return current;
  }

  function reset() {
    current = 0;
    return reset;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset
  }
}());


module.exports = calc;