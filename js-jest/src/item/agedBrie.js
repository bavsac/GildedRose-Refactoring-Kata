
const { AgedBrieUpdateStrategy, UpdatableItem} = require('../strategy')

class AgedBrie extends UpdatableItem {
    constructor( sellIn, quality){
        super( 'Aged Brie',sellIn, quality, new AgedBrieUpdateStrategy() )
    }
}


module.exports = AgedBrie;