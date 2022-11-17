class standardItem {
  constructor(item) {
    this.item = item;
  }
  update() {
    this.item.sellIn -= 1;
    this.item.sellIn < 0 && this.item.quality < 50
      ? this.doubleQualityDecrease()
      : this.item.sellIn <= 3 && this.item.quality < 50
      ? this.tripleQualityIncrease()
      : this.item.sellIn <= 10 && this.item.quality < 50
      ? this.doubleQualityIncrease()
      : this.item.quality >= 50
      ? this.maxQuality()
      : this.standardQualityDecrease();
  }
  standardQualityDecrease() {
    this.item.quality > 0 ? (this.item.quality -= 1) : this.lowestQuality();
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
