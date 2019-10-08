const Calculator = {
  current: 0,
  add(value) {
    if (!isNaN(value) && typeof value === "number") this.current += value;
  },
  subtract(value) {
    if (!isNaN(value) && typeof value === "number") this.current -= value;
  },
  divide(value) {
    if (!isNaN(value) && typeof value === "number") this.current /= value;
  },
  multiply(value) {
    if (!isNaN(value) && typeof value === "number") this.current *= value;
  },
  reset() {
    this.current = 0;
  },
  getResult() {
    return this.current;
  }
};

module.exports = (new Calculator);