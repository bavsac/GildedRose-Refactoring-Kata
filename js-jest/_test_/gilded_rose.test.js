const Shop = require("../src/gilded_rose");
const { Item } = require('../src/item');
const testShop = require('../src/db/data/testShop')
describe("Gilded Rose", function() {

  const gildedRose = testShop;
  let items = gildedRose.updateQuality();
  
  it("should return foo", function() {
    
    expect(items[0].name).toBe("foo");
  });

  describe('Quality degrades twice as fast once the sell by date has passed ', () => {
    it('expect quality to be decreased by 2 when sellIn is <0 ', () => {
      expect(items[0].sellIn).toBeLessThan(0);
      expect(items[0].quality).toBe(8);
    });
    });
 
  describe('The Quality of an item is never negative', () => {
    it('expect the quality of an item not to go < 0 when it is already 0', () => {
      expect(items[1].quality).toBe(0);
    });
  });
  
  describe('"Aged Brie" actually increases in Quality the older it gets', () => {
    it('expect the sellIn to decrease by 1 and quality to increase by 1 ', () => {
      expect(items[3].sellIn).toBe(1)
      expect(items[3].quality).toBe(1);
    });

  });

  describe('"Backstage passes" increases in Quality as its SellIn value approaches but Quality drops to 0 after the concert', () => {

    it('Quality increases by 2 when there are 10 days or less ', () => {
      expect(items[8].sellIn).toBe(11)
      expect(items[8].quality).toBe(21);
      items = gildedRose.updateQuality();
      expect(items[8].sellIn).toBe(10)
      expect(items[8].quality).toBe(23);
    });
    it('Quality increases by 3 when there are 5 days or less', () => {
      
      expect(items[10].sellIn).toBe(3)
      expect(items[10].quality).toBe(31);
    });
    it('Quality drops to 0 after the concert', () => {
      
      expect(items[11].sellIn).toBeLessThan(0)
      expect(items[11].quality).toBe(0);
    });
    it('Quality does not exceed 50', () => {
      
      expect(items[12].sellIn).toBeGreaterThan(0)
      expect(items[12].quality).toBe(50);
    });
  });
  describe('"Conjured" items degrade in Quality twice as fast as normal items', () => {
    it('quality decreases by 2 for "Conjured" items', () => {
      
      expect(items[13].sellIn).toBe(1)
      expect(items[13].quality).toBe(2);
    });
  });

  describe('The Quality of an item is never more than 50', () => {
    it('When the quality is 50 it should not increase', () => {
      expect(items[7].sellIn).toBe(8)
      expect(items[7].quality).toBe(50);
    });

    it('When the quality is 49 it should not increase after its increased to 50', () => {
      expect(items[9].sellIn).toBe(8)
      expect(items[9].quality).toBe(50);
      items = gildedRose.updateQuality();
      expect(items[9].sellIn).toBe(7)
      expect(items[9].quality).toBe(50);
    });

    
  });

  describe('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
    it('t1: "Sulfuras" sellIn and quality does not change ', () => {

      expect(items[5].sellIn).toBe(0)
      expect(items[5].quality).toBe(80);
    });
    it('t2: "Sulfuras" sellIn and quality does not change even when update is called multiple times ', () => {
      items = gildedRose.updateQuality();
      items = gildedRose.updateQuality();
      expect(items[6].sellIn).toBe(-1)
      expect(items[6].quality).toBe(80);
    });
  });
});
