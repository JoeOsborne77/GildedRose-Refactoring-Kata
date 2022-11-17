const Item = require("./item");
// const Conjured = require("./conjured");
// const conjured = new Conjured();
class updateItem {
  constructor(item, name, sellIn, quality) {
    //inject item and arguments
    this.item = new Item();
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
    this.name.includes("conjured")
      ? this.updateConjured()
      : this.name.includes("backstage")
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
      : this.sellIn < 0
      ? this.doubleQualityDecrease()
      : this.sellIn <= 3
      ? this.tripleQualityIncrease()
      : this.standardQualityDecrease();
  }

  standardQualityDecrease() {
    this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality > 0
      ? (this.quality -= 1)
      : (this.quality = 0);
  }

  updateBrie() {
    this.sellIn -= 1;
    this.sellIn <= 3
      ? this.tripleQualityIncrease()
      : this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality < 50
      ? (this.quality += 1)
      : this.maxQuality();
  }

  updateBackstage() {
    this.sellIn -= 1;
    this.sellIn < 0
      ? this.lowestQuality()
      : this.sellIn <= 5
      ? this.tripleQualityIncrease()
      : this.sellIn <= 10
      ? this.doubleQualityIncrease()
      : this.quality < 50
      ? (this.quality += 1)
      : this.maxQuality();
  }

  updateConjured() {
    this.sellIn -= 1;
    this.quality -= 2;
    // const conjured = new Conjured();
    // conjured.update();
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

  tripleQualityIncrease() {
    this.quality += 3;
  }

  maxQuality() {
    this.quality = 50;
  }

  lowestQuality() {
    this.quality = 0;
  }
}

module.exports = updateItem;
