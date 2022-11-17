class standardItem {
  constructor(item) {
    this.item = item;
  }
  update() {
    this.item.sellIn -= 1;
    this.item.quality > 50
      ? this.maxQuality()
      : this.item.sellIn < 0
      ? this.doubleQualityDecrease()
      : this.item.sellIn <= 3
      ? this.tripleQualityIncrease()
      : this.standardQualityDecrease();
  }
  standardQualityDecrease() {
    this.item.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.item.quality > 0
      ? (this.item.quality -= 1)
      : (this.item.quality = 0);
  }
  doubleQualityDecrease() {
    this.item.quality -= 2;
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

  lowestQuality() {
    this.item.quality = 0;
  }
}

module.exports = standardItem;
