class Sulfaras {
  constructor(item) {
    this.item = item;
  }
  update() {
    this.item.sellIn -= 1;
    this.item.quality = 80;
  }
}

module.exports = Sulfaras;
