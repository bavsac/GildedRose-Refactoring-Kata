const Shop = require("../../gilded_rose");
const { Item } = require('../../item');

const items =[];
// 0
  items.push(new Item("foo", 0, 10))
// 1
  items.push(new Item("foo", 0, 0))
// 2
  items.push(new Item("+5 Dexterity Vest", 10, 20))
//3
  items.push(new Item("Aged Brie", 2, 0))
  items.push(new Item("Elixir of the Mongoose", 5, 7))
  // 5
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80))
  items.push(new Item("Sulfuras, Hand of Ragnaros", -1, 80))
  //7
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50))
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20))
  //9
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49))
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25))
  // 11
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20))
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 7, 50))
  // This Conjured item does not work properly yet
  // 13
  items.push(new Item("Conjured Mana Cake", 3, 6))

const testShop =  new Shop(items);

module.exports = testShop;