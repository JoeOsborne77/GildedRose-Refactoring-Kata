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
    this.name === "brie"
      ? this.updateBrieQuality()
      : this.name === "sulfaras"
      ? this.sulfarasQuality()
      : this.updateItemQuality();
  }

  updateItemQuality() {
    this.sellIn -= 1;
    this.sellIn <= 0
      ? (this.quality -= 2)
      : this.quality > 0
      ? (this.quality -= 1)
      : (this.quality = 0);
    return this.quality;
  }

  updateBrieQuality() {
    this.sellIn -= 1;
    this.quality += 1;
  }

  sulfarasQuality() {
    this.sellIn -= 1;
    this.quality = 80;
  }
}

module.exports = updateItem;
