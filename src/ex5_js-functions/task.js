const Calculator = (function() {
  let current = 0;
  function add(value) {
    if (!isNaN(value) && typeof value === "number") this.current += value;
  }
  function subtract(value) {
    if (!isNaN(value) && typeof value === "number") this.current -= value;
  }
  function divide(value) {
    if (!isNaN(value) && typeof value === "number") this.current /= value;
  }
  function multiply(value) {
    if (!isNaN(value) && typeof value === "number") this.current *= value;
  }
  function reset() {
    current = 0;
  }
  function getResult() {
    return this.current;
  }
}());

module.exports = Calculator;