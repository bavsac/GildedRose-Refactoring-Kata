const UpdateStrategy = require('../strategy/updateStrategy')

class AgedBrieUpdateStrategy  extends UpdateStrategy {
    update( {sellIn, quality} ) {

        sellIn -=1;
        quality =Math.min(50, (sellIn > 0 ? quality + 1 : quality + 2)); 
        return {sellIn, quality} ;
    }
}

module.exports = AgedBrieUpdateStrategy