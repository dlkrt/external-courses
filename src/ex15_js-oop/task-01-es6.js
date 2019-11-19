class Sweetness {
  constructor(type, name, weight) {
    this.sweetName = name;
    this.weight = weight;
    this.typeName = type;
  }

  getTypeName() {
    return this.typeName;
  }

  getWeight() {
    return this.weight;
  }
}

class Chocolate extends Sweetness {
  constructor(sweetName, weight) {
    super();
    this.sweetName = sweetName;
    this.weight = weight;
    this.typeName = 'chocolate';
  }
}

class Candy extends Sweetness {
  constructor(sweetName, weight) {
    super();
    this.sweetName = sweetName;
    this.weight = weight;
    this.typeName = 'candy';
  }
}

class Gift extends Sweetness {
  constructor(gift, getWeight) {
    super();
    this.giftItems = gift;
  }

  getWeight() {
    let weight = 0;
    this.giftItems.forEach(giftItem => {
      weight += giftItem.getWeight();
    });
    return weight;
  };

  sortByWeight() {
    const sortedGift = this.giftItems.slice();
    sortedGift.sort(function (a, b) {
      return a.getWeight() - b.getWeight();
    });
    return sortedGift;
  };

  searchByName(sweetName) {
    return this.giftItems.filter(item => sweetName === item.sweetName);
  }
}

const twix = new Chocolate('Twix', 200),
  milkyWay = new Chocolate('Milky Way', 250),
  alpenGold = new Chocolate('alpengold', 100),
  mars = new Candy('mars', 50);

const newYearGift = new Gift([twix, milkyWay, alpenGold, mars]);

console.log(`Сортированной массив конфет по весу`, newYearGift.sortByWeight());
console.log(`Масса подарка ${newYearGift.getWeight()}`);
console.log(`Поиск по имени в подарке`, newYearGift.searchByName('Twix'));


