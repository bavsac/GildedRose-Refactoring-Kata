const AgedBrie = require('../item/agedBrie')

class AgedBrieBuilder{
    constructor(){
        this.name = "Aged Brie";
        this.sellIn = 0;
        this.quality = 0;
      }
    withSellIn(sellIn){
        this.sellIn =sellIn
        return this
        }

    withQuality(quality){
        this.quality =quality
        return this
    }
    build(){
        return new AgedBrie( this.sellIn, this.quality)
    }
}

module.exports = AgedBrieBuilder