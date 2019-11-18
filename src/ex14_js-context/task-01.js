class Calc {
  constructor() {
    this.current = 0;
  }

  setState(value) {
    if (!isNaN(value) && typeof value === "number") this.current = value;
    return this;
  }

  add(value) {
    if (!isNaN(value) && typeof value === "number") this.current += value;
    return this;
  }

  subtract(value) {
    if (!isNaN(value) && typeof value === "number") this.current -= value;
    return this;
  }

  divide(value) {
    if (!isNaN(value) && typeof value === "number") this.current /= value;
    return this;
  }

  multiply(value) {
    if (!isNaN(value) && typeof value === "number") this.current *= value;
    return this;
  }

  getResult() {
    return this.current;
  }

  reset() {
    this.current = 0;
    return this;
  }

  fetchData(callback) {
    setTimeout(() => {
      callback(500);
    },2000);
    return this;
  }
}

const Calculator = new Calc();

module.exports = Calculator;