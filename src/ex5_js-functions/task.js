let Calculator = {
  current: 0,
  add(value) {
    if (typeof value === "number") this.current += value;
  },
  subtract(value) {
    if (typeof value === "number") this.current -= value;
  },
  divide(value) {
    if (typeof value === "number") this.current /= value;
  },
  multiply(value) {
    if (typeof value === "number") this.current *= value;
  },
  reset() {
    this.current = 0;
  },
  getResult() {
    return this.current;
  }
};

module.exports = (new Calculator);