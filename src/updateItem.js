const Conjured = require("./conjured");
const standardItem = require("./standardItem");
const Brie = require("./brie");
const Backstage = require("./backstage");
const Sulfaras = require("./sulfaras.js");

class updateItem {
  constructor(item) {
    this.item = item;
    this.name = item.name;
    this.sellIn = item.sellIn;
    this.quality = item.quality;
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
    const standarditem = new standardItem(this.item);
    standarditem.update();
  }

  updateBrie() {
    const brie = new Brie(this.item);
    brie.update();
  }

  updateBackstage() {
    const backstage = new Backstage(this.item);
    backstage.update();
  }

  updateConjured() {
    const conjured = new Conjured(this.item);
    conjured.update();
  }

  updateSulfaras() {
    const sulfaras = new Sulfaras(this.item);
    sulfaras.update();
  }
}

module.exports = updateItem;
