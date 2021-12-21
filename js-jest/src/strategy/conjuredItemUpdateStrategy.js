const UpdateStrategy = require('./updateStrategy')

class ConjuredItemUpdateStrategy  extends UpdateStrategy {
    update( {sellIn, quality} ) {

        sellIn -= 1;
        quality -=2; 
        return {sellIn, quality} ;
    }
}

module.exports = ConjuredItemUpdateStrategy