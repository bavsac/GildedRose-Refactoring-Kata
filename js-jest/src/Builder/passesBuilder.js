const BackstagePasses = require('../item/passes')

class BackstagePassesBuilder{
    constructor(){
        this.name = "Backstage passes to a TAFKAL80ETC concert";
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
        return new BackstagePasses( this.sellIn, this.quality)
    }
}

module.exports = BackstagePassesBuilder