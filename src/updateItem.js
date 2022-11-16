const Item = require("./item");

class updateItem {
  constructor(item, name, sellIn, quality) {
    //inject item and arguments
    this.item = item;
    this.item.name = name;
    this.item.sellIn = sellIn;
    this.item.quality = quality;
    // rename variables to make cleaner
    this.name = this.item.name;
    this.sellIn = this.item.sellIn;
    this.quality = this.item.quality;
  }

  filterByName() {
    this.name = this.name.toLowerCase();
    this.name.includes("backstage")
      ? this.updateBackstage()
      : this.name === "brie"
      ? this.updateBrie()
      : this.name === "sulfaras"
      ? this.updateSulfaras()
      : this.updateItem();
  }

  updateItem() {
    this.sellIn -= 1;
    this.quality > 50
      ? this.maxQuality()
      : this.sellIn <= 0
      ? this.doubleQualityDecrease()
      : this.standardQualityDecrease();
  }

  updateBrie() {
    this.sellIn -= 1;
    this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality < 50
      ? (this.quality += 1)
      : this.maxQuality();
  }

  updateBackstage() {
    this.sellIn -= 1;
    this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality < 50
      ? (this.quality += 1)
      : this.maxQuality();
  }

  updateSulfaras() {
    this.sellIn -= 1;
    this.quality = 80; //never changes
  }

  doubleQualityDecrease() {
    this.quality -= 2;
  }

  doubleQualityIncrease() {
    this.quality += 2;
  }

  maxQuality() {
    this.quality = 50;
  }

  standardQualityDecrease() {
    this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality > 0
      ? (this.quality -= 1)
      : (this.quality = 0);
  }
}

module.exports = updateItem;
