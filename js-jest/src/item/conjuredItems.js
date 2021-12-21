const { ConjuredItemUpdateStrategy, UpdatableItem} = require('../strategy')


class ConjuredItem extends UpdatableItem{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality, new ConjuredItemUpdateStrategy())
    }
    
}

module.exports = ConjuredItem;