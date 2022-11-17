const updateItem = require("./updateItem");

class Conjured {
  update() {
    this.sellIn -= 1;
    this.quality -= 2;
  }
}

module.exports = Conjured;
