class Conjured {
  constructor(item) {
    this.item = item;
  }
  update() {
    this.item.sellIn -= 1;
    this.item.quality > 2 ? (this.item.quality -= 2) : (this.item.quality = 0);
  }
}

module.exports = Conjured;
