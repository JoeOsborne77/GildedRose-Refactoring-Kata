class Backstage {
  constructor(item) {
    this.item = item;
  }

  update() {
    this.item.sellIn -= 1;
    this.item.sellIn < 0
      ? this.lowestQuality()
      : this.item.sellIn <= 5
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

  lowestQuality() {
    this.item.quality = 0;
  }
}

module.exports = Backstage;
