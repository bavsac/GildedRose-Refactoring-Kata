const Legendary = require('../item/legendary')

class LegendaryBuilder{
    constructor(){
        this.name = "";
        this.sellIn = 0;
        this.quality = 0;
      }
    withName(name){
        this.name =name
        return this
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
        return new Legendary(this.name, this.sellIn,this.quality)
    }
}

module.exports = LegendaryBuilder