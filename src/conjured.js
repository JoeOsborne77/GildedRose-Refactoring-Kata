class Conjured {
  constructor(item) {
    this.item = item;
  }
  update() {
    this.item.sellIn -= 1;
    this.item.quality -= 2;
  }
}

module.exports = Conjured;
