const Item = require('../item/item')

class UpdatableItem extends Item {
    constructor(name, sellIn, quality, updateStrategy){
        super( name,sellIn, quality)
        this.updateStrategy = updateStrategy
      
    }
    update(){
        const {sellIn, quality} =  this.updateStrategy.update({sellIn:this.sellIn, quality:this.quality})
        
        this.sellIn = sellIn
        this.quality = quality
          
    }
}

module.exports = UpdatableItem