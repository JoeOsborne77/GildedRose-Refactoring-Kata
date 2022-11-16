const Item = require("../src/item");
const updateItem = require("../src/updateItem");
const item = new Item();

describe("Gilded Rose", () => {
  it("should return item sellIn days", () => {
    const update = new updateItem(item, "Fine Ale", 10, 40);
    update.filterByName();
    expect(update.sellIn).toBe(9);
  });

  it("should return item sellIn days", () => {
    const update = new updateItem(item, "Fine Ale", 10, 40);
    update.filterByName();
    expect(update.quality).toBe(39);
  });

  it("should never return < 0 for quality", () => {
    const update = new updateItem(item, "Fine Ale", 10, -40);
    update.filterByName();
    expect(update.quality).toBe(0);
  });

  it("should show that quality reduces by 2 if sellIn is < 0", () => {
    const update = new updateItem(item, "Fine Ale", -10, 40);
    update.filterByName();
    expect(update.quality).toBe(38);
  });

  it("should increase brie quality with time", () => {
    const update = new updateItem(item, "Brie", 10, 40);
    update.filterByName();
    expect(update.quality).toBe(41);
  });

  it("should show quality of 80 at all times for Sulfaras", () => {
    const update = new updateItem(item, "Sulfaras", 10, 40);
    update.filterByName();
    expect(update.quality).toBe(80);
  });
});
