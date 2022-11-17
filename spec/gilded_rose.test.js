/* eslint-disable */
const Item = require("../src/item");
const updateItem = require("../src/updateItem");

describe("Gilded Rose", () => {
  it("should return item sellIn days", () => {
    const item = new Item("Fine Ale", 12, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.sellIn).toBe(11);
  });

  it("should return item sellIn days", () => {
    const item = new Item("Fine Ale", 12, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(39);
  });

  it("should never return < 0 for quality", () => {
    const item = new Item("Fine Ale", 12, -40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(0);
  });

  it("should show that quality reduces by 2 if sellIn is < 0", () => {
    const item = new Item("Fine Ale", -10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(38);
  });

  it("does not allow quality above 50 for standard item", () => {
    const item = new Item("Fine Ale", 10, 60);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(50);
  });

  it("should increase brie quality with time", () => {
    const item = new Item("Brie", 15, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(41);
  });

  it("should increase brie quality with time, even with negative sellIn", () => {
    const item = new Item("Brie", -10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(43);
  });

  it("should increase brie quality +2 when sellIn <= 10", () => {
    const item = new Item("Brie", 10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(42);
  });

  it("should not increase brie quality above 50", () => {
    const item = new Item("Brie", 10, 50);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(50);
  });

  it("should increase backstage quality with time", () => {
    const item = new Item("Backstage pass to see The Juggernauts", 12, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.sellIn).toBe(11);
    expect(item.quality).toBe(41);
  });

  it("should increase backstage quality by 3 when sellIn <= 5", () => {
    const item = new Item("Backstage pass to see The Juggernauts", 2, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.sellIn).toBe(1);
    expect(item.quality).toBe(43);
  });

  it("should increase backstage quality by 2 when sellIn <= 10", () => {
    const item = new Item("Backstage pass to see The Juggernauts", 10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(42);
  });

  it("should show 0 for quality for backstage quality when sellIn < 0", () => {
    const item = new Item("Backstage pass to see The Juggernauts", 0, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(0);
  });

  it("should show 50 for quality for backstage quality when quality > 50", () => {
    const item = new Item("Backstage pass to see The Juggernauts", 20, 500);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(50);
  });

  it("should show quality of 80 at all times for Sulfaras", () => {
    const item = new Item("Sulfaras", 10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(80);
  });

  it("should show quality of 80 at all times for Sulfaras, even if negative sellIn", () => {
    const item = new Item("Sulfaras", -10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(80);
  });

  it("should increase in quality by 2 when sellIn <= 10", () => {
    const item = new Item("Pizza", 10, 40);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(42);
  });

  it("should increase in quality by 2 when sellIn <= 10", () => {
    const item = new Item("Cheeseburger", 7, 20);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(22);
  });

  it("should increase in quality by 3 when sellIn <= 3", () => {
    const item = new Item("Cheeseburger", 3, 20);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(23);
  });

  it("should decrease quality of conjured items by 2", () => {
    const item = new Item("Conjured Peanut Butter Jelly Time", 3, 20);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(18);
  });

  it("should not decrease quality of conjured items below 0", () => {
    const item = new Item("Conjured Peanut Butter Jelly Time", 3, 1);
    const update = new updateItem(item);
    update.filterByName();
    expect(item.quality).toBe(0);
  });
});
