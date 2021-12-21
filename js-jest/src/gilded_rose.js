const {RegularItemBuilder, 
      AgedBrieBuilder, 
      BackstagePassesBuilder, 
      ConjuredItemBuilder,
      LegendaryBuilder } = require('./Builder')


let updated = 0;
class Shop {
  constructor(items=[]){
    this.items = items.map((item)=>{
      let name  = item.name
      const isConjured = name.includes("Conjured");

      // assuming all conjured items will have the Conjured in the name
      isConjured? name = "Conjured" : null
      
      switch(name){
        case "Sulfuras, Hand of Ragnaros":
          return new LegendaryBuilder()
                      .withName(item.name)
                      .withSellIn(item.sellIn)
                      .withQuality(item.quality)
                      .build()
        case "Aged Brie":
          return new AgedBrieBuilder()
                      .withSellIn(item.sellIn)
                      .withQuality(item.quality)
                      .build()
        case "Backstage passes to a TAFKAL80ETC concert":
          return new BackstagePassesBuilder()
                      .withSellIn(item.sellIn)
                      .withQuality(item.quality)
                      .build()
        case "Conjured":
          return new ConjuredItemBuilder()
                      .withName(item.name)
                      .withSellIn(item.sellIn)
                      .withQuality(item.quality)
                      .build()
        default:
          return new RegularItemBuilder()
                      .withName(item.name)
                      .withSellIn(item.sellIn)
                      .withQuality(item.quality)
                      .build()
      }
    });
  }
  
  updateQuality() {
    // console.log("updated items ",++updated, "times now")
    // console.log(this.items)
    this.items.forEach((item)=> item.update())
    // console.log(this.items)
    return this.items;

  }
}




module.exports =  Shop


