class ElectricApp {
  constructor(power, electricType, electricName) {
    this.enabled = false;
    this.power = power;
    this.electricName = electricName;
    this.electricType = electricType;
  }

  enable() {
    this.enabled = true;
    return this;
  };

  disable() {
    this.enabled = false;
    return this;
  };

  getPower() {
    return this.power;
  };

  getElectricName() {
    return this.electricName;
  };

  isEnabled() {
    return this.enabled;
  };
}

class Computer extends ElectricApp {
  constructor(power, name) {
    super();
    this.electricType = 'computer';
    this.electricName = name;
    this.power = power;
  }
}

class Washer extends ElectricApp {
  constructor(power, name) {
    super();
    this.electricType = 'computer';
    this.electricName = name;
    this.power = power;
  }
}

class Room extends ElectricApp {
  constructor(electricApps) {
    super();
    this.ElectricApps = electricApps;
  }

  getSummaryPower() {
    let summaryPower = 0;
    this.ElectricApps.forEach(item => {
      if (item.isEnabled()) {
        summaryPower += item.getPower()
      }
    });
    return summaryPower;
  };

  searchElectricApp(name) {
    return this.ElectricApps.filter(item => item.getElectricName() === name);
  };
}

const computer1 = new Computer(600,'my computer'),
  computer2 = new Computer(300,'general computer'),
  washer = new Washer(450, 'washer');

washer.enable();
computer2.enable();

const room = new Room([computer1, computer2, washer]);
console.log(`Общая потребляемая мощность включенных приборов: ${room.getSummaryPower()}`);
console.log(`Поиск прибора с именем general computer:`, room.searchElectricApp('general computer'));