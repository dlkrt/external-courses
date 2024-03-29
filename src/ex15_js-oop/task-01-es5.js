function Sweetness(type, name, weight) {
  this.sweetName = name;
  this.weight = weight;
  this.typeName = type;
}

Sweetness.prototype.getSweetName = function () {
  return this.sweetName;
};

Sweetness.prototype.getWeight = function () {
  return this.weight;
};

function Chocolate(sweetName, weight) {
  return new Sweetness('chocolate', sweetName, weight);
}

function Candy(sweetName, weight) {
  return new Sweetness('candy', sweetName, weight);
}

function Gift(gift) {
  this.giftItems = gift;
}

Gift.prototype.getWeight = function () {
  let weight = 0;
  this.giftItems.forEach(giftItem => {
    weight += giftItem.getWeight();
  });
  return weight;
};

Gift.prototype.sortByWeight = function () {
  const sortedGift = this.giftItems.slice();
  return sortedGift.sort(function (a, b) {
    return a.getWeight() - b.getWeight();
  });
};

Gift.prototype.searchByName = function (sweetName) {
  return this.giftItems.filter(item => sweetName === item.getSweetName());
};

const twix = new Chocolate('Twix', 200),
  milkyWay = new Chocolate('Milky Way', 250),
  alpenGold = new Chocolate('alpengold', 100),
  mars = new Candy('mars', 50);

const newYearGift = new Gift([twix, milkyWay, alpenGold, mars]);

console.log(`Сортированной массив конфет по весу`, newYearGift.sortByWeight());
console.log(`Масса подарка ${newYearGift.getWeight()}`);
console.log(`Поиск по имени в подарке`, newYearGift.searchByName('Twix'));
