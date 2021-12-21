
const { BackstagePassesUpdateStrategy, UpdatableItem} = require('../strategy')


class BackstagePasses extends UpdatableItem{
    constructor( sellIn, quality){
        super( 'Backstage passes to a TAFKAL80ETC concert',sellIn, quality, new BackstagePassesUpdateStrategy() )
    }
    
}


module.exports = BackstagePasses;