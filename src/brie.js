class Brie {
  constructor(item) {
    this.item = item;
  }

  update() {
    this.item.sellIn -= 1;
    this.item.sellIn <= 3
      ? this.tripleQualityIncrease()
      : this.item.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.item.quality < 50
      ? (this.item.quality += 1)
      : this.maxQuality();
  }

  doubleQualityIncrease() {
    this.item.quality += 2;
  }

  tripleQualityIncrease() {
    this.item.quality += 3;
  }

  maxQuality() {
    this.item.quality = 50;
  }
}
module.exports = Brie;
