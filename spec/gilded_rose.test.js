const Item = require("../src/item");
const updateItem = require("../src/updateItem");
const item = new Item();

describe("Gilded Rose", () => {
  it("should return item sellIn days", () => {
    const update = new updateItem(item, "Fine Ale", 12, 40);
    update.filterByName();
    expect(update.sellIn).toBe(11);
  });

  it("should return item sellIn days", () => {
    const update = new updateItem(item, "Fine Ale", 12, 40);
    update.filterByName();
    expect(update.quality).toBe(39);
  });

  it("should never return < 0 for quality", () => {
    const update = new updateItem(item, "Fine Ale", 12, -40);
    update.filterByName();
    expect(update.quality).toBe(0);
  });

  it("should show that quality reduces by 2 if sellIn is < 0", () => {
    const update = new updateItem(item, "Fine Ale", -10, 40);
    update.filterByName();
    expect(update.quality).toBe(38);
  });

  it("should increase brie quality with time", () => {
    const update = new updateItem(item, "Brie", 15, 40);
    update.filterByName();
    expect(update.sellIn).toBe(14);
    expect(update.quality).toBe(41);
  });

  it("should increase brie quality with time, even with negative sellIn", () => {
    const update = new updateItem(item, "Brie", -10, 40);
    update.filterByName();
    expect(update.quality).toBe(43);
  });

  it("should increase backstage quality with time", () => {
    const update = new updateItem(
      item,
      "Backstage pass to see The Juggernauts",
      12,
      40
    );
    update.filterByName();
    expect(update.sellIn).toBe(11);
    expect(update.quality).toBe(41);
  });

  it("should increase backstage quality by 3 when sellIn <= 5", () => {
    const update = new updateItem(
      item,
      "Backstage pass to see The Juggernauts",
      2,
      40
    );
    update.filterByName();
    expect(update.sellIn).toBe(1);
    expect(update.quality).toBe(43);
  });

  it("should show 0 for quality for backstage quality when sellIn < 0", () => {
    const update = new updateItem(
      item,
      "Backstage pass to see The Juggernauts",
      0,
      40
    );
    update.filterByName();
    expect(update.quality).toBe(0);
  });

  it("should show quality of 80 at all times for Sulfaras", () => {
    const update = new updateItem(item, "Sulfaras", 10, 40);
    update.filterByName();
    expect(update.quality).toBe(80);
  });

  it("should show quality of 80 at all times for Sulfaras, even if negative sellIn", () => {
    const update = new updateItem(item, "Sulfaras", -10, 40);
    update.filterByName();
    expect(update.quality).toBe(80);
  });

  it("should increase in quality by 2 when sellIn <= 10", () => {
    const update = new updateItem(item, "Pizza", 10, 40);
    update.filterByName();
    expect(update.quality).toBe(42);
  });

  it("should increase in quality by 2 when sellIn <= 10", () => {
    const update = new updateItem(item, "Cheeseburger", 7, 20);
    update.filterByName();
    expect(update.quality).toBe(22);
  });

  it("should increase in quality by 3 when sellIn <= 3", () => {
    const update = new updateItem(item, "Cheeseburger", 3, 20);
    update.filterByName();
    expect(update.quality).toBe(23);
  });

  it("should decrease quality of conjured items by 2", () => {
    const update = new updateItem(
      item,
      "Conjured Peanut Butter Jelly Time",
      3,
      20
    );
    update.filterByName();
    expect(update.quality).toBe(18);
  });
});
