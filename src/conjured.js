const updateItem = require("./updateItem");

class Conjured extends updateItem {
  constructor(sellIn, quality) {
    super(sellIn, quality);
  }
  update() {
    this.sellIn -= 1;
    this.quality -= 2;
  }
}

module.exports = Conjured;
