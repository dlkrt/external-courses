function ElectricApp(power, electricType, electricName) {
  this.enabled = false;
  this.power = power;
  this.electricName = electricName;
  this.electricType = electricType;
}

ElectricApp.prototype.enable = function () {
  this.enabled = true;
  return this;
};

ElectricApp.prototype.disable = function () {
  this.enabled = false;
  return this;
};

ElectricApp.prototype.getPower = function () {
  return this.power;
};

ElectricApp.prototype.getElectricName = function () {
  return this.electricName;
};

ElectricApp.prototype.isEnabled = function () {
  return this.enabled;
};

function Computer(power, name) {
  return new ElectricApp(power, 'computer', name);
}

function Washer(power, name) {
  return new ElectricApp(power,'washer', name);
}

function Room(ElectricApps) {
  this.ElectricApps = ElectricApps;
}

Room.prototype.getSummaryPower = function () {
  let summaryPower = 0;
  this.ElectricApps.forEach(item => {
    if (item.isEnabled()) {
      summaryPower += item.getPower()
    }
  });
  return summaryPower;
};

Room.prototype.searchElectricApp = function (name) {
  return this.ElectricApps.filter(item => item.getElectricName() === name);
};

const computer1 = new Computer(600,'my computer'),
  computer2 = new Computer(300,'general computer'),
  washer = new Washer(450, 'washer');

washer.enable();
computer2.enable();

const room = new Room([computer1, computer2, washer]);
console.log(`Общая потребляемая мощность включенных приборов: ${room.getSummaryPower()}`);
console.log(`Поиск прибора с именем general computer:`, room.searchElectricApp('general computer'));